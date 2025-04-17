import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 text-gray-800 py-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start border-t border-gray-300 pt-8">
          {/* Sol sütun: Site adı, künye, iletişim adresleri */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4  border-l border-gray-300">
            <h2 className="text-xl font-bold mb-4">OffnedieTur.de</h2>
            <p>
              Ehrenamtliches Projekt
              <br />
              Mach die Welt besser
              <br />
              Deutschland
            </p>
            <p>Für Ihre Fragen</p>
            <p>Email: kontakt@offnedieTur.de</p>
          </div>

          {/* Orta sütun: Gerekli linkler */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4 border-l border-gray-300">
            <h2 className="text-xl font-bold mb-4">Wichtige Links</h2>
            <nav className="flex flex-col space-y-2">
              <div
                onClick={() => navigate("/")}
                className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                Startseite
              </div>
              <div
                onClick={() => navigate("/about")}
                className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                Über uns
              </div>
              <div
                onClick={() => navigate("/start")}
                className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                Details
              </div>
              <div
                onClick={() => navigate("/contact")}
                className="hover:text-gray-600 transition-colors duration-200 cursor-pointer"
              >
                Kontakt
              </div>
            </nav>
          </div>

          {/* Sağ sütun: Sosyal medya bağlantıları */}
          <div className="w-full md:w-1/3 px-4 border-l border-gray-300">
            <h2 className="text-xl font-bold mb-4">
              Bleiben Sie in Verbindung
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.204-4.92 4.917 0 .39.045.765.127 1.125C7.691 8.094 4.066 6.13 1.64 3.161c-.427.734-.666 1.581-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.386 1.697 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.314 0-.615-.031-.916-.086.631 1.953 2.445 3.376 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.214 7.557 2.214 9.054 0 14.001-7.496 14.001-13.986 0-.21-.006-.423-.016-.635.961-.695 1.8-1.562 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.501 0-1.792.713-1.792 1.76v2.308h3.584l-.466 3.622h-3.118V24h6.115c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.676 0z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.013 7.052.072 5.773.131 4.63.331 3.629 1.332 2.629 2.332 2.43 3.475 2.37 4.755 2.311 6.035 2.298 6.445 2.298 9.704s.013 3.669.072 4.949c.059 1.28.259 2.423 1.261 3.425 1 .999 2.143 1.199 3.425 1.259 1.28.059 1.69.072 4.949.072s3.669-.013 4.949-.072c1.28-.059 2.423-.259 3.425-1.261 1-.999 1.199-2.143 1.259-3.425.059-1.28.072-1.69.072-4.949s-.013-3.669-.072-4.949c-.059-1.28-.259-2.423-1.261-3.425-.999-1.001-2.143-1.201-3.425-1.261C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500">
          &copy; 2025 OffnedieTur.de. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
