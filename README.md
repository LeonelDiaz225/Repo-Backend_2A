# AgroTec 🌱 - Yoda Labs

**AgroTec** es un sistema backend de monitoreo agrícola desarrollado para digitalizar el registro de observaciones en lotes, reemplazando los métodos tradicionales en papel. Este proyecto está estructurado bajo el patrón MVC (Modelo-Vista-Controlador) y expone una API REST.

## Tecnologías Utilizadas

- **Entorno:** Node.js
- **Framework:** Express.js
- **Vistas:** Motor de plantillas Pug
- **Persistencia de Datos:** Archivos locales `.json` (Sistema de archivos `fs`)

## Características Principales

- **Gestión de Productores y Lotes:** API REST completa (CRUD) para registrar productores y sus lotes de campo asociados.
- **Registro de Observaciones:** Permite a los técnicos registrar observaciones detalladas vinculadas a un lote con fecha y estado.
- **Sistema de Alertas:** Clasificación de observaciones mediante niveles de alerta estrictos (`Normal`, `Atención`, `Crítico`).
- **Inmutabilidad (Soft Delete):** Las observaciones mantienen un historial persistente; al "eliminarse" se desactivan de forma lógica, sin perder la información.
- **Búsqueda Avanzada:** Filtrado dinámico de lotes según el nivel de alerta de sus observaciones.

## Instalación y Configuración

1. Clona este repositorio.
2. Abre la terminal en el directorio del proyecto y ejecuta:
   ```bash
   npm install
   ```
3. Inicia el servidor (por defecto se levantará en el puerto 3000):
   ```bash
   npm start
   ```
   *Nota: Si tienes `nodemon` instalado, puedes usar `nodemon app.js` para desarrollo.*

## Endpoints de la API (Resumen)

### Productores (`/api/productores`)
- `GET /` - Listar todos los productores.
- `GET /:id` - Obtener un productor específico.
- `POST /` - Crear un nuevo productor.
- `PUT /:id` - Actualizar un productor.
- `DELETE /:id` - Eliminar un productor.

### Lotes (`/api/lotes`)
- `GET /` - Listar lotes (Soporta filtrado: `?alerta=Crítico`).
- `GET /:id` - Obtener un lote específico.
- `GET /:id/observaciones` - Ver el historial de observaciones del lote.
- `POST /` - Crear un nuevo lote.
- `PUT /:id` - Actualizar un lote.
- `DELETE /:id` - Eliminar un lote.

### Observaciones (`/api/observaciones`)
- `POST /` - Crear nueva observación (Valida existencia del lote, técnico y nivel de alerta).
- `DELETE /:id` - Eliminar observación (Soft Delete).

## Vistas Frontend
El proyecto incluye vistas simples renderizadas desde el servidor para interactuar rápidamente con los datos:
- **Inicio:** `http://localhost:3000/`
- **Explorador de Lotes:** `http://localhost:3000/vista/lotes`

