import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Search, Shield, FileText, Truck, Star, ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { testimonials, services } from '../mock';
import { carsApi, requestsApi, seedDatabase } from '../api/api';

const HomePage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [featuredCars, setFeaturedCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize database and fetch featured cars
  useEffect(() => {
    const initializeData = async () => {
      try {
        // Seed database if needed
        await seedDatabase();
        
        // Fetch cars for featured section
        const cars = await carsApi.getAll();
        setFeaturedCars(cars.slice(0, 3));
      } catch (error) {
        console.error('Error initializing data:', error);
      }
    };

    initializeData();
  }, []);

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
        ? 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.' 
        : 'Request sent! We will contact you soon.'
      );
      
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting request:', error);
      alert(language === 'ru'
        ? 'Ошибка при отправке заявки. Попробуйте позже.'
        : 'Error submitting request. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  const iconMap = {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  BM Motors - {language === 'ru' ? 'Ваш надежный партнер' : 'Your reliable partner'}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/catalog">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Phone className="mr-2 h-4 w-4" />
                  +7 (4812) 123-456
                </Button>
              </div>
            </div>
            
            {/* Request Form */}
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
                <CardDescription>
                  {language === 'ru' 
                    ? 'Оставьте заявку и мы подберем автомобиль для вас' 
                    : 'Leave a request and we will find a car for you'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder={t('contact.form.phone')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                  <Button type="submit" className="w-full">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Наши услуги' : 'Our Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'ru' 
                ? 'Полный цикл услуг по импорту автомобилей из Европы'
                : 'Full cycle of car import services from Europe'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="pt-8">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {language === 'ru' ? service.title : 
                        service.title === 'Поиск автомобиля' ? 'Car Search' :
                        service.title === 'Проверка состояния' ? 'Condition Check' :
                        service.title === 'Оформление документов' ? 'Documentation' :
                        service.title === 'Доставка' ? 'Delivery' : service.title
                      }
                    </h3>
                    <p className="text-gray-600">
                      {language === 'ru' ? service.description :
                        service.description === 'Найдем автомобиль вашей мечты на европейских аукционах и у дилеров' ? 'Find your dream car at European auctions and dealers' :
                        service.description === 'Полная техническая диагностика и проверка истории автомобиля' ? 'Complete technical diagnostics and vehicle history check' :
                        service.description === 'Берем на себя все вопросы растаможки и регистрации' ? 'We handle all customs and registration issues' :
                        service.description === 'Надежная транспортировка автомобиля до вашего города' ? 'Reliable transportation to your city' : service.description
                      }
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Рекомендуемые автомобили' : 'Featured Cars'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ru' ? 'Популярные модели в наличии' : 'Popular models in stock'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car) => (
              <Card key={car.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {car.brand} {car.model}
                    </h3>
                    <Badge variant="secondary">{car.year}</Badge>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-3">
                    {car.price.toLocaleString()} {t('catalog.rub')}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1 mb-4">
                    <p>{car.mileage.toLocaleString()} км • {car.fuel} • {car.transmission}</p>
                    <p className="text-gray-800">{car.description}</p>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/catalog">
                      {language === 'ru' ? 'Подробнее' : 'Learn More'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/catalog">
                {language === 'ru' ? 'Посмотреть все автомобили' : 'View All Cars'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Отзывы клиентов' : 'Customer Reviews'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;