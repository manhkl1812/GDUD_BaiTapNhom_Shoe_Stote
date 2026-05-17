const products = [
  {
    id: "prod_001",
    name: "Giày Thể Thao Biti's Hunter EZ Lift Nam",
    slug: "giay-the-thao-bitis-hunter-ez-lift-nam",
    brand: "Biti's",
    categoryId: ["cat_sneaker_nam"],
    price: 1295000,
    originalPrice: 1295000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339712/Cam_suqmki.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339718/Cam_l3i5bg.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339724/Cam_gjlebx.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339731/Cam_btrbmu.jpg"
    ],
    variants: [{
      color: ["Trắng"],
      sizes: [
        { size: "39", stock: 4 },
        { size: "40", stock: 3 },
        { size: "41", stock: 3 },
        { size: "42", stock: 2 },
        { size: "43", stock: 1 },
        { size: "44", stock: 1 }
      ]
    }],
    shortDescription: "Giày thể thao năng động, đế êm nhẹ.",
    description: "Thiết kế hiện đại với upper lưới thoáng khí, đế êm giúp di chuyển linh hoạt cả ngày.",
    specifications: {
      material: "Mesh",
      sole: "EVA + Rubber",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Nam"
    },
    rating: 4.3,
    reviewCount: 25,
    sold: 140,
    views: 1100,
  },
  
  {
    id: "prod_002",
    name: "Giày Chạy Bộ Puma Deviate Nitro 4 Nam",
    slug: "giay-chay-bo-puma-deviate-nitro-4-nam",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],
    price: 4200000,
    originalPrice: 4200000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_ayixxo.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_3_greuxh.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_ayixxo.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_1_wdjwrj.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_5_s2iebn.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_4_bqcjrb.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773887518/Giy_Chy_B_Deviate_NITRO_4_Nam_Alpine_Snow-Warm_Whi_2_p4qbvo.jpg"
    ],
    variants: [{
      color: ["Trắng", "Xám", "Xanh", "Hồng"],
      sizes: [
        { size: "39", stock: 6 },
        { size: "40", stock: 8 },
        { size: "41", stock: 5 },
        { size: "42", stock: 3 },
        { size: "43", stock: 6 },
        { size: "44", stock: 8 },
        { size: "45", stock: 5 },
        { size: "46", stock: 3 }
      ]
    }],
    shortDescription: "Giày chạy bộ hiệu suất cao, nhẹ và hoàn trả năng lượng tốt.",
    description: "Deviate 4 không chỉ nhanh – mà là quá nhanh. Nhẹ hơn 15g so với phiên bản trước, đôi giày hiệu suất cao này được tạo ra cho những runner không chấp nhận chậm lại. Trang bị công nghệ bọt đệm NITROFOAM™ cải tiến giúp hoàn trả năng lượng tốt hơn, thân giày bằng vải lưới kỹ thuật thoáng khí và tấm PWRPLATE bằng carbon tổng hợp, Deviate 4 mang đến lợi thế cần thiết để bạn bứt phá trong các buổi chạy giữ nhịp hoặc chinh phục ngày thi đấu. Chạy xa hơn. Chạy nhanh hơn.",
    specifications: {
      material: "Vải lưới kỹ thuật (engineered mesh)",
      sole: "Cao su + NITROFOAM™",
      fit: "Regular fit",
      style: "Running",
      gender: "Nam"
    },
    rating: 4.6,
    reviewCount: 58,
    sold: 320,
    views: 2400,
  },
  {
    id: "prod_003",
    name: "Giày Thể Thao Puma H-Street OG Unisex",
    slug: "giay-the-thao-puma-h-street-og-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],
    price: 2300000,
    originalPrice: 2300000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889144/Giy_Th_Thao_H-Street_OG_Unisex_PUMA_Black-PUMA_Sil_ubpmrx.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889144/Giy_Th_Thao_H-Street_OG_Unisex_PUMA_Black-PUMA_Sil_ubpmrx.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889145/Giy_Th_Thao_H-Street_OG_Unisex_PUMA_Black-PUMA_Sil_1_mwfiwf.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889146/Giy_Th_Thao_H-Street_OG_Unisex_PUMA_Black-PUMA_Sil_2_kuxpqb.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889133/Swatch_for_Safe_Lake-PUMA_Silver_qaxmo1.png",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889132/Swatch_for_PUMA_Red-PUMA_Silver_jraysk.png",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889132/Swatch_for_Poison_Pink-PUMA_Silver_ljnem1.png",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773889132/Swatch_for_Fizzy_Green-PUMA_Silver_tkrpf7.png"
    ],
    variants: [{
      color: ["Đen", "Xanh lá", "Đỏ", "Hồng", "Xanh dương"],
      sizes: [
        { size: "35", stock: 6 },
        { size: "36", stock: 8 },
        { size: "37", stock: 5 },
        { size: "38", stock: 3 },
        { size: "39", stock: 6 },
        { size: "40", stock: 8 },
        { size: "41", stock: 5 },
        { size: "42", stock: 3 },
        { size: "43", stock: 6 },
        { size: "44", stock: 8 },
        { size: "45", stock: 5 },
        { size: "46", stock: 3 }
      ]
    }],
    shortDescription: "Giày sneaker unisex phong cách retro, nhẹ và dễ phối đồ.",
    description: "Puma H-Street OG là phiên bản tái hiện từ dòng giày chạy bộ cổ điển những năm 2000, mang đậm tinh thần thể thao kết hợp thời trang đường phố. Thiết kế low-profile cùng upper siêu nhẹ giúp di chuyển linh hoạt, trong khi form dáng gọn gàng tạo nên phong cách retro hiện đại, phù hợp cho cả nam và nữ.",
    specifications: {
      material: "Vải dệt + da tổng hợp",
      sole: "Cao su",
      fit: "Slim fit",
      style: "Lifestyle",
      gender: "Unisex"
    },
    rating: 4.4,
    reviewCount: 36,
    sold: 180,
    views: 1500,
  },
  {
    id: "prod_004",
    name: "Giày Thể Thao Puma x Guizio H-Street Unisex",
    slug: "puma-x-guizio-h-street-sneakers-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],
    price: 3000000,
    originalPrice: 3000000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890314/PUMA_x_GUIZIO_H-Street_Sneakers_Unisex_Warm_White__mxxeqf.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890313/PUMA_x_GUIZIO_H-Street_Sneakers_Unisex_Warm_White__1_paube8.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890313/PUMA_x_GUIZIO_H-Street_Sneakers_Unisex_Warm_White__2_ekltin.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890311/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_pkmz7p.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890310/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_1_ofqgxi.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890309/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_2_e7feah.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890309/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_4_ic6etn.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773890309/PUMA-x-GUIZIO-H-Street-Sneakers-Unisex_5_x84gvh.avif"
    ],
    variants: [{
      color: ["Trắng"],
      sizes: [
        { size: "36", stock: 8 },
        { size: "37", stock: 5 },
        { size: "38", stock: 3 },
        { size: "39", stock: 6 },
        { size: "40", stock: 8 },
        { size: "41", stock: 5 },
        { size: "42", stock: 3 }
      ]
    }],
    shortDescription: "Giày sneaker collab thời trang, thiết kế retro hiện đại và nổi bật.",
    description: "Puma x Guizio H-Street là phiên bản hợp tác mang đậm dấu ấn thời trang, kết hợp tinh thần thể thao cổ điển với phong cách contemporary. Thiết kế low-profile đặc trưng, form dáng gọn nhẹ cùng phối màu tinh tế giúp đôi giày dễ dàng trở thành điểm nhấn trong outfit hàng ngày. Phù hợp cho cả nam và nữ yêu thích phong cách streetwear cao cấp.",
    specifications: {
      material: "Vải dệt cao cấp + da tổng hợp",
      sole: "Cao su",
      fit: "Slim fit",
      style: "Lifestyle",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 24,
    sold: 95,
    views: 1100,
  },
  {
    id: "prod_005",
    name: "Giày Thể Thao Puma H-Street Premium Unisex",
    slug: "giay-the-thao-puma-h-street-premium-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],
    price: 2500000,
    originalPrice: 3000000,
    discountPercent: 17,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891014/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_4_x2rjcp.avif",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891018/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_5_gtzcxh.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891016/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_o0cyk6.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891015/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_3_n7zuxl.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891015/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_2_ma05bt.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891014/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_1_hvsh7u.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891014/Gi%C3%A0y-Th%E1%BB%83-Thao-H-Street-Premium-Unisex_4_x2rjcp.avif"
    ],
    variants: [{
      color: ["Nâu đỏ"],
      sizes: [
        { size: "36", stock: 8 },
        { size: "37", stock: 5 },
        { size: "38", stock: 3 },
        { size: "39", stock: 6 },
        { size: "40", stock: 8 },
        { size: "41", stock: 5 },
        { size: "42", stock: 3 },
        { size: "43", stock: 6 },
        { size: "44", stock: 8 }
      ]
    }],
    shortDescription: "Giày sneaker unisex phiên bản premium, thiết kế retro và chất liệu cao cấp.",
    description: "Puma H-Street Premium là phiên bản nâng cấp của dòng H-Street cổ điển, lấy cảm hứng từ giày chạy bộ thập niên 2000. Thiết kế low-profile đặc trưng kết hợp cùng chất liệu cao cấp mang lại cảm giác nhẹ, thoải mái và thời trang. Phù hợp cho phong cách streetwear hiện đại, dễ phối đồ trong nhiều hoàn cảnh.",
    specifications: {
      material: "Vải dệt cao cấp + da tổng hợp",
      sole: "Cao su",
      fit: "Slim fit",
      style: "Lifestyle",
      gender: "Unisex"
    },
    rating: 4.5,
    reviewCount: 31,
    sold: 140,
    views: 1300,
  },
  {
    id: "prod_006",
    name: "Giày Thể Thao Puma Talon Biology Unisex",
    slug: "giay-the-thao-puma-talon-biology-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],
    price: 3700000,
    originalPrice: 3700000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891364/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_6_nfe9ew.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891364/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_3_jfurog.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891365/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_ixqu8f.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891366/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_5_bozerw.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891367/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_4_k9iasp.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891368/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_2_uo2ivc.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891370/Giy_th_thao_Talon_Biology_Unisex_Gray_Skies-PUMA_B_1_ln4wv1.jpg"
    ],
    variants: [{
      color: ["Đen"],
      sizes: [
        { size: "39", stock: 6 },
        { size: "40", stock: 8 },
        { size: "41", stock: 5 },
        { size: "42", stock: 3 },
        { size: "43", stock: 6 },
        { size: "44", stock: 8 },
        { size: "45", stock: 5 },
        { size: "46", stock: 3 }
      ]
    }],
    shortDescription: "Giày sneaker unisex phong cách Y2K, thiết kế táo bạo và hiện đại.",
    description: "Puma Talon Biology là mẫu giày mang đậm tinh thần Y2K với thiết kế hướng đến tương lai. Phần upper liền khối kết hợp cùng các lớp overlay độc đáo tạo nên vẻ ngoài mạnh mẽ và khác biệt. Lấy cảm hứng từ dòng giày thể thao đầu những năm 2000, sản phẩm mang lại sự cân bằng giữa hiệu năng và phong cách streetwear hiện đại.",
    specifications: {
      material: "Vải tổng hợp + TPU",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },
    rating: 4.3,
    reviewCount: 22,
    sold: 85,
    views: 980,
  },
  {
    id: "prod_007",
    name: "Giày Bóng Rổ Puma MB.05 Mist Unisex",
    slug: "giay-bong-ro-puma-mb-05-mist-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],
    price: 3150000,
    originalPrice: 3500000,
    discountPercent: 10,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891701/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_epbwh2.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891703/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_2_ss45yk.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891702/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_1_jhcyeb.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891699/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_3_uwl10v.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891697/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_4_z33jys.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891696/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_5_wbnc5g.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891696/Giy_Bng_R_MB05_Mist_Unisex_PUMA_White-Gold_large-V_6_v9myrf.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773891698/Gi%C3%A0y-B%C3%B3ng-R%E1%BB%95-MB_dxxtfa.avif"
    ],
    variants: [{
      color: ["Trắng"],
      sizes: [
        { size: "39", stock: 6 },
        { size: "40", stock: 8 },
        { size: "41", stock: 5 },
        { size: "42", stock: 3 },
        { size: "43", stock: 6 },
        { size: "44", stock: 8 },
        { size: "45", stock: 5 },
        { size: "46", stock: 3 },
        { size: "47", stock: 6 }
      ]
    }],
    shortDescription: "Giày bóng rổ hiệu suất cao, thiết kế signature của LaMelo Ball.",
    description: "Puma MB.05 Mist là mẫu giày signature của LaMelo Ball, được thiết kế cho lối chơi tốc độ và linh hoạt trên sân. Form giày ôm chân kết hợp cùng bộ đệm êm và độ bám cao giúp tối ưu hiệu suất thi đấu. Thiết kế nổi bật với chi tiết \"One of One\", họa tiết đặc trưng và phối màu trắng tinh tế, thể hiện phong cách riêng biệt của Melo.",
    specifications: {
      material: "Vải dệt kỹ thuật + TPU",
      sole: "Cao su hiệu năng cao",
      fit: "Regular fit",
      style: "Basketball",
      gender: "Unisex"
    },
    rating: 4.7,
    reviewCount: 64,
    sold: 280,
    views: 2600,
  },
  {
    id: "prod_008",
    name: "Giày Thể Thao Puma x Aston Martin F1 RS-Surge Unisex",
    slug: "giay-the-thao-puma-x-aston-martin-aramco-f1-team-rs-surge-unisex",
    brand: "Puma",
    categoryId: ["cat_sneaker_nam"],
    price: 2800000,
    originalPrice: 3300000,
    discountPercent: 17,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892161/Giy_th_thao_c_thp_PUMA_x_ASTON_MARTIN_ARAMCO_F1_TE_ehoj1a.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892156/Gi%C3%A0y-th%E1%BB%83-thao-c%E1%BB%95-th%E1%BA%A5p-PUMA-x-ASTON-MARTIN-ARAMCO-F1_-TEAM-RS-Surge-Unisex_2_eofspv.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892157/Gi%C3%A0y-th%E1%BB%83-thao-c%E1%BB%95-th%E1%BA%A5p-PUMA-x-ASTON-MARTIN-ARAMCO-F1_-TEAM-RS-Surge-Unisex_nsrlah.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892159/Giy_th_thao_c_thp_PUMA_x_ASTON_MARTIN_ARAMCO_F1_TE_1_aiyvlc.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892160/Giy_th_thao_c_thp_PUMA_x_ASTON_MARTIN_ARAMCO_F1_TE_2_isbdx9.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892156/Gi%C3%A0y-th%E1%BB%83-thao-c%E1%BB%95-th%E1%BA%A5p-PUMA-x-ASTON-MARTIN-ARAMCO-F1_-TEAM-RS-Surge-Unisex_1_cqxze9.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892161/Giy_th_thao_c_thp_PUMA_x_ASTON_MARTIN_ARAMCO_F1_TE_ehoj1a.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892163/Gi%C3%A0y-th%E1%BB%83-thao-c%E1%BB%95-th%E1%BA%A5p-PUMA-x-ASTON-MARTIN-ARAMCO-F1_-TEAM-RS-Surge-Unisex_3_rbcrd5.avif"
    ],
    variants: [{
      color: ["Đen"],
      sizes: [
        { size: "39", stock: 6 },
        { size: "40", stock: 8 },
        { size: "41", stock: 5 },
        { size: "42", stock: 3 },
        { size: "43", stock: 6 },
        { size: "44", stock: 8 },
        { size: "45", stock: 5 },
        { size: "46", stock: 3 }
      ]
    }],
    shortDescription: "Giày sneaker collab F1, thiết kế thể thao hiện đại và đậm chất tốc độ.",
    description: "Puma x Aston Martin F1 RS-Surge là mẫu giày lấy cảm hứng từ đường đua, kết hợp giữa hiệu năng thể thao và phong cách lifestyle hiện đại. Thiết kế mạnh mẽ, form dáng năng động cùng các chi tiết đặc trưng từ đội đua Aston Martin mang lại vẻ ngoài nổi bật. Phù hợp cho những ai yêu thích tốc độ và phong cách thể thao cao cấp.",
    specifications: {
      material: "Vải dệt + da tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Collab",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 28,
    sold: 120,
    views: 1400,
  },
  {
    id: "prod_009",
    name: "Giày Thể Thao Puma Speedcat Venus Nữ",
    slug: "giay-the-thao-speedcat-venus-nu",
    brand: "Puma",
    categoryId: ["cat_sneaker_nu"],
    price: 3200000,
    originalPrice: 3500000,
    discountPercent: 9,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892507/Giy_Th_Thao_Speedcat_Venus_N_Chocolate_Brown_large_2_wymhtg.jpg",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892508/Giy_Th_Thao_Speedcat_Venus_N_Chocolate_Brown_large_wqf2lv.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892505/Giy_Th_Thao_Speedcat_Venus_N_Chocolate_Brown_large_1_mq9tgx.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892504/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_2_lgo88x.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892502/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_tmffuv.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892501/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_1_hwudup.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892499/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_4_kcccaq.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892499/Gi%C3%A0y-Th%E1%BB%83-Thao-Speedcat-Venus-N%E1%BB%AF_3_wdvbgh.avif"
    ],
    variants: [{
      color: ["Đỏ"],
      sizes: [
        { size: "35", stock: 6 },
        { size: "36", stock: 8 },
        { size: "37", stock: 5 },
        { size: "38", stock: 3 },
        { size: "39", stock: 6 }
      ]
    }],
    shortDescription: "Giày sneaker nữ phong cách motorsport, thiết kế low-profile cổ điển.",
    description: "Puma Speedcat Venus là phiên bản nữ của dòng Speedcat mang cảm hứng từ đường đua. Thiết kế low-profile ôm chân cùng form dáng gọn nhẹ giúp di chuyển linh hoạt và dễ phối đồ. Các chi tiết đặc trưng từ giày đua kết hợp cùng phong cách hiện đại tạo nên một đôi sneaker vừa thể thao vừa thời trang.",
    specifications: {
      material: "Da lộn + vải dệt",
      sole: "Cao su",
      fit: "Slim fit",
      style: "Lifestyle",
      gender: "Nữ"
    },
    rating: 4.5,
    reviewCount: 41,
    sold: 190,
    views: 1750,
  },
  {
    id: "prod_010",
    name: "Giày Chạy Bộ Puma MagMax Nitro 2 Nữ",
    slug: "giay-chay-bo-puma-magmax-nitro-2-nu",
    brand: "Puma",
    categoryId: ["cat_sneaker_nu"],
    price: 4800000,
    originalPrice: 5800000,
    discountPercent: 17,
    thumbnail: "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892827/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_1_kkvt5v.avif",
    images: [
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892836/Giy_chy_b_MagMax_NITRO_2_cho_n_Warm_White-PUMA_Bla_bpmtkc.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892835/Giy_chy_b_MagMax_NITRO_2_cho_n_Warm_White-PUMA_Bla_2_ttg6jc.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892831/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_s2fyo0.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892830/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_2_asb62r.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892827/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_1_kkvt5v.avif",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892833/Giy_chy_b_MagMax_NITRO_2_cho_n_Warm_White-PUMA_Bla_1_tqgpxn.jpg",
      "https://res.cloudinary.com/dii0ugduv/image/upload/v1773892827/Gi%C3%A0y-ch%E1%BA%A1y-b%E1%BB%99-MagMax-NITRO_-2-cho-n%E1%BB%AF_3_wqwjkr.avif"
    ],
    variants: [{
      color: ["Trắng"],
      sizes: [
        { size: "35", stock: 6 },
        { size: "36", stock: 8 },
        { size: "37", stock: 5 },
        { size: "38", stock: 3 },
        { size: "39", stock: 6 },
        { size: "40", stock: 8 }
      ]
    }],
    shortDescription: "Giày chạy bộ nữ đệm tối đa, nhẹ và hoàn trả năng lượng cao.",
    description: "Puma MagMax Nitro 2 là dòng giày chạy bộ max-cushion được thiết kế cho sự êm ái và hiệu suất tối đa. Công nghệ NITROFOAM™ mang lại độ nảy và hoàn trả năng lượng vượt trội, giúp mỗi bước chạy trở nên nhẹ nhàng hơn. Upper vải lưới thoáng khí kết hợp cùng thiết kế ôm chân tạo sự thoải mái trong suốt quá trình vận động.",
    specifications: {
      material: "Vải lưới kỹ thuật (engineered mesh)",
      sole: "Cao su + NITROFOAM™",
      fit: "Regular fit",
      style: "Running",
      gender: "Nữ"
    },
    rating: 4.5,
    reviewCount: 41,
    sold: 190,
    views: 1750,
  },
  {
    id: "prod_011",
    name: "Giày Chạy Bộ Nike Vomero 18 Nữ",
    slug: "giay-chay-bo-nike-vomero-18-nu",
    brand: "Nike",
    categoryId: ["cat_sneaker_nu"],
    price: 2555000,
    originalPrice: 4250000,
    discountPercent: 40,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338095/Nike_Vomero_18_-_White_Electric_Green_qpsth6.png",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338105/Nike_Vomero_18_-_White_Electric_Green_otjkf2.png",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338100/Nike_Vomero_18_-_White_Electric_Green_ntjo7u.png",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338113/Nike_Vomero_18_-_White_Electric_Green_hfplhu.png"
    ],
    variants: [{
      color: ["Trắng / Xanh điện"],
      sizes: [{ size: "36", stock: 8 }]
    }],
    shortDescription: "Giày chạy bộ nữ đệm êm tối đa với ZoomX và ReactX.",
    description: "Nike Vomero 18 mang lại trải nghiệm chạy êm ái với công nghệ ZoomX kết hợp ReactX, phù hợp cho chạy bộ hằng ngày và quãng đường dài.",
    specifications: {
      material: "Engineered mesh",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Running",
      gender: "Nữ"
    },
    rating: 4.8,
    reviewCount: 36,
    sold: 185,
    views: 1420,
  },
  {
    id: "prod_012",
    name: "Giày Bóng Rổ Nike Giannis Freak 6 EP Unisex",
    slug: "giay-bong-ro-nike-giannis-freak-6-ep",
    brand: "Nike",
    categoryId: ["cat_sneaker_nam"],
    price: 1725000,
    originalPrice: 3830000,
    discountPercent: 55,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771336053/Nike_Giannis_Freak_6_EP_-_White_sxaz4w.png",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771336082/Nike_Giannis_Freak_6_EP_-_White_fdxzjc.png",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771336113/Nike_Giannis_Freak_6_EP_-_White_d24kna.png",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771336125/Nike_Giannis_Freak_6_EP_-_White_jgdrp1.png"
    ],
    variants: [{
      color: ["Đen / Đỏ"],
      sizes: [
        { size: "40", stock: 5 },
        { size: "41", stock: 6 },
        { size: "42", stock: 4 }
      ]
    }],
    shortDescription: "Giày bóng rổ hiệu suất cao, hỗ trợ chuyển hướng nhanh.",
    description: "Nike Giannis Freak 6 EP được thiết kế cho tốc độ và sự linh hoạt, giúp kiểm soát tốt trong các pha bứt tốc.",
    specifications: {
      material: "Engineered mesh",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Basketball",
      gender: "Unisex"
    },
    rating: 4.8,
    reviewCount: 96,
    sold: 530,
    views: 3420,
  },
  {
    id: "prod_013",
    name: "Giày Chạy Bộ Nike Pegasus 41 Nam",
    slug: "giay-chay-bo-nike-pegasus-41-nam",
    brand: "Nike",
    categoryId: ["cat_sneaker_nam"],
    price: 1915000,
    originalPrice: 3830000,
    discountPercent: 50,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771337130/Nike_Pegasus_41_-_Gunsmoke_ckhr12.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337125/Nike_Pegasus_41_-_Gunsmoke_gm3df4.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337139/Nike_Pegasus_41_-_Gunsmoke_cranqf.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337143/Nike_Pegasus_41_-_Gunsmoke_krblqc.jpg"
    ],
    variants: [{
      color: ["Xám"],
      sizes: [
        { size: "44.5", stock: 6 },
        { size: "45", stock: 4 }
      ]
    }],
    shortDescription: "Giày chạy bộ nam nhẹ, phản hồi tốt với Air Zoom.",
    description: "Nike Pegasus 41 mang lại độ êm và phản hồi năng lượng tốt, phù hợp cho chạy bộ hằng ngày.",
    specifications: {
      material: "Engineered mesh",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Running",
      gender: "Nam"
    },
    rating: 4.7,
    reviewCount: 128,
    sold: 860,
    views: 5420,
  },
  {
    id: "prod_014",
    name: "Giày Bóng Rổ Nike Sabrina 3 Unisex",
    slug: "giay-bong-ro-nike-sabrina-3",
    brand: "Nike",
    categoryId: ["cat_sneaker_nam"],
    price: 2300000,
    originalPrice: 3830000,
    discountPercent: 40,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771337279/Nike_Sabrina_3_-_Mint_Foam_qisu6n.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337292/Nike_Sabrina_3_-_Mint_Foam_tej4o1.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337286/Nike_Sabrina_3_-_Mint_Foam_cysmhn.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771337298/Nike_Sabrina_3_-_Mint_Foam_mmhe05.jpg"
    ],
    variants: [{
      color: ["Trắng / Xanh Mint"],
      sizes: [
        { size: "40", stock: 6 },
        { size: "41", stock: 7 }
      ]
    }],
    shortDescription: "Giày bóng rổ nhẹ, ôm chân và linh hoạt.",
    description: "Nike Sabrina 3 được thiết kế cho lối chơi tốc độ cao và khả năng kiểm soát bóng tối ưu.",
    specifications: {
      material: "Engineered mesh",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Basketball",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 74,
    sold: 420,
    views: 3100,
  },
  {
    id: "prod_015",
    name: "Giày Thể Thao Adidas Samba OG Unisex",
    slug: "giay-the-thao-adidas-samba-og",
    brand: "Adidas",
    categoryId: ["cat_sneaker_nam"],
    price: 1360000,
    originalPrice: 1700000,
    discountPercent: 20,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338752/adidas_Samba_OG_Junior_-_Cloud_White_Ash_Blue_brcghy.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338757/adidas_Samba_OG_Junior_-_Cloud_White_Ash_Blue_ncjowq.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338763/adidas_Samba_OG_Junior_-_Cloud_White_Ash_Blue_aahvw9.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338771/adidas_Samba_OG_Junior_-_Cloud_White_Ash_Blue_l1q5yb.jpg"
    ],
    variants: [{
      color: ["Trắng / Xanh dương"],
      sizes: [{ size: "36", stock: 10 }]
    }],
    shortDescription: "Giày sneaker cổ điển với thiết kế Samba iconic.",
    description: "Adidas Samba OG mang phong cách retro với đế gum đặc trưng và form dáng dễ phối đồ.",
    specifications: {
      material: "Leather",
      sole: "Gum rubber",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 52,
    sold: 260,
    views: 2100,
  },
  {
    id: "prod_016",
    name: "Giày Thể Thao Adidas Japan Unisex",
    slug: "giay-the-thao-adidas-japan-red",
    brand: "Adidas",
    categoryId: ["cat_sneaker_nam"],
    price: 1740000,
    originalPrice: 2900000,
    discountPercent: 40,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338780/adidas_Japan_-_Red_kfv0yu.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338786/adidas_Japan_-_Red_twal3e.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338793/adidas_Japan_-_Red_lkmlxf.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338800/adidas_Japan_-_Red_ipzoc4.jpg"
    ],
    variants: [{
      color: ["Đỏ"],
      sizes: [
        { size: "38.5", stock: 5 },
        { size: "41", stock: 6 }
      ]
    }],
    shortDescription: "Giày sneaker retro phong cách Nhật Bản cổ điển.",
    description: "Adidas Japan mang thiết kế vintage từ thập niên 60, phù hợp phong cách streetwear hiện đại.",
    specifications: {
      material: "Leather",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },
    rating: 4.5,
    reviewCount: 40,
    sold: 210,
    views: 1800,
  },
  {
    id: "prod_017",
    name: "Giày Thể Thao Adidas x Bad Bunny Gazelle Indoor Unisex",
    slug: "giay-the-thao-adidas-bad-bunny-gazelle-indoor",
    brand: "Adidas",
    categoryId: ["cat_sneaker_nam"],
    price: 1980000,
    originalPrice: 3600000,
    discountPercent: 45,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338806/Bad_Bunny_x_adidas_Gazelle_Indoor_-_Cabo_Rojo_mejacx.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338812/Bad_Bunny_x_adidas_Gazelle_Indoor_-_Cabo_Rojo_umlgdx.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338818/Bad_Bunny_x_adidas_Gazelle_Indoor_-_Cabo_Rojo_vwewmo.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338823/Bad_Bunny_x_adidas_Gazelle_Indoor_-_Cabo_Rojo_mbkqra.jpg"
    ],
    variants: [{
      color: ["Hồng"],
      sizes: [{ size: "36.5", stock: 4 }]
    }],
    shortDescription: "Giày collab Bad Bunny với thiết kế độc đáo và nổi bật.",
    description: "Adidas Gazelle Indoor phiên bản Bad Bunny mang phong cách thời trang cá tính, chất liệu cao cấp.",
    specifications: {
      material: "Leather + textile",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Collab",
      gender: "Unisex"
    },
    rating: 4.7,
    reviewCount: 58,
    sold: 240,
    views: 2000,
  },
  {
    id: "prod_018",
    name: "Giày Thể Thao Adidas Japan Wales Bonner Unisex",
    slug: "giay-the-thao-adidas-japan-wales-bonner",
    brand: "Adidas",
    categoryId: ["cat_sneaker_nam"],
    price: 2600000,
    originalPrice: 2600000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338830/adidas_Japan_Wales_Bonner_-_Light_Purple_hk3cao.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338837/adidas_Japan_Wales_Bonner_-_Light_Purple_zeild9.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338845/adidas_Japan_Wales_Bonner_-_Light_Purple_yd0f5i.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338852/adidas_Japan_Wales_Bonner_-_Light_Purple_g71wji.jpg"
    ],
    variants: [{
      color: ["Tím"],
      sizes: [{ size: "43", stock: 3 }]
    }],
    shortDescription: "Giày collab cao cấp với thiết kế tinh tế.",
    description: "Adidas Japan Wales Bonner kết hợp phong cách cổ điển và thời trang cao cấp.",
    specifications: {
      material: "Leather",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Collab",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 22,
    sold: 90,
    views: 900,
  },
  {
    id: "prod_019",
    name: "Giày Thể Thao Adidas Blanc Unisex",
    slug: "giay-the-thao-adidas-blanc-brown",
    brand: "Adidas",
    categoryId: ["cat_sneaker_nam"],
    price: 1500000,
    originalPrice: 1500000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771338858/adidas_Blanc_-_Brown_nut3fj.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338864/adidas_Blanc_-_Brown_j8jt3v.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338871/adidas_Blanc_-_Brown_q8aoxm.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771338878/adidas_Blanc_-_Brown_iubn0m.jpg"
    ],
    variants: [{
      color: ["Nâu"],
      sizes: [{ size: "36", stock: 8 }]
    }],
    shortDescription: "Giày sneaker tối giản, dễ phối đồ.",
    description: "Adidas Blanc mang phong cách basic với chất liệu da cao cấp.",
    specifications: {
      material: "Leather",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },
    rating: 4.4,
    reviewCount: 30,
    sold: 150,
    views: 1200,
  },

