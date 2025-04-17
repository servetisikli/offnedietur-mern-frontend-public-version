import React from "react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Über Uns</h1>
          <p className="text-xl text-gray-600">Mach die Welt besser</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-4xl w-full">
            <p className="text-gray-600 leading-relaxed text-justify mb-3">
              Dieses Projekt wurde ins Leben gerufen, um gemeinnützige
              Organisationen durch kostenlose, ehrenamtliche Full-Stack
              Webentwicklung zu unterstützen. Ziel ist es, die digitale Welt
              zugänglicher zu machen und dabei zu helfen, dass wichtige soziale
              Initiativen und positive Veränderungen in der Gesellschaft
              sichtbarer werden.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-3">
              Indem benutzerfreundliche Websites und maßgeschneiderte
              Webanwendungen entwickelt werden, erhalten
              Non-Profit-Organisationen die Möglichkeit, ihre Botschaften weiter
              zu verbreiten und ihre Missionen effektiver umzusetzen – ganz ohne
              finanzielle Belastung. So können sie einen wertvollen Beitrag dazu
              leisten, die Welt ein Stück besser zu machen.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              In einer zunehmend digitalen Welt wird dieses Projekt dazu
              beitragen, dass gemeinnützige Organisationen ihre Reichweite
              erweitern und ihre positiven Auswirkungen auf die Gesellschaft
              verstärken können.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
