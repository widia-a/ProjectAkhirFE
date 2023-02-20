export interface IFiles {
    id: string,
    data: Blob,
    name: string,
    type: string,
    url: string,
    createdDate?: Date;
}

export interface IFilesWrapper{
    data: Array<IFiles>
    success: boolean,
    message: string,
    status: number,
    timestamp:string,
}
