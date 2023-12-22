import { ForschungsfragenModel } from "./forschungsfrage.model";

export interface ForschungsfragenRequestConfigModel {
    url: string;
    method: string;
    headers: {
      [index: string]: string;
    };
    body?: ForschungsfragenModel; 
  }