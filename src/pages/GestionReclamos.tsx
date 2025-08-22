import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, CheckCircle2, FileText, Users, TrendingUp } from 'lucide-react';

interface GestionReclamosProps {
  onOpenContractModal?: () => void;
}

function GestionReclamos({ onOpenContractModal }: GestionReclamosProps = {}) {
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
          <AlertCircle className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Gestión de Reclamos o Solicitudes Simples</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Gestión de Reclamos</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti gestionamos de manera profesional y eficiente los reclamos y solicitudes 
            simples de sus clientes, convirtiendo situaciones potencialmente negativas en 
            oportunidades para demostrar su compromiso con la excelencia en el servicio.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Registro Sistemático</h3>
              <p className="text-gray-600">
                Documentamos cada reclamo de manera detallada para un seguimiento efectivo.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Atención Empática</h3>
              <p className="text-gray-600">
                Tratamos cada reclamo con empatía y profesionalismo para mantener la relación.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Mejora Continua</h3>
              <p className="text-gray-600">
                Analizamos los reclamos para identificar oportunidades de mejora en sus procesos.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Recepción y registro de reclamos</span>
                <p className="text-gray-600 mt-1">
                  Recibimos y registramos todos los reclamos de manera sistemática, 
                  asignando un número de seguimiento y clasificándolos por tipo y urgencia.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Respuesta inicial inmediata</span>
                <p className="text-gray-600 mt-1">
                  Proporcionamos una respuesta inicial dentro de las primeras horas, 
                  reconociendo el reclamo y estableciendo expectativas de resolución.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Investigación y análisis</span>
                <p className="text-gray-600 mt-1">
                  Investigamos cada reclamo de manera objetiva, recopilando toda la 
                  información necesaria para una resolución justa y efectiva.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Coordinación interna</span>
                <p className="text-gray-600 mt-1">
                  Coordinamos con los departamentos relevantes de su empresa para 
                  obtener información y implementar soluciones apropiadas.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Comunicación con el cliente</span>
                <p className="text-gray-600 mt-1">
                  Mantenemos comunicación regular con el cliente durante todo el proceso, 
                  informando sobre el progreso y las acciones tomadas.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Seguimiento post-resolución</span>
                <p className="text-gray-600 mt-1">
                  Realizamos seguimiento después de la resolución para asegurar 
                  la satisfacción del cliente y prevenir recurrencias.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Reportes y análisis de tendencias</span>
                <p className="text-gray-600 mt-1">
                  Generamos reportes periódicos sobre los reclamos recibidos, 
                  identificando patrones y oportunidades de mejora en sus procesos.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Retención de clientes</h4>
              <p className="text-white text-opacity-90">
                Una gestión efectiva de reclamos puede convertir clientes insatisfechos en defensores de su marca.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Mejora de procesos</h4>
              <p className="text-white text-opacity-90">
                Los reclamos proporcionan información valiosa para mejorar productos y servicios.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Reputación protegida</h4>
              <p className="text-white text-opacity-90">
                Una respuesta rápida y profesional protege y fortalece su reputación empresarial.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Cumplimiento normativo</h4>
              <p className="text-white text-opacity-90">
                Aseguramos el cumplimiento de las normativas de protección al consumidor.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para convertir reclamos en oportunidades?</h3>
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

export default GestionReclamos;