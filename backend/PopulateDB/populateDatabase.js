const Product = require('../Models/productSchema');
const product = require('../Routes/productDetails');

const populateDatabase = async () => {
  try {
    const productDetails =[ {
      productName: 'Wool Kashmiri Design Jamawar Shawl',
      productDescription: 'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
      productImage: 'https://cdn.shopify.com/s/files/1/0519/4573/4305/files/A_1-826184_600x_600x_8ec35153-8899-4f78-b034-e3db19d50353_1024x1024.jpg?v=1687323031',
      productPrice: 900,
      productFeatures: [
        'Dry Clean Only. Size: 40 X 80 Inches',
        'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
        'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
        'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
        'Flawlessly and Elegantly paired with formal and casual wear.',
      ],
      productColors: ['red', 'blue'],
    },
      {
        productName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        productDescription: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        productImage: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        productPrice: 109.95,
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Mens Cotton Jacket",
        productPrice: 55.99,
        "productDescription": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        productImage: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Mens Casual Slim Fit",
        productPrice: 15.99,
        "productDescription": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product productDescription.",
        productImage: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        productPrice: 695,
        "productDescription": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        productImage: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Solid Gold Petite Micropave ",
        productPrice: 168,
        "productDescription": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        productImage: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "White Gold Plated Princess",
        productPrice: 9.99,
        "productDescription": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        productImage: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        productPrice: 10.99,
        "productDescription": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        productImage: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        productPrice: 64,
        "productDescription": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        productImage: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        productPrice: 109,
        "productDescription": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        productImage: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        productPrice: 109,
        "productDescription": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        productImage: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        productPrice: 114,
        "productDescription": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        productImage: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        productPrice: 599,
        "productDescription": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        productImage: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        productPrice: 999.99,
        "productDescription": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        productImage: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        productPrice: 56.99,
        "productDescription": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        productImage: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        productPrice: 29.95,
        "productDescription": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        productImage: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        productPrice: 39.99,
        "productDescription": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        productImage: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        productPrice: 9.85,
        "productDescription": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        productImage: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Opna Women's Short Sleeve Moisture",
        productPrice: 7.95,
        "productDescription": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        productImage: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "DANVOUY Womens T Shirt Casual Cotton Short",
        productPrice: 12.99,
        "productDescription": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        productImage: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      },
      {
        productName: "Mens Casual Premium Slim Fit T-Shirts ",
        productPrice: 22.3,
        "productDescription": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        productImage: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        productFeatures: [
          'Dry Clean Only. Size: 40 X 80 Inches',
          'This ostentatious Kashmiri jamawar shawl is adorned with intricate and meticulous paisley and floral designs tracing their roots to centuries-old Kashmiri heritage.',
          'These luxurious shawls form the perfect gift for your loved ones as they are specifically engineered to drape naturally over your casual or formal wear. While our shawls are designed to stand out in every season, the wool content in these shawls will keep you warm while guaranteeing the softness of natural woollen fibres.',
          'Pair these shawls with your favourite suits, Kurtis, coats, jackets, or experiment with anything in your wardrobe. Ideal for both home and outdoor use.',
          'Flawlessly and Elegantly paired with formal and casual wear.',
        ],
        productColors: ['red', 'blue']
      }
    ]
    


    productDetails.map((currentProduct)=>{
      const product = new Product(currentProduct);
      product.save();
    })



    // const product = new Product(productDetails);
    // await product.save();
    console.log('Product saved successfully');
  } catch (error) {
    console.error('Error populating database:', error);
  }
};

module.exports = populateDatabase;
