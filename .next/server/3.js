exports.ids = [3];
exports.modules = {

/***/ "./src/uena/home/CustomersChart.js":
/*!*****************************************!*\
  !*** ./src/uena/home/CustomersChart.js ***!
  \*****************************************/
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

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\uena\\home\\CustomersChart.js";



class CustomersChart extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a, {
      options: this.state.options,
      series: this.state.series,
      type: "area",
      height: 100
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomersChart);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWVuYS9ob21lL0N1c3RvbWVyc0NoYXJ0LmpzIl0sIm5hbWVzIjpbIkN1c3RvbWVyc0NoYXJ0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJoZWlnaHQiLCJ0b29sYmFyIiwic2hvdyIsInpvb20iLCJlbmFibGVkIiwic3BhcmtsaW5lIiwiY29sb3JzIiwiZGF0YUxhYmVscyIsIm1hcmtlcnMiLCJzaGFwZSIsImxlZ2VuZCIsInN0cm9rZSIsIndpZHRoIiwiY3VydmUiLCJncmlkIiwiYm9yZGVyQ29sb3IiLCJwYWRkaW5nIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3RhdGVzIiwibm9ybWFsIiwiZmlsdGVyIiwidmFsdWUiLCJob3ZlciIsImFjdGl2ZSIsImFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwiYXhpc0JvcmRlciIsImF4aXNUaWNrcyIsImxhYmVscyIsInN0eWxlIiwiZm9udFNpemUiLCJjcm9zc2hhaXJzIiwicG9zaXRpb24iLCJkYXNoQXJyYXkiLCJ0b29sdGlwIiwiZm9ybWF0dGVyIiwidW5kZWZpbmVkIiwib2Zmc2V0WSIsInlheGlzIiwiZmlsbCIsIm9wYWNpdHkiLCJ5IiwidmFsIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsY0FBTixTQUE2QkMsNENBQUssQ0FBQ0MsU0FBbkMsQ0FBNkM7QUFDM0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFLENBQ047QUFDRUMsWUFBSSxFQUFFLFlBRFI7QUFFRUMsWUFBSSxFQUFFLEtBQUtKLEtBQUwsQ0FB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LFdBREE7QUFJUFcsV0FBQyxFQUFFO0FBQ0ROLHFCQUFTLEVBQUUsVUFBVU8sR0FBVixFQUFlO0FBQ3hCLHFCQUFPLE1BQU1BLEdBQU4sR0FBWSxZQUFuQjtBQUNEO0FBSEE7QUFKSTtBQWxIRjtBQVJFLEtBQWI7QUFzSUQ7O0FBRURDLFFBQU0sR0FBRztBQUNQLHdCQUNFLHFFQUFDLHVEQUFEO0FBQ0UsYUFBTyxFQUFFLEtBQUt0RCxLQUFMLENBQVdJLE9BRHRCO0FBRUUsWUFBTSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0MsTUFGckI7QUFHRSxVQUFJLEVBQUMsTUFIUDtBQUlFLFlBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVFEOztBQXJKMEM7O0FBd0o5Qk4sNkVBQWYsRSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuXHJcbmNsYXNzIEN1c3RvbWVyc0NoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTmV0IFByb2ZpdFwiLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxyXG4gICAgICAgICAgLy9yYWRpdXM6IDEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgdHlwZTogXCJhcmVhXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgem9vbToge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzcGFya2xpbmU6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29sb3JzOiBbXCIjRkY3MjBEXCJdLFxyXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgc2hhcGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgY3VydmU6IFwic3RyYWlnaHRcIixcclxuICAgICAgICAgIGNvbG9yczogW1wiI0ZGNzIwRFwiXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNlZWVcIixcclxuICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgICAgIFwiSmFuXCIsXHJcbiAgICAgICAgICAgIFwiZmViXCIsXHJcbiAgICAgICAgICAgIFwiTWFyXCIsXHJcbiAgICAgICAgICAgIFwiQXByXCIsXHJcbiAgICAgICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgICAgIFwiSnVuXCIsXHJcbiAgICAgICAgICAgIFwiQXVnXCIsXHJcbiAgICAgICAgICAgIFwiU2VwXCIsXHJcbiAgICAgICAgICAgIFwiT2N0XCIsXHJcbiAgICAgICAgICAgIFwiTm92XCIsXHJcbiAgICAgICAgICAgIFwiRGVjXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBheGlzVGlja3M6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjcm9zc2hhaXJzOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmcm9udFwiLFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgICBkYXNoQXJyYXk6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIGNvbG9yczogXCIjRkFDN0I2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3RBcGV4Q2hhcnRcclxuICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9XHJcbiAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cclxuICAgICAgICB0eXBlPVwiYXJlYVwiXHJcbiAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJzQ2hhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=