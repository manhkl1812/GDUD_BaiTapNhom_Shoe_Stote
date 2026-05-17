import { Product } from '../models/index.js';
import { Op } from 'sequelize';

export const getAllProducts = async (req, res) => {
  try {
    const { category, gender, search, page = 1, limit = 10 } = req.query;
    const where = {};

    if (category) where.category = category;
    if (gender) where.gender = gender;
    if (search) {
      where[Op.or] = [
        { name: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } },
      ];
    }

    const offset = (page - 1) * limit;
    const { count, rows } = await Product.findAndCountAll({
      where,
      offset,
      limit: parseInt(limit),
      order: [['createdAt', 'DESC']],
    });

    res.json({
      products: rows,
      total: count,
      page: parseInt(page),
      limit: parseInt(limit),
      pages: Math.ceil(count / limit),
    });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ product });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, gender, size, color, image, stock } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      gender,
      size: size || [],
      color: color || [],
      image,
      stock: stock || 0,
    });

    res.status(201).json({
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, gender, size, color, image, stock } = req.body;

    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.update({
      name: name || product.name,
      description: description || product.description,
      price: price || product.price,
      category: category || product.category,
      gender: gender || product.gender,
      size: size !== undefined ? size : product.size,
      color: color !== undefined ? color : product.color,
      image: image || product.image,
      stock: stock !== undefined ? stock : product.stock,
    });

    res.json({
      message: 'Product updated successfully',
      product,
    });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
