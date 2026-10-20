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
var sentencePracticeExpandContractions = function sentencePracticeExpandContractions(text) {
  return String(text).replace(/[‘’]/g, "'").replace(/\bI'm\b/gi, "I am").replace(/\bIt's\b/gi, "It is").replace(/\bdoesn't\b/gi, "does not").replace(/\bdon't\b/gi, "do not").replace(/\byou've\b/gi, "you have").replace(/\bthat's\b/gi, "that is");
};
var sentencePracticeNormalize = function sentencePracticeNormalize(text) {
  return sentencePracticeExpandContractions(text).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
};
var sentencePracticeIsMatch = function sentencePracticeIsMatch(userAnswer, item) {
  var acceptedAnswers = [item.en].concat(_toConsumableArray(item.alternatives || []));
  var normalizedUser = sentencePracticeNormalize(userAnswer);
  return acceptedAnswers.some(function (answer) {
    return sentencePracticeNormalize(answer) === normalizedUser;
  });
};
var SentencePracticeShell = function SentencePracticeShell(_ref) {
  var config = _ref.config,
    items = _ref.items;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    resetTick = _useState2[0],
    setResetTick = _useState2[1];
  var handleResetAll = function handleResetAll() {
    setResetTick(function (tick) {
      return tick + 1;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-8 animate-pop pb-20"
  }, /*#__PURE__*/React.createElement("section", {
    className: "rounded-lg border ".concat(config.heroBorder, " ").concat(config.heroBg, " p-5 sm:p-7 shadow-sm overflow-hidden relative")
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute right-5 top-5 hidden sm:block opacity-10 text-slate-900"
  }, /*#__PURE__*/React.createElement(Layers, {
    size: 116
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 max-w-3xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-black uppercase tracking-wide ".concat(config.badgeClass)
  }, config.badge), /*#__PURE__*/React.createElement("h1", {
    className: "mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950"
  }, config.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-3 text-base sm:text-lg text-slate-700 leading-relaxed"
  }, config.subtitle))), /*#__PURE__*/React.createElement(SentenceTheoryPanel, {
    config: config
  }), /*#__PURE__*/React.createElement("section", {
    className: "rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 sm:p-6 border-b border-slate-200 bg-slate-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-black uppercase tracking-wide text-slate-500"
  }, "B\xE0i t\u1EADp d\u1ECBch"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-1 text-2xl font-extrabold text-slate-950"
  }, config.practiceTitle), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-sm sm:text-base text-slate-600"
  }, config.practiceSubtitle)), /*#__PURE__*/React.createElement("button", {
    onClick: handleResetAll,
    className: "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
  }, /*#__PURE__*/React.createElement(Repeat, {
    size: 16
  }), "L\xE0m l\u1EA1i t\u1EA5t c\u1EA3"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(SentencePracticeItem, {
      key: item.id,
      item: item,
      number: index + 1,
      config: config,
      resetTick: resetTick
    });
  }))));
};
var SentenceFormulaPattern = function SentenceFormulaPattern(_ref2) {
  var formula = _ref2.formula,
    config = _ref2.config;
  if (!formula.parts) {
    return /*#__PURE__*/React.createElement("div", {
      className: "mt-3 font-mono text-sm sm:text-base text-slate-100 leading-relaxed"
    }, formula.pattern);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-3 font-mono text-sm sm:text-base text-slate-100 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-2"
  }, formula.parts.map(function (part, index) {
    return part.highlight ? /*#__PURE__*/React.createElement("span", {
      key: index,
      className: "rounded-md px-2 py-1 font-black ring-1 ".concat(config.formulaHighlight)
    }, part.text) : /*#__PURE__*/React.createElement("span", {
      key: index
    }, part.text);
  }));
};
var SentenceTheoryPanel = function SentenceTheoryPanel(_ref3) {
  var config = _ref3.config;
  return /*#__PURE__*/React.createElement("section", {
    className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-lg ".concat(config.iconBg, " ").concat(config.iconText, " flex items-center justify-center")
  }, /*#__PURE__*/React.createElement(IconInfo, {
    size: 21
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-black uppercase tracking-wide text-slate-500"
  }, "T\xF3m t\u1EAFt l\xFD thuy\u1EBFt"), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-extrabold text-slate-950"
  }, config.theoryTitle))), /*#__PURE__*/React.createElement("div", {
    className: "grid sm:grid-cols-2 gap-3"
  }, config.theoryPoints.map(function (point) {
    return /*#__PURE__*/React.createElement("div", {
      key: point.title,
      className: "rounded-lg border border-slate-200 bg-slate-50 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-extrabold text-slate-900"
    }, point.title), /*#__PURE__*/React.createElement("p", {
      className: "mt-2 text-sm text-slate-600 leading-relaxed"
    }, point.text));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-slate-200 bg-slate-900 p-5 sm:p-6 shadow-sm text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-black uppercase tracking-wide text-slate-300"
  }, "Khung vi\u1EBFt nhanh"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-1 text-xl font-extrabold"
  }, config.formulaTitle), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 space-y-3"
  }, config.formulas.map(function (formula) {
    return /*#__PURE__*/React.createElement("div", {
      key: formula.label,
      className: "rounded-lg border border-white/10 bg-white/8 p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex rounded-lg px-2.5 py-1 text-xs font-black ".concat(config.formulaBadge)
    }, formula.label), /*#__PURE__*/React.createElement(SentenceFormulaPattern, {
      formula: formula,
      config: config
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-2 text-sm text-slate-300"
    }, formula.note), formula.example && /*#__PURE__*/React.createElement("div", {
      className: "mt-3 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-100 leading-relaxed"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-black text-slate-300"
    }, "V\xED d\u1EE5: "), formula.example));
  }))));
};
var SentencePracticeItem = function SentencePracticeItem(_ref4) {
  var item = _ref4.item,
    number = _ref4.number,
    config = _ref4.config,
    resetTick = _ref4.resetTick;
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    answer = _useState4[0],
    setAnswer = _useState4[1];
  var _useState5 = useState("idle"),
    _useState6 = _slicedToArray(_useState5, 2),
    status = _useState6[0],
    setStatus = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showHint = _useState8[0],
    setShowHint = _useState8[1];
  useEffect(function () {
    setAnswer("");
    setStatus("idle");
    setShowHint(false);
  }, [resetTick]);
  var isCorrect = status === "correct";
  var isWrong = status === "wrong";
  var handleCheck = function handleCheck() {
    if (!answer.trim()) {
      setStatus("empty");
      return;
    }
    if (sentencePracticeIsMatch(answer, item)) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  };
  var handleReset = function handleReset() {
    setAnswer("");
    setStatus("idle");
  };
  return /*#__PURE__*/React.createElement("article", {
    className: "rounded-lg border p-4 transition-all ".concat(isCorrect ? "border-emerald-200 bg-emerald-50" : isWrong ? "border-rose-200 bg-rose-50/50" : "border-slate-200 bg-white hover:border-slate-300")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shrink-0 h-7 w-7 rounded-lg flex items-center justify-center text-xs font-black ".concat(isCorrect ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500")
  }, isCorrect ? /*#__PURE__*/React.createElement(CheckCircle2, {
    size: 15
  }) : String(number).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-base font-semibold text-slate-900 leading-relaxed"
  }, item.vn))), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: isCorrect ? item.en : answer,
    onChange: function onChange(event) {
      setAnswer(event.target.value);
      if (status === "wrong" || status === "empty") setStatus("idle");
    },
    disabled: isCorrect,
    rows: "2",
    placeholder: "",
    onInput: function onInput(e) {
      e.target.style.height = 'auto';
      e.target.style.height = e.target.scrollHeight + 4 + 'px';
    },
    className: "w-full rounded-xl border-2 px-4 py-3 text-base leading-relaxed outline-none transition-all resize-none overflow-hidden ".concat(isCorrect ? "border-emerald-200 bg-white/70 text-emerald-800 font-bold" : isWrong ? "border-rose-300 bg-white text-rose-800 animate-shake" : "border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-500 focus:bg-white")
  }), status === "empty" && /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2"
  }, "H\xE3y nh\u1EADp c\xE2u tr\u1EA3 l\u1EDDi tr\u01B0\u1EDBc khi ki\u1EC3m tra."), isWrong && /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-semibold text-rose-700 bg-white border border-rose-200 rounded-lg px-3 py-2"
  }, "Ch\u01B0a kh\u1EDBp v\u1EDBi c\xE2u m\u1EABu. H\xE3y ki\u1EC3m tra l\u1EA1i \u0111\u1ED9ng t\u1EEB, li\xEAn t\u1EEB v\xE0 tr\u1EADt t\u1EF1 \xFD."), showHint && /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg border border-amber-200 bg-amber-50 p-3 animate-pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm font-black text-amber-800 mb-2"
  }, /*#__PURE__*/React.createElement(HelpCircle, {
    size: 16
  }), "G\u1EE3i \xFD t\u1EEB v\u1EF1ng"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, item.hints.map(function (hint) {
    return /*#__PURE__*/React.createElement("span", {
      key: hint,
      className: "rounded-lg border border-amber-200 bg-white px-2.5 py-1 text-sm font-semibold text-amber-900"
    }, hint);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowHint(function (value) {
        return !value;
      });
    },
    className: "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-bold transition-colors ".concat(showHint ? "border-amber-300 bg-amber-100 text-amber-800" : "border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-700")
  }, /*#__PURE__*/React.createElement(HelpCircle, {
    size: 16
  }), showHint ? "Ẩn gợi ý" : "Gợi ý từ vựng"), /*#__PURE__*/React.createElement("button", {
    onClick: handleCheck,
    disabled: isCorrect,
    className: "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition-colors ".concat(isCorrect ? "bg-emerald-600 text-white cursor-default" : "".concat(config.buttonClass))
  }, /*#__PURE__*/React.createElement(IconCheck, {
    size: 16
  }), isCorrect ? "Đã đúng" : "Kiểm tra"), (answer || isCorrect) && /*#__PURE__*/React.createElement("button", {
    onClick: handleReset,
    className: "inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-colors"
  }, /*#__PURE__*/React.createElement(Repeat, {
    size: 16
  }), "L\xE0m l\u1EA1i"))));
};
var CAU_GHEP_ITEMS = [{
  id: "cg-01",
  vn: "Nó rất ngon và có hương vị độc đáo.",
  en: "It's very tasty and it has a unique flavor.",
  hints: ["tasty: ngon", "unique flavor: hương vị độc đáo"]
}, {
  id: "cg-02",
  vn: "Bạn có thể tận hưởng không khí trong lành và cảm thấy gần gũi với thiên nhiên.",
  en: "You can enjoy the fresh air and feel connected to nature.",
  hints: ["enjoy: tận hưởng", "fresh air: không khí trong lành", "feel connected to nature: cảm thấy gần gũi với thiên nhiên"]
}, {
  id: "cg-03",
  vn: "Cô ấy lịch sự, gọn gàng và luôn tôn trọng không gian riêng tư của người khác.",
  en: "She is polite, tidy and always respects other people's personal space.",
  hints: ["polite: lịch sự", "tidy: gọn gàng", "respect personal space: tôn trọng không gian riêng tư"]
}, {
  id: "cg-04",
  vn: "Cô ấy không hút thuốc hay tiệc tùng, vì vậy bạn không cần lo lắng về tiếng ồn.",
  en: "She doesn't smoke or party, so you don't need to worry about noise.",
  hints: ["smoke: hút thuốc", "party: tiệc tùng", "worry about noise: lo lắng về tiếng ồn"]
}, {
  id: "cg-05",
  vn: "Nhân viên thân thiện và lịch sự, và họ luôn cố gắng giúp đỡ tôi khi tôi cần gì đó.",
  en: "The staff were friendly and polite, and they always tried to help me when I needed something.",
  hints: ["staff: nhân viên", "friendly and polite: thân thiện và lịch sự", "try to help: cố gắng giúp đỡ"]
}, {
  id: "cg-06",
  vn: "Phòng của tôi sạch sẽ và thoải mái, và bữa sáng ngon với nhiều món ăn đa dạng.",
  en: "My room was clean and comfortable, and the breakfast was tasty with a nice variety of food.",
  hints: ["clean and comfortable: sạch sẽ và thoải mái", "breakfast: bữa sáng", "a nice variety of food: nhiều món ăn đa dạng"]
}, {
  id: "cg-07",
  vn: "Kết nối Wi-Fi yếu vào buổi tối, và máy điều hòa không hoạt động tốt trong đêm đầu tiên.",
  en: "The Wi-Fi connection was weak in the evening, and the air conditioner did not work properly on the first night.",
  hints: ["Wi-Fi connection: kết nối Wi-Fi", "weak: yếu", "air conditioner: máy điều hòa", "work properly: hoạt động tốt"]
}, {
  id: "cg-08",
  vn: "Một số thiết bị trong phòng hơi cũ, và ánh sáng khá tối, điều đó khiến việc thư giãn trở nên khó khăn.",
  en: "Some equipment in the room was a bit old, and the lighting was dim, which made it hard to relax.",
  hints: ["equipment: thiết bị", "a bit old: hơi cũ", "lighting was dim: ánh sáng khá tối", "made it hard to relax: khiến việc thư giãn khó khăn"]
}, {
  id: "cg-09",
  vn: "Mình có thể mang nó đến nhà bạn sau giờ học, hoặc nếu bạn thích, mình có thể đưa cho bạn khi chúng ta gặp nhau ở thư viện.",
  en: "I can bring it to your house after school, or if you prefer, I can give it to you when we meet at the library.",
  hints: ["bring it to your house: mang nó đến nhà bạn", "if you prefer: nếu bạn thích", "meet at the library: gặp ở thư viện"]
}, {
  id: "cg-10",
  vn: "Nhân viên có thể nhanh chóng gọi điện hoặc gửi tin nhắn cho đồng nghiệp hay khách hàng.",
  en: "Employees can quickly call or send messages to their colleagues or clients.",
  hints: ["employees: nhân viên", "send messages: gửi tin nhắn", "colleagues: đồng nghiệp", "clients: khách hàng"]
}, {
  id: "cg-11",
  vn: "Các vấn đề có thể được giải quyết nhanh hơn và công việc có thể trở nên hiệu quả hơn.",
  en: "Problems can be solved faster and work can become more efficient.",
  hints: ["problems can be solved: vấn đề có thể được giải quyết", "faster: nhanh hơn", "more efficient: hiệu quả hơn"]
}, {
  id: "cg-12",
  vn: "Học sinh có thể kết bạn, giao tiếp với bạn bè và tham gia các hoạt động nhóm.",
  en: "Students can make friends, communicate with their peers and do group activities.",
  hints: ["make friends: kết bạn", "communicate with peers: giao tiếp với bạn bè đồng trang lứa", "group activities: hoạt động nhóm"]
}, {
  id: "cg-13",
  vn: "Mọi người có thể gửi tin nhắn hoặc gọi video với bạn bè và gia đình bất cứ lúc nào.",
  en: "People can send messages, or make video calls with friends and family at any time.",
  hints: ["send messages: gửi tin nhắn", "make video calls: gọi video", "at any time: bất cứ lúc nào"]
}, {
  id: "cg-14",
  vn: "Mọi người có thể cảm thấy mệt mỏi, mất động lực và khó tận hưởng cuộc sống hằng ngày.",
  en: "People may feel tired, lose motivation, and find it difficult to enjoy their daily lives.",
  hints: ["feel tired: cảm thấy mệt", "lose motivation: mất động lực", "daily lives: cuộc sống hằng ngày"]
}, {
  id: "cg-15",
  vn: "Mọi người có khả năng mất tiền hoặc thông tin cá nhân.",
  en: "People may lose their money or personal information.",
  hints: ["may lose: có thể mất", "personal information: thông tin cá nhân"]
}, {
  id: "cg-16",
  vn: "Trẻ em có thể trở nên bớt năng động đi và kém khỏe mạnh hơn.",
  en: "Children may become less active and less healthy.",
  hints: ["become: trở nên", "less active: bớt năng động", "less healthy: kém khỏe mạnh hơn"]
}, {
  id: "cg-17",
  vn: "Mọi người có thể tự quyết định giờ làm việc và chọn loại công việc mà họ yêu thích.",
  en: "People can decide their own working hours and choose the type of work they enjoy.",
  hints: ["decide: quyết định", "working hours: giờ làm việc", "the type of work: loại công việc", "they enjoy: họ yêu thích"]
}, {
  id: "cg-18",
  vn: "Họ có thể bỏ bê bài tập về nhà hoặc cảm thấy mệt mỏi trong lớp học.",
  en: "They may ignore homework or feel tired in class.",
  hints: ["ignore homework: bỏ bê bài tập về nhà", "feel tired in class: cảm thấy mệt trong lớp"]
}];
var CAU_GHEP_CONFIG = {
  badge: "Câu ghép",
  title: "Viết Câu Ghép Mượt Và Rõ Ý",
  subtitle: "Ôn lại những điểm quan trọng nhất để nối hai ý hoàn chỉnh, sau đó luyện dịch các câu Việt - Anh thường gặp trong email, mô tả và bài viết ngắn.",
  heroBg: "bg-gradient-to-br from-sky-50 via-white to-emerald-50",
  heroBorder: "border-sky-100",
  badgeClass: "bg-white text-sky-700 border-sky-200",
  iconBg: "bg-sky-100",
  iconText: "text-sky-700",
  buttonClass: "bg-sky-600 text-white hover:bg-sky-700",
  formulaBadge: "bg-yellow-400/20 text-yellow-300",
  formulaHighlight: "bg-yellow-400/20 text-yellow-200 ring-yellow-400/30",
  theoryTitle: "Cách nhận diện và viết câu ghép",
  theoryPoints: [{
    title: "1. Hai ý đều đứng được một mình",
    text: "Mỗi vế thường có chủ ngữ và động từ riêng. Nếu bỏ liên từ đi, từng vế vẫn là một câu có nghĩa."
  }, {
    title: "2. Chọn liên từ theo quan hệ ý",
    text: "Dùng and để thêm ý, or để đưa lựa chọn, so để chỉ kết quả. Khi hai vế dài, đặt dấu phẩy trước liên từ."
  }, {
    title: "3. Giữ cấu trúc song song",
    text: "Khi liệt kê hành động hoặc tính từ, hãy để các phần cùng dạng: call or send messages, clean and comfortable."
  }, {
    title: "4. Tránh nối câu bằng dấu phẩy trống",
    text: "Không viết hai câu hoàn chỉnh chỉ ngăn bằng dấu phẩy. Hãy thêm and, but, or, so hoặc tách thành hai câu."
  }],
  formulaTitle: "Công thức cần nhớ",
  formulas: [{
    label: "Hai mệnh đề chính",
    pattern: "S + V, and / or / so + S + V",
    parts: [{
      text: "S + V, "
    }, {
      text: "and / or / so",
      highlight: true
    }, {
      text: " + S + V"
    }],
    note: "Dùng khi cả hai vế đều có đủ ý.",
    example: "She doesn't smoke or party, so you don't need to worry about noise."
  }, {
    label: "Liệt kê trong một vế",
    pattern: "S + V + A, B and C",
    parts: [{
      text: "S + V + "
    }, {
      text: "A, B and C",
      highlight: true
    }],
    note: "Dùng để câu gọn hơn khi cùng một chủ ngữ.",
    example: "She is polite, tidy and always respects other people's personal space."
  }, {
    label: "Gắn thêm kết quả",
    pattern: "S + V, and S + V, which + V...",
    parts: [{
      text: "S + V, and S + V, "
    }, {
      text: "which + V...",
      highlight: true
    }],
    note: "Dùng khi muốn thêm một mệnh đề giải thích kết quả của cả ý phía trước.",
    example: "The lighting was dim, which made it hard to relax."
  }],
  practiceTitle: "Dịch Câu Ghép Việt - Anh",
  practiceSubtitle: "Bấm gợi ý khi cần từ vựng, rồi tự viết lại câu tiếng Anh hoàn chỉnh trước khi kiểm tra."
};
var LessonCauGhep = function LessonCauGhep() {
  return /*#__PURE__*/React.createElement(SentencePracticeShell, {
    config: CAU_GHEP_CONFIG,
    items: CAU_GHEP_ITEMS
  });
};