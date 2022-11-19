"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/withMiddleware";
exports.ids = ["pages/api/withMiddleware"];
exports.modules = {

/***/ "(api)/./pages/api/withMiddleware/index.js":
/*!*******************************************!*\
  !*** ./pages/api/withMiddleware/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handler = (req, res)=>{\n    res.json(\"Hello\");\n};\nconst middleware = (handlerFnc)=>(req, res)=>{\n        console.log(req.headers);\n        if (!req.headers.auth == \"true\") {\n            return res.status(401).json(\"Authentication failed!\");\n        }\n        return handlerFnc(req, res);\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd2l0aE1pZGRsZXdhcmUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVUsQ0FBQ0MsS0FBS0MsTUFBUTtJQUM1QkEsSUFBSUMsSUFBSSxDQUFDO0FBQ1g7QUFFQSxNQUFNQyxhQUFhLENBQUNDLGFBQWUsQ0FBQ0osS0FBS0MsTUFBUTtRQUMvQ0ksUUFBUUMsR0FBRyxDQUFDTixJQUFJTyxPQUFPO1FBRXZCLElBQUksQ0FBQ1AsSUFBSU8sT0FBTyxDQUFDQyxJQUFJLElBQUksUUFBUTtZQUMvQixPQUFPUCxJQUFJUSxNQUFNLENBQUMsS0FBS1AsSUFBSSxDQUFDO1FBQzlCLENBQUM7UUFFRCxPQUFPRSxXQUFXSixLQUFLQztJQUN6QjtBQUVBLGlFQUFlRSxXQUFXSixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9hcGkvd2l0aE1pZGRsZXdhcmUvaW5kZXguanM/MGNmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLmpzb24oJ0hlbGxvJyk7XHJcbn07XHJcblxyXG5jb25zdCBtaWRkbGV3YXJlID0gKGhhbmRsZXJGbmMpID0+IChyZXEsIHJlcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzKTtcclxuXHJcbiAgaWYgKCFyZXEuaGVhZGVycy5hdXRoID09ICd0cnVlJykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQhJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaGFuZGxlckZuYyhyZXEsIHJlcyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlKGhhbmRsZXIpO1xyXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb24iLCJtaWRkbGV3YXJlIiwiaGFuZGxlckZuYyIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiYXV0aCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/withMiddleware/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/withMiddleware/index.js"));
module.exports = __webpack_exports__;

})();