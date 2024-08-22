# Plant Check Frontend

Este es el frontend para la aplicación **Plant Check**, una herramienta que permite a los usuarios analizar la salud de las hojas de manzana subiendo imágenes y recibiendo diagnósticos. Este frontend está construido con React y está diseñado para interactuar con el backend de Plant Check.

## Características

- **Subida de Imágenes:** Permite a los usuarios cargar imágenes de hojas de manzana para su análisis.
- **Análisis:** Muestra los resultados del análisis de salud de las hojas basado en las respuestas del backend.

## Estructura del Proyecto

```plaintext
├── src/
│   ├── assets/                     # Recursos estáticos como imágenes y estilos globales
│   ├── components/                 # Componentes comunes y principales de la UI
│   ├── hooks/                      # Custom hooks
│   │   └── useImageAnalyzer.js     # Lógica del análisis de imagen
│   │   └── useFileAnalyzer.js      # Lógica del análisis por lotes de imágenes
│   ├── screens/                    # Vistas de la aplicación
│   ├── api/                        # Funciones para interactuar con el backend
│   ├── utils/                      # Utilidades y funciones auxiliares
│   ├── styles/                     # Estilos globales y de componentes de la aplicación
│   ├── App.jsx                     # Componente raíz de la aplicación
│   ├── App.css                     # Estilos globales de la aplicación
│   ├── config.js                   # Configuraciones y constantes globales
│   ├── index.css                   # Estilos para la entrada de la aplicación
│   ├── main.jsx                    # Punto de entrada principal
├── index.html                      # Archivo HTML principal
├── package.json                    # Dependencias y scripts del proyecto
├── vite.config.js                  # Configuración de Vite para el proyecto
└── README.md                       # Documentación del proyecto
```

## Requisitos

- Node.js y npm instalados
- Vite (se instala automáticamente con las dependencias)

## Configuración e Instalación

### 1. Clona el repositorio:

```bash
git clone https://github.com/CristCT/plant-check-frontend.git
```

### 2. Navega al directorio del proyecto:

```bash
cd plant-check-frontend
```

### 3. Instala las dependencias del proyecto:

```bash
npm install
```

### 4. Configura el proyecto:

Si necesitas configurar algún aspecto del proyecto, puedes hacerlo en el archivo `config.js`, donde se encuentran las configuraciones globales como la URL del backend.

### 5. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000` o en el puerto que Vite asigne.

## Despliegue

Para construir y desplegar la aplicación, puedes usar el siguiente comando:

```bash
npm run build
```

Esto generará una carpeta `dist/` que contiene los archivos listos para producción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
