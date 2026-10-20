"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// --- COMPONENT CẤU TRÚC RIÊNG CHO BÀI TÍNH TỪ (MÀU CAM ĐẬM) ---
var StructureRowAdj = function StructureRowAdj(_ref) {
  var struct = _ref.struct,
    activeToken = _ref.activeToken,
    setActiveToken = _ref.setActiveToken;
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
      className: "flex flex-col items-center justify-center min-w-[58px] sm:min-w-[76px] py-1.5 px-2 sm:px-3 rounded-xl border-2 transition-all duration-200 ".concat(activeToken === token.id ? 'border-orange-500 ring-2 ring-orange-100 bg-white shadow-md scale-105' : token.isHighlight ? 'bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100 shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50')
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
      className: "font-bold text-orange-400 text-sm mb-1"
    }, token.type), /*#__PURE__*/React.createElement("p", {
      className: "text-sm leading-snug text-slate-200"
    }, token.desc)))), i < struct.tokens.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 font-bold text-base sm:text-xl"
    }, "+"));
  })), selectedTokenObj && /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden mt-3 bg-slate-800 text-white p-3 rounded-xl shadow-md animate-pop text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-orange-400 text-xs mb-1"
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

// --- COMPONENT BÀI TẬP NHẬP LIỆU (ĐÃ NÂNG CẤP ĐỂ NHẬN NHIỀU ĐÁP ÁN & CÓ THỂ MỞ RỘNG Ô CHỮ) ---
var VocabularyInput = function VocabularyInput(_ref2) {
  var item = _ref2.item,
    mode = _ref2.mode;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];
  var _useState3 = useState('idle'),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var inputRef = useRef(null);
  var expectedArr = mode === 'fullPhrase' ? item.acceptedEn || [item.en] : [item.adj];
  var cleanUser = val.trim().toLowerCase().replace(/\s+/g, ' ');
  var isMatch = status === 'correct';

  // Tự động điều chỉnh chiều cao của Textarea để không bị che chữ
  useEffect(function () {
    if (mode !== 'fillAdj' && inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = inputRef.current.scrollHeight + 4 + 'px';
    }
  }, [val, mode, status]);
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Ngăn xuống dòng khi bấm Enter
      var isCorrect = expectedArr.some(function (ans) {
        return cleanUser === ans.trim().toLowerCase().replace(/\s+/g, ' ');
      });
      if (isCorrect) setStatus('correct');else if (cleanUser !== '') {
        setStatus('error');
        setTimeout(function () {
          return setStatus('idle');
        }, 500);
      }
    }
  };
  var handleChange = function handleChange(e) {
    setVal(e.target.value);
    if (status !== 'idle') setStatus('idle');
  };
  var containerClass = 'bg-slate-50 border-slate-200 hover:border-orange-200';
  var inputClass = 'border-slate-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white';
  if (isMatch) {
    containerClass = 'bg-green-50 border-green-300 shadow-sm';
    inputClass = 'border-green-500 bg-green-100/50 text-green-800 font-bold';
  } else if (status === 'error') {
    inputClass = 'border-red-500 bg-red-50 text-red-800 font-bold animate-shake focus:border-red-500 focus:ring-red-100';
  }

  // Giao diện Bài 1 (Sử dụng thẻ input thường vì cần nằm trên 1 hàng)
  if (mode === 'fillAdj') {
    return /*#__PURE__*/React.createElement("div", {
      className: "p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 transition-colors ".concat(containerClass)
    }, /*#__PURE__*/React.createElement("div", {
      className: "sm:w-2/5 flex flex-col border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0 sm:pr-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm sm:text-base font-bold text-slate-700"
    }, item.vn), /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] sm:text-xs text-slate-400 italic mt-0.5"
    }, "\u0110i\u1EC1n t\xEDnh t\u1EEB v\xE0o \xF4 tr\u1ED1ng")), /*#__PURE__*/React.createElement("div", {
      className: "sm:w-3/5 flex flex-wrap items-center gap-2 text-base sm:text-lg font-bold text-slate-700"
    }, item.prefix && /*#__PURE__*/React.createElement("span", {
      className: "shrink-0 whitespace-nowrap"
    }, item.prefix), /*#__PURE__*/React.createElement("div", {
      className: "relative flex-1 min-w-[100px]"
    }, /*#__PURE__*/React.createElement("input", {
      ref: inputRef,
      type: "text",
      value: val,
      onChange: handleChange,
      onKeyDown: handleKeyDown,
      placeholder: "",
      className: "w-full py-3 px-4 pr-8 rounded-xl border-2 outline-none transition-colors text-center text-sm sm:text-base font-medium ".concat(inputClass),
      readOnly: isMatch
    }), isMatch && /*#__PURE__*/React.createElement("div", {
      className: "absolute right-2 top-0 bottom-0 flex items-center text-green-500 animate-pop"
    }, "\u2713")), /*#__PURE__*/React.createElement("span", {
      className: "shrink-0 whitespace-nowrap"
    }, item.noun)));
  }

  // Giao diện Bài 2 & 3 (Sử dụng textarea để tự động xuống dòng, không bị che khuất)
  return /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl border flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 transition-colors ".concat(containerClass)
  }, /*#__PURE__*/React.createElement("div", {
    className: "sm:w-2/5 flex flex-col pt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm sm:text-base font-bold text-slate-700"
  }, mode === 'recallAdj' ? "T\xEDnh t\u1EEB: \"".concat(item.adjVn, "\"") : item.vn), mode === 'recallAdj' && /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-slate-500 italic mt-0.5"
  }, "N\u1EB1m trong c\u1EE5m: ", item.en)), /*#__PURE__*/React.createElement("div", {
    className: "sm:w-3/5 relative flex items-center"
  }, /*#__PURE__*/React.createElement("textarea", {
    ref: inputRef,
    rows: 1,
    value: val,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    placeholder: "",
    className: "w-full py-3 px-4 pr-10 rounded-xl border-2 outline-none text-sm sm:text-base transition-colors resize-none overflow-hidden leading-relaxed ".concat(inputClass),
    readOnly: isMatch
  }), isMatch && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-3 top-2 flex items-center text-green-600 font-extrabold animate-pop pointer-events-none text-lg"
  }, "\u2713")));
};

