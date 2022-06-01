import { a as PageWrapper } from "./index.578307d0.js";
import { d as useDesign } from "./index.5dccf356.js";
import { bY as commonjsGlobal, d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
import { _ as _export_sfc } from "./index.27fe703a.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4b9264e1.js";
import "./useRootSetting.13d2da37.js";
var intro$1 = { exports: {} };
/*!
 * Intro.js v4.3.0
 * https://introjs.com
 *
 * Copyright (C) 2012-2021 Afshin Mehrabani (@afshinmeh).
 * https://raw.githubusercontent.com/usablica/intro.js/master/license.md
 *
 * Date: Sat, 06 Nov 2021 14:22:05 GMT
 */
(function(module, exports) {
  (function(global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function mergeOptions(obj1, obj2) {
      var obj3 = {};
      var attrname;
      for (attrname in obj1) {
        obj3[attrname] = obj1[attrname];
      }
      for (attrname in obj2) {
        obj3[attrname] = obj2[attrname];
      }
      return obj3;
    }
    var stamp = function() {
      var keys2 = {};
      return function stamp2(obj) {
        var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "introjs-stamp";
        keys2[key] = keys2[key] || 0;
        if (obj[key] === void 0) {
          obj[key] = keys2[key]++;
        }
        return obj[key];
      };
    }();
    function forEach(arr, forEachFnc, completeFnc) {
      if (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
          forEachFnc(arr[i], i);
        }
      }
      if (typeof completeFnc === "function") {
        completeFnc();
      }
    }
    var DOMEvent = function() {
      function DOMEvent2() {
        var events_key = "introjs_event";
        this._id = function(obj, type, listener, context) {
          return type + stamp(listener) + (context ? "_".concat(stamp(context)) : "");
        };
        this.on = function(obj, type, listener, context, useCapture) {
          var id2 = this._id.apply(this, arguments);
          var handler = function handler2(e) {
            return listener.call(context || obj, e || window.event);
          };
          if ("addEventListener" in obj) {
            obj.addEventListener(type, handler, useCapture);
          } else if ("attachEvent" in obj) {
            obj.attachEvent("on".concat(type), handler);
          }
          obj[events_key] = obj[events_key] || {};
          obj[events_key][id2] = handler;
        };
        this.off = function(obj, type, listener, context, useCapture) {
          var id2 = this._id.apply(this, arguments);
          var handler = obj[events_key] && obj[events_key][id2];
          if (!handler) {
            return;
          }
          if ("removeEventListener" in obj) {
            obj.removeEventListener(type, handler, useCapture);
          } else if ("detachEvent" in obj) {
            obj.detachEvent("on".concat(type), handler);
          }
          obj[events_key][id2] = null;
        };
      }
      return new DOMEvent2();
    }();
    var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : {};
    function createCommonjsModule(fn, module2) {
      return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
    }
    var check = function(it) {
      return it && it.Math == Math && it;
    };
    var global_1 = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof commonjsGlobal$1 == "object" && commonjsGlobal$1) || function() {
      return this;
    }() || Function("return this")();
    var fails = function(exec2) {
      try {
        return !!exec2();
      } catch (error) {
        return true;
      }
    };
    var descriptors = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] != 7;
    });
    var call$2 = Function.prototype.call;
    var functionCall = call$2.bind ? call$2.bind(call$2) : function() {
      return call$2.apply(call$2, arguments);
    };
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    var f$4 = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor$1(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
    var objectPropertyIsEnumerable = {
      f: f$4
    };
    var createPropertyDescriptor = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
    var FunctionPrototype$2 = Function.prototype;
    var bind$2 = FunctionPrototype$2.bind;
    var call$1 = FunctionPrototype$2.call;
    var callBind = bind$2 && bind$2.bind(call$1);
    var functionUncurryThis = bind$2 ? function(fn) {
      return fn && callBind(call$1, fn);
    } : function(fn) {
      return fn && function() {
        return call$1.apply(fn, arguments);
      };
    };
    var toString$1 = functionUncurryThis({}.toString);
    var stringSlice$5 = functionUncurryThis("".slice);
    var classofRaw = function(it) {
      return stringSlice$5(toString$1(it), 8, -1);
    };
    var Object$4 = global_1.Object;
    var split = functionUncurryThis("".split);
    var indexedObject = fails(function() {
      return !Object$4("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classofRaw(it) == "String" ? split(it, "") : Object$4(it);
    } : Object$4;
    var TypeError$c = global_1.TypeError;
    var requireObjectCoercible = function(it) {
      if (it == void 0)
        throw TypeError$c("Can't call method on " + it);
      return it;
    };
    var toIndexedObject = function(it) {
      return indexedObject(requireObjectCoercible(it));
    };
    var isCallable = function(argument) {
      return typeof argument == "function";
    };
    var isObject = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    var getBuiltIn = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
    };
    var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);
    var engineUserAgent = getBuiltIn("navigator", "userAgent") || "";
    var process = global_1.process;
    var Deno = global_1.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match, version$1;
    if (v8) {
      match = v8.split(".");
      version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version$1 && engineUserAgent) {
      match = engineUserAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = engineUserAgent.match(/Chrome\/(\d+)/);
        if (match)
          version$1 = +match[1];
      }
    }
    var engineV8Version = version$1;
    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && engineV8Version && engineV8Version < 41;
    });
    var useSymbolAsUid = nativeSymbol && !Symbol.sham && typeof Symbol.iterator == "symbol";
    var Object$3 = global_1.Object;
    var isSymbol = useSymbolAsUid ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, Object$3(it));
    };
    var String$3 = global_1.String;
    var tryToString = function(argument) {
      try {
        return String$3(argument);
      } catch (error) {
        return "Object";
      }
    };
    var TypeError$b = global_1.TypeError;
    var aCallable = function(argument) {
      if (isCallable(argument))
        return argument;
      throw TypeError$b(tryToString(argument) + " is not a function");
    };
    var getMethod = function(V, P) {
      var func = V[P];
      return func == null ? void 0 : aCallable(func);
    };
    var TypeError$a = global_1.TypeError;
    var ordinaryToPrimitive = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input)))
        return val;
      throw TypeError$a("Can't convert object to primitive value");
    };
    var defineProperty$1 = Object.defineProperty;
    var setGlobal = function(key, value) {
      try {
        defineProperty$1(global_1, key, { value, configurable: true, writable: true });
      } catch (error) {
        global_1[key] = value;
      }
      return value;
    };
    var SHARED = "__core-js_shared__";
    var store$1 = global_1[SHARED] || setGlobal(SHARED, {});
    var sharedStore = store$1;
    var shared = createCommonjsModule(function(module2) {
      (module2.exports = function(key, value) {
        return sharedStore[key] || (sharedStore[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: "3.19.1",
        mode: "global",
        copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
      });
    });
    var Object$2 = global_1.Object;
    var toObject = function(argument) {
      return Object$2(requireObjectCoercible(argument));
    };
    var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);
    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
    var id = 0;
    var postfix = Math.random();
    var toString = functionUncurryThis(1 .toString);
    var uid = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
    var WellKnownSymbolsStore = shared("wks");
    var Symbol$1 = global_1.Symbol;
    var symbolFor = Symbol$1 && Symbol$1["for"];
    var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;
    var wellKnownSymbol = function(name) {
      if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (nativeSymbol && hasOwnProperty_1(Symbol$1, name)) {
          WellKnownSymbolsStore[name] = Symbol$1[name];
        } else if (useSymbolAsUid && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }
      return WellKnownSymbolsStore[name];
    };
    var TypeError$9 = global_1.TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    var toPrimitive = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = functionCall(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw TypeError$9("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
    var toPropertyKey = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
    var document$1 = global_1.document;
    var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);
    var documentCreateElement = function(it) {
      return EXISTS$1 ? document$1.createElement(it) : {};
    };
    var ie8DomDefine = !descriptors && !fails(function() {
      return Object.defineProperty(documentCreateElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var f$3 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor2(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (ie8DomDefine)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwnProperty_1(O, P))
        return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
    };
    var objectGetOwnPropertyDescriptor = {
      f: f$3
    };
    var String$2 = global_1.String;
    var TypeError$8 = global_1.TypeError;
    var anObject = function(argument) {
      if (isObject(argument))
        return argument;
      throw TypeError$8(String$2(argument) + " is not an object");
    };
    var TypeError$7 = global_1.TypeError;
    var $defineProperty = Object.defineProperty;
    var f$2 = descriptors ? $defineProperty : function defineProperty2(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (ie8DomDefine)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw TypeError$7("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
    var objectDefineProperty = {
      f: f$2
    };
    var createNonEnumerableProperty = descriptors ? function(object, key, value) {
      return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
    var functionToString = functionUncurryThis(Function.toString);
    if (!isCallable(sharedStore.inspectSource)) {
      sharedStore.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    var inspectSource = sharedStore.inspectSource;
    var WeakMap$1 = global_1.WeakMap;
    var nativeWeakMap = isCallable(WeakMap$1) && /native code/.test(inspectSource(WeakMap$1));
    var keys = shared("keys");
    var sharedKey = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
    var hiddenKeys$1 = {};
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError$6 = global_1.TypeError;
    var WeakMap = global_1.WeakMap;
    var set, get, has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError$6("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (nativeWeakMap || sharedStore.state) {
      var store = sharedStore.state || (sharedStore.state = new WeakMap());
      var wmget = functionUncurryThis(store.get);
      var wmhas = functionUncurryThis(store.has);
      var wmset = functionUncurryThis(store.set);
      set = function(it, metadata) {
        if (wmhas(store, it))
          throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
      };
      get = function(it) {
        return wmget(store, it) || {};
      };
      has = function(it) {
        return wmhas(store, it);
      };
    } else {
      var STATE = sharedKey("state");
      hiddenKeys$1[STATE] = true;
      set = function(it, metadata) {
        if (hasOwnProperty_1(it, STATE))
          throw new TypeError$6(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwnProperty_1(it, STATE);
      };
    }
    var internalState = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
    var FunctionPrototype$1 = Function.prototype;
    var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwnProperty_1(FunctionPrototype$1, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!descriptors || descriptors && getDescriptor(FunctionPrototype$1, "name").configurable);
    var functionName = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
    var redefine = createCommonjsModule(function(module2) {
      var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
      var getInternalState2 = internalState.get;
      var enforceInternalState = internalState.enforce;
      var TEMPLATE = String(String).split("String");
      (module2.exports = function(O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var name = options && options.name !== void 0 ? options.name : key;
        var state;
        if (isCallable(value)) {
          if (String(name).slice(0, 7) === "Symbol(") {
            name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
          }
          if (!hasOwnProperty_1(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
            createNonEnumerableProperty(value, "name", name);
          }
          state = enforceInternalState(value);
          if (!state.source) {
            state.source = TEMPLATE.join(typeof name == "string" ? name : "");
          }
        }
        if (O === global_1) {
          if (simple)
            O[key] = value;
          else
            setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }
        if (simple)
          O[key] = value;
        else
          createNonEnumerableProperty(O, key, value);
      })(Function.prototype, "toString", function toString2() {
        return isCallable(this) && getInternalState2(this).source || inspectSource(this);
      });
    });
    var ceil = Math.ceil;
    var floor$2 = Math.floor;
    var toIntegerOrInfinity = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : (number > 0 ? floor$2 : ceil)(number);
    };
    var max$3 = Math.max;
    var min$4 = Math.min;
    var toAbsoluteIndex = function(index2, length) {
      var integer = toIntegerOrInfinity(index2);
      return integer < 0 ? max$3(integer + length, 0) : min$4(integer, length);
    };
    var min$3 = Math.min;
    var toLength = function(argument) {
      return argument > 0 ? min$3(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
    var lengthOfArrayLike = function(obj) {
      return toLength(obj.length);
    };
    var createMethod$2 = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index2 = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el)
          while (length > index2) {
            value = O[index2++];
            if (value != value)
              return true;
          }
        else
          for (; length > index2; index2++) {
            if ((IS_INCLUDES || index2 in O) && O[index2] === el)
              return IS_INCLUDES || index2 || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    var arrayIncludes = {
      includes: createMethod$2(true),
      indexOf: createMethod$2(false)
    };
    var indexOf$1 = arrayIncludes.indexOf;
    var push$4 = functionUncurryThis([].push);
    var objectKeysInternal = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$4(result, key);
      while (names.length > i)
        if (hasOwnProperty_1(O, key = names[i++])) {
          ~indexOf$1(result, key) || push$4(result, key);
        }
      return result;
    };
    var enumBugKeys = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return objectKeysInternal(O, hiddenKeys);
    };
    var objectGetOwnPropertyNames = {
      f: f$1
    };
    var f = Object.getOwnPropertySymbols;
    var objectGetOwnPropertySymbols = {
      f
    };
    var concat$2 = functionUncurryThis([].concat);
    var ownKeys = getBuiltIn("Reflect", "ownKeys") || function ownKeys2(it) {
      var keys2 = objectGetOwnPropertyNames.f(anObject(it));
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      return getOwnPropertySymbols ? concat$2(keys2, getOwnPropertySymbols(it)) : keys2;
    };
    var copyConstructorProperties = function(target, source) {
      var keys2 = ownKeys(source);
      var defineProperty2 = objectDefineProperty.f;
      var getOwnPropertyDescriptor2 = objectGetOwnPropertyDescriptor.f;
      for (var i = 0; i < keys2.length; i++) {
        var key = keys2[i];
        if (!hasOwnProperty_1(target, key))
          defineProperty2(target, key, getOwnPropertyDescriptor2(source, key));
      }
    };
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    var isForced_1 = isForced;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var _export = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED2, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global_1;
      } else if (STATIC) {
        target = global_1[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global_1[TARGET] || {}).prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED2 = isForced_1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED2 && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          redefine(target, key, sourceProperty, options);
        }
    };
    var TO_STRING_TAG$1 = wellKnownSymbol("toStringTag");
    var test$1 = {};
    test$1[TO_STRING_TAG$1] = "z";
    var toStringTagSupport = String(test$1) === "[object z]";
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var Object$1 = global_1.Object;
    var CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    var classof = toStringTagSupport ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
    var String$1 = global_1.String;
    var toString_1 = function(argument) {
      if (classof(argument) === "Symbol")
        throw TypeError("Cannot convert a Symbol value to a string");
      return String$1(argument);
    };
    var regexpFlags = function() {
      var that = anObject(this);
      var result = "";
      if (that.global)
        result += "g";
      if (that.ignoreCase)
        result += "i";
      if (that.multiline)
        result += "m";
      if (that.dotAll)
        result += "s";
      if (that.unicode)
        result += "u";
      if (that.sticky)
        result += "y";
      return result;
    };
    var $RegExp$2 = global_1.RegExp;
    var UNSUPPORTED_Y$2 = fails(function() {
      var re = $RegExp$2("a", "y");
      re.lastIndex = 2;
      return re.exec("abcd") != null;
    });
    var BROKEN_CARET = fails(function() {
      var re = $RegExp$2("^r", "gy");
      re.lastIndex = 2;
      return re.exec("str") != null;
    });
    var regexpStickyHelpers = {
      UNSUPPORTED_Y: UNSUPPORTED_Y$2,
      BROKEN_CARET
    };
    var objectKeys = Object.keys || function keys2(O) {
      return objectKeysInternal(O, enumBugKeys);
    };
    var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys2 = objectKeys(Properties);
      var length = keys2.length;
      var index2 = 0;
      var key;
      while (length > index2)
        objectDefineProperty.f(O, key = keys2[index2++], props[key]);
      return O;
    };
    var html = getBuiltIn("document", "documentElement");
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys$1[IE_PROTO] = true;
    var objectCreate = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = NullProtoObject();
      return Properties === void 0 ? result : objectDefineProperties(result, Properties);
    };
    var $RegExp$1 = global_1.RegExp;
    var regexpUnsupportedDotAll = fails(function() {
      var re = $RegExp$1(".", "s");
      return !(re.dotAll && re.exec("\n") && re.flags === "s");
    });
    var $RegExp = global_1.RegExp;
    var regexpUnsupportedNcg = fails(function() {
      var re = $RegExp("(?<a>b)", "g");
      return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
    });
    var getInternalState = internalState.get;
    var nativeReplace = shared("native-string-replace", String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt$3 = functionUncurryThis("".charAt);
    var indexOf = functionUncurryThis("".indexOf);
    var replace$1 = functionUncurryThis("".replace);
    var stringSlice$4 = functionUncurryThis("".slice);
    var UPDATES_LAST_INDEX_WRONG = function() {
      var re1 = /a/;
      var re2 = /b*/g;
      functionCall(nativeExec, re1, "a");
      functionCall(nativeExec, re2, "a");
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    }();
    var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;
    var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg;
    if (PATCH) {
      patchedExec = function exec2(string) {
        var re = this;
        var state = getInternalState(re);
        var str = toString_1(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match2, i, object, group;
        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = functionCall(patchedExec, raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }
        var groups = state.groups;
        var sticky = UNSUPPORTED_Y$1 && re.sticky;
        var flags = functionCall(regexpFlags, re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;
        if (sticky) {
          flags = replace$1(flags, "y", "");
          if (indexOf(flags, "g") === -1) {
            flags += "g";
          }
          strCopy = stringSlice$4(str, re.lastIndex);
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
          }
          reCopy = new RegExp("^(?:" + source + ")", flags);
        }
        if (NPCG_INCLUDED) {
          reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
        }
        if (UPDATES_LAST_INDEX_WRONG)
          lastIndex = re.lastIndex;
        match2 = functionCall(nativeExec, sticky ? reCopy : re, strCopy);
        if (sticky) {
          if (match2) {
            match2.input = stringSlice$4(match2.input, charsAdded);
            match2[0] = stringSlice$4(match2[0], charsAdded);
            match2.index = re.lastIndex;
            re.lastIndex += match2[0].length;
          } else
            re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match2) {
          re.lastIndex = re.global ? match2.index + match2[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match2 && match2.length > 1) {
          functionCall(nativeReplace, match2[0], reCopy, function() {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === void 0)
                match2[i] = void 0;
            }
          });
        }
        if (match2 && groups) {
          match2.groups = object = objectCreate(null);
          for (i = 0; i < groups.length; i++) {
            group = groups[i];
            object[group[0]] = match2[group[1]];
          }
        }
        return match2;
      };
    }
    var regexpExec = patchedExec;
    _export({ target: "RegExp", proto: true, forced: /./.exec !== regexpExec }, {
      exec: regexpExec
    });
    var SPECIES$4 = wellKnownSymbol("species");
    var RegExpPrototype$1 = RegExp.prototype;
    var fixRegexpWellKnownSymbolLogic = function(KEY, exec2, FORCED2, SHAM) {
      var SYMBOL = wellKnownSymbol(KEY);
      var DELEGATES_TO_SYMBOL = !fails(function() {
        var O = {};
        O[SYMBOL] = function() {
          return 7;
        };
        return ""[KEY](O) != 7;
      });
      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function() {
        var execCalled = false;
        var re = /a/;
        if (KEY === "split") {
          re = {};
          re.constructor = {};
          re.constructor[SPECIES$4] = function() {
            return re;
          };
          re.flags = "";
          re[SYMBOL] = /./[SYMBOL];
        }
        re.exec = function() {
          execCalled = true;
          return null;
        };
        re[SYMBOL]("");
        return !execCalled;
      });
      if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED2) {
        var uncurriedNativeRegExpMethod = functionUncurryThis(/./[SYMBOL]);
        var methods = exec2(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
          var uncurriedNativeMethod = functionUncurryThis(nativeMethod);
          var $exec = regexp.exec;
          if ($exec === regexpExec || $exec === RegExpPrototype$1.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
            }
            return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
          }
          return { done: false };
        });
        redefine(String.prototype, KEY, methods[0]);
        redefine(RegExpPrototype$1, SYMBOL, methods[1]);
      }
      if (SHAM)
        createNonEnumerableProperty(RegExpPrototype$1[SYMBOL], "sham", true);
    };
    var charAt$2 = functionUncurryThis("".charAt);
    var charCodeAt = functionUncurryThis("".charCodeAt);
    var stringSlice$3 = functionUncurryThis("".slice);
    var createMethod$1 = function(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S = toString_1(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size)
          return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$2(S, position) : first : CONVERT_TO_STRING ? stringSlice$3(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    };
    var stringMultibyte = {
      codeAt: createMethod$1(false),
      charAt: createMethod$1(true)
    };
    var charAt$1 = stringMultibyte.charAt;
    var advanceStringIndex = function(S, index2, unicode) {
      return index2 + (unicode ? charAt$1(S, index2).length : 1);
    };
    var TypeError$5 = global_1.TypeError;
    var regexpExecAbstract = function(R, S) {
      var exec2 = R.exec;
      if (isCallable(exec2)) {
        var result = functionCall(exec2, R, S);
        if (result !== null)
          anObject(result);
        return result;
      }
      if (classofRaw(R) === "RegExp")
        return functionCall(regexpExec, R, S);
      throw TypeError$5("RegExp#exec called on incompatible receiver");
    };
    fixRegexpWellKnownSymbolLogic("match", function(MATCH2, nativeMatch, maybeCallNative) {
      return [
        function match2(regexp) {
          var O = requireObjectCoercible(this);
          var matcher = regexp == void 0 ? void 0 : getMethod(regexp, MATCH2);
          return matcher ? functionCall(matcher, regexp, O) : new RegExp(regexp)[MATCH2](toString_1(O));
        },
        function(string) {
          var rx = anObject(this);
          var S = toString_1(string);
          var res = maybeCallNative(nativeMatch, rx, S);
          if (res.done)
            return res.value;
          if (!rx.global)
            return regexpExecAbstract(rx, S);
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
          var A = [];
          var n = 0;
          var result;
          while ((result = regexpExecAbstract(rx, S)) !== null) {
            var matchStr = toString_1(result[0]);
            A[n] = matchStr;
            if (matchStr === "")
              rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            n++;
          }
          return n === 0 ? null : A;
        }
      ];
    });
    var isArray = Array.isArray || function isArray2(argument) {
      return classofRaw(argument) == "Array";
    };
    var createProperty = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      if (propertyKey in object)
        objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
      else
        object[propertyKey] = value;
    };
    var noop = function() {
    };
    var empty = [];
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec$1 = functionUncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
    var isConstructorModern = function(argument) {
      if (!isCallable(argument))
        return false;
      try {
        construct(noop, empty, argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function(argument) {
      if (!isCallable(argument))
        return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    };
    var isConstructor = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
    var SPECIES$3 = wellKnownSymbol("species");
    var Array$2 = global_1.Array;
    var arraySpeciesConstructor = function(originalArray) {
      var C;
      if (isArray(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor(C) && (C === Array$2 || isArray(C.prototype)))
          C = void 0;
        else if (isObject(C)) {
          C = C[SPECIES$3];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? Array$2 : C;
    };
    var arraySpeciesCreate = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
    var SPECIES$2 = wellKnownSymbol("species");
    var arrayMethodHasSpeciesSupport = function(METHOD_NAME) {
      return engineV8Version >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES$2] = function() {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
    var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
    var MAX_SAFE_INTEGER$1 = 9007199254740991;
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
    var TypeError$4 = global_1.TypeError;
    var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function() {
      var array = [];
      array[IS_CONCAT_SPREADABLE] = false;
      return array.concat()[0] !== array;
    });
    var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
    var isConcatSpreadable = function(O) {
      if (!isObject(O))
        return false;
      var spreadable = O[IS_CONCAT_SPREADABLE];
      return spreadable !== void 0 ? !!spreadable : isArray(O);
    };
    var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
    _export({ target: "Array", proto: true, forced: FORCED$1 }, {
      concat: function concat2(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i];
          if (isConcatSpreadable(E)) {
            len = lengthOfArrayLike(E);
            if (n + len > MAX_SAFE_INTEGER$1)
              throw TypeError$4(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
            for (k = 0; k < len; k++, n++)
              if (k in E)
                createProperty(A, n, E[k]);
          } else {
            if (n >= MAX_SAFE_INTEGER$1)
              throw TypeError$4(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
            createProperty(A, n++, E);
          }
        }
        A.length = n;
        return A;
      }
    });
    var objectToString = toStringTagSupport ? {}.toString : function toString2() {
      return "[object " + classof(this) + "]";
    };
    if (!toStringTagSupport) {
      redefine(Object.prototype, "toString", objectToString, { unsafe: true });
    }
    var PROPER_FUNCTION_NAME = functionName.PROPER;
    var TO_STRING = "toString";
    var RegExpPrototype = RegExp.prototype;
    var n$ToString = RegExpPrototype[TO_STRING];
    var getFlags = functionUncurryThis(regexpFlags);
    var NOT_GENERIC = fails(function() {
      return n$ToString.call({ source: "a", flags: "b" }) != "/a/b";
    });
    var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;
    if (NOT_GENERIC || INCORRECT_NAME) {
      redefine(RegExp.prototype, TO_STRING, function toString2() {
        var R = anObject(this);
        var p = toString_1(R.source);
        var rf = R.flags;
        var f2 = toString_1(rf === void 0 && objectIsPrototypeOf(RegExpPrototype, R) && !("flags" in RegExpPrototype) ? getFlags(R) : rf);
        return "/" + p + "/" + f2;
      }, { unsafe: true });
    }
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var bind$1 = FunctionPrototype.bind;
    var call = FunctionPrototype.call;
    var functionApply = typeof Reflect == "object" && Reflect.apply || (bind$1 ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
    var MATCH$1 = wellKnownSymbol("match");
    var isRegexp = function(it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH$1]) !== void 0 ? !!isRegExp : classofRaw(it) == "RegExp");
    };
    var TypeError$3 = global_1.TypeError;
    var aConstructor = function(argument) {
      if (isConstructor(argument))
        return argument;
      throw TypeError$3(tryToString(argument) + " is not a constructor");
    };
    var SPECIES$1 = wellKnownSymbol("species");
    var speciesConstructor = function(O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === void 0 || (S = anObject(C)[SPECIES$1]) == void 0 ? defaultConstructor : aConstructor(S);
    };
    var arraySlice = functionUncurryThis([].slice);
    var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y;
    var MAX_UINT32 = 4294967295;
    var min$2 = Math.min;
    var $push = [].push;
    var exec = functionUncurryThis(/./.exec);
    var push$3 = functionUncurryThis($push);
    var stringSlice$2 = functionUncurryThis("".slice);
    var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function() {
      var re = /(?:)/;
      var originalExec = re.exec;
      re.exec = function() {
        return originalExec.apply(this, arguments);
      };
      var result = "ab".split(re);
      return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
    });
    fixRegexpWellKnownSymbolLogic("split", function(SPLIT, nativeSplit, maybeCallNative) {
      var internalSplit;
      if ("abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
        internalSplit = function(separator, limit) {
          var string = toString_1(requireObjectCoercible(this));
          var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
          if (lim === 0)
            return [];
          if (separator === void 0)
            return [string];
          if (!isRegexp(separator)) {
            return functionCall(nativeSplit, string, separator, lim);
          }
          var output = [];
          var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
          var lastLastIndex = 0;
          var separatorCopy = new RegExp(separator.source, flags + "g");
          var match2, lastIndex, lastLength;
          while (match2 = functionCall(regexpExec, separatorCopy, string)) {
            lastIndex = separatorCopy.lastIndex;
            if (lastIndex > lastLastIndex) {
              push$3(output, stringSlice$2(string, lastLastIndex, match2.index));
              if (match2.length > 1 && match2.index < string.length)
                functionApply($push, output, arraySlice(match2, 1));
              lastLength = match2[0].length;
              lastLastIndex = lastIndex;
              if (output.length >= lim)
                break;
            }
            if (separatorCopy.lastIndex === match2.index)
              separatorCopy.lastIndex++;
          }
          if (lastLastIndex === string.length) {
            if (lastLength || !exec(separatorCopy, ""))
              push$3(output, "");
          } else
            push$3(output, stringSlice$2(string, lastLastIndex));
          return output.length > lim ? arraySlice(output, 0, lim) : output;
        };
      } else if ("0".split(void 0, 0).length) {
        internalSplit = function(separator, limit) {
          return separator === void 0 && limit === 0 ? [] : functionCall(nativeSplit, this, separator, limit);
        };
      } else
        internalSplit = nativeSplit;
      return [
        function split2(separator, limit) {
          var O = requireObjectCoercible(this);
          var splitter = separator == void 0 ? void 0 : getMethod(separator, SPLIT);
          return splitter ? functionCall(splitter, separator, O, limit) : functionCall(internalSplit, toString_1(O), separator, limit);
        },
        function(string, limit) {
          var rx = anObject(this);
          var S = toString_1(string);
          var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
          if (res.done)
            return res.value;
          var C = speciesConstructor(rx, RegExp);
          var unicodeMatching = rx.unicode;
          var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y");
          var splitter = new C(UNSUPPORTED_Y ? "^(?:" + rx.source + ")" : rx, flags);
          var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
          if (lim === 0)
            return [];
          if (S.length === 0)
            return regexpExecAbstract(splitter, S) === null ? [S] : [];
          var p = 0;
          var q = 0;
          var A = [];
          while (q < S.length) {
            splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
            var z = regexpExecAbstract(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
            var e;
            if (z === null || (e = min$2(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
              q = advanceStringIndex(S, q, unicodeMatching);
            } else {
              push$3(A, stringSlice$2(S, p, q));
              if (A.length === lim)
                return A;
              for (var i = 1; i <= z.length - 1; i++) {
                push$3(A, z[i]);
                if (A.length === lim)
                  return A;
              }
              q = p = e;
            }
          }
          push$3(A, stringSlice$2(S, p));
          return A;
        }
      ];
    }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
    function addClass(element, className) {
      if (element instanceof SVGElement) {
        var pre = element.getAttribute("class") || "";
        if (!pre.match(className)) {
          element.setAttribute("class", "".concat(pre, " ").concat(className));
        }
      } else {
        if (element.classList !== void 0) {
          var classes = className.split(" ");
          forEach(classes, function(cls) {
            element.classList.add(cls);
          });
        } else if (!element.className.match(className)) {
          element.className += " ".concat(className);
        }
      }
    }
    function getPropValue(element, propName) {
      var propValue = "";
      if (element.currentStyle) {
        propValue = element.currentStyle[propName];
      } else if (document.defaultView && document.defaultView.getComputedStyle) {
        propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName);
      }
      if (propValue && propValue.toLowerCase) {
        return propValue.toLowerCase();
      } else {
        return propValue;
      }
    }
    function setShowElement(_ref) {
      var element = _ref.element;
      addClass(element, "introjs-showElement");
      var currentElementPosition = getPropValue(element, "position");
      if (currentElementPosition !== "absolute" && currentElementPosition !== "relative" && currentElementPosition !== "sticky" && currentElementPosition !== "fixed") {
        addClass(element, "introjs-relativePosition");
      }
    }
    function getScrollParent(element) {
      var style = window.getComputedStyle(element);
      var excludeStaticParent = style.position === "absolute";
      var overflowRegex = /(auto|scroll)/;
      if (style.position === "fixed")
        return document.body;
      for (var parent = element; parent = parent.parentElement; ) {
        style = window.getComputedStyle(parent);
        if (excludeStaticParent && style.position === "static") {
          continue;
        }
        if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX))
          return parent;
      }
      return document.body;
    }
    function scrollParentToElement(targetElement) {
      var element = targetElement.element;
      if (!this._options.scrollToElement)
        return;
      var parent = getScrollParent(element);
      if (parent === document.body)
        return;
      parent.scrollTop = element.offsetTop - parent.offsetTop;
    }
    function getWinSize() {
      if (window.innerWidth !== void 0) {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      } else {
        var D = document.documentElement;
        return {
          width: D.clientWidth,
          height: D.clientHeight
        };
      }
    }
    function elementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom + 80 <= window.innerHeight && rect.right <= window.innerWidth;
    }
    function scrollTo(scrollTo2, _ref, tooltipLayer) {
      var element = _ref.element;
      if (scrollTo2 === "off")
        return;
      var rect;
      if (!this._options.scrollToElement)
        return;
      if (scrollTo2 === "tooltip") {
        rect = tooltipLayer.getBoundingClientRect();
      } else {
        rect = element.getBoundingClientRect();
      }
      if (!elementInViewport(element)) {
        var winHeight = getWinSize().height;
        var top = rect.bottom - (rect.bottom - rect.top);
        if (top < 0 || element.clientHeight > winHeight) {
          window.scrollBy(0, rect.top - (winHeight / 2 - rect.height / 2) - this._options.scrollPadding);
        } else {
          window.scrollBy(0, rect.top - (winHeight / 2 - rect.height / 2) + this._options.scrollPadding);
        }
      }
    }
    function setAnchorAsButton(anchor) {
      anchor.setAttribute("role", "button");
      anchor.tabIndex = 0;
    }
    var $assign = Object.assign;
    var defineProperty = Object.defineProperty;
    var concat$1 = functionUncurryThis([].concat);
    var objectAssign = !$assign || fails(function() {
      if (descriptors && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
        enumerable: true,
        get: function() {
          defineProperty(this, "b", {
            value: 3,
            enumerable: false
          });
        }
      }), { b: 2 })).b !== 1)
        return true;
      var A = {};
      var B = {};
      var symbol = Symbol();
      var alphabet = "abcdefghijklmnopqrst";
      A[symbol] = 7;
      alphabet.split("").forEach(function(chr) {
        B[chr] = chr;
      });
      return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join("") != alphabet;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var argumentsLength = arguments.length;
      var index2 = 1;
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      var propertyIsEnumerable = objectPropertyIsEnumerable.f;
      while (argumentsLength > index2) {
        var S = indexedObject(arguments[index2++]);
        var keys2 = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys2.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys2[j++];
          if (!descriptors || functionCall(propertyIsEnumerable, S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
    _export({ target: "Object", stat: true, forced: Object.assign !== objectAssign }, {
      assign: objectAssign
    });
    function isFixed(element) {
      var p = element.parentNode;
      if (!p || p.nodeName === "HTML") {
        return false;
      }
      if (getPropValue(element, "position") === "fixed") {
        return true;
      }
      return isFixed(p);
    }
    function getOffset(element, relativeEl) {
      var body = document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      relativeEl = relativeEl || body;
      var x = element.getBoundingClientRect();
      var xr = relativeEl.getBoundingClientRect();
      var relativeElPosition = getPropValue(relativeEl, "position");
      var obj = {
        width: x.width,
        height: x.height
      };
      if (relativeEl.tagName.toLowerCase() !== "body" && relativeElPosition === "relative" || relativeElPosition === "sticky") {
        return Object.assign(obj, {
          top: x.top - xr.top,
          left: x.left - xr.left
        });
      } else {
        if (isFixed(element)) {
          return Object.assign(obj, {
            top: x.top,
            left: x.left
          });
        } else {
          return Object.assign(obj, {
            top: x.top + scrollTop,
            left: x.left + scrollLeft
          });
        }
      }
    }
    var floor$1 = Math.floor;
    var charAt = functionUncurryThis("".charAt);
    var replace = functionUncurryThis("".replace);
    var stringSlice$1 = functionUncurryThis("".slice);
    var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
    var getSubstitution = function(matched, str, position, captures, namedCaptures, replacement2) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== void 0) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return replace(replacement2, symbols, function(match2, ch) {
        var capture;
        switch (charAt(ch, 0)) {
          case "$":
            return "$";
          case "&":
            return matched;
          case "`":
            return stringSlice$1(str, 0, position);
          case "'":
            return stringSlice$1(str, tailPos);
          case "<":
            capture = namedCaptures[stringSlice$1(ch, 1, -1)];
            break;
          default:
            var n = +ch;
            if (n === 0)
              return match2;
            if (n > m) {
              var f2 = floor$1(n / 10);
              if (f2 === 0)
                return match2;
              if (f2 <= m)
                return captures[f2 - 1] === void 0 ? charAt(ch, 1) : captures[f2 - 1] + charAt(ch, 1);
              return match2;
            }
            capture = captures[n - 1];
        }
        return capture === void 0 ? "" : capture;
      });
    };
    var REPLACE = wellKnownSymbol("replace");
    var max$2 = Math.max;
    var min$1 = Math.min;
    var concat = functionUncurryThis([].concat);
    var push$2 = functionUncurryThis([].push);
    var stringIndexOf$1 = functionUncurryThis("".indexOf);
    var stringSlice = functionUncurryThis("".slice);
    var maybeToString = function(it) {
      return it === void 0 ? it : String(it);
    };
    var REPLACE_KEEPS_$0 = function() {
      return "a".replace(/./, "$0") === "$0";
    }();
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
      if (/./[REPLACE]) {
        return /./[REPLACE]("a", "$0") === "";
      }
      return false;
    }();
    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
      var re = /./;
      re.exec = function() {
        var result = [];
        result.groups = { a: "7" };
        return result;
      };
      return "".replace(re, "$<a>") !== "7";
    });
    fixRegexpWellKnownSymbolLogic("replace", function(_, nativeReplace2, maybeCallNative) {
      var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
      return [
        function replace2(searchValue, replaceValue) {
          var O = requireObjectCoercible(this);
          var replacer = searchValue == void 0 ? void 0 : getMethod(searchValue, REPLACE);
          return replacer ? functionCall(replacer, searchValue, O, replaceValue) : functionCall(nativeReplace2, toString_1(O), searchValue, replaceValue);
        },
        function(string, replaceValue) {
          var rx = anObject(this);
          var S = toString_1(string);
          if (typeof replaceValue == "string" && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, "$<") === -1) {
            var res = maybeCallNative(nativeReplace2, rx, S, replaceValue);
            if (res.done)
              return res.value;
          }
          var functionalReplace = isCallable(replaceValue);
          if (!functionalReplace)
            replaceValue = toString_1(replaceValue);
          var global = rx.global;
          if (global) {
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
          }
          var results = [];
          while (true) {
            var result = regexpExecAbstract(rx, S);
            if (result === null)
              break;
            push$2(results, result);
            if (!global)
              break;
            var matchStr = toString_1(result[0]);
            if (matchStr === "")
              rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          }
          var accumulatedResult = "";
          var nextSourcePosition = 0;
          for (var i = 0; i < results.length; i++) {
            result = results[i];
            var matched = toString_1(result[0]);
            var position = max$2(min$1(toIntegerOrInfinity(result.index), S.length), 0);
            var captures = [];
            for (var j = 1; j < result.length; j++)
              push$2(captures, maybeToString(result[j]));
            var namedCaptures = result.groups;
            if (functionalReplace) {
              var replacerArgs = concat([matched], captures, position, S);
              if (namedCaptures !== void 0)
                push$2(replacerArgs, namedCaptures);
              var replacement2 = toString_1(functionApply(replaceValue, void 0, replacerArgs));
            } else {
              replacement2 = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
            }
            if (position >= nextSourcePosition) {
              accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement2;
              nextSourcePosition = position + matched.length;
            }
          }
          return accumulatedResult + stringSlice(S, nextSourcePosition);
        }
      ];
    }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
    function removeClass(element, classNameRegex) {
      if (element instanceof SVGElement) {
        var pre = element.getAttribute("class") || "";
        element.setAttribute("class", pre.replace(classNameRegex, "").replace(/^\s+|\s+$/g, ""));
      } else {
        element.className = element.className.replace(classNameRegex, "").replace(/^\s+|\s+$/g, "");
      }
    }
    function setStyle(element, style) {
      var cssText = "";
      if (element.style.cssText) {
        cssText += element.style.cssText;
      }
      if (typeof style === "string") {
        cssText += style;
      } else {
        for (var rule in style) {
          cssText += "".concat(rule, ":").concat(style[rule], ";");
        }
      }
      element.style.cssText = cssText;
    }
    function setHelperLayerPosition(helperLayer) {
      if (helperLayer) {
        if (!this._introItems[this._currentStep])
          return;
        var currentElement = this._introItems[this._currentStep];
        var elementPosition = getOffset(currentElement.element, this._targetElement);
        var widthHeightPadding = this._options.helperElementPadding;
        if (isFixed(currentElement.element)) {
          addClass(helperLayer, "introjs-fixedTooltip");
        } else {
          removeClass(helperLayer, "introjs-fixedTooltip");
        }
        if (currentElement.position === "floating") {
          widthHeightPadding = 0;
        }
        setStyle(helperLayer, {
          width: "".concat(elementPosition.width + widthHeightPadding, "px"),
          height: "".concat(elementPosition.height + widthHeightPadding, "px"),
          top: "".concat(elementPosition.top - widthHeightPadding / 2, "px"),
          left: "".concat(elementPosition.left - widthHeightPadding / 2, "px")
        });
      }
    }
    var UNSCOPABLES = wellKnownSymbol("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] == void 0) {
      objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: objectCreate(null)
      });
    }
    var addToUnscopables = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
    var $includes = arrayIncludes.includes;
    _export({ target: "Array", proto: true }, {
      includes: function includes(el) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    addToUnscopables("includes");
    var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport("slice");
    var SPECIES = wellKnownSymbol("species");
    var Array$1 = global_1.Array;
    var max$1 = Math.max;
    _export({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
      slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = lengthOfArrayLike(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
        var Constructor, result, n;
        if (isArray(O)) {
          Constructor = O.constructor;
          if (isConstructor(Constructor) && (Constructor === Array$1 || isArray(Constructor.prototype))) {
            Constructor = void 0;
          } else if (isObject(Constructor)) {
            Constructor = Constructor[SPECIES];
            if (Constructor === null)
              Constructor = void 0;
          }
          if (Constructor === Array$1 || Constructor === void 0) {
            return arraySlice(O, k, fin);
          }
        }
        result = new (Constructor === void 0 ? Array$1 : Constructor)(max$1(fin - k, 0));
        for (n = 0; k < fin; k++, n++)
          if (k in O)
            createProperty(result, n, O[k]);
        result.length = n;
        return result;
      }
    });
    var TypeError$2 = global_1.TypeError;
    var notARegexp = function(it) {
      if (isRegexp(it)) {
        throw TypeError$2("The method doesn't accept regular expressions");
      }
      return it;
    };
    var MATCH = wellKnownSymbol("match");
    var correctIsRegexpLogic = function(METHOD_NAME) {
      var regexp = /./;
      try {
        "/./"[METHOD_NAME](regexp);
      } catch (error1) {
        try {
          regexp[MATCH] = false;
          return "/./"[METHOD_NAME](regexp);
        } catch (error2) {
        }
      }
      return false;
    };
    var stringIndexOf = functionUncurryThis("".indexOf);
    _export({ target: "String", proto: true, forced: !correctIsRegexpLogic("includes") }, {
      includes: function includes(searchString) {
        return !!~stringIndexOf(toString_1(requireObjectCoercible(this)), toString_1(notARegexp(searchString)), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var arrayMethodIsStrict = function(METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails(function() {
        method.call(null, argument || function() {
          throw 1;
        }, 1);
      });
    };
    var un$Join = functionUncurryThis([].join);
    var ES3_STRINGS = indexedObject != Object;
    var STRICT_METHOD$1 = arrayMethodIsStrict("join", ",");
    _export({ target: "Array", proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
      join: function join(separator) {
        return un$Join(toIndexedObject(this), separator === void 0 ? "," : separator);
      }
    });
    var bind = functionUncurryThis(functionUncurryThis.bind);
    var functionBindContext = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : bind ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
    var push$1 = functionUncurryThis([].push);
    var createMethod = function(TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var IS_FILTER_REJECT = TYPE == 7;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self2 = indexedObject(O);
        var boundFunction = functionBindContext(callbackfn, that);
        var length = lengthOfArrayLike(self2);
        var index2 = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
        var value, result;
        for (; length > index2; index2++)
          if (NO_HOLES || index2 in self2) {
            value = self2[index2];
            result = boundFunction(value, index2, O);
            if (TYPE) {
              if (IS_MAP)
                target[index2] = result;
              else if (result)
                switch (TYPE) {
                  case 3:
                    return true;
                  case 5:
                    return value;
                  case 6:
                    return index2;
                  case 2:
                    push$1(target, value);
                }
              else
                switch (TYPE) {
                  case 4:
                    return false;
                  case 7:
                    push$1(target, value);
                }
            }
          }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };
    var arrayIteration = {
      forEach: createMethod(0),
      map: createMethod(1),
      filter: createMethod(2),
      some: createMethod(3),
      every: createMethod(4),
      find: createMethod(5),
      findIndex: createMethod(6),
      filterReject: createMethod(7)
    };
    var $filter = arrayIteration.filter;
    var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport("filter");
    _export({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
      filter: function filter(callbackfn) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    function checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer) {
      if (targetOffset.left + tooltipLayerStyleLeft + tooltipOffset.width > windowSize.width) {
        tooltipLayer.style.left = "".concat(windowSize.width - tooltipOffset.width - targetOffset.left, "px");
        return false;
      }
      tooltipLayer.style.left = "".concat(tooltipLayerStyleLeft, "px");
      return true;
    }
    function checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer) {
      if (targetOffset.left + targetOffset.width - tooltipLayerStyleRight - tooltipOffset.width < 0) {
        tooltipLayer.style.left = "".concat(-targetOffset.left, "px");
        return false;
      }
      tooltipLayer.style.right = "".concat(tooltipLayerStyleRight, "px");
      return true;
    }
    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
    var TypeError$1 = global_1.TypeError;
    var max = Math.max;
    var min = Math.min;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
    _export({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      splice: function splice(start, deleteCount) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var actualStart = toAbsoluteIndex(start, len);
        var argumentsLength = arguments.length;
        var insertCount, actualDeleteCount, A, k, from, to;
        if (argumentsLength === 0) {
          insertCount = actualDeleteCount = 0;
        } else if (argumentsLength === 1) {
          insertCount = 0;
          actualDeleteCount = len - actualStart;
        } else {
          insertCount = argumentsLength - 2;
          actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
        }
        if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
          throw TypeError$1(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
        }
        A = arraySpeciesCreate(O, actualDeleteCount);
        for (k = 0; k < actualDeleteCount; k++) {
          from = actualStart + k;
          if (from in O)
            createProperty(A, k, O[from]);
        }
        A.length = actualDeleteCount;
        if (insertCount < actualDeleteCount) {
          for (k = actualStart; k < len - actualDeleteCount; k++) {
            from = k + actualDeleteCount;
            to = k + insertCount;
            if (from in O)
              O[to] = O[from];
            else
              delete O[to];
          }
          for (k = len; k > len - actualDeleteCount + insertCount; k--)
            delete O[k - 1];
        } else if (insertCount > actualDeleteCount) {
          for (k = len - actualDeleteCount; k > actualStart; k--) {
            from = k + actualDeleteCount - 1;
            to = k + insertCount - 1;
            if (from in O)
              O[to] = O[from];
            else
              delete O[to];
          }
        }
        for (k = 0; k < insertCount; k++) {
          O[k + actualStart] = arguments[k + 2];
        }
        O.length = len - actualDeleteCount + insertCount;
        return A;
      }
    });
    function removeEntry(stringArray, stringToRemove) {
      if (stringArray.includes(stringToRemove)) {
        stringArray.splice(stringArray.indexOf(stringToRemove), 1);
      }
    }
    function _determineAutoAlignment(offsetLeft, tooltipWidth, _ref, desiredAlignment) {
      var width = _ref.width;
      var halfTooltipWidth = tooltipWidth / 2;
      var winWidth = Math.min(width, window.screen.width);
      var possibleAlignments = ["-left-aligned", "-middle-aligned", "-right-aligned"];
      var calculatedAlignment = "";
      if (winWidth - offsetLeft < tooltipWidth) {
        removeEntry(possibleAlignments, "-left-aligned");
      }
      if (offsetLeft < halfTooltipWidth || winWidth - offsetLeft < halfTooltipWidth) {
        removeEntry(possibleAlignments, "-middle-aligned");
      }
      if (offsetLeft < tooltipWidth) {
        removeEntry(possibleAlignments, "-right-aligned");
      }
      if (possibleAlignments.length) {
        if (possibleAlignments.includes(desiredAlignment)) {
          calculatedAlignment = desiredAlignment;
        } else {
          calculatedAlignment = possibleAlignments[0];
        }
      } else {
        calculatedAlignment = "-middle-aligned";
      }
      return calculatedAlignment;
    }
    function _determineAutoPosition(targetElement, tooltipLayer, desiredTooltipPosition) {
      var possiblePositions = this._options.positionPrecedence.slice();
      var windowSize = getWinSize();
      var tooltipHeight = getOffset(tooltipLayer).height + 10;
      var tooltipWidth = getOffset(tooltipLayer).width + 20;
      var targetElementRect = targetElement.getBoundingClientRect();
      var calculatedPosition = "floating";
      if (targetElementRect.bottom + tooltipHeight > windowSize.height) {
        removeEntry(possiblePositions, "bottom");
      }
      if (targetElementRect.top - tooltipHeight < 0) {
        removeEntry(possiblePositions, "top");
      }
      if (targetElementRect.right + tooltipWidth > windowSize.width) {
        removeEntry(possiblePositions, "right");
      }
      if (targetElementRect.left - tooltipWidth < 0) {
        removeEntry(possiblePositions, "left");
      }
      var desiredAlignment = function(pos) {
        var hyphenIndex = pos.indexOf("-");
        if (hyphenIndex !== -1) {
          return pos.substr(hyphenIndex);
        }
        return "";
      }(desiredTooltipPosition || "");
      if (desiredTooltipPosition) {
        desiredTooltipPosition = desiredTooltipPosition.split("-")[0];
      }
      if (possiblePositions.length) {
        if (possiblePositions.includes(desiredTooltipPosition)) {
          calculatedPosition = desiredTooltipPosition;
        } else {
          calculatedPosition = possiblePositions[0];
        }
      }
      if (["top", "bottom"].includes(calculatedPosition)) {
        calculatedPosition += _determineAutoAlignment(targetElementRect.left, tooltipWidth, windowSize, desiredAlignment);
      }
      return calculatedPosition;
    }
    function placeTooltip(targetElement, tooltipLayer, arrowLayer, hintMode) {
      var tooltipCssClass = "";
      var currentStepObj;
      var tooltipOffset;
      var targetOffset;
      var windowSize;
      var currentTooltipPosition;
      hintMode = hintMode || false;
      tooltipLayer.style.top = null;
      tooltipLayer.style.right = null;
      tooltipLayer.style.bottom = null;
      tooltipLayer.style.left = null;
      tooltipLayer.style.marginLeft = null;
      tooltipLayer.style.marginTop = null;
      arrowLayer.style.display = "inherit";
      if (!this._introItems[this._currentStep])
        return;
      currentStepObj = this._introItems[this._currentStep];
      if (typeof currentStepObj.tooltipClass === "string") {
        tooltipCssClass = currentStepObj.tooltipClass;
      } else {
        tooltipCssClass = this._options.tooltipClass;
      }
      tooltipLayer.className = ["introjs-tooltip", tooltipCssClass].filter(Boolean).join(" ");
      tooltipLayer.setAttribute("role", "dialog");
      currentTooltipPosition = this._introItems[this._currentStep].position;
      if (currentTooltipPosition !== "floating" && this._options.autoPosition) {
        currentTooltipPosition = _determineAutoPosition.call(this, targetElement, tooltipLayer, currentTooltipPosition);
      }
      var tooltipLayerStyleLeft;
      targetOffset = getOffset(targetElement);
      tooltipOffset = getOffset(tooltipLayer);
      windowSize = getWinSize();
      addClass(tooltipLayer, "introjs-".concat(currentTooltipPosition));
      switch (currentTooltipPosition) {
        case "top-right-aligned":
          arrowLayer.className = "introjs-arrow bottom-right";
          var tooltipLayerStyleRight = 0;
          checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
          tooltipLayer.style.bottom = "".concat(targetOffset.height + 20, "px");
          break;
        case "top-middle-aligned":
          arrowLayer.className = "introjs-arrow bottom-middle";
          var tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2;
          if (hintMode) {
            tooltipLayerStyleLeftRight += 5;
          }
          if (checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
            tooltipLayer.style.right = null;
            checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
          }
          tooltipLayer.style.bottom = "".concat(targetOffset.height + 20, "px");
          break;
        case "top-left-aligned":
        case "top":
          arrowLayer.className = "introjs-arrow bottom";
          tooltipLayerStyleLeft = hintMode ? 0 : 15;
          checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
          tooltipLayer.style.bottom = "".concat(targetOffset.height + 20, "px");
          break;
        case "right":
          tooltipLayer.style.left = "".concat(targetOffset.width + 20, "px");
          if (targetOffset.top + tooltipOffset.height > windowSize.height) {
            arrowLayer.className = "introjs-arrow left-bottom";
            tooltipLayer.style.top = "-".concat(tooltipOffset.height - targetOffset.height - 20, "px");
          } else {
            arrowLayer.className = "introjs-arrow left";
          }
          break;
        case "left":
          if (!hintMode && this._options.showStepNumbers === true) {
            tooltipLayer.style.top = "15px";
          }
          if (targetOffset.top + tooltipOffset.height > windowSize.height) {
            tooltipLayer.style.top = "-".concat(tooltipOffset.height - targetOffset.height - 20, "px");
            arrowLayer.className = "introjs-arrow right-bottom";
          } else {
            arrowLayer.className = "introjs-arrow right";
          }
          tooltipLayer.style.right = "".concat(targetOffset.width + 20, "px");
          break;
        case "floating":
          arrowLayer.style.display = "none";
          tooltipLayer.style.left = "50%";
          tooltipLayer.style.top = "50%";
          tooltipLayer.style.marginLeft = "-".concat(tooltipOffset.width / 2, "px");
          tooltipLayer.style.marginTop = "-".concat(tooltipOffset.height / 2, "px");
          break;
        case "bottom-right-aligned":
          arrowLayer.className = "introjs-arrow top-right";
          tooltipLayerStyleRight = 0;
          checkLeft(targetOffset, tooltipLayerStyleRight, tooltipOffset, tooltipLayer);
          tooltipLayer.style.top = "".concat(targetOffset.height + 20, "px");
          break;
        case "bottom-middle-aligned":
          arrowLayer.className = "introjs-arrow top-middle";
          tooltipLayerStyleLeftRight = targetOffset.width / 2 - tooltipOffset.width / 2;
          if (hintMode) {
            tooltipLayerStyleLeftRight += 5;
          }
          if (checkLeft(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, tooltipLayer)) {
            tooltipLayer.style.right = null;
            checkRight(targetOffset, tooltipLayerStyleLeftRight, tooltipOffset, windowSize, tooltipLayer);
          }
          tooltipLayer.style.top = "".concat(targetOffset.height + 20, "px");
          break;
        default:
          arrowLayer.className = "introjs-arrow top";
          tooltipLayerStyleLeft = 0;
          checkRight(targetOffset, tooltipLayerStyleLeft, tooltipOffset, windowSize, tooltipLayer);
          tooltipLayer.style.top = "".concat(targetOffset.height + 20, "px");
      }
    }
    function removeShowElement() {
      var elms = document.querySelectorAll(".introjs-showElement");
      forEach(elms, function(elm) {
        removeClass(elm, /introjs-[a-zA-Z]+/g);
      });
    }
    function _createElement(tagname, attrs) {
      var element = document.createElement(tagname);
      attrs = attrs || {};
      var setAttRegex = /^(?:role|data-|aria-)/;
      for (var k in attrs) {
        var v = attrs[k];
        if (k === "style") {
          setStyle(element, v);
        } else if (k.match(setAttRegex)) {
          element.setAttribute(k, v);
        } else {
          element[k] = v;
        }
      }
      return element;
    }
    function appendChild(parentElement, element, animate) {
      if (animate) {
        var existingOpacity = element.style.opacity || "1";
        setStyle(element, {
          opacity: "0"
        });
        window.setTimeout(function() {
          setStyle(element, {
            opacity: existingOpacity
          });
        }, 10);
      }
      parentElement.appendChild(element);
    }
    function _getProgress() {
      var currentStep2 = parseInt(this._currentStep + 1, 10);
      return currentStep2 / this._introItems.length * 100;
    }
    function _disableInteraction() {
      var disableInteractionLayer = document.querySelector(".introjs-disableInteraction");
      if (disableInteractionLayer === null) {
        disableInteractionLayer = _createElement("div", {
          className: "introjs-disableInteraction"
        });
        this._targetElement.appendChild(disableInteractionLayer);
      }
      setHelperLayerPosition.call(this, disableInteractionLayer);
    }
    function _createBullets(targetElement) {
      var self2 = this;
      var bulletsLayer = _createElement("div", {
        className: "introjs-bullets"
      });
      if (this._options.showBullets === false) {
        bulletsLayer.style.display = "none";
      }
      var ulContainer = _createElement("ul");
      ulContainer.setAttribute("role", "tablist");
      var anchorClick = function anchorClick2() {
        self2.goToStep(this.getAttribute("data-stepnumber"));
      };
      forEach(this._introItems, function(_ref, i) {
        var step = _ref.step;
        var innerLi = _createElement("li");
        var anchorLink = _createElement("a");
        innerLi.setAttribute("role", "presentation");
        anchorLink.setAttribute("role", "tab");
        anchorLink.onclick = anchorClick;
        if (i === targetElement.step - 1) {
          anchorLink.className = "active";
        }
        setAnchorAsButton(anchorLink);
        anchorLink.innerHTML = "&nbsp;";
        anchorLink.setAttribute("data-stepnumber", step);
        innerLi.appendChild(anchorLink);
        ulContainer.appendChild(innerLi);
      });
      bulletsLayer.appendChild(ulContainer);
      return bulletsLayer;
    }
    function _recreateBullets(oldReferenceLayer, targetElement) {
      if (this._options.showBullets) {
        var existing = document.querySelector(".introjs-bullets");
        existing.parentNode.replaceChild(_createBullets.call(this, targetElement), existing);
      }
    }
    function _updateBullets(oldReferenceLayer, targetElement) {
      if (this._options.showBullets) {
        oldReferenceLayer.querySelector(".introjs-bullets li > a.active").className = "";
        oldReferenceLayer.querySelector('.introjs-bullets li > a[data-stepnumber="'.concat(targetElement.step, '"]')).className = "active";
      }
    }
    function _createProgressBar() {
      var progressLayer = _createElement("div");
      progressLayer.className = "introjs-progress";
      if (this._options.showProgress === false) {
        progressLayer.style.display = "none";
      }
      var progressBar = _createElement("div", {
        className: "introjs-progressbar"
      });
      if (this._options.progressBarAdditionalClass) {
        progressBar.className += " " + this._options.progressBarAdditionalClass;
      }
      progressBar.setAttribute("role", "progress");
      progressBar.setAttribute("aria-valuemin", 0);
      progressBar.setAttribute("aria-valuemax", 100);
      progressBar.setAttribute("aria-valuenow", _getProgress.call(this));
      progressBar.style.cssText = "width:".concat(_getProgress.call(this), "%;");
      progressLayer.appendChild(progressBar);
      return progressLayer;
    }
    function _updateProgressBar(oldReferenceLayer) {
      oldReferenceLayer.querySelector(".introjs-progress .introjs-progressbar").style.cssText = "width:".concat(_getProgress.call(this), "%;");
      oldReferenceLayer.querySelector(".introjs-progress .introjs-progressbar").setAttribute("aria-valuenow", _getProgress.call(this));
    }
    function _showElement(targetElement) {
      var _this = this;
      if (typeof this._introChangeCallback !== "undefined") {
        this._introChangeCallback.call(this, targetElement.element);
      }
      var self2 = this;
      var oldHelperLayer = document.querySelector(".introjs-helperLayer");
      var oldReferenceLayer = document.querySelector(".introjs-tooltipReferenceLayer");
      var highlightClass = "introjs-helperLayer";
      var nextTooltipButton;
      var prevTooltipButton;
      var skipTooltipButton;
      if (typeof targetElement.highlightClass === "string") {
        highlightClass += " ".concat(targetElement.highlightClass);
      }
      if (typeof this._options.highlightClass === "string") {
        highlightClass += " ".concat(this._options.highlightClass);
      }
      if (oldHelperLayer !== null && oldReferenceLayer !== null) {
        var oldHelperNumberLayer = oldReferenceLayer.querySelector(".introjs-helperNumberLayer");
        var oldtooltipLayer = oldReferenceLayer.querySelector(".introjs-tooltiptext");
        var oldTooltipTitleLayer = oldReferenceLayer.querySelector(".introjs-tooltip-title");
        var oldArrowLayer = oldReferenceLayer.querySelector(".introjs-arrow");
        var oldtooltipContainer = oldReferenceLayer.querySelector(".introjs-tooltip");
        skipTooltipButton = oldReferenceLayer.querySelector(".introjs-skipbutton");
        prevTooltipButton = oldReferenceLayer.querySelector(".introjs-prevbutton");
        nextTooltipButton = oldReferenceLayer.querySelector(".introjs-nextbutton");
        oldHelperLayer.className = highlightClass;
        oldtooltipContainer.style.opacity = 0;
        oldtooltipContainer.style.display = "none";
        scrollParentToElement.call(self2, targetElement);
        setHelperLayerPosition.call(self2, oldHelperLayer);
        setHelperLayerPosition.call(self2, oldReferenceLayer);
        removeShowElement();
        if (self2._lastShowElementTimer) {
          window.clearTimeout(self2._lastShowElementTimer);
        }
        self2._lastShowElementTimer = window.setTimeout(function() {
          if (oldHelperNumberLayer !== null) {
            oldHelperNumberLayer.innerHTML = "".concat(targetElement.step, " of ").concat(_this._introItems.length);
          }
          oldtooltipLayer.innerHTML = targetElement.intro;
          oldTooltipTitleLayer.innerHTML = targetElement.title;
          oldtooltipContainer.style.display = "block";
          placeTooltip.call(self2, targetElement.element, oldtooltipContainer, oldArrowLayer);
          _updateBullets.call(self2, oldReferenceLayer, targetElement);
          _updateProgressBar.call(self2, oldReferenceLayer);
          oldtooltipContainer.style.opacity = 1;
          if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null && /introjs-donebutton/gi.test(nextTooltipButton.className)) {
            nextTooltipButton.focus();
          } else if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
            nextTooltipButton.focus();
          }
          scrollTo.call(self2, targetElement.scrollTo, targetElement, oldtooltipLayer);
        }, 350);
      } else {
        var helperLayer = _createElement("div", {
          className: highlightClass
        });
        var referenceLayer = _createElement("div", {
          className: "introjs-tooltipReferenceLayer"
        });
        var arrowLayer = _createElement("div", {
          className: "introjs-arrow"
        });
        var tooltipLayer = _createElement("div", {
          className: "introjs-tooltip"
        });
        var tooltipTextLayer = _createElement("div", {
          className: "introjs-tooltiptext"
        });
        var tooltipHeaderLayer = _createElement("div", {
          className: "introjs-tooltip-header"
        });
        var tooltipTitleLayer = _createElement("h1", {
          className: "introjs-tooltip-title"
        });
        var buttonsLayer = _createElement("div");
        setStyle(helperLayer, {
          "box-shadow": "0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(self2._options.overlayOpacity.toString(), ") 0 0 0 5000px")
        });
        scrollParentToElement.call(self2, targetElement);
        setHelperLayerPosition.call(self2, helperLayer);
        setHelperLayerPosition.call(self2, referenceLayer);
        appendChild(this._targetElement, helperLayer, true);
        appendChild(this._targetElement, referenceLayer);
        tooltipTextLayer.innerHTML = targetElement.intro;
        tooltipTitleLayer.innerHTML = targetElement.title;
        buttonsLayer.className = "introjs-tooltipbuttons";
        if (this._options.showButtons === false) {
          buttonsLayer.style.display = "none";
        }
        tooltipHeaderLayer.appendChild(tooltipTitleLayer);
        tooltipLayer.appendChild(tooltipHeaderLayer);
        tooltipLayer.appendChild(tooltipTextLayer);
        tooltipLayer.appendChild(_createBullets.call(this, targetElement));
        tooltipLayer.appendChild(_createProgressBar.call(this));
        var helperNumberLayer = _createElement("div");
        if (this._options.showStepNumbers === true) {
          helperNumberLayer.className = "introjs-helperNumberLayer";
          helperNumberLayer.innerHTML = "".concat(targetElement.step, " of ").concat(this._introItems.length);
          tooltipLayer.appendChild(helperNumberLayer);
        }
        tooltipLayer.appendChild(arrowLayer);
        referenceLayer.appendChild(tooltipLayer);
        nextTooltipButton = _createElement("a");
        nextTooltipButton.onclick = function() {
          if (self2._introItems.length - 1 !== self2._currentStep) {
            nextStep.call(self2);
          } else if (/introjs-donebutton/gi.test(nextTooltipButton.className)) {
            if (typeof self2._introCompleteCallback === "function") {
              self2._introCompleteCallback.call(self2, self2._currentStep, "done");
            }
            exitIntro.call(self2, self2._targetElement);
          }
        };
        setAnchorAsButton(nextTooltipButton);
        nextTooltipButton.innerHTML = this._options.nextLabel;
        prevTooltipButton = _createElement("a");
        prevTooltipButton.onclick = function() {
          if (self2._currentStep !== 0) {
            previousStep.call(self2);
          }
        };
        setAnchorAsButton(prevTooltipButton);
        prevTooltipButton.innerHTML = this._options.prevLabel;
        skipTooltipButton = _createElement("a", {
          className: "introjs-skipbutton"
        });
        setAnchorAsButton(skipTooltipButton);
        skipTooltipButton.innerHTML = this._options.skipLabel;
        skipTooltipButton.onclick = function() {
          if (self2._introItems.length - 1 === self2._currentStep && typeof self2._introCompleteCallback === "function") {
            self2._introCompleteCallback.call(self2, self2._currentStep, "skip");
          }
          if (typeof self2._introSkipCallback === "function") {
            self2._introSkipCallback.call(self2);
          }
          exitIntro.call(self2, self2._targetElement);
        };
        tooltipHeaderLayer.appendChild(skipTooltipButton);
        if (this._introItems.length > 1) {
          buttonsLayer.appendChild(prevTooltipButton);
        }
        buttonsLayer.appendChild(nextTooltipButton);
        tooltipLayer.appendChild(buttonsLayer);
        placeTooltip.call(self2, targetElement.element, tooltipLayer, arrowLayer);
        scrollTo.call(this, targetElement.scrollTo, targetElement, tooltipLayer);
      }
      var disableInteractionLayer = self2._targetElement.querySelector(".introjs-disableInteraction");
      if (disableInteractionLayer) {
        disableInteractionLayer.parentNode.removeChild(disableInteractionLayer);
      }
      if (targetElement.disableInteraction) {
        _disableInteraction.call(self2);
      }
      if (this._currentStep === 0 && this._introItems.length > 1) {
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
          nextTooltipButton.className = "".concat(this._options.buttonClass, " introjs-nextbutton");
          nextTooltipButton.innerHTML = this._options.nextLabel;
        }
        if (this._options.hidePrev === true) {
          if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
            prevTooltipButton.className = "".concat(this._options.buttonClass, " introjs-prevbutton introjs-hidden");
          }
          if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
            addClass(nextTooltipButton, "introjs-fullbutton");
          }
        } else {
          if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
            prevTooltipButton.className = "".concat(this._options.buttonClass, " introjs-prevbutton introjs-disabled");
          }
        }
      } else if (this._introItems.length - 1 === this._currentStep || this._introItems.length === 1) {
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
          prevTooltipButton.className = "".concat(this._options.buttonClass, " introjs-prevbutton");
        }
        if (this._options.hideNext === true) {
          if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
            nextTooltipButton.className = "".concat(this._options.buttonClass, " introjs-nextbutton introjs-hidden");
          }
          if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
            addClass(prevTooltipButton, "introjs-fullbutton");
          }
        } else {
          if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
            if (this._options.nextToDone === true) {
              nextTooltipButton.innerHTML = this._options.doneLabel;
              addClass(nextTooltipButton, "".concat(this._options.buttonClass, " introjs-nextbutton introjs-donebutton"));
            } else {
              nextTooltipButton.className = "".concat(this._options.buttonClass, " introjs-nextbutton introjs-disabled");
            }
          }
        }
      } else {
        if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
          prevTooltipButton.className = "".concat(this._options.buttonClass, " introjs-prevbutton");
        }
        if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
          nextTooltipButton.className = "".concat(this._options.buttonClass, " introjs-nextbutton");
          nextTooltipButton.innerHTML = this._options.nextLabel;
        }
      }
      if (typeof prevTooltipButton !== "undefined" && prevTooltipButton !== null) {
        prevTooltipButton.setAttribute("role", "button");
      }
      if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
        nextTooltipButton.setAttribute("role", "button");
      }
      if (typeof skipTooltipButton !== "undefined" && skipTooltipButton !== null) {
        skipTooltipButton.setAttribute("role", "button");
      }
      if (typeof nextTooltipButton !== "undefined" && nextTooltipButton !== null) {
        nextTooltipButton.focus();
      }
      setShowElement(targetElement);
      if (typeof this._introAfterChangeCallback !== "undefined") {
        this._introAfterChangeCallback.call(this, targetElement.element);
      }
    }
    function goToStep(step) {
      this._currentStep = step - 2;
      if (typeof this._introItems !== "undefined") {
        nextStep.call(this);
      }
    }
    function goToStepNumber(step) {
      this._currentStepNumber = step;
      if (typeof this._introItems !== "undefined") {
        nextStep.call(this);
      }
    }
    function nextStep() {
      var _this = this;
      this._direction = "forward";
      if (typeof this._currentStepNumber !== "undefined") {
        forEach(this._introItems, function(_ref, i) {
          var step = _ref.step;
          if (step === _this._currentStepNumber) {
            _this._currentStep = i - 1;
            _this._currentStepNumber = void 0;
          }
        });
      }
      if (typeof this._currentStep === "undefined") {
        this._currentStep = 0;
      } else {
        ++this._currentStep;
      }
      var nextStep2 = this._introItems[this._currentStep];
      var continueStep = true;
      if (typeof this._introBeforeChangeCallback !== "undefined") {
        continueStep = this._introBeforeChangeCallback.call(this, nextStep2 && nextStep2.element);
      }
      if (continueStep === false) {
        --this._currentStep;
        return false;
      }
      if (this._introItems.length <= this._currentStep) {
        if (typeof this._introCompleteCallback === "function") {
          this._introCompleteCallback.call(this, this._currentStep, "end");
        }
        exitIntro.call(this, this._targetElement);
        return;
      }
      _showElement.call(this, nextStep2);
    }
    function previousStep() {
      this._direction = "backward";
      if (this._currentStep === 0) {
        return false;
      }
      --this._currentStep;
      var nextStep2 = this._introItems[this._currentStep];
      var continueStep = true;
      if (typeof this._introBeforeChangeCallback !== "undefined") {
        continueStep = this._introBeforeChangeCallback.call(this, nextStep2 && nextStep2.element);
      }
      if (continueStep === false) {
        ++this._currentStep;
        return false;
      }
      _showElement.call(this, nextStep2);
    }
    function currentStep() {
      return this._currentStep;
    }
    function onKeyDown(e) {
      var code = e.code === void 0 ? e.which : e.code;
      if (code === null) {
        code = e.charCode === null ? e.keyCode : e.charCode;
      }
      if ((code === "Escape" || code === 27) && this._options.exitOnEsc === true) {
        exitIntro.call(this, this._targetElement);
      } else if (code === "ArrowLeft" || code === 37) {
        previousStep.call(this);
      } else if (code === "ArrowRight" || code === 39) {
        nextStep.call(this);
      } else if (code === "Enter" || code === "NumpadEnter" || code === 13) {
        var target = e.target || e.srcElement;
        if (target && target.className.match("introjs-prevbutton")) {
          previousStep.call(this);
        } else if (target && target.className.match("introjs-skipbutton")) {
          if (this._introItems.length - 1 === this._currentStep && typeof this._introCompleteCallback === "function") {
            this._introCompleteCallback.call(this, this._currentStep, "skip");
          }
          exitIntro.call(this, this._targetElement);
        } else if (target && target.getAttribute("data-stepnumber")) {
          target.click();
        } else {
          nextStep.call(this);
        }
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
    }
    function cloneObject(object) {
      if (object === null || _typeof(object) !== "object" || typeof object.nodeType !== "undefined") {
        return object;
      }
      var temp = {};
      for (var key in object) {
        if (typeof window.jQuery !== "undefined" && object[key] instanceof window.jQuery) {
          temp[key] = object[key];
        } else {
          temp[key] = cloneObject(object[key]);
        }
      }
      return temp;
    }
    function debounce(func, timeout) {
      var _this = this;
      var timer;
      return function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        clearTimeout(timer);
        timer = setTimeout(function() {
          func.apply(_this, args);
        }, timeout);
      };
    }
    function hintQuerySelectorAll(selector) {
      var hintsWrapper = document.querySelector(".introjs-hints");
      return hintsWrapper ? hintsWrapper.querySelectorAll(selector) : [];
    }
    function hideHint(stepId) {
      var hint = hintQuerySelectorAll('.introjs-hint[data-step="'.concat(stepId, '"]'))[0];
      removeHintTooltip.call(this);
      if (hint) {
        addClass(hint, "introjs-hidehint");
      }
      if (typeof this._hintCloseCallback !== "undefined") {
        this._hintCloseCallback.call(this, stepId);
      }
    }
    function hideHints() {
      var _this = this;
      var hints = hintQuerySelectorAll(".introjs-hint");
      forEach(hints, function(hint) {
        hideHint.call(_this, hint.getAttribute("data-step"));
      });
    }
    function showHints() {
      var _this2 = this;
      var hints = hintQuerySelectorAll(".introjs-hint");
      if (hints && hints.length) {
        forEach(hints, function(hint) {
          showHint.call(_this2, hint.getAttribute("data-step"));
        });
      } else {
        populateHints.call(this, this._targetElement);
      }
    }
    function showHint(stepId) {
      var hint = hintQuerySelectorAll('.introjs-hint[data-step="'.concat(stepId, '"]'))[0];
      if (hint) {
        removeClass(hint, /introjs-hidehint/g);
      }
    }
    function removeHints() {
      var _this3 = this;
      var hints = hintQuerySelectorAll(".introjs-hint");
      forEach(hints, function(hint) {
        removeHint.call(_this3, hint.getAttribute("data-step"));
      });
      DOMEvent.off(document, "click", removeHintTooltip, this, false);
      DOMEvent.off(window, "resize", reAlignHints, this, true);
      if (this._hintsAutoRefreshFunction)
        DOMEvent.off(window, "scroll", this._hintsAutoRefreshFunction, this, true);
    }
    function removeHint(stepId) {
      var hint = hintQuerySelectorAll('.introjs-hint[data-step="'.concat(stepId, '"]'))[0];
      if (hint) {
        hint.parentNode.removeChild(hint);
      }
    }
    function addHints() {
      var _this4 = this;
      var self2 = this;
      var hintsWrapper = document.querySelector(".introjs-hints");
      if (hintsWrapper === null) {
        hintsWrapper = _createElement("div", {
          className: "introjs-hints"
        });
      }
      var getHintClick = function getHintClick2(i) {
        return function(e) {
          var evt = e ? e : window.event;
          if (evt.stopPropagation) {
            evt.stopPropagation();
          }
          if (evt.cancelBubble !== null) {
            evt.cancelBubble = true;
          }
          showHintDialog.call(self2, i);
        };
      };
      forEach(this._introItems, function(item, i) {
        if (document.querySelector('.introjs-hint[data-step="'.concat(i, '"]'))) {
          return;
        }
        var hint = _createElement("a", {
          className: "introjs-hint"
        });
        setAnchorAsButton(hint);
        hint.onclick = getHintClick(i);
        if (!item.hintAnimation) {
          addClass(hint, "introjs-hint-no-anim");
        }
        if (isFixed(item.element)) {
          addClass(hint, "introjs-fixedhint");
        }
        var hintDot = _createElement("div", {
          className: "introjs-hint-dot"
        });
        var hintPulse = _createElement("div", {
          className: "introjs-hint-pulse"
        });
        hint.appendChild(hintDot);
        hint.appendChild(hintPulse);
        hint.setAttribute("data-step", i);
        item.targetElement = item.element;
        item.element = hint;
        alignHintPosition.call(_this4, item.hintPosition, hint, item.targetElement);
        hintsWrapper.appendChild(hint);
      });
      document.body.appendChild(hintsWrapper);
      if (typeof this._hintsAddedCallback !== "undefined") {
        this._hintsAddedCallback.call(this);
      }
      if (this._options.hintAutoRefreshInterval >= 0) {
        this._hintsAutoRefreshFunction = debounce(function() {
          return reAlignHints.call(_this4);
        }, this._options.hintAutoRefreshInterval);
        DOMEvent.on(window, "scroll", this._hintsAutoRefreshFunction, this, true);
      }
    }
    function alignHintPosition(position, _ref, element) {
      var style = _ref.style;
      var offset = getOffset.call(this, element);
      var iconWidth = 20;
      var iconHeight = 20;
      switch (position) {
        default:
        case "top-left":
          style.left = "".concat(offset.left, "px");
          style.top = "".concat(offset.top, "px");
          break;
        case "top-right":
          style.left = "".concat(offset.left + offset.width - iconWidth, "px");
          style.top = "".concat(offset.top, "px");
          break;
        case "bottom-left":
          style.left = "".concat(offset.left, "px");
          style.top = "".concat(offset.top + offset.height - iconHeight, "px");
          break;
        case "bottom-right":
          style.left = "".concat(offset.left + offset.width - iconWidth, "px");
          style.top = "".concat(offset.top + offset.height - iconHeight, "px");
          break;
        case "middle-left":
          style.left = "".concat(offset.left, "px");
          style.top = "".concat(offset.top + (offset.height - iconHeight) / 2, "px");
          break;
        case "middle-right":
          style.left = "".concat(offset.left + offset.width - iconWidth, "px");
          style.top = "".concat(offset.top + (offset.height - iconHeight) / 2, "px");
          break;
        case "middle-middle":
          style.left = "".concat(offset.left + (offset.width - iconWidth) / 2, "px");
          style.top = "".concat(offset.top + (offset.height - iconHeight) / 2, "px");
          break;
        case "bottom-middle":
          style.left = "".concat(offset.left + (offset.width - iconWidth) / 2, "px");
          style.top = "".concat(offset.top + offset.height - iconHeight, "px");
          break;
        case "top-middle":
          style.left = "".concat(offset.left + (offset.width - iconWidth) / 2, "px");
          style.top = "".concat(offset.top, "px");
          break;
      }
    }
    function showHintDialog(stepId) {
      var hintElement = document.querySelector('.introjs-hint[data-step="'.concat(stepId, '"]'));
      var item = this._introItems[stepId];
      if (typeof this._hintClickCallback !== "undefined") {
        this._hintClickCallback.call(this, hintElement, item, stepId);
      }
      var removedStep = removeHintTooltip.call(this);
      if (parseInt(removedStep, 10) === stepId) {
        return;
      }
      var tooltipLayer = _createElement("div", {
        className: "introjs-tooltip"
      });
      var tooltipTextLayer = _createElement("div");
      var arrowLayer = _createElement("div");
      var referenceLayer = _createElement("div");
      tooltipLayer.onclick = function(e) {
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.cancelBubble = true;
        }
      };
      tooltipTextLayer.className = "introjs-tooltiptext";
      var tooltipWrapper = _createElement("p");
      tooltipWrapper.innerHTML = item.hint;
      tooltipTextLayer.appendChild(tooltipWrapper);
      if (this._options.hintShowButton) {
        var closeButton = _createElement("a");
        closeButton.className = this._options.buttonClass;
        closeButton.setAttribute("role", "button");
        closeButton.innerHTML = this._options.hintButtonLabel;
        closeButton.onclick = hideHint.bind(this, stepId);
        tooltipTextLayer.appendChild(closeButton);
      }
      arrowLayer.className = "introjs-arrow";
      tooltipLayer.appendChild(arrowLayer);
      tooltipLayer.appendChild(tooltipTextLayer);
      this._currentStep = hintElement.getAttribute("data-step");
      referenceLayer.className = "introjs-tooltipReferenceLayer introjs-hintReference";
      referenceLayer.setAttribute("data-step", hintElement.getAttribute("data-step"));
      setHelperLayerPosition.call(this, referenceLayer);
      referenceLayer.appendChild(tooltipLayer);
      document.body.appendChild(referenceLayer);
      placeTooltip.call(this, hintElement, tooltipLayer, arrowLayer, true);
    }
    function removeHintTooltip() {
      var tooltip = document.querySelector(".introjs-hintReference");
      if (tooltip) {
        var step = tooltip.getAttribute("data-step");
        tooltip.parentNode.removeChild(tooltip);
        return step;
      }
    }
    function populateHints(targetElm) {
      var _this5 = this;
      this._introItems = [];
      if (this._options.hints) {
        forEach(this._options.hints, function(hint) {
          var currentItem = cloneObject(hint);
          if (typeof currentItem.element === "string") {
            currentItem.element = document.querySelector(currentItem.element);
          }
          currentItem.hintPosition = currentItem.hintPosition || _this5._options.hintPosition;
          currentItem.hintAnimation = currentItem.hintAnimation || _this5._options.hintAnimation;
          if (currentItem.element !== null) {
            _this5._introItems.push(currentItem);
          }
        });
      } else {
        var hints = targetElm.querySelectorAll("*[data-hint]");
        if (!hints || !hints.length) {
          return false;
        }
        forEach(hints, function(currentElement) {
          var hintAnimation = currentElement.getAttribute("data-hintanimation");
          if (hintAnimation) {
            hintAnimation = hintAnimation === "true";
          } else {
            hintAnimation = _this5._options.hintAnimation;
          }
          _this5._introItems.push({
            element: currentElement,
            hint: currentElement.getAttribute("data-hint"),
            hintPosition: currentElement.getAttribute("data-hintposition") || _this5._options.hintPosition,
            hintAnimation,
            tooltipClass: currentElement.getAttribute("data-tooltipclass"),
            position: currentElement.getAttribute("data-position") || _this5._options.tooltipPosition
          });
        });
      }
      addHints.call(this);
      DOMEvent.on(document, "click", removeHintTooltip, this, false);
      DOMEvent.on(window, "resize", reAlignHints, this, true);
    }
    function reAlignHints() {
      var _this6 = this;
      forEach(this._introItems, function(_ref2) {
        var targetElement = _ref2.targetElement, hintPosition = _ref2.hintPosition, element = _ref2.element;
        if (typeof targetElement === "undefined") {
          return;
        }
        alignHintPosition.call(_this6, hintPosition, element, targetElement);
      });
    }
    var floor = Math.floor;
    var mergeSort = function(array, comparefn) {
      var length = array.length;
      var middle = floor(length / 2);
      return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice(array, 0, middle), comparefn), mergeSort(arraySlice(array, middle), comparefn), comparefn);
    };
    var insertionSort = function(array, comparefn) {
      var length = array.length;
      var i = 1;
      var element, j;
      while (i < length) {
        j = i;
        element = array[i];
        while (j && comparefn(array[j - 1], element) > 0) {
          array[j] = array[--j];
        }
        if (j !== i++)
          array[j] = element;
      }
      return array;
    };
    var merge = function(array, left, right, comparefn) {
      var llength = left.length;
      var rlength = right.length;
      var lindex = 0;
      var rindex = 0;
      while (lindex < llength || rindex < rlength) {
        array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
      }
      return array;
    };
    var arraySort = mergeSort;
    var firefox = engineUserAgent.match(/firefox\/(\d+)/i);
    var engineFfVersion = !!firefox && +firefox[1];
    var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);
    var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);
    var engineWebkitVersion = !!webkit && +webkit[1];
    var test = [];
    var un$Sort = functionUncurryThis(test.sort);
    var push = functionUncurryThis(test.push);
    var FAILS_ON_UNDEFINED = fails(function() {
      test.sort(void 0);
    });
    var FAILS_ON_NULL = fails(function() {
      test.sort(null);
    });
    var STRICT_METHOD = arrayMethodIsStrict("sort");
    var STABLE_SORT = !fails(function() {
      if (engineV8Version)
        return engineV8Version < 70;
      if (engineFfVersion && engineFfVersion > 3)
        return;
      if (engineIsIeOrEdge)
        return true;
      if (engineWebkitVersion)
        return engineWebkitVersion < 603;
      var result = "";
      var code, chr, value, index2;
      for (code = 65; code < 76; code++) {
        chr = String.fromCharCode(code);
        switch (code) {
          case 66:
          case 69:
          case 70:
          case 72:
            value = 3;
            break;
          case 68:
          case 71:
            value = 4;
            break;
          default:
            value = 2;
        }
        for (index2 = 0; index2 < 47; index2++) {
          test.push({ k: chr + index2, v: value });
        }
      }
      test.sort(function(a, b) {
        return b.v - a.v;
      });
      for (index2 = 0; index2 < test.length; index2++) {
        chr = test[index2].k.charAt(0);
        if (result.charAt(result.length - 1) !== chr)
          result += chr;
      }
      return result !== "DGBEFHACIJK";
    });
    var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
    var getSortCompare = function(comparefn) {
      return function(x, y) {
        if (y === void 0)
          return -1;
        if (x === void 0)
          return 1;
        if (comparefn !== void 0)
          return +comparefn(x, y) || 0;
        return toString_1(x) > toString_1(y) ? 1 : -1;
      };
    };
    _export({ target: "Array", proto: true, forced: FORCED }, {
      sort: function sort(comparefn) {
        if (comparefn !== void 0)
          aCallable(comparefn);
        var array = toObject(this);
        if (STABLE_SORT)
          return comparefn === void 0 ? un$Sort(array) : un$Sort(array, comparefn);
        var items = [];
        var arrayLength = lengthOfArrayLike(array);
        var itemsLength, index2;
        for (index2 = 0; index2 < arrayLength; index2++) {
          if (index2 in array)
            push(items, array[index2]);
        }
        arraySort(items, getSortCompare(comparefn));
        itemsLength = items.length;
        index2 = 0;
        while (index2 < itemsLength)
          array[index2] = items[index2++];
        while (index2 < arrayLength)
          delete array[index2++];
        return array;
      }
    });
    function fetchIntroSteps(targetElm) {
      var _this = this;
      var allIntroSteps = targetElm.querySelectorAll("*[data-intro]");
      var introItems = [];
      if (this._options.steps) {
        forEach(this._options.steps, function(step) {
          var currentItem = cloneObject(step);
          currentItem.step = introItems.length + 1;
          currentItem.title = currentItem.title || "";
          if (typeof currentItem.element === "string") {
            currentItem.element = document.querySelector(currentItem.element);
          }
          if (typeof currentItem.element === "undefined" || currentItem.element === null) {
            var floatingElementQuery = document.querySelector(".introjsFloatingElement");
            if (floatingElementQuery === null) {
              floatingElementQuery = _createElement("div", {
                className: "introjsFloatingElement"
              });
              document.body.appendChild(floatingElementQuery);
            }
            currentItem.element = floatingElementQuery;
            currentItem.position = "floating";
          }
          currentItem.position = currentItem.position || _this._options.tooltipPosition;
          currentItem.scrollTo = currentItem.scrollTo || _this._options.scrollTo;
          if (typeof currentItem.disableInteraction === "undefined") {
            currentItem.disableInteraction = _this._options.disableInteraction;
          }
          if (currentItem.element !== null) {
            introItems.push(currentItem);
          }
        });
      } else {
        var elmsLength = allIntroSteps.length;
        var disableInteraction;
        if (elmsLength < 1) {
          return [];
        }
        forEach(allIntroSteps, function(currentElement) {
          if (_this._options.group && currentElement.getAttribute("data-intro-group") !== _this._options.group) {
            return;
          }
          if (currentElement.style.display === "none") {
            return;
          }
          var step = parseInt(currentElement.getAttribute("data-step"), 10);
          if (currentElement.hasAttribute("data-disable-interaction")) {
            disableInteraction = !!currentElement.getAttribute("data-disable-interaction");
          } else {
            disableInteraction = _this._options.disableInteraction;
          }
          if (step > 0) {
            introItems[step - 1] = {
              element: currentElement,
              title: currentElement.getAttribute("data-title") || "",
              intro: currentElement.getAttribute("data-intro"),
              step: parseInt(currentElement.getAttribute("data-step"), 10),
              tooltipClass: currentElement.getAttribute("data-tooltipclass"),
              highlightClass: currentElement.getAttribute("data-highlightclass"),
              position: currentElement.getAttribute("data-position") || _this._options.tooltipPosition,
              scrollTo: currentElement.getAttribute("data-scrollto") || _this._options.scrollTo,
              disableInteraction
            };
          }
        });
        var nextStep2 = 0;
        forEach(allIntroSteps, function(currentElement) {
          if (_this._options.group && currentElement.getAttribute("data-intro-group") !== _this._options.group) {
            return;
          }
          if (currentElement.getAttribute("data-step") === null) {
            while (true) {
              if (typeof introItems[nextStep2] === "undefined") {
                break;
              } else {
                nextStep2++;
              }
            }
            if (currentElement.hasAttribute("data-disable-interaction")) {
              disableInteraction = !!currentElement.getAttribute("data-disable-interaction");
            } else {
              disableInteraction = _this._options.disableInteraction;
            }
            introItems[nextStep2] = {
              element: currentElement,
              title: currentElement.getAttribute("data-title") || "",
              intro: currentElement.getAttribute("data-intro"),
              step: nextStep2 + 1,
              tooltipClass: currentElement.getAttribute("data-tooltipclass"),
              highlightClass: currentElement.getAttribute("data-highlightclass"),
              position: currentElement.getAttribute("data-position") || _this._options.tooltipPosition,
              scrollTo: currentElement.getAttribute("data-scrollto") || _this._options.scrollTo,
              disableInteraction
            };
          }
        });
      }
      var tempIntroItems = [];
      for (var z = 0; z < introItems.length; z++) {
        if (introItems[z]) {
          tempIntroItems.push(introItems[z]);
        }
      }
      introItems = tempIntroItems;
      introItems.sort(function(a, b) {
        return a.step - b.step;
      });
      return introItems;
    }
    function refresh(refreshSteps) {
      var referenceLayer = document.querySelector(".introjs-tooltipReferenceLayer");
      var helperLayer = document.querySelector(".introjs-helperLayer");
      var disableInteractionLayer = document.querySelector(".introjs-disableInteraction");
      setHelperLayerPosition.call(this, helperLayer);
      setHelperLayerPosition.call(this, referenceLayer);
      setHelperLayerPosition.call(this, disableInteractionLayer);
      if (refreshSteps) {
        this._introItems = fetchIntroSteps.call(this, this._targetElement);
        _recreateBullets.call(this, referenceLayer, this._introItems[this._currentStep]);
        _updateProgressBar.call(this, referenceLayer);
      }
      if (this._currentStep !== void 0 && this._currentStep !== null) {
        var oldArrowLayer = document.querySelector(".introjs-arrow");
        var oldtooltipContainer = document.querySelector(".introjs-tooltip");
        if (oldtooltipContainer && oldArrowLayer) {
          placeTooltip.call(this, this._introItems[this._currentStep].element, oldtooltipContainer, oldArrowLayer);
        }
      }
      reAlignHints.call(this);
      return this;
    }
    function onResize() {
      refresh.call(this);
    }
    function removeChild(element, animate) {
      if (!element || !element.parentElement)
        return;
      var parentElement = element.parentElement;
      if (animate) {
        setStyle(element, {
          opacity: "0"
        });
        window.setTimeout(function() {
          try {
            parentElement.removeChild(element);
          } catch (e) {
          }
        }, 500);
      } else {
        parentElement.removeChild(element);
      }
    }
    function exitIntro(targetElement, force) {
      var continueExit = true;
      if (this._introBeforeExitCallback !== void 0) {
        continueExit = this._introBeforeExitCallback.call(this);
      }
      if (!force && continueExit === false)
        return;
      var overlayLayers = targetElement.querySelectorAll(".introjs-overlay");
      if (overlayLayers && overlayLayers.length) {
        forEach(overlayLayers, function(overlayLayer) {
          return removeChild(overlayLayer);
        });
      }
      var helperLayer = targetElement.querySelector(".introjs-helperLayer");
      removeChild(helperLayer, true);
      var referenceLayer = targetElement.querySelector(".introjs-tooltipReferenceLayer");
      removeChild(referenceLayer);
      var disableInteractionLayer = targetElement.querySelector(".introjs-disableInteraction");
      removeChild(disableInteractionLayer);
      var floatingElement = document.querySelector(".introjsFloatingElement");
      removeChild(floatingElement);
      removeShowElement();
      DOMEvent.off(window, "keydown", onKeyDown, this, true);
      DOMEvent.off(window, "resize", onResize, this, true);
      if (this._introExitCallback !== void 0) {
        this._introExitCallback.call(this);
      }
      this._currentStep = void 0;
    }
    function addOverlayLayer(targetElm) {
      var _this = this;
      var overlayLayer = _createElement("div", {
        className: "introjs-overlay"
      });
      setStyle(overlayLayer, {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: "fixed"
      });
      targetElm.appendChild(overlayLayer);
      if (this._options.exitOnOverlayClick === true) {
        setStyle(overlayLayer, {
          cursor: "pointer"
        });
        overlayLayer.onclick = function() {
          exitIntro.call(_this, targetElm);
        };
      }
      return true;
    }
    function introForElement(targetElm) {
      if (this._introStartCallback !== void 0) {
        this._introStartCallback.call(this, targetElm);
      }
      var steps = fetchIntroSteps.call(this, targetElm);
      if (steps.length === 0) {
        return false;
      }
      this._introItems = steps;
      if (addOverlayLayer.call(this, targetElm)) {
        nextStep.call(this);
        if (this._options.keyboardNavigation) {
          DOMEvent.on(window, "keydown", onKeyDown, this, true);
        }
        DOMEvent.on(window, "resize", onResize, this, true);
      }
      return false;
    }
    var version = "4.3.0";
    function IntroJs(obj) {
      this._targetElement = obj;
      this._introItems = [];
      this._options = {
        nextLabel: "Next",
        prevLabel: "Back",
        skipLabel: "\xD7",
        doneLabel: "Done",
        hidePrev: false,
        hideNext: false,
        nextToDone: true,
        tooltipPosition: "bottom",
        tooltipClass: "",
        group: "",
        highlightClass: "",
        exitOnEsc: true,
        exitOnOverlayClick: true,
        showStepNumbers: false,
        keyboardNavigation: true,
        showButtons: true,
        showBullets: true,
        showProgress: false,
        scrollToElement: true,
        scrollTo: "element",
        scrollPadding: 30,
        overlayOpacity: 0.5,
        autoPosition: true,
        positionPrecedence: ["bottom", "top", "right", "left"],
        disableInteraction: false,
        helperElementPadding: 10,
        hintPosition: "top-middle",
        hintButtonLabel: "Got it",
        hintShowButton: true,
        hintAutoRefreshInterval: 10,
        hintAnimation: true,
        buttonClass: "introjs-button",
        progressBarAdditionalClass: false
      };
    }
    var introJs = function introJs2(targetElm) {
      var instance;
      if (_typeof(targetElm) === "object") {
        instance = new IntroJs(targetElm);
      } else if (typeof targetElm === "string") {
        var targetElement = document.querySelector(targetElm);
        if (targetElement) {
          instance = new IntroJs(targetElement);
        } else {
          throw new Error("There is no element with given selector.");
        }
      } else {
        instance = new IntroJs(document.body);
      }
      introJs2.instances[stamp(instance, "introjs-instance")] = instance;
      return instance;
    };
    introJs.version = version;
    introJs.instances = {};
    introJs.fn = IntroJs.prototype = {
      clone: function clone() {
        return new IntroJs(this);
      },
      setOption: function setOption(option, value) {
        this._options[option] = value;
        return this;
      },
      setOptions: function setOptions(options) {
        this._options = mergeOptions(this._options, options);
        return this;
      },
      start: function start() {
        introForElement.call(this, this._targetElement);
        return this;
      },
      goToStep: function goToStep$1(step) {
        goToStep.call(this, step);
        return this;
      },
      addStep: function addStep(options) {
        if (!this._options.steps) {
          this._options.steps = [];
        }
        this._options.steps.push(options);
        return this;
      },
      addSteps: function addSteps(steps) {
        if (!steps.length)
          return;
        for (var index2 = 0; index2 < steps.length; index2++) {
          this.addStep(steps[index2]);
        }
        return this;
      },
      goToStepNumber: function goToStepNumber$1(step) {
        goToStepNumber.call(this, step);
        return this;
      },
      nextStep: function nextStep$1() {
        nextStep.call(this);
        return this;
      },
      previousStep: function previousStep$1() {
        previousStep.call(this);
        return this;
      },
      currentStep: function currentStep$1() {
        return currentStep.call(this);
      },
      exit: function exit(force) {
        exitIntro.call(this, this._targetElement, force);
        return this;
      },
      refresh: function refresh$1(refreshSteps) {
        refresh.call(this, refreshSteps);
        return this;
      },
      onbeforechange: function onbeforechange(providedCallback) {
        if (typeof providedCallback === "function") {
          this._introBeforeChangeCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onbeforechange was not a function");
        }
        return this;
      },
      onchange: function onchange(providedCallback) {
        if (typeof providedCallback === "function") {
          this._introChangeCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onchange was not a function.");
        }
        return this;
      },
      onafterchange: function onafterchange(providedCallback) {
        if (typeof providedCallback === "function") {
          this._introAfterChangeCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onafterchange was not a function");
        }
        return this;
      },
      oncomplete: function oncomplete(providedCallback) {
        if (typeof providedCallback === "function") {
          this._introCompleteCallback = providedCallback;
        } else {
          throw new Error("Provided callback for oncomplete was not a function.");
        }
        return this;
      },
      onhintsadded: function onhintsadded(providedCallback) {
        if (typeof providedCallback === "function") {
          this._hintsAddedCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onhintsadded was not a function.");
        }
        return this;
      },
      onhintclick: function onhintclick(providedCallback) {
        if (typeof providedCallback === "function") {
          this._hintClickCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onhintclick was not a function.");
        }
        return this;
      },
      onhintclose: function onhintclose(providedCallback) {
        if (typeof providedCallback === "function") {
          this._hintCloseCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onhintclose was not a function.");
        }
        return this;
      },
      onstart: function onstart(providedCallback) {
        if (typeof providedCallback === "function") {
          this._introStartCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onstart was not a function.");
        }
        return this;
      },
      onexit: function onexit(providedCallback) {
        if (typeof providedCallback === "function") {
          this._introExitCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onexit was not a function.");
        }
        return this;
      },
      onskip: function onskip(providedCallback) {
        if (typeof providedCallback === "function") {
          this._introSkipCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onskip was not a function.");
        }
        return this;
      },
      onbeforeexit: function onbeforeexit(providedCallback) {
        if (typeof providedCallback === "function") {
          this._introBeforeExitCallback = providedCallback;
        } else {
          throw new Error("Provided callback for onbeforeexit was not a function.");
        }
        return this;
      },
      addHints: function addHints2() {
        populateHints.call(this, this._targetElement);
        return this;
      },
      hideHint: function hideHint$1(stepId) {
        hideHint.call(this, stepId);
        return this;
      },
      hideHints: function hideHints$1() {
        hideHints.call(this);
        return this;
      },
      showHint: function showHint$1(stepId) {
        showHint.call(this, stepId);
        return this;
      },
      showHints: function showHints$1() {
        showHints.call(this);
        return this;
      },
      removeHints: function removeHints$1() {
        removeHints.call(this);
        return this;
      },
      removeHint: function removeHint$1(stepId) {
        removeHint().call(this, stepId);
        return this;
      },
      showHintDialog: function showHintDialog$1(stepId) {
        showHintDialog.call(this, stepId);
        return this;
      }
    };
    return introJs;
  });
})(intro$1);
var intro = intro$1.exports;
var introjs_min = "";
const _sfc_main = defineComponent({
  components: { PageWrapper },
  setup() {
    const { prefixVar } = useDesign("");
    function handleStart() {
      intro().setOptions({
        steps: [
          {
            title: "Welcome",
            intro: "Hello World! \u{1F44B}"
          },
          {
            title: "Collapse Button",
            element: document.querySelector(`.${prefixVar}-layout-header-trigger`),
            intro: "This is the menu collapse button."
          },
          {
            title: "User Action",
            element: document.querySelector(`.${prefixVar}-layout-header-action`),
            intro: "This is the user function area."
          }
        ]
      }).start();
    }
    return { handleStart };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u5F00\u59CB");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u5F15\u5BFC\u9875",
    content: "\u7528\u4E8E\u7ED9\u7528\u6237\u7684\u6307\u5F15\u64CD\u4F5C"
  }, {
    default: withCtx(() => [
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _ctx.handleStart
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
