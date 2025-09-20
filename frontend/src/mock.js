// Mock data for BM Motors car import website

export const carBrands = {
  bmw: 'BMW',
  mercedes: 'Mercedes-Benz',
  volkswagen: 'Volkswagen',
  peugeot: 'Peugeot',
  audi: 'Audi',
  renault: 'Renault',
  citroen: 'Citroën',
  opel: 'Opel',
  ford: 'Ford',
  volvo: 'Volvo'
};

export const mockCars = [
  {
    id: 1,
    brand: 'BMW',
    model: 'X5',
    year: 2020,
    price: 4500000,
    mileage: 35000,
    fuel: 'Бензин',
    transmission: 'Автомат',
    color: 'Черный',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Премиальный внедорожник в отличном состоянии. Полная история обслуживания.',
    features: ['Кожаный салон', 'Навигация', 'Камера заднего вида', 'Ксенон']
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2021,
    price: 3800000,
    mileage: 28000,
    fuel: 'Бензин',
    transmission: 'Автомат',
    color: 'Серебристый',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Элегантный седан бизнес-класса с максимальной комплектацией.',
    features: ['AMG пакет', 'Панорамная крыша', 'Массаж сидений', 'MBUX система']
  },
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'Tiguan',
    year: 2019,
    price: 2200000,
    mileage: 45000,
    fuel: 'Бензин',
    transmission: 'Автомат',
    color: 'Белый',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Надежный компактный кроссовер для семьи.',
    features: ['4Motion', 'Климат-контроль', 'Парктроник', 'LED фары']
  },
  {
    id: 4,
    brand: 'Peugeot',
    model: '3008',
    year: 2020,
    price: 1950000,
    mileage: 32000,
    fuel: 'Дизель',
    transmission: 'Автомат',
    color: 'Синий',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Стильный французский кроссовер с уникальным дизайном.',
    features: ['i-Cockpit', 'Grip Control', 'Беспроводная зарядка', '3D навигация']
  },
  {
    id: 5,
    brand: 'Audi',
    model: 'A6',
    year: 2021,
    price: 4200000,
    mileage: 22000,
    fuel: 'Бензин',
    transmission: 'Автомат',
    color: 'Черный',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Представительский седан с передовыми технологиями.',
    features: ['Virtual Cockpit', 'Matrix LED', 'Bang & Olufsen', 'Quattro']
  },
  {
    id: 6,
    brand: 'Renault',
    model: 'Duster',
    year: 2020,
    price: 1650000,
    mileage: 38000,
    fuel: 'Бензин',
    transmission: 'Механика',
    color: 'Оранжевый',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Доступный и практичный кроссовер для активного отдыха.',
    features: ['Полный привод', 'Увеличенный клиренс', 'Багажник 445л', 'Защита днища']
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Александр Петров',
    city: 'Москва',
    text: 'Отличная компания! Помогли найти и привезти BMW X5 из Германии. Все документы оформили быстро и профессионально.',
    rating: 5,
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Мария Иванова',
    city: 'Санкт-Петербург',
    text: 'Очень довольна покупкой Mercedes E-Class через BM Motors. Машина в идеальном состоянии, цена справедливая.',
    rating: 5,
    date: '2024-02-20'
  },
  {
    id: 3,
    name: 'Сергей Козлов',
    city: 'Смоленск',
    text: 'Местная компания, которой можно доверять. Купил Volkswagen Tiguan - все прошло отлично!',
    rating: 5,
    date: '2024-03-10'
  }
];

export const services = [
  {
    id: 1,
    title: 'Поиск автомобиля',
    description: 'Найдем автомобиль вашей мечты на европейских аукционах и у дилеров',
    icon: 'Search'
  },
  {
    id: 2,
    title: 'Проверка состояния',
    description: 'Полная техническая диагностика и проверка истории автомобиля',
    icon: 'Shield'
  },
  {
    id: 3,
    title: 'Оформление документов',
    description: 'Берем на себя все вопросы растаможки и регистрации',
    icon: 'FileText'
  },
  {
    id: 4,
    title: 'Доставка',
    description: 'Надежная транспортировка автомобиля до вашего города',
    icon: 'Truck'
  }
];

export const translations = {
  ru: {
    nav: {
      home: 'Главная',
      catalog: 'Каталог',
      about: 'О нас',
      contact: 'Контакты'
    },
    hero: {
      title: 'Автомобили из Европы',
      subtitle: 'Надежный импорт качественных автомобилей с полным сервисом',
      cta: 'Посмотреть каталог',
      request: 'Оставить заявку'
    },
    catalog: {
      title: 'Каталог автомобилей',
      filter: 'Фильтр',
      sort: 'Сортировка',
      price: 'Цена',
      brand: 'Марка',
      year: 'Год',
      mileage: 'Пробег',
      fuel: 'Топливо',
      transmission: 'КПП',
      color: 'Цвет',
      features: 'Особенности',
      rub: '₽'
    },
    about: {
      title: 'О компании BM Motors',
      description: 'Мы специализируемся на импорте качественных автомобилей из Европы в Россию более 10 лет.'
    },
    contact: {
      title: 'Свяжитесь с нами',
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Email',
      form: {
        title: 'Оставить заявку',
        name: 'Ваше имя',
        phone: 'Номер телефона',
        message: 'Сообщение',
        submit: 'Отправить заявку'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Cars from Europe',
      subtitle: 'Reliable import of quality cars with full service',
      cta: 'View catalog',
      request: 'Make request'
    },
    catalog: {
      title: 'Car catalog',
      filter: 'Filter',
      sort: 'Sort',
      price: 'Price',
      brand: 'Brand',
      year: 'Year',
      mileage: 'Mileage',
      fuel: 'Fuel',
      transmission: 'Transmission',
      color: 'Color',
      features: 'Features',
      rub: '₽'
    },
    about: {
      title: 'About BM Motors',
      description: 'We specialize in importing quality cars from Europe to Russia for over 10 years.'
    },
    contact: {
      title: 'Contact us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      form: {
        title: 'Make request',
        name: 'Your name',
        phone: 'Phone number',
        message: 'Message',
        submit: 'Send request'
      }
    }
  }
};