// Assigned to Kishan

export class Incident {

incidentID: string;
  incidentName:  string;
  location: string;
  date: Date;
  time: string;
  description: string;
  isActive:boolean;

  constructor(values: Object = {}) {
    /*Constructor initialization*/
    Object.assign(this, values);
}
}