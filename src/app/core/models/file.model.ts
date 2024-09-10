export interface FileModel {
  id?: number;
  fileName?: string;
  fileType?: string;
  fileSize: number;
  uploadDate?: Date;
  blobStorageUri?: string;
  forschungsfrageId?: number;
  isDeleted?: boolean;

}
export interface MediaDisplayModel extends FileModel {
  url: string;
  position?: { x: number; y: number };
  style: any;
}
