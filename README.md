# Sistema de Gestión de Inventario - Supermercado 🛒

## 📎 Descripción

Este proyecto es una aplicación web SPA (Single Page Application) desarrollada para la evaluación de la Semana 2 de la asignatura Desarrollo Frontend II. Simula el sistema central de inventario y sucursales de una cadena de supermercados. El proyecto ha evolucionado para incorporar estándares de calidad de la industria, incluyendo gestión de estado global, consumo asíncrono de datos, seguridad de formularios y una arquitectura altamente modular.


## 🚀 Características Principales

- **Gestión de Estado Avanzada:** Implementación combinada de Context API y `useReducer` (con lógica de reducción desacoplada) para manejar el inventario de forma global, predecible y escalable.

- **Consumo de API Simulado (Data Fetching):** Carga dinámica de sucursales y productos iniciales consumiendo archivos JSON externos mediante el hook `useEffect` y Promesas.

- **Arquitectura de Seguridad y UX:** 
  - Validaciones estrictas con Expresiones Regulares (Regex) para prevenir inyecciones de código (XSS).

  - Manejo de fugas de memoria mediante `AbortController` en las peticiones de red.

  - Generación de identificadores únicos irrompibles con `crypto.randomUUID()`.
  
  - Estados visuales de carga (Spinners) y manejo de errores con botones de reintento.

- **Enrutamiento Centralizado:** Navegación fluida y sin recargas con `react-router-dom`, utilizando un archivo de configuración central (`routes.config.jsx`) para evitar la duplicación de *paths* y manejar rutas inexistentes (Página 404).

- **Diseño UI/UX Responsivo:** Migración total a **Tailwind CSS** (reemplazando Bootstrap), implementando *Tree-shaking* (purga de CSS), paleta de colores personalizada, menús colapsables y *badges* dinámicos para resaltar visualmente los nuevos ingresos en la sesión actual.


## 🛠️ Tecnologías Utilizadas

- **Core:** React (Hooks: `useState`, `useEffect`, `useContext`, `useReducer`)

- **Build Tool:** Vite

- **Navegación:** React Router DOM v7

- **Estilos:** Tailwind CSS


## 📂 Estructura del Proyecto
```
supermercado-jennifer-gonzalez-PFY2202-004A/
├── public/
│   └── data/
│       ├── productos.json       # API simulada de inventario inicial
│       └── sucursales.json      # API simulada de tiendas
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── SucursalCard.jsx     # Componente UI reutilizable
│   ├── context/
│   │   ├── InventoryContext.jsx
│   │   └── InventoryProvider.jsx # Proveedor global del estado
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── IngresoArticulos.jsx # Formulario controlado con validaciones
│   │   ├── Inventario.jsx       # Tabla dinámica de productos
│   │   ├── NotFound.jsx         # Ruta comodín (404)
│   │   ├── NuestrasTiendas.jsx  # Fetch de datos con manejo de errores
│   │   └── QuienesSomos.jsx
│   ├── reducers/
│   │   └── inventoryReducer.js  # Lógica de estado desacoplada
│   ├── routes/
│   │   └── routes.config.jsx    # Configuración centralizada de navegación
│   ├── util/
│   │   └── validators.js        # Validaciones de seguridad (Regex y sanitización)
│   ├── App.jsx                  # Contenedor principal y Router (basename)
│   ├── index.css                # Directivas base de Tailwind
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js           # Configuración de colores personalizados y Safelist
└── vite.config.js               # Configuración de base URL para GitHub Pages
```


## ⚙️ Instrucciones de Instalación y Ejecución

Para correr este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio:
```bash
git clone https://github.com/JenniferGonzalezT/supermercado-jennifer-gonzalez-PFY2202-004A.git
```

2. Navega hasta el directorio del proyecto en tu terminal:
```bash
cd supermercado-jennifer-gonzalez-PFY2202-004A
```

3. Instala las dependencias necesarias:
```bash
npm install
```

4. Inicia el servidor local de desarrollo:
```bash
npm run dev
```

5. Abrir en el navegador el enlace indicado en la terminal (por defecto http://localhost:5173).


## 🔗 Enlaces del Proyecto

* **Repositorio en GitHub:** https://github.com/JenniferGonzalezT/supermercado-jennifer-gonzalez-PFY2202-004A.git

* **Sitio Web Publicado (GitHub Pages):** https://jennifergonzalezt.github.io/supermercado-jennifer-gonzalez-PFY2202-004A/
