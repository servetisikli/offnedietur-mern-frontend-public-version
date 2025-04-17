import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Test Login Infos */}
        <div className="mx-auto max-w-md -mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h2 className="text-sm font-medium text-gray-800 mb-3 flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-indigo-100 rounded-full">
                🔑
              </span>
              Demo Zugang
            </h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <span className="text-xs font-medium text-gray-500">Email</span>
                <code className="text-sm font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                  info@juniorwebdev.com
                </code>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <span className="text-xs font-medium text-gray-500">
                  Password
                </span>
                <code className="text-sm font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                  test123
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> */}
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Erfahren Sie mehr über die Vorstellungen und Ziele{" "}
              <span
                onClick={() => navigate("/about")}
                className="font-semibold text-indigo-600 cursor-pointer"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Weiterlesen <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Technologie für einfachen Zugang
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
              Ehrenamtliche Full-Stack Webentwicklung für gemeinnützige
              Organisationen angeboten.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div
                onClick={() => navigate("/register")}
                className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Jetzt starten
              </div>
              <div
                onClick={() => navigate("/start")}
                className="cursor-pointer text-sm font-semibold text-gray-900"
              >
                Details ansehen <span aria-hidden="true">→</span>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
