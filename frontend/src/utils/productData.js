const products = [
  {
    id: 1,
    title: "Organic Vegetables",
    description:
      "A variety of fresh, organic vegetables directly from the farm.",
    price: 3.99,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E=",
  },
  {
    id: 2,
    title: "Freshly Washed Veggies",
    description: "Clean and fresh vegetables ready for cooking.",
    price: 5.99,
    rating: 4.5,
    image:
      "https://media.istockphoto.com/id/183416989/photo/washing-vegetables.jpg?s=612x612&w=0&k=20&c=M8n6DFs12wPryk3t6DATJpQZ_e9u9dYlF_74sVDqy5U=",
  },
  {
    id: 3,
    title: "Farm Market Produce",
    description: "Fresh produce sourced from local farms and markets.",
    price: 6.49,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/935302158/photo/fresh-vegetables-at-a-market-in-india.jpg?s=612x612&w=0&k=20&c=3Pgxxcgv6so68Geax-Txa5Qvb2a5MIKR1ZH_Pq0x3f8=",
  },
  {
    id: 4,
    title: "Mixed Veggie Basket",
    description: "A perfect mix of vegetables for your daily cooking.",
    price: 4.99,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/1214565321/photo/mix-veg-sabji-or-sabzi.jpg?s=612x612&w=0&k=20&c=s1WWma5v0raBXyykCn0YiOwIE05Gk3JKvIbIG1JOyss=",
  },
  {
    id: 5,
    title: "Healthy Salad Bowl",
    description: "Freshly made, nutrient-rich salad with organic vegetables.",
    price: 8.99,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/491377819/photo/smiling-woman-with-kitchen-apron-and-eating-salad.jpg?s=612x612&w=0&k=20&c=cRIWsys4fVKtnN-clUQZBA6cVAuzrQZbZDe1j4JiQL0=",
  },
  {
    id: 6,
    title: "Fruit and Veggie Market",
    description: "An assortment of fresh fruits and vegetables.",
    price: 7.89,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/188081154/photo/fruit-market-with-various-colorful-fresh-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=ULTr8MB_lt5ZNAE7_ykEG4F0KuDikISvOiPqqc19k64=",
  },
  {
    id: 7,
    title: "Garden-Fresh Produce",
    description: "Organic fruits and vegetables straight from the garden.",
    price: 9.49,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/1280856062/photo/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden.jpg?s=612x612&w=0&k=20&c=KoF5Ue-g3wO3vXPgLw9e2Qzf498Yow7WGXMSCNz7O60=",
  },
  {
    id: 8,
    title: "Fresh Cauliflower",
    description: "Crisp, organic cauliflower perfect for any recipe.",
    price: 2.99,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/186828790/photo/cauliflower-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=oLL9OeCwhHolL-MqXb3CZEkL0NyE483_vEqm3Tj0Lzo=",
  },
  {
    id: 9,
    title: "Colorful Fruit Mix",
    description: "A rainbow assortment of fresh fruits to boost your diet.",
    price: 11.99,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/641809790/photo/fresh-colorful-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=_uhMbnZ6h10dbu--7lfazAlyeMVcW3Cz7FCaLsTXCsM=",
  },
  {
    id: 10,
    title: "Seasonal Veggie Box",
    description: "A curated box of seasonal vegetables handpicked from farms.",
    price: 14.99,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/1524823226/photo/colorful-raw-fruits-and-vegetables-varied-vegan-food-vivid-rainbow-arrangement.webp?a=1&b=1&s=612x612&w=0&k=20&c=9hGA8exwJfDRlnS7inY0Z_nwmpRm9JgK5OwOw79JAGA=",
  },
  {
    id: 11,
    title: "Traditional Bitter Gourd",
    description:
      "Green and organic bitter gourd, known for its health benefits.",
    price: 3.59,
    rating: 4.5,
    image:
      "https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM=",
  },
  {
    id: 12,
    title: "Indian Vegetable Mix",
    description: "A combination of fresh vegetables, great for Indian curries.",
    price: 6.79,
    rating: 4.8,
    image:
      "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg=",
  },
  {
    id: 13,
    title: "Hearty Avocados",
    description: "Rich and creamy organic avocados, perfect for salads.",
    price: 9.99,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/2162394061/photo/avocados-in-air.webp?a=1&b=1&s=612x612&w=0&k=20&c=ROy1Tm8ZnEipRgCcTInQzCsB51D8Vi4CSVCBWuog2i0=",
  },
  {
    id: 14,
    title: "Organic Herbs Pack",
    description: "A mix of flavorful organic herbs for seasoning your meals.",
    price: 5.99,
    rating: 4.9,
    image:
      "https://media.istockphoto.com/id/472998516/photo/varanasi-market.jpg?s=612x612&w=0&k=20&c=bVWSpxdjBXP3oZpTd2dwzFVZeBQeR8ZCPD3SE_7-Ftg=",
  },
  {
    id: 15,
    title: "Natural Veggie Platter",
    description: "A collection of freshly harvested vegetables.",
    price: 7.49,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM=",
  },
  {
    id: 16,
    title: "Natural Lemon Pack",
    description: "Fresh and juicy organic lemons perfect for making lemonade.",
    price: 2.49,
    rating: 4.6,
    image:
      "https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E=",
  },
  {
    id: 17,
    title: "Spicy Chili Bundle",
    description: "Organic red and green chilies for adding heat to your meals.",
    price: 3.49,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/472402096/photo/top-view-of-green-bitter-gourds-in-the-basket.jpg?s=612x612&w=0&k=20&c=n7Ua0o7X4Qe_FSfl38ufHIPslxofgkyNpa2Z2NXmBfM=",
  },
];

export default products;
