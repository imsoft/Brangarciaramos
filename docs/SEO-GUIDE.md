# Guía de SEO

Cómo está implementado el SEO del sitio y qué revisar al hacer cambios.

## Dónde vive cada cosa

| Qué | Archivo |
|---|---|
| Título y descripción por idioma | `src/content.ts` → `meta` (la descripción es el resumen del hero) |
| Nombre, email, teléfono, LinkedIn, GitHub, URL del sitio | `src/content.ts` → `profile` |
| Metadata, Open Graph, Twitter Card, hreflang, canonical | `src/app/[locale]/layout.tsx` → `generateMetadata` |
| Imagen Open Graph (1200×630, una por idioma) | `src/app/[locale]/opengraph-image.tsx` |
| JSON-LD tipo `Person` | `src/components/home-page.tsx` → `personJsonLd` |
| Sitemap | `src/app/sitemap.ts` |
| Robots | `src/app/robots.ts` |
| Manifest | `src/app/manifest.ts` |
| CV en `/cv` | `public/cv.pdf` + rewrite en `next.config.ts` |

Para cambiar textos, el título o tus datos de contacto solo edita `src/content.ts`; la metadata, la imagen OG y el JSON-LD se generan desde ahí.

## Lo que ya está implementado

- **Metadata por idioma**: `/en` y `/es` tienen su propio título, descripción y `og:locale` (`en_US` / `es_MX`).
- **Hreflang y canonical**: cada página declara su versión en el otro idioma; `x-default` apunta a `/en`.
- **Open Graph y Twitter Card**: `summary_large_image` con una imagen generada en build desde `content.ts` (nombre, título, ubicación). No hay que diseñarla a mano.
- **JSON-LD `Person`**: nombre, puesto, descripción, email, teléfono, ubicación, LinkedIn y GitHub (`sameAs`), empresa actual y escuela.
- **Sitemap y robots**: ambos idiomas en `/sitemap.xml`; `robots.txt` permite todo y apunta al sitemap.
- **Páginas estáticas**: `/en`, `/es` y sus imágenes OG se prerenderizan en build (SSG), sin trabajo de servidor por visita.
- **HTML semántico y accesible**: `header`, `nav`, `main`, `section` con encabezados, enlace "saltar al contenido", foco visible y contraste AA en modo claro y oscuro.

## Pendiente de tu parte

### Google Search Console
1. Ve a [Google Search Console](https://search.google.com/search-console/) y agrega `brangarciaramos.com`.
2. Si eliges verificar con etiqueta HTML, agrega el código en `generateMetadata` de `src/app/[locale]/layout.tsx`:
   ```ts
   verification: { google: "TU-CODIGO" },
   ```
   (Si verificas por DNS en Vercel no hace falta tocar código).
3. Envía `https://brangarciaramos.com/sitemap.xml` en la sección Sitemaps.

### Lighthouse
Audita en producción (no en `pnpm dev`) con [PageSpeed Insights](https://pagespeed.web.dev/) sobre `/en` y `/es`. Objetivo: ≥ 95 en todas las categorías.

## Verificación

Después de cada deploy:

- **Metadata**: ver código fuente de `/en` y buscar `<title>`, `og:` y `application/ld+json`.
- **Open Graph**: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) y [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
- **JSON-LD**: [Rich Results Test](https://search.google.com/test/rich-results) o [Schema Markup Validator](https://validator.schema.org/).
- **Sitemap y robots**: abrir `https://brangarciaramos.com/sitemap.xml` y `/robots.txt`.
- **CV**: abrir `https://brangarciaramos.com/cv`.

Localmente, `pnpm build && pnpm start` y revisar las mismas rutas en `http://localhost:3000`.
