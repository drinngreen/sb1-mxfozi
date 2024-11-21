import { Sprout, Leaf, Droplets } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">La Nostra Storia</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dove il gusto incontra la sostenibilità
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Our hydroponic garden"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Dalla Serra alla Tavola</h3>
              </div>
              <p className="text-gray-600">
                Le nostre verdure sono coltivate in idroponica direttamente nel nostro locale,
                garantendo ingredienti freschi e sostenibili per ogni pizza.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Zero Pesticidi</h3>
              </div>
              <p className="text-gray-600">
                Il nostro metodo di coltivazione idroponica elimina la necessità di pesticidi,
                offrendo verdure più sane e rispettose dell'ambiente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Droplets className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Sostenibilità</h3>
              </div>
              <p className="text-gray-600">
                La nostra serra idroponica utilizza il 90% in meno di acqua rispetto
                all'agricoltura tradizionale, contribuendo a un futuro più sostenibile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}