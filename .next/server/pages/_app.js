module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/nouislider/distribute/nouislider.css":
/*!***********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nouislider_distribute_nouislider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider/distribute/nouislider.css */ "./node_modules/nouislider/distribute/nouislider.css");
/* harmony import */ var nouislider_distribute_nouislider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider_distribute_nouislider_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simple-react-lightbox */ "simple-react-lightbox");
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_styles_chart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/styles/chart.css */ "./public/styles/chart.css");
/* harmony import */ var _public_styles_chart_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_styles_chart_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_styles_colors_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/styles/colors.css */ "./public/styles/colors.css");
/* harmony import */ var _public_styles_colors_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_styles_colors_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_styles_custom_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/styles/custom.css */ "./public/styles/custom.css");
/* harmony import */ var _public_styles_custom_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_styles_custom_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_styles_print_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/styles/print.css */ "./public/styles/print.css");
/* harmony import */ var _public_styles_print_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_styles_print_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_styles_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/styles/style.css */ "./public/styles/style.css");
/* harmony import */ var _public_styles_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_styles_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_styles_wizard_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/styles/wizard.css */ "./public/styles/wizard.css");
/* harmony import */ var _public_styles_wizard_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_styles_wizard_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_layouts_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/layouts/Layout */ "./src/layouts/Layout.js");
/* harmony import */ var _src_redux_action_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/redux/action/utils */ "./src/redux/action/utils.js");
/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/redux/store */ "./src/redux/store.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // redux


 // Css style







 // action




function MyApp({
  Component,
  pageProps
}) {
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  const {
    0: pages,
    1: setPages
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    Object(_src_redux_action_utils__WEBPACK_IMPORTED_MODULE_13__["bodyArt"])();
    setDoc(document);
    setPages(window.location.pathname);
    Object(_src_redux_action_utils__WEBPACK_IMPORTED_MODULE_13__["resizeWindow"])();
    setPages(window.location.pathname);
    window.addEventListener("resize", _src_redux_action_utils__WEBPACK_IMPORTED_MODULE_13__["resizeWindow"]);
    return () => window.removeEventListener("resize", _src_redux_action_utils__WEBPACK_IMPORTED_MODULE_13__["resizeWindow"]);
  }, [pages]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: _src_redux_store__WEBPACK_IMPORTED_MODULE_14__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Uena - Restaurant Admin Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/favicon.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), pages && window.location.pathname.includes("pages") ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_layouts_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/styles/chart.css":
/*!*********************************!*\
  !*** ./public/styles/chart.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/colors.css":
/*!**********************************!*\
  !*** ./public/styles/colors.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/custom.css":
/*!**********************************!*\
  !*** ./public/styles/custom.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/print.css":
/*!*********************************!*\
  !*** ./public/styles/print.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/style.css":
/*!*********************************!*\
  !*** ./public/styles/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/styles/wizard.css":
/*!**********************************!*\
  !*** ./public/styles/wizard.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/firebaseConfig.js":
/*!*******************************!*\
  !*** ./src/firebaseConfig.js ***!
  \*******************************/
/*! exports provided: auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);


let app;
app = !firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length && firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp({
  apiKey: "AIzaSyD-cUa8H0rV9aeT_bMFUlPsWx5zGe5TBbo",
  authDomain: "uenareact.firebaseapp.com",
  projectId: "uenareact",
  storageBucket: "uenareact.appspot.com",
  messagingSenderId: "1046830238584",
  appId: "1:1046830238584:web:0b7b4b53bb9650977f168d",
  measurementId: "G-W86K7QM5P9"
});
const auth = app && app.auth();
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/layouts/Demos.js":
/*!******************************!*\
  !*** ./src/layouts/Demos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "react-perfect-scrollbar");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/action/themeAction */ "./src/redux/action/themeAction.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\Demos.js";






