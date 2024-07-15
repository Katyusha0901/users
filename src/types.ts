export interface User {
  address: Address;
  email: string;
  id: number;
  name: { firstname: string; lastname: string };
  password: string;
  phone: string;
  username: string;
  __v: number;
}

interface Address {
  city: string;
  geoloaction: { lat: string; long: string };
  number: number;
  street: string;
  zipcode: string;
}
