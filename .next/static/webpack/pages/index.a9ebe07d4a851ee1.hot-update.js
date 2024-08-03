"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UserMessages.js":
/*!************************************!*\
  !*** ./components/UserMessages.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserMessages: function() { return /* binding */ UserMessages; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction UserMessages(props) {\n    _s();\n    const [userGraph, setUserGraph] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [happyCount, setHappyCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [sadCount, setSadCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [neutralCount, setNeutralCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const data = [\n        [\n            \"Emoji\",\n            \"Frequency\"\n        ],\n        [\n            \"Happy\",\n            happyCount\n        ],\n        [\n            \"Sad\",\n            sadCount\n        ],\n        [\n            \"Neutral\",\n            neutralCount\n        ]\n    ];\n    const options = {\n        titlePosition: \"none\",\n        pieHole: 0,\n        is3D: false\n    };\n    const buttonStyle = {\n        position: \"fixed\",\n        bottom: 0,\n        left: 0,\n        padding: \"15px 30px\"\n    };\n    const handleClick = ()=>{\n        setUserGraph(true);\n        let happy = 0;\n        let sad = 0;\n        let neutral = 0;\n        console.log(\"User\", props.name);\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/messages\").then((response)=>{\n            let messages = response.data.messages;\n            console.log(\"Messages\", messages);\n            let userMessages = messages.filter((message)=>message.user == props.name);\n            console.log(\"UserMessages\", userMessages);\n            userMessages.forEach((element)=>{\n                if (element.sentiment > 0) {\n                    happy += 1;\n                } else if (element.sentiment < 0) {\n                    sad += 1;\n                } else {\n                    neutral += 1;\n                }\n            });\n            console.log(\"Updated userMessages: \", happy, neutral, sad);\n            setHappyCount(happy);\n            setSadCount(sad);\n            setNeutralCount(neutral);\n            console.log(\"this is userGraph\" + userGraph);\n        }).catch((error)=>{\n            console.error(\"Error fetching messages:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            style: buttonStyle,\n            onClick: handleClick,\n            children: \" View Your Mood Here \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Jonathan Nwokeji\\\\realtime-chat-app\\\\components\\\\UserMessages.js\",\n            lineNumber: 64,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jonathan Nwokeji\\\\realtime-chat-app\\\\components\\\\UserMessages.js\",\n        lineNumber: 63,\n        columnNumber: 7\n    }, this);\n}\n_s(UserMessages, \"KEEWTlxaGxGIxUEfweWxXEt5IvQ=\");\n_c = UserMessages;\nvar _c;\n$RefreshReg$(_c, \"UserMessages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJNZXNzYWdlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNPO0FBRTVDLFNBQVNLLGFBQWNDLEtBQUs7O0lBQy9CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1ZLE9BQU87UUFDVDtZQUFDO1lBQVM7U0FBWTtRQUN0QjtZQUFDO1lBQVNOO1NBQVc7UUFDckI7WUFBQztZQUFPRTtTQUFTO1FBQ2pCO1lBQUM7WUFBV0U7U0FBYTtLQUMxQjtJQUNELE1BQU1HLFVBQVU7UUFDZEMsZUFBZTtRQUNmQyxTQUFTO1FBQ1RDLE1BQU07SUFDUjtJQUNGLE1BQU1DLGNBQWM7UUFDbEJDLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLFNBQVM7SUFDWDtJQUNBLE1BQU1DLGNBQWM7UUFDaEJqQixhQUFhO1FBQ2IsSUFBSWtCLFFBQVE7UUFDWixJQUFJQyxNQUFNO1FBQ1YsSUFBSUMsVUFBVTtRQUNoQkMsUUFBUUMsR0FBRyxDQUFDLFFBQVF4QixNQUFNeUIsSUFBSTtRQUM5Qi9CLGtEQUFVLENBQUMsYUFBYWlDLElBQUksQ0FBQyxDQUFDQztZQUM1QixJQUFJQyxXQUFXRCxTQUFTbkIsSUFBSSxDQUFDb0IsUUFBUTtZQUNyQ04sUUFBUUMsR0FBRyxDQUFDLFlBQVlLO1lBQ3hCLElBQUlDLGVBQWVELFNBQVNFLE1BQU0sQ0FBQ0MsQ0FBQUEsVUFDakNBLFFBQVFDLElBQUksSUFBSWpDLE1BQU15QixJQUFJO1lBRTVCRixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCTTtZQUM1QkEsYUFBYUksT0FBTyxDQUFDQyxDQUFBQTtnQkFDakIsSUFBSUEsUUFBUUMsU0FBUyxHQUFHLEdBQUU7b0JBQ3RCaEIsU0FBUztnQkFDYixPQUNLLElBQUllLFFBQVFDLFNBQVMsR0FBRyxHQUFFO29CQUMzQmYsT0FBTztnQkFDWCxPQUFNO29CQUNGQyxXQUFXO2dCQUNmO1lBRUo7WUFDQUMsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkosT0FBT0UsU0FBU0Q7WUFDdERqQixjQUFjZ0I7WUFDZGQsWUFBWWU7WUFDWmIsZ0JBQWdCYztZQUNoQkMsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQnZCO1FBQ3RDLEdBQUdvQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xmLFFBQVFlLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0gsNEVBQUNDO1lBQU9DLE9BQVMzQjtZQUFhNEIsU0FBV3ZCO3NCQUFhOzs7Ozs7Ozs7OztBQUl0RDtHQS9EWXBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlck1lc3NhZ2VzLmpzPzVjYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICdyZWFjdC1nb29nbGUtY2hhcnRzJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlck1lc3NhZ2VzIChwcm9wcyl7XHJcbiAgICBjb25zdCBbdXNlckdyYXBoLCBzZXRVc2VyR3JhcGhdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhcHB5Q291bnQsIHNldEhhcHB5Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc2FkQ291bnQsIHNldFNhZENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW25ldXRyYWxDb3VudCwgc2V0TmV1dHJhbENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gW1xyXG4gICAgICAgIFtcIkVtb2ppXCIsIFwiRnJlcXVlbmN5XCJdLFxyXG4gICAgICAgIFtcIkhhcHB5XCIsIGhhcHB5Q291bnRdLFxyXG4gICAgICAgIFtcIlNhZFwiLCBzYWRDb3VudF0sXHJcbiAgICAgICAgW1wiTmV1dHJhbFwiLCBuZXV0cmFsQ291bnRdXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgdGl0bGVQb3NpdGlvbjogJ25vbmUnLFxyXG4gICAgICAgIHBpZUhvbGU6IDAsXHJcbiAgICAgICAgaXMzRDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjb25zdCBidXR0b25TdHlsZSA9IHtcclxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsIFxyXG4gICAgICBib3R0b206IDAsIFxyXG4gICAgICBsZWZ0OiAwLCBcclxuICAgICAgcGFkZGluZzogJzE1cHggMzBweCcgXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRVc2VyR3JhcGgodHJ1ZSk7XHJcbiAgICAgICAgbGV0IGhhcHB5ID0gMDtcclxuICAgICAgICBsZXQgc2FkID0gMDtcclxuICAgICAgICBsZXQgbmV1dHJhbCA9IDA7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlclwiLCBwcm9wcy5uYW1lKTtcclxuICAgICAgYXhpb3MucG9zdCgnL21lc3NhZ2VzJykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBsZXQgbWVzc2FnZXMgPSByZXNwb25zZS5kYXRhLm1lc3NhZ2VzXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlc1wiLCBtZXNzYWdlcylcclxuICAgICAgICBsZXQgdXNlck1lc3NhZ2VzID0gbWVzc2FnZXMuZmlsdGVyKG1lc3NhZ2UgPT4gXHJcbiAgICAgICAgICBtZXNzYWdlLnVzZXIgPT0gcHJvcHMubmFtZVxyXG4gICAgICAgIClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXJNZXNzYWdlc1wiLCB1c2VyTWVzc2FnZXMpO1xyXG4gICAgICAgIHVzZXJNZXNzYWdlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zZW50aW1lbnQgPiAwKXtcclxuICAgICAgICAgICAgICAgIGhhcHB5ICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5zZW50aW1lbnQgPCAwKXtcclxuICAgICAgICAgICAgICAgIHNhZCArPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBuZXV0cmFsICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZWQgdXNlck1lc3NhZ2VzOiBcIiwgaGFwcHksIG5ldXRyYWwsIHNhZCk7XHJcbiAgICAgICAgc2V0SGFwcHlDb3VudChoYXBweSk7XHJcbiAgICAgICAgc2V0U2FkQ291bnQoc2FkKTtcclxuICAgICAgICBzZXROZXV0cmFsQ291bnQobmV1dHJhbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHVzZXJHcmFwaFwiICsgdXNlckdyYXBoKTtcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBtZXNzYWdlczonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgIDxidXR0b24gc3R5bGUgPSB7YnV0dG9uU3R5bGV9IG9uQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9PiBWaWV3IFlvdXIgTW9vZCBIZXJlIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICB9Il0sIm5hbWVzIjpbImF4aW9zIiwiQ2hhcnQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlck1lc3NhZ2VzIiwicHJvcHMiLCJ1c2VyR3JhcGgiLCJzZXRVc2VyR3JhcGgiLCJoYXBweUNvdW50Iiwic2V0SGFwcHlDb3VudCIsInNhZENvdW50Iiwic2V0U2FkQ291bnQiLCJuZXV0cmFsQ291bnQiLCJzZXROZXV0cmFsQ291bnQiLCJkYXRhIiwib3B0aW9ucyIsInRpdGxlUG9zaXRpb24iLCJwaWVIb2xlIiwiaXMzRCIsImJ1dHRvblN0eWxlIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwicGFkZGluZyIsImhhbmRsZUNsaWNrIiwiaGFwcHkiLCJzYWQiLCJuZXV0cmFsIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwibWVzc2FnZXMiLCJ1c2VyTWVzc2FnZXMiLCJmaWx0ZXIiLCJtZXNzYWdlIiwidXNlciIsImZvckVhY2giLCJlbGVtZW50Iiwic2VudGltZW50IiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImJ1dHRvbiIsInN0eWxlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserMessages.js\n"));

/***/ })

});