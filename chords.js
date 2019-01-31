const SYMBOLS = {
  sharp: '\u266F',
  flat: '\u266D',
  natural: '\u266E'
};

const INTERVALS = {
  'ROOT': {
    name: 'Root',
    semitones: 0
  },
  'ST': {
    name: 'Semi Tone',
    semitones: 1
  },
  'WT': {
    name: 'Whole Tone',
    semitones: 2
  },
  'm3': {
    name: 'Minor Third',
    semitones: 3
  },
  'M3': {
    name: 'Major Third',
    semitones: 4
  },
  'P4': {
    name: 'Perfect Fourth',
    semitones: 5
  },
  'D5': {
    name: 'Diminished Fifth',
    semitones: 6
  },
  'P5': {
    name: 'Perfect Fifth',
    semitones: 7
  },
  'A5': {
    name: 'Augmented Fifth',
    semitones: 8
  },
  'D7': {
    name: 'Diminished Seventh',
    semitones: 9
  },
  'm7': {
    name: 'Minor Seventh',
    semitones: 10
  },
  'M7': {
    name: 'Major Seventh',
    semitones: 11
  }
};

const QUALITIES = {
  maj: {
    name: 'Major'
  },
  min: {
    name: 'Minor'
  },
  dom: {
    name: 'Dominant'
  },
  dim: {
    name: 'Diminished'
  },
  aug: {
    name: 'Augmented'
  }
}

const NOTES = {
  'C_FLAT': {
    name: 'C Flat',
    symbol: makeSymbol('C', 'flat')
  },
  'C': {
    name: 'C',
    symbol: 'C'
  },
  'C_SHARP': {
    name: 'C Sharp',
    symbol: makeSymbol('C', 'sharp')
  },
  'D_FLAT': {
    name: 'D Flat',
    symbol: makeSymbol('D', 'flat')
  },
  'D': {
    name: 'D',
    symbol: 'D'
  },
  'D_SHARP': {
    name: 'D Sharp',
    symbol: makeSymbol('D', 'sharp')
  },
  'E_FLAT': {
    name: 'E Flat',
    symbol: makeSymbol('E', 'flat')
  },
  'E': {
    name: 'E',
    symbol: 'E'
  },
  'E_SHARP': {
    name: 'E Sharp',
    symbol: makeSymbol('E', 'sharp')
  },
  'F_FLAT': {
    name: 'F Flat',
    symbol: makeSymbol('F', 'flat')
  },
  'F': {
    name: 'F',
    symbol: 'F'
  },
  'F_SHARP': {
    name: 'F Sharp',
    symbol: makeSymbol('F', 'sharp')
  },
  'G_FLAT': {
    name: 'G Flat',
    symbol: makeSymbol('G', 'flat')
  },
  'G': {
    name: 'G',
    symbol: 'G'
  },
  'G_SHARP': {
    name: 'G Sharp',
    symbol: makeSymbol('G', 'sharp')
  },
  'A_FLAT': {
    name: 'A Flat',
    symbol: makeSymbol('A', 'flat')
  },
  'A': {
    name: 'A',
    symbol: 'A'
  },
  'A_SHARP': {
    name: 'A Sharp',
    symbol: makeSymbol('A', 'sharp')
  },
  'B_FLAT': {
    name: 'B Flat',
    symbol: makeSymbol('B', 'flat')
  },
  'B': {
    name: 'B',
    symbol: 'B'
  },
  'B_SHARP': {
    name: 'B Sharp',
    symbol: makeSymbol('B', 'sharp')
  },
};

const SCALES = {
  chromatic: {
    name: 'Chromatic Scale',
    scale: [
      NOTES.C,
      NOTES.C_SHARP,
      NOTES.D,
      NOTES.D_SHARP,
      NOTES.E,
      NOTES.F,
      NOTES.F_SHARP,
      NOTES.G,
      NOTES.G_SHARP,
      NOTES.A,
      NOTES.A_SHARP,
      NOTES.B,
    ],
    intervals: [
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST,
      INTERVALS.ST
    ]
  },
  major: {
    name: 'Major Scale',
    intervals: [
      INTERVALS.WT,
      INTERVALS.WT,
      INTERVALS.ST,
      INTERVALS.WT,
      INTERVALS.WT,
      INTERVALS.WT,
      INTERVALS.ST
    ]
  }
}

