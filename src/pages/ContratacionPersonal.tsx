import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ContratacionPersonalProps {
  onOpenContractModal?: () => void;
}

function ContratacionPersonal({ onOpenContractModal }: ContratacionPersonalProps = {}) {
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
          <Building2 className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Contratación de Personal</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Contratación de Personal</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti nos encargamos de todo el proceso de contratación de personal para su empresa, 
            asegurando el cumplimiento de todas las normativas laborales vigentes y optimizando el 
            proceso para que usted pueda enfocarse en su negocio.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Elaboración de contratos de trabajo</span>
                <p className="text-gray-600 mt-1">
                  Redactamos contratos personalizados según las necesidades específicas de su empresa 
                  y el cargo a desempeñar, cumpliendo con toda la normativa laboral vigente.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Gestión de documentación</span>
                <p className="text-gray-600 mt-1">
                  Nos encargamos de recopilar y verificar toda la documentación necesaria para la 
                  contratación, incluyendo certificados, títulos y referencias laborales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Registro en sistemas previsionales</span>
                <p className="text-gray-600 mt-1">
                  Realizamos la inscripción del trabajador en AFP, Isapre o Fonasa, y demás sistemas 
                  previsionales obligatorios según la legislación chilena.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Asesoría legal continua</span>
                <p className="text-gray-600 mt-1">
                  Brindamos asesoramiento sobre aspectos legales relacionados con la contratación, 
                  incluyendo tipos de contrato, cláusulas especiales y obligaciones del empleador.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">¿Por qué elegir nuestro servicio?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo y recursos</h4>
              <p className="text-gray-600">
                Delegue en nosotros las tareas administrativas relacionadas con la contratación 
                y enfóquese en lo que realmente importa: su negocio.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Minimización de riesgos legales</h4>
              <p className="text-gray-600">
                Evite multas y sanciones por incumplimiento de la normativa laboral con nuestro 
                servicio especializado y actualizado.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Profesionales especializados</h4>
              <p className="text-gray-600">
                Contamos con un equipo de expertos en legislación laboral y gestión de recursos humanos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Servicio personalizado</h4>
              <p className="text-gray-600">
                Adaptamos nuestros servicios a las necesidades específicas de su empresa, 
                independientemente de su tamaño o sector.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para optimizar su proceso de contratación?</h3>
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

export default ContratacionPersonal;