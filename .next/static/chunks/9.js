(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

/***/ "./src/components/table/reactTable/BasicReactTable.js":
/*!************************************************************!*\
  !*** ./src/components/table/reactTable/BasicReactTable.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_7__);








var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\components\\table\\reactTable\\BasicReactTable.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _this3 = undefined,
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// A great library for fuzzy filtering/sorting items
// import matchSorter from "match-sorter";



var matchSorter = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js")];
    },
    modules: ["match-sorter"]
  }
}); // Define a default UI for filtering

function DefaultColumnFilter(_ref) {
  var _ref$column = _ref.column,
      filterValue = _ref$column.filterValue,
      preFilteredRows = _ref$column.preFilteredRows,
      setFilter = _ref$column.setFilter;
  var count = preFilteredRows.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
    value: filterValue || "",
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
    },
    className: "form-control",
    placeholder: ""
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_c = DefaultColumnFilter;

function GlobalFilter(_ref2) {
  _s();

  var preGlobalFilteredRows = _ref2.preGlobalFilteredRows,
      globalFilter = _ref2.globalFilter,
      setGlobalFilter = _ref2.setGlobalFilter;
  var count = preGlobalFilteredRows.length;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(globalFilter),
      _React$useState2 = Object(D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _onChange = Object(react_table__WEBPACK_IMPORTED_MODULE_7__["useAsyncDebounce"])(function (value) {
    setGlobalFilter(value || undefined);
  }, 200);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    id: "example_filter",
    className: "dataTables_filter",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
      className: "d-flex align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "mr-2",
        children: "Search:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        value: value || "",
        onChange: function onChange(e) {
          setValue(e.target.value);

          _onChange(e.target.value);
        },
        className: "form-control",
        placeholder: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
} // This is a custom filter UI for selecting
// a unique option from a list


_s(GlobalFilter, "u76gItWTPW4jhTYSCcNG7/LfbyA=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_7__["useAsyncDebounce"]];
});

_c2 = GlobalFilter;

function SelectColumnFilter(_ref3) {
  _s2();

  var _this = this;

  var _ref3$column = _ref3.column,
      filterValue = _ref3$column.filterValue,
      setFilter = _ref3$column.setFilter,
      preFilteredRows = _ref3$column.preFilteredRows,
      id = _ref3$column.id;
  // Calculate the options for filtering
  // using the preFilteredRows
  var options = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    var options = new Set();
    preFilteredRows.forEach(function (row) {
      options.add(row.values[id]);
    });
    return Object(D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(options.values());
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
    value: filterValue,
    onChange: function onChange(e) {
      setFilter(e.target.value || undefined);
    },
    className: "form-control",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
      value: "",
      children: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), options.map(function (option, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
        value: option,
        children: option
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

_s2(SelectColumnFilter, "UfleS4trXWGxzhzYTKqqYygmjCE=");

_c3 = SelectColumnFilter;

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, {
    keys: [function (row) {
      return row.values[id];
    }]
  });
} // Let the table remove the filter if the string is empty


fuzzyTextFilterFn.autoRemove = function (val) {
  return !val;
}; // Be sure to pass our updateMyData and the skipReset option


function Table(_ref4) {
  _s3();

  var _this2 = this;

  var columns = _ref4.columns,
      data = _ref4.data,
      skipReset = _ref4.skipReset;
  var filterTypes = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: function text(rows, id, filterValue) {
        return rows.filter(function (row) {
          var rowValue = row.values[id];
          return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
        });
      }
    };
  }, []);
  var defaultColumn = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter
    };
  }, []); // Use the state and functions returned from useTable to build your UI

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_7__["useTable"])({
    columns: columns,
    data: data,
    defaultColumn: defaultColumn,
    filterTypes: filterTypes,
    autoResetPage: !skipReset,
    autoResetSelectedRows: !skipReset,
    disableMultiSort: true
  }, react_table__WEBPACK_IMPORTED_MODULE_7__["useFilters"], react_table__WEBPACK_IMPORTED_MODULE_7__["useGlobalFilter"], react_table__WEBPACK_IMPORTED_MODULE_7__["useGroupBy"], react_table__WEBPACK_IMPORTED_MODULE_7__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_7__["useExpanded"], react_table__WEBPACK_IMPORTED_MODULE_7__["usePagination"], react_table__WEBPACK_IMPORTED_MODULE_7__["useRowSelect"], // Here we will use a plugin to add our selection column
  function (hooks) {
    hooks.visibleColumns.push(function (columns) {
      return [{
        id: "selection",
        // Make this column a groupByBoundary. This ensures that groupBy columns
        // are placed after it
        groupByBoundary: true,
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: function Header(_ref5) {
          var getToggleAllRowsSelectedProps = _ref5.getToggleAllRowsSelectedProps;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(IndeterminateCheckbox, _objectSpread({}, getToggleAllRowsSelectedProps()), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 15
          }, _this2);
        },
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: function Cell(_ref6) {
          var row = _ref6.row;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(IndeterminateCheckbox, _objectSpread({}, row.getToggleRowSelectedProps()), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 17
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 15
          }, _this2);
        }
      }].concat(Object(D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__["default"])(columns));
    });
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      prepareRow = _useTable.prepareRow,
      page = _useTable.page,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      pageOptions = _useTable.pageOptions,
      pageCount = _useTable.pageCount,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      setPageSize = _useTable.setPageSize,
      preGlobalFilteredRows = _useTable.preGlobalFilteredRows,
      setGlobalFilter = _useTable.setGlobalFilter,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize,
      globalFilter = _useTable$state.globalFilter; // Render the UI for your table


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "d-flex justify-content-between align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "dataTables_length",
        id: "example_length",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "mr-1",
            children: " Show "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "dropdown bootstrap-select",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("select", {
              value: pageSize,
              onChange: function onChange(e) {
                setPageSize(Number(e.target.value));
              },
              className: "btn dropdown-toggle btn-light",
              children: [5, 10, 15, 20].map(function (pageSize, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("option", {
                  value: pageSize,
                  children: pageSize
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, _this2);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "ml-1",
            children: "entries"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GlobalFilter, {
        preGlobalFilteredRows: preGlobalFilteredRows,
        globalFilter: globalFilter,
        setGlobalFilter: setGlobalFilter
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      className: "display dataTable w-100",
      id: "example",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("thead", {
        children: headerGroups.map(function (headerGroup, i) {
          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            key: i,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 13
            }
          }), headerGroup.headers.map(function (column, i) {
            return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
              key: i,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: [column.canGroupBy ?
              /*#__PURE__*/
              // If the column can be grouped, let's add a toggle
              Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", _objectSpread({}, column.getGroupByToggleProps()), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 23
              }, _this2) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", _objectSpread(_objectSpread({
                className: "d-flex"
              }, column.getSortByToggleProps()), {}, {
                children: [column.render("Header"), column.isSorted ? column.isSortedDesc ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                  src: "/images/sort_desc.png",
                  alt: "desc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 27
                }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                  src: "/images/sort_asc.png",
                  alt: "asc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 27
                }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                  src: "/images/sort_both.png",
                  alt: "both"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 265,
                  columnNumber: 25
                }, _this2)]
              }), void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 21
              }, _this2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 19
            }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: column.canFilter ? column.render("Filter") : null
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 19
            }, _this2));
          }));
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: page.map(function (row, i) {
          prepareRow(row);
          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            key: i,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }
          }), row.cells.map(function (cell, i) {
            return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
              key: i,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }
            }), cell.isGrouped ?
            /*#__PURE__*/
            // If it's a grouped cell, add an expander and row count
            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                children: row.isExpanded ? "👇" : "👉"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 27
              }, _this2), " ", cell.render("Cell", {
                editable: false
              }), " (", row.subRows.length, ")"]
            }, void 0, true) : cell.isAggregated ? // If the cell is aggregated, use the Aggregated
            // renderer for cell
            cell.render("Aggregated") : cell.isPlaceholder ? null : // For cells with repeated values, render null
            // Otherwise, just render the regular cell
            cell.render("Cell", {
              editable: true
            }));
          }));
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "d-flex d-flex justify-content-between align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "dataTables_info",
        children: ["Page ", pageIndex + 1, " of ", pageOptions.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "dataTables_paginate paging_simple_numbers",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "paginate_button previous disabled c-pointer",
          onClick: function onClick() {
            return previousPage();
          },
          disabled: !canPreviousPage,
          children: "Previous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: Array(pageOptions.length).fill("_").map(function (page, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              className: "paginate_button c-pointer ".concat(i === pageIndex ? "current" : ""),
              onClick: function onClick() {
                return gotoPage(i);
              },
              children: i + 1
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 17
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "paginate_button next c-pointer",
          onClick: function onClick() {
            return nextPage();
          },
          disabled: !canNextPage,
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s3(Table, "bBoxG+oShWzLTASIWnMQV5v8eaQ=", false, function () {
  return [react_table__WEBPACK_IMPORTED_MODULE_7__["useTable"]];
});

_c4 = Table;
var IndeterminateCheckbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c5 = _s4(function (_ref7, ref) {
  _s4();

  var indeterminate = _ref7.indeterminate,
      rest = Object(D_react_projects_uena_uena_final_package_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref7, ["indeterminate"]);

  var defaultRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  var resolvedRef = ref || defaultRef;
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread(_objectSpread({
      type: "checkbox",
      ref: resolvedRef
    }, rest), {}, {
      className: "table_checkbox"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 9
    }, _this3)
  }, void 0, false);
}, "ouw4KVvDKeit07oEcYWUcp3TdOA="));
_c6 = IndeterminateCheckbox;

