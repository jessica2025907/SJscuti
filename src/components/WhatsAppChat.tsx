import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

function WhatsAppChat() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = '56977063509';

  const services = [
    {
      name: 'Recursos Humanos',
      message: 'Hola, me gustaría consultar sobre el servicio de Recursos Humanos.'
    },
    {
      name: 'Contabilidad',
      message: 'Hola, me gustaría consultar sobre el servicio de Contabilidad.'
    },
    {
      name: 'Constitución de Sociedades',
      message: 'Hola, me gustaría consultar sobre la Constitución de Sociedades.'
    },
    {
      name: 'Secretaría',
      message: 'Hola, me gustaría consultar sobre el servicio de Secretaría.'
    },
    {
      name: 'Otra consulta',
      message: 'Hola, tengo otra consulta.'
    }
  ];

  const handleServiceClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMenuOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden border">
          <div className="bg-green-500 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold text-lg">¿Sobre qué servicio te gustaría consultar?</h3>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4 space-y-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(service.message)}
                className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors duration-200 border border-gray-200 hover:border-green-300"
              >
                <span className="text-gray-800 font-medium">{service.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default WhatsAppChat;