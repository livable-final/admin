export interface GetVisitorsData {
  content: {
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
  }[];
}
