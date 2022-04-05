exports.ids = [7];
exports.modules = {

/***/ "./src/components/table/reactTable/BasicReactTable.js":
/*!************************************************************!*\
  !*** ./src/components/table/reactTable/BasicReactTable.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\react-projects\\uena\\uena-final\\package\\src\\components\\table\\reactTable\\BasicReactTable.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// A great library for fuzzy filtering/sorting items
// import matchSorter from "match-sorter";



const matchSorter = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! match-sorter */ "match-sorter", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! match-sorter */ "match-sorter")],
    modules: ["match-sorter"]
  }
}); // Define a default UI for filtering

function DefaultColumnFilter({
  column: {
    filterValue,
    preFilteredRows,
    setFilter
  }
}) {
  const count = preFilteredRows.length;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    value: filterValue || "",
    onChange: e => {
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

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(globalFilter);
  const onChange = Object(react_table__WEBPACK_IMPORTED_MODULE_3__["useAsyncDebounce"])(value => {
    setGlobalFilter(value || undefined);
  }, 200);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "example_filter",
    className: "dataTables_filter",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "d-flex align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "mr-2",
        children: "Search:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        value: value || "",
        onChange: e => {
          setValue(e.target.value);
          onChange(e.target.value);
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


function SelectColumnFilter({
  column: {
    filterValue,
    setFilter,
    preFilteredRows,
    id
  }
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]); // Render a multi-select box

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
    value: filterValue,
    onChange: e => {
      setFilter(e.target.value || undefined);
    },
    className: "form-control",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "",
      children: "All"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this), options.map((option, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: option,
      children: option
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, {
    keys: [row => row.values[id]]
  });
} // Let the table remove the filter if the string is empty


fuzzyTextFilterFn.autoRemove = val => !val; // Be sure to pass our updateMyData and the skipReset option


function Table({
  columns,
  data,
  skipReset
}) {
  const filterTypes = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => ({
    // Add a new fuzzyTextFilterFn filter type.
    fuzzyText: fuzzyTextFilterFn,
    // Or, override the default text filter to use
    // "startWith"
    text: (rows, id, filterValue) => {
      return rows.filter(row => {
        const rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
      });
    }
  }), []);
  const defaultColumn = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => ({
    // Let's set up our default Filter UI
    Filter: DefaultColumnFilter
  }), []); // Use the state and functions returned from useTable to build your UI

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: {
      pageIndex,
      pageSize,
      globalFilter
    }
  } = Object(react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"])({
    columns,
    data,
    defaultColumn,
    filterTypes,
    autoResetPage: !skipReset,
    autoResetSelectedRows: !skipReset,
    disableMultiSort: true
  }, react_table__WEBPACK_IMPORTED_MODULE_3__["useFilters"], react_table__WEBPACK_IMPORTED_MODULE_3__["useGlobalFilter"], react_table__WEBPACK_IMPORTED_MODULE_3__["useGroupBy"], react_table__WEBPACK_IMPORTED_MODULE_3__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_3__["useExpanded"], react_table__WEBPACK_IMPORTED_MODULE_3__["usePagination"], react_table__WEBPACK_IMPORTED_MODULE_3__["useRowSelect"], // Here we will use a plugin to add our selection column
  hooks => {
    hooks.visibleColumns.push(columns => {
      return [{
        id: "selection",
        // Make this column a groupByBoundary. This ensures that groupBy columns
        // are placed after it
        groupByBoundary: true,
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({
          getToggleAllRowsSelectedProps
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndeterminateCheckbox, _objectSpread({}, getToggleAllRowsSelectedProps()), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 15
        }, this),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({
          row
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IndeterminateCheckbox, _objectSpread({}, row.getToggleRowSelectedProps()), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 15
        }, this)
      }, ...columns];
    });
  }); // Render the UI for your table

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex justify-content-between align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "dataTables_length",
        id: "example_length",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: "d-flex align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "mr-1",
            children: " Show "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "dropdown bootstrap-select",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              value: pageSize,
              onChange: e => {
                setPageSize(Number(e.target.value));
              },
              className: "btn dropdown-toggle btn-light",
              children: [5, 10, 15, 20].map((pageSize, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: pageSize,
                children: pageSize
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 19
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GlobalFilter, {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      className: "display dataTable w-100",
      id: "example",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: headerGroups.map((headerGroup, i) => /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
          key: i,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }
        }), headerGroup.headers.map((column, i) => /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
          key: i,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 17
          }
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [column.canGroupBy ?
          /*#__PURE__*/
          // If the column can be grouped, let's add a toggle
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", _objectSpread({}, column.getGroupByToggleProps()), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 23
          }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", _objectSpread(_objectSpread({
            className: "d-flex"
          }, column.getSortByToggleProps()), {}, {
            children: [column.render("Header"), column.isSorted ? column.isSortedDesc ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/sort_desc.png",
              alt: "desc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 27
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/sort_asc.png",
              alt: "asc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 27
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/sort_both.png",
              alt: "both"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 25
            }, this)]
          }), void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 19
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: column.canFilter ? column.render("Filter") : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 19
        }, this)))))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: page.map((row, i) => {
          prepareRow(row);
          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            key: i,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }
          }), row.cells.map((cell, i) => {
            return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
              key: i,
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }
            }), cell.isGrouped ?
            /*#__PURE__*/
            // If it's a grouped cell, add an expander and row count
            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", _objectSpread(_objectSpread({}, row.getToggleRowExpandedProps()), {}, {
                children: row.isExpanded ? "👇" : "👉"
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 27
              }, this), " ", cell.render("Cell", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex d-flex justify-content-between align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "dataTables_info",
        children: ["Page ", pageIndex + 1, " of ", pageOptions.length]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "dataTables_paginate paging_simple_numbers",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "paginate_button previous disabled c-pointer",
          onClick: () => previousPage(),
          disabled: !canPreviousPage,
          children: "Previous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Array(pageOptions.length).fill("_").map((page, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: `paginate_button c-pointer ${i === pageIndex ? "current" : ""}`,
            onClick: () => gotoPage(i),
            children: i + 1
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 17
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "paginate_button next c-pointer",
          onClick: () => nextPage(),
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

const IndeterminateCheckbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((_ref, ref) => {
  let {
    indeterminate
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["indeterminate"]);

  const defaultRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const resolvedRef = ref || defaultRef;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread(_objectSpread({
      type: "checkbox",
      ref: resolvedRef
    }, rest), {}, {
      className: "table_checkbox"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
});

function BasicReactTable({
  basicTable
}) {
  const columns = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(() => [{
    Header: "Name",
    accessor: "name",
    // Use a two-stage aggregator here to first
    // count the total rows being aggregated,
    // then sum any of those counts if they are
    // aggregated further
    aggregate: "count",
    Aggregated: ({
      value
    }) => `${value}`
  }, {
    Header: "Position",
    accessor: "position",
    Filter: SelectColumnFilter,
    filter: "equals",
    Aggregated: ({
      value
    }) => `${value}`
  }, {
    Header: "Office",
    accessor: "office",
    // Aggregate the average age of visitors
    aggregate: "average",
    Aggregated: ({
      value
    }) => `${value}`
  }, {
    Header: "Age",
    accessor: "age",
    Aggregated: ({
      value
    }) => `${value}`
  }, {
    Header: "Date",
    accessor: "date",
    Aggregated: ({
      value
    }) => `${value}`
  }, {
    Header: "Salary",
    accessor: "salary",
    Aggregated: ({
      value
    }) => `${value}`
  }], []); // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  const skipResetRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(false); // After data changes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    skipResetRef.current = false;
  }, [basicTable]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "table-responsive",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "example_wrapper",
      className: "dataTables_wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Table, {
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

/* harmony default export */ __webpack_exports__["default"] = (BasicReactTable);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJsZS9yZWFjdFRhYmxlL0Jhc2ljUmVhY3RUYWJsZS5qcyJdLCJuYW1lcyI6WyJtYXRjaFNvcnRlciIsImR5bmFtaWMiLCJzc3IiLCJEZWZhdWx0Q29sdW1uRmlsdGVyIiwiY29sdW1uIiwiZmlsdGVyVmFsdWUiLCJwcmVGaWx0ZXJlZFJvd3MiLCJzZXRGaWx0ZXIiLCJjb3VudCIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIkdsb2JhbEZpbHRlciIsInByZUdsb2JhbEZpbHRlcmVkUm93cyIsImdsb2JhbEZpbHRlciIsInNldEdsb2JhbEZpbHRlciIsInNldFZhbHVlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwidXNlQXN5bmNEZWJvdW5jZSIsIlNlbGVjdENvbHVtbkZpbHRlciIsImlkIiwib3B0aW9ucyIsInVzZU1lbW8iLCJTZXQiLCJmb3JFYWNoIiwicm93IiwiYWRkIiwidmFsdWVzIiwibWFwIiwib3B0aW9uIiwiaSIsImZ1enp5VGV4dEZpbHRlckZuIiwicm93cyIsImtleXMiLCJhdXRvUmVtb3ZlIiwidmFsIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInNraXBSZXNldCIsImZpbHRlclR5cGVzIiwiZnV6enlUZXh0IiwidGV4dCIsImZpbHRlciIsInJvd1ZhbHVlIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJzdGFydHNXaXRoIiwiZGVmYXVsdENvbHVtbiIsIkZpbHRlciIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInByZXBhcmVSb3ciLCJwYWdlIiwiY2FuUHJldmlvdXNQYWdlIiwiY2FuTmV4dFBhZ2UiLCJwYWdlT3B0aW9ucyIsInBhZ2VDb3VudCIsImdvdG9QYWdlIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJzZXRQYWdlU2l6ZSIsInN0YXRlIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJ1c2VUYWJsZSIsImF1dG9SZXNldFBhZ2UiLCJhdXRvUmVzZXRTZWxlY3RlZFJvd3MiLCJkaXNhYmxlTXVsdGlTb3J0IiwidXNlRmlsdGVycyIsInVzZUdsb2JhbEZpbHRlciIsInVzZUdyb3VwQnkiLCJ1c2VTb3J0QnkiLCJ1c2VFeHBhbmRlZCIsInVzZVBhZ2luYXRpb24iLCJ1c2VSb3dTZWxlY3QiLCJob29rcyIsInZpc2libGVDb2x1bW5zIiwicHVzaCIsImdyb3VwQnlCb3VuZGFyeSIsIkhlYWRlciIsImdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzIiwiQ2VsbCIsImdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMiLCJOdW1iZXIiLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiZ2V0SGVhZGVyUHJvcHMiLCJjYW5Hcm91cEJ5IiwiZ2V0R3JvdXBCeVRvZ2dsZVByb3BzIiwiZ2V0U29ydEJ5VG9nZ2xlUHJvcHMiLCJyZW5kZXIiLCJpc1NvcnRlZCIsImlzU29ydGVkRGVzYyIsImNhbkZpbHRlciIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiaXNHcm91cGVkIiwiZ2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyIsImlzRXhwYW5kZWQiLCJlZGl0YWJsZSIsInN1YlJvd3MiLCJpc0FnZ3JlZ2F0ZWQiLCJpc1BsYWNlaG9sZGVyIiwiQXJyYXkiLCJmaWxsIiwiSW5kZXRlcm1pbmF0ZUNoZWNrYm94IiwiZm9yd2FyZFJlZiIsInJlZiIsImluZGV0ZXJtaW5hdGUiLCJyZXN0IiwiZGVmYXVsdFJlZiIsInVzZVJlZiIsInJlc29sdmVkUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsIkJhc2ljUmVhY3RUYWJsZSIsImJhc2ljVGFibGUiLCJhY2Nlc3NvciIsImFnZ3JlZ2F0ZSIsIkFnZ3JlZ2F0ZWQiLCJza2lwUmVzZXRSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUVwSDtBQUFGLEtBQUQsS0FBZ0IsR0FBRUEsS0FBTTtBQUh0QyxHQXpCSSxFQThCSjtBQUNFeUUsVUFBTSxFQUFFLE1BRFY7QUFFRXlDLFlBQVEsRUFBRSxNQUZaO0FBR0VFLGNBQVUsRUFBRSxDQUFDO0FBQUVwSDtBQUFGLEtBQUQsS0FBZ0IsR0FBRUEsS0FBTTtBQUh0QyxHQTlCSSxFQW1DSjtBQUNFeUUsVUFBTSxFQUFFLFFBRFY7QUFFRXlDLFlBQVEsRUFBRSxRQUZaO0FBR0VFLGNBQVUsRUFBRSxDQUFDO0FBQUVwSDtBQUFGLEtBQUQsS0FBZ0IsR0FBRUEsS0FBTTtBQUh0QyxHQW5DSSxDQURRLEVBMENkLEVBMUNjLENBQWhCLENBRHVDLENBOEN2QztBQUNBOztBQUNBLFFBQU1xSCxZQUFZLEdBQUc5Ryw0Q0FBSyxDQUFDcUcsTUFBTixDQUFhLEtBQWIsQ0FBckIsQ0FoRHVDLENBa0R2QztBQUNBO0FBQ0E7O0FBQ0FyRyw4Q0FBSyxDQUFDdUcsU0FBTixDQUFnQixNQUFNO0FBQ3BCTyxnQkFBWSxDQUFDTixPQUFiLEdBQXVCLEtBQXZCO0FBQ0QsR0FGRCxFQUVHLENBQUNFLFVBQUQsQ0FGSDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsMkJBQ0U7QUFBSyxRQUFFLEVBQUMsaUJBQVI7QUFBMEIsZUFBUyxFQUFDLG9CQUFwQztBQUFBLDZCQUNFLHFFQUFDLEtBQUQ7QUFBTyxlQUFPLEVBQUVwRixPQUFoQjtBQUF5QixZQUFJLEVBQUVvRjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVjRCw4RUFBZixFIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBIGdyZWF0IGxpYnJhcnkgZm9yIGZ1enp5IGZpbHRlcmluZy9zb3J0aW5nIGl0ZW1zXHJcbi8vIGltcG9ydCBtYXRjaFNvcnRlciBmcm9tIFwibWF0Y2gtc29ydGVyXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZUFzeW5jRGVib3VuY2UsXHJcbiAgdXNlRXhwYW5kZWQsXHJcbiAgdXNlRmlsdGVycyxcclxuICB1c2VHbG9iYWxGaWx0ZXIsXHJcbiAgdXNlR3JvdXBCeSxcclxuICB1c2VQYWdpbmF0aW9uLFxyXG4gIHVzZVJvd1NlbGVjdCxcclxuICB1c2VTb3J0QnksXHJcbiAgdXNlVGFibGUsXHJcbn0gZnJvbSBcInJlYWN0LXRhYmxlXCI7XHJcbmNvbnN0IG1hdGNoU29ydGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJtYXRjaC1zb3J0ZXJcIiksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbi8vIERlZmluZSBhIGRlZmF1bHQgVUkgZm9yIGZpbHRlcmluZ1xyXG5mdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyIH0sXHJcbn0pIHtcclxuICBjb25zdCBjb3VudCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGg7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgdmFsdWU9e2ZpbHRlclZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpOyAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2xvYmFsRmlsdGVyKHtcclxuICBwcmVHbG9iYWxGaWx0ZXJlZFJvd3MsXHJcbiAgZ2xvYmFsRmlsdGVyLFxyXG4gIHNldEdsb2JhbEZpbHRlcixcclxufSkge1xyXG4gIGNvbnN0IGNvdW50ID0gcHJlR2xvYmFsRmlsdGVyZWRSb3dzLmxlbmd0aDtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGdsb2JhbEZpbHRlcik7XHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VBc3luY0RlYm91bmNlKCh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0R2xvYmFsRmlsdGVyKHZhbHVlIHx8IHVuZGVmaW5lZCk7XHJcbiAgfSwgMjAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJleGFtcGxlX2ZpbHRlclwiIGNsYXNzTmFtZT1cImRhdGFUYWJsZXNfZmlsdGVyXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPlNlYXJjaDo8L3NwYW4+XHJcblxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gVGhpcyBpcyBhIGN1c3RvbSBmaWx0ZXIgVUkgZm9yIHNlbGVjdGluZ1xyXG4vLyBhIHVuaXF1ZSBvcHRpb24gZnJvbSBhIGxpc3RcclxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcclxuICBjb2x1bW46IHsgZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZCB9LFxyXG59KSB7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcclxuICAvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgIHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgb3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldO1xyXG4gIH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSk7XHJcblxyXG4gIC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcclxuICByZXR1cm4gKFxyXG4gICAgPHNlbGVjdFxyXG4gICAgICB2YWx1ZT17ZmlsdGVyVmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpO1xyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXHJcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxyXG4gICAgICAgICAge29wdGlvbn1cclxuICAgICAgICA8L29wdGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L3NlbGVjdD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdXp6eVRleHRGaWx0ZXJGbihyb3dzLCBpZCwgZmlsdGVyVmFsdWUpIHtcclxuICByZXR1cm4gbWF0Y2hTb3J0ZXIocm93cywgZmlsdGVyVmFsdWUsIHsga2V5czogWyhyb3cpID0+IHJvdy52YWx1ZXNbaWRdXSB9KTtcclxufVxyXG5cclxuLy8gTGV0IHRoZSB0YWJsZSByZW1vdmUgdGhlIGZpbHRlciBpZiB0aGUgc3RyaW5nIGlzIGVtcHR5XHJcbmZ1enp5VGV4dEZpbHRlckZuLmF1dG9SZW1vdmUgPSAodmFsKSA9PiAhdmFsO1xyXG5cclxuLy8gQmUgc3VyZSB0byBwYXNzIG91ciB1cGRhdGVNeURhdGEgYW5kIHRoZSBza2lwUmVzZXQgb3B0aW9uXHJcbmZ1bmN0aW9uIFRhYmxlKHsgY29sdW1ucywgZGF0YSwgc2tpcFJlc2V0IH0pIHtcclxuICBjb25zdCBmaWx0ZXJUeXBlcyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICAvLyBBZGQgYSBuZXcgZnV6enlUZXh0RmlsdGVyRm4gZmlsdGVyIHR5cGUuXHJcbiAgICAgIGZ1enp5VGV4dDogZnV6enlUZXh0RmlsdGVyRm4sXHJcbiAgICAgIC8vIE9yLCBvdmVycmlkZSB0aGUgZGVmYXVsdCB0ZXh0IGZpbHRlciB0byB1c2VcclxuICAgICAgLy8gXCJzdGFydFdpdGhcIlxyXG4gICAgICB0ZXh0OiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJvd3MuZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XHJcbiAgICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IFN0cmluZyhyb3dWYWx1ZSlcclxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnRzV2l0aChTdHJpbmcoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgIDogdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBkZWZhdWx0Q29sdW1uID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIC8vIExldCdzIHNldCB1cCBvdXIgZGVmYXVsdCBGaWx0ZXIgVUlcclxuICAgICAgRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxyXG4gICAgfSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcclxuICBjb25zdCB7XHJcbiAgICBnZXRUYWJsZVByb3BzLFxyXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICBoZWFkZXJHcm91cHMsXHJcbiAgICBwcmVwYXJlUm93LFxyXG4gICAgcGFnZSwgLy8gSW5zdGVhZCBvZiB1c2luZyAncm93cycsIHdlJ2xsIHVzZSBwYWdlLFxyXG4gICAgLy8gd2hpY2ggaGFzIG9ubHkgdGhlIHJvd3MgZm9yIHRoZSBhY3RpdmUgcGFnZVxyXG5cclxuICAgIC8vIFRoZSByZXN0IG9mIHRoZXNlIHRoaW5ncyBhcmUgc3VwZXIgaGFuZHksIHRvbyA7KVxyXG4gICAgY2FuUHJldmlvdXNQYWdlLFxyXG4gICAgY2FuTmV4dFBhZ2UsXHJcbiAgICBwYWdlT3B0aW9ucyxcclxuICAgIHBhZ2VDb3VudCxcclxuICAgIGdvdG9QYWdlLFxyXG4gICAgbmV4dFBhZ2UsXHJcbiAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICBzZXRQYWdlU2l6ZSxcclxuICAgIHByZUdsb2JhbEZpbHRlcmVkUm93cyxcclxuICAgIHNldEdsb2JhbEZpbHRlcixcclxuICAgIHN0YXRlOiB7IHBhZ2VJbmRleCwgcGFnZVNpemUsIGdsb2JhbEZpbHRlciB9LFxyXG4gIH0gPSB1c2VUYWJsZShcclxuICAgIHtcclxuICAgICAgY29sdW1ucyxcclxuICAgICAgZGF0YSxcclxuICAgICAgZGVmYXVsdENvbHVtbixcclxuICAgICAgZmlsdGVyVHlwZXMsXHJcbiAgICAgIGF1dG9SZXNldFBhZ2U6ICFza2lwUmVzZXQsXHJcbiAgICAgIGF1dG9SZXNldFNlbGVjdGVkUm93czogIXNraXBSZXNldCxcclxuICAgICAgZGlzYWJsZU11bHRpU29ydDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB1c2VGaWx0ZXJzLFxyXG4gICAgdXNlR2xvYmFsRmlsdGVyLFxyXG4gICAgdXNlR3JvdXBCeSxcclxuICAgIHVzZVNvcnRCeSxcclxuICAgIHVzZUV4cGFuZGVkLFxyXG4gICAgdXNlUGFnaW5hdGlvbixcclxuICAgIHVzZVJvd1NlbGVjdCxcclxuXHJcbiAgICAvLyBIZXJlIHdlIHdpbGwgdXNlIGEgcGx1Z2luIHRvIGFkZCBvdXIgc2VsZWN0aW9uIGNvbHVtblxyXG4gICAgKGhvb2tzKSA9PiB7XHJcbiAgICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2goKGNvbHVtbnMpID0+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCJzZWxlY3Rpb25cIixcclxuICAgICAgICAgICAgLy8gTWFrZSB0aGlzIGNvbHVtbiBhIGdyb3VwQnlCb3VuZGFyeS4gVGhpcyBlbnN1cmVzIHRoYXQgZ3JvdXBCeSBjb2x1bW5zXHJcbiAgICAgICAgICAgIC8vIGFyZSBwbGFjZWQgYWZ0ZXIgaXRcclxuICAgICAgICAgICAgZ3JvdXBCeUJvdW5kYXJ5OiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBUaGUgaGVhZGVyIGNhbiB1c2UgdGhlIHRhYmxlJ3MgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgbWV0aG9kXHJcbiAgICAgICAgICAgIC8vIHRvIHJlbmRlciBhIGNoZWNrYm94XHJcbiAgICAgICAgICAgIEhlYWRlcjogKHsgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXRlcm1pbmF0ZUNoZWNrYm94IHsuLi5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcygpfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAvLyBUaGUgY2VsbCBjYW4gdXNlIHRoZSBpbmRpdmlkdWFsIHJvdydzIGdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgbWV0aG9kXHJcbiAgICAgICAgICAgIC8vIHRvIHRoZSByZW5kZXIgYSBjaGVja2JveFxyXG4gICAgICAgICAgICBDZWxsOiAoeyByb3cgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5kZXRlcm1pbmF0ZUNoZWNrYm94IHsuLi5yb3cuZ2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcygpfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC4uLmNvbHVtbnMsXHJcbiAgICAgICAgXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFUYWJsZXNfbGVuZ3RoXCIgaWQ9XCJleGFtcGxlX2xlbmd0aFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMVwiPiBTaG93IDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBib290c3RyYXAtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFBhZ2VTaXplKE51bWJlcihlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBkcm9wZG93bi10b2dnbGUgYnRuLWxpZ2h0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7WzUsIDEwLCAxNSwgMjBdLm1hcCgocGFnZVNpemUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhZ2VTaXplfSBrZXk9e2l9IHZhbHVlPXtwYWdlU2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhZ2VTaXplfVxyXG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTFcIj5lbnRyaWVzPC9zcGFuPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEdsb2JhbEZpbHRlclxyXG4gICAgICAgICAgcHJlR2xvYmFsRmlsdGVyZWRSb3dzPXtwcmVHbG9iYWxGaWx0ZXJlZFJvd3N9XHJcbiAgICAgICAgICBnbG9iYWxGaWx0ZXI9e2dsb2JhbEZpbHRlcn1cclxuICAgICAgICAgIHNldEdsb2JhbEZpbHRlcj17c2V0R2xvYmFsRmlsdGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFibGVcclxuICAgICAgICB7Li4uZ2V0VGFibGVQcm9wcygpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRpc3BsYXkgZGF0YVRhYmxlIHctMTAwXCJcclxuICAgICAgICBpZD1cImV4YW1wbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8dGggey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uY2FuR3JvdXBCeSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2x1bW4gY2FuIGJlIGdyb3VwZWQsIGxldCdzIGFkZCBhIHRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmNvbHVtbi5nZXRHcm91cEJ5VG9nZ2xlUHJvcHMoKX0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtZmxleFwiIHsuLi5jb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLnJlbmRlcihcIkhlYWRlclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZGQgYSBzb3J0IGRpcmVjdGlvbiBpbmRpY2F0b3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmlzU29ydGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uaXNTb3J0ZWREZXNjID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zb3J0X2Rlc2MucG5nXCIgYWx0PVwiZGVzY1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3NvcnRfYXNjLnBuZ1wiIGFsdD1cImFzY1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zb3J0X2JvdGgucG5nXCIgYWx0PVwiYm90aFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgdGhlIGNvbHVtbnMgZmlsdGVyIFVJICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2Pntjb2x1bW4uY2FuRmlsdGVyID8gY29sdW1uLnJlbmRlcihcIkZpbHRlclwiKSA6IG51bGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxyXG4gICAgICAgICAge3BhZ2UubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgcHJlcGFyZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcCgoY2VsbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjZWxsLmlzR3JvdXBlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBhIGdyb3VwZWQgY2VsbCwgYWRkIGFuIGV4cGFuZGVyIGFuZCByb3cgY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB7Li4ucm93LmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmlzRXhwYW5kZWQgPyBcIvCfkYdcIiA6IFwi8J+RiVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NlbGwucmVuZGVyKFwiQ2VsbFwiLCB7IGVkaXRhYmxlOiBmYWxzZSB9KX0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc3ViUm93cy5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBjZWxsLmlzQWdncmVnYXRlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNlbGwgaXMgYWdncmVnYXRlZCwgdXNlIHRoZSBBZ2dyZWdhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlcmVyIGZvciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKFwiQWdncmVnYXRlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGNlbGwuaXNQbGFjZWhvbGRlciA/IG51bGwgOiAoIC8vIEZvciBjZWxscyB3aXRoIHJlcGVhdGVkIHZhbHVlcywgcmVuZGVyIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBqdXN0IHJlbmRlciB0aGUgcmVndWxhciBjZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucmVuZGVyKFwiQ2VsbFwiLCB7IGVkaXRhYmxlOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFUYWJsZXNfaW5mb1wiPlxyXG4gICAgICAgICAgUGFnZSB7cGFnZUluZGV4ICsgMX0gb2Yge3BhZ2VPcHRpb25zLmxlbmd0aH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhVGFibGVzX3BhZ2luYXRlIHBhZ2luZ19zaW1wbGVfbnVtYmVyc1wiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdpbmF0ZV9idXR0b24gcHJldmlvdXMgZGlzYWJsZWQgYy1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJldmlvdXNQYWdlKCl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge0FycmF5KHBhZ2VPcHRpb25zLmxlbmd0aClcclxuICAgICAgICAgICAgICAuZmlsbChcIl9cIilcclxuICAgICAgICAgICAgICAubWFwKChwYWdlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwYWdpbmF0ZV9idXR0b24gYy1wb2ludGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaSA9PT0gcGFnZUluZGV4ID8gXCJjdXJyZW50XCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShpKX1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7aSArIDF9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2luYXRlX2J1dHRvbiBuZXh0IGMtcG9pbnRlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5leHRQYWdlKCl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXshY2FuTmV4dFBhZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEluZGV0ZXJtaW5hdGVDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWYoXHJcbiAgKHsgaW5kZXRlcm1pbmF0ZSwgLi4ucmVzdCB9LCByZWYpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnN0IHJlc29sdmVkUmVmID0gcmVmIHx8IGRlZmF1bHRSZWY7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgcmVzb2x2ZWRSZWYuY3VycmVudC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcclxuICAgIH0sIFtyZXNvbHZlZFJlZiwgaW5kZXRlcm1pbmF0ZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgcmVmPXtyZXNvbHZlZFJlZn1cclxuICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGFibGVfY2hlY2tib3hcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbik7XHJcblxyXG5mdW5jdGlvbiBCYXNpY1JlYWN0VGFibGUoeyBiYXNpY1RhYmxlIH0pIHtcclxuICBjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IFtcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogXCJOYW1lXCIsXHJcbiAgICAgICAgYWNjZXNzb3I6IFwibmFtZVwiLFxyXG4gICAgICAgIC8vIFVzZSBhIHR3by1zdGFnZSBhZ2dyZWdhdG9yIGhlcmUgdG8gZmlyc3RcclxuICAgICAgICAvLyBjb3VudCB0aGUgdG90YWwgcm93cyBiZWluZyBhZ2dyZWdhdGVkLFxyXG4gICAgICAgIC8vIHRoZW4gc3VtIGFueSBvZiB0aG9zZSBjb3VudHMgaWYgdGhleSBhcmVcclxuICAgICAgICAvLyBhZ2dyZWdhdGVkIGZ1cnRoZXJcclxuICAgICAgICBhZ2dyZWdhdGU6IFwiY291bnRcIixcclxuICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiBcIlBvc2l0aW9uXCIsXHJcbiAgICAgICAgYWNjZXNzb3I6IFwicG9zaXRpb25cIixcclxuICAgICAgICBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcclxuICAgICAgICBmaWx0ZXI6IFwiZXF1YWxzXCIsXHJcbiAgICAgICAgQWdncmVnYXRlZDogKHsgdmFsdWUgfSkgPT4gYCR7dmFsdWV9YCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIEhlYWRlcjogXCJPZmZpY2VcIixcclxuICAgICAgICBhY2Nlc3NvcjogXCJvZmZpY2VcIixcclxuICAgICAgICAvLyBBZ2dyZWdhdGUgdGhlIGF2ZXJhZ2UgYWdlIG9mIHZpc2l0b3JzXHJcbiAgICAgICAgYWdncmVnYXRlOiBcImF2ZXJhZ2VcIixcclxuICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiBcIkFnZVwiLFxyXG4gICAgICAgIGFjY2Vzc29yOiBcImFnZVwiLFxyXG4gICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBIZWFkZXI6IFwiRGF0ZVwiLFxyXG4gICAgICAgIGFjY2Vzc29yOiBcImRhdGVcIixcclxuICAgICAgICBBZ2dyZWdhdGVkOiAoeyB2YWx1ZSB9KSA9PiBgJHt2YWx1ZX1gLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgSGVhZGVyOiBcIlNhbGFyeVwiLFxyXG4gICAgICAgIGFjY2Vzc29yOiBcInNhbGFyeVwiLFxyXG4gICAgICAgIEFnZ3JlZ2F0ZWQ6ICh7IHZhbHVlIH0pID0+IGAke3ZhbHVlfWAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICAvLyBXZSBuZWVkIHRvIGtlZXAgdGhlIHRhYmxlIGZyb20gcmVzZXR0aW5nIHRoZSBwYWdlSW5kZXggd2hlbiB3ZVxyXG4gIC8vIFVwZGF0ZSBkYXRhLiBTbyB3ZSBjYW4ga2VlcCB0cmFjayBvZiB0aGF0IGZsYWcgd2l0aCBhIHJlZi5cclxuICBjb25zdCBza2lwUmVzZXRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xyXG5cclxuICAvLyBBZnRlciBkYXRhIGNoYW5nZXMsIHdlIHR1cm4gdGhlIGZsYWcgYmFjayBvZmZcclxuICAvLyBzbyB0aGF0IGlmIGRhdGEgYWN0dWFsbHkgY2hhbmdlcyB3aGVuIHdlJ3JlIG5vdFxyXG4gIC8vIGVkaXRpbmcgaXQsIHRoZSBwYWdlIGlzIHJlc2V0XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNraXBSZXNldFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgfSwgW2Jhc2ljVGFibGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICA8ZGl2IGlkPVwiZXhhbXBsZV93cmFwcGVyXCIgY2xhc3NOYW1lPVwiZGF0YVRhYmxlc193cmFwcGVyXCI+XHJcbiAgICAgICAgPFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2Jhc2ljVGFibGV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzaWNSZWFjdFRhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9