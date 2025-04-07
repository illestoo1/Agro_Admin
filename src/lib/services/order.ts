import api from "@/lib/api";

interface OrderItem {
  productId: string;
  quantity: number;
}

export interface CreateOrderPayload {
  items: OrderItem[];
  shippingAddress: string;
  paymentMethod: string;
  // Add more fields like `couponCode`, `note`, etc. if needed
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

export const order = {
  create: async (data: CreateOrderPayload): Promise<Order> => {
    const response = await api.post<Order>("/orders", data);
    return response.data;
  },

  getAll: async (): Promise<Order[]> => {
    const response = await api.get<Order[]>("/orders");
    return response.data;
  },

  getById: async (orderId: string): Promise<Order> => {
    const response = await api.get<Order>(`/orders/${orderId}`);
    return response.data;
  },

  cancel: async (orderId: string): Promise<{ message: string }> => {
    const response = await api.post(`/orders/${orderId}/cancel`);
    return response.data;
  },
};
