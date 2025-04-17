import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get("/api/message");
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (message) => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.post("/api/message/send", { message });
      setMessages((prevMessages) => [...prevMessages, data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        loading,
        error,
        fetchMessages,
        sendMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
