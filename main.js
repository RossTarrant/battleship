/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: black;\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.header{\n    text-align: center;\n}\n\n.content{\n    display: flex;\n    justify-content: space-evenly;\n    gap: 100px;\n}\n\n.gb-grid, .gb-comp-grid{\n    text-align: center;\n}\n\n.gb-row, .gb-comp-row{\n    display: flex;\n}\n\n.gb-cell, .gb-comp-cell{\n    width: 30px;\n    height: 30px;\n    background-color: rgb(109, 225, 238);\n    border: solid 1px black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 32px;\n    cursor: pointer;\n}\n\n.gb-cell-player-ship{\n    background-color: red;\n}\n\n.gb-cell-player-hit{\n    background-color: orange;\n}\n\n.gb-cell-miss{\n    background-color: rgba(75, 167, 178, 0.996);\n    color: red;\n}\n\n.gb-cell-hit{\n    background-color: gray;\n}\n\n.gb-cell-hover{\n    background-color: gray;\n}\n\n.axis-button-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    margin: 20px;\n}\n\n.axis-button{\n    background-color: rgb(160, 159, 159);\n    width: 100px;\n    border-radius: 10px;\n}\n\n.axis-button-active{\n    background-color: rgb(112, 111, 111);\n}\n\n.axis-button:hover{\n    cursor: pointer;\n}\n\n.ship-toplace-msg, .ship-length-msg{\n    font-size: 24px;\n}\n\n.turnA, .turnB{\n    font-size: 24px;\n    margin: 20px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,YAAY;IACZ,8CAA8C;AAClD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2CAA2C;IAC3C,UAAU;AACd;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB","sourcesContent":["body{\n    background-color: black;\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.header{\n    text-align: center;\n}\n\n.content{\n    display: flex;\n    justify-content: space-evenly;\n    gap: 100px;\n}\n\n.gb-grid, .gb-comp-grid{\n    text-align: center;\n}\n\n.gb-row, .gb-comp-row{\n    display: flex;\n}\n\n.gb-cell, .gb-comp-cell{\n    width: 30px;\n    height: 30px;\n    background-color: rgb(109, 225, 238);\n    border: solid 1px black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 32px;\n    cursor: pointer;\n}\n\n.gb-cell-player-ship{\n    background-color: red;\n}\n\n.gb-cell-player-hit{\n    background-color: orange;\n}\n\n.gb-cell-miss{\n    background-color: rgba(75, 167, 178, 0.996);\n    color: red;\n}\n\n.gb-cell-hit{\n    background-color: gray;\n}\n\n.gb-cell-hover{\n    background-color: gray;\n}\n\n.axis-button-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    margin: 20px;\n}\n\n.axis-button{\n    background-color: rgb(160, 159, 159);\n    width: 100px;\n    border-radius: 10px;\n}\n\n.axis-button-active{\n    background-color: rgb(112, 111, 111);\n}\n\n.axis-button:hover{\n    cursor: pointer;\n}\n\n.ship-toplace-msg, .ship-length-msg{\n    font-size: 24px;\n}\n\n.turnA, .turnB{\n    font-size: 24px;\n    margin: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
const Gameboard = (status) => {

    const buildBoard = () => {
        let board = new Map();
        for(let i = 0; i<10; i++){
            for(let j = 0; j < 10; j ++){
                let coord = `${[i,j]}`
                board.set(coord, null);
            }
        }
        return board;
    }

    let board = buildBoard();
    let ships = [];
    let missedAttacks = [];
    let successfulAttacks = [];

    const placeShip = (coord, ship, axis) => {
        const coords = coord.split(',');
        let xCoord = parseInt(coords[0]);
        let yCoord = parseInt(coords[1]);
        let toPlace = [];
        if(axis==='Y'){
            for(let i = 0; i < ship.length; i++){
                if(board.get(`${[xCoord,yCoord]}`)===null && xCoord < 10){
                    toPlace.push(`${[xCoord,yCoord]}`);
                    xCoord++;
                }
                else{
                    return null // Space already in use
                }
            }
        }
        else if(axis==='X'){
            for(let i = 0; i < ship.length; i++){
                if(board.get(`${[xCoord,yCoord]}`)===null && yCoord < 10){
                    toPlace.push(`${[xCoord,yCoord]}`);
                    yCoord++;
                }
                else{
                    return null // Space already in use
                }
            }
        }
        for(let placement of toPlace){
            board.set(placement, ship);
        }
        ships.push(ship);
        return true;
    }

    const receiveAttack = (coords) => {
        if(board.get(coords)===null && !missedAttacks.includes(coords)){
            missedAttacks.push(coords);
            status.setStatus('attack missed!')
            return false;
        }
        else if(board.get(coords)?.hasOwnProperty('hits')){
            board.get(coords).hit();
            successfulAttacks.push(coords);
            board.get(coords).isSunk() ? status.setStatus('attack hit and sunk a ship!'): status.setStatus('attack hit a ship!')
            return true;
        }
    }

    const allShipsSunk = function(){
        for(let ship of ships){
            if(ship.isSunk()===false){
                return false;
            }
        }
        return true;
    }

    return {receiveAttack, allShipsSunk, missedAttacks, successfulAttacks, placeShip, board, ships};

}

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _modules_computerAI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/computerAI */ "./src/modules/computerAI.js");


const Player = (name, type) => {
    const playerName = name;
    const playerType = type;
    const compAI = new _modules_computerAI__WEBPACK_IMPORTED_MODULE_0__.AI();

    const getName = function(){
        return playerName;
    }

    const attack = function(board, coords){ 
        playerType === 'player' ? playerAttack(board, coords): compAttack(board);
    }

    const playerAttack = function(board, coords){
        board.receiveAttack(coords);
    }

    const compAttack = function(board){
        board.receiveAttack(compAI.getMove(board));
    }

    const randomCoord = function(){
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return `${[x,y]}`;
    }

    return {attack, getName};

}

/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (len) => {
    const length = len;
    let hits = 0;
    const hit = function(){
        if(this.hits<this.length){
            this.hits += 1;
        }
    }

    const isSunk = function(){
        return this.hits === this.length ? true : false;
    }

    return {length, hit, hits, isSunk};
}

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
class UI{

    constructor(){
        this.axis = 'X';
    }

    renderBoards(gameboard1, gameboard2){
        // Creating the first board
        const content = document.querySelector('.content');
        // Creating/appending Player 1s board
        content.appendChild(this.getPlayerBoardNode(gameboard1));
        // Creating/appending Player 2s board
        content.appendChild(this.getComputerBoardNode(gameboard2));
    }

    deleteBoards(){
        const content = document.querySelector('.content');
        const playerGrid = document.querySelector('.gb-grid');
        const compGrid = document.querySelector('.gb-comp-grid');
        content.removeChild(playerGrid);
        content.removeChild(compGrid);
    }

    deletePlacementBoard(){
        const content = document.querySelector('.content');
        const playerGrid = document.querySelector('.gb-grid');
        content.removeChild(playerGrid); 
    }

    renderHeader(name, status){
        const header = document.querySelector('.header');
        const heading = document.createElement('div');
        heading.classList.add('heading')
        const title = document.createElement('h1');
        title.textContent= 'Battleship';
        const turnA = document.createElement('div');
        turnA.classList.add('turnA');
        turnA.textContent = name==='Player' ? 'It is the Computers turn!' : 'It is the Players turn!';
        const turnB = document.createElement('div');
        turnB.classList.add('turnB');
        turnB.textContent = status===undefined ? '' : `${name}'s ${status}`;
        heading.appendChild(title);
        heading.appendChild(turnA);
        heading.appendChild(turnB);
        header.appendChild(heading);
    }

    deleteHeader(){
        const header = document.querySelector('.header');
        const heading = document.querySelector('.heading');
        header.removeChild(heading); 
    }

    renderPlacement(gameboard){
        const content = document.querySelector('.content');
        content.appendChild(this.getPlayerBoardNode(gameboard));
    }

    renderPlacementHeader(shipsLeft, currentShipLength){
        const header = document.querySelector('.header');
        const heading = document.createElement('div');
        heading.classList.add('heading');
        const title = document.createElement('h1');
        title.textContent= 'Battleship';
        const shipsToPlace = document.createElement('div');
        const shipLength = document.createElement('div');
        shipsToPlace.classList.add('ship-toplace-msg');
        shipLength.classList.add('ship-length-msg');
        shipsToPlace.textContent = `You have ${shipsLeft} ships left to place...`;
        shipLength.textContent = `The current ship you are placing will have a length of ${currentShipLength}`;
        const axisbuttons = document.createElement('div');
        const xAxisButton = document.createElement('div');
        const yAxisButton = document.createElement('div'); 
        axisbuttons.classList.add('axis-button-container');
        xAxisButton.classList.add('axis-button');
        this.axis === 'X' ? xAxisButton.classList.add('axis-button-active') : yAxisButton.classList.add('axis-button-active');
        yAxisButton.classList.add('axis-button');
        xAxisButton.textContent = 'X';
        yAxisButton.textContent = 'Y';
        xAxisButton.addEventListener('click', () => {
            xAxisButton.classList.add('axis-button-active');
            yAxisButton.classList.remove('axis-button-active');
            this.axis = 'X';
        })
        yAxisButton.addEventListener('click', () => {
            yAxisButton.classList.add('axis-button-active');
            xAxisButton.classList.remove('axis-button-active');
            this.axis = 'Y';
        })
        axisbuttons.appendChild(xAxisButton);
        axisbuttons.appendChild(yAxisButton);
        heading.appendChild(title);
        heading.appendChild(shipsToPlace);
        heading.appendChild(shipLength);
        heading.appendChild(axisbuttons);
        header.appendChild(heading);
    }

    getPlayerBoardNode(gameboard){
        const grid = document.createElement('div');
        grid.classList.add('gb-grid')
        for(let i = 0; i < 10; i++){
            const row = document.createElement('div');
            row.classList.add('gb-row');
            for(let j = 0; j < 10; j ++){
                const cell = document.createElement('div');
                cell.classList.add('gb-cell');
                if(gameboard.successfulAttacks.includes(`${i},${j}`)){
                    cell.classList.add('gb-cell-player-hit');
                    cell.textContent = 'O';
                }
                else if(gameboard.missedAttacks.includes(`${i},${j}`)){
                    cell.classList.add('gb-cell-miss');
                    cell.textContent = 'X';
                }
                else if(gameboard.board.get(`${i},${j}`)!=null){
                    cell.classList.add('gb-cell-player-ship');
                }
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        const boardname = document.createElement('div');
        boardname.classList.add('boardname');
        boardname.textContent = `Player 1's Board.`;
        grid.appendChild(boardname);
        return grid;
    }

    getComputerBoardNode(gameboard, playerType){
        const grid = document.createElement('div');
        grid.classList.add('gb-comp-grid')
        for(let i = 0; i < 10; i++){
            const row = document.createElement('div');
            row.classList.add('gb-comp-row');
            for(let j = 0; j < 10; j ++){
                const cell = document.createElement('div');
                cell.classList.add('gb-comp-cell');
                if(gameboard.missedAttacks.includes(`${i},${j}`)){
                    cell.classList.add('gb-cell-miss');
                    cell.textContent = 'X';
                }
                else if(gameboard.successfulAttacks.includes(`${i},${j}`)){
                    cell.classList.add('gb-cell-hit');
                }
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        const boardname = document.createElement('div');
        boardname.classList.add('boardname');
        boardname.textContent = `Computer's Board.`;
        grid.appendChild(boardname);
        return grid;
    }
}

/***/ }),

/***/ "./src/modules/computerAI.js":
/*!***********************************!*\
  !*** ./src/modules/computerAI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ AI)
/* harmony export */ });
class AI{
    constructor(board){
        this.knownHits = [];
        this.hitAttempts = [];
        this.queue = [];
        this.lastShot = '0,0';
    }

    getMove(gameboard){
        let coord = this.randomCoord(gameboard);
        
        if(gameboard.board.get(this.lastShot)?.isSunk()===true){
            this.queue = [];
        }

        if(this.queue.length > 0){
            coord = this.queue.shift();
        }
        if(gameboard.board.get(coord)!==null){
            this.queue.shift()
            for(let adjCoord of this.getAdjacentCoords(coord)){
                this.queue.push(adjCoord);
            }
            this.queue = this.cleanQueue(this.queue);
        }
        this.hitAttempts.push(coord);
        this.lastShot = coord;
        return coord;
    }

    checkIfSunk(gameboard, coord){
        return gameboard.board.get(coord).isSunk();
    }

    cleanQueue(queue){
        let toReturn = [];
        for(let coord of queue){
            if(!(this.hitAttempts.includes(coord))){
                toReturn.push(coord);
            }
        }
        return toReturn;
    }
    
    getAdjacentCoords(coord){

        let adjacentCoords = [];

        const ADJACENCT_MUTATIONS = [
            [0,1],
            [1,0],
            [0,-1],
            [-1,0]
        ]

        let xCoord = Number(coord[0]);
        let yCoord = Number(coord[2]);

        for(let adjacent of ADJACENCT_MUTATIONS){
            if(xCoord+adjacent[0] < 10 && xCoord+adjacent[0] >= 0 && yCoord+adjacent[1] < 10 && yCoord+adjacent[1] >= 0)
            adjacentCoords.push(`${xCoord+adjacent[0]},${yCoord+adjacent[1]}`);
        }

        return adjacentCoords;

    }

    randomCoord = function(board){
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let coord = `${[x,y]}`;
        while(this.hitAttempts.includes(coord)){
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            coord = `${[x,y]}`;
        }
        return `${[x,y]}`;
    }
}

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controller": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Gameboard */ "./src/factories/Gameboard.js");
/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/Ship */ "./src/factories/Ship.js");
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/Player */ "./src/factories/Player.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/status */ "./src/modules/status.js");






