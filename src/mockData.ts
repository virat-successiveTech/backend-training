export interface User {
  id: number;
  name: string;
  role: string;
}

export const mockList: User[] = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
  { id: 3, name: "Charlie", role: "Product Manager" },
];
