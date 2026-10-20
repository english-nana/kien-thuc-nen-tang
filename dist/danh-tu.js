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
var DT_STRUCTURES = [{
  tokens: [{
    id: 's1',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: true,
    type: 'Danh từ / Đại từ',
    desc: 'Chủ thể gây ra hành động trong câu.'
  }, {
    id: 'v1',
    label: 'Động từ',
    code: 'V',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Hành động hoặc trạng thái của chủ ngữ.'
  }, {
    id: 'o1',
    label: 'Tân ngữ',
    code: 'O',
    isHighlight: true,
    type: 'Danh từ / Đại từ',
    desc: 'Đối tượng chịu tác động trực tiếp của hành động.'
  }],
  examples: [{
    id: 1,
    html: "<span class='text-red-600 font-bold'>Students</span> use <span class='text-red-600 font-bold'>computers</span> every day.",
    vn: "Học sinh sử dụng máy tính mỗi ngày.",
    isCorrect: true,
    exp: ""
  }, {
    id: 2,
    html: "<span class='text-red-600 font-bold'>My mother</span> cooks <span class='text-red-600 font-bold'>dinner</span> for the family.",
    vn: "Mẹ tôi nấu bữa tối cho gia đình.",
    isCorrect: true,
    exp: ""
  }, {
    id: 3,
    html: "<span class='text-red-600 font-bold'>Educate</span> changes our life.",
    vn: "Giáo dục thay đổi cuộc sống của chúng ta.",
    isCorrect: false,
    exp: "Sai vì 'Educate' là Động từ, không thể đứng đầu câu làm Chủ ngữ. Phải dùng Danh từ: Education changes our life."
  }, {
    id: 4,
    html: "Money cannot buy <span class='text-red-600 font-bold'>happy</span>.",
    vn: "Tiền không thể mua được hạnh phúc.",
    isCorrect: false,
    exp: "Sai vì 'happy' là Tính từ, không thể đứng sau động từ 'buy' để làm Tân ngữ. Phải dùng Danh từ: Money cannot buy happiness."
  }]
}, {
  tokens: [{
    id: 's2',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: true,
    type: 'Danh từ / Đại từ',
    desc: 'Chủ thể được miêu tả.'
  }, {
    id: 'be2',
    label: 'Động từ tobe',
    code: 'To be',
    isHighlight: false,
    type: 'Động từ liên kết',
    desc: 'Liên kết chủ ngữ với đặc điểm của nó (am/is/are...).'
  }, {
    id: 'adj2',
    label: 'Tính từ',
    code: 'Adj',
    isHighlight: false,
    type: 'Tính từ',
    desc: 'Từ miêu tả tính chất, đặc điểm của chủ ngữ.'
  }],
  examples: [{
    id: 5,
    html: "<span class='text-red-600 font-bold'>Health</span> is very important.",
    vn: "Sức khỏe thì rất quan trọng.",
    isCorrect: true,
    exp: ""
  }, {
    id: 6,
    html: "<span class='text-red-600 font-bold'>The traffic</span> is terrible today.",
    vn: "Giao thông hôm nay thật tệ.",
    isCorrect: true,
    exp: ""
  }, {
    id: 7,
    html: "<span class='text-red-600 font-bold'>Healthy</span> is very important.",
    vn: "Sức khỏe thì rất quan trọng.",
    isCorrect: false,
    exp: "Sai vì 'Healthy' (khỏe mạnh) là Tính từ, không thể làm Chủ ngữ. Phải dùng Danh từ: Health (sức khỏe) is very important."
  }, {
    id: 8,
    html: "<span class='text-red-600 font-bold'>Learn English</span> is necessary.",
    vn: "Việc học tiếng Anh là cần thiết.",
    isCorrect: false,
    exp: "Sai vì 'Learn' là Động từ nguyên mẫu, không thể làm Chủ ngữ. Phải chuyển thành Danh động từ (V-ing): Learning English is necessary."
  }]
}, {
  tokens: [{
    id: 's3',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: true,
    type: 'Danh từ',
    desc: 'Chủ thể thực hiện hành động.'
  }, {
    id: 'v3',
    label: 'Động từ',
    code: 'V',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Hành động cho/tặng/gửi...'
  }, {
    id: 'io3',
    label: 'Tân ngữ gián tiếp',
    code: 'IO',
    isHighlight: true,
    type: 'Danh từ',
    desc: 'Người/vật nhận được lợi ích từ hành động.'
  }, {
    id: 'do3',
    label: 'Tân ngữ trực tiếp',
    code: 'DO',
    isHighlight: true,
    type: 'Danh từ',
    desc: 'Vật bị tác động trực tiếp.'
  }],
  examples: [{
    id: 9,
    html: "<span class='text-red-600 font-bold'>The teacher</span> gave <span class='text-red-600 font-bold'>the students</span> <span class='text-red-600 font-bold'>homework</span>.",
    vn: "Giáo viên đã giao bài tập về nhà cho học sinh.",
    isCorrect: true,
    exp: ""
  }, {
    id: 10,
    html: "<span class='text-red-600 font-bold'>The company</span> sent <span class='text-red-600 font-bold'>customers</span> an <span class='text-red-600 font-bold'>email</span>.",
    vn: "Công ty đã gửi một email cho khách hàng.",
    isCorrect: true,
    exp: ""
  }, {
    id: 11,
    html: "My parents gave my brother <span class='text-red-600 font-bold'>advise</span>.",
    vn: "Bố mẹ tôi đã cho em trai tôi lời khuyên.",
    isCorrect: false,
    exp: "Sai vì 'advise' (khuyên bảo) là Động từ, không thể làm Tân ngữ trực tiếp. Phải dùng Danh từ: My parents gave my brother advice (lời khuyên)."
  }, {
    id: 12,
    html: "The manager offered the <span class='text-red-600 font-bold'>employ</span> a new job.",
    vn: "Người quản lý đã đề nghị cho nhân viên một công việc mới.",
    isCorrect: false,
    exp: "Sai vì 'employ' (tuyển dụng) là Động từ, không thể làm Tân ngữ gián tiếp chỉ người nhận. Phải dùng Danh từ chỉ người: The manager offered the employee (nhân viên) a new job."
  }]
}];
var DT_CONCRETE_GROUPS = [{
  group: "Người",
  icon: "👤",
  words: [{
    en: "student",
    vn: "học sinh"
  }, {
    en: "teacher",
    vn: "giáo viên"
  }, {
    en: "worker",
    vn: "công nhân"
  }, {
    en: "customer",
    vn: "khách hàng"
  }]
}, {
  group: "Sự vật",
  icon: "📦",
  words: [{
    en: "bicycle",
    vn: "xe đạp"
  }, {
    en: "computer",
    vn: "máy tính"
  }, {
    en: "gift",
    vn: "món quà"
  }, {
    en: "uniform",
    vn: "đồng phục"
  }]
}, {
  group: "Địa điểm",
  icon: "📍",
  words: [{
    en: "school",
    vn: "trường học"
  }, {
    en: "library",
    vn: "thư viện"
  }, {
    en: "hospital",
    vn: "bệnh viện"
  }, {
    en: "museum",
    vn: "bảo tàng"
  }]
}, {
  group: "Hiện tượng",
  icon: "⚡",
  words: [{
    en: "rain",
    vn: "cơn mưa"
  }, {
    en: "pollution",
    vn: "sự ô nhiễm"
  }, {
    en: "accident",
    vn: "tai nạn"
  }, {
    en: "flood",
    vn: "lũ lụt"
  }]
}];
var DT_ABSTRACT_GROUPS = [{
  group: "Khái niệm",
  icon: "💡",
  words: [{
    en: "health",
    vn: "sức khỏe"
  }, {
    en: "environment",
    vn: "môi trường"
  }, {
    en: "solution",
    vn: "giải pháp"
  }, {
    en: "experience",
    vn: "kinh nghiệm"
  }]
}, {
  group: "Cảm xúc",
  icon: "❤️",
  words: [{
    en: "happiness",
    vn: "hạnh phúc"
  }, {
    en: "stress",
    vn: "căng thẳng"
  }, {
    en: "fear",
    vn: "nỗi sợ"
  }, {
    en: "sadness",
    vn: "nỗi buồn"
  }]
}, {
  group: "Hoạt động",
  note: "V-ing",
  icon: "🏃",
  words: [{
    en: "travelling",
    vn: "việc du lịch"
  }, {
    en: "learning",
    vn: "việc học"
  }, {
    en: "shopping",
    vn: "việc mua sắm"
  }, {
    en: "exercising",
    vn: "tập thể dục"
  }]
}];
var DanhTuSectionDefinition = function DanhTuSectionDefinition() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    revealed = _useState2[0],
    setRevealed = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showAll = _useState4[0],
    setShowAll = _useState4[1];
  var toggleWord = function toggleWord(key) {
    setRevealed(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, !prev[key]));
    });
  };
  var renderRow = function renderRow(item, prefix, accentColor) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.group,
      className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-slate-100 last:border-b-0 last:pb-0 first:pt-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-36 shrink-0 flex items-center gap-2 font-bold text-slate-700 text-sm sm:text-base"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-lg"
    }, item.icon), /*#__PURE__*/React.createElement("span", null, item.group), item.note && /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-semibold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded"
    }, item.note)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2 flex-1"
    }, item.words.map(function (w, wIdx) {
      var key = "".concat(prefix, "-").concat(wIdx);
      var isOpen = showAll || revealed[key];
      return /*#__PURE__*/React.createElement("button", {
        key: wIdx,
        onClick: function onClick() {
          return toggleWord(key);
        },
        className: "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all border ".concat(isOpen ? accentColor : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100')
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-semibold"
      }, w.en), isOpen && /*#__PURE__*/React.createElement("span", {
        className: "ml-1.5 opacity-90 font-normal"
      }, "(", w.vn, ")"));
    })));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "2"), "\u0110\u1ECBnh ngh\u0129a Danh t\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "Chia l\xE0m ", /*#__PURE__*/React.createElement("strong", null, "2 nh\xF3m ch\xEDnh"), ". B\u1EA5m v\xE0o t\u1EEBng t\u1EEB ti\u1EBFng Anh \u0111\u1EC3 xem ngh\u0129a ti\u1EBFng Vi\u1EC7t.")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowAll(!showAll);
    },
    className: "self-start sm:self-auto px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
  }, showAll ? "Ẩn nghĩa tiếng Việt" : "Hiện tất cả nghĩa")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold"
  }, "\uD83D\uDC40"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 text-base sm:text-lg"
  }, "1. Nh\xF3m C\u1EE5 th\u1EC3 (Nh\xECn th\u1EA5y \u0111\u01B0\u1EE3c)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "Con ng\u01B0\u1EDDi, \u0111\u1ED3 v\u1EADt, n\u01A1i ch\u1ED1n, hi\u1EC7n t\u01B0\u1EE3ng xung quanh ta"))), /*#__PURE__*/React.createElement("div", null, DT_CONCRETE_GROUPS.map(function (g, i) {
    return renderRow(g, "c-".concat(i), 'bg-blue-600 text-white border-blue-600');
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold"
  }, "\uD83D\uDCAD"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 text-base sm:text-lg"
  }, "2. Nh\xF3m Tr\u1EEBu t\u01B0\u1EE3ng (Kh\xF4ng ch\u1EA1m v\xE0o \u0111\u01B0\u1EE3c)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "Nh\u1EEFng th\u1EE9 ch\u1EC9 c\u1EA3m nh\u1EADn ho\u1EB7c g\u1ECDi t\xEAn \u2014 r\u1EA5t d\u1EC5 nh\u1EA7m v\u1EDBi T\xEDnh t\u1EEB / \u0110\u1ED9ng t\u1EEB"))), /*#__PURE__*/React.createElement("div", null, DT_ABSTRACT_GROUPS.map(function (g, i) {
    return renderRow(g, "a-".concat(i), 'bg-amber-600 text-white border-amber-600');
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 bg-slate-50 px-3.5 py-2.5 rounded-xl"
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "M\u1EB9o nh\u1EDB:"), " Khi n\xF3i v\u1EC1 ", /*#__PURE__*/React.createElement("em", null, "s\u1EE9c kh\u1ECFe (health)"), ", ", /*#__PURE__*/React.createElement("em", null, "ni\u1EC1m vui (happiness)"), " hay ", /*#__PURE__*/React.createElement("em", null, "vi\u1EC7c h\u1ECDc (learning)"), ", ch\xFAng \u0111\u1EC1u l\xE0 ", /*#__PURE__*/React.createElement("strong", null, "Danh t\u1EEB"), " v\xE0 \u0111\u1EE9ng l\xE0m Ch\u1EE7 ng\u1EEF / T\xE2n ng\u1EEF trong c\xE2u."))));
};
var DT_NOUN_SUFFIXES = [{
  category: "Người / Nghề nghiệp",
  items: [{
    suffix: "-er",
    meaning: "Người làm việc",
    examples: "teacher, worker"
  }, {
    suffix: "-or",
    meaning: "Người làm việc",
    examples: "actor, doctor"
  }, {
    suffix: "-ist",
    meaning: "Chuyên gia",
    examples: "scientist, tourist"
  }, {
    suffix: "-ee",
    meaning: "Người nhận HĐ",
    examples: "employee, interviewee"
  }]
}, {
  category: "Trạng thái / Tính chất",
  items: [{
    suffix: "-ness",
    meaning: "Sự / Trạng thái",
    examples: "happiness, sadness"
  }, {
    suffix: "-ity / -ty",
    meaning: "Tính chất",
    examples: "safety, reality"
  }, {
    suffix: "-ship",
    meaning: "Mối quan hệ",
    examples: "friendship, scholarship"
  }]
}, {
  category: "Hành động / Kết quả",
  items: [{
    suffix: "-tion/-sion",
    meaning: "Quá trình",
    examples: "education, decision"
  }, {
    suffix: "-ment",
    meaning: "Kết quả HĐ",
    examples: "improvement, equipment"
  }, {
    suffix: "-ance/-ence",
    meaning: "Trạng thái",
    examples: "importance, difference"
  }]
}];
var SuffixFlipCard = function SuffixFlipCard(_ref) {
  var item = _ref.item;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isFlipped = _useState6[0],
    setIsFlipped = _useState6[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "flip-card h-24 sm:h-28 cursor-pointer ".concat(isFlipped ? 'flipped' : ''),
    onClick: function onClick() {
      return setIsFlipped(!isFlipped);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsFlipped(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-card-inner relative w-full h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-card-front absolute w-full h-full bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl sm:text-2xl font-bold text-blue-600"
  }, item.suffix)), /*#__PURE__*/React.createElement("div", {
    className: "flip-card-back absolute w-full h-full bg-slate-800 rounded-xl shadow-sm p-2 sm:p-3 flex flex-col items-center justify-center text-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-300 font-bold text-xs sm:text-sm mb-1"
  }, item.meaning), /*#__PURE__*/React.createElement("span", {
    className: "text-white text-[10px] sm:text-xs leading-tight"
  }, item.examples))));
};
var DanhTuSectionSuffix = function DanhTuSectionSuffix() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "3"), "H\u1EADu t\u1ED1 Danh t\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "B\u1EA5m (ch\u1EA1m) v\xE0o th\u1EBB \u0111\u1EC3 l\u1EADt xem \xFD ngh\u0129a v\xE0 v\xED d\u1EE5.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 sm:space-y-8"
  }, DT_NOUN_SUFFIXES.map(function (cat, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 sm:mb-4 border-b border-slate-200 pb-2"
    }, cat.category), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
    }, cat.items.map(function (item, iIdx) {
      return /*#__PURE__*/React.createElement(SuffixFlipCard, {
        key: iIdx,
        item: item
      });
    })));
  })));
};
var DT_COUNTABLE_TRAITS = [{
  id: 'number',
  label: 'Hình thái (Số lượng)',
  c: 'Có hình thái số ít & số nhiều.',
  exC: 'a car, two cars',
  u: 'Tâm bất biến (không phân biệt ít/nhiều).',
  exU: 'information'
}, {
  id: 'article',
  label: 'Mạo từ (a/an)',
  c: 'Số ít CÓ THỂ đi với a/an.',
  exC: 'an apple, a book',
  u: 'KHÔNG đi với a/an.',
  exU: 'some water (không dùng: a water)'
}, {
  id: 'plural',
  label: 'Thêm s/es',
  c: 'Số nhiều được phép thêm s/es.',
  exC: 'chairs, boxes',
  u: 'KHÔNG thêm s/es.',
  exU: 'money (không dùng: moneys)'
}, {
  id: 'counting',
  label: 'Đếm bằng số (1,2...)',
  c: 'Đếm trực tiếp được.',
  exC: 'one cat, three cats',
  u: 'KHÔNG đếm trực tiếp được. (Phải mượn đơn vị đo)',
  exU: 'a cup of coffee, two bottles of water'
}];
var DanhTuSectionCountable = function DanhTuSectionCountable() {
  var _useState7 = useState('all'),
    _useState8 = _slicedToArray(_useState7, 2),
    activeNode = _useState8[0],
    setActiveNode = _useState8[1];
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "4"), "\u0110\u1EBFm \u0111\u01B0\u1EE3c & Kh\xF4ng \u0111\u1EBFm \u0111\u01B0\u1EE3c"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "B\u1EA5m v\xE0o c\xE1c n\xFAt \u0110\u1EB6C \u0110I\u1EC2M \u1EDF gi\u1EEFa \u0111\u1EC3 so s\xE1nh v\xE0 xem v\xED d\u1EE5.")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full lg:w-48 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2 justify-center lg:py-4 order-1 lg:order-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "w-full text-center font-bold text-slate-400 text-xs sm:text-sm tracking-widest mb-1 lg:mb-2 hidden lg:block"
  }, "\u0110\u1EB6C \u0110I\u1EC2M"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveNode('all');
    },
    className: "flex-1 min-w-[80px] lg:w-full py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-semibold border transition-all ".concat(activeNode === 'all' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400')
  }, "T\u1EA5t c\u1EA3"), DT_COUNTABLE_TRAITS.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: "btn-".concat(t.id),
      onClick: function onClick() {
        return setActiveNode(t.id);
      },
      className: "flex-1 min-w-[120px] lg:w-full py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm transition-all ".concat(activeNode === t.id ? 'bg-slate-200 text-slate-800 font-bold shadow-inner border border-slate-300' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50')
    }, t.label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 relative overflow-hidden order-2 lg:order-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-1 bg-blue-500"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-base sm:text-lg text-slate-800 mb-1 text-center"
  }, "COUNTABLE"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 text-center"
  }, "(\u0110\u1EBFm \u0111\u01B0\u1EE3c)"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, DT_COUNTABLE_TRAITS.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: "c-".concat(t.id),
      className: "p-3 rounded-lg transition-all ".concat(activeNode === t.id || activeNode === 'all' ? 'bg-blue-50 border border-blue-200' : 'hidden')
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs sm:text-sm font-semibold text-slate-800 block mb-1"
    }, t.c), /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] sm:text-xs text-blue-700 bg-white px-2 py-1.5 rounded border border-blue-100 block mt-2"
    }, "V\xED d\u1EE5: ", t.exC));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 relative overflow-hidden order-3 lg:order-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-full h-1 bg-slate-400"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-base sm:text-lg text-slate-800 mb-1 text-center"
  }, "UNCOUNTABLE"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 text-center"
  }, "(Kh\xF4ng \u0111\u1EBFm \u0111\u01B0\u1EE3c)"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, DT_COUNTABLE_TRAITS.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: "u-".concat(t.id),
      className: "p-3 rounded-lg transition-all ".concat(activeNode === t.id || activeNode === 'all' ? 'bg-white border border-slate-200' : 'hidden')
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs sm:text-sm font-semibold text-slate-800 block mb-1"
    }, t.u), /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] sm:text-xs text-slate-600 bg-slate-100 px-2 py-1.5 rounded border border-slate-200 block mt-2"
    }, "V\xED d\u1EE5: ", t.exU));
  }))))));
};

