import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, CheckCircle2, PieChart, TrendingUp, BarChart3 } from 'lucide-react';

interface InformesFinancierosProps {
  onOpenContractModal?: () => void;
}

function InformesFinancieros({ onOpenContractModal }: InformesFinancierosProps = {}) {
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
          <FileText className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Informes Financieros</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Informes Financieros</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti ofrecemos un servicio integral de elaboración y análisis de informes financieros, 
            proporcionando información valiosa y actualizada sobre el desempeño económico de su empresa 
            para una toma de decisiones informada y estratégica.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Análisis Completo</h3>
              <p className="text-gray-600">
                Proporcionamos un análisis detallado de todos los aspectos financieros de su empresa.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Proyecciones Precisas</h3>
              <p className="text-gray-600">
                Desarrollamos proyecciones financieras basadas en datos históricos y tendencias del mercado.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Visualización Clara</h3>
              <p className="text-gray-600">
                Presentamos la información financiera de manera clara y visual para facilitar su comprensión.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Estados financieros completos</span>
                <p className="text-gray-600 mt-1">
                  Elaboramos el balance general, estado de resultados, estado de flujo de efectivo 
                  y estado de cambios en el patrimonio, siguiendo las normas contables vigentes.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Análisis de rentabilidad</span>
                <p className="text-gray-600 mt-1">
                  Evaluamos la capacidad de su empresa para generar beneficios, analizando márgenes 
                  de ganancia, retorno sobre activos (ROA) y retorno sobre patrimonio (ROE).
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Análisis de liquidez y solvencia</span>
                <p className="text-gray-600 mt-1">
                  Evaluamos la capacidad de su empresa para cumplir con sus obligaciones a corto 
                  y largo plazo, analizando ratios como liquidez corriente, prueba ácida y endeudamiento.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Análisis de eficiencia operativa</span>
                <p className="text-gray-600 mt-1">
                  Evaluamos cómo su empresa utiliza sus recursos, analizando rotación de inventarios, 
                  período promedio de cobro y período promedio de pago.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Análisis de tendencias</span>
                <p className="text-gray-600 mt-1">
                  Comparamos los resultados actuales con períodos anteriores, identificando tendencias 
                  y patrones en el desempeño financiero de su empresa.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Proyecciones financieras</span>
                <p className="text-gray-600 mt-1">
                  Desarrollamos proyecciones de ingresos, gastos, flujo de caja y estados financieros 
                  para períodos futuros, basadas en datos históricos y supuestos realistas.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Informes personalizados</span>
                <p className="text-gray-600 mt-1">
                  Adaptamos nuestros informes a las necesidades específicas de su empresa, 
                  incluyendo análisis de segmentos de negocio, productos o mercados.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Presentación ejecutiva</span>
                <p className="text-gray-600 mt-1">
                  Elaboramos una presentación clara y concisa de los resultados financieros, 
                  utilizando gráficos y visualizaciones para facilitar su comprensión.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Toma de decisiones informada</h4>
              <p className="text-white text-opacity-90">
                Disponga de información financiera precisa y actualizada para tomar decisiones estratégicas.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Identificación de oportunidades y riesgos</h4>
              <p className="text-white text-opacity-90">
                Detecte áreas de mejora, oportunidades de crecimiento y posibles riesgos financieros.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Planificación estratégica</h4>
              <p className="text-white text-opacity-90">
                Utilice nuestras proyecciones financieras para desarrollar planes estratégicos a corto y largo plazo.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Comunicación con stakeholders</h4>
              <p className="text-white text-opacity-90">
                Presente información financiera clara y profesional a inversionistas, bancos, socios y otros interesados.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para obtener informes financieros profesionales para su empresa?</h3>
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

export default InformesFinancieros;