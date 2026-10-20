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
var FormulaBoxGioiTu = function FormulaBoxGioiTu(_ref) {
  var formula = _ref.formula,
    note = _ref.note;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-md inline-block border border-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono text-base sm:text-lg font-bold tracking-wide text-amber-400"
  }, formula), note && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-300 mt-1 opacity-80"
  }, note));
};

// Component hiển thị Ving với đuôi ing subscript
var Ving = function Ving() {
  return /*#__PURE__*/React.createElement(Fragment, null, "V", /*#__PURE__*/React.createElement("sub", {
    className: "text-[0.65em] font-bold align-sub ml-[1px]"
  }, "ing"));
};

// ==========================================
// KHỐI NỘI DUNG CHÍNH - MÔ ĐUN GIỚI TỪ
// ==========================================
var LessonGioiTu = function LessonGioiTu() {
  return /*#__PURE__*/React.createElement("div", {
    className: "animate-pop w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 sm:mb-12 border-l-4 border-indigo-600 pl-4 sm:pl-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
  }, "Gi\u1EDBi T\u1EEB (Prepositions)"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-slate-500 mt-2 font-medium"
  }, "Nh\u1EEFng \"gia v\u1ECB\" nh\u1ECF b\xE9 nh\u01B0ng c\xF3 v\xF5, gi\xFAp k\u1EBFt d\xEDnh c\xE1c m\u1EA3nh gh\xE9p t\u1EEB v\u1EF1ng th\xE0nh m\u1ED9t c\xE2u ho\xE0n ch\u1EC9nh m\u01B0\u1EE3t m\xE0.")), /*#__PURE__*/React.createElement(SectionConcept, null), /*#__PURE__*/React.createElement(SectionCategories, null), /*#__PURE__*/React.createElement(SectionPracticePhrases, null), /*#__PURE__*/React.createElement(SectionWriting, null));
};

// ------------------------------------------
// PHẦN 1: KHÁI NIỆM CƠ BẢN
// ------------------------------------------
var ConceptExample = function ConceptExample(_ref2) {
  var prep = _ref2.prep,
    noun = _ref2.noun,
    vn = _ref2.vn;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap sm:flex-nowrap items-center w-full p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow gap-2 sm:gap-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 sm:w-20 shrink-0 font-black text-blue-600 bg-blue-50 px-2 py-1.5 sm:py-2 rounded-xl text-base sm:text-lg text-center"
  }, prep), /*#__PURE__*/React.createElement("div", {
    className: "w-8 sm:w-10 shrink-0 text-slate-300 font-bold text-lg sm:text-xl text-center"
  }, "+"), /*#__PURE__*/React.createElement("div", {
    className: "w-24 sm:w-32 shrink-0 font-bold text-amber-600 bg-amber-50 px-2 py-1.5 sm:py-2 rounded-xl text-base sm:text-lg text-center"
  }, noun), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:block w-px h-8 bg-slate-200 mx-3 sm:mx-4 shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-slate-500 font-medium whitespace-nowrap w-full sm:w-auto mt-1 sm:mt-0 ml-1 sm:ml-0 text-sm sm:text-base"
  }, vn));
};
var SectionConcept = function SectionConcept() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md"
  }, "1"), "Kh\xE1i Ni\u1EC7m C\u01A1 B\u1EA3n"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]"
  }, "Hi\u1EC3u \u0111\xFAng b\u1EA3n ch\u1EA5t c\u1EE7a C\u1EE5m gi\u1EDBi t\u1EEB ch\u1EC9 trong 1 ph\xFAt.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#f0f4f8] rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 w-full max-w-sm mx-auto md:mx-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white px-5 py-5 sm:px-6 sm:py-6 rounded-2xl shadow-sm border border-slate-100 mb-5 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3"
  }, "C\xF4ng th\u1EE9c sinh t\u1ED3n"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl sm:text-3xl font-black flex items-center justify-center gap-2 sm:gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600"
  }, "Prep"), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300"
  }, "+"), /*#__PURE__*/React.createElement("span", {
    className: "text-amber-500"
  }, "Noun")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs sm:text-sm font-medium text-slate-500 mt-3"
  }, "(Gi\u1EDBi t\u1EEB) + (Danh t\u1EEB / ", /*#__PURE__*/React.createElement(Ving, null), ")")), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-700 text-base sm:text-lg leading-relaxed font-medium text-justify"
  }, "Gi\u1EDBi t\u1EEB ", /*#__PURE__*/React.createElement("strong", {
    className: "text-red-600 font-bold"
  }, "kh\xF4ng bao gi\u1EDD"), " \u0111\u1EE9ng m\u1ED9t m\xECnh. Ph\xEDa sau n\xF3 lu\xF4n ph\u1EA3i c\xF5ng theo m\u1ED9t ", /*#__PURE__*/React.createElement("strong", {
    className: "bg-yellow-200 text-yellow-900 px-1.5 py-0.5 rounded whitespace-nowrap"
  }, "Danh t\u1EEB"), " ho\u1EB7c ", /*#__PURE__*/React.createElement("strong", {
    className: "bg-yellow-200 text-yellow-900 px-1.5 py-0.5 rounded whitespace-nowrap"
  }, "C\u1EE5m danh t\u1EEB"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 w-full space-y-3 sm:space-y-4"
  }, /*#__PURE__*/React.createElement(ConceptExample, {
    prep: "in",
    noun: "the city",
    vn: "trong th\xE0nh ph\u1ED1"
  }), /*#__PURE__*/React.createElement(ConceptExample, {
    prep: "at",
    noun: "school",
    vn: "t\u1EA1i tr\u01B0\u1EDDng h\u1ECDc"
  }), /*#__PURE__*/React.createElement(ConceptExample, {
    prep: "with",
    noun: "friends",
    vn: "c\xF9ng v\u1EDBi b\u1EA1n b\xE8"
  }))));
};

