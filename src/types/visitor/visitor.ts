import { Dispatch, SetStateAction } from 'react';
import { GetVisitorsData } from './api';

export interface VisitorExcelDownProps {
  checkVisitors: number;
}

export interface VisitorListPagenationProps {
  limit: number;
  page: number;
  totalVisitors: number;
  setPage: (page: number) => void;
}

export interface VisitorSearchProps {
  setVisitorList: Dispatch<SetStateAction<GetVisitorsData | undefined>>;
  setPage: Dispatch<SetStateAction<number>>;
}