function Demo({
  demos,
  demoAction,
  activeDemo
}) {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `dz-demo-panel ${show ? "show" : ""}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-close",
      onClick: () => setShow(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "dz-demo-trigger",
        onClick: () => setShow(true),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "las la-tint"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "dz-demo-inner",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary btn-sm px-2 py-1 mb-3",
          onClick: "deleteAllCookie()",
          children: "Delete All Cookie"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "dz-demo-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Select A Demo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "dz-demo-close",
            onClick: () => setShow(false),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "las la-times"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "dz-demo-content ps ps--active-y",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "dz-wrapper",
          children: demos && demos.map(demo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `overlay-bx rounded-lg dz-demo-bx demo-${demo.id === activeDemo ? "active" : ""}`,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "overlay-wrapper rounded-lg",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: demo.image,
                  alt: "",
                  className: "w-100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "overlay-layer",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: "",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "btn c-pointer dz_theme_demo btn-secondary btn-sm mr-2",
                    onClick: () => demoAction(demo.id, "ltr"),
                    children: "Default"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 23
                }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  href: "",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "btn c-pointer dz_theme_demo_rtl btn-info btn-sm",
                    onClick: () => demoAction(demo.id, "rtl"),
                    children: "RTL Version"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "text-black",
              style: {
                textTransform: "capitalize"
              },
              children: demo.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 19
            }, this)]
          }, demo.id, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

const mapStateToProps = state => ({
  demos: state.theme.demos,
  activeDemo: state.theme.activeDemo
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  demoAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["demoAction"]
})(Demo));

/***/ }),

/***/ "./src/layouts/Footer.js":
/*!*******************************!*\
  !*** ./src/layouts/Footer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\Footer.js";

const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "footer",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "copyright",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Copyright \xA9 Designed & Developed by", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://dexignzone.com/",
          target: "_blank",
          children: "DexignZone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, undefined), " ", "2021"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/layouts/Layout.js":
/*!*******************************!*\
  !*** ./src/layouts/Layout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/action/auth */ "./src/redux/action/auth.js");
/* harmony import */ var _Demos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Demos */ "./src/layouts/Demos.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./src/layouts/Footer.js");
/* harmony import */ var _header_chatbox_ChatBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/chatbox/ChatBox */ "./src/layouts/header/chatbox/ChatBox.js");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/Header */ "./src/layouts/header/Header.js");
/* harmony import */ var _header_NavHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/NavHeader */ "./src/layouts/header/NavHeader.js");
/* harmony import */ var _PreLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PreLoader */ "./src/layouts/PreLoader.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Settings */ "./src/layouts/Settings.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Sidebar */ "./src/layouts/Sidebar.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\Layout.js";













const Layout = ({
  children,
  getUser,
  user
}) => {
  const {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setHeight(window.screen.height - 100);
    getUser();
    setActive(document.querySelectorAll(".metismenu a") ? true : false);

    if (!user) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace("/pages/login1");
    }
  }, [user]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: !active ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PreLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "main-wrapper",
      className: "show",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header_NavHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header_chatbox_ChatBox__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content-body",
        style: {
          minHeight: height
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid",
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Demos__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Settings__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  user: state.auth.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getUser: _redux_action_auth__WEBPACK_IMPORTED_MODULE_4__["getUser"]
})(Layout));

/***/ }),

/***/ "./src/layouts/PreLoader.js":
/*!**********************************!*\
  !*** ./src/layouts/PreLoader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\PreLoader.js";

const PreLoader = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "preloader",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sk-three-bounce",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sk-child sk-bounce1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sk-child sk-bounce2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sk-child sk-bounce3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PreLoader);

/***/ }),

/***/ "./src/layouts/Settings.js":
/*!*********************************!*\
  !*** ./src/layouts/Settings.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/action/themeAction */ "./src/redux/action/themeAction.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\Settings.js";






function Setting({
  primaryAction,
  navigationHeaderAction,
  headerBgAction,
  sideBarBgAction,
  themeVersionAction,
  headerLayoutAction,
  headerPositionAction,
  sidebarStyleAction,
  sidebarPositionAction,
  containerAction,
  directionAction,
  typographyAction,
  theme
}) {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const overlayChack = value => {
    if (theme.layout === "horizontal" && value === "overlay") {
      alert("Sorry! Overlay is not possible in Horizontal layout.");
    } else if (theme.sidebarPosition === "fixed" && value === "modern" && theme.layout !== "horizontal") {
      alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.");
    } else {
      sidebarStyleAction(value);
    }
  };

  const layoutChack = value => {
    if (theme.sidebarStyle === "overlay" && value === "horizontal") {
      headerLayoutAction(value);
      sidebarStyleAction("full");
    } else {
      headerLayoutAction(value);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `sidebar-right ${show ? "show" : ""}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-overlay",
      onClick: () => setShow(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "sidebar-right-trigger wave-effect wave-effect-x",
        onClick: () => setShow(true),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fa fa-cog fa-spin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "sidebar-close-trigger",
        onClick: () => setShow(false),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "la-times las"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sidebar-right-inner",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Pick your style"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabContainer"], {
        defaultActiveKey: "tab1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-tabs",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
            as: "ul",
            className: "nav nav-tabs",
            role: "tablist",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Item, {
              as: "li",
              className: "nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
                as: "a",
                className: "nav-link c-pointer",
                eventKey: "tab1",
                "data-toggle": "tab",
                children: "Theme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Item, {
              as: "li",
              className: "nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
                as: "a",
                className: "nav-link c-pointer",
                eventKey: "tab2",
                "data-toggle": "tab",
                children: "Header"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Item, {
              as: "li",
              className: "nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
                as: "a",
                className: "nav-link c-pointer",
                eventKey: "tab3",
                "data-toggle": "tab",
                children: "Content"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabContent"], {
          className: "tab-content tab-content-default tabcontent-border",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
            className: "fade tab-pane",
            eventKey: "tab1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "admin-settings",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-12",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Background"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "p-0 bootstrap-select default-select",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "default-select form-control",
                      id: "theme_version",
                      name: "theme_version",
                      tabIndex: -98,
                      onChange: e => themeVersionAction(e.target.value),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "light",
                        children: "Light"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 133,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "dark",
                        children: "Dark"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 134,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "dropdown-menu ",
                      role: "combobox",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "inner show",
                        role: "listbox",
                        "aria-expanded": "false",
                        tabIndex: -1,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          className: "dropdown-menu inner show"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Primary Color"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      "data-placement": "top",
                      "data-toggle": "tooltip",
                      title: "Color 1",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_1",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_1",
                        onClick: () => primaryAction("color_1")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_1",
                        className: "bg-label-pattern"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 165,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_2",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_2",
                        onClick: () => primaryAction("color_2")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_3",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_3",
                        onClick: () => primaryAction("color_3")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_4",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_4",
                        onClick: () => primaryAction("color_4")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 193,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 201,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_5",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_5",
                        onClick: () => primaryAction("color_5")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_6",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_6",
                        onClick: () => primaryAction("color_6")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 223,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_7",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_7",
                        onClick: () => primaryAction("color_7")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 226,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_7"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 234,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_8",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_8",
                        onClick: () => primaryAction("color_8")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 237,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_8"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 245,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 236,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_9",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_9",
                        onClick: () => primaryAction("color_9")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 248,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_9"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 256,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_10",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_10",
                        onClick: () => primaryAction("color_10")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_10"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_11",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_11",
                        onClick: () => primaryAction("color_11")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 270,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_11"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_12",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_12",
                        onClick: () => primaryAction("color_12")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 281,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_12"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 289,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_13",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_13",
                        onClick: () => primaryAction("color_13")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 292,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_13"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 300,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_14",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_14",
                        onClick: () => primaryAction("color_14")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 303,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_14"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 311,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "primary_color_15",
                        name: "primary_bg",
                        type: "radio",
                        defaultValue: "color_15",
                        onClick: () => primaryAction("color_15")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 314,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "primary_color_15"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 322,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 313,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Navigation Header"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_1",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_1",
                        onClick: () => navigationHeaderAction("color_1")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 330,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_1",
                        className: "bg-label-pattern"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 338,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 329,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_2",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_2",
                        onClick: () => navigationHeaderAction("color_2")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 344,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 352,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 343,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_3",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_3",
                        onClick: () => navigationHeaderAction("color_3")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 355,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 363,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 354,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_4",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_4",
                        onClick: () => navigationHeaderAction("color_4")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 366,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 374,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 365,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_5",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_5",
                        onClick: () => navigationHeaderAction("color_5")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 377,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 385,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 376,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_6",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_6",
                        onClick: () => navigationHeaderAction("color_6")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 388,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 396,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 387,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_7",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_7",
                        onClick: () => navigationHeaderAction("color_7")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 399,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_7"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 407,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 398,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_8",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_8",
                        onClick: () => navigationHeaderAction("color_8")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 410,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_8"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 418,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 409,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_9",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_9",
                        onClick: () => navigationHeaderAction("color_9")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 421,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_9"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 429,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 420,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_10",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_10",
                        onClick: () => navigationHeaderAction("color_10")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 432,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_10"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 440,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 431,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_11",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_11",
                        onClick: () => navigationHeaderAction("color_11")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 443,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_11"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 451,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 442,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_12",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_12",
                        onClick: () => navigationHeaderAction("color_12")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 454,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_12"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 462,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 453,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_13",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_13",
                        onClick: () => navigationHeaderAction("color_13")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 465,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_13"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 473,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 464,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_14",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_14",
                        onClick: () => navigationHeaderAction("color_14")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 476,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_14"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 484,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 475,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "nav_header_color_15",
                        name: "navigation_header",
                        type: "radio",
                        defaultValue: "color_15",
                        onClick: () => navigationHeaderAction("color_15")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 487,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "nav_header_color_15"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 495,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 486,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 328,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 326,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Header"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 500,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_1",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_1",
                        onClick: () => headerBgAction("color_1")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 503,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_1",
                        className: "bg-label-pattern"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 511,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 502,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_2",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_2",
                        onClick: () => headerBgAction("color_2")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 517,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 525,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 516,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_3",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_3",
                        onClick: () => headerBgAction("color_3")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 528,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 536,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 527,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_4",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_4",
                        onClick: () => headerBgAction("color_4")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 539,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 547,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 538,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_5",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_5",
                        onClick: () => headerBgAction("color_5")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 550,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 558,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 549,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_6",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_6",
                        onClick: () => headerBgAction("color_6")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 561,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 569,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 560,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_7",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_7",
                        onClick: () => headerBgAction("color_7")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 572,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_7"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 580,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 571,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_8",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_8",
                        onClick: () => headerBgAction("color_8")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 583,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_8"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 591,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 582,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_9",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_9",
                        onClick: () => headerBgAction("color_9")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 594,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_9"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 602,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 593,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_10",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_10",
                        onClick: () => headerBgAction("color_10")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 605,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_10"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 613,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 604,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_11",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_11",
                        onClick: () => headerBgAction("color_11")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 616,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_11"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 624,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 615,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_12",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_12",
                        onClick: () => headerBgAction("color_12")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 627,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_12"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 635,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 626,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_13",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_13",
                        onClick: () => headerBgAction("color_13")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 638,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_13"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 646,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 637,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_14",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_14",
                        onClick: () => headerBgAction("color_14")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 649,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_14"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 657,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 648,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "header_color_15",
                        name: "header_bg",
                        type: "radio",
                        defaultValue: "color_15",
                        onClick: () => headerBgAction("color_15")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 660,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "header_color_15"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 668,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 659,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 501,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 499,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Sidebar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 673,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_1",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_1",
                        onClick: () => sideBarBgAction("color_1")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 676,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_1",
                        className: "bg-label-pattern"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 684,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 675,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_2",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_2",
                        onClick: () => sideBarBgAction("color_2")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 690,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 698,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 689,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_3",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_3",
                        onClick: () => sideBarBgAction("color_3")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 701,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 709,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 700,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_4",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_4",
                        onClick: () => sideBarBgAction("color_4")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 712,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 720,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 711,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_5",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_5",
                        onClick: () => sideBarBgAction("color_5")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 723,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 731,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 722,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_6",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_6",
                        onClick: () => sideBarBgAction("color_6")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 734,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 742,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 733,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_7",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_7",
                        onClick: () => sideBarBgAction("color_7")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 745,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_7"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 753,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 744,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_8",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_8",
                        onClick: () => sideBarBgAction("color_8")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 756,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_8"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 764,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 755,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_9",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_9",
                        onClick: () => sideBarBgAction("color_9")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 767,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_9"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 775,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 766,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_10",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_10",
                        onClick: () => sideBarBgAction("color_10")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 778,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_10"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 786,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 777,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_11",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_11",
                        onClick: () => sideBarBgAction("color_11")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 789,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_11"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 797,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 788,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_12",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_12",
                        onClick: () => sideBarBgAction("color_12")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 800,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_12"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 808,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 799,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_13",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_13",
                        onClick: () => sideBarBgAction("color_13")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 811,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_13"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 819,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 810,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_14",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_14",
                        onClick: () => sideBarBgAction("color_14")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 822,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_14"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 830,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 821,
                      columnNumber: 23
                    }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                        className: "chk-col-primary filled-in",
                        id: "sidebar_color_15",
                        name: "sidebar_bg",
                        type: "radio",
                        defaultValue: "color_15",
                        onClick: () => sideBarBgAction("color_15")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 833,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                        htmlFor: "sidebar_color_15"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 841,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 832,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 674,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 672,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
            className: "fade tab-pane",
            eventKey: "tab2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "admin-settings",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Layout"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 852,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bootstrap-select default-select",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "default-select form-control",
                      id: "theme_layout",
                      name: "theme_layout",
                      tabIndex: -98,
                      onChange: e => layoutChack(e.target.value),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "vertical",
                        children: "Vertical"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 861,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "horizontal",
                        children: "Horizontal"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 862,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 854,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "dropdown-menu ",
                      role: "combobox",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "inner show",
                        role: "listbox",
                        "aria-expanded": "false",
                        tabIndex: -1,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          className: "dropdown-menu inner show"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 871,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 865,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 864,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 853,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 851,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Header position"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 877,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bootstrap-select default-select ",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "default-select form-control",
                      id: "header_position",
                      name: "header_position",
                      tabIndex: -98,
                      onChange: e => headerPositionAction(e.target.value),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "static",
                        children: "Static"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 886,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "fixed",
                        children: "Fixed"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 887,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 879,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "dropdown-menu ",
                      role: "combobox",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "inner show",
                        role: "listbox",
                        "aria-expanded": "false",
                        tabIndex: -1,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          className: "dropdown-menu inner show"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 897,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 891,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 890,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 878,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 876,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Sidebar"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 903,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bootstrap-select default-select ",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "default-select form-control",
                      id: "sidebar_style",
                      name: "sidebar_style",
                      tabIndex: -98,
                      onChange: e => overlayChack(e.target.value),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "full",
                        children: "Full"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 912,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "mini",
                        children: "Mini"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 913,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "compact",
                        children: "Compact"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 914,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "modern",
                        children: "Modern"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 915,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "overlay",
                        children: "Overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 916,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "icon-hover",
                        children: "Icon-hover"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 917,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 905,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "dropdown-menu ",
                      role: "combobox",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "inner show",
                        role: "listbox",
                        "aria-expanded": "false",
                        tabIndex: -1,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          className: "dropdown-menu inner show"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 926,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 920,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 919,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 904,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 902,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Sidebar position"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 932,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bootstrap-select default-select",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "default-select form-control",
                      id: "sidebar_position",
                      name: "sidebar_position",
                      tabIndex: -98,
                      onChange: e => sidebarPositionAction(e.target.value),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "static",
                        children: "Static"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 941,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "fixed",
                        children: "Fixed"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 942,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 934,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "dropdown-menu ",
                      role: "combobox",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "inner show",
                        role: "listbox",
                        "aria-expanded": "false",
                        tabIndex: -1,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          className: "dropdown-menu inner show"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 951,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 945,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 944,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 933,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 931,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 850,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 849,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 848,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
            className: "fade tab-pane",
            eventKey: "tab3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "admin-settings",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Container"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 963,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bootstrap-select default-select",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "default-select form-control",
                      id: "container_layout",
                      name: "container_layout",
                      tabIndex: -98,
                      onChange: e => containerAction(e.target.value),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "wide",
                        children: "Wide"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 972,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "boxed",
                        children: "Boxed"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 973,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "wide-boxed",
                        children: "Wide Boxed"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 974,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 965,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "dropdown-menu ",
                      role: "combobox",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "inner show",
                        role: "listbox",
                        "aria-expanded": "false",
                        tabIndex: -1,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          className: "dropdown-menu inner show"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 983,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 977,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 976,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 964,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 962,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Direction"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 989,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: " bootstrap-select default-select ",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "default-select form-control",
                      id: "theme_direction",
                      name: "theme_direction",
                      tabIndex: -98,
                      onChange: e => directionAction(e.target.value),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "ltr",
                        children: "LTR"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 998,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "rtl",
                        children: "RTL"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 999,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 991,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "dropdown-menu ",
                      role: "combobox",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "inner show",
                        role: "listbox",
                        "aria-expanded": "false",
                        tabIndex: -1,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                          className: "dropdown-menu inner show"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1008,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1002,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1001,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 990,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 988,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-sm-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Body Font"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1014,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bootstrap-select default-select",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                      className: "default-select form-control",
                      id: "typography",
                      name: "typography",
                      tabIndex: -98,
                      onChange: e => typographyAction(e.target.value),
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "roboto",
                        children: "Roboto"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1023,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "poppins",
                        children: "Poppins"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1024,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "opensans",
                        children: "Open Sans"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1025,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                        value: "HelveticaNeue",
                        children: "HelveticaNeue"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1026,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1016,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1015,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1013,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 961,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 960,
              columnNumber: 15
            }, this), "aneTabPane", " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 959,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

const mapStateToProps = state => ({
  theme: state.theme
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  primaryAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["primaryAction"],
  navigationHeaderAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["navigationHeaderAction"],
  headerBgAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["headerBgAction"],
  sideBarBgAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["sideBarBgAction"],
  themeVersionAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["themeVersionAction"],
  headerLayoutAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["headerLayoutAction"],
  headerPositionAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["headerPositionAction"],
  sidebarStyleAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["sidebarStyleAction"],
  sidebarPositionAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["sidebarPositionAction"],
  containerAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["containerAction"],
  directionAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["directionAction"],
  typographyAction: _redux_action_themeAction__WEBPACK_IMPORTED_MODULE_5__["typographyAction"]
})(Setting));

/***/ }),

/***/ "./src/layouts/Sidebar.js":
/*!********************************!*\
  !*** ./src/layouts/Sidebar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metismenu_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metismenu/react */ "@metismenu/react");
/* harmony import */ var _metismenu_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metismenu_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "react-perfect-scrollbar");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\Sidebar.js";



 // import { sideBarActive } from "../redux/action/utils";

