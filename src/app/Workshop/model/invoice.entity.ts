export class Invoice {
    id: number;
    number: string;
    issue_date: string;
    total: number;
    status: string;
    detail: string;

    constructor(id: number, number: string, issue_date: string, total: number, status: string, detail: string) {
        this.id = id;
        this.number = number;
        this.issue_date = issue_date;
        this.total = total;
        this.status = status;
        this.detail = detail;
    }
}