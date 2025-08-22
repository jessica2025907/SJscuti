import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, CheckCircle2, Clock, Users, Video } from 'lucide-react';

interface AgendarReunionesProps {
  onOpenContractModal?: () => void;
}

function AgendarReuniones({ onOpenContractModal }: AgendarReunionesProps = {}) {
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
          <Calendar className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Agendar y Confirmar Reuniones o Llamadas</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Agendamiento de Reuniones</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti nos encargamos de la gestión completa de su agenda de reuniones y llamadas, 
            coordinando horarios, confirmando asistencia y asegurando que todos los participantes 
            estén debidamente informados y preparados.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Coordinación Eficiente</h3>
              <p className="text-gray-600">
                Coordinamos horarios entre múltiples participantes para encontrar el momento ideal.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Confirmación de Asistencia</h3>
              <p className="text-gray-600">
                Confirmamos la asistencia de todos los participantes con anticipación.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Recordatorios Oportunos</h3>
              <p className="text-gray-600">
                Enviamos recordatorios antes de cada reunión para asegurar la puntualidad.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Coordinación de horarios</span>
                <p className="text-gray-600 mt-1">
                  Coordinamos los horarios de todos los participantes para encontrar el momento 
                  más conveniente para la reunión o llamada.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Envío de invitaciones</span>
                <p className="text-gray-600 mt-1">
                  Enviamos invitaciones profesionales con toda la información necesaria: 
                  fecha, hora, duración, agenda y datos de conexión si es virtual.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Confirmación de asistencia</span>
                <p className="text-gray-600 mt-1">
                  Confirmamos la asistencia de todos los participantes y gestionamos 
                  cualquier cambio o reprogramación necesaria.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Recordatorios automáticos</span>
                <p className="text-gray-600 mt-1">
                  Enviamos recordatorios oportunos antes de cada reunión para asegurar 
                  que todos los participantes estén preparados y puntuales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Gestión de cambios</span>
                <p className="text-gray-600 mt-1">
                  Manejamos reprogramaciones, cancelaciones y cambios de último minuto, 
                  comunicando oportunamente a todos los involucrados.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo</h4>
              <p className="text-white text-opacity-90">
                Libere su tiempo de la coordinación de reuniones y enfóquese en lo importante.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Mayor eficiencia</h4>
              <p className="text-white text-opacity-90">
                Reduzca las reuniones canceladas y mejore la puntualidad de los participantes.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Profesionalismo</h4>
              <p className="text-white text-opacity-90">
                Proyecte una imagen profesional con invitaciones y comunicaciones bien estructuradas.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Mejor organización</h4>
              <p className="text-white text-opacity-90">
                Mantenga su agenda organizada y evite conflictos de horarios.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para optimizar la gestión de sus reuniones?</h3>
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

export default AgendarReuniones;