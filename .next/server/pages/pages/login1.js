module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/pages/login1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/pages/login1.js":
/*!*******************************!*\
  !*** ./pages/pages/login1.js ***!
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
/* harmony import */ var _src_components_login1_ForgetPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/login1/ForgetPassword */ "./src/components/login1/ForgetPassword.js");
/* harmony import */ var _src_components_login1_SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/login1/SignIn */ "./src/components/login1/SignIn.js");
/* harmony import */ var _src_components_login1_SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/login1/SignUp */ "./src/components/login1/SignUp.js");
/* harmony import */ var _src_redux_action_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/redux/action/auth */ "./src/redux/action/auth.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\pages\\pages\\login1.js";








const Login1 = ({
  getUser,
  users
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getUser();
  }, []);

  if (users) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
  }

  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(2);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "authincation d-flex flex-column flex-lg-row flex-column-fluid",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "login-aside text-center  d-flex flex-column flex-row-auto",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex flex-column-auto flex-column pt-lg-40 pt-15",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center mb-4 pt-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/logo-full.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "mb-2",
          children: "Welcome back!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["User Experience & Interface Design ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 52
          }, undefined), "Strategy SaaS Solutions"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "aside-image",
        style: {
          backgroundImage: "url(/images/background/pic1.svg)"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex justify-content-center h-100 align-items-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "authincation-content style-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row no-gutters",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-xl-12 tab-content",
              children: [active === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_login1_SignUp__WEBPACK_IMPORTED_MODULE_6__["default"], {
                onClick: () => setActive(2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 34
              }, undefined), active === 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_login1_SignIn__WEBPACK_IMPORTED_MODULE_5__["default"], {
                onClick: () => setActive(3),
                onClick1: () => setActive(1)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 19
              }, undefined), active === 3 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_login1_ForgetPassword__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 34
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  users: state.auth.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getUser: _src_redux_action_auth__WEBPACK_IMPORTED_MODULE_7__["getUser"]
})(Login1));

/***/ }),

/***/ "./src/components/login1/ForgetPassword.js":
/*!*************************************************!*\
  !*** ./src/components/login1/ForgetPassword.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebaseConfig */ "./src/firebaseConfig.js");
/* harmony import */ var _Schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Schema */ "./src/components/login1/Schema.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\components\\login1\\ForgetPassword.js";





const ForgetPassword = () => {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "forgot-password",
    className: "auth-form tab-pane fade show active form-validation",
    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: `alert alert-${error.error ? "danger" : "success"}`,
      children: error.msg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        email: ""
      },
      validationSchema: _Schema__WEBPACK_IMPORTED_MODULE_4__["forgetPasswordSchema"],
      onSubmit: (values, {
        setSubmitting
      }) => {
        _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__["auth"].sendPasswordResetEmail(values.email).then(() => {
          setError({
            msg: "Sent forget password link check your mail .",
            error: false
          });
        }).catch(error => {
          setError({
            msg: error.message,
            error: true
          });
        });
      },
      children: ({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        id: "dz_login_signup_form",
        className: "form-validate",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "text-center mb-4 text-black",
          children: "Forgot Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "mb-1 ",
            htmlFor: "val-email",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Enter Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              className: "form-control",
              id: "val-email",
              name: "email",
              placeholder: "hello@example.com",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "val-username1-error",
              className: "invalid-feedback animated fadeInUp",
              style: {
                display: "block"
              },
              children: errors.email && errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group text-center mt-4",
          disabled: isSubmitting,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "btn btn-primary btn-block",
            id: "dz-signup-submit",
            children: "SUBMIT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), " "]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ForgetPassword);

/***/ }),

/***/ "./src/components/login1/Schema.js":
/*!*****************************************!*\
  !*** ./src/components/login1/Schema.js ***!
  \*****************************************/
/*! exports provided: sigupSchema, siginSchema, forgetPasswordSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sigupSchema", function() { return sigupSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siginSchema", function() { return siginSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgetPasswordSchema", function() { return forgetPasswordSchema; });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const sigupSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  username: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(3, "Your username must consist of at least 3 characters ").max(50, "Your username must consist of at least 3 characters ").required("Please enter a username"),
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(6, "Your password must be at least 6 characters long").max(50, "Your password must be at least 6 characters long").required("Please provide a password"),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email("Please enter a valid email address ").required("Please provide a Email address")
});
const siginSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  password: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().min(5, "Your password must be at least 5 characters long").max(50, "Your password must be at least 5 characters long").required("Please provide a password"),
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email("Please enter a valid email address ").required("Please provide a Email address")
});
const forgetPasswordSchema = yup__WEBPACK_IMPORTED_MODULE_0__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__["string"]().email("Please enter a valid email address ").required("Please provide a Email address")
});

/***/ }),

/***/ "./src/components/login1/SignIn.js":
/*!*****************************************!*\
  !*** ./src/components/login1/SignIn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action/auth */ "./src/redux/action/auth.js");
/* harmony import */ var _Schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Schema */ "./src/components/login1/Schema.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\components\\login1\\SignIn.js";






