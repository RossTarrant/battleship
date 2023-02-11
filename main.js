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
/* harmony import */ var _factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Gameboard */ "./src/factories/Gameboard.js");


class AI{
    constructor(board){
        this.knownHits = [];
        this.hitAttempts = [];
        this.queue = [];
        this.lastShot = '0,0';
    }

    getMove(gameboard){
        // If no known hits, return random coordinate
        let coord = this.randomCoord(gameboard);
        
        if(gameboard.board.get(this.lastShot)?.isSunk()===true){
            console.log(123)
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
        console.log('Queue', queue)
        for(let coord of queue){
            if(!(this.hitAttempts.includes(coord))){
                toReturn.push(coord);
            }
        }
        console.log('ToReturn - ', toReturn)
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
                if(this.gameActive){this.takeTurn(x, y)};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM2Qjs7QUFFbEQsZUFBZSwyREFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyQUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5nYi1ncmlkLCAuZ2ItY29tcC1ncmlke1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYi1yb3csIC5nYi1jb21wLXJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdiLWNlbGwsIC5nYi1jb21wLWNlbGx7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDIyNSwgMjM4KTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdiLWNlbGwtcGxheWVyLXNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdiLWNlbGwtcGxheWVyLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4uZ2ItY2VsbC1taXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc1LCAxNjcsIDE3OCwgMC45OTYpO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2ItY2VsbC1oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5nYi1jZWxsLWhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uYXhpcy1idXR0b24tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5heGlzLWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTU5LCAxNTkpO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5heGlzLWJ1dHRvbi1hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDExMSwgMTExKTtcXG59XFxuXFxuLmF4aXMtYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwLXRvcGxhY2UtbXNnLCAuc2hpcC1sZW5ndGgtbXNne1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi50dXJuQSwgLnR1cm5Ce1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmdiLWdyaWQsIC5nYi1jb21wLWdyaWR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdiLXJvdywgLmdiLWNvbXAtcm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2ItY2VsbCwgLmdiLWNvbXAtY2VsbHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOSwgMjI1LCAyMzgpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2ItY2VsbC1wbGF5ZXItc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2ItY2VsbC1wbGF5ZXItaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5nYi1jZWxsLW1pc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDE2NywgMTc4LCAwLjk5Nik7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5nYi1jZWxsLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmdiLWNlbGwtaG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5heGlzLWJ1dHRvbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmF4aXMtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNTksIDE1OSk7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmF4aXMtYnV0dG9uLWFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTExLCAxMTEpO1xcbn1cXG5cXG4uYXhpcy1idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtdG9wbGFjZS1tc2csIC5zaGlwLWxlbmd0aC1tc2d7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnR1cm5BLCAudHVybkJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoc3RhdHVzKSA9PiB7XG5cbiAgICBjb25zdCBidWlsZEJvYXJkID0gKCkgPT4ge1xuICAgICAgICBsZXQgYm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGogKyspe1xuICAgICAgICAgICAgICAgIGxldCBjb29yZCA9IGAke1tpLGpdfWBcbiAgICAgICAgICAgICAgICBib2FyZC5zZXQoY29vcmQsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBsZXQgYm9hcmQgPSBidWlsZEJvYXJkKCk7XG4gICAgbGV0IHNoaXBzID0gW107XG4gICAgbGV0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBsZXQgc3VjY2Vzc2Z1bEF0dGFja3MgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZCwgc2hpcCwgYXhpcykgPT4ge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBjb29yZC5zcGxpdCgnLCcpO1xuICAgICAgICBsZXQgeENvb3JkID0gcGFyc2VJbnQoY29vcmRzWzBdKTtcbiAgICAgICAgbGV0IHlDb29yZCA9IHBhcnNlSW50KGNvb3Jkc1sxXSk7XG4gICAgICAgIGxldCB0b1BsYWNlID0gW107XG4gICAgICAgIGlmKGF4aXM9PT0nWScpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkLmdldChgJHtbeENvb3JkLHlDb29yZF19YCk9PT1udWxsICYmIHhDb29yZCA8IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgdG9QbGFjZS5wdXNoKGAke1t4Q29vcmQseUNvb3JkXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsIC8vIFNwYWNlIGFscmVhZHkgaW4gdXNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYXhpcz09PSdYJyl7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYoYm9hcmQuZ2V0KGAke1t4Q29vcmQseUNvb3JkXX1gKT09PW51bGwgJiYgeUNvb3JkIDwgMTApe1xuICAgICAgICAgICAgICAgICAgICB0b1BsYWNlLnB1c2goYCR7W3hDb29yZCx5Q29vcmRdfWApO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgLy8gU3BhY2UgYWxyZWFkeSBpbiB1c2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBwbGFjZW1lbnQgb2YgdG9QbGFjZSl7XG4gICAgICAgICAgICBib2FyZC5zZXQocGxhY2VtZW50LCBzaGlwKTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBpZihib2FyZC5nZXQoY29vcmRzKT09PW51bGwgJiYgIW1pc3NlZEF0dGFja3MuaW5jbHVkZXMoY29vcmRzKSl7XG4gICAgICAgICAgICBtaXNzZWRBdHRhY2tzLnB1c2goY29vcmRzKTtcbiAgICAgICAgICAgIHN0YXR1cy5zZXRTdGF0dXMoJ2F0dGFjayBtaXNzZWQhJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGJvYXJkLmdldChjb29yZHMpPy5oYXNPd25Qcm9wZXJ0eSgnaGl0cycpKXtcbiAgICAgICAgICAgIGJvYXJkLmdldChjb29yZHMpLmhpdCgpO1xuICAgICAgICAgICAgc3VjY2Vzc2Z1bEF0dGFja3MucHVzaChjb29yZHMpO1xuICAgICAgICAgICAgYm9hcmQuZ2V0KGNvb3JkcykuaXNTdW5rKCkgPyBzdGF0dXMuc2V0U3RhdHVzKCdhdHRhY2sgaGl0IGFuZCBzdW5rIGEgc2hpcCEnKTogc3RhdHVzLnNldFN0YXR1cygnYXR0YWNrIGhpdCBhIHNoaXAhJylcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gZnVuY3Rpb24oKXtcbiAgICAgICAgZm9yKGxldCBzaGlwIG9mIHNoaXBzKXtcbiAgICAgICAgICAgIGlmKHNoaXAuaXNTdW5rKCk9PT1mYWxzZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7cmVjZWl2ZUF0dGFjaywgYWxsU2hpcHNTdW5rLCBtaXNzZWRBdHRhY2tzLCBzdWNjZXNzZnVsQXR0YWNrcywgcGxhY2VTaGlwLCBib2FyZCwgc2hpcHN9O1xuXG59IiwiaW1wb3J0IHsgQUkgfSBmcm9tIFwiLi4vbW9kdWxlcy9jb21wdXRlckFJXCI7XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuICAgIGNvbnN0IHBsYXllclR5cGUgPSB0eXBlO1xuICAgIGNvbnN0IGNvbXBBSSA9IG5ldyBBSSgpO1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uKGJvYXJkLCBjb29yZHMpeyBcbiAgICAgICAgcGxheWVyVHlwZSA9PT0gJ3BsYXllcicgPyBwbGF5ZXJBdHRhY2soYm9hcmQsIGNvb3Jkcyk6IGNvbXBBdHRhY2soYm9hcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IGZ1bmN0aW9uKGJvYXJkLCBjb29yZHMpe1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcEF0dGFjayA9IGZ1bmN0aW9uKGJvYXJkKXtcbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhjb21wQUkuZ2V0TW92ZShib2FyZCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUNvb3JkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgcmV0dXJuIGAke1t4LHldfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthdHRhY2ssIGdldE5hbWV9O1xuXG59IiwiZXhwb3J0IGNvbnN0IFNoaXAgPSAobGVuKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gbGVuO1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBjb25zdCBoaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLmhpdHM8dGhpcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2xlbmd0aCwgaGl0LCBoaXRzLCBpc1N1bmt9O1xufSIsImV4cG9ydCBjbGFzcyBVSXtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuYXhpcyA9ICdYJztcbiAgICB9XG5cbiAgICByZW5kZXJCb2FyZHMoZ2FtZWJvYXJkMSwgZ2FtZWJvYXJkMil7XG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBmaXJzdCBib2FyZFxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgLy8gQ3JlYXRpbmcvYXBwZW5kaW5nIFBsYXllciAxcyBib2FyZFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuZ2V0UGxheWVyQm9hcmROb2RlKGdhbWVib2FyZDEpKTtcbiAgICAgICAgLy8gQ3JlYXRpbmcvYXBwZW5kaW5nIFBsYXllciAycyBib2FyZFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29tcHV0ZXJCb2FyZE5vZGUoZ2FtZWJvYXJkMikpO1xuICAgIH1cblxuICAgIGRlbGV0ZUJvYXJkcygpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYi1ncmlkJyk7XG4gICAgICAgIGNvbnN0IGNvbXBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiLWNvbXAtZ3JpZCcpO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHBsYXllckdyaWQpO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbXBHcmlkKTtcbiAgICB9XG5cbiAgICBkZWxldGVQbGFjZW1lbnRCb2FyZCgpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYi1ncmlkJyk7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocGxheWVyR3JpZCk7IFxuICAgIH1cblxuICAgIHJlbmRlckhlYWRlcihuYW1lLCBzdGF0dXMpe1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJylcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudD0gJ0JhdHRsZXNoaXAnO1xuICAgICAgICBjb25zdCB0dXJuQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0dXJuQS5jbGFzc0xpc3QuYWRkKCd0dXJuQScpO1xuICAgICAgICB0dXJuQS50ZXh0Q29udGVudCA9IG5hbWU9PT0nUGxheWVyJyA/ICdJdCBpcyB0aGUgQ29tcHV0ZXJzIHR1cm4hJyA6ICdJdCBpcyB0aGUgUGxheWVycyB0dXJuISc7XG4gICAgICAgIGNvbnN0IHR1cm5CID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHR1cm5CLmNsYXNzTGlzdC5hZGQoJ3R1cm5CJyk7XG4gICAgICAgIHR1cm5CLnRleHRDb250ZW50ID0gc3RhdHVzPT09dW5kZWZpbmVkID8gJycgOiBgJHtuYW1lfSdzICR7c3RhdHVzfWA7XG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBoZWFkaW5nLmFwcGVuZENoaWxkKHR1cm5BKTtcbiAgICAgICAgaGVhZGluZy5hcHBlbmRDaGlsZCh0dXJuQik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICB9XG5cbiAgICBkZWxldGVIZWFkZXIoKXtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmcnKTtcbiAgICAgICAgaGVhZGVyLnJlbW92ZUNoaWxkKGhlYWRpbmcpOyBcbiAgICB9XG5cbiAgICByZW5kZXJQbGFjZW1lbnQoZ2FtZWJvYXJkKXtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZXRQbGF5ZXJCb2FyZE5vZGUoZ2FtZWJvYXJkKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyUGxhY2VtZW50SGVhZGVyKHNoaXBzTGVmdCwgY3VycmVudFNoaXBMZW5ndGgpe1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQ9ICdCYXR0bGVzaGlwJztcbiAgICAgICAgY29uc3Qgc2hpcHNUb1BsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcHNUb1BsYWNlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtdG9wbGFjZS1tc2cnKTtcbiAgICAgICAgc2hpcExlbmd0aC5jbGFzc0xpc3QuYWRkKCdzaGlwLWxlbmd0aC1tc2cnKTtcbiAgICAgICAgc2hpcHNUb1BsYWNlLnRleHRDb250ZW50ID0gYFlvdSBoYXZlICR7c2hpcHNMZWZ0fSBzaGlwcyBsZWZ0IHRvIHBsYWNlLi4uYDtcbiAgICAgICAgc2hpcExlbmd0aC50ZXh0Q29udGVudCA9IGBUaGUgY3VycmVudCBzaGlwIHlvdSBhcmUgcGxhY2luZyB3aWxsIGhhdmUgYSBsZW5ndGggb2YgJHtjdXJyZW50U2hpcExlbmd0aH1gO1xuICAgICAgICBjb25zdCBheGlzYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB4QXhpc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB5QXhpc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgYXhpc2J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIHhBeGlzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2F4aXMtYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYXhpcyA9PT0gJ1gnID8geEF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24tYWN0aXZlJykgOiB5QXhpc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdheGlzLWJ1dHRvbi1hY3RpdmUnKTtcbiAgICAgICAgeUF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24nKTtcbiAgICAgICAgeEF4aXNCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIHlBeGlzQnV0dG9uLnRleHRDb250ZW50ID0gJ1knO1xuICAgICAgICB4QXhpc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHhBeGlzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2F4aXMtYnV0dG9uLWFjdGl2ZScpO1xuICAgICAgICAgICAgeUF4aXNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYXhpcy1idXR0b24tYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmF4aXMgPSAnWCc7XG4gICAgICAgIH0pXG4gICAgICAgIHlBeGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgeUF4aXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYXhpcy1idXR0b24tYWN0aXZlJyk7XG4gICAgICAgICAgICB4QXhpc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdheGlzLWJ1dHRvbi1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYXhpcyA9ICdZJztcbiAgICAgICAgfSlcbiAgICAgICAgYXhpc2J1dHRvbnMuYXBwZW5kQ2hpbGQoeEF4aXNCdXR0b24pO1xuICAgICAgICBheGlzYnV0dG9ucy5hcHBlbmRDaGlsZCh5QXhpc0J1dHRvbik7XG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBoZWFkaW5nLmFwcGVuZENoaWxkKHNoaXBzVG9QbGFjZSk7XG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoc2hpcExlbmd0aCk7XG4gICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoYXhpc2J1dHRvbnMpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgfVxuXG4gICAgZ2V0UGxheWVyQm9hcmROb2RlKGdhbWVib2FyZCl7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdnYi1ncmlkJylcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgnZ2Itcm93Jyk7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGogKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwnKTtcbiAgICAgICAgICAgICAgICBpZihnYW1lYm9hcmQuc3VjY2Vzc2Z1bEF0dGFja3MuaW5jbHVkZXMoYCR7aX0sJHtqfWApKXtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdnYi1jZWxsLXBsYXllci1oaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICdPJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihnYW1lYm9hcmQubWlzc2VkQXR0YWNrcy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtbWlzcycpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5ib2FyZC5nZXQoYCR7aX0sJHtqfWApIT1udWxsKXtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdnYi1jZWxsLXBsYXllci1zaGlwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBib2FyZG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmRuYW1lLmNsYXNzTGlzdC5hZGQoJ2JvYXJkbmFtZScpO1xuICAgICAgICBib2FyZG5hbWUudGV4dENvbnRlbnQgPSBgUGxheWVyIDEncyBCb2FyZC5gO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGJvYXJkbmFtZSk7XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cblxuICAgIGdldENvbXB1dGVyQm9hcmROb2RlKGdhbWVib2FyZCwgcGxheWVyVHlwZSl7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdnYi1jb21wLWdyaWQnKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdnYi1jb21wLXJvdycpO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqICsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdnYi1jb21wLWNlbGwnKTtcbiAgICAgICAgICAgICAgICBpZihnYW1lYm9hcmQubWlzc2VkQXR0YWNrcy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtbWlzcycpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5zdWNjZXNzZnVsQXR0YWNrcy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtaGl0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBib2FyZG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmRuYW1lLmNsYXNzTGlzdC5hZGQoJ2JvYXJkbmFtZScpO1xuICAgICAgICBib2FyZG5hbWUudGV4dENvbnRlbnQgPSBgQ29tcHV0ZXIncyBCb2FyZC5gO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGJvYXJkbmFtZSk7XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL0dhbWVib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgQUl7XG4gICAgY29uc3RydWN0b3IoYm9hcmQpe1xuICAgICAgICB0aGlzLmtub3duSGl0cyA9IFtdO1xuICAgICAgICB0aGlzLmhpdEF0dGVtcHRzID0gW107XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9ICcwLDAnO1xuICAgIH1cblxuICAgIGdldE1vdmUoZ2FtZWJvYXJkKXtcbiAgICAgICAgLy8gSWYgbm8ga25vd24gaGl0cywgcmV0dXJuIHJhbmRvbSBjb29yZGluYXRlXG4gICAgICAgIGxldCBjb29yZCA9IHRoaXMucmFuZG9tQ29vcmQoZ2FtZWJvYXJkKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGdhbWVib2FyZC5ib2FyZC5nZXQodGhpcy5sYXN0U2hvdCk/LmlzU3VuaygpPT09dHJ1ZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygxMjMpXG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnF1ZXVlLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgY29vcmQgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ2FtZWJvYXJkLmJvYXJkLmdldChjb29yZCkhPT1udWxsKXtcbiAgICAgICAgICAgIHRoaXMucXVldWUuc2hpZnQoKVxuICAgICAgICAgICAgZm9yKGxldCBhZGpDb29yZCBvZiB0aGlzLmdldEFkamFjZW50Q29vcmRzKGNvb3JkKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKGFkakNvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucXVldWUgPSB0aGlzLmNsZWFuUXVldWUodGhpcy5xdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaXRBdHRlbXB0cy5wdXNoKGNvb3JkKTtcbiAgICAgICAgdGhpcy5sYXN0U2hvdCA9IGNvb3JkO1xuICAgICAgICByZXR1cm4gY29vcmQ7XG4gICAgfVxuXG4gICAgY2hlY2tJZlN1bmsoZ2FtZWJvYXJkLCBjb29yZCl7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQuYm9hcmQuZ2V0KGNvb3JkKS5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBjbGVhblF1ZXVlKHF1ZXVlKXtcbiAgICAgICAgbGV0IHRvUmV0dXJuID0gW107XG4gICAgICAgIGNvbnNvbGUubG9nKCdRdWV1ZScsIHF1ZXVlKVxuICAgICAgICBmb3IobGV0IGNvb3JkIG9mIHF1ZXVlKXtcbiAgICAgICAgICAgIGlmKCEodGhpcy5oaXRBdHRlbXB0cy5pbmNsdWRlcyhjb29yZCkpKXtcbiAgICAgICAgICAgICAgICB0b1JldHVybi5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnVG9SZXR1cm4gLSAnLCB0b1JldHVybilcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBnZXRBZGphY2VudENvb3Jkcyhjb29yZCl7XG5cbiAgICAgICAgbGV0IGFkamFjZW50Q29vcmRzID0gW107XG5cbiAgICAgICAgY29uc3QgQURKQUNFTkNUX01VVEFUSU9OUyA9IFtcbiAgICAgICAgICAgIFswLDFdLFxuICAgICAgICAgICAgWzEsMF0sXG4gICAgICAgICAgICBbMCwtMV0sXG4gICAgICAgICAgICBbLTEsMF1cbiAgICAgICAgXVxuXG4gICAgICAgIGxldCB4Q29vcmQgPSBOdW1iZXIoY29vcmRbMF0pO1xuICAgICAgICBsZXQgeUNvb3JkID0gTnVtYmVyKGNvb3JkWzJdKTtcblxuICAgICAgICBmb3IobGV0IGFkamFjZW50IG9mIEFESkFDRU5DVF9NVVRBVElPTlMpe1xuICAgICAgICAgICAgaWYoeENvb3JkK2FkamFjZW50WzBdIDwgMTAgJiYgeENvb3JkK2FkamFjZW50WzBdID49IDAgJiYgeUNvb3JkK2FkamFjZW50WzFdIDwgMTAgJiYgeUNvb3JkK2FkamFjZW50WzFdID49IDApXG4gICAgICAgICAgICBhZGphY2VudENvb3Jkcy5wdXNoKGAke3hDb29yZCthZGphY2VudFswXX0sJHt5Q29vcmQrYWRqYWNlbnRbMV19YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRqYWNlbnRDb29yZHM7XG5cbiAgICB9XG5cbiAgICByYW5kb21Db29yZCA9IGZ1bmN0aW9uKGJvYXJkKXtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgY29vcmQgPSBgJHtbeCx5XX1gO1xuICAgICAgICB3aGlsZSh0aGlzLmhpdEF0dGVtcHRzLmluY2x1ZGVzKGNvb3JkKSl7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvb3JkID0gYCR7W3gseV19YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7W3gseV19YDtcbiAgICB9XG59IiwiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gXCIuLi9mYWN0b3JpZXMvR2FtZWJvYXJkXCI7XG5pbXBvcnQge1NoaXB9IGZyb20gXCIuLi9mYWN0b3JpZXMvU2hpcFwiO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9mYWN0b3JpZXMvUGxheWVyXCI7XG5pbXBvcnQge1VJfSBmcm9tIFwiLi4vbW9kdWxlcy9VSVwiO1xuaW1wb3J0IHsgc3RhdHVzIH0gZnJvbSBcIi4uL21vZHVsZXMvc3RhdHVzXCI7XG5cbmV4cG9ydCBjbGFzcyBjb250cm9sbGVye1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gU2V0dXAgcGxheWVyc1xuICAgICAgICB0aGlzLnBsYXllciA9IFBsYXllcignUGxheWVyJywgJ3BsYXllcicpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyID0gUGxheWVyKCdDb21wdXRlcicsICdjb21wJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXR1cyA9IG5ldyBzdGF0dXMoKTtcbiAgICAgICAgLy8gQ3JlYXRlIGdhbWVib2FyZCBmb3IgZWFjaCBwbGF5ZXJcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCh0aGlzLmN1cnJlbnRTdGF0dXMpO1xuICAgICAgICB0aGlzLmNvbXBCb2FyZCA9IEdhbWVib2FyZCh0aGlzLmN1cnJlbnRTdGF0dXMpO1xuICAgICAgICB0aGlzLmdhbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNoaXBzUGxhY2VkID0gMDtcbiAgICAgICAgdGhpcy5teVVJID0gbmV3IFVJKCk7XG4gICAgICAgIHRoaXMucGxhY2VtZW50KCk7XG4gICAgfVxuXG4gICAgdGFrZVR1cm4oeCwgeSl7XG4gICAgICAgIHRoaXMucGxheWVyLmF0dGFjayh0aGlzLmNvbXBCb2FyZCxgJHt4fSwke3l9YCk7XG4gICAgICAgIGlmKHRoaXMuY29tcEJvYXJkLmFsbFNoaXBzU3VuaygpKXt0aGlzLndpbkdhbWUodGhpcy5wbGF5ZXIuZ2V0TmFtZSgpKX07XG4gICAgICAgIHRoaXMubXlVSS5kZWxldGVIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5teVVJLnJlbmRlckhlYWRlcih0aGlzLnBsYXllci5nZXROYW1lKCksIHRoaXMuY3VycmVudFN0YXR1cy5nZXRTdGF0dXMoKSlcbiAgICAgICAgdGhpcy5teVVJLmRlbGV0ZUJvYXJkcygpO1xuICAgICAgICB0aGlzLm15VUkucmVuZGVyQm9hcmRzKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuY29tcEJvYXJkKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGNvbXB1dGVyQXR0YWNrKCl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIuYXR0YWNrKHRoaXMucGxheWVyQm9hcmQpO1xuICAgICAgICBpZih0aGlzLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKXt0aGlzLndpbkdhbWUodGhpcy5jb21wdXRlci5nZXROYW1lKCkpfTtcbiAgICAgICAgdGhpcy5teVVJLmRlbGV0ZUhlYWRlcigpO1xuICAgICAgICB0aGlzLm15VUkucmVuZGVySGVhZGVyKHRoaXMuY29tcHV0ZXIuZ2V0TmFtZSgpLCB0aGlzLmN1cnJlbnRTdGF0dXMuZ2V0U3RhdHVzKCkpXG4gICAgICAgIHRoaXMubXlVSS5kZWxldGVCb2FyZHMoKTtcbiAgICAgICAgdGhpcy5teVVJLnJlbmRlckJvYXJkcyh0aGlzLnBsYXllckJvYXJkLCB0aGlzLmNvbXBCb2FyZCk7XG4gICAgICAgIHRoaXMuYWRkQ2xpY2tIYW5kbGVyKHRoaXMuY29tcEJvYXJkKTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQoKXtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGhzID0gWzIsMywzLDQsNV07XG4gICAgICAgIHRoaXMubXlVSS5yZW5kZXJQbGFjZW1lbnRIZWFkZXIoNSAtIHRoaXMuc2hpcHNQbGFjZWQsIHNoaXBMZW5ndGhzW3RoaXMuc2hpcHNQbGFjZWRdKTtcbiAgICAgICAgdGhpcy5teVVJLnJlbmRlclBsYWNlbWVudCh0aGlzLnBsYXllckJvYXJkKTtcbiAgICAgICAgdGhpcy5hZGRQbGFjZW1lbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmFkZEhvdmVySGFuZGxlcihzaGlwTGVuZ3Roc1t0aGlzLnNoaXBzUGxhY2VkXSk7XG4gICAgfVxuXG4gICAgZ2FtZUJlZ2luKCl7XG4gICAgICAgIHRoaXMubXlVSS5kZWxldGVIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5teVVJLmRlbGV0ZVBsYWNlbWVudEJvYXJkKCk7XG4gICAgICAgIHRoaXMucGxhY2VDb21wU2hpcHModGhpcy5jb21wQm9hcmQpO1xuICAgICAgICB0aGlzLm15VUkucmVuZGVySGVhZGVyKHRoaXMuY29tcHV0ZXIuZ2V0TmFtZSgpLCB0aGlzLnN0YXR1cyk7XG4gICAgICAgIHRoaXMubXlVSS5yZW5kZXJCb2FyZHModGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5jb21wQm9hcmQpO1xuICAgICAgICB0aGlzLmFkZENsaWNrSGFuZGxlcih0aGlzLmNvbXBCb2FyZCk7XG4gICAgfVxuXG4gICAgd2luR2FtZSh3aW5uZXIpe1xuICAgICAgICB0aGlzLmdhbWVBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgYWxlcnQoYCR7d2lubmVyfSB3aW5zIWApXG4gICAgfVxuXG4gICAgYWRkUGxhY2VtZW50SGFuZGxlcnMoKXtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2ItY2VsbCcpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBjZWxsc1tpXTtcbiAgICAgICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihpLzEwKTtcbiAgICAgICAgICAgIGxldCB5ID0gaSAlIDEwO1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcExlbmd0aHMgPSBbMiwzLDMsNCw1XTtcbiAgICAgICAgICAgICAgICBsZXQgYXhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5heGlzLWJ1dHRvbi1hY3RpdmUnKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNoaXBzUGxhY2VkIDwgNSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGhzW3RoaXMuc2hpcHNQbGFjZWRdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoYCR7eH0sJHt5fWAsIHNoaXAsIGF4aXMpIT09bnVsbCl7dGhpcy5zaGlwc1BsYWNlZCsrO31cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVVJLmRlbGV0ZVBsYWNlbWVudEJvYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlVSS5kZWxldGVIZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaGlwc1BsYWNlZD09PTUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVCZWdpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkSG92ZXJIYW5kbGVyKHNoaXBMZW4pe1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYi1jZWxsJyk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGNlbGxzW2ldO1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKGkvMTApO1xuICAgICAgICAgICAgbGV0IHkgPSBpICUgMTA7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdnYi1jZWxsLWhvdmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1ob3ZlcicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXhpcy1idXR0b24tYWN0aXZlJykudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW47IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGF4aXMgPT0gJ1gnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSAoKHggKiAxMCkgKyAoeStpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPCAxMDAgJiYgKChwb3MgLSBpKSAlIDEwKSA8IChwb3MgJSAxMCkgPyBjZWxsc1twb3NdLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtaG92ZXInKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSAoKHgraSkgKiAxMCkgKyAoeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPCAxMDAgPyBjZWxsc1twb3NdLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtaG92ZXInKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZENsaWNrSGFuZGxlcihjb21wQm9hcmQpe1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYi1jb21wLWNlbGwnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjZWxsID0gY2VsbHNbaV07XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoaS8xMCk7XG4gICAgICAgICAgICBsZXQgeSA9IGkgJSAxMDtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5nYW1lQWN0aXZlKXt0aGlzLnRha2VUdXJuKHgsIHkpfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9tQ29vcmQgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICByZXR1cm4gYCR7W3gseV19YDtcbiAgICB9XG5cbiAgICBwbGFjZUNvbXBTaGlwcyhjb21wQm9hcmQpe1xuICAgICAgICBsZXQgc2hpcExlbmd0aHMgPSBbMiwzLDMsNCw1XVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHNoaXAgPSBTaGlwKHNoaXBMZW5ndGhzW2ldKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IHRoaXMucmFuZG9tQ29vcmQoKTtcbiAgICAgICAgICAgIGxldCBheGlzID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpKSA9PT0gMSA/ICdYJyA6ICdZJzsgXG4gICAgICAgICAgICB3aGlsZSAoY29tcEJvYXJkLnBsYWNlU2hpcChjb29yZCwgc2hpcCwgYXhpcyk9PT1udWxsKXtcbiAgICAgICAgICAgICAgICBjb29yZCA9IHRoaXMucmFuZG9tQ29vcmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3Mgc3RhdHVze1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBudWxsO1xuICAgIH1cblxuICAgIHNldFN0YXR1cyhzdGF0dXMpe1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL21vZHVsZXMvY29udHJvbGxlclwiO1xuXG5sZXQgZ2FtZSA9IG5ldyBjb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9