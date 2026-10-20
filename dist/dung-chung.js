"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Khai báo React
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  Fragment = _React.Fragment;

// --- 1. HỆ THỐNG ICONS ---
var IconInfo = function IconInfo(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 20 : _ref$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01"
  }));
};
var IconCheck = function IconCheck(_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 16 : _ref2$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  }));
};
var IconX = function IconX(_ref3) {
  var _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 16 : _ref3$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15 9-6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 9 6 6"
  }));
};
var IconRefresh = function IconRefresh(_ref4) {
  var _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 16 : _ref4$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21h5v-5"
  }));
};
var IconGamepad = function IconGamepad(_ref5) {
  var _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? 20 : _ref5$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    x2: "10",
    y1: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    x2: "8",
    y1: "10",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    x2: "15.01",
    y1: "13",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    x2: "18.01",
    y1: "11",
    y2: "11"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "12",
    x: "2",
    y: "6",
    rx: "2"
  }));
};
var Activity = function Activity(_ref6) {
  var _ref6$size = _ref6.size,
    size = _ref6$size === void 0 ? 20 : _ref6$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-4l-3 9L9 3l-3 9H2"
  }));
};
var Zap = function Zap(_ref7) {
  var _ref7$size = _ref7.size,
    size = _ref7$size === void 0 ? 20 : _ref7$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
  }));
};
var Layers = function Layers(_ref8) {
  var _ref8$size = _ref8.size,
    size = _ref8$size === void 0 ? 20 : _ref8$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2.6 10.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2.6 14.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9"
  }));
};
var ArrowRight = function ArrowRight(_ref9) {
  var _ref9$size = _ref9.size,
    size = _ref9$size === void 0 ? 20 : _ref9$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  }));
};
var MapPin = function MapPin(_ref0) {
  var _ref0$size = _ref0.size,
    size = _ref0$size === void 0 ? 20 : _ref0$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
};
var Clock = function Clock(_ref1) {
  var _ref1$size = _ref1.size,
    size = _ref1$size === void 0 ? 20 : _ref1$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  }));
};
var Settings = function Settings(_ref10) {
  var _ref10$size = _ref10.size,
    size = _ref10$size === void 0 ? 20 : _ref10$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2l-.05.1a2 2 0 0 1-2.81.8l-.12-.07a2 2 0 0 0-2.71.53l-.22.39a2 2 0 0 0 .53 2.71l.1.07a2 2 0 0 1 .8 2.81l-.07.12a2 2 0 0 0 .53 2.71l.22.39a2 2 0 0 0 2.71-.53l.07-.1a2 2 0 0 1 2.81-.8l.12.07a2 2 0 0 0 2.71-.53l.22-.39a2 2 0 0 0-.53-2.71l-.1-.07a2 2 0 0 1-.8-2.81l.07-.12a2 2 0 0 0-.53-2.71l-.22-.39a2 2 0 0 0-2.71.53Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
};
var Users = function Users(_ref11) {
  var _ref11$size = _ref11.size,
    size = _ref11$size === void 0 ? 20 : _ref11$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }));
};
var Repeat = function Repeat(_ref12) {
  var _ref12$size = _ref12.size,
    size = _ref12$size === void 0 ? 20 : _ref12$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m17 2 4 4-4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 22-4-4 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  }));
};
var HelpCircle = function HelpCircle(_ref13) {
  var _ref13$size = _ref13.size,
    size = _ref13$size === void 0 ? 20 : _ref13$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    x2: "12.01",
    y1: "17",
    y2: "17"
  }));
};
var CheckCircle2 = function CheckCircle2(_ref14) {
  var _ref14$size = _ref14.size,
    size = _ref14$size === void 0 ? 20 : _ref14$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  }));
};
var XCircle = function XCircle(_ref15) {
  var _ref15$size = _ref15.size,
    size = _ref15$size === void 0 ? 20 : _ref15$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15 9-6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 9 6 6"
  }));
};
var ChevronDown = function ChevronDown(_ref16) {
  var _ref16$size = _ref16.size,
    size = _ref16$size === void 0 ? 20 : _ref16$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }));
};
var ChevronUp = function ChevronUp(_ref17) {
  var _ref17$size = _ref17.size,
    size = _ref17$size === void 0 ? 20 : _ref17$size;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m18 15-6-6-6 6"
  }));
};
var AlertTriangle = function AlertTriangle(_ref18) {
  var _ref18$size = _ref18.size,
    size = _ref18$size === void 0 ? 20 : _ref18$size,
    _ref18$className = _ref18.className,
    className = _ref18$className === void 0 ? "" : _ref18$className;
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
};
var ShieldAlert = function ShieldAlert(_ref19) {
  var _ref19$size = _ref19.size,
    size = _ref19$size === void 0 ? 20 : _ref19$size,
    _ref19$className = _ref19.className,
    className = _ref19$className === void 0 ? "" : _ref19$className;
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 16h.01"
  }));
};

