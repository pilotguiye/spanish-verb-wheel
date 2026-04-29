const people = [
  { key: "yo", label: "yo", shortLabel: "yo", personIndex: 0 },
  { key: "tu", label: "tú", shortLabel: "tú", personIndex: 1 },
  { key: "usted", label: "usted", shortLabel: "usted", personIndex: 2 },
  { key: "andres", label: "Andrés", shortLabel: "Andrés", personIndex: 2 },
  { key: "kim-kardashian", label: "Kim Kardashian", shortLabel: "Kim K.", personIndex: 2 },
  { key: "jack-ma", label: "Jack Ma", shortLabel: "Jack Ma", personIndex: 2 },
  { key: "el", label: "él / ella / usted", shortLabel: "él", personIndex: 2 },
  { key: "pepe-yo", label: "Pepe y yo", shortLabel: "Pepe y yo", personIndex: 3 },
  { key: "kim-yo", label: "Kim Kardashian y yo", shortLabel: "Kim y yo", personIndex: 3 },
  { key: "nosotros", label: "nosotros/as", shortLabel: "nos.", personIndex: 3 },
  { key: "paco-tu", label: "Paco y tú", shortLabel: "Paco y tú", personIndex: 4 },
  { key: "jack-tu", label: "Jack Ma y tú", shortLabel: "Jack y tú", personIndex: 4 },
  { key: "vosotros", label: "vosotros/as", shortLabel: "vos.", personIndex: 4 },
  { key: "ustedes", label: "ustedes", shortLabel: "ustedes", personIndex: 5 },
  { key: "ana-ema", label: "Ana y Ema", shortLabel: "Ana y Ema", personIndex: 5 },
  { key: "ellos", label: "ellos/as / ustedes", shortLabel: "ellos", personIndex: 5 },
];

const tenses = [
  { key: "present", label: "Indicativo · Presente", shortLabel: "Presente", zhLabel: "现在时" },
  {
    key: "presentPerfect",
    label: "Indicativo · Pretérito perfecto compuesto",
    shortLabel: "Perf. comp.",
    zhLabel: "现在完成时",
    compound: "presentIndicative",
  },
  {
    key: "imperfect",
    label: "Indicativo · Pretérito imperfecto",
    shortLabel: "Imperfecto",
    zhLabel: "过去未完成时",
  },
  {
    key: "preterite",
    label: "Indicativo · Pretérito perfecto simple",
    shortLabel: "Pretérito",
    zhLabel: "简单过去时",
  },
  {
    key: "pluperfect",
    label: "Indicativo · Pretérito pluscuamperfecto",
    shortLabel: "Pluscuam.",
    zhLabel: "过去完成时",
    compound: "imperfectIndicative",
  },
  {
    key: "future",
    label: "Indicativo · Futuro simple / Futuro",
    shortLabel: "Futuro",
    zhLabel: "将来未完成时",
  },
  {
    key: "futurePerfect",
    label: "Indicativo · Futuro compuesto",
    shortLabel: "Fut. comp.",
    zhLabel: "将来完成时",
    compound: "futureIndicative",
  },
  {
    key: "conditional",
    label: "Indicativo · Condicional simple",
    shortLabel: "Condic.",
    zhLabel: "简单条件时",
  },
  {
    key: "conditionalPerfect",
    label: "Indicativo · Condicional compuesto",
    shortLabel: "Cond. comp.",
    zhLabel: "复合条件时",
    compound: "conditionalIndicative",
  },
  {
    key: "subjPresent",
    label: "Subjuntivo · Presente",
    shortLabel: "Subj. pres.",
    zhLabel: "现在未完成时",
  },
  {
    key: "subjPresentPerfect",
    label: "Subjuntivo · Pretérito perfecto compuesto",
    shortLabel: "Subj. perf.",
    zhLabel: "现在完成时",
    compound: "presentSubjunctive",
  },
  {
    key: "subjImperfect",
    label: "Subjuntivo · Pretérito imperfecto",
    shortLabel: "Subj. imp.",
    zhLabel: "过去未完成时",
  },
  {
    key: "subjPluperfect",
    label: "Subjuntivo · Pretérito pluscuamperfecto",
    shortLabel: "Subj. plus.",
    zhLabel: "过去完成时",
    compound: "imperfectSubjunctive",
  },
  {
    key: "imperativeAffirmative",
    label: "Imperativo · Afirmativo",
    shortLabel: "Imper. aff.",
    zhLabel: "命令式",
    allowedPersonKeys: ["tu", "usted", "nosotros", "vosotros", "ustedes"],
  },
];

