# Resumen de Cambios — VTM Tech Solutions
**Período:** Abril 7 – Mayo 4, 2026

---

## Panorama General

Durante el último mes se construyó y refinó el sitio web completo de VTM Tech Solutions, una plataforma bilingüe (inglés / español) para la venta de maquinaria industrial en el mercado estadounidense. El sitio incluye páginas de producto, catálogo de series, comparativas técnicas, soluciones por industria, blog, formularios de cotización y un agente de chat con IA.

---

## Abril 7 – 13: Infraestructura base y primeras páginas

### Páginas creadas
- **Página de inicio** (`/en`, `/es`) — hero animado, barra de estadísticas de confianza, showcase de productos, sección de industrias, CTA de contacto.
- **Página de Contacto** (`/contact`) — formulario de contacto y mapa.
- **Página de Cotización** (`/quote`) — formulario de solicitud de cotización con campos específicos por tipo de máquina.
- **Página de Soporte** (`/support`) — recursos de soporte post-venta.
- **Catálogo de Fabricación** (`/fabrication`) — índice de todas las máquinas de fabricación.
- **Cortadora Láser de Fibra para Chapa** (`/fabrication/fiber-laser-cutting-machine`) — primera página de producto con layout completo.
- **Cortadora Láser Enclosed** (`/fabrication/enclosed-fiber-laser-cutting-machine`) — variante de la cortadora en gabinete cerrado.
- **Máquina de Soldadura Láser** (`/fabrication/laser-welding-machine`) — página de producto.
- **Punzonadora Ironworker** (`/fabrication/ironworker`) — página de producto.

### Componentes de infraestructura
- `ProductPageTemplate` — plantilla reutilizable para todas las páginas de producto: hero, features, specs, comparativa, FAQ, formulario de cotización, productos relacionados.
- `Footer`, `Navbar`, `FloatingWidgets` (chat IA + botón de cotización flotante).
- `ProductHeroCTA` — botones de acción en el hero de cada producto.

### Páginas de Soluciones
- Creadas: Fabricación de Metal, HVAC/Construcción, Automotriz, Aeroespacial.

---

## Abril 13 – 21: Expansión de catálogo y componentes avanzados

### Nuevas páginas de producto
- **Arm de Soldadura Colaborativa** (`/automation/collaborative-welding-arm`).
- **Arm de Soldadura Industrial** (`/automation/industrial-welding-arm`).
- **Página de Automatización** (`/automation`) — índice de soluciones de automatización.
- **Página de Soluciones** (`/solutions`) — índice general de soluciones por industria.
- **Página About** (`/about`) — historia, equipo, certificaciones.

### Nuevos componentes
- `SpinViewer360` — visor 360° interactivo para imágenes de producto.
- `HeroScroll` — hero con animación de scroll paralax para la cortadora láser de fibra.
- `ModelBrowser` — selector visual de series para la cortadora láser de fibra.
- `ImageGallery` — galería de imágenes con thumbnails y navegación.
- `ProductModesBrowser` — selector de modos operativos (ej. corte / biselado / tubo).

### Blog
- Estructura de blog creada (`/blog`) con página de listado e índice de artículos.
- Sitemap dinámico (`sitemap.ts`) generado automáticamente.

---

## Abril 21 – 27: Navegadores de Modelos con Especificaciones

### Componente estrella: Model Browser + Specs Carousel
Se construyó el patrón de navegador de series con especificaciones en carrusel infinito para tres máquinas:

**Cortadora Láser de Fibra para Chapa** (`ModelBrowserWithSpecs`):
- 8 series: EA, B, FE, SE, PE, L, TT, Mi.
- Cada serie con: galería de imágenes, descripción, "ideal para", tabla de specs.
- Especificaciones completas con toggle Métrico / Imperial.
- Carrusel infinito (clone-tape) para series con más de 3 modelos.

**Cortadora Láser de Tubo** (`TubeModelBrowser`):
- 3 series: T (tubo), MT (tubo + chapa), AT (tubo automático).
- Mismo patrón de galería + specs + carrusel.
- Imágenes de producto reales integradas.

**Cortadora Láser Chapa + Tubo** (`SheetTubeModelBrowser`):
- Combinación de ambas plataformas en un solo selector.

### Laser Cleaning Machine
- Nueva página creada: `/fabrication/laser-cleaning-machine`.
- `CleaningModelBrowser` — selector de modelos con specs.

---

## Abril 27 – 28: Refinamientos y Contenido

### Industrias Carousel
- `IndustriesCarousel` — carrusel de industrias en la página de inicio con animación.

### Certificaciones — Cambio CE → OSHA/UL
- **TrustBarStats** (barra de confianza en el inicio): se reemplazó el sello CE europeo por certificación **UL** (estándar de seguridad eléctrica de EE.UU.) en inglés y español.
- **Página About**: se reemplazó "CE Mark / Marca CE" por **"OSHA Compliant / Cumplimiento OSHA"** en ambos idiomas, reflejando los estándares reales del mercado estadounidense.