function BasicReactTable(_ref8) {
  _s5();

  var basicTable = _ref8.basicTable;
  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return [{
      Header: "Name",
      accessor: "name",
      // Use a two-stage aggregator here to first
      // count the total rows being aggregated,
      // then sum any of those counts if they are
      // aggregated further
      aggregate: "count",
      Aggregated: function Aggregated(_ref9) {
        var value = _ref9.value;
        return "".concat(value);
      }
    }, {
      Header: "Position",
      accessor: "position",
      Filter: SelectColumnFilter,
      filter: "equals",
      Aggregated: function Aggregated(_ref10) {
        var value = _ref10.value;
        return "".concat(value);
      }
    }, {
      Header: "Office",
      accessor: "office",
      // Aggregate the average age of visitors
      aggregate: "average",
      Aggregated: function Aggregated(_ref11) {
        var value = _ref11.value;
        return "".concat(value);
      }
    }, {
      Header: "Age",
      accessor: "age",
      Aggregated: function Aggregated(_ref12) {
        var value = _ref12.value;
        return "".concat(value);
      }
    }, {
      Header: "Date",
      accessor: "date",
      Aggregated: function Aggregated(_ref13) {
        var value = _ref13.value;
        return "".concat(value);
      }
    }, {
      Header: "Salary",
      accessor: "salary",
      Aggregated: function Aggregated(_ref14) {
        var value = _ref14.value;
        return "".concat(value);
      }
    }];
  }, []); // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  var skipResetRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(false); // After data changes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    skipResetRef.current = false;
  }, [basicTable]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "table-responsive",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      id: "example_wrapper",
      className: "dataTables_wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Table, {
        columns: columns,
        data: basicTable
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 431,
    columnNumber: 5
  }, this);
}

