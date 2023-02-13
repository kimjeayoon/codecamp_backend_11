import { CreateTicketInput } from '../dto/create-ticket.input';
import { UpdateTicketInput } from '../dto/update-ticket.input';
import { Ticket } from '../entities/ticket.entity';

export interface ITicketsServiceCreate {
  createTicketInput: CreateTicketInput;
}

export interface ITicketsServiceFindOne {
  ticketId: string;
}

export interface ITicketsServiceCheckSoldout {
  ticket: Ticket;
}

export interface ITicketsServiceUpdate {
  ticketId: string;
  updateTicketInput: UpdateTicketInput;
}

export interface ITicketsServiceDelete {
  ticketId: string;
}

export interface ITicketServiceRestore {
  ticketId: string;
}
