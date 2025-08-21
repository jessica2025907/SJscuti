import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, ArrowLeft, CheckCircle2, LineChart, PieChart, TrendingUp } from 'lucide-react';

interface BalanceGeneralProps {
  onOpenContractModal?: () => void;
}

function BalanceGeneral({ onOpenContractModal }: BalanceGeneralProps = {}) {
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
          <BarChart className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Balance General</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Balance General</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti ofrecemos un servicio profesional de preparación y análisis de balance general, 
            proporcionando una imagen clara y precisa de la situación financiera de su empresa en un 
            momento determinado.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Precisión Financiera</h3>
              <p className="text-gray-600">
                Elaboramos balances precisos que reflejan fielmente la situación financiera de su empresa.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LineChart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Análisis Detallado</h3>
              <p className="text-gray-600">
                Proporcionamos un análisis completo de sus activos, pasivos y patrimonio.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Toma de Decisiones</h3>
              <p className="text-gray-600">
                Facilitamos información clave para la toma de decisiones estratégicas en su negocio.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Preparación del balance general</span>
                <p className="text-gray-600 mt-1">
                  Elaboramos un balance general completo y detallado, que incluye todos los activos, 
                  pasivos y patrimonio de su empresa, siguiendo los principios contables generalmente aceptados.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Análisis de la estructura financiera</span>
                <p className="text-gray-600 mt-1">
                  Analizamos la composición de sus activos (corrientes y no corrientes), pasivos 
                  (corto y largo plazo) y patrimonio, identificando fortalezas y áreas de mejora.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Cálculo e interpretación de ratios financieros</span>
                <p className="text-gray-600 mt-1">
                  Calculamos e interpretamos indicadores clave como liquidez, solvencia, endeudamiento 
                  y capital de trabajo, proporcionando una visión clara de la salud financiera de su empresa.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Comparación con períodos anteriores</span>
                <p className="text-gray-600 mt-1">
                  Realizamos un análisis comparativo con balances de períodos anteriores, 
                  identificando tendencias y evolución de la situación financiera.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Informe ejecutivo</span>
                <p className="text-gray-600 mt-1">
                  Elaboramos un informe claro y conciso que resume los aspectos más relevantes 
                  del balance y proporciona recomendaciones para mejorar la situación financiera.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Presentación a la gerencia</span>
                <p className="text-gray-600 mt-1">
                  Si lo desea, realizamos una presentación del balance y su análisis a la gerencia 
                  o directorio, explicando los aspectos más relevantes y respondiendo a sus consultas.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Asesoría financiera</span>
                <p className="text-gray-600 mt-1">
                  Brindamos recomendaciones para optimizar la estructura financiera de su empresa, 
                  mejorar indicadores clave y fortalecer su posición en el mercado.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Visión clara de su situación financiera</h4>
              <p className="text-white text-opacity-90">
                Obtenga una imagen precisa de los activos, pasivos y patrimonio de su empresa en un momento determinado.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Toma de decisiones informada</h4>
              <p className="text-white text-opacity-90">
                Utilice la información del balance para tomar decisiones estratégicas sobre inversiones, financiamiento y operaciones.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Cumplimiento normativo</h4>
              <p className="text-white text-opacity-90">
                Asegure el cumplimiento de las obligaciones legales relacionadas con la presentación de estados financieros.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Credibilidad ante terceros</h4>
              <p className="text-white text-opacity-90">
                Presente información financiera confiable a bancos, inversionistas, proveedores y otros stakeholders.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para obtener una visión clara de la situación financiera de su empresa?</h3>
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

export default BalanceGeneral;