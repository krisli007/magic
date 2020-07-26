(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/scan/scan"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/scan/scan.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/scan/scan.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.7@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./scan.less */ "./src/pages/scan/scan.less");

var _search = __webpack_require__(/*! ../../image/search.png */ "./src/image/search.png");

var _search2 = _interopRequireDefault(_search);

var _bujian = __webpack_require__(/*! ../../image/bujian.png */ "./src/image/bujian.png");

var _bujian2 = _interopRequireDefault(_bujian);

var _brain = __webpack_require__(/*! ../../image/brain2.png */ "./src/image/brain2.png");

var _brain2 = _interopRequireDefault(_brain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scan = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Scan, _BaseComponent);

  function Scan() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Scan);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scan.__proto__ || Object.getPrototypeOf(Scan)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "result", "loopArray85", "confirmWord", "Search", "position", "Bujian", "scanStatus", "Brain", "word1", "word2", "statusBarHeight", "braintop"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.confirmMode = function () {
      _this.setState(function (preState) {
        return { confirmWord: !preState.confirmWord };
      });
    }, _this.toScan = function (e) {
      e.stopPropagation();
      _this.setState(function (preState) {
        return { scanStatus: !preState.scanStatus };
      });
      setTimeout(function () {
        _this.setState({
          braintop: '0'
        });
      }, 3000);
      console.log('开始播放1');
      var innerAudioContext = _taroWeapp2.default.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.src = 'https://baikecount.com/oob/scan.wav';
      innerAudioContext.onPlay(function () {
        console.log('开始播放2');
      });
      innerAudioContext.onError(function (res) {
        console.log(res.errMsg);
        console.log(res.errCode);
      });
    }, _this.back = function () {
      _taroWeapp2.default.navigateBack({
        delta: 1
      });
    }, _this.stopPropagation = function (e) {
      e.stopPropagation();
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Scan, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Scan.prototype.__proto__ || Object.getPrototypeOf(Scan.prototype), '_constructor', this).apply(this, arguments);
      this.index = 0;
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      /**
       * 指定state的类型声明为： Istate接口里的类型声明
       *
       * 一般储存 直接更改UI的变量
       */
      this.state = {
        confirmWord: true,
        statusBarHeight: 0,
        scanStatus: false,
        braintop: '100vh'
      };
      // 确定是二选一环节是第一个（true）还是第二个（false）
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var result, systemInfo;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.index = Number(this.$router.params.index);
                _context.next = 3;
                return _taroWeapp2.default.getStorage({
                  key: "result"
                });

              case 3:
                result = _context.sent.data;

                this.setState({
                  result: result
                });
                _taroWeapp2.default.getSystemInfo().catch(function (e) {
                  console.log({ e: e });
                });
                _context.next = 8;
                return _taroWeapp2.default.getSystemInfo();

              case 8:
                systemInfo = _context.sent;

                this.setState({
                  statusBarHeight: systemInfo.statusBarHeight
                });
                console.log(systemInfo);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var index = this.index;
      var _state = this.__state,
          result = _state.result,
          confirmWord = _state.confirmWord,
          statusBarHeight = _state.statusBarHeight,
          scanStatus = _state.scanStatus,
          braintop = _state.braintop;

      var position = result && result.data[this.index].position || 0;
      var word1 = result && result.data[this.index].words[position];
      var word2 = result && result.data[this.index].words[position + 1];
      var anonymousState__temp = confirmWord ? (0, _taroWeapp.internal_inline_style)({
        top: statusBarHeight + 'px'
      }) : null;
      var anonymousState__temp2 = !scanStatus ? (0, _taroWeapp.internal_inline_style)({
        top: statusBarHeight + 'px'
      }) : null;
      var anonymousState__temp3 = scanStatus ? (0, _taroWeapp.internal_inline_style)({ top: braintop }) : null;
      var loopArray85 = result ? result.data[this.index].words.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        if (index === position + 1) {}
        return {
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        result: result,
        loopArray85: loopArray85,
        Search: _search2.default,
        position: position,
        Bujian: _bujian2.default,
        Brain: _brain2.default,
        word1: word1,
        word2: word2
      });
      return this.__state;
    }
  }]);

  return Scan;
}(_taroWeapp.Component), _class.$$events = ["confirmMode", "toScan", "back", "stopPropagation"], _class.$$componentPath = "pages/scan/scan", _temp2);
exports.default = Scan;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.7@@tarojs/taro-weapp/index.js").default.createComponent(Scan, true));