_s5(BasicReactTable, "aIkASF7S84xVrH71hsbJRa+K8mA=");

_c7 = BasicReactTable;
/* harmony default export */ __webpack_exports__["default"] = (BasicReactTable);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "DefaultColumnFilter");
$RefreshReg$(_c2, "GlobalFilter");
$RefreshReg$(_c3, "SelectColumnFilter");
$RefreshReg$(_c4, "Table");
$RefreshReg$(_c5, "IndeterminateCheckbox$React.forwardRef");
$RefreshReg$(_c6, "IndeterminateCheckbox");
$RefreshReg$(_c7, "BasicReactTable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFibGUvcmVhY3RUYWJsZS9CYXNpY1JlYWN0VGFibGUuanMiXSwibmFtZXMiOlsibWF0Y2hTb3J0ZXIiLCJkeW5hbWljIiwic3NyIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImNvbHVtbiIsImZpbHRlclZhbHVlIiwicHJlRmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyIiwiY291bnQiLCJsZW5ndGgiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJHbG9iYWxGaWx0ZXIiLCJwcmVHbG9iYWxGaWx0ZXJlZFJvd3MiLCJnbG9iYWxGaWx0ZXIiLCJzZXRHbG9iYWxGaWx0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsInVzZUFzeW5jRGVib3VuY2UiLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJpZCIsIm9wdGlvbnMiLCJ1c2VNZW1vIiwiU2V0IiwiZm9yRWFjaCIsInJvdyIsImFkZCIsInZhbHVlcyIsIm1hcCIsIm9wdGlvbiIsImkiLCJmdXp6eVRleHRGaWx0ZXJGbiIsInJvd3MiLCJrZXlzIiwiYXV0b1JlbW92ZSIsInZhbCIsIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJza2lwUmVzZXQiLCJmaWx0ZXJUeXBlcyIsImZ1enp5VGV4dCIsInRleHQiLCJmaWx0ZXIiLCJyb3dWYWx1ZSIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsImRlZmF1bHRDb2x1bW4iLCJGaWx0ZXIiLCJ1c2VUYWJsZSIsImF1dG9SZXNldFBhZ2UiLCJhdXRvUmVzZXRTZWxlY3RlZFJvd3MiLCJkaXNhYmxlTXVsdGlTb3J0IiwidXNlRmlsdGVycyIsInVzZUdsb2JhbEZpbHRlciIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJ1c2VSb3dTZWxlY3QiLCJob29rcyIsInZpc2libGVDb2x1bW5zIiwicHVzaCIsImdyb3VwQnlCb3VuZGFyeSIsIkhlYWRlciIsImdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIiwiQ2VsbCIsImdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJwcmVwYXJlUm93IiwicGFnZSIsImNhblByZXZpb3VzUGFnZSIsImNhbk5leHRQYWdlIiwicGFnZU9wdGlvbnMiLCJwYWdlQ291bnQiLCJnb3RvUGFnZSIsIm5leHRQYWdlIiwicHJldmlvdXNQYWdlIiwic2V0UGFnZVNpemUiLCJzdGF0ZSIsInBhZ2VJbmRleCIsInBhZ2VTaXplIiwiTnVtYmVyIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImdldEhlYWRlclByb3BzIiwiY2FuR3JvdXBCeSIsImdldEdyb3VwQnlUb2dnbGVQcm9wcyIsImdldFNvcnRCeVRvZ2dsZVByb3BzIiwicmVuZGVyIiwiaXNTb3J0ZWQiLCJpc1NvcnRlZERlc2MiLCJjYW5GaWx0ZXIiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsImlzR3JvdXBlZCIsImdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMiLCJpc0V4cGFuZGVkIiwiZWRpdGFibGUiLCJzdWJSb3dzIiwiaXNBZ2dyZWdhdGVkIiwiaXNQbGFjZWhvbGRlciIsIkFycmF5IiwiZmlsbCIsIkluZGV0ZXJtaW5hdGVDaGVja2JveCIsImZvcndhcmRSZWYiLCJyZWYiLCJpbmRldGVybWluYXRlIiwicmVzdCIsImRlZmF1bHRSZWYiLCJ1c2VSZWYiLCJyZXNvbHZlZFJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJCYXNpY1JlYWN0VGFibGUiLCJiYXNpY1RhYmxlIiwiYWNjZXNzb3IiLCJhZ2dyZWdhdGUiLCJBZ2dyZWdhdGVkIiwic2tpcFJlc2V0UmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEVBQUVvRjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztJQWhFUUQsZTs7TUFBQUEsZTtBQWtFTUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy85LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQSBncmVhdCBsaWJyYXJ5IGZvciBmdXp6eSBmaWx0ZXJpbmcvc29ydGluZyBpdGVtc1xyXG4vLyBpbXBvcnQgbWF0Y2hTb3J0ZXIgZnJvbSBcIm1hdGNoLXNvcnRlclwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB1c2VBc3luY0RlYm91bmNlLFxyXG4gIHVzZUV4cGFuZGVkLFxyXG4gIHVzZUZpbHRlcnMsXHJcbiAgdXNlR2xvYmFsRmlsdGVyLFxyXG4gIHVzZUdyb3VwQnksXHJcbiAgdXNlUGFnaW5hdGlvbixcclxuICB1c2VSb3dTZWxlY3QsXHJcbiAgdXNlU29ydEJ5LFxyXG4gIHVzZVRhYmxlLFxyXG59IGZyb20gXCJyZWFjdC10YWJsZVwiO1xyXG5jb25zdCBtYXRjaFNvcnRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwibWF0Y2gtc29ydGVyXCIpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG4vLyBEZWZpbmUgYSBkZWZhdWx0IFVJIGZvciBmaWx0ZXJpbmdcclxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlciB9LFxyXG59KSB7XHJcbiAgY29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgIHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCBcIlwifVxyXG4gICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTsgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdsb2JhbEZpbHRlcih7XHJcbiAgcHJlR2xvYmFsRmlsdGVyZWRSb3dzLFxyXG4gIGdsb2JhbEZpbHRlcixcclxuICBzZXRHbG9iYWxGaWx0ZXIsXHJcbn0pIHtcclxuICBjb25zdCBjb3VudCA9IHByZUdsb2JhbEZpbHRlcmVkUm93cy5sZW5ndGg7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShnbG9iYWxGaWx0ZXIpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQXN5bmNEZWJvdW5jZSgodmFsdWUpID0+IHtcclxuICAgIHNldEdsb2JhbEZpbHRlcih2YWx1ZSB8fCB1bmRlZmluZWQpO1xyXG4gIH0sIDIwMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiZXhhbXBsZV9maWx0ZXJcIiBjbGFzc05hbWU9XCJkYXRhVGFibGVzX2ZpbHRlclwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj5TZWFyY2g6PC9zcGFuPlxyXG5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYSBjdXN0b20gZmlsdGVyIFVJIGZvciBzZWxlY3RpbmdcclxuLy8gYSB1bmlxdWUgb3B0aW9uIGZyb20gYSBsaXN0XHJcbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XHJcbiAgY29sdW1uOiB7IGZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWQgfSxcclxufSkge1xyXG4gIC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXHJcbiAgLy8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICBwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgIG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXTtcclxuICB9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pO1xyXG5cclxuICAvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWxlY3RcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlfVxyXG4gICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTtcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgID5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxyXG4gICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cclxuICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnV6enlUZXh0RmlsdGVyRm4ocm93cywgaWQsIGZpbHRlclZhbHVlKSB7XHJcbiAgcmV0dXJuIG1hdGNoU29ydGVyKHJvd3MsIGZpbHRlclZhbHVlLCB7IGtleXM6IFsocm93KSA9PiByb3cudmFsdWVzW2lkXV0gfSk7XHJcbn1cclxuXHJcbi8vIExldCB0aGUgdGFibGUgcmVtb3ZlIHRoZSBmaWx0ZXIgaWYgdGhlIHN0cmluZyBpcyBlbXB0eVxyXG5mdXp6eVRleHRGaWx0ZXJGbi5hdXRvUmVtb3ZlID0gKHZhbCkgPT4gIXZhbDtcclxuXHJcbi8vIEJlIHN1cmUgdG8gcGFzcyBvdXIgdXBkYXRlTXlEYXRhIGFuZCB0aGUgc2tpcFJlc2V0IG9wdGlvblxyXG5mdW5jdGlvbiBUYWJsZSh7IGNvbHVtbnMsIGRhdGEsIHNraXBSZXNldCB9KSB7XHJcbiAgY29uc3QgZmlsdGVyVHlwZXMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgLy8gQWRkIGEgbmV3IGZ1enp5VGV4dEZpbHRlckZuIGZpbHRlciB0eXBlLlxyXG4gICAgICBmdXp6eVRleHQ6IGZ1enp5VGV4dEZpbHRlckZuLFxyXG4gICAgICAvLyBPciwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBmaWx0ZXIgdG8gdXNlXHJcbiAgICAgIC8vIFwic3RhcnRXaXRoXCJcclxuICAgICAgdGV4dDogKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByb3dzLmZpbHRlcigocm93KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xyXG4gICAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBTdHJpbmcocm93VmFsdWUpXHJcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0c1dpdGgoU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICA6IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGVmYXVsdENvbHVtbiA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBMZXQncyBzZXQgdXAgb3VyIGRlZmF1bHQgRmlsdGVyIFVJXHJcbiAgICAgIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICAvLyBVc2UgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnMgcmV0dXJuZWQgZnJvbSB1c2VUYWJsZSB0byBidWlsZCB5b3VyIFVJXHJcbiAgY29uc3Qge1xyXG4gICAgZ2V0VGFibGVQcm9wcyxcclxuICAgIGdldFRhYmxlQm9keVByb3BzLFxyXG4gICAgaGVhZGVyR3JvdXBzLFxyXG4gICAgcHJlcGFyZVJvdyxcclxuICAgIHBhZ2UsIC8vIEluc3RlYWQgb2YgdXNpbmcgJ3Jvd3MnLCB3ZSdsbCB1c2UgcGFnZSxcclxuICAgIC8vIHdoaWNoIGhhcyBvbmx5IHRoZSByb3dzIGZvciB0aGUgYWN0aXZlIHBhZ2VcclxuXHJcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGVzZSB0aGluZ3MgYXJlIHN1cGVyIGhhbmR5LCB0b28gOylcclxuICAgIGNhblByZXZpb3VzUGFnZSxcclxuICAgIGNhbk5leHRQYWdlLFxyXG4gICAgcGFnZU9wdGlvbnMsXHJcbiAgICBwYWdlQ291bnQsXHJcbiAgICBnb3RvUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgcHJldmlvdXNQYWdlLFxyXG4gICAgc2V0UGFnZVNpemUsXHJcbiAgICBwcmVHbG9iYWxGaWx0ZXJlZFJvd3MsXHJcbiAgICBzZXRHbG9iYWxGaWx0ZXIsXHJcbiAgICBzdGF0ZTogeyBwYWdlSW5kZXgsIHBhZ2VTaXplLCBnbG9iYWxGaWx0ZXIgfSxcclxuICB9ID0gdXNlVGFibGUoXHJcbiAgICB7XHJcbiAgICAgIGNvbHVtbnMsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGRlZmF1bHRDb2x1bW4sXHJcbiAgICAgIGZpbHRlclR5cGVzLFxyXG4gICAgICBhdXRvUmVzZXRQYWdlOiAhc2tpcFJlc2V0LFxyXG4gICAgICBhdXRvUmVzZXRTZWxlY3RlZFJvd3M6ICFza2lwUmVzZXQsXHJcbiAgICAgIGRpc2FibGVNdWx0aVNvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdXNlRmlsdGVycyxcclxuICAgIHVzZUdsb2JhbEZpbHRlcixcclxuICAgIHVzZUdyb3VwQnksXHJcbiAgICB1c2VTb3J0QnksXHJcbiAgICB1c2VFeHBhbmRlZCxcclxuICAgIHVzZVBhZ2luYXRpb24sXHJcbiAgICB1c2VSb3dTZWxlY3QsXHJcblxyXG4gICAgLy8gSGVyZSB3ZSB3aWxsIHVzZSBhIHBsdWdpbiB0byBhZGQgb3VyIHNlbGVjdGlvbiBjb2x1bW5cclxuICAgIChob29rcykgPT4ge1xyXG4gICAgICBob29rcy52aXNpYmxlQ29sdW1ucy5wdXNoKChjb2x1bW5zKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IFwic2VsZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIC8vIE1ha2UgdGhpcyBjb2x1bW4gYSBncm91cEJ5Qm91bmRhcnkuIFRoaXMgZW5zdXJlcyB0aGF0IGdyb3VwQnkgY29sdW1uc1xyXG4gICAgICAgICAgICAvLyBhcmUgcGxhY2VkIGFmdGVyIGl0XHJcbiAgICAgICAgICAgIGdyb3VwQnlCb3VuZGFyeTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gVGhlIGhlYWRlciBjYW4gdXNlIHRoZSB0YWJsZSdzIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIG1ldGhvZFxyXG4gICAgICAgICAgICAvLyB0byByZW5kZXIgYSBjaGVja2JveFxyXG4gICAgICAgICAgICBIZWFkZXI6ICh7IGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIH0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEluZGV0ZXJtaW5hdGVDaGVja2JveCB7Li4uZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgLy8gVGhlIGNlbGwgY2FuIHVzZSB0aGUgaW5kaXZpZHVhbCByb3cncyBnZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzIG1ldGhvZFxyXG4gICAgICAgICAgICAvLyB0byB0aGUgcmVuZGVyIGEgY2hlY2tib3hcclxuICAgICAgICAgICAgQ2VsbDogKHsgcm93IH0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEluZGV0ZXJtaW5hdGVDaGVja2JveCB7Li4ucm93LmdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMoKX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAuLi5jb2x1bW5zLFxyXG4gICAgICAgIF07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhVGFibGVzX2xlbmd0aFwiIGlkPVwiZXhhbXBsZV9sZW5ndGhcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTFcIj4gU2hvdyA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gYm9vdHN0cmFwLXNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRQYWdlU2l6ZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZHJvcGRvd24tdG9nZ2xlIGJ0bi1saWdodFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1s1LCAxMCwgMTUsIDIwXS5tYXAoKHBhZ2VTaXplLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwYWdlU2l6ZX0ga2V5PXtpfSB2YWx1ZT17cGFnZVNpemV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+ZW50cmllczwvc3Bhbj5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxHbG9iYWxGaWx0ZXJcclxuICAgICAgICAgIHByZUdsb2JhbEZpbHRlcmVkUm93cz17cHJlR2xvYmFsRmlsdGVyZWRSb3dzfVxyXG4gICAgICAgICAgZ2xvYmFsRmlsdGVyPXtnbG9iYWxGaWx0ZXJ9XHJcbiAgICAgICAgICBzZXRHbG9iYWxGaWx0ZXI9e3NldEdsb2JhbEZpbHRlcn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRhYmxlXHJcbiAgICAgICAgey4uLmdldFRhYmxlUHJvcHMoKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJkaXNwbGF5IGRhdGFUYWJsZSB3LTEwMFwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHRoIHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmNhbkdyb3VwQnkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGNhbiBiZSBncm91cGVkLCBsZXQncyBhZGQgYSB0b2dnbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5jb2x1bW4uZ2V0R3JvdXBCeVRvZ2dsZVByb3BzKCl9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWZsZXhcIiB7Li4uY29sdW1uLmdldFNvcnRCeVRvZ2dsZVByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoXCJIZWFkZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogQWRkIGEgc29ydCBkaXJlY3Rpb24gaW5kaWNhdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5pc1NvcnRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLmlzU29ydGVkRGVzYyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29ydF9kZXNjLnBuZ1wiIGFsdD1cImRlc2NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zb3J0X2FzYy5wbmdcIiBhbHQ9XCJhc2NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc29ydF9ib3RoLnBuZ1wiIGFsdD1cImJvdGhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogUmVuZGVyIHRoZSBjb2x1bW5zIGZpbHRlciBVSSAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdj57Y29sdW1uLmNhbkZpbHRlciA/IGNvbHVtbi5yZW5kZXIoXCJGaWx0ZXJcIikgOiBudWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtwYWdlLm1hcCgocm93LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoKGNlbGwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dGQgey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5pc0dyb3VwZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBncm91cGVkIGNlbGwsIGFkZCBhbiBleHBhbmRlciBhbmQgcm93IGNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLnJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5pc0V4cGFuZGVkID8gXCLwn5GHXCIgOiBcIvCfkYlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLnJlbmRlcihcIkNlbGxcIiwgeyBlZGl0YWJsZTogZmFsc2UgfSl9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LnN1YlJvd3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogY2VsbC5pc0FnZ3JlZ2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjZWxsIGlzIGFnZ3JlZ2F0ZWQsIHVzZSB0aGUgQWdncmVnYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXJlciBmb3IgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcihcIkFnZ3JlZ2F0ZWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzUGxhY2Vob2xkZXIgPyBudWxsIDogKCAvLyBGb3IgY2VsbHMgd2l0aCByZXBlYXRlZCB2YWx1ZXMsIHJlbmRlciBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwganVzdCByZW5kZXIgdGhlIHJlZ3VsYXIgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnJlbmRlcihcIkNlbGxcIiwgeyBlZGl0YWJsZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhVGFibGVzX2luZm9cIj5cclxuICAgICAgICAgIFBhZ2Uge3BhZ2VJbmRleCArIDF9IG9mIHtwYWdlT3B0aW9ucy5sZW5ndGh9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YVRhYmxlc19wYWdpbmF0ZSBwYWdpbmdfc2ltcGxlX251bWJlcnNcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnaW5hdGVfYnV0dG9uIHByZXZpb3VzIGRpc2FibGVkIGMtcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtBcnJheShwYWdlT3B0aW9ucy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgLmZpbGwoXCJfXCIpXHJcbiAgICAgICAgICAgICAgLm1hcCgocGFnZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGFnaW5hdGVfYnV0dG9uIGMtcG9pbnRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPT09IHBhZ2VJbmRleCA/IFwiY3VycmVudFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ290b1BhZ2UoaSl9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2kgKyAxfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdpbmF0ZV9idXR0b24gbmV4dCBjLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWNhbk5leHRQYWdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBJbmRldGVybWluYXRlQ2hlY2tib3ggPSBSZWFjdC5mb3J3YXJkUmVmKFxyXG4gICh7IGluZGV0ZXJtaW5hdGUsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0UmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBjb25zdCByZXNvbHZlZFJlZiA9IHJlZiB8fCBkZWZhdWx0UmVmO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHJlc29sdmVkUmVmLmN1cnJlbnQuaW5kZXRlcm1pbmF0ZSA9IGluZGV0ZXJtaW5hdGU7XHJcbiAgICB9LCBbcmVzb2x2ZWRSZWYsIGluZGV0ZXJtaW5hdGVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIHJlZj17cmVzb2x2ZWRSZWZ9XHJcbiAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlX2NoZWNrYm94XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gQmFzaWNSZWFjdFRhYmxlKHsgYmFzaWNUYWJsZSB9KSB7XHJcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBbXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6IFwiTmFtZVwiLFxyXG4gICAgICAgIGFjY2Vzc29yOiBcIm5hbWVcIixcclxuICAgICAgICAvLyBVc2UgYSB0d28tc3RhZ2UgYWdncmVnYXRvciBoZXJlIHRvIGZpcnN0XHJcbiAgICAgICAgLy8gY291bnQgdGhlIHRvdGFsIHJvd3MgYmVpbmcgYWdncmVnYXRlZCxcclxuICAgICAgICAvLyB0aGVuIHN1bSBhbnkgb2YgdGhvc2UgY291bnRzIGlmIHRoZXkgYXJlXHJcbiAgICAgICAgLy8gYWdncmVnYXRlZCBmdXJ0aGVyXHJcbiAgICAgICAgYWdncmVnYXRlOiBcImNvdW50XCIsXHJcbiAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9YCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogXCJQb3NpdGlvblwiLFxyXG4gICAgICAgIGFjY2Vzc29yOiBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXHJcbiAgICAgICAgZmlsdGVyOiBcImVxdWFsc1wiLFxyXG4gICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6IFwiT2ZmaWNlXCIsXHJcbiAgICAgICAgYWNjZXNzb3I6IFwib2ZmaWNlXCIsXHJcbiAgICAgICAgLy8gQWdncmVnYXRlIHRoZSBhdmVyYWdlIGFnZSBvZiB2aXNpdG9yc1xyXG4gICAgICAgIGFnZ3JlZ2F0ZTogXCJhdmVyYWdlXCIsXHJcbiAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9YCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogXCJBZ2VcIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJhZ2VcIixcclxuICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiBcIkRhdGVcIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJkYXRlXCIsXHJcbiAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9YCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogXCJTYWxhcnlcIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJzYWxhcnlcIixcclxuICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgLy8gV2UgbmVlZCB0byBrZWVwIHRoZSB0YWJsZSBmcm9tIHJlc2V0dGluZyB0aGUgcGFnZUluZGV4IHdoZW4gd2VcclxuICAvLyBVcGRhdGUgZGF0YS4gU28gd2UgY2FuIGtlZXAgdHJhY2sgb2YgdGhhdCBmbGFnIHdpdGggYSByZWYuXHJcbiAgY29uc3Qgc2tpcFJlc2V0UmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcclxuXHJcbiAgLy8gQWZ0ZXIgZGF0YSBjaGFuZ2VzLCB3ZSB0dXJuIHRoZSBmbGFnIGJhY2sgb2ZmXHJcbiAgLy8gc28gdGhhdCBpZiBkYXRhIGFjdHVhbGx5IGNoYW5nZXMgd2hlbiB3ZSdyZSBub3RcclxuICAvLyBlZGl0aW5nIGl0LCB0aGUgcGFnZSBpcyByZXNldFxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBza2lwUmVzZXRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gIH0sIFtiYXNpY1RhYmxlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgPGRpdiBpZD1cImV4YW1wbGVfd3JhcHBlclwiIGNsYXNzTmFtZT1cImRhdGFUYWJsZXNfd3JhcHBlclwiPlxyXG4gICAgICAgIDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtiYXNpY1RhYmxlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljUmVhY3RUYWJsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==