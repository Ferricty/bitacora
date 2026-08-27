# Bitácora

App personal e instalable, **100% offline** una vez instalada, para aprender
**portugués de Portugal** y **francés de Francia** partiendo de español. Sin
publicidad, sin cuentas, sin servidor: tu progreso vive solo en tu móvil.

Nace porque no hay (que hayamos encontrado) una alternativa gratuita que
enseñe específicamente las variantes de Portugal y Francia, con datos
lingüísticos reales y abiertos en vez de contenido inventado. Es
código abierto (MIT) desde el primer commit — ver CREDITS.md y CONTRIBUTING.md.

## Instalar (2-3 minutos, gratis)

Los navegadores solo permiten instalar una PWA de verdad (icono propio,
funciona sin conexión) si se sirve por **https://** o **localhost**. Abrir
`index.html` a pelo desde el móvil no activa eso. La forma más simple:

1. Sube el contenido de esta carpeta a GitHub Pages, o arrástrala a
   [Netlify Drop](https://app.netlify.com/drop) (sin cuenta necesaria).
2. Abre la URL resultante en el navegador del móvil.
3. Chrome (Android): menú ⋮ → **Instalar aplicación**. Safari (iPhone):
   compartir 📤 → **Añadir a pantalla de inicio**.
4. Listo — icono propio, funciona sin conexión desde entonces.

¿Prefieres no publicar nada en internet? Sirve la carpeta desde tu propio
móvil con una app como *Servers Ultra* (Android) y abre `http://localhost:PUERTO`
— los navegadores tratan `localhost` como seguro igual que https.

## Qué incluye

- **5 módulos** por idioma, dificultad creciente: saludos y números →
  transporte → direcciones → conocer gente → entrevista de trabajo (registro
  formal). Diálogos reales, sin frases absurdas de relleno.
- **Diccionario de frecuencia**: las 3000 palabras más usadas de cada
  idioma, con pronunciación IPA, buscable. Ver de dónde sale cada dato en
  CREDITS.md — francés con IPA real de un diccionario abierto; portugués
  generado con un fonemizador especializado en el dialecto de Portugal, a
  falta de un dataset abierto equivalente.
- **Repetición espaciada real (SM-2)**, ahora global: mezcla tarjetas de
  todos los módulos que ya tocaste, no solo del que tienes abierto.
- **Ejercicios de completar frases** (cloze) con palabras de alta frecuencia,
  a veces seleccionando y a veces escribiendo.
- **Corrección estricta**: cuando fallas, te decimos la respuesta correcta
  sin rodeos. No hay botón para marcarte algo como acertado igualmente —
  esto es una herramienta para aprender, no un juego.
- **Falsos amigos** español↔idioma en cada módulo (embarazada/embaraçada,
  nombre/nombre, largo/large...).
- **Un dato curioso** de Portugal o Francia cada 2 días de racha.
- Audio con la voz que ya trae tu propio móvil instalada, y grabarte a ti
  mismo para comparar tu pronunciación con la nativa.

## Qué no hace (para que no haya sorpresas)

- No corrige tu pronunciación automáticamente sin conexión — te grabas y
  comparas de oído, que es lo único realista sin depender de un servidor.
- El diccionario cubre las 3000 palabras más frecuentes, no el diccionario
  completo del idioma (decenas de miles de entradas) — es un objetivo
  deliberado: cubre con creces el vocabulario del habla cotidiana sin
  disparar el tamaño de la app. Ampliable con el tiempo.
- 5 módulos por ahora. Pensado para seguir creciendo con la comunidad.

## Quiero contribuir

Ver CONTRIBUTING.md. Los módulos nuevos, correcciones lingüísticas y
mejoras de accesibilidad son especialmente bienvenidas.

## Privacidad

Todo tu progreso se guarda con `localStorage`, solo en tu navegador.
Nada se envía a ningún servidor. Borrar datos de navegación del sitio borra
el progreso — es la contrapartida de que funcione 100% offline y sin cuentas.