// ------------------------------------------
// PHẦN 2: PHÂN LOẠI
// ------------------------------------------
var GT_CATEGORIES = [{
  id: 'place',
  icon: /*#__PURE__*/React.createElement(MapPin, null),
  title: "1. Nơi chốn (Place)",
  color: "blue",
  formula: "in / on / at + place",
  illustration: /*#__PURE__*/React.createElement("div", {
    className: "mt-3 mb-2 flex flex-wrap gap-2 items-center justify-around p-3 sm:p-4 bg-blue-50/50 rounded-xl border border-blue-100 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 sm:w-12 sm:h-12 border-2 border-blue-400 rounded-lg flex items-center justify-center bg-white shadow-sm relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 bg-blue-500 rounded-full"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-[11px] font-black mt-2 text-blue-800 tracking-widest"
  }, "IN")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 sm:w-12 sm:h-12 border-b-4 border-blue-400 flex items-end justify-center pb-1.5 bg-white shadow-sm rounded-t-lg relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 bg-blue-500 rounded-full"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-[11px] font-black mt-2 text-blue-800 tracking-widest"
  }, "ON")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-sm border border-blue-200 relative"
  }, /*#__PURE__*/React.createElement(MapPin, {
    className: "text-blue-500 w-5 h-5 sm:w-6 sm:h-6"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-[11px] font-black mt-2 text-blue-800 tracking-widest"
  }, "AT")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border border-blue-200 relative gap-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 bg-slate-300 rounded-sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-3 h-3 bg-blue-500 rounded-full"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-[11px] font-black mt-2 text-blue-800 tracking-widest"
  }, "NEAR"))),
  tips: [{
    t: "in",
    d: "không gian bao quanh (in a room, in the workplace)"
  }, {
    t: "on",
    d: "trên bề mặt (on the table)"
  }, {
    t: "at",
    d: "điểm nhỏ (at school, at home)"
  }, {
    t: "near / close to",
    d: "gần nơi nào đó (near the park)"
  }],
  examples: [{
    en: "Many people work <span class='highlight-prep'>in</span> <span class='highlight-noun'>the workplace</span>.",
    vn: "Nhiều người làm việc tại nơi làm việc."
  }, {
    en: "Students learn <span class='highlight-prep'>at</span> <span class='highlight-noun'>school</span>.",
    vn: "Học sinh học tại trường."
  }, {
    en: "The book is <span class='highlight-prep'>on</span> <span class='highlight-noun'>the table</span>.",
    vn: "Quyển sách ở trên bàn."
  }, {
    en: "The hospital is <span class='highlight-prep'>close to</span> <span class='highlight-noun'>my house</span>.",
    vn: "Bệnh viện ở gần nhà tôi."
  }, {
    en: "Please wait <span class='highlight-prep'>outside</span> <span class='highlight-noun'>the office</span>.",
    vn: "Vui lòng đợi bên ngoài văn phòng."
  }, {
    en: "They travel <span class='highlight-prep'>around</span> <span class='highlight-noun'>the world</span>.",
    vn: "Họ đi du lịch vòng quanh thế giới."
  }]
}, {
  id: 'time',
  icon: /*#__PURE__*/React.createElement(Clock, null),
  title: "2. Thời gian (Time)",
  color: "emerald",
  formula: "in / on / at + time",
  tips: [{
    t: "in",
    d: "khoảng thời gian dài (in the past, in recent years)"
  }, {
    t: "on",
    d: "ngày cụ thể (on Monday)"
  }, {
    t: "at",
    d: "thời điểm cụ thể (at 8 AM)"
  }, {
    t: "for",
    d: "khoảng kéo dài (for a long time)"
  }, {
    t: "since",
    d: "từ mốc quá khứ (since 2010)"
  }, {
    t: "during",
    d: "trong suốt (during the meeting)"
  }, {
    t: "until",
    d: "cho đến khi (until tomorrow)"
  }, {
    t: "before / after",
    d: "trước / sau (after dinner)"
  }],
  examples: [{
    en: "We lived there <span class='highlight-prep'>in</span> <span class='highlight-noun'>the past</span>.",
    vn: "Chúng tôi đã sống ở đó trong quá quá khứ."
  }, {
    en: "We will meet <span class='highlight-prep'>on</span> <span class='highlight-noun'>Monday</span>.",
    vn: "Chúng ta sẽ gặp nhau vào thứ Hai."
  }, {
    en: "The class starts <span class='highlight-prep'>at</span> <span class='highlight-noun'>8 AM</span>.",
    vn: "Lớp học bắt đầu lúc 8 giờ sáng."
  }, {
    en: "They have waited <span class='highlight-prep'>for</span> <span class='highlight-noun'>a long time</span>.",
    vn: "Họ đã chờ đợi trong một thời gian dài."
  }, {
    en: "He has worked here <span class='highlight-prep'>since</span> <span class='highlight-noun'>2020</span>.",
    vn: "Anh ấy đã làm việc ở đây từ năm 2020."
  }, {
    en: "Please turn off your phone <span class='highlight-prep'>during</span> <span class='highlight-noun'>the exam</span>.",
    vn: "Vui lòng tắt điện thoại trong suốt bài thi."
  }, {
    en: "The store will be closed <span class='highlight-prep'>until</span> <span class='highlight-noun'>tomorrow</span>.",
    vn: "Cửa hàng sẽ đóng cửa cho đến ngày mai."
  }]
}, {
  id: 'method',
  icon: /*#__PURE__*/React.createElement(Settings, null),
  title: "3. Cách thức (Method)",
  color: "amber",
  formula: [/*#__PURE__*/React.createElement(Fragment, {
    key: "1"
  }, "by + ", /*#__PURE__*/React.createElement(Ving, null)), "through + N"],
  tips: [{
    t: /*#__PURE__*/React.createElement(Fragment, null, "by ", /*#__PURE__*/React.createElement(Ving, null)),
    d: "bằng cách làm gì đó"
  }, {
    t: "through N",
    d: "thông qua cái gì đó"
  }],
  examples: [{
    en: "Workers communicate <span class='highlight-prep'>through</span> <span class='highlight-noun'>emails</span>.",
    vn: "Nhân viên giao tiếp thông qua email."
  }, {
    en: "We learn <span class='highlight-prep'>by</span> <span class='highlight-noun'>observing these items</span>.",
    vn: "Chúng ta học bằng cách quan sát những món đồ này."
  }, {
    en: "You can find it <span class='highlight-prep'>on</span> <span class='highlight-noun'>the Internet</span>.",
    vn: "Bạn có thể tìm thấy nó trên mạng Internet."
  }]
}, {
  id: 'relationship',
  icon: /*#__PURE__*/React.createElement(Users, null),
  title: "4. Mối quan hệ",
  color: "purple",
  formula: "with + person",
  tips: [{
    t: "with",
    d: "cùng với (ai đó/cái gì)"
  }],
  examples: [{
    en: "They study <span class='highlight-prep'>with</span> <span class='highlight-noun'>friends and family</span>.",
    vn: "Họ học cùng với bạn bè và gia đình."
  }, {
    en: "Students should interact <span class='highlight-prep'>with</span> <span class='highlight-noun'>their peers</span>.",
    vn: "Học sinh nên tương tác với bạn đồng trang lứa."
  }, {
    en: "She is arguing <span class='highlight-prep'>with</span> <span class='highlight-noun'>her brother</span>.",
    vn: "Cô ấy đang cãi nhau với anh trai."
  }]
}, {
  id: 'contrast',
  icon: /*#__PURE__*/React.createElement(Repeat, null),
  title: "5. Thay thế / Tương phản",
  color: "rose",
  formula: /*#__PURE__*/React.createElement(Fragment, null, "instead of / rather than + ", /*#__PURE__*/React.createElement(Ving, null), " / N"),
  tips: [{
    t: "instead of",
    d: /*#__PURE__*/React.createElement(Fragment, null, "thay v\xEC l\xE0m vi\u1EC7c n\xE0y (", /*#__PURE__*/React.createElement(Ving, null), ") th\xEC l\xE0m vi\u1EC7c kia")
  }, {
    t: "rather than",
    d: "hơn là / thay vì"
  }],
  examples: [{
    en: "<span class='highlight-prep'>Instead of</span> <span class='highlight-noun'>focusing on their work</span>, they play games.",
    vn: "Thay vì tập trung vào công việc, họ lại chơi game."
  }, {
    en: "We drank tea <span class='highlight-prep'>instead of</span> <span class='highlight-noun'>coffee</span>.",
    vn: "Chúng tôi đã uống trà thay vì cà phê."
  }, {
    en: "We should take action <span class='highlight-prep'>rather than</span> <span class='highlight-noun'>complaining</span>.",
    vn: "Chúng ta nên hành động hơn là phàn nàn."
  }]
}];
var GT_THEME_COLORS = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-800',
    icon: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-800'
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-800',
    icon: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-800'
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-800',
    icon: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-800'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-800',
    icon: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-800'
  },
  rose: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-800',
    icon: 'text-rose-600',
    badge: 'bg-rose-100 text-rose-800'
  }
};
var SectionCategories = function SectionCategories() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md"
  }, "2"), "B\u1EA3ng T\xF3m T\u1EAFt Ph\xE2n Lo\u1EA1i"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]"
  }, "H\u1EC7 th\u1ED1ng h\xF3a c\xE1c gi\u1EDBi t\u1EEB th\xF4ng d\u1EE5ng nh\u1EA5t theo t\u1EEBng m\u1EE5c \u0111\xEDch s\u1EED d\u1EE5ng.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8"
  }, GT_CATEGORIES.map(function (cat, idx) {
    var t = GT_THEME_COLORS[cat.color];
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "bg-white rounded-2xl border-2 ".concat(t.border, " shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md ").concat(cat.id === 'contrast' ? 'md:col-span-2' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(t.bg, " p-3 sm:p-4 border-b ").concat(t.border, " flex items-center gap-3")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(t.icon, " bg-white p-2 rounded-lg shadow-sm")
    }, /*#__PURE__*/React.createElement("div", {
      className: "scale-90 sm:scale-100"
    }, cat.icon)), /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-base sm:text-lg ".concat(t.text)
    }, cat.title)), /*#__PURE__*/React.createElement("div", {
      className: "p-4 flex-1 flex flex-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-4 flex flex-wrap gap-2 ".concat(cat.id === 'contrast' ? 'justify-center' : '')
    }, Array.isArray(cat.formula) ? cat.formula.map(function (f, i) {
      return /*#__PURE__*/React.createElement(FormulaBoxGioiTu, {
        key: i,
        formula: f
      });
    }) : /*#__PURE__*/React.createElement(FormulaBoxGioiTu, {
      formula: cat.formula
    })), /*#__PURE__*/React.createElement("div", {
      className: "mb-4 flex flex-wrap gap-2 ".concat(cat.id === 'contrast' ? 'justify-center' : '')
    }, cat.tips.map(function (tip, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "text-xs font-semibold px-2 sm:px-2.5 py-1.5 rounded-lg border ".concat(t.border, " bg-slate-50 flex items-center gap-1.5")
      }, /*#__PURE__*/React.createElement("span", {
        className: t.badge + ' px-1.5 py-0.5 rounded whitespace-nowrap'
      }, tip.t), /*#__PURE__*/React.createElement("span", {
        className: "text-slate-600"
      }, tip.d));
    })), cat.illustration && cat.illustration, /*#__PURE__*/React.createElement("div", {
      className: "mt-auto pt-4 border-t border-slate-100 bg-slate-50/50 p-3 rounded-xl space-y-2"
    }, cat.examples.map(function (ex, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "w-full"
      }, cat.id === 'contrast' ? /*#__PURE__*/React.createElement(ClickableSentenceInline, {
        en: ex.en,
        vn: ex.vn
      }) : /*#__PURE__*/React.createElement(ClickableSentence, {
        en: ex.en,
        vn: ex.vn
      }));
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-rose-50 border-2 border-rose-200 rounded-2xl p-4 sm:p-7 shadow-sm relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-4 opacity-10 pointer-events-none"
  }, /*#__PURE__*/React.createElement(HelpCircle, {
    className: "w-16 h-16 sm:w-24 sm:h-24 text-rose-500"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg sm:text-xl font-extrabold text-rose-800 mb-3 sm:mb-4 flex items-center gap-2 relative z-10"
  }, /*#__PURE__*/React.createElement(HelpCircle, {
    className: "w-5 h-5 sm:w-6 sm:h-6 shrink-0"
  }), "\u0110\u1EB7c bi\u1EC7t ch\xFA \xFD: Nh\xF3m Nguy\xEAn nh\xE2n (Cause)"), /*#__PURE__*/React.createElement("p", {
    className: "text-rose-900/80 mb-5 relative z-10 font-medium text-sm sm:text-base"
  }, "H\u1ECDc sinh r\u1EA5t hay nh\u1EA7m l\u1EABn gi\u1EEFa T\u1EEB n\u1ED1i (Because) v\xE0 Gi\u1EDBi t\u1EEB (Because of). H\xE3y nh\u1EDB c\xF4ng th\u1EE9c sinh t\u1ED3n:"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-rose-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-slate-400 text-xs uppercase tracking-wider mb-2"
  }, "D\xF9ng Li\xEAn T\u1EEB"), /*#__PURE__*/React.createElement("div", {
    className: "text-base sm:text-lg font-black text-slate-800 mb-3 border-b pb-2"
  }, "Because + ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600"
  }, "S + V")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-600"
  }, "I stayed home ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, "because"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600 border-b border-dashed border-blue-300"
  }, "it rained heavily"), "."), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-400 mt-1"
  }, "(Theo sau l\xE0 1 m\u1EC7nh \u0111\u1EC1 c\xF3 Ch\u1EE7 ng\u1EEF + \u0110\u1ED9ng t\u1EEB)")), /*#__PURE__*/React.createElement("div", {
    className: "bg-rose-100 p-4 rounded-xl border border-rose-300 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-rose-500 text-xs uppercase tracking-wider mb-2"
  }, "D\xF9ng Gi\u1EDBi T\u1EEB"), /*#__PURE__*/React.createElement("div", {
    className: "text-base sm:text-lg font-black text-rose-900 mb-3 border-b border-rose-200 pb-2"
  }, "Because of + ", /*#__PURE__*/React.createElement("span", {
    className: "text-amber-600"
  }, "Noun")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-rose-900"
  }, "I stayed home ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-700"
  }, "because of"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-amber-600 border-b border-dashed border-amber-400 font-bold"
  }, "the heavy rain"), "."), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-rose-700/70 mt-1"
  }, "(Theo sau CH\u1EC8 L\xC0 c\u1EE5m danh t\u1EEB)")))));
};