// --- 2. DỮ LIỆU MENU MỚI ---
var MENU_DATA = {
  tuDon: [{
    name: "Danh từ"
  }, {
    name: "Cụm Danh Từ"
  }, {
    name: "Đại từ"
  }, {
    name: "Động từ"
  }, {
    name: "Tính từ"
  }, {
    name: "Trạng từ"
  }, {
    name: "Giới từ"
  }, {
    name: "Từ nối"
  }],
  cau: [{
    name: "Câu đơn"
  }, {
    name: "Câu ghép"
  }, {
    name: "Câu phức"
  }, {
    name: "Mệnh đề quan hệ"
  }]
};
var ALL_MENU_ITEMS = [].concat(_toConsumableArray(MENU_DATA.tuDon), _toConsumableArray(MENU_DATA.cau));

// --- 3. SIDEBAR TRÁI & HEADER MOBILE ---
var Header = function Header(_ref20) {
  var activePage = _ref20.activePage,
    setActivePage = _ref20.setActivePage;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobileOpen = _useState2[0],
    setIsMobileOpen = _useState2[1];

  // Hàm chuyển bài học
  var handleNavigate = function handleNavigate(e, lessonName) {
    if (e) e.preventDefault();
    setActivePage(lessonName);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileOpen(false);
  };
  var renderNavButton = function renderNavButton(item) {
    var isActive = activePage === item.name;
    return /*#__PURE__*/React.createElement("button", {
      key: item.name,
      onClick: function onClick(e) {
        return handleNavigate(e, item.name);
      },
      className: "w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-bold transition-all duration-150 ".concat(isActive ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20' : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600')
    }, /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, item.name), isActive && /*#__PURE__*/React.createElement("span", {
      className: "w-1.5 h-1.5 rounded-full bg-white shrink-0"
    }));
  };
  var renderSidebarContent = function renderSidebarContent() {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col h-full select-none"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-16 px-4 border-b border-slate-200 flex items-center shrink-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2.5 cursor-pointer group min-w-0",
      onClick: function onClick(e) {
        return handleNavigate(e, "Danh từ");
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors shrink-0"
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-extrabold text-slate-800 text-[15px] leading-tight truncate group-hover:text-blue-700 transition-colors"
    }, "L\u1EA5y L\u1EA1i G\u1ED1c Ti\u1EBFng Anh"), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] font-medium text-slate-400 truncate mt-0.5"
    }, "L\u1ED9 tr\xECnh ng\u1EEF ph\xE1p n\u1EC1n t\u1EA3ng")))), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 overflow-y-auto px-3 py-4 space-y-5"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "px-3.5 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-400"
    }, "T\u1EEB & C\u1EE5m t\u1EEB"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-1"
    }, MENU_DATA.tuDon.map(renderNavButton))), /*#__PURE__*/React.createElement("div", {
      className: "h-px bg-slate-100 mx-2"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "px-3.5 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-400"
    }, "C\u1EA5u tr\xFAc c\xE2u"), /*#__PURE__*/React.createElement("div", {
      className: "space-y-1"
    }, MENU_DATA.cau.map(renderNavButton)))));
  };
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "md:hidden sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-3.5 h-13 py-2.5 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 min-w-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setIsMobileOpen(true);
    },
    className: "p-2 -ml-1.5 text-slate-700 hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-colors shrink-0",
    "aria-label": "M\u1EDF danh m\u1EE5c b\xE0i h\u1ECDc"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "font-extrabold text-slate-800 text-[15px] truncate"
  }, "L\u1EA5y L\u1EA1i G\u1ED1c Ti\u1EBFng Anh")), /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200 shrink-0"
  }, activePage)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 overflow-x-auto hide-scrollbar px-3 py-2 bg-slate-50/90 border-t border-slate-100"
  }, ALL_MENU_ITEMS.map(function (item) {
    var isActive = activePage === item.name;
    return /*#__PURE__*/React.createElement("button", {
      key: item.name,
      onClick: function onClick(e) {
        return handleNavigate(e, item.name);
      },
      className: "shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ".concat(isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200/80 active:bg-slate-100')
    }, item.name);
  }))), isMobileOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden fixed inset-0 z-50 flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-slate-900/40 backdrop-blur-sm",
    onClick: function onClick() {
      return setIsMobileOpen(false);
    }
  }), /*#__PURE__*/React.createElement("aside", {
    className: "relative w-64 max-w-[82vw] bg-white h-full shadow-2xl flex flex-col z-10 animate-pop"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setIsMobileOpen(false);
    },
    className: "absolute top-4 right-3 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
  }, /*#__PURE__*/React.createElement(IconX, {
    size: 20
  })), renderSidebarContent())), /*#__PURE__*/React.createElement("aside", {
    className: "hidden md:flex flex-col shrink-0 w-60 lg:w-64 bg-white border-r border-slate-200 sticky top-0 h-screen z-30"
  }, renderSidebarContent()));
};

