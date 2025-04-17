import React from 'react';

const Start = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Erste Schritte</h1>
          <p className="text-xl text-gray-600">Ihre Reise beginnt hier</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-4xl">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-600 text-indigo-600 font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Registrierung</h3>
                  <p className="text-gray-600">Um die Plattform zu nutzen, registrieren Sie sich zunächst mit Ihren Daten.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-600 text-indigo-600 font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dashboard Zugang</h3>
                  <p className="text-gray-600">Nach der Registrierung erhalten Sie Zugang zu Ihrem persönlichen Dashboard.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-600 text-indigo-600 font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Projektanfrage</h3>
                  <p className="text-gray-600">Stellen Sie Ihre Anfrage mit möglichst detaillierten Informationen zu Ihrem Projekt.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-600 text-indigo-600 font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kommunikation</h3>
                  <p className="text-gray-600">Sie können jederzeit weitere Details hinzufügen und Ihre Nachrichten verfolgen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Start;