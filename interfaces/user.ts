export type User = Array<DefaultUser>;

export type DefaultUser = {
  [key: string]: string | number | {
    [key: string]: string | number | { [key: string]: string | number };
  };
  // gender?: string;
  // name?: {
  //   title?: string;
  //   first?: string;
  //   last?: string;
  // };
  // location?: {
  //   street?: {
  //     number?: number;
  //     name?: string;
  //   };
  //   city?: string;
  //   state?: string;
  //   country?: string;
  //   postcode?: string | number;
  //   coordinates?: {
  //     latitude?: string | number;
  //     longitude?: string | number;
  //   };
  //   timezone?: {
  //     offset?: string;
  //     description?: string;
  //   };
  // };
  // email?: string;
  // login?: {
  //   uuid?: string;
  //   username?: string;
  //   password?: string;
  //   salt?: string;
  //   md5?: string;
  //   sha1?: string;
  //   sha256?: string;
  // };
  // dob?: {
  //   date?: string;
  //   age?: number;
  // };
  // registered?: {
  //   date?: string;
  //   age?: number;
  // };
  // phone?: string | number;
  // cell?: string | number;
  // id?: {
  //   name?: string;
  //   value?: string | number;
  // };
  // picture?: {
  //   large?: string;
  //   medium?: string;
  //   thumbnail?: string;
  // };
  // nat?: string;
};
