var p = "présent";
var imparfait = "imparfait";
var ps = "passé simple";
var fs = "futur simple";
var pc = "passé composé";
var pqp = "plus-que-parfait";
var fa = "futur antérieur";
var s = "subjonctif";
var c = "conditionnel";
var imperatif = "impératif";

var dictionary= {
  "all": "all",
  "Irregular": "Irregular",
  "Regular_-ER": "Regular -er",
  "Regular_-RE": "Regular -re",
  "Regular_-IR": "Regular -ir",
  "present": "présent",
  "passe_compose": "passé composé",
  "passe_simple": "passé simple",
  "passe": "passé",
  "futur_simple": "futur simple",
  "imparfait": "imparfait",
  "plus_que_parfait": "plus-que-parfait",
  "futur_anterieur": "futur antérieur",
  "indicatif": "indicatif",
  "conditionnel": "conditionnel",
  "subjonctif": "subjonctif",
  "imperatif": "imperatif",
  "id": "id"
}

var verbs = [
   {
    conjugation: "ai",
    person: "je",
    type: "irregular",
    tense: p,
    infinitive: "Avoir",
    english: "(To have)",
    mood: "indicatif"
  },

   {
    conjugation: "suis",
    person: "je",
    type: "irregular",
    tense: p,
    infinitive: "Être",
    english: "(To be)",
    mood: "indicatif"
  },

   {
    conjugation: "a eu",
    person: "il/elle",
    type: "irregular",
    tense: pc,
    infinitive: "Avoir",
    english: "(To have)",
    mood: "indicatif"
  },

   {
    conjugation: "étions",
    person: "nous",
    type: "irregular",
    tense: imparfait,
    infinitive: "Être",
    english: "(To be)",
    mood: "indicatif"
  },

   {
    conjugation: "iras",
    person: "tu",
    type: "irregular",
    tense: fs,
    infinitive: "Aller",
    english: "(To go)",
    mood: "indicatif"
  },

  {
    conjugation: "étais allé(e)",
    person: "tu",
    type: "irregular",
    tense: pqp,
    infinitive: "Aller",
    english: "(To go)",
    mood: "indicatif"
  },

   {
    conjugation: "vont",
    person: "ils/elles",
    type: "irregular",
    tense: p,
    infinitive: "Aller",
    english: "(To go)",
    mood: "indicatif"
  },

  {
    conjugation: "est venu(e)",
    person: "il/elle",
    type: "irregular",
    tense: pc,
    infinitive: "Venir",
    english: "(To come)",
    mood: "indicatif"
  },

  {
    conjugation: "parlerez",
    person: "vous",
    type: "regular -er",
    tense: fs,
    infinitive: "Parler",
    english: "(To talk)",
    mood: "indicatif"
  },

    {
    conjugation: "avaient entendu",
    person: "ils/elles",
    type: "regular -re",
    tense: pqp,
    infinitive: "Entendre",
    english: "(To listen)",
    mood: "indicatif"
  }
]
