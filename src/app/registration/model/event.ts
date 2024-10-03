// (id, name, description, scheduledAt)

export class Event {
    id: number;
    name: string;
    description: string;
    scheduledAt: string;


    constructor(id: number, name: string, description: string, scheduledAt: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.scheduledAt = scheduledAt;
    }
}