const SignIn = ({
  onClick,
  onClick1,
  loginUser,
  errorMsg
}) => {
  const msg = () => {
    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
      title: !errorMsg.auth ? "error" : "success",
      text: errorMsg.msg,
      icon: !errorMsg.auth ? "error" : "success",
      buttons: {
        confirm: {
          text: !errorMsg.auth ? "Try Again" : "Login success",
          closeModal: true
        }
      }
    }).then();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "sign-in",
    className: "auth-form tab-pane fade show active form-validation",
    children: [errorMsg && msg(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        password: "user123",
        email: "user@user.com"
      },
      validationSchema: _Schema__WEBPACK_IMPORTED_MODULE_5__["siginSchema"],
      onSubmit: (values, {
        setSubmitting
      }) => {
        loginUser(values);
      },
      children: ({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        id: "dz_login_signup_form",
        className: "form-validate",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "text-center mb-4 text-black",
          children: "Sign in your account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "mb-1 text-black",
            htmlFor: "val-email",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              className: "form-control",
              id: "val-email",
              name: "email",
              placeholder: "hello@example.com",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "val-username1-error",
              className: "invalid-feedback animated fadeInUp",
              style: {
                display: "block"
              },
              children: errors.email && errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "mb-1 text-black",
            htmlFor: "val-password",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "password",
              className: "form-control",
              id: "val-password",
              name: "password",
              defaultValue: "Password",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "val-username1-error",
              className: "invalid-feedback animated fadeInUp",
              style: {
                display: "block"
              },
              children: errors.password && errors.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-row d-flex justify-content-between mt-4 mb-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "custom-control custom-checkbox ml-1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "checkbox",
                className: "custom-control-input",
                id: "basic_checkbox_1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "custom-control-label",
                htmlFor: "basic_checkbox_1",
                children: "Remember my preference"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              onClick: () => onClick(),
              className: "c-pointer",
              "data-toggle": "tab",
              children: "Forgot Password?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group text-center mt-4",
          disabled: isSubmitting,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "btn btn-primary btn-block",
            id: "dz-signup-submit",
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "new-account mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Don't have an account?", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-primary",
          href: "#",
          "data-toggle": "tab",
          onClick: () => onClick1(),
          children: "Sign up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  errorMsg: state.auth.authErrors
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  loginUser: _redux_action_auth__WEBPACK_IMPORTED_MODULE_4__["loginUser"]
})(SignIn));

/***/ }),

/***/ "./src/components/login1/SignUp.js":
/*!*****************************************!*\
  !*** ./src/components/login1/SignUp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_action_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action/auth */ "./src/redux/action/auth.js");
/* harmony import */ var _Schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Schema */ "./src/components/login1/Schema.js");

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\components\\login1\\SignUp.js";






