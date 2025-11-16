import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-cars",
  imports: [ReactiveFormsModule],
  templateUrl: "./cars.html",
  styleUrl: "./cars.css",
})
export class Cars {
  http = inject(HttpClient);

  brands: { name: string; active: boolean }[] = [];
  cars: any = [];

  carsData = [
    {
      brand: "BMW",
      name: "BMW M4 Competition",
      image: "https://testologia.ru/cars-images/1.png",
      description:
        "The perfect balance of speed and style. The BMW M4 Competition delivers 510 hp and a drive engineered to conquer highways and city streets.",
      prices: [
        { duration: "1 Day", price: 1450 },
        { duration: "1-3 Day", price: 1300 },
        { duration: "3+ Day", price: 1100 },
      ],
    },
    {
      brand: "BMW",
      name: "BMW M5",
      image: "https://testologia.ru/cars-images/2.png",
      description:
        "Business class with a racer's soul. BMW M5: 600 hp, intelligent all-wheel drive and comfort for the most demanding drivers.",
      prices: [
        { duration: "1 Day", price: 1600 },
        { duration: "1-3 Day", price: 1450 },
        { duration: "3+ Day", price: 1250 },
      ],
    },
    {
      brand: "Lamborghini",
      name: "Lamborghini Huracan Spyder Green",
      image: "https://testologia.ru/cars-images/3.png",
      description:
        "The embodiment of speed and passion. The green Lamborghini Huracan Spyder offers 640 hp and an open top for unforgettable adventures.",
      prices: [
        { duration: "1 Day", price: 3200 },
        { duration: "1-3 Day", price: 2900 },
        { duration: "3+ Day", price: 2600 },
      ],
    },
    {
      brand: "Ferrari",
      name: "Ferrari F8 Spider",
      image: "https://testologia.ru/cars-images/4.png",
      description:
        "A dream on wheels. Ferrari F8 Spider: 720 hp, F1-inspired aerodynamics and an open cockpit for those who live at full speed.",
      prices: [
        { duration: "1 Day", price: 3500 },
        { duration: "1-3 Day", price: 3200 },
        { duration: "3+ Day", price: 2900 },
      ],
    },
    {
      brand: "Porsche",
      name: "Porsche 911 Targa 4S Yellow",
      image: "https://testologia.ru/cars-images/5.png",
      description:
        "Elegant power in a bold color. Porsche 911 Targa 4S: all-wheel drive, 450 hp and the iconic Targa style.",
      prices: [
        { duration: "1 Day", price: 1800 },
        { duration: "1-3 Day", price: 1650 },
        { duration: "3+ Day", price: 1450 },
      ],
    },
    {
      brand: "Mercedes",
      name: "Mercedes SL 55 AMG",
      image: "https://testologia.ru/cars-images/6.png",
      description:
        "Classic sports chic. Mercedes SL 55 AMG: luxury, a convertible body and 469 hp for unforgettable drives.",
      prices: [
        { duration: "1 Day", price: 1700 },
        { duration: "1-3 Day", price: 1550 },
        { duration: "3+ Day", price: 1350 },
      ],
    },
    {
      brand: "BMW",
      name: "BMW Z4",
      image: "https://testologia.ru/cars-images/7.png",
      description:
        "A compact convertible for stylish journeys. BMW Z4: the perfect blend of agility, power and elegant design.",
      prices: [
        { duration: "1 Day", price: 1200 },
        { duration: "1-3 Day", price: 1100 },
        { duration: "3+ Day", price: 950 },
      ],
    },
    {
      brand: "Mercedes",
      name: "Mercedes C180 Convertible",
      image: "https://testologia.ru/cars-images/8.png",
      description:
        "The perfect choice for a sunny day. Mercedes C180 Convertible: a cabriolet made for light and comfortable driving.",
      prices: [
        { duration: "1 Day", price: 1000 },
        { duration: "1-3 Day", price: 900 },
        { duration: "3+ Day", price: 800 },
      ],
    },
    {
      brand: "Chevrolet",
      name: "Chevrolet Corvette Orange",
      image: "https://testologia.ru/cars-images/9.png",
      description:
        "Bright, powerful, unforgettable. The orange Chevrolet Corvette delivers 495 hp and a style that speaks for itself.",
      prices: [
        { duration: "1 Day", price: 1400 },
        { duration: "1-3 Day", price: 1250 },
        { duration: "3+ Day", price: 1100 },
      ],
    },
    {
      brand: "Audi",
      name: "Audi R8 Blue",
      image: "https://testologia.ru/cars-images/10.png",
      description:
        "A supercar created for those in love with speed. Audi R8 Blue: all-wheel drive, 570 hp and a stunning design.",
      prices: [
        { duration: "1 Day", price: 2000 },
        { duration: "1-3 Day", price: 1850 },
        { duration: "3+ Day", price: 1600 },
      ],
    },
    {
      brand: "Chevrolet",
      name: "Chevrolet Corvette White",
      image: "https://testologia.ru/cars-images/11.png",
      description:
        "Classic power in an exquisite color. Chevrolet Corvette White: power, dynamics and style for true connoisseurs.",
      prices: [
        { duration: "1 Day", price: 1350 },
        { duration: "1-3 Day", price: 1200 },
        { duration: "3+ Day", price: 1000 },
      ],
    },
    {
      brand: "Ford",
      name: "Ford Mustang Convertible Black",
      image: "https://testologia.ru/cars-images/12.png",
      description:
        "A legend in an open format. Ford Mustang Convertible Black: 450 hp, iconic style and freedom under the open sky.",
      prices: [
        { duration: "1 Day", price: 1250 },
        { duration: "1-3 Day", price: 1150 },
        { duration: "3+ Day", price: 1000 },
      ],
    },
  ];

