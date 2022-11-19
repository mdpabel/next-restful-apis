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
exports.id = "pages/api/dynamic/[slug]";
exports.ids = ["pages/api/dynamic/[slug]"];
exports.modules = {

/***/ "(api)/./pages/api/dynamic/[slug].js":
/*!*************************************!*\
  !*** ./pages/api/dynamic/[slug].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handler = (req, res)=>{\n    const { slug  } = req.query;\n    res.json({\n        message: slug\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZHluYW1pYy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVUsQ0FBQ0MsS0FBS0MsTUFBUTtJQUM1QixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRixJQUFJRyxLQUFLO0lBQzFCRixJQUFJRyxJQUFJLENBQUM7UUFDUEMsU0FBU0g7SUFDWDtBQUNGO0FBRUEsaUVBQWVILE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2FwaS9keW5hbWljL1tzbHVnXS5qcz9kNjY3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhhbmRsZXIgPSAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICByZXMuanNvbih7XHJcbiAgICBtZXNzYWdlOiBzbHVnLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzbHVnIiwicXVlcnkiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/dynamic/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/dynamic/[slug].js"));
module.exports = __webpack_exports__;

})();