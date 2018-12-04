// Assigned to Vineeth

export class Report {

  reportID: String;
  reportedBy: String;
  incidentName: String;
  location: {
      lat:Number;
      lng:Number;
  };
  files: String;
  casualties: {
      red: Number;
      yellow: Number;
      green: Number;
      black: Number;
  };
  structuralDamage: String;
  fire: String;
  utilities: String;
  hazmat: String;
  others: String;
  icon:String;

  constructor(values: Object = {}) {
    /*Constructor initialization*/
    Object.assign(this, values);
}
}