const verbs = {
  hablar: {
    participle: "hablado",
    present: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
    preterite: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"],
    imperfect: ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"],
    future: ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"],
    conditional: ["hablaría", "hablarías", "hablaría", "hablaríamos", "hablaríais", "hablarían"],
    subjPresent: ["hable", "hables", "hable", "hablemos", "habléis", "hablen"],
    subjImperfect: ["hablara", "hablaras", "hablara", "habláramos", "hablarais", "hablaran"],
    subjFuture: ["hablare", "hablares", "hablare", "habláremos", "hablareis", "hablaren"],
  },
  comer: {
    participle: "comido",
    present: ["como", "comes", "come", "comemos", "coméis", "comen"],
    preterite: ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"],
    imperfect: ["comía", "comías", "comía", "comíamos", "comíais", "comían"],
    future: ["comeré", "comerás", "comerá", "comeremos", "comeréis", "comerán"],
    conditional: ["comería", "comerías", "comería", "comeríamos", "comeríais", "comerían"],
    subjPresent: ["coma", "comas", "coma", "comamos", "comáis", "coman"],
    subjImperfect: ["comiera", "comieras", "comiera", "comiéramos", "comierais", "comieran"],
    subjFuture: ["comiere", "comieres", "comiere", "comiéremos", "comiereis", "comieren"],
  },
  vivir: {
    participle: "vivido",
    present: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
    preterite: ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"],
    imperfect: ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"],
    future: ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"],
    conditional: ["viviría", "vivirías", "viviría", "viviríamos", "viviríais", "vivirían"],
    subjPresent: ["viva", "vivas", "viva", "vivamos", "viváis", "vivan"],
    subjImperfect: ["viviera", "vivieras", "viviera", "viviéramos", "vivierais", "vivieran"],
    subjFuture: ["viviere", "vivieres", "viviere", "viviéremos", "viviereis", "vivieren"],
  },
  ser: {
    participle: "sido",
    present: ["soy", "eres", "es", "somos", "sois", "son"],
    preterite: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
    imperfect: ["era", "eras", "era", "éramos", "erais", "eran"],
    future: ["seré", "serás", "será", "seremos", "seréis", "serán"],
    conditional: ["sería", "serías", "sería", "seríamos", "seríais", "serían"],
    subjPresent: ["sea", "seas", "sea", "seamos", "seáis", "sean"],
    subjImperfect: ["fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran"],
    subjFuture: ["fuere", "fueres", "fuere", "fuéremos", "fuereis", "fueren"],
    imperativeAffirmative: ["", "sé", "sea", "seamos", "sed", "sean"],
  },
  estar: {
    participle: "estado",
    present: ["estoy", "estás", "está", "estamos", "estáis", "están"],
    preterite: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"],
    imperfect: ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],
    future: ["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"],
    conditional: ["estaría", "estarías", "estaría", "estaríamos", "estaríais", "estarían"],
    subjPresent: ["esté", "estés", "esté", "estemos", "estéis", "estén"],
    subjImperfect: ["estuviera", "estuvieras", "estuviera", "estuviéramos", "estuvierais", "estuvieran"],
    subjFuture: ["estuviere", "estuvieres", "estuviere", "estuviéremos", "estuviereis", "estuvieren"],
  },
  tener: {
    participle: "tenido",
    present: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
    preterite: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],
    imperfect: ["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"],
    future: ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"],
    conditional: ["tendría", "tendrías", "tendría", "tendríamos", "tendríais", "tendrían"],
    subjPresent: ["tenga", "tengas", "tenga", "tengamos", "tengáis", "tengan"],
    subjImperfect: ["tuviera", "tuvieras", "tuviera", "tuviéramos", "tuvierais", "tuvieran"],
    subjFuture: ["tuviere", "tuvieres", "tuviere", "tuviéremos", "tuviereis", "tuvieren"],
    imperativeAffirmative: ["", "ten", "tenga", "tengamos", "tened", "tengan"],
  },
  hacer: {
    participle: "hecho",
    present: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
    preterite: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"],
    imperfect: ["hacía", "hacías", "hacía", "hacíamos", "hacíais", "hacían"],
    future: ["haré", "harás", "hará", "haremos", "haréis", "harán"],
    conditional: ["haría", "harías", "haría", "haríamos", "haríais", "harían"],
    subjPresent: ["haga", "hagas", "haga", "hagamos", "hagáis", "hagan"],
    subjImperfect: ["hiciera", "hicieras", "hiciera", "hiciéramos", "hicierais", "hicieran"],
    subjFuture: ["hiciere", "hicieres", "hiciere", "hiciéremos", "hiciereis", "hicieren"],
    imperativeAffirmative: ["", "haz", "haga", "hagamos", "haced", "hagan"],
  },
  ir: {
    participle: "ido",
    present: ["voy", "vas", "va", "vamos", "vais", "van"],
    preterite: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
    imperfect: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
    future: ["iré", "irás", "irá", "iremos", "iréis", "irán"],
    conditional: ["iría", "irías", "iría", "iríamos", "iríais", "irían"],
    subjPresent: ["vaya", "vayas", "vaya", "vayamos", "vayáis", "vayan"],
    subjImperfect: ["fuera", "fueras", "fuera", "fuéramos", "fuerais", "fueran"],
    subjFuture: ["fuere", "fueres", "fuere", "fuéremos", "fuereis", "fueren"],
    imperativeAffirmative: ["", "ve", "vaya", "vayamos", "id", "vayan"],
  },
};

const haber = {
  presentIndicative: ["he", "has", "ha", "hemos", "habéis", "han"],
  imperfectIndicative: ["había", "habías", "había", "habíamos", "habíais", "habían"],
  futureIndicative: ["habré", "habrás", "habrá", "habremos", "habréis", "habrán"],
  conditionalIndicative: ["habría", "habrías", "habría", "habríamos", "habríais", "habrían"],
  presentSubjunctive: ["haya", "hayas", "haya", "hayamos", "hayáis", "hayan"],
  imperfectSubjunctive: ["hubiera", "hubieras", "hubiera", "hubiéramos", "hubierais", "hubieran"],
};

const imperativeOverrides = {
  decir: ["", "di", "diga", "digamos", "decid", "digan"],
  poner: ["", "pon", "ponga", "pongamos", "poned", "pongan"],
  salir: ["", "sal", "salga", "salgamos", "salid", "salgan"],
  venir: ["", "ven", "venga", "vengamos", "venid", "vengan"],
};

const vocabularySource = `
conocer
llamarse
ser
encargarse
enseñar
estar
estudiar
preguntar
presentar
tener
trabajar
bañarse
cepillarse
desayunar
ir
levantarse
llevar
parecer
peinarse
regresar
suponer
tomar
vivir
acostarse
almorzar
comenzar
decir
descansar
haber
hablar
hacer
leer
llevar + tiempo
organizar
prepararse
quedar
quedarse
repasar
respirar
saber
salir
tener que + inf.
terminar
venir
ver
volver a + inf.
alegrar(se)
ayudar
beber
brindar
celebrar
cenar
cerrar
charlar
comprar
cumplir
empezar
entrar
felicitar
invitar
llegar
pedir
poder
ponerse a + inf.
querer
recibir
recomendar
sentarse
temer
acabar de + inf.
barrer
coger
despedirse de
encantar
encontrar
escribir
fregar
gustar
lavar
meter
mirar
pasar
poner
recoger
retirar
sacar
sentirse
adquirir
devolver
encargar
esperar
estafar
ganar
molestar
necesitar
ofrecer
pagar
pensar
perder
prestar
resistirse
servir
soler
teclear
traer
usar
abrir
bajar
besar
dar
entregar
gritar
oír
romper
saltar
subir
alcanzar
apagar
apearse
avanzar
correr
creer
dejar
descuidar
encender
indicar
perderse
sentir
utilizar
abrigarse
apuntar
deber
elegir
mostrar
probarse
quedarle bien
recordar
seguir
sentarle bien
sonar
buscar
catar
causar
comprender
confundir
contar
dotar
encontrarse
ensuciarse
entender
estorbar
interesar
jugar
mejorar
precipitarse
pronunciar
regar
significar
tomar en cuenta
acercarse
agradecer
amenazar
arrojar
asomarse
asustar(se)
atravesar
casarse
considerar
detenerse
elogiar
enfurecer(se)
evitar
limitarse
observar
olvidar(se)
proteger
resultar
telefonear
variar
acompañar
añadir
caracterizarse
conversar
cuidar
disponerse
escuchar
incluir
informar
pertenecer
quedar por
saludar
salvar
sobrepasar
tratar
visitar
animarse
anunciar
aprender
desear
disponer de
divertirse
envidiar
graduarse
imaginarse
iniciar
instalarse
irse
mandar
preocuparse
prolongarse
prometer
tocar
asignar
dictar
dominar
explicar
importar
plantear
ponerse
reunirse
sorprender
administrar
aliñar
arreglar(se)
cambiarse
cansar(se)
chuparse
cocinar
demorarse
estropear
formar
hacer falta
reparar
repetir
retrasarse
secar(se)
sonreír
tender
`;

const STORAGE_KEY = "rueda-de-verbos-state";
const verbEntries = buildVerbEntries(vocabularySource);

const state = loadState();
const savedTenseKeys =
  state.selectedTenseKeys?.filter((key) => tenses.some((tense) => tense.key === key)) || [];
const selectedTenseKeys = new Set(
  savedTenseKeys.length > 0 ? savedTenseKeys : tenses.map((tense) => tense.key),
);
let current = {
  verbIndex: verbEntries.findIndex((entry) => entry.lemma === "hablar"),
  tense: "present",
  personIndex: 0,
};

