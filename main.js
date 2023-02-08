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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: black;\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.header{\n    text-align: center;\n}\n\n.content{\n    display: flex;\n    justify-content: space-evenly;\n    gap: 100px;\n}\n\n.gb-grid, .gb-comp-grid{\n    text-align: center;\n}\n\n.gb-row, .gb-comp-row{\n    display: flex;\n}\n\n.gb-cell, .gb-comp-cell{\n    width: 30px;\n    height: 30px;\n    background-color: rgb(109, 225, 238);\n    border: solid 1px black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 32px;\n}\n\n.gb-cell-player-ship{\n    background-color: red;\n}\n\n.gb-cell-player-hit{\n    background-color: orange;\n}\n\n.gb-cell-miss{\n    background-color: rgba(75, 167, 178, 0.996);\n    color: red;\n}\n\n.gb-cell-hit{\n    background-color: gray;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,YAAY;IACZ,8CAA8C;AAClD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,2CAA2C;IAC3C,UAAU;AACd;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["body{\n    background-color: black;\n    color: white;\n    font-family: 'Courier New', Courier, monospace;\n}\n\n.header{\n    text-align: center;\n}\n\n.content{\n    display: flex;\n    justify-content: space-evenly;\n    gap: 100px;\n}\n\n.gb-grid, .gb-comp-grid{\n    text-align: center;\n}\n\n.gb-row, .gb-comp-row{\n    display: flex;\n}\n\n.gb-cell, .gb-comp-cell{\n    width: 30px;\n    height: 30px;\n    background-color: rgb(109, 225, 238);\n    border: solid 1px black;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 32px;\n}\n\n.gb-cell-player-ship{\n    background-color: red;\n}\n\n.gb-cell-player-hit{\n    background-color: orange;\n}\n\n.gb-cell-miss{\n    background-color: rgba(75, 167, 178, 0.996);\n    color: red;\n}\n\n.gb-cell-hit{\n    background-color: gray;\n}"],"sourceRoot":""}]);
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
const Gameboard = () => {

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
        if(axis==='X'){
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
        else if(axis==='Y'){
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
            return false;
        }
        else if(board.get(coords).hasOwnProperty('hits')){
            board.get(coords).hit();
            successfulAttacks.push(coords);
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

    return {receiveAttack, allShipsSunk, missedAttacks, successfulAttacks, placeShip, board};

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
const Player = (name, type) => {
    const playerName = name;
    const playerType = type;

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
        let coord = randomCoord();
        while(board.missedAttacks.includes(coord)){
            coord = randomCoord();
        }
        board.receiveAttack(coord);
    }

    const randomCoord = function(){
        const x = Math.floor(Math.random() * 8);
        const y = Math.floor(Math.random() * 8);
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

    renderHeader(name1, name2, status='It is Player 1s turn!'){
        const header = document.querySelector('.header');
        const heading = document.createElement('h1');
        heading.textContent= 'Battleship';
        const versus = document.createElement('div');
        versus.classList.add('versus');
        versus.textContent = `${name1} vs ${name2}`;
        const turn = document.createElement('div');
        turn.classList.add('turn');
        turn.textContent = status;
        header.appendChild(heading);
        header.appendChild(versus);
        header.appendChild(turn);
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





class controller{

    constructor(){
        this.player = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_2__.Player)('Player 1', 'player');
        this.computer = (0,_factories_Player__WEBPACK_IMPORTED_MODULE_2__.Player)('Computer', 'comp');
        this.playerBoard = (0,_factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
        this.compBoard = (0,_factories_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
        this.gameActive = true;
        this.testPlaceShips(this.playerBoard, this.compBoard);
        this.myUI = new _modules_UI__WEBPACK_IMPORTED_MODULE_3__.UI();
        this.myUI.renderHeader(this.player.getName(), this.computer.getName());
        this.myUI.renderBoards(this.playerBoard, this.compBoard);
        this.addClickHandler(this.compBoard);
    }

    takeTurn(cell, x, y){
        // MAKE PLAYER ATTACK
        this.player.attack(this.compBoard,`${x},${y}`);
        // CHECK FOR WIN
        if(this.compBoard.allShipsSunk()){this.winGame()};
        // COMPUTER MAKE PLAY
        this.computer.attack(this.playerBoard);
        // CHECK FOR WIN
        this.playerBoard.allShipsSunk();
        // REFRESH UI
        this.myUI.deleteBoards();
        this.myUI.renderBoards(this.playerBoard, this.compBoard);
        this.addClickHandler(this.compBoard);
    }

    winGame(){
        this.gameActive = false;
    }

    addClickHandler(compBoard){
        const cells = document.querySelectorAll('.gb-comp-cell');
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i];
            let x = Math.floor(i/10);
            let y = i % 10;
            cell.addEventListener('click', () => {
                if(this.gameActive){this.takeTurn(cell, x, y)};
            });
        }
    }

    testPlaceShips(playerBoard, compBoard){
        let shipA = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(3);
        let shipB = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(5);
        let shipC = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(4);
        let shipD = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(2);
        let shipE = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(3);
        playerBoard.placeShip('2,2', shipA, 'X');
        playerBoard.placeShip('0,0', shipB, 'Y');
        playerBoard.placeShip('4,4', shipC, 'X');
        playerBoard.placeShip('1,6', shipD, 'Y');
        playerBoard.placeShip('6,6', shipE, 'X');

        let shipF = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(3);
        let shipG = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(5);
        let shipH = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(4);
        let shipI = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(2);
        let shipJ = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(3);
        compBoard.placeShip('5,2', shipF, 'X');
        compBoard.placeShip('0,0', shipG, 'Y');
        compBoard.placeShip('4,4', shipH, 'X');
        compBoard.placeShip('1,6', shipI, 'Y');
        compBoard.placeShip('6,6', shipJ, 'X');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzZCOztBQUVsRCxlQUFlLDJEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5nYi1ncmlkLCAuZ2ItY29tcC1ncmlke1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYi1yb3csIC5nYi1jb21wLXJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdiLWNlbGwsIC5nYi1jb21wLWNlbGx7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDIyNSwgMjM4KTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5nYi1jZWxsLXBsYXllci1zaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nYi1jZWxsLXBsYXllci1oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmdiLWNlbGwtbWlzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgMTY3LCAxNzgsIDAuOTk2KTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmdiLWNlbGwtaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uZ2ItZ3JpZCwgLmdiLWNvbXAtZ3JpZHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2Itcm93LCAuZ2ItY29tcC1yb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5nYi1jZWxsLCAuZ2ItY29tcC1jZWxse1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAyMjUsIDIzOCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG4uZ2ItY2VsbC1wbGF5ZXItc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2ItY2VsbC1wbGF5ZXItaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5nYi1jZWxsLW1pc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzUsIDE2NywgMTc4LCAwLjk5Nik7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5nYi1jZWxsLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuXG4gICAgY29uc3QgYnVpbGRCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqICsrKXtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmQgPSBgJHtbaSxqXX1gXG4gICAgICAgICAgICAgICAgYm9hcmQuc2V0KGNvb3JkLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgbGV0IGJvYXJkID0gYnVpbGRCb2FyZCgpO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuICAgIGxldCBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgbGV0IHN1Y2Nlc3NmdWxBdHRhY2tzID0gW107XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmQsIHNoaXAsIGF4aXMpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRzID0gY29vcmQuc3BsaXQoJywnKTtcbiAgICAgICAgbGV0IHhDb29yZCA9IHBhcnNlSW50KGNvb3Jkc1swXSk7XG4gICAgICAgIGxldCB5Q29vcmQgPSBwYXJzZUludChjb29yZHNbMV0pO1xuICAgICAgICBsZXQgdG9QbGFjZSA9IFtdO1xuICAgICAgICBpZihheGlzPT09J1gnKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihib2FyZC5nZXQoYCR7W3hDb29yZCx5Q29vcmRdfWApPT09bnVsbCAmJiB4Q29vcmQgPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIHRvUGxhY2UucHVzaChgJHtbeENvb3JkLHlDb29yZF19YCk7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCAvLyBTcGFjZSBhbHJlYWR5IGluIHVzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGF4aXM9PT0nWScpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKGJvYXJkLmdldChgJHtbeENvb3JkLHlDb29yZF19YCk9PT1udWxsICYmIHlDb29yZCA8IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgdG9QbGFjZS5wdXNoKGAke1t4Q29vcmQseUNvb3JkXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsIC8vIFNwYWNlIGFscmVhZHkgaW4gdXNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgcGxhY2VtZW50IG9mIHRvUGxhY2Upe1xuICAgICAgICAgICAgYm9hcmQuc2V0KHBsYWNlbWVudCwgc2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcbiAgICAgICAgaWYoYm9hcmQuZ2V0KGNvb3Jkcyk9PT1udWxsICYmICFtaXNzZWRBdHRhY2tzLmluY2x1ZGVzKGNvb3Jkcykpe1xuICAgICAgICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKGNvb3Jkcyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihib2FyZC5nZXQoY29vcmRzKS5oYXNPd25Qcm9wZXJ0eSgnaGl0cycpKXtcbiAgICAgICAgICAgIGJvYXJkLmdldChjb29yZHMpLmhpdCgpO1xuICAgICAgICAgICAgc3VjY2Vzc2Z1bEF0dGFja3MucHVzaChjb29yZHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSBmdW5jdGlvbigpe1xuICAgICAgICBmb3IobGV0IHNoaXAgb2Ygc2hpcHMpe1xuICAgICAgICAgICAgaWYoc2hpcC5pc1N1bmsoKT09PWZhbHNlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIG1pc3NlZEF0dGFja3MsIHN1Y2Nlc3NmdWxBdHRhY2tzLCBwbGFjZVNoaXAsIGJvYXJkfTtcblxufSIsImV4cG9ydCBjb25zdCBQbGF5ZXIgPSAobmFtZSwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSBuYW1lO1xuICAgIGNvbnN0IHBsYXllclR5cGUgPSB0eXBlO1xuXG4gICAgY29uc3QgZ2V0TmFtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBwbGF5ZXJOYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjayA9IGZ1bmN0aW9uKGJvYXJkLCBjb29yZHMpeyBcbiAgICAgICAgcGxheWVyVHlwZSA9PT0gJ3BsYXllcicgPyBwbGF5ZXJBdHRhY2soYm9hcmQsIGNvb3Jkcyk6IGNvbXBBdHRhY2soYm9hcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IGZ1bmN0aW9uKGJvYXJkLCBjb29yZHMpe1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcEF0dGFjayA9IGZ1bmN0aW9uKGJvYXJkKXtcbiAgICAgICAgbGV0IGNvb3JkID0gcmFuZG9tQ29vcmQoKTtcbiAgICAgICAgd2hpbGUoYm9hcmQubWlzc2VkQXR0YWNrcy5pbmNsdWRlcyhjb29yZCkpe1xuICAgICAgICAgICAgY29vcmQgPSByYW5kb21Db29yZCgpO1xuICAgICAgICB9XG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUNvb3JkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgIHJldHVybiBgJHtbeCx5XX1gO1xuICAgIH1cblxuICAgIHJldHVybiB7YXR0YWNrLCBnZXROYW1lfTtcblxufSIsImV4cG9ydCBjb25zdCBTaGlwID0gKGxlbikgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGxlbjtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgY29uc3QgaGl0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYodGhpcy5oaXRzPHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtsZW5ndGgsIGhpdCwgaGl0cywgaXNTdW5rfTtcbn0iLCJleHBvcnQgY2xhc3MgVUl7XG5cbiAgICByZW5kZXJCb2FyZHMoZ2FtZWJvYXJkMSwgZ2FtZWJvYXJkMil7XG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBmaXJzdCBib2FyZFxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgLy8gQ3JlYXRpbmcvYXBwZW5kaW5nIFBsYXllciAxcyBib2FyZFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuZ2V0UGxheWVyQm9hcmROb2RlKGdhbWVib2FyZDEpKTtcbiAgICAgICAgLy8gQ3JlYXRpbmcvYXBwZW5kaW5nIFBsYXllciAycyBib2FyZFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuZ2V0Q29tcHV0ZXJCb2FyZE5vZGUoZ2FtZWJvYXJkMikpO1xuICAgIH1cblxuICAgIGRlbGV0ZUJvYXJkcygpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYi1ncmlkJyk7XG4gICAgICAgIGNvbnN0IGNvbXBHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdiLWNvbXAtZ3JpZCcpO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHBsYXllckdyaWQpO1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbXBHcmlkKTtcbiAgICB9XG5cbiAgICByZW5kZXJIZWFkZXIobmFtZTEsIG5hbWUyLCBzdGF0dXM9J0l0IGlzIFBsYXllciAxcyB0dXJuIScpe1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50PSAnQmF0dGxlc2hpcCc7XG4gICAgICAgIGNvbnN0IHZlcnN1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2ZXJzdXMuY2xhc3NMaXN0LmFkZCgndmVyc3VzJyk7XG4gICAgICAgIHZlcnN1cy50ZXh0Q29udGVudCA9IGAke25hbWUxfSB2cyAke25hbWUyfWA7XG4gICAgICAgIGNvbnN0IHR1cm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdHVybi5jbGFzc0xpc3QuYWRkKCd0dXJuJyk7XG4gICAgICAgIHR1cm4udGV4dENvbnRlbnQgPSBzdGF0dXM7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHZlcnN1cyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0dXJuKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJCb2FyZE5vZGUoZ2FtZWJvYXJkKXtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2diLWdyaWQnKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdnYi1yb3cnKTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaiArKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbCcpO1xuICAgICAgICAgICAgICAgIGlmKGdhbWVib2FyZC5zdWNjZXNzZnVsQXR0YWNrcy5pbmNsdWRlcyhgJHtpfSwke2p9YCkpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtcGxheWVyLWhpdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJ08nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmluY2x1ZGVzKGAke2l9LCR7an1gKSl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1taXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZ2FtZWJvYXJkLmJvYXJkLmdldChgJHtpfSwke2p9YCkhPW51bGwpe1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNlbGwtcGxheWVyLXNoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvYXJkbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZG5hbWUuY2xhc3NMaXN0LmFkZCgnYm9hcmRuYW1lJyk7XG4gICAgICAgIGJvYXJkbmFtZS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMSdzIEJvYXJkLmA7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYm9hcmRuYW1lKTtcbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxuXG4gICAgZ2V0Q29tcHV0ZXJCb2FyZE5vZGUoZ2FtZWJvYXJkLCBwbGF5ZXJUeXBlKXtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2diLWNvbXAtZ3JpZCcpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2diLWNvbXAtcm93Jyk7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGogKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2diLWNvbXAtY2VsbCcpO1xuICAgICAgICAgICAgICAgIGlmKGdhbWVib2FyZC5taXNzZWRBdHRhY2tzLmluY2x1ZGVzKGAke2l9LCR7an1gKSl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1taXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZ2FtZWJvYXJkLnN1Y2Nlc3NmdWxBdHRhY2tzLmluY2x1ZGVzKGAke2l9LCR7an1gKSl7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2ItY2VsbC1oaXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvYXJkbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZG5hbWUuY2xhc3NMaXN0LmFkZCgnYm9hcmRuYW1lJyk7XG4gICAgICAgIGJvYXJkbmFtZS50ZXh0Q29udGVudCA9IGBDb21wdXRlcidzIEJvYXJkLmA7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYm9hcmRuYW1lKTtcbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxufSIsImltcG9ydCB7R2FtZWJvYXJkfSBmcm9tIFwiLi4vZmFjdG9yaWVzL0dhbWVib2FyZFwiO1xuaW1wb3J0IHtTaGlwfSBmcm9tIFwiLi4vZmFjdG9yaWVzL1NoaXBcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vZmFjdG9yaWVzL1BsYXllclwiO1xuaW1wb3J0IHtVSX0gZnJvbSBcIi4uL21vZHVsZXMvVUlcIjtcblxuZXhwb3J0IGNsYXNzIGNvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBsYXllciA9IFBsYXllcignUGxheWVyIDEnLCAncGxheWVyJyk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgJ2NvbXAnKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLmNvbXBCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLmdhbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRlc3RQbGFjZVNoaXBzKHRoaXMucGxheWVyQm9hcmQsIHRoaXMuY29tcEJvYXJkKTtcbiAgICAgICAgdGhpcy5teVVJID0gbmV3IFVJKCk7XG4gICAgICAgIHRoaXMubXlVSS5yZW5kZXJIZWFkZXIodGhpcy5wbGF5ZXIuZ2V0TmFtZSgpLCB0aGlzLmNvbXB1dGVyLmdldE5hbWUoKSk7XG4gICAgICAgIHRoaXMubXlVSS5yZW5kZXJCb2FyZHModGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5jb21wQm9hcmQpO1xuICAgICAgICB0aGlzLmFkZENsaWNrSGFuZGxlcih0aGlzLmNvbXBCb2FyZCk7XG4gICAgfVxuXG4gICAgdGFrZVR1cm4oY2VsbCwgeCwgeSl7XG4gICAgICAgIC8vIE1BS0UgUExBWUVSIEFUVEFDS1xuICAgICAgICB0aGlzLnBsYXllci5hdHRhY2sodGhpcy5jb21wQm9hcmQsYCR7eH0sJHt5fWApO1xuICAgICAgICAvLyBDSEVDSyBGT1IgV0lOXG4gICAgICAgIGlmKHRoaXMuY29tcEJvYXJkLmFsbFNoaXBzU3VuaygpKXt0aGlzLndpbkdhbWUoKX07XG4gICAgICAgIC8vIENPTVBVVEVSIE1BS0UgUExBWVxuICAgICAgICB0aGlzLmNvbXB1dGVyLmF0dGFjayh0aGlzLnBsYXllckJvYXJkKTtcbiAgICAgICAgLy8gQ0hFQ0sgRk9SIFdJTlxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpO1xuICAgICAgICAvLyBSRUZSRVNIIFVJXG4gICAgICAgIHRoaXMubXlVSS5kZWxldGVCb2FyZHMoKTtcbiAgICAgICAgdGhpcy5teVVJLnJlbmRlckJvYXJkcyh0aGlzLnBsYXllckJvYXJkLCB0aGlzLmNvbXBCb2FyZCk7XG4gICAgICAgIHRoaXMuYWRkQ2xpY2tIYW5kbGVyKHRoaXMuY29tcEJvYXJkKTtcbiAgICB9XG5cbiAgICB3aW5HYW1lKCl7XG4gICAgICAgIHRoaXMuZ2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZENsaWNrSGFuZGxlcihjb21wQm9hcmQpe1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYi1jb21wLWNlbGwnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjZWxsID0gY2VsbHNbaV07XG4gICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoaS8xMCk7XG4gICAgICAgICAgICBsZXQgeSA9IGkgJSAxMDtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5nYW1lQWN0aXZlKXt0aGlzLnRha2VUdXJuKGNlbGwsIHgsIHkpfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGVzdFBsYWNlU2hpcHMocGxheWVyQm9hcmQsIGNvbXBCb2FyZCl7XG4gICAgICAgIGxldCBzaGlwQSA9IFNoaXAoMyk7XG4gICAgICAgIGxldCBzaGlwQiA9IFNoaXAoNSk7XG4gICAgICAgIGxldCBzaGlwQyA9IFNoaXAoNCk7XG4gICAgICAgIGxldCBzaGlwRCA9IFNoaXAoMik7XG4gICAgICAgIGxldCBzaGlwRSA9IFNoaXAoMyk7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnMiwyJywgc2hpcEEsICdYJyk7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnMCwwJywgc2hpcEIsICdZJyk7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnNCw0Jywgc2hpcEMsICdYJyk7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnMSw2Jywgc2hpcEQsICdZJyk7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnNiw2Jywgc2hpcEUsICdYJyk7XG5cbiAgICAgICAgbGV0IHNoaXBGID0gU2hpcCgzKTtcbiAgICAgICAgbGV0IHNoaXBHID0gU2hpcCg1KTtcbiAgICAgICAgbGV0IHNoaXBIID0gU2hpcCg0KTtcbiAgICAgICAgbGV0IHNoaXBJID0gU2hpcCgyKTtcbiAgICAgICAgbGV0IHNoaXBKID0gU2hpcCgzKTtcbiAgICAgICAgY29tcEJvYXJkLnBsYWNlU2hpcCgnNSwyJywgc2hpcEYsICdYJyk7XG4gICAgICAgIGNvbXBCb2FyZC5wbGFjZVNoaXAoJzAsMCcsIHNoaXBHLCAnWScpO1xuICAgICAgICBjb21wQm9hcmQucGxhY2VTaGlwKCc0LDQnLCBzaGlwSCwgJ1gnKTtcbiAgICAgICAgY29tcEJvYXJkLnBsYWNlU2hpcCgnMSw2Jywgc2hpcEksICdZJyk7XG4gICAgICAgIGNvbXBCb2FyZC5wbGFjZVNoaXAoJzYsNicsIHNoaXBKLCAnWCcpO1xuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL21vZHVsZXMvY29udHJvbGxlclwiO1xuXG5sZXQgZ2FtZSA9IG5ldyBjb250cm9sbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9