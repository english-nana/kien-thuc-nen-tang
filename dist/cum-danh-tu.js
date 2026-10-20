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
// Component con: Xử lý hiệu ứng lật cho từng thẻ riêng biệt
var PossessiveCard = function PossessiveCard(_ref) {
  var item = _ref.item;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFlipped = _useState2[0],
    setIsFlipped = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "flip-card w-32 sm:w-36 h-16 sm:h-20 cursor-pointer ".concat(isFlipped ? 'flipped' : ''),
    onClick: function onClick() {
      return setIsFlipped(!isFlipped);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsFlipped(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-card-inner relative w-full h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-card-front absolute w-full h-full bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center gap-1.5 hover:border-blue-400 hover:shadow-md transition-all"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base sm:text-lg font-bold text-slate-800"
  }, item.front), /*#__PURE__*/React.createElement("span", {
    className: "text-sm sm:text-base font-medium text-slate-500"
  }, item.frontVn)), /*#__PURE__*/React.createElement("div", {
    className: "flip-card-back absolute w-full h-full bg-blue-600 rounded-2xl shadow-md flex flex-col items-center justify-center text-center border-2 border-blue-600"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white font-bold text-lg sm:text-xl"
  }, item.back), /*#__PURE__*/React.createElement("span", {
    className: "text-blue-100 font-medium text-xs sm:text-sm mt-0.5"
  }, item.backVn))));
};
var CDT_POSSESSIVES = [{
  front: "I",
  frontVn: "(Tôi)",
  back: "my",
  backVn: "của tôi"
}, {
  front: "You",
  frontVn: "(Bạn)",
  back: "your",
  backVn: "của bạn"
}, {
  front: "He",
  frontVn: "(Anh ấy)",
  back: "his",
  backVn: "của anh ấy"
}, {
  front: "She",
  frontVn: "(Cô ấy)",
  back: "her",
  backVn: "của cô ấy"
}, {
  front: "It",
  frontVn: "(Nó)",
  back: "its",
  backVn: "của nó"
}, {
  front: "We",
  frontVn: "(Chúng tôi)",
  back: "our",
  backVn: "của chúng tôi"
}, {
  front: "They",
  frontVn: "(Họ)",
  back: "their",
  backVn: "của họ"
}];

// Component chính: Vùng chứa toàn bộ các thẻ
var PossessiveMemoryCards = function PossessiveMemoryCards() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50/50 border border-blue-100 p-5 sm:p-6 rounded-2xl mb-4 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-blue-200 text-sm font-bold text-blue-800 shadow-sm"
  }, "\uD83E\uDDE0 T\xEDnh t\u1EEB s\u1EDF h\u1EEFu (B\u1EA5m th\u1EBB \u0111\u1EC3 l\u1EADt)")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap justify-center gap-3 sm:gap-4"
  }, CDT_POSSESSIVES.map(function (item, i) {
    return /*#__PURE__*/React.createElement(PossessiveCard, {
      key: i,
      item: item
    });
  })));
};
var CDT_QUANTIFIER_QUESTIONS = [{
  id: 1,
  before: "She has",
  hintVn: "nhiều",
  noun: "close friends",
  after: "at school.",
  options: ["much", "many", "a little"],
  correct: "many",
  nounType: "Đếm được số nhiều",
  nounColor: "text-blue-600 bg-blue-50 border-blue-200",
  vn: "Cô ấy có nhiều người bạn thân ở trường.",
  rightExp: "\"friends\" (có -s) là danh từ đếm được số nhiều + nghĩa \"nhiều\" → dùng \"many\" (hoặc \"a lot of\").",
  wrongExp: "\"much\" và \"a little\" chỉ đi với danh từ KHÔNG đếm được, còn \"friends\" (có -s) là danh từ đếm được số nhiều!"
}, {
  id: 2,
  before: "Hurry up! We don't have",
  hintVn: "nhiều",
  noun: "time",
  after: "left.",
  options: ["many", "much", "several"],
  correct: "much",
  nounType: "Không đếm được",
  nounColor: "text-red-600 bg-red-50 border-red-200",
  vn: "Nhanh lên! Chúng ta không còn nhiều thời gian nữa.",
  rightExp: "\"time\" (thời gian) là danh từ không đếm được + nghĩa \"nhiều\" → dùng \"much\".",
  wrongExp: "\"many\" và \"several\" chỉ đi với danh từ đếm được số nhiều, còn \"time\" là danh từ không đếm được!"
}, {
  id: 3,
  before: "I bought",
  hintVn: "một vài",
  noun: "apples",
  after: "and some milk at the supermarket.",
  options: ["a little", "a few", "much"],
  correct: "a few",
  nounType: "Đếm được số nhiều",
  nounColor: "text-blue-600 bg-blue-50 border-blue-200",
  vn: "Tôi đã mua một vài quả táo và một ít sữa ở siêu thị.",
  rightExp: "\"apples\" (có -s) là danh từ đếm được số nhiều + nghĩa \"một vài\" → dùng \"a few\" (hoặc \"several\").",
  wrongExp: "\"a little\" và \"much\" chỉ đi với danh từ KHÔNG đếm được, còn \"apples\" là danh từ đếm được số nhiều!"
}, {
  id: 4,
  before: "She only puts",
  hintVn: "một chút",
  noun: "sugar",
  after: "in her coffee.",
  options: ["a few", "a little", "many"],
  correct: "a little",
  nounType: "Không đếm được",
  nounColor: "text-red-600 bg-red-50 border-red-200",
  vn: "Cô ấy chỉ cho một chút đường vào cà phê của mình.",
  rightExp: "\"sugar\" (đường) là danh từ không đếm được + nghĩa \"một chút / một ít\" → dùng \"a little\".",
  wrongExp: "\"a few\" và \"many\" chỉ đi với danh từ đếm được số nhiều, còn \"sugar\" là danh từ không đếm được!"
}, {
  id: 5,
  before: "To stay healthy, you should eat",
  hintVn: "ít ... hơn",
  noun: "fast food",
  after: "every week.",
  options: ["several", "many", "less"],
  correct: "less",
  nounType: "Không đếm được",
  nounColor: "text-red-600 bg-red-50 border-red-200",
  vn: "Để giữ sức khỏe, bạn nên ăn ít đồ ăn nhanh hơn mỗi tuần.",
  rightExp: "\"fast food\" (đồ ăn nhanh) là danh từ không đếm được + nghĩa \"ít hơn\" → dùng \"less\".",
  wrongExp: "\"several\" và \"many\" chỉ đi với danh từ đếm được số nhiều và không mang nghĩa \"ít hơn\"!"
}, {
  id: 6,
  before: "In our class,",
  hintVn: "mỗi",
  noun: "student",
  after: "has a textbook.",
  options: ["many", "each", "some"],
  correct: "each",
  nounType: "Đếm được số ít",
  nounColor: "text-blue-600 bg-blue-50 border-blue-200",
  vn: "Trong lớp chúng tôi, mỗi học sinh đều có một cuốn sách giáo khoa.",
  rightExp: "\"student\" đang ở dạng đếm được SỐ ÍT (không có -s) + nghĩa \"mỗi\" → dùng \"each\" (hoặc \"every\").",
  wrongExp: "\"many\" và \"some\" phải đi với danh từ số nhiều (students), trong khi \"student\" ở đây là số ít!"
}, {
  id: 7,
  before: "Nowadays,",
  hintVn: "đa số",
  noun: "young people",
  after: "use social media every day.",
  options: ["most", "much", "every"],
  correct: "most",
  nounType: "Đếm được số nhiều",
  nounColor: "text-green-600 bg-green-50 border-green-200",
  vn: "Ngày nay, đa số người trẻ sử dụng mạng xã hội mỗi ngày.",
  rightExp: "\"young people\" là danh từ số nhiều + nghĩa \"đa số, hầu hết\" → dùng \"most\".",
  wrongExp: "\"much\" chỉ đi với danh từ không đếm được, còn \"every\" chỉ đi với danh từ số ít!"
}];

