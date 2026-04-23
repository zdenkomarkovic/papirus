export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export type PageParams<T extends Record<string, string> = Record<string, string>> = {
  params: Promise<T>;
  searchParams: Promise<Record<string, string | string[]>>;
};

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";

// ─── Shop Types ───────────────────────────────────────────────────────────────

export interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  note?: string;
}

export interface Order {
  items: CartItem[];
  customer: OrderFormData;
  total: number;
  createdAt: string;
}