const Sidebar = () => {
  const {
    0: loveEmoji,
    1: setLoveEmoji
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: doc,
    1: setDoc
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setDoc(window); // sideBarActive(doc);
  }, [doc]); // sideBarActive(doc);

  let path = doc && doc.location.pathname;
  path = path && path.split("/");
  path = path && path[path.length - 1];
  let dashboard = ["", "index-dark", "orders-list", "order-detail", "customer-list", "analytics", "reviews"],
      app = ["apps/profile", "apps/post-details", "apps/email/compose", "apps/email/inbox", "apps/email/read", "apps/ecom/product/grid", "apps/ecom/product/list", "apps/ecom/product/order", "apps/ecom/checkout", "apps/ecom/invoice", "apps/ecom/customers", "apps/ecom/product/detail"],
      email = ["apps/email/compose", "apps/email/inbox", "apps/email/read"],
      shop = ["apps/ecom/product/grid", "apps/ecom/product/list", "apps/ecom/product/list", "apps/ecom/product/order", "apps/ecom/checkout", "apps/ecom/invoice", "apps/ecom/customers", "apps/ecom/product/detail"],
      charts = ["chart/rechart", "chart/apex", "chart/chartjs", "chart/chartist", "chart/sparkline"],
      bootstrap = ["ui/accordion", "ui/badge", "ui/alert", "ui/button", "ui/modal", "ui/button-group", "ui/list-group", "ui/media-object", "ui/card", "ui/carousel", "ui/dropdown", "ui/popover", "ui/progressbar", "ui/tab", "ui/typography", "ui/pagination", "ui/grid"],
      plugins = ["plugins/select2", "plugins/sweetalert", "plugins/toastr", "plugins/noui-slider", "plugins/jqvmap", "plugins/lightgallery"],
      widget = ["widget-basic"],
      forms = ["form/element", "form/wizard", "form/editor", "form/pickers", "form/validation"],
      table = ["table-bootstrap-basic", "table-datatable-basic"],
      pages = ["page-register", "page-login", "page-lock-screen", "page-error-400", "page-error-403", "page-error-404", "page-error-500", "page-error-503", "empty-page"],
      error = ["page-error-400", "page-error-403", "page-error-404", "page-error-500", "page-error-503"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "deznav",
    children: doc && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "deznav-scroll",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_metismenu_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "metismenu",
        id: "menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${dashboard.includes(path) ? "mm-active" : ""}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "has-arrow ai-icon c-pointer",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-025-dashboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "nav-text",
              children: "Dashboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "" ? "mm-active" : ""}`,
                  children: "Dashboard Light"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/index-dark",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "index-dark" ? "mm-active" : ""}`,
                  children: "Dashboard Dark"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/orders-list",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "orders-list" ? "mm-active" : ""}`,
                  children: "Orders list"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/order-detail",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "order-detail" ? "mm-active" : ""}`,
                  children: "Order Detail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/customer-list",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "customer-list" ? "mm-active" : ""}`,
                  children: "Customers"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/analytics",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "analytics" ? "mm-active" : ""}`,
                  children: "Analytics"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/reviews",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "reviews" ? "mm-active" : ""}`,
                  children: "Reviews"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${app.includes(path) ? "mm-active" : ""}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "has-arrow ai-icon c-pointer",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-050-info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "nav-text",
              children: "Apps"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/apps/profile",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "apps/profile" ? "mm-active" : ""}`,
                  children: "Profile"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/apps/post-details",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "apps/post-details" ? "mm-active" : ""}`,
                  children: "Post Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: `${email.includes(path) ? "mm-active" : ""}`,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "has-arrow c-pointer",
                "aria-expanded": "false",
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                "aria-expanded": "false",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/email/compose",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/email/compose" ? "mm-active" : ""}`,
                      children: "Compose"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 220,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/email/inbox",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/email/inbox" ? "mm-active" : ""}`,
                      children: "Inbox"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/email/read",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/email/read" ? "mm-active" : ""}`,
                      children: "Read"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: `${shop.includes(path) ? "mm-active" : ""}`,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "has-arrow c-pointer",
                "aria-expanded": "false",
                children: "Shop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                "aria-expanded": "false",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/ecom/product-grid",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/ecom/product-grid" ? "mm-active" : ""}`,
                      children: "Product Grid"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 263,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/ecom/product-list",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/ecom/product-list" ? "mm-active" : ""}`,
                      children: "Product List"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/ecom/product-detail",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/ecom/product-detail" ? "mm-active" : ""}`,
                      children: "Product Details"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 286,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/ecom/product-order",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/ecom/product-order" ? "mm-active" : ""}`,
                      children: "Order"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/ecom/checkout",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/ecom/checkout" ? "mm-active" : ""}`,
                      children: "Checkout"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 312,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/ecom/invoice",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/ecom/invoice" ? "mm-active" : ""}`,
                      children: "Invoice"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 323,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/apps/ecom/customers",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      className: `${path === "apps/ecom/customers" ? "mm-active" : ""}`,
                      children: "Customers"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 333,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 332,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${charts.includes(path) ? "mm-active" : ""}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "has-arrow ai-icon c-pointer",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-041-graph"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "nav-text",
              children: "Charts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/chart/rechart",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "chart/rechart" ? "mm-active" : ""}`,
                  children: "Rechart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/chart/chartjs",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "chart/chartjs" ? "mm-active" : ""}`,
                  children: "Chartjs"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/chart/apex",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "chart/apex" ? "mm-active" : ""}`,
                  children: "ApexChart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/chart/chartist",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "chart/chartist" ? "mm-active" : ""}`,
                  children: "Chartist"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 387,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 386,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/chart/sparkline",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "chart/sparkline" ? "mm-active" : ""}`,
                  children: "Sparkline"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 397,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${bootstrap.includes(path) ? "mm-active" : ""}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "has-arrow ai-icon c-pointer",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-086-star"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 411,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "nav-text",
              children: "Bootstrap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 412,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/accordion",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/accordion" ? "mm-active" : ""}`,
                  children: "Accordion"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 417,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 416,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 415,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/alert",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/alert" ? "mm-active" : ""}`,
                  children: "Alert"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 428,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 427,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/badge",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/badge" ? "mm-active" : ""}`,
                  children: "Badge"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 435,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 434,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/button",
                children: "Button"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 440,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/modal",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/button" ? "mm-active" : ""}`,
                  children: "Modal"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 445,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/button-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/button-group" ? "mm-active" : ""}`,
                  children: "Button Group"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 452,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 451,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 450,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/list-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/list-group" ? "mm-active" : ""}`,
                  children: "List Group"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 463,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 462,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 461,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/media-object",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/media-object" ? "mm-active" : ""}`,
                  children: "Media Object"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 474,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 473,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/card",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/card" ? "mm-active" : ""}`,
                  children: "Cards"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 485,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 484,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 483,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/dropdown",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/dropdown" ? "mm-active" : ""}`,
                  children: "Dropdown"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 492,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 491,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 490,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/popover",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/popover" ? "mm-active" : ""}`,
                  children: "Popover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 501,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 500,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 499,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/progressbar",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/progressbar" ? "mm-active" : ""}`,
                  children: "Progressbar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 510,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 509,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 508,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/tab",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/tab" ? "mm-active" : ""}`,
                  children: "Tab"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 521,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 520,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 519,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/typography",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/typography" ? "mm-active" : ""}`,
                  children: "Typography"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 528,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 527,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 526,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/pagination",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/pagination" ? "mm-active" : ""}`,
                  children: "Pagination"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 539,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 538,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 537,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/ui/grid",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "ui/grid" ? "mm-active" : ""}`,
                  children: "Grid"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 550,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 549,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 548,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${plugins.includes(path) ? "mm-active" : ""}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "has-arrow ai-icon c-pointer",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-045-heart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 559,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "nav-text",
              children: "Plugins"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 560,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 558,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/plugins/select2",
                children: "Select 2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 564,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 563,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/plugins/noui-slider",
                children: "Noui Slider"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 570,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 569,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/plugins/sweetalert",
                children: "Sweet Alert"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 573,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 572,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/plugins/toastr",
                children: "Toastr"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 576,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 575,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/plugins/jqvmap",
                children: "Jqv Map"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 579,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 578,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/plugins/lightgallery",
                children: "Light Gallery"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 582,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 581,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 562,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 557,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${widget.includes(path) ? "mm-active" : ""}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/widget-basic",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "ai-icon",
              "aria-expanded": "false",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "flaticon-013-checkmark"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 590,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "nav-text",
                children: "Widget"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 591,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 589,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 588,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${forms.includes(path) ? "mm-active" : ""}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "has-arrow ai-icon c-pointer",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-072-printer"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 597,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "nav-text",
              children: "Forms"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 598,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 596,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/form/element",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "/form/element" ? "mm-active" : ""}`,
                  children: "Form Elements"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 603,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 602,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 601,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/form/wizard",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "/form/wizard" ? "mm-active" : ""}`,
                  children: "Wizard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 614,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 613,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 612,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/form/editor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "/form/editor" ? "mm-active" : ""}`,
                  children: "Summernote"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 625,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 624,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 623,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/form/pickers",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "/form/pickers" ? "mm-active" : ""}`,
                  children: "Pickers"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 636,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 635,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 634,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/form/validation",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "/form/validation" ? "mm-active" : ""}`,
                  children: "Formik Validate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 647,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 646,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 645,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 600,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${table.includes(path) ? "mm-active" : ""}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "has-arrow ai-icon c-pointer",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-043-menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 660,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "nav-text",
              children: "Table"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 661,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 659,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/table/bootstrap",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "/table/bootstrap" ? "mm-active" : ""}`,
                  children: "Bootstrap"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 666,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 665,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 664,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/table/datatable",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "/table/datatable" ? "mm-active" : ""}`,
                  children: "Datatable"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 677,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 676,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 675,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/table/react",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "/table/react" ? "mm-active" : ""}`,
                  children: "React Table"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 688,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 687,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 686,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 658,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: `${pages.includes(path) ? "mm-active" : ""}`,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "has-arrow ai-icon c-pointer",
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "flaticon-022-copy"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 701,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "nav-text",
              children: "Pages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 702,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 700,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            "aria-expanded": "false",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "has-arrow c-pointer",
                "aria-expanded": "false",
                children: "Error"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 715,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                "aria-expanded": "false",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/pages/error/400",
                    children: "Error 400"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 720,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 719,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/pages/error/403",
                    children: "Error 403"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 723,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 722,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/pages/error/404",
                    children: "Error 404"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 726,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 725,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/pages/error/500",
                    children: "Error 500"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 729,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 728,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "/pages/error/503",
                    children: "Error 503"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 732,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 731,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 718,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 714,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/pages/lock-screen",
                children: "Lock Screen"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 737,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 736,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/empty-page",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: `${path === "empty-page" ? "mm-active" : ""}`,
                  children: "Empty Page"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 741,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 740,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 739,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 704,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 699,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "copyright",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "Uena Admin Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 753,
            columnNumber: 15
          }, undefined), " \xA9 ", new Date().getFullYear(), " ", "All Rights Reserved"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 752,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Made with", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: `${loveEmoji ? "heart heart-blast" : "heart"}`,
            onClick: () => setLoveEmoji(!loveEmoji)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 758,
            columnNumber: 15
          }, undefined), " ", "by DexignZone"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 756,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 751,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/layouts/header/Header.js":
/*!**************************************!*\
  !*** ./src/layouts/header/Header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "react-perfect-scrollbar");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_action_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/action/utils */ "./src/redux/action/utils.js");
/* harmony import */ var _chatbox_ChatBoxicon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatbox/ChatBoxicon */ "./src/layouts/header/chatbox/ChatBoxicon.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Notification */ "./src/layouts/header/Notification.js");
/* harmony import */ var _Notification2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Notification2 */ "./src/layouts/header/Notification2.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Profile */ "./src/layouts/header/Profile.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\Header.js";











const Header = ({
  title,
  getHeaderData,
  searchData
}) => {
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getHeaderData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header-content",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: "navbar navbar-expand",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "collapse navbar-collapse justify-content-between",
          children: [title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header-left",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "dashboard_bar",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "navbar-nav header-right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
              as: "li",
              className: "nav-item position-relative",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
                variant: "",
                as: "a",
                className: "i-false p-0 input-group search-area d-xl-inline-flex d-none",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Search here...",
                  onChange: e => setSearchText(e.target.value)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "input-group-append",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "input-group-text",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "flaticon-381-search-2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
                alignRight: true,
                className: "mt-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  id: "DZ_W_Notification1",
                  className: "widget-media dz-scroll p-2 ",
                  style: {
                    maxHeight: 280
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "search-result-bar timeline",
                    children: searchData && searchData.filter(page => page.name.toLowerCase().includes(searchText) && page).length == 0 ? "No search data found" : searchData && searchData.filter(page => page.name.toLowerCase().includes(searchText) && page).map((page, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "pb-2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        href: page.pathName,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          style: {
                            textTransform: "capitalize"
                          },
                          children: page.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 70,
                          columnNumber: 35
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 33
                      }, undefined)
                    }, i, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 31
                    }, undefined))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Notification__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chatbox_ChatBoxicon__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Notification2__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

const mapSateToProps = state => ({
  title: state.utils.pageTitle,
  searchData: state.utils.searchData
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapSateToProps, {
  getHeaderData: _redux_action_utils__WEBPACK_IMPORTED_MODULE_6__["getHeaderData"]
})(Header));

/***/ }),

/***/ "./src/layouts/header/NavHeader.js":
/*!*****************************************!*\
  !*** ./src/layouts/header/NavHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\NavHeader.js";



const NavHeader = () => {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const toggleFun = () => {
    var aaa = document.querySelector("#main-wrapper");
    aaa.classList.toggle("menu-toggle");
    setActive(!active);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "nav-header",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "brand-logo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "logo-abbr",
          width: 64,
          height: 64,
          viewBox: "0 0 64 64",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
            width: 64,
            height: 64,
            rx: 2,
            fill: "#FFF0E4",
            className: "svg-logo-rect"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            className: "svg-logo-path",
            d: "M31.5785 19.6842C31.5785 22.0351 30.765 26.0526 29.1379 31.7368C27.5109 37.386 26.6973 41 26.6973 42.5789C26.6973 44.1228 27.378 44.8947 28.7395 44.8947C30.1341 44.8947 32.0268 43.8246 34.4176 41.6842C34.5172 39.8947 34.7995 37.7544 35.2644 35.2632C36.659 27.4386 38.3525 21.7719 40.3448 18.2632C42.3372 14.7544 44.6616 13 47.318 13C48.8787 13 50.0409 13.4912 50.8046 14.4737C51.6015 15.4211 52 16.6842 52 18.2632C52 23.2456 48.7791 29.9474 42.3372 38.3684C42.2375 39.7368 42.1877 41.1228 42.1877 42.5263C42.1877 45.4386 42.6526 46.8947 43.5824 46.8947C44.1469 46.8947 44.6284 46.8246 45.0268 46.6842L45.7739 48.6842C43.7152 50.2281 41.6564 51 39.5977 51C36.6092 51 34.8991 49.1579 34.4674 45.4737C30.4828 49.1579 27.0792 51 24.2567 51C22.5632 51 21.1852 50.4561 20.1226 49.3684C19.0932 48.2456 18.5785 46.6316 18.5785 44.5263C18.5785 43.2982 18.9604 41.3158 19.7241 38.5789C20.5211 35.807 20.9859 34.1754 21.1188 33.6842C15.7063 31.3333 13 28.0702 13 23.8947C13 21.0175 14.2618 18.4912 16.7854 16.3158C19.3091 14.1053 22.1149 13 25.2031 13C29.4534 13 31.5785 15.2281 31.5785 19.6842ZM22.0651 29.8947C23.2273 25.614 23.8084 22.4211 23.8084 20.3158C23.8084 18.2105 23.0945 17.1579 21.6667 17.1579C20.272 17.1579 18.9936 17.8246 17.8314 19.1579C16.6692 20.4912 16.0881 21.9649 16.0881 23.5789C16.0881 25.1579 16.6692 26.4912 17.8314 27.5789C18.9936 28.6316 20.4049 29.4035 22.0651 29.8947ZM49.0115 18.1579C49.0115 17.2105 48.6794 16.7368 48.0153 16.7368C46.5543 16.7368 44.8774 22.0702 42.9847 32.7368C44.4789 30.6667 45.857 28.193 47.1188 25.3158C48.3806 22.4035 49.0115 20.0175 49.0115 18.1579Z",
            fill: "#FF720D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "brand-title",
          children: "Uena"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "nav-control",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `hamburger ${active ? "is-active" : ""}`,
        onClick: () => toggleFun(),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "line"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "line"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "line"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavHeader);

/***/ }),

