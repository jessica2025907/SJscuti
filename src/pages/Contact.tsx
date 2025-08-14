import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import { navItems } from '../App';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dllnci5vy/image/upload/v1746467151/Logo_oficial_1_amvktw.jpg"
                  alt="SJscuti Logo" 
                  className="w-20 h-20"
                />
                <span className="ml-2 text-xl font-bold">SJscuti</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                {navItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.href} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300 font-bold"
                  >
                    {item.icon}
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/#contacto"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Cotizar Ahora
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-grow pt-20">
        <div className="relative">
          <img 
            src="https://res.cloudinary.com/dllnci5vy/image/upload/v1746548920/freepik__the-style-is-candid-image-photography-with-natural__22473_wrgtad.png"
            alt="Contact"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl font-bold text-white mb-4">Contáctanos</h1>
              <p className="text-white text-xl mb-8">Estamos aquí para ayudarte con todas tus necesidades empresariales</p>
              <Link 
                to="/#contacto"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="flex justify-center space-x-16 mb-16">
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mr-4" />
              <span className="text-xl font-medium">+569 770 63 509</span>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 text-blue-600 mr-4" />
              <span className="text-xl font-medium">contacto@sjscuti.cl</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">¿Por qué elegir SJscuti?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Empresa líder en servicios administrativos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Especialistas en Contabilidad, Recursos humanos y secretaria</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Eficiencia 100% garantizada</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://res.cloudinary.com/dllnci5vy/image/upload/v1746548940/freepik__the-style-is-candid-image-photography-with-natural__22474_gv4nit.png"
                alt="Administrative team"
                className="w-full h-[400px] rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;