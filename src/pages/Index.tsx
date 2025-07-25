import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-accent">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="ChefHat" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-secondary">RestaurantPro</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Консультация
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-secondary leading-tight">
                Превратите ваш ресторан в 
                <span className="text-primary"> прибыльный бизнес</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Профессиональный консалтинг для ресторанного бизнеса. 
                Увеличиваем прибыль на 40-60% за 3 месяца.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-secondary border-secondary hover:bg-secondary hover:text-white text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть кейсы
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">150+</div>
                <div className="text-sm text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-gray-600">Успешных кейсов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">5 лет</div>
                <div className="text-sm text-gray-600">На рынке</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 animate-float">
              <img 
                src="/img/4955cdb8-278e-4530-be65-0252e7081a11.jpg" 
                alt="Ресторанный консалтинг" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-secondary">+60%</div>
                  <div className="text-sm text-gray-600">Рост прибыли</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold text-secondary">Наши услуги</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные решения для развития ресторанного бизнеса от экспертов индустрии
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="BarChart3" size={32} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-secondary">Анализ бизнеса</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Глубокий анализ финансовых показателей, операционной эффективности и конкурентного окружения
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="Users" size={32} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-secondary">Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Тренинги по сервису, продажам и управлению. Повышение квалификации команды
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="Target" size={32} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-secondary">Маркетинг</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Разработка маркетинговой стратегии, управление репутацией и продвижение в соцсетях
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="Settings" size={32} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-secondary">Оптимизация процессов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Автоматизация операций, сокращение издержек и повышение эффективности работы
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="FileText" size={32} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-secondary">Бизнес-план</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Составление детального бизнес-плана и стратегии развития на 1-3 года
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name="Handshake" size={32} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl text-secondary">Сопровождение</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Постоянная поддержка и мониторинг результатов в течение всего периода сотрудничества
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-bold text-white">Результаты наших клиентов</h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Реальные цифры эффективности нашего консалтинга
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">+47%</div>
              <div className="text-white/80">Средний рост выручки</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">-23%</div>
              <div className="text-white/80">Снижение издержек</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">15%</div>
              <div className="text-white/80">Рост чека</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">92%</div>
              <div className="text-white/80">Удовлетворённость гостей</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold text-secondary">
              Готовы увеличить прибыль вашего ресторана?
            </h3>
            <p className="text-xl text-gray-600">
              Запишитесь на бесплатную консультацию и получите персональный план развития
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
              <Button variant="outline" size="lg" className="text-secondary border-secondary hover:bg-secondary hover:text-white text-lg px-8 py-6">
                <Icon name="Mail" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="ChefHat" size={24} className="text-primary" />
                <h4 className="text-xl font-bold">RestaurantPro</h4>
              </div>
              <p className="text-white/80">
                Профессиональный консалтинг для ресторанного бизнеса
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-white/80">
                <div>+7 (999) 123-45-67</div>
                <div>info@restaurantpro.ru</div>
                <div>Москва, ул. Примерная, 123</div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <div className="space-y-2 text-white/80">
                <div>Анализ бизнеса</div>
                <div>Обучение персонала</div>
                <div>Маркетинг</div>
                <div>Оптимизация</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 RestaurantPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}