// ================== DỮ LIỆU BÀI TẬP DANH TỪ ==================
var DT_RAW_WORDS = [{
  w: "book",
  type: "c"
}, {
  w: "information",
  type: "u"
}, {
  w: "place",
  type: "c"
}, {
  w: "money",
  type: "u"
}, {
  w: "friend",
  type: "c"
}, {
  w: "news",
  type: "u"
}, {
  w: "student",
  type: "c"
}, {
  w: "water",
  type: "u"
}, {
  w: "class",
  type: "c"
}, {
  w: "air",
  type: "u"
}];
var DT_SENTENCES_B = [{
  id: 1,
  text: "Reading books can help me gain a lot of knowledges.",
  isCorrectStr: false,
  wrongWord: "knowledges",
  correctWord: "knowledge",
  vn: "Đọc sách có thể giúp tôi thu nhận nhiều kiến thức.",
  exp: "'knowledge' (kiến thức) là danh từ không đếm được, không được thêm 's'."
}, {
  id: 2,
  text: "You should take part in many activity at school.",
  isCorrectStr: false,
  wrongWord: "activity",
  correctWord: "activities",
  vn: "Bạn nên tham gia nhiều hoạt động ở trường.",
  exp: "Sau 'many' (nhiều) phải là danh từ đếm được số nhiều (activities)."
}, {
  id: 3,
  text: "We need to order additional furniture for the meeting room.",
  isCorrectStr: true,
  wrongWord: "",
  correctWord: "",
  vn: "Chúng ta cần đặt thêm nội thất cho phòng họp.",
  exp: "'furniture' là danh từ không đếm được, dạng nguyên mẫu ở đây là đúng."
}, {
  id: 4,
  text: "A cleaner came to my office to clean up my kitchen.",
  isCorrectStr: true,
  wrongWord: "",
  correctWord: "",
  vn: "Một nhân viên dọn dẹp đã đến văn phòng để dọn bếp của tôi.",
  exp: "Các danh từ 'cleaner', 'office', 'kitchen' đều được dùng chính xác."
}, {
  id: 5,
  text: "I purchased some furnitures at your store last week.",
  isCorrectStr: false,
  wrongWord: "furnitures",
  correctWord: "furniture",
  vn: "Tôi đã mua một vài đồ nội thất tại cửa hàng của bạn tuần trước.",
  exp: "'furniture' là danh từ không đếm được, tuyệt đối không thêm 's'."
}, {
  id: 6,
  text: "The staff took a lot of times to complete the task.",
  isCorrectStr: false,
  wrongWord: "times",
  correctWord: "time",
  vn: "Nhân viên đã mất rất nhiều thời gian để hoàn thành nhiệm vụ.",
  exp: "'time' mang nghĩa thời gian là danh từ không đếm được, không thêm 's'. (Times số nhiều mang nghĩa là 'số lần')."
}, {
  id: 7,
  text: "Can you give me some advice?",
  isCorrectStr: true,
  wrongWord: "",
  correctWord: "",
  vn: "Bạn có thể cho tôi vài lời khuyên không?",
  exp: "'advice' (lời khuyên) là danh từ không đếm được, dùng 'some advice' là chính xác."
}, {
  id: 8,
  text: "They sell a lot of products in Cai Rang floating market.",
  isCorrectStr: true,
  wrongWord: "",
  correctWord: "",
  vn: "Họ bán rất nhiều sản phẩm ở chợ nổi Cái Răng.",
  exp: "'products' là danh từ đếm được, đi sau 'a lot of' cần ở dạng số nhiều (thêm 's')."
}, {
  id: 9,
  text: "I think you should make friends with native speaker.",
  isCorrectStr: false,
  wrongWord: "speaker",
  correctWord: "speakers",
  vn: "Tôi nghĩ bạn nên kết bạn với người bản xứ.",
  exp: "Nói chung về người bản xứ (nhiều người) nên 'speaker' phải ở dạng số nhiều là 'speakers'. Hoặc dùng 'a native speaker'."
}, {
  id: 10,
  text: "You should take an English courses at River English Center.",
  isCorrectStr: false,
  wrongWord: "courses",
  correctWord: "course",
  vn: "Bạn nên tham gia một khóa học tiếng Anh tại Trung tâm Anh ngữ River.",
  exp: "Có mạo từ 'an' (một) ở phía trước, nên danh từ theo sau phải ở dạng số ít là 'course' (bỏ 's')."
}];
var DT_PARAGRAPH_C = "Dear Alex,\nI am very glad to hear from you. Next month, I will have a travel to your city for a conference. I have to finish a lot of works before leaving. Because this is my first time, I need some informations about the city. Can you give me some advices about the weathers there? I also want to buy some furnitures for my new apartment, so please recommend a good store. I will bring a lot of moneys so we can go shopping together. I heard your city has beautiful scenerys.\nWrite to me soon,\nNam.";
var DT_ERRORS_C = [{
  id: 1,
  wrong: "travel",
  correct: "trip",
  exp: "Dịch word-by-word 'một chuyến du lịch'. 'Travel' thường là danh từ không đếm được (chỉ việc đi lại nói chung) hoặc động từ. Để đếm được (a...), phải dùng 'a trip'."
}, {
  id: 2,
  wrong: "works",
  correct: "work",
  exp: "'Work' (công việc) là danh từ không đếm được, không thêm 's'. ('Works' thêm 's' thường có nghĩa là tác phẩm nghệ thuật/nhà máy)."
}, {
  id: 3,
  wrong: "informations",
  correct: "information",
  exp: "'Information' (thông tin) là danh từ không đếm được, không bao giờ thêm 's'."
}, {
  id: 4,
  wrong: "advices",
  correct: "advice",
  exp: "'Advice' (lời khuyên) là danh từ không đếm được, không thêm 's'."
}, {
  id: 5,
  wrong: "weathers",
  correct: "weather",
  exp: "'Weather' (thời tiết) là danh từ không đếm được, không thêm 's'."
}, {
  id: 6,
  wrong: "furnitures",
  correct: "furniture",
  exp: "'Furniture' (đồ nội thất) là danh từ không đếm được, không thêm 's'."
}, {
  id: 7,
  wrong: "moneys",
  correct: "money",
  exp: "'Money' (tiền bạc) là danh từ không đếm được, không thêm 's'."
}, {
  id: 8,
  wrong: "scenerys",
  correct: "scenery",
  exp: "'Scenery' (phong cảnh) là danh từ không đếm được, không có dạng số nhiều."
}];
var createEmptyAnsC = function createEmptyAnsC() {
  return Array.from({
    length: 8
  }, function () {
    return {
      wrong: "",
      correct: ""
    };
  });
};
var DanhTuSectionExercises = function DanhTuSectionExercises() {
  // ================== PHẦN A ==================
  var _useState9 = useState({}),
    _useState0 = _slicedToArray(_useState9, 2),
    classified = _useState0[0],
    setClassified = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    part1Done = _useState10[0],
    setPart1Done = _useState10[1];
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    part1Score = _useState12[0],
    setPart1Score = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    part1Error = _useState14[0],
    setPart1Error = _useState14[1];
  var isPart1Complete = Object.keys(classified).length === DT_RAW_WORDS.length;
  var handleClassify = function handleClassify(word, selectedType) {
    setClassified(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, word, selectedType));
    });
    setPart1Error('');
  };
  var checkPart1 = function checkPart1() {
    if (!isPart1Complete) {
      setPart1Error("B\u1EA1n m\u1EDBi ph\xE2n lo\u1EA1i ".concat(Object.keys(classified).length, "/").concat(DT_RAW_WORDS.length, " t\u1EEB. Vui l\xF2ng ch\u1ECDn h\u1EBFt tr\u01B0\u1EDBc khi n\u1ED9p!"));
      return;
    }
    var count = 0;
    DT_RAW_WORDS.forEach(function (item) {
      if (classified[item.w] === item.type) count++;
    });
    setPart1Score(count);
    setPart1Done(true);
  };

  // ================== PHẦN B ==================
  var _useState15 = useState({}),
    _useState16 = _slicedToArray(_useState15, 2),
    ansB = _useState16[0],
    setAnsB = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showResultsB = _useState18[0],
    setShowResultsB = _useState18[1];
  var _useState19 = useState(''),
    _useState20 = _slicedToArray(_useState19, 2),
    partBError = _useState20[0],
    setPartBError = _useState20[1];
  var isPartBComplete = DT_SENTENCES_B.every(function (q) {
    var ans = ansB[q.id];
    if (!ans || ans.isCorrectStr === undefined) return false;
    if (ans.isCorrectStr === false) {
      var _ans$wrongW, _ans$correctW;
      return ((_ans$wrongW = ans.wrongW) === null || _ans$wrongW === void 0 ? void 0 : _ans$wrongW.trim()) && ((_ans$correctW = ans.correctW) === null || _ans$correctW === void 0 ? void 0 : _ans$correctW.trim());
    }
    return true;
  });
  var updateAnsB = function updateAnsB(id, field, value) {
    setAnsB(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, _objectSpread(_objectSpread({}, prev[id]), {}, _defineProperty({}, field, value))));
    });
    setShowResultsB(false);
    setPartBError('');
  };
  var submitPartB = function submitPartB() {
    if (!isPartBComplete) {
      setPartBError("Vui lòng hoàn thành tất cả các câu (Chọn Đúng/Sai, nếu Sai phải điền từ sửa lỗi) trước khi nộp bài!");
      return;
    }
    setPartBError('');
    setShowResultsB(true);
  };
  var checkAnsBIsFullyCorrect = function checkAnsBIsFullyCorrect(q, userAns) {
    if (!userAns) return false;
    if (q.isCorrectStr && userAns.isCorrectStr === true) return true;
    if (!q.isCorrectStr && userAns.isCorrectStr === false) {
      var _userAns$wrongW, _userAns$correctW;
      if (((_userAns$wrongW = userAns.wrongW) === null || _userAns$wrongW === void 0 ? void 0 : _userAns$wrongW.trim().toLowerCase()) === q.wrongWord.toLowerCase() && ((_userAns$correctW = userAns.correctW) === null || _userAns$correctW === void 0 ? void 0 : _userAns$correctW.trim().toLowerCase()) === q.correctWord.toLowerCase()) return true;
    }
    return false;
  };

  // ================== PHẦN C ==================
  var _useState21 = useState(createEmptyAnsC),
    _useState22 = _slicedToArray(_useState21, 2),
    ansC = _useState22[0],
    setAnsC = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showResultsC = _useState24[0],
    setShowResultsC = _useState24[1];
  var _useState25 = useState(''),
    _useState26 = _slicedToArray(_useState25, 2),
    partCError = _useState26[0],
    setPartCError = _useState26[1];
  var isPartCComplete = ansC.every(function (ans) {
    return ans.wrong.trim() !== '' && ans.correct.trim() !== '';
  });
  var handleAnsCChange = function handleAnsCChange(index, field, value) {
    var newAnsC = _toConsumableArray(ansC);
    newAnsC[index] = _objectSpread(_objectSpread({}, newAnsC[index]), {}, _defineProperty({}, field, value));
    setAnsC(newAnsC);
    setShowResultsC(false);
    setPartCError('');
  };
  var submitPartC = function submitPartC() {
    if (!isPartCComplete) {
      setPartCError("Vui lòng điền đầy đủ cả 8 cặp lỗi (Từ sai và Sửa thành) trước khi nộp bài!");
      return;
    }
    setPartCError('');
    setShowResultsC(true);
  };
  var getHighlightedParagraph = function getHighlightedParagraph() {
    var html = DT_PARAGRAPH_C.replace(/\n/g, '<br/>');
    if (showResultsC) {
      DT_ERRORS_C.forEach(function (err) {
        var regex = new RegExp("\\b".concat(err.wrong, "\\b"), 'g');
        html = html.replace(regex, "<span class=\"bg-red-200 text-red-800 line-through px-1 rounded\">".concat(err.wrong, "</span> <span class=\"bg-green-200 text-green-800 font-bold px-1 rounded\">").concat(err.correct, "</span>"));
      });
    }
    return html;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "5"), "B\xE0i t\u1EADp th\u1EF1c h\xE0nh")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sm:mb-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 mb-2"
  }, "A. Ph\xE2n lo\u1EA1i danh t\u1EEB"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500"
  }, "Ch\u1ECDn ph\xE2n lo\u1EA1i \u0111\xFAng cho c\xE1c t\u1EEB sau."), part1Done && /*#__PURE__*/React.createElement("span", {
    className: "bg-green-100 text-green-700 px-3 py-1 rounded font-bold text-sm w-fit"
  }, "\u0110i\u1EC3m: ", part1Score, "/10")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6"
  }, DT_RAW_WORDS.map(function (item, idx) {
    var currentStatus = classified[item.w];
    var isCorrect = part1Done && currentStatus === item.type;
    var isWrong = part1Done && currentStatus && currentStatus !== item.type;
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "p-3 rounded-lg border text-center flex flex-col gap-2 transition-all ".concat(isCorrect ? 'bg-green-50 border-green-300' : isWrong ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-200')
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-semibold text-slate-700 text-sm sm:text-base"
    }, item.w), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col sm:flex-row bg-slate-200 rounded-md p-1 gap-1"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleClassify(item.w, 'c');
      },
      disabled: part1Done,
      className: "flex-1 text-[10px] sm:text-[11px] py-1.5 sm:py-1 rounded transition-colors ".concat(currentStatus === 'c' ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-300 text-slate-600')
    }, "\u0110\u1EBFm \u0111\u01B0\u1EE3c"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleClassify(item.w, 'u');
      },
      disabled: part1Done,
      className: "flex-1 text-[10px] sm:text-[11px] py-1.5 sm:py-1 rounded transition-colors ".concat(currentStatus === 'u' ? 'bg-slate-700 text-white font-bold' : 'hover:bg-slate-300 text-slate-600')
    }, "Kh\xF4ng \u0111\u1EBFm \u0111\u01B0\u1EE3c")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center gap-3"
  }, !part1Done && /*#__PURE__*/React.createElement("button", {
    onClick: checkPart1,
    className: "w-full sm:w-auto px-6 py-2.5 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-slate-700"
  }, "Ki\u1EC3m tra Ph\u1EA7n A"), part1Done && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPart1Done(false);
      setClassified({});
    },
    className: "w-full sm:w-auto px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-300"
  }, "L\xE0m l\u1EA1i"), part1Error && /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 text-xs sm:text-sm font-medium"
  }, part1Error))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sm:mb-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 mb-2"
  }, "B. Th\xE1m t\u1EED Ng\u1EEF ph\xE1p"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500 mb-6"
  }, "X\xE1c \u0111\u1ECBnh c\xE2u sau \u0110\xFAng hay Sai. N\u1EBFu Sai, h\xE3y t\xECm t\u1EEB vi\u1EBFt sai v\xE0 s\u1EEDa l\u1EA1i cho \u0111\xFAng."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, DT_SENTENCES_B.map(function (q, i) {
    var uAns = ansB[q.id] || {};
    var isFinalCorrect = checkAnsBIsFullyCorrect(q, uAns);
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2 text-slate-800 font-medium mb-3 text-sm sm:text-base"
    }, /*#__PURE__*/React.createElement("span", null, i + 1, "."), /*#__PURE__*/React.createElement("p", null, q.text)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-3 items-start text-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex w-full sm:w-auto gap-2"
    }, /*#__PURE__*/React.createElement("label", {
      className: "flex-1 sm:flex-none flex items-center justify-center gap-1 cursor-pointer"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "q".concat(q.id),
      checked: uAns.isCorrectStr === true,
      onChange: function onChange() {
        return updateAnsB(q.id, 'isCorrectStr', true);
      },
      disabled: showResultsB
    }), /*#__PURE__*/React.createElement("span", {
      className: "w-full sm:w-auto text-center px-3 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-100 peer-checked:bg-green-100 peer-checked:border-green-300 peer-checked:font-bold transition-all"
    }, "C\xE2u \u0110\xFAng")), /*#__PURE__*/React.createElement("label", {
      className: "flex-1 sm:flex-none flex items-center justify-center gap-1 cursor-pointer"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "q".concat(q.id),
      checked: uAns.isCorrectStr === false,
      onChange: function onChange() {
        return updateAnsB(q.id, 'isCorrectStr', false);
      },
      disabled: showResultsB
    }), /*#__PURE__*/React.createElement("span", {
      className: "w-full sm:w-auto text-center px-3 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-100 peer-checked:bg-red-100 peer-checked:border-red-300 peer-checked:font-bold transition-all"
    }, "C\xE2u Sai"))), uAns.isCorrectStr === false && /*#__PURE__*/React.createElement("div", {
      className: "flex w-full items-center gap-2 animate-pop"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "",
      className: "flex-1 min-w-0 border-2 border-slate-300 py-2.5 px-3 rounded-xl outline-none focus:border-blue-500",
      value: uAns.wrongW || '',
      onChange: function onChange(e) {
        return updateAnsB(q.id, 'wrongW', e.target.value);
      },
      disabled: showResultsB
    }), /*#__PURE__*/React.createElement("span", {
      className: "shrink-0 text-slate-400"
    }, "\u2192"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "",
      className: "flex-1 min-w-0 border-2 border-slate-300 py-2.5 px-3 rounded-xl outline-none focus:border-blue-500",
      value: uAns.correctW || '',
      onChange: function onChange(e) {
        return updateAnsB(q.id, 'correctW', e.target.value);
      },
      disabled: showResultsB
    }))), showResultsB && /*#__PURE__*/React.createElement("div", {
      className: "mt-4 p-3 rounded-lg border text-xs sm:text-sm ".concat(isFinalCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200')
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-bold flex items-center gap-2 mb-1"
    }, isFinalCorrect ? /*#__PURE__*/React.createElement("span", {
      className: "text-green-600"
    }, "\u2705 Ch\xEDnh x\xE1c!") : /*#__PURE__*/React.createElement("span", {
      className: "text-red-600"
    }, "\u274C Ch\u01B0a \u0111\xFAng.")), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-700 italic mb-1"
    }, "D\u1ECBch: ", q.vn), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-800"
    }, /*#__PURE__*/React.createElement("strong", null, "Gi\u1EA3i th\xEDch:"), " ", q.exp)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-col sm:flex-row items-center gap-3"
  }, !showResultsB ? /*#__PURE__*/React.createElement("button", {
    onClick: submitPartB,
    className: "w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
  }, "N\u1ED9p b\xE0i Ph\u1EA7n B") : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAnsB({});
      setShowResultsB(false);
    },
    className: "w-full sm:w-auto px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors"
  }, "L\xE0m l\u1EA1i"), partBError && /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 text-xs sm:text-sm font-medium text-center"
  }, partBError))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800"
  }, "C. VSTEP WRITING TASK 1"), /*#__PURE__*/React.createElement("span", {
    className: "bg-orange-100 text-orange-700 text-[10px] sm:text-xs font-bold px-2 py-1 rounded w-fit uppercase tracking-wide"
  }, "Vi\u1EBFt th\u01B0 \u0111i\u1EC7n t\u1EED")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500 mb-4 sm:mb-6"
  }, "\u0110o\u1EA1n email ph\u1EA3n h\u1ED3i cho m\u1ED9t ng\u01B0\u1EDDi b\u1EA1n d\u01B0\u1EDBi \u0111\xE2y c\xF3 ch\u1EE9a ", /*#__PURE__*/React.createElement("strong", null, "08 l\u1ED7i sai"), " v\u1EC1 danh t\u1EEB \u0111\u1EBFm \u0111\u01B0\u1EE3c, kh\xF4ng \u0111\u1EBFm \u0111\u01B0\u1EE3c v\xE0 d\u1ECBch word-by-word. H\xE3y t\xECm v\xE0 s\u1EEDa l\u1EA1i cho \u0111\xFAng."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50 border border-amber-100 p-4 sm:p-5 rounded-xl font-medium text-slate-800 text-sm sm:text-base leading-relaxed sm:leading-loose",
    dangerouslySetInnerHTML: {
      __html: getHighlightedParagraph()
    }
  }), /*#__PURE__*/React.createElement("div", null, !showResultsC && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 xl:grid-cols-2 gap-2.5 sm:gap-3 mb-4"
  }, ansC.map(function (ans, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "flex items-center gap-2 bg-slate-50 p-2 sm:p-2.5 border border-slate-200 rounded-lg"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-5 text-center font-bold text-slate-400 shrink-0 text-sm"
    }, idx + 1, "."), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "",
      className: "flex-1 min-w-0 border-2 border-slate-300 py-2 px-3 rounded-xl text-sm outline-none focus:border-blue-500",
      value: ans.wrong,
      onChange: function onChange(e) {
        return handleAnsCChange(idx, 'wrong', e.target.value);
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 shrink-0"
    }, "\u2192"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "",
      className: "flex-1 min-w-0 border-2 border-slate-300 py-2 px-3 rounded-xl text-sm outline-none focus:border-blue-500",
      value: ans.correct,
      onChange: function onChange(e) {
        return handleAnsCChange(idx, 'correct', e.target.value);
      }
    }));
  })), showResultsC && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 animate-pop"
  }, DT_ERRORS_C.map(function (err, idx) {
    var userFoundIt = ansC.find(function (a) {
      return a.wrong.toLowerCase().trim() === err.wrong.toLowerCase() && a.correct.toLowerCase().trim() === err.correct.toLowerCase();
    });
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "p-3 rounded-lg border ".concat(userFoundIt ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-2 font-bold mb-1 text-sm"
    }, /*#__PURE__*/React.createElement("span", null, userFoundIt ? '✅' : '❌'), /*#__PURE__*/React.createElement("span", {
      className: "line-through text-red-500"
    }, err.wrong), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, "\u2192"), /*#__PURE__*/React.createElement("span", {
      className: "text-green-600"
    }, err.correct)), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-700 mt-1"
    }, err.exp));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row items-center gap-3"
  }, !showResultsC ? /*#__PURE__*/React.createElement("button", {
    onClick: submitPartC,
    className: "w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
  }, "N\u1ED9p b\xE0i Ph\u1EA7n C") : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAnsC(createEmptyAnsC());
      setShowResultsC(false);
      setPartCError('');
    },
    className: "w-full sm:w-auto px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors"
  }, "L\xE0m l\u1EA1i"), partCError && /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 text-xs sm:text-sm font-medium text-center"
  }, partCError))))));
};
var LessonDanhTu = function LessonDanhTu() {
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    activeToken = _useState28[0],
    setActiveToken = _useState28[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 sm:mb-12 border-l-4 border-blue-500 pl-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
  }, "Danh T\u1EEB (Nouns)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2 font-medium"
  }, "Hi\u1EC3u r\xF5 v\u1EC1 danh t\u1EEB, c\xE1ch nh\u1EADn bi\u1EBFt v\xE0 ph\xE2n lo\u1EA1i trong Ti\u1EBFng Anh.")), /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "1"), "T\u1EA1i sao c\u1EA7n bi\u1EBFt danh t\u1EEB? (V\u1ECB tr\xED)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "N\u1EAFm r\xF5 c\u1EA5u tr\xFAc \u0111\u1EC3 kh\xF4ng d\xF9ng sai t\u1EEB lo\u1EA1i. Danh t\u1EEB (in ", /*#__PURE__*/React.createElement("strong", {
    className: "text-red-600"
  }, "\u0111\u1ECF"), ") th\u01B0\u1EDDng \u0111\u1EE9ng \u1EDF v\u1ECB tr\xED Ch\u1EE7 ng\u1EEF (S) ho\u1EB7c T\xE2n ng\u1EEF (O). ", /*#__PURE__*/React.createElement("strong", {
    className: "text-blue-600"
  }, "B\u1EA5m v\xE0o c\xE1c th\xE0nh ph\u1EA7n c\u1EA5u tr\xFAc (S, V, O...)"), " \u0111\u1EC3 xem gi\u1EA3i th\xEDch, v\xE0 b\u1EA5m v\xE0o t\u1EEBng v\xED d\u1EE5 \u0111\u1EC3 xem gi\u1EA3i ngh\u0129a, l\u1ED7i sai.")), DT_STRUCTURES.map(function (struct, idx) {
    return /*#__PURE__*/React.createElement(StructureRow, {
      key: idx,
      struct: struct,
      activeToken: activeToken,
      setActiveToken: setActiveToken
    });
  })), /*#__PURE__*/React.createElement(DanhTuSectionDefinition, null), /*#__PURE__*/React.createElement(DanhTuSectionSuffix, null), /*#__PURE__*/React.createElement(DanhTuSectionCountable, null), /*#__PURE__*/React.createElement(DanhTuSectionExercises, null));
};