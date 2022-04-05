exports.ids = [2];
exports.modules = {

/***/ "./src/uena/home/CustomerMap3.js":
/*!***************************************!*\
  !*** ./src/uena/home/CustomerMap3.js ***!
  \***************************************/
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

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\uena\\home\\CustomerMap3.js";



class CustomerMap3 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: this.props.data,
      options: {
        chart: {
          type: "bar",
          height: 400,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "47%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 3,
          colors: ["transparent"]
        },
        legend: {
          fontSize: "12px",
          markers: {
            width: 20,
            height: 20
          },
          itemMargin: {
            horizontal: 10,
            vertical: 10
          }
        },
        xaxis: {
          categories: ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "nov", "dec"],
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 400
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 400
            }
          }
        },
        colors: ["#ff720d", "#787878", "#C4C4C4"],
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            }
          }
        },
        responsive: [{
          breakpoint: 575,
          options: {
            series: [{
              name: "Income",
              data: [80, 24, 80, 90, 80, 70]
            }, {
              name: "Expense",
              data: [40, 60, 20, 60, 60, 20]
            }, {
              name: "Others",
              data: [20, 17, 5, 20, 20, 10]
            }],
            chart: {
              height: 250
            },
            plotOptions: {
              bar: {
                columnWidth: "65%"
              }
            },
            xaxis: {
              categories: ["jan", "Feb", "Mar", "Apr", "May", "Jun"]
            }
          }
        }]
      }
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "chart",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a, {
        options: this.state.options,
        series: this.state.series,
        type: "bar",
        height: 400
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomerMap3);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWVuYS9ob21lL0N1c3RvbWVyTWFwMy5qcyJdLCJuYW1lcyI6WyJDdXN0b21lck1hcDMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlcmllcyIsImRhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0IiwidG9vbGJhciIsInNob3ciLCJwbG90T3B0aW9ucyIsImJhciIsImhvcml6b250YWwiLCJjb2x1bW5XaWR0aCIsImVuZGluZ1NoYXBlIiwiZGF0YUxhYmVscyIsImVuYWJsZWQiLCJzdHJva2UiLCJ3aWR0aCIsImNvbG9ycyIsImxlZ2VuZCIsImZvbnRTaXplIiwibWFya2VycyIsIml0ZW1NYXJnaW4iLCJ2ZXJ0aWNhbCIsInhheGlzIiwiY2F0ZWdvcmllcyIsImxhYmVscyIsInN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ5YXhpcyIsImZpbGwiLCJvcGFjaXR5IiwidG9vbHRpcCIsInkiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsIm5hbWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFOLFNBQTJCQyw0Q0FBSyxDQUFDQyxTQUFqQyxDQUEyQztBQUN6Q0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxJQURSO0FBRVhDLGFBQU8sRUFBRTtBQUNQQyxhQUFLLEVBQUU7QUFDTEMsY0FBSSxFQUFFLEtBREQ7QUFFTEMsZ0JBQU0sRUFBRSxHQUZIO0FBR0xDLGlCQUFPLEVBQUU7QUFDUEMsZ0JBQUksRUFBRTtBQURDO0FBSEosU0FEQTtBQVFQQyxtQkFBVyxFQUFFO0FBQ1hDLGFBQUcsRUFBRTtBQUNIQyxzQkFB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QyxPQUFSO0FBQUEsNkJBQ0UscUVBQUMsdURBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3hDLEtBQUwsQ0FBV0csT0FEdEI7QUFFRSxjQUFNLEVBQUUsS0FBS0gsS0FBTCxDQUFXQyxNQUZyQjtBQUdFLFlBQUksRUFBQyxLQUhQO0FBSUUsY0FBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVVEOztBQXJJd0M7O0FBd0k1Qk4sMkVBQWYsRSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RBcGV4Q2hhcnQgZnJvbSBcInJlYWN0LWFwZXhjaGFydHNcIjtcclxuXHJcbmNsYXNzIEN1c3RvbWVyTWFwMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZXJpZXM6IHRoaXMucHJvcHMuZGF0YSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICB0eXBlOiBcImJhclwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICBiYXI6IHtcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbHVtbldpZHRoOiBcIjQ3JVwiLFxyXG4gICAgICAgICAgICBlbmRpbmdTaGFwZTogXCJyb3VuZGVkXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgIGNvbG9yczogW1widHJhbnNwYXJlbnRcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGl0ZW1NYXJnaW46IHtcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDogMTAsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiAxMCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgICAgICBcImphblwiLFxyXG4gICAgICAgICAgICBcIkZlYlwiLFxyXG4gICAgICAgICAgICBcIk1hclwiLFxyXG4gICAgICAgICAgICBcIkFwclwiLFxyXG4gICAgICAgICAgICBcIk1heVwiLFxyXG4gICAgICAgICAgICBcIkp1blwiLFxyXG4gICAgICAgICAgICBcIkp1bFwiLFxyXG4gICAgICAgICAgICBcIkF1Z1wiLFxyXG4gICAgICAgICAgICBcIlNlcFwiLFxyXG4gICAgICAgICAgICBcIk9jdFwiLFxyXG4gICAgICAgICAgICBcIm5vdlwiLFxyXG4gICAgICAgICAgICBcImRlY1wiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGNvbG9yczogXCIjNzg3ODc4XCIsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUG9wcGluc1wiLFxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgY29sb3JzOiBcIiM3ODc4NzhcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxM3B4XCIsXHJcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJQb3BwaW5zXCIsXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yczogW1wiI2ZmNzIwZFwiLCBcIiM3ODc4NzhcIiwgXCIjQzRDNEM0XCJdLFxyXG4gICAgICAgIGZpbGw6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcIiQgXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA1NzUsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJJbmNvbWVcIixcclxuICAgICAgICAgICAgICAgICAgZGF0YTogWzgwLCAyNCwgODAsIDkwLCA4MCwgNzBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJFeHBlbnNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFs0MCwgNjAsIDIwLCA2MCwgNjAsIDIwXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiT3RoZXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IFsyMCwgMTcsIDUsIDIwLCAyMCwgMTBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6IFwiNjUlXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcImphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJjaGFydFwiPlxyXG4gICAgICAgIDxSZWFjdEFwZXhDaGFydFxyXG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfVxyXG4gICAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cclxuICAgICAgICAgIHR5cGU9XCJiYXJcIlxyXG4gICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJNYXAzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9