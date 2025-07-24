export interface User {
  username: string;
}

export interface GirlProfile {
  id: string;
  name: string;
  age: number;
  city: string;
  bio: string;
  photo_url: string;
  is_online: boolean;
  rating: number;
}

export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: number;
  features: string[];
  is_premium: boolean;
}