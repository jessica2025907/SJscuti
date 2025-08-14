import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowLeft, CheckCircle2, Calendar, AlertTriangle, Clock } from 'lucide-react';

interface RecordatoriosPagosProps {
  onOpenContractModal?: () => void;
}

function RecordatoriosPagos({ onOpenContractModal }: RecordatoriosPagosProps = {}) {
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
          <Bell className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Recordatorios de Pagos, Vencimientos o Citas</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Recordatorios Automatizados</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti implementamos un sistema integral de recordatorios que le ayuda a 
            mantenerse al día con todos sus compromisos financieros, citas importantes y 
            fechas de vencimiento, evitando multas, intereses y oportunidades perdidas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Seguimiento Completo</h3>
              <p className="text-gray-600">
                Monitoreamos todas sus fechas importantes y compromisos financieros.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Alertas Oportunas</h3>
              <p className="text-gray-600">
                Enviamos alertas con la anticipación necesaria para cada tipo de compromiso.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Múltiples Canales</h3>
              <p className="text-gray-600">
                Utilizamos email, WhatsApp y llamadas según sus preferencias.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Recordatorios de pagos de impuestos</span>
                <p className="text-gray-600 mt-1">
                  Le recordamos las fechas de vencimiento de IVA, impuesto a la renta, 
                  patentes municipales y otros tributos para evitar multas e intereses.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Recordatorios de pagos a proveedores</span>
                <p className="text-gray-600 mt-1">
                  Gestionamos recordatorios para pagos a proveedores, manteniendo 
                  buenas relaciones comerciales y aprovechando descuentos por pronto pago.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Recordatorios de vencimientos contractuales</span>
                <p className="text-gray-600 mt-1">
                  Le alertamos sobre vencimientos de contratos, seguros, licencias 
                  y otros documentos importantes que requieren renovación.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Recordatorios de citas importantes</span>
                <p className="text-gray-600 mt-1">
                  Enviamos recordatorios para reuniones con clientes, citas bancarias, 
                  presentaciones y otros compromisos profesionales críticos.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Sistema de alertas escalonadas</span>
                <p className="text-gray-600 mt-1">
                  Implementamos múltiples recordatorios con diferentes niveles de anticipación: 
                  30 días, 15 días, 7 días y 1 día antes del vencimiento.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Seguimiento post-vencimiento</span>
                <p className="text-gray-600 mt-1">
                  En caso de que no se realice el pago o acción requerida, 
                  continuamos con recordatorios para minimizar las consecuencias.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Evite multas e intereses</h4>
              <p className="text-white text-opacity-90">
                Nunca más pague multas por pagos atrasados o vencimientos olvidados.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Mejor flujo de caja</h4>
              <p className="text-white text-opacity-90">
                Planifique mejor sus pagos y mantenga un flujo de caja más controlado.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Relaciones comerciales sólidas</h4>
              <p className="text-white text-opacity-90">
                Mantenga buenas relaciones con proveedores pagando siempre a tiempo.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Tranquilidad mental</h4>
              <p className="text-white text-opacity-90">
                Libérese del estrés de recordar fechas importantes y compromisos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para nunca más olvidar un pago o cita importante?</h3>
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

export default RecordatoriosPagos;