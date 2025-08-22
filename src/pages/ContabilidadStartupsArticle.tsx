import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import { navItems } from '../App';

interface ContabilidadStartupsArticleProps {
  onOpenContractModal?: () => void;
}

function ContabilidadStartupsArticle({ onOpenContractModal }: ContabilidadStartupsArticleProps = {}) {
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
            src="https://res.cloudinary.com/dllnci5vy/image/upload/v1755873252/freepik__semiabstract-accounting-scene-a-stack-of-financial__45243_x3vqh4.jpg"
            alt="Guía de Contabilidad para Startups"
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
              Guía de Contabilidad para Startups: No Dejes que los Números te Superen
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-8 text-gray-600 font-medium">
                Emprender es emocionante, pero entre la pasión por tu idea y la velocidad del día a día, los temas financieros pueden quedar en segundo plano. Sin embargo, una contabilidad sólida no es un accesorio, es el motor que mantiene a tu startup en el camino hacia el éxito. Aquí te damos una guía rápida para que empieces con el pie derecho.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                1. No subestimes la formalidad desde el inicio
              </h2>
              <p className="mb-8">
                Muchos emprendedores comienzan con operaciones informales, pero esto puede ser un grave error. Registrar tu empresa y abrir una cuenta bancaria corporativa desde el inicio te ahorra futuros dolores de cabeza. La separación de finanzas personales y empresariales es el primer mandamiento. Si mezclas todo, será imposible saber si tu negocio realmente está generando ganancias.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                2. Domina el arte de la categorización de gastos
              </h2>
              <p className="mb-8">
                Cada centavo que entra y sale debe ser registrado y clasificado. ¿Es un gasto de marketing? ¿Un costo de desarrollo? ¿O es una inversión en equipo? Mantener un registro detallado de tus ingresos y gastos es crucial para entender dónde se va el dinero y poder tomar decisiones estratégicas. Utiliza software de contabilidad (como QuickBooks, Xero o FreshBooks) que te ayude a automatizar esta tarea y te dé una visión clara de tu salud financiera.
              </p>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                3. Conoce tus estados financieros clave
              </h2>
              <p className="mb-4">
                No necesitas un título en finanzas para entender los tres documentos esenciales:
              </p>
              <div className="ml-4 mb-6">
                <p className="mb-3">
                  <strong>Estado de Resultados (P&L):</strong> Te muestra si estás ganando dinero (ingresos menos gastos).
                </p>
                <p className="mb-3">
                  <strong>Balance General:</strong> Es una "foto" de tu empresa en un momento dado, mostrando lo que tienes (activos), lo que debes (pasivos) y lo que te pertenece (patrimonio).
                </p>
                <p className="mb-3">
                  <strong>Estado de Flujo de Efectivo:</strong> Te dice cuánto dinero líquido (efectivo) entra y sale de tu negocio.
                </p>
              </div>
              <p className="mb-8">
                Entender estos informes te dará el poder de saber si tu startup es rentable y sostenible.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                4. La importancia de un contador (o una secretaria virtual)
              </h2>
              <p className="mb-8">
                Si bien puedes gestionar los conceptos básicos al principio, llegará un punto en el que el tiempo que dedicas a la contabilidad te quitará de tareas más importantes, como hacer crecer tu negocio. Contratar a un contador o a una secretaria virtual especializada en finanzas es una inversión inteligente. Ellos se encargarán de los impuestos, las obligaciones legales y de darte la tranquilidad de que tus finanzas están en orden.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  En el mundo de las startups, la agilidad es vital, pero la estabilidad financiera es la base. Con esta guía, puedes asegurarte de que tu visión no se desvanezca por un descuido contable.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-700 text-lg mb-4">¿Necesitas ayuda con la contabilidad de tu startup?</p>
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

export default ContabilidadStartupsArticle;