"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SectionTheoryDaiTu = function SectionTheoryDaiTu() {
  var _useState = useState(new Set()),
    _useState2 = _slicedToArray(_useState, 2),
    revealedRows = _useState2[0],
    setRevealedRows = _useState2[1];
  var toggleRow = function toggleRow(index) {
    var newSet = new Set(revealedRows);
    if (newSet.has(index)) newSet["delete"](index);else newSet.add(index);
    setRevealedRows(newSet);
  };
  var renderCell = function renderCell(idx, vi, sub, obj) {
    var isRev = revealedRows.has(idx);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
      className: "border border-slate-200 p-2 sm:p-4 text-center font-semibold cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-all duration-200",
      onClick: function onClick() {
        return toggleRow(idx);
      },
      title: "B\u1EA5m \u0111\u1EC3 xem/\u1EA9n ti\u1EBFng Anh"
    }, vi), /*#__PURE__*/React.createElement("td", {
      className: "border border-slate-200 p-2 sm:p-4 text-center font-bold text-blue-600 text-sm sm:text-lg transition-opacity duration-300 ".concat(isRev ? 'opacity-100' : 'opacity-0')
    }, isRev ? sub : '???'), /*#__PURE__*/React.createElement("td", {
      className: "border border-slate-200 p-2 sm:p-4 text-center font-bold text-rose-600 text-sm sm:text-lg transition-opacity duration-300 ".concat(isRev ? 'opacity-100' : 'opacity-0')
    }, isRev ? obj : '???'));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "mb-10 sm:mb-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white text-sm sm:text-base shrink-0 shadow-md"
  }, "1"), " \u0110\u1EA1i t\u1EEB l\xE0 g\xEC?"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-slate-600 mt-3 leading-relaxed"
  }, "\u0110\u1EA1i t\u1EEB d\xF9ng \u0111\u1EC3 ", /*#__PURE__*/React.createElement("strong", {
    className: "bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded"
  }, "thay th\u1EBF danh t\u1EEB"), ", nh\u1EB1m tr\xE1nh l\u1EB7p l\u1EA1i danh t\u1EEB \u0111\xF3. \u0110\u1EA1i t\u1EEB \u0111\xF3ng vai tr\xF2 ", /*#__PURE__*/React.createElement("strong", {
    className: "text-blue-600"
  }, "ch\u1EE7 ng\u1EEF"), " v\xE0 ", /*#__PURE__*/React.createElement("strong", {
    className: "text-rose-600"
  }, "t\xE2n ng\u1EEF"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50/60 border border-blue-200 text-blue-800 p-3 sm:p-4 rounded-xl mb-5 flex items-start gap-3 shadow-sm animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-0.5 text-blue-600"
  }, /*#__PURE__*/React.createElement(IconInfo, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    className: "block mb-0.5 font-bold text-sm sm:text-base"
  }, "H\u01B0\u1EDBng d\u1EABn t\u01B0\u01A1ng t\xE1c:"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm"
  }, "B\u1EA5m v\xE0o c\xE1c t\u1EEB \u1EDF c\u1ED9t ", /*#__PURE__*/React.createElement("strong", null, "\"Ngh\u0129a\""), " \u0111\u1EC3 hi\u1EC3n th\u1ECB \u0111\u1EA1i t\u1EEB ti\u1EBFng Anh t\u01B0\u01A1ng \u1EE9ng."))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-1 sm:p-2 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-xs sm:text-base text-left border-collapse"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-50 text-slate-700 uppercase tracking-wider text-[11px] sm:text-sm"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "border border-slate-200 p-2 sm:p-4 text-center w-1/4 font-bold"
  }, "NG\xD4I"), /*#__PURE__*/React.createElement("th", {
    className: "border border-slate-200 p-2 sm:p-4 text-center w-1/4 font-bold"
  }, "NGH\u0128A"), /*#__PURE__*/React.createElement("th", {
    className: "border border-slate-200 p-2 sm:p-4 text-center w-1/4 font-bold"
  }, "CH\u1EE6 NG\u1EEE ", /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 normal-case tracking-normal"
  }, "(tr\u01B0\u1EDBc V)")), /*#__PURE__*/React.createElement("th", {
    className: "border border-slate-200 p-2 sm:p-4 text-center w-1/4 font-bold"
  }, "T\xC2N NG\u1EEE ", /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 normal-case tracking-normal"
  }, "(sau V)")))), /*#__PURE__*/React.createElement("tbody", {
    className: "text-slate-700"
  }, /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-slate-50/80 transition-colors"
  }, /*#__PURE__*/React.createElement("td", {
    rowSpan: 2,
    className: "border border-slate-200 p-2 sm:p-4 text-center align-middle bg-slate-50/50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800 text-xs sm:text-base"
  }, "Ng\xF4i 1"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 block"
  }, "(Ng\u01B0\u1EDDi n\xF3i)")), renderCell(0, "Tôi", "I", "me")), /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-slate-50/80 transition-colors"
  }, renderCell(1, "Chúng tôi, tụi tui", "We", "us")), /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-slate-50/80 transition-colors"
  }, /*#__PURE__*/React.createElement("td", {
    className: "border border-slate-200 p-2 sm:p-4 text-center align-middle bg-slate-50/50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800 text-xs sm:text-base"
  }, "Ng\xF4i 2"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 block"
  }, "(Ng\u01B0\u1EDDi nghe)")), renderCell(2, "Bạn, các bạn, các em", "You", "you")), /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-slate-50/80 transition-colors"
  }, /*#__PURE__*/React.createElement("td", {
    rowSpan: 4,
    className: "border border-slate-200 p-2 sm:p-4 text-center align-middle bg-slate-50/50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-slate-800 text-xs sm:text-base"
  }, "Ng\xF4i 3"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 block"
  }, "(\u0110\u01B0\u1EE3c nh\u1EAFc \u0111\u1EBFn)")), renderCell(3, "Anh ta, ông ấy, ổng", "He", "him")), /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-slate-50/80 transition-colors"
  }, renderCell(4, "Cô ta, bà ấy, bả", "She", "her")), /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-slate-50/80 transition-colors"
  }, renderCell(5, "Nó, chuyện đó", "It", "it")), /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-slate-50/80 transition-colors"
  }, renderCell(6, "Bọn họ, tụi nó, đám đó", "They", "them")))))), /*#__PURE__*/React.createElement("section", {
    className: "mb-10 sm:mb-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-500 text-white text-sm sm:text-base shrink-0 shadow-md"
  }, "!"), " C\xE1c \u0110\u1EA1i T\u1EEB D\u1EC5 B\u1ECB Hi\u1EC3u L\u1EA7m")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-slate-200 shadow-sm relative flex group hover:border-indigo-300 transition-colors overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-1.5 bg-indigo-500 shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-5 sm:p-6 w-full"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg sm:text-xl font-bold text-indigo-700 mb-3"
  }, "1. \u0110\u1EA1i t\u1EEB \"They\" v\xE0 \"Them\""), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-700 mb-4 text-sm sm:text-base"
  }, "Thay th\u1EBF cho ", /*#__PURE__*/React.createElement("strong", {
    className: "bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded"
  }, "t\u1EA5t c\u1EA3"), " c\xE1c ", /*#__PURE__*/React.createElement("span", {
    className: "text-indigo-600 font-semibold border-b border-indigo-300 border-dashed pb-0.5"
  }, "danh t\u1EEB \u0111\u1EBFm \u0111\u01B0\u1EE3c s\u1ED1 nhi\u1EC1u"), ", ch\u1EE9 kh\xF4ng ph\u1EA3i ch\u1EC9 c\xF3 danh t\u1EEB ch\u1EC9 ng\u01B0\u1EDDi."), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-100 rounded-xl mt-3 flex flex-col divide-y divide-slate-100 bg-slate-50/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-4 px-4 sm:px-5 space-y-2"
  }, /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "The students are in class. \u2192 <strong class='text-indigo-600'>They</strong> are in class.",
    vn: "H\u1ECDc sinh \u0111ang \u1EDF trong l\u1EDBp. \u2192 H\u1ECD \u0111ang \u1EDF trong l\u1EDBp."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "The teacher is talking to <strong class='text-indigo-600'>them</strong>.",
    vn: "Gi\xE1o vi\xEAn \u0111ang n\xF3i chuy\u1EC7n v\u1EDBi h\u1ECD."
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-4 px-4 sm:px-5 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-400 font-bold mb-2 text-[10px] sm:text-xs uppercase tracking-widest"
  }, "Thay th\u1EBF cho v\u1EADt s\u1ED1 nhi\u1EC1u:"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "The keys are on the table. \u2192 <strong class='text-indigo-600'>They</strong> are on the table.",
    vn: "Nh\u1EEFng chi\u1EBFc ch\xECa kh\xF3a \u1EDF tr\xEAn b\xE0n. \u2192 Ch\xFAng \u1EDF tr\xEAn b\xE0n."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "I can't find <strong class='text-indigo-600'>them</strong>.",
    vn: "T\xF4i kh\xF4ng th\u1EC3 t\xECm th\u1EA5y ch\xFAng."
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-4 px-4 sm:px-5 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-400 font-bold mb-2 text-[10px] sm:text-xs uppercase tracking-widest"
  }, "Thay th\u1EBF cho \xFD t\u01B0\u1EDFng / tr\u1EEBu t\u01B0\u1EE3ng s\u1ED1 nhi\u1EC1u:"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "These ideas are interesting. \u2192 <strong class='text-indigo-600'>They</strong> are interesting.",
    vn: "Nh\u1EEFng \xFD t\u01B0\u1EDFng n\xE0y th\u1EADt th\xFA v\u1ECB. \u2192 Ch\xFAng th\u1EADt th\xFA v\u1ECB."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Let's discuss <strong class='text-indigo-600'>them</strong> later.",
    vn: "H\xE3y th\u1EA3o lu\u1EADn v\u1EC1 ch\xFAng sau."
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-slate-200 shadow-sm relative flex group hover:border-emerald-300 transition-colors overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-1.5 bg-emerald-500 shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "p-5 sm:p-6 w-full"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg sm:text-xl font-bold text-emerald-700 mb-3"
  }, "2. \u0110\u1EA1i t\u1EEB \"It\""), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-700 mb-4 text-sm sm:text-base"
  }, "Thay th\u1EBF cho ", /*#__PURE__*/React.createElement("strong", {
    className: "bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded"
  }, "t\u1EA5t c\u1EA3"), " c\xE1c ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-600 font-semibold border-b border-emerald-300 border-dashed pb-0.5"
  }, "danh t\u1EEB \u0111\u1EBFm \u0111\u01B0\u1EE3c s\u1ED1 \xEDt"), ", ngo\u1EA1i tr\u1EEB danh t\u1EEB ch\u1EC9 ng\u01B0\u1EDDi. N\xF3 c\u0169ng d\xF9ng \u0111\u1EC3 thay th\u1EBF cho Danh \u0111\u1ED9ng t\u1EEB (V-ing)."), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-100 rounded-xl mt-3 flex flex-col divide-y divide-slate-100 bg-slate-50/30"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-4 px-4 sm:px-5"
  }, /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "I bought a phone, and <strong class='text-emerald-600'>it</strong> is very expensive.",
    vn: "T\xF4i \u0111\xE3 mua m\u1ED9t chi\u1EBFc \u0111i\u1EC7n tho\u1EA1i, v\xE0 n\xF3 r\u1EA5t \u0111\u1EAFt."
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-4 px-4 sm:px-5"
  }, /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "The information is useful \u2192 <strong class='text-emerald-600'>It</strong> is useful.",
    vn: "Th\xF4ng tin th\xEC h\u1EEFu \xEDch \u2192 N\xF3 th\xEC h\u1EEFu \xEDch."
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-4 px-4 sm:px-5"
  }, /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Swimming is fun \u2192 <strong class='text-emerald-600'>It</strong> is fun.",
    vn: "B\u01A1i l\u1ED9i th\xEC vui \u2192 N\xF3 th\xEC vui."
  })), /*#__PURE__*/React.createElement("div", {
    className: "py-4 px-4 sm:px-5"
  }, /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Learning English takes time \u2192 <strong class='text-emerald-600'>It</strong> takes time.",
    vn: "Vi\u1EC7c h\u1ECDc ti\u1EBFng Anh c\u1EA7n th\u1EDDi gian \u2192 N\xF3 c\u1EA7n th\u1EDDi gian."
  }))))))));
};
var DAITU_Q1 = [{
  id: 1,
  text: "_____ want to buy a new car.",
  options: ["I", "Me"],
  correct: "I"
}, {
  id: 2,
  text: "The teacher asked _____ to answer the question.",
  options: ["we", "us"],
  correct: "us"
}, {
  id: 3,
  text: "Mary and John are my friends. I often play with _____.",
  options: ["they", "them"],
  correct: "them"
}, {
  id: 4,
  text: "_____ is a beautiful dog.",
  options: ["It", "Its"],
  correct: "It"
}, {
  id: 5,
  text: "Please give _____ that book.",
  options: ["she", "her"],
  correct: "her"
}];
var DAITU_Q2 = [{
  id: 1,
  text: 'Học sinh thưa thầy: "Dạ, [tụi em] đã làm xong bài tập rồi ạ."',
  correct: ["we"]
}, {
  id: 2,
  text: 'Nói về nhóm bạn đang chơi ngoài sân: "Anh thấy [bọn chúng] đang đá bóng không?"',
  correct: ["them"]
}, {
  id: 3,
  text: 'Sếp nói với nhân viên: "[Các em] cố gắng hoàn thành deadline nhé."',
  correct: ["you"]
}, {
  id: 4,
  text: 'Kể về chiếc xe máy mới mua: "Tôi rất thích [nó], đi rất êm."',
  correct: ["it"]
}, {
  id: 5,
  text: 'Nói về những đôi giày: "Tôi có 3 đôi, và [tụi nó] đều là màu đen."',
  correct: ["they"]
}, {
  id: 6,
  text: 'Kể về ông sếp khó tính: "[Ổng] lúc nào cũng nhăn nhó."',
  correct: ["he"]
}, {
  id: 7,
  text: 'Chỉ vào bà hàng xóm: "[Bả] mới mua xe mới kìa."',
  correct: ["she"]
}, {
  id: 8,
  text: 'Nói về một sự kiện bất ngờ: "[Chuyện đó] làm tôi sốc quá."',
  correct: ["it"]
}];
var SectionPracticeDaiTu = function SectionPracticeDaiTu() {
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    ans1 = _useState4[0],
    setAns1 = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showRes1 = _useState6[0],
    setShowRes1 = _useState6[1];
  var _useState7 = useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    ans2 = _useState8[0],
    setAns2 = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showRes2 = _useState0[0],
    setShowRes2 = _useState0[1];
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-10 sm:mb-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white text-sm sm:text-base shrink-0 shadow-md"
  }, "3"), " B\xE0i t\u1EADp th\u1EF1c h\xE0nh")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sm:mb-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-800 mb-2"
  }, "A. V\u1ECB tr\xED Ch\u1EE7 ng\u1EEF & T\xE2n ng\u1EEF"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-3"
  }, DAITU_Q1.map(function (q) {
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "p-3 sm:p-4 bg-slate-50/70 hover:bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row md:items-center gap-3 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 text-sm sm:text-base font-medium text-slate-700"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 mr-2"
    }, q.id, "."), " ", q.text.replace("_____", "______")), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 items-center"
    }, q.options.map(function (opt) {
      var isSelected = ans1[q.id] === opt;
      var isCorrect = showRes1 && opt === q.correct;
      var isWrong = showRes1 && isSelected && opt !== q.correct;
      var btnClass = "px-5 py-2 rounded-lg text-sm font-bold border transition-all duration-200 ";
      if (!showRes1) btnClass += isSelected ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-white text-slate-600 border-slate-300 hover:border-blue-400 hover:text-blue-600";else if (isCorrect) btnClass += "bg-emerald-100 text-emerald-700 border-emerald-400 font-extrabold";else if (isWrong) btnClass += "bg-red-100 text-red-700 border-red-400";else btnClass += "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed";
      return /*#__PURE__*/React.createElement("button", {
        key: opt,
        onClick: function onClick() {
          if (!showRes1) setAns1(_objectSpread(_objectSpread({}, ans1), {}, _defineProperty({}, q.id, opt)));
        },
        className: btnClass
      }, opt);
    }), showRes1 && /*#__PURE__*/React.createElement("div", {
      className: "w-8 flex justify-center shrink-0"
    }, ans1[q.id] === q.correct ? /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-500 font-bold text-lg"
    }, "\u2713") : /*#__PURE__*/React.createElement("span", {
      className: "text-red-500 font-bold text-lg"
    }, "\u2717"))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex gap-3"
  }, !showRes1 ? /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowRes1(true);
    },
    disabled: Object.keys(ans1).length < DAITU_Q1.length,
    className: "px-5 py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-900 disabled:bg-slate-300 transition-colors"
  }, "Ki\u1EC3m tra Ph\u1EA7n A") : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAns1({});
      setShowRes1(false);
    },
    className: "px-5 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 border border-slate-200"
  }, "L\xE0m l\u1EA1i"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sm:mb-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-800 mb-2"
  }, "B. \"D\u1ECBch\" \u0111\u1EA1i t\u1EEB \u0111\u1EDDi th\u01B0\u1EDDng"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4"
  }, DAITU_Q2.map(function (ctx) {
    var parts = ctx.text.split(/\[(.*?)\]/);
    var userAnsClean = (ans2[ctx.id] || "").toLowerCase().trim();
    var isCorrect = ctx.correct.includes(userAnsClean);
    var isErr = ans2["err_".concat(ctx.id)] === true; // trạng thái lỗi cục bộ

    return /*#__PURE__*/React.createElement("div", {
      key: ctx.id,
      className: "p-3 sm:p-4 bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-xl flex flex-col md:flex-row md:items-center gap-3 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 text-sm sm:text-base text-slate-700 leading-relaxed"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-orange-300 font-bold mr-2"
    }, ctx.id, "."), parts[0], /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-orange-700 bg-orange-100 border border-orange-200 px-1.5 py-0.5 mx-1 rounded"
    }, parts[1]), parts[2]), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 w-full md:w-auto"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "flex-1 md:flex-none md:w-32 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border-2 text-base font-bold outline-none text-center transition-all ".concat(isCorrect || showRes2 && isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm' : isErr || showRes2 && !isCorrect ? 'border-red-500 bg-red-50 text-red-700 shadow-sm animate-shake' : 'border-orange-200 focus:border-orange-400 bg-white text-slate-800 focus:shadow-md'),
      value: ans2[ctx.id] || "",
      onChange: function onChange(e) {
        if (!showRes2) setAns2(_objectSpread(_objectSpread({}, ans2), {}, _defineProperty(_defineProperty({}, ctx.id, e.target.value), "err_".concat(ctx.id), false)));
      },
      onKeyDown: function onKeyDown(e) {
        if (e.key === 'Enter' && !showRes2) {
          var clean = (ans2[ctx.id] || "").toLowerCase().trim();
          if (!ctx.correct.includes(clean) && clean !== '') {
            setAns2(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, "err_".concat(ctx.id), true));
            });
            setTimeout(function () {
              return setAns2(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, "err_".concat(ctx.id), false));
              });
            }, 500);
          }
        }
      },
      disabled: showRes2 || isCorrect,
      placeholder: ""
    }), (showRes2 || isCorrect) && /*#__PURE__*/React.createElement("div", {
      className: "shrink-0 w-24 text-sm"
    }, isCorrect ? /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-600 font-bold flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-md"
    }, /*#__PURE__*/React.createElement(IconCheck, {
      size: 16
    }), " \u0110\xFAng") : /*#__PURE__*/React.createElement("span", {
      className: "text-red-600 font-bold bg-red-100 px-2 py-1 rounded-md flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement(IconX, {
      size: 16
    }), " ", ctx.correct[0]))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex gap-3"
  }, !showRes2 ? /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowRes2(true);
    },
    className: "px-5 py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-900 transition-colors"
  }, "Ki\u1EC3m tra Ph\u1EA7n B") : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAns2({});
      setShowRes2(false);
    },
    className: "px-5 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 border border-slate-200"
  }, "L\xE0m l\u1EA1i"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-800"
  }, "C. \u1EE8ng d\u1EE5ng VSTEP ESSAY")), /*#__PURE__*/React.createElement("div", {
    className: "p-5 sm:p-6 bg-white border border-slate-100 rounded-2xl font-serif text-base sm:text-[17px] leading-[2] text-slate-700 shadow-sm text-justify"
  }, /*#__PURE__*/React.createElement("p", {
    className: "indent-6 sm:indent-8 m-0"
  }, "On the one hand, online shopping has many benefits. One advantage is that ", /*#__PURE__*/React.createElement(InlinePronounInput, {
    expected: "it",
    vietnamese: "vi\u1EC7c mua s\u1EAFm tr\u1EF1c tuy\u1EBFn"
  }), " is very convenient. People can buy things anytime and anywhere without leaving their homes, which is very helpful for those who are busy with work or study. As a result, ", /*#__PURE__*/React.createElement(InlinePronounInput, {
    expected: "they",
    vietnamese: "nh\u1EEFng ng\u01B0\u1EDDi n\xE0y"
  }), " can save time and use ", /*#__PURE__*/React.createElement(InlinePronounInput, {
    expected: "it",
    vietnamese: "th\u1EDDi gian"
  }), " for other activities. For example, a worker can shop in the evening instead of going to crowded stores. Another advantage is that online shopping gives people more choices. Customers can look at many products from different shops and compare prices easily. In addition, ", /*#__PURE__*/React.createElement(InlinePronounInput, {
    expected: "they",
    vietnamese: "h\u1ECD"
  }), " can read reviews from other buyers before making a decision. Therefore, ", /*#__PURE__*/React.createElement(InlinePronounInput, {
    expected: "they",
    vietnamese: "h\u1ECD"
  }), " are more likely to choose suitable products at affordable prices."))));
};
var DAITU_GAME1_PAIRS = [{
  pairId: 1,
  text: "Tôi (Chủ ngữ)",
  match: "I"
}, {
  pairId: 2,
  text: "Tôi (Tân ngữ)",
  match: "me"
}, {
  pairId: 3,
  text: "Bọn họ (Chủ ngữ)",
  match: "They"
}, {
  pairId: 4,
  text: "Bọn họ (Tân ngữ)",
  match: "them"
}, {
  pairId: 5,
  text: "Nó (Chủ/Tân ngữ)",
  match: "it"
}, {
  pairId: 6,
  text: "Cô ấy (Tân ngữ)",
  match: "her"
}, {
  pairId: 7,
  text: "Chúng tôi (Chủ ngữ)",
  match: "We"
}, {
  pairId: 8,
  text: "Chúng tôi (Tân ngữ)",
  match: "us"
}];
var DAITU_FAST_QUESTIONS = [{
  noun: "The cats",
  correct: "They",
  options: ["It", "They", "Them", "We"]
}, {
  noun: "My father",
  correct: "He",
  options: ["She", "Him", "He", "It"]
}, {
  noun: "Water",
  correct: "It",
  options: ["They", "She", "It", "We"]
}, {
  noun: "Those ideas",
  correct: "They",
  options: ["It", "Them", "They", "He"]
}, {
  noun: "(to) My parents",
  correct: "them",
  options: ["they", "them", "us", "him"]
}, {
  noun: "You and I",
  correct: "We",
  options: ["They", "Us", "We", "You"]
}];
var SectionGamesDaiTu = function SectionGamesDaiTu() {
  var _useState1 = useState([]),
    _useState10 = _slicedToArray(_useState1, 2),
    cards = _useState10[0],
    setCards = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    flippedIndices = _useState12[0],
    setFlippedIndices = _useState12[1];
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    matchedPairs = _useState14[0],
    setMatchedPairs = _useState14[1];
  var _useState15 = useState(0),
    _useState16 = _slicedToArray(_useState15, 2),
    moves = _useState16[0],
    setMoves = _useState16[1];
  useEffect(function () {
    initG1();
  }, []);
  var initG1 = function initG1() {
    var initialCards = [];
    DAITU_GAME1_PAIRS.forEach(function (p) {
      initialCards.push({
        id: "vi-".concat(p.pairId),
        pairId: p.pairId,
        text: p.text,
        type: 'vi'
      });
      initialCards.push({
        id: "en-".concat(p.pairId),
        pairId: p.pairId,
        text: p.match,
        type: 'en'
      });
    });
    setCards(initialCards.sort(function () {
      return Math.random() - 0.5;
    }));
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
  };
  var handleCardClick = function handleCardClick(index) {
    if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedPairs.includes(cards[index].pairId)) return;
    var newFlipped = [].concat(_toConsumableArray(flippedIndices), [index]);
    setFlippedIndices(newFlipped);
    if (newFlipped.length === 2) {
      setMoves(function (m) {
        return m + 1;
      });
      var _ref = [cards[newFlipped[0]], cards[newFlipped[1]]],
        f = _ref[0],
        s = _ref[1];
      if (f.pairId === s.pairId && f.type !== s.type) {
        setMatchedPairs(function (prev) {
          return [].concat(_toConsumableArray(prev), [f.pairId]);
        });
        setFlippedIndices([]);
      } else {
        setTimeout(function () {
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };
  var _useState17 = useState(0),
    _useState18 = _slicedToArray(_useState17, 2),
    g2Q = _useState18[0],
    setG2Q = _useState18[1];
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    g2Score = _useState20[0],
    setG2Score = _useState20[1];
  var _useState21 = useState('start'),
    _useState22 = _slicedToArray(_useState21, 2),
    g2State = _useState22[0],
    setG2State = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    g2Feedback = _useState24[0],
    setG2Feedback = _useState24[1];
  var startG2 = function startG2() {
    setG2Q(0);
    setG2Score(0);
    setG2State('playing');
    setG2Feedback(null);
  };
  var answerG2 = function answerG2(opt) {
    if (g2Feedback) return;
    var isCorrect = opt === DAITU_FAST_QUESTIONS[g2Q].correct;
    setG2Feedback(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setG2Score(function (s) {
      return s + 1;
    });
    setTimeout(function () {
      if (g2Q < DAITU_FAST_QUESTIONS.length - 1) {
        setG2Q(function (c) {
          return c + 1;
        });
        setG2Feedback(null);
      } else {
        setG2State('end');
      }
    }, 800);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-10 sm:mb-14"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white text-sm sm:text-base shrink-0 shadow-md"
  }, "4"), " Mini-Games \xD4n T\u1EADp")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-1.5 bg-blue-500"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 text-base sm:text-lg"
  }, "\uD83E\uDDE9 L\u1EADt Th\u1EBB Tr\xED Nh\u1EDB"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 sm:gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
  }, "L\u01B0\u1EE3t l\u1EADt: ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-600"
  }, moves)), /*#__PURE__*/React.createElement("button", {
    onClick: initG1,
    className: "text-slate-500 hover:text-blue-600 hover:bg-blue-50 bg-slate-100 p-2 rounded-lg transition-colors border border-slate-200",
    title: "Ch\u01A1i l\u1EA1i"
  }, /*#__PURE__*/React.createElement(IconRefresh, {
    size: 16
  })))), matchedPairs.length === DAITU_GAME1_PAIRS.length ? /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center justify-center animate-pop py-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-6xl mb-4"
  }, "\uD83C\uDFC6"), /*#__PURE__*/React.createElement("h4", {
    className: "text-2xl font-bold text-emerald-600 mb-2"
  }, "Tr\xED nh\u1EDB tuy\u1EC7t \u0111\u1EC9nh!"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-500 text-base"
  }, "B\u1EA1n \u0111\xE3 ho\xE0n th\xE0nh sau ", moves, " l\u01B0\u1EE3t l\u1EADt th\u1EBB.")) : /*#__PURE__*/React.createElement("div", {
    className: "flex-1 grid grid-cols-4 gap-2 sm:gap-3"
  }, cards.map(function (card, index) {
    var isFlipped = flippedIndices.includes(index) || matchedPairs.includes(card.pairId);
    var isMatched = matchedPairs.includes(card.pairId);
    return /*#__PURE__*/React.createElement("button", {
      key: card.id,
      onClick: function onClick() {
        return handleCardClick(index);
      },
      disabled: isFlipped,
      className: "w-full aspect-[4/3] rounded-xl font-bold text-[11px] sm:text-sm transition-all duration-300 flex items-center justify-center p-1 sm:p-2 text-center border-2 ".concat(isMatched ? 'bg-emerald-50 border-emerald-200 text-emerald-600 opacity-50 cursor-default shadow-none scale-95' : isFlipped ? card.type === 'vi' ? 'bg-indigo-50 border-indigo-300 text-indigo-700 shadow-inner' : 'bg-rose-50 border-rose-300 text-rose-700 shadow-inner' : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:-translate-y-1')
    }, isFlipped ? card.text : /*#__PURE__*/React.createElement("span", {
      className: "text-2xl sm:text-3xl opacity-30 font-medium"
    }, "?"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg flex flex-col relative overflow-hidden group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-700"
  }, /*#__PURE__*/React.createElement(IconGamepad, {
    size: 160
  })), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-1.5 bg-amber-500"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex-1 flex flex-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white text-lg mb-2"
  }, "\u26A1 Ph\u1EA3n X\u1EA1 \u0110\u1EA1i T\u1EEB"), g2State === 'start' && /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center justify-center py-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: startG2,
    className: "bg-amber-500 hover:bg-amber-400 text-slate-900 text-base font-bold px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
  }, "B\u1EAET \u0110\u1EA6U NGAY")), g2State === 'playing' && /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col justify-center animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-6 text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider"
  }, /*#__PURE__*/React.createElement("span", null, "C\xE2u: ", g2Q + 1, "/", DAITU_FAST_QUESTIONS.length), /*#__PURE__*/React.createElement("span", {
    className: "bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
  }, "\u0110i\u1EC3m: ", /*#__PURE__*/React.createElement("span", {
    className: "text-amber-400"
  }, g2Score))), /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 mb-2 text-xs sm:text-sm"
  }, "Thay th\u1EBF cho"), /*#__PURE__*/React.createElement("div", {
    className: "text-4xl sm:text-5xl font-extrabold transition-all duration-300 ".concat(g2Feedback === 'correct' ? 'text-emerald-400 scale-110' : g2Feedback === 'wrong' ? 'text-rose-400 animate-shake' : 'text-white')
  }, "\"", DAITU_FAST_QUESTIONS[g2Q].noun, "\"")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4 max-w-sm mx-auto w-full"
  }, DAITU_FAST_QUESTIONS[g2Q].options.map(function (opt, i) {
    var btnClass = "py-3.5 text-lg font-bold rounded-xl border-b-4 transition-all ";
    if (g2Feedback) btnClass += opt === DAITU_FAST_QUESTIONS[g2Q].correct ? "bg-emerald-500 border-emerald-700 text-white" : "bg-slate-800 border-slate-900 text-slate-600 opacity-50";else btnClass += "bg-slate-700 border-slate-800 text-slate-200 hover:bg-amber-500 hover:border-amber-700 hover:text-slate-900 active:translate-y-1 active:border-b-0";
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return answerG2(opt);
      },
      disabled: g2Feedback !== null,
      className: btnClass
    }, opt);
  }))), g2State === 'end' && /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center justify-center py-6 animate-pop"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-3xl font-bold text-white mb-2"
  }, "Ho\xE0n th\xE0nh!"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg text-slate-300 mb-8"
  }, "\u0110i\u1EC3m c\u1EE7a b\u1EA1n: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-amber-400 text-4xl ml-2"
  }, g2Score), " / ", DAITU_FAST_QUESTIONS.length), /*#__PURE__*/React.createElement("button", {
    onClick: startG2,
    className: "bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
  }, "Ch\u01A1i l\u1EA1i"))))));
};
var LessonDaiTu = function LessonDaiTu() {
  return /*#__PURE__*/React.createElement("div", {
    className: "animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 sm:mb-12 border-l-4 border-blue-600 pl-4 sm:pl-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
  }, "\u0110\u1EA1i T\u1EEB (Pronouns)"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-slate-500 mt-2 font-medium"
  }, "H\u1ECDc c\xE1ch thay th\u1EBF danh t\u1EEB \u0111\u1EC3 c\xE2u v\u0103n g\u1ECDn g\xE0ng, t\u1EF1 nhi\xEAn h\u01A1n v\xE0 tr\xE1nh l\u1EB7p t\u1EEB.")), /*#__PURE__*/React.createElement(SectionTheoryDaiTu, null), /*#__PURE__*/React.createElement(SectionPracticeDaiTu, null), /*#__PURE__*/React.createElement(SectionGamesDaiTu, null));
};