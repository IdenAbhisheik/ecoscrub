
export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  images: string[];
  category: string;
  material: string;
  ecoTags: string[];
  rating: number;
  reviews: number;
  featured: boolean;
  isNew: boolean;
  stock: number;
  keyBenefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  usageTips: string[];
}

export const products: Product[] = [
  {
    id: "coconut-ridge-scrubber",
    name: "Coconut + Ridge Gourd Body Scrubber",
    price: 149,
    shortDescription: "Dual-textured natural scrubber. Great for deep exfoliation and massage.",
    longDescription: "Our premium dual-textured body scrubber combines the exfoliating power of coconut fiber with the gentle cleansing properties of ridge gourd (luffa). The coconut side provides deep exfoliation to remove dead skin cells, while the ridge gourd side offers a softer massage-like experience. This combination makes it perfect for all skin types and provides a spa-like experience at home. Handcrafted by local artisans using sustainable farming practices, this scrubber is completely biodegradable and compostable after use.",
    images: [
      "https://media-hosting.imagekit.io/c3d4173b3a304a05/WhatsApp%20Image%202025-04-24%20at%2018.20.48_14d9df5c.jpg?Expires=1840107083&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Z7Nt6TRbYoKg8uQK6g2-bV8eQrQmdecjf-zg9USXAoiumnyh5SrafV3kKCLOS~9FEHQ8dsQ3dKMax6QQI9o42EiNlPv3PpzNhaUj-iRixdMSebgGqeN9GyaN~NHYa4WBV2C25qdEJt-7ZGBSdANALyondBtj~6sXjEeTOYBl6B70zSOedivtgQQaVXDpCftjSFUl6FsiH-8Zh6~ibpxCKBvPG-wzDVjqL2kQek8KA6~7lh~M3utGieeG-NXbEpG~2tLpMy1IFDyepNs0ddQ1eJYGKOWYTvuzz94WNszV1kQHLiqdTeMr5wt4I8~I1FYhpO3ewE-OeibYISq7Bo4gJg__",
      "https://media-hosting.imagekit.io/0e987c4ecc6c481a/WhatsApp%20Image%202025-04-24%20at%2018.27.29_e78646a8.jpg?Expires=1840107483&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yqLeCQkHYdFF4OIZzp7IY4xTCP4JSiM87e~d5kMnJn76twqLJ0Gm150KFVCKdqhg8iyfKvpoZeYpj4BdAeancdLQHEeq56LEVyD0GI-gHVfHxIKo-Ph7TK57PQMmvvbRDNqoPxw4a~k7e7XDL6s84YMGeHvdgLbUZ37paP6J3oGWAo992LZGko7b9tyypwx0~oPBQjdjfYOArWAX4Lsn5A0agQ0B9BSwonBZJw~odxgx1JjnNhowcJbQBTWpN6fsw8A~-XTCODXLjdobOfrKd7OtlxHDLHjCYE-1aBdizIbsVzJ1CVzMGgFKKpGPT-bD194GNJFkpULLivHLxVroDw__",
    ],
    category: "Body Care",
    material: "Coconut Fiber, Ridge Gourd",
    ecoTags: ["Biodegradable", "Plastic-Free", "Sustainable", "Handcrafted"],
    rating: 4.8,
    reviews: 126,
    featured: true,
    isNew: false,
    stock: 45,
    keyBenefits: [
      {
        icon: "sparkles",
        title: "Deep Exfoliation",
        description: "Removes dead skin cells and improves circulation"
      },
      {
        icon: "timer",
        title: "Long Lasting",
        description: "Lasts 30+ uses with proper care"
      },
      {
        icon: "skin",
        title: "Skin-Safe",
        description: "Gentle enough for daily use"
      },
      {
        icon: "recycle",
        title: "Compostable",
        description: "100% biodegradable after use"
      }
    ],
    usageTips: [
      "Soak in warm water for 1-2 minutes before use",
      "Use with your favorite soap or body wash",
      "Gently scrub in circular motions",
      "Rinse thoroughly after use and hang to dry",
      "Replace every 4-6 weeks depending on usage"
    ]
  },
  {
    id: "ridge-gourd-scrubber",
    name: "Ridge Gourd (Luffa) Body Scrubber",
    price: 119,
    shortDescription: "Softens in water. For gentle everyday exfoliation.",
    longDescription: "Our Ridge Gourd (Luffa) Body Scrubber is nature's perfect exfoliator. Grown without pesticides on small family farms, these natural luffa scrubbers soften when wet for a gentle yet effective cleansing experience. The natural texture helps remove dead skin cells while improving blood circulation, leaving your skin refreshed and glowing. Each scrubber is carefully harvested, cleaned, and prepared by hand to ensure the highest quality. Unlike synthetic alternatives, these scrubbers contain zero plastic and are completely compostable after their useful life.",
    images: [
      "https://media-hosting.imagekit.io/31550bf3c3904dd7/loofah.webp?Expires=1840105274&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pUFCSayqIvPKuvkhDI-dl7Ol3qxm6pmEPIYbGBLt9xXUzZ1nSI6G0lF~VN0xwqea85603TUHtuiHJ4EwmosMwqh0G-bBoLBKzQna~IugsBBSveLiTUxqkoeCzTy9d7op7t7lz4zzAdv2qFdOjbMmlN9kazWonAz~fLDzjqlNAEJKoSEpbmDYAoQ2p6J6AUb5T0gZtERYPwiy03YCtxK-LEP8DBXxYPwglQCMf392YoUd~VWfyfagEV-4XISXRzRTPmsiyXulywvQ8JKGHMKXDYHHGayxzhrGb~CGNrFmiuuqRaXjV8zBY4HazEZozr0pOMYsJ3vB3kgWFp9yb3zNvA__",
      "https://media-hosting.imagekit.io/3543ef0a2ecb488e/images%20(1).jpeg?Expires=1840106850&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=3C3oIBIFX2OYMGOYH7AGMROxoea5weujkuf3wiktcisASy~acWOhpMNml5h21dP32jNxLRFA-OVQLvjfYu9Hg1MBZ7f9OiFSDWUcyXrZUtXb4ydXtaVh3Pf8CTyju1nqz3Hc6IBBgcHzwsP2l9EwnW9H9Xz7P45zrkVINJx91EwBaCTpD8A19tw0ePvHOQrF58OamaFGwUtUa99640GNPG-h48kCLWQXXnrxUooNwxLXKHy1Y2XJyexPZq~eWyDwBMlwUp08Js8RrzzZLWODlu7n6ONi3qlRPJaAej5LQtg8Q4NezlxACaWZfmFDjOWpr0TaFCmDeMGdxpR1q1hckA__",
    ],
    category: "Body Care",
    material: "Ridge Gourd (Luffa)",
    ecoTags: ["Biodegradable", "Plastic-Free", "Ethically Farmed"],
    rating: 4.6,
    reviews: 98,
    featured: true,
    isNew: false,
    stock: 65,
    keyBenefits: [
      {
        icon: "feather",
        title: "Gentle Cleansing",
        description: "Soft enough for sensitive skin"
      },
      {
        icon: "spa",
        title: "Natural Texture",
        description: "Perfect for everyday use"
      },
      {
        icon: "wind",
        title: "Quick-Drying",
        description: "Resists mold and mildew"
      },
      {
        icon: "leaf",
        title: "Ethically Farmed",
        description: "Supports sustainable agriculture"
      }
    ],
    usageTips: [
      "Soak in warm water until soft before first use",
      "Apply soap directly to the scrubber",
      "Gently massage skin in circular motions",
      "Rinse well and hang to dry between uses",
      "Replace when fibers begin to break down (typically 4-8 weeks)"
    ]
  },
  {
    id: "coconut-dish-scrubber",
    name: "Coconut Dish Scrubber",
    price: 99,
    shortDescription: "Tough on stains, safe on cookware.",
    longDescription: "Our Coconut Dish Scrubber is the perfect eco-friendly alternative to plastic scouring pads. Made from 100% natural coconut coir fiber, these scrubbers are naturally antibacterial and tough enough to remove stubborn food residue without scratching your cookware. The stiff coconut fibers are bound together using natural rubber from sustainably harvested rubber trees, making this product completely free from synthetic materials. Durable and long-lasting, these scrubbers will help you reduce waste while keeping your kitchen sparkling clean. When they've reached the end of their useful life, simply toss them in your compost bin.",
    images: [
      "https://media-hosting.imagekit.io/8e2a5f9f81364f45/images.jpeg?Expires=1840105993&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fMCeCHxPC~XYSjMYNMecM3e4x4eslN7JSUDId4X16ZAdkjimGaOAuABpSvWA55jD~d6rKLc1rBXjqLJP~kON6gXG~7JKFd5ox-okjXSiespDATBiJ7v0IyDVTNc8yNcUAEovkZPnxj2QvSAHo6B3BS4rZ9NnokpKLQ3aG~ADLg7B6upptCZM30ZOuvWjEI4wypPnsnKSalf2W4SU-a2tQRya9vF1XeqetlugghmN~DgGT9fpujJpbCyC6vq7-wbqmn3Um0uYJiCk94x8bAF0--xD~lG68f~bY2GG1EG8y3Wt5hIhzChhFg0ofHk3Dc2E7Y2x6Gtnhz712LKKmAriXA__",
      "https://media-hosting.imagekit.io/8de4f738bfde4aba/UtensilsScrubber.webp?Expires=1840106850&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MlJ4ETo3I9NhnhCgHV82838T3LY2p4YlCF60stzz4JfGTM4G5q7~Xqn~hVrP1YPtA1LyBhEIo53s29Fx6EDAmTSDvl2ysD-w61qTGhqAw-Toiu0q6IXSKcQ7Y7-bqBtiaeq-9YlMaxekGRXpZJG2WbmsFuCf5zX7qaattSfnZ3Ns7V4jUwP2L6gU1YPVm3UaZ-ZMulBOD-KaRpAx4WcKY3KG3w3XdCPyanosn0JZcOnNXsHvckMg1V7jvZ1MxCGsLT9SeT5AX6yAArVnTXO7fi~A5WN6QrhyVXcA2ZPKqIfVWqXqZv9xd-q5WQ3PWVfU4m1IlK5qJj4DVvFk9Z4zuA__",
    ],
    category: "Kitchen",
    material: "Coconut Coir",
    ecoTags: ["Antibacterial", "Compostable", "Durable", "Plastic-Free"],
    rating: 4.7,
    reviews: 154,
    featured: true,
    isNew: false,
    stock: 110,
    keyBenefits: [
      {
        icon: "sparkle",
        title: "Effective Cleaning",
        description: "Tackles tough food residue"
      },
      {
        icon: "shield",
        title: "Surface Safe",
        description: "Won't scratch pots and pans"
      },
      {
        icon: "bacteria",
        title: "Naturally Antibacterial",
        description: "Resists odors and germs"
      },
      {
        icon: "trash",
        title: "Zero Waste",
        description: "Fully compostable after use"
      }
    ],
    usageTips: [
      "Rinse before first use",
      "Works with or without dish soap",
      "Effective on pots, pans, dishes and countertops",
      "Rinse thoroughly after each use",
      "Replace when fibers wear down (typically 2-3 months)"
    ]
  },
  {
    id: "bamboo-bottle-cleaner",
    name: "Bamboo Bottle Cleaner",
    price: 129,
    shortDescription: "Bamboo handle with coir bristles, perfect for jars and bottles.",
    longDescription: "Our Bamboo Bottle Cleaner combines sustainable bamboo with natural coconut coir bristles to create the perfect tool for cleaning bottles, jars, and hard-to-reach containers. The ergonomically designed handle provides comfort and control, while the durable bristles effectively remove residue from glass, plastic, and metal containers. The long, flexible design allows you to reach the bottom of tall bottles with ease. Made with sustainable materials, this bottle brush is completely plastic-free and biodegradable. The bamboo handle is harvested from managed forests, and the bristles are made from coconut coir, a byproduct of coconut processing that would otherwise be discarded.",
    images: [
      "https://images.unsplash.com/photo-1591488320623-011701524808?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605618826115-fb9e775cf191?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    category: "Kitchen",
    material: "Bamboo, Coconut Coir",
    ecoTags: ["Biodegradable", "Plastic-Free", "Sustainable", "Durable"],
    rating: 4.5,
    reviews: 78,
    featured: false,
    isNew: true,
    stock: 35,
    keyBenefits: [
      {
        icon: "arrow-down",
        title: "Reach Deep",
        description: "Perfect for tall bottles and jars"
      },
      {
        icon: "hand",
        title: "Ergonomic Handle",
        description: "Comfortable grip for easy cleaning"
      },
      {
        icon: "tree",
        title: "Sustainable Materials",
        description: "Fast-growing bamboo and coconut fiber"
      },
      {
        icon: "sparkles",
        title: "Effective Cleaning",
        description: "Stiff bristles for stubborn residue"
      }
    ],
    usageTips: [
      "Rinse before first use",
      "Add a small amount of soap to bristles",
      "Insert into bottle and twist to clean all surfaces",
      "Rinse thoroughly after use and hang to dry",
      "Replace when bristles become worn (typically 6-8 months)"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getRelatedProducts = (id: string, limit = 3): Product[] => {
  const currentProduct = getProductById(id);
  if (!currentProduct) return [];
  
  return products
    .filter(product => 
      product.id !== id && product.category === currentProduct.category
    )
    .slice(0, limit);
};
