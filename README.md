
# Portfolio Web Project

## Descripción

Este proyecto consiste en el desarrollo de una página web de portfolio curricular, que servirá como herramienta para futuras entrevistas de trabajo. La página utiliza tecnologías web como HTML, CSS y JavaScript, y se estructura en varias secciones para mostrar la información relevante de manera atractiva.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- (Opcional) Framework/Librería web como React, Astro, Vue, etc.
- JSON para almacenar y consumir la información personal en inglés y español.

## Estructura del Proyecto

El proyecto sigue una estructura coherente de carpetas que organiza los recursos y funcionalidades de la web. A continuación se describen las secciones principales del sitio web:

### 1. About Me

En esta sección se muestra información sobre el desarrollador, incluyendo su nombre, foto, profesión y una breve descripción personal. Los datos se consumen desde un archivo JSON.

### 2. Education

Se detalla la información sobre el historial académico del desarrollador, incluyendo los estudios realizados y las instituciones correspondientes.

### 3. Work Experience

Aquí se presenta la información sobre la experiencia laboral, con los empleos previos y las responsabilidades desempeñadas.

### 4. Projects

En esta sección se muestran los proyectos desarrollados por el usuario. Los proyectos se consumen desde una API REST o, en su defecto, se mockean los datos en archivos JSON. Los proyectos están paginados y se incluye un buscador para filtrar los proyectos por nombre. Además, se muestra un botón para eliminar proyectos si la variable `testMode` está activada (solo en local).

### 5. Skills

Se detallan las habilidades tecnológicas del desarrollador, divididas en áreas como Front-end, Back-end y DevOps.

### 6. References

Aquí se incluyen referencias de personas que pueden validar la experiencia y el trabajo del desarrollador.

### 7. Contact Me

Formulario de contacto para que los usuarios puedan dejar su nombre, email y mensaje. El formulario cuenta con validaciones para asegurar que los datos sean correctos antes de enviarlos.

## Requisitos

Para aprobar el proyecto, el alumno debe cumplir con los siguientes requisitos:

1. **Estructura del Proyecto:**
   - Organización adecuada de carpetas y archivos.
   
2. **Secciones del Proyecto:**
   - `About Me`, `Education`, `Work Experience`, `Projects`, `Skills`, `References`, y `Contact Me`.
   
3. **JSON:**
   - Consumir los datos personales desde un archivo JSON en inglés y español.
   
4. **Test Mode:**
   - Crear una variable llamada `testMode` cuyo valor inicial sea `true` y permitir cambiarlo a `false` al desplegar la app.
   
5. **Paginación de Proyectos:**
   - Mostrar los proyectos de forma paginada y permitir la navegación entre páginas.
   
6. **Buscador de Proyectos:**
   - Implementar un buscador para filtrar proyectos por nombre.
   
7. **Validación de Formulario:**
   - Validar el formulario de contacto antes de permitir el envío de datos.

## Funcionalidades Adicionales

- **Filtro de Proyectos por Tecnología:**
   - Desarrollar un filtro para mostrar proyectos basados en la tecnología utilizada.
   
- **Consola de Administración:**
   - Implementar una página de consola de administración con un formulario de login y manejo de proyectos.
   
- **Web Component:**
   - Crear al menos un WebComponent útil en la página de administración.

## Buenas Prácticas

El proyecto debe seguir las buenas prácticas de desarrollo, incluyendo:
- Uso adecuado de comentarios.
- Manejo de errores.
- Refactorización de código.

## Instalación

Para instalar el proyecto, clone el repositorio y ejecute los siguientes comandos:

```bash
git clone <enlace_del_repositorio>
cd <nombre_del_proyecto>
npm install
npm start
```

## Enlace al Repositorio

Enlace al repositorio en GitHub: [Enlace al Repositorio](<URL_DEL_REPOSITORIO>)

## Autor

- Nombre: [Tu Nombre]
- Email: [Tu Email]
