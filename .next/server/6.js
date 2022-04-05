exports.ids = [6];
exports.modules = {

/***/ "./src/uena/home/OrderChart.js":
/*!*************************************!*\
  !*** ./src/uena/home/OrderChart.js ***!
  \*************************************/
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

var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\uena\\home\\OrderChart.js";



class OrderChart extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
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

/* harmony default export */ __webpack_exports__["default"] = (OrderChart);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWVuYS9ob21lL09yZGVyQ2hhcnQuanMiXSwibmFtZXMiOlsiT3JkZXJDaGFydCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0IiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZW5hYmxlZCIsInNwYXJrbGluZSIsImNvbG9ycyIsImRhdGFMYWJlbHMiLCJtYXJrZXJzIiwic2hhcGUiLCJsZWdlbmQiLCJzdHJva2UiLCJ3aWR0aCIsImN1cnZlIiwiZ3JpZCIsImJvcmRlckNvbG9yIiwicGFkZGluZyIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInN0YXRlcyIsIm5vcm1hbCIsImZpbHRlciIsInZhbHVlIiwiaG92ZXIiLCJhY3RpdmUiLCJhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbiIsInhheGlzIiwiY2F0ZWdvcmllcyIsImF4aXNCb3JkZXIiLCJheGlzVGlja3MiLCJsYWJlbHMiLCJzdHlsZSIsImZvbnRTaXplIiwiY3Jvc3NoYWlycyIsInBvc2l0aW9uIiwiZGFzaEFycmF5IiwidG9vbHRpcCIsImZvcm1hdHRlciIsInVuZGVmaW5lZCIsIm9mZnNldFkiLCJ5YXhpcyIsImZpbGwiLCJvcGFjaXR5IiwieSIsInZhbCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQU4sU0FBeUJDLDRDQUFLLENBQUNDLFNBQS9CLENBQXlDO0FBQ3ZDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxDQUNOO0FBQ0VDLFlBQUksRUFBRSxZQURSO0FBRUVDLFlBQUksRUFBRSxLQUFLSixLQUFMLENBQVdJLElBRm5CLENBR0U7O0FBSEYsT0FETSxDQURHO0FBUVhDLGFBQU8sRUFBRTtBQUNQQyxhQUFLLEVBQUU7QUFDTEMsY0FBSSxFQUFFLE1BREQ7QUFFTEMsZ0JBQU0sRUFBRSxHQUZIO0FBR0xDLGlCQUFPLEVBQUU7QUFDUEMsZ0JBQUksRUFBRTtBQURDLFdBSEo7QUFNTEMsY0FBSSxFQUFFO0FBQ0pDLG1CQUFPLEVBQUU7QUFETCxXQU5EO0FBU0xDLG1CQUFTLEVBQUU7QUFDVEQsbUJBQU8sRUFBRTtBQURBO0FBVE4sU0FEQTtBQWVQRSxjQUFNLEVBQUUsQ0FBQyxTQUFELENBZkQ7QUFnQlBDLGtCQUFVLEVBQUU7QUFDVkgsaUJBQU8sRUFBRTtBQURDLFNBaEJMO0FBbUJQSSxlQUFPLEVBQUU7QUFDUEMsZUFBSyxFQUFFO0FBREEsU0FuQkY7QUF1QlBDLGNBQU0sRUFBRTtBQUNOUixjQUFJLEVBQUU7QUFEQSxTQXZCRDtBQTBCUFMsY0FBTSxFQUFFO0FBQ05ULGNBQUksRUFBRSxJQURBO0FBRU5VLGVBQUssRUFBRSxDQUZEO0FBR05DLGVBQUssRUFBRSxVQUhEO0FBSU5QLGdCQUFNLEVBQUUsQ0FBQyxTQUFEO0FBSkYsU0ExQkQ7QUFpQ1BRLFlBQUksRUFBRTtBQUNKWixjQUFJLEVBQUUsS0FERjtBQUVKYSxxQkFBVyxFQUFFLE1BRlQ7QUFHSkMsaUJBQU8sRUFBRTtBQUNQQyxlQUFHLEVBQUUsQ0FERTtBQUVQQyxpQkFBSyxFQUFFLENBRkE7QUFHUEMsa0JBQU0sRUFBRSxDQUhEO0FBSVBDLGdCQUFJLEVBQUU7QUFKQztBQUhMLFNBakNDO0FBMkNQQyxjQUFNLEVBQUU7QUFDTkMsZ0JBQU0sRUFBRTtBQUNOQyxrQkFBTSxFQUFFO0FBQ054QixrQkFBSSxFQUFFLE1BREE7QUFFTnlCLG1CQUFLLEVBQUU7QUFGRDtBQURGLFdBREY7QUFPTkMsZUFBSyxFQUFFO0FBQ0xGLGtCQUFNLEVBQUU7QUFDTnhCLGtCQUFJLEVBQUUsTUFEQTtBQUVOeUIsbUJBQUssRUFBRTtBQUZEO0FBREgsV0FQRDtBQWFORSxnQkFBTSxFQUFFO0FBQ05DLDRDQUFnQyxFQUFFLEtBRDVCO0FBRU5KLGtCQUFNLEVBQUU7QUFDTnhCLGtCQUFJLEVBQUUsTUFEQTtBQUVOeUIsbUJBQUssRUFBRTtBQUZEO0FBRkY7QUFiRixTQTNDRDtBQWdFUEksYUFBSyxFQUFFO0FBQ0xDLG9CQUFVLEVBQUUsQ0FDVixLQURVLEVBRVYsS0FGVSxFQUdWLEtBSFUsRUFJVixLQUpVLEVBS1YsS0FMVSxFQU1WLEtBTlUsRUFPVixLQVBVLEVBUVYsS0FSVSxFQVNWLEtBVFUsRUFVVixLQVZVLEVBV1YsS0FYVSxDQURQO0FBY0xDLG9CQUFVLEVBQUU7QUFDVjVCLGdCQUFJLEVBQUU7QUFESSxXQWRQO0FBaUJMNkIsbUJBQVMsRUFBRTtBQUNUN0IsZ0JBQUksRUFBRTtBQURHLFdBakJOO0FBb0JMOEIsZ0JBQU0sRUFBRTtBQUNOOUIsZ0JBQUksRUFBRSxLQURBO0FBRU4rQixpQkFBSyxFQUFFO0FBQ0xDLHNCQUFRLEVBQUU7QUFETDtBQUZELFdBcEJIO0FBMEJMQyxvQkFBVSxFQUFFO0FBQ1ZqQyxnQkFBSSxFQUFFLEtBREk7QUFFVmtDLG9CQUFRLEVBQUUsT0FGQTtBQUdWekIsa0JBQU0sRUFBRTtBQUNOQyxtQkFBSyxFQUFFLENBREQ7QUFFTnlCLHVCQUFTLEVBQUU7QUFGTDtBQUhFLFdBMUJQO0FBa0NMQyxpQkFBTyxFQUFFO0FBQ1BsQyxtQkFBTyxFQUFFLElBREY7QUFFUG1DLHFCQUFTLEVBQUVDLFNBRko7QUFHUEMsbUJBQU8sRUFBRSxDQUhGO0FBSVBSLGlCQUFLLEVBQUU7QUFDTEMsc0JBQVEsRUFBRTtBQURMO0FBSkE7QUFsQ0osU0FoRUE7QUEyR1BRLGFBQUssRUFBRTtBQUNMeEMsY0FBSSxFQUFFO0FBREQsU0EzR0E7QUE4R1B5QyxZQUFJLEVBQUU7QUFDSkMsaUJBQU8sRUFBRSxDQURMO0FBRUp0QyxnQkFBTSxFQUFFO0FBRkosU0E5R0M7QUFrSFBnQyxlQUFPLEVBQUU7QUFDUEwsZUFBSyxFQUFFO0FBQ0xDLG9CQUFRLEVBQUU7QUFETCxXQURBO0FBSVBXLFdBQUMsRUFBRTtBQUNETixxQkFBUyxFQUFFLFVBQVVPLEdBQVYsRUFBZTtBQUN4QixxQkFBTyxNQUFNQSxHQUFOLEdBQVksWUFBbkI7QUFDRDtBQUhBO0FBSkk7QUFsSEY7QUFSRSxLQUFiO0FBc0lEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCx3QkFDRSxxRUFBQyx1REFBRDtBQUNFLGFBQU8sRUFBRSxLQUFLdEQsS0FBTCxDQUFXSSxPQUR0QjtBQUVFLFlBQU0sRUFBRSxLQUFLSixLQUFMLENBQVdDLE1BRnJCO0FBR0UsVUFBSSxFQUFDLE1BSFA7QUFJRSxZQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFRRDs7QUFySnNDOztBQXdKMUJOLHlFQUFmLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0QXBleENoYXJ0IGZyb20gXCJyZWFjdC1hcGV4Y2hhcnRzXCI7XHJcblxyXG5jbGFzcyBPcmRlckNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNlcmllczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTmV0IFByb2ZpdFwiLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLFxyXG4gICAgICAgICAgLy9yYWRpdXM6IDEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgdHlwZTogXCJhcmVhXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgem9vbToge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzcGFya2xpbmU6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29sb3JzOiBbXCIjRkY3MjBEXCJdLFxyXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgc2hhcGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgICAgY3VydmU6IFwic3RyYWlnaHRcIixcclxuICAgICAgICAgIGNvbG9yczogW1wiI0ZGNzIwRFwiXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNlZWVcIixcclxuICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXRlczoge1xyXG4gICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICBhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgICAgIFwiSmFuXCIsXHJcbiAgICAgICAgICAgIFwiZmViXCIsXHJcbiAgICAgICAgICAgIFwiTWFyXCIsXHJcbiAgICAgICAgICAgIFwiQXByXCIsXHJcbiAgICAgICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgICAgIFwiSnVuXCIsXHJcbiAgICAgICAgICAgIFwiQXVnXCIsXHJcbiAgICAgICAgICAgIFwiU2VwXCIsXHJcbiAgICAgICAgICAgIFwiT2N0XCIsXHJcbiAgICAgICAgICAgIFwiTm92XCIsXHJcbiAgICAgICAgICAgIFwiRGVjXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBheGlzVGlja3M6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjcm9zc2hhaXJzOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmcm9udFwiLFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgICBkYXNoQXJyYXk6IDMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsbDoge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIGNvbG9yczogXCIjRkFDN0I2XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWwgKyBcIiB0aG91c2FuZHNcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3RBcGV4Q2hhcnRcclxuICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnN9XHJcbiAgICAgICAgc2VyaWVzPXt0aGlzLnN0YXRlLnNlcmllc31cclxuICAgICAgICB0eXBlPVwiYXJlYVwiXHJcbiAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDaGFydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==