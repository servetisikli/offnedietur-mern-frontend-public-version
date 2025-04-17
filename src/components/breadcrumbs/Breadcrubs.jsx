import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="container mx-auto p-4 bg-gray-50  shadow-md rounded-lgpy-3 px-4 mb-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Startseite
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={routeTo}>
              <FiChevronRight className="text-gray-400" />
              <li>
                {isLast ? (
                  <span className="text-indigo-600 font-medium capitalize">
                    {name}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-500 hover:text-gray-700 capitalize"
                  >
                    {name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
