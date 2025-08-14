import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2, FileText, Send, Shield } from 'lucide-react';

interface GestionCorreosProps {
  onOpenContractModal?: () => void;
}

function GestionCorreos({ onOpenContractModal }: GestionCorreosProps = {}) {
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
          <Mail className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Gestión de Correos Electrónicos y Comunicaciones Formales</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Gestión de Comunicaciones</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti nos encargamos de la gestión completa de su comunicación empresarial, 
            desde la administración de correos electrónicos hasta la redacción de documentos 
            formales, manteniendo siempre un tono profesional y coherente con su imagen corporativa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Respuestas Rápidas</h3>
              <p className="text-gray-600">
                Respondemos sus correos de manera oportuna y profesional.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Redacción Profesional</h3>
              <p className="text-gray-600">
                Creamos documentos formales con excelente redacción y presentación.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Confidencialidad</h3>
              <p className="text-gray-600">
                Manejamos su información con total confidencialidad y seguridad.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Gestión de bandeja de entrada</span>
                <p className="text-gray-600 mt-1">
                  Organizamos, clasificamos y priorizamos sus correos electrónicos, 
                  asegurando que los mensajes importantes reciban atención inmediata.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Respuestas profesionales</span>
                <p className="text-gray-600 mt-1">
                  Redactamos respuestas profesionales y oportunas a clientes, proveedores 
                  y socios comerciales, manteniendo el tono apropiado para cada situación.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Redacción de cartas formales</span>
                <p className="text-gray-600 mt-1">
                  Elaboramos cartas comerciales, oficios, solicitudes y otros documentos 
                  formales con la estructura y lenguaje apropiados.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Comunicados y circulares</span>
                <p className="text-gray-600 mt-1">
                  Redactamos comunicados internos, circulares para empleados y 
                  comunicaciones corporativas que reflejen su imagen profesional.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Seguimiento de correspondencia</span>
                <p className="text-gray-600 mt-1">
                  Realizamos seguimiento a correos importantes, asegurando que se reciban 
                  respuestas oportunas y gestionando los recordatorios necesarios.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Archivo y organización</span>
                <p className="text-gray-600 mt-1">
                  Organizamos y archivamos su correspondencia de manera sistemática, 
                  facilitando la búsqueda y recuperación de información cuando sea necesario.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Imagen profesional</h4>
              <p className="text-white text-opacity-90">
                Mantenga una comunicación impecable que refuerce su imagen corporativa.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo</h4>
              <p className="text-white text-opacity-90">
                Libere tiempo valioso para enfocarse en las actividades estratégicas de su negocio.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Comunicación efectiva</h4>
              <p className="text-white text-opacity-90">
                Asegure que sus mensajes sean claros, precisos y logren los objetivos deseados.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Organización mejorada</h4>
              <p className="text-white text-opacity-90">
                Mantenga su correspondencia organizada y accesible para consultas futuras.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para profesionalizar su comunicación empresarial?</h3>
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

export default GestionCorreos;