// ------------------------------------------
// PHẦN 3: BÀI TẬP DỊCH CỤM TỪ (THỰC HÀNH MỚI)
// ------------------------------------------
var PhraseInput = function PhraseInput(_ref3) {
  var item = _ref3.item;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var _useState3 = useState('idle'),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1]; // 'idle', 'correct', 'error'
  var textareaRef = useRef(null);

  // Normalize user input
  var cleanUser = val.trim().toLowerCase().replace(/\s+/g, ' ');

  // Build valid answers list
  var validAnswers = [item.en.trim().toLowerCase().replace(/\s+/g, ' ')];
  if (item.acceptedAnswers) {
    var alt = item.acceptedAnswers.map(function (a) {
      return a.trim().toLowerCase().replace(/\s+/g, ' ');
    });
    validAnswers = [].concat(_toConsumableArray(validAnswers), _toConsumableArray(alt));
  }
  var isMatch = status === 'correct';

  // Tự động co giãn chiều cao của Textarea khi nội dung thay đổi
  useEffect(function () {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 4 + 'px';
    }
  }, [val, status]);
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Ngăn không cho tạo dòng mới khi nhấn Enter
      if (validAnswers.includes(cleanUser)) {
        setStatus('correct');
      } else if (cleanUser !== '') {
        setStatus('error');
        setTimeout(function () {
          return setStatus('idle');
        }, 500); // Tắt hiệu ứng lỗi sau 0.5s
      }
    }
  };
  var handleChange = function handleChange(e) {
    setVal(e.target.value);
    if (status !== 'idle') setStatus('idle');
  };
  var containerClass = 'bg-slate-50 border-slate-200';
  var inputClass = 'border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-white';
  if (isMatch) {
    containerClass = 'bg-emerald-50 border-emerald-300 shadow-sm';
    inputClass = 'border-emerald-400 bg-emerald-100/50 text-emerald-800 font-bold';
  } else if (status === 'error') {
    inputClass = 'border-red-500 bg-red-50 text-red-800 font-bold animate-shake';
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 transition-colors ".concat(containerClass)
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:w-1/2 text-sm sm:text-base font-medium text-slate-700"
  }, item.vn), /*#__PURE__*/React.createElement("div", {
    className: "sm:w-1/2 relative flex items-center"
  }, /*#__PURE__*/React.createElement("textarea", {
    ref: textareaRef,
    rows: 1,
    value: val,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    placeholder: "",
    className: "w-full py-3 px-4 pr-10 rounded-xl border-2 outline-none text-sm sm:text-base transition-colors resize-none overflow-hidden leading-relaxed ".concat(inputClass),
    readOnly: isMatch
  }), isMatch && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-0 bottom-0 flex items-center justify-center text-emerald-500 font-bold animate-pop pointer-events-none"
  }, /*#__PURE__*/React.createElement(CheckCircle2, {
    className: "w-5 h-5"
  }))));
};
var GT_PHRASE_GROUPS = [{
  title: "📍 Nhóm Nơi Chốn",
  items: [{
    vn: "ở nhà",
    en: "at home"
  }, {
    vn: "ở nơi làm việc",
    en: "at work",
    acceptedAnswers: ["at work", "in the workplace"]
  }, {
    vn: "tại trường học",
    en: "at school"
  }, {
    vn: "trong các tòa nhà kính",
    en: "in glass buildings"
  }, {
    vn: "trong lớp học",
    en: "in class",
    acceptedAnswers: ["in class", "in the classroom"]
  }, {
    vn: "bên ngoài văn phòng",
    en: "outside the office"
  }, {
    vn: "bên trong văn phòng",
    en: "inside the office",
    acceptedAnswers: ["inside the office", "in the office"]
  }, {
    vn: "vòng quanh thế giới",
    en: "around the world"
  }]
}, {
  title: "⏱ Nhóm Thời Gian",
  items: [{
    vn: "trong quá khứ",
    en: "in the past"
  }, {
    vn: "bất cứ lúc nào",
    en: "at any time"
  }, {
    vn: "vào ban ngày",
    en: "during the day",
    acceptedAnswers: ["during the day", "during the daytime"]
  }, {
    vn: "trong một thời gian dài",
    en: "for a long time"
  }, {
    vn: "trong những năm gần đây",
    en: "in recent years"
  }]
}, {
  title: "🎯 Nhóm Nguyên Nhân & Cách Thức",
  items: [{
    vn: "bởi vì ánh nắng mặt trời gắt",
    en: "because of strong sunlight"
  }, {
    vn: "thông qua email",
    en: "through emails"
  }, {
    vn: "thông qua các cuộc họp trực tuyến",
    en: "through online meetings"
  }, {
    vn: "trên mạng Internet",
    en: "on the Internet"
  }, {
    vn: "bằng cách nhìn những vật thể này",
    en: "by seeing these objects"
  }, {
    vn: "bằng cách quan sát những món đồ này",
    en: "by observing these items"
  }]
}, {
  title: "🤝 Nhóm Mối Quan Hệ & Tương Phản",
  items: [{
    vn: "với nhau",
    en: "with each other"
  }, {
    vn: "với bạn bè và gia đình",
    en: "with friends and family"
  }, {
    vn: "với giáo viên",
    en: "with teachers"
  }, {
    vn: "với bạn đồng trang lứa",
    en: "with their peers"
  }, {
    vn: "với những người khác",
    en: "with others",
    acceptedAnswers: ["with others", "with other people"]
  }, {
    vn: "thay vì tập trung vào công việc của họ",
    en: "instead of focusing on their work",
    acceptedAnswers: ["instead of focusing on their work", "rather than focusing on their work"]
  }, {
    vn: "hơn là phàn nàn",
    en: "rather than complaining",
    acceptedAnswers: ["rather than complaining", "instead of complaining"]
  }]
}];
var SectionPracticePhrases = function SectionPracticePhrases() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md"
  }, "3"), "Th\u1EED Th\xE1ch G\xF5 C\u1EE5m T\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]"
  }, "Luy\u1EC7n t\u1EADp ghi nh\u1EDB ngay 25 c\u1EE5m gi\u1EDBi t\u1EEB \"\u0103n \u0111i\u1EC3m\" trong b\xE0i vi\u1EBFt ti\u1EBFng Anh.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500"
  }, "H\xE3y nh\u1EADp ti\u1EBFng Anh t\u01B0\u01A1ng \u1EE9ng v\xE0o \xF4 tr\u1ED1ng. N\u1EBFu \u0111\xFAng, \xF4 s\u1EBD t\u1EF1 \u0111\u1ED9ng \u0111\u1ED5i m\xE0u xanh.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, GT_PHRASE_GROUPS.map(function (group, gIdx) {
    return /*#__PURE__*/React.createElement("div", {
      key: gIdx
    }, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 text-lg mb-4 border-b border-slate-100 pb-2"
    }, group.title), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4"
    }, group.items.map(function (item, iIdx) {
      return /*#__PURE__*/React.createElement(PhraseInput, {
        key: iIdx,
        item: item
      });
    })));
  }))));
};

