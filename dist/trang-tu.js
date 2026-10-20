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
// --- COMPONENT TRÌNH DIỄN CÂU VÍ DỤ CÓ HIỆU ỨNG ẨN/HIỆN TRẠNG TỪ ---
var StructureExampleAdv = function StructureExampleAdv(_ref) {
  var ex = _ref.ex;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1]; // 0: base, 1: +adv, 2: +adv & vn
  return /*#__PURE__*/React.createElement("div", {
    className: "py-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 flex-1 cursor-pointer group bg-white p-2 sm:p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:shadow-sm transition-all",
    onClick: function onClick() {
      return setStep((step + 1) % 3);
    },
    title: "B\u1EA5m \u0111\u1EC3 t\u01B0\u01A1ng t\xE1c"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-colors font-bold ".concat(step > 0 ? ex.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-600')
  }, step > 0 ? ex.isCorrect ? "✓" : "✗" : /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-base text-slate-800 transition-all duration-300",
    dangerouslySetInnerHTML: {
      __html: step > 0 ? ex.html : ex.baseHtml
    }
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    className: "mt-1 ml-12 animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-600 italic mb-2"
  }, "\uD83C\uDDFB\uD83C\uDDF3 ", ex.vn), !ex.isCorrect && /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 mt-2 shadow-inner"
  }, /*#__PURE__*/React.createElement("strong", null, "Gi\u1EA3i th\xEDch:"), " ", ex.exp))));
};

// --- COMPONENT CẤU TRÚC RIÊNG CHO BÀI TRẠNG TỪ ---
var StructureRowAdv = function StructureRowAdv(_ref2) {
  var struct = _ref2.struct,
    activeToken = _ref2.activeToken,
    setActiveToken = _ref2.setActiveToken;
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
      className: "flex flex-col items-center justify-center min-w-[58px] sm:min-w-[76px] py-1.5 px-2 sm:px-3 rounded-xl border-2 transition-all duration-200 ".concat(activeToken === token.id ? 'border-amber-600 ring-2 ring-amber-100 bg-white shadow-md scale-105' : token.isHighlight ? 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100 shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50')
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
      className: "font-bold text-amber-400 text-sm mb-1"
    }, token.type), /*#__PURE__*/React.createElement("p", {
      className: "text-sm leading-snug text-slate-200"
    }, token.desc)))), i < struct.tokens.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 font-bold text-base sm:text-xl"
    }, "+"));
  })), selectedTokenObj && /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden mt-3 bg-slate-800 text-white p-3 rounded-xl shadow-md animate-pop text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-amber-400 text-xs mb-1"
  }, selectedTokenObj.label, " (", selectedTokenObj.code, ") \u2014 ", selectedTokenObj.type), /*#__PURE__*/React.createElement("p", {
    className: "text-xs leading-relaxed text-slate-200"
  }, selectedTokenObj.desc))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3"
  }, "V\xED d\u1EE5 (B\u1EA5m v\xE0o \u2795 \u0111\u1EC3 th\xEAm Tr\u1EA1ng t\u1EEB, b\u1EA5m l\u1EA7n n\u1EEFa \u0111\u1EC3 xem ngh\u0129a):"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 sm:space-y-2"
  }, struct.examples.map(function (ex) {
    return /*#__PURE__*/React.createElement(StructureExampleAdv, {
      key: ex.id,
      ex: ex
    });
  }))));
};

// --- COMPONENT CÂU VÍ DỤ CLICK ĐỂ XEM NGHĨA CHO BẢNG TRẠNG TỪ ---
var AdvClickableSentence = function AdvClickableSentence(_ref3) {
  var en = _ref3.en,
    vn = _ref3.vn;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "cursor-pointer group bg-slate-50 hover:bg-amber-50 p-2.5 rounded-lg border border-slate-100 hover:border-amber-200 transition-colors",
    onClick: function onClick() {
      return setShow(!show);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-700 font-medium leading-relaxed",
    dangerouslySetInnerHTML: {
      __html: en
    }
  }), show && /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-amber-700 mt-2 animate-pop italic border-t border-amber-100 pt-2"
  }, "\uD83C\uDDFB\uD83C\uDDF3 ", vn));
};