class controller{

    constructor(){
        // Setup players
        this.player = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_2__.Player)('Player', 'player');
        this.computer = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_2__.Player)('Computer', 'comp');
        this.currentStatus = new _modules_status__WEBPACK_IMPORTED_MODULE_4__.status();
        // Create gameboard for each player
        this.playerBoard = (0,_factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(this.currentStatus);
        this.compBoard = (0,_factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(this.currentStatus);
        this.gameActive = true;
        this.shipsPlaced = 0;
        this.myUI = new _modules_UI__WEBPACK_IMPORTED_MODULE_3__.UI();
        this.placement();
    }

    takeTurn(x, y){
        this.player.attack(this.compBoard,`${x},${y}`);
        if(this.compBoard.allShipsSunk()){this.winGame(this.player.getName())};
        this.myUI.deleteHeader();
        this.myUI.renderHeader(this.player.getName(), this.currentStatus.getStatus())
        this.myUI.deleteBoards();
        this.myUI.renderBoards(this.playerBoard, this.compBoard);
        setTimeout(() => {
            this.computerAttack();
        }, 0);
    }

    computerAttack(){
        this.computer.attack(this.playerBoard);
        if(this.playerBoard.allShipsSunk()){this.winGame(this.computer.getName())};
        this.myUI.deleteHeader();
        this.myUI.renderHeader(this.computer.getName(), this.currentStatus.getStatus())
        this.myUI.deleteBoards();
        this.myUI.renderBoards(this.playerBoard, this.compBoard);
        this.addClickHandler(this.compBoard);
    }

    placement(){
        let shipLengths = [2,3,3,4,5];
        this.myUI.renderPlacementHeader(5 - this.shipsPlaced, shipLengths[this.shipsPlaced]);
        this.myUI.renderPlacement(this.playerBoard);
        this.addPlacementHandlers();
        this.addHoverHandler(shipLengths[this.shipsPlaced]);
    }

    gameBegin(){
        this.myUI.deleteHeader();
        this.myUI.deletePlacementBoard();
        this.placeCompShips(this.compBoard);
        this.myUI.renderHeader(this.computer.getName(), this.status);
        this.myUI.renderBoards(this.playerBoard, this.compBoard);
        this.addClickHandler(this.compBoard);
    }

    winGame(winner){
        this.gameActive = false;
        alert(`${winner} wins!`)
    }

    addPlacementHandlers(){
        const cells = document.querySelectorAll('.gb-cell');
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = Math.floor(i/10);
            let y = i % 10;
            cell.addEventListener('click', () => {
                let shipLengths = [2,3,3,4,5];
                let axis = document.querySelector('.axis-button-active').textContent;
                if(this.shipsPlaced < 5){
                    const ship = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipLengths[this.shipsPlaced]);
                    if(this.playerBoard.placeShip(`${x},${y}`, ship, axis)!==null){this.shipsPlaced++;}
                    this.myUI.deletePlacementBoard();
                    this.myUI.deleteHeader();
                    this.placement();
                }
                if(this.shipsPlaced===5){
                    this.gameBegin();
                }
            });
        }
    }

    addHoverHandler(shipLen){
        const cells = document.querySelectorAll('.gb-cell');
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = Math.floor(i/10);
            let y = i % 10;
            cell.addEventListener('mouseover', () => {
                for(let i = 0; i < cells.length; i++){
                    cells[i].classList.remove('gb-cell-hover');
                }
                cell.classList.add('gb-cell-hover');
                const axis = document.querySelector('.axis-button-active').textContent;
                for(let i = 0; i < shipLen; i++){
                    if(axis == 'X'){
                        let pos = ((x * 10) + (y+i));
                        pos < 100 && ((pos - i) % 10) < (pos % 10) ? cells[pos].classList.add('gb-cell-hover') : null;
                    }
                    else{
                        let pos = ((x+i) * 10) + (y);
                        pos < 100 ? cells[pos].classList.add('gb-cell-hover') : null;
                    }
                }
            });
        }
    }

    addClickHandler(compBoard){
        const cells = document.querySelectorAll('.gb-comp-cell');
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = Math.floor(i/10);
            let y = i % 10;
            cell.addEventListener('click', () => {
                if(!(compBoard.missedAttacks.includes(`${x},${y}`)) && !(compBoard.successfulAttacks.includes(`${x},${y}`))){
                    if(this.gameActive){this.takeTurn(x, y)};
                }
            });
        }
    }

    randomCoord = function(){
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return `${[x,y]}`;
    }

    placeCompShips(compBoard){
        let shipLengths = [2,3,3,4,5]
        for(let i = 0; i < shipLengths.length; i++){
            let ship = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(shipLengths[i]);
            let coord = this.randomCoord();
            let axis = (Math.floor(Math.random() * 2)) === 1 ? 'X' : 'Y'; 
            while (compBoard.placeShip(coord, ship, axis)===null){
                coord = this.randomCoord();
            }
        }
    }
}

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "status": () => (/* binding */ status)
/* harmony export */ });
class status{

