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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/empty-page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/empty-page.js":
/*!*****************************!*\
  !*** ./pages/empty-page.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_redux_action_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/redux/action/utils */ "./src/redux/action/utils.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\pages\\empty-page.js";




const EmptyPage = ({
  pageTitle
}) => {
  const version = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.theme.version);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (version !== "dark") {
      Object(_src_redux_action_utils__WEBPACK_IMPORTED_MODULE_3__["moodChange"])();
    }

    pageTitle("Dashboard");
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  pageTitle: _src_redux_action_utils__WEBPACK_IMPORTED_MODULE_3__["pageTitle"]
})(EmptyPage));

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZW1wdHktcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9uL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJFbXB0eVBhZ2UiLCJwYWdlVGl0bGUiLCJ2ZXJzaW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInRoZW1lIiwidXNlRWZmZWN0IiwibW9vZENoYW5nZSIsImNvbm5lY3QiLCJQQUdFX1RJVExFIiwiQ0hBVF9CT1giLCJOT1RJRklDQVRJT04iLCJOT1RJRklDQVRJT05fMiIsIkNIQVRfTElTVFMiLCJNU0dfQk9YIiwiU0VORF9NU0ciLCJBRERfVVNFUiIsIlNFQVJDSF9EQVRBIiwiTk9URVMiLCJBRERfTk9URSIsIkRFTEVURV9OT1RFIiwiRURJVF9OT1RFIiwiREVNTyIsIlRZUE9HUkFQSFkiLCJWRVJTSU9OIiwiTEFZT1VUIiwiUFJJTUFSWSIsIkhFQURFUl9CRyIsIk5BVl9IRUFERVJfQkciLCJTSURFQkFSX0JHIiwiU0lERUJBUl9TVFlMRSIsIlNJREVCQVJfUE9TSVRJT04iLCJIRUFERVJfUE9TSVRJT04iLCJDT05UQUlORVJfTEFZT1VUIiwiRElSQUNUSU9OIiwiREFJTFlfVEFSR0VUX0NIQVJUIiwiT1JERVJfQ0hBUlQiLCJDVVNUT01FUl9DSEFSVCIsIkFERF9DVVNUT01FUl9MSVNUIiwiTUVOVV9DSEFSVCIsIkNVU1RPTUVSX01BUF9DSEFSVCIsIk9SREVSX1JFUVVFU1QiLCJUUkFORElOR19NRU5VIiwiT1JERVJfREVUQUlMU19JVEVNUyIsIkRFTEVURV9PUkRFUl9ERVRBSUxTIiwiT1JERVJTX0xJU1QiLCJPUkRFUl9ERVRBSUxTIiwiQ1VTVE9NRVJfTElTVCIsIkFOQUxZVElDUyIsIlJFVklFV1MiLCJQUk9GSUxFIiwiUE9TVFMiLCJHRVRfUE9TVFMiLCJERUxFVEVfUE9TVCIsIkVESVRfUE9TVCIsIkhFQURFUl9JTUciLCJJTlRFUkVTVCIsIkVNQUlMX1JFQUQiLCJFTUFJTF9JTkJPWCIsIlBST0RVQ1RTIiwiUFJPRFVDVFNfT1JERVIiLCJJTlZPSUNFIiwiRURJVF9JTlZPSUNFIiwiSU5WT0lDRV9JVEVNUyIsIklOVk9JQ0VfSVRFTVNfRURJVCIsIklOVk9JQ0VfSVRFTVNfREVMRVRFIiwiQUREX0lOVk9JQ0VfSVRFTVMiLCJERUxFVEVfSU5WT0lDRSIsIkFQUF9DVVNUT01FUl9MSVNUIiwiV0lER0VUX0JBU0lDIiwiR0VUX1VTRVIiLCJMT0dPVVRfVVNFUiIsIkFVVEhfRVJST1IiLCJGT1JHRVRfUEFTU1dPUkQiLCJCQVNJQ19UQUJMRSIsIlBST0ZJTEVfVEFCTEUiLCJGRUVfVEFCTEUiLCJQQVRJRU5UX1RBQkxFIiwiREVMRVRFX1BST0ZJTEVfVEFCTEUiLCJFRElUX1BST0ZJTEVfVEFCTEUiLCJHRVRfQlNfVEFCTEUiLCJSRUNFTlRfUEFZTUVOVF9RVUVVRSIsIkRFTEVURV9SRUNFTlRfUEFZTUVOVF9RVUVVRSIsIkVESVRfUkVDRU5UX1BBWU1FTlRfUVVFVUUiLCJFRElUX0VYQU1fVE9QUEVSUyIsIkRFTEVURV9FWEFNX1RPUFBFUlMiLCJFWEFNX1RPUFBFUlMiLCJCT1JERVJfVEFCTEUiLCJFRElUX0JPUkRFUl9UQUJMRSIsIkRFTEVURV9CT1JERVJfVEFCTEUiLCJUQUJMRV9TVFJJUFBFRCIsIkVESVRfVEFCTEVfU1RSSVBQRUQiLCJERUxFVEVfVEFCTEVfU1RSSVBQRUQiLCJ0aXRsZSIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJyZXNpemVXaW5kb3ciLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNldEF0dHJpYnV0ZSIsImJvZHlBcnQiLCJwcmVsb2FkZXJBY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwicGF0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsInNpZGVCYXJBY3RpdmUiLCJkb2MiLCJhY3RpdmUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImVsZW1lbnQiLCJocmVmIiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsInBhcmVudEVsZW1lbnQiLCJjaGF0Qm94IiwidmFsdWUiLCJnZXRIZWFkZXJEYXRhIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiY2hhdExpc3RzIiwibXNnQm94Iiwic2VhcmNoRGF0YSIsIm5vdGVzIiwiZXJyIiwiYWRkTm90ZSIsIm5vdGUiLCJuZXdOb3RlIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsImVkaXROb3RlIiwiZGVsZXRlTm90ZSIsImlkIiwic2VudE1zZyIsIm1zZyIsInRpbWUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsInNwbGl0IiwibmV3TXNnIiwiaW1nIiwibmFtZSIsImFkZFVzZXIiLCJ1c2VySW5mbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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LEdBRGYsRUFFUkMsS0FGUSxDQUVGLEdBRkUsRUFFRyxDQUZILENBQVg7QUFHQSxNQUFJQyxNQUFNLEdBQUc7QUFDWEMsT0FBRyxFQUFFLHNCQURNO0FBRVhDLFFBQUksRUFBRSxJQUZLO0FBR1hULE9BSFc7QUFJWEMsUUFBSSxFQUFHLEdBQUVBLElBQUs7QUFKSCxHQUFiO0FBT0F4RCxVQUFRLENBQUM7QUFDUEMsUUFBSSxFQUFFaEYsOENBREM7QUFFUGlGLFdBQU8sRUFBRTREO0FBRkYsR0FBRCxDQUFSO0FBSUQsQ0FmTTtBQWlCQSxNQUFNRyxPQUFPLEdBQUlDLFFBQUQsSUFBZWxFLFFBQUQsSUFBYztBQUNqREEsVUFBUSxDQUFDO0FBQ1BDLFFBQUksRUFBRS9FLDhDQURDO0FBRVBnRixXQUFPLEVBQUVnRTtBQUZGLEdBQUQsQ0FBUjtBQUlELENBTE0sQzs7Ozs7Ozs7Ozs7QUNoTFAsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvZW1wdHktcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZW1wdHktcGFnZS5qc1wiKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBtb29kQ2hhbmdlLCBwYWdlVGl0bGUgfSBmcm9tIFwiLi4vc3JjL3JlZHV4L2FjdGlvbi91dGlsc1wiO1xyXG5jb25zdCBFbXB0eVBhZ2UgPSAoeyBwYWdlVGl0bGUgfSkgPT4ge1xyXG4gIGNvbnN0IHZlcnNpb24gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRoZW1lLnZlcnNpb24pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmVyc2lvbiAhPT0gXCJkYXJrXCIpIHtcclxuICAgICAgbW9vZENoYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgcGFnZVRpdGxlKFwiRGFzaGJvYXJkXCIpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gPGRpdj48L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgcGFnZVRpdGxlIH0pKEVtcHR5UGFnZSk7XHJcbiIsImV4cG9ydCBjb25zdCBQQUdFX1RJVExFID0gXCJQQUdFX1RJVExFXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFUX0JPWCA9IFwiQ0hBVF9CT1hcIjtcclxuXHJcbi8vIEhlYWRlclxyXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OID0gXCJOT1RJRklDQVRJT05cIjtcclxuZXhwb3J0IGNvbnN0IE5PVElGSUNBVElPTl8yID0gXCJOT1RJRklDQVRJT05fMlwiO1xyXG5leHBvcnQgY29uc3QgQ0hBVF9MSVNUUyA9IFwiQ0hBVF9MSVNUU1wiO1xyXG5leHBvcnQgY29uc3QgTVNHX0JPWCA9IFwiTVNHX0JPWFwiO1xyXG5leHBvcnQgY29uc3QgU0VORF9NU0cgPSBcIlNFTkRfTVNHXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfVVNFUiA9IFwiQUREX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9EQVRBID0gXCJTRUFSQ0hfREFUQVwiO1xyXG5leHBvcnQgY29uc3QgTk9URVMgPSBcIk5PVEVTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfTk9URSA9IFwiQUREX05PVEVcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9OT1RFID0gXCJERUxFVEVfTk9URVwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9OT1RFID0gXCJFRElUX05PVEVcIjtcclxuXHJcbi8vIGRlbW9cclxuZXhwb3J0IGNvbnN0IERFTU8gPSBcIkRFTU9cIjtcclxuXHJcbi8vIHNldHRpbmdcclxuZXhwb3J0IGNvbnN0IFRZUE9HUkFQSFkgPSBcIlRZUE9HUkFQSFlcIjtcclxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBcIlZFUlNJT05cIjtcclxuZXhwb3J0IGNvbnN0IExBWU9VVCA9IFwiTEFZT1VUXCI7XHJcbmV4cG9ydCBjb25zdCBQUklNQVJZID0gXCJQUklNQVJZXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfQkcgPSBcIkhFQURFUl9CR1wiO1xyXG5leHBvcnQgY29uc3QgTkFWX0hFQURFUl9CRyA9IFwiTkFWX0hFQURFUl9CR1wiO1xyXG5leHBvcnQgY29uc3QgU0lERUJBUl9CRyA9IFwiU0lERUJBUl9CR1wiO1xyXG5leHBvcnQgY29uc3QgU0lERUJBUl9TVFlMRSA9IFwiU0lERUJBUl9TVFlMRVwiO1xyXG5leHBvcnQgY29uc3QgU0lERUJBUl9QT1NJVElPTiA9IFwiU0lERUJBUl9QT1NJVElPTlwiO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX1BPU0lUSU9OID0gXCJIRUFERVJfUE9TSVRJT05cIjtcclxuZXhwb3J0IGNvbnN0IENPTlRBSU5FUl9MQVlPVVQgPSBcIkNPTlRBSU5FUl9MQVlPVVRcIjtcclxuZXhwb3J0IGNvbnN0IERJUkFDVElPTiA9IFwiRElSQUNUSU9OXCI7XHJcblxyXG4vLyBQYWdlc1xyXG4vLyBJbmRleCBQYWdlXHJcbmV4cG9ydCBjb25zdCBEQUlMWV9UQVJHRVRfQ0hBUlQgPSBcIkRBSUxZX1RBUkdFVF9DSEFSVFwiO1xyXG5leHBvcnQgY29uc3QgT1JERVJfQ0hBUlQgPSBcIk9SREVSX0NIQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9DSEFSVCA9IFwiQ1VTVE9NRVJfQ0hBUlRcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DVVNUT01FUl9MSVNUID0gXCJBRERfQ1VTVE9NRVJfTElTVFwiO1xyXG5leHBvcnQgY29uc3QgTUVOVV9DSEFSVCA9IFwiTUVOVV9DSEFSVFwiO1xyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfTUFQX0NIQVJUID0gXCJDVVNUT01FUl9NQVBfQ0hBUlRcIjtcclxuZXhwb3J0IGNvbnN0IE9SREVSX1JFUVVFU1QgPSBcIk9SREVSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFRSQU5ESU5HX01FTlUgPSBcIlRSQU5ESU5HX01FTlVcIjtcclxuZXhwb3J0IGNvbnN0IE9SREVSX0RFVEFJTFNfSVRFTVMgPSBcIk9SREVSX0RFVEFJTFNfSVRFTVNcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9PUkRFUl9ERVRBSUxTID0gXCJERUxFVEVfT1JERVJfREVUQUlMU1wiO1xyXG5cclxuLy8gT3JkZXIgbGlzdFxyXG5leHBvcnQgY29uc3QgT1JERVJTX0xJU1QgPSBcIk9SREVSU19MSVNUXCI7XHJcblxyXG4vLyBPcmRlciBEZXRhaWxcclxuZXhwb3J0IGNvbnN0IE9SREVSX0RFVEFJTFMgPSBcIk9SREVSX0RFVEFJTFNcIjtcclxuXHJcbi8vIEN1c3RvbWVyIExpc3RcclxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX0xJU1QgPSBcIkNVU1RPTUVSX0xJU1RcIjtcclxuXHJcbi8vIGFuYWx5dGljc1xyXG5leHBvcnQgY29uc3QgQU5BTFlUSUNTID0gXCJBTkFMWVRJQ1NcIjtcclxuXHJcbi8vIFJldmlld3NcclxuZXhwb3J0IGNvbnN0IFJFVklFV1MgPSBcIlJFVklFV1NcIjtcclxuXHJcbi8vIEFwcHNcclxuLy8gcHJvZmlsZVxyXG5leHBvcnQgY29uc3QgUFJPRklMRSA9IFwiUFJPRklMRVwiO1xyXG5cclxuLy8gUG9zdHNcclxuZXhwb3J0IGNvbnN0IFBPU1RTID0gXCJQT1NUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU1RTID0gXCJHRVRfUE9TVFNcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUID0gXCJERUxFVEVfUE9TVFwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUID0gXCJFRElUX1BPU1RcIjtcclxuXHJcbi8vIEhlYWRlckltZ1xyXG5leHBvcnQgY29uc3QgSEVBREVSX0lNRyA9IFwiSEVBREVSX0lNR1wiO1xyXG5cclxuLy8gaW50ZXJlc3RcclxuZXhwb3J0IGNvbnN0IElOVEVSRVNUID0gXCJJTlRFUkVTVFwiO1xyXG5cclxuLy8gRW1haWxcclxuZXhwb3J0IGNvbnN0IEVNQUlMX1JFQUQgPSBcIkVNQUlMX1JFQURcIjtcclxuXHJcbi8vIEVtYWlsIGluYm94XHJcbmV4cG9ydCBjb25zdCBFTUFJTF9JTkJPWCA9IFwiRU1BSUxfSU5CT1hcIjtcclxuXHJcbi8vIFByb2R1Y3RcclxuLy8gLT4gR3JpZFxyXG5leHBvcnQgY29uc3QgUFJPRFVDVFMgPSBcIlBST0RVQ1RTXCI7XHJcbi8vIC0+IE9yZGVyXHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUU19PUkRFUiA9IFwiUFJPRFVDVFNfT1JERVJcIjtcclxuLy8gLT4gSW52b2ljZVxyXG5leHBvcnQgY29uc3QgSU5WT0lDRSA9IFwiSU5WT0lDRVwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9JTlZPSUNFID0gXCJFRElUX0lOVk9JQ0VcIjtcclxuZXhwb3J0IGNvbnN0IElOVk9JQ0VfSVRFTVMgPSBcIklOVk9JQ0VfSVRFTVNcIjtcclxuZXhwb3J0IGNvbnN0IElOVk9JQ0VfSVRFTVNfRURJVCA9IFwiSU5WT0lDRV9JVEVNU19FRElUXCI7XHJcbmV4cG9ydCBjb25zdCBJTlZPSUNFX0lURU1TX0RFTEVURSA9IFwiSU5WT0lDRV9JVEVNU19ERUxFVEVcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9JTlZPSUNFX0lURU1TID0gXCJBRERfSU5WT0lDRV9JVEVNU1wiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0lOVk9JQ0UgPSBcIkRFTEVURV9JTlZPSUNFXCI7XHJcbi8vIC0+IEN1c3RvbWVyIGxpc3RcclxuZXhwb3J0IGNvbnN0IEFQUF9DVVNUT01FUl9MSVNUID0gXCJBUFBfQ1VTVE9NRVJfTElTVFwiO1xyXG5cclxuLy8gV2lkZ2V0IHBhZ2VcclxuZXhwb3J0IGNvbnN0IFdJREdFVF9CQVNJQyA9IFwiV0lER0VUX0JBU0lDXCI7XHJcblxyXG4vLyBBdXRoXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUiA9IFwiR0VUX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IExPR09VVF9VU0VSID0gXCJMT0dPVVRfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUiA9IFwiQVVUSF9FUlJPUlwiO1xyXG5leHBvcnQgY29uc3QgRk9SR0VUX1BBU1NXT1JEID0gXCJGT1JHRVRfUEFTU1dPUkRcIjtcclxuXHJcbi8vIFRhYmxlXHJcbmV4cG9ydCBjb25zdCBCQVNJQ19UQUJMRSA9IFwiQkFTSUNfVEFCTEVcIjtcclxuZXhwb3J0IGNvbnN0IFBST0ZJTEVfVEFCTEUgPSBcIlBST0ZJTEVfVEFCTEVcIjtcclxuZXhwb3J0IGNvbnN0IEZFRV9UQUJMRSA9IFwiRkVFX1RBQkxFXCI7XHJcbmV4cG9ydCBjb25zdCBQQVRJRU5UX1RBQkxFID0gXCJQQVRJRU5UX1RBQkxFXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRklMRV9UQUJMRSA9IFwiREVMRVRFX1BST0ZJTEVfVEFCTEVcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfUFJPRklMRV9UQUJMRSA9IFwiRURJVF9QUk9GSUxFX1RBQkxFXCI7XHJcblxyXG4vLyBUYWJsZSAtPiBic1xyXG5leHBvcnQgY29uc3QgR0VUX0JTX1RBQkxFID0gXCJCU19UQUJMRVwiO1xyXG5leHBvcnQgY29uc3QgUkVDRU5UX1BBWU1FTlRfUVVFVUUgPSBcIlJFQ0VOVF9QQVlNRU5UX1FVRVVFXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVDRU5UX1BBWU1FTlRfUVVFVUUgPSBcIkRFTEVURV9SRUNFTlRfUEFZTUVOVF9RVUVVRVwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9SRUNFTlRfUEFZTUVOVF9RVUVVRSA9IFwiRURJVF9SRUNFTlRfUEFZTUVOVF9RVUVVRVwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9FWEFNX1RPUFBFUlMgPSBcIkVESVRfRVhBTV9UT1BQRVJTXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfRVhBTV9UT1BQRVJTID0gXCJERUxFVEVfRVhBTV9UT1BQRVJTXCI7XHJcbmV4cG9ydCBjb25zdCBFWEFNX1RPUFBFUlMgPSBcIkVYQU1fVE9QUEVSU1wiO1xyXG5leHBvcnQgY29uc3QgQk9SREVSX1RBQkxFID0gXCJCT1JERVJfVEFCTEVcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfQk9SREVSX1RBQkxFID0gXCJFRElUX0JPUkRFUl9UQUJMRVwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0JPUkRFUl9UQUJMRSA9IFwiREVMRVRFX0JPUkRFUl9UQUJMRVwiO1xyXG5leHBvcnQgY29uc3QgVEFCTEVfU1RSSVBQRUQgPSBcIlRBQkxFX1NUUklQUEVEXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1RBQkxFX1NUUklQUEVEID0gXCJFRElUX1RBQkxFX1NUUklQUEVEXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfVEFCTEVfU1RSSVBQRUQgPSBcIkRFTEVURV9UQUJMRV9TVFJJUFBFRFwiO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9OT1RFLFxyXG4gIEFERF9VU0VSLFxyXG4gIENIQVRfQk9YLFxyXG4gIENIQVRfTElTVFMsXHJcbiAgREVMRVRFX05PVEUsXHJcbiAgRURJVF9OT1RFLFxyXG4gIE1TR19CT1gsXHJcbiAgTk9URVMsXHJcbiAgUEFHRV9USVRMRSxcclxuICBTRUFSQ0hfREFUQSxcclxuICBTRU5EX01TRyxcclxufSBmcm9tIFwiLi90eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGFnZVRpdGxlID0gKHRpdGxlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBQQUdFX1RJVExFLFxyXG4gICAgcGF5bG9hZDogdGl0bGUsXHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBSZXNpemUgd2luZG93XHJcbmV4cG9ydCBjb25zdCByZXNpemVXaW5kb3cgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gIHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjRcclxuICAgID8gYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNpZGViYXItc3R5bGVcIiwgXCJtaW5pXCIpXHJcbiAgICA6IHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OFxyXG4gICAgPyBib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtc2lkZWJhci1zdHlsZVwiLCBcIm92ZXJsYXlcIilcclxuICAgIDogYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNpZGViYXItc3R5bGVcIiwgXCJmdWxsXCIpO1xyXG59O1xyXG5cclxuLy8gIEJvZHkgYXR0cmlidXRlc1xyXG5leHBvcnQgY29uc3QgYm9keUFydCA9ICgpID0+IHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cG9ncmFwaHlcIiwgXCJwb3BwaW5zXCIpO1xyXG4gIC8vIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZS12ZXJzaW9uXCIsIFwibGlnaHRcIik7XHJcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxheW91dFwiLCBcInZlcnRpY2FsXCIpO1xyXG4gIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtaGVhZGVyYmdcIiwgXCJjb2xvcl8xXCIpO1xyXG4gIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWFkZXJiZ1wiLCBcImNvbG9yXzFcIik7XHJcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNpZGViYXItc3R5bGVcIiwgXCJmdWxsXCIpO1xyXG4gIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1zaWJlYmFyYmdcIiwgXCJjb2xvcl8xXCIpO1xyXG4gIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmltYXJ5XCIsIFwiY29sb3JfMVwiKTtcclxuICBib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtc2lkZWJhci1wb3NpdGlvblwiLCBcImZpeGVkXCIpO1xyXG4gIGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWFkZXItcG9zaXRpb25cIiwgXCJmaXhlZFwiKTtcclxuICBib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtY29udGFpbmVyXCIsIFwid2lkZVwiKTtcclxuICBib2R5LnNldEF0dHJpYnV0ZShcImRpcmVjdGlvblwiLCBcImx0clwiKTtcclxuICBib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtc2lkZWJhci1zdHlsZVwiLCBcImZ1bGxcIik7XHJcbn07XHJcblxyXG4vLyBwcmVsb2FkZXJcclxuZXhwb3J0IGNvbnN0IHByZWxvYWRlckFjdGlvbiA9ICgpID0+IHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXdyYXBwZXJcIikuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBkYXJrIGFuZCBsaWdodCBtb29kXHJcbmV4cG9ydCBjb25zdCBtb29kQ2hhbmdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gIGlmIChwYXRoLmluY2x1ZGVzKFwiZGFya1wiKSkge1xyXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLXZlcnNpb25cIiwgXCJkYXJrXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWUtdmVyc2lvblwiLCBcImxpZ2h0XCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWRlQmFyQWN0aXZlID0gKGRvYykgPT4ge1xyXG4gIGxldCBhY3RpdmUgPSBkb2MgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1tLWNvbGxhcHNlIGFcIikgOiBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGFjdGl2ZVtpXTtcclxuICAgIGlmIChlbGVtZW50LmhyZWYpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuaHJlZiAhPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtbS1hY3RpdmVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3QgbWF0Y2hcIiwgZWxlbWVudC5ocmVmKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtbS1hY3RpdmVcIik7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtbS1hY3RpdmVcIik7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1tLXNob3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICAgICAgXCJtbS1hY3RpdmVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgICBcIm1tLXNob3dcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICAgIFwibW0tYWN0aXZlXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1hdGNoXCIsIGVsZW1lbnQuaHJlZik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL3dpZGdldC1iYXNpY1wiKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpZGdldC1iYXNpY1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwibW0tYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vIENoYXRCb3hcclxuZXhwb3J0IGNvbnN0IGNoYXRCb3ggPSAodmFsdWUpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6IENIQVRfQk9YLFxyXG4gICAgcGF5bG9hZDogdmFsdWUsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyRGF0YSA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkubnBvaW50LmlvL2ZiYzE0ZWVlNzQ0MWYzYjg4NzdiL2hlYWRlci9cIlxyXG4gICAgKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hBVF9MSVNUUyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEuY2hhdExpc3RzLFxyXG4gICAgfSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IE1TR19CT1gsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLm1zZ0JveCxcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBTRUFSQ0hfREFUQSxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEuc2VhcmNoRGF0YSxcclxuICAgIH0pO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBOT1RFUyxcclxuICAgICAgcGF5bG9hZDogcmVzLmRhdGEubm90ZXMsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE5vdGUgPSAobm90ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgbmV3Tm90ZSA9IHsgdGl0bGU6IG5vdGUsIGRhdGU6IG1vbWVudCgpLmZvcm1hdChcIkQgTU1NTSBZWVlZXCIpIH07XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogQUREX05PVEUsXHJcbiAgICBwYXlsb2FkOiBuZXdOb3RlLFxyXG4gIH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZWRpdE5vdGUgPSAobm90ZSkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc29sZS5sb2cobm90ZSk7XHJcbiAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogRURJVF9OT1RFLFxyXG4gICAgcGF5bG9hZDogbm90ZSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVOb3RlID0gKGlkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBERUxFVEVfTk9URSxcclxuICAgIHBheWxvYWQ6IGlkLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbnRNc2cgPSAobXNnKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKClcclxuICAgIC50b0xvY2FsZURhdGVTdHJpbmcoW10sIHsgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSlcclxuICAgIC5zcGxpdChcIiBcIilbMV07XHJcbiAgbGV0IG5ld01zZyA9IHtcclxuICAgIGltZzogXCIvaW1hZ2VzL2F2YXRhci8yLmpwZ1wiLFxyXG4gICAgbmFtZTogXCJtZVwiLFxyXG4gICAgbXNnLFxyXG4gICAgdGltZTogYCR7dGltZX0sIFRvZGF5YCxcclxuICB9O1xyXG5cclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBTRU5EX01TRyxcclxuICAgIHBheWxvYWQ6IG5ld01zZyxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gKHVzZXJJbmZvKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBBRERfVVNFUixcclxuICAgIHBheWxvYWQ6IHVzZXJJbmZvLFxyXG4gIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=