// --- COMPONENT TRẠNG TỪ LÀ GÌ (CÁC LOẠI TRẠNG TỪ) ---
var ADV_TYPES = [{
  id: 1,
  name: "Thời gian",
  en: "Time",
  icon: "🕒",
  desc: "Trả lời câu hỏi Khi nào? (When?)",
  examples: [{
    en: "I will call you <b>later tonight</b>.",
    vn: "Tôi sẽ gọi bạn vào tối nay."
  }, {
    en: "She arrived <b>yesterday morning</b>.",
    vn: "Cô ấy đã đến vào sáng hôm qua."
  }, {
    en: "We are studying English <b>right now</b>.",
    vn: "Chúng tôi đang học tiếng Anh ngay bây giờ."
  }, {
    en: "The movie will start <b>very soon</b>.",
    vn: "Bộ phim sẽ bắt đầu rất sớm thôi."
  }]
}, {
  id: 2,
  name: "Nơi chốn",
  en: "Place",
  icon: "📍",
  desc: "Trả lời câu hỏi Ở đâu? (Where?)",
  examples: [{
    en: "They are waiting <b>outside the shop</b>.",
    vn: "Họ đang đợi bên ngoài cửa hàng."
  }, {
    en: "I looked for my keys <b>everywhere in the house</b>.",
    vn: "Tôi đã tìm chìa khóa khắp nơi trong nhà."
  }, {
    en: "Please leave the package <b>right here</b>.",
    vn: "Vui lòng để gói hàng ngay tại đây."
  }, {
    en: "He has lived <b>over there</b> for years.",
    vn: "Anh ấy đã sống ở đằng kia nhiều năm."
  }]
}, {
  id: 3,
  name: "Cách thức",
  en: "Manner",
  icon: "🏃‍♂️",
  desc: "Trả lời câu hỏi Như thế nào? (How?)",
  examples: [{
    en: "She handled the situation <b>beautifully</b>.",
    vn: "Cô ấy xử lý tình huống một cách tuyệt vời."
  }, {
    en: "Please drive <b>carefully</b> in the rain.",
    vn: "Vui lòng lái xe cẩn thận dưới trời mưa."
  }, {
    en: "He reacted <b>quickly</b> to catch the ball.",
    vn: "Anh ấy phản ứng nhanh chóng để bắt bóng."
  }, {
    en: "They speak English very <b>well</b>.",
    vn: "Họ nói tiếng Anh rất giỏi."
  }]
}, {
  id: 4,
  name: "Tần suất",
  en: "Frequency",
  icon: "🔄",
  desc: "Trả lời câu hỏi Bao lâu một lần? (How often?)",
  examples: [{
    en: "I <b>always</b> check my emails first.",
    vn: "Tôi luôn luôn kiểm tra email đầu tiên."
  }, {
    en: "She <b>never</b> drinks coffee at night.",
    vn: "Cô ấy không bao giờ uống cà phê vào buổi tối."
  }, {
    en: "We <b>often</b> go out on weekends.",
    vn: "Chúng tôi thường đi chơi vào cuối tuần."
  }, {
    en: "He is <b>usually</b> tired after work.",
    vn: "Anh ấy thường mệt mỏi sau giờ làm."
  }]
}, {
  id: 5,
  name: "Mức độ",
  en: "Degree",
  icon: "🌡️",
  desc: "Trả lời câu hỏi Mức độ nào? (To what extent?)",
  examples: [{
    en: "This lesson is <b>very</b> important.",
    vn: "Bài học này rất quan trọng."
  }, {
    en: "I was <b>extremely</b> nervous.",
    vn: "Tôi đã cực kỳ lo lắng."
  }, {
    en: "I <b>completely</b> forgot about it.",
    vn: "Tôi hoàn toàn quên mất nó."
  }, {
    en: "It's <b>quite</b> cold outside today.",
    vn: "Hôm nay ngoài trời khá lạnh."
  }]
}, {
  id: 6,
  name: "Mục đích",
  en: "Purpose/Reason",
  icon: "🎯",
  desc: "Trả lời câu hỏi Tại sao? (Why?)",
  examples: [{
    en: "I study hard <b>to pass the exam</b>.",
    vn: "Tôi học hành chăm chỉ để vượt qua kỳ thi."
  }, {
    en: "He woke up early <b>to catch the bus</b>.",
    vn: "Anh ấy dậy sớm để bắt xe buýt."
  }, {
    en: "She saves money <b>to buy a new car</b>.",
    vn: "Cô ấy tiết kiệm tiền để mua xe mới."
  }, {
    en: "We ran fast <b>to win the race</b>.",
    vn: "Chúng tôi chạy nhanh để giành chiến thắng."
  }]
}];
var AdverbTypesGrid = function AdverbTypesGrid() {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
  }, ADV_TYPES.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      className: "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-10 h-10 rounded-xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100"
    }, t.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      className: "font-bold text-slate-800 text-lg"
    }, t.name), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-amber-800 font-semibold"
    }, t.en))), /*#__PURE__*/React.createElement("p", {
      className: "text-sm text-slate-500 mb-4"
    }, t.desc), /*#__PURE__*/React.createElement("div", {
      className: "space-y-2"
    }, t.examples.map(function (ex, idx) {
      return /*#__PURE__*/React.createElement(AdvClickableSentence, {
        key: idx,
        en: ex.en,
        vn: ex.vn
      });
    })));
  }));
};

