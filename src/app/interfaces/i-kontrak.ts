export interface IKontrak {
    kontrakId: string,
    noKontrak: string,
    jenisAplikasi: string,
    noJadwal: string,
    namaSup: string,
    alamatSup: string,
    picSup: string,
    namaKons: string,
    alamatKons: string,
  kedudukanKons: string,
   unit: string,
   merkUnit: string,
    tipeUnit: string,
jumlahUnit: string,
hargaUnit: string,
penempatan: string,
jumlahFasilitas: string,
terbilang: string,
nilaiSisa: string,
sisaTerbilang: string,
nilaiPembiayaan: string,
 tenor: string,
tenorTerbilang: string,
 persenBiaya: string,
persenHarga: string,
titleSigner: string,
namaSigner: string,
jabatanSigner: string
}

export interface IKontrakWrapper {
    data: Array<IKontrak>
    success: boolean,
    message: string,
    status: number,
    timestamp:string,
  }
