import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contattaci</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ordina direttamente o vieni a trovarci per vedere la nostra serra idroponica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="space-y-6">
                <ContactItem
                  icon={MapPin}
                  title="Indirizzo"
                  content="Via della Serra 123, Milano"
                />
                <ContactItem
                  icon={Phone}
                  title="Telefono"
                  content="+39 02 1234567"
                />
                <ContactItem
                  icon={Mail}
                  title="Email"
                  content="info@edenpizzeria.it"
                />
                <ContactItem
                  icon={Clock}
                  title="Orari"
                  content="Mar-Dom: 12:00-15:00, 19:00-23:00"
                />
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Messaggio"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Invia Messaggio
              </button>
            </form>
          </div>

          <div className="h-[600px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3!2d9.1896!3d45.4641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sit!4v1!5m2!1sen!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-green-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-green-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}