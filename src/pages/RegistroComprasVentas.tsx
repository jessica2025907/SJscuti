import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, CheckCircle2, FileText, TrendingUp, Shield } from 'lucide-react';

interface RegistroComprasVentasProps {
  onOpenContractModal?: () => void;
}

function RegistroComprasVentas({ onOpenContractModal }: RegistroComprasVentasProps = {}) {
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
          <ShoppingCart className="w-10 h-10 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold">Registro de Compras y Ventas</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Registro de Compras y Ventas</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti ofrecemos un servicio integral de registro y control de compras y ventas, 
            asegurando un manejo preciso de sus transacciones comerciales y el cumplimiento de 
            todas las obligaciones tributarias relacionadas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Registro Detallado</h3>
              <p className="text-gray-600">
                Mantenemos un registro detallado y organizado de todas sus transacciones comerciales.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Análisis Financiero</h3>
              <p className="text-gray-600">
                Proporcionamos informes y análisis para una mejor toma de decisiones comerciales.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Cumplimiento Tributario</h3>
              <p className="text-gray-600">
                Aseguramos el cumplimiento de todas las obligaciones tributarias relacionadas con sus transacciones.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Registro de facturas de compra</span>
                <p className="text-gray-600 mt-1">
                  Registramos todas sus facturas de compra, verificando su validez y clasificándolas 
                  según su naturaleza (gastos operacionales, activos fijos, etc.).
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Registro de facturas de venta</span>
                <p className="text-gray-600 mt-1">
                  Mantenemos un registro actualizado de todas sus facturas de venta, controlando 
                  su secuencia y verificando su correcta emisión.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Control de IVA</span>
                <p className="text-gray-600 mt-1">
                  Calculamos y controlamos el IVA débito y crédito fiscal, determinando el monto 
                  a pagar o el remanente para el período siguiente.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Declaración de impuestos mensuales</span>
                <p className="text-gray-600 mt-1">
                  Preparamos y presentamos sus declaraciones de IVA (Formulario 29) y otras 
                  obligaciones tributarias mensuales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Conciliación con registros contables</span>
                <p className="text-gray-600 mt-1">
                  Aseguramos la coherencia entre sus registros de compras y ventas y su contabilidad general.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Informes periódicos</span>
                <p className="text-gray-600 mt-1">
                  Generamos informes detallados de sus compras y ventas, permitiéndole analizar 
                  tendencias y tomar decisiones informadas.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Asesoría tributaria</span>
                <p className="text-gray-600 mt-1">
                  Brindamos asesoramiento sobre aspectos tributarios relacionados con sus 
                  transacciones comerciales, incluyendo tratamiento de operaciones especiales.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">Beneficios de nuestro servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Control financiero</h4>
              <p className="text-white text-opacity-90">
                Obtenga una visión clara y detallada de sus ingresos y gastos para una mejor gestión financiera.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Cumplimiento tributario</h4>
              <p className="text-white text-opacity-90">
                Evite multas y sanciones por incumplimiento de obligaciones tributarias relacionadas con el IVA.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo</h4>
              <p className="text-white text-opacity-90">
                Delegue en nosotros las tareas administrativas relacionadas con el registro y control de sus transacciones.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Información para toma de decisiones</h4>
              <p className="text-white text-opacity-90">
                Utilice nuestros informes para analizar su actividad comercial y tomar decisiones estratégicas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para optimizar el control de sus transacciones comerciales?</h3>
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

export default RegistroComprasVentas;