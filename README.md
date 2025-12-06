# 🎨 KPixel Craft - Desarrollo de Software Profesional

<div align="center">

![KPixel Craft](/public/favicon.png)

**Sitio web corporativo moderno con React + TypeScript + Vite**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://www.docker.com/)

[Demo en vivo](#) · [Reportar Bug](https://github.com/krisspaz/kpixel-craft/issues) · [Solicitar Feature](https://github.com/krisspaz/kpixel-craft/issues)

</div>

---

## ✨ Características

- ⚡ **Vite** - Build tool ultra-rápido
- ⚛️ **React 18** - Biblioteca UI de última generación
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Componentes accesibles y personalizables
- 📝 **TypeScript** - Tipado estático para mayor confiabilidad
- 🎭 **Animaciones fluidas** - Micro-interacciones premium
- 📱 **Responsive** - Diseño mobile-first
- 🔍 **SEO optimizado** - Meta tags y Open Graph completos
- ✅ **Validación de formularios** - react-hook-form + zod
- 🐳 **Docker ready** - Containerización para deployment

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >= 20.0.0
- npm >= 10.0.0

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/krisspaz/kpixel-craft.git
cd kpixel-craft

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5178`

### Build de Producción

```bash
# Generar build optimizado
npm run build

# Previsualizar build
npm run preview
```

---

## 🐳 Docker

### Opción 1: Docker Compose (Recomendado)

```bash
# Build y ejecutar
docker-compose up --build

# Ejecutar en background
docker-compose up -d

# Detener
docker-compose down
```

El sitio estará disponible en `http://localhost:8080`

### Opción 2: Docker Manual

```bash
# Build de la imagen
docker build -t kpixel-craft .

# Ejecutar container
docker run -d -p 8080:80 --name kpixel-web kpixel-craft

# Ver logs
docker logs -f kpixel-web

# Detener
docker stop kpixel-web
docker rm kpixel-web
```

---

## 📁 Estructura del Proyecto

```
kpixel-craft/
├── public/              # Archivos estáticos
│   └── favicon.png      # Favicon personalizado
├── src/
│   ├── components/      # Componentes React
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx  # Formulario con validación
│   │   └── ...
│   ├── pages/           # Páginas principales
│   │   ├── Index.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   └── NotFound.tsx
│   ├── lib/             # Utilidades
│   ├── App.tsx          # Componente raíz
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globales
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Orquestación Docker
├── nginx.conf           # Configuración Nginx
├── .dockerignore
└── README.md
```

---

## 🛠️ Stack Tecnológico

### Frontend
- **React** 18.3.1
- **TypeScript** 5.8.3
- **Vite** 7.2.6
- **Tailwind CSS** 3.4.17
- **shadcn/ui** - Componentes base

### Validación
- **react-hook-form** 7.61.1
- **zod** 3.25.76
- **@hookform/resolvers** 3.10.0

### Deployment
- **Docker** - Containerización
- **Nginx** - Web server
- **Multi-stage build** - Optimización de imagen

---

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor dev en puerto 5178
npm run build            # Build de producción
npm run preview          # Preview del build
npm run lint             # Ejecutar ESLint

# Docker
docker-compose up        # Levantar con Docker
docker-compose down      # Detener containers
```

---

## 🎨 Personalización

### Colores

Los colores principales se definen en `src/index.css`:

```css
:root {
  --accent: 190 100% 50%;        /* Cyan principal */
  --background: 0 0% 2%;         /* Negro oscuro */
  --foreground: 0 0% 98%;        /* Blanco */
  --card: 0 0% 6%;               /* Gris oscuro */
  /* ... más colores */
}
```

### Contenido

Para actualizar el contenido del sitio, edita los archivos en `src/components/`:

- **Hero.tsx** - Sección principal
- **Services.tsx** - Servicios ofrecidos
- **Portfolio.tsx** - Proyectos destacados
- **Contact.tsx** - Información de contacto

---

## 🔒 Seguridad

- ✅ Headers de seguridad en Nginx
- ✅ Validación de inputs en formularios
- ✅ Links externos con `rel="noopener noreferrer"`
- ✅ Sin vulnerabilidades de dependencias

```bash
# Auditoría de seguridad
npm audit
```

---

## 📊 Performance

- ⚡ Lazy loading de imágenes
- 🗜️ Gzip compression (Nginx)
- 📦 Code splitting automático (Vite)
- 🎯 Lighthouse Score: ~85-90

---

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

---

## 📬 Contacto

**Kristopher Paz**

- 🌐 Web: [kpixelcraft.com](https://kpixelcraft.com)
- 📧 Email: krispaz77@gmail.com
- 💼 LinkedIn: [kristopher-paz](https://www.linkedin.com/in/kristopher-paz-34610715a/)
- 🐙 GitHub: [@krisspaz](https://github.com/krisspaz)
- 📱 WhatsApp: [+502 5793-7229](https://wa.me/50257937229)

---

<div align="center">

**Hecho con ❤️ en Guatemala 🇬🇹**

⭐ Si te gustó este proyecto, dale una estrella!

</div>
