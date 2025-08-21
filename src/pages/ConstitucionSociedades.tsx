import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, CheckCircle2, Building, FileCheck, Shield } from 'lucide-react';
import Footer from '../components/Footer';

interface ConstitucionSociedadesProps {
  onOpenContractModal?: () => void;
}

function ConstitucionSociedades({ onOpenContractModal }: ConstitucionSociedadesProps = {}) {
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
          <h1 className="text-3xl font-bold">Constitución de Sociedades</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Servicio de Constitución de Sociedades</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            En SJscuti ofrecemos un servicio integral para la constitución legal de su empresa o sociedad, 
            guiándole a través de todo el proceso y asegurando el cumplimiento de todos los requisitos 
            legales y administrativos.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Asesoría Inicial</h3>
              <p className="text-gray-600">
                Le ayudamos a elegir el tipo de sociedad más adecuado para su proyecto empresarial.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Trámites Legales</h3>
              <p className="text-gray-600">
                Nos encargamos de toda la documentación y trámites necesarios para la constitución.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Protección Legal</h3>
              <p className="text-gray-600">
                Aseguramos que su empresa cumpla con todas las normativas vigentes desde el inicio.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-4">Nuestro servicio incluye:</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Asesoría sobre el tipo de sociedad</span>
                <p className="text-gray-600 mt-1">
                  Le orientamos sobre las diferentes opciones (SpA, Ltda., S.A., EIRL) y le ayudamos 
                  a elegir la más adecuada según sus necesidades y objetivos empresariales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Redacción de estatutos sociales</span>
                <p className="text-gray-600 mt-1">
                  Elaboramos los estatutos de su sociedad, definiendo claramente su objeto social, 
                  capital, administración y demás aspectos relevantes.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Tramitación ante notaría</span>
                <p className="text-gray-600 mt-1">
                  Gestionamos la firma de la escritura pública de constitución ante notario.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Inscripción en el Registro de Comercio</span>
                <p className="text-gray-600 mt-1">
                  Realizamos la inscripción de su sociedad en el Registro de Comercio del Conservador 
                  de Bienes Raíces correspondiente.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Publicación en el Diario Oficial</span>
                <p className="text-gray-600 mt-1">
                  Gestionamos la publicación del extracto de constitución en el Diario Oficial.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Obtención de RUT e inicio de actividades</span>
                <p className="text-gray-600 mt-1">
                  Le asistimos en la obtención del RUT de su empresa y en la declaración de inicio 
                  de actividades ante el Servicio de Impuestos Internos (SII).
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold">Asesoría post-constitución</span>
                <p className="text-gray-600 mt-1">
                  Le orientamos sobre los siguientes pasos a seguir una vez constituida su empresa, 
                  incluyendo aspectos contables, tributarios y laborales.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-6">¿Por qué elegir nuestro servicio?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Experiencia y conocimiento</h4>
              <p className="text-white text-opacity-90">
                Contamos con amplia experiencia en la constitución de diferentes tipos de sociedades.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Servicio integral</h4>
              <p className="text-white text-opacity-90">
                Nos encargamos de todo el proceso, desde la asesoría inicial hasta la obtención del RUT.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Ahorro de tiempo y esfuerzo</h4>
              <p className="text-white text-opacity-90">
                Evite trámites complejos y dedique su tiempo a lo que realmente importa: su negocio.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Seguridad jurídica</h4>
              <p className="text-white text-opacity-90">
                Garantizamos que su empresa cumpla con todos los requisitos legales desde su constitución.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">¿Listo para dar el paso y constituir legalmente su empresa?</h3>
          <button
            onClick={onOpenContractModal}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Solicitar una cotización
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConstitucionSociedades;