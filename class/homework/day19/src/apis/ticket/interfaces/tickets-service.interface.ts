import { CreateTicketInput } from '../dto/create-ticket.input';
import { UpdateTicketInput } from '../dto/update-ticket.input';
import { Ticket } from '../ticket.entity';

export interface IProductsServiceCreate {
  createTicketInput: CreateTicketInput;
}

export interface IProductsServiceFindOne {
  ticketId: string;
}

export interface IProductsServiceCheckSoldout {
  ticket: Ticket;
}

export interface IProductsServiceUpdate {
  ticketId: string;
  updateTicketInput: UpdateTicketInput;
}
