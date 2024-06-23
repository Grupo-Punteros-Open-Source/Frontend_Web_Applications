export class Notification {
    id: number;
    userId: number;
    type: string;
    title: string;
    message: string;
    timestamp: string;
    read: boolean;

    constructor(id: number, userId: number, type: string, title: string, message: string, timestamp: string, read: boolean) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.title = title;
        this.message = message;
        this.timestamp = timestamp;
        this.read = read;
    }
}