/***/ }),

/***/ "./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js");

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liyingying/Desktop/app/app2/src!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/scan/scan.tsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liyingying/Desktop/app/app2/src!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/scan/scan.tsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/scan/scan.wxml";

/***/ }),

/***/ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || {Function: Function,Boolean: Boolean,Object: Object,Number: Number,Array: Array,Date: Date,String: String,Symbol: Symbol,Error: Error,TypeError: TypeError,Map: Map,Set: Set,WeakMap: WeakMap,WeakSet: WeakSet,ArrayBuffer: ArrayBuffer,Math: Math,Promise: Promise,RegExp: RegExp,DataView: DataView,isFinite: isFinite,parseInt: parseInt,parseFloat: parseFloat,Float32Array: Float32Array,Float64Array: Float64Array,Int8Array: Int8Array,Int16Array: Int16Array,Int32Array: Int32Array,Uint8Array: Uint8Array,Uint16Array: Uint16Array,Uint32Array: Uint32Array,Uint8ClampedArray: Uint8ClampedArray,setTimeout: setTimeout,clearTimeout: clearTimeout,setInterval: setInterval,clearInterval: clearInterval};

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_regenerator-runtime@0.11.1@regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || {Function: Function,Boolean: Boolean,Object: Object,Number: Number,Array: Array,Date: Date,String: String,Symbol: Symbol,Error: Error,TypeError: TypeError,Map: Map,Set: Set,WeakMap: WeakMap,WeakSet: WeakSet,ArrayBuffer: ArrayBuffer,Math: Math,Promise: Promise,RegExp: RegExp,DataView: DataView,isFinite: isFinite,parseInt: parseInt,parseFloat: parseFloat,Float32Array: Float32Array,Float64Array: Float64Array,Int8Array: Int8Array,Int16Array: Int16Array,Int32Array: Int32Array,Uint8Array: Uint8Array,Uint16Array: Uint16Array,Uint32Array: Uint32Array,Uint8ClampedArray: Uint8ClampedArray,setTimeout: setTimeout,clearTimeout: clearTimeout,setInterval: setInterval,clearInterval: clearInterval});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../_webpack@4.41.6@webpack/buildin/module.js */ "./node_modules/_webpack@4.41.6@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/_webpack@4.41.6@webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),

/***/ "./src/image/brain2.png":
/*!******************************!*\
  !*** ./src/image/brain2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/brain2.png";

/***/ }),

/***/ "./src/image/bujian.png":
/*!******************************!*\
  !*** ./src/image/bujian.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/bujian.png";

/***/ }),

/***/ "./src/image/search.png":
/*!******************************!*\
  !*** ./src/image/search.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/scan/scan.less":
/*!**********************************!*\
  !*** ./src/pages/scan/scan.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/scan/scan.tsx":
/*!*********************************!*\
  !*** ./src/pages/scan/scan.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scan_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.tsx?taro&type=template&parse=PAGE& */ "./src/pages/scan/scan.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.tsx?taro&type=script&parse=PAGE& */ "./src/pages/scan/scan.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/scan/scan.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************!*\
  !*** ./src/pages/scan/scan.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./scan.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/scan/scan.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/scan/scan.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/scan/scan.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liyingying/Desktop/app/app2/src!../../../node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./scan.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liyingying/Desktop/app/app2/src!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/scan/scan.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_scan_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/scan/scan.tsx","runtime","taro","vendors"]]]);