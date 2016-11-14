/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n  min-height: 100%;\n  color: #4C4C4C;\n  font-family: 'Heebo';\n}\nh1,\na {\n  color: #FF5A5F;\n}\nh3 {\n  color: #00A699;\n}\na:hover {\n  color: #FF5A5F;\n}\nmain {\n  margin-left: 10px;\n  min-height: 80vh !important;\n}\ninput,\nselect {\n  font-size: 90%;\n  width: 145px;\n  height: 25px;\n  margin: 5px !important;\n  text-align: center;\n  border: 1px solid #e4e5e6;\n}\nnav {\n  min-height: 10vh !important;\n  border-bottom: 1px solid #e4e5e6;\n  margin-bottom: 10px;\n  padding-top: 10px;\n}\n.nav-right {\n  padding-top: 5px;\n}\ninput[type=submit] {\n  padding: 0;\n  background: #00A699;\n  color: white;\n  border: 0 none;\n  cursor: pointer;\n  -webkit-border-radius: 0;\n  border-radius: 0;\n}\nfooter {\n  min-height: 30px !important;\n  padding: 10px;\n  margin-top: 5px;\n  background-color: #EFF0F1;\n  text-align: center;\n}\n#filters {\n  font-size: 90%;\n  padding-bottom: 15px;\n}\n#filters select {\n  width: 115px;\n}\nstrong {\n  color: #55595c;\n  font-weight: 900;\n}\n#guests li {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 10px;\n  padding: 5px 10px 0;\n  background-color: #EFF0F1;\n}\n#guests li:hover {\n  background-color: #e4e5e6;\n}\n.nameTag {\n  float: right;\n  background-color: #f0ad4e;\n  margin: 5px;\n  padding: 0 5px;\n  text-transform: uppercase;\n  font-size: 70%;\n  font-weight: bold;\n  color: #f7f5f5;\n}\n.nameTag.confirmed {\n  background-color: #00a699;\n}\n.nameTag.cancelled {\n  background-color: #800000;\n}\n.nameTag.AirBnB {\n  background-color: #FF5A5F;\n}\n.nameTag.HomeAway {\n  background-color: #0080FF;\n}\n.photo {\n  width: 150px;\n  height: 150px;\n  background-size: cover;\n}\nul {\n  padding: 0;\n}\nli {\n  list-style: none;\n}\n.formLabel {\n  width: 80px;\n  float: left;\n}\n#details,\n#profile,\n#newGuest {\n  border-left: 1px dashed #ddd;\n  min-height: 80vh;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <title>User Directory</title>\n  <meta name=\"author\" content=\"Sergio Gomez\">\n  <meta name=\"description\" content=\"Angular & Boostrap Guest Calendar\">\n  <link rel=\"icon\" type=\"image/png\" href=\"img/giocodes.png\" />\n  <style>\n  @import url('https://fonts.googleapis.com/css?family=Heebo:100');\n  </style>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js\"></script>\n  <!-- ========================================= -->\n  <!-- Stylesheet applied with LESS on bundle.js -->\n  <!-- ========================================= -->\n</head>\n<!-- using 'data-ng' on Angular directives to comply W3C validation -->\n\n<body data-ng-app=\"gcAPP\" data-ng-controller=\"MainCtrl\">\n  <!-- ================= -->\n  <!-- Navbar            -->\n  <!-- ================= -->\n  <nav class=\"col-xs-12\">\n    <div class=\"col-sm-8 row\">\n      <h1>Guest Calendar</h1>\n    </div>\n    <div class=\"col-sm-4 nav-right\">\n      <input type=\"text\" placeholder=\"Search\" data-ng-model=\"guestSearch\">\n      <a href=\"\" data-ng-click=\"showAddGuest = true ; showProfile = false\">Add Guest</a>\n    </div>\n  </nav>\n  <!-- ================= -->\n  <!-- Main Wrapper      -->\n  <!-- ================= -->\n  <main class=\"col-sm-12\">\n    <section id=\"filters\" class=\"col-sm-12\">\n      <!-- Calendar -->\n      <div id=\"calendar\">\n        From\n        <input type=\"date\" data-ng-model=\"moveIn.value\" data-ng-change=\"applyFilters()\" /> To\n        <input type=\"date\" data-ng-model=\"moveOut.value\" data-ng-change=\"applyFilters()\" />\n        <!-- Property Filter -->\n        <select name=\"propertyFilter\" data-ng-model=\"propertyFilter\" data-ng-options=\"value for (key,value) in filters.properties\" data-ng-change=\"applyFilters()\">\n          <option value=\"\">All Properties</option>\n        </select>\n        <!-- Source Filter -->\n        <select name=\"sourceFilter\" data-ng-model=\"sourceFilter\" data-ng-options=\"value for (key,value) in filters.source\" data-ng-change=\"applyFilters()\">\n          <option value=\"\">All Sources</option>\n        </select>\n        <!-- Status Filter -->\n        <select name=\"statFilter\" data-ng-model=\"statusFilter\" data-ng-options=\"value for (key,value) in filters.status\" data-ng-change=\"applyFilters()\">\n          <option value=\"\">All Status</option>\n        </select>\n    </section>\n    </div>\n    <!-- ================= -->\n    <!-- Guests Component  -->\n    <!-- ================= -->\n    <section id=\"guests\" class=\"col-sm-8\">\n      <div id=\"properties\" data-ng-repeat=\"(prop,value) in filters.properties | filter : propertyFilter || undefined\">\n        <h3>{{value}}</h3>\n        <ul>\n          <li data-ng-show=\"guest.property == value\" data-ng-repeat=\"guest in filteredGuests | filter : guestSearch\" data-ng-click=\"updateSelectedGuest(guest)\">\n            <span class=\"nameTag {{guest.status}}\"> {{guest.status}} </span>\n            <span class=\"nameTag {{guest.source}}\"> {{guest.source}} </span>\n            <p><strong>{{guest.name}}</strong> <span>{{guest.rate | currency}}</span>\n              <br>\n              <span>{{guest['move-in'] | date}}</span> | <span>{{guest['move-out'] | date}}</span>\n            </p>\n          </li>\n        </ul>\n      </div>\n    </section>\n    <!-- ================= -->\n    <!-- Collection & Fees -->\n    <!-- ================= -->\n    <section data-ng-hide=\"showAddGuest || showProfile\" id=\"details\" class=\"col-sm-4\">\n      <h3>Collection & Fees</h3>\n      <h4><span>{{filteredGuests.length}}</span> Guests</h4>\n      <!-- {{moveIn.value == null || moveIn.value == undefined}} -->\n      <p>\n        <span data-ng-show=\"moveIn.value != null || moveIn.value != undefined\">\n        <strong>{{moveIn.value | date:'MMMM-dd'}}</strong>\n        </span>\n        <span data-ng-show=\"moveOut.value != null || moveOut.value != undefined\">\n          to <strong>{{moveOut.value | date:'MMMM-dd'}}</strong></span>\n      </p>\n      <ul>\n        <li data-ng-repeat=\"(property,value) in collected\">\n          <p><strong>{{property}}</strong> <span>{{value.rates | currency }}</span></p>\n        </li>\n      </ul>\n      <hr>\n      <p><strong>Total Collected</strong> <span>{{total | currency }}</span></p>\n      <hr>\n      <h4><strong>Total Fees</strong> <span>{{total * .75 | currency }}</span></h4>\n    </section>\n    <!-- ================= -->\n    <!-- Profile COMPONENT -->\n    <!-- ================= -->\n    <section data-ng-show=\"showProfile\" id=\"profile\" class=\"col-sm-4\">\n      <a href=\"#\" data-ng-click=\"showProfile = false\" style=\"float:right\">[X]</a href=\"#\">\n      <h3>Guest Profile</h3>\n      <div class=\"col-xs-6 photo\" style=\"background-image: url('http://i.pravatar.cc/500?u={{selectedGuest.name}}')\"></div>\n      <div class=\"col-xs-6\">\n        <h2><strong>{{selectedGuest.name}}</strong></h2>\n        <p>{{selectedGuest.email ? selectedGuest.email : 'name@email.com'}}</p>\n        <p>{{selectedGuest.phone ? selectedGuest.phone : '(605)1234567'}}</p>\n      </div>\n      <div id=\"stays\" class=\"col-xs-12\">\n      <hr>\n        <h3>Stays</h3>\n        <h4><strong>{{selectedGuest.property}}</strong></h4>\n        <p>{{calcDays(selectedGuest)}} days\n        <span class=\"nameTag {{selectedGuest.status}}\">{{selectedGuest.status}}</span>\n        <span class=\"nameTag {{selectedGuest.source}}\">{{selectedGuest.source}}</span>\n        </p>\n        <p><strong>{{selectedGuest['move-in'] | date}}</strong> to <strong>{{selectedGuest['move-out'] | date}}</strong></p>\n        <h4>Rate: {{selectedGuest.rate | currency}}</h4>\n      </div>\n    </section>\n    <!-- =================== -->\n    <!-- New Guest COMPONENT -->\n    <!-- =================== -->\n    <section data-ng-show=\"showAddGuest\" id=\"newGuest\" class=\"col-sm-4\">\n      <a href=\"#\" data-ng-click=\"showAddGuest = false\" style=\"float:right\">[X]</a href=\"#\">\n      <h3>Add Guest</h3>\n      <div class=\"col-xs-6 photo\" style=\"background-image: url('img/photo.jpg')\"></div>\n      <form novalidate class=\"simple-form\">\n        <div class=\"col-xs-6\">\n          <input type=\"text\" data-ng-model=\"newGuest.name\" placeholder=\"Name\" />\n          <input type=\"email\" data-ng-model=\"newGuest.email\" placeholder=\"email\" />\n          <input type=\"text\" data-ng-model=\"newGuest.phone\" placeholder=\"phone\" />\n        </div>\n        <div id=\"stays\" class=\"col-xs-12\">\n          <h3>Stays</h3>\n          <div class=\"formLabel\">Property</div> <select name=\"propertySelect\" data-ng-model=\"newGuest.property\" data-ng-options=\"value for (key,value) in filters.properties\">\n            <option value=\"\">Select Properties</option>\n          </select> <br>\n          <div class=\"formLabel\">Source</div> <select name=\"sourceSelect\" data-ng-model=\"newGuest.source\" data-ng-options=\"value for (key,value) in filters.source\">\n            <option value=\"\">Select Source</option>\n          </select><br>\n          <div class=\"formLabel\">Status</div> <select name=\"statSelect\" data-ng-model=\"newGuest.status\" data-ng-options=\"value for (key,value) in filters.status\"></select><br>\n          <div class=\"formLabel\">From</div> <input type=\"date\" data-ng-model=\"newGuest.moveIn\" /> <br>\n          <div class=\"formLabel\">To</div> <input type=\"date\" data-ng-model=\"newGuest.moveOut\" /><br>\n            <div class=\"formLabel\">Rate</div>\n              <input type=\"number\" data-ng-model=\"newGuest.rate\" placeholder=\"$00.00\" />\n        <input type=\"submit\" data-ng-click=\"addNewGuest(newGuest)\" value=\"Save\" />\n        </div>\n      </form>\n    </section>\n  </main>\n  <footer class=\"col-xs-12\">\n    <p>View source on <a href=\"https://github.com/giocodes/\">GitHub</a></p>\n      </footer>\n      <!-- /container's end -->\n      <!-- ================================================ -->\n      <!-- jQuery and Tether are Bootstrap 4 dependencies   -->\n      <!-- ================================================ -->\n      <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js\"></script>\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js\"></script>\n      <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js\"></script>\n      <!-- 📝 here's where all the magic happens -->\n      <script src=\"js/main.js\"></script>\n      <!-- 📝 bundle.js is the LESS preprocesor output file for styles -->\n      <script src=\"js/bundle.js\"></script>\n</body>\n\n</html>\n"

/***/ }
/******/ ]);