import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_eurocars-russia/artifacts/mf71l7kt_1797832c389387b90898cf8403999129.jfif"
                alt="BM Motors" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('about.description')}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>214000, {language === 'ru' ? 'Смоленск' : 'Smolensk'}, {language === 'ru' ? 'ул. Большая Советская' : 'Bolshaya Sovetskaya St.'}, 16/17, {language === 'ru' ? 'офис' : 'office'} K 37</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+7 (4812) 123-456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@bm-motors.ru</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'ru' ? 'Навигация' : 'Navigation'}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">{t('nav.catalog')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'ru' ? 'Услуги' : 'Services'}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{language === 'ru' ? 'Поиск автомобилей' : 'Car search'}</li>
              <li>{language === 'ru' ? 'Техническая проверка' : 'Technical inspection'}</li>
              <li>{language === 'ru' ? 'Растаможка' : 'Customs clearance'}</li>
              <li>{language === 'ru' ? 'Доставка' : 'Delivery'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 BM Motors. {language === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;