# Sistema de Gestión de Inventario - Supermercado 🛒

## 📎 Descripción

Este proyecto es una aplicación web SPA (Single Page Application) desarrollada para la evaluación de la Semana 3 de la asignatura Desarrollo Frontend II. Simula el sistema central de inventario, carrito de compras y gestión de sucursales de una cadena de supermercados. El proyecto está construido bajo los más altos estándares de calidad de la industria, incorporando arquitectura modular, optimización de rendimiento (Lazy Loading, Memoización), consumo asíncrono seguro mediante Custom Hooks y gestión de estado global predecible.


## 🚀 Características Principales

- **Gestión de Estado Global y Rendimiento:** Implementación de Context API combinado con múltiples `useReducer` (desacoplando la lógica del inventario y del carrito de compras). Se utiliza `useMemo` para memoizar el contexto, evitando cascading renders y optimizando el rendimiento general de la aplicación.

- **Enrutamiento Avanzado (Code Splitting):** Navegación fluida y sin recargas utilizando el paquete unificado `react-router` (v8). Implementación de rutas dinámicas (parámetros), configuración centralizada (`routes.config.jsx`) y división de código (Lazy Loading) mediante `React.lazy()` y `<Suspense>`.

- **Consumo de API y Custom Hooks:** Creación del hook reutilizable `useFetch` para centralizar la carga asíncrona de datos desde archivos JSON. Incluye control de estados (carga, error), reintentos manuales y prevención de fugas de memoria (Memory Leaks) mediante la limpieza del `AbortController`.

- **Arquitectura de Seguridad y Reglas de Negocio:** 
  - Funciones validadoras estrictas para sanear los datos provenientes de la red antes de inyectarlos al estado global.

  - Validaciones de formularios con Expresiones Regulares (Regex) para prevenir inyecciones de código (XSS).

  - Generación de identificadores únicos deterministas con crypto.randomUUID() fuera de los reducers.
  
  - Lógica matemática en el reducer para impedir que el stock de inventario sea menor a 0.

- **Diseño UI/UX Responsivo:** Interfaz construida íntegramente con **Tailwind CSS**. Implementación de Tree-shaking (purga de CSS), abstracción de estilos repetitivos mediante la directiva @apply en CSS, paleta de colores corporativa y renderizado condicional de componentes visuales (Spinners, Toasts, Badges).


## 🛠️ Tecnologías Utilizadas

- **Core:** React 19 (Hooks: `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useRef`, `lazy`, `Suspense`)

- **Build Tool:** Vite

- **Navegación:** React Router v8

- **Estilos:** Tailwind CSS


## 📂 Estructura del Proyecto
```
supermercado-jennifer-gonzalez-PFY2202-004A/
├── public/
│   └── data/
│       ├── productos.json        # API simulada de inventario inicial
│       └── sucursales.json       # API simulada de tiendas
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Spinner.jsx           # Componente visual de carga reutilizable
│   │   └── SucursalCard.jsx      # Componente UI con patrón de diccionario de clases
│   ├── context/
│   │   ├── InventoryContext.jsx  # Creación de contexto y hook custom useInventory
│   │   └── InventoryProvider.jsx # Proveedor global memoizado
│   ├── hooks/
│   │   └── useFetch.js           # Custom Hook para centralizar peticiones asíncronas
│   ├── pages/
│   │   ├── Carrito.jsx           # Gestión de compras y sincronización de stock
│   │   ├── DetalleArticulo.jsx   # Vista dinámica por ID de producto
│   │   ├── Home.jsx
│   │   ├── IngresoArticulos.jsx  # Formulario controlado con control de temporizadores
│   │   ├── Inventario.jsx        # Tabla dinámica con filtros y stock en tiempo real
│   │   ├── NotFound.jsx          # Ruta comodín (404)
│   │   ├── NuestrasTiendas.jsx   # Fetch de datos con manejo de errores y reintentos
│   │   └── QuienesSomos.jsx
│   ├── reducers/
│   │   ├── cartReducer.js        # Lógica pura del carrito de compras
│   │   └── inventoryReducer.js   # Lógica pura del inventario central
│   ├── routes/
│   │   └── routes.config.jsx     # Configuración centralizada de navegación (Lazy Loading)
│   ├── util/
│   │   └── validators.js         # Validaciones de seguridad e integridad de datos
│   ├── App.jsx                   # Contenedor principal, Router (basename) y Suspense
│   ├── index.css                 # Directivas base de Tailwind y clases @apply
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json                  # Dependencias unificadas
├── postcss.config.js
├── README.md
├── tailwind.config.js            # Configuración de tema extendido y rutas de contenido
└── vite.config.js                # Configuración de base URL para despliegue en GitHub Pages
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
