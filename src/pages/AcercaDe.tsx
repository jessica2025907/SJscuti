import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { navItems } from '../App';

function AcercaDe() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
            <Link
              to="/#contacto"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Cotizar Ahora
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
          
          <div className="flex items-center mb-12">
            <h1 className="text-3xl font-bold">Acerca de SJscuti</h1>
          </div>
          
          <div 
            className="max-w-3xl mx-auto"
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://res.cloudinary.com/dllnci5vy/image/upload/v1747241271/freepik__the-style-is-candid-image-photography-with-natural__67455_kfpuj7.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '2rem',
              borderRadius: '1rem'
            }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              En SJscuti, nos especializamos en ofrecer soluciones integrales y personalizadas para la gestión administrativa, recursos humanos, contabilidad, secretaría y atención al cliente, ayudando a las empresas a optimizar sus operaciones y a centrarse en lo que realmente importa: su crecimiento.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Desde nuestra fundación, nuestro objetivo ha sido proporcionar servicios de alta calidad que contribuyan al éxito de nuestros clientes.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mt-6 mb-12">
              Contamos con un equipo altamente capacitado y comprometido que trabaja con pasión para ofrecer un servicio eficiente, confiable y siempre adaptado a las necesidades específicas de cada empresa.
            </p>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <video 
                      src="https://res.cloudinary.com/dllnci5vy/video/upload/v1752866624/semilla_germinando_manos_qnd4xg.mp4"
                      className="w-8 h-8 mr-3 object-cover rounded"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Nuestra Misión</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Brindar soluciones administrativas externas que optimicen el uso de los recursos, mejoren la eficiencia operativa y permitan a las empresas centrarse en su desarrollo estratégico. Nos esforzamos por ser un socio confiable y ofrecer servicios que superen las expectativas de nuestros clientes.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <video 
                      src="https://res.cloudinary.com/dllnci5vy/video/upload/v1752866668/vision_faro_w8l48s.mp4"
                      className="w-8 h-8 mr-3 object-cover rounded"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <h2 className="text-2xl font-bold text-gray-800">Nuestra Visión</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Ser líderes en la externalización de servicios administrativos, contables y de recursos humanos en Chile, brindando siempre un valor añadido a través de nuestra dedicación, experiencia y enfoque innovador. Aspiramos a construir relaciones duraderas con nuestros clientes, basadas en la confianza, la calidad y la profesionalidad.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-8">
                  <video 
                    src="https://res.cloudinary.com/dllnci5vy/video/upload/v1752866650/valores_diamante_a0ktxp.mp4"
                    className="w-8 h-8 mr-3 object-cover rounded"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <h2 className="text-2xl font-bold text-gray-800">Nuestros Valores</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold text-lg">💪</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Compromiso</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Trabajamos de la mano con nuestros clientes para entender sus necesidades y ofrecerles soluciones efectivas
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold text-lg">⭐</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Excelencia</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Nos esforzamos por ofrecer un servicio de alta calidad en cada área de nuestra empresa
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold text-lg">🤝</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Integridad</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Actuamos con honestidad y transparencia en todas nuestras interacciones
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-bold text-lg">💡</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Innovación</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Buscamos siempre nuevas formas de mejorar nuestros servicios y adaptarnos a los cambios del mercado
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">¿Por Qué Elegirnos?</h2>
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                    <div className="md:w-1/2">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 font-bold text-2xl">🎯</span>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Experiencia y Especialización</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Contamos con un equipo de profesionales especializados en diferentes áreas, como recursos humanos, contabilidad y administración, lo que nos permite ofrecer soluciones personalizadas de alto nivel.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 font-bold text-2xl">🔧</span>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Soluciones Flexibles</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Nos adaptamos a las necesidades cambiantes de cada cliente, brindando servicios escalables y a medida.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                    <div className="md:w-1/2">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 font-bold text-2xl">💻</span>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Tecnología Avanzada</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Utilizamos herramientas y software de última generación para garantizar que nuestros procesos sean eficientes y precisos.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-blue-600 font-bold text-2xl">🤝</span>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Atención al Cliente</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Ofrecemos un soporte cercano y personalizado, asegurándonos de que cada cliente reciba la atención que merece.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 bg-blue-50 p-8 rounded-lg">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              En SJscuti, creemos en el poder de la colaboración. Nos dedicamos a apoyar a nuestros clientes en su camino hacia el éxito, proporcionándoles la tranquilidad de saber que sus operaciones administrativas están en manos expertas.
            </p>
          </div>

          {/* Call to Action */}
          <div className="max-w-3xl mx-auto mt-16 text-center bg-gradient-to-r from-blue-500 to-blue-700 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listos para optimizar tu negocio?</h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Déjanos ayudarte a llevar tu empresa al siguiente nivel con nuestros servicios especializados.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-lg"
            >
              Cotizar Ahora
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AcercaDe;