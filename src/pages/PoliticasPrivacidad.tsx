import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { navItems } from '../App';

function PoliticasPrivacidad() {
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

      <div className="pt-32 pb-12 flex-grow">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">POLÍTICA DE PRIVACIDAD DE SJSCUTI SERVICIOS EMPRESARIALES</h1>
            <p className="text-gray-600 mb-8 text-center">Última actualización: 17 de mayo de 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bienvenido a SJscuti Servicios Empresariales (en adelante, "nosotros", "nuestro", o "SJscuti"). 
                  Nos comprometemos a proteger la privacidad de nuestros usuarios y clientes ("usted", "su"). 
                  Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su 
                  información personal cuando visita nuestro sitio web SJscuti.cl (en adelante, el "Sitio Web") 
                  y utiliza nuestros servicios. Al utilizar nuestro Sitio Web y nuestros servicios, usted acepta 
                  las prácticas descritas en esta Política de Privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Responsable del Tratamiento de Datos</h2>
                <p className="text-gray-700 leading-relaxed">
                  El responsable del tratamiento de sus datos personales es:<br />
                  SJscuti Servicios Empresariales<br />
                  Correo electrónico de contacto para asuntos de privacidad: contacto@SJscuti.cl
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Información que Recopilamos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Recopilamos los siguientes tipos de información personal:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2">Información de Contacto:</h3>
                  <p className="text-gray-700">Nombres, direcciones de correo electrónico y números de teléfono.</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Esta información se recopila directamente de usted a través de:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-semibold">Formularios de Contacto:</span> Cuando nos contacta para 
                    realizar consultas o solicitar información sobre nuestros servicios.
                  </li>
                  <li>
                    <span className="font-semibold">Proceso de Compra o Contratación de Servicios:</span> Cuando 
                    nos proporciona sus datos para adquirir o contratar nuestros servicios empresariales.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Cómo Utilizamos su Información</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Utilizamos la información personal que recopilamos con las siguientes finalidades principales:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-semibold">Proveer nuestros servicios:</span> Para gestionar su cuenta, 
                    procesar sus solicitudes y compras, y entregar los servicios empresariales que ha contratado.
                  </li>
                  <li>
                    <span className="font-semibold">Comunicación:</span> Para responder a sus consultas, enviarle 
                    información sobre los servicios solicitados, y comunicarnos con usted sobre asuntos 
                    administrativos o relacionados con el servicio.
                  </li>
                  <li>
                    <span className="font-semibold">Cumplimiento de obligaciones legales:</span> Para cumplir con 
                    las leyes, regulaciones y solicitudes legales aplicables.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Base Legal para el Tratamiento de Datos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El tratamiento de sus datos personales se basa en:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-semibold">Su consentimiento:</span> Otorgado al proporcionarnos sus 
                    datos a través de nuestros formularios de contacto o al registrarse para nuestros servicios.
                  </li>
                  <li>
                    <span className="font-semibold">La necesidad contractual:</span> Para cumplir con nuestras 
                    obligaciones derivadas de cualquier contrato celebrado entre usted y nosotros.
                  </li>
                  <li>
                    <span className="font-semibold">Cumplimiento de obligaciones legales:</span> Según lo exija 
                    la legislación chilena, incluyendo la Ley N° 19.628.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Intercambio y Divulgación de Información</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SJscuti Servicios Empresariales no comparte, vende ni alquila su información personal a 
                  terceros con fines de marketing de dichos terceros.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Podríamos divulgar su información personal en las siguientes circunstancias limitadas:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-semibold">Proveedores de Servicios:</span> Podemos compartir 
                    información con terceros proveedores que nos ayudan a operar nuestro Sitio Web y prestar 
                    nuestros servicios, siempre y cuando estos proveedores se comprometan a proteger la 
                    información y la utilicen únicamente para los fines para los que fue compartida.
                  </li>
                  <li>
                    <span className="font-semibold">Requisitos Legales:</span> Si así lo exige la ley, una 
                    orden judicial o un proceso legal.
                  </li>
                  <li>
                    <span className="font-semibold">Protección de Derechos:</span> Para proteger nuestros 
                    derechos, propiedad o seguridad, o los de nuestros usuarios u otros.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies y Tecnologías de Seguimiento</h2>
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos cookies esenciales en nuestro Sitio Web. Las cookies esenciales son necesarias para 
                  el funcionamiento técnico del Sitio Web y no pueden ser desactivadas en nuestros sistemas. 
                  Generalmente se configuran en respuesta a acciones realizadas por usted que equivalen a una 
                  solicitud de servicios, como iniciar sesión o completar formularios. Puede configurar su 
                  navegador para bloquear o alertarle sobre estas cookies, pero algunas partes del sitio no 
                  funcionarán entonces. Estas cookies no almacenan ninguna información de identificación personal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Retención de Datos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Conservaremos su información personal solo durante el tiempo que sea necesario para los fines 
                  para los que fue recopilada, incluyendo el cumplimiento de cualquier requisito legal, contable 
                  o de presentación de informes. Para determinar el período de retención apropiado, consideramos 
                  la cantidad, naturaleza y sensibilidad de los datos personales, el riesgo potencial de daño 
                  por uso o divulgación no autorizados, los fines para los cuales procesamos sus datos personales 
                  y si podemos lograr esos fines a través de otros medios, y los requisitos legales aplicables.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Seguridad de los Datos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nos comprometemos a proteger la seguridad de su información personal. Implementamos medidas 
                  técnicas y organizativas apropiadas para proteger sus datos contra el acceso no autorizado, 
                  la alteración, la divulgación o la destrucción.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Estas medidas pueden incluir, entre otras:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>Uso de servidores seguros.</li>
                  <li>Controles de acceso para restringir el acceso a la información personal.</li>
                  <li>Encriptación de datos sensibles cuando sea aplicable.</li>
                  <li>Procedimientos internos para la gestión de incidentes de seguridad.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Sus Derechos de Protección de Datos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada y otras leyes aplicables, 
                  usted tiene derechos sobre su información personal, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <span className="font-semibold">Derecho de Acceso:</span> Tiene derecho a solicitar una 
                    copia de la información personal que tenemos sobre usted.
                  </li>
                  <li>
                    <span className="font-semibold">Derecho de Rectificación:</span> Tiene derecho a solicitar 
                    la corrección de cualquier información personal inexacta o incompleta.
                  </li>
                  <li>
                    <span className="font-semibold">Derecho de Cancelación (Eliminación):</span> Tiene derecho 
                    a solicitar la eliminación de su información personal cuando ya no sea necesaria.
                  </li>
                  <li>
                    <span className="font-semibold">Derecho de Oposición:</span> Tiene derecho a oponerse al 
                    tratamiento de sus datos personales en determinadas circunstancias.
                  </li>
                  <li>
                    <span className="font-semibold">Derecho a la Portabilidad de los Datos:</span> (Según 
                    aplique y esté regulado).
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Para ejercer cualquiera de estos derechos, por favor contáctenos a través de: 
                  contacto@SJscuti.cl. Es posible que le pidamos que verifique su identidad antes de 
                  responder a su solicitud.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Enlaces a Sitios Web de Terceros</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro Sitio Web puede contener enlaces a otros sitios web que no son operados por nosotros. 
                  Si hace clic en un enlace de un tercero, será dirigido al sitio de ese tercero. Le recomendamos 
                  encarecidamente que revise la Política de Privacidad de cada sitio que visite. No tenemos 
                  control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad o 
                  las prácticas de los sitios o servicios de terceros.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Privacidad de los Menores de Edad</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nuestros servicios no están dirigidos a personas menores de 18 años (o la edad legal de 
                  mayoría en su jurisdicción). No recopilamos intencionadamente información personal de menores 
                  de edad. Si usted es padre o tutor y sabe que su hijo nos ha proporcionado información 
                  personal, póngase en contacto con nosotros. Si descubrimos que hemos recopilado información 
                  personal de un menor sin verificación del consentimiento paterno, tomaremos medidas para 
                  eliminar esa información de nuestros servidores.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Cambios a esta Política de Privacidad</h2>
                <p className="text-gray-700 leading-relaxed">
                  Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier 
                  cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de 
                  "Última actualización" en la parte superior. Le recomendamos que revise esta Política de 
                  Privacidad periódicamente para cualquier cambio. Los cambios a esta Política de Privacidad 
                  son efectivos cuando se publican en esta página.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">14. Contáctenos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos:<br />
                  SJscuti Servicios Empresariales<br />
                  Correo electrónico: contacto@SJscuti.cl
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PoliticasPrivacidad;