const els = {
  verbWheel: document.querySelector("#verb-wheel"),
  tenseWheel: document.querySelector("#tense-wheel"),
  personWheel: document.querySelector("#person-wheel"),
  tenseSelected: document.querySelector("#tense-selected"),
  personSelected: document.querySelector("#person-selected"),
  wheelButtons: document.querySelectorAll("[data-spin]"),
  spinButton: document.querySelector("#spin-button"),
  answerForm: document.querySelector("#answer-form"),
  answerInput: document.querySelector("#answer-input"),
  feedback: document.querySelector("#feedback"),
  correctCount: document.querySelector("#correct-count"),
  wrongCount: document.querySelector("#wrong-count"),
  streakCount: document.querySelector("#streak-count"),
  mistakeList: document.querySelector("#mistake-list"),
  emptyState: document.querySelector("#empty-state"),
  resetButton: document.querySelector("#reset-button"),
  wheelGrid: document.querySelector(".wheel-grid"),
  tenseFocus: document.querySelector(".tense-focus"),
  tenseFocusToggle: document.querySelector("#tense-focus-toggle"),
  tenseFocusBody: document.querySelector("#tense-focus-body"),
  tenseFilterGroups: document.querySelector("#tense-filter-groups"),
  selectAllTensesButton: document.querySelector("#select-all-tenses"),
  clearAllTensesButton: document.querySelector("#clear-all-tenses"),
  celebrationLayer: document.querySelector("#celebration-layer"),
};

const rollTimers = {
  verb: [],
  tense: [],
  person: [],
};
let audioContext;
const mobileLayout = window.matchMedia("(max-width: 720px)");

function loadState() {
  const fallback = { correct: 0, wrong: 0, streak: 0, mistakes: [] };

  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) };
  } catch {
    return fallback;
  }
}

