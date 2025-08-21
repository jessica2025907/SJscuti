import React from 'react';
import { Link } from 'react-router-dom';
import { Video, ArrowLeft, CheckCircle2, Monitor, Users, Settings } from 'lucide-react';

interface CoordinacionReunionesVirtualesProps {
  onOpenContractModal?: () => void;
}

function CoordinacionReunionesVirtuales({ onOpenContractModal }: CoordinacionReunionesVirtualesProps = {}) {
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
          <Video className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Coordinación de Reuniones por Zoom o Meet</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Coordinación de Reuniones Virtuales</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti nos especializamos en la coordinación completa de reuniones virtuales, 
            gestionando todos los aspectos técnicos y logísticos para que usted pueda 
            enfocarse únicamente en el contenido y objetivos de su reunión.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Configuración Técnica</h3>
              <p className="text-gray-600">
                Configuramos todas las opciones técnicas para reuniones seguras y eficientes.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Gestión de Participantes</h3>
              <p className="text-gray-600">
                Administramos invitaciones, confirmaciones y acceso de todos los participantes.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Soporte Continuo</h3>
              <p className="text-gray-600">
                Brindamos soporte técnico antes y durante la reunión para resolver cualquier inconveniente.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Creación y configuración de salas virtuales</span>
                <p className="text-gray-600 mt-1">
                  Creamos salas de reunión en Zoom, Google Meet o Microsoft Teams con 
                  todas las configuraciones de seguridad y funcionalidad necesarias.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Envío de invitaciones y enlaces</span>
                <p className="text-gray-600 mt-1">
                  Enviamos invitaciones profesionales con enlaces de acceso, instrucciones 
                  de conexión y toda la información necesaria para los participantes.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Configuración de seguridad</span>
                <p className="text-gray-600 mt-1">
                  Implementamos medidas de seguridad como salas de espera, contraseñas 
                  y control de acceso para proteger sus reuniones confidenciales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Gestión de grabaciones</span>
                <p className="text-gray-600 mt-1">
                  Configuramos y gestionamos las grabaciones de reuniones cuando sea necesario, 
                  incluyendo su almacenamiento y distribución posterior.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Soporte técnico en tiempo real</span>
                <p className="text-gray-600 mt-1">
                  Proporcionamos soporte técnico durante la reunión para resolver 
                  cualquier problema de conectividad o funcionalidad que pueda surgir.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Coordinación de horarios internacionales</span>
                <p className="text-gray-600 mt-1">
                  Coordinamos reuniones con participantes en diferentes zonas horarias, 
                  asegurando que todos reciban la información correcta de fecha y hora local.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Reuniones sin interrupciones</h4>
              <p className="text-white text-opacity-90">
                Evite problemas técnicos y enfóquese completamente en el contenido de su reunión.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Imagen profesional</h4>
              <p className="text-white text-opacity-90">
                Proyecte una imagen profesional con reuniones bien organizadas y sin contratiempos.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Seguridad garantizada</h4>
              <p className="text-white text-opacity-90">
                Proteja sus reuniones confidenciales con configuraciones de seguridad apropiadas.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo</h4>
              <p className="text-white text-opacity-90">
                Delegue toda la logística técnica y dedique su tiempo a preparar el contenido.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para tener reuniones virtuales perfectamente coordinadas?</h3>
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

export default CoordinacionReunionesVirtuales;