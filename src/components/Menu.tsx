import { Leaf } from 'lucide-react';

const pizzas = [
  {
    name: "Orto Fresco",
    description: "Pomodorini, rucola e basilico coltivati in idroponica, mozzarella di bufala",
    price: "€12.90",
    isVegan: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Giardino Verde",
    description: "Zucchine, melanzane, peperoni e spinaci freschi dalla nostra serra",
    price: "€11.90",
    isVegan: true,
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    name: "Margherita Bio",
    description: "Pomodoro San Marzano, mozzarella fior di latte, basilico fresco dalla serra",
    price: "€9.90",
    isVegan: false,
    image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Le Nostre Pizze</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ingredienti freschi e sostenibili, coltivati in idroponica nel nostro locale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <div key={pizza.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-full object-cover"
                />
                {pizza.isVegan && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Leaf className="h-4 w-4" />
                    <span className="text-sm">Vegan</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pizza.name}</h3>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">{pizza.price}</span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Aggiungi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}