  orderForm = new FormGroup({
    carName: new FormControl(""),
    customerName: new FormControl(""),
    customerPhone: new FormControl(""),
  });

  ngOnInit() {
    this.cars = this.carsData;
    this.setupBrands(this.cars);

    this.getCars("");
  }

  private mapServerCar(item: any) {
    const brand = item.title.split(" ")[0];

    const durations = ["1 Day", "1-3 Day", "3+ Day"];

    return {
      brand,
      name: item.title,
      image: item.image,
      description: item.text,
      prices: item.prices.map((price: number, index: number) => ({
        duration: durations[index] ?? `Option ${index + 1}`,
        price,
      })),
    };
  }

  private setupBrands(cars: { brand: string }[]) {
    const uniqueBrands: string[] = Array.from(
      new Set<string>(cars.map((c) => c.brand))
    );

    this.brands = [
      { name: "All brands", active: true },
      ...uniqueBrands.map((brand) => ({
        name: brand,
        active: false,
      })),
    ];
  }

  getCars(filter: string | null) {
    this.http
      .get<any[]>("https://testologia.ru/cars-data", {
        params: {
          filter: filter ?? "",
        },
      })
      .subscribe({
        next: (data: any[]) => {
          const mapped = data.map((item) => this.mapServerCar(item));

          this.carsData = mapped;
          this.cars = mapped;
        },
        error: (err) => {
          console.error(
            "Не удалось получить данные с сервера, используем локальные",
            err
          );

          this.cars = this.carsData;
          this.setupBrands(this.cars);
        },
      });
  }

  changeFilter(
    filter: { name: string; active: boolean },
    carsContent: HTMLElement
  ) {
    this.brands.forEach((e) => (e.active = false));
    filter.active = true;

    if (filter.name === "All brands") {
      this.cars = this.getCars("");
    } else {
      this.cars = this.getCars(filter.name);
    }

    carsContent.scrollIntoView({ behavior: "instant" });
  }

  isError(fieldName: string) {
    const control = this.orderForm.get(fieldName);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }

  sendOrder() {
    if (this.orderForm.valid) {
      this.http
        .post("https://testologia.ru/cars-order", {
          car: this.orderForm.value.carName,
          name: this.orderForm.value.customerName,
          phone: this.orderForm.value.customerPhone,
        })
        .subscribe({
          next: (response: any) => {
            alert(response.message);
            this.orderForm.reset();
          },
          error: (response: any) => {
            alert(response.error.message);
          },
        });
    }
  }
}
