import React, { useState, useMemo, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Filter, SortAsc, Eye, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { carBrands } from '../mock';
import { carsApi } from '../api/api';

const CatalogPage = () => {
  const { t, language } = useLanguage();
  const [filters, setFilters] = useState({
    brand: 'all',
    priceMin: '',
    priceMax: '',
    yearMin: '',
    yearMax: ''
  });
  const [sortBy, setSortBy] = useState('price-asc');
  const [selectedCar, setSelectedCar] = useState(null);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cars from API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const carsData = await carsApi.getAll(filters);
        setCars(carsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching cars:', err);
        setError('Failed to load cars');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [filters]);

  const filteredAndSortedCars = useMemo(() => {
    let filtered = [...cars];

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'year-desc':
          return b.year - a.year;
        case 'year-asc':
          return a.year - b.year;
        case 'mileage-asc':
          return a.mileage - b.mileage;
        default:
          return 0;
      }
    });

    return filtered;
  }, [cars, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      brand: 'all',
      priceMin: '',
      priceMax: '',
      yearMin: '',
      yearMax: ''
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {language === 'ru' ? 'Ошибка загрузки' : 'Loading Error'}
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            {language === 'ru' ? 'Попробовать снова' : 'Try Again'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('catalog.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {language === 'ru' 
              ? `Найдено ${filteredAndSortedCars.length} автомобилей`
              : `Found ${filteredAndSortedCars.length} cars`
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Filter className="mr-2 h-5 w-5" />
                    {t('catalog.filter')}
                  </h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    {language === 'ru' ? 'Сбросить' : 'Clear'}
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Brand Filter */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {t('catalog.brand')}
                    </label>
                    <Select value={filters.brand} onValueChange={(value) => handleFilterChange('brand', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={language === 'ru' ? 'Выберите марку' : 'Select brand'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{language === 'ru' ? 'Все марки' : 'All brands'}</SelectItem>
                        {Object.entries(carBrands).map(([key, value]) => (
                          <SelectItem key={key} value={value}>{value}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {t('catalog.price')} ({t('catalog.rub')})
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder={language === 'ru' ? 'От' : 'From'}
                        value={filters.priceMin}
                        onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                        type="number"
                      />
                      <Input
                        placeholder={language === 'ru' ? 'До' : 'To'}
                        value={filters.priceMax}
                        onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                        type="number"
                      />
                    </div>
                  </div>

                  {/* Year Range */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      {t('catalog.year')}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder={language === 'ru' ? 'От' : 'From'}
                        value={filters.yearMin}
                        onChange={(e) => handleFilterChange('yearMin', e.target.value)}
                        type="number"
                        min="2000"
                        max="2024"
                      />
                      <Input
                        placeholder={language === 'ru' ? 'До' : 'To'}
                        value={filters.yearMax}
                        onChange={(e) => handleFilterChange('yearMax', e.target.value)}
                        type="number"
                        min="2000"
                        max="2024"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-2">
                <SortAsc className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">{t('catalog.sort')}:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">
                      {language === 'ru' ? 'Цена: по возрастанию' : 'Price: Low to High'}
                    </SelectItem>
                    <SelectItem value="price-desc">
                      {language === 'ru' ? 'Цена: по убыванию' : 'Price: High to Low'}
                    </SelectItem>
                    <SelectItem value="year-desc">
                      {language === 'ru' ? 'Год: новые сначала' : 'Year: Newest First'}
                    </SelectItem>
                    <SelectItem value="year-asc">
                      {language === 'ru' ? 'Год: старые сначала' : 'Year: Oldest First'}
                    </SelectItem>
                    <SelectItem value="mileage-asc">
                      {language === 'ru' ? 'Пробег: по возрастанию' : 'Mileage: Low to High'}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Cars Grid */}
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <span className="ml-2 text-gray-600">
                  {language === 'ru' ? 'Загрузка автомобилей...' : 'Loading cars...'}
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedCars.map((car) => (
                <Card key={car.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {car.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {car.brand} {car.model}
                      </h3>
                    </div>
                    
                    <p className="text-2xl font-bold text-blue-600 mb-3">
                      {car.price.toLocaleString()} {t('catalog.rub')}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>{t('catalog.mileage')}:</span>
                        <span className="font-medium">{car.mileage.toLocaleString()} км</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('catalog.fuel')}:</span>
                        <span className="font-medium">{car.fuel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('catalog.transmission')}:</span>
                        <span className="font-medium">{car.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('catalog.color')}:</span>
                        <span className="font-medium">{car.color}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {car.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {car.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {car.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{car.features.length - 2} {language === 'ru' ? 'еще' : 'more'}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        className="flex-1"
                        onClick={() => setSelectedCar(car)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        {language === 'ru' ? 'Подробнее' : 'Details'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            )}

            {!loading && filteredAndSortedCars.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">
                    {language === 'ru' ? 'Автомобили не найдены' : 'No cars found'}
                  </h3>
                  <p>
                    {language === 'ru' 
                      ? 'Попробуйте изменить критерии поиска'
                      : 'Try adjusting your search criteria'
                    }
                  </p>
                </div>
                <Button variant="outline" onClick={clearFilters}>
                  {language === 'ru' ? 'Сбросить фильтры' : 'Clear filters'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Car Details Modal (Simple implementation) */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedCar(null)}>
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedCar.brand} {selectedCar.model}</h2>
                <Button variant="ghost" size="sm" onClick={() => setSelectedCar(null)}>×</Button>
              </div>
              
              <img
                src={selectedCar.image}
                alt={`${selectedCar.brand} ${selectedCar.model}`}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">{language === 'ru' ? 'Основные характеристики' : 'Main specifications'}</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>{t('catalog.year')}:</strong> {selectedCar.year}</p>
                    <p><strong>{t('catalog.mileage')}:</strong> {selectedCar.mileage.toLocaleString()} км</p>
                    <p><strong>{t('catalog.fuel')}:</strong> {selectedCar.fuel}</p>
                    <p><strong>{t('catalog.transmission')}:</strong> {selectedCar.transmission}</p>
                    <p><strong>{t('catalog.color')}:</strong> {selectedCar.color}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t('catalog.features')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedCar.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{feature}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedCar.description}</p>
              
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold text-blue-600">
                  {selectedCar.price.toLocaleString()} {t('catalog.rub')}
                </p>
                <Button size="lg">
                  {language === 'ru' ? 'Связаться с нами' : 'Contact us'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;