const TUNINGS = {
  standard: {
    name: 'Standard Tuning',
    key: 'standard',
    tuningSequence: [
      NOTES.E,
      NOTES.B,
      NOTES.G,
      NOTES.D,
      NOTES.A,
      NOTES.E
    ],
    intervals: [
      INTERVALS.P4,
      INTERVALS.M3,
      INTERVALS.P4,
      INTERVALS.P4,
      INTERVALS.P4,
      INTERVALS.P4
    ]
  },

  dropD: {
    name: 'Drop D Tuning',
    key: 'dropD',
    tuningSequence: [
      NOTES.E,
      NOTES.B,
      NOTES.G,
      NOTES.D,
      NOTES.A,
      NOTES.D
    ],
    intervals: [
      INTERVALS.P4,
      INTERVALS.M3,
      INTERVALS.P4,
      INTERVALS.P4,
      INTERVALS.P4,
      INTERVALS.P5
    ]
  }
};

const FRET_POSITION = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  'X': 'X',
  'NONE': 'NONE'
};

const VOICING_TYPES = {
  augTriad: {
    short: '+',
    long: 'aug'
  },
  augSeventh: {
    short: '+7',
    long: 'aug7'
  },
  dimTriad: {
    short: 'dim',
    long: 'dim'
  },
  dimSeventh: {
    short: 'dim7',
    long: 'dim7'
  },
  domSeventh: {
    short: '7',
    long: 'dom7'
  },
  halfDimSeventh: {
    short: 'ø7',
    long: 'ø7'
  },
  majTriad: {
    short: '',
    long: 'maj'
  },
  majSixth: {
    short: 'M6',
    long: 'maj6'
  },
  majSeventh: {
    short: 'M7',
    long: 'maj7'
  },
  majNinth: {
    short: 'M9',
    long: 'maj9'
  },
  minTriad: {
    short: 'm',
    long: 'min'
  },
  minSixth: {
    short: 'm6',
    long: 'min6'
  },
  minSeventh: {
    short: 'm7',
    long: 'min7'
  },
  minNinth: {
    short: 'm9',
    long: 'min9'
  },
  minMajSeventh: {
    short: 'm(M7)',
    long: 'min(maj7)'
  }
};

/**
 * Create a guitar with a tuning and a fretboard
 * @param {Tuning} tuning A guitar tuning
 */

function Guitar (tuning) {
  this.tuning = tuning;
  this.fretboard = this.tune(tuning.tuningSequence, SCALES.chromatic.scale);
}

/**
 * Tune a guitar
 * @param {TuningSequence} tuningSequence - A guitar tuning sequence
 * @param {Scale} scale - A scale from which to generate a fretboard
 */

Guitar.prototype.tune = function (tuningSequence, scale) {
  let strings = []

  for (let note of tuningSequence) {
    let noteIndex = scale.findIndex(e => e.name === note.name)
    let tunedString = [...scale];
    let extracted = tunedString.splice(0, noteIndex);
    tunedString.push(...extracted);
    strings.push([...tunedString, ...tunedString]);
  }

  return strings;
}

/**
 * Create a chord
 * @param {Voicing} voicing A chord voicing
 * @param {number} position A fret position integer
 * 
 * A chord is derived from a voicing and a fret position.
 */

function Chord (voicing, position) {
  this.voicing = voicing;
  this.position = position;
  this.notes = this.chordNotes(voicing.structure, position);
  this.rootNote = this.getRootNote(voicing, position);
  this.symbol = this.rootNote ? this.rootNote.symbol : undefined;
  this.shortName = `${this.symbol}${voicing.type.short}`;
  this.longName = `${this.symbol}${voicing.type.long}`;
}