{
    id: "prod_020",
    name: "Giày Thể Thao Biti's Hunter Core Đen",
    slug: "giay-the-thao-bitis-hunter-core-den",
    brand: "Biti's",
    categoryId: ["cat_sneaker_nam"],
    price: 890000,
    originalPrice: 1090000,
    discountPercent: 18,
    thumbnail: "https://res.cloudinary.com/shoe-store-ptgdud/image/upload/v1770641740/bitis-ez-lift-xanh-duong_opycff.jpg",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ],
    variants: [{
      color: ["Trắng"],
      sizes: [
        { size: "40", stock: 6 },
        { size: "41", stock: 8 },
        { size: "42", stock: 5 },
        { size: "43", stock: 3 }
      ]
    }],
    shortDescription: "Giày sneaker nam phong cách thể thao, dễ phối đồ.",
    description: "Biti's Hunter Core mang phong cách năng động, đế êm nhẹ, phù hợp đi học và đi chơi.",
    specifications: {
      material: "Vải tổng hợp",
      sole: "Cao su",
      fit: "Regular fit",
      style: "Sneaker",
      gender: "Nam"
    },
    rating: 4.5,
    reviewCount: 42,
    sold: 210,
    views: 1850,
  },

  {
    id: "prod_021",
    name: "Giày Thể Thao Biti's Hunter Evo Đen Nam",
    slug: "giay-the-thao-bitis-hunter-evo-den",
    brand: "Biti's",
    categoryId: ["cat_sneaker_nam"],
    price: 825000,
    originalPrice: 825000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339740/en_ynwu30.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339745/en_lkygqm.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339752/en_of36nu.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339757/en_zy4l57.jpg"
    ],
    variants: [{
      color: ["Đen"],
      sizes: [
        { size: "40", stock: 6 },
        { size: "41", stock: 5 },
        { size: "42", stock: 5 },
        { size: "43", stock: 4 },
        { size: "44", stock: 3 },
        { size: "45", stock: 3 }
      ]
    }],
    shortDescription: "Giày sneaker basic dễ phối.",
    description: "Thiết kế đơn giản, form cổ điển phù hợp sử dụng hàng ngày.",
    specifications: {
      material: "Synthetic leather",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Nam"
    },
    rating: 4.2,
    reviewCount: 18,
    sold: 120,
    views: 900,
  },
  {
    id: "prod_022",
    name: "Giày Thể Thao Biti's Hunter Evo Kem Nam",
    slug: "giay-the-thao-bitis-hunter-evo-kem",
    brand: "Biti's",
    categoryId: ["cat_sneaker_nam"],
    price: 825000,
    originalPrice: 825000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339763/Kem_i5qmgs.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339768/Kem_lf05bf.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339774/Kem_ucn2cj.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339779/Kem_e9makz.jpg"
    ],
    variants: [{
      color: ["Kem"],
      sizes: [
        { size: "40", stock: 2 },
        { size: "41", stock: 2 },
        { size: "42", stock: 2 },
        { size: "43", stock: 1 },
        { size: "44", stock: 1 },
        { size: "45", stock: 1 }
      ]
    }],
    shortDescription: "Giày sneaker màu kem phong cách nhẹ nhàng.",
    description: "Phối màu kem nâu phù hợp phong cách casual và streetwear.",
    specifications: {
      material: "Synthetic leather",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Nam"
    },
    rating: 4.2,
    reviewCount: 15,
    sold: 90,
    views: 700,
  },
  {
    id: "prod_023",
    name: "Giày Thể Thao Biti's Hunter Street 2.0 Nam",
    slug: "giay-the-thao-bitis-hunter-street-2",
    brand: "Biti's",
    categoryId: ["cat_sneaker_nam"],
    price: 715000,
    originalPrice: 715000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339786/Xanh_Nht_f2dzzv.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339793/Xanh_Nht_wttjmj.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339800/Xanh_Nht_zmbwqw.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339811/Xanh_Nht_jbh2sd.jpg"
    ],
    variants: [{
      color: ["Xanh"],
      sizes: [
        { size: "39", stock: 1 },
        { size: "40", stock: 0 },
        { size: "41", stock: 0 },
        { size: "42", stock: 0 }
      ]
    }],
    shortDescription: "Giày streetwear trẻ trung.",
    description: "Thiết kế thấp cổ phù hợp phong cách năng động và di chuyển hằng ngày.",
    specifications: {
      material: "Canvas + synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Nam"
    },
    rating: 4.1,
    reviewCount: 12,
    sold: 60,
    views: 500,
  },
  {
    id: "prod_024",
    name: "Giày Thể Thao Biti's Hunter Litebound Nữ",
    slug: "giay-the-thao-bitis-hunter-litebound-nu",
    brand: "Biti's",
    categoryId: ["cat_sneaker_nu"],
    price: 1175000,
    originalPrice: 1175000,
    discountPercent: 0,
    thumbnail: "https://res.cloudinary.com/dezeregal/image/upload/v1771339816/Hng_zryhxb.jpg",
    images: [
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339824/Hng_azmbid.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339829/Hng_rdfbp2.jpg",
      "https://res.cloudinary.com/dezeregal/image/upload/v1771339835/Hng_zdiuv2.jpg"
    ],
    variants: [{
      color: ["Hồng"],
      sizes: [
        { size: "36", stock: 12 },
        { size: "37", stock: 11 },
        { size: "38", stock: 10 },
        { size: "39", stock: 11 }
      ]
    }],
    shortDescription: "Giày nữ nhẹ, êm và thoải mái.",
    description: "Thiết kế dành riêng cho nữ với đế Litebound đàn hồi và upper thoáng khí.",
    specifications: {
      material: "Knit fabric",
      sole: "EVA",
      fit: "Regular fit",
      style: "Running",
      gender: "Nữ"
    },
    rating: 4.4,
    reviewCount: 28,
    sold: 160,
    views: 1300,
  },
  {
    id: "prod_026",
    name: "Giày Thể Thao Balenciaga Runner Unisex",
    slug: "giay-the-thao-balenciaga-runner-white-black",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 18500000,
    originalPrice: 22000000,
    discountPercent: 16,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner3_lnicej.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner4_iivfp2.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner1_pixxvo.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925869/runner2_y3yrep.jpg"
    ],
    variants: [{
      color: ["Trắng / Đen"],
      sizes: [{ size: "42", stock: 5 }]
    }],
    shortDescription: "Giày chunky cao cấp mang phong cách luxury streetwear.",
    description: "Balenciaga Runner sở hữu thiết kế hầm hố đặc trưng, kết hợp nhiều lớp vật liệu.",
    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.7,
    reviewCount: 32,
    sold: 120,
    views: 1400,
  },
  {
    id: "prod_027",
    name: "Giày Thể Thao Balenciaga Track 2 Unisex",
    slug: "giay-the-thao-balenciaga-track-2-grey",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 21000000,
    originalPrice: 25000000,
    discountPercent: 16,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track1_rkcmzo.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track2_snjgho.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track4_glsd5x.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773925990/track3_vx7qyh.jpg"
    ],
    variants: [{
      color: ["Xám"],
      sizes: [{ size: "41", stock: 6 }]
    }],
    shortDescription: "Giày luxury nhiều lớp với thiết kế phức tạp.",
    description: "Balenciaga Track 2 nổi bật với cấu trúc multi-layer.",
    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 28,
    sold: 100,
    views: 1200,
  },
  {
    id: "prod_028",
    name: "Giày Thể Thao Balenciaga Triple S Unisex",
    slug: "giay-the-thao-balenciaga-triple-s-black",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 19500000,
    originalPrice: 24000000,
    discountPercent: 18,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe2_opqsxf.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926103/trippe1_gm27xj.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe3_hh2ocn.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926104/trippe4_y1bp2o.jpg"
    ],
    variants: [{
      color: ["Đen"],
      sizes: [{ size: "43", stock: 4 }]
    }],
    shortDescription: "Triple S iconic với đế dày đặc trưng.",
    description: "Balenciaga Triple S là biểu tượng chunky sneaker.",
    specifications: {
      material: "Leather + mesh",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.8,
    reviewCount: 45,
    sold: 150,
    views: 1700,
  },
  {
    id: "prod_029",
    name: "Giày Thể Thao Balenciaga Speed Trainer Unisex",
    slug: "giay-the-thao-balenciaga-speed-trainer-black",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 17500000,
    originalPrice: 21000000,
    discountPercent: 17,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed1_jp0ozv.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed2_xftdgr.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926229/speed3_cltam8.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926230/speed4_kodzlk.jpg"
    ],
    variants: [{
      color: ["Đen"],
      sizes: [{ size: "42", stock: 5 }]
    }],
    shortDescription: "Giày sock-fit ôm chân, nhẹ và linh hoạt.",
    description: "Balenciaga Speed Trainer mang thiết kế dạng tất giúp ôm sát chân, tạo cảm giác thoải mái và hiện đại.",
    specifications: {
      material: "Knit",
      sole: "Rubber",
      fit: "Slim fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 30,
    sold: 110,
    views: 1300,
  },
  {
    id: "prod_030",
    name: "Giày Thể Thao Balenciaga Defender Unisex",
    slug: "giay-the-thao-balenciaga-defender-beige",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 22000000,
    originalPrice: 26000000,
    discountPercent: 15,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def1_x3mnuq.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def3_cxoqnj.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def2_va4cwe.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926317/def4_pii3ci.jpg"
    ],
    variants: [{
      color: ["Kem"],
      sizes: [{ size: "42", stock: 3 }]
    }],
    shortDescription: "Chunky sneaker mạnh mẽ với đế oversized.",
    description: "Balenciaga Defender nổi bật với thiết kế hầm hố, phù hợp phong cách streetwear cao cấp.",
    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.7,
    reviewCount: 20,
    sold: 80,
    views: 900,
  },
  {
    id: "prod_031",
    name: "Giày Thể Thao Balenciaga 3XL Unisex",
    slug: "giay-the-thao-balenciaga-3xl-white",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 23000000,
    originalPrice: 27000000,
    discountPercent: 15,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl3_sbqzwp.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl2_nqiifj.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926423/xl4_vjsh6d.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926422/xl1_f2djxt.jpg"
    ],
    variants: [{
      color: ["Trắng"],
      sizes: [{ size: "41", stock: 4 }]
    }],
    shortDescription: "Sneaker oversized với form cực lớn.",
    description: "Balenciaga 3XL mang phong cách thời trang cao cấp với thiết kế phóng đại độc đáo.",
    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Oversize fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 18,
    sold: 70,
    views: 800,
  },
  {
    id: "prod_032",
    name: "Giày Thể Thao Balenciaga Cargo Unisex",
    slug: "giay-the-thao-balenciaga-cargo-grey",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 20000000,
    originalPrice: 24000000,
    discountPercent: 16,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo1_fblqiq.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo2_vraqxb.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926518/cargo3_yhlqe6.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926522/cargo4_hkzggp.jpg"
    ],
    variants: [{
      color: ["Xám"],
      sizes: [{ size: "43", stock: 3 }]
    }],
    shortDescription: "Thiết kế futuristic độc đáo.",
    description: "Balenciaga Cargo mang phong cách hiện đại với form dáng khác biệt.",
    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.5,
    reviewCount: 16,
    sold: 60,
    views: 700,
  },
  {
    id: "prod_033",
    name: "Giày Thể Thao Balenciaga Paris Unisex",
    slug: "giay-the-thao-balenciaga-paris-white",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 15000000,
    originalPrice: 18000000,
    discountPercent: 16,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926627/paris1_qsnd9q.webp",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926627/paris2_zcomtw.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926628/paris3_pgnv7n.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926648/paris4_y5p823.jpg"
    ],
    variants: [{
      color: ["Trắng"],
      sizes: [{ size: "40", stock: 6 }]
    }],
    shortDescription: "Sneaker tối giản nhưng sang trọng.",
    description: "Balenciaga Paris mang phong cách cổ điển kết hợp chất liệu cao cấp.",
    specifications: {
      material: "Canvas",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.4,
    reviewCount: 22,
    sold: 100,
    views: 900,
  },
  {
    id: "prod_034",
    name: "Giày Thể Thao Balenciaga Track LED Unisex",
    slug: "giay-the-thao-balenciaga-track-led-black",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 26000000,
    originalPrice: 30000000,
    discountPercent: 13,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led2_tbmobp.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led1_cxplsa.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926738/led3_k1jnxe.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926739/led4_a1fjp2.jpg"
    ],
    variants: [{
      color: ["Đen"],
      sizes: [{ size: "42", stock: 2 }]
    }],
    shortDescription: "Phiên bản sneaker tích hợp LED độc đáo.",
    description: "Balenciaga Track LED mang phong cách công nghệ cao với thiết kế phát sáng.",
    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.8,
    reviewCount: 12,
    sold: 40,
    views: 600,
  },
  {
    id: "prod_035",
    name: "Giày Thể Thao Balenciaga Phantom Unisex",
    slug: "giay-the-thao-balenciaga-phantom-blue",
    brand: "Balenciaga",
    categoryId: ["cat_sneaker_nam"],
    price: 19000000,
    originalPrice: 23000000,
    discountPercent: 17,
    thumbnail: "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926823/ptom1_i9l3kc.jpg",
    images: [
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926825/ptom4_q7nqqv.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926824/ptom2_n0ctuz.jpg",
      "https://res.cloudinary.com/dnuhm9y9q/image/upload/v1773926825/ptom3_xic22e.jpg"
    ],
    variants: [{
      color: ["Xanh dương"],
      sizes: [{ size: "41", stock: 5 }]
    }],
    shortDescription: "Sneaker luxury hiện đại và nổi bật.",
    description: "Balenciaga Phantom mang thiết kế cao cấp phù hợp phong cách thời trang hiện đại.",
    specifications: {
      material: "Synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Luxury",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 14,
    sold: 55,
    views: 700,
  },
  {
    id: "prod_037",
    name: "Giày Thể Thao New Balance U9009HG Xám",
    slug: "giay-the-thao-new-balance-u9009hg-xam",
    brand: "New Balance",
    categoryId: ["cat_sneaker_nam"],
    price: 3199200,
    originalPrice: 3999000,
    discountPercent: 20,
    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773918474/z_92a367ec-74a6-459c-ba33-c6f538f9ae8d_jgiohz.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773918474/1_d0de8d46-d8c1-4163-a37d-35f6515ebd49_ngx4n6.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773918474/U9009HG_1_brocza.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773918474/U9009HG_rnlx4b.jpg"
    ],
    variants: [{
      color: ["Xám"],
      sizes: [
        { size: "39", stock: 6 },
        { size: "40", stock: 8 },
        { size: "40.5", stock: 10 },
        { size: "41", stock: 9 },
        { size: "42", stock: 7 },
        { size: "42.5", stock: 5 },
        { size: "43", stock: 4 }
      ]
    }],
    shortDescription: "Giày walking êm ái, ổn định.",
    description: "U900 là mẫu giày casual walking lấy cảm hứng từ running, mang lại sự thoải mái và ổn định.",
    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Walking",
      gender: "Unisex"
    },
    rating: 4.4,
    reviewCount: 42,
    sold: 168,
    views: 980,
  },
  {
    id: "prod_038",
    name: "Giày Thể Thao New Balance 530 Xám Bạc",
    slug: "giay-the-thao-new-balance-530-xam-bac",
    brand: "New Balance",
    categoryId: ["cat_sneaker_nam"],
    price: 2287200,
    originalPrice: 2859000,
    discountPercent: 20,
    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919098/z_60f0d309-34b8-4bfa-8e0a-f6f6387e8f36_bwko8d.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919098/U5307VI_1_f0moc7.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919097/1_8a1903c7-c19d-4371-8a16-d96f98a62c14_n9kvh1.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919097/U5307VI_bzf1pm.jpg"
    ],
    variants: [{
      color: ["Xám", "Bạc", "Trắng"],
      sizes: [
        { size: "40", stock: 6 },
        { size: "41", stock: 10 },
        { size: "42", stock: 12 },
        { size: "42.5", stock: 9 },
        { size: "43", stock: 7 },
        { size: "44", stock: 5 },
        { size: "44.5", stock: 4 }
      ]
    }],
    shortDescription: "Giày lifestyle retro 2000s.",
    description: "New Balance 530 mang phong cách retro 2000s, dễ phối đồ.",
    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Lifestyle",
      gender: "Unisex"
    },
    rating: 4.6,
    reviewCount: 74,
    sold: 320,
    views: 2100,
  },
  {
    id: "prod_039",
    name: "Giày Thể Thao New Balance U9005G9 Đen",
    slug: "giay-the-thao-new-balance-u9005g9-den",
    brand: "New Balance",
    categoryId: ["cat_sneaker_nam"],
    price: 2300000,
    originalPrice: 3830000,
    discountPercent: 40,
    thumbnail: "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919475/z_86ef0a04-077d-4103-9056-7b70687c0c9d_itfcft.jpg",
    images: [
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919475/U9005G9_1_q33jcv.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919476/U9005G9_eq1cv5.jpg",
      "https://res.cloudinary.com/dkileuc9d/image/upload/v1773919475/1_ab0333f2-de21-4ef5-a100-92afe9b27a7c_npjng4.jpg"
    ],
    variants: [{
      color: ["Đen"],
      sizes: [
        { size: "39", stock: 5 },
        { size: "40", stock: 7 },
        { size: "40.5", stock: 6 },
        { size: "41", stock: 8 },
        { size: "42", stock: 6 },
        { size: "42.5", stock: 4 },
        { size: "43", stock: 3 }
      ]
    }],
    shortDescription: "Giày walking nhẹ.",
    description: "Thiết kế nhẹ, thoáng khí, phù hợp đi lại hằng ngày.",
    specifications: {
      material: "Mesh + synthetic",
      sole: "Rubber",
      fit: "Regular fit",
      style: "Walking",
      gender: "Unisex"
    },
    rating: 4.3,
    reviewCount: 36,
    sold: 140,
    views: 920,
  }
];

export default products;