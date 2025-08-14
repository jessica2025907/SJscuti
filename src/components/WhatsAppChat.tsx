import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { type: 'bot', text: '¡Hola! 👋 Soy el asistente virtual de SJscuti. ¿En qué puedo ayudarte?' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChat(prev => [...prev, { type: 'user', text: message }]);

    setTimeout(() => {
      setChat(prev => [...prev, {
        type: 'bot',
        text: 'Gracias por tu mensaje. Un representante se pondrá en contacto contigo pronto. Si prefieres una respuesta inmediata, puedes llamarnos al +56933725755.'
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-green-500 p-4 flex justify-between items-center">
            <div className="flex items-center text-white">
              <MessageCircle className="w-6 h-6 mr-2" />
              <span className="font-semibold">Chat SJscuti</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="h-96 p-4 overflow-y-auto bg-gray-50">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 shadow'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default WhatsAppChat;