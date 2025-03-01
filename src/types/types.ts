export type Customer = {
  id: number;
  name: string;
  email: string;
};

export type Process = {
  id: number;
  name: string;
  description: string;
  customerId: number;
};
