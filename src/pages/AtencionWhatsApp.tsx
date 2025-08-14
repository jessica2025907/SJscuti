import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft, CheckCircle2, Smartphone, Users, Clock } from 'lucide-react';

interface AtencionWhatsAppProps {
  onOpenContractModal?: () => void;
}

function AtencionWhatsApp({ onOpenContractModal }: AtencionWhatsAppProps = {}) {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
        
        <div className="flex items-center mb-8">
          <MessageCircle className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Atención de WhatsApp Business o Chat de la Web</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Atención al Cliente Digital</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti gestionamos la atención al cliente a través de WhatsApp Business y 
            chat web, proporcionando respuestas rápidas, profesionales y personalizadas 
            que mejoran la experiencia de sus clientes y fortalecen su imagen de marca.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Respuesta Inmediata</h3>
              <p className="text-gray-600">
                Atendemos las consultas de sus clientes de manera rápida y eficiente.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Atención Personalizada</h3>
              <p className="text-gray-600">
                Cada cliente recibe atención personalizada según sus necesidades específicas.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Múltiples Canales</h3>
              <p className="text-gray-600">
                Gestionamos WhatsApp Business, chat web y otros canales digitales.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Atención en WhatsApp Business</span>
                <p className="text-gray-600 mt-1">
                  Gestionamos su cuenta de WhatsApp Business, respondiendo consultas, 
                  proporcionando información de productos/servicios y gestionando pedidos.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Chat en tiempo real en su sitio web</span>
                <p className="text-gray-600 mt-1">
                  Implementamos y gestionamos sistemas de chat en vivo en su página web, 
                  atendiendo visitantes y convirtiendo consultas en oportunidades de venta.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Respuestas automatizadas inteligentes</span>
                <p className="text-gray-600 mt-1">
                  Configuramos respuestas automáticas para consultas frecuentes, 
                  asegurando atención inmediata las 24 horas del día.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Gestión de consultas complejas</span>
                <p className="text-gray-600 mt-1">
                  Manejamos consultas que requieren investigación o coordinación interna, 
                  asegurando seguimiento hasta la resolución completa.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Reportes de interacciones</span>
                <p className="text-gray-600 mt-1">
                  Proporcionamos reportes detallados sobre las interacciones con clientes, 
                  incluyendo tipos de consultas, tiempos de respuesta y satisfacción.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Escalamiento a especialistas</span>
                <p className="text-gray-600 mt-1">
                  Cuando las consultas requieren conocimiento especializado, 
                  las escalamos apropiadamente dentro de su organización.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Mayor satisfacción del cliente</h4>
              <p className="text-white text-opacity-90">
                Respuestas rápidas y profesionales mejoran significativamente la experiencia del cliente.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Incremento en ventas</h4>
              <p className="text-white text-opacity-90">
                La atención inmediata convierte más consultas en ventas efectivas.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Disponibilidad extendida</h4>
              <p className="text-white text-opacity-90">
                Atención disponible en horarios extendidos, incluso fuera del horario comercial.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Imagen profesional</h4>
              <p className="text-white text-opacity-90">
                Comunicación consistente y profesional que fortalece su marca.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para mejorar la atención al cliente digital?</h3>
          <button
            onClick={onOpenContractModal}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Solicitar una cotización
          </button>
        </div>
      </div>
    </div>
  );
}

export default AtencionWhatsApp;