import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import { navItems } from '../App';

interface SecretariaProps {
  onOpenContractModal?: () => void;
}

function Secretaria({ onOpenContractModal }: SecretariaProps = {}) {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/v1750615388/freepik__35mm-film-photography-crea-una-imagen-de-una-ofici__89306_ry4m5t.jpg',
      title: '¿Por qué externalizar tu agenda, reuniones y llamadas?',
      description: 'La gestión eficiente del tiempo y los compromisos es crucial para el éxito empresarial.',
      content: [
        {
          title: '1. Ahorro de Tiempo Valioso',
          text: 'Delegar la coordinación de agendas libera horas que puedes invertir en tus actividades principales y estratégicas, en lugar de en tareas administrativas repetitivas.'
        },
        {
          title: '2. Mayor Productividad y Enfoque',
          text: 'Al no interrumpir tu flujo de trabajo para gestionar horarios, puedes concentrarte mejor y aumentar tu rendimiento en las áreas que realmente impulsan tu negocio o tus responsabilidades.'
        },
        {
          title: '3. Imagen Profesional y Eficiente',
          text: 'Una gestión de agenda proactiva y organizada, con confirmaciones y recordatorios puntuales, proyecta una imagen de seriedad y eficiencia ante clientes, socios y contactos. Se reducen las posibilidades de reuniones olvidadas o mal agendadas.'
        },
        {
          title: '4. Optimización de la Organización',
          text: 'Un servicio especializado utiliza métodos y herramientas eficientes para evitar conflictos de horarios, gestionar cambios y asegurar que todas las partes estén informadas, resultando en una agenda impecable.'
        },
        {
          title: '5. Reducción del Estrés Administrativo',
          text: 'Eliminas la carga mental del constante seguimiento, los correos de coordinación y las llamadas para confirmar, permitiéndote trabajar con mayor tranquilidad.'
        },
        {
          title: '6. Mejora en la Tasa de Asistencia',
          text: 'Las confirmaciones sistemáticas y los recordatorios oportunos disminuyen significativamente el número de reuniones no asistidas, optimizando el tiempo de todos los involucrados.'
        },
        {
          title: '7. Gestión Profesional de Cambios',
          text: 'Un servicio especializado maneja eficientemente las reprogramaciones y cambios de último minuto, comunicando oportunamente a todas las partes involucradas.'
        },
        {
          title: '8. Integración con Herramientas Digitales',
          text: 'Los profesionales utilizan herramientas digitales avanzadas para coordinar y mantener actualizada la agenda, asegurando una organización impecable desde cualquier lugar.'
        }
      ]
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_crop,w_800,h_600/v1750615984/freepik__a-complex-network-of-glowing-data-streams-represen__89307_vef7ym.jpg',
      title: '¿Por qué externalizar la organización y mantenimiento de calendarios?',
      description: 'La gestión profesional de calendarios es esencial para una organización eficiente.',
      content: [
        {
          title: '1. Visibilidad y Control Total',
          text: 'Asegura que todas tus actividades, reuniones, plazos y recordatorios importantes estén centralizados, correctamente categorizados y sincronizados en tus dispositivos. Esto te da una visión clara de tus compromisos y evita que se te escape algo.'
        },
        {
          title: '2. Gestión Proactiva y Estratégica del Tiempo',
          text: 'Un profesional no solo registra eventos, sino que optimiza tu agenda. Puede ayudarte a implementar técnicas como el bloqueo de tiempo para tareas prioritarias, asegurar que tengas los descansos necesarios y organizar tu día de forma que maximice tu productividad y bienestar.'
        },
        {
          title: '3. Prevención Efectiva de Conflictos',
          text: 'Un mantenimiento riguroso y constante minimiza los errores comunes como el doble agendamiento o la superposición de compromisos, ahorrándote problemas y reprogramaciones de último minuto.'
        },
        {
          title: '4. Preparación Eficiente para tus Compromisos',
          text: 'Tu calendario se convierte en un centro de mando, pudiendo incluir enlaces a documentos relevantes, agendas de reuniones, ubicaciones o detalles de contacto para cada evento, permitiéndote llegar preparado a cada cita.'
        },
        {
          title: '5. Optimización de la Planificación a Futuro',
          text: 'Facilita la programación de seguimientos, la reserva de tiempo para proyectos a largo plazo y la visualización de la carga de trabajo futura, permitiendo una mejor toma de decisiones.'
        },
        {
          title: '6. Reducción de Carga Mental y Estrés',
          text: 'Saber que un profesional se encarga de la meticulosa organización de tu tiempo te libera de la preocupación constante por recordar cada detalle y te permite enfocarte con mayor tranquilidad en tus responsabilidades esenciales.'
        },
        {
          title: '7. Integración y Personalización',
          text: 'Un servicio experto puede configurar tus calendarios según tus preferencias, gestionar calendarios compartidos para equipos y asegurar la integración con otras herramientas que utilices, creando un flujo de trabajo más cohesionado.'
        },
        {
          title: '8. Sincronización Multiplataforma',
          text: 'Garantiza que todos tus dispositivos y plataformas (Google Calendar, Outlook, etc.) estén perfectamente sincronizados y actualizados en tiempo real.'
        }
      ]
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_crop,w_800,h_600/v1750616777/freepik__the-style-is-candid-image-photography-with-natural__89310_xvhycw.jpg',
      title: '¿Por qué externalizar la coordinación de reuniones por Zoom o Meet?',
      description: 'La gestión profesional de reuniones virtuales es esencial para una comunicación efectiva.',
      content: [
        {
          title: '1. Gestión Técnica Impecable',
          text: 'Te liberas de la creación de enlaces, la configuración de opciones de seguridad (salas de espera, contraseñas), permisos de grabación y la correcta distribución de los detalles de acceso, asegurando que cada reunión se inicie sin contratiempos técnicos.'
        },
        {
          title: '2. Administración Eficiente de Participantes',
          text: 'El servicio se encarga de enviar invitaciones claras y profesionales, realizar el seguimiento de confirmaciones (RSVP) y enviar recordatorios específicos para el entorno virtual, mejorando la puntualidad y preparación de los asistentes.'
        },
        {
          title: '3. Coordinación Precisa entre Zonas Horarias',
          text: 'Si tienes reuniones con participantes en diferentes ubicaciones geográficas, se asegura de que todos reciban la convocatoria con la hora local correcta, evitando confusiones y ausencias.'
        },
        {
          title: '4. Distribución Organizada de Materiales',
          text: 'Facilita el envío previo de agendas, documentos de apoyo o presentaciones a todos los participantes a través de la invitación o enlaces designados, permitiendo que todos lleguen preparados.'
        },
        {
          title: '5. Preparación y Soporte Básico para el Anfitrión',
          text: 'Asegura que como anfitrión tengas toda la información y accesos necesarios, y puede coordinar la asignación de coanfitriones o permisos especiales antes de que la reunión comience.'
        },
        {
          title: '6. Menos Fricción para los Asistentes',
          text: 'Invitaciones claras, recordatorios oportunos y la información necesaria a mano hacen que la experiencia de unirse a tus reuniones sea sencilla y profesional para todos los invitados.'
        },
        {
          title: '7. Mayor Enfoque en el Contenido',
          text: 'Delega la logística de la configuración para que tú y tu equipo puedan concentrarse completamente en los objetivos y el contenido de la reunión, en lugar de preocuparse por los detalles técnicos de la plataforma.'
        },
        {
          title: '8. Gestión de Grabaciones y Seguimiento',
          text: 'Se encarga de configurar las grabaciones cuando sea necesario y puede gestionar el seguimiento post-reunión, incluyendo la distribución de grabaciones y resúmenes.'
        }
      ]
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_crop,w_800,h_600/v1750616752/freepik__the-style-is-candid-image-photography-with-natural__89309_bhhd01.jpg',
      title: '¿Por qué externalizar los recordatorios de pagos, vencimientos o citas?',
      description: 'La gestión eficiente de recordatorios es crucial para mantener las operaciones al día.',
      content: [
        {
          title: '1. Evita Costos Innecesarios y Pérdidas',
          text: 'Un sistema proactivo de recordatorios te ayuda a prevenir multas por pagos atrasados, intereses moratorios, la suspensión de servicios esenciales o la pérdida de oportunidades por no cumplir con un plazo o asistir a una cita importante.'
        },
        {
          title: '2. Mejora la Salud Financiera y Operativa',
          text: 'Al estar siempre al tanto de tus compromisos financieros y fechas límite, puedes gestionar mejor tu flujo de caja, evitar sorpresas desagradables y asegurar la continuidad de tus operaciones o proyectos.'
        },
        {
          title: '3. Incrementa la Fiabilidad y Profesionalismo',
          text: 'Cumplir consistentemente con tus obligaciones y citas gracias a recordatorios oportunos refuerza tu imagen como una persona o empresa organizada, confiable y profesional.'
        },
        {
          title: '4. Reduce Drásticamente el Estrés y la Carga Mental',
          text: 'Delega la tarea de "recordar todo" y libera tu mente de la presión constante de no olvidar fechas críticas. Esto te permite enfocarte con mayor claridad y menos ansiedad.'
        },
        {
          title: '5. Optimiza tu Tiempo y Productividad',
          text: 'Al no tener que dedicar energía mental y tiempo a rastrear manualmente cada vencimiento o cita, puedes concentrarte plenamente en tus actividades estratégicas y productivas.'
        },
        {
          title: '6. Sistema Personalizado y Proactivo',
          text: 'Un servicio de recordatorios puede adaptarse a tus necesidades específicas, estableciendo alertas con la anticipación que requieras y a través de los canales más efectivos para ti, asegurando que la información te llegue a tiempo.'
        },
        {
          title: '7. Soporte para la Toma de Decisiones',
          text: 'Tener una visión clara y anticipada de tus próximos pagos, vencimientos y citas te permite planificar mejor y tomar decisiones más informadas en tu día a día.'
        },
        {
          title: '8. Prevención de Problemas Legales',
          text: 'Evita incumplimientos contractuales o legales que podrían resultar en consecuencias más graves que simples multas, protegiendo la reputación y estabilidad de tu negocio.'
        }
      ]
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_crop,w_800,h_600/v1750616728/freepik__a-representation-of-artificial-intelligence-as-a-f__89308_nchexo.jpg',
      title: '¿Por qué externalizar los correos electrónicos y redactar comunicaciones formales?',
      description: 'La gestión profesional de correos y comunicaciones es esencial para mantener una imagen corporativa sólida.',
      content: [
        {
          title: '1. Ahorro Sustancial de Tiempo',
          text: 'La gestión del correo electrónico y la redacción de documentos formales consumen una cantidad considerable de tiempo. Externalizar estas tareas te permite reinvertir esas horas en actividades estratégicas y de mayor valor para tu empresa.'
        },
        {
          title: '2. Profesionalismo y Coherencia en tu Imagen',
          text: 'Aseguras que todas tus comunicaciones escritas sean impecables, sin errores gramaticales u ortográficos, manteniendo un tono adecuado y una voz consistente que refleje la seriedad y profesionalismo de tu marca o gestión.'
        },
        {
          title: '3. Mejora en los Tiempos de Respuesta',
          text: 'Un servicio dedicado puede gestionar tu bandeja de entrada de manera más ágil, garantizando respuestas oportunas a clientes, proveedores y otros contactos, lo que mejora la satisfacción y evita cuellos de botella.'
        },
        {
          title: '4. Experiencia en Redacción Especializada',
          text: 'Cuentas con el respaldo de profesionales con habilidad y experiencia en la elaboración de diversos tipos de documentos formales, como cartas, informes, propuestas, comunicados oficiales y correos electrónicos complejos, asegurando claridad y efectividad en el mensaje.'
        },
        {
          title: '5. Organización Eficaz de la Bandeja de Entrada',
          text: 'Más allá de solo responder, el servicio puede incluir la organización de tus correos, el filtrado de mensajes prioritarios, el archivo de información relevante y la creación de sistemas para un manejo más eficiente de la comunicación.'
        },
        {
          title: '6. Reducción de Errores y Mayor Precisión',
          text: 'La revisión cuidadosa y la atención al detalle por parte de un profesional minimizan los errores en la comunicación escrita, lo que es vital para la credibilidad.'
        },
        {
          title: '7. Enfoque en Actividades Clave',
          text: 'Te liberas de la carga operativa de la comunicación escrita para concentrarte en las funciones esenciales de tu negocio, la toma de decisiones y el crecimiento.'
        },
        {
          title: '8. Flexibilidad y Escalabilidad',
          text: 'Puedes adaptar el nivel de servicio a tus necesidades fluctuantes, manejando picos de trabajo sin necesidad de contratar personal adicional a tiempo completo.'
        }
      ]
    },
    {
      id: 6,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_crop,w_800,h_600/v1751463939/freepik__the-style-is-candid-image-photography-with-natural__12418_dkjz0w.jpg',
      title: '¿Por qué contratar un servicio para la atención de WhatsApp Business o chat de la web es una decisión estratégica?',
      description: 'La gestión profesional de canales de comunicación digital es esencial para la satisfacción del cliente.',
      content: [
        {
          title: '1. Respuestas Rápidas y Oportunas',
          text: 'En la era de la inmediatez, los usuarios esperan respuestas casi instantáneas. Un servicio dedicado asegura que las consultas recibidas por estos canales ágiles sean atendidas con prontitud, mejorando la percepción del cliente y evitando que busquen alternativas.'
        },
        {
          title: '2. Incremento de Oportunidades de Venta y Captación de Leads',
          text: 'Estos canales son puntos de contacto cruciales para resolver dudas pre-venta y guiar a los interesados. Una atención eficiente puede convertir una simple consulta en una venta o en un lead calificado para tu equipo comercial.'
        },
        {
          title: '3. Mejora Significativa de la Experiencia del Cliente',
          text: 'Una comunicación fluida, amable y resolutiva a través del chat o WhatsApp fortalece la relación con tus clientes, genera confianza y fomenta la lealtad hacia tu marca o servicio.'
        },
        {
          title: '4. Liberación de Tiempo para tu Equipo Principal',
          text: 'La gestión constante de chats en tiempo real puede ser muy demandante. Externalizar esta función permite que tú y tu equipo se enfoquen en tareas estratégicas y de mayor complejidad, sin descuidar la atención al cliente.'
        },
        {
          title: '5. Consistencia en la Comunicación y Voz de Marca',
          text: 'Se garantiza que todas las interacciones sigan un protocolo definido, utilizando un tono y lenguaje acordes con tu marca, y proporcionando información precisa y estandarizada.'
        },
        {
          title: '6. Posibilidad de Ampliar Horarios de Atención',
          text: 'Un servicio externo puede ofrecer cobertura en horarios extendidos, incluso fuera de tu jornada laboral habitual, asegurando que no se pierdan consultas importantes.'
        },
        {
          title: '7. Filtro Eficaz y Escalada Inteligente de Consultas',
          text: 'El servicio puede manejar preguntas frecuentes y rutinarias, y derivar o escalar eficientemente aquellas consultas más complejas o específicas al departamento o persona adecuada dentro de tu empresa.'
        },
        {
          title: '8. Recopilación de Información Valiosa',
          text: 'Las interacciones por chat son una fuente rica de datos sobre las necesidades, inquietudes y preferencias de tus clientes. Esta información puede ser analizada para mejorar tus productos, servicios o procesos.'
        }
      ]
    },
    {
      id: 7,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_crop,w_800,h_600/v1751463912/freepik__the-style-is-candid-image-photography-with-natural__63820_zsa4dq.jpg',
      title: '¿Por qué externalizar la gestión de reclamos o solicitudes simples?',
      description: 'La gestión eficiente de reclamos y solicitudes es crucial para la satisfacción del cliente.',
      content: [
        {
          title: '1. Mejora la Satisfacción y Lealtad del Cliente',
          text: 'Una respuesta rápida, empática y efectiva a las consultas o problemas iniciales es crucial. Un manejo adecuado puede transformar una potencial insatisfacción en una experiencia positiva, fortaleciendo la relación con tus clientes.'
        },
        {
          title: '2. Agiliza los Tiempos de Respuesta y Resolución',
          text: 'Un servicio dedicado puede atender y resolver estas solicitudes simples con mayor celeridad, evitando que los clientes esperen innecesariamente y demostrando eficiencia.'
        },
        {
          title: '3. Libera Tiempo Valioso de tu Equipo Especializado',
          text: 'Al derivar la gestión de estos casos rutinarios, tu personal clave puede concentrarse en tareas más complejas, estratégicas o que requieren su conocimiento específico, optimizando su productividad.'
        },
        {
          title: '4. Consistencia y Profesionalismo en Cada Interacción',
          text: 'Se asegura un manejo estandarizado y profesional de cada reclamo o solicitud, siguiendo protocolos definidos que reflejan la calidad y el compromiso de tu empresa.'
        },
        {
          title: '5. Detección Temprana de Problemas Recurrentes',
          text: 'El registro y análisis de las solicitudes y reclamos simples puede revelar patrones o áreas de mejora en tus productos, servicios o procesos, permitiéndote tomar acciones correctivas de forma proactiva.'
        },
        {
          title: '6. Reduce la Carga Operativa y el Estrés Interno',
          text: 'La gestión de reclamos, incluso los simples, puede ser demandante. Externalizar esta función alivia la presión sobre tu equipo y asegura que cada caso reciba la atención debida.'
        },
        {
          title: '7. Clasificación y Escalada Eficiente',
          text: 'El servicio puede resolver directamente las solicitudes simples y, cuando sea necesario, escalar los casos más complejos a la persona o departamento adecuado, ya con la información inicial recopilada y organizada.'
        },
        {
          title: '8. Mantenimiento de Registros Detallados',
          text: 'Se lleva un control y documentación de las interacciones, lo cual es útil para el seguimiento, el análisis de la calidad del servicio y la toma de decisiones informadas.'
        }
      ]
    }
  ];

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
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-12">Secretaría</h1>

          <div className="grid gap-12">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                    {expandedArticle === article.id ? (
                      <div>
                        <p className="text-gray-600 mb-6">{article.description}</p>
                        <div className="space-y-6">
                          {article.content.map((section, index) => (
                            <div key={index}>
                              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                              <p className="text-gray-600">{section.text}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                          <p className="text-gray-700 text-lg mb-4">¿Te gustaría que te ayudara con tu secretaria virtual?</p>
                          <button
                            onClick={onOpenContractModal}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                          >
                            Cotizar Ahora
                          </button>
                        </div>
                        <button
                          onClick={() => setExpandedArticle(null)}
                          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 mt-6"
                        >
                          Mostrar menos
                          <ChevronRight className="w-4 h-4 ml-1 transform rotate-90" />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-gray-600 mb-6">{article.description}</p>
                        <button
                          onClick={() => setExpandedArticle(article.id)}
                          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                        >
                          Leer más
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Secretaria;