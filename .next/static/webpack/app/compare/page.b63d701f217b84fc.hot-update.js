"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/compare/page",{

/***/ "(app-pages-browser)/./src/app/compare/page.tsx":
/*!**********************************!*\
  !*** ./src/app/compare/page.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_compare_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/compare-form */ \"(app-pages-browser)/./src/components/compare-form.tsx\");\n/* harmony import */ var _components_user_comparison__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/user-comparison */ \"(app-pages-browser)/./src/components/user-comparison.tsx\");\n/* harmony import */ var _hooks_useGitHubUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useGitHubUser */ \"(app-pages-browser)/./src/hooks/useGitHubUser.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ComparePage = ()=>{\n    _s();\n    const [firstUsername, setFirstUsername] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [secondUsername, setSecondUsername] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [shouldFetch, setShouldFetch] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const onCompare = (firstCompareUsername, secondCompareUsername)=>{\n        setFirstUsername(firstCompareUsername);\n        setSecondUsername(secondCompareUsername);\n        setShouldFetch(true);\n    };\n    const { user: firstUser, isLoading: firstIsLoading, repos: firstRepos } = (0,_hooks_useGitHubUser__WEBPACK_IMPORTED_MODULE_3__.useGitHubUser)(firstUsername, shouldFetch);\n    const { user: secondUser, isLoading: secondIsLoading, repos: secondRepos } = (0,_hooks_useGitHubUser__WEBPACK_IMPORTED_MODULE_3__.useGitHubUser)(secondUsername, shouldFetch);\n    const users = [\n        firstUser,\n        secondUser\n    ];\n    const repos = [\n        firstRepos || [],\n        secondRepos || []\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto py-8 px-4 max-w-5xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"w-full flex flex-col mb-8 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold mb-2\",\n                        children: \"GitHub Explorer\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrmatter/Desktop/Github/src/app/compare/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-muted-foreground mb-6\",\n                        children: \"Search for GitHub users and Compare their repositories\"\n                    }, void 0, false, {\n                        fileName: \"/home/mrmatter/Desktop/Github/src/app/compare/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mx-auto mb-4 justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_compare_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            onCompare: onCompare,\n                            isLoading: firstIsLoading || secondIsLoading\n                        }, void 0, false, {\n                            fileName: \"/home/mrmatter/Desktop/Github/src/app/compare/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/mrmatter/Desktop/Github/src/app/compare/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mrmatter/Desktop/Github/src/app/compare/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            users && repos && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_user_comparison__WEBPACK_IMPORTED_MODULE_2__.UserComparison, {\n                users: users,\n                repos: repos\n            }, void 0, false, {\n                fileName: \"/home/mrmatter/Desktop/Github/src/app/compare/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 26\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                href: \"/compare\",\n                className: \"underline cursor-pointer\",\n                children: \"Compare\"\n            }, void 0, false, {\n                fileName: \"/home/mrmatter/Desktop/Github/src/app/compare/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mrmatter/Desktop/Github/src/app/compare/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ComparePage, \"IVEkzD3WmY8SKvxWx59oO2ySEmE=\", false, function() {\n    return [\n        _hooks_useGitHubUser__WEBPACK_IMPORTED_MODULE_3__.useGitHubUser,\n        _hooks_useGitHubUser__WEBPACK_IMPORTED_MODULE_3__.useGitHubUser\n    ];\n});\n_c = ComparePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComparePage);\nvar _c;\n$RefreshReg$(_c, \"ComparePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcGFyZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFb0Q7QUFDVTtBQUVSO0FBRXJCO0FBRWpDLE1BQU1JLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ0ksZ0JBQWdCQyxrQkFBa0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1RLFlBQVksQ0FDaEJDLHNCQUNBQztRQUVBUCxpQkFBaUJNO1FBQ2pCSixrQkFBa0JLO1FBQ2xCSCxlQUFlO0lBQ2pCO0lBRUEsTUFBTSxFQUNKSSxNQUFNQyxTQUFTLEVBQ2ZDLFdBQVdDLGNBQWMsRUFDekJDLE9BQU9DLFVBQVUsRUFDbEIsR0FBR2pCLG1FQUFhQSxDQUFDRyxlQUFlSTtJQUVqQyxNQUFNLEVBQ0pLLE1BQU1NLFVBQVUsRUFDaEJKLFdBQVdLLGVBQWUsRUFDMUJILE9BQU9JLFdBQVcsRUFDbkIsR0FBR3BCLG1FQUFhQSxDQUFDSyxnQkFBZ0JFO0lBRWxDLE1BQU1jLFFBQVE7UUFBQ1I7UUFBV0s7S0FBVztJQUNyQyxNQUFNRixRQUFRO1FBQUNDLGNBQWMsRUFBRTtRQUFFRyxlQUFlLEVBQUU7S0FBQztJQUVuRCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNFO3dCQUFHRixXQUFVO2tDQUEwQjs7Ozs7O2tDQUN4Qyw4REFBQ0c7d0JBQUVILFdBQVU7a0NBQTZCOzs7Ozs7a0NBRzFDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3pCLGdFQUFXQTs0QkFDVlcsV0FBV0E7NEJBQ1hLLFdBQVdDLGtCQUFrQkk7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWxDRSxTQUFTTCx1QkFBUyw4REFBQ2pCLHVFQUFjQTtnQkFBQ3NCLE9BQU9BO2dCQUFPTCxPQUFPQTs7Ozs7OzBCQUN4RCw4REFBQ1c7Z0JBQUtDLE1BQUs7Z0JBQVdMLFdBQVU7MEJBQTJCOzs7Ozs7Ozs7Ozs7QUFLakU7R0FqRE1yQjs7UUFrQkFGLCtEQUFhQTtRQU1iQSwrREFBYUE7OztLQXhCYkU7QUFtRE4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL21ybWF0dGVyL0Rlc2t0b3AvR2l0aHViL3NyYy9hcHAvY29tcGFyZS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IENvbXBhcmVGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvY29tcGFyZS1mb3JtXCI7XG5pbXBvcnQgeyBVc2VyQ29tcGFyaXNvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdXNlci1jb21wYXJpc29uXCI7XG5cbmltcG9ydCB7IHVzZUdpdEh1YlVzZXIgfSBmcm9tIFwiQC9ob29rcy91c2VHaXRIdWJVc2VyXCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbXBhcmVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbZmlyc3RVc2VybmFtZSwgc2V0Rmlyc3RVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlY29uZFVzZXJuYW1lLCBzZXRTZWNvbmRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3VsZEZldGNoLCBzZXRTaG91bGRGZXRjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25Db21wYXJlID0gKFxuICAgIGZpcnN0Q29tcGFyZVVzZXJuYW1lOiBzdHJpbmcsXG4gICAgc2Vjb25kQ29tcGFyZVVzZXJuYW1lOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgc2V0Rmlyc3RVc2VybmFtZShmaXJzdENvbXBhcmVVc2VybmFtZSk7XG4gICAgc2V0U2Vjb25kVXNlcm5hbWUoc2Vjb25kQ29tcGFyZVVzZXJuYW1lKTtcbiAgICBzZXRTaG91bGRGZXRjaCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgdXNlcjogZmlyc3RVc2VyLFxuICAgIGlzTG9hZGluZzogZmlyc3RJc0xvYWRpbmcsXG4gICAgcmVwb3M6IGZpcnN0UmVwb3MsXG4gIH0gPSB1c2VHaXRIdWJVc2VyKGZpcnN0VXNlcm5hbWUsIHNob3VsZEZldGNoKTtcblxuICBjb25zdCB7XG4gICAgdXNlcjogc2Vjb25kVXNlcixcbiAgICBpc0xvYWRpbmc6IHNlY29uZElzTG9hZGluZyxcbiAgICByZXBvczogc2Vjb25kUmVwb3MsXG4gIH0gPSB1c2VHaXRIdWJVc2VyKHNlY29uZFVzZXJuYW1lLCBzaG91bGRGZXRjaCk7XG5cbiAgY29uc3QgdXNlcnMgPSBbZmlyc3RVc2VyLCBzZWNvbmRVc2VyXTtcbiAgY29uc3QgcmVwb3MgPSBbZmlyc3RSZXBvcyB8fCBbXSwgc2Vjb25kUmVwb3MgfHwgW11dO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS04IHB4LTQgbWF4LXctNXhsXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1iLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi0yXCI+R2l0SHViIEV4cGxvcmVyPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1iLTZcIj5cbiAgICAgICAgICBTZWFyY2ggZm9yIEdpdEh1YiB1c2VycyBhbmQgQ29tcGFyZSB0aGVpciByZXBvc2l0b3JpZXNcbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtYXV0byBtYi00IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxDb21wYXJlRm9ybVxuICAgICAgICAgICAgb25Db21wYXJlPXtvbkNvbXBhcmV9XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2ZpcnN0SXNMb2FkaW5nIHx8IHNlY29uZElzTG9hZGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAge3VzZXJzICYmIHJlcG9zICYmIDxVc2VyQ29tcGFyaXNvbiB1c2Vycz17dXNlcnN9IHJlcG9zPXtyZXBvc30gLz59XG4gICAgICA8TGluayBocmVmPVwiL2NvbXBhcmVcIiBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICBDb21wYXJlXG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmVQYWdlO1xuIl0sIm5hbWVzIjpbIkNvbXBhcmVGb3JtIiwiVXNlckNvbXBhcmlzb24iLCJ1c2VHaXRIdWJVc2VyIiwidXNlU3RhdGUiLCJDb21wYXJlUGFnZSIsImZpcnN0VXNlcm5hbWUiLCJzZXRGaXJzdFVzZXJuYW1lIiwic2Vjb25kVXNlcm5hbWUiLCJzZXRTZWNvbmRVc2VybmFtZSIsInNob3VsZEZldGNoIiwic2V0U2hvdWxkRmV0Y2giLCJvbkNvbXBhcmUiLCJmaXJzdENvbXBhcmVVc2VybmFtZSIsInNlY29uZENvbXBhcmVVc2VybmFtZSIsInVzZXIiLCJmaXJzdFVzZXIiLCJpc0xvYWRpbmciLCJmaXJzdElzTG9hZGluZyIsInJlcG9zIiwiZmlyc3RSZXBvcyIsInNlY29uZFVzZXIiLCJzZWNvbmRJc0xvYWRpbmciLCJzZWNvbmRSZXBvcyIsInVzZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiaDEiLCJwIiwiTGluayIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/compare/page.tsx\n"));

/***/ })

});