/***/ "./src/layouts/header/Notification.js":
/*!********************************************!*\
  !*** ./src/layouts/header/Notification.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "react-perfect-scrollbar");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_action_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/action/header */ "./src/redux/action/header.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\Notification.js";







const Notification = ({
  notificationFun,
  data
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    notificationFun();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    as: "li",
    className: "nav-item dropdown notification_dropdown",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
      variant: "",
      as: "a",
      className: "nav-link  ai-icon i-false c-pointer",
      role: "button",
      "data-toggle": "dropdown",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M14 1.16663C11.6793 1.16663 9.45374 2.0885 7.8128 3.72944C6.17186 5.37039 5.24999 7.59598 5.24999 9.91663V16.7416L3.31332 19.6583C3.08119 20.0162 2.94953 20.4299 2.9321 20.8562C2.91468 21.2824 3.01213 21.7055 3.21427 22.0811C3.41641 22.4568 3.71581 22.7712 4.08112 22.9915C4.44644 23.2118 4.86424 23.3298 5.29082 23.3333H22.7091C23.1385 23.3319 23.5594 23.2143 23.9274 22.9932C24.2954 22.772 24.5967 22.4554 24.7993 22.0769C25.002 21.6984 25.0986 21.2722 25.0787 20.8433C25.0589 20.4145 24.9234 19.9989 24.6866 19.6408L22.75 16.7416V9.91663C22.75 7.59598 21.8281 5.37039 20.1872 3.72944C18.5462 2.0885 16.3206 1.16663 14 1.16663Z",
          fill: "#636363"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M14 26.8333C14.7231 26.8325 15.4282 26.6077 16.0184 26.1899C16.6085 25.772 17.0548 25.1817 17.2958 24.4999H10.7042C10.9452 25.1817 11.3915 25.772 11.9816 26.1899C12.5718 26.6077 13.2769 26.8325 14 26.8333Z",
          fill: "#636363"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pulse-css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
      alignRight: true,
      className: "dropdown-menu dropdown-menu-right mt-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        id: "DZ_W_Notification1",
        className: "widget-media dz-scroll p-3 ",
        style: {
          height: 380
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "timeline",
          children: data && data.map(d => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "timeline-panel",
              children: [d.img ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "media mr-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
                  alt: "image",
                  width: 50,
                  height: 50,
                  src: d.img
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 23
              }, undefined) : d.profileText ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `media mr-2 media-${d.profileColor}`,
                children: d.profileText
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 23
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "media mr-2 media-success",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: `fa fa-${d.profileIcon}`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "media-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                  className: "mb-1",
                  children: "Dr sultads Send you Photo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                  className: "d-block",
                  children: "29 July 2020 - 02:26 PM"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 19
            }, undefined)
          }, d, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "all-notification",
        href: "#",
        children: ["See all notifications ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "ti-arrow-right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 33
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  data: state.header.notification
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  notificationFun: _redux_action_header__WEBPACK_IMPORTED_MODULE_6__["notificationFun"]
})(Notification));

/***/ }),

/***/ "./src/layouts/header/Notification2.js":
/*!*********************************************!*\
  !*** ./src/layouts/header/Notification2.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "react-perfect-scrollbar");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_action_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/action/header */ "./src/redux/action/header.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\Notification2.js";







const Notification2 = ({
  notificationFun2,
  data
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    notificationFun2();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    as: "li",
    className: "nav-item dropdown notification_dropdown",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
      as: "a",
      variant: "",
      className: "nav-link i-false c-pointer",
      "data-toggle": "dropdown",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: 26,
        height: 26,
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
          d: "M10.515 24.8942C11.2013 25.4995 12.0849 25.8336 13 25.8336C13.9151 25.8336 14.7987 25.4995 15.485 24.8942C18.4892 22.2517 25.5125 15.2751 25.8334 7.68005C25.9373 5.80349 25.2965 3.96171 24.0502 2.55489C22.804 1.14807 21.0529 0.289858 19.1775 0.16672C17.964 0.10879 16.7563 0.367679 15.6732 0.917932C14.5901 1.46819 13.6688 2.29086 13 3.30505C12.3342 2.28795 11.4135 1.46302 10.3296 0.912401C9.24579 0.361783 8.03662 0.10469 6.82252 0.16672C4.94711 0.289858 3.19606 1.14807 1.9498 2.55489C0.703537 3.96171 0.0627602 5.80349 0.166687 7.68005C0.48752 15.2751 7.51085 22.2517 10.515 24.8942Z",
          fill: "#636363"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pulse-css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
      alignRight: true,
      className: "dropdown-menu dropdown-menu-right mt-4",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        id: "DZ_W_TimeLine02",
        className: "widget-timeline dz-scroll style-1 ps ps--active-y p-3 height370",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "timeline",
          children: data && data.map(d => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `timeline-badge ${d.color}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "timeline-panel text-muted",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [d.time, " minutes ago"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                  className: "mb-0",
                  children: [d.title, " ", d.spacialText && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    className: `text-${d.spacialText.color}`,
                    children: d.spacialText.text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 27
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 23
                }, undefined), d.text && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "mb-0",
                  children: d.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 34
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 19
            }, undefined)]
          }, d, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  data: state.header.notification_2
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  notificationFun2: _redux_action_header__WEBPACK_IMPORTED_MODULE_6__["notificationFun2"]
})(Notification2));

/***/ }),

/***/ "./src/layouts/header/Profile.js":
/*!***************************************!*\
  !*** ./src/layouts/header/Profile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/action/auth */ "./src/redux/action/auth.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\Profile.js";






const Profile = ({
  logoutUser
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    as: "li",
    className: "nav-item dropdown header-profile",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
      as: "a",
      variant: "",
      className: "i-false nav-link c-pointer",
      role: "button",
      "data-toggle": "dropdown",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
        src: "/images/profile/pic1.jpg",
        height: 20,
        width: 20,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header-info",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "fs-20 font-w500",
          children: "Robertos Jr."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
          children: "Super Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
      alignRight: true,
      className: "dropdown-menu dropdown-menu-right mt-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/apps/profile",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "dropdown-item ai-icon",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            id: "icon-user1",
            xmlns: "http://www.w3.org/2000/svg",
            className: "text-primary",
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
              cx: 12,
              cy: 7,
              r: 4
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "ml-2",
            children: "Profile "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/apps/email/inbox",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "dropdown-item ai-icon",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            id: "icon-inbox",
            xmlns: "http://www.w3.org/2000/svg",
            className: "text-success",
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polyline", {
              points: "22,6 12,13 2,6"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "ml-2",
            children: "Inbox "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: () => logoutUser(),
          className: "dropdown-item ai-icon",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            id: "icon-logout",
            xmlns: "http://www.w3.org/2000/svg",
            className: "text-danger",
            width: 18,
            height: 18,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polyline", {
              points: "16 17 21 12 16 7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("line", {
              x1: 21,
              y1: 12,
              x2: 9,
              y2: 12
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "ml-2",
            children: "Logout "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, {
  logoutUser: _redux_action_auth__WEBPACK_IMPORTED_MODULE_5__["logoutUser"]
})(Profile));

/***/ }),

/***/ "./src/layouts/header/chatbox/AddUserModal.js":
/*!****************************************************!*\
  !*** ./src/layouts/header/chatbox/AddUserModal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/action/utils */ "./src/redux/action/utils.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\chatbox\\AddUserModal.js";





const AddUserModal = ({
  modal,
  modalChange,
  addUser
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: fileName,
    1: setFileName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      if (img.type == "image/jpeg" || img.type == "image/png") {
        setFileName(URL.createObjectURL(img));
        setError(false);
      } else {
        setError("Only select png and jpeg image .");
      }
    }
  };

  const onChnage = e => setName(e.target.value);

  const hendelSubmit = () => {
    let newUser = {
      active: true,
      name,
      img: fileName
    };

    if (name && fileName) {
      addUser(newUser);
      setError(false);
      modalChange();
      setName("");
      setFileName(null);
    } else {
      setError("All field are required .");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    show: modal,
    onHide: () => modalChange(),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "modal-content border-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "modal-title",
          children: "Add User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "close",
          "data-dismiss": "modal",
          onClick: () => modalChange(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\xD7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "modal-body",
        children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "alert alert-danger",
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: e => e.preventDefault(),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-black font-w600",
              children: ["Name ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "required",
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 22
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              name: "name",
              placeholder: "User Name",
              onChange: e => onChnage(e),
              value: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-black font-w600",
              children: ["Profile Image ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "required",
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 31
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "file",
              onChange: e => onImageChange(e),
              name: "img",
              className: "form-control"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "btn btn-danger light",
          "data-dismiss": "modal",
          onClick: () => modalChange(),
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => hendelSubmit(),
          type: "button",
          className: "btn btn-primary",
          children: "Add user"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, {
  addUser: _redux_action_utils__WEBPACK_IMPORTED_MODULE_4__["addUser"]
})(AddUserModal));

/***/ }),

/***/ "./src/layouts/header/chatbox/ChatBox.js":
/*!***********************************************!*\
  !*** ./src/layouts/header/chatbox/ChatBox.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "react-perfect-scrollbar");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/action/utils */ "./src/redux/action/utils.js");
/* harmony import */ var _AddUserModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddUserModal */ "./src/layouts/header/chatbox/AddUserModal.js");
/* harmony import */ var _MsgBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MsgBox */ "./src/layouts/header/chatbox/MsgBox.js");
/* harmony import */ var _note_Notes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./note/Notes */ "./src/layouts/header/chatbox/note/Notes.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\chatbox\\ChatBox.js";









const ChatBox = ({
  active,
  chatBox,
  chatLists
}) => {
  const {
    0: activeChatBox,
    1: setActiveChatBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: addUser,
    1: setAddUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: `chatbox ${active ? "active" : ""}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AddUserModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      modal: addUser,
      modalChange: () => setAddUser(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "chatbox-close",
      onClick: () => chatBox(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Container, {
      defaultActiveKey: "chat",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "custom-tab-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          as: "ul",
          className: "nav nav-tabs",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            as: "li",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              "data-toggle": "tab",
              eventKey: "notes",
              children: "Notes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            as: "li",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              "data-toggle": "tab",
              eventKey: "alerts",
              children: "Alerts"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
            as: "li",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
              "data-toggle": "tab",
              eventKey: "chat",
              children: "Chat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Content, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
            eventKey: "chat",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box  ${activeChatBox ? "d-none" : ""}`,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-header chat-list-header text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  onClick: () => setAddUser(true),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "18px",
                    height: "18px",
                    viewBox: "0 0 24 24",
                    version: "1.1",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                      stroke: "none",
                      strokeWidth: 1,
                      fill: "none",
                      fillRule: "evenodd",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                        fill: "#000000",
                        x: 4,
                        y: 11,
                        width: 16,
                        height: 2,
                        rx: 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                        fill: "#000000",
                        opacity: "0.3",
                        transform: "translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ",
                        x: 4,
                        y: 11,
                        width: 16,
                        height: 2,
                        rx: 1
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 68,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                    className: "mb-1",
                    children: "Chat List"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mb-0",
                    children: "Show All"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "18px",
                    height: "18px",
                    viewBox: "0 0 24 24",
                    version: "1.1",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                      stroke: "none",
                      strokeWidth: 1,
                      fill: "none",
                      fillRule: "evenodd",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        fill: "#000000",
                        cx: 5,
                        cy: 12,
                        r: 2
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        fill: "#000000",
                        cx: 12,
                        cy: 12,
                        r: 2
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        fill: "#000000",
                        cx: 19,
                        cy: 12,
                        r: 2
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
                className: "card-body contacts_body p-0 dz-scroll  ",
                id: "DZ_W_Contacts_Body",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "contacts",
                  children: chatLists && chatLists.map((chat, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: `dz-chat-user ${chat.active ? "active" : ""}`,
                      onClick: () => setActiveChatBox(true),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "d-flex bd-highlight",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "img_cont",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            src: chat.img,
                            className: "rounded-circle user_img",
                            alt: "",
                            width: 40,
                            height: 40
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 124,
                            columnNumber: 33
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: `online_icon ${chat.active ? "" : "offline"}`
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 131,
                            columnNumber: 33
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 123,
                          columnNumber: 31
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "user_info",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: chat.name
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 138,
                            columnNumber: 33
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: [chat.active ? `${chat.name.split(" ")[0]} is online` : `${chat.name.split(" ")[0]} left ${chat.lastActive} mins ago`, " "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 139,
                            columnNumber: 33
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 137,
                          columnNumber: 31
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 122,
                        columnNumber: 29
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 27
                    }, undefined)
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 25
                  }, undefined))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: `card chat dz-chat-history-box  ${activeChatBox ? "d-block" : "d-none"}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MsgBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
                onClick: () => setActiveChatBox(false)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
            eventKey: "alerts",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "card mb-sm-3 mb-md-0 contacts_card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-header chat-list-header text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "18px",
                    height: "18px",
                    viewBox: "0 0 24 24",
                    version: "1.1",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                      stroke: "none",
                      strokeWidth: 1,
                      fill: "none",
                      fillRule: "evenodd",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 180,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        fill: "#000000",
                        cx: 5,
                        cy: 12,
                        r: 2
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        fill: "#000000",
                        cx: 12,
                        cy: 12,
                        r: 2
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                        fill: "#000000",
                        cx: 19,
                        cy: 12,
                        r: 2
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                    className: "mb-1",
                    children: "Notications"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mb-0",
                    children: "Show All"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: "18px",
                    height: "18px",
                    viewBox: "0 0 24 24",
                    version: "1.1",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
                      stroke: "none",
                      strokeWidth: 1,
                      fill: "none",
                      fillRule: "evenodd",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z",
                        fill: "#000000",
                        fillRule: "nonzero",
                        opacity: "0.3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                        d: "M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z",
                        fill: "#000000",
                        fillRule: "nonzero"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
                className: "card-body contacts_body p-0 dz-scroll",
                id: "DZ_W_Contacts_Body1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "contacts",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "name-first-letter",
                    children: "SEVER STATUS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "active",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "d-flex bd-highlight",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "img_cont primary",
                        children: "KK"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "user_info",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "David Nester Birthday"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 232,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "text-primary",
                          children: "Today"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 233,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 231,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "name-first-letter",
                    children: "SOCIAL"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "d-flex bd-highlight",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "img_cont success",
                        children: "RU"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 240,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "user_info",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Perfection Simplified"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 242,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Jame Smith commented on your status"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 243,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    className: "name-first-letter",
                    children: "SEVER STATUS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "d-flex bd-highlight",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "img_cont primary",
                        children: "AU"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 250,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "user_info",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "AharlieKane"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 252,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Sami is online"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 253,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "d-flex bd-highlight",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "img_cont info",
                        children: "MO"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "user_info",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Athan Jacoby"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 261,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Nargis left 30 mins ago"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 262,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 260,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 258,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "card-footer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Tab"].Pane, {
            eventKey: "notes",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_note_Notes__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  active: state.utils.chatBox,
  chatLists: state.utils.chatLists
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  chatBox: _redux_action_utils__WEBPACK_IMPORTED_MODULE_5__["chatBox"]
})(ChatBox));

/***/ }),

/***/ "./src/layouts/header/chatbox/ChatBoxicon.js":
/*!***************************************************!*\
  !*** ./src/layouts/header/chatbox/ChatBoxicon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/action/utils */ "./src/redux/action/utils.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\chatbox\\ChatBoxicon.js";




const ChatBoxicon = ({
  chatBox
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: "nav-item dropdown notification_dropdown",
    onClick: () => chatBox(true),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "nav-link bell bell-link",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          width: 26,
          height: 26,
          viewBox: "0 0 26 26",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M22.9166 0.166626H3.08332C2.30977 0.166626 1.56791 0.473917 1.02093 1.0209C0.473947 1.56788 0.166656 2.30974 0.166656 3.08329V18.25C0.166656 19.0235 0.473947 19.7654 1.02093 20.3124C1.56791 20.8593 2.30977 21.1666 3.08332 21.1666H4.24999V25.25C4.25 25.3512 4.27637 25.4507 4.32648 25.5386C4.3766 25.6266 4.44874 25.7 4.53582 25.7516C4.6245 25.8028 4.72509 25.8298 4.82749 25.8298C4.92988 25.8298 5.03048 25.8028 5.11915 25.7516L13.7291 21.1666H22.9166C23.6902 21.1666 24.4321 20.8593 24.979 20.3124C25.526 19.7654 25.8333 19.0235 25.8333 18.25V3.08329C25.8333 2.30974 25.526 1.56788 24.979 1.0209C24.4321 0.473917 23.6902 0.166626 22.9166 0.166626ZM21.75 15.3333H4.24999C4.09528 15.3333 3.9469 15.2718 3.83751 15.1624C3.72811 15.053 3.66665 14.9047 3.66665 14.75C3.66665 14.5952 3.72811 14.4469 3.83751 14.3375C3.9469 14.2281 4.09528 14.1666 4.24999 14.1666H21.75C21.9047 14.1666 22.0531 14.2281 22.1625 14.3375C22.2719 14.4469 22.3333 14.5952 22.3333 14.75C22.3333 14.9047 22.2719 15.053 22.1625 15.1624C22.0531 15.2718 21.9047 15.3333 21.75 15.3333ZM21.75 11.25H4.24999C4.09528 11.25 3.9469 11.1885 3.83751 11.0791C3.72811 10.9697 3.66665 10.8213 3.66665 10.6666C3.66665 10.5119 3.72811 10.3635 3.83751 10.2541C3.9469 10.1447 4.09528 10.0833 4.24999 10.0833H21.75C21.9047 10.0833 22.0531 10.1447 22.1625 10.2541C22.2719 10.3635 22.3333 10.5119 22.3333 10.6666C22.3333 10.8213 22.2719 10.9697 22.1625 11.0791C22.0531 11.1885 21.9047 11.25 21.75 11.25ZM21.75 7.16663H4.24999C4.09528 7.16663 3.9469 7.10517 3.83751 6.99577C3.72811 6.88637 3.66665 6.738 3.66665 6.58329C3.66665 6.42858 3.72811 6.28021 3.83751 6.17081C3.9469 6.06142 4.09528 5.99996 4.24999 5.99996H21.75C21.9047 5.99996 22.0531 6.06142 22.1625 6.17081C22.2719 6.28021 22.3333 6.42858 22.3333 6.58329C22.3333 6.738 22.2719 6.88637 22.1625 6.99577C22.0531 7.10517 21.9047 7.16663 21.75 7.16663Z",
            fill: "#636363"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pulse-css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  chatBox: _redux_action_utils__WEBPACK_IMPORTED_MODULE_3__["chatBox"]
})(ChatBoxicon));

