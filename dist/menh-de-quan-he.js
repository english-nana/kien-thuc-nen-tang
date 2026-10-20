"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var exercisesData = [{
  title: "A. People — WHO",
  icon: /*#__PURE__*/React.createElement(Users, {
    size: 24,
    className: "text-blue-500"
  }),
  color: "blue",
  example: {
    vn: "Tôi có một người bạn luôn giúp tôi học tiếng Anh.",
    en: "I have a friend who always helps me with English."
  },
  items: [{
    vn: "Tôi biết một giáo viên luôn tạo động lực cho học sinh.",
    en: "I know a teacher who always motivates students.",
    hint: "motivate (v): tạo động lực"
  }, {
    vn: "Tôi có một người bạn học rất chăm chỉ.",
    en: "I have a friend who studies very hard.",
    hint: "study hard: học chăm chỉ"
  }, {
    vn: "Tôi thích những người biết lắng nghe người khác.",
    en: "I like people who listen to others.",
    hint: "listen to others: lắng nghe người khác"
  }, {
    vn: "Tôi gặp một người đã thay đổi cách suy nghĩ của tôi.",
    en: "I met a person who changed my way of thinking.",
    hint: "way of thinking (n): cách suy nghĩ"
  }, {
    vn: "Cô ấy là kiểu người luôn giúp đỡ người khác.",
    en: "She is the type of person who always helps others.",
    hint: "type of person: kiểu người"
  }]
}, {
  title: "B. Things — WHICH / THAT",
  icon: /*#__PURE__*/React.createElement(Layers, {
    size: 24,
    className: "text-emerald-500"
  }),
  color: "emerald",
  example: {
    vn: "Tôi xem một bộ phim làm tôi rất xúc động.",
    en: "I watched a movie that made me very emotional."
  },
  items: [{
    vn: "Tôi mua một chiếc điện thoại hoạt động rất tốt.",
    en: "I bought a phone which/that works very well.",
    hint: "work well: hoạt động tốt"
  }, {
    vn: "Tôi thích những cuốn sách giúp tôi thư giãn.",
    en: "I like books which/that help me relax.",
    hint: "relax (v): thư giãn"
  }, {
    vn: "Tôi sử dụng một ứng dụng giúp tôi học từ vựng.",
    en: "I use an app which/that helps me learn vocabulary.",
    hint: "vocabulary (n): từ vựng"
  }, {
    vn: "Đây là một vấn đề ảnh hưởng đến nhiều người trẻ.",
    en: "This is a problem which/that affects many young people.",
    hint: "affect (v): ảnh hưởng đến"
  }, {
    vn: "Tôi thích những hoạt động giúp tôi giảm căng thẳng.",
    en: "I like activities which/that help me reduce stress.",
    hint: "reduce stress: giảm căng thẳng"
  }]
}, {
  title: "C. Places — WHERE",
  icon: /*#__PURE__*/React.createElement(MapPin, {
    size: 24,
    className: "text-orange-500"
  }),
  color: "orange",
  example: {
    vn: "Tôi sống ở một thành phố có nhiều cây xanh.",
    en: "I live in a city where there are many green spaces."
  },
  items: [{
    vn: "Tôi thường đến một quán cà phê nơi tôi có thể học yên tĩnh.",
    en: "I often go to a café where I can study quietly.",
    hint: "quietly (adv): một cách yên tĩnh"
  }, {
    vn: "Đây là ngôi trường nơi tôi học tiếng Anh.",
    en: "This is the school where I learn English.",
    hint: "school (n): ngôi trường"
  }, {
    vn: "Tôi muốn sống ở một nơi mọi người thân thiện.",
    en: "I want to live in a place where people are friendly.",
    hint: "friendly (adj): thân thiện"
  }, {
    vn: "Chúng tôi đến một nhà hàng nơi phục vụ đồ ăn rất ngon.",
    en: "We went to a restaurant where they serve delicious food.",
    hint: "serve (v): phục vụ | delicious (adj): ngon"
  }, {
    vn: "Đó là công viên nơi tôi thường đi dạo vào buổi tối.",
    en: "That is the park where I often go for a walk in the evening.",
    hint: "go for a walk: đi dạo"
  }]
}, {
  title: "D. Time — WHEN",
  icon: /*#__PURE__*/React.createElement(Clock, {
    size: 24,
    className: "text-purple-500"
  }),
  color: "purple",
  example: {
    vn: "Có một khoảng thời gian tôi cảm thấy rất áp lực.",
    en: "There was a time when I felt extremely stressed."
  },
  items: [{
    vn: "Tôi nhớ ngày tôi tốt nghiệp đại học.",
    en: "I remember the day when I graduated from university.",
    hint: "graduate from: tốt nghiệp (từ)"
  }, {
    vn: "Có một giai đoạn tôi dành nhiều thời gian để học IELTS.",
    en: "There was a period when I spent a lot of time studying IELTS.",
    hint: "a period (n): một giai đoạn | spend time + V-ing: dành thời gian làm gì"
  }, {
    vn: "Chúng ta đang sống trong thời đại công nghệ phát triển nhanh chóng.",
    en: "We are living in an era when technology develops rapidly.",
    hint: "era (n): thời đại | develop rapidly: phát triển nhanh chóng"
  }, {
    vn: "Tôi không thể quên khoảnh khắc tôi nhận được kết quả thi.",
    en: "I cannot forget the moment when I received my exam results.",
    hint: "moment (n): khoảnh khắc | receive (v): nhận được"
  }, {
    vn: "Đó là lúc tôi bắt đầu học tiếng Anh nghiêm túc.",
    en: "That was the time when I started learning English seriously.",
    hint: "seriously (adv): một cách nghiêm túc"
  }]
}, {
  title: "E. Reason — WHY",
  icon: /*#__PURE__*/React.createElement(HelpCircle, {
    size: 24,
    className: "text-rose-500"
  }),
  color: "rose",
  example: {
    vn: "Một lý do tại sao tôi thích tiếng Anh là cơ hội nghề nghiệp tốt hơn.",
    en: "One reason why I like English is better career opportunities."
  },
  items: [{
    vn: "Lý do tại sao nhiều người tập thể dục là để giữ sức khỏe.",
    en: "The reason why many people exercise is to stay healthy.",
    hint: "exercise (v): tập thể dục | stay healthy: giữ sức khỏe"
  }, {
    vn: "Một lý do tại sao học sinh bị căng thẳng là áp lực học tập.",
    en: "One reason why students are stressed is academic pressure.",
    hint: "be stressed: bị căng thẳng | academic pressure: áp lực học tập"
  }, {
    vn: "Đó là lý do tại sao tôi muốn du học.",
    en: "That is the reason why I want to study abroad.",
    hint: "study abroad: du học"
  }, {
    vn: "Lý do tại sao nhiều người thích mua sắm online là sự tiện lợi.",
    en: "The reason why many people like shopping online is convenience.",
    hint: "convenience (n): sự tiện lợi"
  }, {
    vn: "Một lý do tại sao trẻ em thích trò chơi điện tử là vì chúng thú vị.",
    en: "One reason why children like video games is because they are fun.",
    hint: "video games: trò chơi điện tử | fun (adj): thú vị"
  }]
}];
var exercisesPart2 = {
  title: "PHẦN 2 — MỞ RỘNG MỆNH ĐỀ",
  icon: /*#__PURE__*/React.createElement(Zap, {
    size: 24,
    className: "text-amber-500"
  }),
  color: "amber",
  example: {
    vn: "Tiếng Anh là một ngôn ngữ quốc tế và nó rất quan trọng hiện nay.",
    en: "English, which is an international language, is very important nowadays."
  },
  items: [{
    vn: "Mạng xã hội ngày càng phổ biến và nó ảnh hưởng đến cách mọi người giao tiếp.",
    en: "Social media, which is increasingly popular, affects how people communicate.",
    hint: "increasingly popular: ngày càng phổ biến | communicate (v): giao tiếp"
  }, {
    vn: "Cha tôi làm bác sĩ và ông ấy làm việc rất chăm chỉ.",
    en: "My father, who is a doctor, works very hard.",
    hint: "work hard: làm việc chăm chỉ"
  }, {
    vn: "Công nghệ phát triển rất nhanh và nó thay đổi cuộc sống hiện đại.",
    en: "Technology, which develops very fast, changes modern life.",
    hint: "modern life: cuộc sống hiện đại"
  }, {
    vn: "Hà Nội là thủ đô của Việt Nam và nó thu hút nhiều khách du lịch.",
    en: "Hanoi, which is the capital of Vietnam, attracts many tourists.",
    hint: "capital (n): thủ đô | attract (v): thu hút"
  }, {
    vn: "Máy tính rất hữu ích và chúng được sử dụng rộng rãi trong giáo dục.",
    en: "Computers, which are very useful, are widely used in education.",
    hint: "useful (adj): hữu ích | widely used: được sử dụng rộng rãi"
  }, {
    vn: "Nhiều học sinh học online và điều này giúp họ tiết kiệm thời gian.",
    en: "Many students study online, which helps them save time.",
    hint: "save time: tiết kiệm thời gian"
  }, {
    vn: "Trẻ em ngày nay sử dụng điện thoại rất nhiều và điều này có thể ảnh hưởng đến sức khỏe của chúng.",
    en: "Children today use phones a lot, which can affect their health.",
    hint: "affect (v): ảnh hưởng đến"
  }, {
    vn: "Người trẻ thường thức khuya và điều này ảnh hưởng tiêu cực đến sức khỏe.",
    en: "Young people often stay up late, which negatively affects their health.",
    hint: "stay up late: thức khuya | negatively affect: ảnh hưởng tiêu cực"
  }, {
    vn: "Nhiều người thích sống ở thành phố lớn và điều này làm tăng áp lực giao thông.",
    en: "Many people like living in big cities, which increases traffic pressure.",
    hint: "increase (v): làm tăng | traffic pressure: áp lực giao thông"
  }, {
    vn: "Internet cung cấp rất nhiều thông tin và điều này giúp mọi người học dễ dàng hơn.",
    en: "The Internet provides a lot of information, which helps people learn more easily.",
    hint: "provide (v): cung cấp | easily (adv): một cách dễ dàng"
  }]
};
var checkUserAnswer = function checkUserAnswer(user, expected) {
  var normalize = function normalize(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
  };
  var userNorm = normalize(user);
  var sentences = expected.split(/\s+\/\s+/);
  var _iterator = _createForOfIteratorHelper(sentences),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sentence = _step.value;
      var variations = [sentence];
      var slashMatch = sentence.match(/([a-zA-Z]+)\/([a-zA-Z]+)/);
      if (slashMatch) {
        variations = [sentence.replace(slashMatch[0], slashMatch[1]), sentence.replace(slashMatch[0], slashMatch[2])];
      }
      for (var _i = 0, _variations = variations; _i < _variations.length; _i++) {
        var v = _variations[_i];
        if (normalize(v) === userNorm) return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
};
var TranslationExerciseItem = function TranslationExerciseItem(_ref) {
  var item = _ref.item;
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOk = _useState4[0],
    setIsOk = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isError = _useState6[0],
    setIsError = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showHint = _useState8[0],
    setShowHint = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showAnswer = _useState0[0],
    setShowAnswer = _useState0[1];
  var handleCheck = function handleCheck() {
    if (!val.trim()) return;
    if (checkUserAnswer(val, item.en)) {
      setIsOk(true);
      setIsError(false);
      setShowHint(false);
      setShowAnswer(false);
    } else {
      setIsError(true);
      setTimeout(function () {
        return setIsError(false);
      }, 500); // trigger shake
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl shadow-sm transition-all border ".concat(isOk ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200 focus-within:border-blue-400')
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition-colors ".concat(isOk ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500')
  }, isOk ? /*#__PURE__*/React.createElement(CheckCircle2, {
    size: 14
  }) : "!"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start mb-2 gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-slate-800 font-medium"
  }, item.vn), !isOk && item.hint && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowHint(!showHint);
    },
    className: "shrink-0 text-xs font-medium px-2.5 py-1 rounded-md transition-colors border flex items-center gap-1.5 ".concat(showHint ? 'bg-amber-100 text-amber-700 border-amber-200' : 'text-slate-500 hover:text-amber-600 bg-white hover:bg-amber-50 border-slate-200 hover:border-amber-200'),
    title: "B\u1EA5m \u0111\u1EC3 xem t\u1EEB v\u1EF1ng g\u1EE3i \xFD"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[14px]"
  }, "\uD83D\uDCA1"), " ", showHint ? "Ẩn từ vựng" : "Từ vựng")), showHint && !isOk && item.hint && /*#__PURE__*/React.createElement("div", {
    className: "mb-3 text-sm text-amber-800 font-medium p-2.5 bg-amber-50 rounded-lg border border-amber-100 animate-pop flex items-start gap-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 mt-0.5 text-amber-500"
  }, /*#__PURE__*/React.createElement(Zap, {
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, item.hint)), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: isOk ? item.en : val,
    onChange: function onChange(e) {
      setVal(e.target.value);
      setIsError(false);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleCheck();
      }
    },
    disabled: isOk,
    rows: "2",
    placeholder: "",
    onInput: function onInput(e) {
      e.target.style.height = 'auto';
      e.target.style.height = e.target.scrollHeight + 4 + 'px';
    },
    className: "w-full px-4 py-3 rounded-xl outline-none transition-all resize-none overflow-hidden text-base ".concat(isOk ? 'text-emerald-700 font-bold bg-transparent border-transparent cursor-default px-0' : isError ? 'border-2 border-red-500 bg-red-50 text-red-700 animate-shake' : 'border-2 border-slate-200 focus:border-blue-500 bg-slate-50 focus:bg-white text-slate-700 shadow-inner')
  })), !isOk && /*#__PURE__*/React.createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowAnswer(!showAnswer);
    },
    className: "text-xs text-blue-500 hover:text-blue-700 underline font-medium transition-colors"
  }, showAnswer ? "Ẩn đáp án" : "Xem đáp án")), showAnswer && !isOk && /*#__PURE__*/React.createElement("div", {
    className: "mt-2 text-sm text-blue-800 font-medium p-2.5 bg-blue-50 rounded-lg border border-blue-100 animate-pop flex items-start gap-2 shadow-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 mt-0.5 text-blue-500"
  }, /*#__PURE__*/React.createElement(CheckCircle2, {
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, item.en)))));
};
var ExerciseBlock = function ExerciseBlock(_ref2) {
  var data = _ref2.data;
  var bgColors = {
    blue: "bg-blue-50 border-blue-100 text-blue-800",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-800",
    orange: "bg-orange-50 border-orange-100 text-orange-800",
    purple: "bg-purple-50 border-purple-100 text-purple-800",
    rose: "bg-rose-50 border-rose-100 text-rose-800",
    amber: "bg-amber-50 border-amber-100 text-amber-800"
  };
  var headerBg = bgColors[data.color] || "bg-slate-50 border-slate-100 text-slate-800";
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, data.icon, /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-800"
  }, data.title)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-4 mb-6 border shadow-sm ".concat(headerBg)
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold uppercase tracking-wider mb-2 opacity-70"
  }, "V\xED d\u1EE5 m\u1EABu"), /*#__PURE__*/React.createElement("div", {
    className: "font-medium mb-1"
  }, data.example.vn), /*#__PURE__*/React.createElement("div", {
    className: "font-bold border-t border-black/10 pt-2 mt-2 opacity-90 flex gap-2 items-start"
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18,
    className: "shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, data.example.en))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-3"
  }, data.items.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(TranslationExerciseItem, {
      key: idx,
      item: item
    });
  })));
};
var LessonMenhDeQuanHe = function LessonMenhDeQuanHe() {
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    activeToken = _useState10[0],
    setActiveToken = _useState10[1];

  // Dữ liệu cho Cấu trúc 1 (minh hoạ bằng StructureRow)
  var struct1 = {
    tokens: [{
      id: 't1',
      code: 'Danh từ',
      label: 'Noun',
      type: 'Danh từ gốc',
      desc: 'Người, vật, sự việc cần được bổ nghĩa',
      isHighlight: false
    }, {
      id: 't2',
      code: 'who / which / that',
      label: 'Relative Pronoun',
      type: 'Đại từ quan hệ',
      desc: 'Đại diện cho danh từ đứng ngay trước nó',
      isHighlight: true
    }, {
      id: 't3',
      code: 'Verb',
      label: 'Động từ',
      type: 'Hành động',
      desc: 'Động từ được chia theo danh từ gốc',
      isHighlight: false
    }],
    examples: [{
      id: 'e1',
      isCorrect: true,
      html: "I have a <span class='font-bold text-blue-600'>friend who always supports</span> me.",
      vn: "Tôi có một người bạn, người mà luôn ủng hộ tôi.",
      exp: ""
    }, {
      id: 'e2',
      isCorrect: true,
      html: "Governments should invest in <span class='font-bold text-blue-600'>public transport that reduces</span> traffic congestion.",
      vn: "Chính phủ nên đầu tư vào phương tiện công cộng cái mà giúp giảm kẹt xe.",
      exp: ""
    }]
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 animate-pop pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden border border-slate-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4"
  }, /*#__PURE__*/React.createElement(Layers, {
    size: 120
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold mb-4 leading-tight"
  }, "M\u1EC7nh \u0110\u1EC1 Quan H\u1EC7 ", /*#__PURE__*/React.createElement("br", {
    className: "hidden sm:block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-300"
  }, "(Relative Clauses)")), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-200 text-lg max-w-2xl"
  }, "B\xED quy\u1EBFt \"n\xE2ng tr\xECnh\" c\xE2u \u0111\u01A1n th\xE0nh c\xE2u ph\u1EE9c chu\u1EA9n h\u1ECDc thu\u1EADt."))), /*#__PURE__*/React.createElement("section", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(IconInfo, {
    size: 18
  })), "1. M\u1EC7nh \u0111\u1EC1 quan h\u1EC7 d\xF9ng \u0111\u1EC3 l\xE0m g\xEC?"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
  }, ["Nối ý", "Tránh lặp từ", "Tạo Complex Sentences", "Tự nhiên & Học thuật hơn"].map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "bg-slate-50 border border-slate-100 p-3 rounded-xl text-center font-medium text-slate-700 shadow-sm flex items-center justify-center"
    }, item);
  })), /*#__PURE__*/React.createElement(WrongRightPair, {
    wrong: "I know a girl. She speaks English fluently.",
    right: "I know a girl <span class='highlight-text'>who</span> speaks English fluently.",
    note: "G\u1ED9p 2 c\xE2u \u0111\u01A1n th\xE0nh 1 c\xE2u ph\u1EE9c m\u01B0\u1EE3t m\xE0 h\u01A1n."
  })), /*#__PURE__*/React.createElement("section", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Zap, {
    size: 18
  })), "2. Nh\u1EEFng t\u1EEB quan h\u1EC7 QUAN TR\u1ECCNG NH\u1EA4T (IELTS)"), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto hide-scrollbar"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-left border-collapse"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-slate-50 text-slate-500 text-xs sm:text-sm uppercase tracking-wider"
  }, /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 sm:p-3 rounded-tl-xl font-bold"
  }, "T\u1EEB"), /*#__PURE__*/React.createElement("th", {
    className: "hidden sm:table-cell p-3 font-bold"
  }, "Phi\xEAn \xE2m"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 sm:p-3 font-bold"
  }, "D\xF9ng cho"), /*#__PURE__*/React.createElement("th", {
    className: "p-2.5 sm:p-3 rounded-tr-xl font-bold"
  }, "V\xED d\u1EE5 (B\u1EA5m \u0111\u1EC3 d\u1ECBch)"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-slate-100"
  }, [{
    w: "who",
    p: "/huː/",
    u: "Người",
    e: "a person who inspired me",
    vn: "một người đã truyền cảm hứng cho tôi"
  }, {
    w: "which",
    p: "/wɪtʃ/",
    u: "Vật / Sự việc",
    e: "a book which changed my life",
    vn: "một cuốn sách đã thay đổi cuộc đời tôi"
  }, {
    w: "that",
    p: "/ðæt/",
    u: "Người / Vật",
    e: "something that makes me happy",
    vn: "điều gì đó làm tôi hạnh phúc"
  }, {
    w: "where",
    p: "/weə(r)/",
    u: "Nơi chốn",
    e: "a place where I can relax",
    vn: "một nơi mà tôi có thể thư giãn"
  }, {
    w: "when",
    p: "/wen/",
    u: "Thời gian",
    e: "a time when I felt stressed",
    vn: "một khoảng thời gian khi tôi cảm thấy áp lực"
  }, {
    w: "why",
    p: "/waɪ/",
    u: "Lý do",
    e: "the reason why I quit",
    vn: "lý do tại sao tôi nghỉ việc"
  }].map(function (row, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      className: "hover:bg-slate-50 transition-colors"
    }, /*#__PURE__*/React.createElement("td", {
      className: "p-2.5 sm:p-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-bold text-blue-600 text-base sm:text-lg"
    }, row.w), /*#__PURE__*/React.createElement("div", {
      className: "sm:hidden text-slate-400 font-mono text-[11px]"
    }, row.p)), /*#__PURE__*/React.createElement("td", {
      className: "hidden sm:table-cell p-3 text-slate-500 font-mono text-sm"
    }, row.p), /*#__PURE__*/React.createElement("td", {
      className: "p-2.5 sm:p-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs sm:text-sm font-medium inline-block"
    }, row.u)), /*#__PURE__*/React.createElement("td", {
      className: "p-2 sm:p-3 text-xs sm:text-base"
    }, /*#__PURE__*/React.createElement(ClickableSentenceInline, {
      en: row.e,
      vn: row.vn
    })));
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-800 ml-2"
  }, "3. Nh\u1EEFng c\u1EA5u tr\xFAc TH\u1EF0C T\u1EBE NH\u1EA4T"), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md"
  }, "1"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-800"
  }, "C\u1EA5u tr\xFAc who / which / that")), /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold"
  }, "\uD83D\uDC49 Quan tr\u1ECDng nh\u1EA5t")), /*#__PURE__*/React.createElement(StructureRow, {
    struct: struct1,
    activeToken: activeToken,
    setActiveToken: setActiveToken
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-4 mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 rounded-xl p-4 border border-slate-100"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(IconGamepad, {
    size: 16
  }), " Speaking"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "I bought a laptop <b>which works</b> really well.",
    vn: "T\xF4i \u0111\xE3 mua m\u1ED9t chi\u1EBFc laptop c\xE1i m\xE0 ho\u1EA1t \u0111\u1ED9ng r\u1EA5t t\u1ED1t."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "I watched a movie <b>that made</b> me cry.",
    vn: "T\xF4i \u0111\xE3 xem m\u1ED9t b\u1ED9 phim c\xE1i m\xE0 l\xE0m t\xF4i kh\xF3c."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 rounded-xl p-4 border border-slate-100"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(IconCheck, {
    size: 16
  }), " Writing"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Many students prefer online courses <b>which offer</b> flexibility.",
    vn: "Nhi\u1EC1u h\u1ECDc sinh th\xEDch c\xE1c kh\xF3a h\u1ECDc online c\xE1i m\xE0 cung c\u1EA5p s\u1EF1 linh ho\u1EA1t."
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md"
  }, "2"), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-800"
  }, "C\u1EA5u tr\xFAc WHERE")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-800 text-white p-3 rounded-xl font-mono text-center mb-4"
  }, "Place ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-400 font-bold"
  }, "+ where +"), " Subject + Verb"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 mb-4"
  }, /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "My hometown is a peaceful place <b>where people are</b> very friendly.",
    vn: "Qu\xEA t\xF4i l\xE0 m\u1ED9t n\u01A1i thanh b\xECnh n\u01A1i m\xE0 m\u1ECDi ng\u01B0\u1EDDi r\u1EA5t th\xE2n thi\u1EC7n."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Schools should create an environment <b>where students feel</b> motivated.",
    vn: "Tr\u01B0\u1EDDng h\u1ECDc n\xEAn t\u1EA1o ra m\u1ED9t m\xF4i tr\u01B0\u1EDDng n\u01A1i m\xE0 h\u1ECDc sinh c\u1EA3m th\u1EA5y c\xF3 \u0111\u1ED9ng l\u1EF1c (Writing)."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50 text-emerald-800 text-sm p-3 rounded-xl border border-emerald-100"
  }, /*#__PURE__*/React.createElement("strong", null, "M\u1EB9o:"), " D\xF9ng c\u1EF1c nhi\u1EC1u \u0111\u1EC3 m\xF4 t\u1EA3: hometown, favorite place, caf\xE9, school, workplace.")), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement(Clock, {
    size: 24,
    className: "text-orange-500"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-800"
  }, "3. C\u1EA5u tr\xFAc WHEN")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-100 p-2 rounded-lg font-mono text-sm text-center mb-4 text-slate-700"
  }, "Time ", /*#__PURE__*/React.createElement("span", {
    className: "text-orange-500 font-bold"
  }, "+ when +"), " S + V"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "There was a time <b>when I felt</b> under a lot of pressure.",
    vn: "\u0110\xE3 t\u1EEBng c\xF3 th\u1EDDi gian khi t\xF4i c\u1EA3m th\u1EA5y r\u1EA5t nhi\u1EC1u \xE1p l\u1EF1c."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "We live in an era <b>when technology is</b> developing rapidly.",
    vn: "Ch\xFAng ta s\u1ED1ng trong k\u1EF7 nguy\xEAn khi c\xF4ng ngh\u1EC7 \u0111ang ph\xE1t tri\u1EC3n nhanh (Writing)."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement(HelpCircle, {
    size: 24,
    className: "text-purple-500"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-slate-800"
  }, "4. C\u1EA5u tr\xFAc WHY")), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-100 p-2 rounded-lg font-mono text-sm text-center mb-4 text-slate-700"
  }, "The reason ", /*#__PURE__*/React.createElement("span", {
    className: "text-purple-500 font-bold"
  }, "why +"), " S + V"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "One reason <b>why people exercise</b> is to stay healthy.",
    vn: "M\u1ED9t l\xFD do t\u1EA1i sao m\u1ECDi ng\u01B0\u1EDDi t\u1EADp th\u1EC3 d\u1EE5c l\xE0 \u0111\u1EC3 kh\u1ECFe m\u1EA1nh."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "The reason <b>why I enjoy</b> English is that it helps me.",
    vn: "L\xFD do t\u1EA1i sao t\xF4i th\xEDch ti\u1EBFng Anh l\xE0 n\xF3 gi\xFAp \xEDch cho t\xF4i."
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-5"
  }, /*#__PURE__*/React.createElement("section", {
    className: "bg-indigo-50 rounded-2xl p-6 border border-indigo-100"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-indigo-900 mb-2"
  }, "M\u1EC7nh \u0111\u1EC1 KH\xD4NG x\xE1c \u0111\u1ECBnh"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-indigo-700 mb-3"
  }, "B\u1ED5 sung th\xF4ng tin (C\xF3 d\u1EA5u ph\u1EA9y). B\u1ECF \u0111i c\xE2u v\u1EABn c\xF3 ngh\u0129a."), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-2 rounded-lg font-mono text-sm text-center mb-4 text-slate-700 border border-indigo-200 shadow-sm"
  }, "Danh t\u1EEB", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 font-bold text-lg"
  }, ","), " who/which + verb", /*#__PURE__*/React.createElement("span", {
    className: "text-red-500 font-bold text-lg"
  }, ",")), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "My father<b>, who works as a doctor,</b> is very hardworking.",
    vn: "B\u1ED1 t\xF4i, ng\u01B0\u1EDDi l\xE0m b\xE1c s\u0129, r\u1EA5t ch\u0103m ch\u1EC9."
  }), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Social media<b>, which is popular,</b> affects communication.",
    vn: "M\u1EA1ng x\xE3 h\u1ED9i, c\xE1i m\xE0 \u0111ang ph\u1ED5 bi\u1EBFn, \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn giao ti\u1EBFp."
  })), /*#__PURE__*/React.createElement("section", {
    className: "bg-amber-50 rounded-2xl p-6 border border-amber-100"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-amber-900 mb-2"
  }, "L\u01B0\u1EE3c b\u1ECF \u0111\u1EA1i t\u1EEB (Speaking)"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-amber-800 mb-3"
  }, "Ch\u1EC9 b\u1ECF \u0111\u01B0\u1EE3c khi \u0111\u1EA1i t\u1EEB \u0111\xF3ng vai tr\xF2 ", /*#__PURE__*/React.createElement("strong", null, "T\xC2N NG\u1EEE"), "."), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-lg shadow-sm border border-amber-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-start"
  }, /*#__PURE__*/React.createElement(CheckCircle2, {
    size: 18,
    className: "text-emerald-500 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-slate-700 text-sm"
  }, "The book ", /*#__PURE__*/React.createElement("span", {
    className: "text-slate-400 line-through"
  }, "(that)"), " I bought yesterday"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-lg shadow-sm border border-amber-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 items-start"
  }, /*#__PURE__*/React.createElement(XCircle, {
    size: 18,
    className: "text-red-500 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-700 text-sm"
  }, "The teacher ", /*#__PURE__*/React.createElement("span", {
    className: "font-bold underline text-red-500"
  }, "who"), " teaches me"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-red-600 mt-1"
  }, "(Kh\xF4ng b\u1ECF \u0111\u01B0\u1EE3c v\xEC who l\xE0m Ch\u1EE7 ng\u1EEF)"))))))), /*#__PURE__*/React.createElement("section", {
    className: "bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-sm border border-cyan-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 bg-cyan-600 text-white rounded-xl flex items-center justify-center shadow-md"
  }, /*#__PURE__*/React.createElement(IconInfo, {
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-slate-800"
  }, "M\u1EC7nh \u0111\u1EC1 quan h\u1EC7 b\u1ED5 sung cho C\u1EA2 C\xC2U")), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-700 mb-4 text-base sm:text-lg"
  }, "D\xF9ng ", /*#__PURE__*/React.createElement("code", {
    className: "text-cyan-700 font-bold bg-white px-2 py-1 rounded shadow-sm border border-cyan-200"
  }, ", which"), " \u0111\u1EC3 b\u1ED5 ngh\u0129a cho ", /*#__PURE__*/React.createElement("strong", null, "to\xE0n b\u1ED9 s\u1EF1 vi\u1EC7c"), " \u1EDF m\u1EC7nh \u0111\u1EC1 ph\xEDa tr\u01B0\u1EDBc (kh\xF4ng ch\u1EC9 m\u1ED9t danh t\u1EEB). Th\u01B0\u1EDDng \u0111\u01B0\u1EE3c d\u1ECBch l\xE0: ", /*#__PURE__*/React.createElement("em", null, "\"\u0111i\u1EC1u n\xE0y...\""), ". R\u1EA5t t\u1EF1 nhi\xEAn trong giao ti\u1EBFp v\xE0 \u0103n \u0111i\u1EC3m trong Writing."), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-cyan-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(IconGamepad, {
    size: 16
  }), " Giao ti\u1EBFp / Speaking"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "He passed the exam with high scores<b>, which</b> surprised everyone.",
    vn: "Anh \u1EA5y \u0111\u1EADu \u0111i\u1EC3m cao, \u0110I\u1EC0U N\xC0Y l\xE0m m\u1ECDi ng\u01B0\u1EDDi b\u1EA5t ng\u1EDD."
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 rounded-xl border border-cyan-100 shadow-sm"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(IconCheck, {
    size: 16
  }), " Writing Task 2"), /*#__PURE__*/React.createElement(ClickableSentence, {
    en: "Traffic congestion is getting worse<b>, which</b> leads to air pollution.",
    vn: "K\u1EB9t xe ng\xE0y c\xE0ng t\u1EC7, \u0110I\u1EC0U N\xC0Y d\u1EABn \u0111\u1EBFn \xF4 nhi\u1EC5m kh\xF4ng kh\xED."
  })))), /*#__PURE__*/React.createElement("section", {
    className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-800 mb-6"
  }, "4. N\u1ED1i c\xE2u & L\u1ED7i th\u01B0\u1EDDng g\u1EB7p"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement(WrongRightPair, {
    wrong: "I live in a city. The city is crowded.",
    right: "I live in a city <span class='text-blue-600 font-bold'>which is</span> quite crowded.",
    note: "K\u1EF9 n\u0103ng bi\u1EBFn 2 c\xE2u ng\u1EAFn th\xE0nh 1 c\xE2u d\xE0i."
  }), /*#__PURE__*/React.createElement(WrongRightPair, {
    wrong: "a person which helped me",
    right: "a person <span class='text-blue-600 font-bold'>who</span> helped me",
    note: "L\u1ED7i c\u01A1 b\u1EA3n: Kh\xF4ng d\xF9ng which cho ng\u01B0\u1EDDi."
  }), /*#__PURE__*/React.createElement(WrongRightPair, {
    wrong: "The book that it changed my life",
    right: "The book <span class='text-blue-600 font-bold'>that changed</span> my life",
    note: "L\u1ED7i th\u1EEBa ch\u1EE7 ng\u1EEF 'it' sau that."
  }), /*#__PURE__*/React.createElement(WrongRightPair, {
    wrong: "The caf\xE9 where I usually study there",
    right: "The caf\xE9 <span class='text-blue-600 font-bold'>where I usually study</span>",
    note: "\u0110\xE3 d\xF9ng 'where' th\xEC kh\xF4ng d\xF9ng 'there' \u1EDF cu\u1ED1i n\u1EEFa."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg text-white"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-extrabold mb-6 text-blue-300"
  }, "5. M\u1EABu c\xE2u \"\u0102n \u0111i\u1EC3m\" & Templates"), /*#__PURE__*/React.createElement("div", {
    className: "grid md:grid-cols-2 gap-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold mb-4 text-emerald-400 border-b border-slate-600 pb-2 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(IconGamepad, {
    size: 20
  }), " Speaking (Templates)"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 mb-1 uppercase tracking-wider"
  }, "Describe a person"), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-slate-200"
  }, "I\u2019d like to talk about ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300 font-bold"
  }, "a person who has influenced"), " me a lot.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 mb-1 uppercase tracking-wider"
  }, "Describe a place"), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-slate-200"
  }, "It\u2019s ", /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300 font-bold"
  }, "a place where I usually go"), " to relax.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 mb-1 uppercase tracking-wider"
  }, "Explain reasons"), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-slate-200"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-emerald-300 font-bold"
  }, "One reason why I enjoy"), " learning English is better career opportunities.")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold mb-4 text-blue-400 border-b border-slate-600 pb-2 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(IconCheck, {
    size: 20
  }), " Writing Task 2"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-4 text-slate-300"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-blue-400 mt-1"
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, "Governments should support ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-300 font-bold"
  }, "industries that create"), " employment opportunities.")), /*#__PURE__*/React.createElement("li", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-blue-400 mt-1"
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, "We are living in ", /*#__PURE__*/React.createElement("span", {
    className: "text-blue-300 font-bold"
  }, "a society where technology plays"), " a crucial role.")), /*#__PURE__*/React.createElement("li", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-blue-400 mt-1"
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "text-blue-300 font-bold"
  }, "One reason why many students feel"), " stressed is academic pressure.")))))), /*#__PURE__*/React.createElement("section", {
    className: "space-y-6 pt-6 border-t border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-extrabold text-slate-800 mb-2"
  }, "6. B\xE0i T\u1EADp Th\u1EF1c H\xE0nh D\u1ECBch C\xE2u"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600"
  }, "\xC1p d\u1EE5ng ngay c\xE1c c\u1EA5u tr\xFAc v\u1EEBa h\u1ECDc \u0111\u1EC3 d\u1ECBch c\xE1c c\xE2u sau t\u1EEB ti\u1EBFng Vi\u1EC7t sang ti\u1EBFng Anh. H\xE3y g\xF5 \u0111\xE1p \xE1n v\xE0o \xF4 tr\u1ED1ng v\xE0 nh\u1EA5n ", /*#__PURE__*/React.createElement("strong", null, "Enter"), " \u0111\u1EC3 ki\u1EC3m tra nh\xE9.")), /*#__PURE__*/React.createElement(ExerciseBlock, {
    data: exercisesData[0]
  }), /*#__PURE__*/React.createElement(ExerciseBlock, {
    data: exercisesData[1]
  }), /*#__PURE__*/React.createElement(ExerciseBlock, {
    data: exercisesData[2]
  }), /*#__PURE__*/React.createElement(ExerciseBlock, {
    data: exercisesData[3]
  }), /*#__PURE__*/React.createElement(ExerciseBlock, {
    data: exercisesData[4]
  }), /*#__PURE__*/React.createElement(ExerciseBlock, {
    data: exercisesPart2
  })));
};