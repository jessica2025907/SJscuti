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
                  src="https://res.cloudinary.com/dllnci5vy/image/upload/v1746467151/Logo_oficial_1_amvktw.jpg"
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

              <div>
                <div className="flex items-center mb-4">
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
                <ul className="space-y-4 text-gray-700 text-lg leading-relaxed list-disc pl-6">
                  <li>
                    <span className="font-semibold">Compromiso:</span> Trabajamos de la mano con nuestros clientes para entender sus necesidades y ofrecerles soluciones efectivas
                  </li>
                  <li>
                    <span className="font-semibold">Excelencia:</span> Nos esforzamos por ofrecer un servicio de alta calidad en cada área de nuestra empresa
                  </li>
                  <li>
                    <span className="font-semibold">Integridad:</span> Actuamos con honestidad y transparencia en todas nuestras interacciones
                  </li>
                  <li>
                    <span className="font-semibold">Innovación:</span> Buscamos siempre nuevas formas de mejorar nuestros servicios y adaptarnos a los cambios del mercado
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Por Qué Elegirnos?</h2>
                <ul className="space-y-4 text-gray-700 text-lg leading-relaxed list-disc pl-6">
                  <li>
                    <span className="font-semibold">Experiencia y Especialización:</span> Contamos con un equipo de profesionales especializados en diferentes áreas, como recursos humanos, contabilidad y administración, lo que nos permite ofrecer soluciones personalizadas de alto nivel.
                  </li>
                  <li>
                    <span className="font-semibold">Soluciones Flexibles:</span> Nos adaptamos a las necesidades cambiantes de cada cliente, brindando servicios escalables y a medida.
                  </li>
                  <li>
                    <span className="font-semibold">Tecnología Avanzada:</span> Utilizamos herramientas y software de última generación para garantizar que nuestros procesos sean eficientes y precisos.
                  </li>
                  <li>
                    <span className="font-semibold">Atención al Cliente:</span> Ofrecemos un soporte cercano y personalizado, asegurándonos de que cada cliente reciba la atención que merece.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-8 bg-blue-50 p-8 rounded-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
              En SJscuti, creemos en el poder de la colaboración. Nos dedicamos a apoyar a nuestros clientes en su camino hacia el éxito, proporcionándoles la tranquilidad de saber que sus operaciones administrativas están en manos expertas.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AcercaDe;