// --- 4. COMPONENTS DÙNG CHUNG KHÁC ---

// Dành cho các câu click hiện tiếng Việt
var ClickableSentence = function ClickableSentence(_ref21) {
  var en = _ref21.en,
    vn = _ref21.vn;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-1.5 last:mb-0 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cursor-pointer group inline-flex flex-wrap items-center gap-x-3 gap-y-1 w-full",
    onClick: function onClick() {
      return setShow(!show);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hover:bg-slate-100 transition-colors rounded px-2 py-1 leading-snug text-slate-700 font-medium whitespace-normal",
    dangerouslySetInnerHTML: {
      __html: en
    }
  }), show && /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] sm:text-sm text-slate-600 bg-white px-3 py-1 rounded-lg shadow-sm border border-slate-200 animate-pop border-l-4 border-l-blue-400 whitespace-normal"
  }, "\uD83C\uDDFB\uD83C\uDDF3 ", vn)));
};
var ClickableSentenceInline = function ClickableSentenceInline(_ref22) {
  var en = _ref22.en,
    vn = _ref22.vn;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    show = _useState6[0],
    setShow = _useState6[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cursor-pointer group flex flex-row items-center flex-wrap gap-2 w-full",
    onClick: function onClick() {
      return setShow(!show);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hover:bg-slate-100 transition-colors rounded px-2 py-1.5 leading-relaxed text-slate-700 font-medium whitespace-normal",
    dangerouslySetInnerHTML: {
      __html: en
    }
  }), show && /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] sm:text-sm text-slate-600 bg-yellow-50 px-3 py-1.5 rounded-lg shadow-sm border border-yellow-200 animate-pop border-l-4 border-l-yellow-400 whitespace-normal"
  }, "\uD83C\uDDFB\uD83C\uDDF3 ", vn)));
};
var ClickableItem = function ClickableItem(_ref23) {
  var en = _ref23.en,
    vn = _ref23.vn,
    _ref23$textClass = _ref23.textClass,
    textClass = _ref23$textClass === void 0 ? "text-slate-700" : _ref23$textClass;
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    show = _useState8[0],
    setShow = _useState8[1];
  return /*#__PURE__*/React.createElement("li", {
    className: "mb-1.5 last:mb-0 text-slate-800"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return setShow(!show);
    },
    className: "cursor-pointer transition-colors duration-200 rounded px-1.5 py-0.5 leading-snug font-medium ".concat(show ? 'bg-blue-600 text-white' : "hover:bg-blue-50 ".concat(textClass)),
    dangerouslySetInnerHTML: {
      __html: en
    }
  }), show && /*#__PURE__*/React.createElement("span", {
    className: "ml-2 text-slate-500 text-sm italic animate-pop"
  }, "(", vn, ")"));
};

