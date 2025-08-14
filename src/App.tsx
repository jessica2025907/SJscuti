import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { Home, ClipboardList, Info, BookOpen, Mail } from 'lucide-react';
import MainContent from './components/MainContent';
import Blog from './pages/Blog';
import Articles from './pages/Articles';
import RrhhArticles from './pages/RrhhArticles';
import ContabilidadArticles from './pages/ContabilidadArticles';
import ContratacionPersonal from './pages/ContratacionPersonal';
import ReclutamientoSeleccion from './pages/ReclutamientoSeleccion';
import ConstitucionSociedades from './pages/ConstitucionSociedades';
import ConstitucionSociedadesArticle from './pages/ConstitucionSociedadesArticle';
import ExternalizacionRemuneracion from './pages/ExternalizacionRemuneracion';
import RegistroComprasVentas from './pages/RegistroComprasVentas';
import BalanceGeneral from './pages/BalanceGeneral';
import InformesFinancieros from './pages/InformesFinancieros';
import ImpuestosMensualesAnuales from './pages/ImpuestosMensualesAnuales';
import AcercaDe from './pages/AcercaDe';
import Contact from './pages/Contact';
import PoliticasPrivacidad from './pages/PoliticasPrivacidad';
import TerminosCondiciones from './pages/TerminosCondiciones';
import Secretaria from './pages/Secretaria';
import AgendarReuniones from './pages/AgendarReuniones';
import OrganizacionCalendarios from './pages/OrganizacionCalendarios';
import CoordinacionReunionesVirtuales from './pages/CoordinacionReunionesVirtuales';
import RecordatoriosPagos from './pages/RecordatoriosPagos';
import GestionCorreos from './pages/GestionCorreos';
import AtencionWhatsApp from './pages/AtencionWhatsApp';
import GestionReclamos from './pages/GestionReclamos';

// Contract Modal Component
import ContractModal from './components/ContractModal';

export const navItems = [
  { href: '/', icon: <Home className="w-5 h-5 mr-1" />, text: 'Inicio' },
  { href: '/#servicios', icon: <ClipboardList className="w-5 h-5 mr-1" />, text: 'Servicios', scroll: true },
  { href: '/acerca', icon: <Info className="w-5 h-5 mr-1" />, text: 'Acerca de SJscuti' },
  { href: '/blog', icon: <BookOpen className="w-5 h-5 mr-1" />, text: 'Blog' },
  { href: '/contacto', icon: <Mail className="w-5 h-5 mr-1" />, text: 'Contacto' }
];

function App() {
  const [showContractModal, setShowContractModal] = useState(false);
  const [contractFormData, setContractFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    services: [] as string[],
    message: ''
  });

  const handleOpenContractModal = () => {
    setShowContractModal(true);
  };

  const handleCloseContractModal = () => {
    setShowContractModal(false);
  };

  const handleContractSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contract form submitted:', contractFormData);
    setShowContractModal(false);
    setContractFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      services: [],
      message: ''
    });
  };

  const handleServiceChange = (service: string) => {
    setContractFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/rrhh-contratacion" element={<ContratacionPersonal onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/rrhh-reclutamiento" element={<ReclutamientoSeleccion onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/constitucion-sociedades" element={<ConstitucionSociedades onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/constitucion-sociedades-article" element={<ConstitucionSociedadesArticle />} />
          <Route path="/rrhh-remuneracion" element={<ExternalizacionRemuneracion onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/registro-compras-ventas" element={<RegistroComprasVentas onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/balance-general" element={<BalanceGeneral onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/informes-financieros" element={<InformesFinancieros onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/impuestos-mensuales-anuales" element={<ImpuestosMensualesAnuales onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/articulos" element={<Articles />} />
          <Route path="/blog/rrhh" element={<RrhhArticles />} />
          <Route path="/blog/contabilidad" element={<ContabilidadArticles />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/politicas-privacidad" element={<PoliticasPrivacidad />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/secretaria" element={<Secretaria />} />
          <Route path="/agendar-reuniones" element={<AgendarReuniones onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/organizacion-calendarios" element={<OrganizacionCalendarios onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/coordinacion-reuniones-virtuales" element={<CoordinacionReunionesVirtuales onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/recordatorios-pagos" element={<RecordatoriosPagos onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/gestion-correos" element={<GestionCorreos onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/atencion-whatsapp" element={<AtencionWhatsApp onOpenContractModal={handleOpenContractModal} />} />
          <Route path="/gestion-reclamos" element={<GestionReclamos onOpenContractModal={handleOpenContractModal} />} />
        </Routes>
      </BrowserRouter>

      {/* Contract Modal */}
      {showContractModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-center flex-1">Conversemos sobre tu empresa</h2>
                <button
                  onClick={handleCloseContractModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <p className="text-gray-600 text-center mb-6">
                Déjanos tus datos y un especialista se pondrá en contacto a la brevedad. 
                Por favor, indícanos en que servicios estás interesados.
              </p>
              
              <form onSubmit={handleContractSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={contractFormData.firstName}
                      onChange={(e) => setContractFormData({...contractFormData, firstName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={contractFormData.lastName}
                      onChange={(e) => setContractFormData({...contractFormData, lastName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={contractFormData.phone}
                      onChange={(e) => setContractFormData({...contractFormData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={contractFormData.email}
                      onChange={(e) => setContractFormData({...contractFormData, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    ¿En qué podemos ayudarte? (Puedes marcar más de una opción)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Contabilidad',
                      'Recursos Humanos',
                      'Secretaría',
                      'Constitución de empresa',
                      'Otra Consulta'
                    ].map((service) => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={contractFormData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="contractMessage" className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos un poco más sobre tu necesidad (opcional)
                  </label>
                  <textarea
                    id="contractMessage"
                    value={contractFormData.message}
                    onChange={(e) => setContractFormData({...contractFormData, message: e.target.value})}
                    maxLength={200}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe brevemente tu consulta o necesidad específica..."
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {contractFormData.message.length}/200 caracteres
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleCloseContractModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;