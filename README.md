# MCV Dashboard

MCV Dashboard is a web application built with Angular, showcasing bus line and station data in an interactive, visual format. The project utilizes NG-ZORRO (Ant Design for Angular) and Owl Carousel for a modern, responsive UI.

## Features

- View and filter bus stations by line
- Carousel-based navigation for stations
- Visualize key station statistics (bus counts, ratings, etc.)
- Responsive layout and modern design using NG-ZORRO components
- Easy-to-extend architecture following Angular best practices

## Getting Started

These instructions will help you set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hussien10/MCV.git
   cd MCV
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Angular development server:
```bash
ng serve
```
Visit [http://localhost:4200/](http://localhost:4200/) to view the app in your browser. The app will automatically reload if you change any source files.

### Building for Production

Build the project for production:
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

### Running Tests

- **Unit tests:**  
  Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).

- **End-to-end tests:**  
  Run `ng e2e` to execute end-to-end tests. You may need to add a package that implements end-to-end testing capabilities.

## Project Structure

- `src/app/components/lines` - Bus lines component and logic
- `src/app/components/staion` - Station component (Note: consider renaming to `station`)
- `src/app/shared` - Shared models and services
- `src/styles.css` - Global styles

## Main Dependencies

- [Angular](https://angular.io/)
- [NG-ZORRO](https://ng.ant.design/docs/introduce/en)
- [ngx-owl-carousel-o](https://www.npmjs.com/package/ngx-owl-carousel-o)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

---

