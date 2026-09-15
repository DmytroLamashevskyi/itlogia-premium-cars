# Premium Cars

A premium car rental front-end built with Angular 20 and TypeScript.

The application loads available vehicles from an external API, supports brand-based filtering, presents multiple rental-price tiers, and includes a reactive order form that submits rental requests back to the API. Local car data is kept as a fallback so the UI can still render if the remote endpoint is unavailable.

## What it demonstrates

- Angular standalone component architecture
- Angular `HttpClient` integration with external REST endpoints
- Reactive Forms for rental requests
- API data mapping into a UI-friendly domain model
- Dynamic brand filtering
- Graceful fallback from remote API data to local data
- Form validation and error-state handling
- Responsive product/catalog layout
- Production build and GitHub Pages deployment through GitHub Actions

## Main flow

```text
Application starts
      ↓
Load cars from remote API
      ↓
Map server response to UI model
      ↓
Render catalog + rental prices
      ↓
User selects a brand filter
      ↓
Request filtered data from API
      ↓
User selects a car and completes the order form
      ↓
POST rental request to API
```

If the car-data request fails, the application logs the failure and falls back to the bundled local vehicle dataset instead of leaving the catalog empty.

## Features

### Vehicle catalog

The catalog displays premium vehicles from brands such as BMW, Lamborghini, Ferrari, Porsche, Mercedes, Chevrolet, Audi, and Ford.

Each car contains:

- name and brand
- image
- short description
- rental pricing for several duration tiers

### Brand filtering

The app derives the available brands from vehicle data and exposes an `All brands` option together with individual brand filters.

Selecting a filter requests the matching data and keeps the catalog interaction on the same page.

### API integration

The application uses two external endpoints:

- `GET https://testologia.ru/cars-data` — loads vehicle data and supports a filter parameter
- `POST https://testologia.ru/cars-order` — submits a rental request

The server response is mapped into the model used by the Angular template rather than being rendered directly.

### Reactive order form

The rental form is implemented with Angular Reactive Forms and contains:

- selected car
- customer name
- customer phone

The component checks form validity before sending the order and resets the form after a successful response.

## Tech stack

- Angular 20
- TypeScript 5.8
- Angular HttpClient
- Angular Reactive Forms
- RxJS
- CSS
- GitHub Actions
- GitHub Pages

## Project structure

```text
src/
├── app/
│   └── cars/
│       ├── cars.ts    # Component state, API calls, filtering and form logic
│       ├── cars.html  # Catalog and order UI
│       └── cars.css   # Component styles
├── global_styles.css
├── index.html
└── main.ts
```

## Run locally

Requirements:

- Node.js 20+
- npm

```bash
git clone https://github.com/DmytroLamashevskyi/itlogia-premium-cars.git
cd itlogia-premium-cars
npm install
npm start
```

Angular will start the development server locally.

## Build

```bash
npm run build
```

The repository also contains a GitHub Actions workflow that creates a production Angular build and publishes it to the `gh-pages` branch.

## Project context

This project originally started as a front-end learning exercise and was later maintained as an Angular implementation/demo. The repository is kept public to show practical Angular fundamentals: HTTP integration, reactive forms, data transformation, filtering, and deployment.

## Project status

Completed learning / portfolio project. It is not intended to represent a production car-rental service, and the external API is provided by the original training environment.