/***/ }),

/***/ "./src/layouts/header/chatbox/MsgBox.js":
/*!**********************************************!*\
  !*** ./src/layouts/header/chatbox/MsgBox.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-perfect-scrollbar */ "react-perfect-scrollbar");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_action_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/action/useWindowSize */ "./src/redux/action/useWindowSize.js");
/* harmony import */ var _redux_action_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/action/utils */ "./src/redux/action/utils.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\chatbox\\MsgBox.js";








const MsgBox = ({
  onClick,
  msgBoxData,
  sentMsg
}) => {
  const {
    0: msg,
    1: setMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    height
  } = Object(_redux_action_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["default"])();

  const msgFun = e => {
    setMsg(e.target.value);
  };

  const hendelSubmit = () => {
    if (msg) {
      sentMsg(msg);
      setMsg("");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-header chat-list-header text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "dz-chat-history-back",
          onClick: () => onClick(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            width: "18px",
            height: "18px",
            viewBox: "0 0 24 24",
            version: "1.1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              stroke: "none",
              strokeWidth: 1,
              fill: "none",
              fillRule: "evenodd",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polygon", {
                points: "0 0 24 0 24 24 0 24"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                fill: "#000000",
                opacity: "0.3",
                transform: "translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) ",
                x: 14,
                y: 7,
                width: 2,
                height: 10,
                rx: 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z",
                fill: "#000000",
                fillRule: "nonzero",
                transform: "translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "mb-1",
          children: "Chat with Khelesh"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-0 text-success",
          children: "Online"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
          variant: "",
          className: "p-0 i-false c-pointer",
          as: "a",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            width: "18px",
            height: "18px",
            viewBox: "0 0 24 24",
            version: "1.1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              stroke: "none",
              strokeWidth: 1,
              fill: "none",
              fillRule: "evenodd",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                x: 0,
                y: 0,
                width: 24,
                height: 24
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                fill: "#000000",
                cx: 5,
                cy: 12,
                r: 2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                fill: "#000000",
                cx: 12,
                cy: 12,
                r: 2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                fill: "#000000",
                cx: 19,
                cy: 12,
                r: 2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
          as: "ul",
          alignRight: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-user-circle text-primary mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined), " View profile"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-users text-primary mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined), " Add to close friends"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-plus text-primary mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, undefined), " Add to group"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-ban text-primary mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined), " Block"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), msgBoxData && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: `card-body msg_card_body dz-scroll `,
      id: "DZ_W_Contacts_Body3",
      style: {
        height: `${height - 200}px`
      },
      children: msgBoxData.map((msg, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `d-flex justify-content-${msg.name == "you" ? "start" : "end"} mb-4`,
        children: [msg.name == "you" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "img_cont_msg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: msg.img,
            className: "rounded-circle user_img_msg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `msg_cotainer${msg.name == "you" ? "" : "_send"}`,
          children: [msg.msg, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: `msg_time${msg.name == "you" ? "" : "_send"}`,
            children: msg.time
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 15
        }, undefined), msg.name == "me" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "img_cont_msg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: msg.img,
            className: "rounded-circle user_img_msg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-footer type_msg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: e => {
          e.preventDefault();
          hendelSubmit();
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "input-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "form-control",
            placeholder: "Type your message...",
            onChange: e => msgFun(e),
            value: msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "input-group-append",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn btn-primary",
              onClick: () => hendelSubmit(),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fa fa-location-arrow"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  msgBoxData: state.utils.msgBox
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  sentMsg: _redux_action_utils__WEBPACK_IMPORTED_MODULE_7__["sentMsg"]
})(MsgBox));

/***/ }),

/***/ "./src/layouts/header/chatbox/note/AddNote.js":
/*!****************************************************!*\
  !*** ./src/layouts/header/chatbox/note/AddNote.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../redux/action/utils */ "./src/redux/action/utils.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\chatbox\\note\\AddNote.js";





