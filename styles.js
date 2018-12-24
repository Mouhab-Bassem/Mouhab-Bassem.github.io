(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nbody, html {\n    height: 100%;\n    background-color: black;\n    scroll-behavior: smooth;\n}\n* {\n    box-sizing: border-box;\n}\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n    background: black; \n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: #333; \n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #4c4c4c; \n}\nh1, h2, h3, h4, h5, h6, p, span {\n    color: floralwhite;\n}\n.page_intro {\n    height: calc(100% - 56px);\n    padding: 0px;\n}\n.home_container {\n    height: 100%;\n    -webkit-animation-name: slideDown;\n            animation-name: slideDown;\n    -webkit-animation-duration: 0.3s;\n            animation-duration: 0.3s;\n}\n@-webkit-keyframes slideDown {\n    from{-webkit-transform: translateY(-32px);transform: translateY(-32px)}\n    to{-webkit-transform: translateY(0px);transform: translateY(0px)}\n}\n@keyframes slideDown {\n    from{-webkit-transform: translateY(-32px);transform: translateY(-32px)}\n    to{-webkit-transform: translateY(0px);transform: translateY(0px)}\n}\n.intro_swiper {\n    height: 100%;\n}\n.swiper-pagination-bullet-active {\n    background: tomato !important;\n}\n.swiper-pagination-bullet {\n    background: tomato !important;\n}\n.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand {\n    color: white;\n}\n.bg-light {\n    background-color: #000000 !important;\n}\n.navbar-light .navbar-toggler-icon {\n    background-image: url('menuicon.png');\n  }\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\n      color: tomato;\n  }\n.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {\n      color: white;\n  }\n.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {\n      color: tomato;\n  }\n.swiper-container {\n      width: 100%;\n      height: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRCxXQUFXO0FBQ1g7SUFDSSxXQUFXO0NBQ2Q7QUFFRCxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7Q0FDckI7QUFFRCxZQUFZO0FBQ1o7SUFDSSxpQkFBaUI7Q0FDcEI7QUFFRCxxQkFBcUI7QUFDckI7SUFDSSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGlDQUF5QjtZQUF6Qix5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLEtBQUsscUNBQTRCLEFBQTVCLDRCQUE0QixDQUFDO0lBQ2xDLEdBQUcsbUNBQTBCLEFBQTFCLDBCQUEwQixDQUFDO0NBQ2pDO0FBSEQ7SUFDSSxLQUFLLHFDQUE0QixBQUE1Qiw0QkFBNEIsQ0FBQztJQUNsQyxHQUFHLG1DQUEwQixBQUExQiwwQkFBMEIsQ0FBQztDQUNqQztBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLHFDQUFxQztDQUN4QztBQUNEO0lBQ0ksc0NBQW9EO0dBQ3JEO0FBR0Q7TUFDSSxjQUFjO0dBQ2pCO0FBQ0Q7TUFDSSxhQUFhO0dBQ2hCO0FBQ0Q7TUFDSSxjQUFjO0dBQ2pCO0FBQ0Q7TUFDSSxZQUFZO01BQ1osYUFBYTtHQUNoQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmJvZHksIGh0bWwge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDVweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrOyBcbn1cbiBcbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogIzMzMzsgXG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzRjNGM0YzsgXG59XG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBzcGFuIHtcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XG59XG4ucGFnZV9pbnRybyB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4uaG9tZV9jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVEb3duO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgICBmcm9te3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzJweCl9XG4gICAgdG97dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCl9XG59XG4uaW50cm9fc3dpcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdG9tYXRvICFpbXBvcnRhbnQ7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICBiYWNrZ3JvdW5kOiB0b21hdG8gIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmssIC5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmJnLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL21lbnVpY29uLnBuZ1wiKTtcbiAgfVxuICBcbiAgXG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XG4gICAgICBjb2xvcjogdG9tYXRvO1xuICB9XG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZDpmb2N1cywgLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5hY3RpdmU+Lm5hdi1saW5rLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUsIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLnNob3csIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLnNob3c+Lm5hdi1saW5rIHtcbiAgICAgIGNvbG9yOiB0b21hdG87XG4gIH1cbiAgLnN3aXBlci1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\AngularLearn\movies\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map