// ------------------------------------------
// PHẦN 4: THỰC HÀNH VIẾT CÂU
// ------------------------------------------
var GT_WRITING_SENTENCES = [{
  id: 1,
  subject: "Many students can study",
  options: [{
    id: 'opt1_1',
    text: "at school",
    isCorrect: true,
    type: "Nơi chốn"
  }, {
    id: 'opt1_2',
    text: "because of school",
    isCorrect: false
  }, {
    id: 'opt1_3',
    text: "in home",
    isCorrect: false
  }],
  correctFull: "Many students can study <strong class='text-blue-600'>at school</strong>.",
  vn: "Nhiều học sinh có thể học tại trường."
}, {
  id: 2,
  subject: "Workers communicate",
  options: [{
    id: 'opt2_1',
    text: "by emails",
    isCorrect: false
  }, {
    id: 'opt2_2',
    text: "through online meetings",
    isCorrect: true,
    type: "Cách thức"
  }, {
    id: 'opt2_3',
    text: "in the Internet",
    isCorrect: false
  }],
  correctFull: "Workers communicate <strong class='text-blue-600'>through online meetings</strong>.",
  vn: "Nhân viên giao tiếp thông qua các cuộc họp trực tuyến."
}, {
  id: 3,
  subject: "Many people work",
  options: [{
    id: 'opt3_1',
    text: "at home nowadays",
    isCorrect: true,
    type: "Nơi chốn + Thời gian"
  }, {
    id: 'opt3_2',
    text: "on the office",
    isCorrect: false
  }, {
    id: 'opt3_3',
    text: "with the workplace",
    isCorrect: false
  }],
  correctFull: "Many people work <strong class='text-blue-600'>at home nowadays</strong>.",
  vn: "Nhiều người làm việc tại nhà ngày nay."
}, {
  id: 4,
  subject: "She is waiting",
  options: [{
    id: 'opt4_1',
    text: "at the bus stop",
    isCorrect: true,
    type: "Nơi chốn"
  }, {
    id: 'opt4_2',
    text: "in the bus stop",
    isCorrect: false
  }, {
    id: 'opt4_3',
    text: "on the bus stop",
    isCorrect: false
  }],
  correctFull: "She is waiting <strong class='text-blue-600'>at the bus stop</strong>.",
  vn: "Cô ấy đang chờ ở trạm xe buýt."
}, {
  id: 5,
  subject: "The store will be closed",
  options: [{
    id: 'opt5_1',
    text: "until tomorrow",
    isCorrect: true,
    type: "Thời gian"
  }, {
    id: 'opt5_2',
    text: "since tomorrow",
    isCorrect: false
  }, {
    id: 'opt5_3',
    text: "in tomorrow",
    isCorrect: false
  }],
  correctFull: "The store will be closed <strong class='text-blue-600'>until tomorrow</strong>.",
  vn: "Cửa hàng sẽ đóng cửa cho đến ngày mai."
}, {
  id: 6,
  subject: "We improved our English",
  options: [{
    id: 'opt6_1',
    text: "by practicing every day",
    isCorrect: true,
    type: "Cách thức"
  }, {
    id: 'opt6_2',
    text: "in practicing every day",
    isCorrect: false
  }, {
    id: 'opt6_3',
    text: "on practicing every day",
    isCorrect: false
  }],
  correctFull: "We improved our English <strong class='text-blue-600'>by practicing every day</strong>.",
  vn: "Chúng tôi đã cải thiện tiếng Anh của mình bằng cách luyện tập mỗi ngày."
}, {
  id: 7,
  subject: "They walked slowly",
  options: [{
    id: 'opt7_1',
    text: "near the river",
    isCorrect: true,
    type: "Nơi chốn"
  }, {
    id: 'opt7_2',
    text: "in the river",
    isCorrect: false
  }, {
    id: 'opt7_3',
    text: "on the river",
    isCorrect: false
  }],
  correctFull: "They walked slowly <strong class='text-blue-600'>near the river</strong>.",
  vn: "Họ đi bộ chầm chậm gần con sông."
}, {
  id: 8,
  subject: "He has lived here",
  options: [{
    id: 'opt8_1',
    text: "since 2015",
    isCorrect: true,
    type: "Thời gian"
  }, {
    id: 'opt8_2',
    text: "for 2015",
    isCorrect: false
  }, {
    id: 'opt8_3',
    text: "in 2015",
    isCorrect: false
  }],
  correctFull: "He has lived here <strong class='text-blue-600'>since 2015</strong>.",
  vn: "Anh ấy đã sống ở đây từ năm 2015."
}, {
  id: 9,
  subject: "I prefer reading books",
  options: [{
    id: 'opt9_1',
    text: "instead of watching TV",
    isCorrect: true,
    type: "Thay thế"
  }, {
    id: 'opt9_2',
    text: "by watching TV",
    isCorrect: false
  }, {
    id: 'opt9_3',
    text: "with watching TV",
    isCorrect: false
  }],
  correctFull: "I prefer reading books <strong class='text-blue-600'>instead of watching TV</strong>.",
  vn: "Tôi thích đọc sách hơn thay vì xem TV."
}, {
  id: 10,
  subject: "She solved the problem",
  options: [{
    id: 'opt10_1',
    text: "with her teammates",
    isCorrect: true,
    type: "Mối quan hệ"
  }, {
    id: 'opt10_2',
    text: "by her teammates",
    isCorrect: false
  }, {
    id: 'opt10_3',
    text: "at her teammates",
    isCorrect: false
  }],
  correctFull: "She solved the problem <strong class='text-blue-600'>with her teammates</strong>.",
  vn: "Cô ấy đã giải quyết vấn đề cùng với đồng đội của mình."
}, {
  id: 11,
  subject: "We should take action",
  options: [{
    id: 'opt11_1',
    text: "rather than complaining",
    isCorrect: true,
    type: "Tương phản"
  }, {
    id: 'opt11_2',
    text: "by complaining",
    isCorrect: false
  }, {
    id: 'opt11_3',
    text: "with complaining",
    isCorrect: false
  }],
  correctFull: "We should take action <strong class='text-blue-600'>rather than complaining</strong>.",
  vn: "Chúng ta nên hành động hơn là phàn nàn."
}];
var SectionWriting = function SectionWriting() {
  var _useState5 = useState(1),
    _useState6 = _slicedToArray(_useState5, 2),
    step = _useState6[0],
    setStep = _useState6[1];
  var _useState7 = useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    answers = _useState8[0],
    setAnswers = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showResults = _useState0[0],
    setShowResults = _useState0[1];
  var handleSelectOption = function handleSelectOption(qId, opt) {
    if (showResults) return;
    setAnswers(_objectSpread(_objectSpread({}, answers), {}, _defineProperty({}, qId, opt)));
  };
  var isAllAnswered = Object.keys(answers).length === GT_WRITING_SENTENCES.length;
  var checkAnswers = function checkAnswers() {
    setShowResults(true);
  };
  var resetExercise = function resetExercise() {
    setAnswers({});
    setShowResults(false);
    setStep(1);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md"
  }, "4"), "Th\u1EF1c H\xE0nh Gh\xE9p C\xE2u"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]"
  }, "V\u1EADn d\u1EE5ng gi\u1EDBi t\u1EEB \u0111\u1EC3 m\u1EDF r\u1ED9ng c\xE2u v\u0103n, gi\xFAp c\xE2u chi ti\u1EBFt v\xE0 t\u1EF1 nhi\xEAn h\u01A1n.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 rounded-3xl p-4 sm:p-8 shadow-xl relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mb-6 sm:mb-8 relative z-10 w-full overflow-x-auto hide-scrollbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 p-1.5 rounded-xl border border-slate-700 flex gap-1 min-w-max"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return !showResults && setStep(1);
    },
    className: "px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ".concat(step === 1 ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white')
  }, "B\u01B0\u1EDBc 1: Khung c\xE2u"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return !showResults && setStep(2);
    },
    className: "px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ".concat(step === 2 ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white')
  }, "B\u01B0\u1EDBc 2: L\u1EAFp r\xE1p"), /*#__PURE__*/React.createElement("button", {
    disabled: true,
    className: "px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ".concat(step === 3 ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-600 cursor-not-allowed')
  }, "B\u01B0\u1EDBc 3: Ho\xE0n ch\u1EC9nh"))), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "animate-pop relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl sm:text-2xl font-bold text-white mb-2"
  }, "Cung c\u1EA5p Khung C\xE2u (Sentence Frame)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-400"
  }, "M\u1ED9t c\xE2u ti\u1EBFng Anh c\u01A1 b\u1EA3n ch\u1EC9 c\u1EA7n ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-400"
  }, "Ch\u1EE7 ng\u1EEF (S)"), " v\xE0 ", /*#__PURE__*/React.createElement("strong", {
    className: "text-blue-400"
  }, "\u0110\u1ED9ng t\u1EEB (V)"), " l\xE0 \u0111\xE3 c\xF3 ngh\u0129a.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 border border-slate-700 p-4 sm:p-5 rounded-2xl text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-500 text-xs sm:text-sm mb-2 sm:mb-3"
  }, "Ch\u1EE7 \u0111\u1EC1: H\u1ECDc t\u1EADp"), /*#__PURE__*/React.createElement("div", {
    className: "text-lg sm:text-xl font-bold text-white"
  }, "Students ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-400"
  }, "can study"), "...")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 border border-slate-700 p-4 sm:p-5 rounded-2xl text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-500 text-xs sm:text-sm mb-2 sm:mb-3"
  }, "Ch\u1EE7 \u0111\u1EC1: C\xF4ng vi\u1EC7c"), /*#__PURE__*/React.createElement("div", {
    className: "text-lg sm:text-xl font-bold text-white"
  }, "Workers ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-400"
  }, "communicate"), "..."))), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-6 sm:mt-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStep(2);
    },
    className: "bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-transform hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.3)] w-full sm:w-auto"
  }, "Ti\u1EBFp t\u1EE5c: L\u1EAFp r\xE1p Gi\u1EDBi t\u1EEB"))), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "animate-pop relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl sm:text-2xl font-bold text-white mb-2"
  }, "Ch\u1ECDn C\u1EE5m Gi\u1EDBi T\u1EEB ph\xF9 h\u1EE3p"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-400"
  }, "\u0110i\u1EC1n c\u1EE5m gi\u1EDBi t\u1EEB v\xE0o ch\u1ED7 tr\u1ED1ng \u0111\u1EC3 t\u1EA1o ra c\xE2u chi ti\u1EBFt h\u01A1n.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, GT_WRITING_SENTENCES.map(function (q, idx) {
    var _answers$q$id;
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "bg-slate-800 border border-slate-700 p-4 sm:p-5 rounded-2xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 border-b border-slate-700 pb-3 sm:pb-4 leading-relaxed"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500 mr-2"
    }, idx + 1, "."), q.subject, " ", /*#__PURE__*/React.createElement("span", {
      className: "inline-block min-w-[80px] sm:min-w-[120px] mx-1 sm:mx-2 text-center px-2 ".concat(answers[q.id] ? 'text-emerald-400 font-bold' : 'text-slate-500')
    }, ((_answers$q$id = answers[q.id]) === null || _answers$q$id === void 0 ? void 0 : _answers$q$id.text) || "________")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3"
    }, q.options.map(function (opt) {
      var _answers$q$id2;
      var isSelected = ((_answers$q$id2 = answers[q.id]) === null || _answers$q$id2 === void 0 ? void 0 : _answers$q$id2.id) === opt.id;
      return /*#__PURE__*/React.createElement("button", {
        key: opt.id,
        onClick: function onClick() {
          return handleSelectOption(q.id, opt);
        },
        className: "px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all border-2 text-left sm:text-center w-full sm:w-auto ".concat(isSelected ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-slate-400 hover:bg-slate-600')
      }, opt.text);
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-6 sm:mt-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      checkAnswers();
      setStep(3);
    },
    disabled: !isAllAnswered,
    className: "w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all shadow-md"
  }, "Ho\xE0n th\xE0nh & Xem k\u1EBFt qu\u1EA3"))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "animate-pop relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-6 sm:mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block bg-emerald-500 text-white p-3 rounded-full mb-3 sm:mb-4 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
  }, /*#__PURE__*/React.createElement(CheckCircle2, {
    className: "w-6 h-6 sm:w-8 sm:h-8"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl sm:text-2xl font-bold text-white mb-2"
  }, "C\xE2u Ho\xE0n Ch\u1EC9nh Tuy\u1EC7t V\u1EDDi!"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-400 px-2"
  }, "Ch\u1EC9 b\u1EB1ng c\xE1ch th\xEAm ", /*#__PURE__*/React.createElement("strong", {
    className: "text-emerald-400"
  }, "C\u1EE5m gi\u1EDBi t\u1EEB"), ", c\xE2u v\u0103n c\u1EE7a b\u1EA1n \u0111\xE3 tr\u1EDF n\xEAn d\xE0i v\xE0 \u0111\u1EE7 \xFD h\u01A1n r\u1EA5t nhi\u1EC1u.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, GT_WRITING_SENTENCES.map(function (q) {
    var userOpt = answers[q.id];
    var isCorrect = userOpt === null || userOpt === void 0 ? void 0 : userOpt.isCorrect;
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "p-4 sm:p-5 rounded-2xl border ".concat(isCorrect ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-rose-900/30 border-rose-500/50')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-2"
    }, isCorrect ? /*#__PURE__*/React.createElement("span", {
      className: "bg-emerald-500 text-[10px] sm:text-xs font-bold text-white px-2 py-0.5 rounded"
    }, "\u0110\xDANG") : /*#__PURE__*/React.createElement("span", {
      className: "bg-rose-500 text-[10px] sm:text-xs font-bold text-white px-2 py-0.5 rounded"
    }, "SAI"), isCorrect && userOpt.type && /*#__PURE__*/React.createElement("span", {
      className: "border border-emerald-500/50 text-emerald-400 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded"
    }, "Ch\u1EC9: ", userOpt.type)), !isCorrect && /*#__PURE__*/React.createElement("div", {
      className: "text-sm sm:text-base text-slate-400 line-through mb-2"
    }, q.subject, " ", userOpt === null || userOpt === void 0 ? void 0 : userOpt.text, "."), /*#__PURE__*/React.createElement("div", {
      className: "text-base sm:text-lg font-medium text-white mb-2",
      dangerouslySetInnerHTML: {
        __html: q.correctFull
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-xs sm:text-sm text-emerald-300/80"
    }, "\uD83C\uDDFB\uD83C\uDDF3 ", q.vn));
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center mt-6 sm:mt-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: resetExercise,
    className: "w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-colors border border-slate-600"
  }, "L\xE0m l\u1EA1i t\u1EEB \u0111\u1EA7u")))));
};