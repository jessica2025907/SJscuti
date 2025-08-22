import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Calculator, ClipboardList, ChevronRight, FileText } from 'lucide-react';
import Footer from '../components/Footer';
import { navItems } from '../App';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const categories = [
    {
      name: 'Recursos Humanos',
      href: '/blog/rrhh',
      icon: <Users className="w-5 h-5" />,
      description: 'Artículos sobre gestión de recursos humanos.'
    },
    {
      name: 'Contabilidad',
      href: '/blog/contabilidad',
      icon: <Calculator className="w-5 h-5" />,
      description: 'Artículos sobre contabilidad y finanzas.'
    },
    {
      name: 'Constitución de Sociedades',
      href: '/constitucion-sociedades-article',
      icon: <FileText className="w-5 h-5" />,
      description: 'Artículos sobre constitución de sociedades.'
    },
    {
      name: 'Secretaria',
      href: '/secretaria',
      icon: <ClipboardList className="w-5 h-5" />,
      description: 'Artículos sobre servicios de secretaría.'
    }
  ];

  const popularPosts = [
    {
      title: 'Cómo optimizar la gestión de RRHH en 2025',
      href: '/blog/rrhh/optimizar-gestion',
      date: '15 Mar'
    },
    {
      title: 'Guía de contabilidad para startups',
      href: '/blog/contabilidad/guia-startups',
      date: '12 Mar'
    },
    {
      title: 'Ventajas de la constitución digital de sociedades',
      href: '/blog/sociedades/constitucion-digital',
      date: '10 Mar'
    }
  ];

  const serviceCards = [
    {
      id: 'rrhh',
      title: 'Recursos Humanos Externalizados',
      category: 'Recursos Humanos',
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,g_face,h_400,w_600/v1746632408/freepik__the-style-is-candid-image-photography-with-natural__76574_qqvvqy.png',
      description: 'La gestión del talento es fundamental para cualquier empresa, pero no siempre se cuenta con los recursos internos para llevarla a cabo de forma eficaz.',
      expandedContent: (
        <ul className="space-y-2 text-gray-600">
          <li>• Optimizar la contratación de personal calificado.</li>
          <li>• Implementar procesos de onboarding, capacitación y evaluación de desempeño.</li>
          <li>• Asegurar el cumplimiento normativo en contratos, remuneraciones y desvinculaciones.</li>
          <li className="mt-4 font-semibold">Ventaja actual: En 2025, con la creciente digitalización del trabajo, muchas empresas están optando por plataformas y consultoras que ofrecen soluciones de RR.HH. totalmente en línea y adaptadas a la legislación chilena.</li>
        </ul>
      ),
      link: '/blog/rrhh'
    },
    {
      id: 'contabilidad',
      title: 'Contabilidad Profesional Externa',
      category: 'Contabilidad',
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746633020/Gemini_Generated_Image_4k4spf4k4spf4k4s_fmzkf8.jpg',
      description: 'Tener una contabilidad ordenada y transparente no es opcional: es la base de toda empresa sana y legalmente vigente.',
      expandedContent: (
        <ul className="space-y-2 text-gray-600">
          <li>• Registro contable actualizado.</li>
          <li>• Declaraciones de impuestos al día.</li>
          <li>• Reportes financieros para la toma de decisiones.</li>
          <li className="mt-4 font-semibold">Dato actual: Desde la implementación de herramientas como el Libro de Compras Electrónico del SII, muchas contabilidades se realizan en tiempo real, lo que permite a los emprendedores tomar decisiones más ágiles y seguras.</li>
        </ul>
      ),
      link: '/blog/contabilidad'
    },
    {
      id: 'sociedades',
      title: 'Constitución de Sociedades Simplificada',
      category: 'Constitución de Sociedades',
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746633371/freepik__the-style-is-candid-image-photography-with-natural__63823_rc315h.jpg',
      description: 'Crear una empresa en Chile puede ser rápido si se hace con asesoría adecuada.',
      expandedContent: (
        <ul className="space-y-2 text-gray-600">
          <li>• La elección del tipo de sociedad más conveniente (SpA, Ltda., EIRL).</li>
          <li>• Redacción de estatutos.</li>
          <li>• Registro en el SII y obtención de RUT.</li>
          <li>• Publicaciones en el Diario Oficial y notaría (si aplica).</li>
          <li className="mt-4 font-semibold">Tendencia 2025: Gracias al sistema "Tu Empresa en un Día", muchas constituciones se realizan en 48 horas. Sin embargo, contar con expertos evita errores que pueden costar caro en el futuro.</li>
        </ul>
      ),
      link: '/constitucion-sociedades-article'
    },
    {
      id: 'secretaria',
      title: 'Secretaría Externalizada: Orden y Profesionalismo',
      category: 'Secretaria',
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,g_face,h_400,w_600/v1746633788/Gemini_Generated_Image_aqaqtaaqaqtaaqaq_lwyvng.jpg',
      description: 'Una asistente administrativa externa puede encargarse de tareas clave sin necesidad de contratar personal full-time.',
      expandedContent: (
        <ul className="space-y-2 text-gray-600">
          <li>• Gestión de agendas y reuniones.</li>
          <li>• Atención de clientes y redacción de documentos.</li>
          <li>• Soporte operativo diario de forma remota.</li>
          <li className="mt-4 font-semibold">Actualidad: Con el auge del trabajo híbrido, las secretarías externalizadas están siendo altamente valoradas por su flexibilidad y bajo costo operativo.</li>
        </ul>
      ),
      link: '/secretaria'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    
    if (!query.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    const results = serviceCards.filter(card => {
      const searchTerms = [
        card.title.toLowerCase(),
        card.description.toLowerCase(),
        card.category.toLowerCase()
      ];
      
      const isMainCategory = [
        'recursos humanos',
        'contabilidad',
        'constitución de sociedades',
        'secretaria'
      ].some(category => 
        query.includes(category) && card.category.toLowerCase().includes(category)
      );

      return isMainCategory || searchTerms.some(term => term.includes(query));
    });

    setSearchResults(results);
    setHasSearched(true);
  };

  const cardsToDisplay = hasSearched ? searchResults : serviceCards;

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
              to="/contacto"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Cotizar Ahora
            </Link>
          </div>
        </div>
      </nav>

      <div className="bg-white border-b mt-32">
        <div className="container mx-auto px-6 py-8">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar artículos, RR.HH, Contabilidad, Constitución de sociedades, Secretaria"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Categorías</h2>
              <nav>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={category.href}
                        className="block p-3 rounded-lg hover:bg-blue-50 transition duration-300"
                      >
                        <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 ml-7">
                          {category.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Artículos Populares</h2>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <Link
                    key={index}
                    to={post.href}
                    className="block group"
                  >
                    <h3 className="text-gray-800 group-hover:text-blue-600 transition duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Sobre SJscuti</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                En SJscuti, ofrecemos soluciones integrales de servicios administrativos, recursos humanos, 
                contabilidad y secretaría. Nos especializamos en externalizar 
                áreas clave de tu negocio, permitiéndote optimizar recursos, reducir costos y mejorar la 
                eficiencia operativa.
              </p>
              <Link
                to="/acerca"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Conoce más sobre nosotros
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-8">Servicios Empresariales</h1>
              {hasSearched && searchResults.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No se encontraron artículos que coincidan con tu búsqueda.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {cardsToDisplay.map((card) => (
                    <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <Link to={card.link}>
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                          <p className="text-gray-600 mb-4">{card.description}</p>
                          {card.expandedContent && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setExpandedCard(expandedCard === card.id ? null : card.id);
                              }}
                              className="border border-blue-600 rounded px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center"
                            >
                              {expandedCard === card.id ? 'Leer menos' : 'Leer más'}
                              <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${
                                expandedCard === card.id ? 'rotate-90' : ''
                              }`} />
                            </button>
                          )}
                          {expandedCard === card.id && card.expandedContent && (
                            <div className="mt-4 border-t pt-4">
                              {card.expandedContent}
                            </div>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;