// --- BÀI TẬP 1 ---
var ADV_EX1_QUESTIONS = [{
  id: 1,
  text1: "She is a ",
  options: ["careful", "carefully"],
  text2: " driver.",
  correct: "careful"
}, {
  id: 2,
  text1: "He drives ",
  options: ["careful", "carefully"],
  text2: ".",
  correct: "carefully"
}, {
  id: 3,
  text1: "The test was very ",
  options: ["easy", "easily"],
  text2: ".",
  correct: "easy"
}, {
  id: 4,
  text1: "They solved the problem ",
  options: ["easy", "easily"],
  text2: ".",
  correct: "easily"
}, {
  id: 5,
  text1: "My English is ",
  options: ["good", "well"],
  text2: ".",
  correct: "good"
}, {
  id: 6,
  text1: "I speak English ",
  options: ["good", "well"],
  text2: ".",
  correct: "well"
}, {
  id: 7,
  text1: "He looks ",
  options: ["happy", "happily"],
  text2: ".",
  correct: "happy"
}, {
  id: 8,
  text1: "She smiled ",
  options: ["happy", "happily"],
  text2: ".",
  correct: "happily"
}];
var ExerciseChooseForm = function ExerciseChooseForm() {
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    answers = _useState6[0],
    setAnswers = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showResults = _useState8[0],
    setShowResults = _useState8[1];
  var handleSelect = function handleSelect(qId, option) {
    if (showResults) return;
    setAnswers(_objectSpread(_objectSpread({}, answers), {}, _defineProperty({}, qId, option)));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-800 mb-4"
  }, "B\xE0i 1: Ch\u1ECDn T\xEDnh t\u1EEB ho\u1EB7c Tr\u1EA1ng t\u1EEB ph\xF9 h\u1EE3p"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-3"
  }, ADV_EX1_QUESTIONS.map(function (q) {
    var selected = answers[q.id];
    var isCorrect = selected === q.correct;
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "p-4 bg-slate-50/70 border border-slate-200 rounded-xl flex flex-wrap items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold w-6"
    }, q.id, "."), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-700"
    }, q.text1), /*#__PURE__*/React.createElement("div", {
      className: "flex gap-2"
    }, q.options.map(function (opt) {
      return /*#__PURE__*/React.createElement("button", {
        key: opt,
        onClick: function onClick() {
          return handleSelect(q.id, opt);
        },
        className: "px-3 py-1 rounded-lg text-sm font-bold border transition-all ".concat(selected === opt ? showResults ? isCorrect ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700' : 'bg-amber-700 border-amber-700 text-white' : 'bg-white border-slate-300 text-slate-600 hover:border-amber-300', " ").concat(showResults && q.correct === opt && selected !== opt ? 'ring-2 ring-green-400 bg-green-50' : ''),
        disabled: showResults
      }, opt);
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-700"
    }, q.text2), showResults && selected && /*#__PURE__*/React.createElement("span", {
      className: "ml-auto font-bold ".concat(isCorrect ? 'text-green-500' : 'text-red-500')
    }, isCorrect ? '✓' : '✗'));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex gap-3"
  }, !showResults ? /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowResults(true);
    },
    disabled: Object.keys(answers).length < ADV_EX1_QUESTIONS.length,
    className: "px-5 py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-900 disabled:bg-slate-300 transition-colors"
  }, "Ki\u1EC3m tra") : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAnswers({});
      setShowResults(false);
    },
    className: "px-5 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 border border-slate-200"
  }, "L\xE0m l\u1EA1i")));
};

