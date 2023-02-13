export interface ILogin {
  nip : string;
  password : string;
}

export interface ILoginToken {
  id: number,
  nip: string,
  role: string
}
