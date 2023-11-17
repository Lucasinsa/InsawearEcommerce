# INSAWEAR: E-commerce con ReactJS

Proyecto realizado como parte del curso de ReactJS en Coderhouse. 


## ¿De qué se trata?
Se trata de un e-commerce de ropa masculina en el que el usuario puede filtrar productos por categoría, ver el detalle de cada uno de los productos y agregar la cantidad deseada de un item al carrito. Al finalizar la compra, se piden los datos, se guarda la orden de compra en la base de datos de la tecnología Firebase y se da un feedback del número de orden al usuario.

## Navegación de la aplicación

En el siguiente GIF se muestran las diferentes rutas posibles de la APP.

![Gif Funcionamiento](https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/gif%2Ffuncionamiento.gif?alt=media&token=72c6f572-a104-4cde-b39b-2f5090afdeb0)

- **Logo:** Dirige a la ruta '/'.
- **Inicio:** Dirige a la ruta '/'.
- **Categorías:** Dirige a la ruta '/category/:categoryId'.
- **Locales:** Dirige a la ruta '/locales'
- **Cart:** Dirige a la ruta '/cart'
- **Ver detalle:** Dirige a la ruta '/item/:id'
- **Comprar:** Dirige a la ruta '/finalizar-compra'

## Instalación

Seguí estos pasos para instalar y ejecutar el proyecto en tu máquina:

1. Cloná este repositorio: `git clone https://github.com/Lucasinsa/InsawearEcommerce.git`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación en tu localhost: `npm run dev`

## Dependencias

Asegurate de tener las siguientes dependencias instaladas antes de ejecutar el proyecto:

- [Node.js](https://nodejs.org/): Se requiere Node.js para ejecutar el entorno de desarrollo y las herramientas de construcción.

### Librerías y Frameworks:

- [React](https://reactjs.org/): Biblioteca principal para construir interfaces de usuario.
- [React DOM](https://reactjs.org/docs/react-dom.html): React específico para la manipulación del DOM.
- [React Router DOM](https://reactrouter.com/): Enrutador para la navegación en una aplicación de una sola página.
- [Bootstrap](https://getbootstrap.com/): Framework de diseño para crear interfaces atractivas.
- [Firebase](https://firebase.google.com/): Plataforma para el desarrollo de aplicaciones móviles y web.
- [React Bootstrap](https://react-bootstrap.github.io/): Integración de Bootstrap con React.
- [SweetAlert2](https://sweetalert2.github.io/): Biblioteca para ventanas modales personalizables.
- [sonner](https://sonner.emilkowal.ski/): Biblioteca para añadir notificaciones personalizadas.

## DevDependencies

Estas son las dependencias utilizadas para el desarrollo y la construcción del proyecto. No es necesario instalarlas manualmente para ejecutar la aplicación, pero son necesarias para tareas de desarrollo.

- [Vite](https://vitejs.dev/): Herramienta de desarrollo rápida y eficiente para proyectos de JavaScript y React.
- [ESLint](https://eslint.org/): Herramienta de linting para identificar y corregir problemas en el código.
