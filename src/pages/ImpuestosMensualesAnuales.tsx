import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft, CheckCircle2, Calendar, FileText, Shield } from 'lucide-react';

interface ImpuestosMensualesAnualesProps {
  onOpenContractModal?: () => void;
}

function ImpuestosMensualesAnuales({ onOpenContractModal }: ImpuestosMensualesAnualesProps = {}) {
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
          <Calculator className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Impuestos Mensuales y Anuales</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Gestión de Impuestos</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti ofrecemos un servicio integral de gestión de impuestos mensuales y anuales, 
            asegurando el cumplimiento oportuno de todas sus obligaciones tributarias y optimizando 
            su carga fiscal dentro del marco legal.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Cumplimiento Oportuno</h3>
              <p className="text-gray-600">
                Aseguramos la presentación y pago de sus impuestos dentro de los plazos establecidos.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Declaraciones Precisas</h3>
              <p className="text-gray-600">
                Elaboramos declaraciones de impuestos precisas y completas, minimizando el riesgo de errores.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Optimización Fiscal</h3>
              <p className="text-gray-600">
                Identificamos oportunidades legales para optimizar su carga tributaria y maximizar beneficios.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Impuestos mensuales</span>
                <p className="text-gray-600 mt-1">
                  Preparamos y presentamos sus declaraciones mensuales de IVA (F29), retenciones 
                  de impuestos (F50) y otras obligaciones tributarias periódicas.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Impuesto a la renta anual</span>
                <p className="text-gray-600 mt-1">
                  Preparamos y presentamos su declaración anual de impuesto a la renta (F22), 
                  incluyendo el cálculo de la base imponible y la determinación del impuesto a pagar.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Declaraciones juradas anuales</span>
                <p className="text-gray-600 mt-1">
                  Preparamos y presentamos todas las declaraciones juradas anuales requeridas por el SII, 
                  como DJ1879, DJ1887, DJ1926, entre otras, según corresponda a su actividad.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Planificación tributaria</span>
                <p className="text-gray-600 mt-1">
                  Desarrollamos estrategias para optimizar su carga tributaria dentro del marco legal, 
                  identificando beneficios fiscales y oportunidades de ahorro.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Representación ante el SII</span>
                <p className="text-gray-600 mt-1">
                  Le representamos ante el Servicio de Impuestos Internos en caso de fiscalizaciones, 
                  solicitudes de información o procedimientos administrativos.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Asesoría tributaria permanente</span>
                <p className="text-gray-600 mt-1">
                  Brindamos asesoramiento continuo sobre aspectos tributarios de su negocio, 
                  incluyendo cambios en la legislación fiscal y su impacto en su empresa.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Calendario tributario personalizado</span>
                <p className="text-gray-600 mt-1">
                  Elaboramos un calendario con todas sus obligaciones tributarias, asegurando 
                  el cumplimiento oportuno de cada una de ellas.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Informes tributarios</span>
                <p className="text-gray-600 mt-1">
                  Generamos informes periódicos sobre su situación tributaria, incluyendo impuestos 
                  pagados, créditos fiscales y proyecciones de carga tributaria.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Tranquilidad tributaria</h4>
              <p className="text-white text-opacity-90">
                Delegue en nosotros la responsabilidad de cumplir con todas sus obligaciones tributarias.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Minimización de riesgos</h4>
              <p className="text-white text-opacity-90">
                Evite multas, intereses y sanciones por incumplimiento o errores en sus declaraciones.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Optimización fiscal</h4>
              <p className="text-white text-opacity-90">
                Aproveche todas las oportunidades legales para reducir su carga tributaria y maximizar beneficios.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo y recursos</h4>
              <p className="text-white text-opacity-90">
                Libere a su equipo de la carga administrativa relacionada con la gestión de impuestos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para optimizar la gestión tributaria de su empresa?</h3>
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

export default ImpuestosMensualesAnuales;