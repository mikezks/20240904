
export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string; // ISO Date String
  delayed: boolean;
}

export const initFlight: Flight = {
  id: 0,
  from: '',
  to: '',
  date: new Date().toISOString(),
  delayed: false
};
