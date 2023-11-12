export interface AppointmentDetailResponse {
    detailId: number;
    doctorName: string;
    feeValue: number;
    status: string;
    appointmentTime: string;
    medicalCenterName?: string; 
  }