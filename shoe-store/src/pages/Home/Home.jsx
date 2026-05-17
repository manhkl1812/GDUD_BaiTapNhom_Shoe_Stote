import React from 'react'
import MainLayout from '../../components/layout/MainLayout'
import HomeHero from '../../components/section/home/HomeHero'
import ProductGrid from '../../components/product/ProductGrid/ProductGrid.jsx'
import products from '../../data/products.js'
import CategoryBannerSection from '../../components/section/home/CategoryBannerSection.jsx'
import HeaderLine from '../../components/common/HeaderLine.jsx'

export default function Home() {
  return (
    <>
        <MainLayout props={
            <div>
                <HomeHero />
                <HeaderLine title="GIÁ ƯU ĐÃI"/>
                <ProductGrid list={products} quantity={8}/>
                <HeaderLine title="SẢN PHẨM BÁN CHẠY"/>
                <ProductGrid list={products} quantity={8}/>
                <HeaderLine title="DANH MỤC MUA HÀNG"/>
                <CategoryBannerSection />
            </div>
        }/>
    </>
  )
}