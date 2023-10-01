export interface VisitorListProps {
  content: Visitor[];
}

export interface VisitorExcelDownProps {
  checkVisitors: number;
}

export interface Visitor {
  invitationId: number;
  company: string;
  host: string;
  visitorId: number;
  startDateTime: string;
  visitTime: string;
  visitorName: string;
  officeName: string;
  carNumber: string;
  inTime: string;
  outTime: string;
  stayTime: number;
}

export interface VisitorListPagenationProps {
  limit: number;
  page: number;
  totalVisitors: number;
  setPage: (page: number) => void;
}

export interface VisitorsSearchProps {
  select: string;
  searchText: string;
  startDate: string;
  endDate: string;
}
