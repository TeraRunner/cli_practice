type Name = {
  title: string;
  first: string;
  last: string;
};

type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string | number;
  coordinates: Coordinates;
  timezone: Timezone;
};

type Street = {
  number: number;
  name: string;
};

type Coordinates = {
  latitude: string | number;
  longitude: string | number;
};

type Timezone = {
  offset: string;
  description: string;
};

type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type Dob = {
  date: string;
  age: number;
};

type Registered = {
  date: string;
  age: number;
};

type Id = {
  name: string;
  value: string | number | null;
};

interface PicturesUrl {
  large: string;
  medium: string;
  thumbnail: string;
}

export type UserProperties =
  | string
  | number
  | Name
  | Location
  | Coordinates
  | Timezone
  | Login
  | Dob
  | Registered
  | Id
  | PicturesUrl
  | null;

export interface DefaultUser extends Record<string, UserProperties> {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string | number;
  cell: string | number;
  id: Id;
  picture: PicturesUrl;
  nat: string;
}
