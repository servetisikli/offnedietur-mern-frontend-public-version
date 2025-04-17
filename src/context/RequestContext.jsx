import React, { createContext, useState, useCallback } from "react";
import api from "../services/api";

// RequestContext oluşturuluyor
const RequestContext = createContext();

// RequestProvider bileşeni, context'i çocuk bileşenlere sağlar
export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // API'den istekleri almak için fonksiyon
  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get("/api/request");
      setRequests(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Yeni bir istek oluşturmak için fonksiyon
  const createRequest = useCallback(async (requestData) => {
    setLoading(true);
    setError(null);
    try {
      const newRequest = await api.post("/api/request/sent", requestData);
      setRequests((prevRequests) => [...prevRequests, newRequest]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <RequestContext.Provider
      value={{ requests, loading, error, fetchRequests, createRequest }}
    >
      {children}
    </RequestContext.Provider>
  );
};

export default RequestContext;
