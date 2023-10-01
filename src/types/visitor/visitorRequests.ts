export interface GetVisitorsData {
  page: number;
  size: number;
}

export interface GetSearchVisitorsData {
  page: number;
  size: number;
  company: string;
  startDate: string;
  endDate: string;
}
