export interface GetVisitorsData {
  content: GetVisitorsDataContent[];
  totalElements?: number;
}

export interface GetVisitorsDataContent {
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