// Component bài tập tương tác nhỏ cho phần Lượng từ + Danh từ
var QuantifierMiniPractice = function QuantifierMiniPractice() {
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  var handleSelect = function handleSelect(qId, opt) {
    setSelected(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, qId, opt));
    });
  };
  var completedCount = CDT_QUANTIFIER_QUESTIONS.filter(function (q) {
    return selected[q.id] === q.correct;
  }).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "p-4 sm:p-5 bg-amber-50/70 border border-amber-200 rounded-2xl text-slate-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-200/70"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-slate-800 text-base flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFAF Th\u1EF1c h\xE0nh nhanh: Ch\u1ECDn l\u01B0\u1EE3ng t\u1EEB ph\xF9 h\u1EE3p")), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm text-slate-600 mt-0.5"
  }, "Nh\xECn v\xE0o ", /*#__PURE__*/React.createElement("strong", null, "ngh\u0129a g\u1EE3i \xFD"), " v\xE0 ", /*#__PURE__*/React.createElement("strong", null, "danh t\u1EEB in \u0111\u1EADm ph\xEDa sau"), " (\u0111\u1EBFm \u0111\u01B0\u1EE3c hay kh\xF4ng \u0111\u1EBFm \u0111\u01B0\u1EE3c) \u0111\u1EC3 b\u1EA5m ch\u1ECDn l\u01B0\u1EE3ng t\u1EEB \u0111\xFAng:")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold bg-white text-amber-800 px-3 py-1.5 rounded-full border border-amber-200 shadow-sm"
  }, "\u0110\xFAng: ", completedCount, "/", CDT_QUANTIFIER_QUESTIONS.length), Object.keys(selected).length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelected({});
    },
    className: "text-xs font-semibold bg-white hover:bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 transition-colors"
  }, "L\xE0m l\u1EA1i"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-3"
  }, CDT_QUANTIFIER_QUESTIONS.map(function (q, idx) {
    var userChoice = selected[q.id];
    var isCorrect = userChoice === q.correct;
    var isWrong = userChoice && userChoice !== q.correct;
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "p-3 sm:p-4 rounded-xl border transition-all bg-white ".concat(isCorrect ? 'border-emerald-300 shadow-sm' : isWrong ? 'border-red-300 shadow-sm' : 'border-slate-200')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm sm:text-base leading-relaxed text-slate-800"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-slate-400 mr-1.5"
    }, idx + 1, "."), /*#__PURE__*/React.createElement("span", null, q.before, " "), isCorrect ? /*#__PURE__*/React.createElement("span", {
      className: "highlight-text mx-0.5"
    }, q.correct, " ", q.noun) : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center px-2 py-0.5 mx-1 rounded-md border text-xs sm:text-sm font-bold ".concat(isWrong ? 'bg-red-50 text-red-600 border-red-300 line-through' : 'bg-amber-100/80 text-amber-800 border-amber-300 border-dashed')
    }, isWrong ? userChoice : "... (".concat(q.hintVn, ")")), /*#__PURE__*/React.createElement("span", {
      className: "font-bold text-slate-900 underline decoration-amber-400 decoration-2 underline-offset-4"
    }, q.noun)), /*#__PURE__*/React.createElement("span", null, " ", q.after)), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0"
    }, q.options.map(function (opt) {
      var isThisSelected = userChoice === opt;
      var isThisRight = isThisSelected && opt === q.correct;
      var isThisWrong = isThisSelected && opt !== q.correct;
      var btnStyle = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold border transition-all ";
      if (isThisRight) {
        btnStyle += "bg-emerald-600 text-white border-emerald-600 shadow-sm";
      } else if (isThisWrong) {
        btnStyle += "bg-red-100 text-red-700 border-red-300 animate-shake";
      } else if (isCorrect) {
        btnStyle += "bg-slate-50 text-slate-400 border-slate-200 opacity-60";
      } else {
        btnStyle += "bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700";
      }
      return /*#__PURE__*/React.createElement("button", {
        key: opt,
        onClick: function onClick() {
          return handleSelect(q.id, opt);
        },
        className: btnStyle
      }, opt);
    }))), userChoice && /*#__PURE__*/React.createElement("div", {
      className: "mt-2.5 pt-2.5 border-t text-xs sm:text-sm animate-pop ".concat(isCorrect ? 'border-emerald-100' : 'border-red-100')
    }, isCorrect ? /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-emerald-700"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold"
    }, "\u2713 Ch\xEDnh x\xE1c!"), " ", /*#__PURE__*/React.createElement("span", {
      className: "inline-block text-[11px] font-bold px-1.5 py-0.5 rounded border mr-1 ".concat(q.nounColor)
    }, q.nounType), q.rightExp), /*#__PURE__*/React.createElement("div", {
      className: "text-slate-500 italic shrink-0"
    }, "\uD83C\uDDFB\uD83C\uDDF3 ", q.vn)) : /*#__PURE__*/React.createElement("div", {
      className: "text-red-600"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-bold"
    }, "\u2717 Ch\u01B0a \u0111\xFAng:"), " ", q.wrongExp, " ", /*#__PURE__*/React.createElement("span", {
      className: "text-slate-600 font-medium"
    }, "(H\xE3y th\u1EED ch\u1ECDn l\u1EA1i!)"))));
  })));
};
var CDT_STRUCTURES = [{
  tokens: [{
    id: 'ct_s1',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: true,
    type: 'Danh từ / Đại từ / CỤM DANH TỪ',
    desc: 'Chủ thể gây ra hành động trong câu. Cụm danh từ giúp chủ ngữ chi tiết và rõ ràng hơn.'
  }, {
    id: 'ct_v1',
    label: 'Động từ',
    code: 'V',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Hành động của chủ ngữ.'
  }, {
    id: 'ct_o1',
    label: 'Tân ngữ',
    code: 'O',
    isHighlight: true,
    type: 'Danh từ / Đại từ / CỤM DANH TỪ',
    desc: 'Đối tượng chịu tác động. Cụm danh từ giúp miêu tả kỹ tân ngữ.'
  }],
  examples: [{
    id: 1,
    html: "<span class='text-red-600 font-bold'>Many young people</span> use <span class='text-red-600 font-bold'>social media</span> every day.",
    vn: "Nhiều người trẻ sử dụng mạng xã hội mỗi ngày.",
    isCorrect: true,
    exp: ""
  }, {
    id: 2,
    html: "<span class='text-red-600 font-bold'>My older brother</span> just bought <span class='text-red-600 font-bold'>a new laptop</span>.",
    vn: "Anh trai tôi vừa mua một chiếc máy tính xách tay mới.",
    isCorrect: true,
    exp: ""
  }, {
    id: 3,
    html: "She is reading <span class='text-red-600 font-bold'>a book interesting</span>.",
    vn: "Cô ấy đang đọc một cuốn sách thú vị.",
    isCorrect: false,
    exp: "Sai trật tự từ trong Cụm danh từ. Tính từ 'interesting' phải đứng TRƯỚC danh từ 'book' (và đổi 'a' thành 'an'). Sửa thành: She is reading an interesting book."
  }, {
    id: 4,
    html: "<span class='text-red-600 font-bold'>A good students</span> always finishes homework on time.",
    vn: "Một học sinh giỏi luôn hoàn thành bài tập đúng giờ.",
    isCorrect: false,
    exp: "Sai vì mạo từ 'A' (một) không thể đi kèm với danh từ số nhiều 'students'. Sửa thành: 'A good student' (số ít) hoặc bỏ 'A': 'Good students always finish...'."
  }]
}, {
  tokens: [{
    id: 'ct_s2',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: true,
    type: 'Danh từ / Đại từ / CỤM DANH TỪ',
    desc: 'Chủ thể được miêu tả bằng tính từ phía sau.'
  }, {
    id: 'ct_be2',
    label: 'Động từ tobe',
    code: 'To be',
    isHighlight: false,
    type: 'Động từ liên kết',
    desc: 'Liên kết chủ ngữ với tính từ (am/is/are...).'
  }, {
    id: 'ct_adj2',
    label: 'Tính từ',
    code: 'Adj',
    isHighlight: false,
    type: 'Tính từ',
    desc: 'Từ miêu tả tính chất của chủ ngữ.'
  }],
  examples: [{
    id: 5,
    html: "<span class='text-red-600 font-bold'>The weather this week</span> is very hot.",
    vn: "Thời tiết tuần này rất nóng.",
    isCorrect: true,
    exp: ""
  }, {
    id: 6,
    html: "<span class='text-red-600 font-bold'>The public transport in this city</span> is quite convenient.",
    vn: "Phương tiện giao thông công cộng ở thành phố này khá tiện lợi.",
    isCorrect: true,
    exp: ""
  }, {
    id: 7,
    html: "<span class='text-red-600 font-bold'>These information</span> is very useful for my work.",
    vn: "Những thông tin này rất hữu ích cho công việc của tôi.",
    isCorrect: false,
    exp: "Sai vì 'information' là danh từ không đếm được, không thể đi với từ chỉ định số nhiều 'These'. Sửa thành: This information is very useful..."
  }, {
    id: 8,
    html: "<span class='text-red-600 font-bold'>Many traffic</span> in the morning is stressful.",
    vn: "Nhiều xe cộ vào buổi sáng thật căng thẳng.",
    isCorrect: false,
    exp: "Sai vì 'traffic' (giao thông/xe cộ) là danh từ không đếm được nên không đi với 'Many'. Phải sửa thành: Heavy traffic (giao thông đông đúc) hoặc A lot of traffic..."
  }]
}, {
  tokens: [{
    id: 'ct_s3',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: true,
    type: 'Danh từ / Đại từ / CỤM DANH TỪ',
    desc: 'Chủ thể thực hiện hành động.'
  }, {
    id: 'ct_v3',
    label: 'Động từ',
    code: 'V',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Hành động cho/tặng/gửi...'
  }, {
    id: 'ct_io3',
    label: 'Tân ngữ gián tiếp',
    code: 'IO',
    isHighlight: true,
    type: 'Danh từ / Đại từ / CỤM DANH TỪ',
    desc: 'Người/vật nhận được lợi ích từ hành động.'
  }, {
    id: 'ct_do3',
    label: 'Tân ngữ trực tiếp',
    code: 'DO',
    isHighlight: true,
    type: 'Danh từ / Đại từ / CỤM DANH TỪ',
    desc: 'Vật bị tác động trực tiếp.'
  }],
  examples: [{
    id: 9,
    html: "<span class='text-red-600 font-bold'>Our English teacher</span> gave <span class='text-red-600 font-bold'>the whole class</span> <span class='text-red-600 font-bold'>some useful tips</span>.",
    vn: "Giáo viên tiếng Anh của chúng tôi đã cho cả lớp một vài mẹo hữu ích.",
    isCorrect: true,
    exp: ""
  }, {
    id: 10,
    html: "<span class='text-red-600 font-bold'>My close friend</span> sent <span class='text-red-600 font-bold'>my family</span> <span class='text-red-600 font-bold'>a nice gift</span>.",
    vn: "Người bạn thân của tôi đã gửi cho gia đình tôi một món quà đẹp.",
    isCorrect: true,
    exp: ""
  }, {
    id: 11,
    html: "My friend gave me <span class='text-red-600 font-bold'>an useful advice</span>.",
    vn: "Bạn tôi đã cho tôi một lời khuyên hữu ích.",
    isCorrect: false,
    exp: "Sai vì 'advice' là danh từ không đếm được nên không dùng với mạo từ 'a/an'. Sửa thành: My friend gave me some useful advice."
  }, {
    id: 12,
    html: "The shop sent <span class='text-red-600 font-bold'>our</span> <span class='text-red-600 font-bold'>the wrong product</span>.",
    vn: "Cửa hàng đã gửi nhầm sản phẩm cho chúng tôi.",
    isCorrect: false,
    exp: "Sai vì 'our' là Tính từ sở hữu, bắt buộc phải có Danh từ theo sau (ví dụ: our family) để tạo thành Cụm danh từ, không thể đứng một mình làm Tân ngữ. Sửa thành: The shop sent our family (hoặc us) the wrong product."
  }]
}];
var CDT_EX_A_QUESTIONS = [{
  id: 1,
  vn: "những con chó của hàng xóm tôi",
  ans: ["my neighbor's dogs", "my neighbours dogs", "the dogs of my neighbor", "the dogs of my neighbour"]
}, {
  id: 2,
  vn: "một tách cà phê nóng",
  ans: ["a cup of hot coffee", "a hot cup of coffee"]
}, {
  id: 3,
  vn: "nhiều thông tin quan trọng",
  ans: ["a lot of important information", "much important information", "lots of important information"]
}, {
  id: 4,
  vn: "chiếc xe hơi mới của anh ấy",
  ans: ["his new car"]
}, {
  id: 5,
  vn: "những học sinh của lớp học này",
  ans: ["the students of this class", "these students of this class", "this class's students"]
}];
var CDT_PARAGRAPH_B = "Yesterday, my best friend visited me. He brought a large pizza. We watched an interesting movie. After that, we drank some hot coffee. The weather was perfect.";
var CDT_EX_B_QUESTIONS = [{
  id: 1,
  label: "Cụm danh từ làm Chủ ngữ trong câu đầu tiên:",
  start: "my",
  end: "friend"
}, {
  id: 2,
  label: "Cụm danh từ làm Tân ngữ sau từ 'brought':",
  start: "a",
  end: "pizza"
}, {
  id: 3,
  label: "Cụm danh từ làm Tân ngữ sau từ 'watched':",
  start: "an",
  end: "movie"
}, {
  id: 4,
  label: "Cụm danh từ làm Tân ngữ sau từ 'drank':",
  start: "some",
  end: "coffee"
}, {
  id: 5,
  label: "Cụm danh từ làm Chủ ngữ trong câu cuối:",
  start: "The",
  end: "weather"
}];
var CumDanhTuSectionExercises = function CumDanhTuSectionExercises() {
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    ansA = _useState6[0],
    setAnsA = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showResA = _useState8[0],
    setShowResA = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    errA = _useState0[0],
    setErrA = _useState0[1];
  var submitA = function submitA() {
    var isComplete = CDT_EX_A_QUESTIONS.every(function (q) {
      return (ansA[q.id] || '').trim() !== '';
    });
    if (!isComplete) {
      setErrA("Vui lòng dịch đủ 5 câu trước khi kiểm tra!");
      return;
    }
    setErrA('');
    setShowResA(true);
  };
  var checkMatch = function checkMatch(userAns, correctArr) {
    if (!userAns) return false;
    var cleanUser = userAns.toLowerCase().trim().replace(/\s+/g, ' ');
    return correctArr.some(function (c) {
      return c.toLowerCase() === cleanUser;
    });
  };
  var checkB = function checkB(q, uStart, uEnd) {
    var uS = (uStart || '').trim().toLowerCase();
    var uE = (uEnd || '').trim().toLowerCase();
    return uS === q.start.toLowerCase() && uE === q.end.toLowerCase();
  };
  var _useState1 = useState({}),
    _useState10 = _slicedToArray(_useState1, 2),
    ansB = _useState10[0],
    setAnsB = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showResB = _useState12[0],
    setShowResB = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    errB = _useState14[0],
    setErrB = _useState14[1];
  var submitB = function submitB() {
    var isComplete = CDT_EX_B_QUESTIONS.every(function (q) {
      var _ansB$q$id, _ansB$q$id2;
      return (((_ansB$q$id = ansB[q.id]) === null || _ansB$q$id === void 0 ? void 0 : _ansB$q$id.start) || '').trim() !== '' && (((_ansB$q$id2 = ansB[q.id]) === null || _ansB$q$id2 === void 0 ? void 0 : _ansB$q$id2.end) || '').trim() !== '';
    });
    if (!isComplete) {
      setErrB("Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EE7 t\u1EEB B\u1EAFt \u0111\u1EA7u v\xE0 K\u1EBFt th\xFAc cho c\u1EA3 ".concat(CDT_EX_B_QUESTIONS.length, " c\xE2u!"));
      return;
    }
    setErrB('');
    setShowResB(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white text-sm"
  }, "3"), "B\xE0i t\u1EADp th\u1EF1c h\xE0nh")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 mb-2"
  }, "A. D\u1ECBch C\u1EE5m Danh T\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500 mb-4"
  }, "Chuy\u1EC3n c\xE1c c\u1EE5m t\u1EEB ti\u1EBFng Vi\u1EC7t sau sang ti\u1EBFng Anh."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, CDT_EX_A_QUESTIONS.map(function (q, i) {
    var uAns = ansA[q.id] || '';
    var isCorrect = showResA && checkMatch(uAns, q.ans);
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "flex flex-col md:flex-row gap-2 md:items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "md:w-1/3 text-sm font-medium text-slate-700"
    }, i + 1, ". ", q.vn), /*#__PURE__*/React.createElement("div", {
      className: "md:w-2/3 flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "flex-1 border-2 py-3 px-4 rounded-xl text-sm outline-none focus:border-blue-500 ".concat(showResA ? isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300' : 'border-slate-300'),
      placeholder: "",
      value: uAns,
      onChange: function onChange(e) {
        setAnsA(_objectSpread(_objectSpread({}, ansA), {}, _defineProperty({}, q.id, e.target.value)));
        setShowResA(false);
        setErrA('');
      },
      disabled: showResA
    }), showResA && (isCorrect ? /*#__PURE__*/React.createElement("span", {
      className: "text-green-600 font-bold"
    }, "\u2713") : /*#__PURE__*/React.createElement("span", {
      className: "text-red-600 font-bold"
    }, "\u2717"))), showResA && !isCorrect && /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-semibold text-blue-600 w-full md:w-auto"
    }, "\u0110.\xE1n: ", q.ans[0]));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-col sm:flex-row items-center gap-3"
  }, !showResA ? /*#__PURE__*/React.createElement("button", {
    onClick: submitA,
    className: "w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
  }, "Ki\u1EC3m tra Ph\u1EA7n A") : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAnsA({});
      setShowResA(false);
    },
    className: "w-full sm:w-auto px-6 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold"
  }, "L\xE0m l\u1EA1i"), errA && /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 text-sm font-medium"
  }, errA))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 mb-2"
  }, "B. X\xE1c \u0111\u1ECBnh C\u1EE5m Danh T\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500 mb-4"
  }, "\u0110\u1ECDc \u0111o\u1EA1n v\u0103n v\xE0 x\xE1c \u0111\u1ECBnh t\u1EEB \u0111\u1EA7u ti\xEAn & t\u1EEB cu\u1ED1i c\xF9ng c\u1EE7a c\u1EE5m danh t\u1EEB theo y\xEAu c\u1EA7u."), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-100 p-4 rounded-lg text-slate-800 font-medium italic mb-6 leading-relaxed border border-slate-200 text-center sm:text-left"
  }, "\"", CDT_PARAGRAPH_B, "\""), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, CDT_EX_B_QUESTIONS.map(function (q, i) {
    var _ansB$q$id3, _ansB$q$id4;
    var uStart = ((_ansB$q$id3 = ansB[q.id]) === null || _ansB$q$id3 === void 0 ? void 0 : _ansB$q$id3.start) || '';
    var uEnd = ((_ansB$q$id4 = ansB[q.id]) === null || _ansB$q$id4 === void 0 ? void 0 : _ansB$q$id4.end) || '';
    var isCorrect = showResB && checkB(q, uStart, uEnd);
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col lg:flex-row lg:items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-1/2 text-sm text-slate-700 font-medium"
    }, i + 1, ". ", q.label), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 lg:w-1/2"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "",
      className: "w-1/2 border-2 py-3 px-4 text-sm rounded-xl outline-none ".concat(showResB ? isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300' : 'border-slate-300'),
      value: uStart,
      onChange: function onChange(e) {
        setAnsB(_objectSpread(_objectSpread({}, ansB), {}, _defineProperty({}, q.id, _objectSpread(_objectSpread({}, ansB[q.id]), {}, {
          start: e.target.value
        }))));
        setShowResB(false);
        setErrB('');
      },
      disabled: showResB
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400"
    }, "..."), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "",
      className: "w-1/2 border-2 py-3 px-4 text-sm rounded-xl outline-none ".concat(showResB ? isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300' : 'border-slate-300'),
      value: uEnd,
      onChange: function onChange(e) {
        setAnsB(_objectSpread(_objectSpread({}, ansB), {}, _defineProperty({}, q.id, _objectSpread(_objectSpread({}, ansB[q.id]), {}, {
          end: e.target.value
        }))));
        setShowResB(false);
        setErrB('');
      },
      disabled: showResB
    }), showResB && (isCorrect ? /*#__PURE__*/React.createElement("span", {
      className: "text-green-600 font-bold"
    }, "\u2713") : /*#__PURE__*/React.createElement("span", {
      className: "text-red-600 font-bold"
    }, "\u2717"))), showResB && !isCorrect && /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-semibold text-blue-600 w-full mt-1 lg:mt-0 lg:w-auto text-right"
    }, "\u0110\xE1p \xE1n: ", q.start, " ... ", q.end));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 flex flex-col sm:flex-row items-center gap-3"
  }, !showResB ? /*#__PURE__*/React.createElement("button", {
    onClick: submitB,
    className: "w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700"
  }, "Ki\u1EC3m tra Ph\u1EA7n B") : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAnsB({});
      setShowResB(false);
    },
    className: "w-full sm:w-auto px-6 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold"
  }, "L\xE0m l\u1EA1i"), errB && /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 text-sm font-medium"
  }, errB)))));
};
var CDT_G1_LEVELS = [{
  target: ["The", "two", "beautiful", "black", "cats"],
  scrambled: ["beautiful", "cats", "The", "black", "two"]
}, {
  target: ["My", "neighbor's", "new", "car"],
  scrambled: ["new", "My", "car", "neighbor's"]
}, {
  target: ["A", "hot", "cup", "of", "coffee"],
  scrambled: ["cup", "A", "coffee", "hot", "of"]
}, {
  target: ["A", "lot", "of", "important", "information"],
  scrambled: ["important", "of", "lot", "information", "A"]
}, {
  target: ["The", "students", "of", "this", "class"],
  scrambled: ["class", "this", "The", "of", "students"]
}, {
  target: ["That", "tall", "new", "building"],
  scrambled: ["new", "That", "building", "tall"]
}, {
  target: ["Some", "very", "expensive", "shoes"],
  scrambled: ["very", "shoes", "expensive", "Some"]
}, {
  target: ["My", "mom's", "delicious", "cooking"],
  scrambled: ["cooking", "mom's", "delicious", "My"]
}, {
  target: ["A", "small", "cute", "dog"],
  scrambled: ["cute", "dog", "A", "small"]
}, {
  target: ["Those", "beautiful", "red", "flowers"],
  scrambled: ["red", "Those", "flowers", "beautiful"]
}];
var CDT_G2_DB = [{
  w: "water",
  ans: "much"
}, {
  w: "students",
  ans: "many"
}, {
  w: "information",
  ans: "much"
}, {
  w: "books",
  ans: "many"
}, {
  w: "time",
  ans: "much"
}, {
  w: "money",
  ans: "much"
}, {
  w: "apples",
  ans: "many"
}, {
  w: "knowledge",
  ans: "much"
}, {
  w: "friends",
  ans: "many"
}, {
  w: "ideas",
  ans: "many"
}];
var CumDanhTuSectionGames = function CumDanhTuSectionGames() {
  var _useState15 = useState(0),
    _useState16 = _slicedToArray(_useState15, 2),
    g1Lv = _useState16[0],
    setG1Lv = _useState16[1];
  var _useState17 = useState(CDT_G1_LEVELS[0].scrambled),
    _useState18 = _slicedToArray(_useState17, 2),
    g1Avail = _useState18[0],
    setG1Avail = _useState18[1];
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    g1Sel = _useState20[0],
    setG1Sel = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    g1Win = _useState22[0],
    setG1Win = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    g1Err = _useState24[0],
    setG1Err = _useState24[1]; // Trạng thái lỗi rung/đỏ

  useEffect(function () {
    if (g1Sel.length === CDT_G1_LEVELS[g1Lv].target.length) {
      if (g1Sel.join(" ") === CDT_G1_LEVELS[g1Lv].target.join(" ")) {
        setG1Win(true);
        setTimeout(function () {
          if (g1Lv + 1 < CDT_G1_LEVELS.length) {
            setG1Lv(g1Lv + 1);
            setG1Sel([]);
            setG1Avail(CDT_G1_LEVELS[g1Lv + 1].scrambled);
            setG1Win(false);
          }
        }, 1500);
      } else {
        // Xếp sai -> báo lỗi rung, đỏ
        setG1Err(true);
        setTimeout(function () {
          setG1Sel([]);
          setG1Avail(CDT_G1_LEVELS[g1Lv].scrambled);
          setG1Err(false);
        }, 600); // Sau 0.6s tự động reset làm lại
      }
    }
  }, [g1Sel]);
  var pickWord = function pickWord(w, idx) {
    setG1Sel([].concat(_toConsumableArray(g1Sel), [w]));
    var newAvail = _toConsumableArray(g1Avail);
    newAvail.splice(idx, 1);
    setG1Avail(newAvail);
  };
  var removeWord = function removeWord(w, idx) {
    setG1Avail([].concat(_toConsumableArray(g1Avail), [w]));
    var newSel = _toConsumableArray(g1Sel);
    newSel.splice(idx, 1);
    setG1Sel(newSel);
  };
  var _useState25 = useState(0),
    _useState26 = _slicedToArray(_useState25, 2),
    g2Idx = _useState26[0],
    setG2Idx = _useState26[1];
  var _useState27 = useState(0),
    _useState28 = _slicedToArray(_useState27, 2),
    g2Score = _useState28[0],
    setG2Score = _useState28[1];
  var _useState29 = useState('playing'),
    _useState30 = _slicedToArray(_useState29, 2),
    g2Status = _useState30[0],
    setG2Status = _useState30[1];
  var g2Word = CDT_G2_DB[g2Idx];
  var answerG2 = function answerG2(choice) {
    if (choice === g2Word.ans) setG2Score(function (s) {
      return s + 1;
    });
    if (g2Idx + 1 < CDT_G2_DB.length) setG2Idx(function (i) {
      return i + 1;
    });else setG2Status('over');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white text-sm"
  }, "4"), "Mini-Games \xD4n T\u1EADp")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-sm flex flex-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white mb-2"
  }, "\uD83E\uDDF1 X\u1EBFp C\u1EE5m Danh T\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-400 mb-6"
  }, "B\u1EA5m v\xE0o c\xE1c t\u1EEB b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 x\u1EBFp th\xE0nh c\u1EE5m danh t\u1EEB \u0111\xFAng (Level ", g1Lv + 1, "/", CDT_G1_LEVELS.length, ")."), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-h-[60px] rounded-xl p-3 flex flex-wrap gap-2 items-center mb-6 border-2 transition-all ".concat(g1Err ? 'bg-red-50 border-red-400 animate-shake' : 'bg-slate-700 border-dashed border-slate-500')
  }, g1Sel.map(function (w, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return removeWord(w, i);
      },
      className: "".concat(g1Err ? 'bg-red-600' : 'bg-blue-500', " text-white px-3 py-1.5 rounded font-bold animate-pop")
    }, w);
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 justify-center"
  }, g1Avail.map(function (w, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return pickWord(w, i);
      },
      className: "bg-white text-slate-800 px-3 py-1.5 rounded font-bold hover:bg-slate-200 transition-colors"
    }, w);
  }))), g1Win && /*#__PURE__*/React.createElement("div", {
    className: "mt-4 text-center text-green-400 font-bold text-lg animate-pop"
  }, "Ch\xEDnh x\xE1c!"), g1Lv === CDT_G1_LEVELS.length - 1 && g1Win && /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-center text-yellow-300 font-bold"
  }, "B\u1EA1n \u0111\xE3 ho\xE0n th\xE0nh tr\xF2 ch\u01A1i!")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col text-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800 mb-2"
  }, "\u2696\uFE0F C\xE2n \u0110o L\u01B0\u1EE3ng T\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mb-6"
  }, "Ch\u1ECDn l\u01B0\u1EE3ng t\u1EEB ph\xF9 h\u1EE3p \u0111i k\xE8m v\u1EDBi danh t\u1EEB hi\u1EC3n th\u1ECB."), g2Status === 'playing' ? /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-bold text-slate-400 mb-2"
  }, "\u0110i\u1EC3m: ", g2Score, "/", CDT_G2_DB.length), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-black text-blue-600 mb-8 animate-pop py-4",
    key: g2Idx
  }, g2Word.w), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4 px-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return answerG2('many');
    },
    className: "flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-700"
  }, "Many (Nhi\u1EC1u)"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return answerG2('much');
    },
    className: "flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-700"
  }, "Much (Nhi\u1EC1u)"))) : /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col justify-center items-center animate-pop"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-xl font-bold text-slate-800 mb-2"
  }, "Ho\xE0n th\xE0nh!"), /*#__PURE__*/React.createElement("p", {
    className: "text-4xl font-black text-blue-600 mb-6"
  }, g2Score, " / ", CDT_G2_DB.length), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setG2Status('playing');
      setG2Idx(0);
      setG2Score(0);
    },
    className: "bg-blue-600 text-white px-6 py-2 rounded-lg font-bold"
  }, "Ch\u01A1i l\u1EA1i")))));
};
var CDT_TABS = ['maotu', 'luongtu', 'chidinh', 'sohuu', 'phuctap'];
var CDT_TAB_LABELS = {
  'maotu': '1. Mạo từ',
  'luongtu': '2. Lượng từ',
  'chidinh': '3. Từ chỉ định',
  'sohuu': '4. Tính từ sở hữu',
  'phuctap': '5. Danh từ phức tạp'
};
var LessonCumDanhTu = function LessonCumDanhTu() {
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    activeToken = _useState32[0],
    setActiveToken = _useState32[1];
  var _useState33 = useState('maotu'),
    _useState34 = _slicedToArray(_useState33, 2),
    theoryTab = _useState34[0],
    setTheoryTab = _useState34[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 sm:mb-12 border-l-4 border-teal-500 pl-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
  }, "C\u1EE5m Danh T\u1EEB (Noun Phrases)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2 font-medium"
  }, "T\xECm hi\u1EC3u c\u1EA5u t\u1EA1o v\xE0 c\xE1ch m\u1EDF r\u1ED9ng ngh\u0129a cho danh t\u1EEB.")), /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "1"), "T\u1EA1i sao c\u1EA7n d\xF9ng C\u1EE5m Danh T\u1EEB?"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "C\u1EE5m danh t\u1EEB c\xF3 ch\u1EE9c n\u0103ng ", /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-800"
  }, "t\u01B0\u01A1ng \u0111\u01B0\u01A1ng m\u1ED9t danh t\u1EEB"), " nh\u01B0ng cung c\u1EA5p th\xF4ng tin chi ti\u1EBFt h\u01A1n. B\u1EA5m v\xE0o c\u1EA5u tr\xFAc \u0111\u1EC3 xem ch\u1EE9c n\u0103ng.")), CDT_STRUCTURES.map(function (struct, idx) {
    return /*#__PURE__*/React.createElement(StructureRow, {
      key: idx,
      struct: struct,
      activeToken: activeToken,
      setActiveToken: setActiveToken
    });
  })), /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "2"), "C\u1EA5u t\u1EA1o C\u1EE5m Danh T\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "M\u1ED9t c\u1EE5m danh t\u1EEB \u0111\u1EA7y \u0111\u1EE7 = ", /*#__PURE__*/React.createElement("strong", {
    className: "text-blue-600"
  }, "T\u1EEB m\u1EDF r\u1ED9ng ngh\u0129a"), " + ", /*#__PURE__*/React.createElement("strong", {
    className: "text-red-600"
  }, "Danh t\u1EEB ch\xEDnh"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-nowrap overflow-x-auto bg-slate-50 border-b border-slate-200"
  }, CDT_TABS.map(function (tab) {
    return /*#__PURE__*/React.createElement("button", {
      key: tab,
      onClick: function onClick() {
        return setTheoryTab(tab);
      },
      className: "shrink-0 px-4 py-3 text-sm font-semibold transition-colors border-b-2 ".concat(theoryTab === tab ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-800')
    }, CDT_TAB_LABELS[tab]);
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-4 sm:p-6 bg-white min-h-[300px]"
  }, theoryTab !== 'luongtu' && /*#__PURE__*/React.createElement("div", {
    className: "mb-4 text-center sm:text-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold animate-pulse"
  }, "\uD83D\uDCA1 M\u1EB9o: B\u1EA5m v\xE0o c\xE1c c\xE2u ho\u1EB7c t\u1EEB ti\u1EBFng Anh b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 xem ngh\u0129a Ti\u1EBFng Vi\u1EC7t")), theoryTab === 'maotu' && /*#__PURE__*/React.createElement("div", {
    className: "animate-pop grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-blue-700 mb-3"
  }, "M\u1EA1o t\u1EEB (a, an, the) + Danh t\u1EEB"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-sm sm:text-base text-slate-700 space-y-2"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, "A / An:"), " \"m\u1ED9t\" (d\xF9ng khi n\xF3i chung, l\u1EA7n \u0111\u1EA7u nh\u1EAFc t\u1EDBi, s\u1ED1 \xEDt)."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-slate-900"
  }, "The:"), " \"c\xE1i/ng\u01B0\u1EDDi \u0111\xF3\" (d\xF9ng khi \u0111\xE3 x\xE1c \u0111\u1ECBnh r\xF5, nh\u1EAFc l\u1EA1i l\u1EA7n 2)."))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-amber-50 border border-amber-200 rounded-xl text-slate-800 leading-relaxed text-sm sm:text-base"
  }, /*#__PURE__*/React.createElement("strong", null, "V\xED d\u1EE5: "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Yesterday, I saw <span class='highlight-text'>a cat</span> and <span class='highlight-text'>an owl</span> in the garden.",
    vn: "H\xF4m qua, t\xF4i \u0111\xE3 th\u1EA5y m\u1ED9t con m\xE8o v\xE0 m\u1ED9t con c\xFA trong v\u01B0\u1EDDn."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "<span class='highlight-text'>The cat</span> was sleeping under <span class='highlight-text'>a tree</span>, while <span class='highlight-text'>the owl</span> was sitting on <span class='highlight-text'>the roof</span>.",
    vn: "Con m\xE8o \u0111ang ng\u1EE7 d\u01B0\u1EDBi m\u1ED9t c\xE1i c\xE2y, trong khi con c\xFA \u0111ang \u0111\u1EADu tr\xEAn m\xE1i nh\xE0."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Later, <span class='highlight-text'>the cat</span> chased <span class='highlight-text'>a mouse</span>, but <span class='highlight-text'>the mouse</span> escaped quickly.",
    vn: "Sau \u0111\xF3, con m\xE8o \u0111u\u1ED5i theo m\u1ED9t con chu\u1ED9t, nh\u01B0ng con chu\u1ED9t \u0111\xE3 tr\u1ED1n tho\xE1t nhanh ch\xF3ng."
  }))), theoryTab === 'luongtu' && /*#__PURE__*/React.createElement("div", {
    className: "animate-pop"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-blue-700 mb-3"
  }, "L\u01B0\u1EE3ng t\u1EEB + Danh t\u1EEB"), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto mb-6"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm text-left border-collapse border border-slate-200"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-100 text-slate-700"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "border p-2 w-1/4"
  }, "Ph\xE2n lo\u1EA1i"), /*#__PURE__*/React.createElement("th", {
    className: "border p-2"
  }, "Nhi\u1EC1u"), /*#__PURE__*/React.createElement("th", {
    className: "border p-2"
  }, "M\u1ED9t v\xE0i / \xEDt"), /*#__PURE__*/React.createElement("th", {
    className: "border p-2"
  }, "T\u1EA5t c\u1EA3 / M\u1ED7i"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "border p-2 font-bold text-blue-600"
  }, "\u0110i v\u1EDBi \u0110\u1EBFm \u0111\u01B0\u1EE3c"), /*#__PURE__*/React.createElement("td", {
    className: "border p-2"
  }, "many"), /*#__PURE__*/React.createElement("td", {
    className: "border p-2"
  }, "several, a few"), /*#__PURE__*/React.createElement("td", {
    className: "border p-2"
  }, "each, every")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "border p-2 font-bold text-red-600"
  }, "\u0110i v\u1EDBi K. \u0110\u1EBFm \u0111\u01B0\u1EE3c"), /*#__PURE__*/React.createElement("td", {
    className: "border p-2"
  }, "much"), /*#__PURE__*/React.createElement("td", {
    className: "border p-2"
  }, "a little, ", /*#__PURE__*/React.createElement("span", {
    className: "text-amber-600 font-bold"
  }, "less"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, "(\xEDt h\u01A1n)")), /*#__PURE__*/React.createElement("td", {
    className: "border p-2 bg-slate-50"
  }, "-")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "border p-2 font-bold text-green-600"
  }, "\u0110i v\u1EDBi C\u1EA3 2 lo\u1EA1i"), /*#__PURE__*/React.createElement("td", {
    className: "border p-2"
  }, "a lot of / lots of"), /*#__PURE__*/React.createElement("td", {
    className: "border p-2"
  }, "some"), /*#__PURE__*/React.createElement("td", {
    className: "border p-2"
  }, "all, ", /*#__PURE__*/React.createElement("span", {
    className: "text-amber-600 font-bold"
  }, "most"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, "(\u0111a s\u1ED1, g\u1EA7n nh\u01B0)")))))), /*#__PURE__*/React.createElement(QuantifierMiniPractice, null)), theoryTab === 'chidinh' && /*#__PURE__*/React.createElement("div", {
    className: "animate-pop"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-blue-700 mb-3"
  }, "T\u1EEB ch\u1EC9 \u0111\u1ECBnh (this, that, these, those) + Danh t\u1EEB"), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-5 shadow-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border-2 border-blue-200 p-4 shadow-sm hover:border-blue-400 transition-all flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800"
  }, "1 V\u1EACT (S\u1ED1 \xEDt) \u2022 \u1EDE G\u1EA6N"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-400"
  }, "Here (\u0110\xE2y)")), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50/50 rounded-xl p-3 my-1 flex items-center justify-start gap-2 border border-blue-100 min-h-[76px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl sm:text-3xl",
    title: "Ng\u01B0\u1EDDi n\xF3i"
  }, "\uD83E\uDDD1\u200D\uD83C\uDFEB"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-slate-500"
  }, "Ng\u01B0\u1EDDi n\xF3i")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center w-14 sm:w-16 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-extrabold text-blue-600 mb-0.5"
  }, "G\u1EA7n"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 16",
    className: "w-full h-4"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "8",
    x2: "48",
    y2: "8",
    stroke: "#2563eb",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "46,3 58,8 46,13",
    fill: "#2563eb"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center bg-white px-3 py-1.5 rounded-xl border border-blue-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl sm:text-3xl"
  }, "\uD83C\uDF4E"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-2.5 border-t border-slate-100 flex items-baseline justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-black text-blue-600"
  }, "This"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm sm:text-base font-bold text-slate-700"
  }, " apple")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs sm:text-sm text-slate-500 italic"
  }, "Qu\u1EA3 t\xE1o ", /*#__PURE__*/React.createElement("strong", null, "n\xE0y")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border-2 border-amber-200 p-4 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800"
  }, "1 V\u1EACT (S\u1ED1 \xEDt) \u2022 \u1EDE XA"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-400"
  }, "Over there (\u0110\u1EB1ng kia)")), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50/50 rounded-xl p-3 my-1 flex items-center justify-between gap-2 border border-amber-100 min-h-[76px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl sm:text-3xl",
    title: "Ng\u01B0\u1EDDi n\xF3i"
  }, "\uD83E\uDDD1\u200D\uD83C\uDFEB"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-slate-500"
  }, "Ng\u01B0\u1EDDi n\xF3i")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center flex-1 px-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-extrabold text-amber-600 mb-0.5"
  }, "C\xE1ch xa"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 140 16",
    className: "w-full h-4"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "8",
    x2: "126",
    y2: "8",
    stroke: "#d97706",
    strokeWidth: "2.5",
    strokeDasharray: "5 4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "124,3 138,8 124,13",
    fill: "#d97706"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center bg-white px-2.5 py-1 rounded-xl border border-amber-200 shadow-sm shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl sm:text-2xl opacity-90"
  }, "\uD83C\uDF4E"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-2.5 border-t border-slate-100 flex items-baseline justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-black text-amber-600"
  }, "That"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm sm:text-base font-bold text-slate-700"
  }, " apple")), /*#__PURE__*/React.createElement("span", {
    className: "text-xs sm:text-sm text-slate-500 italic"
  }, "Qu\u1EA3 t\xE1o ", /*#__PURE__*/React.createElement("strong", null, "kia")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border-2 border-blue-200 p-4 shadow-sm hover:border-blue-400 transition-all flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800"
  }, "NHI\u1EC0U V\u1EACT (S\u1ED1 nhi\u1EC1u) \u2022 \u1EDE G\u1EA6N"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-400"
  }, "Here (\u0110\xE2y)")), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50/50 rounded-xl p-3 my-1 flex items-center justify-start gap-2 border border-blue-100 min-h-[76px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl sm:text-3xl",
    title: "Ng\u01B0\u1EDDi n\xF3i"
  }, "\uD83E\uDDD1\u200D\uD83C\uDFEB"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-slate-500"
  }, "Ng\u01B0\u1EDDi n\xF3i")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center w-14 sm:w-16 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-extrabold text-blue-600 mb-0.5"
  }, "G\u1EA7n"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 60 16",
    className: "w-full h-4"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "8",
    x2: "48",
    y2: "8",
    stroke: "#2563eb",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "46,3 58,8 46,13",
    fill: "#2563eb"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-0.5 bg-white px-2.5 py-1.5 rounded-xl border border-blue-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xl sm:text-2xl"
  }, "\uD83C\uDF4E"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl sm:text-2xl"
  }, "\uD83C\uDF4E"), /*#__PURE__*/React.createElement("span", {
    className: "text-xl sm:text-2xl"
  }, "\uD83C\uDF4E"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-2.5 border-t border-slate-100 flex items-baseline justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-black text-blue-600"
  }, "These"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm sm:text-base font-bold text-slate-700"
  }, " apple", /*#__PURE__*/React.createElement("u", {
    className: "text-red-500"
  }, "s"))), /*#__PURE__*/React.createElement("span", {
    className: "text-xs sm:text-sm text-slate-500 italic"
  }, /*#__PURE__*/React.createElement("strong", null, "Nh\u1EEFng"), " qu\u1EA3 t\xE1o ", /*#__PURE__*/React.createElement("strong", null, "n\xE0y")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border-2 border-amber-200 p-4 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800"
  }, "NHI\u1EC0U V\u1EACT (S\u1ED1 nhi\u1EC1u) \u2022 \u1EDE XA"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-slate-400"
  }, "Over there (\u0110\u1EB1ng kia)")), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50/50 rounded-xl p-3 my-1 flex items-center justify-between gap-2 border border-amber-100 min-h-[76px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-2xl sm:text-3xl",
    title: "Ng\u01B0\u1EDDi n\xF3i"
  }, "\uD83E\uDDD1\u200D\uD83C\uDFEB"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold text-slate-500"
  }, "Ng\u01B0\u1EDDi n\xF3i")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center flex-1 px-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-extrabold text-amber-600 mb-0.5"
  }, "C\xE1ch xa"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 140 16",
    className: "w-full h-4"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "8",
    x2: "126",
    y2: "8",
    stroke: "#d97706",
    strokeWidth: "2.5",
    strokeDasharray: "5 4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "124,3 138,8 124,13",
    fill: "#d97706"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-0.5 bg-white px-2 py-1 rounded-xl border border-amber-200 shadow-sm shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl opacity-90"
  }, "\uD83C\uDF4E"), /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl opacity-90"
  }, "\uD83C\uDF4E"), /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl opacity-90"
  }, "\uD83C\uDF4E"))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-2.5 border-t border-slate-100 flex items-baseline justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-lg sm:text-xl font-black text-amber-600"
  }, "Those"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm sm:text-base font-bold text-slate-700"
  }, " apple", /*#__PURE__*/React.createElement("u", {
    className: "text-red-500"
  }, "s"))), /*#__PURE__*/React.createElement("span", {
    className: "text-xs sm:text-sm text-slate-500 italic"
  }, /*#__PURE__*/React.createElement("strong", null, "Nh\u1EEFng"), " qu\u1EA3 t\xE1o ", /*#__PURE__*/React.createElement("strong", null, "kia"))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 text-xs sm:text-sm text-slate-600 bg-white px-3.5 py-2 rounded-lg border border-slate-200 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCC"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "L\u01B0u \xFD:"), " V\u1EDBi ", /*#__PURE__*/React.createElement("strong", null, "Danh t\u1EEB kh\xF4ng \u0111\u1EBFm \u0111\u01B0\u1EE3c"), " (water, information, money...), ta lu\xF4n d\xF9ng nh\u01B0 s\u1ED1 \xEDt: ", /*#__PURE__*/React.createElement("strong", {
    className: "text-blue-600"
  }, "this"), " water / ", /*#__PURE__*/React.createElement("strong", {
    className: "text-amber-600"
  }, "that"), " information."))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-amber-50 border border-amber-200 rounded-xl text-slate-800 leading-relaxed text-sm sm:text-base"
  }, /*#__PURE__*/React.createElement("strong", null, "V\xED d\u1EE5 trong c\xE2u (B\u1EA5m v\xE0o c\xE2u \u0111\u1EC3 xem ngh\u0129a): "), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5 text-sm sm:text-base text-slate-700 space-y-2 mt-2"
  }, /*#__PURE__*/React.createElement(ClickableItem, {
    en: "<span class='highlight-text'>This book</span> is very interesting.",
    vn: "Quy\u1EC3n s\xE1ch n\xE0y (\u1EDF ngay \u0111\xE2y) r\u1EA5t th\xFA v\u1ECB."
  }), /*#__PURE__*/React.createElement(ClickableItem, {
    en: "<span class='highlight-text'>That building</span> over there is a hospital.",
    vn: "T\xF2a nh\xE0 \u0111\u1EB1ng kia l\xE0 m\u1ED9t b\u1EC7nh vi\u1EC7n."
  }), /*#__PURE__*/React.createElement(ClickableItem, {
    en: "I like <span class='highlight-text'>these shoes</span>, but I don't like <span class='highlight-text'>those shoes</span>.",
    vn: "T\xF4i th\xEDch \u0111\xF4i gi\xE0y n\xE0y, nh\u01B0ng t\xF4i kh\xF4ng th\xEDch \u0111\xF4i gi\xE0y \u0111\u1EB1ng kia."
  })))), theoryTab === 'sohuu' && /*#__PURE__*/React.createElement("div", {
    className: "animate-pop"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-blue-700 mb-3"
  }, "T\xEDnh t\u1EEB s\u1EDF h\u1EEFu + Danh t\u1EEB"), /*#__PURE__*/React.createElement(PossessiveMemoryCards, null), /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-amber-50 border border-amber-200 rounded-xl text-slate-800 leading-relaxed text-sm sm:text-base mt-2"
  }, /*#__PURE__*/React.createElement("strong", null, "V\xED d\u1EE5: "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Today, <span class='highlight-text'>our class</span> had a group project.",
    vn: "H\xF4m nay, l\u1EDBp c\u1EE7a ch\xFAng t\xF4i c\xF3 m\u1ED9t d\u1EF1 \xE1n nh\xF3m."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "<span class='highlight-text'>My group</span> worked on environmental protection, while <span class='highlight-text'>their group</span> talked about technology.",
    vn: "Nh\xF3m c\u1EE7a t\xF4i l\xE0m v\u1EC1 b\u1EA3o v\u1EC7 m\xF4i tr\u01B0\u1EDDng, trong khi nh\xF3m c\u1EE7a h\u1ECD n\xF3i v\u1EC1 c\xF4ng ngh\u1EC7."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "One boy forgot <span class='highlight-text'>his notebook</span>, so he borrowed <span class='highlight-text'>my pen</span>.",
    vn: "M\u1ED9t c\u1EADu b\xE9 \u0111\u1EC3 qu\xEAn v\u1EDF, n\xEAn c\u1EADu \u1EA5y m\u01B0\u1EE3n b\xFAt c\u1EE7a t\xF4i."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "A cat even came in and played with <span class='highlight-text'>its tail</span>.",
    vn: "M\u1ED9t con m\xE8o th\u1EADm ch\xED \u0111\xE3 b\u01B0\u1EDBc v\xE0o v\xE0 ch\u01A1i \u0111\xF9a v\u1EDBi c\xE1i \u0111u\xF4i c\u1EE7a n\xF3."
  }))), theoryTab === 'phuctap' && /*#__PURE__*/React.createElement("div", {
    className: "animate-pop"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-blue-700 mb-3"
  }, "C\u1EA5u tr\xFAc Danh t\u1EEB ch\xEDnh ph\u1EE9c t\u1EA1p"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50 hover:bg-white transition-colors"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-800 mb-2"
  }, "1. Danh t\u1EEB + Danh t\u1EEB (N1 + N2)"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mb-3 text-xs italic"
  }, "Danh t\u1EEB 1 b\u1ED5 ngh\u0129a cho danh t\u1EEB 2."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5"
  }, /*#__PURE__*/React.createElement(ClickableItem, {
    textClass: "text-blue-700",
    en: "coffee shop",
    vn: "qu\xE1n c\xE0 ph\xEA"
  }), /*#__PURE__*/React.createElement(ClickableItem, {
    textClass: "text-blue-700",
    en: "school uniform",
    vn: "\u0111\u1ED3ng ph\u1EE5c tr\u01B0\u1EDDng"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50 hover:bg-white transition-colors"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-800 mb-2"
  }, "2. S\u1EDF h\u1EEFu c\xE1ch (N1's + N2)"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mb-3 text-xs italic"
  }, "S\u1EF1 v\u1EADt thu\u1ED9c s\u1EDF h\u1EEFu c\u1EE7a ai/c\xE1i g\xEC."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5"
  }, /*#__PURE__*/React.createElement(ClickableItem, {
    textClass: "text-blue-700",
    en: "my mom's cooking",
    vn: "\u0111\u1ED3 \u0103n m\u1EB9 n\u1EA5u"
  }), /*#__PURE__*/React.createElement(ClickableItem, {
    textClass: "text-blue-700",
    en: "my neighbor's dog",
    vn: "ch\xF3 c\u1EE7a h\xE0ng x\xF3m"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50 hover:bg-white transition-colors"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-800 mb-2"
  }, "3. N1 + of + N2"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mb-3 text-xs italic"
  }, "Ch\u1EC9 \u0111\u1ECBnh l\u01B0\u1EE3ng ho\u1EB7c m\u1ED1i quan h\u1EC7."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5"
  }, /*#__PURE__*/React.createElement(ClickableItem, {
    textClass: "text-blue-700",
    en: "a bottle of water",
    vn: "1 chai n\u01B0\u1EDBc"
  }), /*#__PURE__*/React.createElement(ClickableItem, {
    textClass: "text-blue-700",
    en: "the importance of education",
    vn: "t\u1EA7m quan tr\u1ECDng c\u1EE7a gi\xE1o d\u1EE5c"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50 hover:bg-white transition-colors"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-slate-800 mb-2"
  }, "4. T\xEDnh t\u1EEB + Danh t\u1EEB (Adj + N)"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mb-3 text-xs italic"
  }, "T\xEDnh t\u1EEB mi\xEAu t\u1EA3 \u0111\u1EB7c \u0111i\u1EC3m danh t\u1EEB."), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pl-5"
  }, /*#__PURE__*/React.createElement(ClickableItem, {
    textClass: "text-blue-700",
    en: "busy street",
    vn: "\u0111\u01B0\u1EDDng ph\u1ED1 b\u1EADn r\u1ED9n"
  }), /*#__PURE__*/React.createElement(ClickableItem, {
    textClass: "text-blue-700",
    en: "close friend",
    vn: "b\u1EA1n th\xE2n"
  })))))))), /*#__PURE__*/React.createElement(CumDanhTuSectionExercises, null), /*#__PURE__*/React.createElement(CumDanhTuSectionGames, null));
};