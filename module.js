/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["@grafana/data","react","mermaid","@grafana/ui"], (__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_mermaid__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/VisibilityPanel.tsx":
/*!****************************************!*\
  !*** ./components/VisibilityPanel.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VisibilityPanel: () => (/* binding */ VisibilityPanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mermaid */ \"mermaid\");\n/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mermaid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ \"@grafana/ui\");\n/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass Mermaid extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n    componentDidMount() {\n        mermaid__WEBPACK_IMPORTED_MODULE_1___default().contentLoaded();\n    }\n    render() {\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            className: \"mermaid\"\n        }, this.props.chart);\n    }\n}\nconst VisibilityPanel = ({ options, data, width, height })=>{\n    const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();\n    const frame = data.series[0];\n    const sourceIPs = frame.fields.find((field)=>field.name === 'sourceIP');\n    const destinationIPs = frame.fields.find((field)=>field.name === 'destinationIP');\n    const sourceTransportPorts = frame.fields.find((field)=>field.name === 'sourceTransportPort');\n    const destinationTransportPorts = frame.fields.find((field)=>field.name === 'destinationTransportPort');\n    const httpValsSet = frame.fields.find((field)=>field.name === 'httpVals');\n    let graphString = 'graph LR;\\n';\n    let styleString = '';\n    mermaid__WEBPACK_IMPORTED_MODULE_1___default().initialize({\n        startOnLoad: true,\n        theme: 'base',\n        themeVariables: {\n            secondaryColor: theme.colors.background.canvas,\n            tertiaryColor: theme.colors.background.canvas,\n            primaryTextColor: theme.colors.text.maxContrast,\n            lineColor: theme.colors.text.maxContrast\n        }\n    });\n    function getColorFromStatus(httpStatus) {\n        // colors that correspond to each of the types of http response code; i.e. 4xx and 5xx codes return red to symbolize errors\n        const colors = [\n            'orange',\n            'green',\n            'blue',\n            'red',\n            'red'\n        ];\n        let statusType = +httpStatus.charAt(0);\n        if (statusType < 1 || statusType > 5) {\n            // nothing else returns purple, purple indicates an error in the httpVals field\n            return 'purple';\n        }\n        return colors[statusType - 1];\n    }\n    for(let i = 0; i < frame.length; i++){\n        var _sourceIPs, _sourceTransportPorts, _destinationIPs, _destinationTransportPorts, _httpValsSet;\n        const sourceIP = (_sourceIPs = sourceIPs) === null || _sourceIPs === void 0 ? void 0 : _sourceIPs.values.get(i);\n        const sourcePort = (_sourceTransportPorts = sourceTransportPorts) === null || _sourceTransportPorts === void 0 ? void 0 : _sourceTransportPorts.values.get(i);\n        const destinationIP = (_destinationIPs = destinationIPs) === null || _destinationIPs === void 0 ? void 0 : _destinationIPs.values.get(i);\n        const destinationPort = (_destinationTransportPorts = destinationTransportPorts) === null || _destinationTransportPorts === void 0 ? void 0 : _destinationTransportPorts.values.get(i);\n        const httpVals = (_httpValsSet = httpValsSet) === null || _httpValsSet === void 0 ? void 0 : _httpValsSet.values.get(i);\n        // 0 - hostname, 1 - URL, 2 - UserAgent, 3 - ContentType, 4 - Method, 5 - Protocol, 6 - Status, 7 - ContentLength\n        let vals = httpVals.split('<>');\n        if (vals.length !== 8) {\n            continue;\n        }\n        let graphLine = sourceIP + ':' + sourcePort + ' --' + vals[7] + '--> ' + destinationIP + ':' + destinationPort + '\\n';\n        graphString = graphString + graphLine;\n        let styleLine = 'linkStyle ' + i + ' stroke: ' + getColorFromStatus(vals[6]) + '\\n';\n        styleString = styleString + styleLine;\n    }\n    // adds the styling lines to the graphstring\n    graphString = graphString + styleString;\n    // checking if graph syntax is valid\n    (mermaid__WEBPACK_IMPORTED_MODULE_1___default().parseError) = function() {\n        console.log('incorrect graph syntax for graph:\\n' + graphString);\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Incorrect Graph Syntax!\"));\n    };\n    mermaid__WEBPACK_IMPORTED_MODULE_1___default().parse(graphString);\n    let graphElement = document.getElementsByClassName(\"graphDiv\")[0];\n    // null check because the div does not exist at this point during the first run\n    if (graphElement != null) {\n        mermaid__WEBPACK_IMPORTED_MODULE_1___default().mermaidAPI.render('graphDiv', graphString, graphElement);\n    }\n    // manually display first time, since render has no target yet\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"graphDiv\"\n    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Mermaid, {\n        chart: graphString\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Zpc2liaWxpdHlQYW5lbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNJO0FBR1U7QUFJeEMsTUFBTUcsZ0JBQWdCSCx3REFBZTtJQUNuQ0ssb0JBQW9CO1FBQ2xCSiw0REFBcUI7SUFDdkI7SUFDQU0sU0FBUztRQUNQLHFCQUFPLDJEQUFDQztZQUFJQyxXQUFVO1dBQVcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLEtBQUs7SUFDbkQ7QUFDRjtBQUVPLE1BQU1DLGtCQUFtQyxDQUFDLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtJQUMvRSxNQUFNQyxRQUFRZixzREFBU0E7SUFDdkIsTUFBTWdCLFFBQVFKLEtBQUtLLE1BQU0sQ0FBQyxFQUFFO0lBQzVCLE1BQU1DLFlBQVlGLE1BQU1HLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLElBQUksS0FBSztJQUM5RCxNQUFNQyxpQkFBaUJQLE1BQU1HLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLElBQUksS0FBSztJQUNuRSxNQUFNRSx1QkFBdUJSLE1BQU1HLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLElBQUksS0FBSztJQUN6RSxNQUFNRyw0QkFBNEJULE1BQU1HLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLElBQUksS0FBSztJQUM5RSxNQUFNSSxjQUFjVixNQUFNRyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDQyxRQUFVQSxNQUFNQyxJQUFJLEtBQUs7SUFFaEUsSUFBSUssY0FBYztJQUNsQixJQUFJQyxjQUFjO0lBRWxCN0IseURBQWtCLENBQUM7UUFDakIrQixhQUFhO1FBQ2JmLE9BQU87UUFDUGdCLGdCQUFnQjtZQUNkQyxnQkFBZ0JqQixNQUFNa0IsTUFBTSxDQUFDQyxVQUFVLENBQUNDLE1BQU07WUFDOUNDLGVBQWVyQixNQUFNa0IsTUFBTSxDQUFDQyxVQUFVLENBQUNDLE1BQU07WUFDN0NFLGtCQUFrQnRCLE1BQU1rQixNQUFNLENBQUNLLElBQUksQ0FBQ0MsV0FBVztZQUMvQ0MsV0FBV3pCLE1BQU1rQixNQUFNLENBQUNLLElBQUksQ0FBQ0MsV0FBVztRQUMxQztJQUNGO0lBRUEsU0FBU0UsbUJBQW1CQyxVQUFrQjtRQUM1QywySEFBMkg7UUFDM0gsTUFBTVQsU0FBUztZQUFDO1lBQVU7WUFBUztZQUFRO1lBQU87U0FBTTtRQUN4RCxJQUFJVSxhQUFhLENBQUNELFdBQVdFLE1BQU0sQ0FBQztRQUNwQyxJQUFJRCxhQUFhLEtBQUtBLGFBQWEsR0FBRztZQUNwQywrRUFBK0U7WUFDL0UsT0FBTztRQUNUO1FBQ0EsT0FBT1YsTUFBTSxDQUFDVSxhQUFXLEVBQUU7SUFDN0I7SUFFQSxJQUFLLElBQUlFLElBQUksR0FBR0EsSUFBSTdCLE1BQU04QixNQUFNLEVBQUVELElBQUs7WUFDcEIzQixZQUNFTSx1QkFDR0QsaUJBQ0VFLDRCQUNQQztRQUpqQixNQUFNcUIsWUFBVzdCLGFBQUFBLHVCQUFBQSxpQ0FBQUEsV0FBVzhCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDSjtRQUN2QyxNQUFNSyxjQUFhMUIsd0JBQUFBLGtDQUFBQSw0Q0FBQUEsc0JBQXNCd0IsTUFBTSxDQUFDQyxHQUFHLENBQUNKO1FBQ3BELE1BQU1NLGlCQUFnQjVCLGtCQUFBQSw0QkFBQUEsc0NBQUFBLGdCQUFnQnlCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDSjtRQUNqRCxNQUFNTyxtQkFBa0IzQiw2QkFBQUEsdUNBQUFBLGlEQUFBQSwyQkFBMkJ1QixNQUFNLENBQUNDLEdBQUcsQ0FBQ0o7UUFDOUQsTUFBTVEsWUFBVzNCLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYXNCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDSjtRQUN6QyxpSEFBaUg7UUFDakgsSUFBSVMsT0FBT0QsU0FBU0UsS0FBSyxDQUFDO1FBQzFCLElBQUlELEtBQUtSLE1BQU0sS0FBSyxHQUFHO1lBQ3JCO1FBQ0Y7UUFDQSxJQUFJVSxZQUFZVCxXQUFXLE1BQU1HLGFBQWEsUUFBUUksSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTSCxnQkFBZ0IsTUFBTUMsa0JBQWtCO1FBQ2pIekIsY0FBY0EsY0FBYzZCO1FBQzVCLElBQUlDLFlBQVksZUFBZVosSUFBSSxjQUFjSixtQkFBbUJhLElBQUksQ0FBQyxFQUFFLElBQUk7UUFDL0UxQixjQUFjQSxjQUFjNkI7SUFDOUI7SUFFQSw0Q0FBNEM7SUFDNUM5QixjQUFjQSxjQUFjQztJQUU1QixvQ0FBb0M7SUFDcEM3QiwyREFBa0IsR0FBRztRQUNuQjRELFFBQVFDLEdBQUcsQ0FBQyx3Q0FBc0NqQztRQUNsRCxxQkFDRSwyREFBQ3JCLDJCQUFJLDJEQUFDdUQsV0FBRTtJQUVaO0lBRUE5RCxvREFBYSxDQUFDNEI7SUFDZCxJQUFJb0MsZUFBZUMsU0FBU0Msc0JBQXNCLENBQUMsV0FBVyxDQUFDLEVBQUU7SUFDakUsK0VBQStFO0lBQy9FLElBQUlGLGdCQUFnQixNQUFNO1FBQ3hCaEUseURBQWtCLENBQUNNLE1BQU0sQ0FBQyxZQUFZc0IsYUFBYW9DO0lBQ3JEO0lBRUEsOERBQThEO0lBQzlELHFCQUNFLDJEQUFDekQ7UUFBSUMsV0FBVTtxQkFDYiwyREFBQ047UUFBUVEsT0FBT2tCOztBQUd0QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaXNpYmlsaXR5UGFuZWwudHN4PzlmZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtZXJtYWlkIGZyb20gJ21lcm1haWQnO1xuaW1wb3J0IHsgUGFuZWxQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgVmlzaWJpbGl0eU9wdGlvbnMgfSBmcm9tICd0eXBlcyc7XG5pbXBvcnQgeyB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBhbmVsUHJvcHM8VmlzaWJpbGl0eU9wdGlvbnM+IHt9XG5cbmNsYXNzIE1lcm1haWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55PiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIG1lcm1haWQuY29udGVudExvYWRlZCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtZXJtYWlkXCI+e3RoaXMucHJvcHMuY2hhcnR9PC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFZpc2liaWxpdHlQYW5lbDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb3B0aW9ucywgZGF0YSwgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IGZyYW1lID0gZGF0YS5zZXJpZXNbMF07XG4gIGNvbnN0IHNvdXJjZUlQcyA9IGZyYW1lLmZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGQubmFtZSA9PT0gJ3NvdXJjZUlQJyk7XG4gIGNvbnN0IGRlc3RpbmF0aW9uSVBzID0gZnJhbWUuZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZC5uYW1lID09PSAnZGVzdGluYXRpb25JUCcpO1xuICBjb25zdCBzb3VyY2VUcmFuc3BvcnRQb3J0cyA9IGZyYW1lLmZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGQubmFtZSA9PT0gJ3NvdXJjZVRyYW5zcG9ydFBvcnQnKTtcbiAgY29uc3QgZGVzdGluYXRpb25UcmFuc3BvcnRQb3J0cyA9IGZyYW1lLmZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGQubmFtZSA9PT0gJ2Rlc3RpbmF0aW9uVHJhbnNwb3J0UG9ydCcpO1xuICBjb25zdCBodHRwVmFsc1NldCA9IGZyYW1lLmZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGQubmFtZSA9PT0gJ2h0dHBWYWxzJyk7XG5cbiAgbGV0IGdyYXBoU3RyaW5nID0gJ2dyYXBoIExSO1xcbic7XG4gIGxldCBzdHlsZVN0cmluZyA9ICcnO1xuXG4gIG1lcm1haWQuaW5pdGlhbGl6ZSh7XG4gICAgc3RhcnRPbkxvYWQ6IHRydWUsXG4gICAgdGhlbWU6ICdiYXNlJyxcbiAgICB0aGVtZVZhcmlhYmxlczoge1xuICAgICAgc2Vjb25kYXJ5Q29sb3I6IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmNhbnZhcyxcbiAgICAgIHRlcnRpYXJ5Q29sb3I6IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmNhbnZhcyxcbiAgICAgIHByaW1hcnlUZXh0Q29sb3I6IHRoZW1lLmNvbG9ycy50ZXh0Lm1heENvbnRyYXN0LFxuICAgICAgbGluZUNvbG9yOiB0aGVtZS5jb2xvcnMudGV4dC5tYXhDb250cmFzdCxcbiAgICB9LFxuICB9KTtcblxuICBmdW5jdGlvbiBnZXRDb2xvckZyb21TdGF0dXMoaHR0cFN0YXR1czogc3RyaW5nKSB7XG4gICAgLy8gY29sb3JzIHRoYXQgY29ycmVzcG9uZCB0byBlYWNoIG9mIHRoZSB0eXBlcyBvZiBodHRwIHJlc3BvbnNlIGNvZGU7IGkuZS4gNHh4IGFuZCA1eHggY29kZXMgcmV0dXJuIHJlZCB0byBzeW1ib2xpemUgZXJyb3JzXG4gICAgY29uc3QgY29sb3JzID0gWydvcmFuZ2UnLCAnZ3JlZW4nLCAnYmx1ZScsICdyZWQnLCAncmVkJ107XG4gICAgbGV0IHN0YXR1c1R5cGUgPSAraHR0cFN0YXR1cy5jaGFyQXQoMCk7XG4gICAgaWYgKHN0YXR1c1R5cGUgPCAxIHx8IHN0YXR1c1R5cGUgPiA1KSB7XG4gICAgICAvLyBub3RoaW5nIGVsc2UgcmV0dXJucyBwdXJwbGUsIHB1cnBsZSBpbmRpY2F0ZXMgYW4gZXJyb3IgaW4gdGhlIGh0dHBWYWxzIGZpZWxkXG4gICAgICByZXR1cm4gJ3B1cnBsZSc7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcnNbc3RhdHVzVHlwZS0xXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzb3VyY2VJUCA9IHNvdXJjZUlQcz8udmFsdWVzLmdldChpKTtcbiAgICBjb25zdCBzb3VyY2VQb3J0ID0gc291cmNlVHJhbnNwb3J0UG9ydHM/LnZhbHVlcy5nZXQoaSk7XG4gICAgY29uc3QgZGVzdGluYXRpb25JUCA9IGRlc3RpbmF0aW9uSVBzPy52YWx1ZXMuZ2V0KGkpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uUG9ydCA9IGRlc3RpbmF0aW9uVHJhbnNwb3J0UG9ydHM/LnZhbHVlcy5nZXQoaSk7XG4gICAgY29uc3QgaHR0cFZhbHMgPSBodHRwVmFsc1NldD8udmFsdWVzLmdldChpKTtcbiAgICAvLyAwIC0gaG9zdG5hbWUsIDEgLSBVUkwsIDIgLSBVc2VyQWdlbnQsIDMgLSBDb250ZW50VHlwZSwgNCAtIE1ldGhvZCwgNSAtIFByb3RvY29sLCA2IC0gU3RhdHVzLCA3IC0gQ29udGVudExlbmd0aFxuICAgIGxldCB2YWxzID0gaHR0cFZhbHMuc3BsaXQoJzw+Jyk7XG4gICAgaWYgKHZhbHMubGVuZ3RoICE9PSA4KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IGdyYXBoTGluZSA9IHNvdXJjZUlQICsgJzonICsgc291cmNlUG9ydCArICcgLS0nICsgdmFsc1s3XSArICctLT4gJyArIGRlc3RpbmF0aW9uSVAgKyAnOicgKyBkZXN0aW5hdGlvblBvcnQgKyAnXFxuJztcbiAgICBncmFwaFN0cmluZyA9IGdyYXBoU3RyaW5nICsgZ3JhcGhMaW5lO1xuICAgIGxldCBzdHlsZUxpbmUgPSAnbGlua1N0eWxlICcgKyBpICsgJyBzdHJva2U6ICcgKyBnZXRDb2xvckZyb21TdGF0dXModmFsc1s2XSkgKyAnXFxuJztcbiAgICBzdHlsZVN0cmluZyA9IHN0eWxlU3RyaW5nICsgc3R5bGVMaW5lO1xuICB9XG5cbiAgLy8gYWRkcyB0aGUgc3R5bGluZyBsaW5lcyB0byB0aGUgZ3JhcGhzdHJpbmdcbiAgZ3JhcGhTdHJpbmcgPSBncmFwaFN0cmluZyArIHN0eWxlU3RyaW5nO1xuXG4gIC8vIGNoZWNraW5nIGlmIGdyYXBoIHN5bnRheCBpcyB2YWxpZFxuICBtZXJtYWlkLnBhcnNlRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnaW5jb3JyZWN0IGdyYXBoIHN5bnRheCBmb3IgZ3JhcGg6XFxuJytncmFwaFN0cmluZyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+PHA+SW5jb3JyZWN0IEdyYXBoIFN5bnRheCE8L3A+PC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIG1lcm1haWQucGFyc2UoZ3JhcGhTdHJpbmcpXG4gIGxldCBncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3JhcGhEaXZcIilbMF07XG4gIC8vIG51bGwgY2hlY2sgYmVjYXVzZSB0aGUgZGl2IGRvZXMgbm90IGV4aXN0IGF0IHRoaXMgcG9pbnQgZHVyaW5nIHRoZSBmaXJzdCBydW5cbiAgaWYgKGdyYXBoRWxlbWVudCAhPSBudWxsKSB7XG4gICAgbWVybWFpZC5tZXJtYWlkQVBJLnJlbmRlcignZ3JhcGhEaXYnLCBncmFwaFN0cmluZywgZ3JhcGhFbGVtZW50KTtcbiAgfVxuXG4gIC8vIG1hbnVhbGx5IGRpc3BsYXkgZmlyc3QgdGltZSwgc2luY2UgcmVuZGVyIGhhcyBubyB0YXJnZXQgeWV0XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmFwaERpdlwiPlxuICAgICAgPE1lcm1haWQgY2hhcnQ9e2dyYXBoU3RyaW5nfS8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVybWFpZCIsInVzZVRoZW1lMiIsIk1lcm1haWQiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnRlbnRMb2FkZWQiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9wcyIsImNoYXJ0IiwiVmlzaWJpbGl0eVBhbmVsIiwib3B0aW9ucyIsImRhdGEiLCJ3aWR0aCIsImhlaWdodCIsInRoZW1lIiwiZnJhbWUiLCJzZXJpZXMiLCJzb3VyY2VJUHMiLCJmaWVsZHMiLCJmaW5kIiwiZmllbGQiLCJuYW1lIiwiZGVzdGluYXRpb25JUHMiLCJzb3VyY2VUcmFuc3BvcnRQb3J0cyIsImRlc3RpbmF0aW9uVHJhbnNwb3J0UG9ydHMiLCJodHRwVmFsc1NldCIsImdyYXBoU3RyaW5nIiwic3R5bGVTdHJpbmciLCJpbml0aWFsaXplIiwic3RhcnRPbkxvYWQiLCJ0aGVtZVZhcmlhYmxlcyIsInNlY29uZGFyeUNvbG9yIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsImNhbnZhcyIsInRlcnRpYXJ5Q29sb3IiLCJwcmltYXJ5VGV4dENvbG9yIiwidGV4dCIsIm1heENvbnRyYXN0IiwibGluZUNvbG9yIiwiZ2V0Q29sb3JGcm9tU3RhdHVzIiwiaHR0cFN0YXR1cyIsInN0YXR1c1R5cGUiLCJjaGFyQXQiLCJpIiwibGVuZ3RoIiwic291cmNlSVAiLCJ2YWx1ZXMiLCJnZXQiLCJzb3VyY2VQb3J0IiwiZGVzdGluYXRpb25JUCIsImRlc3RpbmF0aW9uUG9ydCIsImh0dHBWYWxzIiwidmFscyIsInNwbGl0IiwiZ3JhcGhMaW5lIiwic3R5bGVMaW5lIiwicGFyc2VFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwIiwicGFyc2UiLCJncmFwaEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtZXJtYWlkQVBJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VisibilityPanel.tsx\n");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   plugin: () => (/* binding */ plugin)\n/* harmony export */ });\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ \"@grafana/data\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_VisibilityPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/VisibilityPanel */ \"./components/VisibilityPanel.tsx\");\n\n\nconst plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_components_VisibilityPanel__WEBPACK_IMPORTED_MODULE_1__.VisibilityPanel).setPanelOptions((builder)=>{});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUVtQjtBQUV4RCxNQUFNRSxTQUFTLElBQUlGLHNEQUFXQSxDQUFvQkMsd0VBQWVBLEVBQUVFLGVBQWUsQ0FBQyxDQUFDQyxXQUMzRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kdWxlLnRzP2MyMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFuZWxQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFZpc2liaWxpdHlPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBWaXNpYmlsaXR5UGFuZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvVmlzaWJpbGl0eVBhbmVsJztcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBQYW5lbFBsdWdpbjxWaXNpYmlsaXR5T3B0aW9ucz4oVmlzaWJpbGl0eVBhbmVsKS5zZXRQYW5lbE9wdGlvbnMoKGJ1aWxkZXIpID0+IHtcbn0pO1xuIl0sIm5hbWVzIjpbIlBhbmVsUGx1Z2luIiwiVmlzaWJpbGl0eVBhbmVsIiwicGx1Z2luIiwic2V0UGFuZWxPcHRpb25zIiwiYnVpbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./module.ts\n");

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "mermaid":
/*!**************************!*\
  !*** external "mermaid" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_mermaid__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;