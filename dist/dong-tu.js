"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var FormatVerb = function FormatVerb(_ref) {
  var text = _ref.text;
  var subClass = "text-rose-500 font-extrabold text-[0.7em] align-sub ml-[1px]";
  switch (text) {
    case 'Vo':
      return /*#__PURE__*/React.createElement(Fragment, null, "V", /*#__PURE__*/React.createElement("sub", {
        className: subClass
      }, "o"));
    case 'V2/ed':
      return /*#__PURE__*/React.createElement(Fragment, null, "V", /*#__PURE__*/React.createElement("sub", {
        className: subClass
      }, "2/ed"));
    case 'V3/ed':
      return /*#__PURE__*/React.createElement(Fragment, null, "V", /*#__PURE__*/React.createElement("sub", {
        className: subClass
      }, "3/ed"));
    case 'Ving':
      return /*#__PURE__*/React.createElement(Fragment, null, "V", /*#__PURE__*/React.createElement("sub", {
        className: subClass
      }, "ing"));
    case 'Vo - Vs/es':
      return /*#__PURE__*/React.createElement(Fragment, null, "V", /*#__PURE__*/React.createElement("sub", {
        className: subClass
      }, "o"), " - V", /*#__PURE__*/React.createElement("sub", {
        className: subClass
      }, "s/es"));
    default:
      return text;
  }
};
var InteractiveFormula = function InteractiveFormula(_ref2) {
  var parts = _ref2.parts,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? "blue" : _ref2$color,
    _ref2$noPopup = _ref2.noPopup,
    noPopup = _ref2$noPopup === void 0 ? false : _ref2$noPopup;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    activePart = _useState2[0],
    setActivePart = _useState2[1];
  var explanations = {
    "S": "Chủ ngữ (Subject): Người/Vật thực hiện hành động.",
    "Vo": "Động từ nguyên mẫu (không chia).",
    "Vo - Vs/es": "Động từ nguyên mẫu (không chia) hoặc thêm s/es (đi với chủ ngữ số ít).",
    "don't - doesn't": "Trợ động từ phủ định (do not / does not).",
    "don't - doesn't have to": "Không cần thiết phải làm gì đó.",
    "V2/ed": "Động từ quá khứ (V-ed hoặc Cột 2 bảng bất quy tắc).",
    "didn't": "Trợ động từ phủ định quá khứ (did not).",
    "will": "Sẽ (dùng cho mọi chủ ngữ).",
    "won't": "Sẽ không (will not).",
    "am - is - are": "Động từ tobe ở hiện tại.",
    "am not - isn't - aren't": "Phủ định của tobe hiện tại.",
    "Ving": "Động từ thêm đuôi -ing.",
    "have - has": "Trợ động từ hoàn thành.",
    "haven't - hasn't": "Trợ động từ hoàn thành (phủ định).",
    "V3/ed": "Phân từ 2 (V-ed hoặc Cột 3 bảng bất quy tắc).",
    "was - were": "Động từ tobe ở quá khứ.",
    "wasn't - weren't": "Phủ định của tobe quá khứ.",
    "Modal Verb": "Động từ khiếm khuyết (can, should, must...).",
    "adj": "Tính từ (Adjective) - Dùng để miêu tả tính chất, trạng thái.",
    "N - Noun Phr.": "Danh từ hoặc Cụm danh từ (Noun) - Chỉ người, vật, sự việc.",
    "tobe": "Động từ tobe (am/is/are/was/were... chia theo thì).",
    "...": "Phần còn lại của câu (Tân ngữ, trạng từ...)"
  };
  var colorClasses = {
    blue: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
    amber: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200",
    rose: "bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative w-full flex flex-col items-center justify-center ".concat(noPopup ? '' : 'mb-2')
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-start md:justify-center gap-1.5 sm:gap-3 flex-nowrap w-full ".concat(noPopup ? '' : 'overflow-x-auto hide-scrollbar pb-4 pt-1 px-2 sm:px-4')
  }, parts.map(function (part, index) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: index
    }, part === "+" ? /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 font-black text-base sm:text-2xl shrink-0"
    }, "+") : noPopup ? /*#__PURE__*/React.createElement("div", {
      className: "px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg border-2 shadow-sm shrink-0 whitespace-nowrap flex items-center justify-center tracking-wide leading-none ".concat(colorClasses[color].replace('hover:bg', 'no-hover'))
    }, /*#__PURE__*/React.createElement(FormatVerb, {
      text: part
    })) : /*#__PURE__*/React.createElement("div", {
      className: "relative flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setActivePart(activePart === part ? null : part);
      },
      className: "px-4 py-2.5 rounded-xl font-bold text-lg border-2 shadow-sm transition-all duration-200 shrink-0 whitespace-nowrap relative z-20 ".concat(colorClasses[color], " ").concat(activePart === part ? 'ring-4 ring-offset-2 ring-slate-300 scale-105 z-30' : '')
    }, /*#__PURE__*/React.createElement(FormatVerb, {
      text: part
    })), activePart === part && explanations[activePart] && /*#__PURE__*/React.createElement("div", {
      className: "absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[100] w-[220px] pointer-events-none"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 text-white p-3 sm:p-4 text-sm rounded-xl shadow-xl animate-pop flex flex-col items-center relative pointer-events-auto text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-slate-800"
    }), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-amber-400 mb-1 text-base"
    }, activePart), /*#__PURE__*/React.createElement("p", {
      className: "leading-relaxed text-slate-200 whitespace-normal"
    }, explanations[activePart])))));
  })));
};
var FormulaBox = function FormulaBox(_ref3) {
  var parts = _ref3.parts,
    _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? "blue" : _ref3$color,
    _ref3$align = _ref3.align,
    align = _ref3$align === void 0 ? "center" : _ref3$align;
  var borderColors = {
    blue: "border-blue-200",
    emerald: "border-emerald-200",
    amber: "border-amber-200",
    rose: "border-rose-200",
    purple: "border-purple-200"
  };
  var alignClass = align === "left" ? "justify-start" : "justify-center";
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full overflow-x-auto hide-scrollbar flex ".concat(alignClass, " py-1")
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white px-3 py-3 sm:px-6 sm:py-5 rounded-2xl shadow-sm border ".concat(borderColors[color], " flex items-center justify-center min-w-max")
  }, /*#__PURE__*/React.createElement(InteractiveFormula, {
    parts: parts,
    color: color,
    noPopup: true
  })));
};
var TenseTimeline = function TenseTimeline(_ref4) {
  var type = _ref4.type,
    color = _ref4.color;
  var hexColors = {
    blue: "#2563eb",
    emerald: "#059669",
    amber: "#d97706",
    rose: "#e11d48",
    purple: "#7c3aed"
  };
  var c = hexColors[color] || "#64748b";
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-6 bg-slate-50/50 p-4 rounded-xl border border-slate-200 shadow-inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 text-center"
  }, "Tr\u1EE5c th\u1EDDi gian"), /*#__PURE__*/React.createElement("div", {
    className: "w-full overflow-x-auto hide-scrollbar flex justify-center"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 120",
    className: "w-[400px] h-[120px] max-w-full"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "arrowhead",
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0 0, 10 3.5, 0 7",
    fill: "#cbd5e1"
  })), /*#__PURE__*/React.createElement("marker", {
    id: "arrow-".concat(color),
    markerWidth: "10",
    markerHeight: "7",
    refX: "9",
    refY: "3.5",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0 0, 10 3.5, 0 7",
    fill: c
  }))), /*#__PURE__*/React.createElement("line", {
    x1: "30",
    y1: "80",
    x2: "370",
    y2: "80",
    stroke: "#cbd5e1",
    strokeWidth: "2.5",
    markerEnd: "url(#arrowhead)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "73",
    x2: "100",
    y2: "87",
    stroke: "#94a3b8",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "105",
    textAnchor: "middle",
    className: "text-[12px] fill-slate-500 font-medium"
  }, "Qu\xE1 kh\u1EE9"), /*#__PURE__*/React.createElement("line", {
    x1: "200",
    y1: "70",
    x2: "200",
    y2: "90",
    stroke: "#64748b",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "200",
    y: "108",
    textAnchor: "middle",
    className: "text-[13px] fill-slate-700 font-bold"
  }, "Hi\u1EC7n t\u1EA1i"), /*#__PURE__*/React.createElement("line", {
    x1: "300",
    y1: "73",
    x2: "300",
    y2: "87",
    stroke: "#94a3b8",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "105",
    textAnchor: "middle",
    className: "text-[12px] fill-slate-500 font-medium"
  }, "T\u01B0\u01A1ng lai"), type === 'present' && /*#__PURE__*/React.createElement("g", {
    fill: c,
    stroke: c
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "80",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "160",
    cy: "80",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "80",
    r: "5.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "240",
    cy: "80",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "280",
    cy: "80",
    r: "4.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "200",
    y: "45",
    textAnchor: "middle",
    className: "text-[12px] font-bold",
    stroke: "none"
  }, "L\u1EB7p \u0111i l\u1EB7p l\u1EA1i / S\u1EF1 th\u1EADt"), /*#__PURE__*/React.createElement("path", {
    d: "M 100 60 Q 200 35 300 60",
    fill: "none",
    strokeWidth: "1.5",
    strokeDasharray: "4 3"
  })), type === 'past' && /*#__PURE__*/React.createElement("g", {
    fill: c,
    stroke: c
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "80",
    r: "6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "45",
    textAnchor: "middle",
    className: "text-[12px] font-bold",
    stroke: "none"
  }, "\u0110\xE3 k\u1EBFt th\xFAc"), /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "50",
    x2: "100",
    y2: "70",
    strokeWidth: "2.5",
    markerEnd: "url(#arrow-".concat(color, ")")
  })), type === 'future' && /*#__PURE__*/React.createElement("g", {
    fill: c,
    stroke: c
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "80",
    r: "6"
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "45",
    textAnchor: "middle",
    className: "text-[12px] font-bold",
    stroke: "none"
  }, "S\u1EBD x\u1EA3y ra"), /*#__PURE__*/React.createElement("line", {
    x1: "300",
    y1: "50",
    x2: "300",
    y2: "70",
    strokeWidth: "2.5",
    markerEnd: "url(#arrow-".concat(color, ")")
  })), type === 'present-cont' && /*#__PURE__*/React.createElement("g", {
    fill: c,
    stroke: c
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "80",
    r: "16",
    opacity: "0.2",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "80",
    r: "10",
    opacity: "0.4",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "80",
    r: "5",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("text", {
    x: "200",
    y: "45",
    textAnchor: "middle",
    className: "text-[12px] font-bold",
    stroke: "none"
  }, "\u0110ang di\u1EC5n ra l\xFAc n\xF3i"), /*#__PURE__*/React.createElement("path", {
    d: "M 160 80 Q 180 50 200 80 T 240 80",
    fill: "none",
    strokeWidth: "2.5"
  })), type === 'present-perf' && /*#__PURE__*/React.createElement("g", {
    fill: c,
    stroke: c
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "80",
    r: "5",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 100 75 Q 150 30 195 75",
    fill: "none",
    strokeWidth: "2.5",
    markerEnd: "url(#arrow-".concat(color, ")")
  }), /*#__PURE__*/React.createElement("text", {
    x: "150",
    y: "35",
    textAnchor: "middle",
    className: "text-[12px] font-bold",
    stroke: "none"
  }, "K\xE9o d\xE0i / H\u1EADu qu\u1EA3 \u0111\u1EBFn hi\u1EC7n t\u1EA1i"), /*#__PURE__*/React.createElement("rect", {
    x: "198",
    y: "70",
    width: "4",
    height: "20",
    rx: "1",
    stroke: "none"
  })))));
};
var TenseBlock = function TenseBlock(_ref5) {
  var title = _ref5.title,
    forms = _ref5.forms,
    usages = _ref5.usages,
    _ref5$color = _ref5.color,
    color = _ref5$color === void 0 ? "blue" : _ref5$color,
    tenseType = _ref5.tenseType;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var _useState5 = useState('khangding'),
    _useState6 = _slicedToArray(_useState5, 2),
    activeFormType = _useState6[0],
    setActiveFormType = _useState6[1];
  var theme = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      toggleBtnOn: "bg-blue-600 text-white border-blue-600 shadow-md",
      toggleBtnOff: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      toggleBtnOn: "bg-emerald-600 text-white border-emerald-600 shadow-md",
      toggleBtnOff: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
    }
  }[color];
  var activeForm = forms.find(function (f) {
    return f.type === activeFormType;
  }) || forms[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-4 bg-white border ".concat(theme.border, " rounded-2xl shadow-sm transition-all duration-300 ").concat(isOpen ? 'ring-2 ring-' + color + '-400 relative z-40' : 'hover:border-slate-300 relative z-10')
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "w-full px-5 py-4 flex items-center justify-between transition-colors ".concat(isOpen ? theme.bg + ' rounded-t-2xl' : 'bg-white rounded-2xl')
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-lg font-bold ".concat(isOpen ? theme.text : 'text-slate-800')
  }, title), isOpen ? /*#__PURE__*/React.createElement(ChevronUp, {
    className: theme.text
  }) : /*#__PURE__*/React.createElement(ChevronDown, {
    className: "text-slate-400"
  })), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "p-5 border-t border-slate-100 animate-slide-down rounded-b-2xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 ".concat(tenseType ? 'lg:grid-cols-2 gap-6 items-start' : '', " mb-6")
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50/80 p-5 rounded-2xl border border-slate-200 h-full flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-slate-500 uppercase tracking-widest"
  }, "C\xF4ng th\u1EE9c chia \u0111\u1ED9ng t\u1EEB"), /*#__PURE__*/React.createElement("div", {
    className: "flex bg-slate-200/50 p-1 rounded-xl w-fit border border-slate-200 relative z-10"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveFormType('khangding');
    },
    className: "px-4 py-1.5 rounded-lg text-sm font-bold transition-all border ".concat(activeFormType === 'khangding' ? theme.toggleBtnOn : theme.toggleBtnOff)
  }, "\uD83D\uDC4D C\xF3 nha"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveFormType('phuding');
    },
    className: "px-4 py-1.5 rounded-lg text-sm font-bold transition-all border ml-1 ".concat(activeFormType === 'phuding' ? theme.toggleBtnOn : theme.toggleBtnOff)
  }, "\uD83D\uDC4E Kh\xF4ng nha"))), /*#__PURE__*/React.createElement("div", {
    className: "min-h-[60px] flex items-center justify-center w-full"
  }, /*#__PURE__*/React.createElement(FormulaBox, {
    parts: activeForm.parts,
    color: color,
    align: "center"
  }))), tenseType && /*#__PURE__*/React.createElement("div", {
    className: "[&>div]:mb-0"
  }, /*#__PURE__*/React.createElement(TenseTimeline, {
    type: tenseType,
    color: color
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-slate-500 uppercase tracking-widest mb-5"
  }, "C\xE1ch d\xF9ng & V\xED d\u1EE5 (B\u1EA5m c\xE2u ti\u1EBFng Anh)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 ".concat(usages.length > 1 ? 'lg:grid-cols-2' : '', " gap-5")
  }, usages.map(function (u, i) {
    var examples = activeFormType === 'khangding' ? u.pos : u.neg;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "pl-4 border-l-4 border-slate-200"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold mb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-block bg-yellow-200/80 text-yellow-900 px-4 py-2 rounded-lg shadow-sm border border-yellow-300/50 leading-relaxed font-bold"
    }, u.desc)), /*#__PURE__*/React.createElement("div", {
      className: "bg-white border border-slate-200 rounded-xl p-3 shadow-sm"
    }, examples.map(function (ex, j) {
      return /*#__PURE__*/React.createElement(ClickableSentence, {
        key: j,
        en: ex.en,
        vn: ex.vn
      });
    })));
  })))));
};
var normalizeTranslation = function normalizeTranslation(text) {
  return String(text || "").replace(/[‘’]/g, "'").replace(/\bI'm\b/gi, "i am").replace(/\bI'll\b/gi, "i will").replace(/\bI've\b/gi, "i have").replace(/\bwe've\b/gi, "we have").replace(/\bthey've\b/gi, "they have").replace(/\bwe're\b/gi, "we are").replace(/\bshe's\b/gi, "she has").replace(/\bhe's\b/gi, "he has").replace(/\bdon't\b/gi, "do not").replace(/\bdoesn't\b/gi, "does not").replace(/\bdidn't\b/gi, "did not").replace(/\bwon't\b/gi, "will not").replace(/\bhaven't\b/gi, "have not").replace(/\bhasn't\b/gi, "has not").replace(/\baren't\b/gi, "are not").replace(/\bisn't\b/gi, "is not").replace(/\bp\.m\.\b/gi, "pm").replace(/\ba\.m\.\b/gi, "am").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
};
var VerbTranslationExercise = function VerbTranslationExercise(_ref6) {
  var num = _ref6.num,
    title = _ref6.title,
    desc = _ref6.desc,
    items = _ref6.items;
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    resetKey = _useState8[0],
    setResetKey = _useState8[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white bg-slate-800 shadow-sm shrink-0"
  }, num), /*#__PURE__*/React.createElement("h4", {
    className: "text-base sm:text-lg font-bold text-slate-900"
  }, title)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-500 sm:ml-11"
  }, desc)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setResetKey(function (k) {
        return k + 1;
      });
    },
    className: "self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors shrink-0"
  }, /*#__PURE__*/React.createElement(Repeat, {
    size: 14
  }), "L\xE0m l\u1EA1i t\u1EA5t c\u1EA3")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, items.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(VerbTranslationCard, {
      key: "".concat(idx, "-").concat(resetKey),
      item: item,
      index: idx
    });
  })));
};
var VerbTranslationCard = function VerbTranslationCard(_ref7) {
  var item = _ref7.item,
    index = _ref7.index;
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedSubj = _useState0[0],
    setSelectedSubj = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedVerb = _useState10[0],
    setSelectedVerb = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedTense = _useState12[0],
    setSelectedTense = _useState12[1];
  var _useState13 = useState(""),
    _useState14 = _slicedToArray(_useState13, 2),
    sentence = _useState14[0],
    setSentence = _useState14[1];
  var _useState15 = useState("idle"),
    _useState16 = _slicedToArray(_useState15, 2),
    checkStatus = _useState16[0],
    setCheckStatus = _useState16[1]; // idle | correct | wrong | revealed

  var isSubjCorrect = selectedSubj === item.subject;
  var isVerbCorrect = selectedVerb === item.verb;
  var isTenseCorrect = selectedTense === item.tense;
  var isAnalysisComplete = isSubjCorrect && isVerbCorrect && isTenseCorrect;
  var handleCheckSentence = function handleCheckSentence() {
    if (!sentence.trim()) return;
    var userNorm = normalizeTranslation(sentence);
    var allAccepted = [item.en].concat(_toConsumableArray(item.accepted || []));
    var matched = allAccepted.some(function (ans) {
      return normalizeTranslation(ans) === userNorm;
    });
    setCheckStatus(matched ? "correct" : "wrong");
  };
  var handleReveal = function handleReveal() {
    setSelectedSubj(item.subject);
    setSelectedVerb(item.verb);
    setSelectedTense(item.tense);
    setSentence(item.en);
    setCheckStatus("revealed");
  };
  var handleResetOne = function handleResetOne() {
    setSelectedSubj(null);
    setSelectedVerb(null);
    setSelectedTense(null);
    setSentence("");
    setCheckStatus("idle");
  };
  var renderOptionBtn = function renderOptionBtn(opt, selectedVal, correctVal, onSelect) {
    var isSelected = selectedVal === opt;
    var isRight = opt === correctVal;
    var cls = "px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-all ";
    if (!isSelected) {
      cls += "bg-white text-slate-700 border-slate-200 hover:border-slate-400";
    } else if (isRight) {
      cls += "bg-slate-800 text-white border-slate-800 font-semibold shadow-sm";
    } else {
      cls += "bg-rose-50 text-rose-700 border-rose-300 font-semibold";
    }
    return /*#__PURE__*/React.createElement("button", {
      key: opt,
      type: "button",
      onClick: function onClick() {
        return onSelect(opt);
      },
      className: cls
    }, opt, isSelected && !isRight && /*#__PURE__*/React.createElement("span", {
      className: "ml-1 text-rose-500"
    }, "\u2715"), isSelected && isRight && /*#__PURE__*/React.createElement("span", {
      className: "ml-1 text-emerald-400"
    }, "\u2713"));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl border p-4 sm:p-5 transition-colors ".concat(checkStatus === "correct" ? "border-emerald-300 bg-emerald-50/20" : "border-slate-200 bg-slate-50/40")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-6 h-6 rounded-md bg-slate-200/80 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5"
  }, index + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-slate-900 text-sm sm:text-base leading-snug"
  }, item.vn), item.vocab && /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-slate-600"
  }, "T\u1EEB v\u1EF1ng:"), " ", item.vocab))), (selectedSubj || selectedVerb || selectedTense || sentence) && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleResetOne,
    className: "text-xs font-semibold text-slate-400 hover:text-slate-600 shrink-0"
  }, "L\xE0m l\u1EA1i")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 bg-white p-3.5 rounded-xl border border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-500 uppercase tracking-wider"
  }, "1. Ch\u1EE7 ng\u1EEF (S)"), isSubjCorrect && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-emerald-600"
  }, "\u0110\xFAng")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, item.subjectOptions.map(function (opt) {
    return renderOptionBtn(opt, selectedSubj, item.subject, setSelectedSubj);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:border-l md:border-slate-100 md:pl-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-500 uppercase tracking-wider"
  }, "2. \u0110\u1ED9ng t\u1EEB (V)"), isVerbCorrect && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-emerald-600"
  }, "\u0110\xFAng")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, item.verbOptions.map(function (opt) {
    return renderOptionBtn(opt, selectedVerb, item.verb, setSelectedVerb);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:border-l md:border-slate-100 md:pl-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-500 uppercase tracking-wider"
  }, "3. Th\xEC c\u1EA7n chia"), isTenseCorrect && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-semibold text-emerald-600"
  }, "\u0110\xFAng")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, item.tenseOptions.map(function (opt) {
    return renderOptionBtn(opt, selectedTense, item.tense, setSelectedTense);
  })))), isAnalysisComplete && /*#__PURE__*/React.createElement("div", {
    className: "mb-3 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-wrap items-center gap-x-2 gap-y-1 animate-pop"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-slate-900"
  }, "Khung chia \u0111\u1ED9ng t\u1EEB:"), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-slate-200"
  }, item.conjugatedHint), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "\u2014 ", item.tenseReason)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5"
  }, "4. D\u1ECBch sang c\xE2u ti\u1EBFng Anh ho\xE0n ch\u1EC9nh"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: sentence,
    onChange: function onChange(e) {
      setSentence(e.target.value);
      if (checkStatus === "wrong") setCheckStatus("idle");
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") handleCheckSentence();
    },
    disabled: checkStatus === "correct",
    placeholder: "Nh\u1EADp c\xE2u ti\u1EBFng Anh c\u1EE7a b\u1EA1n v\xE0o \u0111\xE2y...",
    className: "flex-1 rounded-xl border px-3.5 py-2.5 text-sm sm:text-base outline-none transition-all ".concat(checkStatus === "correct" ? "border-emerald-400 bg-emerald-50/40 text-emerald-900 font-semibold" : checkStatus === "wrong" ? "border-rose-300 bg-white text-slate-800" : "border-slate-200 bg-white text-slate-800 focus:border-slate-400")
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleCheckSentence,
    disabled: checkStatus === "correct" || !sentence.trim(),
    className: "px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
  }, checkStatus === "correct" ? "Chính xác ✓" : "Kiểm tra"), checkStatus !== "correct" && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleReveal,
    className: "px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
  }, "Xem \u0111\xE1p \xE1n"))), checkStatus === "wrong" && /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5 text-xs sm:text-sm text-rose-700 bg-rose-50/80 border border-rose-200 rounded-lg px-3.5 py-2.5"
  }, "C\xE2u d\u1ECBch ch\u01B0a ch\xEDnh x\xE1c. H\xE3y ki\u1EC3m tra l\u1EA1i c\xE1ch chia \u0111\u1ED9ng t\u1EEB ", /*#__PURE__*/React.createElement("strong", null, item.conjugatedHint), " ho\u1EB7c ch\xEDnh t\u1EA3 c\xE1c t\u1EEB trong c\xE2u nh\xE9."), (checkStatus === "correct" || checkStatus === "revealed") && /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-slate-900 mb-0.5"
  }, "\u0110\xE1p \xE1n chu\u1EA9n: ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-700"
  }, item.en)), /*#__PURE__*/React.createElement("div", {
    className: "text-slate-500"
  }, item.exp))));
};
var MiniQuiz = function MiniQuiz(_ref8) {
  var title = _ref8.title,
    num = _ref8.num,
    desc = _ref8.desc,
    questions = _ref8.questions,
    _ref8$color = _ref8.color,
    color = _ref8$color === void 0 ? "blue" : _ref8$color;
  var _useState17 = useState({}),
    _useState18 = _slicedToArray(_useState17, 2),
    ans = _useState18[0],
    setAns = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showRes = _useState20[0],
    setShowRes = _useState20[1];
  var theme = {
    blue: {
      bgNum: "bg-blue-600",
      text: "text-blue-800",
      border: "border-blue-200",
      btnOn: "bg-blue-600 text-white border-blue-600",
      btnOff: "bg-white text-slate-600 border-slate-200 hover:border-blue-400"
    },
    emerald: {
      bgNum: "bg-emerald-600",
      text: "text-emerald-800",
      border: "border-emerald-200",
      btnOn: "bg-emerald-600 text-white border-emerald-600",
      btnOff: "bg-white text-slate-600 border-slate-200 hover:border-emerald-400"
    },
    rose: {
      bgNum: "bg-rose-600",
      text: "text-rose-800",
      border: "border-rose-200",
      btnOn: "bg-rose-600 text-white border-rose-600",
      btnOff: "bg-white text-slate-600 border-slate-200 hover:border-rose-400"
    },
    amber: {
      bgNum: "bg-amber-500",
      text: "text-amber-800",
      border: "border-amber-200",
      btnOn: "bg-amber-500 text-slate-900 border-amber-500",
      btnOff: "bg-white text-slate-600 border-slate-200 hover:border-amber-400"
    },
    purple: {
      bgNum: "bg-purple-600",
      text: "text-purple-800",
      border: "border-purple-200",
      btnOn: "bg-purple-600 text-white border-purple-600",
      btnOff: "bg-white text-slate-600 border-slate-200 hover:border-purple-400"
    }
  }[color];
  var handleCheck = function handleCheck() {
    return setShowRes(true);
  };
  var handleRetry = function handleRetry() {
    setAns({});
    setShowRes(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-6 bg-white p-5 sm:p-6 rounded-2xl border ".concat(theme.border, " shadow-sm relative z-10")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-sm shrink-0 ".concat(theme.bgNum)
  }, num), /*#__PURE__*/React.createElement("h4", {
    className: "text-base sm:text-lg font-bold ".concat(theme.text)
  }, title)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-500 mb-5 ml-0 sm:ml-11"
  }, desc), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4 ml-0 sm:ml-11"
  }, questions.map(function (q, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "p-4 bg-slate-50/80 rounded-xl border border-slate-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3 gap-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-medium text-slate-800 leading-relaxed",
      dangerouslySetInnerHTML: {
        __html: "<span class=\"text-slate-400 mr-1 text-sm\">".concat(i + 1, ".</span> ") + q.text
      }
    }), i >= 5 && /*#__PURE__*/React.createElement("span", {
      className: "bg-rose-100 text-rose-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-rose-200 shrink-0 uppercase tracking-wider shadow-sm"
    }, "B2 VSTEP")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2"
    }, q.options.map(function (opt, j) {
      var isSelected = ans[i] === opt;
      var isCorrect = opt === q.correct;
      var isWrong = isSelected && !isCorrect;
      var btnClass = "px-4 py-2 rounded-lg text-sm font-bold border transition-all duration-200 ";
      if (!showRes) {
        btnClass += isSelected ? theme.btnOn + " shadow-md scale-105" : theme.btnOff;
      } else {
        if (isCorrect) btnClass += "bg-emerald-100 text-emerald-700 border-emerald-500 shadow-sm";else if (isWrong) btnClass += "bg-rose-100 text-rose-700 border-rose-500 opacity-80";else btnClass += "bg-slate-100 text-slate-400 border-slate-200 opacity-50 cursor-not-allowed";
      }
      return /*#__PURE__*/React.createElement("button", {
        key: j,
        disabled: showRes,
        onClick: function onClick() {
          return setAns(_objectSpread(_objectSpread({}, ans), {}, _defineProperty({}, i, opt)));
        },
        className: btnClass
      }, opt);
    }), showRes && /*#__PURE__*/React.createElement("div", {
      className: "ml-auto flex items-center"
    }, ans[i] === q.correct ? /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600 font-bold flex items-center gap-1 text-sm bg-emerald-50 px-2 py-1 rounded shadow-sm"
    }, /*#__PURE__*/React.createElement(CheckCircle2, {
      size: 18
    }), " \u0110\xFAng") : /*#__PURE__*/React.createElement("span", {
      className: "text-rose-600 font-bold flex items-center gap-1 text-sm bg-rose-50 px-2 py-1 rounded shadow-sm"
    }, /*#__PURE__*/React.createElement(XCircle, {
      size: 18
    }), " Sai"))), showRes && q.exp && /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-sm text-slate-600 bg-white p-3.5 rounded-lg border border-slate-100 border-l-4 border-l-blue-400 shadow-sm animate-slide-down"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-blue-700 mb-1 inline-block"
    }, "Gi\u1EA3i th\xEDch:"), " ", /*#__PURE__*/React.createElement("br", null), q.exp));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex gap-3 pt-5 border-t border-slate-100 ml-0 sm:ml-11"
  }, !showRes ? /*#__PURE__*/React.createElement("button", {
    onClick: handleCheck,
    disabled: Object.keys(ans).length < questions.length,
    className: "px-6 py-2.5 rounded-xl text-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm ".concat(theme.btnOn)
  }, "Ki\u1EC3m tra \u0111\xE1p \xE1n") : /*#__PURE__*/React.createElement("button", {
    onClick: handleRetry,
    className: "px-6 py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 transition-colors"
  }, "L\xE0m l\u1EA1i")));
};

