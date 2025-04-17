import { createContext, useState } from 'react';
import api from '../services/api';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTicket = async (ticketData) => {
    try {
      const response = await api.post('/api/tickets', ticketData);
      setTickets([response.data, ...tickets]);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const getUserTickets = async () => {
    try {
      const response = await api.get('/api/tickets/my-tickets');
      setTickets(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const getAllTickets = async () => {
    try {
      const response = await api.get('/api/tickets/all');
      setTickets(response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const addResponse = async (ticketId, message) => {
    try {
      const response = await api.post(`/api/tickets/${ticketId}/respond`, { message });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  const closeTicket = async (ticketId) => {
    try {
      const response = await api.put(`/api/tickets/${ticketId}/close`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  return (
    <TicketContext.Provider value={{
      tickets,
      loading,
      error,
      createTicket,
      getUserTickets,
      getAllTickets,
      addResponse,
      closeTicket
    }}>
      {children}
    </TicketContext.Provider>
  );
};