// 1. CẤU TRÚC LÝ THUYẾT
var TT_STRUCTURES = [{
  tokens: [{
    id: 'tt_s1',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: false,
    type: 'Danh từ / Đại từ',
    desc: 'Chủ thể của câu.'
  }, {
    id: 'tt_v1',
    label: 'Động từ tobe',
    code: 'To be',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Động từ nối (am/is/are/was/were).'
  }, {
    id: 'tt_adj1',
    label: 'Tính từ',
    code: 'Adj',
    isHighlight: true,
    type: 'Tính từ',
    desc: 'Đứng SAU tobe, dùng để miêu tả tính chất của chủ ngữ.'
  }],
  examples: [{
    id: 1,
    html: "The weather is <span class='text-orange-600 font-bold'>hot</span> and <span class='text-orange-600 font-bold'>humid</span>.",
    vn: "Thời tiết thì nóng bức và ẩm ướt.",
    isCorrect: true,
    exp: ""
  }, {
    id: 2,
    html: "Native teachers are very <span class='text-orange-600 font-bold'>friendly</span>.",
    vn: "Giáo viên bản xứ rất thân thiện.",
    isCorrect: true,
    exp: ""
  }, {
    id: 3,
    html: "He is a <span class='text-orange-600 font-bold'>friendly</span>.",
    vn: "Anh ấy là một 'sự thân thiện'.",
    isCorrect: false,
    exp: "Sai vì có mạo từ 'a' thì bắt buộc phải có Danh từ đứng cuối. Sửa thành: He is a friendly person (Anh ấy là một người thân thiện)."
  }]
}, {
  tokens: [{
    id: 'tt_s2',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: true,
    type: 'CỤM DANH TỪ',
    desc: 'Bao gồm: (Mạo từ) + TÍNH TỪ + Danh từ.'
  }, {
    id: 'tt_v2',
    label: 'Động từ',
    code: 'V',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Hành động của chủ ngữ.'
  }, {
    id: 'tt_o2',
    label: 'Tân ngữ',
    code: 'O',
    isHighlight: false,
    type: 'Danh từ / Đại từ / Cụm DT',
    desc: 'Đối tượng chịu tác động.'
  }],
  examples: [{
    id: 4,
    html: "<span class='text-orange-600 font-bold'>A polite person</span> always says thank you.",
    vn: "Một người lịch sự luôn nói cảm ơn.",
    isCorrect: true,
    exp: ""
  }, {
    id: 5,
    html: "<span class='text-orange-600 font-bold'>Unstable Internet connection</span> causes technical issues.",
    vn: "Kết nối Internet không ổn định gây ra các vấn đề kỹ thuật.",
    isCorrect: true,
    exp: ""
  }, {
    id: 6,
    html: "He bought a <span class='text-orange-600 font-bold'>car expensive</span>.",
    vn: "Anh ấy đã mua một chiếc xe đắt tiền.",
    isCorrect: false,
    exp: "Sai vị trí. Trong cụm danh từ tiếng Anh, TÍNH TỪ phải đứng TRƯỚC danh từ chính. Sửa thành: He bought an expensive car."
  }]
}, {
  tokens: [{
    id: 'tt_s3',
    label: 'Chủ ngữ',
    code: 'S',
    isHighlight: false,
    type: 'Danh từ / Đại từ / Cụm DT',
    desc: 'Chủ thể thực hiện hành động.'
  }, {
    id: 'tt_v3',
    label: 'Động từ',
    code: 'V',
    isHighlight: false,
    type: 'Động từ',
    desc: 'Hành động của chủ ngữ.'
  }, {
    id: 'tt_o3',
    label: 'Tân ngữ',
    code: 'O',
    isHighlight: true,
    type: 'CỤM DANH TỪ',
    desc: 'Bao gồm: (Mạo từ) + TÍNH TỪ + Danh từ.'
  }],
  examples: [{
    id: 7,
    html: "I prefer <span class='text-orange-600 font-bold'>a traditional dish</span>.",
    vn: "Tôi thích một món ăn truyền thống hơn.",
    isCorrect: true,
    exp: ""
  }, {
    id: 8,
    html: "We need <span class='text-orange-600 font-bold'>a better environment</span> to work.",
    vn: "Chúng ta cần một môi trường tốt hơn để làm việc.",
    isCorrect: true,
    exp: ""
  }, {
    id: 9,
    html: "She bought a <span class='text-orange-600 font-bold'>clothes comfortable</span>.",
    vn: "Cô ấy đã mua quần áo thoải mái.",
    isCorrect: false,
    exp: "Sai vị trí tính từ và sai mạo từ (clothes là số nhiều không dùng a). Sửa thành: She bought comfortable clothes."
  }]
}];

