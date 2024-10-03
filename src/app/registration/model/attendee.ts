//(id, firstName, lastName, eventId, ticketIdentifier, checkedInAt)

export class Attendee {
    id: number;
    firstName: string;
    lastName: string;
    eventId: number;
    ticketIdentifier: string;
    checkedInAt?: string;

    constructor(id: number, firstName: string, lastName: string, eventId: number, ticketIdentifier: string, checkedInAt?: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.eventId = eventId;
        this.ticketIdentifier = ticketIdentifier;
        this.checkedInAt = checkedInAt;
    }
}