/**
 * Get the root note of a voicing
 * @param {Voicing} voicing A chord voicing
 * @param {number} position A fret position integer
 */

Chord.prototype.getRootNote = function (voicing, position) {
  let rootString = voicing.intervals.findIndex(i => i === INTERVALS.ROOT);
  let rootPos = voicing.structure[rootString];
  return GUITARS[voicing.tuning.key].fretboard[rootString][position + rootPos];
}

/**
 * Create an array of the note positions
 * @param {Array} voicingStructure A chord voicing structure
 * @param {number} position A fret position integer
 */

Chord.prototype.chordNotes = function (voicingStructure, position) {
  return voicingStructure.map(n => {
    return typeof n === 'number'
      ? n + position
      : n;
  });
}

/**
 * Create a chord voicing
 * @param {VoicingParams} params - A voicing params object
 * 
 * A Voicing is a position and note agnostic interval pattern. It is a
 * chord shape. When combined with a position we can derive a chord name.
 */

function Voicing (params) {
  this.description = params.description;
  this.quality = params.quality;
  this.structure = params.structure;
  this.intervals = params.intervals;
  this.tuning = params.tuning;
  this.type = params.type;
  this.width = params.width;
}

/**
 * Create a note symbol
 * @param {*} note 
 * @param {*} key 
 */

function makeSymbol (note, key) {
  return `${note}${SYMBOLS[key]}`
}

let GUITARS = {
  standard: new Guitar(TUNINGS.standard),
  dropD:    new Guitar(TUNINGS.dropD)
};

/**
 *    Major Triad - 1
 *    Standard Tuning
 * 
 *    | o |   |   |   |
 *    | o |   |   |   |
 *    |   | o |   |   |
 *    |   |   | o |   |
 *   x|   |   |   |   |
 *   x|   |   |   |   |
 */

const majorTriadv1 = new Voicing({
  quality: QUALITIES.maj,
  type: VOICING_TYPES.majTriad,
  description: 'Major Triad 1',
  tuning: TUNINGS.standard,
  structure: [
    FRET_POSITION['0'], 
    FRET_POSITION['0'], 
    FRET_POSITION['1'],
    FRET_POSITION['2'],
    FRET_POSITION['X'],
    FRET_POSITION['X']
  ],
  intervals: [
    INTERVALS.ROOT,
    INTERVALS.P5,
    INTERVALS.M3,
    INTERVALS.ROOT,
    null,
    null
  ]
});

/**
 *    Major Triad - 2
 *    Standard Tuning
 * 
 *    | o |   |   |   |
 *    |   | o |   |   |
 *    | o |   |   |   |
 *    |   |   | o |   |
 *    |   |   |   | o |
 *   x|   |   |   |   |
 */

const majorTriadv2 = new Voicing({
  quality: QUALITIES.maj,
  type: VOICING_TYPES.majTriad,
  description: 'Major triad with muted Low-E',
  tuning: TUNINGS.standard,
  width: 4,
  structure: [
    FRET_POSITION['0'], 
    FRET_POSITION['1'], 
    FRET_POSITION['0'],
    FRET_POSITION['2'],
    FRET_POSITION['3'],
    FRET_POSITION['X']
  ],
  intervals: [
    INTERVALS.M3,
    INTERVALS.ROOT,
    INTERVALS.P5,
    INTERVALS.M3,
    INTERVALS.ROOT,
    null
  ]
});

/**
 *    Major Triad - 3
 *    Drop D Tuning
 * 
 *    |   |   | o |   |
 *    |   |   |   | o |
 *    |   |   | o |   |
 *    | o |   |   |   |
 *    | o |   |   |   |
 *    | o |   |   |   |
 */

