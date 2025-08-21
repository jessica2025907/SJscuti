import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram className="w-6 h-6" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-6 h-6" />, href: 'https://twitter.com', label: 'Twitter' }
  ];

  const relatedSites = [
    { name: 'Servicio de Impuestos Internos', url: 'https://www.sii.cl' },
    { name: 'Dirección del Trabajo', url: 'https://www.dt.gob.cl' },
    { name: 'Previred', url: 'https://www.previred.com' },
    { name: 'Tesorería General de la República', url: 'https://tgr.cl' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://res.cloudinary.com/dllnci5vy/image/upload/v1746645859/Logo_oficial_1_-_copia_2_jqxjjk.jpg"
                alt="SJscuti Logo" 
                className="w-20 h-20 mr-3"
              />
              <span className="text-lg font-bold">SJscuti</span>
            </div>
            <p className="text-gray-400">
              Soluciones empresariales integrales para el crecimiento de tu negocio.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/#servicios" className="text-gray-400 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/acerca" className="text-gray-400 hover:text-white">
                  Acerca de SJscuti
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Sitios Relacionados</h4>
            <ul className="space-y-2">
              {relatedSites.map((site, index) => (
                <li key={index}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    {site.name}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Encuéntranos</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contacto@sjscuti.cl</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+569 770 63 509</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-4">&copy; 2024 SJscuti - Todos los derechos reservados</p>
          <div className="flex justify-center space-x-4">
            <Link to="/politicas-privacidad" className="hover:text-white transition duration-300">
              Políticas de privacidad
            </Link>
            <span>|</span>
            <Link to="/terminos-condiciones" className="hover:text-white transition duration-300">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;