import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, loading } = useContext(AuthContext);

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-gray-100 shadow-lg z-30 relative">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span
              onClick={() => navigate("/")}
              className="text-xl font-bold text-gray-900 hover:text-indigo-600 drop-shadow hover:drop-shadow-lg cursor-pointer transition-all duration-200"
            >
              <span className="font-normal">Offne</span>
              <span className="font-bold">dieTur</span>
              <span className="font-normal text-gray-500">.de</span>
            </span>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <button
              onClick={() => navigate("/")}
              className={`${
                isActivePage("/")
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-700 hover:bg-gray-200"
              } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
            >
              Startseite
            </button>
            {!loading && user ? (
              <>
                <button
                  onClick={() => navigate("/dashboard")}
                  className={`${
                    isActivePage("/dashboard")
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-700 hover:bg-gray-200"
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Abmelden
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className={`${
                    isActivePage("/login")
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-700 hover:bg-gray-200"
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  Anmelden
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className={`${
                    isActivePage("/register")
                      ? "bg-indigo-700 text-white"
                      : "bg-indigo-600 hover:bg-indigo-500"
                  } text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                >
                  Registrieren
                </button>
              </>
            )}
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="sm:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
            <div
              className="absolute inset-0"
              onClick={() => setIsOpen(false)}
            ></div>
            <div
              className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg overflow-y-auto transition-transform transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } duration-300 ease-in-out z-50`}
            >
              <div className="px-4 pt-5 pb-4 space-y-1 sm:px-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => {
                    navigate("/");
                    setIsOpen(false);
                  }}
                  className={`${
                    isActivePage("/")
                      ? "bg-gray-100 text-gray-900 font-semibold border-l-4 border-indigo-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  } flex items-center w-full px-4 py-3 rounded-md text-base font-medium transition-all duration-200`}
                >
                  <span className="inline-block w-full">Startseite</span>
                  {isActivePage("/") && (
                    <span className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </button>
                {!loading && user ? (
                  <>
                    <button
                      onClick={() => {
                        navigate("/dashboard");
                        setIsOpen(false);
                      }}
                      className={`${
                        isActivePage("/dashboard")
                          ? "bg-gray-100 text-gray-900 font-semibold border-l-4 border-indigo-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      } flex items-center w-full px-4 py-3 rounded-md text-base font-medium transition-all duration-200`}
                    >
                      <span className="inline-block w-full">Dashboard</span>
                      {isActivePage("/dashboard") && (
                        <span className="ml-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </button>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-all duration-200"
                      >
                        <span className="inline-block w-full">Abmelden</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setIsOpen(false);
                      }}
                      className={`${
                        isActivePage("/login")
                          ? "bg-gray-100 text-gray-900 font-semibold border-l-4 border-indigo-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      } flex items-center w-full px-4 py-3 rounded-md text-base font-medium transition-all duration-200`}
                    >
                      <span className="inline-block w-full">Anmelden</span>
                      {isActivePage("/login") && (
                        <span className="ml-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                    </button>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          navigate("/register");
                          setIsOpen(false);
                        }}
                        className="flex items-center w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-all duration-200"
                      >
                        <span className="inline-block w-full">
                          Registrieren
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