// ==========================================
// KHỐI NỘI DUNG CHÍNH - MÔ ĐUN ĐỘNG TỪ
// (Bạn có thể nhúng trực tiếp Component <VerbModule /> này vào trang web của bạn)
// ==========================================

var VerbModule = function VerbModule() {
  return /*#__PURE__*/React.createElement("div", {
    className: "animate-pop w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 sm:mb-12 border-l-4 border-blue-600 pl-4 sm:pl-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
  }, "\u0110\u1ED9ng T\u1EEB (Verbs)"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-slate-500 mt-2 font-medium"
  }, "Tr\xE1i tim c\u1EE7a m\u1ECDi c\xE2u ti\u1EBFng Anh. Ph\xE2n bi\u1EC7t r\xF5 \u0110\u1ED9ng t\u1EEB th\u01B0\u1EDDng, tobe v\xE0 Modal Verbs.")), /*#__PURE__*/React.createElement(SectionIntro, null), /*#__PURE__*/React.createElement(SectionRegularVerbs, null), /*#__PURE__*/React.createElement(SectionToBeVerbs, null), /*#__PURE__*/React.createElement(SectionComparison, null), /*#__PURE__*/React.createElement(SectionModalVerbs, null), /*#__PURE__*/React.createElement(SectionPassiveVoice, null));
};

