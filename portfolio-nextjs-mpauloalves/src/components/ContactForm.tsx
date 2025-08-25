import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 container-custom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vamos Conversar? 🚀
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base text-slate-700 dark:text-light-textSecondary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Estou disponível para novos projetos, oportunidades ou apenas para trocar ideias sobre tecnologia
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center flex-wrap">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:contato@mpauloalves.dev" className="text-sm sm:text-base hover:text-primary transition-colors break-all">
                 marcospauloas17@gmail.com
                </a>
              </div>
              <div className="flex items-center flex-wrap">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                </div>
                <a href="https://github.com/mpauloalves" target="_blank" rel="noreferrer" className="text-sm sm:text-base hover:text-primary transition-colors break-all">
                  github.com/mpauloalves
                </a>
              </div>
              <div className="flex items-center flex-wrap">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.5 0h-15A2.5 2.5 0 000 2.5v15A2.5 2.5 0 002.5 20h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0017.5 0zM6 15.5H3.5v-8H6v8zm-1.25-9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11.25 9h-2.5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4H7v-8h2.5v1.5c.63-.95 1.68-1.5 2.75-1.5 1.93 0 3.5 1.57 3.5 3.5v4.5z" />
                  </svg>
                </div>
                <a href="https://linkedin.com/in/mpauloalves" target="_blank" rel="noreferrer" className="text-sm sm:text-base hover:text-primary transition-colors break-all">
                  linkedin.com/in/mpauloalves
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <form onSubmit={submit} className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1">Nome</label>
                <input 
                  id="name"
                  type="text"
                  required 
                  value={form.name} 
                  onChange={e => setForm({...form, name: e.target.value})} 
                  placeholder="Seu nome" 
                  className="w-full p-2 sm:p-3 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">Email</label>
                <input 
                  id="email"
                  type="email"
                  required 
                  value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})} 
                  placeholder="seu.email@exemplo.com" 
                  className="w-full p-2 sm:p-3 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1">Mensagem</label>
                <textarea 
                  id="message"
                  required 
                  value={form.message} 
                  onChange={e => setForm({...form, message: e.target.value})} 
                  placeholder="Sua mensagem..." 
                  rows={4} 
                  className="w-full p-2 sm:p-3 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm sm:text-base" 
                />
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="btn-primary flex items-center justify-center w-full py-2 sm:py-3 text-sm sm:text-base"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Enviar Mensagem
                    </span>
                  )}
                </button>
                
                {status === 'success' && (
                  <div className="mt-3 p-2 sm:p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md flex items-center text-green-700 dark:text-green-400 text-xs sm:text-sm">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span>Mensagem enviada com sucesso!</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="mt-3 p-2 sm:p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md flex items-center text-red-700 dark:text-red-400 text-xs sm:text-sm">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span>Erro ao enviar mensagem. Tente novamente.</span>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
