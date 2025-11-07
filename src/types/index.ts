export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  text: string;
  author: string;
  position: string;
  image?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