// Component xử lý hiệu ứng thu gọn/mở rộng cho từng ví dụ
var StructureExample = function StructureExample(_ref24) {
  var ex = _ref24.ex;
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showDetails = _useState0[0],
    setShowDetails = _useState0[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "py-1.5 border-b border-slate-100 last:border-b-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start sm:items-center gap-2.5 sm:gap-3 flex-1 cursor-pointer group",
    onClick: function onClick() {
      return setShowDetails(!showDetails);
    },
    title: "B\u1EA5m \u0111\u1EC3 xem/\u1EA9n chi ti\u1EBFt"
  }, ex.isCorrect ? /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 mt-0.5 sm:mt-0 rounded bg-green-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-green-600 transition-colors"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3.5 w-3.5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 mt-0.5 sm:mt-0 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-sm sm:text-base text-slate-800 leading-relaxed",
    dangerouslySetInnerHTML: {
      __html: ex.html
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowDetails(!showDetails);
    },
    className: "self-start sm:self-auto ml-7 sm:ml-0 px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 text-slate-500 text-[11px] sm:text-xs font-medium hover:bg-slate-50 whitespace-nowrap transition-colors"
  }, showDetails ? "Đóng chi tiết" : "Bấm xem chi tiết")), showDetails && /*#__PURE__*/React.createElement("div", {
    className: "mt-2.5 ml-0 sm:ml-8 pt-2.5 border-t border-slate-100 animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs sm:text-sm text-slate-600 italic mb-2"
  }, "\uD83C\uDDFB\uD83C\uDDF3 ", ex.vn), !ex.isCorrect && /*#__PURE__*/React.createElement("div", {
    className: "text-xs sm:text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 mt-2"
  }, /*#__PURE__*/React.createElement("strong", null, "Gi\u1EA3i th\xEDch:"), " ", ex.exp)));
};

// --- GIAO DIỆN CẤU TRÚC (STRUCTURE ROW) ---
var StructureRow = function StructureRow(_ref25) {
  var struct = _ref25.struct,
    activeToken = _ref25.activeToken,
    setActiveToken = _ref25.setActiveToken;
  var selectedTokenObj = struct.tokens.find(function (t) {
    return t.id === activeToken;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3.5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-5 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50/50 rounded-xl py-3 sm:py-4 px-2.5 sm:px-3 border border-slate-100 mb-5 sm:mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center items-center gap-1.5 sm:gap-3"
  }, struct.tokens.map(function (token, i) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: token.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative flex flex-col items-center ".concat(activeToken === token.id ? 'z-30' : 'z-10')
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setActiveToken(activeToken === token.id ? null : token.id);
      },
      className: "flex flex-col items-center justify-center min-w-[58px] sm:min-w-[76px] py-1.5 px-2 sm:px-3 rounded-xl border-2 transition-all duration-200 ".concat(activeToken === token.id ? 'border-blue-400 ring-2 ring-blue-100 bg-white shadow-sm scale-105' : token.isHighlight ? 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50')
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-sm sm:text-lg ".concat(activeToken === token.id ? 'text-slate-800' : '')
    }, token.code), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] sm:text-[11px] mt-0.5 whitespace-nowrap ".concat(activeToken === token.id ? 'text-slate-500' : '')
    }, token.label)), activeToken === token.id && /*#__PURE__*/React.createElement("div", {
      className: "hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 z-[100] pointer-events-none"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-800 text-white p-4 rounded-xl shadow-xl animate-pop text-center flex flex-col items-center relative pointer-events-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-slate-800"
    }), /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-blue-300 text-sm mb-1"
    }, token.type), /*#__PURE__*/React.createElement("p", {
      className: "text-sm leading-snug text-slate-200"
    }, token.desc)))), i < struct.tokens.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 font-bold text-base sm:text-xl"
    }, "+"));
  })), selectedTokenObj && /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden mt-3 bg-slate-800 text-white p-3 rounded-xl shadow-md animate-pop text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-blue-300 text-xs mb-1"
  }, selectedTokenObj.label, " (", selectedTokenObj.code, ") \u2014 ", selectedTokenObj.type), /*#__PURE__*/React.createElement("p", {
    className: "text-xs leading-relaxed text-slate-200"
  }, selectedTokenObj.desc))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3"
  }, "V\xED d\u1EE5 ph\xE2n t\xEDch:"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 sm:space-y-3"
  }, struct.examples.map(function (ex) {
    return /*#__PURE__*/React.createElement(StructureExample, {
      key: ex.id,
      ex: ex
    });
  }))));
};

