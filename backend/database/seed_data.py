from models.car import Car

# Initial seed data for BM Motors
SEED_CARS = [
    Car(
        brand="BMW",
        model="X5",
        year=2020,
        price=4500000,
        mileage=35000,
        fuel="Бензин",
        transmission="Автомат",
        color="Черный",
        description="Премиальный внедорожник в отличном состоянии. Полная история обслуживания.",
        features=["Кожаный салон", "Навигация", "Камера заднего вида", "Ксенон"],
        image="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ),
    Car(
        brand="Mercedes-Benz",
        model="E-Class",
        year=2021,
        price=3800000,
        mileage=28000,
        fuel="Бензин",
        transmission="Автомат",
        color="Серебристый",
        description="Элегантный седан бизнес-класса с максимальной комплектацией.",
        features=["AMG пакет", "Панорамная крыша", "Массаж сидений", "MBUX система"],
        image="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ),
    Car(
        brand="Volkswagen",
        model="Tiguan",
        year=2019,
        price=2200000,
        mileage=45000,
        fuel="Бензин",
        transmission="Автомат",
        color="Белый",
        description="Надежный компактный кроссовер для семьи.",
        features=["4Motion", "Климат-контроль", "Парктроник", "LED фары"],
        image="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ),
    Car(
        brand="Peugeot",
        model="3008",
        year=2020,
        price=1950000,
        mileage=32000,
        fuel="Дизель",
        transmission="Автомат",
        color="Синий",
        description="Стильный французский кроссовер с уникальным дизайном.",
        features=["i-Cockpit", "Grip Control", "Беспроводная зарядка", "3D навигация"],
        image="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ),
    Car(
        brand="Audi",
        model="A6",
        year=2021,
        price=4200000,
        mileage=22000,
        fuel="Бензин",
        transmission="Автомат",
        color="Черный",
        description="Представительский седан с передовыми технологиями.",
        features=["Virtual Cockpit", "Matrix LED", "Bang & Olufsen", "Quattro"],
        image="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ),
    Car(
        brand="Renault",
        model="Duster",
        year=2020,
        price=1650000,
        mileage=38000,
        fuel="Бензин",
        transmission="Механика",
        color="Оранжевый",
        description="Доступный и практичный кроссовер для активного отдыха.",
        features=["Полный привод", "Увеличенный клиренс", "Багажник 445л", "Защита днища"],
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    )
]