// --- BÀI TẬP 2 ---
var ADV_EX2_QUESTIONS = [{
  id: 1,
  vn: "Anh ấy là một người <span class='text-amber-500 font-bold'>chăm chỉ</span>, vì vậy anh ấy làm việc rất <span class='text-amber-500 font-bold'>chăm chỉ</span> mỗi ngày.",
  en: ["He is a hard-working person, so he works very hard every day.", "He is a hard working person, so he works very hard every day.", "He is a hardworking person, so he works very hard every day.", "He is a hard-working person so he works very hard every day.", "He is a hard-working person, so he works hard every day.", "He is a hard working person, so he works hard every day.", "He is a hardworking person, so he works hard every day.", "He is a hard-working person so he works hard every day."]
}, {
  id: 2,
  vn: "Cô ấy là một người <span class='text-amber-500 font-bold'>cẩn thận</span>, vậy nên cô ấy luôn lái xe <span class='text-amber-500 font-bold'>cẩn thận</span>.",
  en: ["She is a careful person, so she always drives carefully.", "She is a careful person so she always drives carefully.", "She is a careful person, therefore she always drives carefully."]
}, {
  id: 3,
  vn: "Cô ấy là một cô gái <span class='text-amber-500 font-bold'>nhẹ nhàng</span>, nên cô ấy luôn nói chuyện một cách <span class='text-amber-500 font-bold'>nhẹ nhàng</span>.",
  en: ["She is a gentle girl, so she always speaks gently.", "She is a gentle girl so she always speaks gently."]
}, {
  id: 4,
  vn: "Tôi là một người <span class='text-amber-500 font-bold'>kiên nhẫn</span>, nên tôi luôn đối xử với học sinh một cách <span class='text-amber-500 font-bold'>kiên nhẫn</span>.",
  en: ["I am a patient person, so I always treat students patiently.", "I am a patient person so I always treat students patiently.", "I am a patient person, therefore I always treat students patiently.", "I am a patient person, so I always treat my students patiently.", "I am a patient person so I always treat my students patiently.", "I am a patient person, therefore I always treat my students patiently."]
}, {
  id: 5,
  vn: "Em trai tôi học rất <span class='text-amber-500 font-bold'>giỏi</span> vì nó là một học sinh <span class='text-amber-500 font-bold'>giỏi</span>.",
  en: ["My brother studies very well because he is a good student.", "My brother learns very well because he is a good student.", "My younger brother studies very well because he is a good student.", "My brother studies very well, because he is a good student.", "My brother learns very well, because he is a good student.", "My younger brother studies very well, because he is a good student."]
}];
var ExerciseTranslateAdv = function ExerciseTranslateAdv() {
  var _useState9 = useState({}),
    _useState0 = _slicedToArray(_useState9, 2),
    answers = _useState0[0],
    setAnswers = _useState0[1];
  var _useState1 = useState({}),
    _useState10 = _slicedToArray(_useState1, 2),
    results = _useState10[0],
    setResults = _useState10[1]; // 'correct', 'error', null

  var checkSingleAnswer = function checkSingleAnswer(id) {
    var q = ADV_EX2_QUESTIONS.find(function (q) {
      return q.id === id;
    });
    var userAns = answers[id] || "";
    var clean = function clean(str) {
      return str.toLowerCase().replace(/[.,?]/g, '').replace(/\s+/g, ' ').trim();
    };
    var cleanedUser = clean(userAns);
    var isCorrect = q.en.some(function (ans) {
      return clean(ans) === cleanedUser;
    });
    if (isCorrect) {
      setResults(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, 'correct'));
      });
    } else {
      setResults(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, 'error'));
      });
      setTimeout(function () {
        setResults(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, null));
        });
      }, 500);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-md"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-white mb-2"
  }, "B\xE0i 2: Th\u1EED t\xE0i d\u1ECBch thu\u1EADt (T\xEDnh t\u1EEB & Tr\u1EA1ng t\u1EEB)"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-400 text-sm mb-4"
  }, "Vi\u1EBFt c\xE2u d\u1ECBch v\xE0 nh\u1EA5n ", /*#__PURE__*/React.createElement("span", {
    className: "text-amber-500 font-bold underline"
  }, "Enter"), " \u0111\u1EC3 ki\u1EC3m tra t\u1EEBng c\xE2u."), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, ADV_EX2_QUESTIONS.map(function (q) {
    var userAns = answers[q.id] || "";
    var state = results[q.id];
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      className: "p-4 bg-slate-800 rounded-xl border border-slate-700"
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-slate-200 font-medium mb-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-amber-500 font-bold mr-2"
    }, q.id, "."), /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: q.vn
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement("textarea", {
      id: "translate-q-".concat(q.id),
      rows: "2",
      value: state === 'correct' ? q.en[0] : userAns,
      onChange: function onChange(e) {
        if (state !== 'correct') setAnswers(_objectSpread(_objectSpread({}, answers), {}, _defineProperty({}, q.id, e.target.value)));
      },
      onKeyDown: function onKeyDown(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkSingleAnswer(q.id);
        }
      },
      placeholder: "",
      onInput: function onInput(e) {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 4 + 'px';
      },
      className: "w-full py-3 px-4 rounded-xl border-2 outline-none text-sm sm:text-base transition-all resize-none overflow-hidden ".concat(state === 'correct' ? 'bg-green-900/30 border-green-500 text-green-100 shadow-[0_0_15px_rgba(34,197,94,0.2)]' : state === 'error' ? 'bg-red-900/30 border-red-500 text-red-100 animate-shake' : 'bg-slate-700 border-slate-600 text-slate-100 focus:border-amber-600'),
      readOnly: state === 'correct'
    }), state === 'correct' && /*#__PURE__*/React.createElement("div", {
      className: "absolute right-3 top-3 text-green-400 font-bold animate-pop"
    }, "\u2713 Ch\xEDnh x\xE1c")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAnswers({});
      setResults({});
    },
    className: "px-5 py-2 bg-slate-700 text-white rounded-xl text-sm font-bold hover:bg-slate-600 transition-colors"
  }, "L\xE0m l\u1EA1i to\xE0n b\u1ED9")));
};

