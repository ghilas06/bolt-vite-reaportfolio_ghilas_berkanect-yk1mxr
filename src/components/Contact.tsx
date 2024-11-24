import React, { useState } from 'react';
import { Mail, MessageSquare, User, Send, Github, Linkedin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ghilas.berkane@gmail.com',
        },
        'YOUR_PUBLIC_KEY'
      );
      
      toast.success(t('contact.form.success'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(t('contact.form.error'));
      console.error('Email error:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2"
                >
                  <User className="w-4 h-4" />
                  <span>{t('contact.form.name')}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-800 transition-colors text-gray-900 dark:text-white"
                  placeholder={t('contact.form.name')}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('contact.form.email')}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-800 transition-colors text-gray-900 dark:text-white"
                  placeholder={t('contact.form.email')}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t('contact.form.message')}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-purple-500 focus:bg-white dark:focus:bg-gray-800 transition-colors resize-none text-gray-900 dark:text-white"
                  placeholder={t('contact.form.message')}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative flex items-center justify-center space-x-2 text-white">
                  <span>{t('contact.form.send')}</span>
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {t('hero.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('hero.description')}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:ghilas.berkane@gmail.com"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>ghilas.berkane@gmail.com</span>
                </a>

                <a
                  href="tel:+33658234881"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+33 658 234 881</span>
                </a>

                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  Expertise
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Applications mobiles natives (iOS/Android)</li>
                  <li>• Applications cross-platform (React Native)</li>
                  <li>• Solutions IoT connectées</li>
                  <li>• Applications web modernes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;