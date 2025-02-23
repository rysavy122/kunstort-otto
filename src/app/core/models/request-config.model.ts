import { ForschungsfragenModel } from "./forschungsfrage.model";
import { MessageModel } from "./message.model";
export interface RequestConfigModel {
  url: string;
  method: string;
  headers: {
    [index: string]: string;
  };
  body?: MessageModel; 
}
