import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { MessageProvider } from "./context/MessageContext.jsx";
import { RequestProvider } from "./context/RequestContext.jsx";
import { TicketProvider } from "./context/TicketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <MessageProvider>
          <RequestProvider>
            <TicketProvider>
              <App />
            </TicketProvider>
          </RequestProvider>
        </MessageProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