// 2. DỮ LIỆU TỪ VỰNG (37 CỤM TỪ)
var TT_PHRASE_DB = [{
  id: 1,
  adj: "long",
  noun: "time",
  en: "a long time",
  vn: "một thời gian dài",
  adjVn: "dài",
  prefix: "a"
}, {
  id: 2,
  adj: "traditional",
  noun: "dish",
  en: "a traditional dish",
  vn: "một món ăn truyền thống",
  adjVn: "truyền thống",
  prefix: "a"
}, {
  id: 3,
  adj: "unique",
  noun: "flavor",
  en: "a unique flavor",
  vn: "một hương vị độc đáo",
  adjVn: "độc đáo",
  prefix: "a"
}, {
  id: 4,
  adj: "best",
  noun: "street foods",
  en: "the best street foods",
  acceptedEn: ["the best street foods", "the most delicious street foods"],
  vn: "những món ăn đường phố ngon nhất",
  adjVn: "ngon nhất",
  prefix: "the"
}, {
  id: 5,
  adj: "huge",
  noun: "lake",
  en: "a huge lake",
  vn: "một cái hồ khổng lồ",
  adjVn: "khổng lồ",
  prefix: "a"
}, {
  id: 6,
  adj: "fresh",
  noun: "air",
  en: "fresh air",
  vn: "không khí trong lành",
  adjVn: "trong lành",
  prefix: ""
}, {
  id: 7,
  adj: "light",
  noun: "clothes",
  en: "light clothes",
  vn: "quần áo mỏng nhẹ",
  adjVn: "mỏng nhẹ",
  prefix: ""
}, {
  id: 8,
  adj: "comfortable",
  noun: "clothes",
  en: "comfortable clothes",
  vn: "quần áo thoải mái",
  adjVn: "thoải mái",
  prefix: ""
}, {
  id: 9,
  adj: "hot",
  noun: "weather",
  en: "hot weather",
  vn: "thời tiết nóng bức",
  adjVn: "nóng bức",
  prefix: ""
}, {
  id: 10,
  adj: "humid",
  noun: "weather",
  en: "humid weather",
  vn: "thời tiết ẩm ướt",
  adjVn: "ẩm ướt",
  prefix: ""
}, {
  id: 11,
  adj: "exact",
  noun: "address",
  en: "the exact address",
  vn: "địa chỉ chính xác",
  adjVn: "chính xác",
  prefix: "the"
}, {
  id: 12,
  adj: "tuition",
  noun: "fee",
  en: "the tuition fee",
  vn: "học phí",
  adjVn: "thuộc về học phí",
  prefix: "the"
}, {
  id: 13,
  adj: "native",
  noun: "teachers",
  en: "native teachers",
  vn: "giáo viên bản xứ",
  adjVn: "bản xứ",
  prefix: ""
}, {
  id: 14,
  adj: "short",
  noun: "English course",
  en: "a short English course",
  vn: "một khóa học tiếng Anh ngắn hạn",
  adjVn: "ngắn (hạn)",
  prefix: "a"
}, {
  id: 15,
  adj: "friendly",
  noun: "person",
  en: "a friendly person",
  vn: "một người thân thiện",
  adjVn: "thân thiện",
  prefix: "a"
}, {
  id: 16,
  adj: "polite",
  noun: "person",
  en: "a polite person",
  vn: "một người lịch sự",
  adjVn: "lịch sự",
  prefix: "a"
}, {
  id: 17,
  adj: "simple",
  noun: "meals",
  en: "simple meals",
  vn: "những bữa ăn đơn giản",
  adjVn: "đơn giản",
  prefix: ""
}, {
  id: 18,
  adj: "personal",
  noun: "space",
  en: "personal space",
  vn: "không gian cá nhân",
  adjVn: "cá nhân",
  prefix: ""
}, {
  id: 19,
  adj: "clean",
  noun: "environment",
  en: "a clean environment",
  vn: "một môi trường sạch sẽ",
  adjVn: "sạch sẽ",
  prefix: "a"
}, {
  id: 20,
  adj: "professional",
  noun: "environment",
  en: "a professional environment",
  vn: "một môi trường chuyên nghiệp",
  adjVn: "chuyên nghiệp",
  prefix: "a"
}, {
  id: 21,
  adj: "strong",
  noun: "smell",
  en: "a strong smell",
  vn: "một mùi nồng nặc",
  adjVn: "nồng nặc",
  prefix: "a"
}, {
  id: 22,
  adj: "unpleasant",
  noun: "smell",
  en: "an unpleasant smell",
  vn: "một mùi khó chịu",
  adjVn: "khó chịu",
  prefix: "an"
}, {
  id: 24,
  adj: "weak",
  noun: "Wi-Fi connection",
  en: "weak Wi-Fi connection",
  vn: "kết nối Wi-Fi yếu",
  adjVn: "yếu",
  prefix: ""
}, {
  id: 25,
  adj: "convenience",
  noun: "store",
  en: "a convenience store",
  vn: "một cửa hàng tiện lợi",
  adjVn: "tiện lợi",
  prefix: "a"
}, {
  id: 26,
  adj: "communication",
  noun: "skills",
  en: "communication skills",
  vn: "kỹ năng giao tiếp",
  adjVn: "giao tiếp",
  prefix: ""
}, {
  id: 27,
  adj: "social",
  noun: "skills",
  en: "social skills",
  vn: "kỹ năng xã hội",
  adjVn: "xã hội",
  prefix: ""
}, {
  id: 28,
  adj: "technical",
  noun: "issues",
  en: "technical issues",
  acceptedEn: ["technical issues", "technical problems"],
  vn: "các vấn đề kỹ thuật",
  adjVn: "kỹ thuật",
  prefix: ""
}, {
  id: 29,
  adj: "unstable",
  noun: "Internet connection",
  en: "unstable Internet connection",
  vn: "kết nối Internet không ổn định",
  adjVn: "không ổn định",
  prefix: ""
}, {
  id: 30,
  adj: "poor",
  noun: "audio quality",
  en: "poor audio quality",
  vn: "chất lượng âm thanh kém",
  adjVn: "kém",
  prefix: ""
}, {
  id: 31,
  adj: "traditional",
  noun: "classrooms",
  en: "traditional classrooms",
  vn: "các lớp học truyền thống",
  adjVn: "truyền thống",
  prefix: ""
}, {
  id: 32,
  adj: "better",
  noun: "environment",
  en: "a better environment",
  vn: "một môi trường tốt hơn",
  adjVn: "tốt hơn",
  prefix: "a"
}, {
  id: 33,
  adj: "essential",
  noun: "soft-skills",
  en: "essential soft-skills",
  acceptedEn: ["essential soft-skills", "necessary soft-skills", "important soft-skills"],
  vn: "các kỹ năng mềm thiết yếu",
  adjVn: "thiết yếu",
  prefix: ""
}, {
  id: 34,
  adj: "musical",
  noun: "instrument",
  en: "a musical instrument",
  vn: "một nhạc cụ",
  adjVn: "âm nhạc",
  prefix: "a"
}, {
  id: 35,
  adj: "mental",
  noun: "health",
  en: "mental health",
  vn: "sức khỏe tinh thần",
  adjVn: "tinh thần",
  prefix: ""
}, {
  id: 36,
  adj: "daily",
  noun: "stress",
  en: "daily stress",
  vn: "căng thẳng hàng ngày",
  adjVn: "hàng ngày",
  prefix: ""
}, {
  id: 37,
  adj: "urgent",
  noun: "situations",
  en: "urgent situations",
  vn: "các tình huống khẩn cấp",
  adjVn: "khẩn cấp",
  prefix: ""
}, {
  id: 38,
  adj: "considerable",
  noun: "disadvantages",
  en: "considerable disadvantages",
  acceptedEn: ["considerable disadvantages", "significant disadvantages"],
  vn: "những bất lợi đáng kể",
  adjVn: "đáng kể",
  prefix: ""
}];
var TT_EX1_DATA = TT_PHRASE_DB.slice(0, 12);
var TT_EX2_DATA = TT_PHRASE_DB.slice(12, 24);
var TT_EX3_GROUP1 = TT_PHRASE_DB.slice(0, 13);
var TT_EX3_GROUP2 = TT_PHRASE_DB.slice(13, 25);
var TT_EX3_GROUP3 = TT_PHRASE_DB.slice(25, 37);

