export class Notification {
    id: string;
    type: string;
    title: string;
    message: string;
    timestamp: string;
    read: boolean;

    constructor(id: string, type: string, title: string, message: string, timestamp: string, read: boolean) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.message = message;
        this.timestamp = timestamp;
        this.read = read;
    }
}
