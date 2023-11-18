export interface User {
  id: string;
  fullName: string;
  dni: string;
  email: string;
  phone: string;
  address: string;
  latitude: string;
  longitude: string;
  city: string;
  department: string;
  roles: string[];
  isActive: boolean;
}

export interface FormUser
  extends Omit<User, "id" | "latitude" | "longitude" | "roles"> {
  roles: string;
}

export interface AllUserResponse {
  data: User[];
}

export interface UserResponse {
  data: User;
}
