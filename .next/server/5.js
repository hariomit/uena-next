exports.ids = [5];
exports.modules = {

/***/ "./src/uena/home/Menu.js":
/*!*******************************!*\
  !*** ./src/uena/home/Menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ "react-apexcharts");
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\uena\\home\\Menu.js";



class Menu extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        name: "Net Profit",
        data: this.props.data //radius: 12,

      }],
      options: {
        chart: {
          type: "area",
          height: 100,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }
        },
        colors: ["#FF720D"],
        dataLabels: {
          enabled: false
        },
        markers: {
          shape: "circle"
        },
        legend: {
          show: false
        },
        stroke: {
          show: true,
          width: 3,
          curve: "straight",
          colors: ["#FF720D"]
        },
        grid: {
          show: false,
          borderColor: "#eee",
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0
            }
          },
          hover: {
            filter: {
              type: "none",
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0
            }
          }
        },
        xaxis: {
          categories: ["Jan", "feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"],
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: "12px"
            }
          },
          crosshairs: {
            show: false,
            position: "front",
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: "12px"
            }
          }
        },
        yaxis: {
          show: false
        },
        fill: {
          opacity: 1,
          colors: "#FAC7B6"
        },
        tooltip: {
          style: {
            fontSize: "12px"
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands";
            }
          }
        }
      }
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "chart",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a, {
        options: this.state.options,
        series: this.state.series,
        type: "area",
        height: 100
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWVuYS9ob21lL01lbnUuanMiXSwibmFtZXMiOlsiTWVudSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0IiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZW5hYmxlZCIsInNwYXJrbGluZSIsImNvbG9ycyIsImRhdGFMYWJlbHMiLCJtYXJrZXJzIiwic2hhcGUiLCJsZWdlbmQiLCJzdHJva2UiLCJ3aWR0aCIsImN1cnZlIiwiZ3JpZCIsImJvcmRlckNvbG9yIiwicGFkZGluZyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInN0YXRlcyIsIm5vcm1hbCIsImZpbHRlciIsInZhbHVlIiwiaG92ZXIiLCJhY3RpdmUiLCJhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbiIsInhheGlzIiwiY2F0ZWdvcmllcyIsImF4aXNCb3JkZXIiLCJheGlzVGlja3MiLCJsYWJlbHMiLCJzdHlsZSIsImZvbnRTaXplIiwiY3Jvc3NoYWlycyIsInBvc2l0aW9uIiwiZGFzaEFycmF5IiwidG9vbHRpcCIsImZvcm1hdHRlciIsInVuZGVmaW5lZCIsIm9mZnNldFkiLCJ5YXhpcyIsImZpbGwiLCJvcGFjaXR5IiwieSIsInZhbCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQ2pDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxDQUNOO0FBQ0VDLFlBQUksRUFBRSxZQURSO0FBRUVDLFlBQUksRUFBRSxLQUFLSixLQUFMLENBQVdJLElBRm5CLENBR0U7O0FBSEYs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RTtBQUNETixxQkFBUyxFQUFFLFVBQVVPLEdBQVYsRUFBZTtBQUN4QixxQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDRDtBQUhBO0FBSkk7QUFsSEY7QUFSRSxLQUFiO0FBc0lEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCx3QkFDRTtBQUFLLFFBQUUsRUFBQyxPQUFSO0FBQUEsNkJBQ0UscUVBQUMsdURBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3RELEtBQUwsQ0FBV0ksT0FEdEI7QUFFRSxjQUFNLEVBQUUsS0FBS0osS0FBTCxDQUFXQyxNQUZyQjtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsY0FBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVVEOztBQXZKZ0M7O0FBMEpwQk4sbUVBQWYsRSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuXHJcbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJOZXQgUHJvZml0XCIsXHJcbiAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGEsXHJcbiAgICAgICAgICAvL3JhZGl1czogMTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICB0eXBlOiBcImFyZWFcIixcclxuICAgICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb2xvcnM6IFtcIiNGRjcyMERcIl0sXHJcbiAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICBzaGFwZTogXCJjaXJjbGVcIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgd2lkdGg6IDMsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJzdHJhaWdodFwiLFxyXG4gICAgICAgICAgY29sb3JzOiBbXCIjRkY3MjBEXCJdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VlZVwiLFxyXG4gICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYWN0aXZlOiB7XHJcbiAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICAgICAgXCJKYW5cIixcclxuICAgICAgICAgICAgXCJmZWJcIixcclxuICAgICAgICAgICAgXCJNYXJcIixcclxuICAgICAgICAgICAgXCJBcHJcIixcclxuICAgICAgICAgICAgXCJNYXlcIixcclxuICAgICAgICAgICAgXCJKdW5cIixcclxuICAgICAgICAgICAgXCJBdWdcIixcclxuICAgICAgICAgICAgXCJTZXBcIixcclxuICAgICAgICAgICAgXCJPY3RcIixcclxuICAgICAgICAgICAgXCJOb3ZcIixcclxuICAgICAgICAgICAgXCJEZWNcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBheGlzQm9yZGVyOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZyb250XCIsXHJcbiAgICAgICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgIGRhc2hBcnJheTogMyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAwLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgY29sb3JzOiBcIiNGQUM3QjZcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIHZhbCArIFwiIHRob3VzYW5kc1wiO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJjaGFydFwiPlxyXG4gICAgICAgIDxSZWFjdEFwZXhDaGFydFxyXG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfVxyXG4gICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cclxuICAgICAgICAgIHR5cGU9XCJhcmVhXCJcclxuICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=