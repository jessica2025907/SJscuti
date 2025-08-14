import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, CheckCircle2, Smartphone, FolderSync as Sync, Settings } from 'lucide-react';

interface OrganizacionCalendariosProps {
  onOpenContractModal?: () => void;
}

function OrganizacionCalendarios({ onOpenContractModal }: OrganizacionCalendariosProps = {}) {
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
          <h1 className="text-3xl font-bold">Organización y Mantenimiento de Calendarios</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Gestión de Calendarios</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti nos encargamos de la organización completa de sus calendarios digitales, 
            manteniendo sincronizados todos sus dispositivos y plataformas para que tenga 
            acceso actualizado a su agenda desde cualquier lugar.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sync className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Sincronización Total</h3>
              <p className="text-gray-600">
                Mantenemos sincronizados todos sus calendarios en diferentes plataformas.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Acceso Multiplataforma</h3>
              <p className="text-gray-600">
                Acceda a su calendario desde cualquier dispositivo: móvil, tablet o computador.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Configuración Personalizada</h3>
              <p className="text-gray-600">
                Configuramos su calendario según sus preferencias y necesidades específicas.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Configuración inicial de calendarios</span>
                <p className="text-gray-600 mt-1">
                  Configuramos sus calendarios en Google Calendar, Outlook y otras plataformas 
                  según sus preferencias y necesidades empresariales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Sincronización entre dispositivos</span>
                <p className="text-gray-600 mt-1">
                  Aseguramos que todos sus dispositivos (móvil, tablet, computador) 
                  muestren la misma información actualizada en tiempo real.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Organización por categorías</span>
                <p className="text-gray-600 mt-1">
                  Organizamos sus eventos por categorías (trabajo, personal, reuniones, viajes) 
                  con códigos de colores para fácil identificación.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Mantenimiento y actualización</span>
                <p className="text-gray-600 mt-1">
                  Realizamos mantenimiento regular, actualizaciones y respaldos 
                  para asegurar que su información esté siempre protegida.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Configuración de recordatorios</span>
                <p className="text-gray-600 mt-1">
                  Configuramos recordatorios personalizados para diferentes tipos de eventos, 
                  asegurando que nunca olvide una cita importante.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Calendarios compartidos</span>
                <p className="text-gray-600 mt-1">
                  Configuramos calendarios compartidos para equipos de trabajo, 
                  facilitando la coordinación y planificación grupal.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Organización total</h4>
              <p className="text-white text-opacity-90">
                Mantenga toda su agenda organizada y accesible desde cualquier lugar.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Productividad mejorada</h4>
              <p className="text-white text-opacity-90">
                Optimice su tiempo con una agenda bien estructurada y recordatorios oportunos.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Sincronización perfecta</h4>
              <p className="text-white text-opacity-90">
                Acceda a su calendario actualizado desde cualquier dispositivo en tiempo real.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Colaboración eficiente</h4>
              <p className="text-white text-opacity-90">
                Facilite la coordinación con su equipo mediante calendarios compartidos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para tener sus calendarios perfectamente organizados?</h3>
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

export default OrganizacionCalendarios;