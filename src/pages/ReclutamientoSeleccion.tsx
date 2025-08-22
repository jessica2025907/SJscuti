import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, CheckCircle2, Search, UserCheck, FileText } from 'lucide-react';

interface ReclutamientoSeleccionProps {
  onOpenContractModal?: () => void;
}

function ReclutamientoSeleccion({ onOpenContractModal }: ReclutamientoSeleccionProps = {}) {
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
          <Users className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Reclutamiento y Selección</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Proceso de Reclutamiento y Selección</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti ofrecemos un servicio integral de reclutamiento y selección de personal, 
            diseñado para encontrar a los candidatos ideales que se ajusten a las necesidades 
            específicas de su empresa y a su cultura organizacional.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Búsqueda</h3>
              <p className="text-gray-600">
                Identificamos y atraemos a los mejores talentos del mercado a través de múltiples canales.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Evaluación</h3>
              <p className="text-gray-600">
                Evaluamos competencias, habilidades y ajuste cultural mediante entrevistas y pruebas.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Selección</h3>
              <p className="text-gray-600">
                Presentamos a los candidatos más calificados con informes detallados para su decisión final.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro proceso incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Análisis del perfil del cargo</span>
                <p className="text-gray-600 mt-1">
                  Trabajamos en estrecha colaboración con usted para definir claramente el perfil 
                  del cargo, incluyendo responsabilidades, requisitos técnicos y competencias necesarias.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Búsqueda y atracción de candidatos</span>
                <p className="text-gray-600 mt-1">
                  Utilizamos diversas fuentes y estrategias para identificar y atraer a los mejores 
                  talentos, incluyendo portales de empleo, redes sociales y nuestra base de datos.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Evaluación y filtrado</span>
                <p className="text-gray-600 mt-1">
                  Realizamos un riguroso proceso de evaluación que incluye entrevistas por competencias, 
                  pruebas técnicas y verificación de referencias laborales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Presentación de candidatos finalistas</span>
                <p className="text-gray-600 mt-1">
                  Le presentamos un informe detallado de los candidatos más calificados, destacando 
                  sus fortalezas, áreas de mejora y ajuste con la cultura de su empresa.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Acompañamiento en la decisión final</span>
                <p className="text-gray-600 mt-1">
                  Le asesoramos durante el proceso de toma de decisiones y le apoyamos en la 
                  negociación con el candidato seleccionado.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo y recursos</h4>
              <p className="text-white text-opacity-90">
                Nos encargamos de todo el proceso, permitiéndole concentrarse en su negocio.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Acceso a una amplia red de talentos</h4>
              <p className="text-white text-opacity-90">
                Contamos con una extensa base de datos y múltiples canales de reclutamiento.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Evaluación profesional y objetiva</h4>
              <p className="text-white text-opacity-90">
                Utilizamos metodologías probadas para evaluar competencias y habilidades.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Reducción de rotación de personal</h4>
              <p className="text-white text-opacity-90">
                Seleccionamos candidatos que se ajustan no solo al perfil técnico sino también a su cultura.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Necesita encontrar al candidato ideal para su empresa?</h3>
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

export default ReclutamientoSeleccion;