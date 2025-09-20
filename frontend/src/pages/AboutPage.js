import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle, Users, Globe, Award, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const { language } = useLanguage();

  const stats = [
    {
      number: '10+',
      label: language === 'ru' ? 'лет опыта' : 'years experience',
      icon: Clock
    },
    {
      number: '500+',
      label: language === 'ru' ? 'довольных клиентов' : 'happy customers',
      icon: Users
    },
    {
      number: '1000+',
      label: language === 'ru' ? 'импортированных авто' : 'imported cars',
      icon: Globe
    },
    {
      number: '100%',
      label: language === 'ru' ? 'юридическая чистота' : 'legal compliance',
      icon: Shield
    }
  ];

  const advantages = [
    {
      title: language === 'ru' ? 'Прозрачность процесса' : 'Process transparency',
      description: language === 'ru' 
        ? 'Вы всегда знаете на каком этапе находится ваш автомобиль'
        : 'You always know what stage your car is at'
    },
    {
      title: language === 'ru' ? 'Гарантия качества' : 'Quality guarantee',
      description: language === 'ru'
        ? 'Каждый автомобиль проходит тщательную проверку перед покупкой'
        : 'Every car undergoes thorough inspection before purchase'
    },
    {
      title: language === 'ru' ? 'Полное сопровождение' : 'Full support',
      description: language === 'ru'
        ? 'От поиска до постановки на учет - мы делаем всё за вас'
        : 'From search to registration - we do everything for you'
    },
    {
      title: language === 'ru' ? 'Выгодные цены' : 'Competitive prices',
      description: language === 'ru'
        ? 'Прямые поставки без посредников позволяют предлагать лучшие цены'
        : 'Direct supplies without intermediaries allow us to offer the best prices'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              {language === 'ru' ? 'О компании' : 'About Company'}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              BM Motors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'ru'
                ? 'Мы специализируемся на импорте качественных автомобилей из Европы в Россию уже более 10 лет. Наша миссия - предоставить каждому клиенту возможность приобрести автомобиль мечты по справедливой цене с полным юридическим сопровождением.'
                : 'We specialize in importing quality cars from Europe to Russia for over 10 years. Our mission is to provide every client with the opportunity to purchase their dream car at a fair price with full legal support.'
              }
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === 'ru' ? 'Наша история' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {language === 'ru'
                    ? 'BM Motors была основана в 2014 году в Смоленске с простой идеей - сделать импорт качественных европейских автомобилей доступным для российских покупателей. Начав с небольшого офиса и команды из трех человек, мы постепенно расширили наш бизнес.'
                    : 'BM Motors was founded in 2014 in Smolensk with a simple idea - to make importing quality European cars accessible to Russian buyers. Starting with a small office and a team of three people, we gradually expanded our business.'
                  }
                </p>
                <p>
                  {language === 'ru'
                    ? 'Сегодня мы работаем с ведущими аукционными домами и дилерами Германии, Франции, Италии и других европейских стран. Наш опыт позволяет нам находить лучшие предложения и обеспечивать безупречное качество обслуживания.'
                    : 'Today we work with leading auction houses and dealers in Germany, France, Italy and other European countries. Our experience allows us to find the best offers and ensure impeccable service quality.'
                  }
                </p>
                <p>
                  {language === 'ru'
                    ? 'За годы работы мы помогли более чем 500 семьям приобрести автомобили своей мечты, и мы гордимся доверием, которое нам оказывают наши клиенты.'
                    : 'Over the years, we have helped more than 500 families purchase their dream cars, and we are proud of the trust our customers place in us.'
                  }
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562141961-401898d3a4b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Car dealership"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Почему выбирают нас' : 'Why Choose Us'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ru'
                ? 'Преимущества работы с BM Motors'
                : 'Advantages of working with BM Motors'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Наша команда' : 'Our Team'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ru'
                ? 'Профессионалы с многолетним опытом'
                : 'Professionals with years of experience'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: language === 'ru' ? 'Борис Михайлов' : 'Boris Mikhailov',
                role: language === 'ru' ? 'Генеральный директор' : 'General Director',
                experience: language === 'ru' ? '15 лет в автомобильном бизнесе' : '15 years in automotive business',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              },
              {
                name: language === 'ru' ? 'Мария Петрова' : 'Maria Petrova',
                role: language === 'ru' ? 'Менеджер по работе с клиентами' : 'Customer Relations Manager',
                experience: language === 'ru' ? '8 лет опыта в продажах' : '8 years of sales experience',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b512b38c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              },
              {
                name: language === 'ru' ? 'Алексей Смирнов' : 'Alexey Smirnov',
                role: language === 'ru' ? 'Технический эксперт' : 'Technical Expert',
                experience: language === 'ru' ? '12 лет в автосервисе' : '12 years in auto service',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ru' ? 'Наши ценности' : 'Our Values'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: language === 'ru' ? 'Честность' : 'Honesty',
                description: language === 'ru'
                  ? 'Мы всегда говорим правду о состоянии автомобиля и всех расходах'
                  : 'We always tell the truth about the car condition and all expenses'
              },
              {
                icon: Award,
                title: language === 'ru' ? 'Качество' : 'Quality',
                description: language === 'ru'
                  ? 'Мы работаем только с проверенными поставщиками и тщательно отбираем автомобили'
                  : 'We work only with verified suppliers and carefully select cars'
              },
              {
                icon: Users,
                title: language === 'ru' ? 'Клиентоориентированность' : 'Customer Focus',
                description: language === 'ru'
                  ? 'Интересы клиента - наш главный приоритет в любой ситуации'
                  : 'Customer interests are our main priority in any situation'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;