## 🛒 E-commerce API - GAgustínFranco

API RESTful desarrollada con NestJS para gestionar un sistema de e-commerce con autenticación JWT, manejo de usuarios, productos, categorías, pedidos y carga de archivos a Cloudinary. Incluye documentación con Swagger y soporte para PostgreSQL mediante TypeORM.

## 🚀 Características
```bash
🔐 Autenticación y autorización con JWT (Roles: admin, user)

👤 Gestión de usuarios: creación, actualización, eliminación y listado

🛍️ Productos y categorías con paginación y precarga automática

📦 Pedidos y detalles de pedido con control de stock

☁️ Subida de imágenes a Cloudinary

🧾 Validaciones avanzadas con class-validator

📚 Documentación interactiva con Swagger (/api)

🐘 Base de datos PostgreSQL con TypeORM

🐳 Soporte Docker para despliegue rápido
```
## 🧠 Tecnologías Utilizadas
```bash
NestJS (v11)

TypeORM

PostgreSQL

JWT

Bcrypt

Cloudinary

Swagger

Docker

TypeScript
```
## ⚙️ Instalación

### Clona este repositorio:
```bash
git clone https://github.com/tuusuario/gagustin-franco.git
cd gagustin-franco
```
### Instala las dependencias:
```bash
npm install
```
### Compila el proyecto (opcional):
```bash
npm run build
```
## 🧾 Configuración del Entorno
```bash
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

PORT=3000

### Base de datos
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password
DB_NAME=ecommerce_db

### JWT
JWT_SECRET=clave_super_segura

### Cloudinary
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```
## ▶️ Ejecución del Proyecto
```bash
npm run start
```
### La API estará disponible en:
```bash
http://localhost:3000
```

### Documentación Swagger:
```bash
http://localhost:3000/api
```
## 📂 Estructura del Proyecto
```bash
src/
│
├── auth/                # Módulo de autenticación
├── users/               # Módulo de usuarios
├── products/            # Módulo de productos
├── categories/          # Módulo de categorías
├── orders/              # Módulo de pedidos
├── order-details/       # Módulo de detalles de pedido
├── files/               # Subida de archivos e integración con Cloudinary
├── config/              # Configuración de TypeORM y Cloudinary
├── interceptors/        # Interceptores personalizados
├── guards/              # Guards de autenticación y roles
└── main.ts              # Punto de entrada de la aplicación
```
## 🧩 Módulos Principales
```bash
🔑 Autenticación (/auth)

POST /auth/signup → Registro de usuario

POST /auth/signin → Inicio de sesión (JWT)

👤 Usuarios (/users)

GET /users → Listar usuarios (solo admin)

GET /users/:id

PUT /users/:id

DELETE /users/:id

🛍️ Productos (/products)

GET /products

GET /products/:id

POST /products (requiere token)

PUT /products/:id (solo admin)

DELETE /products/:id

📦 Pedidos (/orders)

GET /orders/:id

POST /orders

🖼️ Archivos (/files)

POST /files/uploadImage/:id → Sube imagen y actualiza producto (requiere token)
```
## 📘 Documentación Swagger
```bash
Swagger está habilitado por defecto y disponible en:

http://localhost:3000/api
```
## 🧱 Comandos de Migración

### Ejecutar migraciones:
```bash
npm run migration:run
```

### Crear nueva migración:
```bash
npm run migration:create -- name=nueva_migracion
```

### Revertir migraciones:
```bash
npm run migration:revert
```
## 🐳 Docker
```bash
El proyecto incluye un docker-compose.yml con configuración para NestJS y PostgreSQL.
```
### Levantar los servicios
```bash
docker compose up -d
```
### Parar los servicios
```bash
docker compose down
```
## 👥 Contribución
```bash
Crea una rama (feature/nueva-funcionalidad)

Realiza tus cambios

Envía un Pull Request 🚀
```
## 🪶 Licencia

Este proyecto está bajo la licencia ISC.

Agustín Franco Galvez
📧 agustingalvez0901@gmail.com

📍 Santa Fe (Capital), Argentina