// --- Ô NHẬP LIỆU INLINE (Bấm chữ hiện ô) ---
var InlinePronounInput = function InlinePronounInput(_ref26) {
  var expected = _ref26.expected,
    vietnamese = _ref26.vietnamese;
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    val = _useState10[0],
    setVal = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOk = _useState12[0],
    setIsOk = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isError = _useState14[0],
    setIsError = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isEditing = _useState16[0],
    setIsEditing = _useState16[1]; // Trạng thái kiểm tra đang gõ hay hiện chữ
  var inputRef = useRef(null);

  // Tự động focus vào ô nhập liệu khi vừa bấm vào chữ
  useEffect(function () {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      if (val.toLowerCase().trim() === expected.toLowerCase()) {
        setIsOk(true);
        setIsError(false);
      } else if (val.trim() !== "") {
        setIsError(true);
        setTimeout(function () {
          return setIsError(false);
        }, 500); // Rung báo lỗi
      }
    }
  };

  // Nếu chưa bấm (chưa edit) và cũng chưa làm đúng -> Hiện chữ tiếng Việt
  if (!isEditing && !isOk) {
    return /*#__PURE__*/React.createElement("span", {
      onClick: function onClick() {
        return setIsEditing(true);
      },
      className: "mx-1 font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded cursor-pointer hover:bg-blue-100 transition-colors inline-block shadow-sm border border-blue-200/50",
      title: "B\u1EA5m \u0111\u1EC3 \u0111i\u1EC1n t\u1EEB ti\u1EBFng Anh"
    }, vietnamese);
  }

  // Khi đã bấm vào -> Hiện ô nhập liệu
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center mx-1 relative align-middle"
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "text",
    value: isOk ? expected : val,
    onChange: function onChange(e) {
      setVal(e.target.value);
      setIsError(false);
      if (e.target.value.toLowerCase().trim() === expected.toLowerCase()) setIsOk(true);
    },
    onBlur: function onBlur() {
      // Nếu click ra ngoài mà chưa gõ chữ nào thì tự trả lại chữ tiếng Việt
      if (val.trim() === "" && !isOk) setIsEditing(false);
    },
    onKeyDown: handleKeyDown,
    className: "w-16 sm:w-20 border-b-2 outline-none text-center transition-all ".concat(isOk ? 'border-emerald-500 text-emerald-600 font-bold bg-emerald-50' : isError ? 'border-red-500 bg-red-50 text-red-600 font-bold animate-shake' : 'border-blue-500 focus:border-blue-600 bg-blue-50 text-slate-800 font-medium'),
    placeholder: "",
    disabled: isOk
  }));
};
// --- THÊM MỚI: COMPONENT SO SÁNH ĐÚNG/SAI ---
var WrongRightPair = function WrongRightPair(_ref27) {
  var wrong = _ref27.wrong,
    right = _ref27.right,
    note = _ref27.note;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-4 transition-all hover:shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 sm:p-4 bg-red-50/50 border-b border-red-100 flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-red-500 bg-white rounded-full shadow-sm"
  }, /*#__PURE__*/React.createElement(XCircle, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-slate-600 line-through decoration-red-400/50"
  }, wrong)), /*#__PURE__*/React.createElement("div", {
    className: "p-3 sm:p-4 bg-emerald-50/50 flex items-start gap-3 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-1 h-full bg-emerald-400"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-emerald-600 bg-white rounded-full shadow-sm"
  }, /*#__PURE__*/React.createElement(CheckCircle2, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-800 font-medium",
    dangerouslySetInnerHTML: {
      __html: right
    }
  }), note && /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-emerald-700 mt-1.5 bg-emerald-100/50 inline-block px-2 py-0.5 rounded"
  }, note))));
};