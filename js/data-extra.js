/* Bitácora — Módulos 2 a 5.
   Situaciones cotidianas reales, dificultad creciente. Contenido
   original (diálogos y frases propios); el vocabulario se apoya en
   las listas de frecuencia abiertas descritas en CREDITS.md. */

(function () {
  const pt = BITACORA_DATA.langs.pt.modules;
  const fr = BITACORA_DATA.langs.fr.modules;
  const de = BITACORA_DATA.langs.de.modules;

  /* ============================================================ */
  /* MÓDULO 2 — Coger el transporte                                */
  /* ============================================================ */
  pt.push({
    id: "pt-m2", num: 2, title: "Apanhar o autocarro", subtitle: "Transporte público",
    cards: [
      { id: "pt-m2-c01", es: "el autobús", target: "o autocarro", phon: "ow-tu-KA-rru", note: "En Brasil dicen «ônibus»; en Portugal siempre «autocarro»." },
      { id: "pt-m2-c02", es: "la parada", target: "a paragem", phon: "pa-RA-jãi" },
      { id: "pt-m2-c03", es: "el billete", target: "o bilhete", phon: "bi-LYE-te" },
      { id: "pt-m2-c04", es: "el metro", target: "o metro", phon: "ME-tru" },
      { id: "pt-m2-c05", es: "la estación", target: "a estação", phon: "esh-ta-SÃU" },
      { id: "pt-m2-c06", es: "¿dónde está la parada?", target: "onde fica a paragem?", phon: "ON-de FI-ka a pa-RA-jãi" },
      { id: "pt-m2-c07", es: "¿este autobús va a...?", target: "este autocarro vai para...?", phon: "ESH-te ow-tu-KA-rru vai pa-ra" },
      { id: "pt-m2-c08", es: "quiero ir a...", target: "queria ir a...", phon: "ke-RI-a ir a" },
      { id: "pt-m2-c09", es: "¿cuánto cuesta el billete?", target: "quanto custa o bilhete?", phon: "KUAN-tu KUS-ta u bi-LYE-te" },
      { id: "pt-m2-c10", es: "un billete, por favor", target: "um bilhete, por favor", phon: "ũ bi-LYE-te pur fa-VOR" },
      { id: "pt-m2-c11", es: "¿a qué hora sale?", target: "a que horas parte?", phon: "a ke O-ras PAR-te" },
      { id: "pt-m2-c12", es: "¿a qué hora llega?", target: "a que horas chega?", phon: "a ke O-ras SHE-ga" },
      { id: "pt-m2-c13", es: "próxima parada", target: "próxima paragem", phon: "PRO-si-ma pa-RA-jãi" },
      { id: "pt-m2-c14", es: "¿está libre este asiento?", target: "este lugar está livre?", phon: "ESH-te lu-GAR shta LI-vre" },
      { id: "pt-m2-c15", es: "con permiso", target: "com licença", phon: "kon li-SEN-sa" },
      { id: "pt-m2-c16", es: "bajarse", target: "descer", phon: "desh-SER" },
      { id: "pt-m2-c17", es: "subir", target: "subir", phon: "su-BIR", note: "Se escribe igual que en español." },
      { id: "pt-m2-c18", es: "está lejos", target: "é longe", phon: "e LON-je" },
      { id: "pt-m2-c19", es: "está cerca", target: "é perto", phon: "e PER-tu" },
      { id: "pt-m2-c20", es: "todo recto", target: "sempre em frente", phon: "SEN-pre ãi FREN-te" },
      { id: "pt-m2-c21", es: "tarjeta de transporte", target: "passe", phon: "PA-se", note: "En Lisboa, la tarjeta recargable se llama «Viva Viagem»." },
      { id: "pt-m2-c22", es: "ida y vuelta", target: "ida e volta", phon: "I-da i VOL-ta" }
    ],
    dialogue: {
      title: "Na paragem de autocarro", context: "Preguntas si el autobús va al centro y compras el billete.",
      lines: [
        { who: "Ana", target: "Desculpe, este autocarro vai para o centro?", es: "Disculpe, ¿este autobús va al centro?" },
        { who: "Motorista", target: "Vai. São dois euros, se faz favor.", es: "Sí. Son dos euros, por favor." },
        { who: "Ana", target: "Aqui tem. A que paragem devo descer para a estação?", es: "Aquí tiene. ¿En qué parada debo bajar para la estación?" },
        { who: "Motorista", target: "É a quarta paragem, eu aviso.", es: "Es la cuarta parada, yo le aviso." },
        { who: "Ana", target: "Muito obrigada.", es: "Muchas gracias." },
        { who: "Motorista", target: "Próxima paragem, já é a sua.", es: "Próxima parada, ya es la suya." },
        { who: "Ana", target: "Com licença, vou sair aqui.", es: "Con permiso, voy a bajar aquí." }
      ],
      questions: [
        { q: "¿Cuánto pagó Ana por el billete?", options: ["Un euro", "Dos euros", "Tres euros"], answer: 1 },
        { q: "¿A dónde va Ana?", options: ["Al aeropuerto", "Al centro", "A la playa"], answer: 1 },
        { q: "¿Cómo sabe en qué parada bajar?", options: ["Lo ve en un mapa", "El conductor le avisa", "Pregunta a otro pasajero"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m2-cl1", before: "Desculpe, este autocarro ", blank: "vai", after: " para o centro?", es: "Disculpe, ¿este autobús va al centro?", mode: "select", options: ["vai", "vou", "vais", "vamos"] },
      { id: "pt-m2-cl2", before: "Quanto ", blank: "custa", after: " o bilhete?", es: "¿Cuánto cuesta el billete?", mode: "type" },
      { id: "pt-m2-cl3", before: "A estação é muito ", blank: "perto", after: " daqui.", es: "La estación está muy cerca de aquí.", mode: "select", options: ["perto", "longe", "grande", "cedo"] },
      { id: "pt-m2-cl4", before: "Com licença, vou ", blank: "sair", after: " aqui.", es: "Con permiso, voy a bajarme aquí.", mode: "type" }
    ],
    falseFriends: [
      { es: "vaso", esMeaning: "drinking glass", target: "vaso", targetMeaning: "maceta (vaso sanitário = taza del váter); vaso para beber es «copo»" },
      { es: "taza", esMeaning: "cup", target: "taça", targetMeaning: "copa de trofeo o de vino; la taza de café es «chávena»" },
      { es: "borracha", esMeaning: "mujer borracha", target: "borracha", targetMeaning: "¡goma de borrar!" },
      { es: "rato", esMeaning: "un momento («un rato»)", target: "rato", targetMeaning: "¡el animal, ratón!" }
    ]
  });

  fr.push({
    id: "fr-m2", num: 2, title: "Prendre le bus", subtitle: "Transporte público",
    cards: [
      { id: "fr-m2-c01", es: "el autobús", target: "le bus", phon: "lə büs" },
      { id: "fr-m2-c02", es: "la parada", target: "l'arrêt", phon: "la-RÉ" },
      { id: "fr-m2-c03", es: "el billete", target: "le ticket", phon: "lə ti-KÉ" },
      { id: "fr-m2-c04", es: "el metro", target: "le métro", phon: "lə mé-TRO" },
      { id: "fr-m2-c05", es: "la estación", target: "la gare", phon: "la GAR", note: "«la gare» es de tren; la de metro es «la station»." },
      { id: "fr-m2-c06", es: "¿dónde está la parada?", target: "où est l'arrêt ?", phon: "u é la-RÉ" },
      { id: "fr-m2-c07", es: "¿este autobús va a...?", target: "ce bus va à... ?", phon: "sə büs va a" },
      { id: "fr-m2-c08", es: "quiero ir a...", target: "je voudrais aller à...", phon: "shə vu-DRÉ a-LÉ a" },
      { id: "fr-m2-c09", es: "¿cuánto cuesta el billete?", target: "combien coûte le ticket ?", phon: "kon-BIAN kut lə ti-KÉ" },
      { id: "fr-m2-c10", es: "un billete, por favor", target: "un ticket, s'il vous plaît", phon: "an ti-KÉ sil vu plé" },
      { id: "fr-m2-c11", es: "¿a qué hora sale?", target: "à quelle heure part-il ?", phon: "a kel ör par-TIL" },
      { id: "fr-m2-c12", es: "¿a qué hora llega?", target: "à quelle heure arrive-t-il ?", phon: "a kel ör a-RIV-til" },
      { id: "fr-m2-c13", es: "próxima parada", target: "prochain arrêt", phon: "pro-SHAN a-RÉ" },
      { id: "fr-m2-c14", es: "¿está libre este asiento?", target: "cette place est libre ?", phon: "set plas é LI-brə" },
      { id: "fr-m2-c15", es: "con permiso", target: "pardon", phon: "par-DON" },
      { id: "fr-m2-c16", es: "bajarse", target: "descendre", phon: "de-SAN-drə" },
      { id: "fr-m2-c17", es: "subir", target: "monter", phon: "mon-TÉ" },
      { id: "fr-m2-c18", es: "está lejos", target: "c'est loin", phon: "sé lwan" },
      { id: "fr-m2-c19", es: "está cerca", target: "c'est près", phon: "sé pré" },
      { id: "fr-m2-c20", es: "todo recto", target: "tout droit", phon: "tu drua" },
      { id: "fr-m2-c21", es: "tarjeta de transporte", target: "le pass Navigo", phon: "lə pas na-vi-GO", note: "Es el nombre propio de la tarjeta de transporte de París." },
      { id: "fr-m2-c22", es: "ida y vuelta", target: "aller-retour", phon: "a-lé-rə-TUR" }
    ],
    dialogue: {
      title: "À l'arrêt de bus", context: "Preguntas si el autobús va al centro y compras el billete.",
      lines: [
        { who: "Ana", target: "Excusez-moi, ce bus va au centre-ville ?", es: "Disculpe, ¿este autobús va al centro?" },
        { who: "Chauffeur", target: "Oui. Ça fait deux euros, s'il vous plaît.", es: "Sí. Son dos euros, por favor." },
        { who: "Ana", target: "Voilà. À quel arrêt je descends pour la gare ?", es: "Aquí tiene. ¿En qué parada bajo para la estación?" },
        { who: "Chauffeur", target: "C'est le quatrième arrêt, je vous préviens.", es: "Es la cuarta parada, yo le aviso." },
        { who: "Ana", target: "Merci beaucoup.", es: "Muchas gracias." },
        { who: "Chauffeur", target: "Prochain arrêt, c'est le vôtre.", es: "Próxima parada, es la suya." },
        { who: "Ana", target: "Pardon, je descends ici.", es: "Con permiso, bajo aquí." }
      ],
      questions: [
        { q: "¿Cuánto pagó Ana por el billete?", options: ["Un euro", "Dos euros", "Tres euros"], answer: 1 },
        { q: "¿A dónde va Ana?", options: ["Al aeropuerto", "Al centro", "A la playa"], answer: 1 },
        { q: "¿Cómo sabe en qué parada bajar?", options: ["Lo ve en un mapa", "El conductor le avisa", "Pregunta a otro pasajero"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m2-cl1", before: "Excusez-moi, ce bus ", blank: "va", after: " au centre-ville ?", es: "Disculpe, ¿este autobús va al centro?", mode: "select", options: ["va", "vais", "vas", "vont"] },
      { id: "fr-m2-cl2", before: "Combien ", blank: "coûte", after: " le ticket ?", es: "¿Cuánto cuesta el billete?", mode: "type" },
      { id: "fr-m2-cl3", before: "La gare est très ", blank: "près", after: " d'ici.", es: "La estación está muy cerca de aquí.", mode: "select", options: ["près", "loin", "grande", "tôt"] },
      { id: "fr-m2-cl4", before: "Pardon, je ", blank: "descends", after: " ici.", es: "Con permiso, bajo aquí.", mode: "type" }
    ],
    falseFriends: [
      { es: "vaso", esMeaning: "vaso para beber", target: "vase", targetMeaning: "¡jarrón para flores! Vaso para beber es «verre»" },
      { es: "nombre", esMeaning: "name", target: "nombre", targetMeaning: "¡número! El nombre de alguien es «nom»" },
      { es: "largo", esMeaning: "long", target: "large", targetMeaning: "ancho, no largo (long en francés sí es «long»)" },
      { es: "quitar", esMeaning: "to remove", target: "quitter", targetMeaning: "dejar/abandonar (marcharse); quitar algo es «enlever»" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 3 — Preguntar direcciones                              */
  /* ============================================================ */
  pt.push({
    id: "pt-m3", num: 3, title: "Perguntar o caminho", subtitle: "Orientarse en la calle",
    cards: [
      { id: "pt-m3-c01", es: "la calle", target: "a rua", phon: "RRU-a" },
      { id: "pt-m3-c02", es: "la plaza", target: "a praça", phon: "PRA-sa" },
      { id: "pt-m3-c03", es: "el semáforo", target: "o semáforo", phon: "se-MA-fu-ru", note: "Cognado casi idéntico." },
      { id: "pt-m3-c04", es: "la esquina", target: "a esquina", phon: "esh-KI-na" },
      { id: "pt-m3-c05", es: "girar a la derecha", target: "virar à direita", phon: "vi-RAR a di-RAI-ta" },
      { id: "pt-m3-c06", es: "girar a la izquierda", target: "virar à esquerda", phon: "vi-RAR a esh-KER-da" },
      { id: "pt-m3-c07", es: "seguir recto", target: "seguir em frente", phon: "se-GHIR ãi FREN-te" },
      { id: "pt-m3-c08", es: "cruzar", target: "atravessar", phon: "a-tra-ve-SAR" },
      { id: "pt-m3-c09", es: "el puente", target: "a ponte", phon: "PON-te" },
      { id: "pt-m3-c10", es: "¿cómo llego a...?", target: "como chego a...?", phon: "KO-mu SHE-gu a" },
      { id: "pt-m3-c11", es: "está a dos calles", target: "fica a duas ruas", phon: "FI-ka a DU-as RRU-as" },
      { id: "pt-m3-c12", es: "al final de la calle", target: "ao fundo da rua", phon: "ow FUN-du da RRU-a" },
      { id: "pt-m3-c13", es: "en frente de", target: "em frente de", phon: "ãi FREN-te de" },
      { id: "pt-m3-c14", es: "al lado de", target: "ao lado de", phon: "ow LA-du de" },
      { id: "pt-m3-c15", es: "detrás de", target: "atrás de", phon: "a-TRASH de" },
      { id: "pt-m3-c16", es: "cerca de aquí", target: "perto daqui", phon: "PER-tu da-KI" },
      { id: "pt-m3-c17", es: "¿me puede indicar el camino?", target: "pode indicar-me o caminho?", phon: "PO-de in-di-KAR-me u ka-MI-ñu" },
      { id: "pt-m3-c18", es: "estoy perdido/a", target: "estou perdido/a", phon: "shtoh per-DI-du" },
      { id: "pt-m3-c19", es: "el mapa", target: "o mapa", phon: "MA-pa" },
      { id: "pt-m3-c20", es: "la rotonda", target: "a rotunda", phon: "rru-TUN-da" }
    ],
    dialogue: {
      title: "Perguntar o caminho", context: "Un turista pregunta cómo llegar al museo.",
      lines: [
        { who: "Turista", target: "Desculpe, sabe como chego ao museu?", es: "Disculpe, ¿sabe cómo llego al museo?" },
        { who: "Local", target: "Sei sim. Siga sempre em frente até ao semáforo.", es: "Sí. Siga siempre recto hasta el semáforo." },
        { who: "Turista", target: "E depois do semáforo?", es: "¿Y después del semáforo?" },
        { who: "Local", target: "Vire à direita e atravesse a ponte. O museu fica ao lado da praça.", es: "Gire a la derecha y cruce el puente. El museo está al lado de la plaza." },
        { who: "Turista", target: "Fica muito longe?", es: "¿Está muy lejos?" },
        { who: "Local", target: "Não, fica a uns dez minutos a pé.", es: "No, está a unos diez minutos a pie." },
        { who: "Turista", target: "Muito obrigado pela ajuda!", es: "¡Muchas gracias por la ayuda!" },
        { who: "Local", target: "De nada, boa visita!", es: "De nada, ¡buena visita!" }
      ],
      questions: [
        { q: "¿A dónde quiere ir el turista?", options: ["Al museo", "A la playa", "Al hotel"], answer: 0 },
        { q: "¿Qué debe cruzar?", options: ["Una plaza", "Un puente", "Una rotonda"], answer: 1 },
        { q: "¿A qué distancia está caminando?", options: ["5 minutos", "10 minutos", "30 minutos"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m3-cl1", before: "Siga sempre em ", blank: "frente", after: " até ao semáforo.", es: "Siga siempre recto hasta el semáforo.", mode: "select", options: ["frente", "trás", "cima", "baixo"] },
      { id: "pt-m3-cl2", before: "O museu fica ao ", blank: "lado", after: " da praça.", es: "El museo está al lado de la plaza.", mode: "type" },
      { id: "pt-m3-cl3", before: "Desculpe, estou ", blank: "perdido", after: ".", es: "Disculpe, estoy perdido.", mode: "type" },
      { id: "pt-m3-cl4", before: "Vire à ", blank: "direita", after: " na próxima esquina.", es: "Gire a la derecha en la próxima esquina.", mode: "select", options: ["direita", "esquerda", "frente", "trás"] }
    ],
    falseFriends: [
      { es: "apellido", esMeaning: "surname", target: "apelido", targetMeaning: "¡apodo/mote! El apellido se dice «sobrenome»" },
      { es: "extrañar", esMeaning: "echar de menos", target: "estranhar", targetMeaning: "encontrar raro/extraño; echar de menos es «ter saudades»" },
      { es: "novela", esMeaning: "novel/libro", target: "novela", targetMeaning: "¡serie de televisión, telenovela! Libro es «romance»" }
    ]
  });

  fr.push({
    id: "fr-m3", num: 3, title: "Demander son chemin", subtitle: "Orientarse en la calle",
    cards: [
      { id: "fr-m3-c01", es: "la calle", target: "la rue", phon: "la rü" },
      { id: "fr-m3-c02", es: "la plaza", target: "la place", phon: "la plas" },
      { id: "fr-m3-c03", es: "el semáforo", target: "le feu", phon: "lə fö" },
      { id: "fr-m3-c04", es: "la esquina", target: "le coin (de la rue)", phon: "lə kwan" },
      { id: "fr-m3-c05", es: "girar a la derecha", target: "tourner à droite", phon: "tur-NÉ a druat" },
      { id: "fr-m3-c06", es: "girar a la izquierda", target: "tourner à gauche", phon: "tur-NÉ a gosh" },
      { id: "fr-m3-c07", es: "seguir recto", target: "continuer tout droit", phon: "kon-ti-nü-É tu drua" },
      { id: "fr-m3-c08", es: "cruzar", target: "traverser", phon: "tra-vér-SÉ" },
      { id: "fr-m3-c09", es: "el puente", target: "le pont", phon: "lə pon" },
      { id: "fr-m3-c10", es: "¿cómo llego a...?", target: "comment je vais à... ?", phon: "ko-MAN shə vé a" },
      { id: "fr-m3-c11", es: "está a dos calles", target: "c'est à deux rues", phon: "sé a dö rü" },
      { id: "fr-m3-c12", es: "al final de la calle", target: "au bout de la rue", phon: "o bu də la rü" },
      { id: "fr-m3-c13", es: "en frente de", target: "en face de", phon: "an fas də" },
      { id: "fr-m3-c14", es: "al lado de", target: "à côté de", phon: "a ko-TÉ də" },
      { id: "fr-m3-c15", es: "detrás de", target: "derrière", phon: "de-RIÉR" },
      { id: "fr-m3-c16", es: "cerca de aquí", target: "près d'ici", phon: "pré di-SI" },
      { id: "fr-m3-c17", es: "¿me puede indicar el camino?", target: "pouvez-vous m'indiquer le chemin ?", phon: "pu-vé vu man-di-KÉ lə shə-MAN" },
      { id: "fr-m3-c18", es: "estoy perdido/a", target: "je suis perdu(e)", phon: "shə süi pér-DÜ" },
      { id: "fr-m3-c19", es: "el mapa", target: "le plan", phon: "lə plan" },
      { id: "fr-m3-c20", es: "la rotonda", target: "le rond-point", phon: "lə ron-PWAN" }
    ],
    dialogue: {
      title: "Demander son chemin", context: "Un turista pregunta cómo llegar al museo.",
      lines: [
        { who: "Touriste", target: "Excusez-moi, savez-vous comment aller au musée ?", es: "Disculpe, ¿sabe cómo llegar al museo?" },
        { who: "Habitant", target: "Oui. Continuez tout droit jusqu'au feu.", es: "Sí. Siga recto hasta el semáforo." },
        { who: "Touriste", target: "Et après le feu ?", es: "¿Y después del semáforo?" },
        { who: "Habitant", target: "Tournez à droite et traversez le pont. Le musée est à côté de la place.", es: "Gire a la derecha y cruce el puente. El museo está al lado de la plaza." },
        { who: "Touriste", target: "C'est très loin ?", es: "¿Está muy lejos?" },
        { who: "Habitant", target: "Non, c'est à dix minutes à pied.", es: "No, está a unos diez minutos a pie." },
        { who: "Touriste", target: "Merci beaucoup pour votre aide !", es: "¡Muchas gracias por su ayuda!" },
        { who: "Habitant", target: "De rien, bonne visite !", es: "De nada, ¡buena visita!" }
      ],
      questions: [
        { q: "¿A dónde quiere ir el turista?", options: ["Al museo", "A la playa", "Al hotel"], answer: 0 },
        { q: "¿Qué debe cruzar?", options: ["Una plaza", "Un puente", "Una rotonda"], answer: 1 },
        { q: "¿A qué distancia está caminando?", options: ["5 minutos", "10 minutos", "30 minutos"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m3-cl1", before: "Continuez tout ", blank: "droit", after: " jusqu'au feu.", es: "Siga siempre recto hasta el semáforo.", mode: "select", options: ["droit", "gauche", "haut", "bas"] },
      { id: "fr-m3-cl2", before: "Le musée est à ", blank: "côté", after: " de la place.", es: "El museo está al lado de la plaza.", mode: "type" },
      { id: "fr-m3-cl3", before: "Excusez-moi, je suis ", blank: "perdu", after: ".", es: "Disculpe, estoy perdido.", mode: "type" },
      { id: "fr-m3-cl4", before: "Tournez à ", blank: "droite", after: " au prochain coin.", es: "Gire a la derecha en la próxima esquina.", mode: "select", options: ["droite", "gauche", "face", "derrière"] }
    ],
    falseFriends: [
      { es: "pastel", esMeaning: "tarta/dulce", target: "pastel", targetMeaning: "el material de dibujo (tiza pastel); tarta es «gâteau»" },
      { es: "colegio", esMeaning: "escuela (todas las edades)", target: "collège", targetMeaning: "solo instituto de 11 a 15 años (école → collège → lycée)" },
      { es: "novela", esMeaning: "novela/libro", target: "nouvelle", targetMeaning: "cuento corto, o «las noticias» (les nouvelles); novela es «roman»" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 4 — Conocer gente                                      */
  /* ============================================================ */
  pt.push({
    id: "pt-m4", num: 4, title: "Conhecer pessoas", subtitle: "Charla informal, un poco más compleja",
    cards: [
      { id: "pt-m4-c01", es: "¿de dónde eres?", target: "de onde és?", phon: "de ON-de esh" },
      { id: "pt-m4-c02", es: "soy de España", target: "sou de Espanha", phon: "so de esh-PA-ña" },
      { id: "pt-m4-c03", es: "¿a qué te dedicas?", target: "em que trabalhas?", phon: "ãi ke tra-BA-lyash" },
      { id: "pt-m4-c04", es: "trabajo como...", target: "trabalho como...", phon: "tra-BA-lyu KO-mu" },
      { id: "pt-m4-c05", es: "estudio...", target: "estudo...", phon: "shTU-du" },
      { id: "pt-m4-c06", es: "¿cuántos años tienes?", target: "quantos anos tens?", phon: "KUAN-tush A-nush tãish" },
      { id: "pt-m4-c07", es: "tengo... años", target: "tenho... anos", phon: "TA-ño A-nush" },
      { id: "pt-m4-c08", es: "¿estás casado/a?", target: "és casado/a?", phon: "esh ka-ZA-du" },
      { id: "pt-m4-c09", es: "tengo pareja", target: "tenho namorado/a", phon: "TA-ño na-mu-RA-du" },
      { id: "pt-m4-c10", es: "¿tienes hijos?", target: "tens filhos?", phon: "tãish FI-lyush" },
      { id: "pt-m4-c11", es: "me gusta...", target: "gosto de...", phon: "GOSH-tu de" },
      { id: "pt-m4-c12", es: "no me gusta...", target: "não gosto de...", phon: "nãu GOSH-tu de" },
      { id: "pt-m4-c13", es: "¿qué te gusta hacer?", target: "o que gostas de fazer?", phon: "u ke GOSH-tash de fa-ZER" },
      { id: "pt-m4-c14", es: "en mi tiempo libre", target: "nos meus tempos livres", phon: "nush MEH-ush TEN-push LI-vresh" },
      { id: "pt-m4-c15", es: "¿podemos quedar?", target: "podemos combinar?", phon: "pu-DE-mush kon-bi-NAR" },
      { id: "pt-m4-c16", es: "¿me das tu número?", target: "dás-me o teu número?", phon: "DASH-me u teh-oo NU-me-ru" },
      { id: "pt-m4-c17", es: "fue un placer conocerte", target: "foi um prazer conhecer-te", phon: "foi ũ pra-ZER kuñe-SER-te" },
      { id: "pt-m4-c18", es: "mantente en contacto", target: "mantém-te em contacto", phon: "man-TÃI-te ãi kon-TA-tu" },
      { id: "pt-m4-c19", es: "nos vemos pronto", target: "vemo-nos em breve", phon: "VE-mu-nush ãi BRE-ve" },
      { id: "pt-m4-c20", es: "interesante", target: "interessante", phon: "in-te-re-SAN-te" }
    ],
    dialogue: {
      title: "Conhecer alguém numa festa", context: "Dos personas se conocen en una fiesta y hablan de su vida.",
      lines: [
        { who: "Miguel", target: "Olá! Não te conheço, és nova por aqui?", es: "¡Hola! No te conozco, ¿eres nueva por aquí?" },
        { who: "Sofia", target: "Olá! Sim, mudei-me há um mês. Chamo-me Sofia.", es: "¡Hola! Sí, me mudé hace un mes. Me llamo Sofía." },
        { who: "Miguel", target: "Prazer, Sofia. Eu sou o Miguel. De onde és?", es: "Un placer, Sofía. Yo soy Miguel. ¿De dónde eres?" },
        { who: "Sofia", target: "Sou de Espanha, de Sevilha. E tu?", es: "Soy de España, de Sevilla. ¿Y tú?" },
        { who: "Miguel", target: "Sou de Lisboa. Em que trabalhas?", es: "Soy de Lisboa. ¿En qué trabajas?" },
        { who: "Sofia", target: "Trabalho como professora. E tu, o que fazes?", es: "Trabajo como profesora. ¿Y tú, a qué te dedicas?" },
        { who: "Miguel", target: "Sou engenheiro. O que gostas de fazer nos tempos livres?", es: "Soy ingeniero. ¿Qué te gusta hacer en tu tiempo libre?" },
        { who: "Sofia", target: "Gosto muito de dançar e de ler. E tu?", es: "Me gusta mucho bailar y leer. ¿Y tú?" },
        { who: "Miguel", target: "Gosto de surfar! Podemos combinar um café um dia destes?", es: "¡Me gusta hacer surf! ¿Podemos quedar para un café un día de estos?" },
        { who: "Sofia", target: "Claro, dá-me o teu número.", es: "Claro, dame tu número." }
      ],
      questions: [
        { q: "¿De dónde es Sofía?", options: ["Lisboa", "Sevilla", "Oporto"], answer: 1 },
        { q: "¿A qué se dedica Miguel?", options: ["Profesor", "Ingeniero", "Médico"], answer: 1 },
        { q: "¿Qué le gusta hacer a Sofía?", options: ["Surfear", "Bailar y leer", "Cocinar"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m4-cl1", before: "Eu não te ", blank: "conheço", after: ", és nova por aqui?", es: "No te conozco, ¿eres nueva por aquí?", mode: "type" },
      { id: "pt-m4-cl2", before: "Gosto ", blank: "muito", after: " de dançar.", es: "Me gusta mucho bailar.", mode: "select", options: ["muito", "pouco", "nada", "mal"] },
      { id: "pt-m4-cl3", before: "Podemos ", blank: "combinar", after: " um café?", es: "¿Podemos quedar para un café?", mode: "type" },
      { id: "pt-m4-cl4", before: "Foi um ", blank: "prazer", after: " conhecer-te.", es: "Fue un placer conocerte.", mode: "select", options: ["prazer", "problema", "erro", "medo"] }
    ],
    falseFriends: [
      { es: "presunto", esMeaning: "alegado (presunto culpable)", target: "presunto", targetMeaning: "¡jamón!" },
      { es: "exquisito", esMeaning: "delicioso", target: "esquisito", targetMeaning: "raro, extraño" },
      { es: "propina", esMeaning: "tip, gratuidad", target: "propina", targetMeaning: "matrícula universitaria; la propina es «gorjeta»" },
      { es: "escoba", esMeaning: "broom", target: "escova", targetMeaning: "cepillo (escova de dentes); la escoba es «vassoura»" }
    ]
  });

  fr.push({
    id: "fr-m4", num: 4, title: "Rencontrer des gens", subtitle: "Charla informal, un poco más compleja",
    cards: [
      { id: "fr-m4-c01", es: "¿de dónde eres?", target: "tu viens d'où ?", phon: "tü vian du" },
      { id: "fr-m4-c02", es: "soy de España", target: "je viens d'Espagne", phon: "shə vian des-PAÑ" },
      { id: "fr-m4-c03", es: "¿a qué te dedicas?", target: "tu fais quoi dans la vie ?", phon: "tü fé kua dan la vi" },
      { id: "fr-m4-c04", es: "trabajo como...", target: "je travaille comme...", phon: "shə tra-VAI kom" },
      { id: "fr-m4-c05", es: "estudio...", target: "j'étudie...", phon: "shé-tü-DI" },
      { id: "fr-m4-c06", es: "¿cuántos años tienes?", target: "tu as quel âge ?", phon: "tü a kel ash" },
      { id: "fr-m4-c07", es: "tengo... años", target: "j'ai... ans", phon: "shé an" },
      { id: "fr-m4-c08", es: "¿estás casado/a?", target: "tu es marié(e) ?", phon: "tü é ma-RIÉ" },
      { id: "fr-m4-c09", es: "tengo pareja", target: "j'ai un copain / une copine", phon: "shé an ko-PAN" },
      { id: "fr-m4-c10", es: "¿tienes hijos?", target: "tu as des enfants ?", phon: "tü a dé zan-FAN" },
      { id: "fr-m4-c11", es: "me gusta...", target: "j'aime...", phon: "shém" },
      { id: "fr-m4-c12", es: "no me gusta...", target: "je n'aime pas...", phon: "shə nem pa" },
      { id: "fr-m4-c13", es: "¿qué te gusta hacer?", target: "qu'est-ce que tu aimes faire ?", phon: "kes kə tü em fér" },
      { id: "fr-m4-c14", es: "en mi tiempo libre", target: "pendant mon temps libre", phon: "pan-DAN mon tan LI-brə" },
      { id: "fr-m4-c15", es: "¿podemos quedar?", target: "on peut se voir ?", phon: "on pö sə vuar" },
      { id: "fr-m4-c16", es: "¿me das tu número?", target: "tu me donnes ton numéro ?", phon: "tü mə don ton nü-mé-RO" },
      { id: "fr-m4-c17", es: "fue un placer conocerte", target: "ravi(e) de t'avoir rencontré(e)", phon: "ra-VI də ta-vuar ran-kon-TRÉ" },
      { id: "fr-m4-c18", es: "mantente en contacto", target: "reste en contact", phon: "rest an kon-TAKT" },
      { id: "fr-m4-c19", es: "nos vemos pronto", target: "à bientôt", phon: "a bian-TÓ" },
      { id: "fr-m4-c20", es: "interesante", target: "intéressant(e)", phon: "an-té-ré-SAN" }
    ],
    dialogue: {
      title: "Rencontrer quelqu'un à une fête", context: "Dos personas se conocen en una fiesta y hablan de su vida.",
      lines: [
        { who: "Miguel", target: "Salut ! Je ne te connais pas, tu es nouvelle ici ?", es: "¡Hola! No te conozco, ¿eres nueva aquí?" },
        { who: "Sofia", target: "Salut ! Oui, j'ai déménagé il y a un mois. Je m'appelle Sofia.", es: "¡Hola! Sí, me mudé hace un mes. Me llamo Sofía." },
        { who: "Miguel", target: "Enchanté, Sofia. Moi c'est Miguel. Tu viens d'où ?", es: "Encantado, Sofía. Yo soy Miguel. ¿De dónde eres?" },
        { who: "Sofia", target: "Je viens d'Espagne, de Séville. Et toi ?", es: "Soy de España, de Sevilla. ¿Y tú?" },
        { who: "Miguel", target: "Je suis de Paris. Tu fais quoi dans la vie ?", es: "Soy de París. ¿A qué te dedicas?" },
        { who: "Sofia", target: "Je travaille comme professeure. Et toi ?", es: "Trabajo como profesora. ¿Y tú?" },
        { who: "Miguel", target: "Je suis ingénieur. Qu'est-ce que tu aimes faire pendant ton temps libre ?", es: "Soy ingeniero. ¿Qué te gusta hacer en tu tiempo libre?" },
        { who: "Sofia", target: "J'aime beaucoup danser et lire. Et toi ?", es: "Me gusta mucho bailar y leer. ¿Y tú?" },
        { who: "Miguel", target: "J'aime surfer ! On peut se voir pour un café un de ces jours ?", es: "¡Me gusta hacer surf! ¿Quedamos para un café un día de estos?" },
        { who: "Sofia", target: "Bien sûr, donne-moi ton numéro.", es: "Claro, dame tu número." }
      ],
      questions: [
        { q: "¿De dónde es Sofía?", options: ["París", "Sevilla", "Marsella"], answer: 1 },
        { q: "¿A qué se dedica Miguel?", options: ["Profesor", "Ingeniero", "Médico"], answer: 1 },
        { q: "¿Qué le gusta hacer a Sofía?", options: ["Surfear", "Bailar y leer", "Cocinar"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m4-cl1", before: "Je ne te ", blank: "connais", after: " pas, tu es nouvelle ici ?", es: "No te conozco, ¿eres nueva aquí?", mode: "type" },
      { id: "fr-m4-cl2", before: "J'aime ", blank: "beaucoup", after: " danser.", es: "Me gusta mucho bailar.", mode: "select", options: ["beaucoup", "peu", "jamais", "mal"] },
      { id: "fr-m4-cl3", before: "On peut se ", blank: "voir", after: " pour un café ?", es: "¿Podemos quedar para un café?", mode: "type" },
      { id: "fr-m4-cl4", before: "Ravi de t'avoir ", blank: "rencontré", after: ".", es: "Encantado de haberte conocido.", mode: "select", options: ["rencontré", "cherché", "oublié", "attendu"] }
    ],
    falseFriends: [
      { es: "gracioso", esMeaning: "funny", target: "gracieux", targetMeaning: "elegante, grácil (no gracioso; gracioso es «drôle»)" },
      { es: "formal", esMeaning: "persona seria y fiable", target: "formel", targetMeaning: "de registro formal/oficial, no necesariamente fiable" },
      { es: "educado", esMeaning: "bien educado, cortés", target: "éduqué", targetMeaning: "instruido, con estudios; cortés es «poli»" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 5 — Entrevista de trabajo (el más complejo)            */
  /* ============================================================ */
  pt.push({
    id: "pt-m5", num: 5, title: "Entrevista de emprego", subtitle: "Registro formal",
    cards: [
      { id: "pt-m5-c01", es: "el currículum", target: "o currículo", phon: "ku-RRI-ku-lu" },
      { id: "pt-m5-c02", es: "la experiencia laboral", target: "a experiência profissional", phon: "shpe-ri-EN-sia pru-fi-sio-NAL" },
      { id: "pt-m5-c03", es: "los estudios", target: "a formação", phon: "for-ma-SÃU" },
      { id: "pt-m5-c04", es: "el puesto", target: "o cargo", phon: "KAR-gu" },
      { id: "pt-m5-c05", es: "la empresa", target: "a empresa", phon: "ãi-PRE-za" },
      { id: "pt-m5-c06", es: "el sueldo", target: "o salário", phon: "sa-LA-riu" },
      { id: "pt-m5-c07", es: "la entrevista", target: "a entrevista", phon: "en-tre-VISH-ta" },
      { id: "pt-m5-c08", es: "fortalezas", target: "pontos fortes", phon: "PON-tush FOR-tesh" },
      { id: "pt-m5-c09", es: "debilidades", target: "pontos fracos", phon: "PON-tush FRA-kush" },
      { id: "pt-m5-c10", es: "disponibilidad", target: "disponibilidade", phon: "dish-pu-ni-bi-li-DA-de" },
      { id: "pt-m5-c11", es: "a tiempo completo", target: "a tempo inteiro", phon: "a TEN-pu in-TAI-ru" },
      { id: "pt-m5-c12", es: "a tiempo parcial", target: "a tempo parcial", phon: "a TEN-pu par-SIAL" },
      { id: "pt-m5-c13", es: "el contrato", target: "o contrato", phon: "kon-TRA-tu" },
      { id: "pt-m5-c14", es: "encantado/a de conocerle", target: "muito prazer em conhecê-lo/la", phon: "MUI-tu pra-ZER ãi kuñe-SE-lu" },
      { id: "pt-m5-c15", es: "hábleme de usted", target: "fale-me de si", phon: "FA-le-me de si" },
      { id: "pt-m5-c16", es: "tengo X años de experiencia", target: "tenho X anos de experiência", phon: "TA-ño A-nush de shpe-ri-EN-sia" },
      { id: "pt-m5-c17", es: "trabajo en equipo", target: "trabalho em equipa", phon: "tra-BA-lyu ãi e-KI-pa" },
      { id: "pt-m5-c18", es: "estoy disponible desde...", target: "estou disponível a partir de...", phon: "shtoh dish-pu-NI-vel a par-TIR de" },
      { id: "pt-m5-c19", es: "¿cuáles son mis funciones?", target: "quais são as minhas funções?", phon: "kuaish sãu ash MI-ñash fun-SOISH" },
      { id: "pt-m5-c20", es: "gracias por la oportunidad", target: "obrigado pela oportunidade", phon: "o-bri-GA-du pe-la o-por-tu-ni-DA-de" },
      { id: "pt-m5-c21", es: "quedo a la espera de su respuesta", target: "fico a aguardar a vossa resposta", phon: "FI-ku a a-guar-DAR a VO-sa resh-POSH-ta" },
      { id: "pt-m5-c22", es: "responsable", target: "responsável", phon: "resh-pon-SA-vel" },
      { id: "pt-m5-c23", es: "puntual", target: "pontual", phon: "pon-tu-AL", note: "Cognado casi idéntico." },
      { id: "pt-m5-c24", es: "resolver problemas", target: "resolver problemas", phon: "rre-zol-VER pru-BLE-mash" }
    ],
    dialogue: {
      title: "Entrevista de emprego", context: "El diálogo más largo y formal: una entrevista de trabajo completa.",
      lines: [
        { who: "Entrevistadora", target: "Bom dia. Sente-se, por favor. Fale-me um pouco de si.", es: "Buenos días. Siéntese, por favor. Hábleme un poco de usted." },
        { who: "Candidato", target: "Bom dia. Obrigado pela oportunidade. Tenho cinco anos de experiência em marketing.", es: "Buenos días. Gracias por la oportunidad. Tengo cinco años de experiencia en marketing." },
        { who: "Entrevistadora", target: "Interessante. Quais são os seus pontos fortes?", es: "Interesante. ¿Cuáles son sus fortalezas?" },
        { who: "Candidato", target: "Sou responsável, pontual, e gosto de trabalhar em equipa.", es: "Soy responsable, puntual, y me gusta trabajar en equipo." },
        { who: "Entrevistadora", target: "E os seus pontos fracos?", es: "¿Y sus debilidades?" },
        { who: "Candidato", target: "Às vezes sou demasiado perfecionista, mas estou a trabalhar nisso.", es: "A veces soy demasiado perfeccionista, pero estoy trabajando en ello." },
        { who: "Entrevistadora", target: "Qual é a sua disponibilidade?", es: "¿Cuál es su disponibilidad?" },
        { who: "Candidato", target: "Estou disponível a partir do próximo mês, a tempo inteiro.", es: "Estoy disponible a partir del próximo mes, a tiempo completo." },
        { who: "Entrevistadora", target: "Muito bem. Tem alguma pergunta para mim?", es: "Muy bien. ¿Tiene alguna pregunta para mí?" },
        { who: "Candidato", target: "Sim, quais seriam as minhas funções principais?", es: "Sí, ¿cuáles serían mis funciones principales?" },
        { who: "Entrevistadora", target: "Vou enviar-lhe os detalhes por email. Obrigada pela sua vinda.", es: "Le enviaré los detalles por email. Gracias por venir." },
        { who: "Candidato", target: "Obrigado eu. Fico a aguardar a vossa resposta.", es: "Gracias a usted. Quedo a la espera de su respuesta." }
      ],
      questions: [
        { q: "¿Cuántos años de experiencia tiene el candidato?", options: ["3", "5", "10"], answer: 1 },
        { q: "¿Cuál dice que es su punto débil?", options: ["Impuntualidad", "Perfeccionismo", "Timidez"], answer: 1 },
        { q: "¿Desde cuándo está disponible?", options: ["Inmediatamente", "El próximo mes", "En un año"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m5-cl1", before: "Tenho cinco anos de ", blank: "experiência", after: " em marketing.", es: "Tengo cinco años de experiencia en marketing.", mode: "type" },
      { id: "pt-m5-cl2", before: "Sou responsável e ", blank: "pontual", after: ".", es: "Soy responsable y puntual.", mode: "select", options: ["pontual", "atrasado", "distraído", "cansado"] },
      { id: "pt-m5-cl3", before: "Gosto de trabalhar em ", blank: "equipa", after: ".", es: "Me gusta trabajar en equipo.", mode: "type" },
      { id: "pt-m5-cl4", before: "Fico a ", blank: "aguardar", after: " a vossa resposta.", es: "Quedo a la espera de su respuesta.", mode: "select", options: ["aguardar", "esquecer", "duvidar", "recusar"] }
    ],
    falseFriends: [
      { es: "despido", esMeaning: "layoff, dismissal", target: "despedida", targetMeaning: "fiesta de despedida; despido es «despedimento»" },
      { es: "suceso", esMeaning: "incidente, evento", target: "sucesso", targetMeaning: "¡éxito! Un incidente es «acontecimento»" },
      { es: "carpeta", esMeaning: "folder de documentos", target: "carteira", targetMeaning: "¡cartera/billetera! La carpeta es «pasta»" }
    ]
  });

  fr.push({
    id: "fr-m5", num: 5, title: "Entretien d'embauche", subtitle: "Registro formal",
    cards: [
      { id: "fr-m5-c01", es: "el currículum", target: "le CV", phon: "lə sé-VÉ" },
      { id: "fr-m5-c02", es: "la experiencia laboral", target: "l'expérience professionnelle", phon: "lek-spé-riANS pro-fe-sio-NEL" },
      { id: "fr-m5-c03", es: "los estudios", target: "la formation", phon: "la for-ma-SION" },
      { id: "fr-m5-c04", es: "el puesto", target: "le poste", phon: "lə post" },
      { id: "fr-m5-c05", es: "la empresa", target: "l'entreprise", phon: "lan-trə-PRIZ" },
      { id: "fr-m5-c06", es: "el sueldo", target: "le salaire", phon: "lə sa-LÉR" },
      { id: "fr-m5-c07", es: "la entrevista", target: "l'entretien", phon: "lan-trə-TIAN" },
      { id: "fr-m5-c08", es: "fortalezas", target: "points forts", phon: "puan for" },
      { id: "fr-m5-c09", es: "debilidades", target: "points faibles", phon: "puan fébl" },
      { id: "fr-m5-c10", es: "disponibilidad", target: "la disponibilité", phon: "dis-po-ni-bi-li-TÉ" },
      { id: "fr-m5-c11", es: "a tiempo completo", target: "à temps plein", phon: "a tan plan" },
      { id: "fr-m5-c12", es: "a tiempo parcial", target: "à temps partiel", phon: "a tan par-SIEL" },
      { id: "fr-m5-c13", es: "el contrato", target: "le contrat", phon: "lə kon-TRA" },
      { id: "fr-m5-c14", es: "encantado/a de conocerle", target: "enchanté(e) de vous rencontrer", phon: "an-shan-TÉ də vu ran-kon-TRÉ" },
      { id: "fr-m5-c15", es: "hábleme de usted", target: "parlez-moi de vous", phon: "par-lé mua də vu" },
      { id: "fr-m5-c16", es: "tengo X años de experiencia", target: "j'ai X ans d'expérience", phon: "shé an dek-spé-riANS" },
      { id: "fr-m5-c17", es: "trabajo en equipo", target: "je travaille en équipe", phon: "shə tra-VAI an é-KIP" },
      { id: "fr-m5-c18", es: "estoy disponible desde...", target: "je suis disponible à partir de...", phon: "shə süi dis-po-NIBL a par-TIR də" },
      { id: "fr-m5-c19", es: "¿cuáles son mis funciones?", target: "quelles sont mes fonctions ?", phon: "kel son mé fonk-SION" },
      { id: "fr-m5-c20", es: "gracias por la oportunidad", target: "merci pour cette opportunité", phon: "mer-SI pur set o-por-tü-ni-TÉ" },
      { id: "fr-m5-c21", es: "quedo a la espera de su respuesta", target: "dans l'attente de votre réponse", phon: "dan la-TANT də votr ré-PONS" },
      { id: "fr-m5-c22", es: "responsable", target: "responsable", phon: "res-pon-SABL", note: "Cognado casi idéntico." },
      { id: "fr-m5-c23", es: "puntual", target: "ponctuel(le)", phon: "ponk-tü-EL" },
      { id: "fr-m5-c24", es: "resolver problemas", target: "résoudre des problèmes", phon: "ré-zudr dé pro-BLEM" }
    ],
    dialogue: {
      title: "Entretien d'embauche", context: "El diálogo más largo y formal: una entrevista de trabajo completa.",
      lines: [
        { who: "Recruteuse", target: "Bonjour. Asseyez-vous, je vous en prie. Parlez-moi un peu de vous.", es: "Buenos días. Siéntese, por favor. Hábleme un poco de usted." },
        { who: "Candidat", target: "Bonjour. Merci pour cette opportunité. J'ai cinq ans d'expérience en marketing.", es: "Buenos días. Gracias por la oportunidad. Tengo cinco años de experiencia en marketing." },
        { who: "Recruteuse", target: "Intéressant. Quels sont vos points forts ?", es: "Interesante. ¿Cuáles son sus fortalezas?" },
        { who: "Candidat", target: "Je suis responsable, ponctuel, et j'aime travailler en équipe.", es: "Soy responsable, puntual, y me gusta trabajar en equipo." },
        { who: "Recruteuse", target: "Et vos points faibles ?", es: "¿Y sus debilidades?" },
        { who: "Candidat", target: "Parfois je suis trop perfectionniste, mais je travaille dessus.", es: "A veces soy demasiado perfeccionista, pero estoy trabajando en ello." },
        { who: "Recruteuse", target: "Quelle est votre disponibilité ?", es: "¿Cuál es su disponibilidad?" },
        { who: "Candidat", target: "Je suis disponible dès le mois prochain, à temps plein.", es: "Estoy disponible desde el próximo mes, a tiempo completo." },
        { who: "Recruteuse", target: "Très bien. Avez-vous des questions pour moi ?", es: "Muy bien. ¿Tiene alguna pregunta para mí?" },
        { who: "Candidat", target: "Oui, quelles seraient mes fonctions principales ?", es: "Sí, ¿cuáles serían mis funciones principales?" },
        { who: "Recruteuse", target: "Je vous enverrai les détails par email. Merci d'être venu.", es: "Le enviaré los detalles por email. Gracias por venir." },
        { who: "Candidat", target: "Merci à vous. Dans l'attente de votre réponse.", es: "Gracias a usted. Quedo a la espera de su respuesta." }
      ],
      questions: [
        { q: "¿Cuántos años de experiencia tiene el candidato?", options: ["3", "5", "10"], answer: 1 },
        { q: "¿Cuál dice que es su punto débil?", options: ["Impuntualidad", "Perfeccionismo", "Timidez"], answer: 1 },
        { q: "¿Desde cuándo está disponible?", options: ["Inmediatamente", "El próximo mes", "En un año"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m5-cl1", before: "J'ai cinq ans d'", blank: "expérience", after: " en marketing.", es: "Tengo cinco años de experiencia en marketing.", mode: "type" },
      { id: "fr-m5-cl2", before: "Je suis responsable et ", blank: "ponctuel", after: ".", es: "Soy responsable y puntual.", mode: "select", options: ["ponctuel", "en retard", "distrait", "fatigué"] },
      { id: "fr-m5-cl3", before: "J'aime travailler en ", blank: "équipe", after: ".", es: "Me gusta trabajar en equipo.", mode: "type" },
      { id: "fr-m5-cl4", before: "Dans l'", blank: "attente", after: " de votre réponse.", es: "Quedo a la espera de su respuesta.", mode: "select", options: ["attente", "oubli", "doute", "refus"] }
    ],
    falseFriends: [
      { es: "demandar", esMeaning: "to sue (legal)", target: "demander", targetMeaning: "simplemente «pedir/preguntar», sin ningún matiz legal" },
      { es: "suceso", esMeaning: "incidente, evento", target: "succès", targetMeaning: "¡éxito! Un incidente es «événement»" },
      { es: "aplicar", esMeaning: "postularse a un empleo", target: "appliquer", targetMeaning: "aplicar una regla o método; postularse es «postuler»" }
    ]
  });
  pt.push({
    id: "pt-m6", num: 6, title: "No restaurante", subtitle: "Reservas, pedir comida y pagar",
    cards: [
      { id: "pt-m6-c01", es: "la mesa", target: "a mesa", phon: "a ME-za" },
      { id: "pt-m6-c02", es: "el menú", target: "o menu", phon: "u me-NU" },
      { id: "pt-m6-c03", es: "el camarero", target: "o empregado de mesa", phon: "u ãi-pre-GA-du de ME-za", note: "En Portugal también se usa coloquialmente «o empregado» o «o chefe»." },
      { id: "pt-m6-c04", es: "una reserva", target: "uma reserva", phon: "U-ma re-ZER-va" },
      { id: "pt-m6-c05", es: "primer plato", target: "a entrada", phon: "a ãi-TRA-da" },
      { id: "pt-m6-c06", es: "plato principal", target: "o prato principal", phon: "u PRA-tu prin-si-PAL" },
      { id: "pt-m6-c07", es: "el postre", target: "a sobremesa", phon: "a so-bre-ME-za" },
      { id: "pt-m6-c08", es: "las bebidas", target: "as bebidas", phon: "ash be-BI-dash" },
      { id: "pt-m6-c09", es: "agua del grifo", target: "água da torneira", phon: "A-gua da tor-NEI-ra" },
      { id: "pt-m6-c10", es: "la cubertería", target: "os talheres", phon: "ush ta-LYE-resh" },
      { id: "pt-m6-c11", es: "el tenedor", target: "o garfo", phon: "u GAR-fu" },
      { id: "pt-m6-c12", es: "el cuchillo", target: "a faca", phon: "a FA-ka" },
      { id: "pt-m6-c13", es: "la cuchara", target: "a colher", phon: "a ku-LYER" },
      { id: "pt-m6-c14", es: "la servilleta", target: "o guardanapo", phon: "u guar-da-NA-pu" },
      { id: "pt-m6-c15", es: "tengo una reserva a nombre de...", target: "tenho uma reserva em nome de...", phon: "TA-ño U-ma re-ZER-va ãi NO-me de" },
      { id: "pt-m6-c16", es: "una mesa para dos, por favor", target: "uma mesa para dois, por favor", phon: "U-ma ME-za pa-ra DÓI-sh pur fa-VOR" },
      { id: "pt-m6-c17", es: "¿qué nos recomienda?", target: "o que recomenda?", phon: "u ke re-ko-MEN-da" },
      { id: "pt-m6-c18", es: "soy alérgico/a a...", target: "sou alérgico/a a...", phon: "so a-LER-ji-ku a" },
      { id: "pt-m6-c19", es: "soy vegetariano/a", target: "sou vegetariano/a", phon: "so ve-je-ta-RIA-nu" },
      { id: "pt-m6-c20", es: "está delicioso", target: "está delicioso", phon: "shta de-li-SIO-zu" },
      { id: "pt-m6-c21", es: "la propina", target: "a gorjeta", phon: "a gor-JE-ta" },
      { id: "pt-m6-c22", es: "¿podemos pagar por separado?", target: "podemos pagar separado?", phon: "pu-DE-mush pa-GAR se-pa-RA-du" }
    ],
    dialogue: {
      title: "Jantar num restaurante", context: "Reservas y cenas en una tasca típica en Lisboa.",
      lines: [
        { who: "Empregado", target: "Boa noite! Tem reserva?", es: "¡Buenas noches! ¿Tiene reserva?" },
        { who: "Cliente", target: "Boa noite. Sim, tenho uma reserva em nome de Silva.", es: "Buenas noches. Sí, tengo una reserva a nombre de Silva." },
        { who: "Empregado", target: "Com certeza, a sua mesa é esta. Aqui tem o menu.", es: "Por supuesto, su mesa es esta. Aquí tiene el menú." },
        { who: "Cliente", target: "Obrigado. O que recomenda como prato principal?", es: "Gracias. ¿Qué recomienda como plato principal?" },
        { who: "Empregado", target: "O bacalhau à Brás hoje está excelente.", es: "El bacalao à Brás hoy está excelente." },
        { who: "Cliente", target: "Ótimo, vou querer o bacalhau e uma garrafa de água.", es: "Estupendo, voy a querer el bacalao y una botella de agua." },
        { who: "Empregado", target: "Deseja sobremesa ou café?", es: "¿Desea postre o café?" },
        { who: "Cliente", target: "Apenas um café e a conta, por favor.", es: "Solo un café y la cuenta, por favor." }
      ],
      questions: [
        { q: "¿A qué nombre estaba la reserva?", options: ["Costa", "Silva", "Santos"], answer: 1 },
        { q: "¿Qué recomendó el camarero?", options: ["Sardinas", "Bacalhau à Brás", "Sopa de piedra"], answer: 1 },
        { q: "¿Qué pidió de postre?", options: ["Pastel de nata", "Fruta", "Solo un café"], answer: 2 }
      ]
    },
    cloze: [
      { id: "pt-m6-cl1", before: "Tenho uma reserva em ", blank: "nome", after: " de Silva.", es: "Tengo una reserva a nombre de Silva.", mode: "type" },
      { id: "pt-m6-cl2", before: "Uma mesa para ", blank: "dois", after: ", por favor.", es: "Una mesa para dos, por favor.", mode: "select", options: ["dois", "muitos", "tudo", "nada"] },
      { id: "pt-m6-cl3", before: "A conta, por ", blank: "favor", after: ".", es: "La cuenta, por favor.", mode: "type" }
    ],
    falseFriends: [
      { es: "postre", esMeaning: "desert", target: "postre", targetMeaning: "último o posterior (el postre de comer es «sobremesa»)" },
      { es: "talher", esMeaning: "taller", target: "talher", targetMeaning: "cubierto de mesa (taller de reparación es «oficina»)" }
    ]
  });

  fr.push({
    id: "fr-m6", num: 6, title: "Au restaurant", subtitle: "Reservas, pedir comida y pagar",
    cards: [
      { id: "fr-m6-c01", es: "la mesa", target: "la table", phon: "la tabl" },
      { id: "fr-m6-c02", es: "el menú", target: "le menu / la carte", phon: "lə mə-NÜ / la KART" },
      { id: "fr-m6-c03", es: "el camarero", target: "le serveur", phon: "lə sér-VÖR" },
      { id: "fr-m6-c04", es: "una reserva", target: "une réservation", phon: "ün re-zér-va-SION" },
      { id: "fr-m6-c05", es: "primer plato / entrante", target: "l'entrée", phon: "lan-TRÉ" },
      { id: "fr-m6-c06", es: "plato principal", target: "le plat principal", phon: "lə pla prin-si-PAL" },
      { id: "fr-m6-c07", es: "el postre", target: "le dessert", phon: "lə de-SÉR" },
      { id: "fr-m6-c08", es: "las bebidas", target: "les boissons", phon: "lé bua-SON" },
      { id: "fr-m6-c09", es: "jarra de agua gratis", target: "une carafe d'eau", phon: "ün ka-RAF do" },
      { id: "fr-m6-c10", es: "los cubiertos", target: "les couverts", phon: "lé ku-VÉR" },
      { id: "fr-m6-c11", es: "el tenedor", target: "la fourchette", phon: "la fur-SHET" },
      { id: "fr-m6-c12", es: "el cuchillo", target: "le couteau", phon: "lə ku-TO" },
      { id: "fr-m6-c13", es: "la cuchara", target: "la cuillère", phon: "la küi-YÉR" },
      { id: "fr-m6-c14", es: "la servilleta", target: "la serviette", phon: "la sér-VIET" },
      { id: "fr-m6-c15", es: "tengo una reserva a nombre de...", target: "j'ai une réservation au nom de...", phon: "shé ün re-zér-va-SION o non də" },
      { id: "fr-m6-c16", es: "una mesa para dos, por favor", target: "une table pour deux, s'il vous plaît", phon: "ün tabl pur dö sil vu plé" },
      { id: "fr-m6-c17", es: "¿qué nos recomienda?", target: "que me conseillez-vous ?", phon: "kə mə kon-se-YÉ vu" },
      { id: "fr-m6-c18", es: "soy alérgico/a a...", target: "je suis allergique à...", phon: "shə süi a-lér-ZHIK a" },
      { id: "fr-m6-c19", es: "soy vegetariano/a", target: "je suis végétarien(ne)", phon: "shə süi vé-zhé-ta-RIAN" },
      { id: "fr-m6-c20", es: "está delicioso", target: "c'est délicieux", phon: "sé de-li-SIÖ" },
      { id: "fr-m6-c21", es: "la propina", target: "le pourboire", phon: "lə pur-BUAR" },
      { id: "fr-m6-c22", es: "¿podemos pagar por separado?", target: "on peut payer séparément ?", phon: "on pö pé-YÉ se-pa-ré-MAN" }
    ],
    dialogue: {
      title: "Dîner au bistro", context: "Pedir la cena en un restaurante parisino.",
      lines: [
        { who: "Serveur", target: "Bonsoir ! Vous avez réservé ?", es: "¡Buenas noches! ¿Tiene reserva?" },
        { who: "Client", target: "Bonsoir. Oui, une réservation au nom de Martin.", es: "Buenas noches. Sí, una reserva a nombre de Martin." },
        { who: "Serveur", target: "Parfait, voici votre table. Je vous laisse la carte.", es: "Perfecto, aquí está su mesa. Le dejo la carta." },
        { who: "Client", target: "Merci. Qu'est-ce que vous me conseillez ?", es: "Gracias. ¿Qué me recomienda?" },
        { who: "Serveur", target: "Le confit de canard est excellent ce soir.", es: "El pato confitado está excelente esta noche." },
        { who: "Client", target: "Très bien, je prends ça avec une carafe d'eau.", es: "Muy bien, tomo eso con una jarra de agua." },
        { who: "Serveur", target: "Un dessert ou un café pour finir ?", es: "¿Un postre o un café para terminar?" },
        { who: "Client", target: "L'addition tout de suite, s'il vous plaît.", es: "La cuenta de inmediato, por favor." }
      ],
      questions: [
        { q: "¿A qué nombre está la reserva?", options: ["Dupont", "Martin", "Bernard"], answer: 1 },
        { q: "¿Qué sugiere el camarero?", options: ["Sopa de cebolla", "Confit de canard", "Ensalada"], answer: 1 },
        { q: "¿Qué agua pidió?", options: ["Mineral con gas", "Carafe d'eau (gratis)", "Vino tinto"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m6-cl1", before: "Une réservation au ", blank: "nom", after: " de Martin.", es: "Una reserva a nombre de Martin.", mode: "type" },
      { id: "fr-m6-cl2", before: "Une table pour ", blank: "deux", after: ", s'il vous plaît.", es: "Una mesa para dos, por favor.", mode: "select", options: ["deux", "trois", "seul", "tous"] },
      { id: "fr-m6-cl3", before: "L'addition, s'il vous ", blank: "plaît", after: ".", es: "La cuenta, por favor.", mode: "type" }
    ],
    falseFriends: [
      { es: "entrada", esMeaning: "ticket o hall de acceso", target: "entrée", targetMeaning: "el primer plato / entrante de la comida" },
      { es: "carte", esMeaning: "carta de correo", target: "carte", targetMeaning: "menú del restaurante (carta de correo se dice «lettre»)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 7 — Médico y Farmacia                                 */
  /* ============================================================ */
  pt.push({
    id: "pt-m7", num: 7, title: "Médico e farmácia", subtitle: "Síntomas, recetas y medicamentos",
    cards: [
      { id: "pt-m7-c01", es: "el dolor", target: "a dor", phon: "a DOR" },
      { id: "pt-m7-c02", es: "dolor de cabeza", target: "dor de cabeça", phon: "DOR de ka-BE-sa" },
      { id: "pt-m7-c03", es: "dolor de estómago", target: "dor de estômago", phon: "DOR de esh-TO-ma-gu" },
      { id: "pt-m7-c04", es: "la fiebre", target: "a febre", phon: "a FE-bre" },
      { id: "pt-m7-c05", es: "la tos", target: "a tosse", phon: "a TO-se" },
      { id: "pt-m7-c06", es: "la receta médica", target: "a receita médica", phon: "a re-SEI-ta ME-di-ka" },
      { id: "pt-m7-c07", es: "la medicina / el medicamento", target: "o medicamento", phon: "u me-di-ka-MEN-tu" },
      { id: "pt-m7-c08", es: "analgésico", target: "o analgésico", phon: "u a-nal-JE-zi-ku" },
      { id: "pt-m7-c09", es: "la farmacia", target: "a farmácia", phon: "a far-MA-sia" },
      { id: "pt-m7-c10", es: "farmacia de guardia", target: "farmácia de serviço", phon: "far-MA-sia de ser-VI-su" },
      { id: "pt-m7-c11", es: "el mareo", target: "o enjoo", phon: "u en-JO-u" },
      { id: "pt-m7-c12", es: "tengo tos y fiebre", target: "tenho tosse e febre", phon: "TA-ño TO-se i FE-bre" },
      { id: "pt-m7-c13", es: "me duele aquí", target: "dói-me aqui", phon: "DÓI-me a-KI" },
      { id: "pt-m7-c14", es: "estoy resfriado/a", target: "estou constipado/a", phon: "shtoh kon-sti-PA-du", note: "⚠️ Constipado en portugués significa estar resfriado, jamás estreñido." },
      { id: "pt-m7-c15", es: "cada ocho horas", target: "de oito em oito horas", phon: "de ÓI-tu ãi ÓI-tu O-rash" },
      { id: "pt-m7-c16", es: "antes de comer", target: "antes das refeições", phon: "AN-tesh dash re-fei-SOISH" },
      { id: "pt-m7-c17", es: "las tiritas / curitas", target: "os pensos rápidos", phon: "ush PEN-sush RA-pi-dush" },
      { id: "pt-m7-c18", es: "jarabe", target: "o xarope", phon: "u sha-RO-pe" },
      { id: "pt-m7-c19", es: "las pastillas", target: "os comprimidos", phon: "ush kon-pri-MI-dush" },
      { id: "pt-m7-c20", es: "¿necesito receta?", target: "preciso de receita?", phon: "pre-SI-zu de re-SEI-ta" }
    ],
    dialogue: {
      title: "Na farmácia", context: "Explicar síntomas al farmacéutico en Oporto.",
      lines: [
        { who: "Farmacêutico", target: "Bom dia, em que posso ajudar?", es: "Buenos días, ¿en qué puedo ayudarle?" },
        { who: "Doente", target: "Bom dia. Estou muito constipado e dói-me a cabeça.", es: "Buenos días. Estoy muy resfriado y me duele la cabeza." },
        { who: "Farmacêutico", target: "Tem febre?", es: "¿Tiene fiebre?" },
        { who: "Doente", target: "Sim, tenho um pouco de febre desde ontem.", es: "Sí, tengo un poco de fiebre desde ayer." },
        { who: "Farmacêutico", target: "Recomendo estes comprimidos. Tome um de oito em oito horas.", es: "Recomiendo estas pastillas. Tome una cada ocho horas." },
        { who: "Doente", target: "Preciso de receita médica?", es: "¿Necesito receta médica?" },
        { who: "Farmacêutico", target: "Não, este medicamento é de venda livre.", es: "No, este medicamento es de venta libre." },
        { who: "Doente", target: "Muito obrigado!", es: "¡Muchas gracias!" }
      ],
      questions: [
        { q: "¿Qué síntoma tiene el paciente?", options: ["Dolor de muelas", "Constipado y dolor de cabeza", "Mareo"], answer: 1 },
        { q: "¿Cada cuánto debe tomar el comprimido?", options: ["Cada 4 horas", "Cada 8 horas", "Solo por la noche"], answer: 1 },
        { q: "¿Hace falta receta?", options: ["Sí, del médico", "No, es libre", "Solo con pasaporte"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m7-cl1", before: "Dói-me a ", blank: "cabeça", after: " desde manhã.", es: "Me duele la cabeza desde la mañana.", mode: "type" },
      { id: "pt-m7-cl2", before: "Estou muito ", blank: "constipado", after: ".", es: "Estoy muy resfriado.", mode: "select", options: ["constipado", "alegre", "livre", "largo"] },
      { id: "pt-m7-cl3", before: "Tome o comprimido de oito em oito ", blank: "horas", after: ".", es: "Tome la pastilla cada ocho horas.", mode: "type" }
    ],
    falseFriends: [
      
    ]
  });

  fr.push({
    id: "fr-m7", num: 7, title: "Médecin et pharmacie", subtitle: "Síntomas, recetas y medicamentos",
    cards: [
      { id: "fr-m7-c01", es: "el dolor", target: "la douleur", phon: "la du-LÖR" },
      { id: "fr-m7-c02", es: "dolor de cabeza", target: "mal à la tête", phon: "mal a la tet" },
      { id: "fr-m7-c03", es: "dolor de estómago", target: "mal au ventre", phon: "mal o vantr" },
      { id: "fr-m7-c04", es: "la fiebre", target: "la fièvre", phon: "la fi-ÉVR" },
      { id: "fr-m7-c05", es: "la tos", target: "la toux", phon: "la tu" },
      { id: "fr-m7-c06", es: "la receta médica", target: "l'ordonnance", phon: "lor-do-NANS" },
      { id: "fr-m7-c07", es: "el medicamento", target: "le médicament", phon: "lə me-di-ka-MAN" },
      { id: "fr-m7-c08", es: "analgésico", target: "l'anti-douleur", phon: "lan-ti-du-LÖR" },
      { id: "fr-m7-c09", es: "la farmacia", target: "la pharmacie", phon: "la far-ma-SÍ" },
      { id: "fr-m7-c10", es: "farmacia de guardia", target: "la pharmacie de garde", phon: "la far-ma-SÍ də gard" },
      { id: "fr-m7-c11", es: "el mareo / náuseas", target: "la nausée", phon: "la no-ZÉ" },
      { id: "fr-m7-c12", es: "tengo tos y fiebre", target: "j'ai de la toux et de la fièvre", phon: "shé də la tu e də la fi-ÉVR" },
      { id: "fr-m7-c13", es: "me duele aquí", target: "j'ai mal ici", phon: "shé mal i-SÍ" },
      { id: "fr-m7-c14", es: "estoy resfriado/a", target: "je suis enrhumé(e)", phon: "shə süi an-rü-MÉ", note: "⚠️ Jamás digas «constipé» en francés para un resfriado: ¡significa estreñido!" },
      { id: "fr-m7-c15", es: "tres veces al día", target: "trois fois par jour", phon: "trua fua par zhur" },
      { id: "fr-m7-c16", es: "durante las comidas", target: "pendant les repas", phon: "pan-DAN lé rə-PA" },
      { id: "fr-m7-c17", es: "las tiritas", target: "les pansements", phon: "lé pans-MAN" },
      { id: "fr-m7-c18", es: "jarabe", target: "le sirop", phon: "lə si-RO" },
      { id: "fr-m7-c19", es: "las pastillas", target: "les comprimés", phon: "lé kon-pri-MÉ" },
      { id: "fr-m7-c20", es: "¿hace falta receta?", target: "il faut une ordonnance ?", phon: "il fo ün or-do-NANS" }
    ],
    dialogue: {
      title: "À la pharmacie", context: "Pedir remedio para un malestar en Lyon.",
      lines: [
        { who: "Pharmacien", target: "Bonjour, que puis-je faire pour vous ?", es: "Buenos días, ¿qué puedo hacer por usted?" },
        { who: "Patient", target: "Bonjour. Je suis très enrhumé et j'ai mal à la tête.", es: "Buenos días. Estoy muy resfriado y me duele la cabeza." },
        { who: "Pharmacien", target: "Avez-vous de la fièvre ?", es: "¿Tiene fiebre?" },
        { who: "Patient", target: "Oui, un peu de fièvre depuis ce matin.", es: "Sí, un poco de fiebre desde esta mañana." },
        { who: "Pharmacien", target: "Prenez ce médicament, deux comprimés trois fois par jour.", es: "Tome este medicamento, dos comprimidos tres veces al día." },
        { who: "Patient", target: "Il faut une ordonnance pour cela ?", es: "¿Hace falta receta para esto?" },
        { who: "Pharmacien", target: "Non, c'est en vente libre.", es: "No, es de venta libre." },
        { who: "Patient", target: "Merci beaucoup, bonne journée !", es: "¡Muchas gracias, buen día!" }
      ],
      questions: [
        { q: "¿Qué le ocurre al enfermo?", options: ["Está enrhumé (resfriado)", "Tiene una pierna rota", "Está constipé"], answer: 0 },
        { q: "¿Cuántas veces al día toma la medicina?", options: ["Una vez", "Tres veces", "Cada hora"], answer: 1 },
        { q: "¿Necesita receta (ordonnance)?", options: ["Sí", "No", "Solo si empeora"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m7-cl1", before: "J'ai très mal à la ", blank: "tête", after: ".", es: "Me duele mucho la cabeza.", mode: "type" },
      { id: "fr-m7-cl2", before: "Je suis très ", blank: "enrhumé", after: ".", es: "Estoy muy resfriado.", mode: "select", options: ["enrhumé", "constipé", "fatigué", "occupé"] },
      { id: "fr-m7-cl3", before: "Deux comprimés trois fois par ", blank: "jour", after: ".", es: "Dos pastillas tres veces al día.", mode: "type" }
    ],
    falseFriends: [
      { es: "constipado", esMeaning: "resfriado", target: "constipé", targetMeaning: "¡estreñido! Decir «je suis constipé» causará risas en la farmacia." }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 8 — El Hotel                                          */
  /* ============================================================ */
  pt.push({
    id: "pt-m8", num: 8, title: "No hotel", subtitle: "Check-in, comodidades y reclamaciones",
    cards: [
      { id: "pt-m8-c01", es: "la recepción", target: "a receção", phon: "a re-se-SÃU" },
      { id: "pt-m8-c02", es: "la habitación", target: "o quarto", phon: "u KUAR-tu" },
      { id: "pt-m8-c03", es: "cama de matrimonio", target: "cama de casal", phon: "KA-ma de ka-ZAL" },
      { id: "pt-m8-c04", es: "camas individuales", target: "camas individuais", phon: "KA-mash in-di-vi-DUAISH" },
      { id: "pt-m8-c05", es: "la llave / la tarjeta", target: "a chave / o cartão", phon: "a SHA-ve / u kar-TÃU" },
      { id: "pt-m8-c06", es: "el ascensor", target: "o elevador", phon: "u e-le-va-DOR" },
      { id: "pt-m8-c07", es: "el desayuno incluido", target: "pequeno-almoço incluído", phon: "pe-KE-nu al-MO-su in-klui-DU", note: "Desayuno en Portugal se llama «pequeno-almoço»." },
      { id: "pt-m8-c08", es: "la clave del Wi-Fi", target: "a palavra-passe do Wi-Fi", phon: "a pa-LA-vra PA-se du wi-fi" },
      { id: "pt-m8-c09", es: "las toallas", target: "as toalhas", phon: "ash tu-A-lyash" },
      { id: "pt-m8-c10", es: "el aire acondicionado", target: "o ar condicionado", phon: "u ar kon-di-sio-NA-du" },
      { id: "pt-m8-c11", es: "quisiera hacer el check-in", target: "queria fazer o check-in", phon: "ke-RI-a fa-ZER u check-in" },
      { id: "pt-m8-c12", es: "¿a qué hora es el check-out?", target: "a que horas é o check-out?", phon: "a ke O-ras e u check-out" },
      { id: "pt-m8-c13", es: "la calefacción no funciona", target: "o aquecimento não funciona", phon: "u a-ke-si-MEN-tu nãu fun-SIO-na" },
      { id: "pt-m8-c14", es: "no hay água caliente", target: "não há água quente", phon: "nãu a A-gua KEN-te" },
      { id: "pt-m8-c15", es: "¿puede guardar mi equipaje?", target: "pode guardar a minha bagagem?", phon: "PO-de guar-DAR a MI-ña ba-GA-jãi" },
      { id: "pt-m8-c16", es: "el piso / la planta", target: "o andar", phon: "u an-DAR" },
      { id: "pt-m8-c17", es: "primer piso", target: "primeiro andar", phon: "pri-MEI-ru an-DAR" },
      { id: "pt-m8-c18", es: "manta extra", target: "coberta extra", phon: "ko-BER-ta EX-tra" }
    ],
    dialogue: {
      title: "Chegada ao hotel", context: "Hacer la entrada en un hotel céntrico en Coímbra.",
      lines: [
        { who: "Rececionista", target: "Boa tarde, bem-vindo ao Hotel Central.", es: "Buenas tardes, bienvenido al Hotel Central." },
        { who: "Hóspede", target: "Boa tarde, queria fazer o check-in. Tenho reserva.", es: "Buenas tardes, quisiera hacer el check-in. Tengo reserva." },
        { who: "Rececionista", target: "Pode dar-me o seu documento de identificação?", es: "¿Puede darme su documento de identidad?" },
        { who: "Hóspede", target: "Com certeza, aqui tem o passaporte.", es: "Por supuesto, aquí tiene el pasaporte." },
        { who: "Rececionista", target: "O seu quarto é o 302, no terceiro andar. O pequeno-almoço é das 7h às 10h.", es: "Su habitación es la 302, en el tercer piso. El desayuno es de 7h a 10h." },
        { who: "Hóspede", target: "Obrigado! Qual é a palavra-passe do Wi-Fi?", es: "¡Gracias! ¿Cuál es la contraseña del Wi-Fi?" },
        { who: "Rececionista", target: "Está escrita no verso da chave. Boa estadia!", es: "Está escrita al dorso de la llave. ¡Buena estancia!" }
      ],
      questions: [
        { q: "¿En qué planta está la habitación?", options: ["Primer piso", "Segundo piso", "Tercer piso (terceiro andar)"], answer: 2 },
        { q: "¿Qué horario tiene el desayuno (pequeno-almoço)?", options: ["6h a 9h", "7h a 10h", "8h a 11h"], answer: 1 },
        { q: "¿Dónde está la contraseña del Wi-Fi?", options: ["En la puerta", "En el verso de la llave", "En el ascensor"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m8-cl1", before: "O pequeno-almoço está ", blank: "incluído", after: "?", es: "¿El desayuno está incluido?", mode: "select", options: ["incluído", "longe", "fechado", "quente"] },
      { id: "pt-m8-cl2", before: "Não há água ", blank: "quente", after: " no duche.", es: "No hay agua caliente en la ducha.", mode: "type" },
      { id: "pt-m8-cl3", before: "O quarto fica no terceiro ", blank: "andar", after: ".", es: "La habitación está en el tercer piso.", mode: "type" }
    ],
    falseFriends: [
      { es: "cuarto", esMeaning: "room", target: "quarto", targetMeaning: "habitación de hotel o de casa (mismo uso básico)." },
      { es: "almuerzo", esMeaning: "lunch", target: "pequeno-almoço", targetMeaning: "¡desayuno! (almuerzo normal es «almoço»)" }
    ]
  });

  fr.push({
    id: "fr-m8", num: 8, title: "À l'hôtel", subtitle: "Check-in, comodidades y reclamaciones",
    cards: [
      { id: "fr-m8-c01", es: "la recepción", target: "la réception", phon: "la re-sep-SION" },
      { id: "fr-m8-c02", es: "la habitación", target: "la chambre", phon: "la SHAMBR" },
      { id: "fr-m8-c03", es: "cama doble", target: "un grand lit", phon: "an gran LI" },
      { id: "fr-m8-c04", es: "camas individuales", target: "des lits jumeaux", phon: "dé li zho-MO" },
      { id: "fr-m8-c05", es: "la llave / la tarjeta", target: "la clé / la carte", phon: "la kle / la kart" },
      { id: "fr-m8-c06", es: "el ascensor", target: "l'ascenseur", phon: "la-san-SÖR" },
      { id: "fr-m8-c07", es: "el desayuno", target: "le petit-déjeuner", phon: "lə pə-ti dé-zhö-NÉ" },
      { id: "fr-m8-c08", es: "la contraseña del Wi-Fi", target: "le mot de passe Wi-Fi", phon: "lə mo də pas wi-fi" },
      { id: "fr-m8-c09", es: "las toallas", target: "les serviettes de bain", phon: "lé sér-VIET də ban" },
      { id: "fr-m8-c10", es: "el aire acondicionado", target: "la climatisation", phon: "la kli-ma-ti-za-SION" },
      { id: "fr-m8-c11", es: "quisiera hacer el check-in", target: "je voudrais faire le check-in", phon: "shə vu-DRÉ fér lə check-in" },
      { id: "fr-m8-c12", es: "¿a qué hora es la salida?", target: "à quelle heure est le départ ?", phon: "a kel ör é lə de-PAR" },
      { id: "fr-m8-c13", es: "la calefacción no funciona", target: "le chauffage ne marche pas", phon: "lə sho-FASH nə marsh pa" },
      { id: "fr-m8-c14", es: "no hay agua caliente", target: "il n'y a pas d'eau chaude", phon: "il ni a pa do shod" },
      { id: "fr-m8-c15", es: "¿puede guardar mi equipaje?", target: "pouvez-vous garder mes bagages ?", phon: "pu-vé vu gar-DÉ mé ba-GASH" },
      { id: "fr-m8-c16", es: "el piso / la planta", target: "l'étage", phon: "le-TASH" },
      { id: "fr-m8-c17", es: "primer piso", target: "au premier étage", phon: "o prə-miÉ e-TASH" },
      { id: "fr-m8-c18", es: "manta extra", target: "une couverture supplémentaire", phon: "ün ku-vér-TÜR sü-ple-man-TÉR" }
    ],
    dialogue: {
      title: "Arrivée à l'hôtel", context: "Check-in en un hotel en Niza.",
      lines: [
        { who: "Réceptionniste", target: "Bonjour, bienvenue à l'Hôtel Riviera.", es: "Buenos días, bienvenido al Hotel Riviera." },
        { who: "Client", target: "Bonjour, je voudrais faire le check-in. J'ai une réservation.", es: "Buenos días, quisiera hacer el check-in. Tengo una reserva." },
        { who: "Réceptionniste", target: "Très bien, puis-je avoir votre pièce d'identité ?", es: "Muy bien, ¿puedo ver su documento de identidad?" },
        { who: "Client", target: "Voilà mon passeport.", es: "Aquí tiene mi pasaporte." },
        { who: "Réceptionniste", target: "Parfait. Votre chambre est la 204, au deuxième étage. Le petit-déjeuner est inclus.", es: "Perfecto. Su habitación es la 204, en el segundo piso. El desayuno está incluido." },
        { who: "Client", target: "Merci. Quel est le mot de passe du Wi-Fi ?", es: "Gracias. ¿Cuál es la contraseña del Wi-Fi?" },
        { who: "Réceptionniste", target: "Il est écrit sur la carte de votre chambre. Bon séjour !", es: "Está escrito en la tarjeta de su habitación. ¡Buena estancia!" }
      ],
      questions: [
        { q: "¿En qué piso está la habitación?", options: ["Primer piso", "Segundo piso (deuxième étage)", "Tercer piso"], answer: 1 },
        { q: "¿Está incluido el petit-déjeuner?", options: ["Sí", "No", "Solo el café"], answer: 0 },
        { q: "¿Dónde aparece la clave Wi-Fi?", options: ["En la televisión", "En la tarjeta de la habitación", "En la entrada"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m8-cl1", before: "Le petit-déjeuner est ", blank: "inclus", after: ".", es: "El desayuno está incluido.", mode: "select", options: ["inclus", "loin", "fermé", "chaud"] },
      { id: "fr-m8-cl2", before: "Le chauffage ne ", blank: "marche", after: " pas.", es: "La calefacción no funciona.", mode: "type" },
      { id: "fr-m8-cl3", before: "La chambre est au deuxième ", blank: "étage", after: ".", es: "La habitación está en la segunda planta.", mode: "type" }
    ],
    falseFriends: [
      { es: "habitación", esMeaning: "room", target: "habitation", targetMeaning: "vivienda/residencia genérica (la habitación de hotel es «chambre»)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 9 — Compras y Tiendas                                 */
  /* ============================================================ */
  pt.push({
    id: "pt-m9", num: 9, title: "Nas compras", subtitle: "Ropa, precios, probarse y pagar",
    cards: [
      { id: "pt-m9-c01", es: "la tienda", target: "a loja", phon: "a LO-ja" },
      { id: "pt-m9-c02", es: "el supermercado", target: "o supermercado", phon: "u su-per-mer-KA-du" },
      { id: "pt-m9-c03", es: "la talla", target: "o tamanho", phon: "u ta-MA-ñu" },
      { id: "pt-m9-c04", es: "los probadores", target: "os provadores", phon: "ush pru-va-DO-resh" },
      { id: "pt-m9-c05", es: "la caja", target: "a caixa", phon: "a KAI-sha" },
      { id: "pt-m9-c06", es: "las rebajas", target: "os saldos", phon: "ush SAL-dush" },
      { id: "pt-m9-c07", es: "el recibo / ticket", target: "o talão de compra", phon: "u ta-LÃU de KOM-pra" },
      { id: "pt-m9-c08", es: "descuento", target: "o desconto", phon: "u des-KON-tu" },
      { id: "pt-m9-c09", es: "pago en efectivo", target: "pagamento em dinheiro", phon: "pa-ga-MEN-tu ãi di-ÑEI-ru" },
      { id: "pt-m9-c10", es: "pago con tarjeta", target: "pagamento com cartão", phon: "pa-ga-MEN-tu kon kar-TÃU" },
      { id: "pt-m9-c11", es: "bolsa de plástico", target: "o saco de plástico", phon: "u SA-ku de PLAS-ti-ku" },
      { id: "pt-m9-c12", es: "¿puedo probarme esto?", target: "posso experimentar isto?", phon: "PO-su esh-pre-men-TAR ISH-tu" },
      { id: "pt-m9-c13", es: "es demasiado caro", target: "é muito caro", phon: "e MUI-tu KA-ru" },
      { id: "pt-m9-c14", es: "es barato", target: "é barato", phon: "e ba-RA-tu" },
      { id: "pt-m9-c15", es: "tienes una talla más grande?", target: "tem um tamanho acima?", phon: "tãi ũ ta-MA-ñu a-SI-ma" },
      { id: "pt-m9-c16", es: "tienes una talla más pequeña?", target: "tem um tamanho abaixo?", phon: "tãi ũ ta-MA-ñu a-BAI-shu" },
      { id: "pt-m9-c17", es: "solo estoy mirando", target: "estou só a ver, obrigado/a", phon: "shtoh so a ver o-bri-GA-du" },
      { id: "pt-m9-c18", es: "me lo llevo", target: "fico com isto", phon: "FI-ku kon ISH-tu" }
    ],
    dialogue: {
      title: "Numa loja de roupa", context: "Comprar ropa de abrigo en un centro comercial.",
      lines: [
        { who: "Empregada", target: "Boa tarde, posso ajudar?", es: "Buenas tardes, ¿puedo ayudarle?" },
        { who: "Cliente", target: "Boa tarde. Queria ver este casaco, faz favor.", es: "Buenas tardes. Querría ver esta chaqueta, por favor." },
        { who: "Empregada", target: "Com certeza. Qual é o seu tamanho?", es: "Por supuesto. ¿Cuál es su talla?" },
        { who: "Cliente", target: "É o M. Posso experimentar?", es: "Es la M. ¿Puedo probármelo?" },
        { who: "Empregada", target: "Sim, os provadores ficam ali ao fundo.", es: "Sí, los probadores están allí al fondo." },
        { who: "Cliente", target: "Fica perfeito! Quanto custa?", es: "¡Queda perfecto! ¿Cuánto cuesta?" },
        { who: "Empregada", target: "Está em saldos, são quarenta euros.", es: "Está de rebajas, son cuarenta euros." },
        { who: "Cliente", target: "Ótimo, vou levar. Posso pagar com cartão?", es: "Estupendo, me lo llevo. ¿Puedo pagar con tarjeta?" }
      ],
      questions: [
        { q: "¿Qué prenda quiere ver el cliente?", options: ["Unos pantalones", "Un casaco (chaqueta)", "Una camisa"], answer: 1 },
        { q: "¿Dónde están los probadores?", options: ["En la entrada", "Ali ao fundo (al fondo)", "No hay probadores"], answer: 1 },
        { q: "¿Cuánto cuesta la prenda en rebajas?", options: ["30 euros", "40 euros", "50 euros"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m9-cl1", before: "Posso ", blank: "experimentar", after: " este casaco?", es: "¿Puedo probarme esta chaqueta?", mode: "type" },
      { id: "pt-m9-cl2", before: "Está em ", blank: "saldos", after: ", é muito barato.", es: "Está en rebajas, es muy barato.", mode: "select", options: ["saldos", "perto", "longe", "fechado"] },
      { id: "pt-m9-cl3", before: "Posso pagar com ", blank: "cartão", after: "?", es: "¿Puedo pagar con tarjeta?", mode: "type" }
    ],
    falseFriends: [
      { es: "saco", esMeaning: "jacket / abrigo", target: "saco", targetMeaning: "bolsa de plástico o de tela (chaqueta es «casaco»)" },
      { es: "probar", esMeaning: "to taste food / try clothes", target: "experimentar", targetMeaning: "probarse ropa o experimentar (probar comida es «provar»)" }
    ]
  });

  fr.push({
    id: "fr-m9", num: 9, title: "Faire des achats", subtitle: "Ropa, precios, probarse y pagar",
    cards: [
      { id: "fr-m9-c01", es: "la tienda", target: "le magasin", phon: "lə ma-ga-ZAN" },
      { id: "fr-m9-c02", es: "el supermercado", target: "le supermarché", phon: "lə sü-pér-mar-SHÉ" },
      { id: "fr-m9-c03", es: "la talla", target: "la taille / la pointure", phon: "la tai / la pwan-TÜR", note: "«taille» para ropa; «pointure» para calzado." },
      { id: "fr-m9-c04", es: "los probadores", target: "les cabines d'essayage", phon: "lé ka-BIN de-sé-YASH" },
      { id: "fr-m9-c05", es: "la caja", target: "la caisse", phon: "la kes" },
      { id: "fr-m9-c06", es: "las rebajas", target: "les soldes", phon: "lé sold" },
      { id: "fr-m9-c07", es: "el ticket de compra", target: "le ticket de caisse", phon: "lə ti-KÉ də kes" },
      { id: "fr-m9-c08", es: "descuento", target: "une réduction / remise", phon: "ün re-dük-SION" },
      { id: "fr-m9-c09", es: "pago en efectivo", target: "payer en espèces", phon: "pé-YÉ an es-PES" },
      { id: "fr-m9-c10", es: "pago con tarjeta", target: "payer par carte", phon: "pé-YÉ par kart" },
      { id: "fr-m9-c11", es: "bolsa", target: "un sac", phon: "an sak" },
      { id: "fr-m9-c12", es: "¿puedo probarme esto?", target: "je peux essayer ceci ?", phon: "shə pö e-sé-YÉ sə-SÍ" },
      { id: "fr-m9-c13", es: "es demasiado caro", target: "c'est trop cher", phon: "sé tro shér" },
      { id: "fr-m9-c14", es: "es barato", target: "c'est pas cher / bon marché", phon: "sé pa shér" },
      { id: "fr-m9-c15", es: "¿tiene una talla más grande?", target: "vous avez la taille au-dessus ?", phon: "vu za-VÉ la tai o-də-SÜ" },
      { id: "fr-m9-c16", es: "¿tiene una talla más pequeña?", target: "vous avez la taille en dessous ?", phon: "vu za-VÉ la tai an də-SÜ" },
      { id: "fr-m9-c17", es: "solo estoy mirando", target: "je regarde seulement, merci", phon: "shə rə-GARD söl-MAN mer-SÍ" },
      { id: "fr-m9-c18", es: "me lo llevo", target: "je le prends", phon: "shə lə pran" }
    ],
    dialogue: {
      title: "Dans un magasin de vêtements", context: "Comprar ropa en Burdeos.",
      lines: [
        { who: "Vendeuse", target: "Bonjour ! Je peux vous aider ?", es: "¡Hola! ¿Puedo ayudarle?" },
        { who: "Client", target: "Bonjour. Je cherche une veste en jean.", es: "Buenos días. Busco una chaqueta vaquera." },
        { who: "Vendeuse", target: "Quelle est votre taille ?", es: "¿Cuál es su talla?" },
        { who: "Client", target: "Du M. Je peux l'essayer ?", es: "La M. ¿Puedo probármela?" },
        { who: "Vendeuse", target: "Oui, les cabines d'essayage sont au fond.", es: "Sí, los probadores están al fondo." },
        { who: "Client", target: "Elle me va très bien. Combien elle coûte ?", es: "Me queda muy bien. ¿Cuánto cuesta?" },
        { who: "Vendeuse", target: "Elle est en soldes à trente euros.", es: "Está de rebajas a treinta euros." },
        { who: "Client", target: "Parfait, je la prends. Je peux payer par carte ?", es: "Perfecto, me la llevo. ¿Puedo pagar con tarjeta?" }
      ],
      questions: [
        { q: "¿Qué busca el cliente?", options: ["Un pantalón", "Une veste (chaqueta)", "Zapatos"], answer: 1 },
        { q: "¿Dónde están los probadores?", options: ["Au fond (al fondo)", "En el piso superior", "No hay"], answer: 0 },
        { q: "¿Cuánto cuesta en rebajas?", options: ["20 euros", "30 euros", "50 euros"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m9-cl1", before: "Je peux ", blank: "essayer", after: " cette veste ?", es: "¿Puedo probarme esta chaqueta?", mode: "type" },
      { id: "fr-m9-cl2", before: "Elle est en ", blank: "soldes", after: " ce mois-ci.", es: "Está de rebajas este mes.", mode: "select", options: ["soldes", "loin", "retard", "panne"] },
      { id: "fr-m9-cl3", before: "Je peux payer par ", blank: "carte", after: " ?", es: "¿Puedo pagar con tarjeta?", mode: "type" }
    ],
    falseFriends: [
      { es: "vestir", esMeaning: "to wear clothes", target: "veste", targetMeaning: "chaqueta o cazadora (el verbo vestir es «habiller»)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 10 — Emergencias e Imprevistos                        */
  /* ============================================================ */
  pt.push({
    id: "pt-m10", num: 10, title: "Emergências e imprevistos", subtitle: "Pedir ayuda, policía y pérdidas",
    cards: [
      { id: "pt-m10-c01", es: "¡ayuda!", target: "socorro! / ajuda!", phon: "su-KO-rru / a-JU-da" },
      { id: "pt-m10-c02", es: "la policía", target: "a polícia", phon: "a po-LI-sia" },
      { id: "pt-m10-c03", es: "la ambulancia", target: "a ambulância", phon: "a am-bu-LAN-sia" },
      { id: "pt-m10-c04", es: "los bomberos", target: "os bombeiros", phon: "ush bom-BEI-rush" },
      { id: "pt-m10-c05", es: "el hospital", target: "o hospital", phon: "u ush-pi-TAL" },
      { id: "pt-m10-c06", es: "comisaría de policía", target: "esquadra de polícia", phon: "esh-KUA-dra de po-LI-sia" },
      { id: "pt-m10-c07", es: "el robo", target: "o roubo", phon: "u RHO-bu" },
      { id: "pt-m10-c08", es: "me han robado", target: "fui roubado/a", phon: "fui rhu-BA-du" },
      { id: "pt-m10-c09", es: "he perdido la cartera", target: "perdi a carteira", phon: "per-DI a kar-TEI-ra" },
      { id: "pt-m10-c10", es: "he perdido el pasaporte", target: "perdi o passaporte", phon: "per-DI u pa-sa-POR-te" },
      { id: "pt-m10-c11", es: "llame a una ambulancia", target: "chame uma ambulância", phon: "SHA-me U-ma am-bu-LAN-sia" },
      { id: "pt-m10-c12", es: "llame a la policía", target: "chame a polícia", phon: "SHA-me a po-LI-sia" },
      { id: "pt-m10-c13", es: "hubo un accidente", target: "houve um acidente", phon: "O-ve ũ a-si-DEN-te" },
      { id: "pt-m10-c14", es: "número de emergencias (112)", target: "o 112 (cento e doze)", phon: "u SEN-tu i DO-ze" },
      { id: "pt-m10-c15", es: "estoy herido/a", target: "estou ferido/a", phon: "shtoh fe-RI-du" },
      { id: "pt-m10-c16", es: "objeto perdido", target: "objeto perdido", phon: "ob-JE-tu per-DI-du" }
    ],
    dialogue: {
      title: "Na esquadra de polícia", context: "Denunciar la pérdida de la cartera en Lisboa.",
      lines: [
        { who: "Polícia", target: "Boa tarde. Em que posso ajudar?", es: "Buenas tardes. ¿En qué puedo ayudarle?" },
        { who: "Cidadão", target: "Boa tarde. Fui roubado no elétrico, perdi a minha carteira.", es: "Buenas tardes. Me han robado en el tranvía, perdí mi cartera." },
        { who: "Polícia", target: "Lamento. O que tinha dentro da carteira?", es: "Lo siento. ¿Qué tenía dentro de la cartera?" },
        { who: "Cidadão", target: "Tinha o meu passaporte, cartões de crédito e dinheiro.", es: "Tenía mi pasaporte, tarjetas de crédito y dinero." },
        { who: "Polícia", target: "Vamos fazer uma participação de roubo para o seu seguro.", es: "Vamos a hacer una denuncia de robo para su seguro." },
        { who: "Cidadão", target: "Obrigado. Preciso do documento para a embaixada.", es: "Gracias. Necesito el documento para la embajada." }
      ],
      questions: [
        { q: "¿Dónde ocurrió el robo?", options: ["En el hotel", "No elétrico (en el tranvía)", "En el avión"], answer: 1 },
        { q: "¿Qué importante documento perdió?", options: ["El libro de ruta", "El passaporte", "El billete de tren"], answer: 1 },
        { q: "¿Para qué necesita la denuncia?", options: ["Para el banco y la embajada", "Para comprar ropa", "Para volver al hotel"], answer: 0 }
      ]
    },
    cloze: [
      { id: "pt-m10-cl1", before: "Por favor, chame a ", blank: "polícia", after: "!", es: "¡Por favor, llame a la policía!", mode: "type" },
      { id: "pt-m10-cl2", before: "Fui ", blank: "roubado", after: " no centro da cidade.", es: "Fui robado en el centro de la ciudad.", mode: "select", options: ["roubado", "comprado", "ajudado", "salvo"] },
      { id: "pt-m10-cl3", before: "Em caso de emergência ligue o ", blank: "112", after: ".", es: "En caso de emergencia llame al 112.", mode: "type" }
    ],
    falseFriends: [
      { es: "carteira", esMeaning: "cartera de dinero", target: "carteira", targetMeaning: "cartera o pupitre escolar / cartera de trabajo" }
    ]
  });

  fr.push({
    id: "fr-m10", num: 10, title: "Urgences et imprévus", subtitle: "Pedir ayuda, policía y pérdidas",
    cards: [
      { id: "fr-m10-c01", es: "¡ayuda!", target: "au secours ! / aidez-moi !", phon: "o sə-KUR / e-DÉ mua" },
      { id: "fr-m10-c02", es: "la policía", target: "la police", phon: "la po-LIS" },
      { id: "fr-m10-c03", es: "la ambulancia", target: "l'ambulance", phon: "lam-bü-LANS" },
      { id: "fr-m10-c04", es: "los bomberos", target: "les pompiers", phon: "lé pon-PIÉ" },
      { id: "fr-m10-c05", es: "el hospital", target: "l'hôpital", phon: "lo-pi-TAL" },
      { id: "fr-m10-c06", es: "comisaría de policía", target: "le commissariat de police", phon: "lə ko-mi-sa-RIA də po-LIS" },
      { id: "fr-m10-c07", es: "el robo", target: "le vol", phon: "lə vol", note: "⚠️ «Vol» significa robo, pero también vuelo de avión." },
      { id: "fr-m10-c08", es: "me han robado", target: "on m'a volé(e)", phon: "on ma vo-LÉ" },
      { id: "fr-m10-c09", es: "he perdido el monedero", target: "j'ai perdu mon portefeuille", phon: "shé pér-DÜ mon por-tə-FÖY" },
      { id: "fr-m10-c10", es: "he perdido el pasaporte", target: "j'ai perdu mon passeport", phon: "shé pér-DÜ mon pas-POR" },
      { id: "fr-m10-c11", es: "llame a una ambulancia", target: "appelez une ambulance", phon: "a-pə-LÉ ün am-bü-LANS" },
      { id: "fr-m10-c12", es: "llame a la policía", target: "appelez la police", phon: "a-pə-LÉ la po-LIS" },
      { id: "fr-m10-c13", es: "hubo un accidente", target: "il y a eu un accident", phon: "il i a ö un ak-si-dan" },
      { id: "fr-m10-c14", es: "número de emergencias (112)", target: "le 112 (cent douze)", phon: "lə san duz" },
      { id: "fr-m10-c15", es: "estoy herido/a", target: "je suis blessé(e)", phon: "shə süi ble-SÉ" },
      { id: "fr-m10-c16", es: "objeto perdido", target: "objet perdu", phon: "ob-ZHÉ pér-DÜ" }
    ],
    dialogue: {
      title: "Au commissariat de police", context: "Declarar un robo en la comisaría de París.",
      lines: [
        { who: "Policier", target: "Bonjour, que s'est-il passé ?", es: "Buenos días, ¿qué ha ocurrido?" },
        { who: "Victime", target: "Bonjour. On m'a volé mon sac dans le métro.", es: "Buenos días. Me han robado el bolso en el metro." },
        { who: "Policier", target: "Qu'y avait-il dans votre sac ?", es: "¿Qué había en su bolso?" },
        { who: "Victime", target: "Mon portefeuille, mon passeport et mes clés.", es: "Mi cartera, mi pasaporte y mis llaves." },
        { who: "Policier", target: "Nous allons rédiger une plainte pour vol.", es: "Vamos a redactar una denuncia por robo." },
        { who: "Victime", target: "Merci. J'ai besoin de ce document pour l'ambassade.", es: "Gracias. Necesito este documento para la embajada." }
      ],
      questions: [
        { q: "¿Dónde robaron el bolso a la víctima?", options: ["En el restaurante", "Dans le métro (en el metro)", "En la calle"], answer: 1 },
        { q: "¿Qué documento redacta la policía?", options: ["Une plainte (una denuncia)", "Un pasaporte nuevo", "Un billete"], answer: 0 },
        { q: "¿A dónde debe acudir tras la denuncia?", options: ["Al hotel", "À l'ambassade (a la embajada)", "Al aeropuerto"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m10-cl1", before: "Au secours ! Appelez la ", blank: "police", after: " !", es: "¡Socorro! ¡Llamen a la policía!", mode: "type" },
      { id: "fr-m10-cl2", before: "On m'a ", blank: "volé", after: " mon sac.", es: "Me han robado el bolso.", mode: "select", options: ["volé", "donné", "lavé", "servi"] },
      { id: "fr-m10-cl3", before: "J'ai perdu mon ", blank: "passeport", after: ".", es: "He perdido mi pasaporte.", mode: "type" }
    ],
    falseFriends: [
      { es: "volar", esMeaning: "to fly", target: "voler", targetMeaning: "volar, ¡pero también robar!" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 11 — Trámites y Banco                                 */
  /* ============================================================ */
  pt.push({
    id: "pt-m11", num: 11, title: "Bancos e burocracia", subtitle: "Dinero, documentos y gestiones oficiales",
    cards: [
      { id: "pt-m11-c01", es: "el banco", target: "o banco", phon: "u BAN-ku" },
      { id: "pt-m11-c02", es: "el cajero automático", target: "o multibanco", phon: "u mul-ti-BAN-ku", note: "En Portugal la red nacional de cajeros se llama «Multibanco»." },
      { id: "pt-m11-c03", es: "la cuenta bancaria", target: "a conta bancária", phon: "a KON-ta ban-KA-ria" },
      { id: "pt-m11-c04", es: "el número fiscal (NIF)", target: "o NIF / número de contribuinte", phon: "u nif / NU-me-ru de kon-tri-bu-IN-te", note: "Imprescindible para cualquier trámite o compra importante en Portugal." },
      { id: "pt-m11-c05", es: "cambiar dinero", target: "trocar dinheiro", phon: "tru-KAR di-ÑEI-ru" },
      { id: "pt-m11-c06", es: "la firma", target: "a assinatura", phon: "a a-si-na-TU-ra" },
      { id: "pt-m11-c07", es: "firmar", target: "assinar", phon: "a-si-NAR" },
      { id: "pt-m11-c08", es: "el formulario", target: "o formulário", phon: "u for-mu-LA-riu" },
      { id: "pt-m11-c09", es: "sacar dinero", target: "levantar dinheiro", phon: "le-van-TAR di-ÑEI-ru" },
      { id: "pt-m11-c10", es: "ingresar dinero", target: "depositar dinheiro", phon: "de-po-zi-TAR di-ÑEI-ru" },
      { id: "pt-m11-c11", es: "comisión bancaria", target: "a comissão", phon: "a ku-mi-SÃU" },
      { id: "pt-m11-c12", es: "la dirección de residencia", target: "a morada", phon: "a mu-RA-da" },
      { id: "pt-m11-c13", es: "comprobante de domicilio", target: "comprovativo de morada", phon: "kom-pru-va-TI-vu de mu-RA-da" },
      { id: "pt-m11-c14", es: "trámite administrativo", target: "o trâmite", phon: "u TRA-mi-te" },
      { id: "pt-m11-c15", es: "cita previa", target: "a marcação prévia", phon: "a mar-ka-SÃU PRE-via" }
    ],
    dialogue: {
      title: "Abrir conta no banco", context: "Solicitar la apertura de una cuenta en un banco portugués.",
      lines: [
        { who: "Funcionário", target: "Bom dia, em que posso ser útil?", es: "Buenos días, ¿en qué puedo serle útil?" },
        { who: "Cliente", target: "Bom dia. Gostaria de abrir uma conta bancária.", es: "Buenos días. Me gustaría abrir una cuenta bancaria." },
        { who: "Funcionário", target: "Com certeza. Tem o seu NIF e o comprovativo de morada?", es: "Por supuesto. ¿Tiene su NIF y el comprobante de domicilio?" },
        { who: "Cliente", target: "Sim, tenho aqui todos os documentos e o passaporte.", es: "Sí, tengo aquí todos los documentos y el pasaporte." },
        { who: "Funcionário", target: "Perfeito. Preencha este formulário e assine no final.", es: "Perfecto. Rellene este formulario y firme al final." },
        { who: "Cliente", target: "Já está assinado. Quando recebo o cartão?", es: "Ya está firmado. ¿Cuándo recibo la tarjeta?" },
        { who: "Funcionário", target: "Chegará à sua morada em cinco dias úteis.", es: "Llegará a su domicilio en cinco días hábiles." }
      ],
      questions: [
        { q: "¿Qué documento fiscal le piden?", options: ["El NIF / contribuinte", "El título de coche", "Un certificado de idioma"], answer: 0 },
        { q: "¿Qué debe hacer con el formulario?", options: ["Leerlo en casa", "Preencher e assinar (rellenar y firmar)", "Tirarlo"], answer: 1 },
        { q: "¿Cuándo llega la tarjeta de crédito/débito?", options: ["Hoy mismo", "En 5 días hábiles", "En un mes"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m11-cl1", before: "Queria ", blank: "levantar", after: " dinheiro no multibanco.", es: "Quería sacar dinero en el cajero.", mode: "type" },
      { id: "pt-m11-cl2", before: "Preciso de um comprovativo de ", blank: "morada", after: ".", es: "Necesito un comprobante de domicilio.", mode: "select", options: ["morada", "comida", "saúde", "noite"] },
      { id: "pt-m11-cl3", before: "Por favor, ", blank: "assine", after: " aqui no fundo.", es: "Por favor, firme aquí al fondo.", mode: "type" }
    ],
    falseFriends: [
      { es: "morada", esMeaning: "dwelling place (poético)", target: "morada", targetMeaning: "dirección postal habitual (uso estándar cotidiano)" },
      { es: "balcón", esMeaning: "balcony", target: "balcão", targetMeaning: "ventanilla o mostrador de atención al público" }
    ]
  });

  fr.push({
    id: "fr-m11", num: 11, title: "Banque et démarches", subtitle: "Dinero, documentos y gestiones oficiales",
    cards: [
      { id: "fr-m11-c01", es: "el banco", target: "la banque", phon: "la bank" },
      { id: "fr-m11-c02", es: "cajero automático", target: "le distributeur de billets", phon: "lə dis-tri-bü-TÖR də bi-YÉ" },
      { id: "fr-m11-c03", es: "la cuenta bancaria", target: "le compte bancaire", phon: "lə kont ban-KÉR" },
      { id: "fr-m11-c04", es: "número de cuenta bancaria", target: "le RIB (Relevé d'Identité Bancaire)", phon: "lə rib", note: "Famoso documento en Francia para cualquier pago o cobro." },
      { id: "fr-m11-c05", es: "cambiar dinero", target: "changer de l'argent", phon: "shan-ZHÉ də lar-ZHAN" },
      { id: "fr-m11-c06", es: "la firma", target: "la signature", phon: "la si-ña-TÜR" },
      { id: "fr-m11-c07", es: "firmar", target: "signer", phon: "si-ÑÉ" },
      { id: "fr-m11-c08", es: "el formulario", target: "le formulaire", phon: "lə for-mü-LÉR" },
      { id: "fr-m11-c09", es: "sacar dinero", target: "retirer de l'argent", phon: "rə-ti-RÉ də lar-ZHAN" },
      { id: "fr-m11-c10", es: "ingresar dinero", target: "déposer de l'argent", phon: "de-po-ZÉ də lar-ZHAN" },
      { id: "fr-m11-c11", es: "gastos bancarios", target: "les frais bancaires", phon: "lé fré ban-KÉR" },
      { id: "fr-m11-c12", es: "el domicilio", target: "le domicile / l'adresse", phon: "lə do-mi-SIL / la-DRES" },
      { id: "fr-m11-c13", es: "comprobante de domicilio", target: "un justificatif de domicile", phon: "un zhus-ti-fi-ka-TIF də do-mi-SIL" },
      { id: "fr-m11-c14", es: "trámite administrativo", target: "une démarche administrative", phon: "ün de-MARSH ad-mi-nis-tra-TIV" },
      { id: "fr-m11-c15", es: "cita previa", target: "un rendez-vous", phon: "an ran-dé-VU" }
    ],
    dialogue: {
      title: "Ouvrir un compte bancaire", context: "Gestión para abrir cuenta en una sucursal en Estrasburgo.",
      lines: [
        { who: "Conseiller", target: "Bonjour, vous avez rendez-vous ?", es: "Buenos días, ¿tiene cita previa?" },
        { who: "Client", target: "Bonjour. Oui, à 10h pour ouvrir un compte bancaire.", es: "Buenos días. Sí, a las 10h para abrir una cuenta bancaria." },
        { who: "Conseiller", target: "Parfait. Avez-vous votre justificatif de domicile et votre passeport ?", es: "Perfecto. ¿Tiene su comprobante de domicilio y su pasaporte?" },
        { who: "Client", target: "Oui, voici une facture d'électricité et mon passeport.", es: "Sí, aquí tiene una factura de electricidad y mi pasaporte." },
        { who: "Conseiller", target: "Très bien. Veuillez signer ce formulaire en bas, s'il vous plaît.", es: "Muy bien. Por favor firme este formulario abajo." },
        { who: "Client", target: "Voilà. Quand vais-je recevoir mon RIB et ma carte ?", es: "Aquí tiene. ¿Cuándo recibiré mi RIB y mi tarjeta?" },
        { who: "Conseiller", target: "Votre RIB est prêt tout de suite. La carte arrivera par courrier sous une semaine.", es: "Su RIB está listo de inmediato. La tarjeta llegará por correo en una semana." }
      ],
      questions: [
        { q: "¿Tenía el cliente cita previa (rendez-vous)?", options: ["Sí, a las 10h", "No, entró sin cita", "Tenía cita por la tarde"], answer: 0 },
        { q: "¿Qué presentó como justificatif de domicile?", options: ["Un billete de avión", "Una facture d'électricité", "Una carta de un amigo"], answer: 1 },
        { q: "¿Cuándo recibe su RIB (número de cuenta)?", options: ["Tout de suite (de inmediato)", "En un mes", "Por teléfono"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m11-cl1", before: "Je voudrais ", blank: "retirer", after: " de l'argent au distributeur.", es: "Quisiera sacar dinero en el cajero.", mode: "type" },
      { id: "fr-m11-cl2", before: "Apportez un justificatif de ", blank: "domicile", after: ".", es: "Traiga un comprobante de domicilio.", mode: "select", options: ["domicile", "voyage", "nom", "sport"] },
      { id: "fr-m11-cl3", before: "Veuillez ", blank: "signer", after: " le document ici.", es: "Por favor firme el documento aquí.", mode: "type" }
    ],
    falseFriends: [
      { es: "demanda", esMeaning: "legal lawsuit", target: "demande", targetMeaning: "solicitud o petición oficial (demandar es «porter plainte»)" }
    ]
  });

  /* ============================================================ /
/ MÓDULO 12 — De Compras y Supermercado                         /
/ ============================================================ */
pt.push({
  id: "pt-m12", num: 12, title: "Ir às compras e supermercado", subtitle: "Tiendas, alimentos y pago en caja",
  cards: [
  { id: "pt-m12-c01", es: "el carrito de compra", target: "o carrinho de compras", phon: "u ka-RRI-ñu de KOM-prash" },
  { id: "pt-m12-c02", es: "la cesta", target: "o cesto", phon: "u SES-tu" },
  { id: "pt-m12-c03", es: "la caja", target: "a caixa", phon: "a KAI-sha" },
  { id: "pt-m12-c04", es: "la bolsa", target: "o saco", phon: "u SA-ku", note: "En Portugal la bolsa de plástico o papel es «saco»." },
  { id: "pt-m12-c05", es: "pagar en efectivo", target: "pagar em dinheiro", phon: "pa-GAR ãi di-ÑEI-ru" },
  { id: "pt-m12-c06", es: "pagar con tarjeta", target: "pagar com cartão", phon: "pa-GAR kon kar-TÃU" },
  { id: "pt-m12-c07", es: "el recibo / ticket", target: "o talão de compra", phon: "u ta-LÃU de KOM-pra" },
  { id: "pt-m12-c08", es: "factura con número fiscal", target: "fatura com NIF", phon: "fa-TU-ra kon NIF", note: "En Portugal siempre te preguntarán si quieres incluir el NIF en la factura." },
  { id: "pt-m12-c09", es: "las verduras", target: "os legumes", phon: "ush le-GU-mesh" },
  { id: "pt-m12-c10", es: "la fruta", target: "a fruta", phon: "a FRU-ta" },
  { id: "pt-m12-c11", es: "la carne", target: "a carne", phon: "a KAR-ne" },
  { id: "pt-m12-c12", es: "el pescado", target: "o peixe", phon: "u PEI-she" },
  { id: "pt-m12-c13", es: "la carnicería", target: "o talho", phon: "u TA-lyu" },
  { id: "pt-m12-c14", es: "la panadería", target: "a padaria", phon: "a pa-da-RI-a" },
  { id: "pt-m12-c15", es: "¿cuánto cuesta esto?", target: "quanto custa isto?", phon: "KUAN-tu KUS-ta ESH-tu" },
  { id: "pt-m12-c16", es: "está de oferta", target: "está em promoção", phon: "shta ãi pru-mu-SÃU" },
  { id: "pt-m12-c17", es: "probarse la ropa", target: "provar a roupa", phon: "pru-VAR a RRO-pa" },
  { id: "pt-m12-c18", es: "el probador", target: "o provador", phon: "u pru-va-DOR" },
  { id: "pt-m12-c19", es: "una talla más grande", target: "um tamanho acima", phon: "ũ ta-MA-ñu a-SI-ma" },
  { id: "pt-m12-c20", es: "una talla más pequeña", target: "um tamanho abaixo", phon: "ũ ta-MA-ñu a-BAI-shu" }
  ],
  dialogue: {
  title: "No supermercado em Lisboa", context: "Pasar por caja tras hacer las compras de la semana.",
  lines: [
  { who: "Operador de caixa", target: "Boa tarde! Precisa de saco?", es: "¡Buenas tardes! ¿Necesita bolsa?" },
  { who: "Cliente", target: "Boa tarde. Sim, um saco por favor.", es: "Buenas tardes. Sí, una bolsa por favor." },
  { who: "Operador de caixa", target: "Vai querer fatura com número de contribuinte?", es: "¿Va a querer factura con número de contribuyente (NIF)?" },
  { who: "Cliente", target: "Não precisa, obrigado.", es: "No hace falta, gracias." },
  { who: "Operador de caixa", target: "São vinte e cinco euros e cinquenta cêntimos. Como vai pagar?", es: "Son veinticinco euros con cincuenta céntimos. ¿Cómo va a pagar?" },
  { who: "Cliente", target: "Vou pagar com cartão Multibanco.", es: "Voy a pagar con tarjeta de débito." },
  { who: "Operador de caixa", target: "Pode encostar o cartão. Aqui tem o talão. Boa tarde!", es: "Puede apoyar la tarjeta (contactless). Aquí tiene el ticket. ¡Buenas tardes!" }
  ],
  questions: [
  { q: "¿Pide el cliente factura con NIF?", options: ["Sí", "No", "Solo si supera 50€"], answer: 1 },
  { q: "¿Cuánto fue el total de la compra?", options: ["15,50 €", "25,50 €", "35,00 €"], answer: 1 },
  { q: "¿Qué método de pago utiliza?", options: ["Efectivo", "Tarjeta Multibanco", "Cheque"], answer: 1 }
  ]
  },
  cloze: [
  { id: "pt-m12-cl1", before: "Quer fatura com ", blank: "NIF", after: "?", es: "¿Quiere factura con número fiscal?", mode: "type" },
  { id: "pt-m12-cl2", before: "Vou pagar com ", blank: "cartão", after: ".", es: "Voy a pagar con tarjeta.", mode: "select", options: ["cartão", "dinheiro", "saco", "talho"] },
  { id: "pt-m12-cl3", before: "Onde ficam os ", blank: "provadores", after: "?", es: "¿Dónde están los probadores?", mode: "type" }
  ],
  falseFriends: [
  { es: "saco", esMeaning: "coat / jacket", target: "saco", targetMeaning: "bolsa (de compras o plástico)" },
  { es: "legumbres", esMeaning: "alubias/garbanzos", target: "legumes", targetMeaning: "hortalizas y verduras en general" }
  ]
  });

  fr.push({
  id: "fr-m12", num: 12, title: "Faire les courses", subtitle: "Tiendas, alimentos y pago en caja",
  cards: [
  { id: "fr-m12-c01", es: "el carrito de compra", target: "le chariot", phon: "lə sha-RIO" },
  { id: "fr-m12-c02", es: "la cesta", target: "le panier", phon: "lə pa-NIÉ" },
  { id: "fr-m12-c03", es: "la caja", target: "la caisse", phon: "la kes" },
  { id: "fr-m12-c04", es: "la bolsa", target: "le sac", phon: "lə sak" },
  { id: "fr-m12-c05", es: "pagar en efectivo", target: "payer en liquide", phon: "pé-YÉ an li-KID" },
  { id: "fr-m12-c06", es: "pagar con tarjeta", target: "payer par carte", phon: "pé-YÉ par kart" },
  { id: "fr-m12-c07", es: "el ticket de compra", target: "le ticket de caisse", phon: "lə ti-KÉ də kes" },
  { id: "fr-m12-c08", es: "el recibo", target: "le reçu", phon: "lə rə-SÜ" },
  { id: "fr-m12-c09", es: "las verduras", target: "les légumes", phon: "lé lé-GÜM" },
  { id: "fr-m12-c10", es: "la fruta", target: "les fruits", phon: "lé frui" },
  { id: "fr-m12-c11", es: "la carne", target: "la viande", phon: "la vi-AND" },
  { id: "fr-m12-c12", es: "el pescado", target: "le poisson", phon: "lə pua-SON" },
  { id: "fr-m12-c13", es: "la carnicería", target: "la boucherie", phon: "la bush-RÍ" },
  { id: "fr-m12-c14", es: "la panadería", target: "la boulangerie", phon: "la bu-lan-zhrí" },
  { id: "fr-m12-c15", es: "¿cuánto cuesta esto?", target: "combien ça coûte ?", phon: "kon-BIAN sa kut" },
  { id: "fr-m12-c16", es: "está de oferta", target: "c'est en promotion", phon: "sé tan pro-mo-SION" },
  { id: "fr-m12-c17", es: "probarse la ropa", target: "essayer le vêtement", phon: "e-sé-YÉ lə vet-MAN" },
  { id: "fr-m12-c18", es: "el probador", target: "la cabine d'essayage", phon: "la ka-BIN de-sé-YAZH" },
  { id: "fr-m12-c19", es: "una talla más grande", target: "une taille au-dessus", phon: "ün tai o-də-SÜ" },
  { id: "fr-m12-c20", es: "una talla más pequeña", target: "une taille en dessous", phon: "ün tai an də-SÜ" }
  ],
  dialogue: {
  title: "À la boulangerie et au supermarché", context: "Comprar pan y pagar los víveres en París.",
  lines: [
  { who: "Caissière", target: "Bonjour ! Vous avez besoin d'un sac ?", es: "¡Buenos días! ¿Necesita una bolsa?" },
  { who: "Client", target: "Oui, un sac réutilisable, s'il vous plaît.", es: "Sí, una bolsa reutilizable, por favor." },
  { who: "Caissière", target: "Très bien. Ça fera vingt-quatre euros cinquante.", es: "Muy bien. Serán veinticuatro euros cincuenta." },
  { who: "Client", target: "Je peux payer par carte sans contact ?", es: "¿Puedo pagar con tarjeta contactless?" },
  { who: "Caissière", target: "Oui, posez la carte sur le lecteur. Désirez-vous le ticket ?", es: "Sí, apoye la tarjeta en el lector. ¿Desea el ticket?" },
  { who: "Client", target: "Non merci, gardez-le. Bonne journée !", es: "No gracias, quédeselo. ¡Buen día!" }
  ],
  questions: [
  { q: "¿Qué tipo de bolsa pide el cliente?", options: ["De plástico fino", "Reutilizable", "Ninguna"], answer: 1 },
  { q: "¿Cuánto cuesta la compra?", options: ["14,50 €", "24,50 €", "34,00 €"], answer: 1 },
  { q: "¿Quiere el ticket de caja?", options: ["Sí", "No", "Solo por email"], answer: 1 }
  ]
  },
  cloze: [
  { id: "fr-m12-cl1", before: "Je peux payer par ", blank: "carte", after: " ?", es: "¿Puedo pagar con tarjeta?", mode: "type" },
  { id: "fr-m12-cl2", before: "Où sont les cabines d'", blank: "essayage", after: " ?", es: "¿Dónde están los probadores?", mode: "select", options: ["essayage", "attente", "caisse", "livraison"] },
  { id: "fr-m12-cl3", before: "Les fruits et ", blank: "légumes", after: " sont très frais.", es: "Las frutas y verduras están muy frescas.", mode: "type" }
  ],
  falseFriends: [
  { es: "magazín / revista", esMeaning: "magazine", target: "magasin", targetMeaning: "tienda / comercio (la revista es «magazine»)" },
  { es: "veneno", esMeaning: "poison", target: "poisson", targetMeaning: "¡pescado! (veneno se escribe «poison» con una sola s)" }
  ]
  });

  /* ============================================================ /
  / MÓDULO 13 — Banco y Correos                                  /
  / ============================================================ */
  pt.push({
  id: "pt-m13", num: 13, title: "No banco e nos correios", subtitle: "Operaciones bancarias, envíos y trámites",
  cards: [
  { id: "pt-m13-c01", es: "el banco", target: "o banco", phon: "u BAN-ku" },
  { id: "pt-m13-c02", es: "la oficina de correos", target: "os CTT / os correios", phon: "ush se-te-TE / ush ku-RREI-ush", note: "En Portugal el servicio postal nacional se conoce popularmente como CTT." },
  { id: "pt-m13-c03", es: "el cajero automático", target: "o Multibanco / o caixote", phon: "u mul-ti-BAN-ku", note: "La red de cajeros en Portugal se llama universalmente «Multibanco»." },
  { id: "pt-m13-c04", es: "la cuenta bancaria", target: "a conta bancária", phon: "a KON-ta ban-KA-ria" },
  { id: "pt-m13-c05", es: "ingresar dinero", target: "depositar dinheiro", phon: "de-pu-zi-TAR di-ÑEI-ru" },
  { id: "pt-m13-c06", es: "sacar dinero", target: "levantar dinheiro", phon: "le-van-TAR di-ÑEI-ru", note: "⚠️ Sacar dinero del cajero se dice «levantar dinheiro»." },
  { id: "pt-m13-c07", es: "la transferencia", target: "a transferência", phon: "a trans-fe-REN-sia" },
  { id: "pt-m13-c08", es: "la carta", target: "a carta", phon: "a KAR-ta" },
  { id: "pt-m13-c09", es: "el sello", target: "o selo", phon: "u SE-lu" },
  { id: "pt-m13-c10", es: "el paquete", target: "a encomenda", phon: "a ẽ-ko-MEN-da" },
  { id: "pt-m13-c11", es: "envío certificado", target: "correio registado", phon: "ku-RREI-u re-jis-TA-du" },
  { id: "pt-m13-c12", es: "la firma", target: "a assinatura", phon: "a a-si-na-TU-ra" },
  { id: "pt-m13-c13", es: "rellenar el formulario", target: "preencher o formulário", phon: "pri-ẽ-SHER u for-mu-LA-riu" },
  { id: "pt-m13-c14", es: "el ventanillo / mostrador", target: "o balcão", phon: "u bal-KÃU" },
  { id: "pt-m13-c15", es: "el número de seguimiento", target: "o código de rastreio", phon: "u KO-di-gu de rash-TREI-u" },
  { id: "pt-m13-c16", es: "¿dónde hay un cajero?", target: "onde há um Multibanco?", phon: "ON-de a ũ mul-ti-BAN-ku" }
  ],
  dialogue: {
  title: "Enviar uma encomenda nos CTT", context: "Enviar un paquete internacional desde una oficina de correos en Oporto.",
  lines: [
  { who: "Funcionário", target: "Bom dia, qual é o serviço que deseja?", es: "Buenos días, ¿qué servicio desea?" },
  { who: "Cliente", target: "Bom dia, queria enviar esta encomenda para Espanha.", es: "Buenos días, quería enviar este paquete a España." },
  { who: "Funcionário", target: "Coloque a caixa na balança, por favor. É correio normal ou registado?", es: "Ponga la caja en la báscula, por favor. ¿Es correo normal o certificado?" },
  { who: "Cliente", target: "Prefiro correio registado para ter código de rastreio.", es: "Prefiero correo certificado para tener número de seguimiento." },
  { who: "Funcionário", target: "Perfeito. Precisa de assinar aqui no formulário.", es: "Perfecto. Necesita firmar aquí en el formulario." },
  { who: "Cliente", target: "Já está. Posso pagar por Multibanco?", es: "Ya está. ¿Puedo pagar con tarjeta?" },
  { who: "Funcionário", target: "Sim, claro. Aqui tem o comprovativo.", es: "Sí, claro. Aquí tiene el comprobante." }
  ],
  questions: [
  { q: "¿A dónde envía el paquete?", options: ["A Francia", "A España", "A Brasil"], answer: 1 },
  { q: "¿Qué modalidad de envío eligió?", options: ["Normal", "Registado (certificado)", "Urgente por avión"], answer: 1 },
  { q: "¿Qué debe hacer el cliente antes de pagar?", options: ["Firmar el formulario", "Enseñar el NIF", "Comprar una caja nueva"], answer: 0 }
  ]
  },
  cloze: [
  { id: "pt-m13-cl1", before: "Preciso de ", blank: "levantar", after: " dinheiro no Multibanco.", es: "Necesito sacar dinero en el cajero.", mode: "type" },
  { id: "pt-m13-cl2", before: "Queria enviar esta ", blank: "encomenda", after: " por correio registado.", es: "Quería enviar este paquete por correo certificado.", mode: "select", options: ["encomenda", "assinatura", "varanda", "dor"] },
  { id: "pt-m13-cl3", before: "Pode colocar a sua ", blank: "assinatura", after: " aqui?", es: "¿Puede poner su firma aquí?", mode: "type" }
  ],
  falseFriends: [
  { es: "encomienda", esMeaning: "encargo o pedido", target: "encomenda", targetMeaning: "paquete postal para envío" },
  { es: "balcón", esMeaning: "balcony", target: "balcão", targetMeaning: "mostrador o ventanilla de atención al público" }
  ]
  });

  fr.push({
  id: "fr-m13", num: 13, title: "À la banque et à la poste", subtitle: "Operaciones bancarias, envíos y trámites",
  cards: [
  { id: "fr-m13-c01", es: "el banco", target: "la banque", phon: "la bank" },
  { id: "fr-m13-c02", es: "la oficina de correos", target: "La Poste / le bureau de poste", phon: "la post / lə bü-RO də post" },
  { id: "fr-m13-c03", es: "el cajero automático", target: "le distributeur de billets (DAB)", phon: "lə dis-tri-bü-TÖR də bi-YÉ" },
  { id: "fr-m13-c04", es: "la cuenta bancaria", target: "le compte bancaire", phon: "lə kont ban-KÉR" },
  { id: "fr-m13-c05", es: "ingresar dinero", target: "déposer de l'argent", phon: "dé-po-ZÉ də lar-ZHAN" },
  { id: "fr-m13-c06", es: "sacar dinero", target: "retirer de l'argent", phon: "rə-ti-RÉ də lar-ZHAN" },
  { id: "fr-m13-c07", es: "la transferencia", target: "le virement bancaire", phon: "lə vir-MAN ban-KÉR" },
  { id: "fr-m13-c08", es: "la carta", target: "la lettre", phon: "la letr" },
  { id: "fr-m13-c09", es: "el sello", target: "le timbre", phon: "lə tambr" },
  { id: "fr-m13-c10", es: "el paquete", target: "le colis", phon: "lə ko-LÍ" },
  { id: "fr-m13-c11", es: "envío certificado", target: "un envoi recommandé", phon: "an an-VUA rə-ko-man-DÉ" },
  { id: "fr-m13-c12", es: "la firma", target: "la signature", phon: "la si-ña-TÜR" },
  { id: "fr-m13-c13", es: "rellenar el formulario", target: "remplir le formulaire", phon: "ran-PLIR lə for-mü-LÉR" },
  { id: "fr-m13-c14", es: "el guichet / ventanilla", target: "le guichet", phon: "lə ghi-SHÉ" },
  { id: "fr-m13-c15", es: "el número de seguimiento", target: "le numéro de suivi", phon: "lə nü-mé-RO də süi-VI" },
  { id: "fr-m13-c16", es: "el justificante bancario", target: "le RIB", phon: "lə rib", note: "El documento con IBAN e información bancaria en Francia se conoce como RIB." }
  ],
  dialogue: {
  title: "Envoyer un colis à La Poste", context: "Enviar un paquete desde la oficina postal de Lyon.",
  lines: [
  { who: "Guichetier", target: "Bonjour, qu'aimeriez-vous faire aujourd'hui ?", es: "Buenos días, ¿qué querría hacer hoy?" },
  { who: "Client", target: "Bonjour, je voudrais envoyer ce colis en Espagne.", es: "Buenos días, quisiera enviar este paquete a España." },
  { who: "Guichetier", target: "Posez-le sur la balance. Vous préférez un envoi simple ou recommandé ?", es: "Póngalo en la báscula. ¿Prefiere envío simple o certificado?" },
  { who: "Client", target: "Recommandé, avec numéro de suivi s'il vous plaît.", es: "Certificado, con número de seguimiento por favor." },
  { who: "Guichetier", target: "Parfait. Veuillez signer sur l'écran boîtier.", es: "Perfecto. Por favor firme en la pantalla digital." },
  { who: "Client", target: "C'est fait. Voici ma carte bancaire.", es: "Ya está. Aquí tiene mi tarjeta bancaria." }
  ],
  questions: [
  { q: "¿A dónde va el paquete?", options: ["A Italia", "A España", "A Bélgica"], answer: 1 },
  { q: "¿Qué tipo de envío elige el cliente?", options: ["Simple", "Recommandé (certificado)", "Chronopost exprés"], answer: 1 },
  { q: "¿Dónde firma el cliente?", options: ["En un papel", "En la pantalla digital", "No hace falta firma"], answer: 1 }
  ]
  },
  cloze: [
  { id: "fr-m13-cl1", before: "Je voudrais ", blank: "retirer", after: " de l'argent au distributeur.", es: "Quisiera sacar dinero en el cajero.", mode: "type" },
  { id: "fr-m13-cl2", before: "Voici mon numéro de ", blank: "suivi", after: " pour le colis.", es: "Aquí está mi número de seguimiento para el paquete.", mode: "select", options: ["suivi", "banque", "timbre", "billet"] },
  { id: "fr-m13-cl3", before: "Veuillez remplir ce ", blank: "formulaire", after: ".", es: "Por favor rellene este formulario.", mode: "type" }
  ],
  falseFriends: [
  { es: "timbre", esMeaning: "doorbell", target: "timbre", targetMeaning: "sello postal para cartas (el timbre de casa es «sonnette»)" }
  ]
  });

  /* ============================================================ /
  / MÓDULO 14 — Buscar Piso y Alquiler                           /
  / ============================================================ */
  pt.push({
  id: "pt-m14", num: 14, title: "Alugar casa e alojamento", subtitle: "Búsqueda de vivienda, alquiler y contratos",
  cards: [
  { id: "pt-m14-c01", es: "el piso / apartamento", target: "o apartamento", phon: "u a-par-ta-MEN-tu" },
  { id: "pt-m14-c02", es: "el alquiler (mensualidad)", target: "a renda", phon: "a REN-da", note: "En Portugal la mensualidad del alquiler es «a renda»." },
  { id: "pt-m14-c03", es: "la fianza", target: "a caução", phon: "a kaw-SÃU" },
  { id: "pt-m14-c04", es: "el casero / propietario", target: "o senhorio", phon: "u se-ño-RI-u" },
  { id: "pt-m14-c05", es: "el inquilino", target: "o inquilino", phon: "u in-ki-LI-nu" },
  { id: "pt-m14-c06", es: "gastos incluidos", target: "despesas incluídas", phon: "desh-PE-zash in-klui-DASH" },
  { id: "pt-m14-c07", es: "contrato de arrendamiento", target: "contrato de arrendamento", phon: "kon-TRA-tu de a-rren-da-MEN-tu" },
  { id: "pt-m14-c08", es: "el cuarto de baño", target: "a casa de banho", phon: "a KA-za de BA-ñu" },
  { id: "pt-m14-c09", es: "el salón", target: "a sala de estar", phon: "a SA-la de esh-TAR" },
  { id: "pt-m14-c10", es: "la cocina", target: "a cozinha", phon: "a ku-ZI-ña" },
  { id: "pt-m14-c11", es: "el balcón / terraza", target: "a varanda", phon: "a va-RAN-da" },
  { id: "pt-m14-c12", es: "amueblado", target: "mobilado", phon: "mu-bi-LA-du" },
  { id: "pt-m14-c13", es: "los electrodomésticos", target: "os eletrodomésticos", phon: "ush e-le-tru-du-MES-ti-kush" },
  { id: "pt-m14-c14", es: "las llaves", target: "as chaves", phon: "ash SHA-vesh" },
  { id: "pt-m14-c15", es: "piso de 1 dormitorio", target: "apartamento T1", phon: "a-par-ta-MEN-tu té-UM", note: "En Portugal los pisos se clasifican por T0 (estudio), T1, T2 según el número de dormitorios." },
  { id: "pt-m14-c16", es: "la dirección de residencia", target: "a morada", phon: "a mu-RA-da" }
  ],
  dialogue: {
  title: "Visitar um apartamento T1", context: "Visitar un piso de alquiler con el casero en Coímbra.",
  lines: [
  { who: "Senhorio", target: "Boa tarde. Este é o apartamento. Como pode ver, está totalmente mobilado.", es: "Buenas tardes. Este es el apartamento. Como puede ver, está totalmente amueblado." },
  { who: "Inquilino", target: "Boa tarde. Gosto muito da luz natural. As despesas estão incluídas na renda?", es: "Buenas tardes. Me gusta mucho la luz natural. ¿Los gastos están incluidos en el alquiler?" },
  { who: "Senhorio", target: "A água e a internet sim, mas a eletricidade é à parte.", es: "El agua e internet sí, pero la electricidad va aparte." },
  { who: "Inquilino", target: "Entendido. Qual é o valor da caução?", es: "Entendido. ¿Cuál es el importe de la fianza?" },
  { who: "Senhorio", target: "Pço dois meses de renda adiantada mais um mês de caução.", es: "Pido dos meses de alquiler adelantado más un mes de fianza." },
  { who: "Inquilino", target: "Está bem, gostaria de assinar o contrato de arrendamento.", es: "Está bien, me gustaría firmar el contrato de arrendamiento." }
  ],
  questions: [
  { q: "¿Qué gasto NO está incluido en el alquiler?", options: ["El agua", "La electricidad", "La internet"], answer: 1 },
  { q: "¿De qué tipo es el piso?", options: ["T0 (estudio)", "T1 (un dormitorio)", "T3 (tres dormitorios)"], answer: 1 },
  { q: "¿Cuántos meses de fianza pide el casero?", options: ["Un mes", "Dos meses", "Tres meses"], answer: 0 }
  ]
  },
  cloze: [
  { id: "pt-m14-cl1", before: "Qual é o valor mensal da ", blank: "renda", after: "?", es: "¿Cuál es el valor mensual del alquiler?", mode: "type" },
  { id: "pt-m14-cl2", before: "O apartamento é um ", blank: "T1", after: " mobilado.", es: "El apartamento es un T1 amueblado.", mode: "select", options: ["T1", "carro", "saco", "talão"] },
  { id: "pt-m14-cl3", before: "Qual é a sua ", blank: "morada", after: " em Portugal?", es: "¿Cuál es su dirección de residencia en Portugal?", mode: "type" }
  ],
  falseFriends: [
  { es: "renta", esMeaning: "income tax / ganancias", target: "renda", targetMeaning: "alquiler mensual de la casa" },
  { es: "morada", esMeaning: "purple color / dwell", target: "morada", targetMeaning: "dirección postal / domicilio de residencia" }
  ]
  });

  fr.push({
  id: "fr-m14", num: 14, title: "Louer un logement", subtitle: "Búsqueda de vivienda, alquiler y contratos",
  cards: [
  { id: "fr-m14-c01", es: "el apartamento", target: "l'appartement", phon: "la-par-tə-MAN" },
  { id: "fr-m14-c02", es: "el alquiler", target: "le loyer", phon: "lə lua-YÉ" },
  { id: "fr-m14-c03", es: "la fianza", target: "le dépôt de garantie / la caution", phon: "lə dé-PO də ga-ran-TÍ" },
  { id: "fr-m14-c04", es: "el propietario", target: "le propriétaire", phon: "lə pro-pri-é-TÉR" },
  { id: "fr-m14-c05", es: "el inquilino", target: "le locataire", phon: "lə lo-ka-TÉR" },
  { id: "fr-m14-c06", es: "gastos incluidos", target: "charges comprises (CC)", phon: "sharzh kon-PRIZ" },
  { id: "fr-m14-c07", es: "el contrato de alquiler", target: "le bail de location", phon: "lə bel də lo-ka-SION" },
  { id: "fr-m14-c08", es: "el cuarto de baño", target: "la salle de bain", phon: "la sal də ban" },
  { id: "fr-m14-c09", es: "el salón", target: "le séjour / le salon", phon: "lə sé-ZHUR" },
  { id: "fr-m14-c10", es: "la cocina", target: "la cuisine", phon: "la küi-ZIN" },
  { id: "fr-m14-c11", es: "el balcón", target: "le balcon", phon: "lə bal-KON" },
  { id: "fr-m14-c12", es: "amueblado", target: "meublé", phon: "mö-BLÉ" },
  { id: "fr-m14-c13", es: "los electrodomésticos", target: "les appareils électroménagers", phon: "lé za-pa-REY e-lek-tro-mé-na-ZHER" },
  { id: "fr-m14-c14", es: "las llaves", target: "les clés", phon: "lé kle" },
  { id: "fr-m14-c15", es: "estudio / dos habitaciones", target: "le studio / le T2", phon: "lə stü-DIO / lə té-DÖ" },
  { id: "fr-m14-c16", es: "el avalista", target: "le garant", phon: "lə ga-RAN" }
  ],
  dialogue: {
  title: "Visite d'un appartement meublé", context: "Visita de un inmueble de alquiler en Marsella.",
  lines: [
  { who: "Propriétaire", target: "Bonjour. Voici le séjour, l'appartement est entièrement meublé.", es: "Buenos días. Aquí está el salón, el piso está totalmente amueblado." },
  { who: "Locataire", target: "Bonjour. C'est très lumineux. Le loyer est de combien par mois ?", es: "Buenos días. Es muy luminoso. ¿Cuánto es el alquiler al mes?" },
  { who: "Propriétaire", target: "C'est 750 euros par mois, charges comprises.", es: "Son 750 euros al mes, gastos incluidos." },
  { who: "Locataire", target: "D'accord. Quel est le montant du dépôt de garantie ?", es: "De acuerdo. ¿Cuál es el importe de la fianza?" },
  { who: "Propriétaire", target: "Un mois de loyer hors charges. Avez-vous un garant ?", es: "Un mes de alquiler sin gastos. ¿Tiene un avalista?" },
  { who: "Locataire", target: "Oui, j'ai tous les documents nécessaires dans mon dossier.", es: "Sí, tengo todos los documentos necesarios en mi expediente." }
  ],
  questions: [
  { q: "¿Cuánto cuesta el alquiler al mes?", options: ["550 €", "750 € CC", "950 €"], answer: 1 },
  { q: "¿Está el piso amueblado?", options: ["Sí (meublé)", "No (vide)", "Solo la cocina"], answer: 0 },
  { q: "¿Pide el propietario un avalista (garant)?", options: ["Sí", "No", "Solo si es estudiante"], answer: 0 }
  ]
  },
  cloze: [
  { id: "fr-m14-cl1", before: "Le loyer est de 700 euros charges ", blank: "comprises", after: ".", es: "El alquiler es de 700 euros gastos incluidos.", mode: "select", options: ["comprises", "ouvertes", "libres", "chères"] },
  { id: "fr-m14-cl2", before: "J'ai besoin de signer le ", blank: "bail", after: " de location.", es: "Necesito firmar el contrato de alquiler.", mode: "type" },
  { id: "fr-m14-cl3", before: "Avez-vous un ", blank: "garant", after: " en France ?", es: "¿Tiene un avalista en Francia?", mode: "type" }
  ],
  falseFriends: [
  { es: "location", esMeaning: "ubicación", target: "location", targetMeaning: "alquiler o arrendamiento (ubicación es «emplacement»)" }
  ]
  });

  /* ============================================================ /
  / MÓDULO 15 — Emergencias y Policía                            /
  / ============================================================ */
  pt.push({
  id: "pt-m15", num: 15, title: "Emergências e polícia", subtitle: "Asistencia médica urgente, robos y denuncia",
  cards: [
  { id: "pt-m15-c01", es: "la emergencia", target: "a emergência", phon: "a e-mer-JEN-sia" },
  { id: "pt-m15-c02", es: "la policía", target: "a polícia / a PSP", phon: "a po-LI-sia / a pe-es-PE", note: "En ciudades portuguesas opera la PSP (Polícia de Segurança Pública); en zonas rurales la GNR." },
  { id: "pt-m15-c03", es: "los bomberos", target: "os bombeiros", phon: "ush bom-BEI-rush" },
  { id: "pt-m15-c04", es: "la ambulancia", target: "a ambulância", phon: "a am-bu-LAN-sia" },
  { id: "pt-m15-c05", es: "el robo / hurto", target: "o roubo / o furto", phon: "u RRO-bu / u FUR-tu" },
  { id: "pt-m15-c06", es: "perdí la cartera", target: "perdi a carteira", phon: "per-DI a kar-TEI-ra" },
  { id: "pt-m15-c07", es: "hacer una denuncia", target: "fazer uma queixa", phon: "fa-ZER U-ma KEI-sha" },
  { id: "pt-m15-c08", es: "la comisaría de policía", target: "a esquadra de polícia", phon: "a esh-KUA-dra de po-LI-sia" },
  { id: "pt-m15-c09", es: "el accidente", target: "o acidente", phon: "u a-si-DEN-te" },
  { id: "pt-m15-c10", es: "¡socorro!", target: "socorro!", phon: "su-KO-rru" },
  { id: "pt-m15-c11", es: "necesito ayuda", target: "preciso de ajuda", phon: "pre-SI-zu de a-JU-da" },
  { id: "pt-m15-c12", es: "¿dónde está el hospital?", target: "onde fica o hospital?", phon: "ON-de FI-ka u osh-pi-TAL" },
  { id: "pt-m15-c13", es: "el pasaporte robado", target: "o passaporte roubado", phon: "u pa-sa-POR-te rru-BA-du" },
  { id: "pt-m15-c14", es: "el testigo", target: "a testemunha", phon: "a tesh-te-MU-ña" },
  { id: "pt-m15-c15", es: "llame al 112", target: "ligue para o 112", phon: "LI-ghe pa-ra u SENTO-E-DOZE" }
  ],
  dialogue: {
  title: "Na esquadra da PSP", context: "Presentar una denuncia por robo de equipaje en la comisaría.",
  lines: [
  { who: "Polícia", target: "Boa tarde, em que posso ajudar?", es: "Buenas tardes, ¿en qué puedo ayudarle?" },
  { who: "Cidadão", target: "Boa tarde, queria fazer uma queixa. Roubaram-me a mochila na estação.", es: "Buenas tardes, quería poner una denuncia. Me robaron la mochila en la estación." },
  { who: "Polícia", target: "Lamento. O que tinha dentro da mochila?", es: "Lo lamento. ¿Qué tenía dentro de la mochila?" },
  { who: "Cidadão", target: "Tinha a minha carteira, os documentos e o telemóvel.", es: "Tenía mi cartera, los documentos y el teléfono móvil." },
  { who: "Polícia", target: "Pode descrever o suspeito ou viu alguma testemunha?", es: "¿Puede describir al sospechoso o vio algún testigo?" },
  { who: "Cidadão", target: "Não vi nada, aconteceu muito rápido.", es: "No vi nada, ocurrió muy rápido." },
  { who: "Polícia", target: "Vou preencher o auto de denúncia para o seu seguro.", es: "Voy a redactar la acta de denuncia para su seguro." }
  ],
  questions: [
  { q: "¿Dónde ocurrió el robo?", options: ["En el hotel", "En la estación", "En la playa"], answer: 1 },
  { q: "¿Qué había dentro de la mochila?", options: ["Solo ropa", "Cartera, documentos y móvil", "Una cámara fotográfica"], answer: 1 },
  { q: "¿Para qué sirve el documento que redacta el policía?", options: ["Para viajar gratis", "Para el seguro (auto de denúncia)", "Para pedir dinero"], answer: 1 }
  ]
  },
  cloze: [
  { id: "pt-m15-cl1", before: "Preciso de ir à ", blank: "esquadra", after: " para fazer uma queixa.", es: "Necesito ir a la comisaría para poner una denuncia.", mode: "type" },
  { id: "pt-m15-cl2", before: "Ligue imediatamente para o ", blank: "112", after: ".", es: "Llame inmediatamente al 112.", mode: "select", options: ["112", "911", "060", "100"] },
  { id: "pt-m15-cl3", before: "Roubaram-me o ", blank: "passaporte", after: " na praia.", es: "Me robaron el pasaporte en la playa.", mode: "type" }
  ],
  falseFriends: [
  { es: "escuadra", esMeaning: "ruler / naval fleet", target: "esquadra", targetMeaning: "comisaría de policía de la PSP" },
  { es: "queja", esMeaning: "complaint / reclamación", target: "queixa", targetMeaning: "denuncia policial formal" }
  ]
  });

  fr.push({
  id: "fr-m15", num: 15, title: "Urgences et police", subtitle: "Asistencia médica urgente, robos y denuncia",
  cards: [
  { id: "fr-m15-c01", es: "la emergencia", target: "l'urgence", phon: "lür-ZHAL-ns" },
  { id: "fr-m15-c02", es: "la policía", target: "la police", phon: "la po-LIS" },
  { id: "fr-m15-c03", es: "los bomberos", target: "les pompiers", phon: "lé pon-PIÉ" },
  { id: "fr-m15-c04", es: "la ambulancia", target: "l'ambulance / le SAMU", phon: "lam-bü-LANS / lə sa-MÜ" },
  { id: "fr-m15-c05", es: "el robo", target: "le vol", phon: "lə vol" },
  { id: "fr-m15-c06", es: "perdí la cartera", target: "j'ai perdu mon portefeuille", phon: "shé pér-DÜ mon por-tə-FÖY" },
  { id: "fr-m15-c07", es: "poner una denuncia", target: "porter plainte", phon: "por-TÉ plant" },
  { id: "fr-m15-c08", es: "la comisaría", target: "le commissariat", phon: "lə ko-mi-sa-RIA" },
  { id: "fr-m15-c09", es: "el accidente", target: "l'accident", phon: "lak-si-DAN" },
  { id: "fr-m15-c10", es: "¡socorro!", target: "au secours !", phon: "o sə-KUR" },
  { id: "fr-m15-c11", es: "necesito ayuda", target: "j'ai besoin d'aide", phon: "shé bə-ZWAN ded" },
  { id: "fr-m15-c12", es: "¿dónde está el hospital?", target: "où est l'hôpital ?", phon: "u é lo-pi-TAL" },
  { id: "fr-m15-c13", es: "el pasaporte robado", target: "le passeport volé", phon: "lə pas-POR vo-LÉ" },
  { id: "fr-m15-c14", es: "el testigo", target: "le témoin", phon: "lə té-MWAN" },
  { id: "fr-m15-c15", es: "llame al 112", target: "appelez le 112", phon: "a-plé lə 112" }
  ],
  dialogue: {
  title: "Au commissariat de police", context: "Denunciar la sustracción de una bolsa en Lille.",
  lines: [
  { who: "Policier", target: "Bonjour, que s'est-il passé ?", es: "Buenos días, ¿qué ha pasado?" },
  { who: "Victime", target: "Bonjour, je viens porter plainte. On m'a volé mon sac dans le métro.", es: "Buenos días, vengo a poner una denuncia. Me han robado la bolsa en el metro." },
  { who: "Policier", target: "D'accord. Qu'y avait-il à l'intérieur du sac ?", es: "De acuerdo. ¿Qué había en el interior de la bolsa?" },
  { who: "Victime", target: "Mon portefeuille avec mes cartes et mon téléphone portable.", es: "Mi cartera con mis tarjetas y mi teléfono móvil." },
  { who: "Policier", target: "Avez-vous remarqué quelqu'un de suspect ?", es: "¿Notó a alguien sospechoso?" },
  { who: "Victime", target: "Non, il y avait beaucoup de monde dans la rame.", es: "No, había mucha gente en el vagón." },
  { who: "Policier", target: "Voici le récépissé de votre plainte pour l'assurance.", es: "Aquí tiene el justificante de su denuncia para el seguro." }
  ],
  questions: [
  { q: "¿Dónde ocurrió el robo?", options: ["En el autobús", "En el metro", "En un café"], answer: 1 },
  { q: "¿Por qué acude al comisariado?", options: ["Para renovar pasaporte", "Para porter plainte (denunciar)", "Para pagar una multa"], answer: 1 },
  { q: "¿Qué le entregan al final?", options: ["El justificante para el seguro", "Una cartera nueva", "Un billete de tren"], answer: 0 }
  ]
  },
  cloze: [
  { id: "fr-m15-cl1", before: "Je voudrais porter ", blank: "plainte", after: " pour vol.", es: "Quisiera poner una denuncia por robo.", mode: "type" },
  { id: "fr-m15-cl2", before: "Appelez vite les ", blank: "pompiers", after: " !", es: "¡Llame rápido a los bomberos!", mode: "select", options: ["pompiers", "magasins", "serveurs", "virements"] },
  { id: "fr-m15-cl3", before: "Où se trouve le ", blank: "commissariat", after: " le plus proche ?", es: "¿Dónde se encuentra la comisaría más cercana?", mode: "type" }
  ],
  falseFriends: [
  { es: "vuelo", esMeaning: "flight", target: "vol", targetMeaning: "robo o hurto (también vuelo de avión, depende del contexto)" }
  ]
  });

  /* ============================================================ /
  / MÓDULO 16 — Ocio, Cultura y Turismo                          /
  / ============================================================ */
  pt.push({
  id: "pt-m16", num: 16, title: "Lazer, cultura e turismo", subtitle: "Museos, entradas, espectáculos y visitas",
  cards: [
  { id: "pt-m16-c01", es: "el museo", target: "o museu", phon: "u mu-ZEU" },
  { id: "pt-m16-c02", es: "la taquilla", target: "a bilheteira", phon: "a bi-lye-TEI-ra" },
  { id: "pt-m16-c03", es: "la visita guiada", target: "a visita guiada", phon: "a vi-ZI-ta gi-A-da" },
  { id: "pt-m16-c04", es: "la exposición", target: "a exposição", phon: "a esh-pu-zi-SÃU" },
  { id: "pt-m16-c05", es: "el espectáculo", target: "o espetáculo", phon: "u esh-pe-TA-ku-lu" },
  { id: "pt-m16-c06", es: "el concierto", target: "o concerto", phon: "u kon-SER-tu" },
  { id: "pt-m16-c07", es: "el monumento", target: "o monumento", phon: "u mu-nu-MEN-tu" },
  { id: "pt-m16-c08", es: "entrada gratuita", target: "entrada livre / gratuita", phon: "ẽ-TRA-da LI-vre" },
  { id: "pt-m16-c09", es: "horario de apertura", target: "horário de funcionamento", phon: "u o-RA-riu de fun-sio-na-MEN-tu" },
  { id: "pt-m16-c10", es: "¿se pueden hacer fotos?", target: "é permitido tirar fotografias?", phon: "e per-mi-TI-du ti-RAR fo-tu-gra-FI-ash" },
  { id: "pt-m16-c11", es: "descuento de estudiante", target: "desconto de estudante", phon: "desh-KON-tu de esh-tu-DAN-te" },
  { id: "pt-m16-c12", es: "obra de arte", target: "a obra de arte", phon: "a O-bra de AR-te" },
  { id: "pt-m16-c13", es: "el folleto", target: "o folheto", phon: "u fu-LYE-tu" },
  { id: "pt-m16-c14", es: "la vista panorámica", target: "o miradouro", phon: "u mi-ra-DOH-ru", note: "En Portugal los miradores urbanos y paisajísticos se denominan «miradouros»." }
  ],
  dialogue: {
  title: "Comprar bilhetes para o museu", context: "Comprar entradas en la taquilla de la Torre de Belém o un museo en Lisboa.",
  lines: [
  { who: "Bilheteira", target: "Boa tarde, bem-vindo! Quantos bilhetes deseja?", es: "¡Buenas tardes, bienvenido! ¿Cuántas entradas desea?" },
  { who: "Visitante", target: "Boa tarde. Queria dois bilhetes de adulto e um de estudante.", es: "Buenas tardes. Quería dos entradas de adulto y una de estudiante." },
  { who: "Bilheteira", target: "Com certeza. Pode mostrar o cartão de estudante, por favor?", es: "Por supuesto. ¿Puede mostrar el carnet de estudiante, por favor?" },
  { who: "Visitante", target: "Aqui tem. A entrada inclui a visita guiada?", es: "Aquí tiene. ¿La entrada incluye la visita guiada?" },
  { who: "Bilheteira", target: "Sim, a próxima começa às 15 horas no átrio principal.", es: "Sí, la próxima empieza a las 15 horas en el vestíbulo principal." },
  { who: "Visitante", target: "Excelente. É permitido tirar fotografias lá dentro?", es: "Excelente. ¿Está permitido sacar fotos allí dentro?" },
  { who: "Bilheteira", target: "Sim, mas sem flash. Boa visita!", es: "Sí, pero sin flash. ¡Buena visita!" }
  ],
  questions: [
  { q: "¿Qué tipo de entradas solicita?", options: ["3 de adulto", "2 de adulto y 1 de estudiante", "Solo 1 de niño"], answer: 1 },
  { q: "¿A qué hora arranca la visita guiada?", options: ["14h", "15h", "16h"], answer: 1 },
  { q: "¿Se pueden tomar fotografías?", options: ["No, prohibido", "Sí, pero sin flash", "Solo con permiso especial"], answer: 1 }
  ]
  },
  cloze: [
  { id: "pt-m16-cl1", before: "Queria dois ", blank: "bilhetes", after: " para a exposição.", es: "Quería dos entradas para la exposición.", mode: "type" },
  { id: "pt-m16-cl2", before: "Vamos ver a cidade a partir do ", blank: "miradouro", after: ".", es: "Vamos a ver la ciudad desde el mirador.", mode: "select", options: ["miradouro", "talho", "remedio", "saco"] },
  { id: "pt-m16-cl3", before: "Tem desconto de ", blank: "estudante", after: "?", es: "¿Tiene descuento de estudiante?", mode: "type" }
  ],
  falseFriends: [
  { es: "billete", esMeaning: "papel moneda / banknote", target: "bilhete", targetMeaning: "entrada o boleto para cine, tren, espectáculo o museo" },
  { es: "mirador", esMeaning: "lookout point", target: "miradouro", targetMeaning: "mirador tradicional elevado (muy común en Lisboa/Oporto)" }
  ]
  });

  fr.push({
  id: "fr-m16", num: 16, title: "Loisirs, culture et activités", subtitle: "Museos, entradas, espectáculos y visitas",
  cards: [
  { id: "fr-m16-c01", es: "el museo", target: "le musée", phon: "lə mü-ZÉ" },
  { id: "fr-m16-c02", es: "la taquilla", target: "la billetterie", phon: "la bi-yə-TRÍ" },
  { id: "fr-m16-c03", es: "la visita guiada", target: "la visite guidée", phon: "la vi-ZIT gi-DÉ" },
  { id: "fr-m16-c04", es: "la exposición", target: "l'exposition", phon: "leks-po-zi-SION" },
  { id: "fr-m16-c05", es: "el espectáculo", target: "le spectacle", phon: "lə spek-TAKL" },
  { id: "fr-m16-c06", es: "el concierto", target: "le concert", phon: "lə kon-SÉR" },
  { id: "fr-m16-c07", es: "el monumento", target: "le monument", phon: "lə mo-nü-MAN" },
  { id: "fr-m16-c08", es: "entrada gratuita", target: "l'entrée gratuite", phon: "lan-TRÉ gra-TÜIT" },
  { id: "fr-m16-c09", es: "horario de apertura", target: "les heures d'ouverture", phon: "lé zör du-vér-TÜR" },
  { id: "fr-m16-c10", es: "¿se pueden hacer fotos?", target: "est-il permis de prendre des photos ?", phon: "é-til pér-MI də pran-drə dé fo-TO" },
  { id: "fr-m16-c11", es: "descuento de estudiante", target: "la réduction étudiant", phon: "la ré-dük-SION é-tü-DIAN" },
  { id: "fr-m16-c12", es: "obra de arte", target: "l'œuvre d'art", phon: "lövr dar" },
  { id: "fr-m16-c13", es: "el folleto", target: "le dépliant / la brochure", phon: "lə dé-pli-AN" },
  { id: "fr-m16-c14", es: "el punto de vista panorámico", target: "le point de vue", phon: "lə pwan də vü" }
  ],
  dialogue: {
  title: "Acheter des billets au Musée du Louvre", context: "Comprar entradas en la taquilla de un museo en París.",
  lines: [
  { who: "Guichetier", target: "Bonjour ! Combien de billets souhaitez-vous ?", es: "¡Buenos días! ¿Cuántas entradas desea?" },
  { who: "Visiteur", target: "Bonjour. Je voudrais deux billets adulte et un billet tarif réduit.", es: "Buenos días. Quisiera dos entradas de adulto y una tarifa reducida." },
  { who: "Guichetier", target: "Très bien. Avez-vous une pièce justificative pour le tarif réduit ?", es: "Muy bien. ¿Tiene un documento justificativo para la tarifa reducida?" },
  { who: "Visiteur", target: "Oui, voici ma carte d'étudiant.", es: "Sí, aquí tiene mi carnet de estudiante." },
  { who: "Guichetier", target: "Parfait. La visite guidée commence dans vingt minutes.", es: "Perfecto. La visita guiada empieza en veinte minutos." },
  { who: "Visiteur", target: "Merci ! Est-ce qu'on peut prendre des photos à l'intérieur ?", es: "¡Gracias! ¿Se pueden hacer fotos dentro?" },
  { who: "Guichetier", target: "Oui, sans flash uniquement. Bonne visite !", es: "Sí, únicamente sin flash. ¡Buena visita!" }
  ],
  questions: [
  { q: "¿Qué justifica el descuento?", options: ["La edad sénior", "La tarjeta de estudiante", "Ser residente local"], answer: 1 },
  { q: "¿En cuánto tiempo arranca la visita guiada?", options: ["10 minutos", "20 minutos", "1 hora"], answer: 1 },
  { q: "¿Cuál es la norma sobre las fotografías?", options: ["Prohibidas", "Permitidas sin flash", "Libres con flash"], answer: 1 }
  ]
  },
  cloze: [
  { id: "fr-m16-cl1", before: "Avez-vous une réduction ", blank: "étudiant", after: " ?", es: "¿Tiene descuento de estudiante?", mode: "type" },
  { id: "fr-m16-cl2", before: "L'entrée au musée est ", blank: "gratuite", after: " le premier dimanche du mois.", es: "La entrada al museo es gratuita el primer domingo del mes.", mode: "select", options: ["gratuite", "chère", "fermée", "loin"] },
  { id: "fr-m16-cl3", before: "Est-il permis de prendre des ", blank: "photos", after: " ?", es: "¿Se pueden hacer fotos?", mode: "type" }
  ],
  falseFriends: [
  { es: "gratis", esMeaning: "free of charge", target: "gratuit", targetMeaning: "gratuito (en francés es adjetivo: «entrée gratuite»)" }
  ]
  });

/* ============================================================ */
/* MÓDULO 17 — Emergências / Urgences                            */
/* ============================================================ */
pt.push({
  id: "pt-m17", num: 17, title: "Emergências e Polícia", subtitle: "Asistencia médica urgente y denuncias",
  cards: [
    { id: "pt-m17-c01", es: "¡ayuda!", target: "socorro! / ajuda!", phon: "su-KO-rru / a-JU-da" },
    { id: "pt-m17-c02", es: "el robo", target: "o roubo / a carteirada", phon: "u RHO-bu" },
    { id: "pt-m17-c03", es: "la comisaría", target: "a esquadra da polícia", phon: "a esh-KUA-dra da pu-LI-sia" },
    { id: "pt-m17-c04", es: "la ambulancia", target: "a ambulância", phon: "a am-bu-LAN-sia" },
    { id: "pt-m17-c05", es: "las urgencias", target: "as urgências", phon: "ash ur-JEN-siash" },
    { id: "pt-m17-c06", es: "me han robado el bolso", target: "roubaram-me a mala", phon: "rhou-BA-rãu-me a MA-la" },
    { id: "pt-m17-c07", es: "he perdido mi pasaporte", target: "perdi o meu passaporte", phon: "per-DI u meh-u pa-sa-POR-te" },
    { id: "pt-m17-c08", es: "llame a la policía", target: "chame a polícia", phon: "SHA-me a pu-LI-sia" }
  ],
  dialogue: {
    title: "Na esquadra", context: "Poner una denuncia por pérdida de cartera.",
    lines: [
      { who: "Polícia", target: "Bom dia, em que posso ajudar?", es: "Buenos días, ¿en qué puedo ayudarle?" },
      { who: "Vítima", target: "Bom dia. Quero fazer uma denúncia. Perdi a minha carteira.", es: "Buenos días. Quiero poner una denuncia. Perdí mi cartera." },
      { who: "Polícia", target: "Foi roubado ou perdeu?", es: "¿Fue robado o la perdió?" },
      { who: "Vítima", target: "Acho que fui roubado no metro.", es: "Creo que me la robaron en el metro." },
      { who: "Polícia", target: "Preencha este formulário com os seus dados, por favor.", es: "Rellene este formulario con sus datos, por favor." }
    ],
    questions: [
      { q: "¿Qué objeto ha perdido o le han robado?", options: ["El teléfono", "La cartera (carteira)", "La maleta"], answer: 1 },
      { q: "¿Dónde cree que ocurrió el delito?", options: ["En el hotel", "En el metro", "En un taxi"], answer: 1 }
    ]
  },
  cloze: [
    { id: "pt-m17-cl1", before: "Por favor, ", blank: "chame", after: " a polícia!", es: "¡Por favor, llame a la policía!", mode: "type" },
    { id: "pt-m17-cl2", before: "Preciso de ir às ", blank: "urgências", after: " do hospital.", es: "Necesito ir a las urgencias del hospital.", mode: "select", options: ["urgências", "lojas", "praias", "ruas"] }
  ],
  falseFriends: [
    { es: "mala", esMeaning: "mala (bad)", target: "mala", targetMeaning: "bolso o maleta (malo/mala se dice «mau/má»)" }
  ]
});

fr.push({
  id: "fr-m17", num: 17, title: "Urgences et Police", subtitle: "Asistencia médica urgente y denuncias",
  cards: [
    { id: "fr-m17-c01", es: "¡ayuda!", target: "au secours ! / aidez-moi !", phon: "o sə-KUR / e-dé MUA" },
    { id: "fr-m17-c02", es: "el robo", target: "le vol", phon: "lə vol" },
    { id: "fr-m17-c03", es: "la comisaría", target: "le commissariat de police", phon: "lə ko-mi-sa-RIA də po-LIS" },
    { id: "fr-m17-c04", es: "la ambulancia", target: "l'ambulance", phon: "lam-bü-LANS" },
    { id: "fr-m17-c05", es: "las urgencias", target: "les urgences", phon: "lé zür-ZHANS" },
    { id: "fr-m17-c06", es: "me han robado el bolso", target: "on m'a volé mon sac", phon: "on ma vo-LÉ mon sak" },
    { id: "fr-m17-c07", es: "he perdido el pasaporte", target: "j'ai perdu mon passeport", phon: "shé pér-DÜ mon pas-POR" },
    { id: "fr-m17-c08", es: "llame a la policía", target: "appelez la police", phon: "a-plé la po-LIS" }
  ],
  dialogue: {
    title: "Au commissariat", context: "Denunciar el robo del bolso en la estación.",
    lines: [
      { who: "Policier", target: "Bonjour. Que s'est-il passé ?", es: "Buenos días. ¿Qué ha ocurrido?" },
      { who: "Victime", target: "On m'a volé mon sac dans la gare !", es: "¡Me han robado el bolso en la estación!" },
      { who: "Policier", target: "Calmez-vous. Qu'y avait-il à l'intérieur ?", es: "Cálmese. ¿Qué había en el interior?" },
      { who: "Victime", target: "Mon téléphone, mes clés et mes papiers.", es: "Mi teléfono, mis llaves y mis documentos." },
      { who: "Policier", target: "Nous allons rédiger une déclaration de vol.", es: "Vamos a redactar una declaración de robo." }
    ],
    questions: [
      { q: "¿Dónde ocurrió el robo?", options: ["En el parque", "En la gare (estación)", "En el hotel"], answer: 1 },
      { q: "¿Qué trámite van a realizar?", options: ["Una multa", "Una declaración de vol", "Un billete"], answer: 1 }
    ]
  },
  cloze: [
    { id: "fr-m17-cl1", before: "On m'a ", blank: "volé", after: " mon téléphone.", es: "Me han robado mi teléfono.", mode: "type" },
    { id: "fr-m17-cl2", before: "Vite, ", blank: "appelez", after: " une ambulance !", es: "¡Rápido, llamen a una ambulancia!", mode: "select", options: ["appelez", "mangez", "vendez", "dormez"] }
  ],
  falseFriends: [
    { es: "volar", esMeaning: "to fly", target: "voler", targetMeaning: "robar (también significa volar según el contexto)" }
  ]
});

/* ============================================================ */
/* MÓDULO 18 — No aeroporto / À l'aéroport                       */
/* ============================================================ */
pt.push({
  id: "pt-m18", num: 18, title: "No aeroporto", subtitle: "Check-in, embarque y aduanas",
  cards: [
    { id: "pt-m18-c01", es: "la tarjeta de embarque", target: "o cartão de embarque", phon: "u kar-TÃU de ãi-BAR-ke" },
    { id: "pt-m18-c02", es: "la puerta de embarque", target: "o portão de embarque", phon: "u por-TÃU de ãi-BAR-ke" },
    { id: "pt-m18-c03", es: "el equipaje de mano", target: "a bagagem de mão", phon: "a ba-GA-jãi de mãu" },
    { id: "pt-m18-c04", es: "facturar la maleta", target: "despachar a mala", phon: "desh-pa-SHAR a MA-la" },
    { id: "pt-m18-c05", es: "el vuelo", target: "o voo", phon: "u VO-u" },
    { id: "pt-m18-c06", es: "retrasado", target: "atrasado", phon: "a-tra-ZA-du" },
    { id: "pt-m18-c07", es: "cancelado", target: "cancelado", phon: "kan-se-LA-du" },
    { id: "pt-m18-c08", es: "la aduana", target: "a alfândega", phon: "a al-FAN-de-ga" }
  ],
  dialogue: {
    title: "No controlo de segurança", context: "Facturar e ir hacia la puerta de embarque.",
    lines: [
      { who: "Agente", target: "Bom dia. Passaporte e cartão de embarque, por favor.", es: "Buenos días. Pasaporte y tarjeta de embarque, por favor." },
      { who: "Passageiro", target: "Aqui tem. Sabe se o voo para Madrid está a tempo?", es: "Aquí tiene. ¿Sabe si el vuelo a Madrid sale a tiempo?" },
      { who: "Agente", target: "Sim, parte no horário previsto pelo portão B12.", es: "Sí, sale a la hora prevista por la puerta B12." },
      { who: "Passageiro", target: "Preciso de retirar o portátil da mochila?", es: "¿Tengo que sacar el portátil de la mochila?" },
      { who: "Agente", target: "Sim, coloque-o no tabuleiro com os líquidos.", es: "Sí, colóquelo en la bandeja con los líquidos." }
    ],
    questions: [
      { q: "¿Hacia dónde va el vuelo del pasajero?", options: ["Lisboa", "Madrid", "París"], answer: 1 },
      { q: "¿Cuál es la puerta de embarque?", options: ["A1", "B12", "C5"], answer: 1 }
    ]
  },
  cloze: [
    { id: "pt-m18-cl1", before: "O voo está ", blank: "atrasado", after: " meia hora.", es: "El vuelo está retrasado media hora.", mode: "select", options: ["atrasado", "perto", "livre", "cheio"] },
    { id: "pt-m18-cl2", before: "Onde fica o ", blank: "portão", after: " de embarque?", es: "¿Dónde está la puerta de embarque?", mode: "type" }
  ],
  falseFriends: [
    { es: "portón", esMeaning: "large gate", target: "portão", targetMeaning: "puerta de embarque en el aeropuerto" }
  ]
});

fr.push({
  id: "fr-m18", num: 18, title: "À l'aéroport", subtitle: "Check-in, embarque y aduanas",
  cards: [
    { id: "fr-m18-c01", es: "la tarjeta de embarque", target: "la carte d'embarquement", phon: "la kart dam-bark-MAN" },
    { id: "fr-m18-c02", es: "la puerta de embarque", target: "la porte d'embarquement", phon: "la port dam-bark-MAN" },
    { id: "fr-m18-c03", es: "el equipaje de mano", target: "le bagage à main", phon: "lə ba-GASH a man" },
    { id: "fr-m18-c04", es: "facturar la maleta", target: "enregistrer la valise", phon: "an-rə-zhis-TRÉ la va-LIZ" },
    { id: "fr-m18-c05", es: "el vuelo", target: "le vol", phon: "lə vol" },
    { id: "fr-m18-c06", es: "retrasado", target: "retardé", phon: "rə-tar-DÉ" },
    { id: "fr-m18-c07", es: "cancelado", target: "annulé", phon: "a-nü-LÉ" },
    { id: "fr-m18-c08", es: "la aduana", target: "la douane", phon: "la duAN" }
  ],
  dialogue: {
    title: "Au contrôle de sécurité", context: "Pasar el control de seguridad antes de embarcar.",
    lines: [
      { who: "Agent", target: "Bonjour, votre carte d'embarquement s'il vous plaît.", es: "Buenos días, su tarjeta de embarque por favor." },
      { who: "Passager", target: "Voilà. Le vol pour Madrid est-il à l'heure ?", es: "Aquí tiene. ¿El vuelo a Madrid sale a tiempo?" },
      { who: "Agent", target: "Oui, embarquement porte A22 dans vingt minutes.", es: "Sí, embarque por la puerta A22 en veinte minutos." },
      { who: "Passager", target: "Je dois sortir l'ordinateur du sac ?", es: "¿Tengo que sacar el ordenador de la bolsa?" },
      { who: "Agent", target: "Oui, mettez les appareils électroniques dans le bac.", es: "Sí, ponga los aparatos electrónicos en la bandeja." }
    ],
    questions: [
      { q: "¿En cuántos minutos empieza el embarque?", options: ["10 minutos", "20 minutos", "1 hora"], answer: 1 },
      { q: "¿Qué debe poner el pasajero en el bac (bandeja)?", options: ["Los zapatos", "Los aparatos electrónicos", "La chaqueta únicamente"], answer: 1 }
    ]
  },
  cloze: [
    { id: "fr-m18-cl1", before: "Le vol a été ", blank: "annulé", after: " à cause de la météo.", es: "El vuelo fue cancelado por el clima.", mode: "select", options: ["annulé", "gagné", "acheté", "fermé"] },
    { id: "fr-m18-cl2", before: "La ", blank: "porte", after: " d'embarquement a changé.", es: "La puerta de embarque ha cambiado.", mode: "type" }
  ],
  falseFriends: [
    { es: "retardado", esMeaning: "delayed mentally", target: "retardé", targetMeaning: "retrasado (un tren, avión o cita)" }
  ]
});

/* ============================================================ */
/* MÓDULO 19 — Alugar um carro / Louer une voiture               */
/* ============================================================ */
pt.push({
  id: "pt-m19", num: 19, title: "Alugar um carro", subtitle: "Alquiler de vehículos y conducción",
  cards: [
    { id: "pt-m19-c01", es: "alquilar un coche", target: "alugar um carro", phon: "a-lu-GAR ũ KA-rru" },
    { id: "pt-m19-c02", es: "el carnet de conducir", target: "a carta de condução", phon: "a KAR-ta de kon-du-SÃU" },
    { id: "pt-m19-c03", es: "el seguro a todo riesgo", target: "o seguro contra todos os riscos", phon: "u se-GU-ru KON-tra TO-dush ush RISH-kush" },
    { id: "pt-m19-c04", es: "gasolina", target: "gasolina", phon: "ga-zo-LI-na" },
    { id: "pt-m19-c05", es: "diésel / gasóleo", target: "gasóleo", phon: "ga-ZO-leh-u" },
    { id: "pt-m19-c06", es: "depósito lleno", target: "depósito cheio", phon: "de-PO-zi-tu SHEI-u" },
    { id: "pt-m19-c07", es: "el peaje", target: "a portagem", phon: "a por-TA-jãi" },
    { id: "pt-m19-c08", es: "dispositivo de peaje automático", target: "Via Verde", phon: "VI-a VER-de", note: "En Portugal es el sistema de teleapagamento automático en autopistas." }
  ],
  dialogue: {
    title: "Na empresa de aluguer", context: "Alquilar un coche para viajar por el país.",
    lines: [
      { who: "Atendente", target: "Boa tarde. Já tem reserva de veículo?", es: "Buenas tardes. ¿Ya tiene reserva de vehículo?" },
      { who: "Cliente", target: "Boa tarde. Sim, reservei um carro económico por três dias.", es: "Buenas tardes. Sí, reservé un coche económico por tres días." },
      { who: "Atendente", target: "Preciso da sua carta de condução e do cartão de crédito.", es: "Necesito su carnet de conducir y la tarjeta de crédito." },
      { who: "Cliente", target: "Aqui tem. O carro inclui o dispositivo Via Verde?", es: "Aquí tiene. ¿El coche incluye el dispositivo Via Verde?" },
      { who: "Atendente", target: "Sim, os peagens serão debitados no seu cartão no final.", es: "Sí, los peajes se cobrarán en su tarjeta al final." }
    ],
    questions: [
      { q: "¿Por cuántos días alquila el coche?", options: ["2 días", "3 días", "1 semana"], answer: 1 },
      { q: "¿Cómo se cobran los peajes?", options: ["En efectivo en las cabinas", "En la tarjeta vía Via Verde", "Son gratuitos"], answer: 1 }
    ]
  },
  cloze: [
    { id: "pt-m19-cl1", before: "Pode mostrar a sua ", blank: "carta", after: " de condução?", es: "¿Puede mostrar su carnet de conducir?", mode: "type" },
    { id: "pt-m19-cl2", before: "O depósito deve ser devolvido ", blank: "cheio", after: ".", es: "El depósito debe devolverse lleno.", mode: "select", options: ["cheio", "vazio", "partido", "sujo"] }
  ],
  falseFriends: [
    { es: "carta", esMeaning: "letter", target: "carta de condução", targetMeaning: "carnet de conducir (carta postal es «carta», pero aquí se refiere a la licencia)" }
  ]
});

fr.push({
  id: "fr-m19", num: 19, title: "Louer une voiture", subtitle: "Alquiler de vehículos y conducción",
  cards: [
    { id: "fr-m19-c01", es: "alquilar un coche", target: "louer une voiture", phon: "lu-É ün vua-TÜR" },
    { id: "fr-m19-c02", es: "el carnet de conducir", target: "le permis de conduire", phon: "lə pér-MI də kon-DÜIR" },
    { id: "fr-m19-c03", es: "el seguro a todo riesgo", target: "l'assurance tous risques", phon: "la-sü-RANS tu RISK" },
    { id: "fr-m19-c04", es: "gasolina sin plomo", target: "l'essence sans plomb", phon: "le-SANS san plon" },
    { id: "fr-m19-c05", es: "diésel", target: "le gazole / diesel", phon: "lə ga-ZOL" },
    { id: "fr-m19-c06", es: "depósito lleno", target: "le plein d'essence", phon: "lə plan de-SANS" },
    { id: "fr-m19-c07", es: "el peaje", target: "le péage", phon: "lə pé-ASH" },
    { id: "fr-m19-c08", es: "caja de cambios manual / automática", target: "boîte manuelle / automatique", phon: "buat ma-NUEL / o-to-ma-TIK" }
  ],
  dialogue: {
    title: "Agence de location", context: "Alquilar un vehículo para una escapada de fin de semana.",
    lines: [
      { who: "Agent", target: "Bonjour Monsieur. Vous souhaitez louer quel type de voiture ?", es: "Buenos días señor. ¿Qué tipo de coche desea alquilar?" },
      { who: "Client", target: "Bonjour, une citadine avec boîte automatique, s'il vous plaît.", es: "Buenos días, un urbano con caja automática, por favor." },
      { who: "Agent", target: "Très bien. Il me faut votre permis de conduire et une carte bancaire.", es: "Muy bien. Necesito su carnet de conducir y una tarjeta bancaria." },
      { who: "Client", target: "Est-ce que l'assurance tous risques est incluse ?", es: "¿El seguro a todo riesgo está incluido?" },
      { who: "Agent", target: "C'est une option supplémentaire de dix euros par jour.", es: "Es una opción adicional de diez euros por día." }
    ],
    questions: [
      { q: "¿Qué tipo de transmisión quiere el cliente?", options: ["Manuelle", "Automatique", "Sin preferencia"], answer: 1 },
      { q: "¿Cuánto cuesta el seguro a todo riesgo por día?", options: ["Gratis", "10 euros", "25 euros"], answer: 1 }
    ]
  },
  cloze: [
    { id: "fr-m19-cl1", before: "Voici mon ", blank: "permis", after: " de conduire.", es: "Aquí está mi carnet de conducir.", mode: "type" },
    { id: "fr-m19-cl2", before: "Vous devez rendre la voiture avec le ", blank: "plein", after: ".", es: "Debe devolver el coche con el depósito lleno.", mode: "select", options: ["plein", "vide", "court", "bas"] }
  ],
  falseFriends: [
    { es: "permiso", esMeaning: "permission", target: "permis", targetMeaning: "carnet/licencia oficial (carnet de conducir)" }
  ]
});

/* ============================================================ */
/* MÓDULO 20 — No banco / À la banque                            */
/* ============================================================ */
pt.push({
  id: "pt-m20", num: 20, title: "No banco", subtitle: "Cajeros, dinero y pagos",
  cards: [
    { id: "pt-m20-c01", es: "el cajero automático", target: "o Multibanco / a caixa automática", phon: "u mul-ti-BAN-ku", note: "«Multibanco» es la red nacional de cajeros e pagos en Portugal." },
    { id: "pt-m20-c02", es: "sacar dinero", target: "levantar dinheiro", phon: "le-van-TAR di-ÑEI-ru" },
    { id: "pt-m20-c03", es: "la transferencia bancaria", target: "a transferência", phon: "a tran-sfe-REN-sia" },
    { id: "pt-m20-c04", es: "moneda / cambio de divisa", target: "câmbio de moeda", phon: "KAM-biu de mu-E-da" },
    { id: "pt-m20-c05", es: "la tarjeta de débito", target: "o cartão de débito", phon: "u kar-TÃU de DE-bi-tu" },
    { id: "pt-m20-c06", es: "la tasa / comisión", target: "a taxa / comissão", phon: "a TA-sha / ko-mi-SÃU" },
    { id: "pt-m20-c07", es: "cuenta bancaria", target: "a conta bancária", phon: "a KON-ta ban-KA-ria" },
    { id: "pt-m20-c08", es: "saldo", target: "o saldo", phon: "u SAL-du" }
  ],
  dialogue: {
    title: "Na caixa do banco", context: "Preguntar sobre cambio de divisa y comisiones de cajero.",
    lines: [
      { who: "Funcionário", target: "Bom dia, em que posso ser útil?", es: "Buenos días, ¿en qué puedo serle útil?" },
      { who: "Cliente", target: "Bom dia. Gostaria de saber onde posso levantar dinheiro sem comissão.", es: "Buenos días. Quisiera saber dónde puedo sacar dinero sin comisión." },
      { who: "Funcionário", target: "Nos caixas Multibanco com cartão europeu normalmente não há taxa.", es: "En los cajeros Multibanco con tarjeta europea normalmente no hay tasa." },
      { who: "Cliente", target: "Excelente. Também fazem câmbio de dólares para euros?", es: "Excelente. ¿También hacen cambio de dólares a euros?" },
      { who: "Funcionário", target: "Sim, no balcão principal com o seu passaporte.", es: "Sí, en la ventanilla principal con su pasaporte." }
    ],
    questions: [
      { q: "¿Dónde puede sacar dinero?", options: ["En la oficina de correos", "En los cajeros Multibanco", "En el supermercado"], answer: 1 },
      { q: "¿Qué documento necesita para cambiar dólares?", options: ["Carnet de conducir", "Pasaporte", "Ninguno"], answer: 1 }
    ]
  },
  cloze: [
    { id: "pt-m20-cl1", before: "Quero ", blank: "levantar", after: " cem euros no Multibanco.", es: "Quiero sacar cien euros en el cajero.", mode: "type" },
    { id: "pt-m20-cl2", before: "Qual é o ", blank: "saldo", after: " da minha conta?", es: "¿Cuál es el saldo de mi cuenta?", mode: "select", options: ["saldo", "troco", "preço", "custo"] }
  ],
  falseFriends: [
    { es: "levantar", esMeaning: "lift up", target: "levantar dinheiro", targetMeaning: "sacar dinero en efectivo del cajero" }
  ]
});

fr.push({
  id: "fr-m20", num: 20, title: "À la banque", subtitle: "Cajeros, dinero y pagos",
  cards: [
    { id: "fr-m20-c01", es: "el cajero automático", target: "le distributeur automatique", phon: "lə dis-tri-bü-TÖR" },
    { id: "fr-m20-c02", es: "sacar dinero", target: "retirer de l'argent", phon: "rə-ti-RÉ də lar-ZHAN" },
    { id: "fr-m20-c03", es: "la transferencia", target: "le virement bancaire", phon: "lə vir-MAN ban-KÉR" },
    { id: "fr-m20-c04", es: "cambio de divisa", target: "le change de devises", phon: "lə shanzh də də-VIZ" },
    { id: "fr-m20-c05", es: "la tarjeta bancaria", target: "la carte bancaire", phon: "la kart ban-KÉR" },
    { id: "fr-m20-c06", es: "las comisiones bancarias", target: "les frais bancaires", phon: "lé fré ban-KÉR" },
    { id: "fr-m20-c07", es: "cuenta bancaria", target: "le compte bancaire", phon: "lə kont ban-KÉR" },
    { id: "fr-m20-c08", es: "el extracto / saldo", target: "le solde du compte", phon: "lə sold dü kont" }
  ],
  dialogue: {
    title: "Au guichet de la banque", context: "Preguntar sobre comisiones para retirar dinero extranjero.",
    lines: [
      { who: "Guichetier", target: "Bonjour Monsieur, que puis-je faire pour vous ?", es: "Buenos días señor, ¿qué puedo hacer por usted?" },
      { who: "Client", target: "Bonjour. Je voudrais retirer de l'argent avec ma carte étrangère.", es: "Buenos días. Quisiera sacar dinero con mi tarjeta extranjera." },
      { who: "Guichetier", target: "Vous pouvez utiliser le distributeur à l'extérieur.", es: "Puede usar el cajero automático en el exterior." },
      { who: "Client", target: "Y a-t-il des frais supplémentaires ?", es: "¿Hay comisiones adicionales?" },
      { who: "Guichetier", target: "Cela dépend des conditions de votre banque d'origine.", es: "Eso depende de las condiciones de su banco de origen." }
    ],
    questions: [
      { q: "¿Dónde está el cajero automático?", options: ["Dentro en la caja", "A l'extérieur (en el exterior)", "En la calle vecina"], answer: 1 },
      { q: "¿De qué dependen las comisiones?", options: ["Del gobierno", "Del banco de origen del cliente", "Son fijas de 50€"], answer: 1 }
    ]
  },
  cloze: [
    { id: "fr-m20-cl1", before: "Je voudrais ", blank: "retirer", after: " cinquante euros.", es: "Quisiera sacar cincuenta euros.", mode: "type" },
    { id: "fr-m20-cl2", before: "Quels sont les ", blank: "frais", after: " pour ce virement ?", es: "¿Cuáles son las comisiones para esta transferencia?", mode: "select", options: ["frais", "prix", "mots", "jours"] }
  ],
  falseFriends: [
    { es: "frais", esMeaning: "fresh / fresco", target: "frais", targetMeaning: "gastos o comisiones bancarias" }
  ]
});

/* ============================================================ */
/* MÓDULO 21 — O tempo e o clima / La météo                     */
/* ============================================================ */
pt.push({
  id: "pt-m21", num: 21, title: "O tempo e o clima", subtitle: "Predicción meteorológica y estaciones",
  cards: [
    { id: "pt-m21-c01", es: "hace buen tiempo", target: "está bom tempo", phon: "shta bon TEN-pu" },
    { id: "pt-m21-c02", es: "hace calor / frío", target: "está calor / frio", phon: "shta ka-LOR / FRI-u" },
    { id: "pt-m21-c03", es: "está lloviendo", target: "está a chover", phon: "shta a shu-VER" },
    { id: "pt-m21-c04", es: "el viento", target: "o vento", phon: "u VEN-tu" },
    { id: "pt-m21-c05", es: "la niebla", target: "o nevoeiro", phon: "u ne-voi-E-ru" },
    { id: "pt-m21-c06", es: "el paraguas", target: "o guarda-chuva", phon: "u guar-da-SHU-va" },
    { id: "pt-m21-c07", es: "sol", target: "sol", phon: "sol" },
    { id: "pt-m21-c08", es: "¿qué tiempo va a hacer mañana?", target: "como vai estar o tempo amanhã?", phon: "KO-mu vai esh-TAR u TEN-pu a-ma-ÑA" }
  ],
  dialogue: {
    title: "Falar do tempo", context: "Dos personas conversan sobre el clima del fin de semana.",
    lines: [
      { who: "Pedro", target: "Viste a previsão do tempo para o fim de semana?", es: "¿Viste la predicción del tiempo para el fin de semana?" },
      { who: "Inês", target: "Sim, dizem que vai estar muito calor no sábado.", es: "Sí, dicen que va a hacer mucho calor el sábado." },
      { who: "Pedro", target: "Ótimo! Então podemos ir à praia.", es: "¡Estupendo! Entonces podemos ir a la playa." },
      { who: "Inês", target: "Mas no domingo vai chover e estar vento.", es: "Pero el domingo va a llover y hacer viento." },
      { who: "Pedro", target: "Assim ficamos em casa a ver um filme.", es: "Así nos quedamos en casa viendo una película." }
    ],
    questions: [
      { q: "¿Qué tiempo hará el sábado?", options: ["Lluvia y viento", "Mucho calor", "Nieve"], answer: 1 },
      { q: "¿Qué planean hacer el domingo?", options: ["Ir a la playa", "Quedarse en casa", "Hacer senderismo"], answer: 1 }
    ]
  },
  cloze: [
    { id: "pt-m21-cl1", before: "Leve o ", blank: "guarda-chuva", after: " porque vai chover.", es: "Lleve el paraguas porque va a llover.", mode: "type" },
    { id: "pt-m21-cl2", before: "Hoje está muito ", blank: "calor", after: ".", es: "Hoy hace mucho calor.", mode: "select", options: ["calor", "nevoeiro", "gelo", "escuro"] }
  ],
  falseFriends: [
    { es: "tempo", esMeaning: "time / tiempo", target: "tempo", targetMeaning: "tanto el tiempo atmosférico como la duración temporal" }
  ]
});

fr.push({
  id: "fr-m21", num: 21, title: "La météo", subtitle: "Predicción meteorológica y estaciones",
  cards: [
    { id: "fr-m21-c01", es: "hace buen tiempo", target: "il fait beau", phon: "il fé bo" },
    { id: "fr-m21-c02", es: "hace calor / frío", target: "il fait chaud / froid", phon: "il fé sho / frua" },
    { id: "fr-m21-c03", es: "está lloviendo", target: "il pleut", phon: "il plö" },
    { id: "fr-m21-c04", es: "el viento", target: "le vent", phon: "lə van" },
    { id: "fr-m21-c05", es: "la niebla", target: "le brouillard", phon: "lə bru-YAR" },
    { id: "fr-m21-c06", es: "el paraguas", target: "le parapluie", phon: "lə pa-ra-PLÜI" },
    { id: "fr-m21-c07", es: "el sol", target: "le soleil", phon: "lə so-LEY" },
    { id: "fr-m21-c08", es: "¿qué tiempo hará mañana?", target: "quel temps fera-t-il demain ?", phon: "kel tan fe-ra-TIL də-MAN" }
  ],
  dialogue: {
    title: "Parler du temps", context: "Conversación sobre el pronóstico del tiempo para unas vacaciones.",
    lines: [
      { who: "Marc", target: "Tu as regardé la météo pour ce week-end ?", es: "¿Miraste el tiempo para este fin de semana?" },
      { who: "Julie", target: "Oui, samedi il va faire très chaud et ensoleillé.", es: "Sí, el sábado va a hacer mucho calor y sol." },
      { who: "Marc", target: "Super, on pourra faire un pique-nique !", es: "¡Genial, podremos hacer un picnic!" },
      { who: "Julie", target: "Attention, dimanche il annonce de la pluie et du brouillard.", es: "Cuidado, el domingo anuncian lluvia y niebla." },
      { who: "Marc", target: "D'accord, n'oublie pas d'emporter ton parapluie.", es: "De acuerdo, no olvides llevar tu paraguas." }
    ],
    questions: [
      { q: "¿Qué tiempo hará el sábado según Julie?", options: ["Lluvia", "Mucho calor y sol", "Nieve"], answer: 1 },
      { q: "¿Qué objeto sugiere Marc llevar?", options: ["Gafas de sol", "Le parapluie", "Botas"], answer: 1 }
    ]
  },
  cloze: [
    { id: "fr-m21-cl1", before: "N'oublie pas ton ", blank: "parapluie", after: " car il pleut.", es: "No olvides tu paraguas porque llueve.", mode: "type" },
    { id: "fr-m21-cl2", before: "Aujourd'hui il fait très ", blank: "beau", after: ".", es: "Hoy hace muy buen tiempo.", mode: "select", options: ["beau", "froid", "gris", "sale"] }
  ],
  falseFriends: [
    { es: "tiempo", esMeaning: "time", target: "temps", targetMeaning: "clima atmosférico (il fait quel temps?) o tiempo en segundos/horas" }
  ]
});

/* ============================================================ */
/* MÓDULO 22 — Arrendar casa / Louer un logement                */
/* ============================================================ */
pt.push({
  id: "pt-m22", num: 22, title: "Arrendar casa", subtitle: "Alquiler de vivienda, contratos y gastos",
  cards: [
    { id: "pt-m22-c01", es: "alquilar un piso", target: "arrendar um apartamento", phon: "a-rren-DAR ũ a-par-ta-MEN-tu", note: "En Portugal se dice «arrendar» para inmuebles y «alugar» para coches o cosas." },
    { id: "pt-m22-c02", es: "el propietario / casero", target: "o senhorio", phon: "u se-ño-RI-u" },
    { id: "pt-m22-c03", es: "la fianza / depósito", target: "a caução", phon: "a kow-SÃU" },
    { id: "pt-m22-c04", es: "el contrato de alquiler", target: "o contrato de arrendamento", phon: "u kon-TRA-tu de a-rren-da-MEN-tu" },
    { id: "pt-m22-c05", es: "gastos incluidos", target: "despesas incluídas", phon: "desh-PE-zash in-klui-DASH" },
    { id: "pt-m22-c06", es: "amueblado", target: "mobilado", phon: "mu-bi-LA-du" },
    { id: "pt-m22-c07", es: "el alquiler mensual", target: "a renda", phon: "a REN-da" },
    { id: "pt-m22-c08", es: "visitar el piso", target: "visitar o imóvel", phon: "vi-zi-TAR u i-MO-vel" }
  ],
  dialogue: {
    title: "Visitar um apartamento", context: "Hablar con el propietario sobre un piso en alquiler.",
    lines: [
      { who: "Senhorio", target: "Boa tarde. Este é o T1 que viu no anúncio.", es: "Buenas tardes. Este es el piso de 1 dormitorio que vio en el anuncio." },
      { who: "Inquilino", target: "Boa tarde. É muito luminoso! O apartamento é mobilado?", es: "Buenas tardes. ¡Es muy luminoso! ¿El piso está amueblado?" },
      { who: "Senhorio", target: "Sim, totalmente equipado. A renda é 750 euros por mês.", es: "Sí, totalmente equipado. El alquiler son 750 euros al mes." },
      { who: "Inquilino", target: "As despesas de água e luz estão incluídas?", es: "¿Los gastos de agua y luz están incluidos?" },
      { who: "Senhorio", target: "Não, as despesas são à parte. Pedimos dois meses de caução.", es: "No, los gastos son aparte. Pedimos dos meses de fianza." }
    ],
    questions: [
      { q: "¿Cuánto cuesta el alquiler mensual (renda)?", options: ["500€", "750€", "1000€"], answer: 1 },
      { q: "¿Están incluidos los gastos de agua y luz?", options: ["Sí", "No, son à parte", "Solo el agua"], answer: 1 }
    ]
  },
  cloze: [
    { id: "pt-m22-cl1", before: "O apartamento está totalmente ", blank: "mobilado", after: ".", es: "El piso está totalmente amueblado.", mode: "type" },
    { id: "pt-m22-cl2", before: "Qual é o valor da ", blank: "renda", after: " mensal?", es: "¿Cuál es el valor del alquiler mensual?", mode: "select", options: ["renda", "venda", "troca", "ponte"] }
  ],
  falseFriends: [
    { es: "renda / renta", esMeaning: "income / tax return", target: "renda", targetMeaning: "precio del alquiler mensual de un inmueble" }
  ]
});

fr.push({
  id: "fr-m22", num: 22, title: "Louer un logement", subtitle: "Alquiler de vivienda, contratos y gastos",
  cards: [
    { id: "fr-m22-c01", es: "alquilar un apartamento", target: "louer un appartement", phon: "lu-É an a-par-tə-MAN" },
    { id: "fr-m22-c02", es: "el propietario", target: "le propriétaire", phon: "lə pro-pri-é-TÉR" },
    { id: "fr-m22-c03", es: "la fianza", target: "la caution / dépôt de garantie", phon: "la ko-SION" },
    { id: "fr-m22-c04", es: "el contrato de alquiler", target: "le bail de location", phon: "lə bel də lo-ka-SION" },
    { id: "fr-m22-c05", es: "gastos incluidos", target: "charges comprises (CC)", phon: "sharzh kon-PRIZ" },
    { id: "fr-m22-c06", es: "amueblado", target: "meublé", phon: "mö-BLÉ" },
    { id: "fr-m22-c07", es: "el alquiler", target: "le loyer", phon: "lə lua-YÉ" },
    { id: "fr-m22-c08", es: "el avalista", target: "le garant", phon: "lə ga-RAN" }
  ],
  dialogue: {
    title: "Visite d'un studio", context: "Visitar un estudio en París con el agente inmobiliario.",
    lines: [
      { who: "Agent", target: "Voici le studio. Il fait vingt-cinq mètres carrés.", es: "Aquí está el estudio. Tiene veinticinco metros cuadrados." },
      { who: "Locataire", target: "Il est très sympa. Le loyer est de combien ?", es: "Es muy simpático. ¿De cuánto es el alquiler?" },
      { who: "Agent", target: "C'est 800 euros par mois, charges comprises.", es: "Son 800 euros al mes, gastos incluidos." },
      { who: "Locataire", target: "Est-ce qu'il faut un garant pour le dossier ?", es: "¿Hace falta un avalista para la solicitud?" },
      { who: "Agent", target: "Oui, un garant résidant en France est obligatoire.", es: "Sí, es obligatorio un avalista con residencia en Francia." }
    ],
    questions: [
      { q: "¿Cuál es la superficie del estudio?", options: ["15 m²", "25 m²", "40 m²"], answer: 1 },
      { q: "¿Está incluida la comunidad/gastos (charges)?", options: ["Sí (charges comprises)", "No", "Solo en verano"], answer: 0 }
    ]
  },
  cloze: [
    { id: "fr-m22-cl1", before: "Le ", blank: "loyer", after: " est de 800 euros.", es: "El alquiler es de 800 euros.", mode: "type" },
    { id: "fr-m22-cl2", before: "L'appartement est loué ", blank: "meublé", after: ".", es: "El piso se alquila amueblado.", mode: "select", options: ["meublé", "cassé", "vide", "ouvert"] }
  ],
  falseFriends: [
    { es: "bailar", esMeaning: "to dance", target: "bail", targetMeaning: "contrato legal de arrendamiento" }
  ]
});

/* ============================================================ */
/* MÓDULO 23 — Tecnologia e Trabalho / Tech et Coworking        */
/* ============================================================ */
pt.push({
  id: "pt-m23", num: 23, title: "Tecnologia e Trabalho", subtitle: "Conexión, coworking y trabajo remoto",
  cards: [
    { id: "pt-m23-c01", es: "la red Wi-Fi", target: "a rede Wi-Fi", phon: "a RE-de wi-fi" },
    { id: "pt-m23-c02", es: "el enchufe", target: "a tomada", phon: "a tu-MA-da" },
    { id: "pt-m23-c03", es: "el cargador", target: "o carregador", phon: "u ka-rre-ga-DOR" },
    { id: "pt-m23-c04", es: "reunión online", target: "reunião online / videochamada", phon: "re-u-ni-ÃU on-line" },
    { id: "pt-m23-c05", es: "el ordenador portátil", target: "o computador portátil", phon: "u kon-pu-ta-DOR por-TA-til" },
    { id: "pt-m23-c06", es: "pantalla", target: "o ecrã", phon: "u e-KRÃ", note: "En Portugal se dice «ecrã»; en Brasil se dice «tela»." },
    { id: "pt-m23-c07", es: "espacio de coworking", target: "espaço de coworking", phon: "esh-PA-su de co-working" },
    { id: "pt-m23-c08", es: "la velocidad de internet", target: "a velocidade da internet", phon: "a ve-lo-si-DA-de da in-ter-NET" }
  ],
  dialogue: {
    title: "Num espaço de coworking", context: "Preguntar por pases diarios y enchufes para trabajar.",
    lines: [
      { who: "Receção", target: "Olá! Procuras um lugar para trabalhar hoje?", es: "¡Hola! ¿Buscas un sitio para trabajar hoy?" },
      { who: "Nomad", target: "Olá! Sim, queria saber quanto custa o passe diário.", es: "¡Hola! Sí, quería saber cuánto cuesta el pase diario." },
      { who: "Receção", target: "São quinze euros com café e internet de alta velocidade incluídos.", es: "Son quince euros con café e internet de alta velocidad incluidos." },
      { who: "Nomad", target: "Perfeito. Há tomadas perto das mesas para carregar o portátil?", es: "Perfecto. ¿Hay enchufes cerca de las mesas para cargar el portátil?" },
      { who: "Receção", target: "Sim, todas as mesas têm tomadas individuais.", es: "Sí, todas las mesas tienen enchufes individuales." }
    ],
    questions: [
      { q: "¿Cuánto cuesta el passe diário?", options: ["10€", "15€", "25€"], answer: 1 },
      { q: "¿Qué incluye la tarifa?", options: ["Solo mesa", "Café e internet de alta velocidad", "Almuerzo"], answer: 1 }
    ]
  },
  cloze: [
    { id: "pt-m23-cl1", before: "Onde posso encontrar uma ", blank: "tomada", after: "?", es: "¿Dónde puedo encontrar un enchufe?", mode: "type" },
    { id: "pt-m23-cl2", before: "O meu computador ", blank: "portátil", after: " está sem bateria.", es: "Mi ordenador portátil no tiene batería.", mode: "select", options: ["portátil", "velho", "livre", "fechado"] }
  ],
  falseFriends: [
    { es: "tomada", esMeaning: "taken / intake", target: "tomada", targetMeaning: "enchufe eléctrico de pared" }
  ]
});

fr.push({
  id: "fr-m23", num: 23, title: "Technologie et Coworking", subtitle: "Conexión, coworking y trabajo remoto",
  cards: [
    { id: "fr-m23-c01", es: "el Wi-Fi", target: "le Wi-Fi", phon: "lə wi-fi" },
    { id: "fr-m23-c02", es: "el enchufe", target: "la prise électrique", phon: "la priz e-lek-TRIK" },
    { id: "fr-m23-c03", es: "el cargador", target: "le chargeur", phon: "lə shar-ZHÖR" },
    { id: "fr-m23-c04", es: "videollamada", target: "une visioconférence / visio", phon: "ün vi-zio-kon-fé-RANS" },
    { id: "fr-m23-c05", es: "el ordenador portátil", target: "l'ordinateur portable", phon: "lor-di-na-TÖR por-TABL" },
    { id: "fr-m23-c06", es: "la pantalla", target: "l'écran", phon: "le-KRAN" },
    { id: "fr-m23-c07", es: "espacio de trabajo", target: "l'espace de travail", phon: "les-PAS də tra-VAY" },
    { id: "fr-m23-c08", es: "contraseña de red", target: "le code réseau", phon: "lə kod ré-ZO" }
  ],
  dialogue: {
    title: "Dans un espace de coworking", context: "Instalarse para trabajar remoto durante el día.",
    lines: [
      { who: "Accueil", target: "Bonjour ! Bienvenue. Vous avez besoin d'un poste pour la journée ?", es: "¡Buenos días! Bienvenido. ¿Necesita un puesto para el día?" },
      { who: "Freelance", target: "Bonjour, oui tout à fait. Quel est le tarif à la journée ?", es: "Buenos días, sí exacto. ¿Cuál es la tarifa por día?" },
      { who: "Accueil", target: "C'est vingt euros la journée. Le Wi-Fi haut débit est inclus.", es: "Son veinte euros al día. El Wi-Fi de alta velocidad está incluido." },
      { who: "Freelance", target: "Super, puis-je passer des appels vidéo ?", es: "Genial, ¿puedo realizar llamadas de vídeo?" },
      { who: "Accueil", target: "Oui, nous avons des cabines insonorisées au fond de la salle.", es: "Sí, tenemos cabinas insonorizadas al fondo de la sala." }
    ],
    questions: [
      { q: "¿Cuánto cuesta el puesto por día?", options: ["15€", "20€", "30€"], answer: 1 },
      { q: "¿Dónde puede hacer videollamadas?", options: ["En la calle", "En cabinas insonorizadas", "En el café"], answer: 1 }
    ]
  },
  cloze: [
    { id: "fr-m23-cl1", before: "Où se trouve la ", blank: "prise", after: " électrique ?", es: "¿Dónde se encuentra el enchufe eléctrico?", mode: "type" },
    { id: "fr-m23-cl2", before: "J'ai besoin de charger mon ", blank: "ordinateur", after: ".", es: "Necesito cargar mi ordenador.", mode: "select", options: ["ordinateur", "bureau", "livre", "verre"] }
  ],
  falseFriends: [
    { es: "prisa", esMeaning: "hurry", target: "prise", targetMeaning: "enchufe eléctrico de corriente" }
  ]
});

/* ============================================================ */
/* MÓDULO 24 — Lazer e Cultura / Loisirs et Culture              */
/* ============================================================ */
pt.push({
  id: "pt-m24", num: 24, title: "Lazer e Cultura", subtitle: "Museos, cine, teatro y entradas",
  cards: [
    { id: "pt-m24-c01", es: "la taquilla", target: "a bilheteira", phon: "a bi-lye-TEI-ra" },
    { id: "pt-m24-c02", es: "la entrada / billete", target: "o bilhete / a entrada", phon: "u bi-LYE-te" },
    { id: "pt-m24-c03", es: "exposición", target: "a exposição", phon: "a esh-pu-zi-SÃU" },
    { id: "pt-m24-c04", es: "descuento de estudiante", target: "desconto de estudante", phon: "des-KON-tu de esh-tu-DAN-te" },
    { id: "pt-m24-c05", es: "visita guiada", target: "visita guiada", phon: "vi-ZI-ta gi-A-da" },
    { id: "pt-m24-c06", es: "el museo", target: "o museu", phon: "u mu-ZEH-u" },
    { id: "pt-m24-c07", es: "la película", target: "o filme", phon: "u FIL-me" },
    { id: "pt-m24-c08", es: "horario de apertura", target: "horário de funcionamento", phon: "u o-RA-riu de fun-sio-na-MEN-tu" }
  ],
  dialogue: {
    title: "Comprar bilhetes para o museu", context: "Comprar entradas con descuento cultural.",
    lines: [
      { who: "Bilheteira", target: "Boa tarde! Quantos bilhetes deseja?", es: "¡Buenas tardes! ¿Cuántas entradas desea?" },
      { who: "Visitante", target: "Boa tarde. Dois bilhetes para a exposição temporária, por favor.", es: "Buenas tardes. Dos entradas para la exposición temporal, por favor." },
      { who: "Bilheteira", target: "Tem cartão de estudante ou jovem?", es: "¿Tiene tarjeta de estudiante o joven?" },
      { who: "Visitante", target: "Sim, tenho aqui o meu cartão de estudante.", es: "Sí, tengo aquí mi tarjeta de estudiante." },
      { who: "Bilheteira", target: "Excelente, tem cinquenta por cento de desconto.", es: "Excelente, tiene un cincuenta por ciento de descuento." }
    ],
    questions: [
      { q: "¿Para qué exposición son los billetes?", options: ["Permanente", "Temporária", "Fotografía"], answer: 1 },
      { q: "¿De cuánto es el descuento de estudiante?", options: ["10%", "20%", "50%"], answer: 2 }
    ]
  },
  cloze: [
    { id: "pt-m24-cl1", before: "Comprei os bilhetes na ", blank: "bilheteira", after: ".", es: "Compré las entradas en la taquilla.", mode: "type" },
    { id: "pt-m24-cl2", before: "A ", blank: "exposição", after: " abre às dez horas.", es: "La exposición abre a las diez horas.", mode: "select", options: ["exposição", "paragem", "viagem", "torrada"] }
  ],
  falseFriends: [
    { es: "filme", esMeaning: "film / película", target: "filme", targetMeaning: "película de cine (en portugués se usa habitualmente «filme»)" }
  ]
});

fr.push({
  id: "fr-m24", num: 24, title: "Loisirs et Culture", subtitle: "Museos, cine, teatro y entradas",
  cards: [
    { id: "fr-m24-c01", es: "la taquilla", target: "la billetterie / le guichet", phon: "la bi-yət-RI / lə ghi-SHÉ" },
    { id: "fr-m24-c02", es: "la entrada", target: "le billet / le ticket d'entrée", phon: "lə bi-YÉ" },
    { id: "fr-m24-c03", es: "la exposición", target: "l'exposition / l'expo", phon: "lek-spo-zi-SION" },
    { id: "fr-m24-c04", es: "tarifa reducida", target: "le tarif réduit", phon: "lə ta-RIF ré-DÜI" },
    { id: "fr-m24-c05", es: "visita guiada", target: "la visite guidée", phon: "la vi-ZIT ghi-DÉ" },
    { id: "fr-m24-c06", es: "el museo", target: "le musée", phon: "lə mü-ZÉ" },
    { id: "fr-m24-c07", es: "la obra de teatro", target: "la pièce de théâtre", phon: "la pies də te-ATR" },
    { id: "fr-m24-c08", es: "versión original (V.O.)", target: "version originale (VOSTFR)", phon: "ver-SION o-ri-zhi-NAL" }
  ],
  dialogue: {
    title: "Au guichet du musée", context: "Comprar entradas para un museo nacional.",
    lines: [
      { who: "Guichetier", target: "Bonjour ! Deux billets pour le musée ?", es: "¡Buenos días! ¿Dos entradas para el museo?" },
      { who: "Visiteur", target: "Bonjour, oui. Y a-t-il un tarif réduit pour les étudiants ?", es: "Buenos días, sí. ¿Hay tarifa reducida para estudiantes?" },
      { who: "Guichetier", target: "Oui, la visite est gratuite pour les étudiants européens de moins de 26 ans.", es: "Sí, la visita es gratuita para estudiantes europeos menores de 26 años." },
      { who: "Visiteur", target: "Parfait ! Voici mon justificatif.", es: "¡Perfecto! Aquí tiene mi justificante." },
      { who: "Guichetier", target: "Voici vos deux tickets. Bon spectacle !", es: "Aquí tiene sus dos entradas. ¡Buen espectáculo!" }
    ],
    questions: [
      { q: "¿Para quién es gratuita la visita?", options: ["Para todos los niños", "Estudiantes europeos de menos de 26 años", "Nadie"], answer: 1 },
      { q: "¿Qué documento presenta el visitante?", options: ["Pasaporte", "Justificatif (de estudiante)", "Carnet de conducir"], answer: 1 }
    ]
  },
  cloze: [
    { id: "fr-m24-cl1", before: "Je voudrais acheter un ", blank: "billet", after: " pour le concert.", es: "Quisiera comprar una entrada para el concierto.", mode: "type" },
    { id: "fr-m24-cl2", before: "Est-ce qu'il y a un tarif ", blank: "réduit", after: " ?", es: "¿Hay una tarifa reducida?", mode: "select", options: ["réduit", "grand", "dur", "haut"] }
  ],
  falseFriends: [
    { es: "billete", esMeaning: "paper money / ticket", target: "billet", targetMeaning: "entrada/ticket de teatro o billete de transporte" }
  ]
});

/* ============================================================ */
/* MÓDULO 25 — Vida noturna e bares / Vie nocturne et bars      */
/* ============================================================ */
pt.push({
  id: "pt-m25", num: 25, title: "Vida noturna e bares", subtitle: "Bebidas, salir de fiesta y vida nocturna",
  cards: [
    { id: "pt-m25-c01", es: "una cerveza de grifo (caña)", target: "uma imperial / um fino", phon: "U-ma im-pe-RI-al / ũ FI-nu", note: "En Lisboa se llama «imperial»; en el Norte (Porto) se llama «fino»." },
    { id: "pt-m25-c02", es: "una copa de vino", target: "um copo de vinho", phon: "ũ KO-pu de VI-ñu" },
    { id: "pt-m25-c03", es: "la discoteca / club", target: "a discoteca / a caixa noturna", phon: "a dish-ko-TE-ka" },
    { id: "pt-m25-c04", es: "¡salud! (brindis)", target: "saúde!", phon: "sa-U-de" },
    { id: "pt-m25-c05", es: "la barra del bar", target: "o balcão", phon: "u bal-KÃU" },
    { id: "pt-m25-c06", es: "el hielo", target: "o gelo", phon: "u JE-lu" },
    { id: "pt-m25-c07", es: "entrada libre", target: "entrada livre", phon: "ãi-TRA-da LI-vre" },
    { id: "pt-m25-c08", es: "otra ronda, por favor", target: "outra rodada, por favor", phon: "OW-tra rro-DA-da pur fa-VOR" }
  ],
  dialogue: {
    title: "Num bar no Bairro Alto", context: "Pedir bebidas en un bar tradicional de Lisboa.",
    lines: [
      { who: "Barman", target: "Boa noite! O que vão tomar?", es: "¡Buenas noches! ¿Qué van a tomar?" },
      { who: "Cliente", target: "Boa noite. Duas imperiais e um copo de vinho tinto, por favor.", es: "Buenas noches. Dos cañas y una copa de vino tinto, por favor." },
      { who: "Barman", target: "Com certeza. Querem com gelo?", es: "Por supuesto. ¿Quieren con hielo?" },
      { who: "Cliente", target: "Apenas no vinho tinto não! Quanto fica?", es: "¡Solo en el vino tinto no! ¿Cuánto es?" },
      { who: "Barman", target: "São seis euros no total.", es: "Son seis euros en total." },
      { who: "Cliente", target: "Aqui tem. Saúde!", es: "Aquí tiene. ¡Salud!" }
    ],
    questions: [
      { q: "¿Cómo se pide una caña en Lisboa?", options: ["Um fino", "Uma imperial", "Uma garrafa"], answer: 1 },
      { q: "¿Cuánto cuesta la ronda total?", options: ["6 euros", "12 euros", "15 euros"], answer: 0 }
    ]
  },
  cloze: [
    { id: "pt-m25-cl1", before: "Queria duas ", blank: "imperiais", after: " bem frescas.", es: "Quería dos cañas bien frescas.", mode: "type" },
    { id: "pt-m25-cl2", before: "Um copo de vinho com ", blank: "gelo", after: ".", es: "Un vaso de vino con hielo.", mode: "select", options: ["gelo", "pão", "fogo", "sal"] }
  ],
  falseFriends: [
    { es: "copo", esMeaning: "snowflake", target: "copo", targetMeaning: "vaso de cristal para beber" }
  ]
});

fr.push({
  id: "fr-m25", num: 25, title: "Vie nocturne et bars", subtitle: "Bebidas, salir de fiesta y vida nocturna",
  cards: [
    { id: "fr-m25-c01", es: "una cerveza de grifo (caña)", target: "un demi", phon: "an də-MI", note: "«un demi» equivale a 25cl de cerveza de grifo." },
    { id: "fr-m25-c02", es: "una copa de vino tinto", target: "un verre de vin rouge", phon: "an vér də van ruzh" },
    { id: "fr-m25-c03", es: "la discoteca", target: "la boîte de nuit / le club", phon: "la buat də nüi" },
    { id: "fr-m25-c04", es: "¡salud! (brindis)", target: "santé ! / tchin-tchin !", phon: "san-TÉ / tshin-tshin" },
    { id: "fr-m25-c05", es: "la barra del bar", target: "le comptoir / le bar", phon: "lə kon-TUAR" },
    { id: "fr-m25-c06", es: "cubitos de hielo", target: "des glaçons", phon: "dé gla-SON" },
    { id: "fr-m25-c07", es: "la hora feliz", target: "l'happy hour", phon: "la-pi a-U-R" },
    { id: "fr-m25-c08", es: "invitar a una ronda", target: "payer une tournée", phon: "pé-YÉ ün tur-NÉ" }
  ],
  dialogue: {
    title: "Dans un bar parisien", context: "Pedir consumiciones durante la happy hour.",
    lines: [
      { who: "Barman", target: "Bonsoir ! Vous prenez quoi ?", es: "¡Buenas noches! ¿Qué vais a tomar?" },
      { who: "Client", target: "Bonsoir ! Deux demis et un verre de vin blanc, s'il vous plaît.", es: "¡Buenas noches! Dos cañas y una copa de vino blanco, por favor." },
      { who: "Barman", target: "C'est l'happy hour, les bières sont à quatre euros.", es: "Es la happy hour, las cervezas están a cuatro euros." },
      { who: "Client", target: "Super ! On peut s'installer en terrasse ?", es: "¡Genial! ¿Nos podemos sentar en la terraza?" },
      { who: "Barman", target: "Oui, bien sûr. Santé !", es: "Sí, claro. ¡Salud!" }
    ],
    questions: [
      { q: "¿Cuánto cuesta la cerveza durante la happy hour?", options: ["2€", "4€", "8€"], answer: 1 },
      { q: "¿Dónde se van a sentar los clientes?", options: ["En el mostrador", "En la terraza", "En la pista de baile"], answer: 1 }
    ]
  },
  cloze: [
    { id: "fr-m25-cl1", before: "Un ", blank: "demi", after: " s'il vous plaît !", es: "¡Una caña por favor!", mode: "type" },
    { id: "fr-m25-cl2", before: "Avec des ", blank: "glaçons", after: " dans le verre.", es: "Con hielo en el vaso.", mode: "select", options: ["glaçons", "pains", "poissons", "livres"] }
  ],
  falseFriends: [
    { es: "demi", esMeaning: "demi / medio", target: "un demi", targetMeaning: "caña de cerveza de 25cl" }
  ]
});

/* ============================================================ */
/* MÓDULO 26 — Na pastelaria / À la boulangerie                  */
/* ============================================================ */
pt.push({
  id: "pt-m26", num: 26, title: "Na pastelaria", subtitle: "Café, dulces y desayunos",
  cards: [
    { id: "pt-m26-c01", es: "el espresso", target: "a bica / o café", phon: "a BI-ka", note: "En Lisboa se usa «bica»; en Porto se dice «um fino» para cerveza y «um café» para espresso." },
    { id: "pt-m26-c02", es: "café con leche (vaso alto)", target: "o galão", phon: "u ga-LÃU" },
    { id: "pt-m26-c03", es: "cortado / café con poca leche", target: "o pingado", phon: "u pin-GA-du" },
    { id: "pt-m26-c04", es: "el pastel de nata", target: "o pastel de nata", phon: "u pas-TEL de NA-ta" },
    { id: "pt-m26-c05", es: "pan con mantequilla", target: "pão com manteiga", phon: "pãu kon man-TEI-ga" },
    { id: "pt-m26-c06", es: "pan tostado", target: "torrada", phon: "tu-RRA-da" },
    { id: "pt-m26-c07", es: "la pastelería", target: "a pastelaria", phon: "a pas-te-la-RI-a" },
    { id: "pt-m26-c08", es: "zumo de naranja recién exprimido", target: "sumo de laranja natural", phon: "SU-mu de la-RAN-ja na-tu-RAL" }
  ],
  dialogue: {
    title: "Tomar o pequeno-almoço", context: "Pedir desayuno en una cafetería tradicional.",
    lines: [
      { who: "Empregada", target: "Bom dia! O que vai desejar?", es: "¡Buenos días! ¿Qué va a desear?" },
      { who: "Cliente", target: "Queria um galão, uma torrada e dois pastéis de nata, por favor.", es: "Quería un galão, una tostada y dos pasteles de nata, por favor." },
      { who: "Empregada", target: "Com certeza. A torrada é com manteiga?", es: "Por supuesto. ¿La tostada es con mantequilla?" },
      { who: "Cliente", target: "Sim, por favor. Quanto é tudo?", es: "Sí, por favor. ¿Cuánto es todo?" },
      { who: "Empregada", target: "São quatro euros e cinquenta cêntimos.", es: "Son cuatro euros con cincuenta céntimos." }
    ],
    questions: [
      { q: "¿Qué bebida pidió el cliente?", options: ["Un té", "Um galão", "Agua con gas"], answer: 1 },
      { q: "¿Cuántos pasteles de nata pidió?", options: ["1", "2", "3"], answer: 1 }
    ]
  },
  cloze: [
    { id: "pt-m26-cl1", before: "Queria um ", blank: "galão", after: " e um pastel de nata.", es: "Quería un café con leche y un pastel de nata.", mode: "type" },
    { id: "pt-m26-cl2", before: "A torrada é com ", blank: "manteiga", after: "?", es: "¿La tostada es con mantequilla?", mode: "select", options: ["manteiga", "açúcar", "queijo", "fiambre"] }
  ],
  falseFriends: [
    { es: "sumo", esMeaning: "supreme / sum", target: "sumo", targetMeaning: "zumo de fruta (en Portugal; en Brasil es «suco»)" }
  ]
});

fr.push({
  id: "fr-m26", num: 26, title: "À la boulangerie", subtitle: "Café, dulces y desayunos",
  cards: [
    { id: "fr-m26-c01", es: "la baguette", target: "la baguette", phon: "la ba-GET" },
    { id: "fr-m26-c02", es: "el croissant", target: "le croissant", phon: "lə krua-SAN" },
    { id: "fr-m26-c03", es: "napolitana de chocolate", target: "le pain au chocolat", phon: "lə pan o sho-ko-LA" },
    { id: "fr-m26-c04", es: "café solo largo", target: "un café allongé", phon: "an ka-fé a-lon-ZHÉ" },
    { id: "fr-m26-c05", es: "café con leche", target: "un café au lait", phon: "an ka-fé o lé" },
    { id: "fr-m26-c06", es: "la panadería/pastelería", target: "la boulangerie-pâtisserie", phon: "la bu-lan-zhri pa-tis-RI" },
    { id: "fr-m26-c07", es: "tostada con mantequilla", target: "une tartine beurrée", phon: "ün tar-TIN bö-RÉ" },
    { id: "fr-m26-c08", es: "zumo de naranja", target: "un jus d'orange pressé", phon: "an zhu do-RANZH pre-SÉ" }
  ],
  dialogue: {
    title: "À la boulangerie", context: "Comprar pan y repostería por la mañana.",
    lines: [
      { who: "Boulangère", target: "Bonjour ! Vous désirez ?", es: "¡Buenos días! ¿Qué desea?" },
      { who: "Client", target: "Bonjour, je voudrais deux croissants et une baguette tradition, s'il vous plaît.", es: "Buenos días, quisiera dos croissants y una baguette tradition, por favor." },
      { who: "Boulangère", target: "Et avec ceci ?", es: "¿Y algo más?" },
      { who: "Client", target: "Un pain au chocolat aussi. Ça sera tout.", es: "Una napolitana de chocolate también. Eso será todo." },
      { who: "Boulangère", target: "Ça vous fera cinq euros cinquante.", es: "Serán cinco euros cincuenta." }
    ],
    questions: [
      { q: "¿Cuántos croissants pidió el cliente?", options: ["1", "2", "4"], answer: 1 },
      { q: "¿Qué tipo de baguette solicitó?", options: ["Tradition", "Moulée", "Complet"], answer: 0 }
    ]
  },
  cloze: [
    { id: "fr-m26-cl1", before: "Je voudrais une ", blank: "baguette", after: " s'il vous plaît.", es: "Quisiera una baguette por favor.", mode: "type" },
    { id: "fr-m26-cl2", before: "Un jus d'orange ", blank: "pressé", after: ".", es: "Un zumo de naranja recién exprimido.", mode: "select", options: ["pressé", "chaud", "sec", "fort"] }
  ],
  falseFriends: [
    { es: "pain", esMeaning: "pain / dolor", target: "pain", targetMeaning: "pan (la pena/dolor se dice «peine»)" }
  ]
});

/* ============================================================ */
  /* MÓDULO 27 — Trabajo en la oficina                            */
  /* ============================================================ */
  pt.push({
    id: "pt-m27", num: 27, title: "Trabalho no escritório", subtitle: "Emails, reuniões e rotina de trabalho",
    cards: [
      { id: "pt-m27-c01", es: "el correo electrónico", target: "o correio eletrónico / e-mail", phon: "u ku-RREI-u e-le-TRO-ni-ku" },
      { id: "pt-m27-c02", es: "la reunión", target: "a reunião", phon: "a rre-u-NI-ÃU" },
      { id: "pt-m27-c03", es: "el informe", target: "o relatório", phon: "u re-la-TO-riu" },
      { id: "pt-m27-c04", es: "el plazo / fecha límite", target: "o prazo", phon: "u PRA-zu" },
      { id: "pt-m27-c05", es: "adjuntar un archivo", target: "anexar um ficheiro", phon: "a-ne-SAR ũ fi-SHEI-ru" },
      { id: "pt-m27-c06", es: "enviar una llamada", target: "fazer uma chamada", phon: "fa-ZER U-ma sha-MA-da" },
      { id: "pt-m27-c07", es: "el compañero de trabajo", target: "o colega de trabalho", phon: "u ku-LE-ga de tra-BA-lyu" },
      { id: "pt-m27-c08", es: "la sala de reuniones", target: "a sala de reuniões", phon: "a SA-la de rre-u-NIOISH" },
      { id: "pt-m27-c09", es: "quedo a la espera", target: "fico a aguardar", phon: "FI-ku a a-guar-DAR" },
      { id: "pt-m27-c10", es: "reprogramar la cita", target: "reagendar a reunião", phon: "rre-a-zhen-DAR a rre-u-NI-ÃU" }
    ],
    dialogue: {
      title: "Organizar a reunião semanal", context: "Dos colegas coordinan la agenda del día.",
      lines: [
        { who: "Rui", target: "Olá Marta, já enviaste o relatório do projeto?", es: "Hola Marta, ¿ya enviaste el informe del proyecto?" },
        { who: "Marta", target: "Ainda não, vou anexar o ficheiro e enviar agora mesmo.", es: "Aún no, voy a adjuntar el archivo y enviarlo ahora mismo." },
        { who: "Rui", target: "Ótimo. Lembra-te de que a reunião é às catorze horas.", es: "Estupendo. Recuerda que la reunión es a las catorce horas." },
        { who: "Marta", target: "Podemos reagendar para as quinze? Tenho uma chamada urgente.", es: "¿Podemos reprogramar para las quince? Tengo una llamada urgente." },
        { who: "Rui", target: "Com certeza, vou avisar o resto da equipa.", es: "Por supuesto, voy a avisar al resto del equipo." }
      ],
      questions: [
        { q: "¿Qué falta por enviar?", options: ["Un correo", "El informe (relatório)", "Una factura"], answer: 1 },
        { q: "¿A qué hora se reprograma la reunión?", options: ["14:00", "15:00", "16:00"], answer: 1 },
        { q: "¿Por qué pide Marta cambiar la hora?", options: ["Tiene una llamada", "Llega tarde", "Está a comer"], answer: 0 }
      ]
    },
    cloze: [
      { id: "pt-m27-cl1", before: "Vou ", blank: "anexar", after: " o ficheiro ao e-mail.", es: "Voy a adjuntar el archivo al e-mail.", mode: "type" },
      { id: "pt-m27-cl2", before: "O ", blank: "prazo", after: " termina hoje às cinco.", es: "El plazo termina hoy a las cinco.", mode: "select", options: ["prazo", "prato", "preço", "passo"] }
    ],
    falseFriends: [
      { es: "pasta", esMeaning: "massa de comer", target: "pasta", targetMeaning: "carpeta / portafolios (la pasta de comer es «massa»)" }
    ]
  });

  fr.push({
    id: "fr-m27", num: 27, title: "Au bureau", subtitle: "Emails, reuniones y rutina laboral",
    cards: [
      { id: "fr-m27-c01", es: "el correo electrónico", target: "le courriel / l'e-mail", phon: "lə ku-RIEL" },
      { id: "fr-m27-c02", es: "la reunión", target: "la réunion", phon: "la re-ü-NION" },
      { id: "fr-m27-c03", es: "el informe", target: "le rapport", phon: "lə ra-POR" },
      { id: "fr-m27-c04", es: "el plazo / fecha límite", target: "le délai / la date limite", phon: "lə de-LÉ" },
      { id: "fr-m27-c05", es: "adjuntar un archivo", target: "joindre un fichier", phon: "zhwandr an fi-SHIÉ" },
      { id: "fr-m27-c06", es: "hacer una llamada", target: "passer un coup de fil", phon: "pa-SÉ an ku də fil" },
      { id: "fr-m27-c07", es: "el compañero de trabajo", target: "le collègue de travail", phon: "lə ko-LEG" },
      { id: "fr-m27-c08", es: "la sala de reuniones", target: "la salle de réunion", phon: "la sal də re-ü-NION" },
      { id: "fr-m27-c09", es: "quedo a la espera", target: "je reste dans l'attente", phon: "shə rest dan la-TANT" },
      { id: "fr-m27-c10", es: "reprogramar la cita", target: "reporter le rendez-vous", phon: "rə-por-TÉ lə ran-dé-VU" }
    ],
    dialogue: {
      title: "Organiser la réunion hebdomadaire", context: "Coordinación de tareas en la oficina.",
      lines: [
        { who: "Rui", target: "Salut Marta, tu as envoyé le rapport du projet ?", es: "Hola Marta, ¿enviaste el informe del proyecto?" },
        { who: "Marta", target: "Pas encore, je vais joindre le fichier et l'envoyer tout de suite.", es: "Aún no, voy a adjuntar el archivo y enviarlo de inmediato." },
        { who: "Rui", target: "Super. N'oublie pas que la réunion est à quatorze heures.", es: "Súper. No olvides que la reunión es a las catorce horas." },
        { who: "Marta", target: "On peut reporter à quinze heures ? J'ai un appel urgent.", es: "¿Podemos aplazar a las quince? Tengo una llamada urgente." },
        { who: "Rui", target: "Bien sûr, je préviens le reste de l'équipe.", es: "Claro, aviso al resto del equipo." }
      ],
      questions: [
        { q: "¿Qué falta por enviar?", options: ["Un correo", "Le rapport (informe)", "Una factura"], answer: 1 },
        { q: "¿A qué hora se aplaza la reunión?", options: ["14:00", "15:00", "16:00"], answer: 1 },
        { q: "¿Por qué pide Marta cambiar la hora?", options: ["Tiene una llamada", "Llega tarde", "Está a comer"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m27-cl1", before: "Je vais ", blank: "joindre", after: " le fichier au message.", es: "Voy a adjuntar el archivo al mensaje.", mode: "type" },
      { id: "fr-m27-cl2", before: "Le ", blank: "délai", after: " expire ce soir à dix-sept heures.", es: "El plazo expira esta tarde a las 17:00.", mode: "select", options: ["délai", "décor", "détour", "départ"] }
    ],
    falseFriends: [
      { es: "bureau", esMeaning: "oficina / escritorio", target: "bureau", targetMeaning: "tanto el espacio (oficina) como el mueble (escritorio)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 28 — Gestiones en el Banco                            */
  /* ============================================================ */
  pt.push({
    id: "pt-m28", num: 28, title: "No banco", subtitle: "Contas bancárias, transferências e caixas automáticos",
    cards: [
      { id: "pt-m28-c01", es: "la cuenta bancaria", target: "a conta bancária", phon: "a KON-ta ban-KA-ria" },
      { id: "pt-m28-c02", es: "el cajero automático", target: "o multibanco / caixa automático", phon: "u mul-ti-BAN-ku" },
      { id: "pt-m28-c03", es: "sacar dinero", target: "levantar dinheiro", phon: "le-van-TAR di-ÑEI-ru" },
      { id: "pt-m28-c04", es: "ingresar dinero", target: "depositar dinheiro", phon: "de-po-zi-TAR di-ÑEI-ru" },
      { id: "pt-m28-c05", es: "la transferencia", target: "a transferência", phon: "a trans-fe-REN-sia" },
      { id: "pt-m28-c06", es: "el préstamo", target: "o empréstimo", phon: "u em-PRES-ti-mu" },
      { id: "pt-m28-c07", es: "la tarjeta de débito", target: "o cartão de débito", phon: "u kar-TÃU de DE-bi-tu" },
      { id: "pt-m28-c08", es: "el saldo", target: "o saldo", phon: "u SAL-du" },
      { id: "pt-m28-c09", es: "comisión bancaria", target: "a comissão bancária", phon: "a ku-mi-SÃU ban-KA-ria" },
      { id: "pt-m28-c10", es: "el IBAN", target: "o IBAN", phon: "u I-ban" }
    ],
    dialogue: {
      title: "Abrir uma conta bancária", context: "Trámite de apertura de cuenta en Lisboa.",
      lines: [
        { who: "Bancário", target: "Bom dia, em que posso ser útil?", es: "Buenos días, ¿en qué puedo serle útil?" },
        { who: "Cliente", target: "Gostaria de abrir uma conta bancária à ordem.", es: "Quisiera abrir una cuenta corriente." },
        { who: "Bancário", target: "Com certeza. Preciso do seu documento de identificação e comprovativo de morada.", es: "Por supuesto. Necesito su documento de identidad y comprobante de domicilio." },
        { who: "Cliente", target: "Tenho tudo aqui. Como posso levantar dinheiro?", es: "Tengo todo aquí. ¿Cómo puedo sacar dinero?" },
        { who: "Bancário", target: "Enviar-lhe-emos o cartão de débito para usar no multibanco.", es: "Le enviaremos la tarjeta de débito para usar en el cajero automático." }
      ],
      questions: [
        { q: "¿Qué trámite desea hacer el cliente?", options: ["Pedir un préstamo", "Abrir una cuenta", "Pagar una multa"], answer: 1 },
        { q: "¿Qué documentos le piden?", options: ["ID y pasaporte", "ID y comprobante de domicilio (morada)", "Solo el IBAN"], answer: 1 },
        { q: "¿Cómo se dice sacar dinero en Portugal?", options: ["Sacar", "Tirar", "Levantar"], answer: 2 }
      ]
    },
    cloze: [
      { id: "pt-m28-cl1", before: "Preciso de ", blank: "levantar", after: " dinheiro no multibanco.", es: "Necesito sacar dinero en el cajero.", mode: "type" },
      { id: "pt-m28-cl2", before: "Qual é o seu comprovativo de ", blank: "morada", after: "?", es: "¿Cuál es su comprobante de domicilio?", mode: "select", options: ["morada", "entrada", "saída", "comida"] }
    ],
    falseFriends: [
      { es: "propina", esMeaning: "gorjeta", target: "propina", targetMeaning: "tasa académica / matrícula (la propina voluntaria es «gorjeta»)" }
    ]
  });

  fr.push({
    id: "fr-m28", num: 28, title: "À la banque", subtitle: "Cuentas bancarias, transferencias y cajeros",
    cards: [
      { id: "fr-m28-c01", es: "la cuenta bancaria", target: "le compte bancaire", phon: "lə kont ban-KÉR" },
      { id: "fr-m28-c02", es: "el cajero automático", target: "le distributeur automatique / guichet", phon: "lə dis-tri-bü-TÖR" },
      { id: "fr-m28-c03", es: "sacar dinero", target: "retirer de l'argent", phon: "rə-ti-RÉ də lar-ZHAN" },
      { id: "fr-m28-c04", es: "ingresar dinero", target: "déposer de l'argent", phon: "de-po-ZÉ də lar-ZHAN" },
      { id: "fr-m28-c05", es: "la transferencia", target: "le virement", phon: "lə vir-MAN" },
      { id: "fr-m28-c06", es: "el préstamo", target: "le prêt / l'emprunt", phon: "lə pré" },
      { id: "fr-m28-c07", es: "la tarjeta de débito", target: "la carte bancaire / de débit", phon: "la kart ban-KÉR" },
      { id: "fr-m28-c08", es: "el saldo", target: "le solde", phon: "lə sold" },
      { id: "fr-m28-c09", es: "comisión bancaria", target: "les frais bancaires", phon: "lé fré ban-KÉR" },
      { id: "fr-m28-c10", es: "el RIB/IBAN", target: "le RIB", phon: "lə rib" }
    ],
    dialogue: {
      title: "Ouvrir un compte bancaire", context: "Apertura de cuenta bancaria en París.",
      lines: [
        { who: "Banquier", target: "Bonjour, que puis-je faire pour vous ?", es: "Buenos días, ¿qué puedo hacer por usted?" },
        { who: "Client", target: "Je voudrais ouvrir un compte courant, s'il vous plaît.", es: "Quisiera abrir una cuenta corriente, por favor." },
        { who: "Banquier", target: "Très bien. J'ai besoin d'une pièce d'identité et d'un justificatif de domicile.", es: "Muy bien. Necesito un documento de identidad y un justificante de domicilio." },
        { who: "Client", target: "Voici mes documents. Puis-je avoir un RIB ?", es: "Aquí están mis documentos. ¿Puedo obtener un RIB?" },
        { who: "Banquier", target: "Oui, vous l'aurez dès la validation de votre dossier.", es: "Sí, lo tendrá tan pronto se valide su expediente." }
      ],
      questions: [
        { q: "¿Qué quiere abrir el cliente?", options: ["Un préstamo", "Un compte courant", "Un seguro"], answer: 1 },
        { q: "¿Qué piden como prueba de residencia?", options: ["Justificatif de domicile", "Passeport", "Ticket de caisse"], answer: 0 },
        { q: "¿Qué documento bancario pide para sus datos?", options: ["El RIB", "El cheque", "La tarjeta"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m28-cl1", before: "Je dois ", blank: "retirer", after: " de l'argent au distributeur.", es: "Tengo que sacar dinero del cajero.", mode: "type" },
      { id: "fr-m28-cl2", before: "Apportez un justificatif de ", blank: "domicile", after: ".", es: "Traiga un justificante de domicilio.", mode: "select", options: ["domicile", "voyage", "travail", "santé"] }
    ],
    falseFriends: [
      { es: "solde", esMeaning: "saldo bancario / rebajas", target: "solde", targetMeaning: "saldo (en singular) o rebajas (en plural: les soldes)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 29 — Alquilar un Piso                                 */
  /* ============================================================ */
  pt.push({
    id: "pt-m29", num: 29, title: "Arrendar casa", subtitle: "Visitas, contratos de arrendamento e fiança",
    cards: [
      { id: "pt-m29-c01", es: "alquilar", target: "arrendar / alugar", phon: "a-rren-DAR / a-lu-GAR" },
      { id: "pt-m29-c02", es: "el contrato de alquiler", target: "o contrato de arrendamento", phon: "u kon-TRA-tu de a-rren-da-MEN-tu" },
      { id: "pt-m29-c03", es: "la fianza / depósito", target: "a caução", phon: "a kaw-SÃU" },
      { id: "pt-m29-c04", es: "el propietario", target: "o senhorio", phon: "u se-ño-RI-u" },
      { id: "pt-m29-c05", es: "el inquilino", target: "o inquilino", phon: "u in-ki-LI-nu" },
      { id: "pt-m29-c06", es: "amueblado", target: "mobilado", phon: "mu-bi-LA-du" },
      { id: "pt-m29-c07", es: "los gastos incluidos", target: "as despesas incluídas", phon: "ash des-PE-zash in-klui-DASH" },
      { id: "pt-m29-c08", es: "piso de dos dormitorios", target: "um T2", phon: "ũ te-DOISH", note: "En Portugal los pisos se clasifican como T0, T1, T2 según los dormitorios." },
      { id: "pt-m29-c09", es: "el recibo de alquiler", target: "o recibo de renda", phon: "u re-SI-bu de REN-da" },
      { id: "pt-m29-c10", es: "la fianza inicial", target: "o mês de avanço", phon: "u mesh de a-VAN-su" }
    ],
    dialogue: {
      title: "Visitar um apartamento", context: "Revisando las condiciones de alquiler en Oporto.",
      lines: [
        { who: "Senhorio", target: "Este é o T2. Como pode ver, está totalmente mobilado.", es: "Este es el piso de 2 dormitorios. Como puede ver, está totalmente amueblado." },
        { who: "Inquilino", target: "É muito luminoso. As despesas de água e luz estão incluídas?", es: "Es muy luminoso. ¿Los gastos de agua y luz están incluidos?" },
        { who: "Senhorio", target: "Não, as despesas são à parte. A renda mensal é de oitocentos euros.", es: "No, los gastos van aparte. La renta mensual es de ochocientos euros." },
        { who: "Inquilino", target: "Quanto pede de caução?", es: "¿Cuánto pide de fianza?" },
        { who: "Senhorio", target: "Peço um mês de renda e dois meses de caução.", es: "Pido un mes de renta y dos meses de fianza." }
      ],
      questions: [
        { q: "¿Cuántos dormitorios tiene un apartamento T2?", options: ["Uno", "Dos", "Tres"], answer: 1 },
        { q: "¿Están incluidos los gastos en el alquiler?", options: ["Sí", "No", "Solo el agua"], answer: 1 },
        { q: "¿Cuántos meses de caução pide?", options: ["Un mes", "Dos meses", "Tres meses"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m29-cl1", before: "O apartamento está totalmente ", blank: "mobilado", after: ".", es: "El piso está totalmente amueblado.", mode: "type" },
      { id: "pt-m29-cl2", before: "A ", blank: "renda", after: " mensal é paga no dia um.", es: "El alquiler mensual se paga el día uno.", mode: "select", options: ["renda", "venda", "rocha", "roda"] }
    ],
    falseFriends: [
      { es: "renda", esMeaning: "alquiler / renta", target: "renda", targetMeaning: "el pago del alquiler (en España 'renta' suele ser la declaración de impuestos o ingreso genérico)" }
    ]
  });

  fr.push({
    id: "fr-m29", num: 29, title: "Louer un appartement", subtitle: "Visitas, contratos y fianza",
    cards: [
      { id: "fr-m29-c01", es: "alquilar", target: "louer", phon: "lu-É" },
      { id: "fr-m29-c02", es: "el contrato de alquiler", target: "le bail de location", phon: "lə bél də lo-ka-SION" },
      { id: "fr-m29-c03", es: "la fianza / depósito", target: "le dépôt de garantie / la caution", phon: "lə de-PO də ga-ran-TI" },
      { id: "fr-m29-c04", es: "el propietario", target: "le propriétaire / bailleur", phon: "lə pro-pri-é-TÉR" },
      { id: "fr-m29-c05", es: "el inquilino", target: "le locataire", phon: "lə lo-ka-TÉR" },
      { id: "fr-m29-c06", es: "amueblado", target: "meublé", phon: "mö-BLÉ" },
      { id: "fr-m29-c07", es: "gastos incluidos", target: "charges comprises (CC)", phon: "sharzh kon-PRIZ" },
      { id: "fr-m29-c08", es: "piso de dos habitaciones", target: "un T3 / F3", phon: "an te-TRUA", note: "En Francia, T3 indica 3 estancias principales (salón + 2 dormitorios)." },
      { id: "fr-m29-c09", es: "el recibo de alquiler", target: "la quittance de loyer", phon: "la ki-TANS də lua-YÉ" },
      { id: "fr-m29-c10", es: "el avalista", target: "le garant", phon: "lə ga-RAN" }
    ],
    dialogue: {
      title: "Visiter un logement", context: "Acuerdo sobre el alquiler de una vivienda.",
      lines: [
        { who: "Propriétaire", target: "Voici le T3. Il est loué meublé comme indiqué dans l'annonce.", es: "Aquí está el piso T3. Se alquila amueblado como indica el anuncio." },
        { who: "Locataire", target: "Le loyer est de combien par mois ?", es: "¿De cuánto es el alquiler al mes?" },
        { who: "Propriétaire", target: "C'est neuf cents euros par mois, charges comprises.", es: "Son novecientos euros al mes, gastos incluidos." },
        { who: "Locataire", target: "Quelle est la somme du dépôt de garantie ?", es: "¿De cuánto es el depósito de garantía?" },
        { who: "Propriétaire", target: "Un mois de loyer hors charges. Il vous faut aussi un garant.", es: "Un mes de alquiler sin gastos. También necesita un avalista." }
      ],
      questions: [
        { q: "¿Qué significa 'charges comprises'?", options: ["Sin muebles", "Gastos incluidos", "Sin depósito"], answer: 1 },
        { q: "¿Cuánto cuesta el alquiler al mes?", options: ["800€", "900€", "1000€"], answer: 1 },
        { q: "¿Qué figura adicional le exigen al inquilino?", options: ["Un avalista (garant)", "Dos contratos", "Un seguro de vida"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m29-cl1", before: "L'appartement est loué ", blank: "meublé", after: ".", es: "El piso se alquila amueblado.", mode: "type" },
      { id: "fr-m29-cl2", before: "Demandez une quittance de ", blank: "loyer", after: " chaque mois.", es: "Pida un recibo de alquiler cada mes.", mode: "select", options: ["loyer", "voiture", "pain", "train"] }
    ],
    falseFriends: [
      { es: "location", esMeaning: "alquiler", target: "location", targetMeaning: "alquiler (no ubicación de un sitio, que es «emplacement»)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 30 — Averías y Reparaciones en Casa                    */
  /* ============================================================ */
  pt.push({
    id: "pt-m30", num: 30, title: "Avarias e reparações", subtitle: "Problemas domésticos, fontanero y técnicos",
    cards: [
      { id: "pt-m30-c01", es: "la fuga de agua", target: "a fuga de água", phon: "a FU-ga de A-gua" },
      { id: "pt-m30-c02", es: "el fontanero", target: "o canalizador", phon: "u ka-na-li-za-DOR" },
      { id: "pt-m30-c03", es: "el electricista", target: "o eletricista", phon: "u e-le-tri-SIS-ta" },
      { id: "pt-m30-c04", es: "el enchufe", target: "a tomada", phon: "a tu-MA-da" },
      { id: "pt-m30-c05", es: "el grifo", target: "a torneira", phon: "a tor-NEI-ra" },
      { id: "pt-m30-c06", es: "atascado", target: "entupido", phon: "en-tu-PI-du" },
      { id: "pt-m30-c07", es: "estestropeado", target: "avariado / estragado", phon: "a-va-RIA-du" },
      { id: "pt-m30-c08", es: "corta la luz", target: "quadro elétrico", phon: "KUAR-dru e-LE-tri-ku" },
      { id: "pt-m30-c09", es: "el presupuesto", target: "o orçamento", phon: "u or-sa-MEN-tu" },
      { id: "pt-m30-c10", es: "reparar / arreglar", target: "reparar / arranjar", phon: "rre-pa-RAR / a-rran-JAR" }
    ],
    dialogue: {
      title: "Chamar um canalizador", context: "Reportar una avería en el baño.",
      lines: [
        { who: "Inquilino", target: "Liguei porque tenho uma fuga de água na casa de banho.", es: "Llamé porque tengo una fuga de agua en el baño." },
        { who: "Técnico", target: "Onde é exatamente a fuga?", es: "¿Dónde es exactamente la fuga?" },
        { who: "Inquilino", target: "É por baixo do lavatório, e o cano parece entupido.", es: "Es debajo del lavabo, y la tubería parece atascada." },
        { who: "Técnico", target: "Posso ir hoje à tarde para fazer um orçamento.", es: "Puedo ir hoy por la tarde para hacer un presupuesto." },
        { who: "Inquilino", target: "A que horas pode vir?", es: "¿A qué hora puede venir?" }
      ],
      questions: [
        { q: "¿Dónde está la fuga?", options: ["En la cocina", "En el baño (casa de banho)", "En el balcón"], answer: 1 },
        { q: "¿Cómo está la tubería?", options: ["Rota", "Entupida (atascada)", "Limpia"], answer: 1 },
        { q: "¿Qué ofrecerá el técnico antes de arreglarlo?", options: ["Un recibo", "Un presupuesto (orçamento)", "Un contrato"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m30-cl1", before: "O lava-loça está completamente ", blank: "entupido", after: ".", es: "El fregadero está completamente atascado.", mode: "type" },
      { id: "pt-m30-cl2", before: "Pode mandar o ", blank: "orçamento", after: " por e-mail?", es: "¿Puede mandar el presupuesto por e-mail?", mode: "select", options: ["orçamento", "documento", "apartamento", "movimento"] }
    ],
    falseFriends: [
      { es: "canal", esMeaning: "canal de TV / água", target: "canalizador", targetMeaning: "fontanero (el especialista en tuberías)" }
    ]
  });

  fr.push({
    id: "fr-m30", num: 30, title: "Panne et réparations", subtitle: "Problemas domésticos y servicio técnico",
    cards: [
      { id: "fr-m30-c01", es: "la fuga de agua", target: "la fuite d'eau", phon: "la füit do" },
      { id: "fr-m30-c02", es: "el fontanero", target: "le plombier", phon: "lə plon-BIÉ" },
      { id: "fr-m30-c03", es: "el electricista", target: "l'électricien", phon: "le-lek-tri-SIEN" },
      { id: "fr-m30-c04", es: "el enchufe", target: "la prise électrique", phon: "la priz" },
      { id: "fr-m30-c05", es: "el grifo", target: "le robinet", phon: "lə ro-bi-NÉ" },
      { id: "fr-m30-c06", es: "atascado", target: "bouché", phon: "bu-SHÉ" },
      { id: "fr-m30-c07", es: "estropeado / en avería", target: "en panne", phon: "an pan" },
      { id: "fr-m30-c08", es: "el cuadro eléctrico", target: "le tableau électrique", phon: "lə ta-BLO" },
      { id: "fr-m30-c09", es: "el presupuesto", target: "le devis", phon: "lə də-VI" },
      { id: "fr-m30-c10", es: "reparar / arreglar", target: "réparer", phon: "re-pa-RÉ" }
    ],
    dialogue: {
      title: "Appeler un plombier", context: "Avería urgente de agua en la cocina.",
      lines: [
        { who: "Locataire", target: "Bonjour, j'ai une fuite d'eau importante dans ma cuisine.", es: "Buenos días, tengo una fuga de agua importante en mi cocina." },
        { who: "Plombier", target: "Le robinet est cassé ou l'évier est bouché ?", es: "¿El grifo está roto o el fregadero está atascado?" },
        { who: "Locataire", target: "L'évier est complètement bouché et ça déborde.", es: "El fregadero está completamente atascado y desborda." },
        { who: "Plombier", target: "Je peux passer dans une heure. Je vous ferai un devis d'abord.", es: "Puedo pasar en una hora. Le haré un presupuesto primero." },
        { who: "Locataire", target: "D'accord, merci pour votre réactivité.", es: "De acuerdo, gracias por su rapidez." }
      ],
      questions: [
        { q: "¿Dónde ocurrió el problema?", options: ["En la cocina", "En el dormitorio", "En el garaje"], answer: 0 },
        { q: "¿Qué le sucede al fregadero?", options: ["Está sucio", "Está bouché (atascado)", "No tiene grifo"], answer: 1 },
        { q: "¿Qué documento entregará el fontanero d'abord?", options: ["Un devis (presupuesto)", "Una factura", "Un recibo"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m30-cl1", before: "L'appareil ménager est en ", blank: "panne", after: ".", es: "El electrodoméstico está averiado.", mode: "type" },
      { id: "fr-m30-cl2", before: "Signez le ", blank: "devis", after: " avant le début des travaux.", es: "Firme el presupuesto antes del inicio de los trabajos.", mode: "select", options: ["devis", "devoir", "délai", "départ"] }
    ],
    falseFriends: [
      { es: "panne", esMeaning: "pan", target: "panne", targetMeaning: "avería (pan de comer en francés es «pain»)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 31 — En el Aeropuerto                                 */
  /* ============================================================ */
  pt.push({
    id: "pt-m31", num: 31, title: "No aeroporto", subtitle: "Embarque, controlo de segurança e bagagem",
    cards: [
      { id: "pt-m31-c01", es: "la tarjeta de embarque", target: "o talão de embarque / cartão de embarque", phon: "u kar-TÃU de em-BAR-ke" },
      { id: "pt-m31-c02", es: "facturar el equipaje", target: "despachar a bagagem", phon: "desh-pa-SHAR a ba-GA-jãi" },
      { id: "pt-m31-c03", es: "la puerta de embarque", target: "a porta de embarque", phon: "a POR-ta de em-BAR-ke" },
      { id: "pt-m31-c04", es: "control de seguridad", target: "o controlo de segurança", phon: "u kon-TRO-lu de se-gu-RAN-sa" },
      { id: "pt-m31-c05", es: "el vuelo retrasado", target: "o voo atrasado", phon: "u VOH a-tra-ZA-du" },
      { id: "pt-m31-c06", es: "el vuelo cancelado", target: "o voo cancelado", phon: "u VOH kan-se-LA-du" },
      { id: "pt-m31-c07", es: "equipaje de mano", target: "a bagagem de mão", phon: "a ba-GA-jãi de MÃU" },
      { id: "pt-m31-c08", es: "la cinta de equipajes", target: "a tapete rolante / recolha de bagagem", phon: "a re-KO-lya de ba-GA-jãi" },
      { id: "pt-m31-c09", es: "despegar", target: "descolar", phon: "desh-ku-LAR" },
      { id: "pt-m31-c10", es: "aterrizar", target: "aterrar", phon: "a-te-RRAR" }
    ],
    dialogue: {
      title: "No balcão de check-in", context: "Trámites antes de abordar el vuelo.",
      lines: [
        { who: "Agente", target: "Boa tarde, o seu passaporte e cartão de embarque, por favor.", es: "Buenas tardes, su pasaporte y tarjeta de embarque, por favor." },
        { who: "Passageiro", target: "Aqui tem. Vai ser preciso despachar esta mala?", es: "Aquí tiene. ¿Hará falta facturar esta maleta?" },
        { who: "Agente", target: "Se ultrapassar os dez quilos, sim. Coloque-a na balança.", es: "Si supera los diez kilos, sí. Colóquela en la báscula." },
        { who: "Passageiro", target: "A que horas começa o embarque?", es: "¿A qué hora empieza el embarque?" },
        { who: "Agente", target: "O voo está um pouco atrasado. O embarque será às dezassete horas na porta B4.", es: "El vuelo está un poco retrasado. El embarque será a las 17:00 en la puerta B4." }
      ],
      questions: [
        { q: "¿Cuándo hay que despachar a mala?", options: ["Si supera los 5 kg", "Si supera los 10 kg", "Siempre"], answer: 1 },
        { q: "¿Qué le ocurre al vuelo?", options: ["Está cancelado", "Está atrasado", "Sale adelantado"], answer: 1 },
        { q: "¿En qué puerta será el embarque?", options: ["A1", "B4", "C12"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m31-cl1", before: "O avião vai ", blank: "descolar", after: " dentro de dez minutos.", es: "El avión va a despegar en diez minutos.", mode: "type" },
      { id: "pt-m31-cl2", before: "Tenho apenas uma bagagem de ", blank: "mão", after: ".", es: "Tengo solo un equipaje de mano.", mode: "select", options: ["mão", "pé", "dorso", "lado"] }
    ],
    falseFriends: [
      { es: "despachar", esMeaning: "enviar / atracar", target: "despachar", targetMeaning: "facturar el equipaje en el contexto de aviación" }
    ]
  });

  fr.push({
    id: "fr-m31", num: 31, title: "À l'aéroport", subtitle: "Facturación, seguridad y embarque",
    cards: [
      { id: "fr-m31-c01", es: "la tarjeta de embarque", target: "la carte d'embarquement", phon: "la kart dam-bar-kə-MAN" },
      { id: "fr-m31-c02", es: "facturar el equipaje", target: "enregistrer les bagages", phon: "an-rə-zhis-TRÉ lé ba-GASH" },
      { id: "fr-m31-c03", es: "la puerta de embarque", target: "la porte d'embarquement", phon: "la port dam-bar-kə-MAN" },
      { id: "fr-m31-c04", es: "control de seguridad", target: "le contrôle de sécurité", phon: "lə kon-TROL də se-kü-ri-TÉ" },
      { id: "fr-m31-c05", es: "el vuelo retrasado", target: "le vol retardé", phon: "lə vol rə-tar-DÉ" },
      { id: "fr-m31-c06", es: "el vuelo cancelado", target: "le vol annulé", phon: "lə vol a-nü-LÉ" },
      { id: "fr-m31-c07", es: "equipaje de mano", target: "le bagage à main", phon: "lə ba-GASH a man" },
      { id: "fr-m31-c08", es: "reclamación de equipaje", target: "la livraison des bagages", phon: "la li-vré-ZON dé ba-GASH" },
      { id: "fr-m31-c09", es: "despegar", target: "décoller", phon: "de-ko-LÉ" },
      { id: "fr-m31-c10", es: "aterrizar", target: "atterrir", phon: "a-te-RIR" }
    ],
    dialogue: {
      title: "À l'enregistrement", context: "Facturación de equipaje en el aeropuerto de Orly.",
      lines: [
        { who: "Agent", target: "Bonjour, votre passeport et votre carte d'embarquement s'il vous plaît.", es: "Buenos días, su pasaporte y tarjeta de embarque por favor." },
        { who: "Passager", target: "Voilà. Je dois enregistrer cette valise en soute.", es: "Aquí tiene. Debo facturar esta maleta en bodega." },
        { who: "Agent", target: "Posez-la sur le tapis. Elle fait dix-huit kilos, c'est parfait.", es: "Póngala sobre la cinta. Pesa 18 kilos, es perfecto." },
        { who: "Passager", target: "Le vol est à l'heure ?", es: "¿El vuelo viene a tiempo?" },
        { who: "Agent", target: "Oui, embarquement porte 12 à partir de quatorze heures.", es: "Sí, embarque en la puerta 12 a partir de las catorce horas." }
      ],
      questions: [
        { q: "¿Dónde colocará la maleta el pasajero?", options: ["En soute (bodega)", "En cabina", "En el control"], answer: 0 },
        { q: "¿Cuánto pesa la maleta?", options: ["10 kg", "18 kg", "25 kg"], answer: 1 },
        { q: "¿A qué hora empieza el embarque?", options: ["12:00", "14:00", "16:00"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m31-cl1", before: "L'avion va ", blank: "décoller", after: " à l'heure prévue.", es: "El avión va a despegar a la hora prevista.", mode: "type" },
      { id: "fr-m31-cl2", before: "Gardez votre bagage à ", blank: "main", after: " avec vous.", es: "Conserve su equipaje de mano consigo.", mode: "select", options: ["main", "pied", "dos", "bras"] }
    ],
    falseFriends: [
      { es: "voler", esMeaning: "volar / robar", target: "voler", targetMeaning: "significa tanto volar como robar según el contexto" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 32 — El Mercado Tradicional                           */
  /* ============================================================ */
  pt.push({
    id: "pt-m32", num: 32, title: "No mercado tradicional", subtitle: "Frutas, legumes, pesos e feira local",
    cards: [
      { id: "pt-m32-c01", es: "las frutas", target: "as frutas", phon: "ash FRU-tash" },
      { id: "pt-m32-c02", es: "las verduras / hortalizas", target: "os legumes / as hortaliças", phon: "ush le-GU-mesh" },
      { id: "pt-m32-c03", es: "medio kilo", target: "meio quilo", phon: "MEI-u KI-lu" },
      { id: "pt-m32-c04", es: "fresco", target: "fresco / fresca", phon: "FRES-ku" },
      { id: "pt-m32-c05", es: "maduro", target: "maduro", phon: "ma-DU-ru" },
      { id: "pt-m32-c06", es: "la báscula", target: "a balança", phon: "a ba-LAN-sa" },
      { id: "pt-m32-c07", es: "las manzanas", target: "as maçãs", phon: "ash ma-SÃSH" },
      { id: "pt-m32-c08", es: "las patatas", target: "as batatas", phon: "ash ba-TA-tash" },
      { id: "pt-m32-c09", es: "probar / degustar", target: "provar", phon: "pru-VAR" },
      { id: "pt-m32-c10", es: "el puesto del mercado", target: "a banca do mercado", phon: "a BAN-ka du mer-KA-du" }
    ],
    dialogue: {
      title: "Comprar fruta no mercado", context: "Compra semanal en un mercado municipal en Portugal.",
      lines: [
        { who: "Vendedora", target: "Olha a fruta fresca! O que vai levar hoje?", es: "¡Mire la fruta fresca! ¿Qué va a llevar hoy?" },
        { who: "Cliente", target: "Bom dia. Queria um quilo de maçãs e meio quilo de laranjas.", es: "Buenos días. Quería un kilo de manzanas y medio kilo de naranjas." },
        { who: "Vendedora", target: "As laranjas estão muito doces e maduras. Quer provar?", es: "Las naranjas están muy dulces y maduras. ¿Quiere probar?" },
        { who: "Cliente", target: "Sim, por favor... Deliciosas! Leve também um quilo de batatas.", es: "Sí, por favor... ¡Deliciosas! Lleve también un kilo de patatas." },
        { who: "Vendedora", target: "São cinco euros ao todo.", es: "Son cinco euros en total." }
      ],
      questions: [
        { q: "¿Cuántas manzanas pide el cliente?", options: ["Medio kilo", "Un kilo", "Dos kilos"], answer: 1 },
        { q: "¿Cómo están las naranjas según la vendedora?", options: ["Ácidas", "Doces e maduras", "Verdes"], answer: 1 },
        { q: "¿Cuánto cuesta la compra en total?", options: ["3 euros", "5 euros", "10 euros"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m32-cl1", before: "Queria ", blank: "meio", after: " quilo de laranjas.", es: "Quería medio kilo de naranjas.", mode: "type" },
      { id: "pt-m32-cl2", before: "A fruta está muito ", blank: "fresca", after: " hoje.", es: "La fruta está muy fresca hoy.", mode: "select", options: ["fresca", "quente", "seca", "avariada"] }
    ],
    falseFriends: [
      { es: "legumbres", esMeaning: "feijão/grão", target: "legumes", targetMeaning: "verduras y hortalizas en general (las legumbres secas son 'leguminosas')" }
    ]
  });

  fr.push({
    id: "fr-m32", num: 32, title: "Au marché local", subtitle: "Frutas, verduras, pesos y puestos locales",
    cards: [
      { id: "fr-m32-c01", es: "las frutas", target: "les fruits", phon: "lé frui" },
      { id: "fr-m32-c02", es: "las verduras", target: "les légumes", phon: "lé le-GÜM" },
      { id: "fr-m32-c03", es: "medio kilo", target: "une demi-livre / 500 grammes", phon: "ün də-mi li-vr" },
      { id: "fr-m32-c04", es: "fresco", target: "frais / fraîche", phon: "fré / fresh" },
      { id: "fr-m32-c05", es: "maduro", target: "mûr / mûre", phon: "mür" },
      { id: "fr-m32-c06", es: "la báscula / peso", target: "la balance", phon: "la ba-LANS" },
      { id: "fr-m32-c07", es: "las manzanas", target: "les pommes", phon: "lé pom" },
      { id: "fr-m32-c08", es: "las patatas", target: "les pommes de terre", phon: "lé pom də tér" },
      { id: "fr-m32-c09", es: "probar", target: "goûter", phon: "gu-TÉ" },
      { id: "fr-m32-c10", es: "el puesto", target: "L'étal / le stand", phon: "le-TAL" }
    ],
    dialogue: {
      title: "Acheter des légumes au marché", context: "Compra en un mercado al aire libre en Provenza.",
      lines: [
        { who: "Marchand", target: "Bonjour ! Qu'est-ce qu'il vous faudra aujourd'hui ?", es: "¡Buenos días! ¿Qué va a necesitar hoy?" },
        { who: "Client", target: "Je voudrais un kilo de pommes et 500 grammes de tomates.", es: "Quisiera un kilo de manzanas y 500 gramos de tomates." },
        { who: "Marchand", target: "Les tomates sont bien mûres et très fraîches.", es: "Los tomates están bien maduros y muy frescos." },
        { who: "Client", target: "Je peux goûter une fraise ?", es: "¿Puedo probar una fresa?" },
        { who: "Marchand", target: "Allez-y ! Ça vous fera six euros en tout.", es: "¡Adelante! Serán seis euros en total." }
      ],
      questions: [
        { q: "¿Cuántas manzanas pide?", options: ["500 gramos", "Un kilo", "Dos kilos"], answer: 1 },
        { q: "¿Qué prueba el cliente?", options: ["Un tomate", "Une fraise (fresa)", "Una manzana"], answer: 1 },
        { q: "¿Cuánto es el total de la compra?", options: ["4 euros", "6 euros", "8 euros"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m32-cl1", before: "Les fruits sont bien ", blank: "mûrs", after: " pour la salade.", es: "Las frutas están bien maduras para la ensalada.", mode: "type" },
      { id: "fr-m32-cl2", before: "Donnez-moi une demi-", blank: "livre", after: " de fraises.", es: "Deme medio kilo (demi-livre) de fresas.", mode: "select", options: ["livre", "carte", "table", "porte"] }
    ],
    falseFriends: [
      { es: "pomme", esMeaning: "manzana", target: "pomme", targetMeaning: "manzana (mientras que 'pomme de terre' es patata)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 33 — El Tiempo y el Clima                             */
  /* ============================================================ */
  pt.push({
    id: "pt-m33", num: 33, title: "O tempo e o clima", subtitle: "Previsão do tempo, estações e expressões climáticas",
    cards: [
      { id: "pt-m33-c01", es: "hace buen tiempo", target: "está bom tempo", phon: "shta bon TEN-pu" },
      { id: "pt-m33-c02", es: "hace mal tiempo", target: "está mau tempo", phon: "shta mow TEN-pu" },
      { id: "pt-m33-c03", es: "hace calor", target: "está calor", phon: "shta ka-LOR" },
      { id: "pt-m33-c04", es: "hace frío", target: "está frio", phon: "shta FRI-u" },
      { id: "pt-m33-c05", es: "está lloviendo", target: "está a chover", phon: "shta a shu-VER" },
      { id: "pt-m33-c06", es: "el sol", target: "o sol", phon: "u sol" },
      { id: "pt-m33-c07", es: "las nubes / nublado", target: "as nuvens / nublado", phon: "ash NU-vens" },
      { id: "pt-m33-c08", es: "la lluvia", target: "a chuva", phon: "a SHU-va" },
      { id: "pt-m33-c09", es: "el viento", target: "o vento", phon: "u VEN-tu" },
      { id: "pt-m33-c10", es: "la previsión del tiempo", target: "a previsão do tempo", phon: "a pre-vi-ZÃU du TEN-pu" }
    ],
    dialogue: {
      title: "Falar sobre o tempo", context: "Dos personas comentan el clima del fin de semana.",
      lines: [
        { who: "Inês", target: "Viste a previsão do tempo para o fim de semana?", es: "¿Viste la predicción del tiempo para el fin de semana?" },
        { who: "Pedro", target: "Sim, dizem que vai estar muito calor no sábado.", es: "Sí, dicen que va a hacer mucho calor el sábado." },
        { who: "Inês", target: "Ótimo! Então podemos ir à praia.", es: "¡Genial! Entonces podemos ir a la playa." },
        { who: "Pedro", target: "Mas no domingo vai começar a chover e a fazer vento.", es: "Pero el domingo va a empezar a llover y a hacer viento." },
        { who: "Inês", target: "Nesse caso, ficamos em casa no domingo.", es: "En ese caso, nos quedamos en casa el domingo." }
      ],
      questions: [
        { q: "¿Qué tiempo hará el sábado?", options: ["Lluvia", "Calor", "Nieve"], answer: 1 },
        { q: "¿Qué plan tienen para el sábado?", options: ["Ir a la playa", "Ir al cine", "Quedarse en casa"], answer: 0 },
        { q: "¿Qué ocurrirá el domingo?", options: ["Estará despejado", "Empezará a chover e vento", "Hará más calor"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m33-cl1", before: "Hoje ", blank: "está", after: " muito calor lá fora.", es: "Hoy hace mucho calor ahí fuera.", mode: "type" },
      { id: "pt-m33-cl2", before: "Leva o guarda-chuva porque está a ", blank: "chover", after: ".", es: "Lleva el paraguas porque está lloviendo.", mode: "select", options: ["chover", "correr", "comer", "cantar"] }
    ],
    falseFriends: [
      { es: "tempo", esMeaning: "tiempo cronológico / clima", target: "tempo", targetMeaning: "mismo doble significado que en español" }
    ]
  });

  fr.push({
    id: "fr-m33", num: 33, title: "La météo et le climat", subtitle: "Pronóstico del tiempo y estaciones",
    cards: [
      { id: "fr-m33-c01", es: "hace buen tiempo", target: "il fait beau", phon: "il fé bo" },
      { id: "fr-m33-c02", es: "hace mal tiempo", target: "il fait mauvais", phon: "il fé mo-VÉ" },
      { id: "fr-m33-c03", es: "hace calor", target: "il fait chaud", phon: "il fé sho" },
      { id: "fr-m33-c04", es: "hace frío", target: "il fait froid", phon: "il fé frua" },
      { id: "fr-m33-c05", es: "está lloviendo", target: "il pleut", phon: "il plö" },
      { id: "fr-m33-c06", es: "el sol / hace sol", target: "il y a du soleil", phon: "il i a dü so-LEI" },
      { id: "fr-m33-c07", es: "está nublado", target: "c'est nuageux / couvert", phon: "sé nü-a-ZHÖ" },
      { id: "fr-m33-c08", es: "la lluvia", target: "la pluie", phon: "la plüi" },
      { id: "fr-m33-c09", es: "el viento / hace viento", target: "il y a du vent", phon: "il i a dü van" },
      { id: "fr-m33-c10", es: "el pronóstico del tiempo", target: "la météo", phon: "la me-te-O" }
    ],
    dialogue: {
      title: "Parler du temps qu'il fait", context: "Conversación sobre planes según el clima.",
      lines: [
        { who: "Inês", target: "Tu as regardé la météo pour ce week-end ?", es: "¿Miraste el tiempo para este fin de semana?" },
        { who: "Pedro", target: "Oui, samedi il fait très beau et chaud.", es: "Sí, el sábado hace muy buen tiempo y calor." },
        { who: "Inês", target: "Super ! On pourra aller à la plage.", es: "¡Super! Podremos ir a la playa." },
        { who: "Pedro", target: "Mais dimanche il va pleuvoir et il y aura du vent.", es: "Pero el domingo va a llover y habrá viento." },
        { who: "Inês", target: "Dommage, on restera à la maison.", es: "Qué pena, nos quedaremos en casa." }
      ],
      questions: [
        { q: "¿Qué tiempo hará el sábado?", options: ["Il pleut", "Il fait beau et chaud", "Il neige"], answer: 1 },
        { q: "¿A dónde irán si hace buen tiempo?", options: ["A la playa", "Al museo", "Al cine"], answer: 0 },
        { q: "¿Qué pasará el domingo?", options: ["Hará sol", "Il va pleuvoir (llover)", "Hará viento helado"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m33-cl1", before: "Aujourd'hui, il ", blank: "fait", after: " très beau.", es: "Hoy hace muy buen tiempo.", mode: "type" },
      { id: "fr-m33-cl2", before: "Prends un parapluie car il ", blank: "pleut", after: ".", es: "Toma un paraguas porque está lloviendo.", mode: "select", options: ["pleut", "mange", "dort", "parle"] }
    ],
    falseFriends: [
      { es: "temps", esMeaning: "tiempo", target: "temps", targetMeaning: "se usa tanto para el tiempo que pasa como para la météo" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 34 — Deportes y Gimnasio                              */
  /* ============================================================ */
  pt.push({
    id: "pt-m34", num: 34, title: "Desporto e ginásio", subtitle: "Exercício, inscrições, treino e modalidades",
    cards: [
      { id: "pt-m34-c01", es: "el gimnasio", target: "o ginásio", phon: "u zhi-NA-ziu" },
      { id: "pt-m34-c02", es: "entrenar", target: "treinar", phon: "trei-NAR" },
      { id: "pt-m34-c03", es: "el entrenamiento", target: "o treino", phon: "u TREI-nu" },
      { id: "pt-m34-c04", es: "la cuota mensual", target: "a mensalidade", phon: "a men-sa-li-DA-de" },
      { id: "pt-m34-c05", es: "el entrenador personal", target: "o personal trainer", phon: "u per-so-nal TRAI-ner" },
      { id: "pt-m34-c06", es: "hacer footing / correr", target: "correr / fazer corrida", phon: "ku-RRER" },
      { id: "pt-m34-c07", es: "las pesas", target: "os pesos / halteres", phon: "ush PE-zush" },
      { id: "pt-m34-c08", es: "la taquilla", target: "o taquilo / o cacifo", phon: "u ka-SI-fu", note: "En Portugal, la taquilla de guardar cosas se llama «cacifo»." },
      { id: "pt-m34-c09", es: "estar en forma", target: "estar em forma", phon: "esh-TAR ãi FOR-ma" },
      { id: "pt-m34-c10", es: "agujetas", target: "dores musculares", phon: "DO-resh mus-ku-LA-resh" }
    ],
    dialogue: {
      title: "Inscrição no ginásio", context: "Consulta de precios e instalaciones en Lisboa.",
      lines: [
        { who: "Rececionista", target: "Olá! Gostaria de conhecer o nosso ginásio?", es: "¡Hola! ¿Le gustaría conocer nuestro gimnasio?" },
        { who: "Cliente", target: "Sim, quero começar a treinar para estar em forma.", es: "Sí, quiero empezar a entrenar para estar en forma." },
        { who: "Rececionista", target: "Temos musculação, aulas de grupo e piscina. A mensalidade é de trinta euros.", es: "Tenemos musculación, clases grupales y piscina. La cuota mensual es de treinta euros." },
        { who: "Cliente", target: "Preciso de trazer alfinete ou alugam cacifos?", es: "¿Necesito traer candado o alquilan taquillas?" },
        { who: "Rececionista", target: "Os cacifos são gratuitos, só precisa do seu próprio cadeado.", es: "Las taquillas son gratuitas, solo necesita su propio candado." }
      ],
      questions: [
        { q: "¿Para qué se quiere inscribir el cliente?", options: ["Para nadar solo", "Para treinar e estar em forma", "Para competir"], answer: 1 },
        { q: "¿Cuánto cuesta la mensalidade?", options: ["20€", "30€", "40€"], answer: 1 },
        { q: "¿Cómo se llama la taquilla para guardar ropa en Portugal?", options: ["Cacifo", "Mesa", "Caixa"], answer: 0 }
      ]
    },
    cloze: [
      { id: "pt-m34-cl1", before: "Vou guardar as minhas coisas no ", blank: "cacifo", after: ".", es: "Voy a guardar mis cosas en la taquilla.", mode: "type" },
      { id: "pt-m34-cl2", before: "Gosto de ", blank: "treinar", after: " logo pela manhã.", es: "Me gusta entrenar temprano por la mañana.", mode: "select", options: ["treinar", "deitar", "faltar", "dormir"] }
    ],
    falseFriends: [
      { es: "entretenimiento", esMeaning: "diversão", target: "treino", targetMeaning: "entrenamiento físico (entretenimiento de diversión es 'entretenimento')" }
    ]
  });

  fr.push({
    id: "fr-m34", num: 34, title: "Le sport et la salle", subtitle: "Ejercicio, gimnasio, abono y entrenamiento",
    cards: [
      { id: "fr-m34-c01", es: "el gimnasio", target: "la salle de sport", phon: "la sal də spor" },
      { id: "fr-m34-c02", es: "entrenar", target: "s'entraîner", phon: "san-tré-NÉ" },
      { id: "fr-m34-c03", es: "el entrenamiento", target: "l'entraînement", phon: "lan-trén-MAN" },
      { id: "fr-m34-c04", es: "la suscripción / abono", target: "l'abonnement", phon: "la-bon-MAN" },
      { id: "fr-m34-c05", es: "el entrenador", target: "le coach / l'entraîneur", phon: "lə kotsh" },
      { id: "fr-m34-c06", es: "correr", target: "courir / faire du jogging", phon: "ku-RIR" },
      { id: "fr-m34-c07", es: "las pesas", target: "les haltères / poids", phon: "lé zal-TÉR" },
      { id: "fr-m34-c08", es: "la taquilla", target: "le casier", phon: "lə ka-ZIÉ" },
      { id: "fr-m34-c09", es: "estar en forma", target: "être en forme", phon: "êtr an form" },
      { id: "fr-m34-c10", es: "agujetas", target: "les courbatures", phon: "lé kur-ba-TÜR" }
    ],
    dialogue: {
      title: "S'inscrire à la salle de sport", context: "Consulta de precios en París.",
      lines: [
        { who: "Accueil", target: "Bonjour ! Vous cherchez des renseignements pour un abonnement ?", es: "¡Buenos días! ¿Busca información para un abono?" },
        { who: "Client", target: "Oui, je voudrais m'entraîner trois fois par semaine.", es: "Sí, quisiera entrenar tres veces por semana." },
        { who: "Accueil", target: "Notre abonnement mensuel est à trente-cinq euros par mois sans engagement.", es: "Nuestra suscripción mensual es de 35 euros al mes sin permanencia." },
        { who: "Client", target: "Il y a des casiers pour ranger les affaires ?", es: "¿Hay taquillas para guardar las cosas?" },
        { who: "Accueil", target: "Oui, apportez juste votre cadenas.", es: "Sí, traiga únicamente su candado." }
      ],
      questions: [
        { q: "¿Cuántas veces por semana planea entrenar el cliente?", options: ["2 veces", "3 veces", "Todos los días"], answer: 1 },
        { q: "¿Cuánto cuesta el abono mensual?", options: ["25€", "35€", "50€"], answer: 1 },
        { q: "¿Qué debe traer para usar el casier?", options: ["Una llave", "Un cadenas (candado)", "Una moneda"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m34-cl1", before: "Range tes affaires dans le ", blank: "casier", after: ".", es: "Guarda tus cosas en la taquilla.", mode: "type" },
      { id: "fr-m34-cl2", before: "J'ai des ", blank: "courbatures", after: " après la séance d'hier.", es: "Tengo agujetas tras la sesión de ayer.", mode: "select", options: ["courbatures", "blessures", "lunettes", "chaussures"] }
    ],
    falseFriends: [
      { es: "entrenador", esMeaning: "coach", target: "entraîneur", targetMeaning: "mismo significado pero muy común la palabra 'coach'" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 35 — Fiestas y Celebraciones                          */
  /* ============================================================ */
  pt.push({
    id: "pt-m35", num: 35, title: "Festas e celebrações", subtitle: "Aniversários, convites e felicitações",
    cards: [
      { id: "pt-m35-c01", es: "la fiesta", target: "a festa", phon: "a FES-ta" },
      { id: "pt-m35-c02", es: "el cumpleaños", target: "o aniversário", phon: "u a-ni-ver-SA-riu" },
      { id: "pt-m35-c03", es: "¡felicidades!", target: "parabéns!", phon: "pa-ra-BENS" },
      { id: "pt-m35-c04", es: "la invitación", target: "o convite", phon: "u kon-VI-te" },
      { id: "pt-m35-c05", es: "el regalo", target: "o presente", phon: "u pre-ZEN-te" },
      { id: "pt-m35-c06", es: "brindar / ¡salud!", target: "brindar / saúde!", phon: "brin-DAR / sa-U-de" },
      { id: "pt-m35-c07", es: "organizar un evento", target: "organizar uma festa", phon: "or-ga-ni-ZAR U-ma FES-ta" },
      { id: "pt-m35-c08", es: "la tarta de cumpleaños", target: "o bolo de aniversário", phon: "u BO-lu de a-ni-ver-SA-riu" },
      { id: "pt-m35-c09", es: "las velas", target: "as velas", phon: "ash VE-lash" },
      { id: "pt-m35-c10", es: "invitar a alguien", target: "convidar alguém", phon: "kon-vi-DAR al-GÃI" }
    ],
    dialogue: {
      title: "Convite de aniversário", context: "Invitación a una fiesta entre amigos.",
      lines: [
        { who: "Tiago", target: "Olá João! No sábado vou fazer uma festa de aniversário.", es: "¡Hola João! El sábado voy a hacer una fiesta de cumpleaños." },
        { who: "João", target: "Muitos parabéns adiantados! A que horas vai ser?", es: "¡Muchas felicidades por adelantado! ¿A qué hora será?" },
        { who: "Tiago", target: "Começa às vinte horas em minha casa. Estás convidado!", es: "Empieza a las veinte horas en mi casa. ¡Estás invitado!" },
        { who: "João", target: "Obrigado pelo convite! O que queres de presente?", es: "¡Gracias por la invitación! ¿Qué quieres de regalo?" },
        { who: "Tiago", target: "Não precisas de trazer nada, basta a tua presença.", es: "No necesitas traer nada, basta con tu presencia." }
      ],
      questions: [
        { q: "¿Qué evento celebra Tiago?", options: ["Una boda", "Festa de aniversário", "Un ascenso"], answer: 1 },
        { q: "¿A qué hora empieza?", options: ["18:00", "20:00", "22:00"], answer: 1 },
        { q: "¿Qué pide Tiago que lleve João?", options: ["Un regalo caro", "Nada, basta a presença", "Una tarta"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m35-cl1", before: "Muitos ", blank: "parabéns", after: " pelo teu aniversário!", es: "¡Muchas felicidades por tu cumpleaños!", mode: "type" },
      { id: "pt-m35-cl2", before: "Comprei um ", blank: "presente", after: " para o aniversariante.", es: "Compré un regalo para el cumpleañero.", mode: "select", options: ["presente", "passado", "futuro", "parente"] }
    ],
    falseFriends: [
      { es: "presente", esMeaning: "regalo", target: "presente", targetMeaning: "significa regalo (además de tiempo presente o estar presente)" }
    ]
  });

  fr.push({
    id: "fr-m35", num: 35, title: "Fêtes et célébrations", subtitle: "Cumpleaños, invitaciones y felicitaciones",
    cards: [
      { id: "fr-m35-c01", es: "la fiesta", target: "la fête / la soirée", phon: "la fet" },
      { id: "fr-m35-c02", es: "el cumpleaños", target: "l'anniversaire", phon: "la-ni-vér-SÉR" },
      { id: "fr-m35-c03", es: "¡felicidades!", target: "félicitations ! / bon anniversaire !", phon: "fe-li-si-ta-SION" },
      { id: "fr-m35-c04", es: "la invitación", target: "l'invitation", phon: "lan-vi-ta-SION" },
      { id: "fr-m35-c05", es: "el regalo", target: "le cadeau", phon: "lə ka-DO" },
      { id: "fr-m35-c06", es: "brindar / ¡salud!", target: "trinquer / santé !", phon: "tran-KÉ / san-TÉ" },
      { id: "fr-m35-c07", es: "organizar una fiesta", target: "organiser une fête", phon: "or-ga-ni-ZÉ ün fet" },
      { id: "fr-m35-c08", es: "la tarta de cumpleaños", target: "le gâteau d'anniversaire", phon: "lə ga-TO" },
      { id: "fr-m35-c09", es: "las velas", target: "les bougies", phon: "lé bu-ZHÍ" },
      { id: "fr-m35-c10", es: "invitar a alguien", target: "inviter quelqu'un", phon: "an-vi-TÉ kel-KAN" }
    ],
    dialogue: {
      title: "Invitation d'anniversaire", context: "Organización de un cumpleaños entre amigos.",
      lines: [
        { who: "Tiago", target: "Salut Jean ! Samedi j'organise une fête pour mon anniversaire.", es: "¡Hola Jean! El sábado organizo una fiesta por mi cumpleaños." },
        { who: "Jean", target: "Joyeux anniversaire en avance ! C'est à quelle heure ?", es: "¡Feliz cumpleaños por adelantado! ¿A qué hora es?" },
        { who: "Tiago", target: "Ça commence à vingt heures chez moi. Tu es invité !", es: "Empieza a las veinte horas en mi casa. ¡Estás invitado!" },
        { who: "Jean", target: "Merci pour l'invitation ! Tu veux quoi comme cadeau ?", es: "¡Gracias por la invitación! ¿Qué quieres de regalo?" },
        { who: "Tiago", target: "Rien du tout, ta présence suffit.", es: "Nada en absoluto, tu presencia basta." }
      ],
      questions: [
        { q: "¿Qué evento celebra Tiago?", options: ["Una boda", "Mon anniversaire", "Un examen"], answer: 1 },
        { q: "¿A qué hora empieza?", options: ["18:00", "20:00", "21:00"], answer: 1 },
        { q: "¿Qué regalo pide Tiago?", options: ["Un libro", "Rien du tout (nada)", "Dinero"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m35-cl1", before: "Joyeux ", blank: "anniversaire", after: " mon ami !", es: "¡Feliz cumpleaños amigo mío!", mode: "type" },
      { id: "fr-m35-cl2", before: "J'ai acheté un joli ", blank: "cadeau", after: ".", es: "Compré un bonito regalo.", mode: "select", options: ["cadeau", "gâteau", "chapeau", "bureau"] }
    ],
    falseFriends: [
      { es: "cadeau", esMeaning: "regalo", target: "cadeau", targetMeaning: "regalo (no confundir con 'gâteau' que es tarta)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 36 — Salud y Hábitos Saludables                       */
  /* ============================================================ */
  pt.push({
    id: "pt-m36", num: 36, title: "Saúde e bem-estar", subtitle: "Hábitos saudáveis, consultas e estilo de vida",
    cards: [
      { id: "pt-m36-c01", es: "la dieta equilibrada", target: "a dieta equilibrada", phon: "a di-E-ta e-ki-li-BRA-da" },
      { id: "pt-m36-c02", es: "el análisis de sangre", target: "as análises de sangue", phon: "ash a-NA-li-zesh de SAN-ge" },
      { id: "pt-m36-c03", es: "la presión arterial", target: "a tensão arterial", phon: "a ten-SÃU ar-te-ri-AL" },
      { id: "pt-m36-c04", es: "beber agua", target: "beber água", phon: "be-BER A-gua" },
      { id: "pt-m36-c05", es: "dormir bien", target: "dormir bem", phon: "dor-MIR bãi" },
      { id: "pt-m36-c06", es: "el estrés", target: "o stress", phon: "u stresh" },
      { id: "pt-m36-c07", es: "las vitaminas", target: "as vitaminas", phon: "ash vi-ta-MI-nash" },
      { id: "pt-m36-c08", es: "pesarse", target: "pesar-se", phon: "pe-ZAR-se" },
      { id: "pt-m36-c09", es: "dejar de fumar", target: "deixar de fumar", phon: "dei-SHAR de fu-MAR" },
      { id: "pt-m36-c10", es: "la cita médica", target: "a consulta médica", phon: "a kon-SUL-ta ME-di-ka" }
    ],
    dialogue: {
      title: "Consulta de rotina", context: "Evaluación de hábitos con el médico de familia.",
      lines: [
        { who: "Médico", target: "Bom dia. Como se tem sentido ultimamente?", es: "Buenos días. ¿Cómo se ha sentido últimamente?" },
        { who: "Paciente", target: "Sinto-me um pouco cansado e tenho tido muito stress no trabalho.", es: "Me siento un poco cansado y he tenido mucho estrés en el trabajo." },
        { who: "Médico", target: "Vamos medir a tensão arterial e pedir umas análises de sangue.", es: "Vamos a medir la presión arterial y pedir unos análisis de sangre." },
        { who: "Paciente", target: "Acha que devo tomar algumas vitaminas?", es: "¿Piensa que debo tomar algunas vitaminas?" },
        { who: "Médico", target: "Primeiro vamos ver os resultados. É importante dormir bem e beber muita água.", es: "Primero vamos a ver los resultados. Es importante dormir bien y beber mucha agua." }
      ],
      questions: [
        { q: "¿Por qué acude el paciente?", options: ["Siente fatiga y estrés", "Tiene fiebre alta", "Le duele un pie"], answer: 0 },
        { q: "¿Qué pruebas pide el médico?", options: ["Radiografía", "Análises de sangue e tensão", "Resonancia"], answer: 1 },
        { q: "¿Qué recomendación básica le da el médico?", options: ["Hacer ayuno", "Dormir bien y beber agua", "Viajar"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m36-cl1", before: "O médico recomendou medir a ", blank: "tensão", after: " arterial.", es: "El médico recomendó medir la presión arterial.", mode: "type" },
      { id: "pt-m36-cl2", before: "É fundamental ", blank: "dormir", after: " oito horas por noite.", es: "Es fundamental dormir ocho horas por noche.", mode: "select", options: ["dormir", "comer", "correr", "falar"] }
    ],
    falseFriends: [
      { es: "tensión", esMeaning: "tensão arterial", target: "tensão", targetMeaning: "presión sanguínea (en Portugal se dice 'tensão arterial' y no 'pressão')" }
    ]
  });

  fr.push({
    id: "fr-m36", num: 36, title: "Santé et bien-être", subtitle: "Hábitos saludables, revisiones y estilo de vida",
    cards: [
      { id: "fr-m36-c01", es: "la dieta equilibrada", target: "l'alimentation équilibrée", phon: "la-li-man-ta-SION e-ki-li-BRÉ" },
      { id: "fr-m36-c02", es: "el análisis de sangre", target: "la prise de sang", phon: "la priz də san" },
      { id: "fr-m36-c03", es: "la presión arterial", target: "la tension artérielle", phon: "la tan-SION ar-te-RIEL" },
      { id: "fr-m36-c04", es: "beber agua", target: "boire de l'eau", phon: "buar də lo" },
      { id: "fr-m36-c05", es: "dormir bien", target: "bien dormir", phon: "bien dor-MIR" },
      { id: "fr-m36-c06", es: "el estrés", target: "le stress", phon: "lə stres" },
      { id: "fr-m36-c07", es: "las vitaminas", target: "les vitamines", phon: "lé vi-ta-MIN" },
      { id: "fr-m36-c08", es: "pesarse", target: "se peser", phon: "sə pə-ZÉ" },
      { id: "fr-m36-c09", es: "dejar de fumar", target: "arrêter de fumer", phon: "a-rê-TÉ də fü-MÉ" },
      { id: "fr-m36-c10", es: "la consulta médica", target: "la consultation médicale", phon: "la kon-sül-ta-SION" }
    ],
    dialogue: {
      title: "Bilan de santé chez le médecin", context: "Consulta de rutina con el médico de cabecera.",
      lines: [
        { who: "Médecin", target: "Bonjour. Comment vous sentez-vous en ce moment ?", es: "Buenos días. ¿Cómo se siente en este momento?" },
        { who: "Patient", target: "Je suis assez fatigué et j'ai beaucoup de stress.", es: "Estoy bastante cansado y tengo mucho estrés." },
        { who: "Médecin", target: "On va prendre votre tension et faire une prise de sang.", es: "Vamos a tomar su presión y hacer un análisis de sangre." },
        { who: "Patient", target: "Est-ce qu'il faut prendre des vitamines ?", es: "¿Es necesario tomar vitaminas?" },
        { who: "Médecin", target: "Attendons les résultats. Essayez de bien dormir et de boire de l'eau.", es: "Esperemos los resultados. Intente dormir bien y beber agua." }
      ],
      questions: [
        { q: "¿Cómo se siente el paciente?", options: ["Fatigué et stressé", "En gran forma", "Marea2"], answer: 0 },
        { q: "¿Qué examen ordena el médico?", options: ["Une prise de sang", "Una biopsia", "Radiografía"], answer: 0 },
        { q: "¿Qué le aconseja el doctor?", options: ["Bien dormir et boire de l'eau", "Hacer dieta estricta", "Tomar café"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m36-cl1", before: "Le médecin m'a prescrit une ", blank: "prise", after: " de sang.", es: "El médico me prescribió un análisis de sangre.", mode: "type" },
      { id: "fr-m36-cl2", before: "Il faut ", blank: "arrêter", after: " de fumer pour la santé.", es: "Hay que dejar de fumar por la salud.", mode: "select", options: ["arrêter", "continuer", "commencer", "penser"] }
    ],
    falseFriends: [
      { es: "blessure", esMeaning: "herida", target: "blessure", targetMeaning: "herida o lesión física (no tiene que ver con 'bendición')" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 37 — En la Peluquería                                 */
  /* ============================================================ */
  pt.push({
    id: "pt-m37", num: 37, title: "Na cabeleireira", subtitle: "Cortes de cabelo, penteados e estética",
    cards: [
      { id: "pt-m37-c01", es: "cortar el pelo", target: "cortar o cabelo", phon: "kor-TAR u ka-BE-lu" },
      { id: "pt-m37-c02", es: "las puntas", target: "as pontas", phon: "ash PON-tash" },
      { id: "pt-m37-c03", es: "teñir", target: "pintar / tingir o cabelo", phon: "pin-TAR u ka-BE-lu" },
      { id: "pt-m37-c04", es: "el flequillo", target: "a franja", phon: "a FRAN-zha" },
      { id: "pt-m37-c05", es: "lavar el pelo", target: "lavar o cabelo", phon: "la-VAR u ka-BE-lu" },
      { id: "pt-m37-c06", es: "el secador", target: "o secador", phon: "u se-ka-DOR" },
      { id: "pt-m37-c07", es: "la barba", target: "a barba", phon: "a BAR-ba" },
      { id: "pt-m37-c08", es: "peinar", target: "purgar / pentear", phon: "pen-ti-AR" },
      { id: "pt-m37-c09", es: "corto por los lados", target: "curto dos lados", phon: "KUR-tu dush LA-dush" },
      { id: "pt-m37-c10", es: "pedir cita", target: "marcar uma marcação / marcação", phon: "mar-KAR U-ma mar-ka-SÃU" }
    ],
    dialogue: {
      title: "Mudar de visual", context: "Indicaciones para un corte de pelo en Oporto.",
      lines: [
        { who: "Cabeleireiro", target: "Olá! Como vamos cortar o cabelo hoje?", es: "¡Hola! ¿Cómo vamos a cortar el pelo hoy?" },
        { who: "Cliente", target: "Quero cortar só as pontas e aparar a barba, por favor.", es: "Quiero cortar solo las puntas y recortar la barba, por favor." },
        { who: "Cabeleireiro", target: "Quer manter a franja comprida?", es: "¿Quiere mantener el flequillo largo?" },
        { who: "Cliente", target: "Sim, e mais curto dos lados.", es: "Sí, y más corto por los lados." },
        { who: "Cabeleireiro", target: "Perfeito. Vamos lavar primeiro.", es: "Perfecto. Vamos a lavar primero." }
      ],
      questions: [
        { q: "¿Qué desea hacerse el cliente?", options: ["Teñirse de rojo", "Cortar pontas e aparar a barba", "Afeitarse del todo"], answer: 1 },
        { q: "¿Cómo quiere el flequillo (franja)?", options: ["Corto", "Comprida (largo)", "Rapado"], answer: 1 },
        { q: "¿Cómo quiere los lados?", options: ["Largos", "Curto dos lados", "Igual"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m37-cl1", before: "Queria só aparar as ", blank: "pontas", after: " do cabelo.", es: "Quería solo recortar las puntas del pelo.", mode: "type" },
      { id: "pt-m37-cl2", before: "Preciso de marcar uma ", blank: "marcação", after: " no cabeleireiro.", es: "Necesito pedir cita en la peluquería.", mode: "select", options: ["marcação", "estação", "canção", "opção"] }
    ],
    falseFriends: [
      { es: "pelo", esMeaning: "cabelo", target: "pêlo", targetMeaning: "vello corporal o pelo de animal (el cabello humano es 'cabelo')" }
    ]
  });

  fr.push({
    id: "fr-m37", num: 37, title: "Chez le coiffeur", subtitle: "Cortes de pelo, tintes y peinados",
    cards: [
      { id: "fr-m37-c01", es: "cortar el pelo", target: "couper les cheveux", phon: "ku-PÉ lé shə-VÖ" },
      { id: "fr-m37-c02", es: "las puntas", target: "les pointes", phon: "lé puant" },
      { id: "fr-m37-c03", es: "teñir", target: "faire une coloration / teindre", phon: "fér ün ko-lo-ra-SION" },
      { id: "fr-m37-c04", es: "el flequillo", target: "la frange", phon: "la franzh" },
      { id: "fr-m37-c05", es: "lavar el pelo", target: "faire un shampooing", phon: "fér an shan-PUAN" },
      { id: "fr-m37-c06", es: "el secador", target: "le sèche-cheveux", phon: "lə sesh shə-VÖ" },
      { id: "fr-m37-c07", es: "la barba", target: "la barbe", phon: "la barb" },
      { id: "fr-m37-c08", es: "peinar / secado", target: "coiffer / le brushing", phon: "kua-FÉ" },
      { id: "fr-m37-c09", es: "corto a los lados", target: "court sur les côtés", phon: "kur sür lé ko-TÉ" },
      { id: "fr-m37-c10", es: "pedir cita", target: "prendre rendez-vous", phon: "prandr ran-dé-VU" }
    ],
    dialogue: {
      title: "Changer de coupe", context: "Instrucciones de corte de pelo en París.",
      lines: [
        { who: "Coiffeur", target: "Bonjour ! Qu'est-ce qu'on fait aujourd'hui ?", es: "¡Buenos días! ¿Qué hacemos hoy?" },
        { who: "Client", target: "Je voudrais couper les pointes et tailler la barbe.", es: "Quisiera cortar las puntas y arreglar la barba." },
        { who: "Coiffeur", target: "D'accord. On garde la frange ?", es: "De acuerdo. ¿Mantenemos el flequillo?" },
        { who: "Client", target: "Oui, mais je veux plus court sur les côtés.", es: "Sí, pero lo quiero más corto por los lados." },
        { who: "Coiffeur", target: "Parfait, on passe au bac pour le shampooing.", es: "Perfecto, pasamos al lavacabezas para el champú." }
      ],
      questions: [
        { q: "¿Qué corte desea el cliente?", options: ["Rapado total", "Couper les pointes et tailler la barbe", "Tinte rubio"], answer: 1 },
        { q: "¿Conserva la frange (flequillo)?", options: ["Sí", "No", "Se lo afeita"], answer: 0 },
        { q: "¿Cómo prefiere los laterales?", options: ["Largos", "Court sur les côtés", "Desfilados"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m37-cl1", before: "Veuillez couper uniquement les ", blank: "pointes", after: ".", es: "Por favor corte únicamente las puntas.", mode: "type" },
      { id: "fr-m37-cl2", before: "Je veux que ce soit court sur les ", blank: "côtés", after: ".", es: "Quiero que esté corto por los lados.", mode: "select", options: ["côtés", "pieds", "yeux", "mains"] }
    ],
    falseFriends: [
      { es: "coiffer", esMeaning: "peinar", target: "coiffer", targetMeaning: "peinar o arreglar el cabello (no confundir con afeitar)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 38 — Cine y Espectáculos                              */
  /* ============================================================ */
  pt.push({
    id: "pt-m38", num: 38, title: "Cinema e espetáculos", subtitle: "Bilhetes, sessões, filmes e salas de teatro",
    cards: [
      { id: "pt-m38-c01", es: "la entrada", target: "o bilhete / a entrada", phon: "u bi-LYE-te" },
      { id: "pt-m38-c02", es: "la sesión / pase", target: "a sessão", phon: "a se-SÃU" },
      { id: "pt-m38-c03", es: "la película", target: "o filme", phon: "u FIL-me" },
      { id: "pt-m38-c04", es: "las palomitas", target: "as pipocas", phon: "ash pi-PO-kash" },
      { id: "pt-m38-c05", es: "subtitulado", target: "legendado", phon: "le-zhen-DA-du" },
      { id: "pt-m38-c06", es: "doblado", target: "dobrado", phon: "du-BRA-du" },
      { id: "pt-m38-c07", es: "la fila / butaca", target: "a fila / o lugar", phon: "a FI-la" },
      { id: "pt-m38-c08", es: "el estreno", target: "a estreia", phon: "a es-TREI-a" },
      { id: "pt-m38-c09", es: "la obra de teatro", target: "a peça de teatro", phon: "a PE-sa de ti-A-tru" },
      { id: "pt-m38-c10", es: "la cartelera", target: "cartaz", phon: "u kar-TAZ" }
    ],
    dialogue: {
      title: "Comprar bilhetes de cinema", context: "Compra de entradas en la taquilla de un cine.",
      lines: [
        { who: "Bilheteira", target: "Boa tarde, para que filme deseja bilhetes?", es: "Buenas tardes, ¿para qué película desea entradas?" },
        { who: "Cliente", target: "Dois bilhetes para a sessão das vinte e uma horas do novo filme de ação.", es: "Dos entradas para la sesión de las 21:00 de la nueva película de acción." },
        { who: "Bilheteira", target: "Prefere a versão dobrada ou legendada?", es: "¿Prefiere la versión doblada o subtitulada?" },
        { who: "Cliente", target: "Legendada, por favor. E preferimos lugares na fila do meio.", es: "Subtitulada, por favor. Y preferimos asientos en la fila del medio." },
        { who: "Bilheteira", target: "Aqui tem os seus bilhetes. Não se esqueça das pipocas!", es: "Aquí tiene sus entradas. ¡No se olvide de las palomitas!" }
      ],
      questions: [
        { q: "¿Para qué hora pide las entradas?", options: ["19:00", "21:00", "22:30"], answer: 1 },
        { q: "¿Qué versión prefiere el cliente?", options: ["Dobrada", "Legendada (subtitulada)", "3D"], answer: 1 },
        { q: "¿En qué fila prefieren sentarse?", options: ["Primera fila", "Última fila", "Fila do meio"], answer: 2 }
      ]
    },
    cloze: [
      { id: "pt-m38-cl1", before: "Prefiro ver filmes na versão ", blank: "legendada", after: ".", es: "Prefiero ver películas en versión subtitulada.", mode: "type" },
      { id: "pt-m38-cl2", before: "Comprei um pacote grande de ", blank: "pipocas", after: ".", es: "Compré un paquete grande de palomitas.", mode: "select", options: ["pipocas", "batatas", "bolachas", "maçãs"] }
    ],
    falseFriends: [
      { es: "legenda", esMeaning: "subtítulo", target: "legenda", targetMeaning: "subtítulo de película o texto (leyenda de mito se dice 'lenda')" }
    ]
  });

  fr.push({
    id: "fr-m38", num: 38, title: "Cinéma et culture", subtitle: "Entradas, sesiones, películas y teatro",
    cards: [
      { id: "fr-m38-c01", es: "la entrada / billete", target: "le billet / la place", phon: "lə bi-YÉ" },
      { id: "fr-m38-c02", es: "la sesión", target: "la séance", phon: "la se-ANS" },
      { id: "fr-m38-c03", es: "la película", target: "le film", phon: "lə film" },
      { id: "fr-m38-c04", es: "las palomitas", target: "le popcorn", phon: "lə pop-korn" },
      { id: "fr-m38-c05", es: "versión original (VOSST)", target: "la VOSTFR / version originale", phon: "la ve-os-te-ef-er" },
      { id: "fr-m38-c06", es: "doblado", target: "la VF / version française", phon: "la ve-ef" },
      { id: "fr-m38-c07", es: "la fila / butaca", target: "le rang / le fauteuil", phon: "lə ran" },
      { id: "fr-m38-c08", es: "el estreno", target: "la sortie / avant-première", phon: "la sor-TI" },
      { id: "fr-m38-c09", es: "la obra de teatro", target: "la pièce de théâtre", phon: "la pi-ES də te-ATR" },
      { id: "fr-m38-c10", es: "la cartelera", target: "l'affiche", phon: "la-FISH" }
    ],
    dialogue: {
      title: "Au guichet du cinéma", context: "Compra de billetes para una película en París.",
      lines: [
        { who: "Guichetier", target: "Bonjour, ce serait pour quel film ?", es: "Buenos días, ¿para qué película sería?" },
        { who: "Client", target: "Deux places pour la séance de vingt et une heures en VOSTFR.", es: "Dos entradas para la sesión de las 21:00 en VOSST." },
        { who: "Guichetier", target: "Vous voulez être placés au milieu de la salle ?", es: "¿Quieren estar situados en medio de la sala?" },
        { who: "Client", target: "Oui, au milieu c'est parfait.", es: "Sí, en el medio está perfecto." },
        { who: "Guichetier", target: "Ça vous fera vingt-deux euros. Bonne séance !", es: "Serán veintidós euros. ¡Buena sesión!" }
      ],
      questions: [
        { q: "¿En qué idioma quieren ver la película?", options: ["VF (doblada)", "VOSTFR (subtitulada)", "Sin sonido"], answer: 1 },
        { q: "¿En qué zona de la sala eligen sentarse?", options: ["Adelante", "Au milieu (en medio)", "Atrás del todo"], answer: 1 },
        { q: "¿Cuánto cuesta en total?", options: ["15€", "22€", "30€"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m38-cl1", before: "Je préfère regarder les films en ", blank: "VOSTFR", after: ".", es: "Prefiero ver las películas en VOSST.", mode: "type" },
      { id: "fr-m38-cl2", before: "Nous avons choisi des places au ", blank: "milieu", after: " de la salle.", es: "Elegimos asientos en medio de la sala.", mode: "select", options: ["milieu", "fond", "coin", "début"] }
    ],
    falseFriends: [
      { es: "affiche", esMeaning: "cartelera / póster", target: "affiche", targetMeaning: "cartel publicitario o de cine (no se refiere a afición)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 39 — Tecnología y Redes Sociales                      */
  /* ============================================================ */
  pt.push({
    id: "pt-m39", num: 39, title: "Tecnologia e redes", subtitle: "Aplicações, palavra-passe, Wi-Fi e dispositivos",
    cards: [
      { id: "pt-m39-c01", es: "la contraseña", target: "a palavra-passe", phon: "a pa-LA-vra PAS-se" },
      { id: "pt-m39-c02", es: "la aplicación", target: "a aplicação / a app", phon: "a a-pli-ka-SÃU" },
      { id: "pt-m39-c03", es: "cargar a batería", target: "carregar a bateria", phon: "ka-rre-GAR a ba-te-RI-a" },
      { id: "pt-m39-c04", es: "el cargador", target: "o carregador", phon: "u ka-rre-ga-DOR" },
      { id: "pt-m39-c05", es: "descargar", target: "descarregar / fazer download", phon: "desh-ka-rre-GAR" },
      { id: "pt-m39-c06", es: "la red Wi-Fi", target: "a rede Wi-Fi", phon: "a RE-de wi-fi" },
      { id: "pt-m39-c07", es: "el nombre de usuario", target: "o nome de utilizador", phon: "u NO-me de u-ti-li-za-DOR" },
      { id: "pt-m39-c08", es: "pantalla táctil", target: "o ecrã tátil", phon: "u e-KRÃ TA-til" },
      { id: "pt-m39-c09", es: "publicar una foto", target: "publicar uma foto", phon: "pu-bli-KAR U-ma FO-tu" },
      { id: "pt-m39-c10", es: "la cobertura", target: "a cobertura / rede", phon: "a ku-ber-TU-ra" }
    ],
    dialogue: {
      title: "Pedir a senha do Wi-Fi", context: "En un café de Lisboa solicitando conectividad.",
      lines: [
        { who: "Cliente", target: "Desculpe, qual é a palavra-passe do Wi-Fi?", es: "Disculpe, ¿cuál es la contraseña del Wi-Fi?" },
        { who: "Empregado", target: "Está escrita no fundo do recibo. É tudo em minúsculas.", es: "Está escrita en el fondo del recibo. Es todo en minúsculas." },
        { who: "Cliente", target: "Obrigado. Também posso carregar o telemóvel aqui?", es: "Gracias. ¿También puedo cargar el móvil aquí?" },
        { who: "Empregado", target: "Sim, há uma tomada perto daquela mesa.", es: "Sí, hay un enchufe cerca de aquella mesa." },
        { who: "Cliente", target: "Excelente, o meu ecrã já estava a ficar sem bateria.", es: "Excelente, mi pantalla ya se estaba quedando sin batería." }
      ],
      questions: [
        { q: "¿Dónde está anotada la contraseña?", options: ["En la pared", "No fundo do recibo", "En la puerta"], answer: 1 },
        { q: "¿Qué necesita hacer el cliente con su teléfono?", options: ["Venderlo", "Carregar a bateria", "Formatearlo"], answer: 1 },
        { q: "¿Qué encuentra cerca de la mesa?", options: ["Una tomada (enchufe)", "Un ordenador", "Una cámara"], answer: 0 }
      ]
    },
    cloze: [
      { id: "pt-m39-cl1", before: "Qual é a ", blank: "palavra-passe", after: " da rede?", es: "¿Cuál es la contraseña de la red?", mode: "type" },
      { id: "pt-m39-cl2", before: "Preciso de um ", blank: "carregador", after: " para o telemóvel.", es: "Necesito un cargador para el móvil.", mode: "select", options: ["carregador", "computador", "televisor", "ventilador"] }
    ],
    falseFriends: [
      { es: "ecrã", esMeaning: "pantalla", target: "ecrã", targetMeaning: "pantalla de dispositivo o cine (en español se usa 'pantalla')" }
    ]
  });

  fr.push({
    id: "fr-m39", num: 39, title: "Technologie et réseaux", subtitle: "Contraseñas, aplicaciones, Wi-Fi y móviles",
    cards: [
      { id: "fr-m39-c01", es: "la contraseña", target: "le mot de passe", phon: "lə mo də pas" },
      { id: "fr-m39-c02", es: "la aplicación", target: "l'application / l'appli", phon: "la-pli-ka-SION" },
      { id: "fr-m39-c03", es: "cargar la batería", target: "recharger le téléphone", phon: "rə-shar-ZHE" },
      { id: "fr-m39-c04", es: "el cargador", target: "le chargeur", phon: "lə shar-ZHÖR" },
      { id: "fr-m39-c05", es: "descargar", target: "télécharger", phon: "te-le-shar-ZHE" },
      { id: "fr-m39-c06", es: "la red Wi-Fi", target: "le réseau Wi-Fi", phon: "lə re-ZO wi-fi" },
      { id: "fr-m39-c07", es: "el nombre de usuario", target: "le nom d'utilisateur", phon: "lə non dü-ti-li-za-TÖR" },
      { id: "fr-m39-c08", es: "la pantalla táctil", target: "l'écran tactile", phon: "le-KRAN tak-TIL" },
      { id: "fr-m39-c09", es: "publicar una foto", target: "publier une photo", phon: "pü-bli-É" },
      { id: "fr-m39-c10", es: "la cobertura", target: "le réseau / la couverture", phon: "lə re-ZO" }
    ],
    dialogue: {
      title: "Demander le Wi-Fi au café", context: "Conexión a internet en una cafetería.",
      lines: [
        { who: "Client", target: "Excusez-moi, quel est le mot de passe du Wi-Fi ?", es: "Disculpe, ¿cuál es la contraseña del Wi-Fi?" },
        { who: "Serveur", target: "Il est écrit en bas du ticket de caisse.", es: "Está escrito abajo del ticket de caja." },
        { who: "Client", target: "Merci. Je peux recharger mon portable ici ?", es: "Gracias. ¿Puedo cargar mi móvil aquí?" },
        { who: "Serveur", target: "Oui, il y a une prise près de la fenêtre.", es: "Sí, hay un enchufe cerca de la ventana." },
        { who: "Client", target: "Parfait, je dois télécharger un document urgent.", es: "Perfecto, debo descargar un documento urgente." }
      ],
      questions: [
        { q: "¿Dónde encuentra el mot de passe?", options: ["En el menú", "En el ticket de caisse", "En el enchufe"], answer: 1 },
        { q: "¿Dónde está la prise para cargar el móvil?", options: ["Près de la fenêtre", "En el baño", "Fuera"], answer: 0 },
        { q: "¿Qué urgente necesita descargar?", options: ["Una app", "Un document", "Un vídeo"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m39-cl1", before: "Entrez votre ", blank: "mot de passe", after: " pour vous connecter.", es: "Introduzca su contraseña para conectarse.", mode: "type" },
      { id: "fr-m39-cl2", before: "J'ai oublié mon ", blank: "chargeur", after: " à la maison.", es: "Olvidé mi cargador en casa.", mode: "select", options: ["chargeur", "lecteur", "moteur", "voile"] }
    ],
    falseFriends: [
      { es: "recharger", esMeaning: "cargar batería", target: "recharger", targetMeaning: "cargar dispositivos o saldo (no confundir con recargar pilas espirituales)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 40 — Medio Ambiente y Reciclaje                       */
  /* ============================================================ */
  pt.push({
    id: "pt-m40", num: 40, title: "Ecologia e ambiente", subtitle: "Reciclagem, sustentabilidade e meio ambiente",
    cards: [
      { id: "pt-m40-c01", es: "el reciclaje", target: "a reciclagem", phon: "a re-si-KLA-jãi" },
      { id: "pt-m40-c02", es: "el contenedor de papel", target: "o ecoponto azul (papel)", phon: "u e-ko-PON-tu a-ZUL" },
      { id: "pt-m40-c03", es: "el contenedor de plástico", target: "o ecoponto amarelo (embalagens)", phon: "u e-ko-PON-tu a-ma-RE-lu" },
      { id: "pt-m40-c04", es: "el contenedor de vidrio", target: "o ecoponto verde (vidro)", phon: "u e-ko-PON-tu VER-de" },
      { id: "pt-m40-c05", es: "la basura", target: "o lixo", phon: "u LI-shu" },
      { id: "pt-m40-c06", es: "el cambio climático", target: "as alterações climáticas", phon: "ash al-te-ra-SÕISH" },
      { id: "pt-m40-c07", es: "la energía renovable", target: "a energia renovável", phon: "a e-ner-ZHI-a" },
      { id: "pt-m40-c08", es: "ahorrar agua", target: "poupar água", phon: "po-PAR A-gua" },
      { id: "pt-m40-c09", es: "la contaminación", target: "a poluição", phon: "a pu-lui-SÃU" },
      { id: "pt-m40-c10", es: "reutilizar", target: "reutilizar", phon: "rre-u-ti-li-ZAR" }
    ],
    dialogue: {
      title: "Separar o lixo em casa", context: "Organización del reciclaje doméstico.",
      lines: [
        { who: "Marta", target: "Onde coloco estas garrafas de plástico?", es: "¿Dónde pongo estas botellas de plástico?" },
        { who: "Pedro", target: "Vai no ecoponto amarelo. O vidro vai no verde.", es: "Va en el ecoponto amarillo. El vidrio va en el verde." },
        { who: "Marta", target: "E o papel das caixas?", es: "¿Y el papel de las cajas?" },
        { who: "Pedro", target: "Esse vai no ecoponto azul. Devemos reciclar tudo.", es: "Ese va en el ecoponto azul. Debemos reciclar todo." },
        { who: "Marta", target: "É uma boa forma de combater a poluição.", es: "Es una buena forma de combatir la contaminación." }
      ],
      questions: [
        { q: "¿En qué contenedor (ecoponto) va el plástico?", options: ["Verde", "Amarelo", "Azul"], answer: 1 },
        { q: "¿En qué ecoponto va el papel?", options: ["Azul", "Verde", "Vermelho"], answer: 0 },
        { q: "¿Qué objetivo destacan?", options: ["Ganar dinero", "Combater a poluição", "Limpiar rápido"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m40-cl1", before: "Devemos ", blank: "poupar", after: " água durante o banho.", es: "Debemos ahorrar agua durante el baño.", mode: "type" },
      { id: "pt-m40-cl2", before: "O vidro coloca-se no ecoponto ", blank: "verde", after: ".", es: "El vidrio se coloca en el ecoponto verde.", mode: "select", options: ["verde", "azul", "amarelo", "preto"] }
    ],
    falseFriends: [
      { es: "lixo", esMeaning: "basura", target: "lixo", targetMeaning: "basura en general (no tiene nada que ver con lujo)" }
    ]
  });

  fr.push({
    id: "fr-m40", num: 40, title: "Écologie et environnement", subtitle: "Reciclaje, sostenibilidad y medio ambiente",
    cards: [
      { id: "fr-m40-c01", es: "el reciclaje", target: "le recyclage", phon: "lə rə-si-KLAZH" },
      { id: "fr-m40-c02", es: "el contenedor amarillo (plástico/papel)", target: "la poubelle jaune", phon: "la pu-BEL zhon" },
      { id: "fr-m40-c03", es: "el contenedor verde (vidrio)", target: "le conteneur à verre", phon: "lə kon-tə-NÖR" },
      { id: "fr-m40-c04", es: "la basura resto", target: "la poubelle ordinaire / noire", phon: "la pu-BEL" },
      { id: "fr-m40-c05", es: "la basura", target: "les déchets / la poubelle", phon: "lé de-SHÉ" },
      { id: "fr-m40-c06", es: "el cambio climático", target: "le réchauffement climatique", phon: "lə re-shof-MAN" },
      { id: "fr-m40-c07", es: "la energía renovable", target: "l'énergie renouvelable", phon: "le-ner-ZHI" },
      { id: "fr-m40-c08", es: "ahorrar agua", target: "économiser l'eau", phon: "e-ko-no-mi-ZÉ" },
      { id: "fr-m40-c09", es: "la contaminación", target: "la pollution", phon: "la po-lü-SION" },
      { id: "fr-m40-c10", es: "reutilizar", target: "réutiliser", phon: "re-ü-ti-li-ZÉ" }
    ],
    dialogue: {
      title: "Trier les déchets", context: "Normas de reciclaje doméstico en Francia.",
      lines: [
        { who: "Marta", target: "Où est-ce que je mets ces bouteilles en plastique ?", es: "¿Dónde pongo estas botellas de plástico?" },
        { who: "Pedro", target: "Dans la poubelle jaune avec le carton.", es: "En el contenedor amarillo con el cartón." },
        { who: "Marta", target: "Et le flacon en verre ?", es: "¿Y el frasco de vidrio?" },
        { who: "Pedro", target: "Il faut le jeter dans le conteneur à verre de la rue.", es: "Hay que tirarlo en el contenedor de vidrio de la calle." },
        { who: "Marta", target: "C'est important d'économiser nos ressources.", es: "Es importante ahorrar nuestros recursos." }
      ],
      questions: [
        { q: "¿A qué cubo va el plástico y cartón?", options: ["Poubelle jaune", "Poubelle noire", "Conteneur à verre"], answer: 0 },
        { q: "¿Dónde se tira el vidrio?", options: ["En la poubelle jaune", "En el conteneur à verre de la rue", "En el compost"], answer: 1 },
        { q: "¿Cuál es el valor destacado?", options: ["Économiser les ressources", "Pagar menos", "Ahorrar tiempo"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m40-cl1", before: "N'oubliez pas de ", blank: "recycler", after: " le plastique.", es: "No olvide reciclar el plástico.", mode: "type" },
      { id: "fr-m40-cl2", before: "Jetez le verre dans le conteneur ", blank: "à verre", after: ".", es: "Tire el vidrio en el contenedor de vidrio.", mode: "select", options: ["à verre", "jaune", "bleu", "noir"] }
    ],
    falseFriends: [
      { es: "poubelle", esMeaning: "cubo de basura", target: "poubelle", targetMeaning: "cubo o contenedor de basura (proviene de Eugène Poubelle)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 41 — Viaje por Carretera                              */
  /* ============================================================ */
  pt.push({
    id: "pt-m41", num: 41, title: "Viagem de carro", subtitle: "Gasolina, portagens, trânsito e condução",
    cards: [
      { id: "pt-m41-c01", es: "la gasolinera", target: "a bomba de gasolina / posto", phon: "a BOM-ba de ga-zo-LI-na" },
      { id: "pt-m41-c02", es: "el peaje", target: "a portagem", phon: "a por-TA-jãi" },
      { id: "pt-m41-c03", es: "el atasco", target: "o engarrafamento / trânsito", phon: "u en-ga-rra-fa-MEN-tu" },
      { id: "pt-m41-c04", es: "el maletero", target: "a bagageira", phon: "a ba-ga-JEI-ra" },
      { id: "pt-m41-c05", es: "el permiso de conducir", target: "a carta de condução", phon: "a KAR-ta de kon-du-SÃU" },
      { id: "pt-m41-c06", es: "aparcar", target: "estacionar / meparar", phon: "esh-ta-si-o-NAR" },
      { id: "pt-m41-c07", es: "gasolina sin plomo", target: "gasolina sem chumbo", phon: "ga-zo-LI-na sãi SHUM-bu" },
      { id: "pt-m41-c08", es: "diésel / gasóleo", target: "o gasóleo", phon: "u ga-ZO-le-u" },
      { id: "pt-m41-c09", es: "el neumático", target: "o pneu", phon: "u pneu" },
      { id: "pt-m41-c10", es: "telepeaje Via Verde", target: "a Via Verde", phon: "a VI-a VER-de" }
    ],
    dialogue: {
      title: "Parar no posto de combustível", context: "Parada técnica durante un viaje por autopista.",
      lines: [
        { who: "Condutor", target: "Preciso de parar na próxima bomba de gasolina.", es: "Necesito parar en la próxima gasolinera." },
        { who: "Passageiro", target: "Vais atestar o depósito com gasóleo ou gasolina?", es: "¿Vas a llenar el depósito con diésel o gasolina?" },
        { who: "Condutor", target: "Com gasóleo. E preciso de verificar a pressão dos pneus.", es: "Con diésel. Y necesito verificar la presión de los neumáticos." },
        { who: "Passageiro", target: "Ainda temos muitas portagens até ao Porto?", es: "¿Aún tenemos muchos peajes hasta Oporto?" },
        { who: "Condutor", target: "Não te preocupes, temos o identificador da Via Verde.", es: "No te preocupes, tenemos el dispositivo de la Via Verde." }
      ],
      questions: [
        { q: "¿En dónde van a parar?", options: ["En un restaurante", "Na bomba de gasolina", "En un taller"], answer: 1 },
        { q: "¿Qué combustible usa el coche?", options: ["Gasóleo (diésel)", "Gasolina 95", "Electricidad"], answer: 0 },
        { q: "¿Cómo van a pagar los peajes?", options: ["En efectivo", "Con Via Verde", "Con tarjeta"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m41-cl1", before: "Coloca a mala na ", blank: "bagageira", after: " do carro.", es: "Coloca la maleta en el maletero del coche.", mode: "type" },
      { id: "pt-m41-cl2", before: "Tenho a minha ", blank: "carta", after: " de condução em dia.", es: "Tengo mi carnet de conducir al día.", mode: "select", options: ["carta", "porta", "festa", "tinta"] }
    ],
    falseFriends: [
      { es: "carta", esMeaning: "carnet de conducir", target: "carta de condução", targetMeaning: "carnet/permiso de conducir en Portugal" }
    ]
  });

  fr.push({
    id: "fr-m41", num: 41, title: "Voyage en voiture", subtitle: "Gasolinera, peajes, atascos y conducción",
    cards: [
      { id: "fr-m41-c01", es: "la gasolinera", target: "la station-service", phon: "la sta-SION ser-VIS" },
      { id: "fr-m41-c02", es: "el peaje", target: "le péage", phon: "lə pe-AZH" },
      { id: "fr-m41-c03", es: "el atasco", target: "l'embouteillage / le bouchon", phon: "lan-bu-te-YAZH" },
      { id: "fr-m41-c04", es: "el maletero", target: "le coffre", phon: "lə kofr" },
      { id: "fr-m41-c05", es: "el carnet de conducir", target: "le permis de conduire", phon: "lə per-MI də kon-DUIR" },
      { id: "fr-m41-c06", es: "aparcar", target: "garer la voiture / stationner", phon: "ga-RÉ" },
      { id: "fr-m41-c07", es: "gasolina sin plomo", target: "le sans-plomb (SP95 / SP98)", phon: "lə san plon" },
      { id: "fr-m41-c08", es: "diésel / gasóleo", target: "le gazole / le gazole", phon: "lə ga-ZOL" },
      { id: "fr-m41-c09", es: "el neumático", target: "le pneu", phon: "lə pnö" },
      { id: "fr-m41-c10", es: "telepeaje Télépéage", target: "le télépéage", phon: "lə te-le-pe-AZH" }
    ],
    dialogue: {
      title: "Arrêt à la station-service", context: "Trayecto por la autopista en Francia.",
      lines: [
        { who: "Conducteur", target: "Je dois m'arrêter à la prochaine station-service.", es: "Debo parar en la próxima gasolinera." },
        { who: "Passager", target: "Tu vas mettre du gazole ou du sans-plomb ?", es: "¿Vas a poner diésel o gasolina sin plomo?" },
        { who: "Conducteur", target: "Du gazole. Et je dois vérifier la pression des pneus.", es: "Diésel. Y debo comprobar la presión de los neumáticos." },
        { who: "Passager", target: "Il y a beaucoup d'embouteillages avant le péage ?", es: "¿Hay muchos atascos antes del peaje?" },
        { who: "Conducteur", target: "Non, ça roule bien grâce au télépéage.", es: "No, avanza bien gracias al telepeaje." }
      ],
      questions: [
        { q: "¿Dónde hará la parada el conductor?", options: ["En un parking", "A la station-service", "En un hotel"], answer: 1 },
        { q: "¿Qué carburante utiliza?", options: ["Du gazole (diésel)", "Sin plomo 98", "Gas LP"], answer: 0 },
        { q: "¿Cómo evitan retenciones en el peaje?", options: ["Cambiando de ruta", "Con el télépéage", "Viajando de noche"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m41-cl1", before: "Mets les valises dans le ", blank: "coffre", after: ".", es: "Pon las maletas en el maletero.", mode: "type" },
      { id: "fr-m41-cl2", before: "N'oublie pas ton ", blank: "permis", after: " de conduire.", es: "No olvides tu carnet de conducir.", mode: "select", options: ["permis", "billet", "trajet", "bon"] }
    ],
    falseFriends: [
      { es: "bouchon", esMeaning: "tapa / atasco", target: "bouchon", targetMeaning: "tapón de botella o atasco de tráfico" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 42 — Vida Universitaria                               */
  /* ============================================================ */
  pt.push({
    id: "pt-m42", num: 42, title: "Na universidade", subtitle: "Exames, propinas, biblioteca e vida académica",
    cards: [
      { id: "pt-m42-c01", es: "la carrera universitária", target: "o curso / a licenciatura", phon: "u KUR-su" },
      { id: "pt-m42-c02", es: "las tasas académicas", target: "as propinas", phon: "ash pru-PI-nash" },
      { id: "pt-m42-c03", es: "el examen", target: "o exame", phon: "u e-ZA-me" },
      { id: "pt-m42-c04", es: "aprobar", target: "passar / ser aprovado", phon: "pa-SAR" },
      { id: "pt-m42-c05", es: "suspender", target: "chumbar", phon: "shum-BAR" },
      { id: "pt-m42-c06", es: "el profesor universitario", target: "o docente / professor", phon: "u pu-fe-SSOR" },
      { id: "pt-m42-c07", es: "la biblioteca", target: "a biblioteca", phon: "a bi-bli-u-TE-ka" },
      { id: "pt-m42-c08", es: "el horario de clases", target: "o horário de aulas", phon: "u o-RA-riu de AW-lash" },
      { id: "pt-m42-c09", es: "la beca de estudios", target: "a bolsa de estudos", phon: "a BOL-sa de es-TU-dush" },
      { id: "pt-m42-c10", es: "tomar apuntes", target: "tirar apontamentos", phon: "ti-RAR a-pon-ta-MEN-tush" }
    ],
    dialogue: {
      title: "Época de exames", context: "Dos estudiantes universitarios preparando evaluaciones.",
      lines: [
        { who: "Ana", target: "Já começaste a estudar para o exame de amanhã?", es: "¿Ya empezaste a estudiar para el examen de mañana?" },
        { who: "Tiago", target: "Ainda não, estou a rever os apontamentos na biblioteca.", es: "Aún no, estoy repasando los apuntes en la biblioteca." },
        { who: "Ana", target: "Se chumbarmos, temos de ir à época de recurso.", es: "Si suspendemos, tenemos que ir a la convocatoria extraordinaria (recurso)." },
        { who: "Tiago", target: "Espero passar à primeira! Já pagaste as propinas deste mês?", es: "¡Espero aprobar a la primera! ¿Ya pagaste las tasas universitarias de este mes?" },
        { who: "Ana", target: "Sim, paguei ontem através do multibanco.", es: "Sí, pagué ayer a través del cajero." }
      ],
      questions: [
        { q: "¿Dónde está estudiando Tiago?", options: ["En casa", "Na biblioteca", "En la cafetería"], answer: 1 },
        { q: "¿Qué ocurre si suspenden (chumbar)?", options: ["Van a recurso", "Repiten año", "Expulsión"], answer: 0 },
        { q: "¿Qué son las propinas en la universidad en Portugal?", options: ["Propinas al profe", "Tasas/matrícula universitaria", "Comida"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m42-cl1", before: "Estudei muito para não ", blank: "chumbar", after: " no exame.", es: "Estudié mucho para no suspender en el examen.", mode: "type" },
      { id: "pt-m42-cl2", before: "Paguei a mensalidade das ", blank: "propinas", after: " na faculdade.", es: "Pagué la mensualidad de las tasas en la facultad.", mode: "select", options: ["propinas", "recompensas", "compras", "gorjetas"] }
    ],
    falseFriends: [
      { es: "propina", esMeaning: "tasas universitarias", target: "propina", targetMeaning: "matrícula o arancel universitario (la propina a un camarero es 'gorjeta')" }
    ]
  });

  fr.push({
    id: "fr-m42", num: 42, title: "À l'université", subtitle: "Exámenes, tasas, biblioteca y vida académica",
    cards: [
      { id: "fr-m42-c01", es: "la carrera universitaria", target: "la licence / la filière", phon: "la li-SANS" },
      { id: "fr-m42-c02", es: "las tasas de matrícula", target: "les frais de scolarité / d'inscription", phon: "lé fré də sko-la-ri-TÉ" },
      { id: "fr-m42-c03", es: "el examen", target: "l'examen / l'épreuve / le partiel", phon: "leg-za-MAN" },
      { id: "fr-m42-c04", es: "aprobar", target: "réussir / valider l'examen", phon: "re-ü-SIR" },
      { id: "fr-m42-c05", es: "suspender", target: "échouer / rater l'examen", phon: "e-shu-É" },
      { id: "fr-m42-c06", es: "el profesor", target: "l'enseignant / le professeur", phon: "lan-se-NYAN" },
      { id: "fr-m42-c07", es: "la biblioteca universitaria", target: "la BU (bibliothèque universitaire)", phon: "la be-ü" },
      { id: "fr-m42-c08", es: "el horario de clases", target: "l'emploi du temps", phon: "lam-plua dü tan" },
      { id: "fr-m42-c09", es: "la beca", target: "la bourse d'études", phon: "la burs de-TÜD" },
      { id: "fr-m42-c10", es: "tomar apuntes", target: "prendre des notes", phon: "prandr dé not" },
      ]
    ,
    dialogue: {
      title: "Réviser pour les partiels", context: "Preparación de exámenes universitarios en la universidad.",
      lines: [
        { who: "Ana", target: "Tu as commencé à réviser pour le partiel de demain ?", es: "¿Empezaste a repasar para el examen parcial de mañana?" },
        { who: "Tiago", target: "Pas encore, je relis mes notes à la BU.", es: "Aún no, releo mis apuntes en la biblioteca universitaria." },
        { who: "Ana", target: "Si on rate, il faudra aller aux rattrapages.", es: "Si suspendemos, habrá que ir a la convocatoria de recuperación." },
        { who: "Tiago", target: "J'espère valider du premier coup !", es: "¡Espero aprobar a la primera!" },
        { who: "Ana", target: "Moi aussi, restons concentrés.", es: "Yo también, mantengámonos concentrados." }
      ],
      questions: [
        { q: "¿Dónde está estudiando Tiago?", options: ["En la BU", "En su habitación", "En el comedor"], answer: 0 },
        { q: "¿Qué ocurre si rater (suspenden)?", options: ["Van a rattrapages (recuperación)", "Pierden el curso", "Nada"], answer: 0 },
        { q: "¿Cómo llaman informalmente a la biblioteca universitaria?", options: ["La BU", "Le resto U", "La fac"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m42-cl1", before: "Je vais travailler à la ", blank: "BU", after: " cet après-midi.", es: "Voy a trabajar en la biblioteca universitaria esta tarde.", mode: "type" },
      { id: "fr-m42-cl2", before: "Il faut réviser pour réussir le ", blank: "partiel", after: ".", es: "Hay que repasar para aprobar el parcial.", mode: "select", options: ["partiel", "panier", "papier", "paquet"] }
    ],
    falseFriends: [
      { es: "partiel", esMeaning: "examen parcial", target: "partiel", targetMeaning: "examen universitario parcial (no significa incompleto en este contexto)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 43 — Trámites Administrativos                         */
  /* ============================================================ */
  pt.push({
    id: "pt-m43", num: 43, title: "Trâmites burocráticos", subtitle: "NIF, atestados, certidões e formulários",
    cards: [
      { id: "pt-m43-c01", es: "el NIF / número fiscal", target: "o NIF / número de contribuinte", phon: "u nif" },
      { id: "pt-m43-c02", es: "el certificado de empadronamiento", target: "o atestado de residência", phon: "u a-tes-TA-du de re-zi-DEN-sia" },
      { id: "pt-m43-c03", es: "el formulario", target: "o formulário / impresso", phon: "u for-mu-LA-riu" },
      { id: "pt-m43-c04", es: "la ventanilla / atención", target: "o balcão de atendimento", phon: "u bal-KÃU de a-ten-di-MEN-tu" },
      { id: "pt-m43-c05", es: "firmar", target: "assinar", phon: "a-si-NAR" },
      { id: "pt-m43-c06", es: "la firma", target: "a assinatura", phon: "a a-si-na-TU-ra" },
      { id: "pt-m43-c07", es: "la cita previa", target: "o agendamento prévio", phon: "u a-zhen-da-MEN-tu" },
      { id: "pt-m43-c08", es: "el documento de identidad", target: "o cartão de cidadão", phon: "u kar-TÃU de si-da-DÃU" },
      { id: "pt-m43-c09", es: "la renovación", target: "a renovação", phon: "a re-nu-va-SÃU" },
      { id: "pt-m43-c10", es: "pedir número de turno", target: "tirar uma senha", phon: "ti-RAR U-ma SE-ña" }
    ],
    dialogue: {
      title: "Tratar de documentos na Loja do Cidadão", context: "Obtención de documentación oficial en Portugal.",
      lines: [
        { who: "Funcionário", target: "Bom dia, tirou senha para o atendimento?", es: "Buenos días, ¿sacó número para la atención?" },
        { who: "Cidadão", target: "Sim, tenho a senha número quarenta. Preciso de pedir o meu NIF.", es: "Sí, tengo el número cuarenta. Necesito solicitar mi NIF." },
        { who: "Funcionário", target: "Preencha este formulário e assine no final.", es: "Rellene este formulario y firme al final." },
        { who: "Cidadão", target: "Onde devo colocar a minha assinatura?", es: "¿Dónde debo poner mi firma?" },
        { who: "Funcionário", target: "Aqui mesmo no fundo da página.", es: "Aquí mismo al pie de la página." }
      ],
      questions: [
        { q: "¿Qué número de turno (senha) tiene?", options: ["30", "40", "50"], answer: 1 },
        { q: "¿Qué trámite acude a realizar?", options: ["Pedir o NIF", "Pagar una multa", "Sacar pasaporte"], answer: 0 },
        { q: "¿Qué le pide hacer el funcionario?", options: ["Preencher o formulário e assinar", "Irse", "Traer fotos"], answer: 0 }
      ]
    },
    cloze: [
      { id: "pt-m43-cl1", before: "Deve ", blank: "assinar", after: " o documento na última linha.", es: "Debe firmar el documento en la última línea.", mode: "type" },
      { id: "pt-m43-cl2", before: "Tire uma ", blank: "senha", after: " na entrada para ser atendido.", es: "Saque un número a la entrada para ser atendido.", mode: "select", options: ["senha", "linha", "mesa", "caixa"] }
    ],
    falseFriends: [
      { es: "assinar", esMeaning: "firmar", target: "assinar", targetMeaning: "firmar un escrito (en español 'asesinar' es matar)" }
    ]
  });

  fr.push({
    id: "fr-m43", num: 43, title: "Démarches administratives", subtitle: "Formularios, certificados, visados y trámites",
    cards: [
      { id: "fr-m43-c01", es: "el número de seguridad social", target: "le numéro de sécurité sociale / INSEE", phon: "lə nü-me-RO" },
      { id: "fr-m43-c02", es: "el certificado de empadronamiento", target: "le justificatif de domicile", phon: "lə zhüs-ti-fi-ka-TIF" },
      { id: "fr-m43-c03", es: "el formulario", target: "le formulaire / formulaire CERFA", phon: "lə for-mü-LÉR" },
      { id: "fr-m43-c04", es: "la ventanilla", target: "le guichet", phon: "lə gi-SHÉ" },
      { id: "fr-m43-c05", es: "firmar", target: "signer", phon: "si-NYÉ" },
      { id: "fr-m43-c06", es: "la firma", target: "la signature", phon: "la si-nya-TÜR" },
      { id: "fr-m43-c07", es: "la cita previa", target: "le rendez-vous obligatoire", phon: "lə ran-dé-VU" },
      { id: "fr-m43-c08", es: "el documento de identidad", target: "la pièce d'identité / CNI", phon: "la pi-ES di-dan-ti-TÉ" },
      { id: "fr-m43-c09", es: "la renovación", target: "le renouvellement", phon: "lə rə-nu-vel-MAN" },
      { id: "fr-m43-c10", es: "rellenar un impreso", target: "remplir un formulaire", phon: "ran-PLIR" }
    ],
    dialogue: {
      title: "À la préfecture", context: "Trámite de renovación de documentos en Francia.",
      lines: [
        { who: "Agent", target: "Bonjour, vous avez rendez-vous au guichet 3 ?", es: "Buenos días, ¿tiene cita en la ventanilla 3?" },
        { who: "Citoyen", target: "Oui, pour le renouvellement de mes papiers.", es: "Sí, para la renovación de mis papeles." },
        { who: "Agent", target: "Veuillez remplir ce formulaire et ajouter votre signature.", es: "Por favor rellene este formulario y añada su firma." },
        { who: "Citoyen", target: "Où est-ce que je dois signer ?", es: "¿Dónde tengo que firmar?" },
        { who: "Agent", target: "En bas à droite du document.", es: "Abajo a la derecha del documento." }
      ],
      questions: [
        { q: "¿En qué guichet (ventanilla) tiene la cita?", options: ["Guichet 1", "Guichet 3", "Guichet 5"], answer: 1 },
        { q: "¿Para qué trámite acude?", options: ["Renouvellement de papiers", "Pagar impuesto", "Pedir visado turismo"], answer: 0 },
        { q: "¿Dónde debe colocar la firma (signature)?", options: ["Arriba", "En bas à droite", "En el reverso"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m43-cl1", before: "N'oubliez pas de ", blank: "signer", after: " la demande.", es: "No olvide firmar la solicitud.", mode: "type" },
      { id: "fr-m43-cl2", before: "Présentez-vous au ", blank: "guichet", after: " numéro deux.", es: "Preséntese en la ventanilla número dos.", mode: "select", options: ["guichet", "billet", "trajet", "sommet"] }
    ],
    falseFriends: [
      { es: "remplir", esMeaning: "rellenar / llenar", target: "remplir", targetMeaning: "rellenar un documento o llenar un recipiente" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 44 — Expresar Opiniones y Debatir                     */
  /* ============================================================ */
  pt.push({
    id: "pt-m44", num: 44, title: "Dar opiniões e debater", subtitle: "Acordo, desacordo, pontos de vista e argumentos",
    cards: [
      { id: "pt-m44-c01", es: "en mi opinión", target: "na minha opinião", phon: "na mi-ña u-pi-ni-ÃU" },
      { id: "pt-m44-c02", es: "estoy de acuerdo", target: "estou de acordo / concordo", phon: "kon-KOR-du" },
      { id: "pt-m44-c03", es: "no estoy de acuerdo", target: "não concordo / discordo", phon: "dis-KOR-du" },
      { id: "pt-m44-c04", es: "desde mi punto de vista", target: "do meu ponto de vista", phon: "du MEU PON-tu de VIS-ta" },
      { id: "pt-m44-c05", es: "tienes razón", target: "tens razão", phon: "tens rra-ZÃU" },
      { id: "pt-m44-c06", es: "es verdad", target: "é verdade", phon: "e ver-DA-de" },
      { id: "pt-m44-c07", es: "por un lado", target: "por um lado", phon: "por ũ LA-du" },
      { id: "pt-m44-c08", es: "por otro lado", target: "por outro lado", phon: "por OU-tru LA-du" },
      { id: "pt-m44-c09", es: "sin duda", target: "sem dúvida", phon: "sãi DU-vi-da" },
      { id: "pt-m44-c10", es: "para mí", target: "para mim", phon: "PA-ra mĩ" }
    ],
    dialogue: {
      title: "Debater um tópico", context: "Intercambio de opiniones sobre el trabajo remoto.",
      lines: [
        { who: "Rui", target: "Na minha opinião, o trabalho remoto é muito mais produtivo.", es: "En mi opinión, el trabajo remoto es mucho más productivo." },
        { who: "Sofia", target: "Concordo em parte, mas por outro lado perde-se o contacto humano.", es: "Coincido en parte, pero por otro lado se pierde el contacto humano." },
        { who: "Rui", target: "Tens razão, contudo ganha-se mais tempo com a família.", es: "Tienes razón, sin embargo se gana más tiempo con la familia." },
        { who: "Sofia", target: "Do meu ponto de vista, o ideal seria um modelo híbrido.", es: "Desde mi punto de vista, lo ideal sería un modelo híbrido." },
        { who: "Rui", target: "Sem dúvida! Acredito que seja o melhor equilíbrio.", es: "¡Sin duda! Creo que es el mejor equilibrio." }
      ],
      questions: [
        { q: "¿Qué opina Rui sobre el teletrabajo?", options: ["Es aburrido", "É mais produtivo", "Es inútil"], answer: 1 },
        { q: "¿Qué inconveniente señala Sofia?", options: ["Perde-se o contacto humano", "Es caro", "Se trabaja más"], answer: 0 },
        { q: "¿En qué propuesta coinciden al final?", options: ["100% presencial", "Modelo híbrido", "No trabajar"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m44-cl1", before: "Eu ", blank: "concordo", after: " totalmente contigo.", es: "Coincido totalmente contigo.", mode: "type" },
      { id: "pt-m44-cl2", before: "Do meu ponto de ", blank: "vista", after: ", esta é a melhor opção.", es: "Desde mi punto de vista, esta es la mejor opción.", mode: "select", options: ["vista", "mão", "hora", "parte"] }
    ],
    falseFriends: [
      { es: "discordar", esMeaning: "discrepar", target: "discordar", targetMeaning: "no estar de acuerdo (en español es discrepar o no concordar)" }
    ]
  });

  fr.push({
    id: "fr-m44", num: 44, title: "Exprimer son opinion", subtitle: "Acuerdo, desacuerdo y debate de ideas",
    cards: [
      { id: "fr-m44-c01", es: "en mi opinión", target: "à mon avis / selon moi", phon: "a mon na-VI" },
      { id: "fr-m44-c02", es: "estoy de acuerdo", target: "je suis d'accord", phon: "shə süi da-KOR" },
      { id: "fr-m44-c03", es: "no estoy de acuerdo", target: "je ne suis pas d'accord", phon: "shə nə süi pa da-KOR" },
      { id: "fr-m44-c04", es: "desde mi punto de vista", target: "de mon point de vue", phon: "də mon puan də vü" },
      { id: "fr-m44-c05", es: "tienes razón", target: "tu as raison", phon: "tü a ré-ZON" },
      { id: "fr-m44-c06", es: "es verdad", target: "c'est vrai", phon: "sé vré" },
      { id: "fr-m44-c07", es: "por un lado", target: "d'un côté", phon: "dan ko-TÉ" },
      { id: "fr-m44-c08", es: "por otro lado", target: "d'un autre côté / par contre", phon: "dan notr ko-TÉ" },
      { id: "fr-m44-c09", es: "sin duda", target: "sans aucun doute", phon: "san zo-KUN dut" },
      { id: "fr-m44-c10", es: "pienso que", target: "je pense que / je crois que", phon: "shə pans kə" }
    ],
    dialogue: {
      title: "Débattre d'un sujet", context: "Conversación sobre modelos de trabajo flexible.",
      lines: [
        { who: "Rui", target: "À mon avis, le télétravail est beaucoup plus efficace.", es: "En mi opinión, el teletrabajo es mucho más eficaz." },
        { who: "Sofia", target: "Je suis d'accord, mais d'un autre côté on perd le contact social.", es: "Estoy de acuerdo, pero por otro lado se pierde el contacto social." },
        { who: "Rui", target: "Tu as raison, mais on gagne du temps en famille.", es: "Tienes razón, pero se gana tiempo en familia." },
        { who: "Sofia", target: "De mon point de vue, la meilleure solution est le modèle hybride.", es: "Desde mi punto de vista, la mejor solución es el modelo híbrido." },
        { who: "Rui", target: "Sans aucun doute ! C'est le bon compromis.", es: "¡Sin duda alguna! Es el compromiso correcto." }
      ],
      questions: [
        { q: "¿Qué opina Rui sobre el télétravail?", options: ["Es inútil", "Est plus efficace", "Es aburrido"], answer: 1 },
        { q: "¿Qué objeción plantea Sofia?", options: ["On perd le contact social", "Es muy costoso", "No funciona"], answer: 0 },
        { q: "¿Qué modelo consideran el ideal?", options: ["Presencial", "Le modèle hybride", "Ninguno"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m44-cl1", before: "À mon ", blank: "avis", after: ", c'est une très bonne idée.", es: "En mi opinión, es una muy buena idea.", mode: "type" },
      { id: "fr-m44-cl2", before: "Je suis tout à fait d'", blank: "accord", after: " avec toi.", es: "Estoy totalmente de acuerdo contigo.", mode: "select", options: ["accord", "effort", "apport", "décor"] }
    ],
    falseFriends: [
      { es: "raison", esMeaning: "razón", target: "avoir raison", targetMeaning: "tener razón (en francés la estructura requiere el verbo 'avoir')" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 45 — Urgencias Médicas                                */
  /* ============================================================ */
  pt.push({
    id: "pt-m45", num: 45, title: "Urgências médicas", subtitle: "Sintomas graves, ambulância e hospital",
    cards: [
      { id: "pt-m45-c01", es: "las urgencias", target: "as urgências", phon: "ash ur-ZHEN-si-ash" },
      { id: "pt-m45-c02", es: "la ambulancia", target: "a ambulância", phon: "a am-bu-LAN-si-a" },
      { id: "pt-m45-c03", es: "el dolor fuerte", target: "a dor forte", phon: "a dor FOR-te" },
      { id: "pt-m45-c04", es: "la alergia", target: "a alergia", phon: "a a-ler-ZHI-a" },
      { id: "pt-m45-c05", es: "la fiebre alta", target: "a febre alta", phon: "a FE-bre AL-ta" },
      { id: "pt-m45-c06", es: "marearse", target: "ter tonturas / desmaiar", phon: "ter ton-TU-rash" },
      { id: "pt-m45-c07", es: "la quemadura", target: "a queimadura", phon: "a kei-ma-DU-ra" },
      { id: "pt-m45-c08", es: "la herida", target: "a ferida", phon: "a fe-RI-da" },
      { id: "pt-m45-c09", es: "número de emergencia (112)", target: "o 112 (cento e doze)", phon: "u SEN-tu e DO-ze" },
      { id: "pt-m45-c10", es: "la receta médica", target: "a receita médica", phon: "a re-CEI-ta ME-di-ka" }
    ],
    dialogue: {
      title: "Chamar o 112", context: "Llamada de urgencia médica en Lisboa.",
      lines: [
        { who: "Operador", target: "112, qual é a sua emergência?", es: "112, ¿cuál es su emergencia?" },
        { who: "Utente", target: "O meu amigo teve um desmaio e está com tonturas fortes.", es: "Mi amigo se ha desmayado y tiene mareos fuertes." },
        { who: "Operador", target: "Ele está consciente neste momento?", es: "¿Está consciente en este momento?" },
        { who: "Utente", target: "Sim, mas sente uma dor forte no peito.", es: "Sí, pero siente un dolor fuerte en el pecho." },
        { who: "Operador", target: "Mantenha a calma. A ambulância já está a caminho.", es: "Mantenga la calma. La ambulancia ya va de camino." }
      ],
      questions: [
        { q: "¿A qué número llama en caso de emergencia?", options: ["911", "112", "091"], answer: 1 },
        { q: "¿Qué le ocurrió al amigo del usuario?", options: ["Un desmaio (desmayo)", "Se cortó la mano", "Perdió las llaves"], answer: 0 },
        { q: "¿Qué dolor manifiesta sentir?", options: ["Dor forte no peito", "Dolor de muelas", "Dolor de espalda"], answer: 0 }
      ]
    },
    cloze: [
      { id: "pt-m45-cl1", before: "Liguei para o 112 para pedir uma ", blank: "ambulância", after: ".", es: "Llamé al 112 para pedir una ambulancia.", mode: "type" },
      { id: "pt-m45-cl2", before: "Ele está com uma ", blank: "febre", after: " muito alta.", es: "Él está con una fiebre muy alta.", mode: "select", options: ["febre", "fome", "sede", "sombra"] }
    ],
    falseFriends: [
      { es: "receita", esMeaning: "receta médica / de cocina", target: "receita", targetMeaning: "receta de médico o de cocina (en español 'receta' abarca ambos igual)" }
    ]
  });

  fr.push({
    id: "fr-m45", num: 45, title: "Urgences médicales", subtitle: "Sintomas graves, ambulancia u hospital",
    cards: [
      { id: "fr-m45-c01", es: "las urgencias", target: "les urgences", phon: "lé zür-ZHANS" },
      { id: "fr-m45-c02", es: "la ambulancia / SAMU", target: "l'ambulance / le SAMU (15)", phon: "lam-bü-LANS" },
      { id: "fr-m45-c03", es: "el dolor fuerte", target: "la douleur vive / forte", phon: "la du-LÖR" },
      { id: "fr-m45-c04", es: "la alergia", target: "l'allergie", phon: "la-ler-ZHI" },
      { id: "fr-m45-c05", es: "la fiebre alta", target: "la forte fièvre", phon: "la fi-EVR" },
      { id: "fr-m45-c06", es: "los mareos", target: "les vertiges / l'évanouissement", phon: "lé ver-TIZH" },
      { id: "fr-m45-c07", es: "la quemadura", target: "la brûlure", phon: "la brü-LÜR" },
      { id: "fr-m45-c08", es: "la herida", target: "la blessure / la plaie", phon: "la ble-SÜR" },
      { id: "fr-m45-c09", es: "número europeo de emergencias (112)", target: "le 112", phon: "lə san doz" },
      { id: "fr-m45-c10", es: "la receta médica", target: "l'ordonnance", phon: "lor-do-NANS" }
    ],
    dialogue: {
      title: "Appeler les secours", context: "Llamada de socorro en caso de urgencia.",
      lines: [
        { who: "Opérateur", target: "SAMU 15, quelle est votre urgence ?", es: "SAMU 15, ¿cuál es su emergencia?" },
        { who: "Appelant", target: "Mon ami a eu un évanouissement et il a des vertiges.", es: "Mi amigo ha sufrido un desmayo y tiene mareos." },
        { who: "Opérateur", target: "Est-ce qu'il est conscient maintenant ?", es: "¿Está consciente ahora?" },
        { who: "Appelant", target: "Oui, mais il ressent une forte douleur à la poitrine.", es: "Sí, pero siente un fuerte dolor en el pecho." },
        { who: "Opérateur", target: "Restez calme, l'ambulance est en route.", es: "Mantenga la calma, la ambulancia está en camino." }
      ],
      questions: [
        { q: "¿A qué servicio llama (15 en Francia)?", options: ["SAMU", "Pompier", "Police"], answer: 0 },
        { q: "¿Qué le ha ocurrido a la víctima?", options: ["Un évanouissement (desmayo)", "Un corte", "Una caída"], answer: 0 },
        { q: "¿Qué síntoma grave presenta?", options: ["Forte douleur à la poitrine", "Dolor de brazo", "Tos"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m45-cl1", before: "Il faut appeler une ", blank: "ambulance", after: " immédiatement.", es: "Hay que llamar una ambulancia inmediatamente.", mode: "type" },
      { id: "fr-m45-cl2", before: "Le médecin m'a donné une ", blank: "ordonnance", after: " pour les médicaments.", es: "El médico me dio una receta para los medicamentos.", mode: "select", options: ["ordonnance", "ambulance", "assurance", "importance"] }
    ],
    falseFriends: [
      { es: "ordonnance", esMeaning: "receta médica", target: "ordonnance", targetMeaning: "receta prescripta por el médico (no ordenanza de ley local)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 46 — Contar Anécdotas en Pasado                       */
  /* ============================================================ */
  pt.push({
    id: "pt-m46", num: 46, title: "Contar histórias do passado", subtitle: "Tempos do passado, histórias e acontecimentos",
    cards: [
      { id: "pt-m46-c01", es: "ayer", target: "ontem", phon: "ON-tãi" },
      { id: "pt-m46-c02", es: "la semana pasada", target: "a semana passada", phon: "a se-MA-na pa-SA-da" },
      { id: "pt-m46-c03", es: "de repente", target: "de repente", phon: "de rre-PEN-te" },
      { id: "pt-m46-c04", es: "mientras", target: "enquanto", phon: "en-KUAN-tu" },
      { id: "pt-m46-c05", es: "hace dos años", target: "há dois anos", phon: "a doish A-nush" },
      { id: "pt-m46-c06", es: "al principio", target: "ao início / no início", phon: "no i-NI-si-u" },
      { id: "pt-m46-c07", es: "al final", target: "no fim / no final", phon: "no fĩ" },
      { id: "pt-m46-c08", es: "suceder / ocurrir", target: "acontecer", phon: "a-kon-te-SER" },
      { id: "pt-m46-c09", es: "me di cuenta de que", target: "apercebi-me de que", phon: "a-per-se-BI-me" },
      { id: "pt-m46-c10", es: "menos mal", target: "ainda bem", phon: "a-IN-da bãi" }
    ],
    dialogue: {
      title: "Uma viagem inesquecível", context: "Narración de un suceso del pasado.",
      lines: [
        { who: "Pedro", target: "Aconteceu-me uma coisa engraçada na semana passada.", es: "Me ocurrió una cosa graciosa la semana pasada." },
        { who: "Inês", target: "Conta lá! O que foi?", es: "¡Cuenta! ¿Qué fue?" },
        { who: "Pedro", target: "Enquanto caminhava para o trabalho, apercebi-me de que tinha sapatos diferentes.", es: "Mientras caminaba hacia el trabajo, me di cuenta de que llevaba zapatos diferentes." },
        { who: "Inês", target: "Não posso crer! E o que fizeste?", es: "¡No lo puedo creer! ¿Y qué hiciste?" },
        { who: "Pedro", target: "Ainda bem que morava perto. Voltei a casa a correr para mudar.", es: "Menos mal que vivía cerca. Volví a casa corriendo a cambiarme." }
      ],
      questions: [
        { q: "¿Cuándo ocurrió la anécdota?", options: ["Ayer", "Na semana passada", "Hace un año"], answer: 1 },
        { q: "¿De qué se dio cuenta Pedro?", options: ["Olvidó la cartera", "Tinha sapatos diferentes", "Perdió el tren"], answer: 1 },
        { q: "¿Por qué dijo 'ainda bem'?", options: ["Morava perto (vivía cerca)", "Tenía coche", "Nadie lo vio"], answer: 0 }
      ]
    },
    cloze: [
      { id: "pt-m46-cl1", before: "De repente, ", blank: "apercebi-me", after: " do erro.", es: "De repente, me di cuenta del error.", mode: "type" },
      { id: "pt-m46-cl2", before: "Ainda ", blank: "bem", after: " que tudo se resolveu.", es: "Menos mal que todo se resolvió.", mode: "select", options: ["bem", "mal", "assim", "hoje"] }
    ],
    falseFriends: [
      { es: "enquanto", esMeaning: "mientras", target: "enquanto", targetMeaning: "mientras (no significa 'en cuanto' temporal inmediato, que es 'assim que')" }
    ]
  });

  fr.push({
    id: "fr-m46", num: 46, title: "Raconter des anecdotes", subtitle: "Tiempos del pasado y relatos de sucesos",
    cards: [
      { id: "fr-m46-c01", es: "ayer", target: "hier", phon: "i-ÉR" },
      { id: "fr-m46-c02", es: "la semana pasada", target: "la semaine dernière", phon: "la sə-MEN der-NIÉR" },
      { id: "fr-m46-c03", es: "de repente", target: "soudain / tout à coup", phon: "su-DAN / tu ta ku" },
      { id: "fr-m46-c04", es: "mientras", target: "pendant que / alors que", phon: "pan-DAN kə" },
      { id: "fr-m46-c05", es: "hace dos años", target: "il y a deux ans", phon: "il i a dö zan" },
      { id: "fr-m46-c06", es: "al principio", target: "au début", phon: "o de-BÜ" },
      { id: "fr-m46-c07", es: "al final", target: "à la fin / finalement", phon: "a la fan" },
      { id: "fr-m46-c08", es: "ocurrir / suceder", target: "se passer / arriver", phon: "sə pa-SÉ" },
      { id: "fr-m46-c09", es: "me di cuenta de que", target: "je me suis rendu compte que", phon: "shə mə süi ran-dü kont" },
      { id: "fr-m46-c10", es: "menos mal", target: "heureusement", phon: "ö-röz-MAN" }
    ],
    dialogue: {
      title: "Une histoire drôle", context: "Relato de una anécdota pasada entre amigos.",
      lines: [
        { who: "Pedro", target: "Il m'est arrivé un truc marrant la semaine dernière.", es: "Me ocurrió una cosa divertida la semana pasada." },
        { who: "Inês", target: "Raconte ! Qu'est-ce qui s'est passé ?", es: "¡Cuenta! ¿Qué ocurrió?" },
        { who: "Pedro", target: "Pendant que j'allais au travail, je me suis rendu compte que j'avais deux chaussures différentes !", es: "Mientras iba al trabajo, ¡me di cuenta de que llevaba dos zapatos diferentes!" },
        { who: "Inês", target: "C'est pas vrai ! Tu as fait quoi ?", es: "¡No me lo puedo creer! ¿Qué hiciste?" },
        { who: "Pedro", target: "Heureusement que j'habitais tout près. Je suis rentré en courant !", es: "¡Menos mal que vivía muy cerca. ¡Volví corriendo!" }
      ],
      questions: [
        { q: "¿Cuándo ocurrió la historia?", options: ["Hier", "La semaine dernière", "Il y a un mois"], answer: 1 },
        { q: "¿De qué se dio cuenta Pedro?", options: ["Perdió las llaves", "Llevaba zapatos distintos", "Olvidó la mochila"], answer: 1 },
        { q: "¿Por qué dice heureusement (menos mal)?", options: ["J'habitais tout près (vivía cerca)", "Tomó un taxi", "Se cambió allí"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m46-cl1", before: "Je me suis ", blank: "rendu", after: " compte de mon erreur.", es: "Me di cuenta de mi error.", mode: "type" },
      { id: "fr-m46-cl2", before: "Tout à ", blank: "coup", after: ", les lumières se sont éteintes.", es: "De repente, las luces se apagaron.", mode: "select", options: ["coup", "jour", "soir", "temps"] }
    ],
    falseFriends: [
      { es: "marrant", esMeaning: "divertido", target: "marrant", targetMeaning: "divertido/gracioso en lenguaje coloquial (no tiene relación con mareo)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 47 — Planes de Futuro e Hipótesis                      */
  /* ============================================================ */
  pt.push({
    id: "pt-m47", num: 47, title: "Planos e futuro", subtitle: "Futuro do conjuntivo, hipóteses e projetos",
    cards: [
      { id: "pt-m47-c01", es: "si pudiera", target: "se eu pudesse", phon: "se eu pu-DES-se" },
      { id: "pt-m47-c02", es: "cuando tenga tiempo", target: "quando tiver tempo", phon: "KUAN-du ti-VER TEN-pu" },
      { id: "pt-m47-c03", es: "si tuviera dinero", target: "se tivesse dinheiro", phon: "se ti-VES-se di-ÑEI-ru" },
      { id: "pt-m47-c04", es: "tal vez / quizás", target: "talvez / quiçá", phon: "tal-VEZ" },
      { id: "pt-m47-c05", es: "es probable que", target: "é provável que", phon: "e pru-VA-vel ke" },
      { id: "pt-m47-c06", es: "tengo la intención de", target: "tenho intenção de", phon: "TEN-ñu in-ten-SÃU de" },
      { id: "pt-m47-c07", es: "en el futuro", target: "no futuro", phon: "no fu-TU-ru" },
      { id: "pt-m47-c08", es: "ojalá / ojalá que", target: "oxalá / quem me dera", phon: "o-sha-LA" },
      { id: "pt-m47-c09", es: "si todo va bien", target: "se tudo correr bem", phon: "se TU-du ku-RRER bãi" },
      { id: "pt-m47-c10", es: "al terminar", target: "quando acabar", phon: "KUAN-du a-ka-BAR" }
    ],
    dialogue: {
      title: "Planear o futuro", context: "Hipótesis y planes personales para los próximos años.",
      lines: [
        { who: "Marta", target: "O que vais fazer quando acabares o curso?", es: "¿Qué vas a hacer cuando me termines la carrera?" },
        { who: "Rui", target: "Se tudo correr bem, tenho intenção de ir trabalhar para o estrangeiro.", es: "Si todo va bien, tengo intención de ir a trabajar al extranjero." },
        { who: "Marta", target: "Que bom! Quem me dera poder ir contigo.", es: "¡Qué bien! Ojalá pudiera ir contigo." },
        { who: "Rui", target: "Se tiveres oportunidade, devias candidatar-te também.", es: "Si tienes oportunidad, deberías postularte también." },
        { who: "Marta", target: "Talvez o faça no próximo ano.", es: "Tal vez lo haga el próximo año." }
      ],
      questions: [
        { q: "¿Cuándo planea viajar Rui?", options: ["Quando acabar o curso", "Mañana mismo", "Nunca"], answer: 0 },
        { q: "¿A dónde le gustaría ir a trabajar?", options: ["Para o estrangeiro", "En su pueblo", "En la universidad"], answer: 0 },
        { q: "¿Qué expresa la frase 'quem me dera'?", options: ["Un deseo / ojalá", "Rechazo", "Duda total"], answer: 0 }
      ]
    },
    cloze: [
      { id: "pt-m47-cl1", before: "Quando ", blank: "tiver", after: " tempo, vou visitar-te.", es: "Cuando tenga tiempo, iré a visitarte.", mode: "type" },
      { id: "pt-m47-cl2", before: "Se tudo ", blank: "correr", after: " bem, viajamos no verão.", es: "Si todo va bien, viajamos en verano.", mode: "select", options: ["correr", "andar", "falar", "dizer"] }
    ],
    falseFriends: [
      { es: "quem me dera", esMeaning: "ojalá / quién me diera", target: "quem me dera", targetMeaning: "expresión fija equivalente a 'ojalá pudiera'" }
    ]
  });

  fr.push({
    id: "fr-m47", num: 47, title: "Projets et avenir", subtitle: "Condicionales, hipótesis y planes futuros",
    cards: [
      { id: "fr-m47-c01", es: "si pudiera", target: "si je pouvais", phon: "si shə pu-VÉ" },
      { id: "fr-m47-c02", es: "cuando tenga tiempo", target: "quand j'aurai du temps", phon: "kan zho-RÉ dü tan" },
      { id: "fr-m47-c03", es: "si tuviera dinero", target: "si j'avais de l'argent", phon: "si zha-VÉ də lar-ZHAN" },
      { id: "fr-m47-c04", es: "tal vez / quizás", target: "peut-être", phon: "pö-TETR" },
      { id: "fr-m47-c05", es: "es probable que", target: "il est probable que", phon: "il é pro-BABL kə" },
      { id: "fr-m47-c06", es: "tengo la intención de", target: "j'ai l'intention de", phon: "zhé lan-tan-SION də" },
      { id: "fr-m47-c07", es: "en el futuro", target: "à l'avenir / dans le futur", phon: "a la-və-NIR" },
      { id: "fr-m47-c08", es: "¡ojalá!", target: "pourvu que... ! / si seulement !", phon: "pur-VÜ kə" },
      { id: "fr-m47-c09", es: "si todo va bien", target: "si tout va bien", phon: "si tu va bien" },
      { id: "fr-m47-c10", es: "al terminar", target: "une fois terminé", phon: "ün fua ter-mi-NÉ" }
    ],
    dialogue: {
      title: "Planifier l'avenir", context: "Metas profesionales e hipótesis a futuro.",
      lines: [
        { who: "Marta", target: "Qu'est-ce que tu feras quand tu auras fini tes études ?", es: "¿Qué harás cuando hayas terminado tus estudios?" },
        { who: "Rui", target: "Si tout va bien, j'ai l'intention de partir travailler à l'étranger.", es: "Si todo va bien, tengo intención de irme a trabajar al extranjero." },
        { who: "Marta", target: "C'est génial ! Si seulement je pouvais venir avec toi !", es: "¡Es genial! ¡Si tan solo pudiera ir contigo!" },
        { who: "Rui", target: "Si tu en as l'occasion, tu devrais postuler aussi.", es: "Si tienes la oportunidad, deberías postularte también." },
        { who: "Marta", target: "Peut-être que je le ferai l'année prochaine.", es: "Tal vez lo haga el año que viene." }
      ],
      questions: [
        { q: "¿Cuándo se plantea Rui marcharse?", options: ["Quand il aura fini ses études", "Inmediatamente", "Nunca"], answer: 0 },
        { q: "¿Cuál es su plan?", options: ["Trabajar en su ciudad", "Partir à l'étranger", "Estudiar otra carrera"], answer: 1 },
        { q: "¿Qué significa 'peut-être'?", options: ["Seguro", "Tal vez / quizás", "Nunca"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m47-cl1", before: "Si tout va ", blank: "bien", after: ", je voyagerai cet été.", es: "Si todo va bien, viajaré este verano.", mode: "type" },
      { id: "fr-m47-cl2", before: "J'ai l'intention ", blank: "de", after: " changer de travail.", es: "Tengo intención de cambiar de trabajo.", mode: "select", options: ["de", "pour", "sans", "avec"] }
    ],
    falseFriends: [
      { es: "pourvu que", esMeaning: "ojalá que", target: "pourvu que", targetMeaning: "expresión que introduce un deseo ('con tal de que' u 'ojalá')" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 48 — Gastronomía y Recetas                            */
  /* ============================================================ */
  pt.push({
    id: "pt-m48", num: 48, title: "Culinária e receitas", subtitle: "Ingredientes, modos de preparação e cozinha",
    cards: [
      { id: "pt-m48-c01", es: "la receta", target: "a receita", phon: "a re-CEI-ta" },
      { id: "pt-m48-c02", es: "el diente de ajo", target: "o dente de alho", phon: "u DEN-te de A-lyu" },
      { id: "pt-m48-c03", es: "el aceite de oliva", target: "o azeite", phon: "u a-ZEI-te" },
      { id: "pt-m48-c04", es: "picar a cebola", target: "picar a cebola", phon: "pi-KAR a se-BO-la" },
      { id: "pt-m48-c05", es: "hervir", target: "ferver", phon: "fer-VER" },
      { id: "pt-m48-c06", es: "añadir una pizca de sal", target: "adicionar uma pitada de sal", phon: "a-di-si-o-NAR U-ma pi-TA-da" },
      { id: "pt-m48-c07", es: "freír", target: "fritar", phon: "fri-TAR" },
      { id: "pt-m48-c08", es: "asar al horno", target: "assar no forno", phon: "a-SAR no FOR-nu" },
      { id: "pt-m48-c09", es: "el bacalao", target: "o bacalhau", phon: "u ba-ka-LYAW" },
      { id: "pt-m48-c10", es: "mezclar bem", target: "misturar bem", phon: "mis-tu-RAR bãi" }
    ],
    dialogue: {
      title: "Cozinhar bacalhau com natas", context: "Preparación de una receta tradicional en la cocina.",
      lines: [
        { who: "Cozinheiro", target: "Hoje vamos preparar uma receita de bacalhau tradicional.", es: "Hoy vamos a preparar una receta de bacalao tradicional." },
        { who: "Ajudante", target: "O que preciso de fazer primeiro?", es: "¿Qué necesito hacer primero?" },
        { who: "Cozinheiro", target: "Pica dois dentes de alho e uma cebola, e refoga tudo em azeite.", es: "Pica dos dientes de ajo y una cebolla, y sofríe todo en aceite de oliva." },
        { who: "Ajudante", target: "E depois adiciono o bacalhau desfiado?", es: "¿Y después añado el bacalao desmigado?" },
        { who: "Cozinheiro", target: "Sim, e junta uma pitada de sal e pimenta antes de ir ao forno.", es: "Sí, y añade una pizca de sal y pimienta antes de ir al horno." }
      ],
      questions: [
        { q: "¿Qué plato tradicional van a cocinar?", options: ["Sardinhas assadas", "Bacalhau com natas / tradicional", "Caldo verde"], answer: 1 },
        { q: "¿Qué condimentos se sofrien primero en azeite?", options: ["Alho e cebola", "Patatas", "Tomate"], answer: 0 },
        { q: "¿Cómo debe cocinarse al final?", options: ["Frito", "No forno (al horno)", "Crudo"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m48-cl1", before: "Refoga a cebola com um fio de ", blank: "azeite", after: ".", es: "Sofríe la cebolla con un chorro de aceite de oliva.", mode: "type" },
      { id: "pt-m48-cl2", before: "Adiciona uma ", blank: "pitada", after: " de sal ao preparado.", es: "Añade una pizca de sal a la preparación.", mode: "select", options: ["pitada", "colher", "garrafa", "chávena"] }
    ],
    falseFriends: [
      { es: "azeite", esMeaning: "aceite de oliva", target: "azeite", targetMeaning: "aceite de oliva exclusivamente (otros aceites son 'óleo')" }
    ]
  });

  fr.push({
    id: "fr-m48", num: 48, title: "Cuisine et recettes", subtitle: "Ingredientes, modos de preparación y cocina",
    cards: [
      { id: "fr-m48-c01", es: "la receta", target: "la recette", phon: "la rə-SET" },
      { id: "fr-m48-c02", es: "el diente de ajo", target: "la gousse d'ail", phon: "la gus da-i" },
      { id: "fr-m48-c03", es: "el aceite de oliva", target: "l'huile d'olive", phon: "luil do-LIV" },
      { id: "fr-m48-c04", es: "picar la cebolla", target: "émincer l'oignon", phon: "e-man-SÉ loi-NYON" },
      { id: "fr-m48-c05", es: "hervir", target: "bouillir / faire bouillir", phon: "bu-YIR" },
      { id: "fr-m48-c06", es: "una pizca de sal", target: "une pincée de sel", phon: "ün pan-SÉ də sel" },
      { id: "fr-m48-c07", es: "freír", target: "faire frire", phon: "fér frir" },
      { id: "fr-m48-c08", es: "hornear", target: "faire cuire au four", phon: "fér kuir o fur" },
      { id: "fr-m48-c09", es: "mezclar", target: "mélanger", phon: "me-lan-ZHÉ" },
      { id: "fr-m48-c10", es: "añadir", target: "ajouter", phon: "a-zhu-TÉ" }
    ],
    dialogue: {
      title: "Préparer une recette", context: "Elaboración de una receta en la cocina.",
      lines: [
        { who: "Cuisinier", target: "Aujourd'hui nous allons préparer une quiche lorraine.", es: "Hoy vamos a preparar un quiche lorraine." },
        { who: "Commis", target: "Par quoi est-ce qu'on commence ?", es: "¿Por qué empezamos?" },
        { who: "Cuisinier", target: "Émince un oignon et fais-le revenir avec un peu d'huile d'olive.", es: "Pica una cebolla y sofríela con un poco de aceite de oliva." },
        { who: "Commis", target: "J'ajoute une pincée de sel ?", es: "¿Añado una pizca de sal?" },
        { who: "Cuisinier", target: "Oui, puis mélange les œufs et la crème avant d'enfourner.", es: "Sí, luego mezcla los huevos y la nata antes de meter al horno." }
      ],
      questions: [
        { q: "¿Qué receta van a preparar?", options: ["Une quiche lorraine", "Una sopa de cebolla", "Un crep"], answer: 0 },
        { q: "¿Con qué se sofríe la cebolla?", options: ["Huile d'olive", "Mantequilla sola", "Agua"], answer: 0 },
        { q: "¿Qué ingrediente se mide con 'une pincée'?", options: ["Le sel (sal)", "El agua", "La harina"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m48-cl1", before: "Ajoutez une ", blank: "pincée", after: " de poivre.", es: "Añada una pizca de pimienta.", mode: "type" },
      { id: "fr-m48-cl2", before: "Faites cuire le plat au ", blank: "four", after: " pendant trente minutes.", es: "Cuela el plato al horno durante treinta minutos.", mode: "select", options: ["four", "jour", "tour", "mousse"] }
    ],
    falseFriends: [
      { es: "mélanger", esMeaning: "mezclar", target: "mélanger", targetMeaning: "mezclar ingredientes o elementos (no tiene relación con milanesa)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 49 — Negociación y Compras de Valor                  */
  /* ============================================================ */
  pt.push({
    id: "pt-m49", num: 49, title: "Negociação e contratos", subtitle: "Preços, condições, descontos e acordos comerciais",
    cards: [
      { id: "pt-m49-c01", es: "el descuento", target: "o desconto", phon: "u des-KON-tu" },
      { id: "pt-m49-c02", es: "negociar o preço", target: "negociar o preço", phon: "ne-gu-si-AR u PRE-su" },
      { id: "pt-m49-c03", es: "las condiciones de pago", target: "as condições de pagamento", phon: "ash kon-di-SÕISH" },
      { id: "pt-m49-c04", es: "el acuerdo", target: "o acordo", phon: "u a-KOR-du" },
      { id: "pt-m49-c05", es: "a plazos", target: "a prestações", phon: "a pres-ta-SÕISH" },
      { id: "pt-m49-c06", es: "la garantía", target: "a garantia", phon: "a ga-ran-TI-a" },
      { id: "pt-m49-c07", es: "la factura", target: "a fatura", phon: "a fa-TU-ra" },
      { id: "pt-m49-c08", es: "pago al contado", target: "pagamento a pronto / a pronto pagamento", phon: "a PRON-tu" },
      { id: "pt-m49-c09", es: "firmar o contrato", target: "assinar o contrato", phon: "a-si-NAR u kon-TRA-tu" },
      { id: "pt-m49-c10", es: "el proveedor", target: "o fornecedor", phon: "u for-ne-se-DOR" }
    ],
    dialogue: {
      title: "Negociar a compra de equipamento", context: "Acuerdo comercial de compra de material.",
      lines: [
        { who: "Vendedor", target: "O valor total do equipamento é de dois mil euros.", es: "El valor total del equipamiento es de dos mil euros." },
        { who: "Cliente", target: "Se fizer o pagamento a pronto, oferece algum desconto?", es: "Si hago el pago al contado, ¿ofrece algún descuento?" },
        { who: "Vendedor", target: "Posso fazer um desconto de dez por cento e dar dois anos de garantia.", es: "Puedo hacer un descuento del diez por ciento y dar dos años de garantía." },
        { who: "Cliente", target: "Parece-me um bom acordo. E sobre a fatura?", es: "Me parece un buen acuerdo. ¿Y sobre la factura?" },
        { who: "Vendedor", target: "Enviarei a fatura por e-mail assim que assinar o contrato.", es: "Enviaré la factura por e-mail tan pronto como firme el contrato." }
      ],
      questions: [
        { q: "¿Cuánto cuesta inicialmente el equipamiento?", options: ["1000€", "2000€", "3000€"], answer: 1 },
        { q: "¿Qué descuento ofrecen por pronto pago?", options: ["5%", "10%", "20%"], answer: 1 },
        { q: "¿Cuántos años de garantía le otorgan?", options: ["Un año", "Dois anos", "Cinco años"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m49-cl1", before: "Se pagar a pronto, tenho direito a um ", blank: "desconto", after: ".", es: "Si pago al contado, tengo derecho a un descuento.", mode: "type" },
      { id: "pt-m49-cl2", before: "Emita a ", blank: "fatura", after: " com o meu número de contribuinte.", es: "Emita la factura con mi número de contribuyente.", mode: "select", options: ["fatura", "pintura", "altura", "cultura"] }
    ],
    falseFriends: [
      { es: "a pronto", esMeaning: "al contado", target: "a pronto pagamento", targetMeaning: "pago al contado e inmediato (no 'pronto' de tiempo breve)" }
    ]
  });

  fr.push({
    id: "fr-m49", num: 49, title: "Négociation et achats", subtitle: "Precios, condiciones, descuentos y contratos",
    cards: [
      { id: "fr-m49-c01", es: "el descuento", target: "la réduction / la remise", phon: "la re-duk-SION" },
      { id: "fr-m49-c02", es: "negociar el precio", target: "négocier le prix", phon: "ne-go-SIÉ" },
      { id: "fr-m49-c03", es: "las condiciones de pago", target: "les conditions de paiement", phon: "lé kon-di-SION" },
      { id: "fr-m49-c04", es: "el acuerdo", target: "l'accord", phon: "la-KOR" },
      { id: "fr-m49-c05", es: "a plazos", target: "en plusieurs fois / à tempérament", phon: "an plü-zi-ÖR fua" },
      { id: "fr-m49-c06", es: "la garantía", target: "la garantie", phon: "la ga-ran-TI" },
      { id: "fr-m49-c07", es: "la factura", target: "la facture", phon: "la fak-TÜR" },
      { id: "fr-m49-c08", es: "pago al contado", target: "le paiement au comptant", phon: "lə pe-MAN o kon-TAN" },
      { id: "fr-m49-c09", es: "firmar el contrato", target: "signer le contrat", phon: "si-NYÉ lə kon-TRA" },
      { id: "fr-m49-c10", es: "el proveedor", target: "le fournisseur", phon: "lə fur-ni-SÖR" }
    ],
    dialogue: {
      title: "Négocier un contrat commercial", context: "Acuerdo de condiciones de venta.",
      lines: [
        { who: "Vendeur", target: "Le montant total du matériel est de deux mille euros.", es: "El importe total del material es de dos mil euros." },
        { who: "Acheteur", target: "Si je paie au comptant, vous accordez une remise ?", es: "Si pago al contado, ¿concede un descuento?" },
        { who: "Vendeur", target: "Je peux vous faire une remise de dix pour cent et deux ans de garantie.", es: "Puedo hacerle un descuento del diez por ciento y dos años de garantía." },
        { who: "Acheteur", target: "C'est un bon accord. Quand recevrai-je la facture ?", es: "Es un buen acuerdo. ¿Cuándo recibiré la factura?" },
        { who: "Vendeur", target: "Dès que vous aurez signé le contrat.", es: "Tan pronto como haya firmado el contrato." }
      ],
      questions: [
        { q: "¿Cuánto cuesta el matériel en total?", options: ["1000€", "2000€", "2500€"], answer: 1 },
        { q: "¿Qué descuento obtienen al pagar au comptant?", options: ["5%", "10%", "15%"], answer: 1 },
        { q: "¿Cuándo se emite la factura?", options: ["Dès la signature du contrat", "El mes que viene", "Nunca"], answer: 0 }
      ]
    },
    cloze: [
      { id: "fr-m49-cl1", before: "Si vous payez au comptant, vous aurez une ", blank: "remise", after: ".", es: "Si paga al contado, tendrá un descuento.", mode: "type" },
      { id: "fr-m49-cl2", before: "N'oubliez pas d'exiger la ", blank: "facture", after: " d'achat.", es: "No olvide exigir la factura de compra.", mode: "select", options: ["facture", "lecture", "voiture", "nature"] }
    ],
    falseFriends: [
      { es: "remise", esMeaning: "descuento", target: "remise", targetMeaning: "descuento o rebaja comercial (no significa remesa postal)" }
    ]
  });

  /* ============================================================ */
  /* MÓDULO 50 — Balance Final y Despedida                      */
  /* ============================================================ */
  pt.push({
    id: "pt-m50", num: 50, title: "Balanço e despedida", subtitle: "Revisão do curso, felicitações e despedidas finais",
    cards: [
      { id: "pt-m50-c01", es: "el progreso", target: "o progresso", phon: "u pru-GRES-su" },
      { id: "pt-m50-c02", es: "completar o curso", target: "concluir o curso", phon: "kon-KLUIR u KUR-su" },
      { id: "pt-m50-c03", es: "¡enhorabuena!", target: "parabéns! / muitos parabéns!", phon: "pa-ra-BENS" },
      { id: "pt-m50-c04", es: "el nivel avanzado", target: "o nível avançado", phon: "u NI-vel a-van-SA-du" },
      { id: "pt-m50-c05", es: "seguir practicando", target: "continuar a praticar", phon: "kon-ti-nu-AR a pra-ti-KAR" },
      { id: "pt-m50-c06", es: "la fluidez", target: "a fluidez", phon: "a flu-i-DEZ" },
      { id: "pt-m50-c07", es: "hasta pronto", target: "até breve", phon: "a-TE BRE-ve" },
      { id: "pt-m50-c08", es: "buen viaje / éxito", target: "bom sucesso / boa viagem", phon: "bon su-SES-su" },
      { id: "pt-m50-c09", es: "un logro", target: "uma conquista", phon: "U-ma kon-KIS-ta" },
      { id: "pt-m50-c10", es: "mantener el contacto", target: "manter o contacto", phon: "man-TER u kon-TAK-tu" }
    ],
    dialogue: {
      title: "Conclusão do percurso de aprendizagem", context: "Reflexión final sobre el aprendizaje realizado.",
      lines: [
        { who: "Professor", target: "Muitos parabéns! Concluíste todos os cinquenta módulos da bitácora.", es: "¡Muchas felicidades! Concluiste todos los cincuenta módulos de la bitácora." },
        { who: "Aluno", target: "Muito obrigado! Notei um grande progresso no meu português.", es: "¡Muchas gracias! Noté un gran progreso en mi portugués." },
        { who: "Professor", target: "Agora o mais importante é continuar a praticar diariamente.", es: "Ahora lo más importante es continuar practicando a diario." },
        { who: "Aluno", target: "Com certeza. Ganhei muita confiança para falar no dia a dia.", es: "Por supuesto. Gané mucha confianza para hablar en el día a día." },
        { who: "Professor", target: "Desejo-te um bom sucesso na tua jornada. Até breve!", es: "Te deseo mucho éxito en tu jornada. ¡Hasta pronto!" }
      ],
      questions: [
        { q: "¿Cuántos módulos ha completado el estudiante?", options: ["25", "50", "100"], answer: 1 },
        { q: "¿Qué recomendación final da el profesor?", options: ["Continuar a praticar diariamente", "Dejar de estudiar", "Repetir todo"], answer: 0 },
        { q: "¿Cómo se despide el profesor?", options: ["Adeus para sempre", "Até breve / bom sucesso", "Boa noite"], answer: 1 }
      ]
    },
    cloze: [
      { id: "pt-m50-cl1", before: "Muitos ", blank: "parabéns", after: " por concluíres esta etapa!", es: "¡Muchas felicidades por concluir esta etapa!", mode: "type" },
      { id: "pt-m50-cl2", before: "É fundamental continuar a ", blank: "praticar", after: " todos os dias.", es: "Es fundamental continuar practicando todos los días.", mode: "select", options: ["praticar", "esquecer", "parar", "falar"] }
    ],
    falseFriends: [
      { es: "sucesso", esMeaning: "éxito", target: "sucesso", targetMeaning: "éxito profesional o personal (en español 'suceso' es un acontecimiento)" }
    ]
  });

  fr.push({
    id: "fr-m50", num: 50, title: "Bilan et adieux", subtitle: "Revisión final, felicitaciones y despedida",
    cards: [
      { id: "fr-m50-c01", es: "el progreso", target: "le progrès", phon: "lə pro-GRÉ" },
      { id: "fr-m50-c02", es: "completar el curso", target: "terminer le parcours / le cours", phon: "ter-mi-NÉ" },
      { id: "fr-m50-c03", es: "¡enhorabuena!", target: "félicitations ! / bravo !", phon: "fe-li-si-ta-SION" },
      { id: "fr-m50-c04", es: "el nivel avanzado", target: "le niveau avancé", phon: "lə ni-VO a-van-SÉ" },
      { id: "fr-m50-c05", es: "seguir practicando", target: "continuer à pratiquer", phon: "kon-ti-nü-É a pra-ti-KÉ" },
      { id: "fr-m50-c06", es: "la fluidez", target: "la fluidité", phon: "la flü-i-di-TÉ" },
      { id: "fr-m50-c07", es: "hasta pronto", target: "à bientôt", phon: "a bi-an-TO" },
      { id: "fr-m50-c08", es: "mucho éxito", target: "plein de succès / bonne continuation", phon: "bon kon-ti-nü-a-SION" },
      { id: "fr-m50-c09", es: "un logro", target: "une réussite / un accomplissement", phon: "ün re-ü-SIT" },
      { id: "fr-m50-c10", es: "mantener el contacto", target: "garder le contact", phon: "gar-DÉ lə kon-TAKT" }
    ],
    dialogue: {
      title: "Bilan de fin de parcours", context: "Evaluación y despedida tras completar el plan de aprendizaje.",
      lines: [
        { who: "Professeur", target: "Toutes mes félicitations ! Vous avez terminé les cinquante modules.", es: "¡Todas mis felicitaciones! Ha terminado los cincuenta módulos." },
        { who: "Élève", target: "Merci beaucoup ! J'ai fait d'immenses progrès en français.", es: "¡Muchas gracias! He hecho enormes progresos en francés." },
        { who: "Professeur", target: "Le plus important maintenant est de continuer à pratiquer régulièrement.", es: "Lo más importante ahora es continuar practicando regularmente." },
        { who: "Élève", target: "Absolument. J'ai gagné en confiance pour m'exprimer.", es: "Absolutamente. Gané confianza para expresarme." },
        { who: "Professeur", target: "Je vous souhaite une excellente continuation. À bientôt !", es: "Le deseo una excelente continuación. ¡Hasta pronto!" }
      ],
      questions: [
        { q: "¿Cuántos módulos se completaron?", options: ["25", "50", "60"], answer: 1 },
        { q: "¿Qué recomienda el profesor para el futuro?", options: ["Continuer à pratiquer régulièrement", "No hablar más", "Solo leer"], answer: 0 },
        { q: "¿Qué expresión de despedida y buenos deseos utiliza?", options: ["Adieu", "Bonne continuation / À bientôt", "Au revoir jamais"], answer: 1 }
      ]
    },
    cloze: [
      { id: "fr-m50-cl1", before: "Toutes mes ", blank: "félicitations", after: " pour votre réussite !", es: "¡Todas mis felicitaciones por su éxito!", mode: "type" },
      { id: "fr-m50-cl2", before: "Je vous souhaite une bonne ", blank: "continuation", after: ".", es: "Le deseo una buena continuación.", mode: "select", options: ["continuation", "préparation", "réservation", "hésitation"] }
    ],
    falseFriends: [
      { es: "succès", esMeaning: "éxito", target: "succès", targetMeaning: "éxito o logro (no un suceso acontecido)" }
    ]
  });

 
  /* ============================================================ */
  /* MÓDULO 2 — Öffentliche Verkehrsmittel                         */
  /* ============================================================ */
  de.push({
    id: "de-m2", num: 2, title: "Öffentliche Verkehrsmittel", subtitle: "Transporte público",
    cards: [
      { id: "de-m2-c01", es: "el autobús", target: "der Bus", phon: "der bus" },
      { id: "de-m2-c02", es: "la parada", target: "die Haltestelle", phon: "di HAL-te-shte-le" },
      { id: "de-m2-c03", es: "el billete", target: "die Fahrkarte", phon: "di FAR-kar-te" },
      { id: "de-m2-c04", es: "el metro", target: "die U-Bahn", phon: "di U-ban" },
      { id: "de-m2-c05", es: "la estación", target: "der Bahnhof", phon: "der BAN-hof" },
      { id: "de-m2-c06", es: "¿dónde está la parada?", target: "Wo ist die Haltestelle?", phon: "vo ist di HAL-te-shte-le" },
      { id: "de-m2-c07", es: "¿este autobús va a...?", target: "Fährt dieser Bus nach...?", phon: "fert DI-zer bus naj" },
      { id: "de-m2-c08", es: "quiero ir a...", target: "Ich möchte nach ... fahren", phon: "ij MÖSH-te naj ... FA-ren" },
      { id: "de-m2-c09", es: "¿cuánto cuesta el billete?", target: "Was kostet die Fahrkarte?", phon: "vas KOS-tet di FAR-kar-te" },
      { id: "de-m2-c10", es: "un billete, por favor", target: "Eine Fahrkarte, bitte", phon: "AI-ne FAR-kar-te BI-te" },
      { id: "de-m2-c11", es: "¿a qué hora sale?", target: "Wann fährt er ab?", phon: "van fert er ap" },
      { id: "de-m2-c12", es: "¿a qué hora llega?", target: "Wann kommt er an?", phon: "van komt er an" },
      { id: "de-m2-c13", es: "próxima parada", target: "nächste Haltestelle", phon: "NEsh-te HAL-te-shte-le" },
      { id: "de-m2-c14", es: "¿está libre este asiento?", target: "Ist dieser Platz frei?", phon: "ist DI-zer plats frai" },
      { id: "de-m2-c15", es: "con permiso", target: "Entschuldigung", phon: "ent-SHUL-di-gung" },
      { id: "de-m2-c16", es: "bajarse", target: "aussteigen", phon: "AUS-shtai-guen" },
      { id: "de-m2-c17", es: "subir (al transporte)", target: "einsteigen", phon: "AIN-shtai-guen" },
      { id: "de-m2-c18", es: "está lejos", target: "Es ist weit", phon: "es ist vait" },
      { id: "de-m2-c19", es: "está cerca", target: "Es ist nah", phon: "es ist na" },
      { id: "de-m2-c20", es: "todo recto", target: "immer geradeaus", phon: "I-mer ge-RA-de-aus" },
      { id: "de-m2-c21", es: "tarjeta/billete de transporte", target: "das Ticket", phon: "das TI-ket" },
      { id: "de-m2-c22", es: "ida y vuelta", target: "hin und zurück", phon: "hin unt tsu-RÜK" }
    ],
    dialogue: {
      title: "An der Bushaltestelle", context: "Lena pregunta si el autobús va al centro y compra el billete.",
      lines: [
        { who: "Lena", target: "Entschuldigung, fährt dieser Bus zum Zentrum?", es: "Disculpe, ¿este autobús va al centro?" },
        { who: "Fahrer", target: "Ja, das stimmt. Zwei Euro, bitte.", es: "Sí, así es. Dos euros, por favor." },
        { who: "Lena", target: "Hier bitte. An welcher Haltestelle muss ich für den Bahnhof aussteigen?", es: "Aquí tiene. ¿En qué parada debo bajar para la estación?" },
        { who: "Fahrer", target: "Das ist die vierte Haltestelle, ich sage Ihnen Bescheid.", es: "Es la cuarta parada, yo le aviso." },
        { who: "Lena", target: "Vielen Dank!", es: "¡Muchas gracias!" },
        { who: "Fahrer", target: "Nächste Haltestelle, das ist Ihre.", es: "Próxima parada, ya es la suya." },
        { who: "Lena", target: "Entschuldigung, ich steige hier aus.", es: "Con permiso, me bajo aquí." }
      ],
      questions: [
        { q: "¿Cuánto pagó Lena por el billete?", options: ["Un euro", "Dos euros", "Tres euros"], answer: 1 },
        { q: "¿A dónde va Lena?", options: ["Al aeropuerto", "Al centro", "A la playa"], answer: 1 },
        { q: "¿Cómo sabe en qué parada bajar?", options: ["Lo ve en un mapa", "El conductor le avisa", "Pregunta a otro pasajero"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m2-cl1", before: "Fährt dieser Bus ", blank: "zum", after: " Zentrum?", es: "¿Este autobús va al centro?", mode: "select", options: ["zum", "zur", "zu", "nach"] },
      { id: "de-m2-cl2", before: "Was ", blank: "kostet", after: " die Fahrkarte?", es: "¿Cuánto cuesta el billete?", mode: "type" },
      { id: "de-m2-cl3", before: "Der Bahnhof ist sehr ", blank: "nah", after: ".", es: "La estación está muy cerca.", mode: "select", options: ["nah", "weit", "groß", "früh"] },
      { id: "de-m2-cl4", before: "Ich steige hier ", blank: "aus", after: ".", es: "Me bajo aquí.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 3 — Nach dem Weg fragen                                 */
  /* ============================================================ */
  de.push({
    id: "de-m3", num: 3, title: "Nach dem Weg fragen", subtitle: "Preguntar direcciones y orientarse en la calle",
    cards: [
      { id: "de-m3-c01", es: "disculpe", target: "Entschuldigung", phon: "ent-SHUL-di-gung" },
      { id: "de-m3-c02", es: "¿dónde está...?", target: "Wo ist...?", phon: "vo ist" },
      { id: "de-m3-c03", es: "la calle", target: "die Straße", phon: "di SHTRA-se" },
      { id: "de-m3-c04", es: "la plaza", target: "der Platz", phon: "der plats" },
      { id: "de-m3-c05", es: "a la derecha", target: "rechts", phon: "rejts" },
      { id: "de-m3-c06", es: "a la izquierda", target: "links", phon: "links" },
      { id: "de-m3-c07", es: "todo recto", target: "geradeaus", phon: "ge-RA-de-aus" },
      { id: "de-m3-c08", es: "cerca de aquí", target: "in der Nähe", phon: "in der NE-e" },
      { id: "de-m3-c09", es: "lejos de aquí", target: "weit von hier", phon: "vait fon hir" },
      { id: "de-m3-c10", es: "la esquina", target: "die Ecke", phon: "di E-ke" },
      { id: "de-m3-c11", es: "el semáforo", target: "die Ampel", phon: "di AM-pel" },
      { id: "de-m3-c12", es: "cruzar la calle", target: "die Straße überqueren", phon: "di SHTRA-se ü-ber-KVE-ren" },
      { id: "de-m3-c13", es: "¿me puede ayudar?", target: "Können Sie mir helfen?", phon: "KÖ-nen zi mir HEL-fen" },
      { id: "de-m3-c14", es: "estoy perdido/a", target: "Ich habe mich verlaufen", phon: "ij HA-be mij fer-LAU-fen" },
      { id: "de-m3-c15", es: "el mapa", target: "die Karte", phon: "di KAR-te" },
      { id: "de-m3-c16", es: "girar", target: "abbiegen", phon: "AP-bi-guen" },
      { id: "de-m3-c17", es: "seguir", target: "weitergehen", phon: "VAI-ter-ge-en" },
      { id: "de-m3-c18", es: "a pie", target: "zu Fuß", phon: "tsu fus" },
      { id: "de-m3-c19", es: "¿está lejos a pie?", target: "Ist es weit zu Fuß?", phon: "ist es vait tsu fus" },
      { id: "de-m3-c20", es: "gracias por su ayuda", target: "Danke für Ihre Hilfe", phon: "DAN-ke für I-re HIL-fe" }
    ],
    dialogue: {
      title: "Auf der Suche nach dem Museum", context: "Tom pregunta a una desconocida cómo llegar al museo.",
      lines: [
        { who: "Tom", target: "Entschuldigung, wissen Sie, wo das Museum ist?", es: "Disculpe, ¿sabe dónde está el museo?" },
        { who: "Frau Schmidt", target: "Ja, gehen Sie hier geradeaus und dann rechts an der Ampel.", es: "Sí, vaya recto por aquí y luego a la derecha en el semáforo." },
        { who: "Tom", target: "Ist es weit von hier?", es: "¿Está lejos de aquí?" },
        { who: "Frau Schmidt", target: "Nein, es ist ganz in der Nähe, fünf Minuten zu Fuß.", es: "No, está muy cerca, cinco minutos a pie." },
        { who: "Tom", target: "Muss ich die Straße überqueren?", es: "¿Debo cruzar la calle?" },
        { who: "Frau Schmidt", target: "Ja, an der Ecke, und dann sehen Sie es schon.", es: "Sí, en la esquina, y ya lo verá." },
        { who: "Tom", target: "Vielen Dank für Ihre Hilfe!", es: "¡Muchas gracias por su ayuda!" }
      ],
      questions: [
        { q: "¿Qué debe hacer Tom primero?", options: ["Girar a la izquierda", "Seguir recto", "Tomar el autobús"], answer: 1 },
        { q: "¿Está lejos el museo?", options: ["Sí, muy lejos", "No, está cerca", "No lo sabe"], answer: 1 },
        { q: "¿Debe cruzar la calle?", options: ["No", "Sí, en la esquina", "Solo si llueve"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m3-cl1", before: "Gehen Sie hier ", blank: "geradeaus", after: ".", es: "Vaya recto por aquí.", mode: "type" },
      { id: "de-m3-cl2", before: "Ist es ", blank: "weit", after: " von hier?", es: "¿Está lejos de aquí?", mode: "select", options: ["weit", "nah", "groß", "klein"] },
      { id: "de-m3-cl3", before: "Danke für Ihre ", blank: "Hilfe", after: ".", es: "Gracias por su ayuda.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 4 — Leute kennenlernen                                  */
  /* ============================================================ */
  de.push({
    id: "de-m4", num: 4, title: "Leute kennenlernen", subtitle: "Charla informal, un poco más compleja",
    cards: [
      { id: "de-m4-c01", es: "¿a qué te dedicas?", target: "Was machst du beruflich?", phon: "vas majst du be-RUF-lij" },
      { id: "de-m4-c02", es: "me gusta...", target: "Ich mag...", phon: "ij mak" },
      { id: "de-m4-c03", es: "no me gusta...", target: "Ich mag ... nicht", phon: "ij mak ... nijt" },
      { id: "de-m4-c04", es: "mi hobby es...", target: "Mein Hobby ist...", phon: "main HO-bi ist" },
      { id: "de-m4-c05", es: "¿tienes hermanos?", target: "Hast du Geschwister?", phon: "hast du ge-SHVIS-ter" },
      { id: "de-m4-c06", es: "tengo dos hermanos", target: "Ich habe zwei Geschwister", phon: "ij HA-be tsvai ge-SHVIS-ter" },
      { id: "de-m4-c07", es: "estoy casado/a", target: "Ich bin verheiratet", phon: "ij bin fer-HAI-ra-tet" },
      { id: "de-m4-c08", es: "estoy soltero/a", target: "Ich bin ledig", phon: "ij bin LE-dij" },
      { id: "de-m4-c09", es: "tengo novio/a", target: "Ich habe einen Freund / eine Freundin", phon: "ij HA-be AI-nen froint" },
      { id: "de-m4-c10", es: "¿en qué trabajas?", target: "Wo arbeitest du?", phon: "vo AR-bai-test du" },
      { id: "de-m4-c11", es: "vivo en...", target: "Ich wohne in...", phon: "ij VO-ne in" },
      { id: "de-m4-c12", es: "¿hace cuánto vives aquí?", target: "Seit wann wohnst du hier?", phon: "zait van vonst du hir" },
      { id: "de-m4-c13", es: "me encanta viajar", target: "Ich reise sehr gern", phon: "ij RAI-ze zer guern" },
      { id: "de-m4-c14", es: "¿qué idiomas hablas?", target: "Welche Sprachen sprichst du?", phon: "VEL-je SHPRA-jen shprijst du" },
      { id: "de-m4-c15", es: "hablo un poco de alemán", target: "Ich spreche ein bisschen Deutsch", phon: "ij SHPRE-je ain BIS-jen doitsh" },
      { id: "de-m4-c16", es: "nos vemos pronto", target: "Bis bald", phon: "bis balt" },
      { id: "de-m4-c17", es: "mantente en contacto", target: "Bleib in Kontakt", phon: "blaip in kon-TAKT" },
      { id: "de-m4-c18", es: "¿puedo tener tu número?", target: "Kann ich deine Nummer haben?", phon: "kan ij DAI-ne NU-mer HA-ben" },
      { id: "de-m4-c19", es: "claro, aquí tienes", target: "Klar, hier ist sie", phon: "klar hir ist zi" },
      { id: "de-m4-c20", es: "fue un placer conocerte", target: "Es war schön, dich kennenzulernen", phon: "es var shön dij KE-nen-tsu-ler-nen" }
    ],
    dialogue: {
      title: "Auf einer Party", context: "Julia y Max se conocen en una fiesta y hablan de trabajo y aficiones.",
      lines: [
        { who: "Julia", target: "Hallo, ich bin Julia. Wir kennen uns noch nicht, oder?", es: "Hola, soy Julia. No nos conocemos todavía, ¿verdad?" },
        { who: "Max", target: "Nein, ich bin Max. Freut mich! Was machst du beruflich?", es: "No, soy Max. ¡Encantado! ¿A qué te dedicas?" },
        { who: "Julia", target: "Ich bin Designerin. Und du?", es: "Soy diseñadora. ¿Y tú?" },
        { who: "Max", target: "Ich arbeite als Programmierer. Was sind deine Hobbys?", es: "Trabajo como programador. ¿Cuáles son tus aficiones?" },
        { who: "Julia", target: "Ich reise sehr gern und ich mag Fotografie. Und du?", es: "Me encanta viajar y me gusta la fotografía. ¿Y tú?" },
        { who: "Max", target: "Ich spiele gern Fußball. Kann ich deine Nummer haben?", es: "Me gusta jugar al fútbol. ¿Puedo tener tu número?" },
        { who: "Julia", target: "Klar, hier ist sie. Bleib in Kontakt!", es: "Claro, aquí tienes. ¡Mantente en contacto!" }
      ],
      questions: [
        { q: "¿A qué se dedica Julia?", options: ["Programadora", "Diseñadora", "Profesora"], answer: 1 },
        { q: "¿Cuál es el hobby de Max?", options: ["La fotografía", "Viajar", "El fútbol"], answer: 2 },
        { q: "¿Qué le pide Max a Julia?", options: ["Su dirección", "Su número de teléfono", "Su correo"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m4-cl1", before: "Was ", blank: "machst", after: " du beruflich?", es: "¿A qué te dedicas?", mode: "select", options: ["machst", "macht", "mache", "machen"] },
      { id: "de-m4-cl2", before: "Ich reise sehr ", blank: "gern", after: ".", es: "Me encanta viajar.", mode: "type" },
      { id: "de-m4-cl3", before: "Kann ich deine ", blank: "Nummer", after: " haben?", es: "¿Puedo tener tu número?", mode: "type" }
    ],
    falseFriends: [
      { es: "rata (animal)", esMeaning: "animal roedor", target: "Rat", targetMeaning: "consejo (el animal se dice «Ratte»)" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 5 — Vorstellungsgespräch                                */
  /* ============================================================ */
  de.push({
    id: "de-m5", num: 5, title: "Vorstellungsgespräch", subtitle: "Entrevista de trabajo, registro formal",
    cards: [
      { id: "de-m5-c01", es: "el currículum", target: "der Lebenslauf", phon: "der LE-bens-lauf" },
      { id: "de-m5-c02", es: "la experiencia laboral", target: "die Berufserfahrung", phon: "di be-RUFS-er-fa-rung" },
      { id: "de-m5-c03", es: "¿por qué quiere este puesto?", target: "Warum wollen Sie diese Stelle?", phon: "va-RUM VO-len zi DI-ze SHTE-le" },
      { id: "de-m5-c04", es: "mis fortalezas son...", target: "Meine Stärken sind...", phon: "MAI-ne SHTER-ken zint" },
      { id: "de-m5-c05", es: "mis debilidades son...", target: "Meine Schwächen sind...", phon: "MAI-ne SHVE-jen zint" },
      { id: "de-m5-c06", es: "el salario", target: "das Gehalt", phon: "das ge-HALT" },
      { id: "de-m5-c07", es: "¿cuál es el horario?", target: "Wie sind die Arbeitszeiten?", phon: "vi zint di AR-baits-tsai-ten" },
      { id: "de-m5-c08", es: "el contrato", target: "der Vertrag", phon: "der fer-TRAK" },
      { id: "de-m5-c09", es: "a tiempo completo", target: "Vollzeit", phon: "FOL-tsait" },
      { id: "de-m5-c10", es: "a tiempo parcial", target: "Teilzeit", phon: "TAIL-tsait" },
      { id: "de-m5-c11", es: "disponibilidad", target: "Verfügbarkeit", phon: "fer-FÜK-bar-kait" },
      { id: "de-m5-c12", es: "referencias", target: "Referenzen", phon: "re-fe-REN-tsen" },
      { id: "de-m5-c13", es: "estoy muy interesado/a", target: "Ich bin sehr interessiert", phon: "ij bin zer in-te-re-SIRT" },
      { id: "de-m5-c14", es: "¿cuándo puedo empezar?", target: "Wann kann ich anfangen?", phon: "van kan ij AN-fan-guen" },
      { id: "de-m5-c15", es: "gracias por la oportunidad", target: "Danke für die Gelegenheit", phon: "DAN-ke für di ge-LE-guen-hait" },
      { id: "de-m5-c16", es: "trabajo en equipo", target: "die Teamarbeit", phon: "di TIM-ar-bait" },
      { id: "de-m5-c17", es: "solucionar problemas", target: "Probleme lösen", phon: "pro-BLE-me LÖ-zen" },
      { id: "de-m5-c18", es: "gestionar el tiempo", target: "Zeit managen", phon: "tsait ME-ni-dshen" },
      { id: "de-m5-c19", es: "estar bajo presión", target: "unter Druck stehen", phon: "UN-ter druk SHTE-en" },
      { id: "de-m5-c20", es: "me considero responsable", target: "Ich halte mich für verantwortungsbewusst", phon: "ij HAL-te mij für fer-ANT-vor-tungs-be-vust" }
    ],
    dialogue: {
      title: "Das Vorstellungsgespräch", context: "Entrevista formal (registro «Sie») para un puesto de marketing.",
      lines: [
        { who: "Personalchef", target: "Guten Tag, bitte setzen Sie sich. Erzählen Sie mir etwas über sich.", es: "Buenos días, siéntese por favor. Cuénteme algo sobre usted." },
        { who: "Bewerber", target: "Guten Tag. Ich habe fünf Jahre Berufserfahrung im Marketing.", es: "Buenos días. Tengo cinco años de experiencia en marketing." },
        { who: "Personalchef", target: "Warum wollen Sie bei uns arbeiten?", es: "¿Por qué quiere trabajar con nosotros?" },
        { who: "Bewerber", target: "Ich bin sehr interessiert an Ihrem Unternehmen und seinen Werten.", es: "Estoy muy interesado en su empresa y sus valores." },
        { who: "Personalchef", target: "Was sind Ihre Stärken?", es: "¿Cuáles son sus fortalezas?" },
        { who: "Bewerber", target: "Ich arbeite gut im Team und löse Probleme schnell.", es: "Trabajo bien en equipo y resuelvo problemas rápido." },
        { who: "Personalchef", target: "Sehr gut. Wann können Sie anfangen?", es: "Muy bien. ¿Cuándo puede empezar?" }
      ],
      questions: [
        { q: "¿Cuántos años de experiencia tiene el candidato?", options: ["Tres años", "Cinco años", "Diez años"], answer: 1 },
        { q: "¿En qué área trabaja?", options: ["Finanzas", "Marketing", "Ventas"], answer: 1 },
        { q: "¿Qué fortaleza menciona?", options: ["Habla varios idiomas", "Trabaja bien en equipo", "Es puntual"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m5-cl1", before: "Erzählen Sie mir etwas über ", blank: "sich", after: ".", es: "Cuénteme algo sobre usted.", mode: "type" },
      { id: "de-m5-cl2", before: "Was sind Ihre ", blank: "Stärken", after: "?", es: "¿Cuáles son sus fortalezas?", mode: "select", options: ["Stärken", "Schwächen", "Namen", "Fragen"] },
      { id: "de-m5-cl3", before: "Wann können Sie ", blank: "anfangen", after: "?", es: "¿Cuándo puede empezar?", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 6 — Im Restaurant                                        */
  /* ============================================================ */
  de.push({
    id: "de-m6", num: 6, title: "Im Restaurant", subtitle: "Reservas, pedir comida y pagar",
    cards: [
      { id: "de-m6-c01", es: "una mesa para dos", target: "ein Tisch für zwei", phon: "ain tish für tsvai" },
      { id: "de-m6-c02", es: "la carta / el menú", target: "die Speisekarte", phon: "di SHPAI-ze-kar-te" },
      { id: "de-m6-c03", es: "¿qué recomienda?", target: "Was empfehlen Sie?", phon: "vas emp-FE-len zi" },
      { id: "de-m6-c04", es: "quisiera pedir...", target: "Ich möchte ... bestellen", phon: "ij MÖSH-te ... be-SHTE-len" },
      { id: "de-m6-c05", es: "la cuenta, por favor", target: "Die Rechnung, bitte", phon: "di REJ-nung BI-te" },
      { id: "de-m6-c06", es: "¿está incluida la propina?", target: "Ist das Trinkgeld inbegriffen?", phon: "ist das TRINK-guelt in-be-GRI-fen" },
      { id: "de-m6-c07", es: "para beber", target: "zum Trinken", phon: "tsum TRIN-ken" },
      { id: "de-m6-c08", es: "de primero", target: "als Vorspeise", phon: "als FOR-shpai-ze" },
      { id: "de-m6-c09", es: "de segundo", target: "als Hauptgericht", phon: "als HAUPT-guer-rijt" },
      { id: "de-m6-c10", es: "de postre", target: "als Nachtisch", phon: "als NAJ-tish" },
      { id: "de-m6-c11", es: "soy vegetariano/a", target: "Ich bin Vegetarier/Vegetarierin", phon: "ij bin ve-ge-TA-ri-er" },
      { id: "de-m6-c12", es: "¿tiene opciones sin gluten?", target: "Haben Sie glutenfreie Optionen?", phon: "HA-ben zi glu-TEN-frai-e op-tsi-O-nen" },
      { id: "de-m6-c13", es: "está delicioso", target: "Es ist köstlich", phon: "es ist KÖST-lij" },
      { id: "de-m6-c14", es: "la cuenta está mal", target: "Die Rechnung stimmt nicht", phon: "di REJ-nung shtimt nijt" },
      { id: "de-m6-c15", es: "pagar en efectivo", target: "bar bezahlen", phon: "bar be-TSA-len" },
      { id: "de-m6-c16", es: "pagar con tarjeta", target: "mit Karte bezahlen", phon: "mit KAR-te be-TSA-len" },
      { id: "de-m6-c17", es: "reservar una mesa", target: "einen Tisch reservieren", phon: "AI-nen tish re-zer-VI-ren" },
      { id: "de-m6-c18", es: "tengo una reserva a nombre de...", target: "Ich habe eine Reservierung auf den Namen...", phon: "ij HA-be AI-ne re-zer-VI-rung auf den NA-men" },
      { id: "de-m6-c19", es: "el camarero", target: "der Kellner", phon: "der KEL-ner" },
      { id: "de-m6-c20", es: "salud (brindis)", target: "Prost", phon: "prost" }
    ],
    dialogue: {
      title: "Im Restaurant", context: "Una pareja llega a un restaurante, cena y pide la cuenta.",
      lines: [
        { who: "Kellner", target: "Guten Abend, haben Sie reserviert?", es: "Buenas noches, ¿ha reservado?" },
        { who: "Gast", target: "Ja, auf den Namen Fischer, für zwei Personen.", es: "Sí, a nombre de Fischer, para dos personas." },
        { who: "Kellner", target: "Sehr gut, bitte folgen Sie mir. Was möchten Sie trinken?", es: "Muy bien, sígame por favor. ¿Qué desean beber?" },
        { who: "Gast", target: "Ein Glas Wein, bitte. Und was empfehlen Sie als Hauptgericht?", es: "Una copa de vino, por favor. ¿Y qué recomienda de plato principal?" },
        { who: "Kellner", target: "Der Fisch des Tages ist sehr gut.", es: "El pescado del día está muy bueno." },
        { who: "Gast", target: "Perfekt, das nehme ich. Die Rechnung, bitte, wenn wir fertig sind.", es: "Perfecto, eso tomaré. La cuenta, cuando terminemos." },
        { who: "Kellner", target: "Natürlich, gerne.", es: "Por supuesto, con gusto." }
      ],
      questions: [
        { q: "¿A nombre de quién es la reserva?", options: ["Weber", "Fischer", "Schmidt"], answer: 1 },
        { q: "¿Para cuántas personas?", options: ["Una", "Dos", "Cuatro"], answer: 1 },
        { q: "¿Qué recomienda el camarero?", options: ["La carne", "El pescado del día", "La pasta"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m6-cl1", before: "Haben Sie ", blank: "reserviert", after: "?", es: "¿Ha reservado?", mode: "type" },
      { id: "de-m6-cl2", before: "Was ", blank: "empfehlen", after: " Sie als Hauptgericht?", es: "¿Qué recomienda de plato principal?", mode: "select", options: ["empfehlen", "essen", "trinken", "bestellen"] },
      { id: "de-m6-cl3", before: "Die ", blank: "Rechnung", after: ", bitte.", es: "La cuenta, por favor.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 7 — Beim Arzt und in der Apotheke                       */
  /* ============================================================ */
  de.push({
    id: "de-m7", num: 7, title: "Beim Arzt und in der Apotheke", subtitle: "Síntomas, recetas y medicamentos",
    cards: [
      { id: "de-m7-c01", es: "me duele la cabeza", target: "Ich habe Kopfschmerzen", phon: "ij HA-be KOPF-shmer-tsen" },
      { id: "de-m7-c02", es: "me duele el estómago", target: "Ich habe Bauchschmerzen", phon: "ij HA-be BAUJ-shmer-tsen" },
      { id: "de-m7-c03", es: "tengo fiebre", target: "Ich habe Fieber", phon: "ij HA-be FI-ber" },
      { id: "de-m7-c04", es: "tengo tos", target: "Ich habe Husten", phon: "ij HA-be HUS-ten" },
      { id: "de-m7-c05", es: "estoy resfriado/a", target: "Ich bin erkältet", phon: "ij bin er-KEL-tet" },
      { id: "de-m7-c06", es: "necesito una cita", target: "Ich brauche einen Termin", phon: "ij BRAU-je AI-nen ter-MIN" },
      { id: "de-m7-c07", es: "¿tiene algo para...?", target: "Haben Sie etwas gegen...?", phon: "HA-ben zi ET-vas GE-guen" },
      { id: "de-m7-c08", es: "la receta", target: "das Rezept", phon: "das re-TSEPT" },
      { id: "de-m7-c09", es: "las pastillas", target: "die Tabletten", phon: "di ta-BLE-ten" },
      { id: "de-m7-c10", es: "el jarabe", target: "der Sirup", phon: "der ZI-rup" },
      { id: "de-m7-c11", es: "soy alérgico/a a...", target: "Ich bin allergisch gegen...", phon: "ij bin a-LER-gish GE-guen" },
      { id: "de-m7-c12", es: "tomar antes de comer", target: "vor dem Essen einnehmen", phon: "for dem E-sen AIN-ne-men" },
      { id: "de-m7-c13", es: "tomar después de comer", target: "nach dem Essen einnehmen", phon: "naj dem E-sen AIN-ne-men" },
      { id: "de-m7-c14", es: "¿es grave?", target: "Ist es ernst?", phon: "ist es ernst" },
      { id: "de-m7-c15", es: "necesito un médico", target: "Ich brauche einen Arzt", phon: "ij BRAU-je AI-nen artst" },
      { id: "de-m7-c16", es: "la farmacia de guardia", target: "die Notapotheke", phon: "di NOT-a-po-te-ke" },
      { id: "de-m7-c17", es: "me siento mal", target: "Mir geht es schlecht", phon: "mir guet es shlejt" },
      { id: "de-m7-c18", es: "¿cuánto cuesta la consulta?", target: "Was kostet die Sprechstunde?", phon: "vas KOS-tet di SHPREJ-shtun-de" },
      { id: "de-m7-c19", es: "descansar", target: "sich ausruhen", phon: "zij AUS-ru-en" },
      { id: "de-m7-c20", es: "beber mucha agua", target: "viel Wasser trinken", phon: "fil VA-ser TRIN-ken" }
    ],
    dialogue: {
      title: "Beim Arzt", context: "Un paciente con fiebre y tos acude a consulta.",
      lines: [
        { who: "Arzt", target: "Guten Tag, was fehlt Ihnen?", es: "Buenos días, ¿qué le pasa?" },
        { who: "Patient", target: "Ich habe seit zwei Tagen Fieber und Husten.", es: "Tengo fiebre y tos desde hace dos días." },
        { who: "Arzt", target: "Haben Sie auch Kopfschmerzen?", es: "¿También tiene dolor de cabeza?" },
        { who: "Patient", target: "Ja, ein bisschen.", es: "Sí, un poco." },
        { who: "Arzt", target: "Das klingt nach einer Erkältung. Ich verschreibe Ihnen Tabletten.", es: "Suena a un resfriado. Le voy a recetar unas pastillas." },
        { who: "Patient", target: "Wie oft muss ich sie einnehmen?", es: "¿Cada cuánto debo tomarlas?" },
        { who: "Arzt", target: "Dreimal täglich, nach dem Essen. Und ruhen Sie sich aus.", es: "Tres veces al día, después de comer. Y descanse." }
      ],
      questions: [
        { q: "¿Cuántos días lleva con fiebre?", options: ["Un día", "Dos días", "Una semana"], answer: 1 },
        { q: "¿Qué diagnóstico da el médico?", options: ["Gripe fuerte", "Un resfriado", "Alergia"], answer: 1 },
        { q: "¿Cuándo debe tomar las pastillas?", options: ["Antes de dormir", "Después de comer, tres veces al día", "Solo si hay fiebre"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m7-cl1", before: "Was ", blank: "fehlt", after: " Ihnen?", es: "¿Qué le pasa?", mode: "type" },
      { id: "de-m7-cl2", before: "Ich habe ", blank: "Fieber", after: ".", es: "Tengo fiebre.", mode: "select", options: ["Fieber", "Husten", "Kopfschmerzen", "Bauchschmerzen"] },
      { id: "de-m7-cl3", before: "Ruhen Sie sich ", blank: "aus", after: ".", es: "Descanse.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 8 — Im Hotel                                             */
  /* ============================================================ */
  de.push({
    id: "de-m8", num: 8, title: "Im Hotel", subtitle: "Check-in, comodidades y reclamaciones",
    cards: [
      { id: "de-m8-c01", es: "tengo una reserva", target: "Ich habe eine Reservierung", phon: "ij HA-be AI-ne re-zer-VI-rung" },
      { id: "de-m8-c02", es: "una habitación doble", target: "ein Doppelzimmer", phon: "ain DO-pel-tsi-mer" },
      { id: "de-m8-c03", es: "una habitación individual", target: "ein Einzelzimmer", phon: "ain AIN-tsel-tsi-mer" },
      { id: "de-m8-c04", es: "¿a qué hora es el check-in?", target: "Wann ist der Check-in?", phon: "van ist der chek-in" },
      { id: "de-m8-c05", es: "¿a qué hora es el check-out?", target: "Wann ist der Check-out?", phon: "van ist der chek-aut" },
      { id: "de-m8-c06", es: "el desayuno está incluido", target: "Das Frühstück ist inbegriffen", phon: "das FRÜ-shtük ist in-be-GRI-fen" },
      { id: "de-m8-c07", es: "la llave de la habitación", target: "der Zimmerschlüssel", phon: "der TSI-mer-shlü-sel" },
      { id: "de-m8-c08", es: "el wifi", target: "das WLAN", phon: "das VE-lan" },
      { id: "de-m8-c09", es: "¿cuál es la contraseña?", target: "Wie ist das Passwort?", phon: "vi ist das PAS-vort" },
      { id: "de-m8-c10", es: "hay un problema con...", target: "Es gibt ein Problem mit...", phon: "es guipt ain pro-BLEM mit" },
      { id: "de-m8-c11", es: "necesito otra toalla", target: "Ich brauche ein weiteres Handtuch", phon: "ij BRAU-je ain VAI-te-res HANT-tuj" },
      { id: "de-m8-c12", es: "el servicio de habitaciones", target: "der Zimmerservice", phon: "der TSI-mer-ser-vis" },
      { id: "de-m8-c13", es: "quisiera hacer el check-out", target: "Ich möchte auschecken", phon: "ij MÖSH-te AUS-che-ken" },
      { id: "de-m8-c14", es: "¿puede pedirme un taxi?", target: "Können Sie mir ein Taxi rufen?", phon: "KÖ-nen zi mir ain TAK-si RU-fen" },
      { id: "de-m8-c15", es: "la piscina", target: "das Schwimmbad", phon: "das SHVIM-bat" },
      { id: "de-m8-c16", es: "el ascensor", target: "der Aufzug", phon: "der AUF-tsuk" },
      { id: "de-m8-c17", es: "quiero dejar una queja", target: "Ich möchte mich beschweren", phon: "ij MÖSH-te mij be-SHVE-ren" },
      { id: "de-m8-c18", es: "la factura", target: "die Rechnung", phon: "di REJ-nung" },
      { id: "de-m8-c19", es: "¿tienen habitaciones libres?", target: "Haben Sie freie Zimmer?", phon: "HA-ben zi FRAI-e TSI-mer" },
      { id: "de-m8-c20", es: "sábanas limpias", target: "saubere Bettwäsche", phon: "ZAU-be-re BET-ve-she" }
    ],
    dialogue: {
      title: "An der Rezeption", context: "Un huésped hace el check-in y pregunta por servicios del hotel.",
      lines: [
        { who: "Empfangsdame", target: "Guten Tag, haben Sie eine Reservierung?", es: "Buenos días, ¿tiene una reserva?" },
        { who: "Gast", target: "Ja, auf den Namen Weber, ein Doppelzimmer für drei Nächte.", es: "Sí, a nombre de Weber, una habitación doble para tres noches." },
        { who: "Empfangsdame", target: "Perfekt. Hier ist Ihr Zimmerschlüssel. Das Frühstück ist von sieben bis zehn Uhr.", es: "Perfecto. Aquí tiene su llave. El desayuno es de siete a diez." },
        { who: "Gast", target: "Wie ist das WLAN-Passwort?", es: "¿Cuál es la contraseña del wifi?" },
        { who: "Empfangsdame", target: "Es steht auf der Karte im Zimmer.", es: "Está en la tarjeta de la habitación." },
        { who: "Gast", target: "Danke. Können Sie mir morgen ein Taxi rufen?", es: "Gracias. ¿Puede pedirme un taxi para mañana?" },
        { who: "Empfangsdame", target: "Natürlich, kein Problem.", es: "Por supuesto, sin problema." }
      ],
      questions: [
        { q: "¿A nombre de quién es la reserva?", options: ["Fischer", "Weber", "Schmidt"], answer: 1 },
        { q: "¿Cuántas noches se queda?", options: ["Dos noches", "Tres noches", "Una semana"], answer: 1 },
        { q: "¿Qué le pide el huésped para el día siguiente?", options: ["Un taxi", "Otra habitación", "El desayuno"], answer: 0 }
      ]
    },
    cloze: [
      { id: "de-m8-cl1", before: "Haben Sie eine ", blank: "Reservierung", after: "?", es: "¿Tiene una reserva?", mode: "type" },
      { id: "de-m8-cl2", before: "Das Frühstück ist ", blank: "inbegriffen", after: ".", es: "El desayuno está incluido.", mode: "select", options: ["inbegriffen", "teuer", "geschlossen", "kalt"] },
      { id: "de-m8-cl3", before: "Können Sie mir ein Taxi ", blank: "rufen", after: "?", es: "¿Puede pedirme un taxi?", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 9 — Einkaufen: Kleidung                                  */
  /* ============================================================ */
  de.push({
    id: "de-m9", num: 9, title: "Einkaufen: Kleidung", subtitle: "Ropa, precios, probarse y pagar",
    cards: [
      { id: "de-m9-c01", es: "¿me puedo probar esto?", target: "Kann ich das anprobieren?", phon: "kan ij das AN-pro-bi-ren" },
      { id: "de-m9-c02", es: "el probador", target: "die Umkleidekabine", phon: "di UM-klai-de-ka-bi-ne" },
      { id: "de-m9-c03", es: "¿qué talla tiene?", target: "Welche Größe haben Sie?", phon: "VEL-je GRÖ-se HA-ben zi" },
      { id: "de-m9-c04", es: "me queda pequeño", target: "Es ist mir zu klein", phon: "es ist mir tsu klain" },
      { id: "de-m9-c05", es: "me queda grande", target: "Es ist mir zu groß", phon: "es ist mir tsu gros" },
      { id: "de-m9-c06", es: "¿tiene otra talla?", target: "Haben Sie eine andere Größe?", phon: "HA-ben zi AI-ne AN-de-re GRÖ-se" },
      { id: "de-m9-c07", es: "¿cuánto cuesta?", target: "Was kostet das?", phon: "vas KOS-tet das" },
      { id: "de-m9-c08", es: "está de rebajas", target: "Es ist im Angebot", phon: "es ist im AN-guer-bot" },
      { id: "de-m9-c09", es: "pagar en caja", target: "an der Kasse bezahlen", phon: "an der KA-se be-TSA-len" },
      { id: "de-m9-c10", es: "me lo llevo", target: "Ich nehme es", phon: "ij NE-me es" },
      { id: "de-m9-c11", es: "¿aceptan tarjeta?", target: "Akzeptieren Sie Karte?", phon: "ak-tsep-TI-ren zi KAR-te" },
      { id: "de-m9-c12", es: "el recibo", target: "die Quittung", phon: "di KVI-tung" },
      { id: "de-m9-c13", es: "devolver algo", target: "etwas zurückgeben", phon: "ET-vas tsu-RÜK-ge-ben" },
      { id: "de-m9-c14", es: "cambiar de talla", target: "die Größe wechseln", phon: "di GRÖ-se VEK-seln" },
      { id: "de-m9-c15", es: "los zapatos", target: "die Schuhe", phon: "di SHU-e" },
      { id: "de-m9-c16", es: "la chaqueta", target: "die Jacke", phon: "di YA-ke" },
      { id: "de-m9-c17", es: "el vestido", target: "das Kleid", phon: "das klait" },
      { id: "de-m9-c18", es: "el color", target: "die Farbe", phon: "di FAR-be" },
      { id: "de-m9-c19", es: "¿tiene en otro color?", target: "Haben Sie es in einer anderen Farbe?", phon: "HA-ben zi es in AI-ner AN-de-ren FAR-be" },
      { id: "de-m9-c20", es: "gratis", target: "kostenlos", phon: "KOS-ten-los" }
    ],
    dialogue: {
      title: "In der Boutique", context: "Una clienta se prueba un vestido y lo compra.",
      lines: [
        { who: "Verkäuferin", target: "Guten Tag, kann ich Ihnen helfen?", es: "Buenos días, ¿puedo ayudarle?" },
        { who: "Kundin", target: "Ja, ich suche ein Kleid. Kann ich dieses anprobieren?", es: "Sí, busco un vestido. ¿Puedo probarme este?" },
        { who: "Verkäuferin", target: "Natürlich, die Umkleidekabine ist dort.", es: "Claro, el probador está allí." },
        { who: "Kundin", target: "Es ist mir leider zu groß. Haben Sie eine kleinere Größe?", es: "Me queda grande. ¿Tiene una talla más pequeña?" },
        { who: "Verkäuferin", target: "Ja, einen Moment bitte. Hier, bitte sehr.", es: "Sí, un momento por favor. Aquí tiene." },
        { who: "Kundin", target: "Perfekt, das passt gut. Ich nehme es.", es: "Perfecto, me queda bien. Me lo llevo." },
        { who: "Verkäuferin", target: "Sehr gut, das macht vierzig Euro.", es: "Muy bien, son cuarenta euros." }
      ],
      questions: [
        { q: "¿Qué busca la clienta?", options: ["Unos zapatos", "Un vestido", "Una chaqueta"], answer: 1 },
        { q: "¿Cuál era el problema con la primera talla?", options: ["Le quedaba pequeña", "Le quedaba grande", "El color no le gustaba"], answer: 1 },
        { q: "¿Cuánto cuesta el vestido?", options: ["Treinta euros", "Cuarenta euros", "Cincuenta euros"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m9-cl1", before: "Kann ich Ihnen ", blank: "helfen", after: "?", es: "¿Puedo ayudarle?", mode: "type" },
      { id: "de-m9-cl2", before: "Es ist mir zu ", blank: "groß", after: ".", es: "Me queda grande.", mode: "select", options: ["groß", "klein", "teuer", "billig"] },
      { id: "de-m9-cl3", before: "Ich ", blank: "nehme", after: " es.", es: "Me lo llevo.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 10 — Notfälle und Zwischenfälle                          */
  /* ============================================================ */
  de.push({
    id: "de-m10", num: 10, title: "Notfälle und Zwischenfälle", subtitle: "Pedir ayuda, imprevistos y accidentes",
    cards: [
      { id: "de-m10-c01", es: "¡ayuda!", target: "Hilfe!", phon: "HIL-fe" },
      { id: "de-m10-c02", es: "llame a una ambulancia", target: "Rufen Sie einen Krankenwagen", phon: "RU-fen zi AI-nen KRAN-ken-va-guen" },
      { id: "de-m10-c03", es: "llame a la policía", target: "Rufen Sie die Polizei", phon: "RU-fen zi di po-li-TSAI" },
      { id: "de-m10-c04", es: "ha habido un accidente", target: "Es gab einen Unfall", phon: "es gap AI-nen UN-fal" },
      { id: "de-m10-c05", es: "me he perdido", target: "Ich habe mich verlaufen", phon: "ij HA-be mij fer-LAU-fen" },
      { id: "de-m10-c06", es: "he perdido mi pasaporte", target: "Ich habe meinen Reisepass verloren", phon: "ij HA-be MAI-nen RAI-ze-pas fer-LO-ren" },
      { id: "de-m10-c07", es: "me han robado", target: "Ich wurde bestohlen", phon: "ij VUR-de be-SHTO-len" },
      { id: "de-m10-c08", es: "el bolso", target: "die Tasche", phon: "di TA-she" },
      { id: "de-m10-c09", es: "la cartera", target: "das Portemonnaie", phon: "das port-mo-NE" },
      { id: "de-m10-c10", es: "necesito ayuda urgente", target: "Ich brauche dringend Hilfe", phon: "ij BRAU-je DRIN-guent HIL-fe" },
      { id: "de-m10-c11", es: "¿dónde está el hospital más cercano?", target: "Wo ist das nächste Krankenhaus?", phon: "vo ist das NEsh-te KRAN-ken-haus" },
      { id: "de-m10-c12", es: "estoy herido/a", target: "Ich bin verletzt", phon: "ij bin fer-LETST" },
      { id: "de-m10-c13", es: "se me rompió...", target: "... ist kaputt gegangen", phon: "ist ka-PUT ge-GAN-guen" },
      { id: "de-m10-c14", es: "el incendio", target: "der Brand", phon: "der brant" },
      { id: "de-m10-c15", es: "salida de emergencia", target: "der Notausgang", phon: "der NOT-aus-gang" },
      { id: "de-m10-c16", es: "mantén la calma", target: "Bleib ruhig", phon: "blaip RU-ij" },
      { id: "de-m10-c17", es: "no puedo respirar bien", target: "Ich kann nicht gut atmen", phon: "ij kan nijt gut AT-men" },
      { id: "de-m10-c18", es: "se ha desmayado", target: "Er/Sie ist ohnmächtig geworden", phon: "er ist ON-mej-tij ge-VOR-den" },
      { id: "de-m10-c19", es: "llame a un familiar", target: "Rufen Sie einen Angehörigen an", phon: "RU-fen zi AI-nen AN-ge-hö-ri-guen an" },
      { id: "de-m10-c20", es: "estoy bien, gracias", target: "Mir geht es gut, danke", phon: "mir guet es gut DAN-ke" }
    ],
    dialogue: {
      title: "Ein Unfall auf der Straße", context: "Un hombre se cae en la calle y un transeúnte le ayuda.",
      lines: [
        { who: "Passant", target: "Was ist passiert?", es: "¿Qué ha pasado?" },
        { who: "Verletzter", target: "Ich bin gestürzt und mein Bein tut sehr weh.", es: "Me he caído y me duele mucho la pierna." },
        { who: "Passant", target: "Bleiben Sie ruhig, ich rufe einen Krankenwagen.", es: "Mantenga la calma, llamo a una ambulancia." },
        { who: "Verletzter", target: "Danke, können Sie auch meine Frau anrufen?", es: "Gracias, ¿puede llamar también a mi esposa?" },
        { who: "Passant", target: "Natürlich. Wie ist ihre Nummer?", es: "Claro. ¿Cuál es su número?" },
        { who: "Verletzter", target: "Es ist... in meinem Handy gespeichert.", es: "Está... guardado en mi móvil." },
        { who: "Passant", target: "Der Krankenwagen kommt in fünf Minuten.", es: "La ambulancia llega en cinco minutos." }
      ],
      questions: [
        { q: "¿Qué le pasó al hombre?", options: ["Se cayó y le duele la pierna", "Le robaron", "Se sintió mal"], answer: 0 },
        { q: "¿Qué hace el transeúnte?", options: ["Llama a la policía", "Llama a una ambulancia", "Se va corriendo"], answer: 1 },
        { q: "¿Qué le pide el herido?", options: ["Que llame a su esposa", "Que le lleve al hospital", "Que le dé agua"], answer: 0 }
      ]
    },
    cloze: [
      { id: "de-m10-cl1", before: "Rufen Sie einen ", blank: "Krankenwagen", after: "!", es: "¡Llame a una ambulancia!", mode: "type" },
      { id: "de-m10-cl2", before: "Ich bin ", blank: "verletzt", after: ".", es: "Estoy herido.", mode: "select", options: ["verletzt", "müde", "glücklich", "hungrig"] },
      { id: "de-m10-cl3", before: "Bleiben Sie ", blank: "ruhig", after: ".", es: "Mantenga la calma.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 11 — Bank und Bürokratie                                 */
  /* ============================================================ */
  de.push({
    id: "de-m11", num: 11, title: "Bank und Bürokratie", subtitle: "Dinero, documentos y gestiones oficiales",
    cards: [
      { id: "de-m11-c01", es: "abrir una cuenta", target: "ein Konto eröffnen", phon: "ain KON-to ö-RÖF-nen" },
      { id: "de-m11-c02", es: "el número de cuenta", target: "die Kontonummer", phon: "di KON-to-nu-mer" },
      { id: "de-m11-c03", es: "la tarjeta de débito", target: "die Debitkarte", phon: "di DE-bit-kar-te" },
      { id: "de-m11-c04", es: "la tarjeta de crédito", target: "die Kreditkarte", phon: "di kre-DIT-kar-te" },
      { id: "de-m11-c05", es: "retirar dinero", target: "Geld abheben", phon: "guelt AP-he-ben" },
      { id: "de-m11-c06", es: "ingresar dinero", target: "Geld einzahlen", phon: "guelt AIN-tsa-len" },
      { id: "de-m11-c07", es: "el cajero automático", target: "der Geldautomat", phon: "der GUELT-au-to-mat" },
      { id: "de-m11-c08", es: "la transferencia", target: "die Überweisung", phon: "di ü-ber-VAI-zung" },
      { id: "de-m11-c09", es: "el saldo", target: "der Kontostand", phon: "der KON-to-shtant" },
      { id: "de-m11-c10", es: "necesito un documento de identidad", target: "Ich brauche einen Ausweis", phon: "ij BRAU-je AI-nen AUS-vais" },
      { id: "de-m11-c11", es: "rellenar un formulario", target: "ein Formular ausfüllen", phon: "ain for-mu-LAR AUS-fü-len" },
      { id: "de-m11-c12", es: "la firma", target: "die Unterschrift", phon: "di UN-ter-shrift" },
      { id: "de-m11-c13", es: "el comprobante", target: "der Beleg", phon: "der be-LEK" },
      { id: "de-m11-c14", es: "la comisión", target: "die Gebühr", phon: "di ge-BÜR" },
      { id: "de-m11-c15", es: "el préstamo", target: "der Kredit", phon: "der kre-DIT" },
      { id: "de-m11-c16", es: "pedir una cita", target: "einen Termin vereinbaren", phon: "AI-nen ter-MIN fer-AIN-ba-ren" },
      { id: "de-m11-c17", es: "la oficina", target: "das Büro", phon: "das bü-RO" },
      { id: "de-m11-c18", es: "¿puedo pagar en cuotas?", target: "Kann ich in Raten zahlen?", phon: "kan ij in RA-ten TSA-len" },
      { id: "de-m11-c19", es: "el interés", target: "die Zinsen", phon: "di TSIN-zen" },
      { id: "de-m11-c20", es: "perdí mi tarjeta", target: "Ich habe meine Karte verloren", phon: "ij HA-be MAI-ne KAR-te fer-LO-ren" }
    ],
    dialogue: {
      title: "In der Bank", context: "Un cliente abre una cuenta bancaria.",
      lines: [
        { who: "Bankangestellte", target: "Guten Tag, wie kann ich Ihnen helfen?", es: "Buenos días, ¿en qué puedo ayudarle?" },
        { who: "Kunde", target: "Ich möchte ein Konto eröffnen.", es: "Quiero abrir una cuenta." },
        { who: "Bankangestellte", target: "Kein Problem. Haben Sie einen Ausweis dabei?", es: "Sin problema. ¿Trae un documento de identidad?" },
        { who: "Kunde", target: "Ja, hier bitte. Wie hoch ist die Gebühr?", es: "Sí, aquí tiene. ¿Cuánto es la comisión?" },
        { who: "Bankangestellte", target: "Das Konto ist kostenlos im ersten Jahr.", es: "La cuenta es gratis el primer año." },
        { who: "Kunde", target: "Perfekt. Wann bekomme ich meine Karte?", es: "Perfecto. ¿Cuándo recibiré mi tarjeta?" },
        { who: "Bankangestellte", target: "In etwa einer Woche per Post.", es: "En una semana aproximadamente, por correo." }
      ],
      questions: [
        { q: "¿Qué quiere hacer el cliente?", options: ["Pedir un préstamo", "Abrir una cuenta", "Cambiar dinero"], answer: 1 },
        { q: "¿Qué le pide la empleada?", options: ["Un documento de identidad", "Una factura", "Un contrato"], answer: 0 },
        { q: "¿Cuándo recibirá la tarjeta?", options: ["Al momento", "En una semana, por correo", "En un mes"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m11-cl1", before: "Ich möchte ein Konto ", blank: "eröffnen", after: ".", es: "Quiero abrir una cuenta.", mode: "type" },
      { id: "de-m11-cl2", before: "Haben Sie einen ", blank: "Ausweis", after: " dabei?", es: "¿Tiene un documento de identidad?", mode: "select", options: ["Ausweis", "Schlüssel", "Regenschirm", "Koffer"] },
      { id: "de-m11-cl3", before: "Wann bekomme ich meine ", blank: "Karte", after: "?", es: "¿Cuándo recibiré mi tarjeta?", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 12 — Im Supermarkt                                       */
  /* ============================================================ */
  de.push({
    id: "de-m12", num: 12, title: "Im Supermarkt", subtitle: "Tiendas, alimentos y pago en caja",
    cards: [
      { id: "de-m12-c01", es: "el carrito", target: "der Einkaufswagen", phon: "der AIN-kaufs-va-guen" },
      { id: "de-m12-c02", es: "la cesta", target: "der Einkaufskorb", phon: "der AIN-kaufs-korp" },
      { id: "de-m12-c03", es: "¿dónde está el pasillo de...?", target: "Wo ist der Gang für...?", phon: "vo ist der gang für" },
      { id: "de-m12-c04", es: "las frutas", target: "das Obst", phon: "das opst" },
      { id: "de-m12-c05", es: "las verduras", target: "das Gemüse", phon: "das ge-MÜ-ze" },
      { id: "de-m12-c06", es: "la leche", target: "die Milch", phon: "di miljj" },
      { id: "de-m12-c07", es: "el pan", target: "das Brot", phon: "das brot" },
      { id: "de-m12-c08", es: "los huevos", target: "die Eier", phon: "di AI-er" },
      { id: "de-m12-c09", es: "congelado", target: "tiefgekühlt", phon: "TIF-guer-kült" },
      { id: "de-m12-c10", es: "fresco", target: "frisch", phon: "frish" },
      { id: "de-m12-c11", es: "¿tiene bolsas?", target: "Haben Sie Tüten?", phon: "HA-ben zi TÜ-ten" },
      { id: "de-m12-c12", es: "pagar en caja", target: "an der Kasse bezahlen", phon: "an der KA-se be-TSA-len" },
      { id: "de-m12-c13", es: "la oferta", target: "das Angebot", phon: "das AN-guer-bot" },
      { id: "de-m12-c14", es: "el precio", target: "der Preis", phon: "der prais" },
      { id: "de-m12-c15", es: "¿algo más?", target: "Sonst noch etwas?", phon: "zonst noj ET-vas" },
      { id: "de-m12-c16", es: "eso es todo, gracias", target: "Das ist alles, danke", phon: "das ist A-les DAN-ke" },
      { id: "de-m12-c17", es: "la fecha de caducidad", target: "das Verfallsdatum", phon: "das fer-FALS-da-tum" },
      { id: "de-m12-c18", es: "productos de limpieza", target: "Reinigungsmittel", phon: "RAI-ni-gungs-mi-tel" },
      { id: "de-m12-c19", es: "pesar la fruta", target: "das Obst wiegen", phon: "das opst VI-guen" },
      { id: "de-m12-c20", es: "¿dónde está la caja?", target: "Wo ist die Kasse?", phon: "vo ist di KA-se" }
    ],
    dialogue: {
      title: "Im Supermarkt", context: "Una clienta pregunta por productos en el supermercado.",
      lines: [
        { who: "Kundin", target: "Entschuldigung, wo finde ich Milch?", es: "Disculpe, ¿dónde encuentro la leche?" },
        { who: "Angestellter", target: "Die Milch ist im dritten Gang, links.", es: "La leche está en el pasillo tres, a la izquierda." },
        { who: "Kundin", target: "Danke. Und wo ist das Brot?", es: "Gracias. ¿Y dónde está el pan?" },
        { who: "Angestellter", target: "Direkt daneben, neben dem Gemüse.", es: "Justo al lado, cerca de las verduras." },
        { who: "Kundin", target: "Perfekt, danke sehr.", es: "Perfecto, muchas gracias." },
        { who: "Angestellter", target: "Gern geschehen. Sonst noch etwas?", es: "De nada. ¿Algo más?" },
        { who: "Kundin", target: "Nein, das ist alles.", es: "No, eso es todo." }
      ],
      questions: [
        { q: "¿Qué busca la clienta primero?", options: ["Pan", "Leche", "Huevos"], answer: 1 },
        { q: "¿Dónde está el pan?", options: ["En caja", "Al lado, cerca de las verduras", "En el congelador"], answer: 1 },
        { q: "¿Necesita algo más al final?", options: ["Sí, fruta", "No, eso es todo", "Sí, bolsas"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m12-cl1", before: "Wo finde ich ", blank: "Milch", after: "?", es: "¿Dónde encuentro la leche?", mode: "type" },
      { id: "de-m12-cl2", before: "Sonst noch ", blank: "etwas", after: "?", es: "¿Algo más?", mode: "select", options: ["etwas", "jemand", "nichts", "alles"] },
      { id: "de-m12-cl3", before: "Das ist ", blank: "alles", after: ", danke.", es: "Eso es todo, gracias.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 13 — Auf der Post                                        */
  /* ============================================================ */
  de.push({
    id: "de-m13", num: 13, title: "Auf der Post", subtitle: "Envíos, paquetes y trámites postales",
    cards: [
      { id: "de-m13-c01", es: "enviar una carta", target: "einen Brief schicken", phon: "AI-nen brif SHI-ken" },
      { id: "de-m13-c02", es: "el paquete", target: "das Paket", phon: "das pa-KET" },
      { id: "de-m13-c03", es: "el sello", target: "die Briefmarke", phon: "di BRIF-mar-ke" },
      { id: "de-m13-c04", es: "el sobre", target: "der Umschlag", phon: "der UM-shlak" },
      { id: "de-m13-c05", es: "¿cuánto cuesta enviar esto a...?", target: "Was kostet es, das nach ... zu schicken?", phon: "vas KOS-tet es das naj ... tsu SHI-ken" },
      { id: "de-m13-c06", es: "correo urgente", target: "die Eilpost", phon: "di AIL-post" },
      { id: "de-m13-c07", es: "¿cuánto tarda en llegar?", target: "Wie lange dauert es?", phon: "vi LAN-guer DAU-ert es" },
      { id: "de-m13-c08", es: "el remitente", target: "der Absender", phon: "der AP-zen-der" },
      { id: "de-m13-c09", es: "el destinatario", target: "der Empfänger", phon: "der emp-FEN-guer" },
      { id: "de-m13-c10", es: "la dirección", target: "die Adresse", phon: "di a-DRE-se" },
      { id: "de-m13-c11", es: "el código postal", target: "die Postleitzahl", phon: "di POST-lait-tsal" },
      { id: "de-m13-c12", es: "rellenar la etiqueta", target: "das Etikett ausfüllen", phon: "das e-ti-KET AUS-fü-len" },
      { id: "de-m13-c13", es: "frágil", target: "zerbrechlich", phon: "tser-BREJ-lij" },
      { id: "de-m13-c14", es: "el seguimiento del paquete", target: "die Sendungsverfolgung", phon: "di ZEN-dungs-fer-fol-gung" },
      { id: "de-m13-c15", es: "recoger un paquete", target: "ein Paket abholen", phon: "ain pa-KET AP-ho-len" },
      { id: "de-m13-c16", es: "la oficina de correos", target: "das Postamt", phon: "das POST-amt" },
      { id: "de-m13-c17", es: "pesar el paquete", target: "das Paket wiegen", phon: "das pa-KET VI-guen" },
      { id: "de-m13-c18", es: "pagar en efectivo", target: "bar bezahlen", phon: "bar be-TSA-len" },
      { id: "de-m13-c19", es: "el buzón", target: "der Briefkasten", phon: "der BRIF-kas-ten" },
      { id: "de-m13-c20", es: "un aviso de recogida", target: "eine Abholbenachrichtigung", phon: "AI-ne AP-hol-be-naj-rij-ti-gung" }
    ],
    dialogue: {
      title: "Auf der Post", context: "Un cliente envía un paquete a España.",
      lines: [
        { who: "Kunde", target: "Guten Tag, ich möchte dieses Paket nach Spanien schicken.", es: "Buenos días, quiero enviar este paquete a España." },
        { who: "Angestellte", target: "Kein Problem, legen Sie es bitte auf die Waage.", es: "Sin problema, póngalo en la báscula por favor." },
        { who: "Kunde", target: "Wie lange dauert der Versand?", es: "¿Cuánto tarda el envío?" },
        { who: "Angestellte", target: "Ungefähr fünf Werktage.", es: "Unos cinco días laborables." },
        { who: "Kunde", target: "Und was kostet es?", es: "¿Y cuánto cuesta?" },
        { who: "Angestellte", target: "Das macht zwölf Euro fünfzig.", es: "Son doce euros con cincuenta." },
        { who: "Kunde", target: "Hier bitte, in bar.", es: "Aquí tiene, en efectivo." }
      ],
      questions: [
        { q: "¿A dónde envía el paquete el cliente?", options: ["Alemania", "España", "Francia"], answer: 1 },
        { q: "¿Cuánto tarda el envío?", options: ["Un día", "Unos cinco días laborables", "Un mes"], answer: 1 },
        { q: "¿Cómo paga el cliente?", options: ["Con tarjeta", "En efectivo", "No paga"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m13-cl1", before: "Ich möchte dieses Paket ", blank: "schicken", after: ".", es: "Quiero enviar este paquete.", mode: "type" },
      { id: "de-m13-cl2", before: "Wie ", blank: "lange", after: " dauert der Versand?", es: "¿Cuánto tarda el envío?", mode: "select", options: ["lange", "viel", "oft", "weit"] },
      { id: "de-m13-cl3", before: "Das macht zwölf Euro ", blank: "fünfzig", after: ".", es: "Son doce euros cincuenta.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 14 — Eine Wohnung mieten                                 */
  /* ============================================================ */
  de.push({
    id: "de-m14", num: 14, title: "Eine Wohnung mieten", subtitle: "Búsqueda de vivienda, alquiler y contratos",
    cards: [
      { id: "de-m14-c01", es: "alquilar un piso", target: "eine Wohnung mieten", phon: "AI-ne VO-nung MI-ten" },
      { id: "de-m14-c02", es: "el alquiler mensual", target: "die monatliche Miete", phon: "di MO-nat-li-je MI-te" },
      { id: "de-m14-c03", es: "la fianza", target: "die Kaution", phon: "di kau-tsi-ON" },
      { id: "de-m14-c04", es: "amueblado", target: "möbliert", phon: "mö-BLIRT" },
      { id: "de-m14-c05", es: "sin amueblar", target: "unmöbliert", phon: "UN-mö-blirt" },
      { id: "de-m14-c06", es: "el contrato de alquiler", target: "der Mietvertrag", phon: "der MIT-fer-trak" },
      { id: "de-m14-c07", es: "los gastos incluidos", target: "Nebenkosten inklusive", phon: "NE-ben-kos-ten in-klu-ZI-ve" },
      { id: "de-m14-c08", es: "el propietario", target: "der Vermieter", phon: "der fer-MI-ter" },
      { id: "de-m14-c09", es: "el inquilino", target: "der Mieter", phon: "der MI-ter" },
      { id: "de-m14-c10", es: "las habitaciones", target: "die Zimmer", phon: "di TSI-mer" },
      { id: "de-m14-c11", es: "el baño", target: "das Badezimmer", phon: "das BA-de-tsi-mer" },
      { id: "de-m14-c12", es: "la cocina", target: "die Küche", phon: "di KÜ-je" },
      { id: "de-m14-c13", es: "el balcón", target: "der Balkon", phon: "der bal-KON" },
      { id: "de-m14-c14", es: "¿cuándo puedo mudarme?", target: "Wann kann ich einziehen?", phon: "van kan ij AIN-tsi-en" },
      { id: "de-m14-c15", es: "necesito ver el piso", target: "Ich möchte die Wohnung besichtigen", phon: "ij MÖSH-te di VO-nung be-ZIJ-ti-guen" },
      { id: "de-m14-c16", es: "firmar el contrato", target: "den Vertrag unterschreiben", phon: "den fer-TRAK UN-ter-shrai-ben" },
      { id: "de-m14-c17", es: "la calefacción", target: "die Heizung", phon: "di HAI-tsung" },
      { id: "de-m14-c18", es: "¿se permiten mascotas?", target: "Sind Haustiere erlaubt?", phon: "zint HAUS-ti-re er-LAUPT" },
      { id: "de-m14-c19", es: "el plazo de preaviso", target: "die Kündigungsfrist", phon: "di KÜN-di-gungs-frist" },
      { id: "de-m14-c20", es: "mudarse", target: "umziehen", phon: "UM-tsi-en" }
    ],
    dialogue: {
      title: "Wohnungsbesichtigung", context: "Un inquilino visita un piso en alquiler y pregunta condiciones.",
      lines: [
        { who: "Vermieter", target: "Willkommen, das ist die Wohnung. Zwei Schlafzimmer, ein Bad und eine Küche.", es: "Bienvenido, este es el piso. Dos habitaciones, un baño y una cocina." },
        { who: "Interessent", target: "Sehr schön. Ist sie möbliert?", es: "Muy bonito. ¿Está amueblado?" },
        { who: "Vermieter", target: "Nein, aber die Küche hat alle Geräte.", es: "No, pero la cocina tiene todos los electrodomésticos." },
        { who: "Interessent", target: "Wie hoch ist die Miete pro Monat?", es: "¿Cuánto es el alquiler al mes?" },
        { who: "Vermieter", target: "Achthundert Euro, plus Nebenkosten.", es: "Ochocientos euros, más gastos." },
        { who: "Interessent", target: "Sind Haustiere erlaubt?", es: "¿Se permiten mascotas?" },
        { who: "Vermieter", target: "Ja, kein Problem.", es: "Sí, sin problema." }
      ],
      questions: [
        { q: "¿Cuántas habitaciones tiene el piso?", options: ["Una", "Dos", "Tres"], answer: 1 },
        { q: "¿Está amueblado?", options: ["Sí, todo", "No, pero la cocina tiene electrodomésticos", "Solo la cocina"], answer: 1 },
        { q: "¿Se permiten mascotas?", options: ["No", "Sí", "Solo perros pequeños"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m14-cl1", before: "Ist die Wohnung ", blank: "möbliert", after: "?", es: "¿Está amueblado el piso?", mode: "select", options: ["möbliert", "billig", "groß", "neu"] },
      { id: "de-m14-cl2", before: "Wie hoch ist die ", blank: "Miete", after: " pro Monat?", es: "¿Cuánto es el alquiler al mes?", mode: "type" },
      { id: "de-m14-cl3", before: "Sind Haustiere ", blank: "erlaubt", after: "?", es: "¿Se permiten mascotas?", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 15 — Polizei und Anzeigen                                */
  /* ============================================================ */
  de.push({
    id: "de-m15", num: 15, title: "Polizei und Anzeigen", subtitle: "Denunciar un robo y trámites policiales",
    cards: [
      { id: "de-m15-c01", es: "denunciar un robo", target: "einen Diebstahl anzeigen", phon: "AI-nen DIP-shtal AN-tsai-guen" },
      { id: "de-m15-c02", es: "la comisaría", target: "die Polizeiwache", phon: "di po-li-TSAI-va-je" },
      { id: "de-m15-c03", es: "me robaron el móvil", target: "Mein Handy wurde gestohlen", phon: "main HEN-di VUR-de ge-SHTO-len" },
      { id: "de-m15-c04", es: "perdí mis documentos", target: "Ich habe meine Papiere verloren", phon: "ij HA-be MAI-ne pa-PI-re fer-LO-ren" },
      { id: "de-m15-c05", es: "el testigo", target: "der Zeuge", phon: "der TSOI-ge" },
      { id: "de-m15-c06", es: "rellenar una denuncia", target: "eine Anzeige aufnehmen", phon: "AI-ne AN-tsai-ge AUF-ne-men" },
      { id: "de-m15-c07", es: "describir al sospechoso", target: "den Verdächtigen beschreiben", phon: "den fer-DEJ-ti-guen be-SHRAI-ben" },
      { id: "de-m15-c08", es: "el seguro", target: "die Versicherung", phon: "di fer-ZI-je-rung" },
      { id: "de-m15-c09", es: "necesito un intérprete", target: "Ich brauche einen Dolmetscher", phon: "ij BRAU-je AI-nen DOL-me-cher" },
      { id: "de-m15-c10", es: "¿dónde ocurrió?", target: "Wo ist es passiert?", phon: "vo ist es pa-SIRT" },
      { id: "de-m15-c11", es: "¿a qué hora ocurrió?", target: "Um wie viel Uhr ist es passiert?", phon: "um vi fil ur ist es pa-SIRT" },
      { id: "de-m15-c12", es: "una copia del informe", target: "eine Kopie des Berichts", phon: "AI-ne ko-PI des be-RIJTS" },
      { id: "de-m15-c13", es: "el número de expediente", target: "die Aktennummer", phon: "di AK-ten-nu-mer" },
      { id: "de-m15-c14", es: "estar asustado/a", target: "ängstlich sein", phon: "ENGST-lij zain" },
      { id: "de-m15-c15", es: "sentirse seguro/a", target: "sich sicher fühlen", phon: "zij ZI-jer FÜ-len" },
      { id: "de-m15-c16", es: "llamar a la embajada", target: "die Botschaft anrufen", phon: "di BOT-shaft AN-ru-fen" },
      { id: "de-m15-c17", es: "el pasaporte", target: "der Reisepass", phon: "der RAI-ze-pas" },
      { id: "de-m15-c18", es: "bloquear la tarjeta", target: "die Karte sperren", phon: "di KAR-te SHPE-ren" },
      { id: "de-m15-c19", es: "gracias por su ayuda", target: "Danke für Ihre Hilfe", phon: "DAN-ke für I-re HIL-fe" },
      { id: "de-m15-c20", es: "todo estará bien", target: "Alles wird gut", phon: "A-les virt gut" }
    ],
    dialogue: {
      title: "Auf der Polizeiwache", context: "Una víctima de robo denuncia lo ocurrido en la comisaría.",
      lines: [
        { who: "Polizist", target: "Guten Tag, was ist passiert?", es: "Buenos días, ¿qué ha pasado?" },
        { who: "Opfer", target: "Mein Rucksack wurde gestohlen, mit meinem Handy und Portemonnaie.", es: "Me robaron la mochila, con el móvil y la cartera." },
        { who: "Polizist", target: "Wo und wann ist das passiert?", es: "¿Dónde y cuándo ocurrió?" },
        { who: "Opfer", target: "Vor einer Stunde, am Bahnhof.", es: "Hace una hora, en la estación." },
        { who: "Polizist", target: "Ich nehme jetzt die Anzeige auf. Können Sie den Täter beschreiben?", es: "Voy a tomar la denuncia. ¿Puede describir al ladrón?" },
        { who: "Opfer", target: "Er trug eine schwarze Jacke, das ist alles, was ich sah.", es: "Llevaba una chaqueta negra, es todo lo que vi." },
        { who: "Polizist", target: "Danke, hier ist eine Kopie des Berichts für Ihre Versicherung.", es: "Gracias, aquí tiene una copia del informe para su seguro." }
      ],
      questions: [
        { q: "¿Qué le robaron a la víctima?", options: ["Solo el móvil", "La mochila, con móvil y cartera", "El pasaporte"], answer: 1 },
        { q: "¿Dónde ocurrió el robo?", options: ["En la estación", "En el hotel", "En el aeropuerto"], answer: 0 },
        { q: "¿Para qué le dan la copia del informe?", options: ["Para la embajada", "Para el seguro", "Para el juez"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m15-cl1", before: "Mein Rucksack wurde ", blank: "gestohlen", after: ".", es: "Me robaron la mochila.", mode: "type" },
      { id: "de-m15-cl2", before: "Wo ist es ", blank: "passiert", after: "?", es: "¿Dónde ocurrió?", mode: "select", options: ["passiert", "gefallen", "gegangen", "gekommen"] },
      { id: "de-m15-cl3", before: "Können Sie den Täter ", blank: "beschreiben", after: "?", es: "¿Puede describir al sospechoso?", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 16 — Freizeit, Kultur und Tourismus                      */
  /* ============================================================ */
  de.push({
    id: "de-m16", num: 16, title: "Freizeit, Kultur und Tourismus", subtitle: "Museos, entradas, espectáculos y visitas",
    cards: [
      { id: "de-m16-c01", es: "el museo", target: "das Museum", phon: "das mu-ZE-um" },
      { id: "de-m16-c02", es: "la entrada", target: "der Eintritt", phon: "der AIN-trit" },
      { id: "de-m16-c03", es: "¿hay descuento para estudiantes?", target: "Gibt es einen Studentenrabatt?", phon: "guipt es AI-nen shtu-DEN-ten-ra-bat" },
      { id: "de-m16-c04", es: "la exposición", target: "die Ausstellung", phon: "di AUS-shte-lung" },
      { id: "de-m16-c05", es: "la visita guiada", target: "die Führung", phon: "di FÜ-rung" },
      { id: "de-m16-c06", es: "el horario de apertura", target: "die Öffnungszeiten", phon: "di ÖF-nungs-tsai-ten" },
      { id: "de-m16-c07", es: "el monumento", target: "das Denkmal", phon: "das DENK-mal" },
      { id: "de-m16-c08", es: "sacar fotos", target: "Fotos machen", phon: "FO-tos MA-jen" },
      { id: "de-m16-c09", es: "el folleto", target: "die Broschüre", phon: "di bro-SHÜ-re" },
      { id: "de-m16-c10", es: "la taquilla", target: "die Kasse", phon: "di KA-se" },
      { id: "de-m16-c11", es: "reservar entradas online", target: "Tickets online reservieren", phon: "TI-kets ON-lain re-zer-VI-ren" },
      { id: "de-m16-c12", es: "el teatro", target: "das Theater", phon: "das te-A-ter" },
      { id: "de-m16-c13", es: "el concierto", target: "das Konzert", phon: "das kon-TSERT" },
      { id: "de-m16-c14", es: "imperdible", target: "nicht zu verpassen", phon: "nijt tsu fer-PA-sen" },
      { id: "de-m16-c15", es: "¿cuánto dura la visita?", target: "Wie lange dauert der Besuch?", phon: "vi LAN-guer DAU-ert der be-ZUJ" },
      { id: "de-m16-c16", es: "la oficina de turismo", target: "das Touristenbüro", phon: "das tu-RIS-ten-bü-ro" },
      { id: "de-m16-c17", es: "recomendar un lugar", target: "einen Ort empfehlen", phon: "AI-nen ort emp-FE-len" },
      { id: "de-m16-c18", es: "el casco antiguo", target: "die Altstadt", phon: "di ALT-shtat" },
      { id: "de-m16-c19", es: "vale la pena", target: "Es lohnt sich", phon: "es lont zij" },
      { id: "de-m16-c20", es: "el guía turístico", target: "der Reiseführer", phon: "der RAI-ze-fü-rer" }
    ],
    dialogue: {
      title: "Im Touristenbüro", context: "Un turista pide información sobre el museo local.",
      lines: [
        { who: "Angestellte", target: "Guten Tag, wie kann ich Ihnen helfen?", es: "Buenos días, ¿en qué puedo ayudarle?" },
        { who: "Tourist", target: "Ich möchte das Museum besuchen. Wie sind die Öffnungszeiten?", es: "Quiero visitar el museo. ¿Cuál es el horario?" },
        { who: "Angestellte", target: "Von neun bis achtzehn Uhr, außer montags.", es: "De nueve a dieciocho, excepto los lunes." },
        { who: "Tourist", target: "Gibt es eine Führung auf Englisch?", es: "¿Hay visita guiada en inglés?" },
        { who: "Angestellte", target: "Ja, um elf Uhr und um fünfzehn Uhr.", es: "Sí, a las once y a las quince." },
        { who: "Tourist", target: "Perfekt, und gibt es einen Studentenrabatt?", es: "Perfecto, ¿y hay descuento de estudiante?" },
        { who: "Angestellte", target: "Ja, mit Ausweis fünfzig Prozent Rabatt.", es: "Sí, con carné, cincuenta por ciento de descuento." }
      ],
      questions: [
        { q: "¿Cuándo está cerrado el museo?", options: ["Los domingos", "Los lunes", "Nunca"], answer: 1 },
        { q: "¿A qué hora hay visitas guiadas en inglés?", options: ["A las 9 y a las 12", "A las 11 y a las 15", "Solo por la tarde"], answer: 1 },
        { q: "¿Qué descuento hay para estudiantes?", options: ["25%", "50%", "No hay"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m16-cl1", before: "Wie sind die ", blank: "Öffnungszeiten", after: "?", es: "¿Cuál es el horario de apertura?", mode: "type" },
      { id: "de-m16-cl2", before: "Gibt es einen Studenten", blank: "rabatt", after: "?", es: "¿Hay descuento de estudiante?", mode: "select", options: ["rabatt", "pass", "karte", "platz"] },
      { id: "de-m16-cl3", before: "Es ", blank: "lohnt", after: " sich.", es: "Vale la pena.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 17 — Am Flughafen                                        */
  /* ============================================================ */
  de.push({
    id: "de-m17", num: 17, title: "Am Flughafen", subtitle: "Check-in, embarque y aduanas",
    cards: [
      { id: "de-m17-c01", es: "el check-in", target: "der Check-in", phon: "der chek-in" },
      { id: "de-m17-c02", es: "la tarjeta de embarque", target: "die Bordkarte", phon: "di BORT-kar-te" },
      { id: "de-m17-c03", es: "el equipaje de mano", target: "das Handgepäck", phon: "das HANT-guer-pek" },
      { id: "de-m17-c04", es: "facturar la maleta", target: "den Koffer aufgeben", phon: "den KO-fer AUF-ge-ben" },
      { id: "de-m17-c05", es: "la puerta de embarque", target: "das Gate", phon: "das guet" },
      { id: "de-m17-c06", es: "el control de seguridad", target: "die Sicherheitskontrolle", phon: "di ZI-jer-haits-kon-tro-le" },
      { id: "de-m17-c07", es: "el pasaporte", target: "der Reisepass", phon: "der RAI-ze-pas" },
      { id: "de-m17-c08", es: "¿el vuelo tiene retraso?", target: "Hat der Flug Verspätung?", phon: "hat der fluk fer-SHPE-tung" },
      { id: "de-m17-c09", es: "la aduana", target: "der Zoll", phon: "der tsol" },
      { id: "de-m17-c10", es: "el asiento", target: "der Sitzplatz", phon: "der ZITS-plats" },
      { id: "de-m17-c11", es: "¿ventanilla o pasillo?", target: "Fenster oder Gang?", phon: "FENS-ter O-der gang" },
      { id: "de-m17-c12", es: "perder el vuelo", target: "den Flug verpassen", phon: "den fluk fer-PA-sen" },
      { id: "de-m17-c13", es: "la cinta de equipajes", target: "das Gepäckband", phon: "das ge-PEK-bant" },
      { id: "de-m17-c14", es: "mi maleta no ha llegado", target: "Mein Koffer ist nicht angekommen", phon: "main KO-fer ist nijt AN-guer-ko-men" },
      { id: "de-m17-c15", es: "el vuelo de conexión", target: "der Anschlussflug", phon: "der AN-shlus-fluk" },
      { id: "de-m17-c16", es: "la sala de espera", target: "der Wartebereich", phon: "der VAR-te-be-raij" },
      { id: "de-m17-c17", es: "despegar", target: "starten", phon: "SHTAR-ten" },
      { id: "de-m17-c18", es: "aterrizar", target: "landen", phon: "LAN-den" },
      { id: "de-m17-c19", es: "abróchense los cinturones", target: "Bitte anschnallen", phon: "BI-te AN-shna-len" },
      { id: "de-m17-c20", es: "el objeto perdido", target: "der Fundgegenstand", phon: "der FUNT-guer-guen-shtant" }
    ],
    dialogue: {
      title: "Am Check-in-Schalter", context: "Un pasajero factura su equipaje y elige asiento.",
      lines: [
        { who: "Angestellte", target: "Guten Tag, Ihren Reisepass und Ihr Ticket, bitte.", es: "Buenos días, su pasaporte y su billete, por favor." },
        { who: "Passagier", target: "Hier bitte. Kann ich meinen Koffer aufgeben?", es: "Aquí tiene. ¿Puedo facturar mi maleta?" },
        { who: "Angestellte", target: "Ja, legen Sie ihn bitte auf die Waage.", es: "Sí, póngala en la báscula, por favor." },
        { who: "Passagier", target: "Fenster oder Gang, was ist frei?", es: "¿Ventanilla o pasillo, qué queda libre?" },
        { who: "Angestellte", target: "Nur noch ein Fensterplatz.", es: "Solo queda un asiento de ventanilla." },
        { who: "Passagier", target: "Das ist perfekt. Hat der Flug Verspätung?", es: "Perfecto. ¿Tiene retraso el vuelo?" },
        { who: "Angestellte", target: "Nein, er ist pünktlich. Gate B12.", es: "No, es puntual. Puerta B12." }
      ],
      questions: [
        { q: "¿Qué le pide primero la empleada al pasajero?", options: ["El equipaje", "El pasaporte y el billete", "La tarjeta de crédito"], answer: 1 },
        { q: "¿Qué tipo de asiento le queda disponible?", options: ["Pasillo", "Ventanilla", "Ninguno"], answer: 1 },
        { q: "¿Tiene retraso el vuelo?", options: ["Sí, una hora", "No, es puntual", "Está cancelado"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m17-cl1", before: "Kann ich meinen Koffer ", blank: "aufgeben", after: "?", es: "¿Puedo facturar mi maleta?", mode: "type" },
      { id: "de-m17-cl2", before: "Fenster oder ", blank: "Gang", after: "?", es: "¿Ventanilla o pasillo?", mode: "select", options: ["Gang", "Sitz", "Tür", "Flur"] },
      { id: "de-m17-cl3", before: "Hat der Flug ", blank: "Verspätung", after: "?", es: "¿Tiene retraso el vuelo?", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 18 — Ein Auto mieten                                     */
  /* ============================================================ */
  de.push({
    id: "de-m18", num: 18, title: "Ein Auto mieten", subtitle: "Alquiler de vehículos y conducción",
    cards: [
      { id: "de-m18-c01", es: "alquilar un coche", target: "ein Auto mieten", phon: "ain AU-to MI-ten" },
      { id: "de-m18-c02", es: "el carné de conducir", target: "der Führerschein", phon: "der FÜ-rer-shain" },
      { id: "de-m18-c03", es: "el seguro a todo riesgo", target: "die Vollkaskoversicherung", phon: "di FOL-kas-ko-fer-zi-je-rung" },
      { id: "de-m18-c04", es: "¿el depósito está lleno?", target: "Ist der Tank voll?", phon: "ist der tank fol" },
      { id: "de-m18-c05", es: "devolver el coche", target: "das Auto zurückgeben", phon: "das AU-to tsu-RÜK-ge-ben" },
      { id: "de-m18-c06", es: "el kilometraje", target: "der Kilometerstand", phon: "der ki-lo-ME-ter-shtant" },
      { id: "de-m18-c07", es: "¿incluye kilometraje ilimitado?", target: "Ist unbegrenzte Kilometerzahl inbegriffen?", phon: "ist UN-be-grents-te ki-lo-ME-ter-tsal in-be-GRI-fen" },
      { id: "de-m18-c08", es: "automático o manual", target: "Automatik oder Schaltung", phon: "au-to-MA-tik O-der SHAL-tung" },
      { id: "de-m18-c09", es: "la gasolinera", target: "die Tankstelle", phon: "di TANK-shte-le" },
      { id: "de-m18-c10", es: "llenar el depósito", target: "volltanken", phon: "FOL-tan-ken" },
      { id: "de-m18-c11", es: "el peaje", target: "die Maut", phon: "di maut" },
      { id: "de-m18-c12", es: "el atasco", target: "der Stau", phon: "der shtau" },
      { id: "de-m18-c13", es: "el límite de velocidad", target: "die Geschwindigkeitsbegrenzung", phon: "di ge-SHVIN-dig-kaits-be-gren-tsung" },
      { id: "de-m18-c14", es: "una multa", target: "ein Bußgeld", phon: "ain BUS-guelt" },
      { id: "de-m18-c15", es: "aparcar", target: "parken", phon: "PAR-ken" },
      { id: "de-m18-c16", es: "el parking", target: "der Parkplatz", phon: "der PARK-plats" },
      { id: "de-m18-c17", es: "el GPS", target: "das Navi", phon: "das NA-vi" },
      { id: "de-m18-c18", es: "una avería", target: "eine Panne", phon: "AI-ne PA-ne" },
      { id: "de-m18-c19", es: "el neumático pinchado", target: "der platte Reifen", phon: "der PLA-te RAI-fen" },
      { id: "de-m18-c20", es: "la asistencia en carretera", target: "der Pannendienst", phon: "der PA-nen-dinst" }
    ],
    dialogue: {
      title: "Beim Autoverleih", context: "Un cliente recoge un coche de alquiler.",
      lines: [
        { who: "Angestellter", target: "Guten Tag, ich sehe, Sie haben eine Reservierung.", es: "Buenos días, veo que tiene una reserva." },
        { who: "Kunde", target: "Ja, genau. Hier ist mein Führerschein und meine Kreditkarte.", es: "Sí, exacto. Aquí está mi carné y mi tarjeta de crédito." },
        { who: "Angestellter", target: "Möchten Sie eine Vollkaskoversicherung?", es: "¿Quiere un seguro a todo riesgo?" },
        { who: "Kunde", target: "Das empfehle ich, ja. Ist der Tank voll?", es: "Se lo recomiendo, sí. ¿Está lleno el depósito?" },
        { who: "Angestellter", target: "Ja, und Sie müssen ihn voll zurückgeben.", es: "Sí, y debe devolverlo lleno." },
        { who: "Kunde", target: "Verstanden. Ist unbegrenzte Kilometerzahl inbegriffen?", es: "Entendido. ¿Está incluido el kilometraje ilimitado?" },
        { who: "Angestellter", target: "Ja, kein Problem.", es: "Sí, sin problema." }
      ],
      questions: [
        { q: "¿Qué le pide el empleado al cliente?", options: ["El carné de conducir y la tarjeta de crédito", "Solo el pasaporte", "Nada"], answer: 0 },
        { q: "¿Cómo debe devolver el coche?", options: ["Con el depósito vacío", "Con el depósito lleno", "Con la mitad"], answer: 1 },
        { q: "¿Está incluido el kilometraje ilimitado?", options: ["No", "Sí", "Solo los primeros 100 km"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m18-cl1", before: "Ihren ", blank: "Führerschein", after: ", bitte.", es: "Su carné de conducir, por favor.", mode: "type" },
      { id: "de-m18-cl2", before: "Ist der Tank ", blank: "voll", after: "?", es: "¿Está lleno el depósito?", mode: "select", options: ["voll", "leer", "kaputt", "neu"] },
      { id: "de-m18-cl3", before: "Ist unbegrenzte Kilometerzahl ", blank: "inbegriffen", after: "?", es: "¿Está incluido el kilometraje ilimitado?", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 19 — Wetter und Klima                                    */
  /* ============================================================ */
  de.push({
    id: "de-m19", num: 19, title: "Wetter und Klima", subtitle: "Predicción meteorológica y estaciones",
    cards: [
      { id: "de-m19-c01", es: "¿qué tiempo hace?", target: "Wie ist das Wetter?", phon: "vi ist das VE-ter" },
      { id: "de-m19-c02", es: "hace sol", target: "Es ist sonnig", phon: "es ist ZO-nij" },
      { id: "de-m19-c03", es: "está lloviendo", target: "Es regnet", phon: "es RE-gnet" },
      { id: "de-m19-c04", es: "hace frío", target: "Es ist kalt", phon: "es ist kalt" },
      { id: "de-m19-c05", es: "hace calor", target: "Es ist heiß", phon: "es ist hais" },
      { id: "de-m19-c06", es: "está nublado", target: "Es ist bewölkt", phon: "es ist be-VÖLKT" },
      { id: "de-m19-c07", es: "nieva", target: "Es schneit", phon: "es shnait" },
      { id: "de-m19-c08", es: "hay viento", target: "Es ist windig", phon: "es ist VIN-dij" },
      { id: "de-m19-c09", es: "la temperatura", target: "die Temperatur", phon: "di tem-pe-ra-TUR" },
      { id: "de-m19-c10", es: "grados", target: "Grad", phon: "grat" },
      { id: "de-m19-c11", es: "el pronóstico del tiempo", target: "die Wettervorhersage", phon: "di VE-ter-for-her-za-ge" },
      { id: "de-m19-c12", es: "llevar paraguas", target: "einen Regenschirm mitnehmen", phon: "AI-nen RE-guen-shirm MIT-ne-men" },
      { id: "de-m19-c13", es: "la primavera", target: "der Frühling", phon: "der FRÜ-ling" },
      { id: "de-m19-c14", es: "el verano", target: "der Sommer", phon: "der ZO-mer" },
      { id: "de-m19-c15", es: "el otoño", target: "der Herbst", phon: "der herpst" },
      { id: "de-m19-c16", es: "el invierno", target: "der Winter", phon: "der VIN-ter" },
      { id: "de-m19-c17", es: "una tormenta", target: "ein Gewitter", phon: "ain ge-VI-ter" },
      { id: "de-m19-c18", es: "la humedad", target: "die Feuchtigkeit", phon: "di FOICH-tig-kait" },
      { id: "de-m19-c19", es: "despejado", target: "klar", phon: "klar" },
      { id: "de-m19-c20", es: "¿mañana lloverá?", target: "Wird es morgen regnen?", phon: "virt es MOR-guen RE-gnen" }
    ],
    dialogue: {
      title: "Über das Wochenende sprechen", context: "Dos amigos deciden si ir de excursión según el tiempo.",
      lines: [
        { who: "Lisa", target: "Wie ist das Wetter morgen?", es: "¿Cómo estará el tiempo mañana?" },
        { who: "Paul", target: "Laut der Vorhersage wird es regnen und windig sein.", es: "Según el pronóstico, lloverá y hará viento." },
        { who: "Lisa", target: "Oh nein, wir wollten wandern gehen.", es: "Vaya, queríamos ir de excursión." },
        { who: "Paul", target: "Vielleicht am Sonntag, da soll es sonnig sein.", es: "Quizás el domingo, dicen que estará soleado." },
        { who: "Lisa", target: "Gut, dann verschieben wir es auf Sonntag.", es: "Bien, entonces lo dejamos para el domingo." },
        { who: "Paul", target: "Und nimm einen Regenschirm mit, für alle Fälle.", es: "Y llévate un paraguas, por si acaso." }
      ],
      questions: [
        { q: "¿Qué tiempo hará mañana?", options: ["Sol y calor", "Lluvia y viento", "Nieve"], answer: 1 },
        { q: "¿Qué planeaban hacer?", options: ["Ir de compras", "Ir de excursión", "Ver una película"], answer: 1 },
        { q: "¿Para qué día cambian el plan?", options: ["Para el sábado", "Para el domingo", "No lo cambian"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m19-cl1", before: "Wie ist das ", blank: "Wetter", after: " morgen?", es: "¿Cómo estará el tiempo mañana?", mode: "type" },
      { id: "de-m19-cl2", before: "Es wird ", blank: "sonnig", after: " sein.", es: "Estará soleado.", mode: "select", options: ["sonnig", "regnerisch", "windig", "bewölkt"] },
      { id: "de-m19-cl3", before: "Nimm einen ", blank: "Regenschirm", after: " mit.", es: "Llévate un paraguas.", mode: "type" }
    ]
  });
 
  /* ============================================================ */
  /* MÓDULO 20 — Technologie und Arbeit                              */
  /* ============================================================ */
  de.push({
    id: "de-m20", num: 20, title: "Technologie und Arbeit", subtitle: "Conexión, videollamadas y trabajo remoto",
    cards: [
      { id: "de-m20-c01", es: "el portátil", target: "der Laptop", phon: "der LEP-top" },
      { id: "de-m20-c02", es: "la contraseña", target: "das Passwort", phon: "das PAS-vort" },
      { id: "de-m20-c03", es: "no tengo conexión", target: "Ich habe keine Verbindung", phon: "ij HA-be KAI-ne fer-BIN-dung" },
      { id: "de-m20-c04", es: "el wifi no funciona", target: "Das WLAN funktioniert nicht", phon: "das VE-lan funk-tsi-o-NIRT nijt" },
      { id: "de-m20-c05", es: "reiniciar el ordenador", target: "den Computer neu starten", phon: "den kom-PJU-ter noi SHTAR-ten" },
      { id: "de-m20-c06", es: "enviar un correo", target: "eine E-Mail senden", phon: "AI-ne I-mail ZEN-den" },
      { id: "de-m20-c07", es: "adjuntar un archivo", target: "eine Datei anhängen", phon: "AI-ne da-TAI AN-hen-guen" },
      { id: "de-m20-c08", es: "una videollamada", target: "ein Videoanruf", phon: "ain VI-de-o-an-ruf" },
      { id: "de-m20-c09", es: "trabajar desde casa", target: "von zu Hause arbeiten", phon: "fon tsu HAU-ze AR-bai-ten" },
      { id: "de-m20-c10", es: "la reunión", target: "die Besprechung", phon: "di be-SHPRE-jung" },
      { id: "de-m20-c11", es: "el plazo de entrega", target: "die Frist", phon: "di frist" },
      { id: "de-m20-c12", es: "cargar el móvil", target: "das Handy aufladen", phon: "das HEN-di AUF-la-den" },
      { id: "de-m20-c13", es: "descargar una app", target: "eine App herunterladen", phon: "AI-ne ep he-RUN-ter-la-den" },
      { id: "de-m20-c14", es: "el archivo adjunto", target: "der Anhang", phon: "der AN-hang" },
      { id: "de-m20-c15", es: "guardar el documento", target: "das Dokument speichern", phon: "das do-ku-MENT SHPAI-jern" },
      { id: "de-m20-c16", es: "compartir la pantalla", target: "den Bildschirm teilen", phon: "den BILT-shirm TAI-len" },
      { id: "de-m20-c17", es: "la impresora", target: "der Drucker", phon: "der DRU-ker" },
      { id: "de-m20-c18", es: "se me ha bloqueado el ordenador", target: "Mein Computer ist eingefroren", phon: "main kom-PJU-ter ist AIN-guer-fro-ren" },
      { id: "de-m20-c19", es: "actualizar el software", target: "die Software aktualisieren", phon: "di SOFT-ve-a ak-tu-a-li-ZI-ren" },
      { id: "de-m20-c20", es: "¿me escuchas bien?", target: "Kannst du mich gut hören?", phon: "kanst du mij gut HÖ-ren" }
    ],
    dialogue: {
      title: "Ein Problem mit dem WLAN", context: "Dos compañeros de trabajo tienen problemas técnicos en una videollamada.",
      lines: [
        { who: "Kollegin", target: "Kannst du mich hören? Ich glaube, mein WLAN funktioniert nicht.", es: "¿Me escuchas? Creo que mi wifi no funciona bien." },
        { who: "Kollege", target: "Ja, ich höre dich, aber das Bild friert manchmal ein.", es: "Sí, te escucho, pero la imagen se congela a veces." },
        { who: "Kollegin", target: "Ich versuche, den Router neu zu starten.", es: "Voy a intentar reiniciar el router." },
        { who: "Kollege", target: "Gute Idee. Ich schicke dir inzwischen die Präsentation per E-Mail.", es: "Buena idea. Mientras tanto te envío la presentación por correo." },
        { who: "Kollegin", target: "Danke, hast du sie schon angehängt?", es: "Gracias, ¿ya la has adjuntado?" },
        { who: "Kollege", target: "Ja, gerade gesendet.", es: "Sí, la acabo de enviar." },
        { who: "Kollegin", target: "Perfekt, jetzt funktioniert es wieder. Können wir weitermachen?", es: "Perfecto, ya vuelve a funcionar. ¿Podemos continuar?" }
      ],
      questions: [
        { q: "¿Qué problema tiene la compañera?", options: ["Se quedó sin batería", "El wifi no funciona bien", "Perdió el archivo"], answer: 1 },
        { q: "¿Qué le envía el compañero mientras tanto?", options: ["Un mensaje de texto", "La presentación por correo", "Nada"], answer: 1 },
        { q: "¿Se resuelve el problema al final?", options: ["Sí", "No", "No queda claro"], answer: 0 }
      ]
    },
    cloze: [
      { id: "de-m20-cl1", before: "Kannst du mich ", blank: "gut", after: " hören?", es: "¿Me escuchas bien?", mode: "type" },
      { id: "de-m20-cl2", before: "Ich schicke dir die Präsentation per ", blank: "E-Mail", after: ".", es: "Te envío la presentación por correo.", mode: "select", options: ["E-Mail", "Post", "Telefon", "Hand"] },
      { id: "de-m20-cl3", before: "Können wir ", blank: "weitermachen", after: "?", es: "¿Podemos continuar?", mode: "type" }
    ],
    falseFriends: [
      { es: "chef (cocinero)", esMeaning: "persona que cocina", target: "Chef", targetMeaning: "jefe/a en el trabajo (cocinero se dice «Koch»)" }
    ]
  });

  
  /* ============================================================ */
  /* MÓDULO 21 — Begrüßungen und Vorstellung                        */
  /* ============================================================ */
  de.push({
    id: "de-m21", num: 21, title: "Begrüßungen und Vorstellung", subtitle: "Saludos, presentarse e información personal",
    cards: [
      { id: "de-m21-c01", es: "hola", target: "Hallo", phon: "HA-lo" },
      { id: "de-m21-c02", es: "buenos días", target: "Guten Morgen", phon: "GU-ten MOR-guen" },
      { id: "de-m21-c03", es: "buenas tardes", target: "Guten Tag", phon: "GU-ten tak" },
      { id: "de-m21-c04", es: "buenas noches (despedida)", target: "Gute Nacht", phon: "GU-te najt" },
      { id: "de-m21-c05", es: "adiós", target: "Auf Wiedersehen", phon: "auf VI-der-ze-en" },
      { id: "de-m21-c06", es: "chao (informal)", target: "Tschüss", phon: "chius", note: "Muy usado entre amigos; con desconocidos mejor «Auf Wiedersehen»." },
      { id: "de-m21-c07", es: "por favor", target: "Bitte", phon: "BI-te" },
      { id: "de-m21-c08", es: "gracias", target: "Danke", phon: "DAN-ke" },
      { id: "de-m21-c09", es: "de nada", target: "Bitte schön", phon: "BI-te shön" },
      { id: "de-m21-c10", es: "perdón / disculpe", target: "Entschuldigung", phon: "ent-SHUL-di-gung" },
      { id: "de-m21-c11", es: "sí", target: "Ja", phon: "ya" },
      { id: "de-m21-c12", es: "no", target: "Nein", phon: "nain" },
      { id: "de-m21-c13", es: "me llamo...", target: "Ich heiße...", phon: "ij HAI-se" },
      { id: "de-m21-c14", es: "¿cómo te llamas?", target: "Wie heißt du?", phon: "vi haist du", note: "Con desconocidos formales: «Wie heißen Sie?»." },
      { id: "de-m21-c15", es: "mucho gusto", target: "Freut mich", phon: "froit mij" },
      { id: "de-m21-c16", es: "soy de España", target: "Ich komme aus Spanien", phon: "ij KO-me aus SHPA-ni-en" },
      { id: "de-m21-c17", es: "¿de dónde eres?", target: "Woher kommst du?", phon: "vo-HER komst du" },
      { id: "de-m21-c18", es: "tengo ... años", target: "Ich bin ... Jahre alt", phon: "ij bin ... YA-re alt" },
      { id: "de-m21-c19", es: "¿cuántos años tienes?", target: "Wie alt bist du?", phon: "vi alt bist du" },
      { id: "de-m21-c20", es: "soy profesor/a", target: "Ich bin Lehrer / Lehrerin", phon: "ij bin LE-rer / LE-re-rin" },
      { id: "de-m21-c21", es: "¿cómo estás?", target: "Wie geht es dir?", phon: "vi guet es dir" },
      { id: "de-m21-c22", es: "estoy bien, gracias", target: "Mir geht es gut, danke", phon: "mir guet es gut DAN-ke" }
    ],
    dialogue: {
      title: "Erstes Treffen", context: "Anna y Markus se conocen por primera vez e intercambian datos básicos.",
      lines: [
        { who: "Anna", target: "Hallo! Ich heiße Anna. Und du?", es: "¡Hola! Me llamo Anna. ¿Y tú?" },
        { who: "Markus", target: "Hallo Anna, ich heiße Markus. Freut mich!", es: "Hola Anna, me llamo Markus. ¡Mucho gusto!" },
        { who: "Anna", target: "Woher kommst du?", es: "¿De dónde eres?" },
        { who: "Markus", target: "Ich komme aus Berlin. Und du?", es: "Soy de Berlín. ¿Y tú?" },
        { who: "Anna", target: "Ich komme aus Madrid. Was machst du beruflich?", es: "Soy de Madrid. ¿A qué te dedicas?" },
        { who: "Markus", target: "Ich bin Ingenieur. Und du?", es: "Soy ingeniero. ¿Y tú?" },
        { who: "Anna", target: "Ich bin Lehrerin. Es war schön, dich kennenzulernen!", es: "Soy profesora. ¡Fue un placer conocerte!" }
      ],
      questions: [
        { q: "¿De dónde es Markus?", options: ["Madrid", "Berlín", "Múnich"], answer: 1 },
        { q: "¿A qué se dedica Anna?", options: ["Ingeniera", "Profesora", "Médica"], answer: 1 },
        { q: "¿Cómo se tratan entre ellos, formal o informal?", options: ["Formal (Sie)", "Informal (du)", "No queda claro"], answer: 1 }
      ]
    },
    cloze: [
      { id: "de-m21-cl1", before: "Ich ", blank: "heiße", after: " Anna.", es: "Me llamo Anna.", mode: "type" },
      { id: "de-m21-cl2", before: "Woher ", blank: "kommst", after: " du?", es: "¿De dónde eres?", mode: "select", options: ["kommst", "kommt", "komme", "kommen"] },
      { id: "de-m21-cl3", before: "Wie ", blank: "geht", after: " es dir?", es: "¿Cómo estás?", mode: "select", options: ["geht", "gehst", "gehe", "gehen"] },
      { id: "de-m21-cl4", before: "Es war schön, dich ", blank: "kennenzulernen", after: "!", es: "¡Fue un placer conocerte!", mode: "type" }
    ],
    falseFriends: [
      { es: "también", esMeaning: "igualmente / además", target: "also", targetMeaning: "entonces / pues (también se dice «auch»)" }
    ]
  });

})();
