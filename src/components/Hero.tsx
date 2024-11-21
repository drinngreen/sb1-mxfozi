import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Pizza background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dalla Serra alla Tua Tavola
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Scopri il gusto unico delle nostre pizze preparate con verdure fresche
            coltivate in idroponica direttamente nel nostro locale.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              Ordina Ora
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              Il Nostro Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}