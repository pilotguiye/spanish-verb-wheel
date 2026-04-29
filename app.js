const people = [
  { key: "yo", label: "yo", shortLabel: "yo", personIndex: 0 },
  { key: "tu", label: "tú", shortLabel: "tú", personIndex: 1 },
  { key: "usted", label: "usted", shortLabel: "usted", personIndex: 2 },
  { key: "andres", label: "Andrés", shortLabel: "Andrés", personIndex: 2 },
  { key: "el", label: "él / ella / usted", shortLabel: "él", personIndex: 2 },
  { key: "pepe-yo", label: "Pepe y yo", shortLabel: "Pepe y yo", personIndex: 3 },
  { key: "nosotros", label: "nosotros/as", shortLabel: "nos.", personIndex: 3 },
  { key: "paco-tu", label: "Paco y tú", shortLabel: "Paco y tú", personIndex: 4 },
  { key: "vosotros", label: "vosotros/as", shortLabel: "vos.", personIndex: 4 },
  { key: "ustedes", label: "ustedes", shortLabel: "ustedes", personIndex: 5 },
  { key: "ana-ema", label: "Ana y Ema", shortLabel: "Ana y Ema", personIndex: 5 },
  { key: "ellos", label: "ellos/as / ustedes", shortLabel: "ellos", personIndex: 5 },
];

const tenses = [
  { key: "present", label: "Indicativo · Presente", shortLabel: "Presente" },
  {
    key: "presentPerfect",
    label: "Indicativo · Pretérito perfecto compuesto",
    shortLabel: "Perf. comp.",
    compound: "presentIndicative",
  },
  {
    key: "imperfect",
    label: "Indicativo · Pretérito imperfecto",
    shortLabel: "Imperfecto",
  },
  {
    key: "preterite",
    label: "Indicativo · Pretérito perfecto simple",
    shortLabel: "Pretérito",
  },
  {
    key: "pluperfect",
    label: "Indicativo · Pretérito pluscuamperfecto",
    shortLabel: "Pluscuam.",
    compound: "imperfectIndicative",
  },
  {
    key: "future",
    label: "Indicativo · Futuro simple / Futuro",
    shortLabel: "Futuro",
  },
  {
    key: "futurePerfect",
    label: "Indicativo · Futuro compuesto",
    shortLabel: "Fut. comp.",
    compound: "futureIndicative",
  },
  {
    key: "conditional",
    label: "Indicativo · Condicional simple",
    shortLabel: "Condic.",
  },
  {
    key: "conditionalPerfect",
    label: "Indicativo · Condicional compuesto",
    shortLabel: "Cond. comp.",
    compound: "conditionalIndicative",
  },
  {
    key: "subjPresent",
    label: "Subjuntivo · Presente",
    shortLabel: "Subj. pres.",
  },
  {
    key: "subjPresentPerfect",
    label: "Subjuntivo · Pretérito perfecto compuesto",
    shortLabel: "Subj. perf.",
    compound: "presentSubjunctive",
  },
  {
    key: "subjImperfect",
    label: "Subjuntivo · Pretérito imperfecto",
    shortLabel: "Subj. imp.",
  },
  {
    key: "subjPluperfect",
    label: "Subjuntivo · Pretérito pluscuamperfecto",
    shortLabel: "Subj. plus.",
    compound: "imperfectSubjunctive",
  },
  {
    key: "imperativeAffirmative",
    label: "Imperativo · Afirmativo",
    shortLabel: "Imper. aff.",
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
  tenseFilterGroups: document.querySelector("#tense-filter-groups"),
  selectAllTensesButton: document.querySelector("#select-all-tenses"),
  clearAllTensesButton: document.querySelector("#clear-all-tenses"),
};

const rollTimers = {
  verb: [],
  tense: [],
  person: [],
};

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
}

function resetAnswer(message) {
  setFeedback("neutral", message);
  els.answerInput.value = "";
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
    ["Indicative", tenses.filter((tense) => tense.label.startsWith("Indicativo"))],
    ["Subjunctive", tenses.filter((tense) => tense.label.startsWith("Subjuntivo"))],
    ["Imperative", tenses.filter((tense) => tense.label.startsWith("Imperativo"))],
  ].forEach(([groupName, groupTenses]) => {
    const group = document.createElement("section");
    const groupHeader = document.createElement("div");
    const title = document.createElement("h3");
    const controls = document.createElement("div");
    const selectButton = document.createElement("button");
    const clearButton = document.createElement("button");
    const options = document.createElement("div");

    group.className = "tense-filter-group";
    groupHeader.className = "tense-filter-group-header";
    title.textContent = groupName;
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

      label.className = "tense-chip";
      input.type = "checkbox";
      input.value = tense.key;
      input.checked = selectedTenseKeys.has(tense.key);
      span.textContent = tense.label.replace(/^Indicativo · |^Subjuntivo · /, "");

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
  const override = verbs[lemma];
  const imperativeAffirmative =
    override?.imperativeAffirmative || imperativeOverrides[lemma] || regular.imperativeAffirmative;

  return {
    ...regular,
    ...override,
    imperativeAffirmative,
    participle: override?.participle || regular.participle,
  };
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
els.answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer(els.answerInput.value);
});

renderPrompt();
renderTenseFilters();
renderStats();
renderMistakes();
