export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  price: number;
  category: "Skincare" | "Makeup";
  skinType: string;
  image: string;
  ingredients: string[];
  rating: number; // e.g., 4.8
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedShade?: string; // especially for foundation
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