    constructor(){
        this.status = null;
    }

    setStatus(status){
        this.status = status;
    }

    getStatus(){
        return this.status;
    }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/controller */ "./src/modules/controller.js");



let game = new _modules_controller__WEBPACK_IMPORTED_MODULE_1__.controller();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZCOztBQUVsRCxlQUFlLDJEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29tcHV0ZXJBSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc3RhdHVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmdiLWdyaWQsIC5nYi1jb21wLWdyaWR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdiLXJvdywgLmdiLWNvbXAtcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2ItY2VsbCwgLmdiLWNvbXAtY2VsbHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMjI1LCAyMzgpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2ItY2VsbC1wbGF5ZXItc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2ItY2VsbC1wbGF5ZXItaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5nYi1jZWxsLW1pc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDE2NywgMTc4LCAwLjk5Nik7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5nYi1jZWxsLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmdiLWNlbGwtaG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5heGlzLWJ1dHRvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmF4aXMtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNTksIDE1OSk7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmF4aXMtYnV0dG9uLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTExLCAxMTEpO1xcbn1cXG5cXG4uYXhpcy1idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtdG9wbGFjZS1tc2csIC5zaGlwLWxlbmd0aC1tc2d7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnR1cm5BLCAudHVybkJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uZ2ItZ3JpZCwgLmdiLWNvbXAtZ3JpZHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2Itcm93LCAuZ2ItY29tcC1yb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5nYi1jZWxsLCAuZ2ItY29tcC1jZWxse1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAyMjUsIDIzOCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5nYi1jZWxsLXBsYXllci1zaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nYi1jZWxsLXBsYXllci1oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmdiLWNlbGwtbWlzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgMTY3LCAxNzgsIDAuOTk2KTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmdiLWNlbGwtaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uZ2ItY2VsbC1ob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmF4aXMtYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4uYXhpcy1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE1OSwgMTU5KTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYXhpcy1idXR0b24tYWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTEsIDExMSk7XFxufVxcblxcbi5heGlzLWJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcC10b3BsYWNlLW1zZywgLnNoaXAtbGVuZ3RoLW1zZ3tcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udHVybkEsIC50dXJuQntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9IChzdGF0dXMpID0+IHtcblxuICAgIGNvbnN0IGJ1aWxkQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaiArKyl7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkID0gYCR7W2ksal19YFxuICAgICAgICAgICAgICAgIGJvYXJkLnNldChjb29yZCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIGxldCBib2FyZCA9IGJ1aWxkQm9hcmQoKTtcbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICAgIGxldCBzdWNjZXNzZnVsQXR0YWNrcyA9IFtdO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkLCBzaGlwLCBheGlzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGNvb3JkLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCB4Q29vcmQgPSBwYXJzZUludChjb29yZHNbMF0pO1xuICAgICAgICBsZXQgeUNvb3JkID0gcGFyc2VJbnQoY29vcmRzWzFdKTtcbiAgICAgICAgbGV0IHRvUGxhY2UgPSBbXTtcbiAgICAgICAgaWYoYXhpcz09PSdZJyl7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYoYm9hcmQuZ2V0KGAke1t4Q29vcmQseUNvb3JkXX1gKT09PW51bGwgJiYgeENvb3JkIDwgMTApe1xuICAgICAgICAgICAgICAgICAgICB0b1BsYWNlLnB1c2goYCR7W3hDb29yZCx5Q29vcmRdfWApO1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgLy8gU3BhY2UgYWxyZWFkeSBpbiB1c2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihheGlzPT09J1gnKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihib2FyZC5nZXQoYCR7W3hDb29yZCx5Q29vcmRdfWApPT09bnVsbCAmJiB5Q29vcmQgPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHRvUGxhY2UucHVzaChgJHtbeENvb3JkLHlDb29yZF19YCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCAvLyBTcGFjZSBhbHJlYWR5IGluIHVzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHBsYWNlbWVudCBvZiB0b1BsYWNlKXtcbiAgICAgICAgICAgIGJvYXJkLnNldChwbGFjZW1lbnQsIHNoaXApO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgIGlmKGJvYXJkLmdldChjb29yZHMpPT09bnVsbCAmJiAhbWlzc2VkQXR0YWNrcy5pbmNsdWRlcyhjb29yZHMpKXtcbiAgICAgICAgICAgIG1pc3NlZEF0dGFja3MucHVzaChjb29yZHMpO1xuICAgICAgICAgICAgc3RhdHVzLnNldFN0YXR1cygnYXR0YWNrIG1pc3NlZCEnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYm9hcmQuZ2V0KGNvb3Jkcyk/Lmhhc093blByb3BlcnR5KCdoaXRzJykpe1xuICAgICAgICAgICAgYm9hcmQuZ2V0KGNvb3JkcykuaGl0KCk7XG4gICAgICAgICAgICBzdWNjZXNzZnVsQXR0YWNrcy5wdXNoKGNvb3Jkcyk7XG4gICAgICAgICAgICBib2FyZC5nZXQoY29vcmRzKS5pc1N1bmsoKSA/IHN0YXR1cy5zZXRTdGF0dXMoJ2F0dGFjayBoaXQgYW5kIHN1bmsgYSBzaGlwIScpOiBzdGF0dXMuc2V0U3RhdHVzKCdhdHRhY2sgaGl0IGEgc2hpcCEnKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSBmdW5jdGlvbigpe1xuICAgICAgICBmb3IobGV0IHNoaXAgb2Ygc2hpcHMpe1xuICAgICAgICAgICAgaWYoc2hpcC5pc1N1bmsoKT09PWZhbHNlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIG1pc3NlZEF0dGFja3MsIHN1Y2Nlc3NmdWxBdHRhY2tzLCBwbGFjZVNoaXAsIGJvYXJkLCBzaGlwc307XG5cbn0iLCJpbXBvcnQgeyBBSSB9IGZyb20gXCIuLi9tb2R1bGVzL2NvbXB1dGVyQUlcIjtcblxuZXhwb3J0IGNvbnN0IFBsYXllciA9IChuYW1lLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IG5hbWU7XG4gICAgY29uc3QgcGxheWVyVHlwZSA9IHR5cGU7XG4gICAgY29uc3QgY29tcEFJID0gbmV3IEFJKCk7XG5cbiAgICBjb25zdCBnZXROYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHBsYXllck5hbWU7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNrID0gZnVuY3Rpb24oYm9hcmQsIGNvb3Jkcyl7IFxuICAgICAgICBwbGF5ZXJUeXBlID09PSAncGxheWVyJyA/IHBsYXllckF0dGFjayhib2FyZCwgY29vcmRzKTogY29tcEF0dGFjayhib2FyZCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxheWVyQXR0YWNrID0gZnVuY3Rpb24oYm9hcmQsIGNvb3Jkcyl7XG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wQXR0YWNrID0gZnVuY3Rpb24oYm9hcmQpe1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvbXBBSS5nZXRNb3ZlKGJvYXJkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tQ29vcmQgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICByZXR1cm4gYCR7W3gseV19YDtcbiAgICB9XG5cbiAgICByZXR1cm4ge2F0dGFjaywgZ2V0TmFtZX07XG5cbn0iLCJleHBvcnQgY29uc3QgU2hpcCA9IChsZW4pID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBsZW47XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGNvbnN0IGhpdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKHRoaXMuaGl0czx0aGlzLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7bGVuZ3RoLCBoaXQsIGhpdHMsIGlzU3Vua307XG59IiwiZXhwb3J0IGNsYXNzIFVJe1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5heGlzID0gJ1gnO1xuICAgIH1cblxuICAgIHJlbmRlckJvYXJkcyhnYW1lYm9hcmQxLCBnYW1lYm9hcmQyKXtcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGhlIGZpcnN0IGJvYXJkXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAvLyBDcmVhdGluZy9hcHBlbmRpbmcgUGxheWVyIDFzIGJvYXJkXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRQbGF5ZXJCb2FyZE5vZGUoZ2FtZWJvYXJkMSkpO1xuICAgICAgICAvLyBDcmVhdGluZy9hcHBlbmRpbmcgUGxheWVyIDJzIGJvYXJkXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRDb21wdXRlckJvYXJkTm9kZShnYW1lYm9hcmQyKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlQm9hcmRzKCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiLWdyaWQnKTtcbiAgICAgICAgY29uc3QgY29tcEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2ItY29tcC1ncmlkJyk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocGxheWVyR3JpZCk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29tcEdyaWQpO1xuICAgIH1cblxuICAgIGRlbGV0ZVBsYWNlbWVudEJvYXJkKCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiLWdyaWQnKTtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChwbGF5ZXJHcmlkKTsgXG4gICAgfVxuXG4gICAgcmVuZGVySGVhZGVyKG5hbWUsIHN0YXR1cyl7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50PSAnQmF0dGxlc2hpcCc7XG4gICAgICAgIGNvbnN0IHR1cm5BID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHR1cm5BLmNsYXNzTGlzdC5hZGQoJ3R1cm5BJyk7XG4gICAgICAgIHR1cm5BLnRleHRDb250ZW50ID0gbmFtZT09PSdQbGF5ZXInID8gJ0l0IGlzIHRoZSBDb21wdXRlcnMgdHVybiEnIDogJ0l0IGlzIHRoZSBQbGF5ZXJzIHR1cm4hJztcbiAgICAgICAgY29uc3QgdHVybkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdHVybkIuY2xhc3NMaXN0LmFkZCgndHVybkInKTtcbiAgICAgICAgdHVybkIudGV4dENvbnRlbnQgPSBzdGF0dXM9PT11bmRlZmluZWQgPyAnJyA6IGAke25hbWV9J3MgJHtzdGF0dXN9YDtcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQodHVybkEpO1xuICAgICAgICBoZWFkaW5nLmFwcGVuZENoaWxkKHR1cm5CKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIH1cblxuICAgIGRlbGV0ZUhlYWRlcigpe1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpO1xuICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoaGVhZGluZyk7IFxuICAgIH1cblxuICAgIHJlbmRlclBsYWNlbWVudChnYW1lYm9hcmQpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmdldFBsYXllckJvYXJkTm9kZShnYW1lYm9hcmQpKTtcbiAgICB9XG5cbiAgICByZW5kZXJQbGFjZW1lbnRIZWFkZXIoc2hpcHNMZWZ0LCBjdXJyZW50U2hpcExlbmd0aCl7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudD0gJ0JhdHRsZXNoaXAnO1xuICAgICAgICBjb25zdCBzaGlwc1RvUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwc1RvUGxhY2UuY2xhc3NMaXN0LmFkZCgnc2hpcC10b3BsYWNlLW1zZycpO1xuICAgICAgICBzaGlwTGVuZ3RoLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbGVuZ3RoLW1zZycpO1xuICAgICAgICBzaGlwc1RvUGxhY2UudGV4dENvbnRlbnQgPSBgWW91IGhhdmUgJHtzaGlwc0xlZnR9IHNoaXBzIGxlZnQgdG8gcGxhY2UuLi5gO1xuICAgICAgICBzaGlwTGVuZ3RoLnRleHRDb250ZW50ID0gYFRoZSBjdXJyZW50IHNoaXAgeW91IGFyZSBwbGFjaW5nIHdpbGwgaGF2ZSBhIGxlbmd0aCBvZiAke2N1cnJlbnRTaGlwTGVuZ3RofWA7XG4gICAgICAgIGNvbnN0IGF4aXNidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHhBeGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHlBeGlzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICBheGlzYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdheGlzLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgeEF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24nKTtcbiAgICAgICAgdGhpcy5heGlzID09PSAnWCcgPyB4QXhpc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdheGlzLWJ1dHRvbi1hY3RpdmUnKSA6IHlBeGlzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2F4aXMtYnV0dG9uLWFjdGl2ZScpO1xuICAgICAgICB5QXhpc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdheGlzLWJ1dHRvbicpO1xuICAgICAgICB4QXhpc0J1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgeUF4aXNCdXR0b24udGV4dENvbnRlbnQgPSAnWSc7XG4gICAgICAgIHhBeGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgeEF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24tYWN0aXZlJyk7XG4gICAgICAgICAgICB5QXhpc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdheGlzLWJ1dHRvbi1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYXhpcyA9ICdYJztcbiAgICAgICAgfSlcbiAgICAgICAgeUF4aXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB5QXhpc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdheGlzLWJ1dHRvbi1hY3RpdmUnKTtcbiAgICAgICAgICAgIHhBeGlzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2F4aXMtYnV0dG9uLWFjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5heGlzID0gJ1knO1xuICAgICAgICB9KVxuICAgICAgICBheGlzYnV0dG9ucy5hcHBlbmRDaGlsZCh4QXhpc0J1dHRvbik7XG4gICAgICAgIGF4aXNidXR0b25zLmFwcGVuZENoaWxkKHlBeGlzQnV0dG9uKTtcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoc2hpcHNUb1BsYWNlKTtcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChzaGlwTGVuZ3RoKTtcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZChheGlzYnV0dG9ucyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJCb2FyZE5vZGUoZ2FtZWJvYXJkKXtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2diLWdyaWQnKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdnYi1yb3cnKTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaiArKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbCcpO1xuICAgICAgICAgICAgICAgIGlmKGdhbWVib2FyZC5zdWNjZXNzZnVsQXR0YWNrcy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtcGxheWVyLWhpdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJ08nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmluY2x1ZGVzKGAke2l9LCR7an1gKSl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1taXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZ2FtZWJvYXJkLmJvYXJkLmdldChgJHtpfSwke2p9YCkhPW51bGwpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtcGxheWVyLXNoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvYXJkbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZG5hbWUuY2xhc3NMaXN0LmFkZCgnYm9hcmRuYW1lJyk7XG4gICAgICAgIGJvYXJkbmFtZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSdzIEJvYXJkLmA7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYm9hcmRuYW1lKTtcbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxuXG4gICAgZ2V0Q29tcHV0ZXJCb2FyZE5vZGUoZ2FtZWJvYXJkLCBwbGF5ZXJUeXBlKXtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2diLWNvbXAtZ3JpZCcpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2diLWNvbXAtcm93Jyk7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGogKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNvbXAtY2VsbCcpO1xuICAgICAgICAgICAgICAgIGlmKGdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmluY2x1ZGVzKGAke2l9LCR7an1gKSl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1taXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZ2FtZWJvYXJkLnN1Y2Nlc3NmdWxBdHRhY2tzLmluY2x1ZGVzKGAke2l9LCR7an1gKSl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1oaXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvYXJkbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZG5hbWUuY2xhc3NMaXN0LmFkZCgnYm9hcmRuYW1lJyk7XG4gICAgICAgIGJvYXJkbmFtZS50ZXh0Q29udGVudCA9IGBDb21wdXRlcidzIEJvYXJkLmA7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYm9hcmRuYW1lKTtcbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBSXtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZCl7XG4gICAgICAgIHRoaXMua25vd25IaXRzID0gW107XG4gICAgICAgIHRoaXMuaGl0QXR0ZW1wdHMgPSBbXTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmxhc3RTaG90ID0gJzAsMCc7XG4gICAgfVxuXG4gICAgZ2V0TW92ZShnYW1lYm9hcmQpe1xuICAgICAgICBsZXQgY29vcmQgPSB0aGlzLnJhbmRvbUNvb3JkKGdhbWVib2FyZCk7XG4gICAgICAgIFxuICAgICAgICBpZihnYW1lYm9hcmQuYm9hcmQuZ2V0KHRoaXMubGFzdFNob3QpPy5pc1N1bmsoKT09PXRydWUpe1xuICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5xdWV1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvb3JkID0gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdhbWVib2FyZC5ib2FyZC5nZXQoY29vcmQpIT09bnVsbCl7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnNoaWZ0KClcbiAgICAgICAgICAgIGZvcihsZXQgYWRqQ29vcmQgb2YgdGhpcy5nZXRBZGphY2VudENvb3Jkcyhjb29yZCkpe1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWUucHVzaChhZGpDb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gdGhpcy5jbGVhblF1ZXVlKHRoaXMucXVldWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGl0QXR0ZW1wdHMucHVzaChjb29yZCk7XG4gICAgICAgIHRoaXMubGFzdFNob3QgPSBjb29yZDtcbiAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgIH1cblxuICAgIGNoZWNrSWZTdW5rKGdhbWVib2FyZCwgY29vcmQpe1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLmJvYXJkLmdldChjb29yZCkuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgY2xlYW5RdWV1ZShxdWV1ZSl7XG4gICAgICAgIGxldCB0b1JldHVybiA9IFtdO1xuICAgICAgICBmb3IobGV0IGNvb3JkIG9mIHF1ZXVlKXtcbiAgICAgICAgICAgIGlmKCEodGhpcy5oaXRBdHRlbXB0cy5pbmNsdWRlcyhjb29yZCkpKXtcbiAgICAgICAgICAgICAgICB0b1JldHVybi5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGdldEFkamFjZW50Q29vcmRzKGNvb3JkKXtcblxuICAgICAgICBsZXQgYWRqYWNlbnRDb29yZHMgPSBbXTtcblxuICAgICAgICBjb25zdCBBREpBQ0VOQ1RfTVVUQVRJT05TID0gW1xuICAgICAgICAgICAgWzAsMV0sXG4gICAgICAgICAgICBbMSwwXSxcbiAgICAgICAgICAgIFswLC0xXSxcbiAgICAgICAgICAgIFstMSwwXVxuICAgICAgICBdXG5cbiAgICAgICAgbGV0IHhDb29yZCA9IE51bWJlcihjb29yZFswXSk7XG4gICAgICAgIGxldCB5Q29vcmQgPSBOdW1iZXIoY29vcmRbMl0pO1xuXG4gICAgICAgIGZvcihsZXQgYWRqYWNlbnQgb2YgQURKQUNFTkNUX01VVEFUSU9OUyl7XG4gICAgICAgICAgICBpZih4Q29vcmQrYWRqYWNlbnRbMF0gPCAxMCAmJiB4Q29vcmQrYWRqYWNlbnRbMF0gPj0gMCAmJiB5Q29vcmQrYWRqYWNlbnRbMV0gPCAxMCAmJiB5Q29vcmQrYWRqYWNlbnRbMV0gPj0gMClcbiAgICAgICAgICAgIGFkamFjZW50Q29vcmRzLnB1c2goYCR7eENvb3JkK2FkamFjZW50WzBdfSwke3lDb29yZCthZGphY2VudFsxXX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhZGphY2VudENvb3JkcztcblxuICAgIH1cblxuICAgIHJhbmRvbUNvb3JkID0gZnVuY3Rpb24oYm9hcmQpe1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCBjb29yZCA9IGAke1t4LHldfWA7XG4gICAgICAgIHdoaWxlKHRoaXMuaGl0QXR0ZW1wdHMuaW5jbHVkZXMoY29vcmQpKXtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29vcmQgPSBgJHtbeCx5XX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtbeCx5XX1gO1xuICAgIH1cbn0iLCJpbXBvcnQge0dhbWVib2FyZH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9HYW1lYm9hcmRcIjtcbmltcG9ydCB7U2hpcH0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9TaGlwXCI7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2ZhY3Rvcmllcy9QbGF5ZXJcIjtcbmltcG9ydCB7VUl9IGZyb20gXCIuLi9tb2R1bGVzL1VJXCI7XG5pbXBvcnQgeyBzdGF0dXMgfSBmcm9tIFwiLi4vbW9kdWxlcy9zdGF0dXNcIjtcblxuZXhwb3J0IGNsYXNzIGNvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyBTZXR1cCBwbGF5ZXJzXG4gICAgICAgIHRoaXMucGxheWVyID0gUGxheWVyKCdQbGF5ZXInLCAncGxheWVyJyk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgJ2NvbXAnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdHVzID0gbmV3IHN0YXR1cygpO1xuICAgICAgICAvLyBDcmVhdGUgZ2FtZWJvYXJkIGZvciBlYWNoIHBsYXllclxuICAgICAgICB0aGlzLnBsYXllckJvYXJkID0gR2FtZWJvYXJkKHRoaXMuY3VycmVudFN0YXR1cyk7XG4gICAgICAgIHRoaXMuY29tcEJvYXJkID0gR2FtZWJvYXJkKHRoaXMuY3VycmVudFN0YXR1cyk7XG4gICAgICAgIHRoaXMuZ2FtZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hpcHNQbGFjZWQgPSAwO1xuICAgICAgICB0aGlzLm15VUkgPSBuZXcgVUkoKTtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQoKTtcbiAgICB9XG5cbiAgICB0YWtlVHVybih4LCB5KXtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYXR0YWNrKHRoaXMuY29tcEJvYXJkLGAke3h9LCR7eX1gKTtcbiAgICAgICAgaWYodGhpcy5jb21wQm9hcmQuYWxsU2hpcHNTdW5rKCkpe3RoaXMud2luR2FtZSh0aGlzLnBsYXllci5nZXROYW1lKCkpfTtcbiAgICAgICAgdGhpcy5teVVJLmRlbGV0ZUhlYWRlcigpO1xuICAgICAgICB0aGlzLm15VUkucmVuZGVySGVhZGVyKHRoaXMucGxheWVyLmdldE5hbWUoKSwgdGhpcy5jdXJyZW50U3RhdHVzLmdldFN0YXR1cygpKVxuICAgICAgICB0aGlzLm15VUkuZGVsZXRlQm9hcmRzKCk7XG4gICAgICAgIHRoaXMubXlVSS5yZW5kZXJCb2FyZHModGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5jb21wQm9hcmQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgY29tcHV0ZXJBdHRhY2soKXtcbiAgICAgICAgdGhpcy5jb21wdXRlci5hdHRhY2sodGhpcy5wbGF5ZXJCb2FyZCk7XG4gICAgICAgIGlmKHRoaXMucGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpe3RoaXMud2luR2FtZSh0aGlzLmNvbXB1dGVyLmdldE5hbWUoKSl9O1xuICAgICAgICB0aGlzLm15VUkuZGVsZXRlSGVhZGVyKCk7XG4gICAgICAgIHRoaXMubXlVSS5yZW5kZXJIZWFkZXIodGhpcy5jb21wdXRlci5nZXROYW1lKCksIHRoaXMuY3VycmVudFN0YXR1cy5nZXRTdGF0dXMoKSlcbiAgICAgICAgdGhpcy5teVVJLmRlbGV0ZUJvYXJkcygpO1xuICAgICAgICB0aGlzLm15VUkucmVuZGVyQm9hcmRzKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuY29tcEJvYXJkKTtcbiAgICAgICAgdGhpcy5hZGRDbGlja0hhbmRsZXIodGhpcy5jb21wQm9hcmQpO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCgpe1xuICAgICAgICBsZXQgc2hpcExlbmd0aHMgPSBbMiwzLDMsNCw1XTtcbiAgICAgICAgdGhpcy5teVVJLnJlbmRlclBsYWNlbWVudEhlYWRlcig1IC0gdGhpcy5zaGlwc1BsYWNlZCwgc2hpcExlbmd0aHNbdGhpcy5zaGlwc1BsYWNlZF0pO1xuICAgICAgICB0aGlzLm15VUkucmVuZGVyUGxhY2VtZW50KHRoaXMucGxheWVyQm9hcmQpO1xuICAgICAgICB0aGlzLmFkZFBsYWNlbWVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuYWRkSG92ZXJIYW5kbGVyKHNoaXBMZW5ndGhzW3RoaXMuc2hpcHNQbGFjZWRdKTtcbiAgICB9XG5cbiAgICBnYW1lQmVnaW4oKXtcbiAgICAgICAgdGhpcy5teVVJLmRlbGV0ZUhlYWRlcigpO1xuICAgICAgICB0aGlzLm15VUkuZGVsZXRlUGxhY2VtZW50Qm9hcmQoKTtcbiAgICAgICAgdGhpcy5wbGFjZUNvbXBTaGlwcyh0aGlzLmNvbXBCb2FyZCk7XG4gICAgICAgIHRoaXMubXlVSS5yZW5kZXJIZWFkZXIodGhpcy5jb21wdXRlci5nZXROYW1lKCksIHRoaXMuc3RhdHVzKTtcbiAgICAgICAgdGhpcy5teVVJLnJlbmRlckJvYXJkcyh0aGlzLnBsYXllckJvYXJkLCB0aGlzLmNvbXBCb2FyZCk7XG4gICAgICAgIHRoaXMuYWRkQ2xpY2tIYW5kbGVyKHRoaXMuY29tcEJvYXJkKTtcbiAgICB9XG5cbiAgICB3aW5HYW1lKHdpbm5lcil7XG4gICAgICAgIHRoaXMuZ2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBhbGVydChgJHt3aW5uZXJ9IHdpbnMhYClcbiAgICB9XG5cbiAgICBhZGRQbGFjZW1lbnRIYW5kbGVycygpe1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYi1jZWxsJyk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGNlbGxzW2ldO1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKGkvMTApO1xuICAgICAgICAgICAgbGV0IHkgPSBpICUgMTA7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwTGVuZ3RocyA9IFsyLDMsMyw0LDVdO1xuICAgICAgICAgICAgICAgIGxldCBheGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF4aXMtYnV0dG9uLWFjdGl2ZScpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2hpcHNQbGFjZWQgPCA1KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IFNoaXAoc2hpcExlbmd0aHNbdGhpcy5zaGlwc1BsYWNlZF0pO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnBsYXllckJvYXJkLnBsYWNlU2hpcChgJHt4fSwke3l9YCwgc2hpcCwgYXhpcykhPT1udWxsKXt0aGlzLnNoaXBzUGxhY2VkKys7fVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15VUkuZGVsZXRlUGxhY2VtZW50Qm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVVJLmRlbGV0ZUhlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlbWVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLnNoaXBzUGxhY2VkPT09NSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUJlZ2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRIb3ZlckhhbmRsZXIoc2hpcExlbil7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdiLWNlbGwnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjZWxsID0gY2VsbHNbaV07XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoaS8xMCk7XG4gICAgICAgICAgICBsZXQgeSA9IGkgJSAxMDtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2diLWNlbGwtaG92ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdnYi1jZWxsLWhvdmVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5heGlzLWJ1dHRvbi1hY3RpdmUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoYXhpcyA9PSAnWCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9ICgoeCAqIDEwKSArICh5K2kpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA8IDEwMCAmJiAoKHBvcyAtIGkpICUgMTApIDwgKHBvcyAlIDEwKSA/IGNlbGxzW3Bvc10uY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1ob3ZlcicpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9ICgoeCtpKSAqIDEwKSArICh5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA8IDEwMCA/IGNlbGxzW3Bvc10uY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1ob3ZlcicpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ2xpY2tIYW5kbGVyKGNvbXBCb2FyZCl7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdiLWNvbXAtY2VsbCcpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBjZWxsc1tpXTtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihpLzEwKTtcbiAgICAgICAgICAgIGxldCB5ID0gaSAlIDEwO1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZighKGNvbXBCb2FyZC5taXNzZWRBdHRhY2tzLmluY2x1ZGVzKGAke3h9LCR7eX1gKSkgJiYgIShjb21wQm9hcmQuc3VjY2Vzc2Z1bEF0dGFja3MuaW5jbHVkZXMoYCR7eH0sJHt5fWApKSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2FtZUFjdGl2ZSl7dGhpcy50YWtlVHVybih4LCB5KX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21Db29yZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHJldHVybiBgJHtbeCx5XX1gO1xuICAgIH1cblxuICAgIHBsYWNlQ29tcFNoaXBzKGNvbXBCb2FyZCl7XG4gICAgICAgIGxldCBzaGlwTGVuZ3RocyA9IFsyLDMsMyw0LDVdXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Rocy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IFNoaXAoc2hpcExlbmd0aHNbaV0pO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gdGhpcy5yYW5kb21Db29yZCgpO1xuICAgICAgICAgICAgbGV0IGF4aXMgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikpID09PSAxID8gJ1gnIDogJ1knOyBcbiAgICAgICAgICAgIHdoaWxlIChjb21wQm9hcmQucGxhY2VTaGlwKGNvb3JkLCBzaGlwLCBheGlzKT09PW51bGwpe1xuICAgICAgICAgICAgICAgIGNvb3JkID0gdGhpcy5yYW5kb21Db29yZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBzdGF0dXN7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzKHN0YXR1cyl7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIH1cblxuICAgIGdldFN0YXR1cygpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVyXCI7XG5cbmxldCBnYW1lID0gbmV3IGNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=