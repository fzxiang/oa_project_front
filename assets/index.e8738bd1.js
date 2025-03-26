var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as _export_sfc, B as withInstall } from "./index.59040ad2.js";
import { d as defineComponent, I as Input, Q as ref, O as computed, aq as watchEffect, w as watch, b as unref, r as resolveComponent, o as openBlock, R as createElementBlock, c as createBlock, aH as createSlots, as as renderList, e as withCtx, ac as renderSlot, aG as normalizeProps, aQ as guardReactiveProps, aa as mergeProps, ai as createCommentVNode, V as createBaseVNode, X as normalizeClass } from "./vendor.faf2de98.js";
import { p as propTypes, d as useDesign } from "./index.32a28c82.js";
const empty = (obj) => Object.keys(obj).length === 0;
const extend = (listToExtend, list) => listToExtend.push.apply(listToExtend, list);
const translate = (string, chrMap) => {
  const tempArray = string.split("");
  return tempArray.map((char) => chrMap[char] || char).join("");
};
const sorted = (matches) => matches.sort((m1, m2) => m1.i - m2.i || m1.j - m2.j);
const buildRankedDictionary = (orderedList) => {
  const result = {};
  let counter = 1;
  orderedList.forEach((word) => {
    result[word] = counter;
    counter += 1;
  });
  return result;
};
var dateSplits = {
  4: [[1, 2], [2, 3]],
  5: [[1, 3], [2, 3]],
  6: [[1, 2], [2, 4], [4, 5]],
  7: [[1, 3], [2, 3], [4, 5], [4, 6]],
  8: [[2, 4], [4, 6]]
};
const DATE_MAX_YEAR = 2050;
const DATE_MIN_YEAR = 1e3;
const DATE_SPLITS = dateSplits;
const BRUTEFORCE_CARDINALITY = 10;
const MIN_GUESSES_BEFORE_GROWING_SEQUENCE = 1e4;
const MIN_SUBMATCH_GUESSES_SINGLE_CHAR = 10;
const MIN_SUBMATCH_GUESSES_MULTI_CHAR = 50;
const MIN_YEAR_SPACE = 20;
const START_UPPER = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/;
const END_UPPER = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/;
const ALL_UPPER = /^[A-Z\xbf-\xdf]+$/;
const ALL_UPPER_INVERTED = /^[^a-z\xdf-\xff]+$/;
const ALL_LOWER = /^[a-z\xdf-\xff]+$/;
const ALL_LOWER_INVERTED = /^[^A-Z\xbf-\xdf]+$/;
const ONE_UPPER = /[a-z\xdf-\xff]/;
const ONE_LOWER = /[A-Z\xbf-\xdf]/;
const ALPHA_INVERTED = /[^A-Za-z\xbf-\xdf]/gi;
const ALL_DIGIT = /^\d+$/;
const REFERENCE_YEAR = new Date().getFullYear();
const REGEXEN = {
  recentYear: /19\d\d|200\d|201\d|202\d/g
};
class MatchDate {
  match({
    password
  }) {
    const matches = [...this.getMatchesWithoutSeparator(password), ...this.getMatchesWithSeparator(password)];
    const filteredMatches = this.filterNoise(matches);
    return sorted(filteredMatches);
  }
  getMatchesWithSeparator(password) {
    const matches = [];
    const maybeDateWithSeparator = /^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;
    for (let i = 0; i <= Math.abs(password.length - 6); i += 1) {
      for (let j = i + 5; j <= i + 9; j += 1) {
        if (j >= password.length) {
          break;
        }
        const token = password.slice(i, +j + 1 || 9e9);
        const regexMatch = maybeDateWithSeparator.exec(token);
        if (regexMatch != null) {
          const dmy = this.mapIntegersToDayMonthYear([parseInt(regexMatch[1], 10), parseInt(regexMatch[3], 10), parseInt(regexMatch[4], 10)]);
          if (dmy != null) {
            matches.push({
              pattern: "date",
              token,
              i,
              j,
              separator: regexMatch[2],
              year: dmy.year,
              month: dmy.month,
              day: dmy.day
            });
          }
        }
      }
    }
    return matches;
  }
  getMatchesWithoutSeparator(password) {
    const matches = [];
    const maybeDateNoSeparator = /^\d{4,8}$/;
    const metric = (candidate) => Math.abs(candidate.year - REFERENCE_YEAR);
    for (let i = 0; i <= Math.abs(password.length - 4); i += 1) {
      for (let j = i + 3; j <= i + 7; j += 1) {
        if (j >= password.length) {
          break;
        }
        const token = password.slice(i, +j + 1 || 9e9);
        if (maybeDateNoSeparator.exec(token)) {
          const candidates = [];
          const index = token.length;
          const splittedDates = DATE_SPLITS[index];
          splittedDates.forEach(([k, l]) => {
            const dmy = this.mapIntegersToDayMonthYear([parseInt(token.slice(0, k), 10), parseInt(token.slice(k, l), 10), parseInt(token.slice(l), 10)]);
            if (dmy != null) {
              candidates.push(dmy);
            }
          });
          if (candidates.length > 0) {
            let bestCandidate = candidates[0];
            let minDistance = metric(candidates[0]);
            candidates.slice(1).forEach((candidate) => {
              const distance = metric(candidate);
              if (distance < minDistance) {
                bestCandidate = candidate;
                minDistance = distance;
              }
            });
            matches.push({
              pattern: "date",
              token,
              i,
              j,
              separator: "",
              year: bestCandidate.year,
              month: bestCandidate.month,
              day: bestCandidate.day
            });
          }
        }
      }
    }
    return matches;
  }
  filterNoise(matches) {
    return matches.filter((match) => {
      let isSubmatch = false;
      const matchesLength = matches.length;
      for (let o = 0; o < matchesLength; o += 1) {
        const otherMatch = matches[o];
        if (match !== otherMatch) {
          if (otherMatch.i <= match.i && otherMatch.j >= match.j) {
            isSubmatch = true;
            break;
          }
        }
      }
      return !isSubmatch;
    });
  }
  mapIntegersToDayMonthYear(integers) {
    if (integers[1] > 31 || integers[1] <= 0) {
      return null;
    }
    let over12 = 0;
    let over31 = 0;
    let under1 = 0;
    for (let o = 0, len1 = integers.length; o < len1; o += 1) {
      const int = integers[o];
      if (int > 99 && int < DATE_MIN_YEAR || int > DATE_MAX_YEAR) {
        return null;
      }
      if (int > 31) {
        over31 += 1;
      }
      if (int > 12) {
        over12 += 1;
      }
      if (int <= 0) {
        under1 += 1;
      }
    }
    if (over31 >= 2 || over12 === 3 || under1 >= 2) {
      return null;
    }
    return this.getDayMonth(integers);
  }
  getDayMonth(integers) {
    const possibleYearSplits = [
      [integers[2], integers.slice(0, 2)],
      [integers[0], integers.slice(1, 3)]
    ];
    const possibleYearSplitsLength = possibleYearSplits.length;
    for (let j = 0; j < possibleYearSplitsLength; j += 1) {
      const [y, rest] = possibleYearSplits[j];
      if (DATE_MIN_YEAR <= y && y <= DATE_MAX_YEAR) {
        const dm = this.mapIntegersToDayMonth(rest);
        if (dm != null) {
          return {
            year: y,
            month: dm.month,
            day: dm.day
          };
        }
        return null;
      }
    }
    for (let k = 0; k < possibleYearSplitsLength; k += 1) {
      const [y, rest] = possibleYearSplits[k];
      const dm = this.mapIntegersToDayMonth(rest);
      if (dm != null) {
        return {
          year: this.twoToFourDigitYear(y),
          month: dm.month,
          day: dm.day
        };
      }
    }
    return null;
  }
  mapIntegersToDayMonth(integers) {
    const temp = [integers, integers.slice().reverse()];
    for (let i = 0; i < temp.length; i += 1) {
      const data = temp[i];
      const day = data[0];
      const month = data[1];
      if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
        return {
          day,
          month
        };
      }
    }
    return null;
  }
  twoToFourDigitYear(year) {
    if (year > 99) {
      return year;
    }
    if (year > 50) {
      return year + 1900;
    }
    return year + 2e3;
  }
}
var l33tTable = {
  a: ["4", "@"],
  b: ["8"],
  c: ["(", "{", "[", "<"],
  e: ["3"],
  g: ["6", "9"],
  i: ["1", "!", "|"],
  l: ["1", "|", "7"],
  o: ["0"],
  s: ["$", "5"],
  t: ["+", "7"],
  x: ["%"],
  z: ["2"]
};
var translationKeys = {
  warnings: {
    straightRow: "straightRow",
    keyPattern: "keyPattern",
    simpleRepeat: "simpleRepeat",
    extendedRepeat: "extendedRepeat",
    sequences: "sequences",
    recentYears: "recentYears",
    dates: "dates",
    topTen: "topTen",
    topHundred: "topHundred",
    common: "common",
    similarToCommon: "similarToCommon",
    wordByItself: "wordByItself",
    namesByThemselves: "namesByThemselves",
    commonNames: "commonNames",
    userInputs: "userInputs"
  },
  suggestions: {
    l33t: "l33t",
    reverseWords: "reverseWords",
    allUppercase: "allUppercase",
    capitalization: "capitalization",
    dates: "dates",
    recentYears: "recentYears",
    associatedYears: "associatedYears",
    sequences: "sequences",
    repeated: "repeated",
    longerKeyboardPattern: "longerKeyboardPattern",
    anotherWord: "anotherWord",
    useWords: "useWords",
    noNeed: "noNeed"
  },
  timeEstimation: {
    ltSecond: "ltSecond",
    second: "second",
    seconds: "seconds",
    minute: "minute",
    minutes: "minutes",
    hour: "hour",
    hours: "hours",
    day: "day",
    days: "days",
    month: "month",
    months: "months",
    year: "year",
    years: "years",
    centuries: "centuries"
  }
};
class Options {
  constructor() {
    this.matchers = {};
    this.l33tTable = l33tTable;
    this.dictionary = {
      userInputs: []
    };
    this.rankedDictionaries = {};
    this.translations = translationKeys;
    this.graphs = {};
    this.availableGraphs = [];
    this.setRankedDictionaries();
  }
  setOptions(options = {}) {
    if (options.l33tTable) {
      this.l33tTable = options.l33tTable;
    }
    if (options.dictionary) {
      this.dictionary = options.dictionary;
      this.setRankedDictionaries();
    }
    if (options.translations) {
      this.setTranslations(options.translations);
    }
    if (options.graphs) {
      this.graphs = options.graphs;
    }
  }
  setTranslations(translations) {
    if (this.checkCustomTranslations(translations)) {
      this.translations = translations;
    } else {
      throw new Error("Invalid translations object fallback to keys");
    }
  }
  checkCustomTranslations(translations) {
    let valid = true;
    Object.keys(translationKeys).forEach((type) => {
      if (type in translations) {
        const translationType = type;
        Object.keys(translationKeys[translationType]).forEach((key) => {
          if (!(key in translations[translationType])) {
            valid = false;
          }
        });
      } else {
        valid = false;
      }
    });
    return valid;
  }
  setRankedDictionaries() {
    const rankedDictionaries = {};
    Object.keys(this.dictionary).forEach((name) => {
      rankedDictionaries[name] = this.getRankedDictionary(name);
    });
    this.rankedDictionaries = rankedDictionaries;
  }
  getRankedDictionary(name) {
    const list = this.dictionary[name];
    if (name === "userInputs") {
      const sanitizedInputs = [];
      list.forEach((input) => {
        const inputType = typeof input;
        if (inputType === "string" || inputType === "number" || inputType === "boolean") {
          sanitizedInputs.push(input.toString().toLowerCase());
        }
      });
      return buildRankedDictionary(sanitizedInputs);
    }
    return buildRankedDictionary(list);
  }
  extendUserInputsDictionary(dictionary) {
    if (this.dictionary.userInputs) {
      this.dictionary.userInputs = [...this.dictionary.userInputs, ...dictionary];
    } else {
      this.dictionary.userInputs = dictionary;
    }
    this.rankedDictionaries.userInputs = this.getRankedDictionary("userInputs");
  }
  addMatcher(name, matcher) {
    if (this.matchers[name]) {
      console.info("Matcher already exists");
    } else {
      this.matchers[name] = matcher;
    }
  }
}
var Options$1 = new Options();
class MatchL33t$1 {
  constructor(defaultMatch) {
    this.defaultMatch = defaultMatch;
  }
  match({
    password
  }) {
    const passwordReversed = password.split("").reverse().join("");
    return this.defaultMatch({
      password: passwordReversed
    }).map((match) => __spreadProps(__spreadValues({}, match), {
      token: match.token.split("").reverse().join(""),
      reversed: true,
      i: password.length - 1 - match.j,
      j: password.length - 1 - match.i
    }));
  }
}
class MatchL33t {
  constructor(defaultMatch) {
    this.defaultMatch = defaultMatch;
  }
  match({
    password
  }) {
    const matches = [];
    const enumeratedSubs = this.enumerateL33tSubs(this.relevantL33tSubtable(password, Options$1.l33tTable));
    for (let i = 0; i < enumeratedSubs.length; i += 1) {
      const sub = enumeratedSubs[i];
      if (empty(sub)) {
        break;
      }
      const subbedPassword = translate(password, sub);
      const matchedDictionary = this.defaultMatch({
        password: subbedPassword
      });
      matchedDictionary.forEach((match) => {
        const token = password.slice(match.i, +match.j + 1 || 9e9);
        if (token.toLowerCase() !== match.matchedWord) {
          const matchSub = {};
          Object.keys(sub).forEach((subbedChr) => {
            const chr = sub[subbedChr];
            if (token.indexOf(subbedChr) !== -1) {
              matchSub[subbedChr] = chr;
            }
          });
          const subDisplay = Object.keys(matchSub).map((k) => `${k} -> ${matchSub[k]}`).join(", ");
          matches.push(__spreadProps(__spreadValues({}, match), {
            l33t: true,
            token,
            sub: matchSub,
            subDisplay
          }));
        }
      });
    }
    return matches.filter((match) => match.token.length > 1);
  }
  relevantL33tSubtable(password, table) {
    const passwordChars = {};
    const subTable = {};
    password.split("").forEach((char) => {
      passwordChars[char] = true;
    });
    Object.keys(table).forEach((letter) => {
      const subs = table[letter];
      const relevantSubs = subs.filter((sub) => sub in passwordChars);
      if (relevantSubs.length > 0) {
        subTable[letter] = relevantSubs;
      }
    });
    return subTable;
  }
  enumerateL33tSubs(table) {
    const tableKeys = Object.keys(table);
    const subs = this.getSubs(tableKeys, [[]], table);
    return subs.map((sub) => {
      const subDict = {};
      sub.forEach(([l33tChr, chr]) => {
        subDict[l33tChr] = chr;
      });
      return subDict;
    });
  }
  getSubs(keys, subs, table) {
    if (!keys.length) {
      return subs;
    }
    const firstKey = keys[0];
    const restKeys = keys.slice(1);
    const nextSubs = [];
    table[firstKey].forEach((l33tChr) => {
      subs.forEach((sub) => {
        let dupL33tIndex = -1;
        for (let i = 0; i < sub.length; i += 1) {
          if (sub[i][0] === l33tChr) {
            dupL33tIndex = i;
            break;
          }
        }
        if (dupL33tIndex === -1) {
          const subExtension = sub.concat([[l33tChr, firstKey]]);
          nextSubs.push(subExtension);
        } else {
          const subAlternative = sub.slice(0);
          subAlternative.splice(dupL33tIndex, 1);
          subAlternative.push([l33tChr, firstKey]);
          nextSubs.push(sub);
          nextSubs.push(subAlternative);
        }
      });
    });
    const newSubs = this.dedup(nextSubs);
    if (restKeys.length) {
      return this.getSubs(restKeys, newSubs, table);
    }
    return newSubs;
  }
  dedup(subs) {
    const deduped = [];
    const members = {};
    subs.forEach((sub) => {
      const assoc = sub.map((k, index) => [k, index]);
      assoc.sort();
      const label = assoc.map(([k, v]) => `${k},${v}`).join("-");
      if (!(label in members)) {
        members[label] = true;
        deduped.push(sub);
      }
    });
    return deduped;
  }
}
class MatchDictionary {
  constructor() {
    this.l33t = new MatchL33t(this.defaultMatch);
    this.reverse = new MatchL33t$1(this.defaultMatch);
  }
  match({
    password
  }) {
    const matches = [...this.defaultMatch({
      password
    }), ...this.reverse.match({
      password
    }), ...this.l33t.match({
      password
    })];
    return sorted(matches);
  }
  defaultMatch({
    password
  }) {
    const matches = [];
    const passwordLength = password.length;
    const passwordLower = password.toLowerCase();
    Object.keys(Options$1.rankedDictionaries).forEach((dictionaryName) => {
      const rankedDict = Options$1.rankedDictionaries[dictionaryName];
      for (let i = 0; i < passwordLength; i += 1) {
        for (let j = i; j < passwordLength; j += 1) {
          if (passwordLower.slice(i, +j + 1 || 9e9) in rankedDict) {
            const word = passwordLower.slice(i, +j + 1 || 9e9);
            const rank = rankedDict[word];
            matches.push({
              pattern: "dictionary",
              i,
              j,
              token: password.slice(i, +j + 1 || 9e9),
              matchedWord: word,
              rank,
              dictionaryName,
              reversed: false,
              l33t: false
            });
          }
        }
      }
    });
    return matches;
  }
}
class MatchRegex {
  match({
    password,
    regexes = REGEXEN
  }) {
    const matches = [];
    Object.keys(regexes).forEach((name) => {
      const regex = regexes[name];
      regex.lastIndex = 0;
      const regexMatch = regex.exec(password);
      if (regexMatch) {
        const token = regexMatch[0];
        matches.push({
          pattern: "regex",
          token,
          i: regexMatch.index,
          j: regexMatch.index + regexMatch[0].length - 1,
          regexName: name,
          regexMatch
        });
      }
    });
    return sorted(matches);
  }
}
var utils = {
  nCk(n, k) {
    let count = n;
    if (k > count) {
      return 0;
    }
    if (k === 0) {
      return 1;
    }
    let coEff = 1;
    for (let i = 1; i <= k; i += 1) {
      coEff *= count;
      coEff /= i;
      count -= 1;
    }
    return coEff;
  },
  log10(n) {
    return Math.log(n) / Math.log(10);
  },
  log2(n) {
    return Math.log(n) / Math.log(2);
  },
  factorial(num) {
    let rval = 1;
    for (let i = 2; i <= num; i += 1)
      rval *= i;
    return rval;
  }
};
var bruteforceMatcher$1 = ({
  token
}) => {
  let guesses = BRUTEFORCE_CARDINALITY ** token.length;
  if (guesses === Number.POSITIVE_INFINITY) {
    guesses = Number.MAX_VALUE;
  }
  let minGuesses;
  if (token.length === 1) {
    minGuesses = MIN_SUBMATCH_GUESSES_SINGLE_CHAR + 1;
  } else {
    minGuesses = MIN_SUBMATCH_GUESSES_MULTI_CHAR + 1;
  }
  return Math.max(guesses, minGuesses);
};
var dateMatcher$1 = ({
  year,
  separator
}) => {
  const yearSpace = Math.max(Math.abs(year - REFERENCE_YEAR), MIN_YEAR_SPACE);
  let guesses = yearSpace * 365;
  if (separator) {
    guesses *= 4;
  }
  return guesses;
};
const getVariations = (cleanedWord) => {
  const wordArray = cleanedWord.split("");
  const upperCaseCount = wordArray.filter((char) => char.match(ONE_UPPER)).length;
  const lowerCaseCount = wordArray.filter((char) => char.match(ONE_LOWER)).length;
  let variations = 0;
  const variationLength = Math.min(upperCaseCount, lowerCaseCount);
  for (let i = 1; i <= variationLength; i += 1) {
    variations += utils.nCk(upperCaseCount + lowerCaseCount, i);
  }
  return variations;
};
var uppercaseVariant = (word) => {
  const cleanedWord = word.replace(ALPHA_INVERTED, "");
  if (cleanedWord.match(ALL_LOWER_INVERTED) || cleanedWord.toLowerCase() === cleanedWord) {
    return 1;
  }
  const commonCases = [START_UPPER, END_UPPER, ALL_UPPER_INVERTED];
  const commonCasesLength = commonCases.length;
  for (let i = 0; i < commonCasesLength; i += 1) {
    const regex = commonCases[i];
    if (cleanedWord.match(regex)) {
      return 2;
    }
  }
  return getVariations(cleanedWord);
};
const getCounts = ({
  subs,
  subbed,
  token
}) => {
  const unsubbed = subs[subbed];
  const chrs = token.toLowerCase().split("");
  const subbedCount = chrs.filter((char) => char === subbed).length;
  const unsubbedCount = chrs.filter((char) => char === unsubbed).length;
  return {
    subbedCount,
    unsubbedCount
  };
};
var l33tVariant = ({
  l33t,
  sub,
  token
}) => {
  if (!l33t) {
    return 1;
  }
  let variations = 1;
  const subs = sub;
  Object.keys(subs).forEach((subbed) => {
    const {
      subbedCount,
      unsubbedCount
    } = getCounts({
      subs,
      subbed,
      token
    });
    if (subbedCount === 0 || unsubbedCount === 0) {
      variations *= 2;
    } else {
      const p = Math.min(unsubbedCount, subbedCount);
      let possibilities = 0;
      for (let i = 1; i <= p; i += 1) {
        possibilities += utils.nCk(unsubbedCount + subbedCount, i);
      }
      variations *= possibilities;
    }
  });
  return variations;
};
var dictionaryMatcher$1 = ({
  rank,
  reversed,
  l33t,
  sub,
  token
}) => {
  const baseGuesses = rank;
  const uppercaseVariations = uppercaseVariant(token);
  const l33tVariations = l33tVariant({
    l33t,
    sub,
    token
  });
  const reversedVariations = reversed && 2 || 1;
  const calculation = baseGuesses * uppercaseVariations * l33tVariations * reversedVariations;
  return {
    baseGuesses,
    uppercaseVariations,
    l33tVariations,
    calculation
  };
};
var regexMatcher$1 = ({
  regexName,
  regexMatch,
  token
}) => {
  const charClassBases = {
    alphaLower: 26,
    alphaUpper: 26,
    alpha: 52,
    alphanumeric: 62,
    digits: 10,
    symbols: 33
  };
  if (regexName in charClassBases) {
    return charClassBases[regexName] ** token.length;
  }
  switch (regexName) {
    case "recentYear":
      return Math.max(Math.abs(parseInt(regexMatch[0], 10) - REFERENCE_YEAR), MIN_YEAR_SPACE);
  }
  return 0;
};
var repeatMatcher$1 = ({
  baseGuesses,
  repeatCount
}) => baseGuesses * repeatCount;
var sequenceMatcher$1 = ({
  token,
  ascending
}) => {
  const firstChr = token.charAt(0);
  let baseGuesses = 0;
  const startingPoints = ["a", "A", "z", "Z", "0", "1", "9"];
  if (startingPoints.includes(firstChr)) {
    baseGuesses = 4;
  } else if (firstChr.match(/\d/)) {
    baseGuesses = 10;
  } else {
    baseGuesses = 26;
  }
  if (!ascending) {
    baseGuesses *= 2;
  }
  return baseGuesses * token.length;
};
const calcAverageDegree = (graph) => {
  let average = 0;
  Object.keys(graph).forEach((key) => {
    const neighbors = graph[key];
    average += neighbors.filter((entry) => !!entry).length;
  });
  average /= Object.entries(graph).length;
  return average;
};
const estimatePossiblePatterns = ({
  token,
  graph,
  turns
}) => {
  const startingPosition = Object.keys(Options$1.graphs[graph]).length;
  const averageDegree = calcAverageDegree(Options$1.graphs[graph]);
  let guesses = 0;
  const tokenLength = token.length;
  for (let i = 2; i <= tokenLength; i += 1) {
    const possibleTurns = Math.min(turns, i - 1);
    for (let j = 1; j <= possibleTurns; j += 1) {
      guesses += utils.nCk(i - 1, j - 1) * startingPosition * averageDegree ** j;
    }
  }
  return guesses;
};
var spatialMatcher$1 = ({
  graph,
  token,
  shiftedCount,
  turns
}) => {
  let guesses = estimatePossiblePatterns({
    token,
    graph,
    turns
  });
  if (shiftedCount) {
    const unShiftedCount = token.length - shiftedCount;
    if (shiftedCount === 0 || unShiftedCount === 0) {
      guesses *= 2;
    } else {
      let shiftedVariations = 0;
      for (let i = 1; i <= Math.min(shiftedCount, unShiftedCount); i += 1) {
        shiftedVariations += utils.nCk(shiftedCount + unShiftedCount, i);
      }
      guesses *= shiftedVariations;
    }
  }
  return Math.round(guesses);
};
const getMinGuesses = (match, password) => {
  let minGuesses = 1;
  if (match.token.length < password.length) {
    if (match.token.length === 1) {
      minGuesses = MIN_SUBMATCH_GUESSES_SINGLE_CHAR;
    } else {
      minGuesses = MIN_SUBMATCH_GUESSES_MULTI_CHAR;
    }
  }
  return minGuesses;
};
const matchers = {
  bruteforce: bruteforceMatcher$1,
  date: dateMatcher$1,
  dictionary: dictionaryMatcher$1,
  regex: regexMatcher$1,
  repeat: repeatMatcher$1,
  sequence: sequenceMatcher$1,
  spatial: spatialMatcher$1
};
const getScoring = (name, match) => {
  if (matchers[name]) {
    return matchers[name](match);
  }
  if (Options$1.matchers[name] && "scoring" in Options$1.matchers[name]) {
    return Options$1.matchers[name].scoring(match);
  }
  return 0;
};
var estimateGuesses = (match, password) => {
  const extraData = {};
  if ("guesses" in match && match.guesses != null) {
    return match;
  }
  const minGuesses = getMinGuesses(match, password);
  const estimationResult = getScoring(match.pattern, match);
  let guesses = 0;
  if (typeof estimationResult === "number") {
    guesses = estimationResult;
  } else if (match.pattern === "dictionary") {
    guesses = estimationResult.calculation;
    extraData.baseGuesses = estimationResult.baseGuesses;
    extraData.uppercaseVariations = estimationResult.uppercaseVariations;
    extraData.l33tVariations = estimationResult.l33tVariations;
  }
  const matchGuesses = Math.max(guesses, minGuesses);
  return __spreadProps(__spreadValues(__spreadValues({}, match), extraData), {
    guesses: matchGuesses,
    guessesLog10: utils.log10(matchGuesses)
  });
};
const scoringHelper = {
  password: "",
  optimal: {},
  excludeAdditive: false,
  fillArray(size, valueType) {
    const result = [];
    for (let i = 0; i < size; i += 1) {
      let value = [];
      if (valueType === "object") {
        value = {};
      }
      result.push(value);
    }
    return result;
  },
  makeBruteforceMatch(i, j) {
    return {
      pattern: "bruteforce",
      token: this.password.slice(i, +j + 1 || 9e9),
      i,
      j
    };
  },
  update(match, sequenceLength) {
    const k = match.j;
    const estimatedMatch = estimateGuesses(match, this.password);
    let pi = estimatedMatch.guesses;
    if (sequenceLength > 1) {
      pi *= this.optimal.pi[estimatedMatch.i - 1][sequenceLength - 1];
    }
    let g = utils.factorial(sequenceLength) * pi;
    if (!this.excludeAdditive) {
      g += MIN_GUESSES_BEFORE_GROWING_SEQUENCE ** (sequenceLength - 1);
    }
    let shouldSkip = false;
    Object.keys(this.optimal.g[k]).forEach((competingPatternLength) => {
      const competingMetricMatch = this.optimal.g[k][competingPatternLength];
      if (parseInt(competingPatternLength, 10) <= sequenceLength) {
        if (competingMetricMatch <= g) {
          shouldSkip = true;
        }
      }
    });
    if (!shouldSkip) {
      this.optimal.g[k][sequenceLength] = g;
      this.optimal.m[k][sequenceLength] = estimatedMatch;
      this.optimal.pi[k][sequenceLength] = pi;
    }
  },
  bruteforceUpdate(passwordCharIndex) {
    let match = this.makeBruteforceMatch(0, passwordCharIndex);
    this.update(match, 1);
    for (let i = 1; i <= passwordCharIndex; i += 1) {
      match = this.makeBruteforceMatch(i, passwordCharIndex);
      const tmp = this.optimal.m[i - 1];
      Object.keys(tmp).forEach((sequenceLength) => {
        const lastMatch = tmp[sequenceLength];
        if (lastMatch.pattern !== "bruteforce") {
          this.update(match, parseInt(sequenceLength, 10) + 1);
        }
      });
    }
  },
  unwind(passwordLength) {
    const optimalMatchSequence = [];
    let k = passwordLength - 1;
    let sequenceLength = 0;
    let g = Infinity;
    const temp = this.optimal.g[k];
    if (temp) {
      Object.keys(temp).forEach((candidateSequenceLength) => {
        const candidateMetricMatch = temp[candidateSequenceLength];
        if (candidateMetricMatch < g) {
          sequenceLength = parseInt(candidateSequenceLength, 10);
          g = candidateMetricMatch;
        }
      });
    }
    while (k >= 0) {
      const match = this.optimal.m[k][sequenceLength];
      optimalMatchSequence.unshift(match);
      k = match.i - 1;
      sequenceLength -= 1;
    }
    return optimalMatchSequence;
  }
};
var scoring = {
  mostGuessableMatchSequence(password, matches, excludeAdditive = false) {
    scoringHelper.password = password;
    scoringHelper.excludeAdditive = excludeAdditive;
    const passwordLength = password.length;
    let matchesByCoordinateJ = scoringHelper.fillArray(passwordLength, "array");
    matches.forEach((match) => {
      matchesByCoordinateJ[match.j].push(match);
    });
    matchesByCoordinateJ = matchesByCoordinateJ.map((match) => match.sort((m1, m2) => m1.i - m2.i));
    scoringHelper.optimal = {
      m: scoringHelper.fillArray(passwordLength, "object"),
      pi: scoringHelper.fillArray(passwordLength, "object"),
      g: scoringHelper.fillArray(passwordLength, "object")
    };
    for (let k = 0; k < passwordLength; k += 1) {
      matchesByCoordinateJ[k].forEach((match) => {
        if (match.i > 0) {
          Object.keys(scoringHelper.optimal.m[match.i - 1]).forEach((sequenceLength) => {
            scoringHelper.update(match, parseInt(sequenceLength, 10) + 1);
          });
        } else {
          scoringHelper.update(match, 1);
        }
      });
      scoringHelper.bruteforceUpdate(k);
    }
    const optimalMatchSequence = scoringHelper.unwind(passwordLength);
    const optimalSequenceLength = optimalMatchSequence.length;
    const guesses = this.getGuesses(password, optimalSequenceLength);
    return {
      password,
      guesses,
      guessesLog10: utils.log10(guesses),
      sequence: optimalMatchSequence
    };
  },
  getGuesses(password, optimalSequenceLength) {
    const passwordLength = password.length;
    let guesses = 0;
    if (password.length === 0) {
      guesses = 1;
    } else {
      guesses = scoringHelper.optimal.g[passwordLength - 1][optimalSequenceLength];
    }
    return guesses;
  }
};
class MatchRepeat {
  match({
    password,
    omniMatch
  }) {
    const matches = [];
    let lastIndex = 0;
    while (lastIndex < password.length) {
      const greedyMatch = this.getGreedyMatch(password, lastIndex);
      const lazyMatch = this.getLazyMatch(password, lastIndex);
      if (greedyMatch == null) {
        break;
      }
      const {
        match,
        baseToken
      } = this.setMatchToken(greedyMatch, lazyMatch);
      if (match) {
        const j = match.index + match[0].length - 1;
        const baseGuesses = this.getBaseGuesses(baseToken, omniMatch);
        matches.push(this.normalizeMatch(baseToken, j, match, baseGuesses));
        lastIndex = j + 1;
      }
    }
    const hasPromises = matches.some((match) => {
      return match instanceof Promise;
    });
    if (hasPromises) {
      return Promise.all(matches);
    }
    return matches;
  }
  normalizeMatch(baseToken, j, match, baseGuesses) {
    const baseMatch = {
      pattern: "repeat",
      i: match.index,
      j,
      token: match[0],
      baseToken,
      baseGuesses: 0,
      repeatCount: match[0].length / baseToken.length
    };
    if (baseGuesses instanceof Promise) {
      return baseGuesses.then((resolvedBaseGuesses) => {
        return __spreadProps(__spreadValues({}, baseMatch), {
          baseGuesses: resolvedBaseGuesses
        });
      });
    }
    return __spreadProps(__spreadValues({}, baseMatch), {
      baseGuesses
    });
  }
  getGreedyMatch(password, lastIndex) {
    const greedy = /(.+)\1+/g;
    greedy.lastIndex = lastIndex;
    return greedy.exec(password);
  }
  getLazyMatch(password, lastIndex) {
    const lazy = /(.+?)\1+/g;
    lazy.lastIndex = lastIndex;
    return lazy.exec(password);
  }
  setMatchToken(greedyMatch, lazyMatch) {
    const lazyAnchored = /^(.+?)\1+$/;
    let match;
    let baseToken = "";
    if (lazyMatch && greedyMatch[0].length > lazyMatch[0].length) {
      match = greedyMatch;
      const temp = lazyAnchored.exec(match[0]);
      if (temp) {
        baseToken = temp[1];
      }
    } else {
      match = lazyMatch;
      if (match) {
        baseToken = match[1];
      }
    }
    return {
      match,
      baseToken
    };
  }
  getBaseGuesses(baseToken, omniMatch) {
    const matches = omniMatch.match(baseToken);
    if (matches instanceof Promise) {
      return matches.then((resolvedMatches) => {
        const baseAnalysis2 = scoring.mostGuessableMatchSequence(baseToken, resolvedMatches);
        return baseAnalysis2.guesses;
      });
    }
    const baseAnalysis = scoring.mostGuessableMatchSequence(baseToken, matches);
    return baseAnalysis.guesses;
  }
}
class MatchSequence {
  constructor() {
    this.MAX_DELTA = 5;
  }
  match({
    password
  }) {
    const result = [];
    if (password.length === 1) {
      return [];
    }
    let i = 0;
    let lastDelta = null;
    const passwordLength = password.length;
    for (let k = 1; k < passwordLength; k += 1) {
      const delta = password.charCodeAt(k) - password.charCodeAt(k - 1);
      if (lastDelta == null) {
        lastDelta = delta;
      }
      if (delta !== lastDelta) {
        const j = k - 1;
        this.update({
          i,
          j,
          delta: lastDelta,
          password,
          result
        });
        i = j;
        lastDelta = delta;
      }
    }
    this.update({
      i,
      j: passwordLength - 1,
      delta: lastDelta,
      password,
      result
    });
    return result;
  }
  update({
    i,
    j,
    delta,
    password,
    result
  }) {
    if (j - i > 1 || Math.abs(delta) === 1) {
      const absoluteDelta = Math.abs(delta);
      if (absoluteDelta > 0 && absoluteDelta <= this.MAX_DELTA) {
        const token = password.slice(i, +j + 1 || 9e9);
        const {
          sequenceName,
          sequenceSpace
        } = this.getSequence(token);
        return result.push({
          pattern: "sequence",
          i,
          j,
          token: password.slice(i, +j + 1 || 9e9),
          sequenceName,
          sequenceSpace,
          ascending: delta > 0
        });
      }
    }
    return null;
  }
  getSequence(token) {
    let sequenceName = "unicode";
    let sequenceSpace = 26;
    if (ALL_LOWER.test(token)) {
      sequenceName = "lower";
      sequenceSpace = 26;
    } else if (ALL_UPPER.test(token)) {
      sequenceName = "upper";
      sequenceSpace = 26;
    } else if (ALL_DIGIT.test(token)) {
      sequenceName = "digits";
      sequenceSpace = 10;
    }
    return {
      sequenceName,
      sequenceSpace
    };
  }
}
class MatchSpatial {
  constructor() {
    this.SHIFTED_RX = /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/;
  }
  match({
    password
  }) {
    const matches = [];
    Object.keys(Options$1.graphs).forEach((graphName) => {
      const graph = Options$1.graphs[graphName];
      extend(matches, this.helper(password, graph, graphName));
    });
    return sorted(matches);
  }
  checkIfShifted(graphName, password, index) {
    if (!graphName.includes("keypad") && this.SHIFTED_RX.test(password.charAt(index))) {
      return 1;
    }
    return 0;
  }
  helper(password, graph, graphName) {
    let shiftedCount;
    const matches = [];
    let i = 0;
    const passwordLength = password.length;
    while (i < passwordLength - 1) {
      let j = i + 1;
      let lastDirection = 0;
      let turns = 0;
      shiftedCount = this.checkIfShifted(graphName, password, i);
      while (true) {
        const prevChar = password.charAt(j - 1);
        const adjacents = graph[prevChar] || [];
        let found = false;
        let foundDirection = -1;
        let curDirection = -1;
        if (j < passwordLength) {
          const curChar = password.charAt(j);
          const adjacentsLength = adjacents.length;
          for (let k = 0; k < adjacentsLength; k += 1) {
            const adjacent = adjacents[k];
            curDirection += 1;
            if (adjacent) {
              const adjacentIndex = adjacent.indexOf(curChar);
              if (adjacentIndex !== -1) {
                found = true;
                foundDirection = curDirection;
                if (adjacentIndex === 1) {
                  shiftedCount += 1;
                }
                if (lastDirection !== foundDirection) {
                  turns += 1;
                  lastDirection = foundDirection;
                }
                break;
              }
            }
          }
        }
        if (found) {
          j += 1;
        } else {
          if (j - i > 2) {
            matches.push({
              pattern: "spatial",
              i,
              j: j - 1,
              token: password.slice(i, j),
              graph: graphName,
              turns,
              shiftedCount
            });
          }
          i = j;
          break;
        }
      }
    }
    return matches;
  }
}
class Matching {
  constructor() {
    this.matchers = {
      date: MatchDate,
      dictionary: MatchDictionary,
      regex: MatchRegex,
      repeat: MatchRepeat,
      sequence: MatchSequence,
      spatial: MatchSpatial
    };
  }
  match(password) {
    const matches = [];
    const promises = [];
    const matchers2 = [...Object.keys(this.matchers), ...Object.keys(Options$1.matchers)];
    matchers2.forEach((key) => {
      if (!this.matchers[key] && !Options$1.matchers[key]) {
        return;
      }
      const Matcher = this.matchers[key] ? this.matchers[key] : Options$1.matchers[key].Matching;
      const usedMatcher = new Matcher();
      const result = usedMatcher.match({
        password,
        omniMatch: this
      });
      if (result instanceof Promise) {
        result.then((response) => {
          extend(matches, response);
        });
        promises.push(result);
      } else {
        extend(matches, result);
      }
    });
    if (promises.length > 0) {
      return new Promise((resolve) => {
        Promise.all(promises).then(() => {
          resolve(sorted(matches));
        });
      });
    }
    return sorted(matches);
  }
}
const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 31;
const YEAR = MONTH * 12;
const CENTURY = YEAR * 100;
const times = {
  second: SECOND,
  minute: MINUTE,
  hour: HOUR,
  day: DAY,
  month: MONTH,
  year: YEAR,
  century: CENTURY
};
class TimeEstimates {
  translate(displayStr, value) {
    let key = displayStr;
    if (value !== void 0 && value !== 1) {
      key += "s";
    }
    const {
      timeEstimation
    } = Options$1.translations;
    return timeEstimation[key].replace("{base}", `${value}`);
  }
  estimateAttackTimes(guesses) {
    const crackTimesSeconds = {
      onlineThrottling100PerHour: guesses / (100 / 3600),
      onlineNoThrottling10PerSecond: guesses / 10,
      offlineSlowHashing1e4PerSecond: guesses / 1e4,
      offlineFastHashing1e10PerSecond: guesses / 1e10
    };
    const crackTimesDisplay = {
      onlineThrottling100PerHour: "",
      onlineNoThrottling10PerSecond: "",
      offlineSlowHashing1e4PerSecond: "",
      offlineFastHashing1e10PerSecond: ""
    };
    Object.keys(crackTimesSeconds).forEach((scenario) => {
      const seconds = crackTimesSeconds[scenario];
      crackTimesDisplay[scenario] = this.displayTime(seconds);
    });
    return {
      crackTimesSeconds,
      crackTimesDisplay,
      score: this.guessesToScore(guesses)
    };
  }
  guessesToScore(guesses) {
    const DELTA = 5;
    if (guesses < 1e3 + DELTA) {
      return 0;
    }
    if (guesses < 1e6 + DELTA) {
      return 1;
    }
    if (guesses < 1e8 + DELTA) {
      return 2;
    }
    if (guesses < 1e10 + DELTA) {
      return 3;
    }
    return 4;
  }
  displayTime(seconds) {
    let displayStr = "centuries";
    let base;
    const timeKeys = Object.keys(times);
    const foundIndex = timeKeys.findIndex((time2) => seconds < times[time2]);
    if (foundIndex > -1) {
      displayStr = timeKeys[foundIndex - 1];
      if (foundIndex !== 0) {
        base = Math.round(seconds / times[displayStr]);
      } else {
        displayStr = "ltSecond";
      }
    }
    return this.translate(displayStr, base);
  }
}
var bruteforceMatcher = () => {
  return null;
};
var dateMatcher = () => {
  return {
    warning: Options$1.translations.warnings.dates,
    suggestions: [Options$1.translations.suggestions.dates]
  };
};
const getDictionaryWarningPassword = (match, isSoleMatch) => {
  let warning = "";
  if (isSoleMatch && !match.l33t && !match.reversed) {
    if (match.rank <= 10) {
      warning = Options$1.translations.warnings.topTen;
    } else if (match.rank <= 100) {
      warning = Options$1.translations.warnings.topHundred;
    } else {
      warning = Options$1.translations.warnings.common;
    }
  } else if (match.guessesLog10 <= 4) {
    warning = Options$1.translations.warnings.similarToCommon;
  }
  return warning;
};
const getDictionaryWarningWikipedia = (match, isSoleMatch) => {
  let warning = "";
  if (isSoleMatch) {
    warning = Options$1.translations.warnings.wordByItself;
  }
  return warning;
};
const getDictionaryWarningNames = (match, isSoleMatch) => {
  if (isSoleMatch) {
    return Options$1.translations.warnings.namesByThemselves;
  }
  return Options$1.translations.warnings.commonNames;
};
const getDictionaryWarning = (match, isSoleMatch) => {
  let warning = "";
  const dictName = match.dictionaryName;
  const isAName = dictName === "lastnames" || dictName.toLowerCase().includes("firstnames");
  if (dictName === "passwords") {
    warning = getDictionaryWarningPassword(match, isSoleMatch);
  } else if (dictName.includes("wikipedia")) {
    warning = getDictionaryWarningWikipedia(match, isSoleMatch);
  } else if (isAName) {
    warning = getDictionaryWarningNames(match, isSoleMatch);
  } else if (dictName === "userInputs") {
    warning = Options$1.translations.warnings.userInputs;
  }
  return warning;
};
var dictionaryMatcher = (match, isSoleMatch) => {
  const warning = getDictionaryWarning(match, isSoleMatch);
  const suggestions = [];
  const word = match.token;
  if (word.match(START_UPPER)) {
    suggestions.push(Options$1.translations.suggestions.capitalization);
  } else if (word.match(ALL_UPPER_INVERTED) && word.toLowerCase() !== word) {
    suggestions.push(Options$1.translations.suggestions.allUppercase);
  }
  if (match.reversed && match.token.length >= 4) {
    suggestions.push(Options$1.translations.suggestions.reverseWords);
  }
  if (match.l33t) {
    suggestions.push(Options$1.translations.suggestions.l33t);
  }
  return {
    warning,
    suggestions
  };
};
var regexMatcher = (match) => {
  if (match.regexName === "recentYear") {
    return {
      warning: Options$1.translations.warnings.recentYears,
      suggestions: [Options$1.translations.suggestions.recentYears, Options$1.translations.suggestions.associatedYears]
    };
  }
  return {
    warning: "",
    suggestions: []
  };
};
var repeatMatcher = (match) => {
  let warning = Options$1.translations.warnings.extendedRepeat;
  if (match.baseToken.length === 1) {
    warning = Options$1.translations.warnings.simpleRepeat;
  }
  return {
    warning,
    suggestions: [Options$1.translations.suggestions.repeated]
  };
};
var sequenceMatcher = () => {
  return {
    warning: Options$1.translations.warnings.sequences,
    suggestions: [Options$1.translations.suggestions.sequences]
  };
};
var spatialMatcher = (match) => {
  let warning = Options$1.translations.warnings.keyPattern;
  if (match.turns === 1) {
    warning = Options$1.translations.warnings.straightRow;
  }
  return {
    warning,
    suggestions: [Options$1.translations.suggestions.longerKeyboardPattern]
  };
};
const defaultFeedback = {
  warning: "",
  suggestions: []
};
class Feedback {
  constructor() {
    this.matchers = {
      bruteforce: bruteforceMatcher,
      date: dateMatcher,
      dictionary: dictionaryMatcher,
      regex: regexMatcher,
      repeat: repeatMatcher,
      sequence: sequenceMatcher,
      spatial: spatialMatcher
    };
    this.defaultFeedback = {
      warning: "",
      suggestions: []
    };
    this.setDefaultSuggestions();
  }
  setDefaultSuggestions() {
    this.defaultFeedback.suggestions.push(Options$1.translations.suggestions.useWords, Options$1.translations.suggestions.noNeed);
  }
  getFeedback(score, sequence) {
    if (sequence.length === 0) {
      return this.defaultFeedback;
    }
    if (score > 2) {
      return defaultFeedback;
    }
    const extraFeedback = Options$1.translations.suggestions.anotherWord;
    const longestMatch = this.getLongestMatch(sequence);
    let feedback = this.getMatchFeedback(longestMatch, sequence.length === 1);
    if (feedback !== null && feedback !== void 0) {
      feedback.suggestions.unshift(extraFeedback);
      if (feedback.warning == null) {
        feedback.warning = "";
      }
    } else {
      feedback = {
        warning: "",
        suggestions: [extraFeedback]
      };
    }
    return feedback;
  }
  getLongestMatch(sequence) {
    let longestMatch = sequence[0];
    const slicedSequence = sequence.slice(1);
    slicedSequence.forEach((match) => {
      if (match.token.length > longestMatch.token.length) {
        longestMatch = match;
      }
    });
    return longestMatch;
  }
  getMatchFeedback(match, isSoleMatch) {
    if (this.matchers[match.pattern]) {
      return this.matchers[match.pattern](match, isSoleMatch);
    }
    if (Options$1.matchers[match.pattern] && "feedback" in Options$1.matchers[match.pattern]) {
      return Options$1.matchers[match.pattern].feedback(match, isSoleMatch);
    }
    return defaultFeedback;
  }
}
const time = () => new Date().getTime();
const createReturnValue = (resolvedMatches, password, start) => {
  const feedback = new Feedback();
  const timeEstimates = new TimeEstimates();
  const matchSequence = scoring.mostGuessableMatchSequence(password, resolvedMatches);
  const calcTime = time() - start;
  const attackTimes = timeEstimates.estimateAttackTimes(matchSequence.guesses);
  return __spreadProps(__spreadValues(__spreadValues({
    calcTime
  }, matchSequence), attackTimes), {
    feedback: feedback.getFeedback(attackTimes.score, matchSequence.sequence)
  });
};
const zxcvbn = (password, userInputs) => {
  if (userInputs) {
    Options$1.extendUserInputsDictionary(userInputs);
  }
  const matching = new Matching();
  const start = time();
  const matches = matching.match(password);
  if (matches instanceof Promise) {
    return matches.then((resolvedMatches) => {
      return createReturnValue(resolvedMatches, password, start);
    });
  }
  return createReturnValue(matches, password, start);
};
var StrengthMeter_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "StrengthMeter",
  components: { InputPassword: Input.Password },
  props: {
    value: propTypes.string,
    showInput: propTypes.bool.def(true),
    disabled: propTypes.bool
  },
  emits: ["score-change", "change"],
  setup(props, { emit }) {
    const innerValueRef = ref("");
    const { prefixCls } = useDesign("strength-meter");
    const getPasswordStrength = computed(() => {
      const { disabled } = props;
      if (disabled)
        return -1;
      const innerValue = unref(innerValueRef);
      const score = innerValue ? zxcvbn(unref(innerValueRef)).score : -1;
      emit("score-change", score);
      return score;
    });
    function handleChange(e) {
      innerValueRef.value = e.target.value;
    }
    watchEffect(() => {
      innerValueRef.value = props.value || "";
    });
    watch(() => unref(innerValueRef), (val) => {
      emit("change", val);
    });
    return {
      getPasswordStrength,
      handleChange,
      prefixCls,
      innerValueRef
    };
  }
});
const _hoisted_1 = ["data-score"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InputPassword = resolveComponent("InputPassword");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.prefixCls, "relative"])
  }, [
    _ctx.showInput ? (openBlock(), createBlock(_component_InputPassword, mergeProps({ key: 0 }, _ctx.$attrs, {
      allowClear: "",
      value: _ctx.innerValueRef,
      onChange: _ctx.handleChange,
      disabled: _ctx.disabled
    }), createSlots({ _: 2 }, [
      renderList(Object.keys(_ctx.$slots), (item) => {
        return {
          name: item,
          fn: withCtx((data) => [
            renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})), void 0, true)
          ])
        };
      })
    ]), 1040, ["value", "onChange", "disabled"])) : createCommentVNode("", true),
    createBaseVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}-bar`)
    }, [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-bar--fill`),
        "data-score": _ctx.getPasswordStrength
      }, null, 10, _hoisted_1)
    ], 2)
  ], 2);
}
var strengthMeter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-367aeb21"]]);
const StrengthMeter = withInstall(strengthMeter);
export { StrengthMeter as S };