const AddNote = ({
  modal,
  modalChange,
  addNote
}) => {
  const {
    0: note,
    1: setNote
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const onSubmit = () => {
    if (note) {
      addNote(note);
      setNote("");
      modalChange();
    } else {
      setError("All field are required .");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    show: modal,
    onHide: () => modalChange(),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "modal-content border-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "modal-title",
          children: "Add Notes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "close",
          "data-dismiss": "modal",
          onClick: () => modalChange(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\xD7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-body",
        children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-danger",
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: e => e.preventDefault(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-black font-w600",
              children: ["Note ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "required",
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 22
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              name: "name",
              placeholder: "Note Title",
              onChange: e => setNote(e.target.value),
              value: note
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "btn btn-danger light",
          "data-dismiss": "modal",
          onClick: () => modalChange(),
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => onSubmit(),
          type: "button",
          className: "btn btn-primary",
          children: "Add Note"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, {
  addNote: _redux_action_utils__WEBPACK_IMPORTED_MODULE_4__["addNote"]
})(AddNote));

/***/ }),

/***/ "./src/layouts/header/chatbox/note/EditNote.js":
/*!*****************************************************!*\
  !*** ./src/layouts/header/chatbox/note/EditNote.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../redux/action/utils */ "./src/redux/action/utils.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\chatbox\\note\\EditNote.js";





const EditNote = ({
  modal,
  modalChange,
  editData,
  editNote
}) => {
  const {
    0: note,
    1: setNote
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(editData && editData.note ? editData.note.title : "");
  const {
    0: date,
    1: setDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(editData && editData.note ? editData.note.date : "");
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setNote(editData && editData.note ? editData.note.title : "");
    setDate(editData && editData.note ? editData.note.date : "");
  }, [editData]);

  const onSubmit = () => {
    if (note) {
      editNote({
        note: {
          title: note,
          date
        },
        id: editData.id
      });
      setNote("");
      modalChange();
    } else {
      setError("All field are required .");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    show: modal,
    onHide: () => modalChange(),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "modal-content border-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "modal-title",
          children: "Edit Notes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "close",
          "data-dismiss": "modal",
          onClick: () => modalChange(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\xD7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-body",
        children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "alert alert-danger",
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          onSubmit: e => e.preventDefault(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "text-black font-w600",
              children: ["Note ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "required",
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 22
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              name: "name",
              placeholder: "User Name",
              onChange: e => setNote(e.target.value),
              value: note
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "modal-footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "btn btn-danger light",
          "data-dismiss": "modal",
          onClick: () => modalChange(),
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: () => onSubmit(),
          type: "button",
          className: "btn btn-primary",
          children: "Edit Note"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, {
  editNote: _redux_action_utils__WEBPACK_IMPORTED_MODULE_4__["editNote"]
})(EditNote));

/***/ }),

/***/ "./src/layouts/header/chatbox/note/Notes.js":
/*!**************************************************!*\
  !*** ./src/layouts/header/chatbox/note/Notes.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-perfect-scrollbar */ "react-perfect-scrollbar");
/* harmony import */ var react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../redux/action/utils */ "./src/redux/action/utils.js");
/* harmony import */ var _AddNote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddNote */ "./src/layouts/header/chatbox/note/AddNote.js");
/* harmony import */ var _EditNote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditNote */ "./src/layouts/header/chatbox/note/EditNote.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\layouts\\header\\chatbox\\note\\Notes.js";








const Notes = ({
  noteData,
  deleteNote
}) => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: editNote,
    1: setEditNote
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: editData,
    1: setEditData
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card mb-sm-3 mb-md-0 note_card",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AddNote__WEBPACK_IMPORTED_MODULE_6__["default"], {
      modal: modal,
      modalChange: () => setModal(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EditNote__WEBPACK_IMPORTED_MODULE_7__["default"], {
      modal: editNote,
      modalChange: () => setEditNote(false),
      editData: editData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-header chat-list-header text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: () => setModal(true),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            width: "18px",
            height: "18px",
            viewBox: "0 0 24 24",
            version: "1.1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              stroke: "none",
              strokeWidth: 1,
              fill: "none",
              fillRule: "evenodd",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                fill: "#000000",
                x: 4,
                y: 11,
                width: 16,
                height: 2,
                rx: 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                fill: "#000000",
                opacity: "0.3",
                transform: "translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ",
                x: 4,
                y: 11,
                width: 16,
                height: 2,
                rx: 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
          className: "mb-1",
          children: "Notes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "mb-0",
          children: "Add New Nots"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            width: "18px",
            height: "18px",
            viewBox: "0 0 24 24",
            version: "1.1",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
              stroke: "none",
              strokeWidth: 1,
              fill: "none",
              fillRule: "evenodd",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                x: 0,
                y: 0,
                width: 24,
                height: 24
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z",
                fill: "#000000",
                fillRule: "nonzero",
                opacity: "0.3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z",
                fill: "#000000",
                fillRule: "nonzero"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "card-body contacts_body p-0 dz-scroll",
      id: "DZ_W_Contacts_Body2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "contacts",
        children: noteData && noteData.map((note, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex bd-highlight",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user_info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: note.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: note.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ml-auto",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "btn btn-primary btn-xs sharp mr-1",
                  onClick: () => {
                    setEditNote(true);
                    setEditData({
                      note,
                      id: i
                    });
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fa fa-pencil"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "btn btn-danger btn-xs sharp",
                  onClick: () => deleteNote(i),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fa fa-trash"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  noteData: state.utils.notes
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  deleteNote: _redux_action_utils__WEBPACK_IMPORTED_MODULE_5__["deleteNote"]
})(Notes));

/***/ }),

/***/ "./src/redux/action/auth.js":
/*!**********************************!*\
  !*** ./src/redux/action/auth.js ***!
  \**********************************/
/*! exports provided: getUser, registerUser, loginUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebaseConfig */ "./src/firebaseConfig.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./src/redux/action/type.js");



const currentUser = dispatch => {
  _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_1__["GET_USER"],
        payload: user.providerData[0]
      });
    } else {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_1__["GET_USER"],
        payload: null
      });
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"],
        payload: null
      });
    }
  });
};

const getUser = () => dispatch => {
  currentUser(dispatch);
};
const registerUser = userData => dispatch => {
  const {
    email,
    password,
    username
  } = userData;
  _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].createUserWithEmailAndPassword(email, password).then(userCredential => {
    _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].currentUser.updateProfile({
      displayName: username
    });
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"],
      payload: {
        msg: "Register successfully completed",
        auth: true
      }
    });
    currentUser(dispatch);
  }).catch(error => {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"],
      payload: {
        msg: error.message,
        auth: false
      }
    });
  });
};
const loginUser = userData => dispatch => {
  const {
    email,
    password
  } = userData;
  _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].signInWithEmailAndPassword(email, password).then(userCredential => {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"],
      payload: {
        msg: "Login successfully completed",
        auth: true
      }
    });
    currentUser(dispatch);
  }).catch(error => {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"],
      payload: {
        msg: error.message,
        auth: false
      }
    });
  });
};
const logoutUser = () => dispatch => {
  _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__["auth"].signOut().then(() => {
    currentUser(dispatch);
  }).catch(error => {// An error happened.
  });
};

/***/ }),

/***/ "./src/redux/action/header.js":
/*!************************************!*\
  !*** ./src/redux/action/header.js ***!
  \************************************/
/*! exports provided: notificationFun, notificationFun2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationFun", function() { return notificationFun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationFun2", function() { return notificationFun2; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./src/redux/action/type.js");


const notificationFun = () => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.npoint.io/fbc14eee7441f3b8877b/header/notification");
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION"],
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
const notificationFun2 = () => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.npoint.io/fbc14eee7441f3b8877b/header/notification2");
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_1__["NOTIFICATION_2"],
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

/***/ }),

/***/ "./src/redux/action/themeAction.js":
/*!*****************************************!*\
  !*** ./src/redux/action/themeAction.js ***!
  \*****************************************/
/*! exports provided: demoAction, themeVersionAction, primaryAction, navigationHeaderAction, headerBgAction, sideBarBgAction, headerLayoutAction, headerPositionAction, sidebarStyleAction, sidebarPositionAction, containerAction, directionAction, typographyAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoAction", function() { return demoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeVersionAction", function() { return themeVersionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryAction", function() { return primaryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationHeaderAction", function() { return navigationHeaderAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerBgAction", function() { return headerBgAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideBarBgAction", function() { return sideBarBgAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerLayoutAction", function() { return headerLayoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPositionAction", function() { return headerPositionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarStyleAction", function() { return sidebarStyleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarPositionAction", function() { return sidebarPositionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerAction", function() { return containerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionAction", function() { return directionAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typographyAction", function() { return typographyAction; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./src/redux/action/type.js");

const demoAction = (demoNumber, direction) => dispatch => {
  const body = document.querySelector("body");

  const themeChange = ({
    typography,
    version,
    layout,
    primary,
    headerBg,
    navheaderBg,
    sidebarBg,
    sidebarStyle,
    sidebarPosition,
    headerPosition,
    containerLayout,
    direction
  }) => {
    body.setAttribute("data-typography", typography);
    body.setAttribute("data-theme-version", version);
    body.setAttribute("data-layout", layout);
    body.setAttribute("data-nav-headerbg", navheaderBg);
    body.setAttribute("data-headerbg", headerBg);
    body.setAttribute("data-sibebarbg", sidebarBg);
    body.setAttribute("data-sidebar-position", sidebarPosition);
    body.setAttribute("data-header-position", headerPosition);
    body.setAttribute("data-container", containerLayout);
    body.setAttribute("data-primary", primary);
    body.setAttribute("direction", direction);
    body.setAttribute("data-sidebar-style", sidebarStyle);

    switch (direction) {
      case "rtl":
        body.classList.add(direction);
        body.classList.remove("ltr");
        break;

      default:
        body.classList.add(direction);
        body.classList.remove("rtl");
        break;
    }
  };

  var dezThemeSet1 = {
    typography: "poppins",
    version: "light",
    layout: "vertical",
    primary: "color_1",
    headerBg: "color_1",
    navheaderBg: "color_12",
    sidebarBg: "color_12",
    sidebarStyle: "full",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet2 = {
    typography: "poppins",
    version: "light",
    layout: "vertical",
    primary: "color_9",
    headerBg: "color_1",
    navheaderBg: "color_9",
    sidebarBg: "color_9",
    sidebarStyle: "mini",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet3 = {
    typography: "poppins",
    version: "dark",
    layout: "vertical",
    primary: "color_7",
    headerBg: "color_1",
    navheaderBg: "color_7",
    sidebarBg: "color_7",
    sidebarStyle: "modern",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet4 = {
    typography: "poppins",
    version: "dark",
    layout: "vertical",
    primary: "color_1",
    headerBg: "color_1",
    navheaderBg: "color_1",
    sidebarBg: "color_1",
    sidebarStyle: "mini",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet5 = {
    typography: "poppins",
    version: "light",
    layout: "vertical",
    primary: "color_1",
    headerBg: "color_1",
    navheaderBg: "color_1",
    sidebarBg: "color_1",
    sidebarStyle: "mini",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet6 = {
    typography: "poppins",
    version: "light",
    layout: "horizontal",
    primary: "color_5",
    headerBg: "color_1",
    navheaderBg: "color_1",
    sidebarBg: "color_1",
    sidebarStyle: "full",
    sidebarPosition: "fixed",
    headerPosition: "static",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet7 = {
    typography: "poppins",
    version: "light",
    layout: "horizontal",
    primary: "color_2",
    headerBg: "color_1",
    navheaderBg: "color_1",
    sidebarBg: "color_2",
    sidebarStyle: "compact",
    sidebarPosition: "fixed",
    headerPosition: "static",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet8 = {
    typography: "poppins",
    version: "light",
    layout: "vertical",
    primary: "color_15",
    headerBg: "color_1",
    navheaderBg: "color_15",
    sidebarBg: "color_1",
    sidebarStyle: "overlay",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "wide-boxed",
    direction: direction
  };
  var dezThemeSet9 = {
    typography: "poppins",
    version: "light",
    layout: "horizontal",
    primary: "color_14",
    headerBg: "color_14",
    navheaderBg: "color_14",
    sidebarBg: "color_1",
    sidebarStyle: "full",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet10 = {
    typography: "poppins",
    version: "light",
    layout: "vertical",
    primary: "color_8",
    headerBg: "color_1",
    navheaderBg: "color_8",
    sidebarBg: "color_8",
    sidebarStyle: "compact",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
    direction: direction
  };
  var dezThemeSet11 = {
    typography: "poppins",
    version: "light",
    layout: "vertical",
    primary: "color_9",
    headerBg: "color_9",
    navheaderBg: "color_1",
    sidebarBg: "color_1",
    sidebarStyle: "full",
    sidebarPosition: "fixed",
    headerPosition: "fixed",
    containerLayout: "full",
    direction: direction
  };

  switch (demoNumber) {
    case 1:
      themeChange(dezThemeSet1);
      break;

    case 2:
      themeChange(dezThemeSet2);
      break;

    case 3:
      themeChange(dezThemeSet3);
      break;

    case 4:
      themeChange(dezThemeSet4);
      break;

    case 5:
      themeChange(dezThemeSet5);
      break;

    case 6:
      themeChange(dezThemeSet6);
      break;

    case 7:
      themeChange(dezThemeSet7);
      break;

    case 8:
      themeChange(dezThemeSet8);
      break;

    case 9:
      themeChange(dezThemeSet9);
      break;

    case 10:
      themeChange(dezThemeSet10);
      break;

    case 11:
      themeChange(dezThemeSet11);
      break;

    default:
      themeChange(dezThemeSet1);
  }

  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["DEMO"],
    payload: demoNumber
  });
}; // Theme action

const themeVersionAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-theme-version", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["VERSION"],
    payload: value
  });
};
const primaryAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-primary", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["PRIMARY"],
    payload: value
  });
};
const navigationHeaderAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-nav-headerbg", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["NAV_HEADER_BG"],
    payload: value
  });
};
const headerBgAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-headerbg", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["HEADER_BG"],
    payload: value
  });
};
const sideBarBgAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-sibebarbg", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_BG"],
    payload: value
  });
}; // Header action

const headerLayoutAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-layout", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["LAYOUT"],
    payload: value
  });
};
const headerPositionAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-header-position", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["HEADER_POSITION"],
    payload: value
  });
};
const sidebarStyleAction = value => dispatch => {
  const body = document.querySelector("body");

  if (body.getAttribute("data-layout") === "horizontal" && value === "overlay") {
    alert("Sorry! Overlay is not possible in Horizontal layout.");
  } else {
    body.setAttribute("data-sidebar-style", value);
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_STYLE"],
      payload: value
    });
  }
};
const sidebarPositionAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-sidebar-position", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_POSITION"],
    payload: value
  });
}; // Content action

const containerAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-container", value);

  if (value === "boxed") {
    console.log(value);
    body.setAttribute("data-sidebar-style", "overlay");
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_STYLE"],
      payload: "overlay"
    });
  }

  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["CONTAINER_LAYOUT"],
    payload: value
  });
};
const directionAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("direction", value);
  body.className = value;
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["DIRACTION"],
    payload: value
  });
};
const typographyAction = value => dispatch => {
  const body = document.querySelector("body");
  body.setAttribute("data-typography", value);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__["TYPOGRAPHY"],
    payload: value
  });
};

/***/ }),

