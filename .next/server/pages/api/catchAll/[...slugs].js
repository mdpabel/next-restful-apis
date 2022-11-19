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
exports.id = "pages/api/catchAll/[...slugs]";
exports.ids = ["pages/api/catchAll/[...slugs]"];
exports.modules = {

/***/ "(api)/./pages/api/catchAll/[...slugs].js":
/*!******************************************!*\
  !*** ./pages/api/catchAll/[...slugs].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handler = (req, res)=>{\n    const { slugs  } = req.query;\n    res.json({\n        message: slugs\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0Y2hBbGwvWy4uLnNsdWdzXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVSxDQUFDQyxLQUFLQyxNQUFRO0lBQzVCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdGLElBQUlHLEtBQUs7SUFDM0JGLElBQUlHLElBQUksQ0FBQztRQUNQQyxTQUFTSDtJQUNYO0FBQ0Y7QUFFQSxpRUFBZUgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vcGFnZXMvYXBpL2NhdGNoQWxsL1suLi5zbHVnc10uanM/YTU4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYW5kbGVyID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyBzbHVncyB9ID0gcmVxLnF1ZXJ5O1xyXG4gIHJlcy5qc29uKHtcclxuICAgIG1lc3NhZ2U6IHNsdWdzLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzbHVncyIsInF1ZXJ5IiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/catchAll/[...slugs].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/catchAll/[...slugs].js"));
module.exports = __webpack_exports__;

})();