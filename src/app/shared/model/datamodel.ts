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

// export class CategoryResultList implements CategoryResultListInterface {
//   entityId: string;
//   period: string;
//   category: string;
//   data: CategoryResult[];


//   getData(): CategoryResult[] {
//     return this.data['categoryResultList'];
//   }
// }

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
  comments: string;
  acctNum: string;
  acctDescription: string;

  entityId: string;
  category: string;

  constructor(entityId: string, category: string) {
    this.entityId = entityId;
    this.category = category;
  }

}
