(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;
// import { ITouchEvent } from '@tarojs/components/types/common'


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.7@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");

var _scan = __webpack_require__(/*! ../../image/scan.png */ "./src/image/scan.png");

var _scan2 = _interopRequireDefault(_scan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray69", "Scan", "boxData", "text", "textarea", "boxPosition", "fishingIndex"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.onScrollToUpper = function () {
      console.log('到顶');
      console.log(_this);
      _this.setState({
        text: _this.state.text + 1
      });
    }, _this.onInput = function (e) {
      _this.setState({
        textarea: e.detail.value
      });
    }, _this.changeBox = function (positionIndex, id) {
      switch (positionIndex) {
        case 0:
          // 选中当前页的八个组合
          if (_this.step < 3) {
            var start = 16 * id;
            var selectWords = _this.content.slice(start, start + 16);
            // const delWords = selectWords.splice(0,4)
            // selectWords.push(...delWords)
            var newWords = [].concat(_toConsumableArray(selectWords.slice(4, selectWords.length)), _toConsumableArray(selectWords.slice(0, 4)));
            _this.result = {
              id: id,
              data: [].concat(_toConsumableArray(new Array(newWords.length / 2))).map(function (_, index) {
                console.log('ok');
                var word1 = newWords[index * 2];
                return {
                  position: selectWords.findIndex(function (word) {
                    return word === word1;
                  }),
                  words: [word1, newWords[index * 2 + 1]]
                };
              })
            };
            _this.step = 1;
            console.log(_this.result);
          }
          break;
        case 1:
          if (_this.step === 2 || _this.step === 3) {
            _this.step = 3;
            if (_this.result) {
              _this.fishing(-1, _this.result);
            }
          }
          _this.pushData(3);
          break;
        case 2:
          // 当step=1时，点击中间卡片准备fishing
          _this.pushData(2);
          if (_this.step === 1) {
            _this.step = 2;
            _this.fillWords();
            _this.setResult();
          }
          break;
        case 3:
          // 当step=2时，点击右边卡片开始fishing
          if (_this.step === 2 || _this.step === 3) {
            _this.step = 3;
            if (_this.result) {
              _this.fishing(1, _this.result);
            }
          }
          _this.pushData();
          break;
        default:
          break;
      }
      // this.setState({
      //   clickIndex: id
      // })
    }, _this.fillWords = function () {
      if (_this.result !== undefined) {
        var id = _this.result.id;

        var start = id * 16;
        var i = 7;
        _this.result.data = _this.result.data.map(function (_ref2) {
          var position = _ref2.position,
              _ref2$words = _slicedToArray(_ref2.words, 2),
              word1 = _ref2$words[0],
              word2 = _ref2$words[1];

          var newContent = _this.content.filter(function (_, index) {
            return !(index >= start && index < start + 16);
          });
          var latestWords = [];
          [].concat(_toConsumableArray(new Array(14))).forEach(function () {
            latestWords.push(newContent[i]);
            i += 1;
            if (i >= newContent.length) {
              i = 0;
            }
          });
          latestWords.splice(position, 0, word1, word2);
          return {
            position: position,
            words: latestWords
          };
        });
      }
    }, _this.setResult = function () {
      _taroWeapp2.default.setStorage({
        key: "result",
        data: _this.result
      });
    }, _this.fishing = function (type, result) {
      _this.setState(function (preState) {
        var nowIndex = preState.fishingIndex + type;
        if (nowIndex >= result.data.length) {
          nowIndex = 0;
        } else if (nowIndex < 0) {
          nowIndex = result.data.length - 1;
        }
        return {
          fishingIndex: nowIndex
        };
      });
    }, _this.toScanPage = function () {
      _taroWeapp2.default.navigateTo({
        url: "/pages/scan/scan?index=" + _this.state.fishingIndex
      });
    }, _this.customComponents = ["Card"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).apply(this, arguments);

      this.content = ["饢", "襻", "靐", "飝", "躞", "鼺", "鼗", "鼯", "蘡", "髁", "籱", "醯", "燹", "窳", "髑", "黻", "糌", "齼", "氍", "躐", "癯", "龘", "瘗", "蠲", "羴", "艚", "馫", "颥", "饕", "纛", "餮", "鬣", "谶", "觳", "飍", "臢", "麷", "瀵", "齾", "爩", "麣", "灪", "麤", "靁", "虋", "钃", "蠼", "豳", "纞", "䨻", "鄹", "鼙", "鬏", "龞", "爨", "躔", "鸘", "麢", "鼍", "謦", "馘", "鬻", "矗", "璺"];
      // content = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64"]
      this.boxData = [{ text: 0, id: 0 }, { text: 1, id: 1 }, { text: 2, id: 2 }, { text: 3, id: 3 }];
      this.step = 0;
      this.result = undefined;

      this.state = {
        text: 0,
        textarea: 'abcd',
        boxPosition: [0, 1, 2, 3],
        //[1,2,3,0]
        //[3,0,1,2]
        //[2,3,0,1]
        fishingIndex: -1
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
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
    key: 'pushData',
    value: function pushData() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      for (var index = 0; index < count; index++) {
        var boxPosition = this.state.boxPosition;

        var removedPosition = boxPosition.shift();
        if (removedPosition !== undefined) {
          boxPosition.push(removedPosition);
          this.setState({
            boxPosition: boxPosition
          });
        }
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var boxData = this.boxData;
      var _state = this.__state,
          boxPosition = _state.boxPosition,
          fishingIndex = _state.fishingIndex;

      var loopArray69 = this.boxData.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var position = boxPosition[item.$original.id];
        var margin = 6.25;
        var left = position === 0 ? 20 : (position - 1) * 31.25 + margin;
        var start = 16 * item.$original.id;
        var cardWord = _this2.content.slice(start, start + 16);
        var $loopState__temp2 = (0, _taroWeapp.internal_inline_style)({ left: left + "vw" });

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + 'dzzzzzzzzz' + _anonIdx, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__3 = _genCompid2[0],
            $compid__3 = _genCompid2[1];

        _taroWeapp.propsManager.set({
          "cardWord": _this2.step === 3 && position === 0 && _this2.result !== undefined ? _this2.result.data[fishingIndex].words : cardWord
        }, $compid__3, $prevCompid__3);
        return {
          position: position,
          margin: margin,
          left: left,
          start: start,
          cardWord: cardWord,
          $loopState__temp2: $loopState__temp2,
          $compid__3: $compid__3,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray69: loopArray69,
        Scan: _scan2.default,
        boxData: boxData
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["toScanPage", "changeBox"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.7@@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liyingying/Desktop/app/app2/src!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liyingying/Desktop/app/app2/src!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/image/scan.png":
/*!****************************!*\
  !*** ./src/image/scan.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liyingying/Desktop/app/app2/src!../../../node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liyingying/Desktop/app/app2/src!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.7@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_4_3_0_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_liyingying_Desktop_app_app2_src_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_7_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);