// ==========================================
// KHỐI NỘI DUNG CHÍNH - MÔ ĐUN TÍNH TỪ
// ==========================================
var LessonTinhTu = function LessonTinhTu() {
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    activeToken = _useState6[0],
    setActiveToken = _useState6[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "animate-pop w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8 sm:mb-12 border-l-4 border-orange-500 pl-4 sm:pl-5"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
  }, "T\xEDnh T\u1EEB (Adjectives)"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg text-slate-500 mt-2 font-medium"
  }, "L\xE0m cho c\xE2u v\u0103n tr\u1EDF n\xEAn sinh \u0111\u1ED9ng v\xE0 gi\xE0u h\xECnh \u1EA3nh h\u01A1n b\u1EB1ng c\xE1ch th\xEAm c\xE1c t\xEDnh t\u1EEB mi\xEAu t\u1EA3.")), /*#__PURE__*/React.createElement("section", {
    className: "mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0"
  }, "1"), "V\u1ECB tr\xED c\u1EE7a T\xEDnh t\u1EEB trong c\xE2u"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "T\xEDnh t\u1EEB (in ", /*#__PURE__*/React.createElement("strong", {
    className: "text-orange-600"
  }, "m\xE0u cam"), ") th\u01B0\u1EDDng \u0111i sau \u0111\u1ED9ng t\u1EEB ", /*#__PURE__*/React.createElement("strong", null, "tobe"), " ho\u1EB7c \u0111\u1EE9ng TR\u01AF\u1EDAC danh t\u1EEB \u0111\u1EC3 t\u1EA1o th\xE0nh C\u1EE5m danh t\u1EEB.")), TT_STRUCTURES.map(function (struct, idx) {
    return /*#__PURE__*/React.createElement(StructureRowAdj, {
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
  }, "2"), "Kh\u1EDFi \u0111\u1ED9ng: Nh\u1EADn di\u1EC7n T\xEDnh T\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500 mt-2"
  }, "B\xE0i t\u1EADp 1 & 2 gi\xFAp b\u1EA1n l\xE0m quen v\xE0 ghi nh\u1EDB m\u1EB7t ch\u1EEF c\u1EE7a c\xE1c t\xEDnh t\u1EEB quan tr\u1ECDng.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4 border-b border-slate-100 pb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-slate-800"
  }, "B\xE0i 1: \u0110i\u1EC1n t\xEDnh t\u1EEB v\xE0o ch\u1ED7 tr\u1ED1ng"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 overflow-y-auto max-h-[600px] pr-2 hide-scrollbar"
  }, TT_EX1_DATA.map(function (item) {
    return /*#__PURE__*/React.createElement(VocabularyInput, {
      key: item.id,
      item: item,
      mode: "fillAdj"
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-md flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4 border-b border-slate-700 pb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-bold text-white"
  }, "B\xE0i 2: Th\u1EED t\xE0i d\u1ECBch thu\u1EADt"))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 overflow-y-auto max-h-[600px] pr-2 hide-scrollbar"
  }, TT_EX2_DATA.map(function (item) {
    return /*#__PURE__*/React.createElement(VocabularyInput, {
      key: item.id,
      item: item,
      mode: "recallAdj"
    });
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "mb-14 relative z-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md"
  }, "3"), "Th\u1EED th\xE1ch: Vi\u1EBFt C\u1EE5m Danh T\u1EEB"), /*#__PURE__*/React.createElement("p", {
    className: "text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]"
  }, "M\u1EE5c ti\xEAu cu\u1ED1i c\xF9ng: L\u1ED3ng gh\xE9p T\xEDnh t\u1EEB v\xE0o Danh t\u1EEB \u0111\u1EC3 vi\u1EBFt th\xE0nh c\u1EE5m ho\xE0n ch\u1EC9nh (\u0111\xE3 b\u1ECF n\xFAt hi\u1EC7n \u0111\xE1p \xE1n, b\u1EA1n ph\u1EA3i t\u1EF1 nh\u1EDB nh\xE9).")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 border-b border-slate-100 pb-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm sm:text-base text-slate-500"
  }, "H\xE3y nh\u1EADp nguy\xEAn c\u1EE5m ti\u1EBFng Anh (bao g\u1ED3m c\u1EA3 m\u1EA1o t\u1EEB a, an, the n\u1EBFu c\xF3).")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-fuchsia-50/40 p-4 sm:p-6 rounded-2xl border border-fuchsia-100"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-fuchsia-800 mb-4 text-lg flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-fuchsia-100 p-1.5 rounded-lg"
  }, "\uD83C\uDF31"), " Nh\xF3m \u0110\u1EDDi s\u1ED1ng & T\u1EF1 nhi\xEAn"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, TT_EX3_GROUP1.map(function (item) {
    return /*#__PURE__*/React.createElement(VocabularyInput, {
      key: item.id,
      item: item,
      mode: "fullPhrase"
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-blue-50/40 p-4 sm:p-6 rounded-2xl border border-blue-100"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-blue-800 mb-4 text-lg flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-blue-100 p-1.5 rounded-lg"
  }, "\uD83D\uDC65"), " Nh\xF3m Con ng\u01B0\u1EDDi & M\xF4i tr\u01B0\u1EDDng"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, TT_EX3_GROUP2.map(function (item) {
    return /*#__PURE__*/React.createElement(VocabularyInput, {
      key: item.id,
      item: item,
      mode: "fullPhrase"
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-amber-50/40 p-4 sm:p-6 rounded-2xl border border-amber-100"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-bold text-amber-800 mb-4 text-lg flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-amber-100 p-1.5 rounded-lg"
  }, "\u2699\uFE0F"), " Nh\xF3m K\u1EF9 thu\u1EADt & T\xECnh hu\u1ED1ng"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, TT_EX3_GROUP3.map(function (item) {
    return /*#__PURE__*/React.createElement(VocabularyInput, {
      key: item.id,
      item: item,
      mode: "fullPhrase"
    });
  })))))));
};