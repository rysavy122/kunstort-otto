export interface FileModel {
  id?: number;
  fileName?: string;
  fileType?: string;
  fileSize: number;
  uploadDate?: Date;
  blobStorageUri?: string;
}