const SignUp = ({
  onClick,
  registerUser,
  errorMsg
}) => {
  const msg = () => {
    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
      title: errorMsg && !errorMsg.auth ? "error" : "success",
      text: errorMsg && errorMsg.errorMessage,
      icon: errorMsg && !errorMsg.auth ? "error" : "success",
      buttons: {
        confirm: {
          text: errorMsg && !errorMsg.auth ? "Try Again" : "Signup success",
          closeModal: true
        }
      }
    }).then();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "sign-up",
    className: "auth-form tab-pane fade show active  form-validation",
    children: [errorMsg && msg(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
      initialValues: {
        username: "",
        password: "",
        email: ""
      },
      validationSchema: _Schema__WEBPACK_IMPORTED_MODULE_5__["sigupSchema"],
      onSubmit: (values, {
        setSubmitting
      }) => {
        registerUser(values);
      },
      children: ({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        id: "dz_login_signup_form",
        className: "form-validate",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "text-center mb-4 text-black",
          children: "Sign up your account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "mb-1 text-black",
            htmlFor: "val-username",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Username"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              id: "val-username1",
              placeholder: "Enter a username..",
              name: "username",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "val-username1-error",
              className: "invalid-feedback animated fadeInUp",
              style: {
                display: "block"
              },
              children: errors.username && errors.username
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "mb-1 text-black",
            htmlFor: "val-email",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              className: "form-control",
              id: "val-email",
              name: "email",
              placeholder: "hello@example.com",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "val-username1-error",
              className: "invalid-feedback animated fadeInUp",
              style: {
                display: "block"
              },
              children: errors.email && errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "mb-1 text-black",
            htmlFor: "val-password",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "password",
              className: "form-control",
              id: "val-password",
              name: "password",
              defaultValue: "Password",
              onChange: handleChange,
              onBlur: handleBlur,
              value: values.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "val-username1-error",
              className: "invalid-feedback animated fadeInUp",
              style: {
                display: "block"
              },
              children: errors.password && errors.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group text-center mt-4",
          disabled: isSubmitting,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "btn btn-primary btn-block",
            id: "dz-signup-submit",
            children: "Sign up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "new-account mt-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Already have an account?", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "text-primary",
          href: "#",
          "data-toggle": "tab",
          onClick: () => onClick(),
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

const mapStateToProps = state => ({
  errorMsg: state.auth.authErrors
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  registerUser: _redux_action_auth__WEBPACK_IMPORTED_MODULE_4__["registerUser"]
})(SignUp));

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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFnZXMvbG9naW4xLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luMS9Gb3JnZXRQYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dpbjEvU2NoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luMS9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9naW4xL1NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlyZWJhc2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbi9hdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb24vdHlwZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dlZXRhbGVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInl1cFwiIl0sIm5hbWVzIjpbIkxvZ2luMSIsImdldFVzZXIiLCJ1c2VycyIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VTdGF0ZSIsImJhY2tncm91bmRJbWFnZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiYXV0aCIsImNvbm5lY3QiLCJGb3JnZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJtc2ciLCJlbWFpbCIsImZvcmdldFBhc3N3b3JkU2NoZW1hIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJ0aGVuIiwiY2F0Y2giLCJtZXNzYWdlIiwiZXJyb3JzIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsImlzU3VibWl0dGluZyIsImRpc3BsYXkiLCJzaWd1cFNjaGVtYSIsIll1cCIsInNoYXBlIiwidXNlcm5hbWUiLCJtaW4iLCJtYXgiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwic2lnaW5TY2hlbWEiLCJTaWduSW4iLCJvbkNsaWNrIiwib25DbGljazEiLCJsb2dpblVzZXIiLCJlcnJvck1zZyIsInN3YWwiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwiYnV0dG9ucyIsImNvbmZpcm0iLCJjbG9zZU1vZGFsIiwiYXV0aEVycm9ycyIsIlNpZ25VcCIsInJlZ2lzdGVyVXNlciIsImVycm9yTWVzc2FnZSIsImFwcCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiY3VycmVudFVzZXIiLCJkaXNwYXRjaCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJ0eXBlIiwiR0VUX1VTRVIiLCJwYXlsb2FkIiwicHJvdmlkZXJEYXRhIiwiQVVUSF9FUlJPUiIsInVzZXJEYXRhIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlckNyZWRlbnRpYWwiLCJ1cGRhdGVQcm9maWxlIiwiZGlzcGxheU5hbWUiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImxvZ291dFVzZXIiLCJzaWduT3V0IiwiUEFHRV9USVRMRSIsIkNIQVRfQk9YIiwiTk9USUZJQ0FUSU9OIiwiTk9USUZJQ0FUSU9OXzIiLCJDSEFUX0xJU1RTIiwiTVNHX0JPWCIsIlNFTkRfTVNHIiwiQUREX1VTRVIiLCJTRUFSQ0hfREFUQSIsIk5PVEVTIiwiQUREX05PVEUiLCJERUxFVEVfTk9URSIsIkVESVRfTk9URSIsIkRFTU8iLCJUWVBPR1JBUEhZIiwiVkVSU0lPTiIsIkxBWU9VVCIsIlBSSU1BUlkiLCJIRUFERVJfQkciLCJOQVZfSEVBREVSX0JHIiwiU0lERUJBUl9CRyIsIlNJREVCQVJfU1RZTEUiLCJTSURFQkFSX1BPU0lUSU9OIiwiSEVBREVSX1BPU0lUSU9OIiwiQ09OVEFJTkVSX0xBWU9VVCIsIkRJUkFDVElPTiIsIkRBSUxZX1RBUkdFVF9DSEFSVCIsIk9SREVSX0NIQVJUIiwiQ1VTVE9NRVJfQ0hBUlQiLCJBRERfQ1VTVE9NRVJfTElTVCIsIk1FTlVfQ0hBUlQiLCJDVVNUT01FUl9NQVBfQ0hBUlQiLCJPUkRFUl9SRVFVRVNUIiwiVFJBTkRJTkdfTUVOVSIsIk9SREVSX0RFVEFJTFNfSVRFTVMiLCJERUxFVEVfT1JERVJfREVUQUlMUyIsIk9SREVSU19MSVNUIiwiT1JERVJfREVUQUlMUyIsIkNVU1RPTUVSX0xJU1QiLCJBTkFMWVRJQ1MiLCJSRVZJRVdTIiwiUFJPRklMRSIsIlBPU1RTIiwiR0VUX1BPU1RTIiwiREVMRVRFX1BPU1QiLCJFRElUX1BPU1QiLCJIRUFERVJfSU1HIiwiSU5URVJFU1QiLCJFTUFJTF9SRUFEIiwiRU1BSUxfSU5CT1giLCJQUk9EVUNUUyIsIlBST0RVQ1RTX09SREVSIiwiSU5WT0lDRSIsIkVESVRfSU5WT0lDRSIsIklOVk9JQ0VfSVRFTVMiLCJJTlZPSUNFX0lURU1TX0VESVQiLCJJTlZPSUNFX0lURU1TX0RFTEVURSIsIkFERF9JTlZPSUNFX0lURU1TIiwiREVMRVRFX0lOVk9JQ0UiLCJBUFBfQ1VTVE9NRVJfTElTVCIsIldJREdFVF9CQVNJQyIsIkxPR09VVF9VU0VSIiwiRk9SR0VUX1BBU1NXT1JEIiwiQkFTSUNfVEFCTEUiLCJQUk9GSUxFX1RBQkxFIiwiRkVFX1RBQkxFIiwiUEFUSUVOVF9UQUJMRSIsIkRFTEVURV9QUk9GSUxFX1RBQkxFIiwiRURJVF9QUk9GSUxFX1RBQkxFIiwiR0VUX0JTX1RBQkxFIiwiUkVDRU5UX1BBWU1FTlRfUVVFVUUiLCJERUxFVEVfUkVDRU5UX1BBWU1FTlRfUVVFVUUiLCJFRElUX1JFQ0VOVF9QQVlNRU5UX1FVRVVFIiwiRURJVF9FWEFNX1RPUFBFUlMiLCJERUxFVEVfRVhBTV9UT1BQRVJTIiwiRVhBTV9UT1BQRVJTIiwiQk9SREVSX1RBQkxFIiwiRURJVF9CT1JERVJfVEFCTEUiLCJERUxFVEVfQk9SREVSX1RBQkxFIiwiVEFCTEVfU1RSSVBQRUQiLCJFRElUX1RBQkxFX1NUUklQUEVEIiwiREVMRVRFX1RBQkxFX1NUUklQUEVEIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0IsQyxDQUVQOztBQUNPLE1BQU1DLFlBQVksR0FBRyxVQUFyQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUIsQzs7Ozs7Ozs7Ozs7QUNqSVAseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvcGFnZXMvbG9naW4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wYWdlcy9sb2dpbjEuanNcIik7XG4iLCJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEZvcmdldFBhc3N3b3JkIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9sb2dpbjEvRm9yZ2V0UGFzc3dvcmRcIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvbG9naW4xL1NpZ25JblwiO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9sb2dpbjEvU2lnblVwXCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi4vLi4vc3JjL3JlZHV4L2FjdGlvbi9hdXRoXCI7XHJcblxyXG5jb25zdCBMb2dpbjEgPSAoeyBnZXRVc2VyLCB1c2VycyB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFVzZXIoKTtcclxuICB9LCBbXSk7XHJcbiAgaWYgKHVzZXJzKSB7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgyKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoaW5jYXRpb24gZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbGctcm93IGZsZXgtY29sdW1uLWZsdWlkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYXNpZGUgdGV4dC1jZW50ZXIgIGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LXJvdy1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4tYXV0byBmbGV4LWNvbHVtbiBwdC1sZy00MCBwdC0xNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00IHB0LTVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28tZnVsbC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMlwiPldlbGNvbWUgYmFjayE8L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFVzZXIgRXhwZXJpZW5jZSAmYW1wOyBJbnRlcmZhY2UgRGVzaWduIDxiciAvPlxyXG4gICAgICAgICAgICBTdHJhdGVneSBTYWFTIFNvbHV0aW9uc1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFzaWRlLWltYWdlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltYWdlcy9iYWNrZ3JvdW5kL3BpYzEuc3ZnKVwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgtcm93LWZsdWlkIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBwLTcgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhpbmNhdGlvbi1jb250ZW50IHN0eWxlLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTEyIHRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZlID09PSAxICYmIDxTaWduVXAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKDIpfSAvPn1cclxuICAgICAgICAgICAgICAgIHthY3RpdmUgPT09IDIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8U2lnbkluXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKDMpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sxPXsoKSA9PiBzZXRBY3RpdmUoMSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge2FjdGl2ZSA9PT0gMyAmJiA8Rm9yZ2V0UGFzc3dvcmQgLz59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICB1c2Vyczogc3RhdGUuYXV0aC51c2VycyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRVc2VyIH0pKExvZ2luMSk7XHJcbiIsImltcG9ydCB7IEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi9maXJlYmFzZUNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBmb3JnZXRQYXNzd29yZFNjaGVtYSB9IGZyb20gXCIuL1NjaGVtYVwiO1xyXG5jb25zdCBGb3JnZXRQYXNzd29yZCA9ICgpID0+IHtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPVwiZm9yZ290LXBhc3N3b3JkXCJcclxuICAgICAgY2xhc3NOYW1lPVwiYXV0aC1mb3JtIHRhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUgZm9ybS12YWxpZGF0aW9uXCJcclxuICAgID5cclxuICAgICAge2Vycm9yICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzPXtgYWxlcnQgYWxlcnQtJHtlcnJvci5lcnJvciA/IFwiZGFuZ2VyXCIgOiBcInN1Y2Nlc3NcIn1gfT5cclxuICAgICAgICAgIHtlcnJvci5tc2d9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiBcIlwiIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17Zm9yZ2V0UGFzc3dvcmRTY2hlbWF9XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICBhdXRoXHJcbiAgICAgICAgICAgIC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKHZhbHVlcy5lbWFpbClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKHtcclxuICAgICAgICAgICAgICAgIG1zZzogXCJTZW50IGZvcmdldCBwYXNzd29yZCBsaW5rIGNoZWNrIHlvdXIgbWFpbCAuXCIsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcih7IG1zZzogZXJyb3IubWVzc2FnZSwgZXJyb3I6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7KHtcclxuICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgaWQ9XCJkel9sb2dpbl9zaWdudXBfZm9ybVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdmFsaWRhdGVcIlxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNCB0ZXh0LWJsYWNrXCI+Rm9yZ290IFBhc3N3b3JkPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTEgXCIgaHRtbEZvcj1cInZhbC1lbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FbnRlciBFbWFpbDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInZhbC1lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaGVsbG9AZXhhbXBsZS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInZhbC11c2VybmFtZTEtZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrIGFuaW1hdGVkIGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlciBtdC00XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZHotc2lnbnVwLXN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU1VCTUlUXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPntcIiBcIn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JnZXRQYXNzd29yZDtcclxuIiwiaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuZXhwb3J0IGNvbnN0IHNpZ3VwU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICB1c2VybmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAubWluKDMsIFwiWW91ciB1c2VybmFtZSBtdXN0IGNvbnNpc3Qgb2YgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIFwiKVxyXG4gICAgLm1heCg1MCwgXCJZb3VyIHVzZXJuYW1lIG11c3QgY29uc2lzdCBvZiBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgXCIpXHJcbiAgICAucmVxdWlyZWQoXCJQbGVhc2UgZW50ZXIgYSB1c2VybmFtZVwiKSxcclxuICBwYXNzd29yZDogWXVwLnN0cmluZygpXHJcbiAgICAubWluKDYsIFwiWW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nXCIpXHJcbiAgICAubWF4KDUwLCBcIllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ1wiKVxyXG4gICAgLnJlcXVpcmVkKFwiUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZFwiKSxcclxuICBlbWFpbDogWXVwLnN0cmluZygpXHJcbiAgICAuZW1haWwoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIFwiKVxyXG4gICAgLnJlcXVpcmVkKFwiUGxlYXNlIHByb3ZpZGUgYSBFbWFpbCBhZGRyZXNzXCIpLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNpZ2luU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICBwYXNzd29yZDogWXVwLnN0cmluZygpXHJcbiAgICAubWluKDUsIFwiWW91ciBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBsb25nXCIpXHJcbiAgICAubWF4KDUwLCBcIllvdXIgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnMgbG9uZ1wiKVxyXG4gICAgLnJlcXVpcmVkKFwiUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZFwiKSxcclxuICBlbWFpbDogWXVwLnN0cmluZygpXHJcbiAgICAuZW1haWwoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIFwiKVxyXG4gICAgLnJlcXVpcmVkKFwiUGxlYXNlIHByb3ZpZGUgYSBFbWFpbCBhZGRyZXNzXCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JnZXRQYXNzd29yZFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKVxyXG4gICAgLmVtYWlsKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyBcIilcclxuICAgIC5yZXF1aXJlZChcIlBsZWFzZSBwcm92aWRlIGEgRW1haWwgYWRkcmVzc1wiKSxcclxufSk7XHJcbiIsImltcG9ydCB7IEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgeyBsb2dpblVzZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uL2F1dGhcIjtcclxuaW1wb3J0IHsgc2lnaW5TY2hlbWEgfSBmcm9tIFwiLi9TY2hlbWFcIjtcclxuY29uc3QgU2lnbkluID0gKHsgb25DbGljaywgb25DbGljazEsIGxvZ2luVXNlciwgZXJyb3JNc2cgfSkgPT4ge1xyXG4gIGNvbnN0IG1zZyA9ICgpID0+IHtcclxuICAgIHN3YWwoe1xyXG4gICAgICB0aXRsZTogIWVycm9yTXNnLmF1dGggPyBcImVycm9yXCIgOiBcInN1Y2Nlc3NcIixcclxuICAgICAgdGV4dDogZXJyb3JNc2cubXNnLFxyXG4gICAgICBpY29uOiAhZXJyb3JNc2cuYXV0aCA/IFwiZXJyb3JcIiA6IFwic3VjY2Vzc1wiLFxyXG4gICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgY29uZmlybToge1xyXG4gICAgICAgICAgdGV4dDogIWVycm9yTXNnLmF1dGggPyBcIlRyeSBBZ2FpblwiIDogXCJMb2dpbiBzdWNjZXNzXCIsXHJcbiAgICAgICAgICBjbG9zZU1vZGFsOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cInNpZ24taW5cIlxyXG4gICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0gdGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSBmb3JtLXZhbGlkYXRpb25cIlxyXG4gICAgPlxyXG4gICAgICB7ZXJyb3JNc2cgJiYgbXNnKCl9XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHBhc3N3b3JkOiBcInVzZXIxMjNcIiwgZW1haWw6IFwidXNlckB1c2VyLmNvbVwiIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2lnaW5TY2hlbWF9XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICBsb2dpblVzZXIodmFsdWVzKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7XHJcbiAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIGlkPVwiZHpfbG9naW5fc2lnbnVwX2Zvcm1cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRlXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTQgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgIFNpZ24gaW4geW91ciBhY2NvdW50XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0xIHRleHQtYmxhY2tcIiBodG1sRm9yPVwidmFsLWVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkVtYWlsPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidmFsLWVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJoZWxsb0BleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidmFsLXVzZXJuYW1lMS1lcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2sgYW5pbWF0ZWQgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0xIHRleHQtYmxhY2tcIiBodG1sRm9yPVwidmFsLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlBhc3N3b3JkPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidmFsLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInZhbC11c2VybmFtZTEtZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrIGFuaW1hdGVkIGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG1sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNpY19jaGVja2JveF8xXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJiYXNpY19jaGVja2JveF8xXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlbWVtYmVyIG15IHByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD9cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCB0ZXh0LWNlbnRlciBtdC00XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZHotc2lnbnVwLXN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYWNjb3VudCBtdC0zXCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sxKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGVycm9yTXNnOiBzdGF0ZS5hdXRoLmF1dGhFcnJvcnMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9naW5Vc2VyIH0pKFNpZ25Jbik7XHJcbiIsImltcG9ydCB7IEZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uL2F1dGhcIjtcclxuaW1wb3J0IHsgc2lndXBTY2hlbWEgfSBmcm9tIFwiLi9TY2hlbWFcIjtcclxuY29uc3QgU2lnblVwID0gKHsgb25DbGljaywgcmVnaXN0ZXJVc2VyLCBlcnJvck1zZyB9KSA9PiB7XHJcbiAgY29uc3QgbXNnID0gKCkgPT4ge1xyXG4gICAgc3dhbCh7XHJcbiAgICAgIHRpdGxlOiBlcnJvck1zZyAmJiAhZXJyb3JNc2cuYXV0aCA/IFwiZXJyb3JcIiA6IFwic3VjY2Vzc1wiLFxyXG4gICAgICB0ZXh0OiBlcnJvck1zZyAmJiBlcnJvck1zZy5lcnJvck1lc3NhZ2UsXHJcbiAgICAgIGljb246IGVycm9yTXNnICYmICFlcnJvck1zZy5hdXRoID8gXCJlcnJvclwiIDogXCJzdWNjZXNzXCIsXHJcbiAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBjb25maXJtOiB7XHJcbiAgICAgICAgICB0ZXh0OiBlcnJvck1zZyAmJiAhZXJyb3JNc2cuYXV0aCA/IFwiVHJ5IEFnYWluXCIgOiBcIlNpZ251cCBzdWNjZXNzXCIsXHJcbiAgICAgICAgICBjbG9zZU1vZGFsOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBpZD1cInNpZ24tdXBcIlxyXG4gICAgICBjbGFzc05hbWU9XCJhdXRoLWZvcm0gdGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSAgZm9ybS12YWxpZGF0aW9uXCJcclxuICAgID5cclxuICAgICAge2Vycm9yTXNnICYmIG1zZygpfVxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIGVtYWlsOiBcIlwiIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c2lndXBTY2hlbWF9XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICByZWdpc3RlclVzZXIodmFsdWVzKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyh7XHJcbiAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIGlkPVwiZHpfbG9naW5fc2lnbnVwX2Zvcm1cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRlXCJcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTQgdGV4dC1ibGFja1wiPlxyXG4gICAgICAgICAgICAgIFNpZ24gdXAgeW91ciBhY2NvdW50XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0xIHRleHQtYmxhY2tcIiBodG1sRm9yPVwidmFsLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlVzZXJuYW1lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWwtdXNlcm5hbWUxXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHVzZXJuYW1lLi5cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInZhbC11c2VybmFtZTEtZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrIGFuaW1hdGVkIGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgJiYgZXJyb3JzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMSB0ZXh0LWJsYWNrXCIgaHRtbEZvcj1cInZhbC1lbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInZhbC1lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaGVsbG9AZXhhbXBsZS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInZhbC11c2VybmFtZTEtZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrIGFuaW1hdGVkIGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMSB0ZXh0LWJsYWNrXCIgaHRtbEZvcj1cInZhbC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5QYXNzd29yZDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInZhbC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ2YWwtdXNlcm5hbWUxLWVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFjayBhbmltYXRlZCBmYWRlSW5VcFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXIgbXQtNFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cImR6LXNpZ251cC1zdWJtaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LWFjY291bnQgbXQtM1wiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCJcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGVycm9yTXNnOiBzdGF0ZS5hdXRoLmF1dGhFcnJvcnMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgcmVnaXN0ZXJVc2VyIH0pKFNpZ25VcCk7XHJcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcclxubGV0IGFwcDtcclxuYXBwID1cclxuICAhZmlyZWJhc2UuYXBwcy5sZW5ndGggJiZcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcclxuICAgIGFwaUtleTogXCJBSXphU3lELWNVYThIMHJWOWFlVF9iTUZVbFBzV3g1ekdlNVRCYm9cIixcclxuICAgIGF1dGhEb21haW46IFwidWVuYXJlYWN0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcInVlbmFyZWFjdFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ1ZW5hcmVhY3QuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwNDY4MzAyMzg1ODRcIixcclxuICAgIGFwcElkOiBcIjE6MTA0NjgzMDIzODU4NDp3ZWI6MGI3YjRiNTNiYjk2NTA5NzdmMTY4ZFwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVc4Nks3UU01UDlcIixcclxuICB9KTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBhcHAgJiYgYXBwLmF1dGgoKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlQ29uZmlnXCI7XHJcbmltcG9ydCB7IEFVVEhfRVJST1IsIEdFVF9VU0VSIH0gZnJvbSBcIi4vdHlwZVwiO1xyXG5cclxuY29uc3QgY3VycmVudFVzZXIgPSAoZGlzcGF0Y2gpID0+IHtcclxuICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEdFVF9VU0VSLFxyXG4gICAgICAgIHBheWxvYWQ6IHVzZXIucHJvdmlkZXJEYXRhWzBdLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBHRVRfVVNFUixcclxuICAgICAgICBwYXlsb2FkOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEFVVEhfRVJST1IsXHJcbiAgICAgICAgcGF5bG9hZDogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGN1cnJlbnRVc2VyKGRpc3BhdGNoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSAodXNlckRhdGEpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZSB9ID0gdXNlckRhdGE7XHJcbiAgYXV0aFxyXG4gICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgYXV0aC5jdXJyZW50VXNlci51cGRhdGVQcm9maWxlKHtcclxuICAgICAgICBkaXNwbGF5TmFtZTogdXNlcm5hbWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQVVUSF9FUlJPUixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBtc2c6IFwiUmVnaXN0ZXIgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZFwiLFxyXG4gICAgICAgICAgYXV0aDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY3VycmVudFVzZXIoZGlzcGF0Y2gpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEFVVEhfRVJST1IsXHJcbiAgICAgICAgcGF5bG9hZDogeyBtc2c6IGVycm9yLm1lc3NhZ2UsIGF1dGg6IGZhbHNlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKHVzZXJEYXRhKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlckRhdGE7XHJcbiAgYXV0aFxyXG4gICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQVVUSF9FUlJPUixcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICBtc2c6IFwiTG9naW4gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZFwiLFxyXG4gICAgICAgICAgYXV0aDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY3VycmVudFVzZXIoZGlzcGF0Y2gpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEFVVEhfRVJST1IsXHJcbiAgICAgICAgcGF5bG9hZDogeyBtc2c6IGVycm9yLm1lc3NhZ2UsIGF1dGg6IGZhbHNlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gIGF1dGhcclxuICAgIC5zaWduT3V0KClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY3VycmVudFVzZXIoZGlzcGF0Y2gpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IFBBR0VfVElUTEUgPSBcIlBBR0VfVElUTEVcIjtcclxuZXhwb3J0IGNvbnN0IENIQVRfQk9YID0gXCJDSEFUX0JPWFwiO1xyXG5cclxuLy8gSGVhZGVyXHJcbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT04gPSBcIk5PVElGSUNBVElPTlwiO1xyXG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OXzIgPSBcIk5PVElGSUNBVElPTl8yXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFUX0xJU1RTID0gXCJDSEFUX0xJU1RTXCI7XHJcbmV4cG9ydCBjb25zdCBNU0dfQk9YID0gXCJNU0dfQk9YXCI7XHJcbmV4cG9ydCBjb25zdCBTRU5EX01TRyA9IFwiU0VORF9NU0dcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9VU0VSID0gXCJBRERfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX0RBVEEgPSBcIlNFQVJDSF9EQVRBXCI7XHJcbmV4cG9ydCBjb25zdCBOT1RFUyA9IFwiTk9URVNcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9OT1RFID0gXCJBRERfTk9URVwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX05PVEUgPSBcIkRFTEVURV9OT1RFXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX05PVEUgPSBcIkVESVRfTk9URVwiO1xyXG5cclxuLy8gZGVtb1xyXG5leHBvcnQgY29uc3QgREVNTyA9IFwiREVNT1wiO1xyXG5cclxuLy8gc2V0dGluZ1xyXG5leHBvcnQgY29uc3QgVFlQT0dSQVBIWSA9IFwiVFlQT0dSQVBIWVwiO1xyXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IFwiVkVSU0lPTlwiO1xyXG5leHBvcnQgY29uc3QgTEFZT1VUID0gXCJMQVlPVVRcIjtcclxuZXhwb3J0IGNvbnN0IFBSSU1BUlkgPSBcIlBSSU1BUllcIjtcclxuZXhwb3J0IGNvbnN0IEhFQURFUl9CRyA9IFwiSEVBREVSX0JHXCI7XHJcbmV4cG9ydCBjb25zdCBOQVZfSEVBREVSX0JHID0gXCJOQVZfSEVBREVSX0JHXCI7XHJcbmV4cG9ydCBjb25zdCBTSURFQkFSX0JHID0gXCJTSURFQkFSX0JHXCI7XHJcbmV4cG9ydCBjb25zdCBTSURFQkFSX1NUWUxFID0gXCJTSURFQkFSX1NUWUxFXCI7XHJcbmV4cG9ydCBjb25zdCBTSURFQkFSX1BPU0lUSU9OID0gXCJTSURFQkFSX1BPU0lUSU9OXCI7XHJcbmV4cG9ydCBjb25zdCBIRUFERVJfUE9TSVRJT04gPSBcIkhFQURFUl9QT1NJVElPTlwiO1xyXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX0xBWU9VVCA9IFwiQ09OVEFJTkVSX0xBWU9VVFwiO1xyXG5leHBvcnQgY29uc3QgRElSQUNUSU9OID0gXCJESVJBQ1RJT05cIjtcclxuXHJcbi8vIFBhZ2VzXHJcbi8vIEluZGV4IFBhZ2VcclxuZXhwb3J0IGNvbnN0IERBSUxZX1RBUkdFVF9DSEFSVCA9IFwiREFJTFlfVEFSR0VUX0NIQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBPUkRFUl9DSEFSVCA9IFwiT1JERVJfQ0hBUlRcIjtcclxuZXhwb3J0IGNvbnN0IENVU1RPTUVSX0NIQVJUID0gXCJDVVNUT01FUl9DSEFSVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NVU1RPTUVSX0xJU1QgPSBcIkFERF9DVVNUT01FUl9MSVNUXCI7XHJcbmV4cG9ydCBjb25zdCBNRU5VX0NIQVJUID0gXCJNRU5VX0NIQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBDVVNUT01FUl9NQVBfQ0hBUlQgPSBcIkNVU1RPTUVSX01BUF9DSEFSVFwiO1xyXG5leHBvcnQgY29uc3QgT1JERVJfUkVRVUVTVCA9IFwiT1JERVJfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVFJBTkRJTkdfTUVOVSA9IFwiVFJBTkRJTkdfTUVOVVwiO1xyXG5leHBvcnQgY29uc3QgT1JERVJfREVUQUlMU19JVEVNUyA9IFwiT1JERVJfREVUQUlMU19JVEVNU1wiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX09SREVSX0RFVEFJTFMgPSBcIkRFTEVURV9PUkRFUl9ERVRBSUxTXCI7XHJcblxyXG4vLyBPcmRlciBsaXN0XHJcbmV4cG9ydCBjb25zdCBPUkRFUlNfTElTVCA9IFwiT1JERVJTX0xJU1RcIjtcclxuXHJcbi8vIE9yZGVyIERldGFpbFxyXG5leHBvcnQgY29uc3QgT1JERVJfREVUQUlMUyA9IFwiT1JERVJfREVUQUlMU1wiO1xyXG5cclxuLy8gQ3VzdG9tZXIgTGlzdFxyXG5leHBvcnQgY29uc3QgQ1VTVE9NRVJfTElTVCA9IFwiQ1VTVE9NRVJfTElTVFwiO1xyXG5cclxuLy8gYW5hbHl0aWNzXHJcbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1MgPSBcIkFOQUxZVElDU1wiO1xyXG5cclxuLy8gUmV2aWV3c1xyXG5leHBvcnQgY29uc3QgUkVWSUVXUyA9IFwiUkVWSUVXU1wiO1xyXG5cclxuLy8gQXBwc1xyXG4vLyBwcm9maWxlXHJcbmV4cG9ydCBjb25zdCBQUk9GSUxFID0gXCJQUk9GSUxFXCI7XHJcblxyXG4vLyBQb3N0c1xyXG5leHBvcnQgY29uc3QgUE9TVFMgPSBcIlBPU1RTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFMgPSBcIkdFVF9QT1NUU1wiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1QgPSBcIkRFTEVURV9QT1NUXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1QgPSBcIkVESVRfUE9TVFwiO1xyXG5cclxuLy8gSGVhZGVySW1nXHJcbmV4cG9ydCBjb25zdCBIRUFERVJfSU1HID0gXCJIRUFERVJfSU1HXCI7XHJcblxyXG4vLyBpbnRlcmVzdFxyXG5leHBvcnQgY29uc3QgSU5URVJFU1QgPSBcIklOVEVSRVNUXCI7XHJcblxyXG4vLyBFbWFpbFxyXG5leHBvcnQgY29uc3QgRU1BSUxfUkVBRCA9IFwiRU1BSUxfUkVBRFwiO1xyXG5cclxuLy8gRW1haWwgaW5ib3hcclxuZXhwb3J0IGNvbnN0IEVNQUlMX0lOQk9YID0gXCJFTUFJTF9JTkJPWFwiO1xyXG5cclxuLy8gUHJvZHVjdFxyXG4vLyAtPiBHcmlkXHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUUyA9IFwiUFJPRFVDVFNcIjtcclxuLy8gLT4gT3JkZXJcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RTX09SREVSID0gXCJQUk9EVUNUU19PUkRFUlwiO1xyXG4vLyAtPiBJbnZvaWNlXHJcbmV4cG9ydCBjb25zdCBJTlZPSUNFID0gXCJJTlZPSUNFXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0lOVk9JQ0UgPSBcIkVESVRfSU5WT0lDRVwiO1xyXG5leHBvcnQgY29uc3QgSU5WT0lDRV9JVEVNUyA9IFwiSU5WT0lDRV9JVEVNU1wiO1xyXG5leHBvcnQgY29uc3QgSU5WT0lDRV9JVEVNU19FRElUID0gXCJJTlZPSUNFX0lURU1TX0VESVRcIjtcclxuZXhwb3J0IGNvbnN0IElOVk9JQ0VfSVRFTVNfREVMRVRFID0gXCJJTlZPSUNFX0lURU1TX0RFTEVURVwiO1xyXG5leHBvcnQgY29uc3QgQUREX0lOVk9JQ0VfSVRFTVMgPSBcIkFERF9JTlZPSUNFX0lURU1TXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfSU5WT0lDRSA9IFwiREVMRVRFX0lOVk9JQ0VcIjtcclxuLy8gLT4gQ3VzdG9tZXIgbGlzdFxyXG5leHBvcnQgY29uc3QgQVBQX0NVU1RPTUVSX0xJU1QgPSBcIkFQUF9DVVNUT01FUl9MSVNUXCI7XHJcblxyXG4vLyBXaWRnZXQgcGFnZVxyXG5leHBvcnQgY29uc3QgV0lER0VUX0JBU0lDID0gXCJXSURHRVRfQkFTSUNcIjtcclxuXHJcbi8vIEF1dGhcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSID0gXCJHRVRfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgTE9HT1VUX1VTRVIgPSBcIkxPR09VVF9VU0VSXCI7XHJcbmV4cG9ydCBjb25zdCBBVVRIX0VSUk9SID0gXCJBVVRIX0VSUk9SXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JHRVRfUEFTU1dPUkQgPSBcIkZPUkdFVF9QQVNTV09SRFwiO1xyXG5cclxuLy8gVGFibGVcclxuZXhwb3J0IGNvbnN0IEJBU0lDX1RBQkxFID0gXCJCQVNJQ19UQUJMRVwiO1xyXG5leHBvcnQgY29uc3QgUFJPRklMRV9UQUJMRSA9IFwiUFJPRklMRV9UQUJMRVwiO1xyXG5leHBvcnQgY29uc3QgRkVFX1RBQkxFID0gXCJGRUVfVEFCTEVcIjtcclxuZXhwb3J0IGNvbnN0IFBBVElFTlRfVEFCTEUgPSBcIlBBVElFTlRfVEFCTEVcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9GSUxFX1RBQkxFID0gXCJERUxFVEVfUFJPRklMRV9UQUJMRVwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9QUk9GSUxFX1RBQkxFID0gXCJFRElUX1BST0ZJTEVfVEFCTEVcIjtcclxuXHJcbi8vIFRhYmxlIC0+IGJzXHJcbmV4cG9ydCBjb25zdCBHRVRfQlNfVEFCTEUgPSBcIkJTX1RBQkxFXCI7XHJcbmV4cG9ydCBjb25zdCBSRUNFTlRfUEFZTUVOVF9RVUVVRSA9IFwiUkVDRU5UX1BBWU1FTlRfUVVFVUVcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9SRUNFTlRfUEFZTUVOVF9RVUVVRSA9IFwiREVMRVRFX1JFQ0VOVF9QQVlNRU5UX1FVRVVFXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX1JFQ0VOVF9QQVlNRU5UX1FVRVVFID0gXCJFRElUX1JFQ0VOVF9QQVlNRU5UX1FVRVVFXCI7XHJcbmV4cG9ydCBjb25zdCBFRElUX0VYQU1fVE9QUEVSUyA9IFwiRURJVF9FWEFNX1RPUFBFUlNcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9FWEFNX1RPUFBFUlMgPSBcIkRFTEVURV9FWEFNX1RPUFBFUlNcIjtcclxuZXhwb3J0IGNvbnN0IEVYQU1fVE9QUEVSUyA9IFwiRVhBTV9UT1BQRVJTXCI7XHJcbmV4cG9ydCBjb25zdCBCT1JERVJfVEFCTEUgPSBcIkJPUkRFUl9UQUJMRVwiO1xyXG5leHBvcnQgY29uc3QgRURJVF9CT1JERVJfVEFCTEUgPSBcIkVESVRfQk9SREVSX1RBQkxFXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQk9SREVSX1RBQkxFID0gXCJERUxFVEVfQk9SREVSX1RBQkxFXCI7XHJcbmV4cG9ydCBjb25zdCBUQUJMRV9TVFJJUFBFRCA9IFwiVEFCTEVfU1RSSVBQRURcIjtcclxuZXhwb3J0IGNvbnN0IEVESVRfVEFCTEVfU1RSSVBQRUQgPSBcIkVESVRfVEFCTEVfU1RSSVBQRURcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9UQUJMRV9TVFJJUFBFRCA9IFwiREVMRVRFX1RBQkxFX1NUUklQUEVEXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==