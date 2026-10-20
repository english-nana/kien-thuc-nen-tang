"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// BỘ ĐỊNH TUYẾN - Nối tên trên Menu với tên File Component
var LESSON_REGISTRY = {
  "Đại từ": LessonDaiTu,
  "Danh từ": LessonDanhTu,
  "Cụm Danh Từ": LessonCumDanhTu,
  "Động từ": VerbModule,
  "Giới từ": LessonGioiTu,
  "Từ nối": LessonTuNoi,
  "Tính từ": LessonTinhTu,
  "Trạng từ": LessonTrangTu,
  "Câu ghép": LessonCauGhep,
  "Câu phức": LessonVietCau,
  "Mệnh đề quan hệ": LessonMenhDeQuanHe
};
var ComingSoon = function ComingSoon(_ref) {
  var lesson = _ref.lesson;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center py-16 sm:py-24 animate-pop px-4 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.93 4.93l2.83 2.83"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.24 16.24l2.83 2.83"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 12h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.93 19.07l2.83-2.83"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.24 7.76l2.83-2.83"
  }))), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3"
  }, "B\xE0i h\u1ECDc ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600"
  }, "\"", lesson, "\""), " \u0111ang \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt!"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-slate-500 max-w-lg"
  }, "N\u1ED9i dung b\xE0i h\u1ECDc n\xE0y \u0111ang trong qu\xE1 tr\xECnh bi\xEAn so\u1EA1n \u0111\u1EC3 mang l\u1EA1i tr\u1EA3i nghi\u1EC7m h\u1ECDc t\u1EADp t\u1ED1t nh\u1EA5t cho c\xE1c b\u1EA1n h\u1ECDc vi\xEAn. Vui l\xF2ng quay l\u1EA1i sau nh\xE9!"));
};
var App = function App() {
  var _useState = useState("Danh từ"),
    _useState2 = _slicedToArray(_useState, 2),
    activeLesson = _useState2[0],
    setActiveLesson = _useState2[1];

  // Lấy Component tương ứng từ Registry
  var ActiveComponent = LESSON_REGISTRY[activeLesson];
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex flex-col md:flex-row bg-slate-50"
  }, /*#__PURE__*/React.createElement(Header, {
    activePage: activeLesson,
    setActivePage: setActiveLesson
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 min-w-0 w-full px-3 sm:px-6 lg:px-10 xl:px-12 py-4 sm:py-8 pb-20 overflow-x-hidden"
  }, ActiveComponent ? /*#__PURE__*/React.createElement(ActiveComponent, null) : /*#__PURE__*/React.createElement(ComingSoon, {
    lesson: activeLesson
  })));
};
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));