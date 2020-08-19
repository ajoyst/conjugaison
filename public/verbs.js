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


var verbs = [
   {
    conjugation: "ai",
    person: "je",
    type: "irregular",
    tense: p,
    infinitive: "Avoir",
    english: "(To have)"
  },

   {
    conjugation: "suis",
    person: "je",
    type: "irregular",
    tense: p,
    infinitive: "Être",
    english: "(To be)"
  },

   {
    conjugation: "a eu",
    person: "il/elle",
    type: "irregular",
    tense: pc,
    infinitive: "Avoir",
    english: "(To have)"
  },

   {
    conjugation: "étions",
    person: "nous",
    type: "irregular",
    tense: imparfait,
    infinitive: "Être",
    english: "(To be)"
  },

   {
    conjugation: "iras",
    person: "tu",
    type: "irregular",
    tense: fs,
    infinitive: "Aller",
    english: "(To go)"
  },

  {
    conjugation: "étais allé(e)",
    person: "tu",
    type: "irregular",
    tense: pqp,
    infinitive: "Aller",
    english: "(To go)"
  },

   {
    conjugation: "vont",
    person: "ils/elles",
    type: "irregular",
    tense: p,
    infinitive: "Aller",
    english: "(To go)"
  },

  {
    conjugation: "est venu(e)",
    person: "il/elle",
    type: "irregular",
    tense: pc,
    infinitive: "Venir",
    english: "(To come)"
  },

  {
    conjugation: "parlerez",
    person: "vous",
    type: "regular -er",
    tense: fs,
    infinitive: "Parler",
    english: "(To talk)"
  },

    {
    conjugation: "avaient entendu",
    person: "ils/elles",
    type: "regular -re",
    tense: pqp,
    infinitive: "Entendre",
    english: "(To listen)"
  }
]

var avoir1sPres = {
  conjugation: "ai",
  person: "je",
  type: "irregular",
  tense: p,
  infinitive: "Avoir",
  english: "To have"
};

var etre1sPres = {
  conjugation: "suis",
  person: "je",
  type: "irregular",
  tense: p,
  infinitive: "Être",
  english: "To be"
};

var avoir3sPC = {
  conjugation: "a eu",
  person: "il/elle",
  type: "irregular",
  tense: pc,
  infinitive: "Avoir",
  english: "To have"
};
/*
var etre1pImparfait = {
  conjugation: "étions",
  person: "nous",
  type: "irregular",
  tense: imparfait,
  infinitive: "Être"
};

var aller2sFS = {
  conjugation: "iras",
  person: "tu",
  type: "irregular",
  tense: fs,
  infinitive: "Aller"
};

var aller2sPQP = {
  conjugation: "étais allé(e)",
  person: "tu",
  type: "irregular",
  tense: pqp,
  infinitive: "Aller"
};

var aller3pPres = {
  conjugation: "vont",
  person: "ils/elles",
  type: "irregular",
  tense: p,
  infinitive: "Aller"
};

var venir3sPC = {
  conjugation: "est venu(e)",
  person: "il/elle",
  type: "irregular",
  tense: pc,
  infinitive: "Venir"
};

var parler2pFS = {
  conjugation: "parlerez",
  person: "vous",
  type: "regular -er",
  tense: fs,
  infinitive: "Parler"
};

var entendre3pPQP = {
  conjugation: "avaient entendu",
  person: "ils/elles",
  type: "regular -re",
  tense: pqp,
  infinitive: "Entendre"
};
*/