/***/ "./src/redux/action/type.js":
/*!**********************************!*\
  !*** ./src/redux/action/type.js ***!
  \**********************************/
/*! exports provided: PAGE_TITLE, CHAT_BOX, NOTIFICATION, NOTIFICATION_2, CHAT_LISTS, MSG_BOX, SEND_MSG, ADD_USER, SEARCH_DATA, NOTES, ADD_NOTE, DELETE_NOTE, EDIT_NOTE, DEMO, TYPOGRAPHY, VERSION, LAYOUT, PRIMARY, HEADER_BG, NAV_HEADER_BG, SIDEBAR_BG, SIDEBAR_STYLE, SIDEBAR_POSITION, HEADER_POSITION, CONTAINER_LAYOUT, DIRACTION, DAILY_TARGET_CHART, ORDER_CHART, CUSTOMER_CHART, ADD_CUSTOMER_LIST, MENU_CHART, CUSTOMER_MAP_CHART, ORDER_REQUEST, TRANDING_MENU, ORDER_DETAILS_ITEMS, DELETE_ORDER_DETAILS, ORDERS_LIST, ORDER_DETAILS, CUSTOMER_LIST, ANALYTICS, REVIEWS, PROFILE, POSTS, GET_POSTS, DELETE_POST, EDIT_POST, HEADER_IMG, INTEREST, EMAIL_READ, EMAIL_INBOX, PRODUCTS, PRODUCTS_ORDER, INVOICE, EDIT_INVOICE, INVOICE_ITEMS, INVOICE_ITEMS_EDIT, INVOICE_ITEMS_DELETE, ADD_INVOICE_ITEMS, DELETE_INVOICE, APP_CUSTOMER_LIST, WIDGET_BASIC, GET_USER, LOGOUT_USER, AUTH_ERROR, FORGET_PASSWORD, BASIC_TABLE, PROFILE_TABLE, FEE_TABLE, PATIENT_TABLE, DELETE_PROFILE_TABLE, EDIT_PROFILE_TABLE, GET_BS_TABLE, RECENT_PAYMENT_QUEUE, DELETE_RECENT_PAYMENT_QUEUE, EDIT_RECENT_PAYMENT_QUEUE, EDIT_EXAM_TOPPERS, DELETE_EXAM_TOPPERS, EXAM_TOPPERS, BORDER_TABLE, EDIT_BORDER_TABLE, DELETE_BORDER_TABLE, TABLE_STRIPPED, EDIT_TABLE_STRIPPED, DELETE_TABLE_STRIPPED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_TITLE", function() { return PAGE_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_BOX", function() { return CHAT_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION", function() { return NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION_2", function() { return NOTIFICATION_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_LISTS", function() { return CHAT_LISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_BOX", function() { return MSG_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MSG", function() { return SEND_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER", function() { return ADD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_DATA", function() { return SEARCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTES", function() { return NOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NOTE", function() { return ADD_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NOTE", function() { return DELETE_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_NOTE", function() { return EDIT_NOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEMO", function() { return DEMO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPOGRAPHY", function() { return TYPOGRAPHY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT", function() { return LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY", function() { return PRIMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_BG", function() { return HEADER_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_HEADER_BG", function() { return NAV_HEADER_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_BG", function() { return SIDEBAR_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_STYLE", function() { return SIDEBAR_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_POSITION", function() { return SIDEBAR_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_POSITION", function() { return HEADER_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_LAYOUT", function() { return CONTAINER_LAYOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRACTION", function() { return DIRACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAILY_TARGET_CHART", function() { return DAILY_TARGET_CHART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_CHART", function() { return ORDER_CHART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_CHART", function() { return CUSTOMER_CHART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CUSTOMER_LIST", function() { return ADD_CUSTOMER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_CHART", function() { return MENU_CHART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_MAP_CHART", function() { return CUSTOMER_MAP_CHART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_REQUEST", function() { return ORDER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANDING_MENU", function() { return TRANDING_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_DETAILS_ITEMS", function() { return ORDER_DETAILS_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ORDER_DETAILS", function() { return DELETE_ORDER_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDERS_LIST", function() { return ORDERS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_DETAILS", function() { return ORDER_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_LIST", function() { return CUSTOMER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANALYTICS", function() { return ANALYTICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REVIEWS", function() { return REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE", function() { return PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS", function() { return POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST", function() { return EDIT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_IMG", function() { return HEADER_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTEREST", function() { return INTEREST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_READ", function() { return EMAIL_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_INBOX", function() { return EMAIL_INBOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function() { return PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_ORDER", function() { return PRODUCTS_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOICE", function() { return INVOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_INVOICE", function() { return EDIT_INVOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOICE_ITEMS", function() { return INVOICE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOICE_ITEMS_EDIT", function() { return INVOICE_ITEMS_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOICE_ITEMS_DELETE", function() { return INVOICE_ITEMS_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INVOICE_ITEMS", function() { return ADD_INVOICE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_INVOICE", function() { return DELETE_INVOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CUSTOMER_LIST", function() { return APP_CUSTOMER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDGET_BASIC", function() { return WIDGET_BASIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_PASSWORD", function() { return FORGET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_TABLE", function() { return BASIC_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_TABLE", function() { return PROFILE_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEE_TABLE", function() { return FEE_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATIENT_TABLE", function() { return PATIENT_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PROFILE_TABLE", function() { return DELETE_PROFILE_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PROFILE_TABLE", function() { return EDIT_PROFILE_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BS_TABLE", function() { return GET_BS_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECENT_PAYMENT_QUEUE", function() { return RECENT_PAYMENT_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RECENT_PAYMENT_QUEUE", function() { return DELETE_RECENT_PAYMENT_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_RECENT_PAYMENT_QUEUE", function() { return EDIT_RECENT_PAYMENT_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_EXAM_TOPPERS", function() { return EDIT_EXAM_TOPPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EXAM_TOPPERS", function() { return DELETE_EXAM_TOPPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAM_TOPPERS", function() { return EXAM_TOPPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_TABLE", function() { return BORDER_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_BORDER_TABLE", function() { return EDIT_BORDER_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BORDER_TABLE", function() { return DELETE_BORDER_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_STRIPPED", function() { return TABLE_STRIPPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_TABLE_STRIPPED", function() { return EDIT_TABLE_STRIPPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TABLE_STRIPPED", function() { return DELETE_TABLE_STRIPPED; });
const PAGE_TITLE = "PAGE_TITLE";
const CHAT_BOX = "CHAT_BOX"; // Header

const NOTIFICATION = "NOTIFICATION";
const NOTIFICATION_2 = "NOTIFICATION_2";
const CHAT_LISTS = "CHAT_LISTS";
const MSG_BOX = "MSG_BOX";
const SEND_MSG = "SEND_MSG";
const ADD_USER = "ADD_USER";
const SEARCH_DATA = "SEARCH_DATA";
const NOTES = "NOTES";
const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const EDIT_NOTE = "EDIT_NOTE"; // demo

const DEMO = "DEMO"; // setting

const TYPOGRAPHY = "TYPOGRAPHY";
const VERSION = "VERSION";
const LAYOUT = "LAYOUT";
const PRIMARY = "PRIMARY";
const HEADER_BG = "HEADER_BG";
const NAV_HEADER_BG = "NAV_HEADER_BG";
const SIDEBAR_BG = "SIDEBAR_BG";
const SIDEBAR_STYLE = "SIDEBAR_STYLE";
const SIDEBAR_POSITION = "SIDEBAR_POSITION";
const HEADER_POSITION = "HEADER_POSITION";
const CONTAINER_LAYOUT = "CONTAINER_LAYOUT";
const DIRACTION = "DIRACTION"; // Pages
// Index Page

const DAILY_TARGET_CHART = "DAILY_TARGET_CHART";
const ORDER_CHART = "ORDER_CHART";
const CUSTOMER_CHART = "CUSTOMER_CHART";
const ADD_CUSTOMER_LIST = "ADD_CUSTOMER_LIST";
const MENU_CHART = "MENU_CHART";
const CUSTOMER_MAP_CHART = "CUSTOMER_MAP_CHART";
const ORDER_REQUEST = "ORDER_REQUEST";
const TRANDING_MENU = "TRANDING_MENU";
const ORDER_DETAILS_ITEMS = "ORDER_DETAILS_ITEMS";
const DELETE_ORDER_DETAILS = "DELETE_ORDER_DETAILS"; // Order list

const ORDERS_LIST = "ORDERS_LIST"; // Order Detail

const ORDER_DETAILS = "ORDER_DETAILS"; // Customer List

const CUSTOMER_LIST = "CUSTOMER_LIST"; // analytics

const ANALYTICS = "ANALYTICS"; // Reviews

const REVIEWS = "REVIEWS"; // Apps
// profile

const PROFILE = "PROFILE"; // Posts

const POSTS = "POSTS";
const GET_POSTS = "GET_POSTS";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST"; // HeaderImg

const HEADER_IMG = "HEADER_IMG"; // interest

const INTEREST = "INTEREST"; // Email

const EMAIL_READ = "EMAIL_READ"; // Email inbox

const EMAIL_INBOX = "EMAIL_INBOX"; // Product
// -> Grid

const PRODUCTS = "PRODUCTS"; // -> Order

const PRODUCTS_ORDER = "PRODUCTS_ORDER"; // -> Invoice

const INVOICE = "INVOICE";
const EDIT_INVOICE = "EDIT_INVOICE";
const INVOICE_ITEMS = "INVOICE_ITEMS";
const INVOICE_ITEMS_EDIT = "INVOICE_ITEMS_EDIT";
const INVOICE_ITEMS_DELETE = "INVOICE_ITEMS_DELETE";
const ADD_INVOICE_ITEMS = "ADD_INVOICE_ITEMS";
const DELETE_INVOICE = "DELETE_INVOICE"; // -> Customer list

const APP_CUSTOMER_LIST = "APP_CUSTOMER_LIST"; // Widget page

const WIDGET_BASIC = "WIDGET_BASIC"; // Auth

const GET_USER = "GET_USER";
const LOGOUT_USER = "LOGOUT_USER";
const AUTH_ERROR = "AUTH_ERROR";
const FORGET_PASSWORD = "FORGET_PASSWORD"; // Table

const BASIC_TABLE = "BASIC_TABLE";
const PROFILE_TABLE = "PROFILE_TABLE";
const FEE_TABLE = "FEE_TABLE";
const PATIENT_TABLE = "PATIENT_TABLE";
const DELETE_PROFILE_TABLE = "DELETE_PROFILE_TABLE";
const EDIT_PROFILE_TABLE = "EDIT_PROFILE_TABLE"; // Table -> bs

const GET_BS_TABLE = "BS_TABLE";
const RECENT_PAYMENT_QUEUE = "RECENT_PAYMENT_QUEUE";
const DELETE_RECENT_PAYMENT_QUEUE = "DELETE_RECENT_PAYMENT_QUEUE";
const EDIT_RECENT_PAYMENT_QUEUE = "EDIT_RECENT_PAYMENT_QUEUE";
const EDIT_EXAM_TOPPERS = "EDIT_EXAM_TOPPERS";
const DELETE_EXAM_TOPPERS = "DELETE_EXAM_TOPPERS";
const EXAM_TOPPERS = "EXAM_TOPPERS";
const BORDER_TABLE = "BORDER_TABLE";
const EDIT_BORDER_TABLE = "EDIT_BORDER_TABLE";
const DELETE_BORDER_TABLE = "DELETE_BORDER_TABLE";
const TABLE_STRIPPED = "TABLE_STRIPPED";
const EDIT_TABLE_STRIPPED = "EDIT_TABLE_STRIPPED";
const DELETE_TABLE_STRIPPED = "DELETE_TABLE_STRIPPED";

/***/ }),

/***/ "./src/redux/action/useWindowSize.js":
/*!*******************************************!*\
  !*** ./src/redux/action/useWindowSize.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// utils/useWindowSize.js

function useWindowSize() {
  const isSSR = false;
  const [windowSize, setWindowSize] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    width: 1200,
    height: 800
  });

  function changeWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);
  return windowSize;
}

/***/ }),

/***/ "./src/redux/action/utils.js":
/*!***********************************!*\
  !*** ./src/redux/action/utils.js ***!
  \***********************************/
