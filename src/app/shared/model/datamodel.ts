export interface Varience {
  Building: string;
  AcctCategory: string;
  ActualMTD: number;
  BudgetMTD: number;
  VarianceMTD$: number;
  Notes: string;
}


export interface ColliersMRIAPIResponse {
  status: number;
  msg: string;
  data: any;
}

export interface VarienceReportResultList {
  categoryResultList: CategoryResultList[];
  basis: string;
  beginPeriod: string;
  endPeriod: string;
}

export interface CategoryResultList {
  entityId: string;
  period: string;
  category: string;
  data: CategoryResult[];
  totalActualMTD: number;
  totalBudgetMTD: number;
  totalVarienceDifference: number;
  totalVariencePercentage: number;
}

export interface CategoryResultInterface {
  period: string;
  actualMTD: number;
  budgetMTD: number;
  varienceDifference: number;
  variencePrecentage: number;
  comments: string;
  acctNum: string;
  acctDescription: string;
}

export class CategoryResult implements CategoryResultInterface {
  period: string;
  actualMTD: number;
  budgetMTD: number;
  varienceDifference: number;
  variencePrecentage: number;
  commentType: string;
  comments: string;
  acctNum: string;
  acctDescription: string;


  entityId: string;
  category: string;
  basis: string;
  beginPeriod: string;
  endPeriod: string;
  userId: string;

  constructor(
      entityId: string,
      category: string,
      basis: string,
      beginPeriod: string,
      endPeriod: string,
      userId: string) {
    this.entityId = entityId;
    this.category = category;
    this.basis = basis;
    this.beginPeriod = beginPeriod;
    this.endPeriod = endPeriod;
    this.userId = userId;
  }
}

export class REMDialogData {
  constructor(public dialogData: any, public action: string) { }
}
export const VIEW_ACTIONS = 'VIEW';
export const DELETE_ACTIONS = 'DELETE';
