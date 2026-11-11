export interface MenuItem {
  id: string;
  name: string;
  marathiName: string;
  category: 'signature_misal' | 'snacks_sides' | 'cooling_drinks' | 'desserts';
  price: number;
  description: string;
  spiceLevel: 1 | 2 | 3; // 1 = Medium, 2 = Zanzanit (Kolhapuri Spicy), 3 = Fire Jhatka
  image: string;
  isPopular?: boolean;
  calories?: string;
  portion: string;
  prepTime: string;
}

export const RESTAURANT_INFO = {
  name: "Misal Master, Kolhapur",
  marathiName: "मिसळ मास्टर, कोल्हापूर",
  tagline: "The Authentic Taste of Kolhapur • Famous Matka Dum Misal",
  rating: 4.8,
  reviewCount: 2480,
  address: "National Highway (NH 48), Near Shetimal Prakriya Sangh HP Petrol Pump, Patilnagar, Toap, Kolhapur, Maharashtra 416122",
  googleMapsUrl: "https://maps.app.goo.gl/3zGDun84m1zg6XFk8",
  coordinates: {
    lat: 16.7994507,
    lng: 74.2845894,
  },
  phone: "+91 98220 54122",
  whatsapp: "+919822054122",
  openingTime: "07:00",
  closingTime: "22:30",
  openDaysText: "Mon - Sun: 7:00 AM – 10:30 PM",
  highway: "Pune - Bengaluru Highway (NH 48), Toap Toll Bypass Zone",
  highlights: [
    "Authentic Matka Dum Misal in Terracotta Pots",
    "Real Kolhapuri Lavangi Mirchi & Kanda Lasun Masala",
    "Express Highway Takeaway & Car Service",
    "Dedicated Car Parking & Clean Restrooms",
    "Fresh Hearth-Baked Ladi Pav & Chilled Solkadhi",
    "100% Pure Vegetarian Kitchen"
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "matka-dum-misal",
    name: "Special Matka Dum Misal",
    marathiName: "खास मटका दम मिसळ",
    category: "signature_misal",
    price: 110,
    description: "Our signature innovation: Sprouted matki usal slow-dummed in a rustic terracotta clay pot with aromatic Kolhapuri spice oil, crunchy farsan, chopped red onions, and hot butter pav.",
    spiceLevel: 2,
    image: "/src/assets/images/dish_matka_dum_misal_1794369003040.jpg",
    isPopular: true,
    calories: "440 kcal",
    portion: "Clay Matka Pot + 2 Pav + Extra Kat Vati",
    prepTime: "6-8 mins"
  },
  {
    id: "kolhapuri-jhatka-misal",
    name: "Kolhapuri Jhatka Misal",
    marathiName: "कोल्हापुरी झणझणीत झटका मिसळ",
    category: "signature_misal",
    price: 95,
    description: "Fiery, dark-red tarri rassa prepared with heirloom Sankeshwari and Lavangi dry chillies. Crisp farsan, sprouted dew beans, fresh coriander, lime, and 2 soft pavs.",
    spiceLevel: 3,
    image: "/src/assets/images/dish_kolhapuri_misal_thali_1794369003414.jpg",
    isPopular: true,
    calories: "410 kcal",
    portion: "Brass Thali + 2 Pav + Tarri Vati",
    prepTime: "5 mins"
  },
  {
    id: "traditional-kolhapuri-misal",
    name: "Classic Kolhapuri Misal",
    marathiName: "पारंपरिक कोल्हापुरी मिसळ",
    category: "signature_misal",
    price: 90,
    description: "Balanced medium-spicy Kat rassa, slow-simmered sprouted matki, double layer farsan, diced red onions, and fresh fluffy ladi pav. Perfect for first-time visitors.",
    spiceLevel: 2,
    image: "/src/assets/images/hero_misal_master_1794369001019.jpg",
    isPopular: true,
    calories: "390 kcal",
    portion: "Standard Plate + 2 Pav + Kat Vati",
    prepTime: "5 mins"
  },
  {
    id: "dahi-misal",
    name: "Kolhapuri Dahi Misal",
    marathiName: "दही मिसळ (थंडगार दही)",
    category: "signature_misal",
    price: 105,
    description: "Authentic Kolhapuri misal layered with chilled thick fresh curd to balance the fiery rassa heat. Topped with sweet-spiced relish and crisp farsan.",
    spiceLevel: 1,
    image: "/src/assets/images/hero_misal_master_1794369001019.jpg",
    calories: "460 kcal",
    portion: "Bowl + Dahi Cup + 2 Pav",
    prepTime: "6 mins"
  },
  {
    id: "jain-upvas-misal",
    name: "Jain / No-Onion-Garlic Misal",
    marathiName: "जैन स्पेशल मिसळ",
    category: "signature_misal",
    price: 95,
    description: "Prepared specially without onion and garlic using roasted cumin, ginger, sprouted moong, hing, and pure Kolhapuri spices.",
    spiceLevel: 1,
    image: "/src/assets/images/dish_kolhapuri_misal_thali_1794369003414.jpg",
    calories: "380 kcal",
    portion: "Plate + 2 Pav + Mild Kat",
    prepTime: "7 mins"
  },
  {
    id: "extra-butter-pav",
    name: "Desi Butter Pav (Jodi - 2 Pcs)",
    marathiName: "लोणी पाव (जोडी)",
    category: "snacks_sides",
    price: 25,
    description: "Pillow-soft bakery fresh ladi pav toasted on tawa with liberal Amul butter.",
    spiceLevel: 1,
    image: "/src/assets/images/dish_kolhapuri_misal_thali_1794369003414.jpg",
    calories: "210 kcal",
    portion: "2 Pieces",
    prepTime: "2 mins"
  },
  {
    id: "extra-ladi-pav",
    name: "Regular Ladi Pav (Jodi - 2 Pcs)",
    marathiName: "साधा लादी पाव (जोडी)",
    category: "snacks_sides",
    price: 15,
    description: "Freshly baked soft Maharashtrian ladi pav pair.",
    spiceLevel: 1,
    image: "/src/assets/images/hero_misal_master_1794369001019.jpg",
    calories: "160 kcal",
    portion: "2 Pieces",
    prepTime: "1 min"
  },
  {
    id: "extra-rassa-tarri",
    name: "Extra Rassa (Kat / Sample Vati)",
    marathiName: "एक्स्ट्रा रस्सा / कट वाटी",
    category: "snacks_sides",
    price: 25,
    description: "A piping hot bowl of our signature spiced Kolhapuri tarri broth for serious rassa lovers.",
    spiceLevel: 3,
    image: "/src/assets/images/dish_matka_dum_misal_1794369003040.jpg",
    calories: "70 kcal",
    portion: "1 Large Vati (180ml)",
    prepTime: "2 mins"
  },
  {
    id: "extra-kolhapuri-farsan",
    name: "Extra Kolhapuri Farsan Bowl",
    marathiName: "एक्स्ट्रा स्पेशल फरसाण वाटी",
    category: "snacks_sides",
    price: 30,
    description: "Crunchy homemade Kolhapuri mixture with roasted peanuts, spiced gathiya, and crispy sev.",
    spiceLevel: 2,
    image: "/src/assets/images/dish_kolhapuri_misal_thali_1794369003414.jpg",
    calories: "180 kcal",
    portion: "1 Bowl (100g)",
    prepTime: "1 min"
  },
  {
    id: "kanda-bhaji",
    name: "Kolhapuri Kanda Bhaji (Crispy Pakoda)",
    marathiName: "गरमागरम खेकडा कांदा भजी",
    category: "snacks_sides",
    price: 60,
    description: "Crisp golden onion fritters seasoned with ajwain, coriander, and green chillies, served with fried salted chillies.",
    spiceLevel: 2,
    image: "/src/assets/images/dish_kolhapuri_misal_thali_1794369003414.jpg",
    isPopular: true,
    calories: "280 kcal",
    portion: "1 Plate (150g)",
    prepTime: "8 mins"
  },
  {
    id: "authentic-solkadhi",
    name: "Authentic Chilled Solkadhi",
    marathiName: "थंडगार सोलकढी (कोकम व नारळ)",
    category: "cooling_drinks",
    price: 45,
    description: "Traditional coastal digestive drink made from freshly squeezed coconut milk, pure Malvan kokum agal, mild green chilli, and garlic temper. The ultimate coolant after fiery misal.",
    spiceLevel: 1,
    image: "/src/assets/images/beverage_solkadhi_taak_1794369003403.jpg",
    isPopular: true,
    calories: "110 kcal",
    portion: "Terracotta Cup (200ml)",
    prepTime: "2 mins"
  },
  {
    id: "masala-taak",
    name: "Kolhapuri Spiced Masala Taak",
    marathiName: "कोल्हापुरी मसाला ताक (मठ्ठा)",
    category: "cooling_drinks",
    price: 30,
    description: "Slow-churned fresh village buttermilk tempered with roasted jeera (cumin), black salt, fresh mint leaves, and finely chopped coriander.",
    spiceLevel: 1,
    image: "/src/assets/images/beverage_solkadhi_taak_1794369003403.jpg",
    isPopular: true,
    calories: "65 kcal",
    portion: "Brass Glass (250ml)",
    prepTime: "2 mins"
  },
  {
    id: "kadak-masala-chai",
    name: "Highway Kadak Special Tea",
    marathiName: "हायवे कडक स्पेशल चहा",
    category: "cooling_drinks",
    price: 20,
    description: "Aromatic ginger and cardamom infused milk tea, brewed strong on charcoal flame.",
    spiceLevel: 1,
    image: "/src/assets/images/beverage_solkadhi_taak_1794369003403.jpg",
    calories: "90 kcal",
    portion: "1 Cup",
    prepTime: "3 mins"
  },
  {
    id: "desi-ghee-gulab-jamun",
    name: "Desi Ghee Gulab Jamun (2 Pcs)",
    marathiName: "शुद्ध तुपातील गुलाबजाम (२ नग)",
    category: "desserts",
    price: 50,
    description: "Melt-in-mouth mawa gulab jamuns fried in pure desi ghee and soaked in cardamom saffron sugar syrup.",
    spiceLevel: 1,
    image: "/src/assets/images/hero_misal_master_1794369001019.jpg",
    isPopular: true,
    calories: "290 kcal",
    portion: "2 Pieces",
    prepTime: "2 mins"
  },
  {
    id: "kolhapuri-basundi",
    name: "Special Kolhapuri Basundi",
    marathiName: "स्पेशल बासुंदी (बदाम-पिस्ता)",
    category: "desserts",
    price: 65,
    description: "Slow-thickened whole milk dessert infused with saffron, cardamom, slivered pistachios and almonds.",
    spiceLevel: 1,
    image: "/src/assets/images/dish_matka_dum_misal_1794369003040.jpg",
    calories: "260 kcal",
    portion: "1 Cup (120ml)",
    prepTime: "2 mins"
  }
];

