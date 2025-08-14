import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Calculator,
  Users,
  ClipboardList,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  X,
  Send,
  FileText
} from 'lucide-react';
import WhatsAppChat from './WhatsAppChat';
import { navItems } from '../App';
import Footer from './Footer';

interface MainContentProps {
  onOpenContractModal?: () => void;
}

function MainContent({ onOpenContractModal }: MainContentProps = {}) {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'rrhh',
    message: ''
  });
  const location = useLocation();

  const carouselImages = [
    'https://res.cloudinary.com/dllnci5vy/image/upload/v1746472624/Imagen_web_1_eq61de.jpg',
    'https://res.cloudinary.com/dllnci5vy/image/upload/v1746478514/a-medium-shot-of-a-young-chilean-man-wor_unrlaPiQRVuzG9-ho8sH1g_KWz6REZmQoasfzL-rkD7yQ_pzrblk.jpg',
    'https://res.cloudinary.com/dllnci5vy/image/upload/v1746478534/Gemini_Generated_Image_9c0gw79c0gw79c0g_runnwc.jpg'
  ];

  const outsourcingBenefits = [
    'Reducción de costos operativos y administrativos',
    'Mayor eficiencia en procesos empresariales',
    'Enfoque en el core business de su empresa',
    'Acceso a expertos especializados',
    'Mejora continua de la calidad de servicio',
    'Mayor flexibilidad y escalabilidad'
  ];

  const heroContent = [
    {
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/v1746481359/freepik__the-style-is-candid-image-photography-with-natural__63826_mtxmvy.jpg',
      title: 'Somos SJscuti',
      text: 'Una empresa especializada en recursos humanos, contabilidad y servicios de secretaria para su organización'
    },
    {
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/v1746481377/freepik__the-style-is-candid-image-photography-with-natural__63824_vkei4n.jpg',
      title: 'Optimización Empresarial',
      text: 'Ayudamos a optimizar la gestión administrativa y financiera de tu negocio con soluciones eficientes y personalizadas'
    },
    {
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/v1746481395/freepik__the-style-is-candid-image-photography-with-natural__63822_yjqber.jpg',
      title: 'Servicios Especializados',
      text: 'Servicios especializados de contabilidad y recursos humanos a través de la externalización para optimizar procesos y reducir costos'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Mendoza',
      company: 'Tecnología Austral',
      text: 'Los servicios de recursos humanos han transformado completamente la gestión de nuestro personal. Altamente recomendados.'
    },
    {
      name: 'María González',
      company: 'Importadora Santiago',
      text: 'La asesoría contable nos ha ayudado a optimizar nuestros procesos financieros y reducir costos.'
    },
    {
      name: 'Roberto Silva',
      company: 'Constructora del Sur',
      text: 'El servicio de secretaría virtual ha sido fundamental para mantener nuestra operación organizada y eficiente.'
    },
    {
      name: 'Ana Martínez',
      company: 'Comercial Express',
      text: 'La externalización de nuestros procesos administrativos con SJscuti ha sido una de las mejores decisiones que hemos tomado. Su equipo es altamente profesional y eficiente.'
    },
    {
      name: 'Pedro Sánchez',
      company: 'Logística Integral',
      text: 'Desde que comenzamos a trabajar con SJscuti, nuestra gestión de recursos humanos ha mejorado significativamente. Su atención al detalle y profesionalismo son excepcionales.'
    },
    {
      name: 'Laura Rodríguez',
      company: 'Consultora Innovación',
      text: 'El servicio de contabilidad que nos proporciona SJscuti es excelente. Han simplificado nuestros procesos y nos mantienen siempre al día con nuestras obligaciones fiscales.'
    },
    {
      name: 'Diego Fernández',
      company: 'Retail Moderno',
      text: 'La constitución de nuestra empresa fue un proceso muy fluido gracias a SJscuti. Su equipo nos guió paso a paso y resolvió todas nuestras dudas de manera profesional y oportuna.'
    },
    {
      name: 'Carmen Torres',
      company: 'Servicios Integrales del Norte',
      text: 'El servicio de secretaría virtual ha superado nuestras expectativas. La organización de nuestras reuniones y la gestión de calendarios es ahora mucho más eficiente y profesional.'
    }
  ];

  const team = [
    {
      name: 'Jessica Vega',
      role: 'Ingeniera Comercial especialista en RR.HH',
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/v1747411550/02A5D9C4-BAB5-434F-9BEC-B8FF3C6034D5-13453-000012EB15054EC4_utrqey.jpg',
      description: 'Especialista en Recursos humanos y Remuneración con más de 10 años de experiencia.'
    },
    {
      name: 'Santiago Romero',
      role: 'Ingeniero Comercial y Contador Senior',
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/v1747411564/A54A9C33-154B-4EAD-A264-6FEBCBFE7A0B-13453-000012EE9C180AFB_jgdr1i.jpg',
      description: 'Experto en contabilidad y finanzas con amplia experiencia en asesoría tributaria.'
    }
  ];

  const basicPlans = [
    {
      name: 'Plan Constitución de Empresa',
      price: '34.990',
      features: [
        'Asesoría profesional personalizada',
        'Redacción de escritura de constitución',
        'Firma electrónica avanzada',
        'Inicio de actividades ante el SII',
        'Emisión del e-RUT',
        '📌 Tiempo estimado: 1 día hábil'
      ]
    },
    {
      name: 'Plan Gestión laboral esencial de Recursos humanos',
      price: '10.500',
      features: [
        'Elaboración mensual de Liquidaciones de Sueldo',
        'Gestión de pago de Imposiciones vía PreviRed (cliente provee fondos/mandato)',
        'Generación Libro de Remuneraciones Electrónico (LRE)',
        'Redacción de Contrato Laboral',
        'Emisión de Certificados básicos (antigüedad, renta)',
        'Registro y control simple de Vacaciones',
        'Redacción Carta de Aviso de Término de Contrato',
        'Elaboración de Finiquitos',
        'Informe de remuneraciones',
        '📌 Precio por trabajador'
      ]
    },
    {
      name: 'Plan emprende Contable',
      price: '24.990',
      features: [
        'Contabilidad Simplificada (Registro basado en flujo)',
        'Hasta 30 documentos base/mes (Facturas, BH)',
        'Cálculo y Presentación F29 (IVA)',
        'Mantención Libros SII (Compra, Venta, Honorarios)',
        'Informe Mensual Simple Ingresos/Egresos',
        'Gestión Gastos Menores: Plantilla + Guía para registro cliente',
        'Asesoría: Dudas operativas puntuales vía WhatsApp/Correo (horario hábil)',
        '📌 Servicio mensual'
      ]
    }
  ];

  const premiumPlans = [
    {
      name: 'Plan creación de empresa',
      price: '54.990',
      features: [
        'Asesoría profesional personalizada',
        'Redacción de la escritura de constitución',
        'Firma electrónica avanzada para la escritura',
        'Inicio de actividades ante el Servicio de Impuestos Internos (SII)',
        'Emisión del e-RUT de la empresa',
        'Firma electrónica del SII',
        'Habilitación de factura electrónica',
        'Habilitación de boleta electrónica',
        'Asistencia apertura cuentas bancarias',
        'Creación de resolución y acreditación de actividades ante el SII',
        'Inscripción en sistemas del SII para facturación y emisión de documentos tributarios',
        '📌 Tiempo estimado: 1 día hábil'
      ]
    },
    {
      name: 'Plan Gestión laboral Digital',
      price: '15.000',
      features: [
        'Elaboración mensual de Liquidaciones de Sueldo',
        'Gestión de pago de Imposiciones vía PreviRed (cliente provee fondos/mandato)',
        'Generación Libro de Remuneraciones Electrónico (LRE)',
        'Redacción de Contrato Laboral',
        'Emisión de Certificados básicos (antigüedad, renta)',
        'Registro y control simple de Vacaciones',
        'Redacción Carta de Aviso de Término de Contrato',
        'Elaboración de Finiquitos',
        'Informe de remuneraciones',
        'App Móvil Trabajador: Visualizar Liquidaciones, Solicitar/Ver Vacaciones, Ver Documentos, Perfil',
        'Plataforma Web Administrador: Visualizar info trabajadores, Descargar reportes básicos',
        'Firma Electrónica Simple: Para documentos laborales seleccionados',
        '📌 Precio por trabajador'
      ]
    },
    {
      name: 'Plan Secretaria',
      price: '29.990',
      features: [
        'Agendar y confirmar reuniones o llamadas',
        'Organización y mantenimiento de calendarios (Google Calendar, Outlook)',
        'Coordinación de reuniones por Zoom o Meet',
        'Recordatorios de pagos, vencimientos o citas',
        '📌 Servicio mensual'
      ]
    },
    {
      name: 'Plan Profesional esencial',
      price: '34.990',
      features: [
        'Contabilidad Completa (Devengo, asientos contables)',
        'Hasta 50 documentos base/mes',
        'Cálculo y Presentación F29 (IVA)',
        'Mantención Libros SII y registros contables formales',
        'Informe Mensual Simple Ingresos/Egresos',
        'Elaboración Estado de Resultados y Balance General (semestral)',
        'Gestión Gastos Menores: Plantilla + Guía para registro cliente',
        'Asesoría: Dudas operativas vía WhatsApp/Correo/Chat (horario hábil)',
        '📌 Servicio mensual'
      ]
    }
  ];

  const elitePlans = [
    {
      name: 'Plan creación de empresa elite',
      price: '169.990',
      features: [
        'Asesoría profesional personalizada',
        'Redacción de la escritura de constitución',
        'Firma electrónica avanzada para la escritura',
        'Inicio de actividades ante el SII',
        'Emisión del e-RUT de la empresa',
        'Firma electrónica del SII',
        'Habilitación de factura electrónica',
        'Habilitación de boleta electrónica',
        'Asistencia apertura cuentas bancarias',
        'Creación de resolución y acreditación de actividades ante el SII',
        'Inscripción en sistemas del SII para facturación y emisión de documentos tributarios',
        'Dominio web personalizado (.cl, .com, etc.)',
        'Alojamiento web (hosting) para la página de tu empresa',
        'Diseño web con 5 secciones: Página de Inicio (Home), Quiénes somos (Información de la empresa), Servicios (Detalla tus productos o servicios), Contacto (Formulario de contacto, mapa, teléfono, etc.)',
        'Portafolio (Para mostrar tus trabajos, proyectos o productos)',
        '5 correos electrónicos corporativos (por ejemplo, contacto@miempresa.cl)',
        '📌 Tiempo estimado: 1 día hábil - 7 días hábiles para la página web'
      ]
    },
    {
      name: 'Plan Gestión laboral total',
      price: '19.990',
      features: [
        'Elaboración mensual de Liquidaciones de Sueldo',
        'Gestión de pago de Imposiciones vía PreviRed (cliente provee fondos/mandato)',
        'Generación Libro de Remuneraciones Electrónico (LRE)',
        'Redacción de Contrato Laboral',
        'Emisión de Certificados básicos (antigüedad, renta)',
        'Registro y control simple de Vacaciones',
        'Redacción Carta de Aviso de Término de Contrato',
        'Elaboración de Finiquitos',
        'Informe de remuneraciones',
        'App Móvil Trabajador: Visualizar Liquidaciones, Solicitar/Ver Vacaciones, Ver Documentos, Perfil',
        'Plataforma Web Administrador: Visualizar info trabajadores, Descargar reportes básicos',
        'Firma Electrónica Simple: Para documentos laborales seleccionados',
        'Control de Asistencia Digital (Marcaje vía App, reportes administrativo)',
        '📌 Precio por trabajador'
      ]
    },
    {
      name: 'Plan Secretaria Avanzado',
      price: '49.990',
      features: [
        'Agendar y confirmar reuniones o llamadas',
        'Organización y mantenimiento de calendarios (Google Calendar, Outlook)',
        'Coordinación de reuniones por Zoom o Meet',
        'Recordatorios de pagos, vencimientos o citas',
        'Responder correos electrónicos y redactar comunicaciones formales',
        'Atención de WhatsApp Business o chat de la web',
        'Gestión de reclamos o solicitudes simples',
        '📌 Servicio mensual'
      ]
    },
    {
      name: 'Plan Profesional esencial avanzado',
      price: '59.990',
      features: [
        'Contabilidad Completa (Devengo, asientos contables)',
        '100 documentos base / mes',
        'Elaboración mensual de EERR y Balance General',
        'Cálculo y Presentación F29 (IVA)',
        'Conciliación Bancaria (1-2 cuentas)',
        'Gestión Activo Fijo (Registro y depreciación básica)',
        'Gestión Gastos Menores: Plantilla + Guía para registro cliente',
        'Asesoría: Soporte prioritario (WA, Correo, Chat, quizás Teléfono). 1 Reunión virtual trimestral/mensual (a definir) para revisión de informes',
        '📌 Servicio mensual'
      ]
    }
  ];

  const services = [
    {
      id: 'rrhh',
      title: 'Recursos Humanos',
      icon: <Users className="w-12 h-12 text-blue-600" />,
      description: 'Gestión integral de personal, reclutamiento y selección, contratos de trabajo y nominas.',
      details: [
        { text: 'Contratación de personal', href: '/rrhh-contratacion' },
        { text: 'Proceso de reclutamiento y selección', href: '/rrhh-reclutamiento' },
        { text: 'Externalización de la remuneración', href: '/rrhh-remuneracion' }
      ]
    },
    {
      id: 'contabilidad',
      title: 'Contabilidad',
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      description: 'Servicio de contabilidad mensual, declaraciones de impuestos y estados financieros.',
      details: [
        { text: 'Registro de compras y ventas', href: '/registro-compras-ventas' },
        { text: 'Balance general', href: '/balance-general' },
        { text: 'Impuesto mensuales y anuales', href: '/impuestos-mensuales-anuales' },
        { text: 'Informes financieros', href: '/informes-financieros' }
      ]
    },
    {
      id: 'secretaria',
      title: 'Secretaría',
      icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
      description: 'Gestión administrativa, agenda, correspondencia y documentación.',
      details: [
        { text: 'Agendar y confirmar reuniones o llamadas', href: '/agendar-reuniones' },
        { text: 'Organización y mantenimiento de calendarios (Google Calendar, Outlook)', href: '/organizacion-calendarios' },
        { text: 'Coordinación de reuniones por Zoom o Meet', href: '/coordinacion-reuniones-virtuales' },
        { text: 'Recordatorios de pagos, vencimientos o citas', href: '/recordatorios-pagos' },
        { text: 'Responder correos electrónicos y redactar comunicaciones formales', href: '/gestion-correos' },
        { text: 'Atención de WhatsApp Business o chat de la web', href: '/atencion-whatsapp' },
        { text: 'Gestión de reclamos o solicitudes simples', href: '/gestion-reclamos' }
      ]
    },
    {
      id: 'constitucion',
      title: 'Constitución de Sociedades',
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      description: 'Asesoría y gestión completa para la formación legal de empresas y sociedades.',
      details: [
        { text: 'Constitución de Sociedades', href: '/constitucion-sociedades' }
      ]
    }
  ];

  useEffect(() => {
    if (location.hash === '#servicios') {
      const serviciosSection = document.getElementById('servicios');
      if (serviciosSection) {
        serviciosSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (location.hash === '#contacto') {
      const contactoSection = document.getElementById('contacto');
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroImageIndex((prevIndex) => 
        prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(heroTimer);
  }, [heroContent.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dllnci5vy/image/upload/v1746467151/Logo_oficial_1_amvktw.jpg"
                  alt="SJscuti Logo" 
                  className="w-20 h-20"
                />
                <span className="ml-2 text-xl font-bold">SJscuti</span>
              </div>
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

      <div className="relative">
        <header className="relative h-screen w-full overflow-hidden">
          {heroContent.map((content, index) => (
            <div
              key={index}
              className={`hero-slide ${
                index === heroImageIndex 
                  ? 'slide-enter-active' 
                  : index === (heroImageIndex - 1 + heroContent.length) % heroContent.length 
                  ? 'slide-exit-active'
                  : ''
              }`}
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500"
                style={{ backgroundImage: `url(${content.image})` }}
              />
              <div className="hero-slide-content">
                <div className="max-w-4xl mx-auto text-white text-center">
                  <h1 className="hero-title">{content.title}</h1>
                  <p className="hero-text">{content.text}</p>
                  <div className="mt-8">
                    <Link
                      to="/#contacto"
                      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      Solicitar Cotización
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </header>

        <div className="scroll-arrow">
          <a href="#why-outsource" className="block">
            <ChevronDown className="w-12 h-12" />
          </a>
        </div>
      </div>

      <section id="why-outsource" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 font-playfair">
            ¿Por qué externalizar tu área administrativa?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-lg">
              {carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Administración ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 backdrop-blur-sm">
              <ul className="space-y-6">
                {outsourcingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="border border-blue-600 rounded px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center"
                >
                  Saber más <ChevronRight className={`w-4 h-4 ml-1 transform transition-transform ${expandedService === service.id ? 'rotate-90' : ''}`} />
                </button>
                {expandedService === service.id && service.details && (
                  <div className="mt-4 pl-4 border-l-2 border-blue-200">
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <Link 
                            to={detail.href}
                            className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                          >
                            {detail.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Lo Que Dicen Nuestros Clientes</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${Math.floor(currentTestimonialIndex / 2) * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, i) => (
                  <div 
                    key={i} 
                    className="w-full flex-shrink-0 px-4 grid md:grid-cols-2 gap-8"
                    style={{ flex: '0 0 100%' }}
                  >
                    {testimonials.slice(i * 2, i * 2 + 2).map((testimonial, index) => (
                      <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center">
                        <p className="text-gray-700 italic text-lg mb-6">"{testimonial.text}"</p>
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    Math.floor(currentTestimonialIndex / 2) === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonialIndex(index * 2)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full whitespace-nowrap text-sm">
                    {member.role}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{member.name}</h3>
                <p className="text-gray-600 text-center leading-relaxed max-w-sm text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Planes Mensuales</h2>
          
          <div className="space-y-16">
            {/* Plan Básico Section */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Plan Básico</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {basicPlans.map((plan) => (
                  <div key={plan.name} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold mb-6">
                      ${plan.price} <span className="text-sm text-gray-600 font-normal">/ mes</span>
                    </div>
                    
                    <div className="flex-grow">
                      {expandedPlan === plan.name ? (
                        <ul className="space-y-4 mb-6">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              {!feature.startsWith('📌') && <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />}
                              <span className={feature.startsWith('📌') ? 'text-blue-600 font-medium' : ''}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}
                      className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 mb-3"
                    >
                      {expandedPlan === plan.name ? 'Ocultar plan' : 'Ver plan'}
                    </button>
                    
                    <button
                      onClick={onOpenContractModal}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-auto"
                    >
                      Contrata tu plan
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan Premium Section */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Plan Premium</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {premiumPlans.map((plan) => (
                  <div key={plan.name} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold mb-6">
                      ${plan.price} <span className="text-sm text-gray-600 font-normal">+ IVA{plan.name === 'Plan Gestión laboral Digital' ? ' / mes por trabajador' : ''}</span>
                    </div>
                    
                    <div className="flex-grow">
                      {expandedPlan === plan.name ? (
                        <ul className="space-y-4 mb-6">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              {!feature.startsWith('📌') && <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />}
                              <span className={feature.startsWith('📌') ? 'text-blue-600 font-medium' : ''}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}
                      className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 mb-3"
                    >
                      {expandedPlan === plan.name ? 'Ocultar plan' : 'Ver plan'}
                    </button>
                    
                    <button
                      onClick={onOpenContractModal}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-auto"
                    >
                      Contrata tu plan
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan Elite Section */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Plan Elite</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {elitePlans.map((plan) => (
                  <div key={plan.name} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold mb-6">
                      ${plan.price} <span className="text-sm text-gray-600 font-normal">+ IVA{plan.name === 'Plan Gestión laboral total' ? ' / mes por trabajador' : ''}</span>
                    </div>
                    
                    <div className="flex-grow">
                      {expandedPlan === plan.name ? (
                        <ul className="space-y-4 mb-6">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              {!feature.startsWith('📌') && <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />}
                              <span className={feature.startsWith('📌') ? 'text-blue-600 font-medium' : ''}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}
                      className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 mb-3"
                    >
                      {expandedPlan === plan.name ? 'Ocultar plan' : 'Ver plan'}
                    </button>
                    
                    <button
                      onClick={onOpenContractModal}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-auto"
                    >
                      Contrata tu plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="rrhh">Recursos Humanos</option>
                    <option value="contabilidad">Contabilidad</option>
                    <option value="secretaria">Secretaría</option>
                    <option value="sociedades">Constitución de Sociedades</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span>+569 770 63 509</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span>contacto@sjscuti.cl</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Av. almirante pastene 125, providencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default MainContent;