import { FileModel } from "./file.model";

export interface ForschungsfragenModel {
    id?: number;
    title?: string;
    createdAt?: Date;
    imagePath?: string;

    files?: FileModel[]; // Array of FileModel to represent the associated files

}