/*! exports provided: pageTitle, resizeWindow, bodyArt, preloaderAction, moodChange, sideBarActive, chatBox, getHeaderData, addNote, editNote, deleteNote, sentMsg, addUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTitle", function() { return pageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeWindow", function() { return resizeWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyArt", function() { return bodyArt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preloaderAction", function() { return preloaderAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moodChange", function() { return moodChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideBarActive", function() { return sideBarActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatBox", function() { return chatBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderData", function() { return getHeaderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNote", function() { return addNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editNote", function() { return editNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNote", function() { return deleteNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentMsg", function() { return sentMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./src/redux/action/type.js");



const pageTitle = title => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_2__["PAGE_TITLE"],
    payload: title
  });
}; // Resize window

const resizeWindow = () => {
  const body = document.querySelector("body");
  window.innerWidth >= 768 && window.innerWidth < 1024 ? body.setAttribute("data-sidebar-style", "mini") : window.innerWidth <= 768 ? body.setAttribute("data-sidebar-style", "overlay") : body.setAttribute("data-sidebar-style", "full");
}; //  Body attributes

const bodyArt = () => {
  const body = document.querySelector("body");
  body.setAttribute("data-typography", "poppins"); // body.setAttribute("data-theme-version", "light");

  body.setAttribute("data-layout", "vertical");
  body.setAttribute("data-nav-headerbg", "color_1");
  body.setAttribute("data-headerbg", "color_1");
  body.setAttribute("data-sidebar-style", "full");
  body.setAttribute("data-sibebarbg", "color_1");
  body.setAttribute("data-primary", "color_1");
  body.setAttribute("data-sidebar-position", "fixed");
  body.setAttribute("data-header-position", "fixed");
  body.setAttribute("data-container", "wide");
  body.setAttribute("direction", "ltr");
  body.setAttribute("data-sidebar-style", "full");
}; // preloader

const preloaderAction = () => {
  window.addEventListener("load", () => {
    document.querySelector("#main-wrapper").classList.add("show");
    document.querySelector("#preloader").style.display = "none";
  });
}; // dark and light mood

const moodChange = () => {
  const path = window.location.pathname;
  const body = document.querySelector("body");

  if (path.includes("dark")) {
    body.setAttribute("data-theme-version", "dark");
  } else {
    body.setAttribute("data-theme-version", "light");
  }
};
const sideBarActive = doc => {
  let active = doc ? document.querySelectorAll(".mm-collapse a") : [];

  for (let i = 0; i < active.length; i++) {
    const element = active[i];

    if (element.href) {
      if (element.href !== window.location.href) {
        element.classList.remove("mm-active");
        console.log("not match", element.href);
      } else {
        element.classList.add("mm-active");
        element.parentElement.classList.add("mm-active");
        element.parentElement.parentElement.classList.add("mm-show");
        element.parentElement.parentElement.parentElement.classList.add("mm-active");
        element.parentElement.parentElement.parentElement.parentElement.classList.add("mm-show");
        element.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add("mm-active");
        console.log("match", element.href);
      }
    }

    if (window.location.pathname == "/widget-basic") {} else {
      document.querySelector("#widget-basic").classList.remove("mm-active");
    }
  }
}; // ChatBox

const chatBox = value => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_2__["CHAT_BOX"],
    payload: value
  });
};
const getHeaderData = () => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.npoint.io/fbc14eee7441f3b8877b/header/");
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["CHAT_LISTS"],
      payload: res.data.chatLists
    });
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["MSG_BOX"],
      payload: res.data.msgBox
    });
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["SEARCH_DATA"],
      payload: res.data.searchData
    });
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_2__["NOTES"],
      payload: res.data.notes
    });
  } catch (err) {
    console.log(err);
  }
};
const addNote = note => dispatch => {
  const newNote = {
    title: note,
    date: moment__WEBPACK_IMPORTED_MODULE_1___default()().format("D MMMM YYYY")
  };
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_NOTE"],
    payload: newNote
  });
};
const editNote = note => dispatch => {
  console.log(note);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_2__["EDIT_NOTE"],
    payload: note
  });
};
const deleteNote = id => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_2__["DELETE_NOTE"],
    payload: id
  });
};
const sentMsg = msg => dispatch => {
  let time = new Date().toLocaleDateString([], {
    hour: "2-digit",
    minute: "2-digit"
  }).split(" ")[1];
  let newMsg = {
    img: "/images/avatar/2.jpg",
    name: "me",
    msg,
    time: `${time}, Today`
  };
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_2__["SEND_MSG"],
    payload: newMsg
  });
};
const addUser = userInfo => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_2__["ADD_USER"],
    payload: userInfo
  });
};

/***/ }),

/***/ "./src/redux/reducer/appsReducer.js":
/*!******************************************!*\
  !*** ./src/redux/reducer/appsReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const appReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__["PROFILE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        profile: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["INTEREST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        interest: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["HEADER_IMG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        headerImg: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EMAIL_READ"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fullEmail: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EMAIL_INBOX"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        emailInbox: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS_ORDER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        orderList: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["INVOICE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        invoiceData: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["INVOICE_ITEMS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        invoiceItems: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EDIT_INVOICE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        invoiceData: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["INVOICE_ITEMS_EDIT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        invoiceItems: state.invoiceItems.map((table, i) => i == payload.id ? payload.data : table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ADD_INVOICE_ITEMS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        invoiceItems: [payload, ...state.invoiceItems]
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DELETE_INVOICE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        invoiceItems: state.invoiceItems.filter((invoice, i) => i !== payload && invoice)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["APP_CUSTOMER_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        customerList: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EDIT_POST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: state.allPosts.map((post, i) => i === payload.id ? payload.data : post)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (appReducer);

/***/ }),

/***/ "./src/redux/reducer/authReducer.js":
/*!******************************************!*\
  !*** ./src/redux/reducer/authReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const authReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__["GET_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["AUTH_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        authErrors: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./src/redux/reducer/dashboardReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducer/dashboardReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const dashBoardReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DAILY_TARGET_CHART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        dailyTargetChart: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ORDER_CHART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        orderChart: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_CHART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        customerChart: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["MENU_CHART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        menuChart: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_MAP_CHART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        customerMapChart: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["TRANDING_MENU"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        trendingMenu: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ORDER_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        orderRequest: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ORDERS_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        ordersList: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ORDER_DETAILS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        orderDetail: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ORDER_DETAILS_ITEMS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        orderDetailItems: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DELETE_ORDER_DETAILS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        orderDetailItems: state.orderDetailItems.filter((order, i) => i !== payload && order)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["CUSTOMER_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        customerList: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ADD_CUSTOMER_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        customerList: [payload, ...state.customerList]
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ANALYTICS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        analytics: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["REVIEWS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        reviews: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (dashBoardReducer);

/***/ }),

/***/ "./src/redux/reducer/headerReducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducer/headerReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headerReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__["NOTIFICATION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        notification: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["NOTIFICATION_2"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        notification_2: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (headerReducer);

/***/ }),

/***/ "./src/redux/reducer/index.js":
/*!************************************!*\
  !*** ./src/redux/reducer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _appsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appsReducer */ "./src/redux/reducer/appsReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./src/redux/reducer/authReducer.js");
/* harmony import */ var _dashboardReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboardReducer */ "./src/redux/reducer/dashboardReducer.js");
/* harmony import */ var _headerReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headerReducer */ "./src/redux/reducer/headerReducer.js");
/* harmony import */ var _tableReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tableReducer */ "./src/redux/reducer/tableReducer.js");
/* harmony import */ var _themeReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themeReducer */ "./src/redux/reducer/themeReducer.js");
/* harmony import */ var _utilsReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilsReducer */ "./src/redux/reducer/utilsReducer.js");
/* harmony import */ var _widgetReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgetReducer */ "./src/redux/reducer/widgetReducer.js");









/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  utils: _utilsReducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: _headerReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  theme: _themeReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  dashboard: _dashboardReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  apps: _appsReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  widget: _widgetReducer__WEBPACK_IMPORTED_MODULE_8__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  table: _tableReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/redux/reducer/tableReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducer/tableReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const tableReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__["PROFILE_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        profile: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["FEE_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fees: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["PATIENT_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        patient: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["BASIC_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        basic: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DELETE_PROFILE_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        profile: state.profile.filter((table, i) => i !== payload && table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EDIT_PROFILE_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        profile: state.profile.map((table, i) => i == payload.id ? payload.data : table)
      });
    // bs table

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["GET_BS_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bsTables: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["RECENT_PAYMENT_QUEUE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPayment: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EXAM_TOPPERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        examTopper: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["BORDER_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        borderTable: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["TABLE_STRIPPED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tableStripped: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DELETE_RECENT_PAYMENT_QUEUE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPayment: state.recentPayment.filter((table, i) => i !== payload && table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DELETE_BORDER_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        borderTable: state.borderTable.filter((table, i) => i !== payload && table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DELETE_TABLE_STRIPPED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tableStripped: state.tableStripped.filter((table, i) => i !== payload && table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DELETE_EXAM_TOPPERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        examTopper: state.examTopper.filter((table, i) => i !== payload && table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EDIT_RECENT_PAYMENT_QUEUE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPayment: state.recentPayment.map((table, i) => i == payload.id ? payload.data : table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EDIT_EXAM_TOPPERS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        examTopper: state.examTopper.map((table, i) => i == payload.id ? payload.data : table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EDIT_BORDER_TABLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        borderTable: state.borderTable.map((table, i) => i == payload.id ? payload.data : table)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EDIT_TABLE_STRIPPED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tableStripped: state.tableStripped.map((table, i) => i == payload.id ? payload.data : table)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (tableReducer);

/***/ }),

/***/ "./src/redux/reducer/themeReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducer/themeReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialValue = {
  activeDemo: 1,
  demos: [{
    id: 1,
    name: "demo 1",
    image: "/images/demo/pic1.png"
  }, {
    id: 2,
    name: "demo 2",
    image: "/images/demo/pic2.png"
  }, {
    id: 3,
    name: "demo 3",
    image: "/images/demo/pic3.png"
  }, {
    id: 4,
    name: "demo 4",
    image: "/images/demo/pic4.png"
  }, {
    id: 5,
    name: "demo 5",
    image: "/images/demo/pic5.png"
  }, {
    id: 6,
    name: "demo 6",
    image: "/images/demo/pic6.png"
  }, {
    id: 7,
    name: "demo 7",
    image: "/images/demo/pic7.png"
  }, {
    id: 8,
    name: "demo 8",
    image: "/images/demo/pic8.png"
  }, {
    id: 9,
    name: "demo 9",
    image: "/images/demo/pic9.png"
  }, {
    id: 10,
    name: "demo 10",
    image: "/images/demo/pic10.png"
  }, {
    id: 11,
    name: "demo 11",
    image: "/images/demo/pic11.png"
  }],
  typography: "poppins",
  version: "light",
  layout: "vertical",
  primary: "color_1",
  headerBg: "color_1",
  navheaderBg: "color_12",
  sidebarBg: "color_12",
  sidebarStyle: "full",
  sidebarPosition: "fixed",
  headerPosition: "fixed",
  containerLayout: "full",
  direction: "ltr"
};

const demoReducer = (state = initialValue, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DEMO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        activeDemo: payload
      });
    // Theme option
    // verstion

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["VERSION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        version: payload
      });
    // Primary

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["PRIMARY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        primary: payload
      });
    // Navigation header bg

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["NAV_HEADER_BG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        navheaderBg: payload
      });
    // header bg

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["HEADER_BG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        headerBg: payload
      });
    // header bg

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_BG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sidebarBg: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["VERSION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        version: payload
      });
    // Header option

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["LAYOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        layout: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["HEADER_POSITION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        headerPosition: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_STYLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sidebarStyle: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["SIDEBAR_POSITION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sidebarPosition: payload
      });
    // Content

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["CONTAINER_LAYOUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        containerLayout: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DIRACTION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        direction: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["TYPOGRAPHY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        typography: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (demoReducer);

/***/ }),

/***/ "./src/redux/reducer/utilsReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducer/utilsReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const utilsReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__["PAGE_TITLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pageTitle: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["CHAT_BOX"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatBox: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["CHAT_LISTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatLists: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["MSG_BOX"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        msgBox: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["SEND_MSG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        msgBox: [...state.msgBox, payload]
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ADD_USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        chatLists: [payload, ...state.chatLists]
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["SEARCH_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchData: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["NOTES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        notes: payload
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["ADD_NOTE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        notes: [payload, ...state.notes]
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["EDIT_NOTE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        notes: state.notes.map((note, i) => i !== payload.id ? note : payload.note)
      });

    case _action_type__WEBPACK_IMPORTED_MODULE_0__["DELETE_NOTE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        notes: state.notes.filter((note, i) => i !== payload && note)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (utilsReducer);

/***/ }),

/***/ "./src/redux/reducer/widgetReducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducer/widgetReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type */ "./src/redux/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const widgetReducer = (state = [], action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case _action_type__WEBPACK_IMPORTED_MODULE_0__["WIDGET_BASIC"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (widgetReducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./src/redux/reducer/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@metismenu/react":
/*!***********************************!*\
  !*** external "@metismenu/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@metismenu/react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-perfect-scrollbar":
/*!******************************************!*\
  !*** external "react-perfect-scrollbar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-perfect-scrollbar");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "simple-react-lightbox":
/*!****************************************!*\
  !*** external "simple-react-lightbox" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-react-lightbox");

/***/ })

/******/ });