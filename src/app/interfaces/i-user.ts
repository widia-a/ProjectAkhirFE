export interface IUser {
  id: number;
  nip: string;
  fullname: string;
  division: string;
  role: string;
  email: string;
  password: string
}

export interface IUserWrapper {
  data: Array<IUser>;
  success: boolean,
  message: string,
  status: number,
  timestamp: string
}

export interface ILoginWrapper {
  data: IUser;
  success: boolean,
  message: string,
  status: number,
  timestamp: string
}
