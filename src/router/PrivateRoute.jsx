import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex space-x-2 animate-pulse mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
        </div>
        <p className="text-gray-700 text-lg">Loading, please wait...</p>
      </div>
    );
  }

  return user ? children : null;
};

export default PrivateRoute;

// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import AuthContext from "../contexts/AuthContext";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="flex space-x-2 animate-pulse mb-4">
//           <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
//           <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
//           <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
//         </div>
//         <p className="text-gray-700 text-lg">Loading, please wait...</p>
//       </div>
//     );
//   }

//   return user ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;
