//(id, firstName, lastName, eventId, ticketIdentifier, checkedInAt)

export class Attendee {
    id: number;
    firstName: string;
    lastName: string;
    eventId: number;
    ticketIdentifier: string;
    checkedInAt: string;

    constructor(id: number, firstName: string, lastName: string, eventId: number, ticketIdentifier: string, checkedInAt: string) {
        this.id = id || 0;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.eventId = eventId || 0;
        this.ticketIdentifier = ticketIdentifier || '';
        this.checkedInAt = checkedInAt || '0';
    }
}
