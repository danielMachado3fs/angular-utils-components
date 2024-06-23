export interface IFile {
  id?: any;
  fieldname: string;
  filename: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  path: string;
  destination?: string;
  description?: string;
}