import { Cart } from '../models/index.js';

export const getCart = async (req, res) => {
  try {
    const userId = req.userId;
    let cart = await Cart.findOne({ where: { userId } });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [],
      });
    }

    res.json({ cart });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity, size, color } = req.body;

    let cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [],
      });
    }

    const items = cart.items || [];
    const existingItem = items.find(
      (item) => item.productId === productId && item.size === size && item.color === color
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.push({
        productId,
        quantity,
        size,
        color,
      });
    }

    await cart.update({ items });
    res.json({
      message: 'Item added to cart',
      cart,
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, size, color } = req.body;

    const cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const items = (cart.items || []).filter(
      (item) => !(item.productId === productId && item.size === size && item.color === color)
    );

    await cart.update({ items });
    res.json({
      message: 'Item removed from cart',
      cart,
    });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity, size, color } = req.body;

    const cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const items = cart.items || [];
    const item = items.find(
      (item) => item.productId === productId && item.size === size && item.color === color
    );

    if (item) {
      item.quantity = quantity;
    }

    await cart.update({ items });
    res.json({
      message: 'Cart item updated',
      cart,
    });
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = req.userId;
    const cart = await Cart.findOne({ where: { userId } });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    await cart.update({ items: [] });
    res.json({
      message: 'Cart cleared',
      cart,
    });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