// --- BÀI TẬP 3: MINIGAMES ---
var ADV_SCRAMBLE_SENTENCES = [{
  vn: "Cô ấy hát rất hay.",
  words: ["She", "sings", "very", "beautifully."],
  correct: "She sings very beautifully."
}, {
  vn: "Chúng tôi đang học tiếng Anh ngay bây giờ.",
  words: ["We", "are", "studying", "English", "now."],
  correct: "We are studying English now."
}, {
  vn: "Anh ấy chạy nhanh để giành chiến thắng.",
  words: ["He", "runs", "fast", "to", "win", "the", "race."],
  correct: "He runs fast to win the race."
}];
var MinigameWordScramble = function MinigameWordScramble() {
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    currentIdx = _useState12[0],
    setCurrentIdx = _useState12[1];
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedWords = _useState14[0],
    setSelectedWords = _useState14[1];
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    availableWords = _useState16[0],
    setAvailableWords = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    status = _useState18[0],
    setStatus = _useState18[1];
  useEffect(function () {
    if (ADV_SCRAMBLE_SENTENCES[currentIdx]) {
      var shuffled = _toConsumableArray(ADV_SCRAMBLE_SENTENCES[currentIdx].words).sort(function () {
        return Math.random() - 0.5;
      });
      setAvailableWords(shuffled);
      setSelectedWords([]);
      setStatus(null);
    }
  }, [currentIdx]);
  if (currentIdx >= ADV_SCRAMBLE_SENTENCES.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-50 p-6 rounded-2xl text-center border border-amber-200 shadow-sm mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-4xl mb-3"
    }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-bold text-amber-800 mb-2"
    }, "Ch\xFAc m\u1EEBng!"), /*#__PURE__*/React.createElement("p", {
      className: "text-amber-700"
    }, "B\u1EA1n \u0111\xE3 ho\xE0n th\xE0nh tr\xF2 ch\u01A1i X\u1EBFp ch\u1EEF."), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setCurrentIdx(0);
      },
      className: "mt-4 px-4 py-2 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700"
    }, "Ch\u01A1i l\u1EA1i"));
  }
  var s = ADV_SCRAMBLE_SENTENCES[currentIdx];
  var handleSelect = function handleSelect(idx) {
    var word = availableWords[idx];
    setSelectedWords([].concat(_toConsumableArray(selectedWords), [{
      word: word,
      originalIdx: idx
    }]));
    setAvailableWords(availableWords.filter(function (_, i) {
      return i !== idx;
    }));
  };
  var handleDeselect = function handleDeselect(idx) {
    var item = selectedWords[idx];
    var newSelected = _toConsumableArray(selectedWords);
    newSelected.splice(idx, 1);
    setSelectedWords(newSelected);
    var newAvailable = _toConsumableArray(availableWords);
    newAvailable.splice(item.originalIdx, 0, item.word);
    setAvailableWords(newAvailable);
  };
  var checkAnswer = function checkAnswer() {
    var answer = selectedWords.map(function (w) {
      return w.word;
    }).join(" ");
    if (answer === s.correct) {
      setStatus('success');
      setTimeout(function () {
        return setCurrentIdx(currentIdx + 1);
      }, 1500);
    } else {
      setStatus('error');
      setTimeout(function () {
        return setStatus(null);
      }, 1000);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-800"
  }, "Minigame 1: X\u1EBFp ch\u1EEF th\xE0nh c\xE2u"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg"
  }, "C\xE2u ", currentIdx + 1, "/", ADV_SCRAMBLE_SENTENCES.length)), /*#__PURE__*/React.createElement("div", {
    className: "mb-6 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mb-2"
  }, "S\u1EAFp x\u1EBFp c\xE1c t\u1EEB sau \u0111\u1EC3 t\u1EA1o th\xE0nh c\xE2u \u0111\xFAng:"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-slate-800 italic"
  }, "\"", s.vn, "\"")), /*#__PURE__*/React.createElement("div", {
    className: "min-h-[60px] p-3 rounded-xl border-2 mb-4 flex flex-wrap gap-2 items-center justify-center transition-colors ".concat(status === 'success' ? 'border-green-400 bg-green-50' : status === 'error' ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50')
  }, selectedWords.length === 0 && /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 text-sm"
  }, "B\u1EA5m v\xE0o c\xE1c t\u1EEB b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 gh\xE9p c\xE2u"), selectedWords.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("button", {
      key: idx,
      onClick: function onClick() {
        return handleDeselect(idx);
      },
      className: "px-3 py-1.5 bg-amber-600 text-white font-bold rounded-lg shadow-sm hover:bg-amber-700 animate-pop"
    }, item.word);
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 justify-center mb-6 min-h-[50px]"
  }, availableWords.map(function (word, idx) {
    return /*#__PURE__*/React.createElement("button", {
      key: idx,
      onClick: function onClick() {
        return handleSelect(idx);
      },
      className: "px-3 py-1.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg shadow-sm hover:border-amber-400 hover:bg-amber-50 transition-colors"
    }, word);
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: checkAnswer,
    disabled: availableWords.length > 0 || status === 'success',
    className: "px-6 py-2 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 disabled:bg-slate-300 transition-colors"
  }, "Ki\u1EC3m tra")));
};
var ADV_SORT_CATEGORIES = [{
  id: 'time',
  name: 'Thời gian',
  color: 'bg-blue-50 border-blue-200 text-blue-800'
}, {
  id: 'place',
  name: 'Nơi chốn',
  color: 'bg-green-50 border-green-200 text-green-800'
}, {
  id: 'manner',
  name: 'Cách thức',
  color: 'bg-purple-50 border-purple-200 text-purple-800'
}];
var ADV_SORT_WORDS = [{
  id: 1,
  word: 'yesterday',
  cat: 'time'
}, {
  id: 2,
  word: 'carefully',
  cat: 'manner'
}, {
  id: 3,
  word: 'outside',
  cat: 'place'
}, {
  id: 4,
  word: 'now',
  cat: 'time'
}, {
  id: 5,
  word: 'fast',
  cat: 'manner'
}, {
  id: 6,
  word: 'here',
  cat: 'place'
}];
var MinigameSortAdverbs = function MinigameSortAdverbs() {
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    availableWords = _useState20[0],
    setAvailableWords = _useState20[1];
  var _useState21 = useState({
      time: [],
      place: [],
      manner: []
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    buckets = _useState22[0],
    setBuckets = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    selectedWord = _useState24[0],
    setSelectedWord = _useState24[1];
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isWin = _useState26[0],
    setIsWin = _useState26[1];
  useEffect(function () {
    setAvailableWords([].concat(ADV_SORT_WORDS).sort(function () {
      return Math.random() - 0.5;
    }));
  }, []);
  var handleWordClick = function handleWordClick(w) {
    return setSelectedWord((selectedWord === null || selectedWord === void 0 ? void 0 : selectedWord.id) === w.id ? null : w);
  };
  var handleBucketClick = function handleBucketClick(catId) {
    if (!selectedWord) return;
    if (selectedWord.cat === catId) {
      setBuckets(_objectSpread(_objectSpread({}, buckets), {}, _defineProperty({}, catId, [].concat(_toConsumableArray(buckets[catId]), [selectedWord]))));
      var newAvailable = availableWords.filter(function (w) {
        return w.id !== selectedWord.id;
      });
      setAvailableWords(newAvailable);
      setSelectedWord(null);
      if (newAvailable.length === 0) setIsWin(true);
    } else {
      var btn = document.getElementById("bucket-".concat(catId));
      if (btn) {
        btn.classList.add('animate-shake', 'bg-red-100');
        setTimeout(function () {
          return btn.classList.remove('animate-shake', 'bg-red-100');
        }, 500);
      }
      setSelectedWord(null);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-800 mb-4"
  }, "Minigame 2: Ph\xE2n lo\u1EA1i Tr\u1EA1ng t\u1EEB"), isWin ? /*#__PURE__*/React.createElement("div", {
    className: "bg-green-50 p-6 rounded-2xl text-center border border-green-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-4xl mb-3"
  }, "\uD83C\uDFC6"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-green-800 mb-2"
  }, "Tuy\u1EC7t v\u1EDDi!"), /*#__PURE__*/React.createElement("p", {
    className: "text-green-700"
  }, "B\u1EA1n \u0111\xE3 ph\xE2n lo\u1EA1i ch\xEDnh x\xE1c."), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAvailableWords([].concat(ADV_SORT_WORDS).sort(function () {
        return Math.random() - 0.5;
      }));
      setBuckets({
        time: [],
        place: [],
        manner: []
      });
      setIsWin(false);
    },
    className: "mt-4 px-4 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700"
  }, "Ch\u01A1i l\u1EA1i")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mb-4 text-center text-sm"
  }, "B\u1EA5m ch\u1ECDn m\u1ED9t t\u1EEB, sau \u0111\xF3 b\u1EA5m v\xE0o \xF4 t\u01B0\u01A1ng \u1EE9ng \u0111\u1EC3 th\u1EA3 t\u1EEB v\xE0o."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 justify-center mb-8 min-h-[40px]"
  }, availableWords.map(function (w) {
    return /*#__PURE__*/React.createElement("button", {
      key: w.id,
      onClick: function onClick() {
        return handleWordClick(w);
      },
      className: "px-3 py-1.5 font-bold rounded-lg shadow-sm border-2 transition-all ".concat((selectedWord === null || selectedWord === void 0 ? void 0 : selectedWord.id) === w.id ? 'bg-amber-100 border-amber-500 text-amber-800 scale-110' : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300')
    }, w.word);
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-4"
  }, ADV_SORT_CATEGORIES.map(function (cat) {
    return /*#__PURE__*/React.createElement("div", {
      key: cat.id,
      id: "bucket-".concat(cat.id),
      onClick: function onClick() {
        return handleBucketClick(cat.id);
      },
      className: "border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 min-h-[140px] ".concat(selectedWord ? 'border-dashed border-amber-400 bg-amber-50 hover:bg-amber-100 scale-[1.02]' : cat.color)
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold mb-3 opacity-90 text-lg tracking-wide"
    }, cat.name), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-wrap gap-2 justify-center"
    }, buckets[cat.id].map(function (w) {
      return /*#__PURE__*/React.createElement("span", {
        key: w.id,
        className: "px-2.5 py-1 bg-white rounded-lg text-sm font-bold shadow-sm animate-pop border border-slate-100"
      }, w.word);
    })));
  }))));
};

