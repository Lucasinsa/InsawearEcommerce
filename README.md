# INSAWEAR: E-commerce with ReactJS
Project carried out as part of the ReactJS course at Coderhouse.

## What is it about?
It is a men's clothing e-commerce in which the user can filter products by category, see the details of each of the products and add the desired quantity of an item to the cart. At the end of the purchase, the data is requested, the purchase order is saved in the Firebase technology database and the order number is given to the user.

## APP navegation
The following GIF shows the different possible routes of the APP:

![Gif Functioning](public/funcionamiento.gif)

- **Logo:** Directs to route '/'.
- **Inicio:** Directs to route '/'.
- **Categorías:** Directs to route '/category/:categoryId'.
- **Locales:** Directs to route '/locales'
- **Cart:** Directs to route '/cart'
- **Ver detalle:** Directs to route '/item/:id'
- **Comprar:** Directs to route '/finalizar-compra'

## Installation
Follow these steps to install and run the project on your machine:

1. Clone this repository: `git clone https://github.com/Lucasinsa/InsawearEcommerce.git`
2. Go to: `cd\insawear`
3. Install the dependencies: `npm install`
4. Start the app in your localhost: `npm run dev`

## Dependencies
Make sure you have the following dependencies installed before running the project:

- [Node.js](https://nodejs.org/): Node.js is required to run the development environment and build tools.

### Libraries and Frameworks:

- [React](https://reactjs.org/): Main library for building user interfaces.
- [React DOM](https://reactjs.org/docs/react-dom.html): React specific for DOM manipulation.
- [React Router DOM](https://reactrouter.com/): Router for navigation in a single page application.
- [Bootstrap](https://getbootstrap.com/): Design framework to create attractive interfaces.
- [Firebase](https://firebase.google.com/): Platform for the development of mobile and web applications.
- [React Bootstrap](https://react-bootstrap.github.io/): Bootstrap integration with React.
- [SweetAlert2](https://sweetalert2.github.io/): Library for customizable modal windows.
- [sonner](https://sonner.emilkowal.ski/): Library to add custom notifications.

## DevDependencies
These are the dependencies used for the development and construction of the project. You do not need to install them manually to run the application, but they are required for development tasks.

- [Vite](https://vitejs.dev/): Fast and efficient development tool for JavaScript and React projects.
- [ESLint](https://eslint.org/): Linting tool to identify and fix problems in the code.
