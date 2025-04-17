import {
  FaLaptopCode,
  FaHandsHelping,
  FaExchangeAlt,
  FaBullhorn,
} from "react-icons/fa";

const features = [
  {
    name: "Webentwicklung Unterstützung",
    description:
      "Ehrenamtliche Webentwicklung ermöglicht Non-Profit-Organisationen, ihre Missionen online effektiv zu verbreiten und sichtbar zu werden.",
    icon: FaLaptopCode,
  },
  {
    name: "Soziale Initiativen",
    description:
      "Durch individuelles Webdesign können soziale Initiativen ihre Botschaften klar und benutzerfreundlich an ein breites Publikum kommunizieren.",
    icon: FaHandsHelping,
  },
  {
    name: "Positive Veränderung",
    description:
      "Webentwicklung hilft sozialen Projekten, ihre Reichweite zu erweitern und einen positiven gesellschaftlichen Wandel zu fördern.",
    icon: FaExchangeAlt,
  },
  {
    name: "Gemeinnützige Ziele",
    description:
      "Ehrenamtliche Webentwicklung bietet Organisationen die Möglichkeit, mit innovativen Technologien ihre Ziele und Projekte umzusetzen.",
    icon: FaBullhorn,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">
            Gemeinnützige Unterstützung
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Ehrenamtliche Webentwicklung für soziale Initiativen
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Ehrenamtliche Webentwicklung zur Unterstützung sozialer Initiativen,
            um deren Reichweite zu vergrößern und positive Veränderungen in der
            Gesellschaft zu fördern.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
