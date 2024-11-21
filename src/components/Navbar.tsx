import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800/90 fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.png" alt="Eden Logo" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#menu">Le Pizze</NavLink>
              <NavLink href="#about">Chi Siamo</NavLink>
              <NavLink href="#location">Dove Siamo</NavLink>
              <NavLink href="#contact">Contatti</NavLink>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Ordina
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#menu">Le Pizze</MobileNavLink>
            <MobileNavLink href="#about">Chi Siamo</MobileNavLink>
            <MobileNavLink href="#location">Dove Siamo</MobileNavLink>
            <MobileNavLink href="#contact">Contatti</MobileNavLink>
            <button className="w-full text-left block px-3 py-2 text-base font-medium text-white bg-green-600 rounded-md">
              Ordina Ora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
}