// --- MÔ ĐUN CHÍNH ---
var ADV_STRUCTURES = [{
  tokens: [{
    id: 'adv_s1',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: false,
    type: 'Danh từ / Đại từ',
    desc: 'Chủ thể của câu.'
  }, {
    id: 'adv_v1',
    label: 'Động từ',
    code: 'V',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Nội động từ (không cần tân ngữ theo sau).'
  }, {
    id: 'adv_adv1',
    label: 'Trạng từ',
    code: 'ADV',
    isHighlight: true,
    type: 'Trạng từ',
    desc: 'Đứng SAU động từ, bổ nghĩa cho hành động đó.'
  }],
  examples: [{
    id: 1,
    baseHtml: "The bird flies in the sky.",
    html: "The bird flies <span class='text-amber-800 font-bold'>quickly</span> in the sky.",
    vn: "Con chim bay một cách nhanh chóng trên bầu trời.",
    isCorrect: true,
    exp: ""
  }, {
    id: 2,
    baseHtml: "The boy smiled at me.",
    html: "The boy smiled <span class='text-amber-800 font-bold'>happily</span> at me.",
    vn: "Cậu bé mỉm cười một cách hạnh phúc với tôi.",
    isCorrect: true,
    exp: ""
  }, {
    id: 3,
    baseHtml: "She arrived for the meeting.",
    html: "She arrived <span class='text-amber-800 font-bold'>late</span> for the meeting.",
    vn: "Cô ấy đã đến muộn trong cuộc họp.",
    isCorrect: true,
    exp: ""
  }, {
    id: 4,
    baseHtml: "The team works every day.",
    html: "The team works <span class='text-amber-800 font-bold'>hard</span> every day.",
    vn: "Nhóm làm việc chăm chỉ mỗi ngày.",
    isCorrect: true,
    exp: ""
  }, {
    id: 5,
    baseHtml: "He runs to win the race.",
    html: "He runs <span class='text-amber-800 font-bold'>fastly</span> to win the race.",
    vn: "Anh ấy chạy nhanh để giành chiến thắng.",
    isCorrect: false,
    exp: "Sai vì 'fast' vừa là tính từ vừa là trạng từ, không có từ 'fastly'. Sửa thành: He runs fast to win the race."
  }]
}, {
  tokens: [{
    id: 'adv_s2',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: false,
    type: 'Danh từ / Đại từ',
    desc: 'Chủ thể của câu.'
  }, {
    id: 'adv_v2',
    label: 'Động từ',
    code: 'V',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Ngoại động từ (cần tân ngữ).'
  }, {
    id: 'adv_o2',
    label: 'Tân ngữ',
    code: 'O',
    isHighlight: false,
    type: 'Danh từ / Đại từ',
    desc: 'Đối tượng chịu tác động.'
  }, {
    id: 'adv_adv2',
    label: 'Trạng từ',
    code: 'ADV',
    isHighlight: true,
    type: 'Trạng từ',
    desc: 'Đứng SAU tân ngữ, bổ nghĩa cho động từ chính.'
  }],
  examples: [{
    id: 6,
    baseHtml: "She reads the book before sleeping.",
    html: "She reads the book <span class='text-amber-800 font-bold'>carefully</span> before sleeping.",
    vn: "Cô ấy đọc sách cẩn thận trước khi ngủ.",
    isCorrect: true,
    exp: ""
  }, {
    id: 7,
    baseHtml: "He answered the questions.",
    html: "He answered the questions <span class='text-amber-800 font-bold'>perfectly</span>.",
    vn: "Anh ấy đã trả lời các câu hỏi một cách hoàn hảo.",
    isCorrect: true,
    exp: ""
  }, {
    id: 8,
    baseHtml: "We finished the task.",
    html: "We finished the task <span class='text-amber-800 font-bold'>successfully</span>.",
    vn: "Chúng tôi đã hoàn thành nhiệm vụ thành công.",
    isCorrect: true,
    exp: ""
  }, {
    id: 9,
    baseHtml: "They played the match.",
    html: "They played the match very <span class='text-amber-800 font-bold'>well</span>.",
    vn: "Họ đã chơi trận đấu rất xuất sắc.",
    isCorrect: true,
    exp: ""
  }, {
    id: 10,
    baseHtml: "I learned the new lesson.",
    html: "I learned <span class='text-amber-800 font-bold'>quickly</span> the new lesson.",
    vn: "Tôi đã học bài mới một cách nhanh chóng.",
    isCorrect: false,
    exp: "Sai vị trí. Trạng từ chỉ cách thức không được đứng giữa Động từ và Tân ngữ. Sửa thành: I learned the new lesson quickly."
  }]
}, {
  tokens: [{
    id: 'adv_s3',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: false,
    type: 'Danh từ / Đại từ',
    desc: 'Chủ thể của câu.'
  }, {
    id: 'adv_v3',
    label: 'Động từ tobe',
    code: 'To be',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Động từ nối (am/is/are/was/were).'
  }, {
    id: 'adv_adv3',
    label: 'Trạng từ',
    code: 'ADV',
    isHighlight: true,
    type: 'Trạng từ chỉ mức độ',
    desc: 'Bổ nghĩa cho Tính từ đứng sau nó.'
  }, {
    id: 'adv_adj3',
    label: 'Tính từ',
    code: 'ADJ',
    isHighlight: false,
    type: 'Tính từ',
    desc: 'Miêu tả tính chất của chủ ngữ.'
  }],
  examples: [{
    id: 11,
    baseHtml: "The exam is difficult.",
    html: "The exam is <span class='text-amber-800 font-bold'>extremely</span> difficult.",
    vn: "Bài kiểm tra cực kỳ khó.",
    isCorrect: true,
    exp: ""
  }, {
    id: 12,
    baseHtml: "The view here is beautiful.",
    html: "The view here is <span class='text-amber-800 font-bold'>very</span> beautiful.",
    vn: "Phong cảnh ở đây rất đẹp.",
    isCorrect: true,
    exp: ""
  }, {
    id: 13,
    baseHtml: "I am tired today.",
    html: "I am <span class='text-amber-800 font-bold'>completely</span> tired today.",
    vn: "Hôm nay tôi hoàn toàn mệt mỏi.",
    isCorrect: true,
    exp: ""
  }, {
    id: 14,
    baseHtml: "The movie was interesting.",
    html: "The movie was <span class='text-amber-800 font-bold'>quite</span> interesting.",
    vn: "Bộ phim khá là thú vị.",
    isCorrect: true,
    exp: ""
  }, {
    id: 15,
    baseHtml: "The event was successful.",
    html: "The event was successful <span class='text-amber-800 font-bold'>highly</span>.",
    vn: "Sự kiện cực kỳ thành công.",
    isCorrect: false,
    exp: "Sai vị trí. Trạng từ chỉ mức độ phải đứng TRƯỚC tính từ mà nó bổ nghĩa. Sửa thành: The event was highly successful."
  }]
}];
var LessonTrangTu = function LessonTrangTu() {
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    activeToken = _useState28[0],
    setActiveToken = _useState28[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "animate-pop w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 sm:mb-12 border-l-4 border-amber-800 pl-4 sm:pl-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
  }, "Tr\u1EA1ng T\u1EEB (Adverbs)"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-slate-500 mt-2 font-medium"
  }, "Tr\u1EA1ng t\u1EEB gi\u1ED1ng nh\u01B0 m\u1ED9t lo\u1EA1i \"gia v\u1ECB\" c\u1EE7a c\xE2u! N\xF3 gi\xFAp \u0110\u1ED9ng t\u1EEB, T\xEDnh t\u1EEB ho\u1EB7c m\u1ED9t Tr\u1EA1ng t\u1EEB kh\xE1c th\xEAm ph\u1EA7n m\u1EB7n m\xE0, sinh \u0111\u1ED9ng v\xE0 chi ti\u1EBFt h\u01A1n r\u1EA5t nhi\u1EC1u.")), /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "1"), "S\u1EE9c m\u1EA1nh c\u1EE7a Tr\u1EA1ng t\u1EEB (Adverbs)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "B\u1EA5m v\xE0o bi\u1EC3u t\u01B0\u1EE3ng \u2795 \u1EDF c\xE1c c\xE2u d\u01B0\u1EDBi \u0111\xE2y \u0111\u1EC3 xem Tr\u1EA1ng t\u1EEB gi\xFAp c\xE2u v\u0103n tr\u1EDF n\xEAn ", /*#__PURE__*/React.createElement("strong", null, "sinh \u0111\u1ED9ng v\xE0 chi ti\u1EBFt h\u01A1n"), " nh\u01B0 th\u1EBF n\xE0o nh\xE9!")), ADV_STRUCTURES.map(function (struct, idx) {
    return /*#__PURE__*/React.createElement(StructureRowAdv, {
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
  }, "2"), "C\xE1c lo\u1EA1i Tr\u1EA1ng t\u1EEB ph\u1ED5 bi\u1EBFn"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "B\u1EA5m v\xE0o c\xE2u ti\u1EBFng Anh \u0111\u1EC3 xem ngh\u0129a ti\u1EBFng Vi\u1EC7t.")), /*#__PURE__*/React.createElement(AdverbTypesGrid, null)), /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md"
  }, "3"), "B\xE0i t\u1EADp Th\u1EF1c h\xE0nh"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]"
  }, "C\xF9ng luy\u1EC7n t\u1EADp \u0111\u1EC3 hi\u1EC3u r\xF5 h\u01A1n s\u1EF1 kh\xE1c bi\u1EC7t gi\u1EEFa T\xEDnh t\u1EEB v\xE0 Tr\u1EA1ng t\u1EEB nh\xE9!")), /*#__PURE__*/React.createElement(ExerciseChooseForm, null), /*#__PURE__*/React.createElement(ExerciseTranslateAdv, null), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500 text-white text-base sm:text-lg shrink-0 shadow-md"
  }, "\uD83C\uDFAE"), "Khu v\u1EF1c Gi\u1EA3i tr\xED"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]"
  }, "Th\u1EED th\xE1ch b\u1EA3n th\xE2n v\u1EDBi 2 minigame si\xEAu vui nh\u1ED9n sau \u0111\xE2y nh\xE9!")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
  }, /*#__PURE__*/React.createElement(MinigameWordScramble, null), /*#__PURE__*/React.createElement(MinigameSortAdverbs, null))));
};