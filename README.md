# Portfolio de Candela

Portfolio web limpio y minimalista de Candela, diseñadora gráfica y visual.

## 📁 Estructura de Carpetas

\`\`\`
portfolio/
├── index.html                 # Página principal
├── css/
│   ├── style.css             # Estilos principales
│   └── proyecto-detail.css   # Estilos para páginas de proyectos
├── js/
│   └── script.js             # JavaScript para interactividad
├── pages/
│   ├── proyecto-identidad-visual.html
│   ├── proyecto-afiches-urbanos.html
│   ├── proyecto-senaletica.html
│   ├── proyecto-mocktail.html
│   ├── proyecto-ilustraciones.html
│   └── proyecto-infografia.html
├── img/                      # Carpeta para imágenes
├── video/
│   └── hero-video.mp4       # Video hero (reemplazar)
└── README.md
\`\`\`

## 🚀 Cómo usar

### Abrir en VS Code
1. Descarga y extrae el ZIP
2. Abre la carpeta con VS Code
3. Usa la extensión "Live Server" para ver el sitio en vivo

### Reemplazar video hero
1. Coloca tu video en `video/hero-video.mp4`
2. El video se reproducirá automáticamente en loop

### Reemplazar logo
1. En `index.html`, busca el elemento con clase `logo-placeholder`
2. Reemplaza o personaliza según necesites

### Añadir imágenes
1. Coloca las imágenes en la carpeta `img/`
2. Actualiza los `src` de las etiquetas `<img>` en HTML
3. Las rutas son relativas: `img/nombre-imagen.jpg`

## 🎨 Personalización

### Paleta de colores
En `css/style.css`, busca la sección `:root` para cambiar los colores:
- `--white`: Blanco (#FFFFFF)
- `--black`: Negro (#1A1A1A)
- `--pink`: Rosa claro (#F9CEE3)
- `--orange`: Naranja (#EC673C)
- `--lime`: Verde lima (#BAD045)

### Fuente
DM Sans se importa automáticamente desde Google Fonts. Para cambiar, actualiza el import en el `<head>` de `index.html`.

## ✨ Características

- ✅ Responsive (desktop, tablet, mobile)
- ✅ Navegación sticky con scroll suave
- ✅ Filtrado de proyectos por categoría
- ✅ Animaciones fade-in al scroll
- ✅ Formulario de contacto con validación
- ✅ Enlaces a redes sociales
- ✅ Código limpio y comentado
- ✅ Rutas relativas (funciona offline)

## 📱 Responsive

El sitio es totalmente responsive:
- **Desktop**: 3 columnas en proyectos
- **Tablet**: 2 columnas
- **Mobile**: 1 columna

## 🔗 Contacto

Actualiza los enlaces de redes sociales en la sección de "Contacto":
- Instagram
- LinkedIn
- Behance
- Email (mailto)

## 📝 Notas

- Todas las imágenes usan placeholders (`/placeholder.svg`). Reemplaza con tus propias imágenes.
- El formulario de contacto muestra un alert. Para funcionalidad real, necesita integración con un backend.
- El video hero es importante para la primera impresión. Usa un video de alta calidad y bajo peso.

---

Hecho con ❤️ para Candela