// --- CÁC PHÂN ĐOẠN CỦA MÔ ĐUN ---

function SectionIntro() {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50 border border-blue-200 p-5 rounded-2xl shadow-sm"
  }, /*#__PURE__*/React.createElement(Activity, {
    className: "text-blue-600 mb-3 w-8 h-8"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-blue-900 text-lg mb-1"
  }, "1. \u0110\u1ED9ng t\u1EEB th\u01B0\u1EDDng"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-blue-700/80"
  }, "Di\u1EC5n t\u1EA3 h\xE0nh \u0111\u1ED9ng (ch\u1EA1y, nh\u1EA3y, \u0103n, ng\u1EE7...).")), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50 border border-emerald-200 p-5 rounded-2xl shadow-sm"
  }, /*#__PURE__*/React.createElement(Layers, {
    className: "text-emerald-600 mb-3 w-8 h-8"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-emerald-900 text-lg mb-1"
  }, "2. \u0110\u1ED9ng t\u1EEB tobe"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-emerald-700/80"
  }, "Di\u1EC5n t\u1EA3 tr\u1EA1ng th\xE1i (th\xEC, l\xE0, \u1EDF).")), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 border border-amber-200 p-5 rounded-2xl shadow-sm"
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "text-amber-600 mb-3 w-8 h-8"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-amber-900 text-lg mb-1"
  }, "3. Khi\u1EBFm khuy\u1EBFt"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-amber-700/80"
  }, "Th\u1EC3 hi\u1EC7n kh\u1EA3 n\u0103ng, l\u1EDDi khuy\xEAn (can, should...).")));
}
function SectionRegularVerbs() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-lg shrink-0 shadow-md"
  }, "1"), "\u0110\u1ED9ng T\u1EEB Th\u01B0\u1EDDng"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-3 text-lg"
  }, "C\xE1ch chia \u0111\u1ED9ng t\u1EEB th\u01B0\u1EDDng theo 5 th\xEC quan tr\u1ECDng nh\u1EA5t.")), /*#__PURE__*/React.createElement(TenseBlock, {
    color: "blue",
    title: "Th\xEC Hi\u1EC7n t\u1EA1i \u0111\u01A1n (Present Simple)",
    tenseType: "present",
    forms: [{
      type: 'khangding',
      parts: ["S", "+", "Vo - Vs/es"]
    }, {
      type: 'phuding',
      parts: ["S", "+", "don't - doesn't", "+", "Vo"]
    }],
    usages: [{
      desc: "Nói về một hành động lặp đi lặp lại nhiều lần (Thói quen)",
      pos: [{
        en: "I usually <strong class='text-blue-600'>work</strong> overtime on Fridays.",
        vn: "Tôi thường xuyên làm thêm giờ vào các ngày thứ Sáu."
      }, {
        en: "We <strong class='text-blue-600'>take</strong> the bus to work every morning.",
        vn: "Chúng tôi bắt xe buýt đi làm mỗi sáng."
      }],
      neg: [{
        en: "I <strong class='text-blue-600'>don't like</strong> crowded places.",
        vn: "Tôi không thích những nơi đông người."
      }, {
        en: "She <strong class='text-blue-600'>doesn't have</strong> much free time.",
        vn: "Cô ấy không có nhiều thời gian rảnh."
      }]
    }, {
      desc: "Nói về một sự thật hiển nhiên (thông tin cá nhân, sự việc luôn đúng)",
      pos: [{
        en: "I <strong class='text-blue-600'>come</strong> from Ca Mau province.",
        vn: "Tôi đến từ tỉnh Cà Mau."
      }, {
        en: "My brother <strong class='text-blue-600'>works</strong> in a bank.",
        vn: "Anh trai tôi làm việc ở ngân hàng."
      }],
      neg: [{
        en: "I <strong class='text-blue-600'>don't drink</strong> coffee in the evening.",
        vn: "Tôi không uống cà phê vào buổi tối."
      }, {
        en: "My family <strong class='text-blue-600'>doesn't watch</strong> TV during dinner.",
        vn: "Gia đình tôi không xem TV trong lúc ăn tối."
      }]
    }]
  }), /*#__PURE__*/React.createElement(TenseBlock, {
    color: "blue",
    title: "Th\xEC Qu\xE1 kh\u1EE9 \u0111\u01A1n (Past Simple)",
    tenseType: "past",
    forms: [{
      type: 'khangding',
      parts: ["S", "+", "V2/ed"]
    }, {
      type: 'phuding',
      parts: ["S", "+", "didn't", "+", "Vo"]
    }],
    usages: [{
      desc: "Kể lại một sự kiện đã xảy ra và đã kết thúc trong quá khứ",
      pos: [{
        en: "I <strong class='text-blue-600'>graduated</strong> from university in 2020.",
        vn: "Tôi đã tốt nghiệp đại học vào năm 2020."
      }, {
        en: "We <strong class='text-blue-600'>signed</strong> the contract yesterday.",
        vn: "Chúng tôi đã ký hợp đồng vào ngày hôm qua."
      }],
      neg: [{
        en: "I <strong class='text-blue-600'>didn't attend</strong> the meeting this morning.",
        vn: "Sáng nay tôi đã không tham dự cuộc họp."
      }, {
        en: "She <strong class='text-blue-600'>didn't pass</strong> the driving test.",
        vn: "Cô ấy đã không vượt qua bài thi bằng lái xe."
      }]
    }]
  }), /*#__PURE__*/React.createElement(TenseBlock, {
    color: "blue",
    title: "Th\xEC T\u01B0\u01A1ng lai \u0111\u01A1n (Future Simple)",
    tenseType: "future",
    forms: [{
      type: 'khangding',
      parts: ["S", "+", "will", "+", "Vo"]
    }, {
      type: 'phuding',
      parts: ["S", "+", "won't", "+", "Vo"]
    }],
    usages: [{
      desc: "Nói về một kế hoạch, dự đoán trong tương lai (không chắc chắn)",
      pos: [{
        en: "I think AI <strong class='text-blue-600'>will replace</strong> many jobs.",
        vn: "Tôi nghĩ trí tuệ nhân tạo sẽ thay thế nhiều công việc."
      }, {
        en: "The population <strong class='text-blue-600'>will increase</strong> next year.",
        vn: "Dân số sẽ tăng vào năm tới."
      }],
      neg: [{
        en: "They <strong class='text-blue-600'>won't finish</strong> the project on time.",
        vn: "Họ sẽ không hoàn thành dự án đúng hạn."
      }, {
        en: "House prices <strong class='text-blue-600'>won't drop</strong> soon.",
        vn: "Giá nhà sẽ không giảm sớm đâu."
      }]
    }, {
      desc: "Nói về một quyết định ngay tại thời điểm nói",
      pos: [{
        en: "I <strong class='text-blue-600'>will transfer</strong> the money to your account.",
        vn: "Tôi sẽ chuyển tiền vào tài khoản của bạn."
      }, {
        en: "It's too loud, I <strong class='text-blue-600'>will close</strong> the door.",
        vn: "Ồn quá, tôi sẽ đóng cửa lại."
      }],
      neg: [{
        en: "I am busy, I <strong class='text-blue-600'>won't join</strong> the party.",
        vn: "Tôi bận rồi, tôi sẽ không tham gia bữa tiệc."
      }, {
        en: "I <strong class='text-blue-600'>won't buy</strong> this shirt, it's too expensive.",
        vn: "Tôi sẽ không mua chiếc áo này, nó đắt quá."
      }]
    }]
  }), /*#__PURE__*/React.createElement(TenseBlock, {
    color: "blue",
    title: "Th\xEC Hi\u1EC7n t\u1EA1i ti\u1EBFp di\u1EC5n (Present Continuous)",
    tenseType: "present-cont",
    forms: [{
      type: 'khangding',
      parts: ["S", "+", "am - is - are", "+", "Ving"]
    }, {
      type: 'phuding',
      parts: ["S", "+", "am not - isn't - aren't", "+", "Ving"]
    }],
    usages: [{
      desc: "Diễn đạt hành động đang xảy ra ngay tại thời điểm nói",
      pos: [{
        en: "I <strong class='text-blue-600'>am preparing</strong> for the VSTEP exam.",
        vn: "Tôi đang chuẩn bị cho kỳ thi VSTEP."
      }, {
        en: "The manager <strong class='text-blue-600'>is talking</strong> to a client.",
        vn: "Quản lý đang nói chuyện với một khách hàng."
      }],
      neg: [{
        en: "I <strong class='text-blue-600'>am not working</strong> right now.",
        vn: "Bây giờ tôi đang không làm việc."
      }, {
        en: "They <strong class='text-blue-600'>aren't listening</strong> to the teacher.",
        vn: "Họ đang không lắng nghe giáo viên."
      }]
    }, {
      desc: "Diễn đạt hành động đang xảy ra xung quanh thời điểm nói (dạo này)",
      pos: [{
        en: "We <strong class='text-blue-600'>are looking</strong> for a new apartment.",
        vn: "Dạo này chúng tôi đang tìm một căn hộ mới."
      }, {
        en: "She <strong class='text-blue-600'>is learning</strong> Chinese these days.",
        vn: "Dạo này cô ấy đang học tiếng Trung."
      }],
      neg: [{
        en: "I <strong class='text-blue-600'>am not sleeping</strong> well recently.",
        vn: "Gần đây tôi ngủ không được ngon giấc."
      }, {
        en: "The company <strong class='text-blue-600'>isn't doing</strong> well this year.",
        vn: "Năm nay công ty làm ăn không được tốt lắm."
      }]
    }, {
      desc: "Một kế hoạch chắc chắn sẽ xảy ra trong tương lai gần (đã chốt lịch)",
      pos: [{
        en: "I <strong class='text-blue-600'>am meeting</strong> the doctor tomorrow.",
        vn: "Tôi có lịch hẹn gặp bác sĩ vào ngày mai."
      }, {
        en: "We <strong class='text-blue-600'>are flying</strong> to Hanoi next Monday.",
        vn: "Chúng tôi sẽ bay ra Hà Nội vào thứ Hai tới."
      }],
      neg: [{
        en: "I <strong class='text-blue-600'>am not working</strong> this weekend.",
        vn: "Cuối tuần này tôi không làm việc."
      }, {
        en: "She <strong class='text-blue-600'>isn't coming</strong> to the event tonight.",
        vn: "Tối nay cô ấy sẽ không đến sự kiện."
      }]
    }]
  }), /*#__PURE__*/React.createElement(TenseBlock, {
    color: "blue",
    title: "Th\xEC Hi\u1EC7n t\u1EA1i ho\xE0n th\xE0nh (Present Perfect)",
    tenseType: "present-perf",
    forms: [{
      type: 'khangding',
      parts: ["S", "+", "have - has", "+", "V3/ed"]
    }, {
      type: 'phuding',
      parts: ["S", "+", "haven't - hasn't", "+", "V3/ed"]
    }],
    usages: [{
      desc: "Nói về một trải nghiệm cá nhân (tính đến hiện tại)",
      pos: [{
        en: "I <strong class='text-blue-600'>have visited</strong> Dalat three times.",
        vn: "Tôi đã đi Đà Lạt 3 lần rồi."
      }, {
        en: "We <strong class='text-blue-600'>have eaten</strong> at that restaurant.",
        vn: "Chúng tôi đã từng ăn ở nhà hàng đó."
      }],
      neg: [{
        en: "I <strong class='text-blue-600'>haven't tried</strong> sushi before.",
        vn: "Tôi chưa từng ăn thử sushi trước đây."
      }, {
        en: "He <strong class='text-blue-600'>hasn't traveled</strong> abroad.",
        vn: "Anh ấy chưa từng đi du lịch nước ngoài."
      }]
    }, {
      desc: "Sự việc bắt đầu từ quá khứ và vẫn còn kéo dài đến hiện tại",
      pos: [{
        en: "I <strong class='text-blue-600'>have worked</strong> here for 5 years.",
        vn: "Tôi đã làm việc ở đây được 5 năm rồi."
      }, {
        en: "She <strong class='text-blue-600'>has lived</strong> in HCMC since 2015.",
        vn: "Cô ấy đã sống ở TP.HCM từ năm 2015."
      }],
      neg: [{
        en: "We <strong class='text-blue-600'>haven't seen</strong> each other for a long time.",
        vn: "Đã lâu rồi chúng tôi chưa gặp nhau."
      }, {
        en: "I <strong class='text-blue-600'>haven't received</strong> any emails since yesterday.",
        vn: "Từ hôm qua đến giờ tôi chưa nhận được email nào."
      }]
    }]
  }), /*#__PURE__*/React.createElement(VerbTranslationExercise, {
    num: "1",
    title: "B\xE0i t\u1EADp: Di\u1EC5n \u0111\u1EA1t c\xE2u th\u1EF1c t\u1EBF sang ti\u1EBFng Anh",
    desc: "V\u1EDBi m\u1ED7i c\xE2u ti\u1EBFng Vi\u1EC7t d\u01B0\u1EDBi \u0111\xE2y, h\xE3y x\xE1c \u0111\u1ECBnh Ch\u1EE7 ng\u1EEF, \u0110\u1ED9ng t\u1EEB ch\xEDnh, Th\xEC c\u1EA7n chia, sau \u0111\xF3 vi\u1EBFt c\xE2u ti\u1EBFng Anh ho\xE0n ch\u1EC9nh (7 c\xE2u).",
    items: [{
      vn: "Tôi thường kiểm tra email công việc vào mỗi buổi sáng.",
      vocab: "usually (thường) · work emails (email công việc) · every morning (mỗi buổi sáng)",
      subject: "I",
      subjectOptions: ["I", "Work emails", "Every morning"],
      verb: "check",
      verbOptions: ["check", "send", "write"],
      tense: "Hiện tại đơn",
      tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
      conjugatedHint: "I + check (nguyên mẫu)",
      tenseReason: "Hành động lặp đi lặp lại theo thói quen",
      en: "I usually check work emails every morning.",
      accepted: ["I usually check my work emails every morning.", "I usually check work email every morning.", "Every morning I usually check work emails."],
      exp: "Thói quen lặp đi lặp lại mỗi sáng → dùng Hiện tại đơn. Chủ ngữ 'I' đi với động từ nguyên mẫu 'check'."
    }, {
      vn: "Anh trai tôi làm việc tại một ngân hàng lớn.",
      vocab: "my brother (anh trai tôi) · at a big bank (tại một ngân hàng lớn)",
      subject: "My brother",
      subjectOptions: ["My brother", "I", "A big bank"],
      verb: "work",
      verbOptions: ["work", "do", "stay"],
      tense: "Hiện tại đơn",
      tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
      conjugatedHint: "My brother + works (thêm -s)",
      tenseReason: "Thông tin cá nhân / sự thật ở hiện tại",
      en: "My brother works at a big bank.",
      accepted: ["My brother works in a big bank.", "My brother works at a large bank.", "My brother works in a large bank."],
      exp: "Nói về thông tin thực tế ở hiện tại → dùng Hiện tại đơn. Chủ ngữ 'My brother' là số ít nên 'work' thêm -s thành 'works'."
    }, {
      vn: "Hôm qua chúng tôi đã ký hợp đồng với khách hàng mới.",
      vocab: "the contract (hợp đồng) · with the new client (với khách hàng mới) · yesterday (hôm qua)",
      subject: "We",
      subjectOptions: ["We", "The contract", "The new client"],
      verb: "sign",
      verbOptions: ["sign", "buy", "make"],
      tense: "Quá khứ đơn",
      tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
      conjugatedHint: "We + signed (V2/ed)",
      tenseReason: "Sự việc đã xảy ra và kết thúc ngày hôm qua",
      en: "We signed the contract with the new client yesterday.",
      accepted: ["Yesterday we signed the contract with the new client.", "We signed a contract with the new client yesterday.", "We signed the contract with a new client yesterday."],
      exp: "Sự kiện đã xảy ra và kết thúc trong quá khứ ('hôm qua') → dùng Quá khứ đơn. Động từ 'sign' thêm -ed thành 'signed'."
    }, {
      vn: "Sáng nay cô ấy đã không tham dự cuộc họp.",
      vocab: "attend (tham dự) · the meeting (cuộc họp) · this morning (sáng nay)",
      subject: "She",
      subjectOptions: ["She", "The meeting", "This morning"],
      verb: "attend",
      verbOptions: ["attend", "speak", "open"],
      tense: "Quá khứ đơn",
      tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
      conjugatedHint: "She + didn't attend (didn't + Vo)",
      tenseReason: "Sự việc đã qua trong quá khứ ở thể phủ định",
      en: "She didn't attend the meeting this morning.",
      accepted: ["She did not attend the meeting this morning.", "This morning she didn't attend the meeting.", "This morning she did not attend the meeting."],
      exp: "Việc không tham dự đã diễn ra vào sáng nay → Quá khứ đơn phủ định: mượn trợ động từ 'didn't' + động từ nguyên mẫu 'attend'."
    }, {
      vn: "Tôi sẽ gửi báo cáo cho bạn vào chiều nay.",
      vocab: "the report (báo cáo) · to you (cho bạn) · this afternoon (chiều nay)",
      subject: "I",
      subjectOptions: ["I", "You", "The report"],
      verb: "send",
      verbOptions: ["send", "read", "keep"],
      tense: "Tương lai đơn",
      tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
      conjugatedHint: "I + will send (will + Vo)",
      tenseReason: "Quyết định hoặc lời hứa sẽ làm trong tương lai",
      en: "I will send the report to you this afternoon.",
      accepted: ["I'll send the report to you this afternoon.", "I will send you the report this afternoon.", "I'll send you the report this afternoon."],
      exp: "Đưa ra lời hứa / quyết định sẽ làm → dùng Tương lai đơn: 'will + Vo' (will send)."
    }, {
      vn: "Dạo này chúng tôi đang tìm một căn hộ mới.",
      vocab: "look for (tìm kiếm) · a new apartment (một căn hộ mới) · these days (dạo này)",
      subject: "We",
      subjectOptions: ["We", "A new apartment", "These days"],
      verb: "look for",
      verbOptions: ["look for", "live", "build"],
      tense: "Hiện tại tiếp diễn",
      tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
      conjugatedHint: "We + are looking for (am/is/are + V-ing)",
      tenseReason: "Hành động đang diễn ra xung quanh thời điểm nói ('dạo này')",
      en: "We are looking for a new apartment these days.",
      accepted: ["We're looking for a new apartment these days.", "These days we are looking for a new apartment.", "These days we're looking for a new apartment."],
      exp: "Việc tìm nhà đang diễn ra trong giai đoạn hiện tại ('dạo này') → dùng Hiện tại tiếp diễn: 'are + V-ing' (are looking for)."
    }, {
      vn: "Tôi đã làm việc ở công ty này được 5 năm rồi.",
      vocab: "at this company / for this company (ở công ty này) · for 5 years (được 5 năm)",
      subject: "I",
      subjectOptions: ["I", "This company", "5 years"],
      verb: "work",
      verbOptions: ["work", "start", "leave"],
      tense: "Hiện tại hoàn thành",
      tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
      conjugatedHint: "I + have worked (have/has + V3/ed)",
      tenseReason: "Sự việc bắt đầu trong quá khứ và vẫn kéo dài đến hiện tại",
      en: "I have worked at this company for 5 years.",
      accepted: ["I have worked for this company for 5 years.", "I have worked in this company for 5 years.", "I've worked at this company for 5 years.", "I've worked for this company for 5 years.", "I have worked at this company for five years.", "I have worked for this company for five years."],
      exp: "Làm việc từ quá khứ và đến nay vẫn còn làm ('được 5 năm rồi') → dùng Hiện tại hoàn thành: 'have + V3/ed' (have worked)."
    }]
  }));
}
function SectionToBeVerbs() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white text-lg shrink-0 shadow-md"
  }, "2"), "\u0110\u1ED9ng T\u1EEB tobe"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-3 text-lg"
  }, "\u0110\u1ED9ng t\u1EEB tobe m\xF4 t\u1EA3 b\u1EA3n ch\u1EA5t, tr\u1EA1ng th\xE1i, v\u1ECB tr\xED (ngh\u0129a l\xE0: th\xEC, l\xE0, \u1EDF).")), /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-emerald-900 mb-5 border-b-2 border-emerald-200 pb-2 inline-block"
  }, "Khi n\xE0o s\u1EED d\u1EE5ng \u0110\u1ED9ng t\u1EEB tobe?"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200 shadow-sm flex flex-col h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement(FormulaBox, {
    parts: ["S", "+", "tobe", "+", "adj"],
    color: "emerald",
    align: "left"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-700 mb-5 font-medium flex-1"
  }, "D\xF9ng \u0111\u1EC3 mi\xEAu t\u1EA3 ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600 font-bold"
  }, "c\u1EA3m x\xFAc, t\xECnh tr\u1EA1ng, t\xEDnh c\xE1ch"), " ho\u1EB7c ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600 font-bold"
  }, "\u0111\u1EB7c \u0111i\u1EC3m c\u1EE7a s\u1EF1 v\u1EADt"), "."), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-xl border border-slate-100 shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>C\u1EA3m x\xFAc / T\xECnh tr\u1EA1ng</span><br/><span class='mt-1.5 inline-block'>I <strong class='text-emerald-600'>am</strong> very busy today.</span>",
    vn: "H\xF4m nay t\xF4i r\u1EA5t b\u1EADn."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>T\xEDnh c\xE1ch con ng\u01B0\u1EDDi</span><br/><span class='mt-1.5 inline-block'>My coworkers <strong class='text-emerald-600'>are</strong> very friendly.</span>",
    vn: "\u0110\u1ED3ng nghi\u1EC7p c\u1EE7a t\xF4i r\u1EA5t th\xE2n thi\u1EC7n."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>\u0110\u1EB7c \u0111i\u1EC3m s\u1EF1 v\u1EADt</span><br/><span class='mt-1.5 inline-block'>This shirt <strong class='text-emerald-600'>is</strong> too expensive.</span>",
    vn: "Chi\u1EBFc \xE1o n\xE0y \u0111\u1EAFt qu\xE1."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200 shadow-sm flex flex-col h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement(FormulaBox, {
    parts: ["S", "+", "tobe", "+", "N - Noun Phr."],
    color: "emerald",
    align: "left"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-700 mb-5 font-medium flex-1"
  }, "D\xF9ng \u0111\u1EC3 gi\u1EDBi thi\u1EC7u ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600 font-bold"
  }, "ngh\u1EC1 nghi\u1EC7p, m\u1ED1i quan h\u1EC7"), " ho\u1EB7c ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600 font-bold"
  }, "t\xEAn g\u1ECDi c\u1EE7a s\u1EF1 v\u1EADt"), "."), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-xl border border-slate-100 shadow-sm space-y-3"
  }, /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>Ngh\u1EC1 nghi\u1EC7p / Vai tr\xF2</span><br/><span class='mt-1.5 inline-block'>She <strong class='text-emerald-600'>is</strong> an accountant at my company.</span>",
    vn: "C\xF4 \u1EA5y l\xE0 k\u1EBF to\xE1n \u1EDF c\xF4ng ty t\xF4i."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>M\u1ED1i quan h\u1EC7</span><br/><span class='mt-1.5 inline-block'>They <strong class='text-emerald-600'>are</strong> my close friends.</span>",
    vn: "H\u1ECD l\xE0 nh\u1EEFng ng\u01B0\u1EDDi b\u1EA1n th\xE2n c\u1EE7a t\xF4i."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>Gi\u1EDBi thi\u1EC7u s\u1EF1 v\u1EADt</span><br/><span class='mt-1.5 inline-block'>This <strong class='text-emerald-600'>is</strong> my new phone number.</span>",
    vn: "\u0110\xE2y l\xE0 s\u1ED1 \u0111i\u1EC7n tho\u1EA1i m\u1EDBi c\u1EE7a t\xF4i."
  }))))), /*#__PURE__*/React.createElement(TenseBlock, {
    color: "emerald",
    title: "Hi\u1EC7n t\u1EA1i \u0111\u01A1n",
    tenseType: "present",
    forms: [{
      type: 'khangding',
      parts: ["S", "+", "am - is - are", "+", "..."]
    }, {
      type: 'phuding',
      parts: ["S", "+", "am not - isn't - aren't", "+", "..."]
    }],
    usages: [{
      desc: "Nói về một sự thật hiển nhiên, tình trạng hiện tại",
      pos: [{
        en: "I <strong class='text-emerald-600'>am</strong> a freelance designer.",
        vn: "Tôi là một nhà thiết kế tự do."
      }, {
        en: "This policy <strong class='text-emerald-600'>is</strong> very important.",
        vn: "Chính sách này rất quan trọng."
      }],
      neg: [{
        en: "These products <strong class='text-emerald-600'>aren't</strong> expensive.",
        vn: "Những sản phẩm này không đắt."
      }, {
        en: "I <strong class='text-emerald-600'>am not</strong> satisfied with the service.",
        vn: "Tôi không hài lòng với dịch vụ."
      }]
    }]
  }), /*#__PURE__*/React.createElement(TenseBlock, {
    color: "emerald",
    title: "Qu\xE1 kh\u1EE9 \u0111\u01A1n",
    tenseType: "past",
    forms: [{
      type: 'khangding',
      parts: ["S", "+", "was - were", "+", "..."]
    }, {
      type: 'phuding',
      parts: ["S", "+", "wasn't - weren't", "+", "..."]
    }],
    usages: [{
      desc: "Nói về một sự thật đã từng đúng trong quá khứ",
      pos: [{
        en: "The meeting <strong class='text-emerald-600'>was</strong> successful.",
        vn: "Cuộc họp đã diễn ra thành công."
      }, {
        en: "They <strong class='text-emerald-600'>were</strong> my university classmates.",
        vn: "Họ từng là bạn học đại học của tôi."
      }],
      neg: [{
        en: "The customer service <strong class='text-emerald-600'>wasn't</strong> good.",
        vn: "Dịch vụ chăm sóc khách hàng đã không được tốt."
      }, {
        en: "We <strong class='text-emerald-600'>weren't</strong> at the office yesterday.",
        vn: "Hôm qua chúng tôi không có ở văn phòng."
      }]
    }]
  }), /*#__PURE__*/React.createElement(TenseBlock, {
    color: "emerald",
    title: "T\u01B0\u01A1ng lai \u0111\u01A1n",
    tenseType: "future",
    forms: [{
      type: 'khangding',
      parts: ["S", "+", "will be", "+", "..."]
    }, {
      type: 'phuding',
      parts: ["S", "+", "won't be", "+", "..."]
    }],
    usages: [{
      desc: "Nói về một dự đoán trạng thái trong tương lai",
      pos: [{
        en: "The weather <strong class='text-emerald-600'>will be</strong> better tomorrow.",
        vn: "Ngày mai thời tiết sẽ tốt hơn."
      }, {
        en: "This project <strong class='text-emerald-600'>will be</strong> a great success.",
        vn: "Dự án này sẽ là một thành công lớn."
      }],
      neg: [{
        en: "The traffic <strong class='text-emerald-600'>won't be</strong> heavy at noon.",
        vn: "Giao thông sẽ không bị kẹt xe vào buổi trưa đâu."
      }, {
        en: "I <strong class='text-emerald-600'>won't be</strong> available next week.",
        vn: "Tuần sau tôi sẽ không rảnh."
      }]
    }]
  }), /*#__PURE__*/React.createElement(MiniQuiz, {
    color: "emerald",
    num: "1",
    title: "B\xE0i t\u1EADp: Ch\u1ECDn \u0111\u1ED9ng t\u1EEB tobe theo th\u1EDDi gian",
    desc: "L\u01B0u \xFD c\xE1c t\u1EEB kh\xF3a ch\u1EC9 th\u1EDDi gian \u1EDF Qu\xE1 kh\u1EE9, Hi\u1EC7n t\u1EA1i, T\u01B0\u01A1ng lai (7 c\xE2u).",
    questions: [{
      text: "They ________ my university classmates 5 years ago.",
      options: ["are", "were", "was"],
      correct: "were",
      exp: "'5 years ago' -> Quá khứ đơn. 'They' đi với 'were'."
    }, {
      text: "Don't worry. Tomorrow ________ a better day.",
      options: ["is", "was", "will be"],
      correct: "will be",
      exp: "'Tomorrow' -> Tương lai đơn. Cần dùng 'will be'."
    }, {
      text: "I ________ very happy right now.",
      options: ["am", "was", "will be"],
      correct: "am",
      exp: "'right now' -> Hiện tại. 'I' đi với 'am'."
    }, {
      text: "The weather ________ terrible last weekend.",
      options: ["is", "was", "were"],
      correct: "was",
      exp: "'last weekend' -> Quá khứ đơn. 'The weather' (số ít) đi với 'was'."
    }, {
      text: "She ________ at the office tomorrow morning.",
      options: ["isn't", "wasn't", "won't be"],
      correct: "won't be",
      exp: "'tomorrow morning' -> Tương lai đơn phủ định là 'won't be'."
    }, {
      text: "It ________ widely known that smoking causes cancer.",
      options: ["is", "was", "will be"],
      correct: "is",
      exp: "Đây là một sự thật hiển nhiên (luôn đúng) trong xã hội, dùng thì Hiện tại đơn."
    }, {
      text: "The new regulations ________ effective starting next Monday.",
      options: ["are", "were", "will be"],
      correct: "will be",
      exp: "Dấu hiệu 'next Monday' (thứ Hai tới) yêu cầu thì Tương lai đơn để chỉ trạng thái bắt đầu có hiệu lực."
    }]
  }), /*#__PURE__*/React.createElement(MiniQuiz, {
    color: "emerald",
    num: "2",
    title: "B\xE0i t\u1EADp: Tobe \u0111i k\xE8m T\xEDnh t\u1EEB / Danh t\u1EEB",
    desc: "X\xE1c \u0111\u1ECBnh \u0111\xFAng t\u1EEB lo\u1EA1i (adj hay noun) \u0111i sau \u0111\u1ED9ng t\u1EEB tobe (7 c\xE2u).",
    questions: [{
      text: "This company policy is very ________.",
      options: ["importance", "important"],
      correct: "important",
      exp: "Cần một Tính từ (important - quan trọng) để miêu tả tính chất cho chủ ngữ 'policy'."
    }, {
      text: "She is a dedicated ________.",
      options: ["teach", "teacher"],
      correct: "teacher",
      exp: "Cần một Danh từ chỉ người (teacher - giáo viên) đứng sau mạo từ 'a' để chỉ nghề nghiệp."
    }, {
      text: "The soup smells good, but it is too ________.",
      options: ["salt", "salty"],
      correct: "salty",
      exp: "Sử dụng tính từ (salty - mặn) để miêu tả tính trạng thái/tính chất của món súp."
    }, {
      text: "Those men ________ engineers.",
      options: ["is", "are", "do"],
      correct: "are",
      exp: "'Those men' (những người đàn ông đó) là danh từ số nhiều, đi kèm với động từ tobe 'are'."
    }, {
      text: "Happiness ________ a choice.",
      options: ["is", "has", "does"],
      correct: "is",
      exp: "'Happiness' (hạnh phúc) là danh từ không đếm được, dùng tobe số ít 'is'."
    }, {
      text: "The proliferation of fake news is highly ________.",
      options: ["problem", "problematic"],
      correct: "problematic",
      exp: "'highly' là trạng từ bổ nghĩa cho một Tính từ phía sau (problematic - có vấn đề)."
    }, {
      text: "He proved to be a reliable ________ during the crisis.",
      options: ["partner", "partnership"],
      correct: "partner",
      exp: "Chỉ người (một người cộng sự đáng tin cậy), ta dùng danh từ chỉ người 'partner' đếm được (có mạo từ 'a')."
    }]
  }));
}
function SectionComparison() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-rose-50 border-l-4 border-rose-500 p-5 sm:p-7 rounded-r-2xl shadow-sm relative overflow-hidden"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "absolute -bottom-4 -right-4 w-32 h-32 text-rose-500 opacity-10"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-extrabold text-rose-800 mb-4 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(ShieldAlert, {
    className: "w-6 h-6"
  }), "L\u01B0u \xFD S\u1ED1ng C\xF2n: Oan Gia Ng\xF5 H\u1EB9p!"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-rose-900/90 text-sm sm:text-base leading-relaxed"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", {
    className: "bg-rose-200 px-1 rounded text-rose-800"
  }, "M\u1ED9t c\xE2u \u0111\u01A1n CH\u1EC8 C\xD3 01 \u0111\u1ED9ng t\u1EEB ch\xEDnh"), " (ho\u1EB7c l\xE0 \u0110\u1ED9ng t\u1EEB th\u01B0\u1EDDng, ho\u1EB7c l\xE0 \u0110\u1ED9ng t\u1EEB tobe). Ch\xFAng b\u1EB1ng m\u1EB7t nh\u01B0ng kh\xF4ng b\u1EB1ng l\xF2ng, tuy\u1EC7t \u0111\u1ED1i kh\xF4ng \u0111\u1EE9ng c\u1EA1nh nhau \u1EDF d\u1EA1ng nguy\xEAn b\u1EA3n!"), /*#__PURE__*/React.createElement("div", {
    className: "bg-white/60 p-3 rounded-lg border border-rose-200 font-mono text-sm shadow-sm inline-block"
  }, "\u274C ", /*#__PURE__*/React.createElement("span", {
    className: "line-through opacity-70"
  }, "I am go to school."), " (Sai v\xEC c\xF3 c\u1EA3 tobe \"am\" v\xE0 \u0110\u1ED9ng t\u1EEB th\u01B0\u1EDDng \"go\")", /*#__PURE__*/React.createElement("br", null), "\u2705 I ", /*#__PURE__*/React.createElement("strong", {
    className: "font-black text-blue-700"
  }, "go"), " to school. (\u0110\xFAng: Ch\u1EC9 d\xF9ng \u0110\u1ED9ng t\u1EEB th\u01B0\u1EDDng \u0111\u1EC3 ch\u1EC9 h\xE0nh \u0111\u1ED9ng)"), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-rose-200 mt-4 shadow-sm relative z-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-slate-800 mb-2"
  }, "Ch\u1EC9 c\xF3 2 tr\u01B0\u1EDDng h\u1EE3p tobe v\xE0 \u0110\u1ED9ng t\u1EEB th\u01B0\u1EDDng \u0111\u1EE9ng k\u1EBF nhau (Nh\u01B0ng \u0111\u1ED9ng t\u1EEB th\u01B0\u1EDDng ph\u1EA3i bi\u1EBFn \u0111\u1ED5i):"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 space-y-2 text-slate-700"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-blue-600"
  }, "Th\xEC ti\u1EBFp di\u1EC5n:"), " S + tobe + ", /*#__PURE__*/React.createElement("strong", {
    className: "bg-blue-100 text-blue-800 px-1 rounded"
  }, /*#__PURE__*/React.createElement(FormatVerb, {
    text: "Ving"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, "V\xED d\u1EE5: I am ", /*#__PURE__*/React.createElement("strong", {
    className: "text-blue-600"
  }, "going"), " to school.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-purple-600"
  }, "C\xE2u b\u1ECB \u0111\u1ED9ng:"), " S + tobe + ", /*#__PURE__*/React.createElement("strong", {
    className: "bg-purple-100 text-purple-800 px-1 rounded"
  }, /*#__PURE__*/React.createElement(FormatVerb, {
    text: "V3/ed"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, "V\xED d\u1EE5: The car is ", /*#__PURE__*/React.createElement("strong", {
    className: "text-purple-600"
  }, "washed"), ".")))), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm italic text-rose-700"
  }, "* N\u1EBFu mu\u1ED1n d\xF9ng 2 \u0111\u1ED9ng t\u1EEB ch\xEDnh trong 1 c\xE2u, b\u1EA1n ph\u1EA3i t\u1EA1o ", /*#__PURE__*/React.createElement("strong", null, "C\xE2u gh\xE9p"), " (gh\xE9p 2 c\xE2u \u0111\u01A1n l\u1EA1i b\u1EB1ng c\xE1c t\u1EEB n\u1ED1i nh\u01B0 and, but, so...)."))), /*#__PURE__*/React.createElement(MiniQuiz, {
    color: "rose",
    num: "1",
    title: "B\xE0i t\u1EADp: B\u1EAFt l\u1ED7i sai Oan gia ng\xF5 h\u1EB9p",
    desc: "T\xECm ra c\xE2u n\xF3i chu\u1EA9n x\xE1c c\u1EE7a ng\u01B0\u1EDDi b\u1EA3n x\u1EE9 (kh\xF4ng m\u1EAFc l\u1ED7i c\u01A1 b\u1EA3n nh\xE9t b\u1EEBa tobe - 7 c\xE2u).",
    questions: [{
      text: "Chọn câu giao tiếp ĐÚNG:",
      options: ["I am agree with you.", "I agree with you."],
      correct: "I agree with you.",
      exp: "'Agree' (đồng ý) là Động từ thường mang ý nghĩa hành động nhận thức. Đã có động từ thường thì tuyệt đối không được nhét thêm tobe 'am' vào trước nó."
    }, {
      text: "Chọn câu giao tiếp ĐÚNG:",
      options: ["He doesn't happy.", "He isn't happy."],
      correct: "He isn't happy.",
      exp: "'Happy' là Tính từ (vui vẻ). Đi với tính từ bắt buộc phải dùng động từ tobe, và dạng phủ định của nó là 'isn't'."
    }, {
      text: "Chọn câu giao tiếp ĐÚNG:",
      options: ["She is go to work.", "She goes to work."],
      correct: "She goes to work.",
      exp: "Chỉ hành động 'đi làm' (go), ta dùng hoàn toàn động từ thường, chia theo chủ ngữ 'She' thành 'goes'. Không dùng 'is go'."
    }, {
      text: "Chọn câu giao tiếp ĐÚNG:",
      options: ["Are you understand?", "Do you understand?"],
      correct: "Do you understand?",
      exp: "Câu hỏi với động từ thường (understand) phải mượn trợ động từ (Do/Does) đưa ra đầu câu. Không dùng 'Are' vì 'Are' là tobe."
    }, {
      text: "Chọn câu giao tiếp ĐÚNG:",
      options: ["I didn't tired.", "I wasn't tired."],
      correct: "I wasn't tired.",
      exp: "'Tired' (mệt mỏi) là tính từ miêu tả trạng thái, phải dùng tobe ở quá khứ phủ định là 'wasn't'."
    }, {
      text: "Chọn câu giao tiếp ĐÚNG:",
      options: ["The project is lack of funding.", "The project lacks funding."],
      correct: "The project lacks funding.",
      exp: "'Lack' có thể đóng vai trò làm Động từ thường mang nghĩa 'thiếu hụt'. Do đó không cần dùng 'is lack' sai cấu trúc."
    }, {
      text: "Chọn câu giao tiếp ĐÚNG:",
      options: ["It is consist of three parts.", "It consists of three parts."],
      correct: "It consists of three parts.",
      exp: "'Consist of' là Động từ thường mang nghĩa bao gồm. Dùng động từ thường chia số ít (consists), không có 'is consist'."
    }]
  }), /*#__PURE__*/React.createElement(MiniQuiz, {
    color: "rose",
    num: "2",
    title: "B\xE0i t\u1EADp: \u0110i\u1EC1n t\u1EEB c\u1ED1t l\xF5i",
    desc: "C\xE2n nh\u1EAFc ph\xEDa sau l\xE0 H\xE0nh \u0111\u1ED9ng (V), T\xEDnh t\u1EEB (Adj) hay Danh t\u1EEB (Noun) \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh d\xF9ng \u0110\u1ED9ng t\u1EEB th\u01B0\u1EDDng hay tobe (7 c\xE2u).",
    questions: [{
      text: "I ________ to the gym every morning.",
      options: ["am go", "go", "am going"],
      correct: "go",
      exp: "Thói quen lặp lại mỗi sáng (hiện tại đơn), ta chỉ dùng động từ thường 'go'. Tuyệt đối không dùng 'am go' (Lỗi oan gia ngõ hẹp)."
    }, {
      text: "She ________ extremely intelligent.",
      options: ["is", "has", "does"],
      correct: "is",
      exp: "'intelligent' (thông minh) là Tính từ, do đó vị trí này cần động từ tobe 'is'."
    }, {
      text: "They ________ very hard on this project.",
      options: ["are working", "are work", "work"],
      correct: "are working",
      exp: "Hành động đang diễn ra (tiếp diễn), động từ biến đổi thành Ving, nên ghép được với tobe: tobe + Ving (are working)."
    }, {
      text: "We ________ not fully aware of the consequences.",
      options: ["are", "do", "have"],
      correct: "are",
      exp: "'aware of' là cụm Tính từ mang nghĩa 'nhận thức được'. Trước tính từ phải dùng động từ tobe."
    }, {
      text: "The company ________ to expand its market share.",
      options: ["wants", "is want", "want"],
      correct: "wants",
      exp: "Động từ chỉ mong muốn (want) là động từ thường. Chia số ít theo chủ ngữ công ty thành 'wants'. (is want là sai)."
    }, {
      text: "This evidence ________ crucial for the investigation.",
      options: ["is", "does", "has"],
      correct: "is",
      exp: "'crucial' (trọng yếu/vô cùng quan trọng) là Tính từ, vị trí này cần động từ tobe (is)."
    }, {
      text: "Many candidates ________ to meet the minimum requirements.",
      options: ["fail", "are fail", "fails"],
      correct: "fail",
      exp: "Hành động 'thất bại' (fail) dùng động từ thường số nhiều do chủ ngữ 'candidates' là số nhiều. Không dùng 'are fail'."
    }]
  }));
}
function SectionModalVerbs() {
  var modals = [{
    name: "can - cannot",
    meaning: "Có thể",
    desc: "Diễn tả khả năng của chủ ngữ (ai đó có thể làm gì).",
    pos: /*#__PURE__*/React.createElement(Fragment, null, "S + can + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    neg: /*#__PURE__*/React.createElement(Fragment, null, "S + cannot + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    ex: [{
      en: "I <strong class='text-amber-600'>can communicate</strong> in basic English.",
      vn: "Tôi có thể giao tiếp tiếng Anh cơ bản."
    }, {
      en: "You <strong class='text-amber-600'>cannot pay</strong> by cash here.",
      vn: "Bạn không thể thanh toán bằng tiền mặt ở đây."
    }]
  }, {
    name: "should",
    meaning: "Nên",
    desc: "Đưa ra một lời khuyên chân thành cho ai đó.",
    pos: /*#__PURE__*/React.createElement(Fragment, null, "S + should + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    neg: /*#__PURE__*/React.createElement(Fragment, null, "S + shouldn't + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    ex: [{
      en: "You <strong class='text-amber-600'>should double-check</strong> the document.",
      vn: "Bạn nên kiểm tra lại tài liệu một lần nữa."
    }, {
      en: "We <strong class='text-amber-600'>shouldn't waste</strong> time on this.",
      vn: "Chúng ta không nên lãng phí thời gian vào việc này."
    }]
  }, {
    name: "must - have to",
    meaning: "Phải",
    desc: "Must: Bắt buộc từ bản thân. Have to: Luật lệ, quy định.",
    pos: /*#__PURE__*/React.createElement(Fragment, null, "S + must - have to + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    neg: null,
    ex: [{
      en: "All employees <strong class='text-amber-600'>must wear</strong> uniforms.",
      vn: "Tất cả nhân viên bắt buộc phải mặc đồng phục."
    }, {
      en: "I <strong class='text-amber-600'>have to submit</strong> the report today.",
      vn: "Tôi phải nộp báo cáo vào ngày hôm nay."
    }]
  }, {
    name: "will - won't",
    meaning: "Sẽ",
    desc: "Diễn tả một ý định, quyết định hoặc dự đoán.",
    pos: /*#__PURE__*/React.createElement(Fragment, null, "S + will + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    neg: /*#__PURE__*/React.createElement(Fragment, null, "S + won't + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    ex: [{
      en: "The company <strong class='text-amber-600'>will launch</strong> a new product.",
      vn: "Công ty sẽ ra mắt một sản phẩm mới."
    }, {
      en: "I <strong class='text-amber-600'>won't give up</strong> easily.",
      vn: "Tôi sẽ không bỏ cuộc một cách dễ dàng."
    }]
  }, {
    name: "may - might",
    meaning: "Có khả năng",
    desc: "Khả năng xảy ra một việc gì đó (mức độ chắc chắn thấp).",
    pos: /*#__PURE__*/React.createElement(Fragment, null, "S + may - might + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    neg: /*#__PURE__*/React.createElement(Fragment, null, "S + may - might not + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    ex: [{
      en: "It <strong class='text-amber-600'>might rain</strong> heavily this afternoon.",
      vn: "Chiều nay trời có khả năng sẽ mưa to."
    }, {
      en: "We <strong class='text-amber-600'>may need</strong> more time to finish.",
      vn: "Chúng tôi có thể cần thêm thời gian để hoàn thành."
    }]
  }, {
    name: "don't - doesn't have to",
    meaning: "Không cần phải",
    desc: "Diễn tả sự không cần thiết (bạn không làm việc này cũng không sao).",
    pos: /*#__PURE__*/React.createElement(Fragment, null, "S + don't - doesn't have to + ", /*#__PURE__*/React.createElement(FormatVerb, {
      text: "Vo"
    })),
    neg: null,
    ex: [{
      en: "You <strong class='text-amber-600'>don't have to pay</strong> immediately.",
      vn: "Bạn không cần phải thanh toán ngay lập tức."
    }, {
      en: "She <strong class='text-amber-600'>doesn't have to work</strong> on weekends.",
      vn: "Cô ấy không cần phải làm việc vào dịp cuối tuần."
    }]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white text-lg shrink-0 shadow-md"
  }, "3"), "\u0110\u1ED9ng T\u1EEB Khi\u1EBFm Khuy\u1EBFt (Modal Verbs)"), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex justify-center w-full pb-4"
  }, /*#__PURE__*/React.createElement(FormulaBox, {
    parts: ["S", "+", "Modal Verb", "+", "Vo"],
    color: "amber",
    align: "center"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
  }, modals.map(function (m, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "bg-white p-5 rounded-2xl border-2 border-slate-100 hover:border-amber-400 shadow-sm transition-all duration-300 hover:shadow-md group flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-black text-amber-600 mb-2 group-hover:scale-105 transition-transform origin-left"
    }, m.name), /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-100/80 text-amber-900 px-3 py-1 inline-block rounded-lg font-bold text-sm mb-3 w-fit"
    }, m.meaning), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-600 text-sm mb-4 flex-1 leading-relaxed"
    }, m.desc), /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 mb-4 font-mono text-sm shadow-inner overflow-x-auto hide-scrollbar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-nowrap whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600 shrink-0 text-lg"
    }, "\uD83D\uDC4D"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-slate-700 min-w-max"
    }, m.pos)), m.neg && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-nowrap whitespace-nowrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-rose-600 shrink-0 text-lg"
    }, "\uD83D\uDC4E"), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-slate-700 min-w-max"
    }, m.neg))), /*#__PURE__*/React.createElement("div", {
      className: "pt-3 border-t border-slate-100 mt-auto"
    }, m.ex.map(function (example, idx) {
      return /*#__PURE__*/React.createElement(ClickableSentence, {
        key: idx,
        en: example.en,
        vn: example.vn
      });
    })));
  })), /*#__PURE__*/React.createElement(MiniQuiz, {
    color: "amber",
    num: "1",
    title: "B\xE0i t\u1EADp: Ch\u1ECDn \xFD ngh\u0129a Modal Verbs",
    desc: "D\u1ECBch ngh\u0129a ng\u1EEF c\u1EA3nh \u0111\u1EC3 ch\u1ECDn t\u1EEB khuy\xEAn b\u1EA3o, kh\u1EA3 n\u0103ng hay b\u1EAFt bu\u1ED9c (7 c\xE2u).",
    questions: [{
      text: "You look really tired. You ________ go to bed early.",
      options: ["can", "should", "will"],
      correct: "should",
      exp: "Đưa ra lời khuyên (bạn trông mệt mỏi, bạn NÊN đi ngủ sớm)."
    }, {
      text: "All passengers ________ wear seatbelts during takeoff.",
      options: ["must", "can", "may"],
      correct: "must",
      exp: "Đây là quy định bắt buộc trên máy bay (hành khách PHẢI thắt dây an toàn)."
    }, {
      text: "Take an umbrella. It ________ rain heavily this afternoon.",
      options: ["should", "might", "must"],
      correct: "might",
      exp: "Chỉ một dự đoán, khả năng có thể xảy ra (có khả năng mưa, không chắc chắn 100%)."
    }, {
      text: "I ________ communicate in basic English confidently.",
      options: ["can", "must", "should"],
      correct: "can",
      exp: "Thể hiện năng lực của bản thân (tôi CÓ THỂ giao tiếp)."
    }, {
      text: "Tomorrow is Sunday, so I ________ wake up early.",
      options: ["don't have to", "mustn't", "shouldn't"],
      correct: "don't have to",
      exp: "Chủ nhật thì 'không cần thiết phải' dậy sớm. Dùng 'don't have to'."
    }, {
      text: "Applicants ________ submit their CVs before the deadline to be considered.",
      options: ["must", "may", "can"],
      correct: "must",
      exp: "Trong ngữ cảnh công việc/tuyển dụng, đây là luật lệ bắt buộc (PHẢI nộp trước hạn)."
    }, {
      text: "The economic situation ________ improve in the next quarter, but it remains uncertain.",
      options: ["may", "must", "should"],
      correct: "may",
      exp: "Vế sau 'remains uncertain' (vẫn chưa chắc chắn) chứng tỏ đây chỉ là khả năng thấp (may - có khả năng)."
    }]
  }), /*#__PURE__*/React.createElement(MiniQuiz, {
    color: "amber",
    num: "2",
    title: "B\xE0i t\u1EADp: C\u1EA5u tr\xFAc theo sau Modal",
    desc: "Nh\u1EDB l\u1EA1i quy t\u1EAFc b\u1EA5t di b\u1EA5t d\u1ECBch c\u1EE7a Modal Verb (7 c\xE2u).",
    questions: [{
      text: "She can ________ three languages fluently.",
      options: ["speaks", "speak", "to speak"],
      correct: "speak",
      exp: "Sau Modal Verb luôn cộng với Động từ nguyên mẫu (Vo), không thêm s/es."
    }, {
      text: "We shouldn't ________ time on this minor issue.",
      options: ["waste", "wasting", "to waste"],
      correct: "waste",
      exp: "Sau Modal Verb (kể cả thể phủ định) luôn cộng với Động từ nguyên mẫu (Vo)."
    }, {
      text: "He will ________ the financial report tomorrow.",
      options: ["finish", "finishes", "finished"],
      correct: "finish",
      exp: "Will + Vo. Luôn giữ nguyên động từ."
    }, {
      text: "They must ________ the new company rules strictly.",
      options: ["following", "to follow", "follow"],
      correct: "follow",
      exp: "Must + Vo. Cấm dùng 'to V'."
    }, {
      text: "You don't have to ________ early if you don't want to.",
      options: ["arrive", "arrived", "arriving"],
      correct: "arrive",
      exp: "have to + Vo. (Arrive giữ nguyên)."
    }, {
      text: "The government should ________ stricter environmental regulations.",
      options: ["implement", "implements", "implemented"],
      correct: "implement",
      exp: "Should + Vo. Không chia theo chủ ngữ số ít."
    }, {
      text: "Companies must not ________ customer data without explicit consent.",
      options: ["exploits", "exploit", "exploiting"],
      correct: "exploit",
      exp: "Must not + Vo. Hành động khai thác dữ liệu phải giữ nguyên nguyên mẫu."
    }]
  }));
}
function SectionPassiveVoice() {
  var passiveForms = [{
    tense: "Hiện tại đơn",
    tobe: "am - is - are",
    ex: {
      en: "The room <strong class='text-purple-600'>is cleaned</strong> every day.",
      vn: "Căn phòng được dọn dẹp mỗi ngày."
    }
  }, {
    tense: "Quá khứ đơn",
    tobe: "was - were",
    ex: {
      en: "The house <strong class='text-purple-600'>was built</strong> in 1990.",
      vn: "Ngôi nhà được xây năm 1990."
    }
  }, {
    tense: "Tương lai đơn",
    tobe: "will be",
    ex: {
      en: "The letter <strong class='text-purple-600'>will be sent</strong> tomorrow.",
      vn: "Bức thư sẽ được gửi vào ngày mai."
    }
  }, {
    tense: "Can (Modal)",
    tobe: "can be",
    ex: {
      en: "English <strong class='text-purple-600'>can be learned</strong> easily.",
      vn: "Tiếng Anh có thể được học một cách dễ dàng."
    }
  }, {
    tense: "Should (Modal)",
    tobe: "should be",
    ex: {
      en: "The work <strong class='text-purple-600'>should be finished</strong> today.",
      vn: "Công việc nên được hoàn thành hôm nay."
    }
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white text-lg shrink-0 shadow-md"
  }, "4"), "C\xE2u B\u1ECB \u0110\u1ED9ng (Passive Voice)")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-100 p-2 rounded-lg"
  }, /*#__PURE__*/React.createElement(Activity, {
    className: "text-slate-600"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-lg"
  }, "Ch\u1EE7 \u0111\u1ED9ng (Active)")), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 text-sm mb-4"
  }, "Ch\u1EE7 ng\u1EEF l\xE0 ng\u01B0\u1EDDi hay v\u1EADt ", /*#__PURE__*/React.createElement("strong", null, "t\u1EF1 t\u1EA1o ra"), " h\xE0nh \u0111\u1ED9ng."), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 p-4 rounded-xl border border-slate-200 text-center overflow-x-auto hide-scrollbar"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-mono mb-2 whitespace-nowrap"
  }, "S + V + O"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "The cat <strong class='text-blue-600'>ate</strong> the fish.",
    vn: "Con m\xE8o \u0111\xE3 \u0103n con c\xE1."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-purple-50 p-6 rounded-2xl border border-purple-200 shadow-sm relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-purple-200 p-2 rounded-lg"
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    className: "text-purple-700"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-lg text-purple-900"
  }, "B\u1ECB \u0111\u1ED9ng (Passive)")), /*#__PURE__*/React.createElement("p", {
    className: "text-purple-800/80 text-sm mb-4 relative z-10"
  }, "Ch\u1EE7 ng\u1EEF l\xE0 ng\u01B0\u1EDDi hay v\u1EADt ", /*#__PURE__*/React.createElement("strong", null, "ch\u1ECBu t\xE1c \u0111\u1ED9ng"), " c\u1EE7a h\xE0nh \u0111\u1ED9ng."), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-purple-200 text-center relative z-10 shadow-sm overflow-x-auto hide-scrollbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-2 w-full flex justify-center"
  }, /*#__PURE__*/React.createElement(FormulaBox, {
    parts: ["S", "+", "tobe", "+", "V3/ed"],
    color: "purple",
    align: "center"
  })), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "The fish <strong class='text-purple-600'>was eaten</strong> by the cat.",
    vn: "Con c\xE1 \u0111\xE3 b\u1ECB \u0103n b\u1EDFi con m\xE8o."
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white border-2 border-purple-100 rounded-3xl p-5 sm:p-8 shadow-md overflow-hidden relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-8 bg-purple-50/50 -mx-8 -mt-8 p-8 border-b border-purple-100"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-base sm:text-lg font-bold text-slate-500 mb-4 uppercase tracking-widest"
  }, "C\xF4ng th\u1EE9c g\u1ED1c xuy\xEAn su\u1ED1t"), /*#__PURE__*/React.createElement("div", {
    className: "w-full overflow-x-auto hide-scrollbar pb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex flex-nowrap justify-center items-center gap-1.5 sm:gap-3 bg-white px-3 py-3 sm:px-6 sm:py-5 rounded-2xl border-2 border-purple-200 shadow-sm min-w-max mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg border-2 shadow-sm shrink-0 whitespace-nowrap flex items-center justify-center tracking-wide leading-none bg-purple-100 text-purple-800 border-purple-200"
  }, "S"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300 font-black text-base sm:text-2xl shrink-0"
  }, "+"), /*#__PURE__*/React.createElement("div", {
    className: "px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg border-2 shadow-sm shrink-0 whitespace-nowrap flex items-center justify-center tracking-wide leading-none bg-purple-100 text-purple-800 border-purple-200"
  }, "tobe ", /*#__PURE__*/React.createElement("span", {
    className: "text-xs sm:text-sm font-semibold opacity-70 ml-1 sm:ml-2"
  }, "(Chia theo th\xEC)")), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300 font-black text-base sm:text-2xl shrink-0"
  }, "+"), /*#__PURE__*/React.createElement("div", {
    className: "px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg border-2 shadow-sm shrink-0 whitespace-nowrap flex items-center justify-center tracking-wide leading-none bg-purple-100 text-purple-800 border-purple-200"
  }, /*#__PURE__*/React.createElement(FormatVerb, {
    text: "V3/ed"
  })))), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-purple-700 mt-2 font-medium max-w-lg mx-auto leading-relaxed"
  }, "Trong c\xE2u B\u1ECB \u0111\u1ED9ng, ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(FormatVerb, {
    text: "V3/ed"
  }), " lu\xF4n \u0111\u1EE9ng y\xEAn"), ". Ta ch\u1EC9 thay \u0111\u1ED5i \u0111\u1ED9ng t\u1EEB ", /*#__PURE__*/React.createElement("strong", null, "tobe"), " sao cho kh\u1EDBp v\u1EDBi th\xEC c\u1EE7a c\xE2u.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, passiveForms.map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "bg-slate-50 hover:bg-purple-50 p-3 sm:p-4 rounded-xl border border-slate-200 transition-colors group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between gap-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-slate-700 text-sm sm:text-base group-hover:text-purple-700 transition-colors"
    }, f.tense), /*#__PURE__*/React.createElement("div", {
      className: "bg-purple-100 text-purple-800 px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm text-center border border-purple-200 shadow-sm relative overflow-hidden font-mono tracking-wide shrink-0"
    }, /*#__PURE__*/React.createElement("span", {
      className: "relative z-10"
    }, f.tobe), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:animate-[slideRight_0.5s_ease-in-out]"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-lg border border-slate-100 p-2.5 sm:p-3 shadow-sm flex items-center"
    }, /*#__PURE__*/React.createElement(ClickableSentence, {
      en: f.ex.en,
      vn: f.ex.vn
    }))));
  }))), /*#__PURE__*/React.createElement(MiniQuiz, {
    color: "purple",
    num: "1",
    title: "B\xE0i t\u1EADp: Nh\u1EADn di\u1EC7n B\u1ECB \u0111\u1ED9ng",
    desc: "H\xE3y x\xE1c \u0111\u1ECBnh xem c\xE2u mang \xFD ngh\u0129a Ch\u1EE7 \u0111\u1ED9ng hay B\u1ECB \u0111\u1ED9ng (7 c\xE2u).",
    questions: [{
      text: "The report ________ by the manager yesterday.",
      options: ["reviewed", "was reviewed"],
      correct: "was reviewed",
      exp: "Báo cáo không tự 'review' (nhận xét) được, nó BỊ nhận xét bởi quản lý."
    }, {
      text: "The company ________ a new product next month.",
      options: ["will launch", "will be launched"],
      correct: "will launch",
      exp: "Công ty CHỦ ĐỘNG tung ra sản phẩm mới, không phải bị tung ra."
    }, {
      text: "My car ________ every week.",
      options: ["washes", "is washed"],
      correct: "is washed",
      exp: "Xe hơi BỊ/ĐƯỢC rửa (bởi con người), không tự rửa."
    }, {
      text: "They ________ the house in 1990.",
      options: ["built", "were built"],
      correct: "built",
      exp: "Chủ ngữ 'Họ' là người tự thực hiện hành động xây dựng (Chủ động)."
    }, {
      text: "English ________ all over the world.",
      options: ["speaks", "is spoken"],
      correct: "is spoken",
      exp: "Tiếng Anh ĐƯỢC nói trên toàn thế giới."
    }, {
      text: "The new policy ________ to reduce greenhouse gas emissions.",
      options: ["designed", "was designed"],
      correct: "was designed",
      exp: "Chính sách ĐƯỢC thiết kế để giảm khí thải (Bị động)."
    }, {
      text: "The results of the study ________ in a reputable journal.",
      options: ["will publish", "will be published"],
      correct: "will be published",
      exp: "Kết quả nghiên cứu SẼ ĐƯỢC xuất bản. Chủ thể tiếp nhận hành động."
    }]
  }), /*#__PURE__*/React.createElement(MiniQuiz, {
    color: "purple",
    num: "2",
    title: "B\xE0i t\u1EADp: C\u1EA5u tr\xFAc g\u1ED1c B\u1ECB \u0111\u1ED9ng",
    desc: "\u0110i\u1EC1n ph\u1EA7n c\xF2n thi\u1EBFu v\xE0o c\xF4ng th\u1EE9c B\u1ECB \u0111\u1ED9ng (7 c\xE2u).",
    questions: [{
      text: "Trong câu bị động, động từ luôn ở dạng: tobe + ________",
      options: ["Vo", "Ving", "V3/ed"],
      correct: "V3/ed",
      exp: "Quy tắc vàng của bị động là động từ chính luôn ở Cột 3 hoặc thêm -ed."
    }, {
      text: "The room is ________ every day.",
      options: ["clean", "cleaned", "cleaning"],
      correct: "cleaned",
      exp: "Dựa vào công thức 'tobe + V3/ed', ta chọn 'cleaned'."
    }, {
      text: "The letter will be ________ tomorrow.",
      options: ["send", "sending", "sent"],
      correct: "sent",
      exp: "'Sent' là V3 (bất quy tắc) của động từ 'send'."
    }, {
      text: "This machine can be ________ easily.",
      options: ["operate", "operated", "operating"],
      correct: "operated",
      exp: "Câu bị động với Modal Verb (can be + V3/ed)."
    }, {
      text: "Mistakes should be ________ immediately.",
      options: ["correct", "correcting", "corrected"],
      correct: "corrected",
      exp: "Bị động với Should (should be + V3/ed)."
    }, {
      text: "The budget proposal must be ________ by the board of directors.",
      options: ["approve", "approved", "approving"],
      correct: "approved",
      exp: "Must be + V3/ed (đề xuất ngân sách phải ĐƯỢC phê duyệt)."
    }, {
      text: "The ancient artifacts were carefully ________ by the archaeologists.",
      options: ["preserve", "preserved", "preserving"],
      correct: "preserved",
      exp: "tobe ở quá khứ (were) + trạng từ + V3/ed (được bảo tồn cẩn thận)."
    }]
  }));
}