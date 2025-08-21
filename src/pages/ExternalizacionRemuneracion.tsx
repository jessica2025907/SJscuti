import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, ArrowLeft, CheckCircle2, Shield, Clock, FileText } from 'lucide-react';

interface ExternalizacionRemuneracionProps {
  onOpenContractModal?: () => void;
}

function ExternalizacionRemuneracion({ onOpenContractModal }: ExternalizacionRemuneracionProps = {}) {
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
          <DollarSign className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Externalización de la Remuneración</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Externalización de la Remuneración</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti ofrecemos un servicio integral de externalización de la remuneración, 
            permitiéndole delegar todo el proceso de cálculo y pago de sueldos a nuestro equipo 
            de expertos, garantizando precisión, confidencialidad y cumplimiento normativo.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Cálculo Preciso</h3>
              <p className="text-gray-600">
                Cálculo exacto de sueldos, bonificaciones, descuentos y cotizaciones previsionales.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Puntualidad</h3>
              <p className="text-gray-600">
                Garantizamos el procesamiento oportuno de las remuneraciones según su calendario de pagos.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Cumplimiento Legal</h3>
              <p className="text-gray-600">
                Aseguramos el cumplimiento de todas las normativas laborales y previsionales vigentes.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Cálculo de remuneraciones</span>
                <p className="text-gray-600 mt-1">
                  Procesamos el cálculo de sueldos, horas extras, bonificaciones, comisiones y 
                  cualquier otro componente de la remuneración de sus empleados.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Cálculo y declaración de cotizaciones previsionales</span>
                <p className="text-gray-600 mt-1">
                  Calculamos las cotizaciones de AFP, salud, seguro de cesantía y otras obligaciones 
                  previsionales, y gestionamos su declaración y pago a través de Previred.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Emisión de liquidaciones de sueldo</span>
                <p className="text-gray-600 mt-1">
                  Generamos liquidaciones de sueldo detalladas y claras para cada uno de sus empleados, 
                  cumpliendo con todos los requisitos legales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Libro de remuneraciones</span>
                <p className="text-gray-600 mt-1">
                  Mantenemos actualizado el libro de remuneraciones de su empresa, cumpliendo con 
                  la obligación legal de registro.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Cálculo de finiquitos</span>
                <p className="text-gray-600 mt-1">
                  En caso de desvinculación, calculamos el finiquito correspondiente, incluyendo 
                  indemnizaciones, vacaciones proporcionales y otros conceptos aplicables.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Certificados anuales</span>
                <p className="text-gray-600 mt-1">
                  Emitimos los certificados anuales de renta para sus empleados, necesarios para 
                  su declaración de impuestos.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Asesoría permanente</span>
                <p className="text-gray-600 mt-1">
                  Brindamos asesoramiento continuo sobre aspectos relacionados con la remuneración, 
                  incluyendo cambios en la legislación laboral y previsional.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de externalizar la remuneración</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo y recursos</h4>
              <p className="text-white text-opacity-90">
                Libere a su equipo de RR.HH. de tareas administrativas para que puedan enfocarse en 
                actividades estratégicas.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Reducción de errores</h4>
              <p className="text-white text-opacity-90">
                Minimice el riesgo de errores en el cálculo de sueldos y cotizaciones previsionales.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Confidencialidad</h4>
              <p className="text-white text-opacity-90">
                Garantizamos la confidencialidad de la información salarial de sus empleados.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Cumplimiento normativo</h4>
              <p className="text-white text-opacity-90">
                Asegure el cumplimiento de todas las obligaciones legales relacionadas con la remuneración.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para optimizar la gestión de remuneraciones en su empresa?</h3>
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

export default ExternalizacionRemuneracion;