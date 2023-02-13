export interface ILessee {
    lesseeId: string,
    namaLessee: string,
    alamatUsaha: string,
    kota: string,
    contactPerson: string,
    email: string,
    noTelp: string,
    noHp: string,
    npwp: string,
}

export interface ILesseeWrapper{
    data: Array<ILessee>
    success: boolean,
    message: string,
    status: number,
    timestamp:string,
  }