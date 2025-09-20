import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { requestsApi } from '../api/api';

const ContactPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await requestsApi.create({
        ...formData,
        type: 'general'
      });
      
      alert(language === 'ru' 
        ? 'Сообщение отправлено! Мы свяжемся с вами в ближайшее время.' 
        : 'Message sent! We will contact you soon.'
      );
      
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert(language === 'ru'
        ? 'Ошибка при отправке сообщения. Попробуйте позже.'
        : 'Error sending message. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: '214000, ' + (language === 'ru' ? 'Смоленск' : 'Smolensk') + ', ' + 
               (language === 'ru' ? 'ул. Большая Советская' : 'Bolshaya Sovetskaya St.') + 
               ', 16/17, ' + (language === 'ru' ? 'офис' : 'office') + ' K 37',
      link: 'https://yandex.ru/maps/?text=214000+Смоленск+Большая+Советская+16/17'
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+7 (4812) 123-456',
      link: 'tel:+74812123456'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'info@bm-motors.ru',
      link: 'mailto:info@bm-motors.ru'
    },
    {
      icon: Clock,
      title: language === 'ru' ? 'Режим работы' : 'Working Hours',
      content: language === 'ru' 
        ? 'Пн-Пт: 9:00-18:00\nСб: 10:00-16:00\nВс: выходной'
        : 'Mon-Fri: 9:00-18:00\nSat: 10:00-16:00\nSun: Closed',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'ru'
              ? 'Мы всегда готовы ответить на ваши вопросы и помочь найти автомобиль мечты'
              : 'We are always ready to answer your questions and help you find your dream car'
            }
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'ru' ? 'Контактная информация' : 'Contact Information'}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg flex-shrink-0">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-blue-600 hover:text-blue-800 transition-colors whitespace-pre-line"
                                target={info.link.startsWith('http') ? '_blank' : '_self'}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {language === 'ru' ? 'Дополнительная информация' : 'Additional Information'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {language === 'ru' ? 'Бесплатная консультация' : 'Free consultation'}</li>
                  <li>• {language === 'ru' ? 'Выезд к клиенту по городу' : 'City-wide customer visits'}</li>
                  <li>• {language === 'ru' ? 'Онлайн-просмотр автомобилей' : 'Online car viewing'}</li>
                  <li>• {language === 'ru' ? 'Помощь с финансированием' : 'Financing assistance'}</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
                <CardDescription className="text-base">
                  {language === 'ru'
                    ? 'Заполните форму ниже и мы свяжемся с вами в течение рабочего дня'
                    : 'Fill out the form below and we will contact you within one business day'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t('contact.form.name')} *
                      </label>
                      <Input
                        name="name"
                        placeholder={language === 'ru' ? 'Введите ваше имя' : 'Enter your name'}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t('contact.form.phone')} *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder={language === 'ru' ? '+7 (___) ___-__-__' : '+7 (___) ___-__-__'}
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder={language === 'ru' ? 'example@mail.ru' : 'example@email.com'}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      name="message"
                      placeholder={language === 'ru' 
                        ? 'Расскажите о том, какой автомобиль вас интересует, ваш бюджет и другие пожелания...'
                        : 'Tell us about the car you are interested in, your budget and other preferences...'
                      }
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button type="submit" size="lg" className="flex-1 group" disabled={loading}>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      {loading ? (language === 'ru' ? 'Отправка...' : 'Sending...') : t('contact.form.submit')}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('tel:+74812123456')}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {language === 'ru' ? 'Позвонить сейчас' : 'Call Now'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">
                {language === 'ru' ? 'Наше местоположение' : 'Our Location'}
              </CardTitle>
              <CardDescription>
                214000, {language === 'ru' ? 'Смоленск' : 'Smolensk'}, {language === 'ru' ? 'ул. Большая Советская' : 'Bolshaya Sovetskaya St.'}, 16/17, {language === 'ru' ? 'офис' : 'office'} K 37
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 relative">
                {/* Yandex Maps embed with actual Smolensk coordinates */}
                <iframe
                  src="https://yandex.ru/map-widget/v1/?text=214000%20Смоленск%20Большая%20Советская%2016%2F17&amp;z=17&amp;l=map&amp;size=450,400&amp;pt=32.045287,54.782635,pmwtm1~32.045287,54.782635,pmwtm99&amp;lang=ru_RU"
                  width="100%"
                  height="384"
                  frameBorder="0"
                  title="BM Motors - 214000, Смоленск, ул. Большая Советская 16/17, офис K 37"
                  className="absolute inset-0"
                ></iframe>
                
                {/* Map overlay with business info */}
                <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs z-10">
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_eurocars-russia/artifacts/hk5yb2tm_ChatGPT_Image_20_%D1%81%D0%B5%D0%BD%D1%82._2025_%D0%B3.__09_07_03-removebg-preview.png"
                      alt="BM Motors" 
                      className="h-8 w-auto mr-2"
                    />
                    <h3 className="text-sm font-semibold text-gray-900">BM Motors</h3>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    214000, {language === 'ru' ? 'Смоленск' : 'Smolensk'}<br />
                    {language === 'ru' ? 'ул. Большая Советская' : 'Bolshaya Sovetskaya St.'}, 16/17<br />
                    {language === 'ru' ? 'офис' : 'office'} K 37
                  </p>
                  <div className="text-xs text-gray-600">
                    <div>{language === 'ru' ? 'Тел:' : 'Phone:'} +7 (4812) 123-456</div>
                    <div>Email: info@bm-motors.ru</div>
                  </div>
                </div>
                
                {/* Fallback content if iframe doesn't load */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center" style={{zIndex: -1}}>
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      BM Motors
                    </h3>
                    <p className="text-gray-600 mb-4">
                      214000, {language === 'ru' ? 'Смоленск' : 'Smolensk'}<br />
                      {language === 'ru' ? 'ул. Большая Советская' : 'Bolshaya Sovetskaya St.'}, 16/17<br />
                      {language === 'ru' ? 'офис' : 'office'} K 37
                    </p>
                    <Button asChild>
                      <a 
                        href="https://yandex.ru/maps/?text=214000+Смоленск+Большая+Советская+16/17"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {language === 'ru' ? 'Открыть на Яндекс.Картах' : 'Open in Yandex Maps'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;