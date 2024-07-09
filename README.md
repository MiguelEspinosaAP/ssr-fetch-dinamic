# Ficha Técnica de Instalación Local del Proyecto `ssr-fetch-dinamic`

## Requisitos Previos
Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

## Pasos para la Instalación y Ejecución

1. **Clonar el Repositorio**  
   Abre una terminal y clona el repositorio de GitHub:
   ```bash
   git clone <https://github.com/MiguelEspinosaAP/ssr-fetch-dinamic.git>

2. **Instalar las Dependencias**  
   Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:
    ```bash
   cd ssr-fetch-dinamic

   npm install

3. **Ejecutar el Proyecto**
    Una vez que se hayan instalado todas las dependencias, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

    ```bash
    npm run dev
    
    El servidor de desarrollo se iniciará en [http://localhost:3000].

4. **Abrir la Aplicación en el Navegador**
    Abre tu navegador y navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## Descripción de Archivos y Directorios Principales

- **`/components`**: Contiene los componentes de React utilizados en la aplicación.
- **`/home`**: Contiene la página de React utilizada en la aplicación.

## Dependencias Principales

- next: Framework de React para renderizado del lado del servidor (SSR) y generación estática.
- react: Biblioteca para construir interfaces de usuario.
- react-dom: Proporciona métodos específicos del DOM que se emparejan con React.
- axios: Cliente HTTP basado en promesas para el navegador y node.js.
- react-modal: Componente de modal accesible para React.
- tailwindcss: Framework de CSS para estilos de utilidad.
- eslint-config-next: Configuración de ESLint para proyectos de Next.js.

## Comandos Disponibles

- npm run dev: Inicia el servidor de desarrollo.
- npm run build: Compila el proyecto para producción.
- npm run start: Inicia el servidor de producción.
- npm run lint: Ejecuta ESLint para encontrar y corregir problemas en el código.