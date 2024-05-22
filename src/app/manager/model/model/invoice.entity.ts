export class Invoice {
  id: string;
  customerId: number;
  number: string;
  issue_date: string;
  total: number;
  status: string;
  details: { description: string, amount: number }[];

  constructor(id: string, customerId: number, number: string,
              issue_date: string, total: number, status: string, details:
                  { description: string, amount: number }[]) {
    this.id = id;
    this.customerId = customerId;
    this.number = number;
    this.issue_date = issue_date;
    this.total = total;
    this.status = status;
    this.details = details;
  }


}