function saveState() {
  state.selectedTenseKeys = Array.from(selectedTenseKeys);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function activeTenses() {
  return tenses.filter((tense) => selectedTenseKeys.has(tense.key));
}

function fallbackTenseKey(excludedKeys = []) {
  const excluded = new Set(excludedKeys);
  return tenses.find((tense) => !excluded.has(tense.key))?.key || tenses[0].key;
}

function currentTense() {
  return tenses.find((tense) => tense.key === current.tense);
}

function validPeopleForCurrentTense() {
  const allowed = currentTense()?.allowedPersonKeys;
  return allowed
    ? people.filter((person) => allowed.includes(person.key))
    : people;
}

function buildVerbEntries(source) {
  const seen = new Set();

  return source
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((display) => {
      const lemma = deriveLemma(display);
      const key = `${display}|${lemma}`;
      const reflexive = isReflexiveDisplay(display);
      const suffix = deriveSuffix(display);

      if (seen.has(key)) return null;
      seen.add(key);

      return { display, lemma, reflexive, suffix };
    })
    .filter(Boolean);
}

function deriveLemma(display) {
  const lower = display.toLowerCase();
  const phraseMap = [
    ["tener que", "tener"],
    ["volver a", "volver"],
    ["ponerse a", "poner"],
    ["acabar de", "acabar"],
    ["despedirse", "despedir"],
    ["quedarle", "quedar"],
    ["sentarle", "sentar"],
    ["tomar en cuenta", "tomar"],
    ["disponer de", "disponer"],
    ["hacer falta", "hacer"],
    ["llevar +", "llevar"],
    ["quedar por", "quedar"],
  ];

  const mapped = phraseMap.find(([prefix]) => lower.startsWith(prefix));
  if (mapped) return mapped[1];

  return display
    .split(/\s|\+/)[0]
    .replace(/\(se\)/, "")
    .replace(/se$/, "")
    .trim();
}

function isReflexiveDisplay(display) {
  return /\(se\)|\b\w+se\b/.test(display) && !display.startsWith("parecer");
}

function deriveSuffix(display) {
  const lower = display.toLowerCase();
  if (lower.includes("que + inf")) return " que";
  if (lower.includes("a + inf")) return " a";
  if (lower.includes("de + inf")) return " de";
  if (lower.includes(" en cuenta")) return " en cuenta";
  if (lower.includes(" de") && lower.startsWith("disponer")) return " de";
  if (lower.includes(" falta") && lower.startsWith("hacer")) return " falta";
  return "";
}

function spin() {
  spinPart("verb");
  spinPart("tense");
  spinPart("person");

  resetAnswer("New prompt ready. Type your answer.");
  collapseTenseFocusForMobile(true);
}

function spinPart(part) {
  if (part === "verb") {
    current.verbIndex = Math.floor(Math.random() * verbEntries.length);
  }

  if (part === "tense") {
    current.tense = randomItem(activeTenses()).key;
    ensureValidPersonForTense();
  }

  if (part === "person") {
    const validPeople = validPeopleForCurrentTense();
    const selectedPerson = randomItem(validPeople);
    current.personIndex = people.findIndex((person) => person.key === selectedPerson.key);
  }

  renderPrompt(part);
}

function spinSingle(part) {
  spinPart(part);
  const labels = {
    verb: "Verb updated.",
    tense: "Tense updated.",
    person: "Subject updated.",
  };

  resetAnswer(`${labels[part]} Type the new answer.`);
  collapseTenseFocusForMobile(true);
}

function resetAnswer(message) {
  setFeedback("neutral", message);
  els.answerInput.value = "";
}

function setTenseFocusExpanded(isExpanded) {
  els.tenseFocus.classList.toggle("is-collapsed", !isExpanded);
  els.tenseFocusToggle.setAttribute("aria-expanded", String(isExpanded));
  els.tenseFocusBody.hidden = false;
}

function toggleTenseFocus() {
  setTenseFocusExpanded(els.tenseFocus.classList.contains("is-collapsed"));
}

function collapseTenseFocusForMobile(showPrompt = false) {
  if (!mobileLayout.matches) return;

  setTenseFocusExpanded(false);

  if (showPrompt) {
    window.setTimeout(() => {
      els.wheelGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }
}

function renderPrompt(spinningPart) {
  renderVerbMeter(spinningPart === "verb");

  const tenseIndex = tenses.findIndex((tense) => tense.key === current.tense);
  const tense = tenses[tenseIndex];
  renderMeter({
    part: "tense",
    items: tenses,
    activeIndex: tenseIndex,
    spin: spinningPart === "tense",
    element: els.tenseSelected,
    getText: (item) => item.label,
  });

  const person = people[current.personIndex];
  renderMeter({
    part: "person",
    items: people,
    activeIndex: current.personIndex,
    spin: spinningPart === "person",
    element: els.personSelected,
    getText: (item) => item.label,
  });
}

function renderVerbMeter(spin) {
  const element = els.verbWheel.querySelector("span");
  renderMeter({
    part: "verb",
    items: verbEntries,
    activeIndex: current.verbIndex,
    spin,
    element,
    getText: (item) => item.display,
  });
}

function renderTenseFilters() {
  els.tenseFilterGroups.innerHTML = "";

  [
    {
      name: "Indicative",
      zhName: "陈述式",
      tenses: tenses.filter((tense) => tense.label.startsWith("Indicativo")),
    },
    {
      name: "Subjunctive",
      zhName: "虚拟式",
      tenses: tenses.filter((tense) => tense.label.startsWith("Subjuntivo")),
    },
    {
      name: "Imperative",
      zhName: "命令式",
      tenses: tenses.filter((tense) => tense.label.startsWith("Imperativo")),
    },
  ].forEach(({ name: groupName, zhName: groupZhName, tenses: groupTenses }) => {
    const group = document.createElement("section");
    const groupHeader = document.createElement("div");
    const title = document.createElement("h3");
    const titleName = document.createElement("span");
    const titleTranslation = document.createElement("span");
    const controls = document.createElement("div");
    const selectButton = document.createElement("button");
    const clearButton = document.createElement("button");
    const options = document.createElement("div");

    group.className = "tense-filter-group";
    groupHeader.className = "tense-filter-group-header";
    titleName.textContent = groupName;
    titleTranslation.textContent = groupZhName;
    titleTranslation.className = "tense-group-translation";
    title.append(titleName, titleTranslation);
    controls.className = "tense-filter-group-controls";
    if (groupTenses.length > 1) {
      selectButton.type = "button";
      clearButton.type = "button";
      selectButton.textContent = "Select all";
      clearButton.textContent = "Clear";
      selectButton.addEventListener("click", () => selectTenseGroup(groupTenses));
      clearButton.addEventListener("click", () => clearTenseGroup(groupTenses));
      controls.append(selectButton, clearButton);
    }
    options.className = "tense-filter-options";

    groupTenses.forEach((tense) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      const span = document.createElement("span");
      const spanishName = document.createElement("span");
      const chineseName = document.createElement("span");

      label.className = "tense-chip";
      input.type = "checkbox";
      input.value = tense.key;
      input.checked = selectedTenseKeys.has(tense.key);
      spanishName.className = "tense-chip-name";
      chineseName.className = "tense-chip-translation";
      spanishName.textContent = tense.label.replace(/^Indicativo · |^Subjuntivo · |^Imperativo · /, "");
      chineseName.textContent = tense.zhLabel;
      span.append(spanishName, chineseName);

      input.addEventListener("change", () => {
        updateTenseSelection(tense.key, input.checked);
      });

      label.append(input, span);
      options.append(label);
    });

    groupHeader.append(title);
    if (controls.childElementCount > 0) groupHeader.append(controls);
    group.append(groupHeader, options);
    els.tenseFilterGroups.append(group);
  });

  updateTenseFocusButton();
}

function updateTenseSelection(key, shouldSelect) {
  if (shouldSelect) {
    selectedTenseKeys.add(key);
  } else {
    selectedTenseKeys.delete(key);
    if (selectedTenseKeys.size === 0) selectedTenseKeys.add(fallbackTenseKey([key]));
  }

  if (!selectedTenseKeys.has(current.tense)) {
    current.tense = randomItem(activeTenses()).key;
    ensureValidPersonForTense();
    renderPrompt("tense");
  }

  saveState();
  renderTenseFilters();
}

function selectAllTenses() {
  tenses.forEach((tense) => selectedTenseKeys.add(tense.key));
  saveState();
  renderTenseFilters();
  setFeedback("neutral", "All tenses are back in rotation.");
}

function clearAllTenses() {
  selectedTenseKeys.clear();
  selectedTenseKeys.add(current.tense);
  saveState();
  renderTenseFilters();
  setFeedback("neutral", "All other tenses cleared. Keep at least one tense active.");
}

function selectTenseGroup(groupTenses) {
  groupTenses.forEach((tense) => selectedTenseKeys.add(tense.key));
  saveState();
  renderTenseFilters();
}

function clearTenseGroup(groupTenses) {
  const groupKeys = groupTenses.map((tense) => tense.key);
  groupKeys.forEach((key) => selectedTenseKeys.delete(key));
  if (selectedTenseKeys.size === 0) selectedTenseKeys.add(fallbackTenseKey(groupKeys));

  if (!selectedTenseKeys.has(current.tense)) {
    current.tense = randomItem(activeTenses()).key;
    ensureValidPersonForTense();
    renderPrompt("tense");
  }

  saveState();
  renderTenseFilters();
}

function updateTenseFocusButton() {
  els.selectAllTensesButton.disabled = selectedTenseKeys.size === tenses.length;
  els.clearAllTensesButton.disabled = selectedTenseKeys.size === 1;
  els.selectAllTensesButton.textContent =
    selectedTenseKeys.size === tenses.length
      ? "All Tenses Active"
      : "Practice All Tenses";
  els.clearAllTensesButton.textContent =
    selectedTenseKeys.size === 1 ? "One Tense Active" : "Clear All Tenses";
}

function ensureValidPersonForTense() {
  const validPeople = validPeopleForCurrentTense();
  const currentPerson = people[current.personIndex];

  if (!validPeople.some((person) => person.key === currentPerson.key)) {
    const selectedPerson = randomItem(validPeople);
    current.personIndex = people.findIndex((person) => person.key === selectedPerson.key);
  }
}

function renderMeter({ part, items, activeIndex, spin, element, getText }) {
  const finalText = getText(items[activeIndex]);

  if (!spin) {
    element.textContent = finalText;
    return;
  }

  rollTimers[part].forEach((timer) => window.clearTimeout(timer));
  rollTimers[part] = [];
  element.classList.add("rolling");

  let step = 0;
  const schedule = (delay, index) => {
    const timer = window.setTimeout(() => {
      element.textContent = getText(items[index % items.length]);
    }, delay);
    rollTimers[part].push(timer);
  };

  for (let time = 0; time <= 500; time += 45) {
    schedule(time, activeIndex + step);
    step += 1;
  }

  for (let time = 580; time <= 780; time += 100) {
    schedule(time, activeIndex + step);
    step += 1;
  }

  const finalTimer = window.setTimeout(() => {
    element.textContent = finalText;
    element.classList.remove("rolling");
  }, 820);
  rollTimers[part].push(finalTimer);
}

function normalizeAnswer(answer) {
  return answer
    .trim()
    .toLocaleLowerCase("es")
    .normalize("NFC")
    .replace(/[.,;:¡!¿?]/g, "")
    .replace(/\s+/g, " ");
}

function getVerbForms(lemma) {
  const regular = buildRegularForms(lemma);
  const pattern = buildPatternForms(lemma, regular);
  const override = verbs[lemma];
  const imperativeAffirmative =
    override?.imperativeAffirmative ||
    pattern?.imperativeAffirmative ||
    imperativeOverrides[lemma] ||
    regular.imperativeAffirmative;

  return {
    ...regular,
    ...pattern,
    ...override,
    imperativeAffirmative,
    participle: override?.participle || pattern?.participle || regular.participle,
  };
}

function withEndings(stem, endings) {
  return endings.map((ending) => `${stem}${ending}`);
}

function replaceLast(source, search, replacement) {
  const index = source.lastIndexOf(search);
  if (index === -1) return source;
  return `${source.slice(0, index)}${replacement}${source.slice(index + search.length)}`;
}

function preteriteThirdPersonStem(stem) {
  return [`${stem}e`, `${stem}iste`, `${stem}o`, `${stem}imos`, `${stem}isteis`, `${stem}ieron`];
}

function stemBeforeEEnding(lemma, stem) {
  if (lemma.endsWith("gar")) return `${stem}u`;
  if (lemma.endsWith("car")) return `${stem.slice(0, -1)}qu`;
  if (lemma.endsWith("zar")) return `${stem.slice(0, -1)}c`;
  if (lemma.endsWith("cer") && lemma !== "hacer") return `${stem.slice(0, -1)}zc`;
  if ((lemma.endsWith("ger") || lemma.endsWith("gir")) && lemma !== "elegir") {
    return `${stem.slice(0, -1)}j`;
  }
  return stem;
}

function buildCoreForms({
  lemma,
  participle,
  present,
  preterite,
  imperfect,
  futureStem,
  subjPresent,
  subjImperfect,
  imperativeAffirmative,
}) {
  return {
    participle,
    present,
    preterite,
    imperfect: imperfect || buildRegularForms(lemma).imperfect,
    future: withEndings(futureStem || lemma, ["é", "ás", "á", "emos", "éis", "án"]),
    conditional: withEndings(futureStem || lemma, ["ía", "ías", "ía", "íamos", "íais", "ían"]),
    subjPresent,
    subjImperfect,
    imperativeAffirmative,
  };
}

function buildPonerFamilyForms(lemma) {
  const prefix = lemma.slice(0, -5);
  const regular = buildRegularForms(lemma);

  return buildCoreForms({
    lemma,
    participle: `${prefix}puesto`,
    present: [
      `${prefix}pongo`,
      `${prefix}pones`,
      `${prefix}pone`,
      `${prefix}ponemos`,
      `${prefix}ponéis`,
      `${prefix}ponen`,
    ],
    preterite: [
      `${prefix}puse`,
      `${prefix}pusiste`,
      `${prefix}puso`,
      `${prefix}pusimos`,
      `${prefix}pusisteis`,
      `${prefix}pusieron`,
    ],
    futureStem: `${prefix}pondr`,
    subjPresent: withEndings(`${prefix}pong`, ["a", "as", "a", "amos", "áis", "an"]),
    subjImperfect: withEndings(`${prefix}pus`, ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
    imperativeAffirmative: [
      "",
      prefix ? `${prefix}pón` : "pon",
      `${prefix}ponga`,
      `${prefix}pongamos`,
      regular.imperativeAffirmative[4],
      `${prefix}pongan`,
    ],
  });
}

function buildTenerFamilyForms(lemma) {
  const prefix = lemma.slice(0, -5);
  const regular = buildRegularForms(lemma);

  return buildCoreForms({
    lemma,
    participle: `${prefix}tenido`,
    present: [
      `${prefix}tengo`,
      `${prefix}tienes`,
      `${prefix}tiene`,
      `${prefix}tenemos`,
      `${prefix}tenéis`,
      `${prefix}tienen`,
    ],
    preterite: [
      `${prefix}tuve`,
      `${prefix}tuviste`,
      `${prefix}tuvo`,
      `${prefix}tuvimos`,
      `${prefix}tuvisteis`,
      `${prefix}tuvieron`,
    ],
    futureStem: `${prefix}tendr`,
    subjPresent: withEndings(`${prefix}teng`, ["a", "as", "a", "amos", "áis", "an"]),
    subjImperfect: withEndings(`${prefix}tuv`, ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
    imperativeAffirmative: [
      "",
      prefix ? `${prefix}tén` : "ten",
      `${prefix}tenga`,
      `${prefix}tengamos`,
      regular.imperativeAffirmative[4],
      `${prefix}tengan`,
    ],
  });
}

function buildSpellingChangeForms(lemma, regular) {
  const ending = lemma.slice(-2);
  const stem = lemma.slice(0, -2);
  const subjEndings = ending === "ar" ? ["e", "es", "e", "emos", "éis", "en"] : ["a", "as", "a", "amos", "áis", "an"];
  const subjStem = stemBeforeEEnding(lemma, stem);
  const changes = {};
  let yo = "";

  if (subjStem !== stem) {
    const subjPresent = withEndings(subjStem, subjEndings);
    changes.subjPresent = subjPresent;
    changes.imperativeAffirmative = [
      "",
      regular.imperativeAffirmative[1],
      subjPresent[2],
      subjPresent[3],
      regular.imperativeAffirmative[4],
      subjPresent[5],
    ];
  }

  if (lemma.endsWith("cer") && lemma !== "hacer") yo = `${subjStem}o`;
  if ((lemma.endsWith("ger") || lemma.endsWith("gir")) && lemma !== "elegir") yo = `${subjStem}o`;
  if (yo) changes.present = [yo, ...regular.present.slice(1)];

  if (lemma.endsWith("gar")) changes.preterite = [`${stem}ué`, ...regular.preterite.slice(1)];
  if (lemma.endsWith("car")) changes.preterite = [`${stem.slice(0, -1)}qué`, ...regular.preterite.slice(1)];
  if (lemma.endsWith("zar")) changes.preterite = [`${stem.slice(0, -1)}cé`, ...regular.preterite.slice(1)];

  return changes;
}

function buildArErStemChangeForms(lemma, regular, from, to) {
  const ending = lemma.slice(-2);
  const stem = lemma.slice(0, -2);
  const changedStem = replaceLast(stem, from, to);
  const presentEndings =
    ending === "ar" ? ["o", "as", "a", "amos", "áis", "an"] : ["o", "es", "e", "emos", "éis", "en"];
  const subjEndings =
    ending === "ar" ? ["e", "es", "e", "emos", "éis", "en"] : ["a", "as", "a", "amos", "áis", "an"];
  const subjChangedStem = stemBeforeEEnding(lemma, changedStem);
  const subjBaseStem = stemBeforeEEnding(lemma, stem);
  const present = [
    `${changedStem}${presentEndings[0]}`,
    `${changedStem}${presentEndings[1]}`,
    `${changedStem}${presentEndings[2]}`,
    `${stem}${presentEndings[3]}`,
    `${stem}${presentEndings[4]}`,
    `${changedStem}${presentEndings[5]}`,
  ];
  const subjPresent = [
    `${subjChangedStem}${subjEndings[0]}`,
    `${subjChangedStem}${subjEndings[1]}`,
    `${subjChangedStem}${subjEndings[2]}`,
    `${subjBaseStem}${subjEndings[3]}`,
    `${subjBaseStem}${subjEndings[4]}`,
    `${subjChangedStem}${subjEndings[5]}`,
  ];

  return {
    ...buildSpellingChangeForms(lemma, regular),
    present,
    subjPresent,
    imperativeAffirmative: ["", present[2], subjPresent[2], subjPresent[3], regular.imperativeAffirmative[4], subjPresent[5]],
  };
}

function buildIRStemChangeForms(lemma, regular, type) {
  const stem = lemma.slice(0, -2);
  const iStem = replaceLast(stem, "e", "i");
  const ieStem = replaceLast(stem, "e", "ie");
  const presentStem = type === "e-i" ? iStem : ieStem;
  const subjOuterStem = type === "e-i" ? iStem : ieStem;
  const subjInnerStem = type === "e-i" ? iStem : iStem;

  const present = [
    `${presentStem}o`,
    `${presentStem}es`,
    `${presentStem}e`,
    `${stem}imos`,
    `${stem}ís`,
    `${presentStem}en`,
  ];
  const subjPresent = [
    `${subjOuterStem}a`,
    `${subjOuterStem}as`,
    `${subjOuterStem}a`,
    `${subjInnerStem}amos`,
    `${subjInnerStem}áis`,
    `${subjOuterStem}an`,
  ];
  const preterite = [
    regular.preterite[0],
    regular.preterite[1],
    `${iStem}ió`,
    regular.preterite[3],
    regular.preterite[4],
    `${iStem}ieron`,
  ];

  return {
    present,
    preterite,
    subjPresent,
    subjImperfect: withEndings(iStem, ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
    imperativeAffirmative: ["", present[2], subjPresent[2], subjPresent[3], regular.imperativeAffirmative[4], subjPresent[5]],
  };
}

function buildPatternForms(lemma, regular) {
  if (lemma.endsWith("poner")) return buildPonerFamilyForms(lemma);
  if (lemma.endsWith("tener")) return buildTenerFamilyForms(lemma);
  if (lemma.endsWith("ducir")) {
    const stem = lemma.slice(0, -3);
    return {
      present: [`${stem}zco`, ...regular.present.slice(1)],
      preterite: preteriteThirdPersonStem(`${stem}j`),
      subjPresent: withEndings(`${stem}zc`, ["a", "as", "a", "amos", "áis", "an"]),
      subjImperfect: withEndings(`${stem}j`, ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", regular.imperativeAffirmative[1], `${stem}zca`, `${stem}zcamos`, regular.imperativeAffirmative[4], `${stem}zcan`],
    };
  }

  const fixedForms = {
    querer: buildCoreForms({
      lemma,
      participle: "querido",
      present: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
      preterite: preteriteThirdPersonStem("quis"),
      futureStem: "querr",
      subjPresent: ["quiera", "quieras", "quiera", "queramos", "queráis", "quieran"],
      subjImperfect: withEndings("quis", ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
      imperativeAffirmative: ["", "quiere", "quiera", "queramos", "quered", "quieran"],
    }),
    poder: buildCoreForms({
      lemma,
      participle: "podido",
      present: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
      preterite: preteriteThirdPersonStem("pud"),
      futureStem: "podr",
      subjPresent: ["pueda", "puedas", "pueda", "podamos", "podáis", "puedan"],
      subjImperfect: withEndings("pud", ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
      imperativeAffirmative: ["", "puede", "pueda", "podamos", "poded", "puedan"],
    }),
    jugar: {
      present: ["juego", "juegas", "juega", "jugamos", "jugáis", "juegan"],
      preterite: ["jugué", "jugaste", "jugó", "jugamos", "jugasteis", "jugaron"],
      subjPresent: ["juegue", "juegues", "juegue", "juguemos", "juguéis", "jueguen"],
      imperativeAffirmative: ["", "juega", "juegue", "juguemos", "jugad", "jueguen"],
    },
    pedir: buildIRStemChangeForms(lemma, regular, "e-i"),
    servir: buildIRStemChangeForms(lemma, regular, "e-i"),
    repetir: buildIRStemChangeForms(lemma, regular, "e-i"),
    despedir: buildIRStemChangeForms(lemma, regular, "e-i"),
    sentir: buildIRStemChangeForms(lemma, regular, "e-ie"),
    divertir: buildIRStemChangeForms(lemma, regular, "e-ie"),
    adquirir: {
      present: ["adquiero", "adquieres", "adquiere", "adquirimos", "adquirís", "adquieren"],
      subjPresent: ["adquiera", "adquieras", "adquiera", "adquiramos", "adquiráis", "adquieran"],
      imperativeAffirmative: ["", "adquiere", "adquiera", "adquiramos", "adquirid", "adquieran"],
    },
    seguir: {
      present: ["sigo", "sigues", "sigue", "seguimos", "seguís", "siguen"],
      preterite: ["seguí", "seguiste", "siguió", "seguimos", "seguisteis", "siguieron"],
      subjPresent: ["siga", "sigas", "siga", "sigamos", "sigáis", "sigan"],
      subjImperfect: withEndings("sigu", ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
      imperativeAffirmative: ["", "sigue", "siga", "sigamos", "seguid", "sigan"],
    },
    elegir: {
      present: ["elijo", "eliges", "elige", "elegimos", "elegís", "eligen"],
      preterite: ["elegí", "elegiste", "eligió", "elegimos", "elegisteis", "eligieron"],
      subjPresent: ["elija", "elijas", "elija", "elijamos", "elijáis", "elijan"],
      subjImperfect: withEndings("elig", ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
      imperativeAffirmative: ["", "elige", "elija", "elijamos", "elegid", "elijan"],
    },
    leer: {
      preterite: ["leí", "leíste", "leyó", "leímos", "leísteis", "leyeron"],
      subjPresent: ["lea", "leas", "lea", "leamos", "leáis", "lean"],
      subjImperfect: withEndings("ley", ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", "lee", "lea", "leamos", "leed", "lean"],
    },
    creer: {
      preterite: ["creí", "creíste", "creyó", "creímos", "creísteis", "creyeron"],
      subjPresent: ["crea", "creas", "crea", "creamos", "creáis", "crean"],
      subjImperfect: withEndings("crey", ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", "cree", "crea", "creamos", "creed", "crean"],
    },
    incluir: {
      present: ["incluyo", "incluyes", "incluye", "incluimos", "incluís", "incluyen"],
      preterite: ["incluí", "incluiste", "incluyó", "incluimos", "incluisteis", "incluyeron"],
      subjPresent: ["incluya", "incluyas", "incluya", "incluyamos", "incluyáis", "incluyan"],
      subjImperfect: withEndings("incluy", ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", "incluye", "incluya", "incluyamos", "incluid", "incluyan"],
    },
    abrir: { participle: "abierto" },
    escribir: { participle: "escrito" },
    romper: { participle: "roto" },
    volver: {
      participle: "vuelto",
      ...buildArErStemChangeForms(lemma, regular, "o", "ue"),
    },
    devolver: {
      participle: "devuelto",
      ...buildArErStemChangeForms(lemma, regular, "o", "ue"),
    },
    venir: buildCoreForms({
      lemma,
      participle: "venido",
      present: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"],
      preterite: ["vine", "viniste", "vino", "vinimos", "vinisteis", "vinieron"],
      futureStem: "vendr",
      subjPresent: withEndings("veng", ["a", "as", "a", "amos", "áis", "an"]),
      subjImperfect: withEndings("vin", ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
      imperativeAffirmative: ["", "ven", "venga", "vengamos", "venid", "vengan"],
    }),
    decir: buildCoreForms({
      lemma,
      participle: "dicho",
      present: ["digo", "dices", "dice", "decimos", "decís", "dicen"],
      preterite: ["dije", "dijiste", "dijo", "dijimos", "dijisteis", "dijeron"],
      futureStem: "dir",
      subjPresent: withEndings("dig", ["a", "as", "a", "amos", "áis", "an"]),
      subjImperfect: withEndings("dij", ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", "di", "diga", "digamos", "decid", "digan"],
    }),
    salir: {
      present: ["salgo", "sales", "sale", "salimos", "salís", "salen"],
      future: withEndings("saldr", ["é", "ás", "á", "emos", "éis", "án"]),
      conditional: withEndings("saldr", ["ía", "ías", "ía", "íamos", "íais", "ían"]),
      subjPresent: withEndings("salg", ["a", "as", "a", "amos", "áis", "an"]),
      imperativeAffirmative: ["", "sal", "salga", "salgamos", "salid", "salgan"],
    },
    saber: buildCoreForms({
      lemma,
      participle: "sabido",
      present: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"],
      preterite: ["supe", "supiste", "supo", "supimos", "supisteis", "supieron"],
      futureStem: "sabr",
      subjPresent: withEndings("sep", ["a", "as", "a", "amos", "áis", "an"]),
      subjImperfect: withEndings("sup", ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"]),
      imperativeAffirmative: ["", "sabe", "sepa", "sepamos", "sabed", "sepan"],
    }),
    ver: buildCoreForms({
      lemma,
      participle: "visto",
      present: ["veo", "ves", "ve", "vemos", "veis", "ven"],
      preterite: ["vi", "viste", "vio", "vimos", "visteis", "vieron"],
      imperfect: ["veía", "veías", "veía", "veíamos", "veíais", "veían"],
      subjPresent: withEndings("ve", ["a", "as", "a", "amos", "áis", "an"]),
      subjImperfect: withEndings("vi", ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", "ve", "vea", "veamos", "ved", "vean"],
    }),
    dar: buildCoreForms({
      lemma,
      participle: "dado",
      present: ["doy", "das", "da", "damos", "dais", "dan"],
      preterite: ["di", "diste", "dio", "dimos", "disteis", "dieron"],
      subjPresent: ["dé", "des", "dé", "demos", "deis", "den"],
      subjImperfect: withEndings("di", ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", "da", "dé", "demos", "dad", "den"],
    }),
    traer: buildCoreForms({
      lemma,
      participle: "traído",
      present: ["traigo", "traes", "trae", "traemos", "traéis", "traen"],
      preterite: ["traje", "trajiste", "trajo", "trajimos", "trajisteis", "trajeron"],
      subjPresent: withEndings("traig", ["a", "as", "a", "amos", "áis", "an"]),
      subjImperfect: withEndings("traj", ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", "trae", "traiga", "traigamos", "traed", "traigan"],
    }),
    oír: buildCoreForms({
      lemma,
      participle: "oído",
      present: ["oigo", "oyes", "oye", "oímos", "oís", "oyen"],
      preterite: ["oí", "oíste", "oyó", "oímos", "oísteis", "oyeron"],
      imperfect: ["oía", "oías", "oía", "oíamos", "oíais", "oían"],
      futureStem: "oir",
      subjPresent: withEndings("oig", ["a", "as", "a", "amos", "áis", "an"]),
      subjImperfect: withEndings("oy", ["era", "eras", "era", "éramos", "erais", "eran"]),
      imperativeAffirmative: ["", "oye", "oiga", "oigamos", "oíd", "oigan"],
    }),
    haber: buildCoreForms({
      lemma,
      participle: "habido",
      present: haber.presentIndicative,
      preterite: ["hube", "hubiste", "hubo", "hubimos", "hubisteis", "hubieron"],
      imperfect: haber.imperfectIndicative,
      futureStem: "habr",
      subjPresent: haber.presentSubjunctive,
      subjImperfect: haber.imperfectSubjunctive,
      imperativeAffirmative: ["", "he", "haya", "hayamos", "habed", "hayan"],
    }),
  };

  const eToIEVerbs = new Set([
    "acertar",
    "atravesar",
    "cerrar",
    "comenzar",
    "empezar",
    "entender",
    "fregar",
    "pensar",
    "recomendar",
    "sentar",
  ]);
  const oToUEVerbs = new Set([
    "acostar",
    "almorzar",
    "contar",
    "encontrar",
    "mostrar",
    "probar",
    "recordar",
    "sonar",
  ]);

  if (fixedForms[lemma]) return fixedForms[lemma];
  if (eToIEVerbs.has(lemma)) return buildArErStemChangeForms(lemma, regular, "e", "ie");
  if (oToUEVerbs.has(lemma)) return buildArErStemChangeForms(lemma, regular, "o", "ue");

  return buildSpellingChangeForms(lemma, regular);
}

function buildRegularForms(lemma) {
  const ending = lemma.slice(-2);
  const stem = lemma.slice(0, -2);
  const infinitive = lemma;
  const endings = {
    present: {
      ar: ["o", "as", "a", "amos", "áis", "an"],
      er: ["o", "es", "e", "emos", "éis", "en"],
      ir: ["o", "es", "e", "imos", "ís", "en"],
    },
    preterite: {
      ar: ["é", "aste", "ó", "amos", "asteis", "aron"],
      er: ["í", "iste", "ió", "imos", "isteis", "ieron"],
      ir: ["í", "iste", "ió", "imos", "isteis", "ieron"],
    },
    imperfect: {
      ar: ["aba", "abas", "aba", "ábamos", "abais", "aban"],
      er: ["ía", "ías", "ía", "íamos", "íais", "ían"],
      ir: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    },
    conditional: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    subjPresent: {
      ar: ["e", "es", "e", "emos", "éis", "en"],
      er: ["a", "as", "a", "amos", "áis", "an"],
      ir: ["a", "as", "a", "amos", "áis", "an"],
    },
    subjImperfect: {
      ar: ["ara", "aras", "ara", "áramos", "arais", "aran"],
      er: ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"],
      ir: ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"],
    },
    subjFuture: {
      ar: ["are", "ares", "are", "áremos", "areis", "aren"],
      er: ["iere", "ieres", "iere", "iéremos", "iereis", "ieren"],
      ir: ["iere", "ieres", "iere", "iéremos", "iereis", "ieren"],
    },
  };

  if (!["ar", "er", "ir"].includes(ending)) {
    return buildRegularForms("hablar");
  }

  return {
    participle: `${stem}${ending === "ar" ? "ado" : "ido"}`,
    present: endings.present[ending].map((item) => `${stem}${item}`),
    preterite: endings.preterite[ending].map((item) => `${stem}${item}`),
    imperfect: endings.imperfect[ending].map((item) => `${stem}${item}`),
    future: endings.conditional.map((item) => `${infinitive}${item}`),
    conditional: endings.conditional.map((item) => `${infinitive}${item}`),
    subjPresent: endings.subjPresent[ending].map((item) => `${stem}${item}`),
    subjImperfect: endings.subjImperfect[ending].map((item) => `${stem}${item}`),
    subjFuture: endings.subjFuture[ending].map((item) => `${stem}${item}`),
    imperativeAffirmative: [
      "",
      `${stem}${ending === "ar" ? "a" : "e"}`,
      `${stem}${ending === "ar" ? "e" : "a"}`,
      `${stem}${ending === "ar" ? "emos" : "amos"}`,
      `${infinitive.slice(0, -1)}d`,
      `${stem}${ending === "ar" ? "en" : "an"}`,
    ],
  };
}

function expectedAnswer() {
  const tense = tenses.find((item) => item.key === current.tense);
  const entry = verbEntries[current.verbIndex];
  const verb = getVerbForms(entry.lemma);
  const personIndex = people[current.personIndex].personIndex;
  let answer;

  if (tense.compound) {
    answer = `${haber[tense.compound][personIndex]} ${verb.participle}`;
  } else {
    answer = verb[current.tense][personIndex];
  }

  if (entry.reflexive) {
    answer = `${["me", "te", "se", "nos", "os", "se"][personIndex]} ${answer}`;
  }

  return `${answer}${entry.suffix}`;
}

function checkAnswer(rawAnswer) {
  const submitted = rawAnswer.trim();

  if (!submitted) {
    setFeedback("neutral", "Enter an answer first.");
    return;
  }

  const expected = expectedAnswer();
  const isCorrect = normalizeAnswer(submitted) === normalizeAnswer(expected);

  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;
    setFeedback("correct", `Correct: ${expected}`);
    celebrateStreak(state.streak);
  } else {
    state.wrong += 1;
    state.streak = 0;
    state.mistakes.unshift({
      verb: verbEntries[current.verbIndex].display,
      tense: tenses.find((tense) => tense.key === current.tense).label,
      person: people[current.personIndex].label,
      submitted,
      expected,
      time: new Date().toLocaleString("zh-CN", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    state.mistakes = state.mistakes.slice(0, 12);
    setFeedback("wrong", `Not quite. The correct answer is: ${expected}`);
  }

  saveState();
  renderStats();
  renderMistakes();
}

function setFeedback(type, message) {
  els.feedback.className = `feedback ${type}`;
  els.feedback.textContent = message;
}

function renderStats() {
  els.correctCount.textContent = state.correct;
  els.wrongCount.textContent = state.wrong;
  els.streakCount.textContent = state.streak;
}

function renderMistakes() {
  els.mistakeList.innerHTML = "";
  els.emptyState.hidden = state.mistakes.length > 0;

  state.mistakes.forEach((mistake) => {
    const item = document.createElement("li");
    const prompt = document.createElement("p");
    const detail = document.createElement("p");

    prompt.className = "mistake-prompt";
    prompt.textContent = `${mistake.verb} · ${mistake.tense} · ${mistake.person}`;

    detail.className = "mistake-detail";
    detail.textContent = `${mistake.time} | You wrote: ${mistake.submitted} | Answer: ${mistake.expected}`;

    item.append(prompt, detail);
    els.mistakeList.append(item);
  });
}

function celebrateStreak(streak) {
  if (streak > 0 && streak % 20 === 0) {
    showFireworks();
    playFireworkSound();
    playApplauseSound(1.15);
    return;
  }

  if (streak === 10) {
    showGeniusBurst();
    playApplauseSound(0.72);
  }
}

function getAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone({ frequency, start = 0, duration = 0.18, type = "sine", gain = 0.07 }) {
  const context = getAudioContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const volume = context.createGain();
  const startsAt = context.currentTime + start;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startsAt);
  volume.gain.setValueAtTime(0.0001, startsAt);
  volume.gain.exponentialRampToValueAtTime(gain, startsAt + 0.015);
  volume.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);
  oscillator.connect(volume);
  volume.connect(context.destination);
  oscillator.start(startsAt);
  oscillator.stop(startsAt + duration + 0.02);
}

function playNoiseBurst({ start = 0, duration = 0.08, gain = 0.12, filter = 1500 }) {
  const context = getAudioContext();
  if (!context) return;

  const sampleCount = Math.floor(context.sampleRate * duration);
  const buffer = context.createBuffer(1, sampleCount, context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < sampleCount; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / sampleCount);
  }

  const source = context.createBufferSource();
  const volume = context.createGain();
  const highpass = context.createBiquadFilter();
  const startsAt = context.currentTime + start;

  highpass.type = "highpass";
  highpass.frequency.value = filter;
  volume.gain.setValueAtTime(gain, startsAt);
  volume.gain.exponentialRampToValueAtTime(0.0001, startsAt + duration);
  source.buffer = buffer;
  source.connect(highpass);
  highpass.connect(volume);
  volume.connect(context.destination);
  source.start(startsAt);
}

function playApplauseSound(scale = 1) {
  [0, 0.07, 0.14, 0.23, 0.31, 0.42, 0.54, 0.67].forEach((start, index) => {
    playNoiseBurst({
      start,
      duration: 0.05 + (index % 3) * 0.015,
      gain: 0.08 * scale,
      filter: 900 + index * 120,
    });
  });
}

function playFireworkSound() {
  [
    { frequency: 520, start: 0, duration: 0.24 },
    { frequency: 760, start: 0.08, duration: 0.22 },
    { frequency: 980, start: 0.18, duration: 0.18 },
  ].forEach((tone) => playTone({ ...tone, type: "triangle", gain: 0.055 }));

  [0.28, 0.44, 0.62].forEach((start, index) => {
    playNoiseBurst({ start, duration: 0.18, gain: 0.13 - index * 0.02, filter: 520 });
  });
}

function clearCelebrationLayer() {
  els.celebrationLayer.innerHTML = "";
}

function showGeniusBurst() {
  clearCelebrationLayer();

  const card = document.createElement("div");
  card.className = "genius-burst";
  card.textContent = "You are a genius";
  els.celebrationLayer.append(card);
  window.setTimeout(() => card.remove(), 2300);
}

function showFireworks() {
  clearCelebrationLayer();
  showGeniusBurst();

  const colors = ["#b18b4b", "#496f5b", "#465f78", "#a76655", "#78907d", "#d6b66a"];
  const origins = [
    [50, 38],
    [28, 46],
    [72, 44],
  ];

  origins.forEach(([x, y], originIndex) => {
    for (let index = 0; index < 22; index += 1) {
      const particle = document.createElement("span");
      const angle = (Math.PI * 2 * index) / 22;
      const distance = 72 + Math.random() * 70;

      particle.className = "firework-particle";
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.background = colors[(index + originIndex) % colors.length];
      particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
      particle.style.animationDelay = `${originIndex * 90 + Math.random() * 70}ms`;
      els.celebrationLayer.append(particle);
      window.setTimeout(() => particle.remove(), 1700);
    }
  });
}

function resetProgress() {
  state.correct = 0;
  state.wrong = 0;
  state.streak = 0;
  state.mistakes = [];
  saveState();
  renderStats();
  renderMistakes();
  setFeedback("neutral", "Progress cleared. Start a new round when you are ready.");
}

els.spinButton.addEventListener("click", spin);
els.wheelButtons.forEach((button) => {
  button.addEventListener("click", () => spinSingle(button.dataset.spin));
});
els.selectAllTensesButton.addEventListener("click", selectAllTenses);
els.clearAllTensesButton.addEventListener("click", clearAllTenses);
els.resetButton.addEventListener("click", resetProgress);
els.tenseFocusToggle.addEventListener("click", toggleTenseFocus);
els.answerInput.addEventListener("focus", () => collapseTenseFocusForMobile(false));
els.answerInput.addEventListener("input", () => collapseTenseFocusForMobile(false));
els.answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer(els.answerInput.value);
});

renderPrompt();
renderTenseFilters();
renderStats();
renderMistakes();
setTenseFocusExpanded(!mobileLayout.matches);
