(self.webpackChunkhifly_ui_components=self.webpackChunkhifly_ui_components||[]).push([[286],{"./stories/dark/LandingCardDark.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.DefaultLandingCard=void 0;var _src=__webpack_require__("./src/index.ts"),_react=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_View=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js"))),_useBreakpoints2=__webpack_require__("./src/hooks/useBreakpoints.ts"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"HiFly/Cards/LandingCard/Dark",component:_src.LandingCard,parameters:{docs:{iframeHeight:600,previewSource:"open"}},decorators:[function(Story){var xs=(0,_useBreakpoints2.useBreakpoints)().xs;return(0,_jsxRuntime.jsx)(_react.ThemeProvider,{theme:(0,_src.getDefaultTheme)("dark"),children:(0,_jsxRuntime.jsx)(_View.default,{style:{alignSelf:"flex-start",padding:xs?void 0:20,backgroundColor:(0,_src.getDefaultTheme)("dark").colors.background.primary,width:xs?void 0:394},children:(0,_jsxRuntime.jsx)(Story,{})})})}]};exports.default=meta,exports.DefaultLandingCard={args:{title:"Landing",timeText:"in 90 min",gate:"A52",timePillProps:{label:"On Time",type:"success"}}};module.exports.__namedExportsOrder=["DefaultLandingCard"]},"./src/hooks/useBreakpoints.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useBreakpoints=exports.breakpoints=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=__webpack_require__("./node_modules/react/index.js"),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),breakpoints=exports.breakpoints={xs:0,sm:480,md:768,lg:1024};exports.useBreakpoints=function useBreakpoints(){var _useState=(0,_react.useState)(_Dimensions.default.get("window").width),_useState2=(0,_slicedToArray2.default)(_useState,2),width=_useState2[0],setWidth=_useState2[1];return(0,_react.useEffect)((function(){var subscription=_Dimensions.default.addEventListener("change",(function updateWidth(){return setWidth(_Dimensions.default.get("window").width)}));return function(){return subscription.remove()}}),[]),{xs:width>=breakpoints.xs&&width<breakpoints.sm,sm:width>=breakpoints.sm&&width<breakpoints.md,md:width>=breakpoints.md&&width<breakpoints.lg,lg:width>=breakpoints.lg}}}}]);