# Créditos y licencias de terceros

Bitácora es software libre (MIT, ver LICENSE) hecho posible en parte por los
siguientes proyectos abiertos. Si algo de esto falta o está mal atribuido,
abre un issue — es importante hacerlo bien.

## Datos lingüísticos

**Listas de frecuencia de palabras (francés y portugués europeo)**
Proyecto: [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords)
Licencia: MIT
Uso: base para las 3000 palabras más usadas de cada idioma en la sección
"Diccionario de frecuencia", y como guía para elegir vocabulario en los
diálogos y ejercicios de completar frases.

**Pronunciación IPA — francés**
Proyecto: [open-dict-data/ipa-dict](https://github.com/open-dict-data/ipa-dict)
Licencia: MIT
Uso: transcripción fonética (IPA) real para las palabras francesas del
diccionario de frecuencia (archivo `fr_FR.txt`, específico de Francia).

**Pronunciación IPA — portugués europeo**
Proyecto: [TigreGotico/tugaphone](https://github.com/TigreGotico/tugaphone)
Licencia: Apache License 2.0
Uso: no existe (que hayamos encontrado) un diccionario IPA abierto específico
para portugués de Portugal — la mayoría de recursos abiertos cubren solo
portugués de Brasil. Usamos tugaphone como fonemizador basado en reglas para
generar la transcripción IPA de las 3000 palabras portuguesas, especificando
el dialecto `pt-PT`. Si conoces un dataset abierto de IPA específico para
portugués europeo, por favor ábrelo como issue — sustituiría esto con gusto
por datos reales en vez de generados.

## Iconos de interfaz

Proyecto: [lucide-static](https://github.com/lucide-icons/lucide) (paquete
`lucide-static` en npm)
Licencia: ISC
Iconos usados: `volume-2`, `mic`, `arrow-left`, `search`, `book-open`,
`check`, `x`, `shuffle`, `map-pin`, `bus`, `briefcase`, `users`, `route`,
`award`. El texto completo de la licencia está en
`assets/icons/ui/LICENSE-lucide.txt`.

## Tipografías (autoalojadas, sin CDN)

- **Fraunces** — Undercase Type — SIL Open Font License 1.1
- **Public Sans** — U.S. General Services Administration — SIL Open Font License 1.1
- **IBM Plex Mono** — IBM — SIL Open Font License 1.1

Todas distribuidas vía los paquetes `@fontsource*` en npm, sin modificaciones.

## Contenido original de Bitácora

Todo el código de la aplicación, los diálogos, los ejercicios de
comprensión, las notas de pronunciación, los falsos amigos y los datos
curiosos fueron escritos específicamente para este proyecto y se publican
bajo MIT (ver LICENSE). Contribuciones bienvenidas.
