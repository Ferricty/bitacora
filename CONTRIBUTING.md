# Cómo contribuir

Gracias por pensar en mejorar Bitácora. No hace falta ser programador para
ayudar — la mitad del proyecto es contenido lingüístico.

## Formas de contribuir sin tocar código

- **Reportar un error de idioma**: una traducción rara, una nota de
  pronunciación imprecisa, un falso amigo mal explicado. Abre un issue con
  el módulo y la tarjeta exacta.
- **Proponer un módulo nuevo**: una situación cotidiana que falte
  (restaurante, médico, hotel...). Con 15-20 frases propuestas (español →
  idioma) ya es un buen punto de partida.
- **Hablantes nativos**: revisar el registro/naturalidad de los diálogos es
  el aporte más valioso posible. El español de partida y las traducciones
  las escribió alguien aprendiendo, no un lingüista.

## Añadir un módulo nuevo (con código)

Cada módulo vive como un objeto dentro de `js/data.js` (módulo 1) o
`js/data-extra.js` (resto). Estructura mínima:

```js
{
  id: "pt-m6", num: 6, title: "...", subtitle: "...",
  cards: [ { id: "pt-m6-c01", es: "...", target: "...", phon: "...", note: "opcional" } ],
  dialogue: {
    title: "...", context: "...",
    lines: [ { who: "...", target: "...", es: "..." } ],
    questions: [ { q: "...", options: ["...", "...", "..."], answer: 0 } ]
  },
  cloze: [ { id: "pt-m6-cl1", before: "...", blank: "...", after: "...", es: "...", mode: "type" } ],
  falseFriends: [ { es: "...", esMeaning: "...", target: "...", targetMeaning: "..." } ]
}
```

IDs deben ser únicos en todo el proyecto (prefijo `pt-m6-` o `fr-m6-`, etc.).
`mode` en cloze es `"type"` (campo de texto) o `"select"` (necesita
`options`, incluyendo la respuesta correcta). Después de editar, corre
`node --check js/data-extra.js` para verificar sintaxis.

## Principios de contenido (importantes)

- **Frases reales, no rellenas**: cada ejemplo debe ser algo que de verdad
  se diría en esa situación. Nada de frases absurdas solo para practicar
  gramática.
- **Corrección sin ambigüedad**: si un ejercicio se puede fallar, la app
  debe decir la respuesta correcta con claridad. No añadas atajos para
  "marcar como correcto igualmente".
- **Cita tus fuentes**: si te apoyas en un diccionario, lista de frecuencia,
  o corpus externo, añádelo a CREDITS.md con su licencia.

## Ampliar el diccionario de frecuencia

Los datos de `js/dict-fr.js` y `js/dict-pt.js` se generan con un script
(no incluido en este paquete de distribución, mándanos un issue si lo
necesitas) a partir de hermitdave/FrequencyWords + ipa-dict (francés) o
tugaphone (portugués). Si aparece un dataset IPA abierto específico para
portugués europeo, es la mejora más valiosa posible para ese diccionario.

## Estilo de código

Vanilla JS, sin build step, sin frameworks — a propósito, para que cualquiera
pueda abrir un archivo y entenderlo. Mantén esa filosofía en los PRs.
