import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { navItems } from '../App';

interface RrhhOptimizationArticleProps {
  onOpenContractModal?: () => void;
}

function RrhhOptimizationArticle({ onOpenContractModal }: RrhhOptimizationArticleProps = {}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dllnci5vy/image/upload/v1755622188/SJ_SCUTI_SERVICIOS_EMPRESARIALES_3_mxycae.png"
                  alt="SJscuti Logo" 
                  className="w-20 h-20"
                />
                <span className="ml-2 text-xl font-bold">SJscuti</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                {navItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.href} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300 font-bold"
                  >
                    {item.icon}
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <button
              onClick={onOpenContractModal}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Cotizar Ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="pt-20">
        <div className="relative w-full h-96 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dllnci5vy/image/upload/v1755871923/Gemini_Generated_Image_3srwvh3srwvh3srw_ynlsra.png"
            alt="Optimización de RRHH 2025"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>

      {/* Article Content */}
      <div className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Link>
          </div>

          <article className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              Optimiza tu Gestión de RRHH en 2025: La Clave para el Éxito Empresarial
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-8 text-gray-600 font-medium">
                En el dinámico mundo empresarial de 2025, la gestión de Recursos Humanos ha dejado de ser solo una función administrativa para convertirse en el motor estratégico de cualquier organización. La clave para prosperar no radica solo en atraer talento, sino en optimizar la experiencia del empleado desde el primer día. Aquí te contamos cómo lograrlo.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                1. La Tecnología como tu Mejor Aliada
              </h2>
              <p className="mb-8">
                Olvídate de las hojas de cálculo y los procesos manuales. Hoy, el software de gestión de RRHH (HRMS) no es un lujo, sino una necesidad. Estas plataformas integrales te permiten automatizar tareas repetitivas como la nómina, el seguimiento de la asistencia y la gestión de beneficios. Esto libera a tu equipo de RRHH para que se concentre en lo que realmente importa: el desarrollo y bienestar de los empleados.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                2. El Auge de la Analítica de Datos
              </h2>
              <p className="mb-8">
                ¿Sabes por qué tus empleados más valiosos se quedan o se van? La respuesta está en los datos. El análisis predictivo de personas te permite identificar tendencias y tomar decisiones informadas. Utiliza herramientas de análisis para entender la satisfacción laboral, predecir la rotación de personal y diseñar programas de capacitación personalizados que realmente impacten en el desempeño.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                3. Flexibilidad y Bienestar: La Nueva Moneda
              </h2>
              <p className="mb-8">
                En 2025, el modelo de "trabajo flexible" se ha consolidado. Las empresas exitosas ofrecen opciones de trabajo híbrido o 100% remoto, adaptándose a las necesidades de su fuerza laboral. Además, invierte en el bienestar integral de tus empleados. Ofrece apoyo para la salud mental, programas de mindfulness y espacios de desconexión. Un empleado feliz y saludable es un empleado más productivo y comprometido.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                4. Experiencia del Empleado (EX) sobre todo
              </h2>
              <p className="mb-8">
                Desde el proceso de reclutamiento hasta la desvinculación, cada punto de contacto con el empleado debe ser impecable. Una experiencia del empleado (EX) positiva fortalece la marca empleadora, mejora la lealtad y convierte a tus colaboradores en los mejores embajadores de tu empresa. Invierte en un onboarding excepcional y en una comunicación transparente y constante.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Optimizar la gestión de RRHH en 2025 significa abrazar la tecnología, los datos y, sobre todo, poner a las personas en el centro de tu estrategia. Al hacerlo, no solo mejoras la eficiencia operativa, sino que construyes una cultura empresarial sólida y atractiva para el talento del futuro.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-700 text-lg mb-4">¿Necesitas ayuda con Recursos Humanos?</p>
                <button
                  onClick={onOpenContractModal}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Cotizar Ahora
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RrhhOptimizationArticle;