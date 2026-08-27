/* Bitácora — contenido de las lecciones.
   Todo el contenido es original, escrito para hablantes de español
   que parten de cero. No depende de ningún recurso externo. */

const BITACORA_DATA = {
  langs: {
    pt: {
      code: "pt",
      label: "Português",
      country: "Portugal",
      flagShort: "PT",
      speechLang: "pt-PT",
      speechFallback: "pt",
      tagline: "El portugués de Lisboa, no el de Brasil",
      bridgeNote:
        "El portugués es el idioma más cercano al español que existe: comparten muchísimo vocabulario. " +
        "El reto está en el oído, no en las palabras — sobre todo las vocales nasales y las vocales átonas, " +
        "que casi desaparecen al hablar.",
      pronunciation: [
        { rule: "ão", desc: "Vocal nasal que no existe en español. Dejas salir el aire por la nariz mientras dices algo entre «a» y «u». Ejemplos: não, mão, pão." },
        { rule: "s al final de sílaba", desc: "Suena como la «sh» inglesa. «Português» se pronuncia algo así como «purtugueSH»." },
        { rule: "j, y g ante e/i", desc: "Sonido suave («ZH»), como la «j» francesa. Nunca como la «j» española fuerte." },
        { rule: "lh", desc: "Como la «ll» española. «Filho» suena parecido a «fillo»." },
        { rule: "nh", desc: "Como la «ñ» española. «Amanhã» ≈ «amañá» (con nasal al final)." },
        { rule: "vocales átonas", desc: "Las vocales sin acento casi desaparecen al hablar. «Pequeno» suena casi «p'kenu»." },
        { rule: "r inicial o «rr»", desc: "Gutural, se pronuncia en la garganta — no se hace vibrar la lengua como en español." }
      ],
      modules: [
        {
          id: "pt-m1",
          num: 1,
          title: "Primeiros passos",
          subtitle: "Saludos, cortesía y números",
          cards: [
            { id: "pt-m1-c01", es: "hola", target: "olá", phon: "o-LÁ" },
            { id: "pt-m1-c02", es: "buenos días", target: "bom dia", phon: "bon DÍ-a", note: "«bom» es nasal: boca casi cerrada, como «bõ»." },
            { id: "pt-m1-c03", es: "buenas tardes", target: "boa tarde", phon: "BÓ-a TAR-de" },
            { id: "pt-m1-c04", es: "buenas noches (al saludar)", target: "boa noite", phon: "BÓ-a NÓI-te" },
            { id: "pt-m1-c05", es: "adiós", target: "adeus", phon: "a-DÉ-us" },
            { id: "pt-m1-c06", es: "hasta luego", target: "até logo", phon: "a-TÉ LÓ-gu" },
            { id: "pt-m1-c07", es: "por favor", target: "por favor", phon: "pur fa-VÓR", note: "Cognado casi idéntico al español." },
            { id: "pt-m1-c08", es: "gracias (lo dice un hombre)", target: "obrigado", phon: "o-bri-GA-du", note: "El agradecimiento concuerda en género con quien habla: ellos dicen «obrigado», ellas «obrigada»." },
            { id: "pt-m1-c09", es: "gracias (lo dice una mujer)", target: "obrigada", phon: "o-bri-GA-da" },
            { id: "pt-m1-c10", es: "de nada", target: "de nada", phon: "de NA-da", note: "Idéntico al español." },
            { id: "pt-m1-c11", es: "perdón, disculpe", target: "desculpe", phon: "des-KUL-pe" },
            { id: "pt-m1-c12", es: "sí", target: "sim", phon: "sĩ (nasal)" },
            { id: "pt-m1-c13", es: "no", target: "não", phon: "nãu (nasal)" },
            { id: "pt-m1-c14", es: "¿cómo estás?", target: "como estás?", phon: "KÓ-mu es-TÁS" },
            { id: "pt-m1-c15", es: "bien, gracias", target: "bem, obrigado/a", phon: "bãi, o-bri-GA-du" },
            { id: "pt-m1-c16", es: "¿cómo te llamas?", target: "como te chamas?", phon: "KÓ-mu te SHA-mas", note: "«ch» portuguesa suena como «sh» inglesa, nunca como la «ch» española." },
            { id: "pt-m1-c17", es: "me llamo...", target: "chamo-me...", phon: "SHA-mu-me" },
            { id: "pt-m1-c18", es: "mucho gusto", target: "muito prazer", phon: "MUI-tu pra-ZÉR" },
            { id: "pt-m1-c19", es: "¿hablas español?", target: "falas espanhol?", phon: "FA-las es-pa-ÑÓL", note: "«nh» se pronuncia como la ñ española." },
            { id: "pt-m1-c20", es: "no entiendo", target: "não percebo", phon: "nãu per-SE-bu", note: "En Portugal se usa mucho «perceber» para «entender» en el día a día." },
            { id: "pt-m1-c21", es: "¿puede repetir?", target: "pode repetir?", phon: "PÓ-de re-pe-TIR" },
            { id: "pt-m1-c22", es: "lo siento", target: "desculpa", phon: "des-KUL-pa" },
            { id: "pt-m1-c23", es: "bienvenido/a", target: "bem-vindo/a", phon: "bãi-VIN-du" },
            { id: "pt-m1-c24", es: "salud (al brindar)", target: "saúde", phon: "sa-Ú-de" },
            { id: "pt-m1-c25", es: "buen provecho", target: "bom apetite", phon: "bon a-pe-TI-te" },
            { id: "pt-m1-c26", es: "agua", target: "água", phon: "Á-gua", note: "Cognado, casi idéntico." },
            { id: "pt-m1-c27", es: "café", target: "café", phon: "ka-FÉ", note: "Idéntico al español." },
            { id: "pt-m1-c28", es: "la cuenta, por favor", target: "a conta, por favor", phon: "a KON-ta pur fa-VÓR" },
            { id: "pt-m1-c29", es: "¿cuánto cuesta?", target: "quanto custa?", phon: "KUAN-tu KUS-ta" },
            { id: "pt-m1-c30", es: "no hablo portugués", target: "não falo português", phon: "nãu FA-lu pur-tu-GHÉSH", note: "La «s» final suena «sh»: portugueSH." },
            { id: "pt-m1-c31", es: "cero", target: "zero", phon: "ZÉ-ru" },
            { id: "pt-m1-c32", es: "uno", target: "um", phon: "ũ (nasal)" },
            { id: "pt-m1-c33", es: "dos", target: "dois", phon: "DÓI-sh" },
            { id: "pt-m1-c34", es: "tres", target: "três", phon: "tréSH" },
            { id: "pt-m1-c35", es: "cuatro", target: "quatro", phon: "KUÁ-tru" },
            { id: "pt-m1-c36", es: "cinco", target: "cinco", phon: "SIN-ku", note: "Casi idéntico al español." },
            { id: "pt-m1-c37", es: "seis", target: "seis", phon: "séish", note: "Se escribe igual que en español." },
            { id: "pt-m1-c38", es: "siete", target: "sete", phon: "SÉ-te" },
            { id: "pt-m1-c39", es: "ocho", target: "oito", phon: "ÓI-tu" },
            { id: "pt-m1-c40", es: "nueve", target: "nove", phon: "NÓ-ve" },
            { id: "pt-m1-c41", es: "diez", target: "dez", phon: "desh" }
          ],
          dialogue: {
            title: "No café",
            context: "Pides un café en Lisboa.",
            lines: [
              { who: "Empregado", target: "Bom dia! O que deseja?", es: "Buenos días. ¿Qué desea?" },
              { who: "Você", target: "Bom dia. Um café, por favor.", es: "Buenos días. Un café, por favor." },
              { who: "Empregado", target: "Mais alguma coisa?", es: "¿Algo más?" },
              { who: "Você", target: "Não, obrigado. Quanto custa?", es: "No, gracias. ¿Cuánto cuesta?" },
              { who: "Empregado", target: "São dois euros.", es: "Son dos euros." },
              { who: "Você", target: "Obrigado! Até logo.", es: "¡Gracias! Hasta luego." }
            ],
            questions: [
              { q: "¿Qué pide el cliente?", options: ["Un té", "Un café", "Un agua"], answer: 1 },
              { q: "¿Cuánto cuesta?", options: ["Un euro", "Dos euros", "Tres euros"], answer: 1 },
              { q: "¿Cómo se despide?", options: ["Adeus", "Até logo", "Boa noite"], answer: 1 }
            ]
          },
          falseFriends: [
            { es: "embarazada", esMeaning: "encinta, esperando un bebé", target: "embaraçada", targetMeaning: "avergonzada / enredada" },
            { es: "polvo", esMeaning: "dust, suciedad", target: "polvo", targetMeaning: "¡pulpo! el animal marino" },
            { es: "largo", esMeaning: "long, de gran longitud", target: "largo", targetMeaning: "ancho" },
            { es: "oficina", esMeaning: "office", target: "oficina", targetMeaning: "taller mecánico (oficina se dice «escritório»)" },
            { es: "cena", esMeaning: "dinner", target: "cena", targetMeaning: "escena (cenar se dice «jantar»)" }
          ],
          cloze: [
            { id: "pt-m1-cl1", before: "Eu ", blank: "não", after: " falo português.", es: "Yo no hablo portugués.", mode: "select", options: ["não", "sim", "bem", "muito"] },
            { id: "pt-m1-cl2", before: "", blank: "Obrigado", after: " pela ajuda.", es: "Gracias por la ayuda.", mode: "type" },
            { id: "pt-m1-cl3", before: "Como ", blank: "estás", after: "?", es: "¿Cómo estás?", mode: "type" },
            { id: "pt-m1-cl4", before: "A conta, por ", blank: "favor", after: ".", es: "La cuenta, por favor.", mode: "select", options: ["favor", "nada", "dia", "noite"] }
          ]
        }
      ]
    },

    fr: {
      code: "fr",
      label: "Français",
      country: "France",
      flagShort: "FR",
      speechLang: "fr-FR",
      speechFallback: "fr",
      tagline: "El francés de Francia, con su oído propio",
      bridgeNote:
        "El francés comparte muchísimo vocabulario con el español por el latín, pero la ortografía engaña: " +
        "se escribe distinto de como suena. El reto real son los sonidos nuevos — nasales, la «u» francesa " +
        "y las letras finales mudas.",
      pronunciation: [
        { rule: "vocales nasales", desc: "on, an/en, in/ain, un: no existen en español. El aire sale por la nariz. Practica con bon, France, vin, un." },
        { rule: "consonantes finales mudas", desc: "La mayoría no se pronuncian, salvo C-R-F-L (regla «CaReFuL»). En «petit» la t no suena; en «avec» la c sí." },
        { rule: "la «u» francesa", desc: "No existe en español. Redondea los labios como para «u» pero pon la lengua como para «i». Compara «tu» con «tout»." },
        { rule: "r francesa", desc: "Gutural, se pronuncia en la garganta — nunca se hace vibrar la lengua." },
        { rule: "enlace (liaison)", desc: "A veces se pronuncia la consonante final para unir con la palabra siguiente si empieza en vocal. «Les amis» suena «lezami»." }
      ],
      modules: [
        {
          id: "fr-m1",
          num: 1,
          title: "Premiers pas",
          subtitle: "Saludos, cortesía y números",
          cards: [
            { id: "fr-m1-c01", es: "hola", target: "bonjour", phon: "bon-SHUR", note: "Se usa a cualquier hora del día, no solo por la mañana." },
            { id: "fr-m1-c02", es: "buenas tardes/noches (al llegar)", target: "bonsoir", phon: "bon-SUAR", note: "Se usa desde el atardecer." },
            { id: "fr-m1-c03", es: "adiós", target: "au revoir", phon: "o rə-VUAR" },
            { id: "fr-m1-c04", es: "hasta pronto", target: "à bientôt", phon: "a bian-TÓ", note: "«bien» es nasal: aire por la nariz." },
            { id: "fr-m1-c05", es: "buenas noches (al dormir)", target: "bonne nuit", phon: "bon NUÍ" },
            { id: "fr-m1-c06", es: "por favor (a un amigo)", target: "s'il te plaît", phon: "sil tə PLÉ" },
            { id: "fr-m1-c07", es: "por favor (formal)", target: "s'il vous plaît", phon: "sil vu PLÉ", note: "El francés distingue «tu» (cercano) de «vous» (formal/plural), igual que el portugués con tu/você." },
            { id: "fr-m1-c08", es: "gracias", target: "merci", phon: "mer-SÍ" },
            { id: "fr-m1-c09", es: "de nada", target: "de rien", phon: "də RIAN", note: "«rien» es nasal." },
            { id: "fr-m1-c10", es: "perdón", target: "pardon", phon: "par-DON", note: "Nasal, no como la «o+n» española." },
            { id: "fr-m1-c11", es: "disculpe", target: "excusez-moi", phon: "eks-kü-zé MUÁ" },
            { id: "fr-m1-c12", es: "sí", target: "oui", phon: "uí" },
            { id: "fr-m1-c13", es: "no", target: "non", phon: "non (nasal)" },
            { id: "fr-m1-c14", es: "¿cómo estás?", target: "comment ça va?", phon: "ko-man sa VA" },
            { id: "fr-m1-c15", es: "bien, gracias", target: "bien, merci", phon: "bian, mer-SÍ" },
            { id: "fr-m1-c16", es: "¿cómo te llamas?", target: "comment tu t'appelles?", phon: "ko-man tü ta-PEL" },
            { id: "fr-m1-c17", es: "me llamo...", target: "je m'appelle...", phon: "shə ma-PEL" },
            { id: "fr-m1-c18", es: "mucho gusto", target: "enchanté(e)", phon: "an-shan-TÉ", note: "Doble nasal: «en» y «an» suenan igual." },
            { id: "fr-m1-c19", es: "¿hablas español?", target: "tu parles espagnol?", phon: "tü parl es-pa-ÑOL" },
            { id: "fr-m1-c20", es: "no entiendo", target: "je ne comprends pas", phon: "shə nə kon-pran PA" },
            { id: "fr-m1-c21", es: "¿puede repetir?", target: "vous pouvez répéter?", phon: "vu pu-vé re-pe-TÉ" },
            { id: "fr-m1-c22", es: "lo siento", target: "désolé(e)", phon: "de-zo-LÉ" },
            { id: "fr-m1-c23", es: "bienvenido/a", target: "bienvenue", phon: "bian-vən-Ü" },
            { id: "fr-m1-c24", es: "salud (al brindar)", target: "santé", phon: "san-TÉ" },
            { id: "fr-m1-c25", es: "buen provecho", target: "bon appétit", phon: "bo-na-pe-TÍ", note: "Casi reconocible desde el español." },
            { id: "fr-m1-c26", es: "agua", target: "eau", phon: "o", note: "Se escribe «eau» pero suena solo «o»." },
            { id: "fr-m1-c27", es: "café", target: "café", phon: "ka-FÉ", note: "Idéntico al español." },
            { id: "fr-m1-c28", es: "la cuenta, por favor", target: "l'addition, s'il vous plaît", phon: "la-di-SION sil vu PLÉ" },
            { id: "fr-m1-c29", es: "¿cuánto cuesta?", target: "combien ça coûte?", phon: "kon-BIAN sa KUT" },
            { id: "fr-m1-c30", es: "no hablo francés", target: "je ne parle pas français", phon: "shə nə parl pa fran-SÉ" },
            { id: "fr-m1-c31", es: "cero", target: "zéro", phon: "zé-RÓ" },
            { id: "fr-m1-c32", es: "uno", target: "un", phon: "an (nasal)" },
            { id: "fr-m1-c33", es: "dos", target: "deux", phon: "dö" },
            { id: "fr-m1-c34", es: "tres", target: "trois", phon: "truá" },
            { id: "fr-m1-c35", es: "cuatro", target: "quatre", phon: "KAT-rə" },
            { id: "fr-m1-c36", es: "cinco", target: "cinq", phon: "sank" },
            { id: "fr-m1-c37", es: "seis", target: "six", phon: "sis" },
            { id: "fr-m1-c38", es: "siete", target: "sept", phon: "set" },
            { id: "fr-m1-c39", es: "ocho", target: "huit", phon: "uít" },
            { id: "fr-m1-c40", es: "nueve", target: "neuf", phon: "nöf" },
            { id: "fr-m1-c41", es: "diez", target: "dix", phon: "dis" }
          ],
          dialogue: {
            title: "Au café",
            context: "Pides un café en París.",
            lines: [
              { who: "Serveur", target: "Bonjour ! Vous désirez ?", es: "¡Hola! ¿Qué desea?" },
              { who: "Vous", target: "Bonjour. Un café, s'il vous plaît.", es: "Hola. Un café, por favor." },
              { who: "Serveur", target: "Autre chose ?", es: "¿Algo más?" },
              { who: "Vous", target: "Non, merci. Combien ça coûte ?", es: "No, gracias. ¿Cuánto cuesta?" },
              { who: "Serveur", target: "Ça fait deux euros.", es: "Son dos euros." },
              { who: "Vous", target: "Merci ! Au revoir.", es: "¡Gracias! Adiós." }
            ],
            questions: [
              { q: "¿Qué pide el cliente?", options: ["Un thé", "Un café", "Une eau"], answer: 1 },
              { q: "¿Cuánto cuesta?", options: ["Un euro", "Dos euros", "Tres euros"], answer: 1 },
              { q: "¿Cómo se despide?", options: ["Bonsoir", "Au revoir", "À demain"], answer: 1 }
            ]
          },
          falseFriends: [
            { es: "embarazada", esMeaning: "encinta, esperando un bebé", target: "embarrassé(e)", targetMeaning: "avergonzado (embarazada se dice «enceinte»)" },
            { es: "constipado", esMeaning: "resfriado", target: "constipé(e)", targetMeaning: "¡estreñido! (resfriado se dice «enrhumé»)" },
            { es: "salir", esMeaning: "irse, salir de un lugar", target: "salir", targetMeaning: "ensuciar (irse se dice «sortir»)" },
            { es: "carta", esMeaning: "letter, misiva", target: "carte", targetMeaning: "mapa o menú (letter se dice «lettre»)" },
            { es: "atender", esMeaning: "to attend to, ocuparse de alguien", target: "attendre", targetMeaning: "esperar" }
          ],
          cloze: [
            { id: "fr-m1-cl1", before: "Je ne ", blank: "parle", after: " pas français.", es: "Yo no hablo francés.", mode: "select", options: ["parle", "suis", "vais", "sais"] },
            { id: "fr-m1-cl2", before: "", blank: "Merci", after: " pour votre aide.", es: "Gracias por su ayuda.", mode: "type" },
            { id: "fr-m1-cl3", before: "Comment ça ", blank: "va", after: " ?", es: "¿Cómo estás?", mode: "type" },
            { id: "fr-m1-cl4", before: "L'addition, s'il vous ", blank: "plaît", after: ".", es: "La cuenta, por favor.", mode: "select", options: ["plaît", "non", "bien", "trop"] }
          ]
        }
      ]
    },
    de: {
      code: "de",
      label: "Deutsch",
      country: "Alemania",
      flagShort: "DE",
      speechLang: "de-DE",
      speechFallback: "de",
      tagline: "El alemán de Alemania, desde cero",
      bridgeNote:
        "El alemán comparte menos vocabulario con el español que el portugués o el francés, así que el vocabulario " +
        "cuesta más al principio. A cambio, la pronunciación es muy regular — casi siempre se lee tal como se escribe. " +
        "El reto real está en los sustantivos con género y mayúscula, y en un orden de palabras distinto.",
      pronunciation: [
        { rule: "ch (tras a, o, u)", desc: "Sonido gutural, como una «j» española suave hecha en la garganta. «Buch» (libro) suena «buj»." },
        { rule: "ch (tras e, i, ä, ö, ü)", desc: "Sonido más suave, entre «sh» y «j», con la lengua adelante. «Ich» (yo) suena algo como «ish» dicho suave." },
        { rule: "ei", desc: "Se pronuncia «ai», nunca «ei» como en español. «Nein» (no) suena «náin»." },
        { rule: "ie", desc: "Se pronuncia «i» larga. «Sie» (usted/ella) suena «sí»." },
        { rule: "s antes de vocal", desc: "Suena como la «s» sonora inglesa (como una «z» suave). «Sie» empieza con ese sonido." },
        { rule: "z", desc: "Siempre suena «ts», nunca como en español. «Zeit» (tiempo) suena «tsáit»." },
        { rule: "v", desc: "Suena como «f». «Vater» (padre) suena «fáter»." },
        { rule: "w", desc: "Suena como la «v» española/inglesa. «Wasser» (agua) suena «váser»." },
        { rule: "sustantivos con mayúscula", desc: "Todos los sustantivos se escriben siempre con mayúscula inicial, en cualquier posición de la frase — no es un error, es la norma." }
      ],
      modules: [
        {
          id: "de-m1",
          num: 1,
          title: "Erste Schritte",
          subtitle: "Saludos, cortesía y números",
          cards: [
            { id: "de-m1-c01", es: "hola", target: "hallo", phon: "JÁ-lo" },
            { id: "de-m1-c02", es: "buenos días", target: "guten Morgen", phon: "GÚ-ten MOR-guen" },
            { id: "de-m1-c03", es: "buenas tardes", target: "guten Tag", phon: "GÚ-ten TAK", note: "Literalmente «buen día»; se usa durante todo el día, no solo por la tarde." },
            { id: "de-m1-c04", es: "buenas noches (al saludar)", target: "guten Abend", phon: "GÚ-ten Á-bent" },
            { id: "de-m1-c05", es: "buenas noches (al dormir)", target: "gute Nacht", phon: "GÚ-te NAJT" },
            { id: "de-m1-c06", es: "adiós", target: "auf Wiedersehen", phon: "auf VÍ-der-seen", note: "Formal. En el día a día se usa más «tschüss»." },
            { id: "de-m1-c07", es: "chao, nos vemos", target: "tschüss", phon: "chüs", note: "La forma informal más común de despedirse." },
            { id: "de-m1-c08", es: "por favor", target: "bitte", phon: "BÍ-te", note: "También sirve como «de nada» y como «aquí tienes»." },
            { id: "de-m1-c09", es: "gracias", target: "danke", phon: "DÁN-ke" },
            { id: "de-m1-c10", es: "muchas gracias", target: "danke schön", phon: "DÁN-ke shön" },
            { id: "de-m1-c11", es: "de nada", target: "bitte schön", phon: "BÍ-te shön" },
            { id: "de-m1-c12", es: "perdón, disculpe", target: "Entschuldigung", phon: "ent-SHUL-di-gung", note: "Palabra larga pero muy usada; también sirve para llamar la atención de alguien." },
            { id: "de-m1-c13", es: "sí", target: "ja", phon: "iá" },
            { id: "de-m1-c14", es: "no", target: "nein", phon: "náin" },
            { id: "de-m1-c15", es: "¿cómo estás?", target: "wie geht es dir?", phon: "vi guéit es dir", note: "Forma cercana (tú). Formal: «wie geht es Ihnen?»." },
            { id: "de-m1-c16", es: "bien, gracias", target: "gut, danke", phon: "gut, DÁN-ke" },
            { id: "de-m1-c17", es: "¿cómo te llamas?", target: "wie heißt du?", phon: "vi jáist du" },
            { id: "de-m1-c18", es: "me llamo...", target: "ich heiße...", phon: "ish JÁI-se" },
            { id: "de-m1-c19", es: "mucho gusto", target: "freut mich", phon: "fróit mish" },
            { id: "de-m1-c20", es: "¿hablas español?", target: "sprichst du Spanisch?", phon: "shprijst du SHPÁ-nish" },
            { id: "de-m1-c21", es: "no entiendo", target: "ich verstehe nicht", phon: "ish fer-SHTÉ-e nisht" },
            { id: "de-m1-c22", es: "¿puede repetir?", target: "können Sie das wiederholen?", phon: "KÖ-nen si das vi-der-JÓ-len" },
            { id: "de-m1-c23", es: "lo siento", target: "es tut mir leid", phon: "es tut mir láit" },
            { id: "de-m1-c24", es: "bienvenido/a", target: "willkommen", phon: "vil-KÓ-men" },
            { id: "de-m1-c25", es: "salud (al brindar)", target: "prost", phon: "prost" },
            { id: "de-m1-c26", es: "buen provecho", target: "guten Appetit", phon: "GÚ-ten a-pe-TIT" },
            { id: "de-m1-c27", es: "agua", target: "Wasser", phon: "VÁ-ser" },
            { id: "de-m1-c28", es: "café", target: "Kaffee", phon: "ka-FÉ" },
            { id: "de-m1-c29", es: "la cuenta, por favor", target: "die Rechnung, bitte", phon: "di REJ-nung, BÍ-te" },
            { id: "de-m1-c30", es: "¿cuánto cuesta?", target: "wie viel kostet das?", phon: "vi fil KÓS-tet das" },
            { id: "de-m1-c31", es: "no hablo alemán", target: "ich spreche kein Deutsch", phon: "ish SHPRÉ-je káin dóich" },
            { id: "de-m1-c32", es: "cero", target: "null", phon: "nul" },
            { id: "de-m1-c33", es: "uno", target: "eins", phon: "áins" },
            { id: "de-m1-c34", es: "dos", target: "zwei", phon: "tsváí" },
            { id: "de-m1-c35", es: "tres", target: "drei", phon: "dráí" },
            { id: "de-m1-c36", es: "cuatro", target: "vier", phon: "fir" },
            { id: "de-m1-c37", es: "cinco", target: "fünf", phon: "fünf" },
            { id: "de-m1-c38", es: "seis", target: "sechs", phon: "seks" },
            { id: "de-m1-c39", es: "siete", target: "sieben", phon: "SÍ-ben" },
            { id: "de-m1-c40", es: "ocho", target: "acht", phon: "ajt" },
            { id: "de-m1-c41", es: "nueve", target: "neun", phon: "nóin" },
            { id: "de-m1-c42", es: "diez", target: "zehn", phon: "tsen" }
          ],
          dialogue: {
            title: "Im Café",
            context: "Pides un café en Berlín.",
            lines: [
              { who: "Kellner", target: "Guten Tag! Was möchten Sie?", es: "Buenos días. ¿Qué desea?" },
              { who: "Sie", target: "Guten Tag. Einen Kaffee, bitte.", es: "Buenos días. Un café, por favor." },
              { who: "Kellner", target: "Sonst noch etwas?", es: "¿Algo más?" },
              { who: "Sie", target: "Nein, danke. Wie viel kostet das?", es: "No, gracias. ¿Cuánto cuesta?" },
              { who: "Kellner", target: "Das macht zwei Euro.", es: "Son dos euros." },
              { who: "Sie", target: "Danke! Auf Wiedersehen.", es: "¡Gracias! Adiós." }
            ],
            questions: [
              { q: "¿Qué pide el cliente?", options: ["Un té", "Un café", "Un agua"], answer: 1 },
              { q: "¿Cuánto cuesta?", options: ["Un euro", "Dos euros", "Tres euros"], answer: 1 },
              { q: "¿Cómo se despide?", options: ["Tschüss", "Auf Wiedersehen", "Gute Nacht"], answer: 1 }
            ]
          },
          falseFriends: [
            { es: "el mapa", esMeaning: "map, plano de un lugar", target: "die Mappe", targetMeaning: "carpeta de documentos (mapa se dice «die Karte»)" },
            { es: "el gift", esMeaning: "no existe en español, pero suena a «regalo» en inglés", target: "das Gift", targetMeaning: "¡veneno! (regalo se dice «das Geschenk»)" },
            { es: "el chef", esMeaning: "cocinero jefe", target: "der Chef", targetMeaning: "jefe de trabajo en general, no necesariamente cocinero" },
            { es: "el bald", esMeaning: "no existe en español, suena a «calvo» en inglés", target: "bald", targetMeaning: "¡pronto! (calvo se dice «kahl»)" },
            { es: "sensible", esMeaning: "que se emociona con facilidad", target: "sensibel", targetMeaning: "sí coincide, pero cuidado: «sensato» se dice «vernünftig», no «sensibel»" }
          ],
          cloze: [
            { id: "de-m1-cl1", before: "Ich ", blank: "spreche", after: " kein Deutsch.", es: "Yo no hablo alemán.", mode: "select", options: ["spreche", "bin", "habe", "gehe"] },
            { id: "de-m1-cl2", before: "", blank: "Danke", after: " schön für Ihre Hilfe.", es: "Muchas gracias por su ayuda.", mode: "type" },
            { id: "de-m1-cl3", before: "Wie ", blank: "geht", after: " es dir?", es: "¿Cómo estás?", mode: "type" },
            { id: "de-m1-cl4", before: "Die Rechnung, ", blank: "bitte", after: ".", es: "La cuenta, por favor.", mode: "select", options: ["bitte", "nein", "gut", "sehr"] }
          ]
        }
      ]
    }
  }
};
