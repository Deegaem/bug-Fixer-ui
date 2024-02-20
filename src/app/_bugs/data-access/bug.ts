export interface Bug {
  bug_id?: number;
  account_id: number;
  bugtitle: string;
  status: string;
  priority: string;
  severity: string;
  assignedto: number;
  assigntofname: string;
  assigntolname: string;
  description: string;
  expectedresult: string;
  actualresult: string;
  stepstoreproduce: string;
  screenshoturl: string;
  created: Date;
  modified: Date;
}
