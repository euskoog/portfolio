"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./libs/theme.js":
/*!***********************!*\
  !*** ./libs/theme.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#f0e7db\", \"#202023\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 20,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#3d7aed\", \"#ff63c3\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"'Quicksand'\"\n};\nvar colors = {\n    grassTeal: \"#88ccca\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    fonts: fonts,\n    colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBOEM7QUFDRDtBQUU3QyxHQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBQ2RDLE1BQU0sRUFBRSxRQUFRLENBQVBDLEtBQUs7UUFBSyxNQUNsQixDQURtQixDQUFDO1lBQ25CQyxJQUFJLEVBQUUsQ0FBQztnQkFDTEMsRUFBRSxFQUFFTCw0REFBSSxDQUFDLENBQVMsVUFBRSxDQUFTLFVBQUVHLEtBQUs7WUFDdEMsQ0FBQztRQUNILENBQUM7O0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0csVUFBVSxHQUFHLENBQUM7SUFDbEJDLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLFFBQVEsRUFBRSxDQUFDO1lBQ1QsQ0FBZSxnQkFBRSxDQUFDO2dCQUNoQkMsY0FBYyxFQUFFLENBQVc7Z0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG1CQUFtQixFQUFFLENBQVM7Z0JBQzlCQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO1lBQ2pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNEQyxJQUFJLEVBQUUsQ0FBQztRQUNMQyxTQUFTLEVBQUUsUUFBUSxDQUFQZCxLQUFLO1lBQUssTUFDdkIsQ0FEd0IsQ0FBQztnQkFDdEJlLEtBQUssRUFBRWxCLDREQUFJLENBQUMsQ0FBUyxVQUFFLENBQVMsVUFBRUcsS0FBSztnQkFDdkNRLG1CQUFtQixFQUFFLENBQUM7WUFDeEIsQ0FBQzs7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ1EsS0FBSyxHQUFHLENBQUM7SUFDYkMsT0FBTyxFQUFFLENBQWE7QUFDeEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZEMsU0FBUyxFQUFFLENBQVM7QUFDdEIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZEMsZ0JBQWdCLEVBQUUsQ0FBTTtJQUN4QkMsa0JBQWtCLEVBQUUsSUFBSTtBQUMxQixDQUFDO0FBRUQsR0FBSyxDQUFDQyxLQUFLLEdBQUczQiw2REFBVyxDQUFDLENBQUM7SUFBQ3dCLE1BQU0sRUFBTkEsTUFBTTtJQUFFdEIsTUFBTSxFQUFOQSxNQUFNO0lBQUVLLFVBQVUsRUFBVkEsVUFBVTtJQUFFYSxLQUFLLEVBQUxBLEtBQUs7SUFBRUUsTUFBTSxFQUFOQSxNQUFNO0FBQUMsQ0FBQztBQUN2RSwrREFBZUssS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvdGhlbWUuanM/MjI3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBtb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBnbG9iYWw6IChwcm9wcykgPT4gKHtcbiAgICBib2R5OiB7XG4gICAgICBiZzogbW9kZShcIiNmMGU3ZGJcIiwgXCIjMjAyMDIzXCIpKHByb3BzKSxcbiAgICB9LFxuICB9KSxcbn07XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIEhlYWRpbmc6IHtcbiAgICB2YXJpYW50czoge1xuICAgICAgXCJzZWN0aW9uLXRpdGxlXCI6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXG4gICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogNixcbiAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogXCIjNTI1MjUyXCIsXG4gICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxuICAgICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgTGluazoge1xuICAgIGJhc2VTdHlsZTogKHByb3BzKSA9PiAoe1xuICAgICAgY29sb3I6IG1vZGUoXCIjM2Q3YWVkXCIsIFwiI2ZmNjNjM1wiKShwcm9wcyksXG4gICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzLFxuICAgIH0pLFxuICB9LFxufTtcblxuY29uc3QgZm9udHMgPSB7XG4gIGhlYWRpbmc6IFwiJ1F1aWNrc2FuZCdcIixcbn07XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgZ3Jhc3NUZWFsOiBcIiM4OGNjY2FcIixcbn07XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgaW5pdGlhbENvbG9yTW9kZTogXCJkYXJrXCIsXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogdHJ1ZSxcbn07XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcsIHN0eWxlcywgY29tcG9uZW50cywgZm9udHMsIGNvbG9ycyB9KTtcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ3Jhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./libs/theme.js\n");

/***/ })

});