const majorTriadv3 = new Voicing({
  quality: QUALITIES.maj,
  type: VOICING_TYPES.majTriad,
  description: 'Major Triad 3',
  tuning: TUNINGS.dropD,
  width: 4,
  structure: [
    FRET_POSITION['2'], 
    FRET_POSITION['3'], 
    FRET_POSITION['2'],
    FRET_POSITION['0'],
    FRET_POSITION['0'],
    FRET_POSITION['0']
  ],
  intervals: [
    INTERVALS.M3,
    INTERVALS.ROOT,
    INTERVALS.P5,
    INTERVALS.ROOT,
    INTERVALS.P5,
    INTERVALS.ROOT
  ]
});

/**
 *    Minor Seventh - 1
 *    Standard Tuning
 * 
 *    | o |   |   |   |
 *    |   | o |   |   |
 *    | o |   |   |   |
 *    |   |   | o |   |
 *    |   |   |   | o |
 *   x|   |   |   |   |
 */

const minorSev1 = new Voicing({
  quality: QUALITIES.min,
  type: VOICING_TYPES.minSeventh,
  description: 'Minor Seventh 1',
  tuning: TUNINGS.standard,
  width: 1,
  structure: [
    FRET_POSITION['0'], 
    FRET_POSITION['0'], 
    FRET_POSITION['0'],
    FRET_POSITION['0'],
    FRET_POSITION['X'],
    FRET_POSITION['0']
  ],
  intervals: [
    INTERVALS.ROOT,
    INTERVALS.P5,
    INTERVALS.m3,
    INTERVALS.m7,
    null,
    INTERVALS.ROOT
  ]
});

let VOICINGS = [
  majorTriadv1,
  majorTriadv2,
  majorTriadv3,
  minorSev1
];


/**
 * Generate chord voicings
 */

for (let x = 0; x < VOICINGS.length; x++) {
  let voicing = VOICINGS[x];
  let len = GUITARS[voicing.tuning.key].fretboard[0].length - voicing.width;
  let row = div({
    classList: ['row']
  });
  let charts = [];

  for (let i = 0; i <= len; i++) {
    let chart = new Chord(voicing, i);
    console.log(chart);
    charts.push(chordChart(chart));
  }

  row.append(...charts);
  document.querySelector('#main').appendChild(row);
}

/**
 * Prepare for some DOMination
 * @param {Chord} chord 
 */

function chordChart (chord) {
  let item = div({
    classList: ['item']
  });

  let chartContainer = div({
    classList: [
      'chord-chart',
      (chord.position === 0) ? 'o' : 'a'
    ]
  });
  
  let stringsContainer = div({
    classList: ['strings']
  });

  let strings = document.createDocumentFragment();

  for (let i = 0; i < chord.voicing.structure.length; i++) {
    let notePosition = chord.voicing.structure[i];

    let stringEl = div({
      classList: [
        'str',
        `str-${i + 1}`
      ]
    });

    let noteEl = div({
      classList: [
        'note',
        `pos-${(notePosition === 'X' ? 0 : notePosition)}`,
        (notePosition === 'X' ? 'x' : 'a')
      ]
    });

    stringEl.appendChild(noteEl);
    strings.appendChild(stringEl);
  }

  let fretsContainer = div({
    classList: ['frets']
  });

  let frets = document.createDocumentFragment();

  for (let x of Array(6)) {
    let fretEl = div({
      classList: ['fret']
    });
    frets.appendChild(fretEl);
  }

  const label = div({
    classList: ['label']
  })

  const positionLabel = div({
    classList: ['position-label']
  })

  positionLabel.innerHTML = chord.position;
  label.innerHTML = chord.longName;

  stringsContainer.appendChild(strings);
  fretsContainer.appendChild(frets);
  chartContainer.appendChild(stringsContainer);
  chartContainer.appendChild(fretsContainer);
  item.appendChild(chartContainer);
  item.appendChild(positionLabel);
  item.prepend(label);
  return item;
}

function div (opts) {
  let el = document.createElement('div');
  el.classList.add(...opts.classList);
  return el;
}