export const HIGHWAY_MILESTONES = [
  { location: "Kolhapur Mahalaxmi Temple", distance: "12.4 km", time: "22 mins", route: "Via Old Pune-Bangalore Rd & NH48" },
  { location: "Kolhapur Central Bus Stand (CBS)", distance: "10.8 km", time: "18 mins", route: "Direct NH48 Northbound" },
  { location: "Kolhapur Railway Station (CSMT)", distance: "11.2 km", time: "19 mins", route: "Via Station Road & Shiroli Naka" },
  { location: "Sangli City Center", distance: "38.5 km", time: "48 mins", route: "Via Sangli-Kolhapur Hwy / SH153" },
  { location: "Karad Highway Junction", distance: "58.0 km", time: "55 mins", route: "Direct NH48 Southbound" },
  { location: "Satara / Pune Entry", distance: "115 / 215 km", time: "1.8h / 3.5h", route: "AH47 / NH48 Corridor" }
];

export const TESTIMONIALS = [
  {
    id: "1",
    author: "Swapnil Deshmukh",
    city: "Kolhapur",
    rating: 5,
    date: "November 2026",
    comment: "The Matka Dum Misal here is on another level. The clay pot locks in the smoky aroma and the red Kat has that authentic Kolhapuri kick without hurting your throat. Butter pav was crisp and hot!",
    dishTried: "Special Matka Dum Misal"
  },
  {
    id: "2",
    author: "Pooja Patil & Family",
    city: "Pune",
    rating: 5,
    date: "October 2026",
    comment: "We stopped here while driving down from Pune to Goa on NH48. Ample car parking right by the highway, extremely quick service, and the Solkadhi is the most refreshing accompaniment to the spicy Misal.",
    dishTried: "Kolhapuri Jhatka Misal + Solkadhi"
  },
  {
    id: "3",
    author: "Vikram Raje",
    city: "Satara",
    rating: 5,
    date: "October 2026",
    comment: "Best highway misal on the Pune-Bengaluru stretch. The Kat (tarri) was rich and aromatic with roasted coconut notes. Clean washrooms and great highway pitstop for bikers and road-trippers.",
    dishTried: "Classic Kolhapuri Misal"
  }
];

