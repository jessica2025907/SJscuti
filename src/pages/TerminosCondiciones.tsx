import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { navItems } from '../App';

function TerminosCondiciones() {
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

      <div className="pt-32 pb-12 flex-grow">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">TÉRMINOS Y CONDICIONES DE USO DE SJSCUTI SERVICIOS EMPRESARIALES</h1>
            <p className="text-gray-600 mb-8 text-center">Última actualización: 17 de mayo de 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bienvenido a SJscuti Servicios Empresariales (en adelante, "SJscuti", "nosotros", "nuestro"). 
                  Estos Términos y Condiciones (en adelante, los "Términos") rigen el uso de nuestro sitio web 
                  SJscuti.cl (en adelante, el "Sitio Web") y los servicios ofrecidos a través del mismo.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Al acceder y utilizar nuestro Sitio Web y nuestros servicios, usted (en adelante, "Usuario" o 
                  "Cliente") reconoce que ha leído, entendido y acepta estar sujeto a estos Términos, así como 
                  a nuestra Política de Privacidad, que se incorpora por referencia a estos Términos. Si no está 
                  de acuerdo con alguno de estos Términos, no debe utilizar nuestro Sitio Web ni nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Descripción de los Servicios</h2>
                <p className="text-gray-700 leading-relaxed">
                  SJscuti Servicios Empresariales ofrece Servicios externalizado de Recursos Humanos, 
                  Contabilidad, secretaria y constitución de empresa. Asesorías contables. Nos reservamos el 
                  derecho de modificar, suspender o descontinuar cualquier aspecto de nuestros servicios en 
                  cualquier momento, con o sin previo aviso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Uso del Sitio Web y Registro de Usuario</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Elegibilidad:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Para utilizar nuestros servicios, debe tener al menos 18 años de edad y la capacidad 
                      legal para celebrar contratos vinculantes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Información del Usuario:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Usted se compromete a proporcionar información veraz, actual y completa durante el proceso 
                      de contacto o compra, y a mantener esta información actualizada.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Conducta del Usuario:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Usted se compromete a utilizar el Sitio Web y los servicios únicamente con fines lícitos 
                      y de acuerdo con estos Términos. Se prohíbe cualquier uso que pueda dañar, deshabilitar, 
                      sobrecargar o deteriorar el Sitio Web o interferir con el uso y disfrute del mismo por 
                      parte de terceros.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Proceso de Compra y Condiciones de Pago</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Solicitud de Servicios:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Los servicios pueden ser solicitados a través de los mecanismos dispuestos en el Sitio Web, 
                      como formularios de contacto o procesos de compra directa.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Precios:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Los precios de los servicios se indicarán en el Sitio Web o se proporcionarán mediante 
                      cotización personalizada. Nos reservamos el derecho de modificar los precios en cualquier 
                      momento, aunque dichos cambios no afectarán a los pedidos ya confirmados. Todos los precios 
                      se indican en Pesos Chilenos (CLP) e incluyen los impuestos aplicables, a menos que se 
                      indique lo contrario.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Métodos de Pago:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Aceptamos los siguientes métodos de pago: Transferencia bancaria, WebPay, Mercado pago. 
                      El pago debe realizarse en el momento de la confirmación del servicio o según los términos 
                      acordados en la cotización.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Confirmación:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Una vez recibido el pago o la solicitud de servicio, enviaremos una confirmación por 
                      correo electrónico.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Política de Suscripción, Cancelación y Reembolso</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Naturaleza del Servicio y Suscripción Mensual:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Nuestros servicios se ofrecen bajo una modalidad de suscripción mensual. Al contratar 
                      nuestros servicios, usted entiende que estos se renuevan automáticamente cada mes, a menos 
                      que se solicite la cancelación de acuerdo con los términos aquí expuestos. No existen 
                      compromisos de permanencia mínima más allá del mes en curso.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Proceso de Pago:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      El pago por los servicios prestados durante un mes calendario se realizará dentro de los 
                      primeros 5 días hábiles del mes siguiente. Se emitirá la correspondiente boleta o factura 
                      según los datos proporcionados por el Cliente.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Política de Cancelación:</h3>
                    <div className="pl-4 space-y-2">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Por parte del Cliente:</span> Usted puede solicitar la 
                        cancelación de su suscripción mensual a nuestros servicios en cualquier momento.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                          Para que la cancelación sea efectiva y no se genere el cobro del mes siguiente, la 
                          solicitud de cancelación deberá ser recibida por SJscuti Servicios Empresariales a 
                          más tardar el último día hábil del mes en curso.
                        </li>
                        <li>
                          La cancelación se hará efectiva al finalizar el mes en que se notificó (si se hizo 
                          dentro del plazo) o al finalizar el mes siguiente (si la notificación fue posterior 
                          al último día hábil del mes en curso).
                        </li>
                        <li>
                          Las solicitudes de cancelación deben enviarse por correo electrónico a 
                          contacto@SJscuti.cl, indicando claramente su intención de cancelar el servicio.
                        </li>
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Por parte de SJscuti Servicios Empresariales:</span> Nos 
                        reservamos el derecho de suspender o cancelar la prestación del servicio en caso de 
                        incumplimiento de estos Términos y Condiciones, incluyendo la falta de pago.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Política de Reembolso:</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700 leading-relaxed">
                        Dado que el pago de los servicios se realiza al inicio del mes siguiente por los 
                        servicios ya prestados durante el mes anterior, los pagos efectuados por servicios ya 
                        consumidos o correspondientes al mes en curso no son, en general, reembolsables.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Si usted cancela su servicio de acuerdo con la Cláusula Política de Cancelación, seguirá 
                        siendo responsable del pago de todos los servicios prestados hasta la fecha efectiva de 
                        finalización del servicio.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Cualquier situación excepcional o reclamo relacionado con la calidad del servicio será 
                        evaluado caso por caso, buscando una solución de mutuo acuerdo.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Esta política se entiende sin perjuicio de los derechos que le asistan como consumidor 
                        en virtud de la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores en 
                        Chile, especialmente en lo relativo al derecho de retracto y garantías legales, si 
                        aplicasen a la naturaleza específica de los servicios contratados.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Propiedad Intelectual</h2>
                <p className="text-gray-700 leading-relaxed">
                  Todo el contenido presente en el Sitio Web, incluyendo, entre otros, textos, gráficos, logotipos, 
                  iconos, imágenes, clips de audio y vídeo, compilaciones de datos y software, es propiedad de SJscuti 
                  Servicios Empresariales o de sus licenciantes y está protegido por las leyes chilenas e internacionales 
                  de propiedad intelectual.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  No se le concede ninguna licencia o derecho sobre nuestra propiedad intelectual, salvo lo expresamente 
                  permitido en estos Términos. No puede reproducir, distribuir, modificar, crear trabajos derivados, 
                  mostrar públicamente, ejecutar públicamente, republicar, descargar, almacenar o transmitir ningún 
                  material de nuestro Sitio Web sin nuestro consentimiento previo por escrito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Limitación de Responsabilidad y Descargos de Responsabilidad</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Uso bajo su propio riesgo:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      El uso del Sitio Web y de nuestros servicios es bajo su propio riesgo. El Sitio Web y los servicios 
                      se proporcionan "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas 
                      o implícitas.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Exactitud de la Información:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Si bien nos esforzamos por proporcionar información precisa, no garantizamos que la información en 
                      el Sitio Web sea completa, precisa, confiable, actual o libre de errores.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Interrupciones del Servicio:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      No garantizamos que el Sitio Web o los servicios sean ininterrumpidos, seguros o estén libres de 
                      errores o virus.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Limitación de Responsabilidad:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      En la máxima medida permitida por la ley aplicable, SJscuti Servicios Empresariales no será 
                      responsable por ningún daño indirecto, incidental, especial, consecuente o punitivo, incluyendo, 
                      entre otros, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, 
                      resultantes de (i) su acceso o uso o incapacidad para acceder o usar el Sitio Web o los servicios; 
                      (ii) cualquier conducta o contenido de terceros en el Sitio Web; (iii) cualquier contenido obtenido 
                      del Sitio Web; y (iv) acceso no autorizado, uso o alteración de sus transmisiones o contenido, ya 
                      sea basado en garantía, contrato, agravio (incluida negligencia) o cualquier otra teoría legal, 
                      incluso si hemos sido informados de la posibilidad de dicho daño. Nuestra responsabilidad total 
                      hacia usted por cualquier reclamación derivada o relacionada con estos Términos o el uso de los 
                      servicios no excederá el monto pagado por usted a SJscuti por los servicios específicos que dieron 
                      lugar a la reclamación durante los 3 meses anteriores al evento que dio lugar a la responsabilidad.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Indemnización</h2>
                <p className="text-gray-700 leading-relaxed">
                  Usted acepta defender, indemnizar y eximir de responsabilidad a SJscuti Servicios Empresariales, sus 
                  filiales, licenciantes y proveedores de servicios, y a sus respectivos funcionarios, directores, 
                  empleados, contratistas, agentes, licenciantes, proveedores, sucesores y cesionarios, de y contra 
                  cualquier reclamación, responsabilidad, daño, juicio, adjudicación, pérdida, costo, gasto u honorario 
                  (incluidos los honorarios razonables de abogados) que surjan de o estén relacionados con su violación 
                  de estos Términos o su uso del Sitio Web o los servicios, incluyendo, entre otros, cualquier uso del 
                  contenido, servicios y productos del Sitio Web distinto al expresamente autorizado en estos Términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Enlaces a Sitios de Terceros</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro Sitio Web puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por SJscuti. No tenemos control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros. Usted reconoce y acepta que SJscuti no será responsable, directa o indirectamente, por ningún daño o pérdida causada o presuntamente causada por o en conexión con el uso o la confianza en dicho contenido, bienes o servicios disponibles en o a través de dichos sitios web o servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Modificación de los Términos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso de al menos 15 días antes de que los nuevos términos entren en vigor. Lo que constituye un cambio material se determinará a nuestra sola discreción.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Al continuar accediendo o utilizando nuestro Sitio Web o servicios después de que esas revisiones entren en vigor, usted acepta estar sujeto a los términos revisados. Si no está de acuerdo con los nuevos términos, total o parcialmente, por favor deje de usar el Sitio Web y los servicios.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Terminación</h2>
                <p className="text-gray-700 leading-relaxed">
                  Podemos terminar o suspender su acceso a nuestro Sitio Web y servicios inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo, sin limitación, si usted incumple estos Términos.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Tras la terminación, su derecho a utilizar el Sitio Web y los servicios cesará inmediatamente. Si tiene una cuenta, podemos desactivarla o eliminarla. Las disposiciones de estos Términos que por su naturaleza deberían sobrevivir a la terminación sobrevivirán a la terminación, incluyendo, sin limitación, las disposiciones de propiedad, las renuncias de garantía, la indemnización y las limitaciones de responsabilidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Ley Aplicable y Jurisdicción</h2>
                <p className="text-gray-700 leading-relaxed">
                  Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República de Chile, sin tener en cuenta sus disposiciones sobre conflicto de leyes.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Cualquier disputa, controversia o reclamación que surja de o esté relacionada con estos Términos, o el incumplimiento, terminación o invalidez de los mismos, se resolverá exclusivamente ante los tribunales ordinarios de justicia competentes con asiento en la ciudad y comuna de Santiago, Chile, a menos que se acuerde expresamente otro mecanismo de resolución de disputas (como mediación o arbitraje).
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

export default TerminosCondiciones;