### Contenido adicional
- Páginas de soluciones por industria completas con contenido bilingüe (Metal, HVAC, Automotriz, Aeroespacial).
- Formulario de contacto mini integrado en inicio.
- Testimonios circulares (`circular-testimonials`).

---

## Mayo 1 – 4: Prensa Plegadora CNC — Rediseño Completo

Esta fue la sección de mayor trabajo del período. La página `/fabrication/cnc-press-brake` fue reconstruida de cero.

### Nueva arquitectura de la página
La página pasó de tener una sola especificación genérica a presentar **dos plataformas de accionamiento independientes** con sus propios modelos, imágenes y especificaciones completas.

### `PressBrakeModelBrowser` — nuevo componente
Modeled after the TubeModelBrowser pattern:

**Serie Hidráulica:**
- 26 configuraciones de 63 T hasta 1,600 T.
- Longitudes de cama: 2,500 mm a 8,000 mm.
- 11 filas de especificaciones técnicas con toggle métrico/imperial.
- Carrusel infinito de modelos.
- Upgrades disponibles: Auto Tool Change, Wila Tooling, Front Arms, Laser Safety Guard, Angle Measurement.

**Serie Servo Eléctrica (Tándem):**
- 9 configuraciones en pares tándem sincronizados, de 2×160 T hasta 2×800 T.
- Longitudes combinadas hasta 16 m (2×8,000 mm).
- 11 filas de especificaciones técnicas con toggle métrico/imperial.
- Carrusel infinito de modelos.

### Imágenes de producto
- 5 imágenes reales integradas: 3 hidráulicas, 2 servo eléctricas.
- Hero de la página: fotografía real del VTM PB CNC 10032 en planta industrial.
- Hero configurado como `object-contain` para mostrar la máquina completa sin recorte.

### Comparativa de Controladores DELEM
Se reemplazó la comparativa de controladores genéricos (EL15T / EL21T) por los controladores reales **DELEM DA-53T** y **DELEM DA-69S**, con fichas técnicas completas:

| | DA-53T | DA-69S |
|---|---|---|
| Pantalla | 15.6" TFT (1366×768) | 24" Full Touch (1920×1080) |
| OS | Linux embebido RT | Linux embebido RT (multitarea) |
| Programación | 2D gráfico + alfanumérico | 2D + 3D gráfico y simulación |
| Simulación 3D | — | Sí, escala real |
| Importación DXF | — | Sí |
| Herramientas | 30 punzones / 30 matrices | Librería extendida + reconocimiento auto |
| Conectividad | USB + red opcional | Multi-red + OPC-UA opcional |
| Diagnóstico remoto | — | Sí |
| Protección | IP54 · ~7 kg | IP54 · ~14.5 kg |

- Imágenes reales de ambos controladores subidas e integradas.

### Mejoras de UX: Auto-scroll en carruseles
Se implementó en **todas las páginas** con carrusel de especificaciones:
- Al colocar el cursor sobre las flechas de navegación, el carrusel avanza automáticamente cada 500 ms.
- Al retirar el cursor, el scroll se detiene.
- Implementación con `useRef` para evitar closures obsoletos — funciona correctamente a través de re-renders.

**Páginas afectadas:**
1. Cortadora Láser de Fibra para Chapa (`ModelBrowserWithSpecs`)
2. Cortadora Láser de Tubo (`TubeModelBrowser`)
3. Cortadora Láser Chapa + Tubo (`SheetTubeModelBrowser`)
4. Prensa Plegadora CNC (`PressBrakeModelBrowser`)

### Ajustes de contenido y SEO
- Rango de tonelaje actualizado en toda la página: 40–400 T → **63–1,600 T** (hidráulica).
- Hero subheadline, metadata y tarjetas de serie actualizadas en EN y ES.
- Sección de características: se eliminó la feature #01 (Repetibilidad ±0.01 mm).
- Números de sección (03, 04, 05) eliminados de las features restantes — diseño más limpio.
- Imagen de la prensa plegadora actualizada en la sección **Fabrication Machinery** del inicio.

---

## Resumen de Archivos Modificados (Mayo)

| Archivo | Descripción |
|---|---|
| `cnc-press-brake/PressBrakeModelBrowser.tsx` | Nuevo — navegador de series con specs completas |
| `cnc-press-brake/ControllerComparison.tsx` | Actualizado — DELEM DA-53T vs DA-69S |
| `cnc-press-brake/content.ts` | Actualizado — rangos, hero, features |
| `cnc-press-brake/page.tsx` | Actualizado — metadata, layout |
| `fiber-laser-cutting-machine/ModelBrowserWithSpecs.tsx` | Auto-scroll en flechas |
| `fiber-laser-tube-cutting-machine/TubeModelBrowser.tsx` | Auto-scroll en flechas |
| `sheet-tube-laser-cutting-machine/SheetTubeModelBrowser.tsx` | Auto-scroll en flechas |
| `components/product/ProductPageTemplate.tsx` | `number` opcional, `heroImageFit` prop |
| `components/home/ProductShowcase.tsx` | Imagen CNC press brake actualizada |

---

*Documento generado el 7 de mayo de 2026.*