export const MISAL_ANATOMY = [
  {
    title: "1. The Sprouted Matki Usal (मोड आलेली मटकी)",
    desc: "100% naturally sprouted moth beans (dew gram) cooked tender in a turmeric-ginger temper. High in protein and delicate in bite."
  },
  {
    title: "2. The Legendary Kat / Tarri (झणझणीत कट)",
    desc: "The lifeblood of Kolhapuri Misal. A fiery red, slow-simmered aromatic broth loaded with whole Kolhapuri Lavangi chillies, dry roasted coconut, ginger-garlic, and traditional Kanda-Lasun masala."
  },
  {
    title: "3. Special Kolhapuri Farsan (खमंग फरसाण)",
    desc: "Coarse spiced gram flour savoury blend designed to remain crisp when drenched in the boiling hot rassa broth."
  },
  {
    title: "4. The Raw Garnish (कांदा, कोथिंबीर आणि लिंबू)",
    desc: "Finely diced native pungent red onions, freshly chopped coriander, and a juicy wedge of local lime to cut through the fiery heat."
  },
  {
    title: "5. Hearth-Baked Ladi Pav (ताजा लादी पाव)",
    desc: "Fluffy, golden, pillow-soft bread rolls toasted with fresh country butter to soak every drop of the spiced Kat."
  },
  {
    title: "6. The Soothing Antidote (सोलकढी / ताक)",
    desc: "Creamy kokum coconut Solkadhi or roasted-cumin Masala Taak to cool the palate and aid digestion."
  }
];
