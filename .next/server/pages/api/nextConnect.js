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
exports.id = "pages/api/nextConnect";
exports.ids = ["pages/api/nextConnect"];
exports.modules = {

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./pages/api/nextConnect/index.js":
/*!****************************************!*\
  !*** ./pages/api/nextConnect/index.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// Controller\nconst createUser = (req, res)=>{\n    res.json(\"Created!\");\n};\nconst getUser = (req, res)=>{\n    res.json(\"Created!\");\n};\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()// .use(middleware)\n.get(getUser).post(createUser);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV4dENvbm5lY3QvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFFOUIsYUFBYTtBQUNiLE1BQU1DLGFBQWEsQ0FBQ0MsS0FBS0MsTUFBUTtJQUMvQkEsSUFBSUMsSUFBSSxDQUFDO0FBQ1g7QUFFQSxNQUFNQyxVQUFVLENBQUNILEtBQUtDLE1BQVE7SUFDNUJBLElBQUlDLElBQUksQ0FBQztBQUNYO0FBRUEsTUFBTUUsVUFBVU4sd0RBQUVBLEVBQ2hCLG1CQUFtQjtDQUNsQk8sR0FBRyxDQUFDRixTQUNKRyxJQUFJLENBQUNQO0FBRVIsaUVBQWVLLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2FwaS9uZXh0Q29ubmVjdC9pbmRleC5qcz8xNGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5cclxuLy8gQ29udHJvbGxlclxyXG5jb25zdCBjcmVhdGVVc2VyID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLmpzb24oJ0NyZWF0ZWQhJyk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VyID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLmpzb24oJ0NyZWF0ZWQhJyk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoKVxyXG4gIC8vIC51c2UobWlkZGxld2FyZSlcclxuICAuZ2V0KGdldFVzZXIpXHJcbiAgLnBvc3QoY3JlYXRlVXNlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsibmMiLCJjcmVhdGVVc2VyIiwicmVxIiwicmVzIiwianNvbiIsImdldFVzZXIiLCJoYW5kbGVyIiwiZ2V0IiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/nextConnect/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/nextConnect/index.js"));
module.exports = __webpack_exports__;

})();