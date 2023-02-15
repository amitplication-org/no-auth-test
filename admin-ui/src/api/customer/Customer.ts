import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Customer = {
  address?: Address | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  orders?: Array<Order>;
};
