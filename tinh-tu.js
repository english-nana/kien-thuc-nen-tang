// --- COMPONENT CẤU TRÚC RIÊNG CHO BÀI TÍNH TỪ (MÀU CAM ĐẬM) ---
const StructureRowAdj = ({ struct, activeToken, setActiveToken }) => {
    const selectedTokenObj = struct.tokens.find(t => t.id === activeToken);
    return (
    <div className="bg-white p-3.5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-5 relative z-10">
        <div className="bg-slate-50/50 rounded-xl py-3 sm:py-4 px-2.5 sm:px-3 border border-slate-100 mb-5 sm:mb-6">
            <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-3">
            {struct.tokens.map((token, i) => (
                <Fragment key={token.id}>
                    <div className={`relative flex flex-col items-center ${activeToken === token.id ? 'z-30' : 'z-10'}`}>
                        <button 
                            onClick={() => setActiveToken(activeToken === token.id ? null : token.id)}
                            className={`flex flex-col items-center justify-center min-w-[58px] sm:min-w-[76px] py-1.5 px-2 sm:px-3 rounded-xl border-2 transition-all duration-200 ${
                                activeToken === token.id 
                                    ? 'border-orange-500 ring-2 ring-orange-100 bg-white shadow-md scale-105' 
                                    : token.isHighlight 
                                        ? 'bg-orange-50 border-orange-300 text-orange-700 hover:bg-orange-100 shadow-sm' 
                                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                            <span className={`font-bold text-sm sm:text-lg ${activeToken === token.id ? 'text-slate-800' : ''}`}>{token.code}</span>
                            <span className={`text-[10px] sm:text-[11px] mt-0.5 whitespace-nowrap ${activeToken === token.id ? 'text-slate-500' : ''}`}>{token.label}</span>
                        </button>

                        {activeToken === token.id && (
                            <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 z-[100] pointer-events-none">
                                <div className="bg-slate-800 text-white p-4 rounded-xl shadow-xl animate-pop text-center flex flex-col items-center relative pointer-events-auto">
                                    <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-slate-800"></div>
                                    <div className="font-bold text-orange-400 text-sm mb-1">{token.type}</div>
                                    <p className="text-sm leading-snug text-slate-200">{token.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {i < struct.tokens.length - 1 && <span className="text-slate-300 font-bold text-base sm:text-xl">+</span>}
                </Fragment>
            ))}
            </div>
            {selectedTokenObj && (
                <div className="sm:hidden mt-3 bg-slate-800 text-white p-3 rounded-xl shadow-md animate-pop text-center">
                    <div className="font-bold text-orange-400 text-xs mb-1">{selectedTokenObj.label} ({selectedTokenObj.code}) — {selectedTokenObj.type}</div>
                    <p className="text-xs leading-relaxed text-slate-200">{selectedTokenObj.desc}</p>
                </div>
            )}
        </div>
        <div>
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">Ví dụ phân tích:</div>
            <div className="space-y-2 sm:space-y-3">
                {struct.examples.map(ex => (
                    <StructureExample key={ex.id} ex={ex} />
                ))}
            </div>
        </div>
    </div>
    );
};

// --- COMPONENT BÀI TẬP NHẬP LIỆU (ĐÃ NÂNG CẤP ĐỂ NHẬN NHIỀU ĐÁP ÁN & CÓ THỂ MỞ RỘNG Ô CHỮ) ---
const VocabularyInput = ({ item, mode }) => {
    const [val, setVal] = useState('');
    const [status, setStatus] = useState('idle');
    const inputRef = useRef(null);

    const expectedArr = mode === 'fullPhrase' ? (item.acceptedEn || [item.en]) : [item.adj];
    const cleanUser = val.trim().toLowerCase().replace(/\s+/g, ' ');
    const isMatch = status === 'correct';

    // Tự động điều chỉnh chiều cao của Textarea để không bị che chữ
    useEffect(() => {
        if (mode !== 'fillAdj' && inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = (inputRef.current.scrollHeight + 4) + 'px';
        }
    }, [val, mode, status]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn xuống dòng khi bấm Enter
            const isCorrect = expectedArr.some(ans => cleanUser === ans.trim().toLowerCase().replace(/\s+/g, ' '));
            if (isCorrect) setStatus('correct');
            else if (cleanUser !== '') {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 500);
            }
        }
    };

    const handleChange = (e) => {
        setVal(e.target.value);
        if (status !== 'idle') setStatus('idle');
    };

    let containerClass = 'bg-slate-50 border-slate-200 hover:border-orange-200';
    let inputClass = 'border-slate-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white';
    
    if (isMatch) {
        containerClass = 'bg-green-50 border-green-300 shadow-sm';
        inputClass = 'border-green-500 bg-green-100/50 text-green-800 font-bold';
    } else if (status === 'error') {
        inputClass = 'border-red-500 bg-red-50 text-red-800 font-bold animate-shake focus:border-red-500 focus:ring-red-100';
    }

    // Giao diện Bài 1 (Sử dụng thẻ input thường vì cần nằm trên 1 hàng)
    if (mode === 'fillAdj') {
        return (
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 transition-colors ${containerClass}`}>
                <div className="sm:w-2/5 flex flex-col border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0 sm:pr-4">
                    <span className="text-sm sm:text-base font-bold text-slate-700">{item.vn}</span>
                    <span className="text-[11px] sm:text-xs text-slate-400 italic mt-0.5">Điền tính từ vào ô trống</span>
                </div>
                <div className="sm:w-3/5 flex flex-wrap items-center gap-2 text-base sm:text-lg font-bold text-slate-700">
                    {item.prefix && <span className="shrink-0 whitespace-nowrap">{item.prefix}</span>}
                    <div className="relative flex-1 min-w-[100px]">
                        <input 
                            ref={inputRef} type="text" value={val} onChange={handleChange} onKeyDown={handleKeyDown}
                            placeholder=""
                            className={`w-full py-3 px-4 pr-8 rounded-xl border-2 outline-none transition-colors text-center text-sm sm:text-base font-medium ${inputClass}`}
                            readOnly={isMatch}
                        />
                        {isMatch && <div className="absolute right-2 top-0 bottom-0 flex items-center text-green-500 animate-pop">✓</div>}
                    </div>
                    <span className="shrink-0 whitespace-nowrap">{item.noun}</span>
                </div>
            </div>
        );
    }

    // Giao diện Bài 2 & 3 (Sử dụng textarea để tự động xuống dòng, không bị che khuất)
    return (
        <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 transition-colors ${containerClass}`}>
            <div className="sm:w-2/5 flex flex-col pt-2">
                <span className="text-sm sm:text-base font-bold text-slate-700">
                    {mode === 'recallAdj' ? `Tính từ: "${item.adjVn}"` : item.vn}
                </span>
                {mode === 'recallAdj' && <span className="text-xs text-slate-500 italic mt-0.5">Nằm trong cụm: {item.en}</span>}
            </div>
            <div className="sm:w-3/5 relative flex items-center">
                <textarea 
                    ref={inputRef} rows={1} value={val} onChange={handleChange} onKeyDown={handleKeyDown}
                    placeholder=""
                    className={`w-full py-3 px-4 pr-10 rounded-xl border-2 outline-none text-sm sm:text-base transition-colors resize-none overflow-hidden leading-relaxed ${inputClass}`}
                    readOnly={isMatch}
                />
                {isMatch && <div className="absolute right-3 top-2 flex items-center text-green-600 font-extrabold animate-pop pointer-events-none text-lg">✓</div>}
            </div>
        </div>
    );
};

// 1. CẤU TRÚC LÝ THUYẾT
const TT_STRUCTURES = [
    {
        tokens: [
            { id: 'tt_s1', label: 'Chủ ngữ', code: 'S', isHighlight: false, type: 'Danh từ / Đại từ', desc: 'Chủ thể của câu.' },
            { id: 'tt_v1', label: 'Động từ tobe', code: 'To be', isHighlight: false, type: 'Động từ', desc: 'Động từ nối (am/is/are/was/were).' },
            { id: 'tt_adj1', label: 'Tính từ', code: 'Adj', isHighlight: true, type: 'Tính từ', desc: 'Đứng SAU tobe, dùng để miêu tả tính chất của chủ ngữ.' }
        ],
        examples: [
            { id: 1, html: "The weather is <span class='text-orange-600 font-bold'>hot</span> and <span class='text-orange-600 font-bold'>humid</span>.", vn: "Thời tiết thì nóng bức và ẩm ướt.", isCorrect: true, exp: "" },
            { id: 2, html: "Native teachers are very <span class='text-orange-600 font-bold'>friendly</span>.", vn: "Giáo viên bản xứ rất thân thiện.", isCorrect: true, exp: "" },
            { id: 3, html: "He is a <span class='text-orange-600 font-bold'>friendly</span>.", vn: "Anh ấy là một 'sự thân thiện'.", isCorrect: false, exp: "Sai vì có mạo từ 'a' thì bắt buộc phải có Danh từ đứng cuối. Sửa thành: He is a friendly person (Anh ấy là một người thân thiện)." }
        ]
    },
    {
        tokens: [
            { id: 'tt_s2', label: 'Chủ ngữ', code: 'S', isHighlight: true, type: 'CỤM DANH TỪ', desc: 'Bao gồm: (Mạo từ) + TÍNH TỪ + Danh từ.' },
            { id: 'tt_v2', label: 'Động từ', code: 'V', isHighlight: false, type: 'Động từ', desc: 'Hành động của chủ ngữ.' },
            { id: 'tt_o2', label: 'Tân ngữ', code: 'O', isHighlight: false, type: 'Danh từ / Đại từ / Cụm DT', desc: 'Đối tượng chịu tác động.' }
        ],
        examples: [
            { id: 4, html: "<span class='text-orange-600 font-bold'>A polite person</span> always says thank you.", vn: "Một người lịch sự luôn nói cảm ơn.", isCorrect: true, exp: "" },
            { id: 5, html: "<span class='text-orange-600 font-bold'>Unstable Internet connection</span> causes technical issues.", vn: "Kết nối Internet không ổn định gây ra các vấn đề kỹ thuật.", isCorrect: true, exp: "" },
            { id: 6, html: "He bought a <span class='text-orange-600 font-bold'>car expensive</span>.", vn: "Anh ấy đã mua một chiếc xe đắt tiền.", isCorrect: false, exp: "Sai vị trí. Trong cụm danh từ tiếng Anh, TÍNH TỪ phải đứng TRƯỚC danh từ chính. Sửa thành: He bought an expensive car." }
        ]
    },
    {
        tokens: [
            { id: 'tt_s3', label: 'Chủ ngữ', code: 'S', isHighlight: false, type: 'Danh từ / Đại từ / Cụm DT', desc: 'Chủ thể thực hiện hành động.' },
            { id: 'tt_v3', label: 'Động từ', code: 'V', isHighlight: false, type: 'Động từ', desc: 'Hành động của chủ ngữ.' },
            { id: 'tt_o3', label: 'Tân ngữ', code: 'O', isHighlight: true, type: 'CỤM DANH TỪ', desc: 'Bao gồm: (Mạo từ) + TÍNH TỪ + Danh từ.' }
        ],
        examples: [
            { id: 7, html: "I prefer <span class='text-orange-600 font-bold'>a traditional dish</span>.", vn: "Tôi thích một món ăn truyền thống hơn.", isCorrect: true, exp: "" },
            { id: 8, html: "We need <span class='text-orange-600 font-bold'>a better environment</span> to work.", vn: "Chúng ta cần một môi trường tốt hơn để làm việc.", isCorrect: true, exp: "" },
            { id: 9, html: "She bought a <span class='text-orange-600 font-bold'>clothes comfortable</span>.", vn: "Cô ấy đã mua quần áo thoải mái.", isCorrect: false, exp: "Sai vị trí tính từ và sai mạo từ (clothes là số nhiều không dùng a). Sửa thành: She bought comfortable clothes." }
        ]
    }
];

// 2. DỮ LIỆU TỪ VỰNG (37 CỤM TỪ)
const TT_PHRASE_DB = [
    { id: 1, adj: "long", noun: "time", en: "a long time", vn: "một thời gian dài", adjVn: "dài", prefix: "a" },
    { id: 2, adj: "traditional", noun: "dish", en: "a traditional dish", vn: "một món ăn truyền thống", adjVn: "truyền thống", prefix: "a" },
    { id: 3, adj: "unique", noun: "flavor", en: "a unique flavor", vn: "một hương vị độc đáo", adjVn: "độc đáo", prefix: "a" },
    { id: 4, adj: "best", noun: "street foods", en: "the best street foods", acceptedEn: ["the best street foods", "the most delicious street foods"], vn: "những món ăn đường phố ngon nhất", adjVn: "ngon nhất", prefix: "the" },
    { id: 5, adj: "huge", noun: "lake", en: "a huge lake", vn: "một cái hồ khổng lồ", adjVn: "khổng lồ", prefix: "a" },
    { id: 6, adj: "fresh", noun: "air", en: "fresh air", vn: "không khí trong lành", adjVn: "trong lành", prefix: "" },
    { id: 7, adj: "light", noun: "clothes", en: "light clothes", vn: "quần áo mỏng nhẹ", adjVn: "mỏng nhẹ", prefix: "" },
    { id: 8, adj: "comfortable", noun: "clothes", en: "comfortable clothes", vn: "quần áo thoải mái", adjVn: "thoải mái", prefix: "" },
    { id: 9, adj: "hot", noun: "weather", en: "hot weather", vn: "thời tiết nóng bức", adjVn: "nóng bức", prefix: "" },
    { id: 10, adj: "humid", noun: "weather", en: "humid weather", vn: "thời tiết ẩm ướt", adjVn: "ẩm ướt", prefix: "" },
    { id: 11, adj: "exact", noun: "address", en: "the exact address", vn: "địa chỉ chính xác", adjVn: "chính xác", prefix: "the" },
    { id: 12, adj: "tuition", noun: "fee", en: "the tuition fee", vn: "học phí", adjVn: "thuộc về học phí", prefix: "the" }, 
    { id: 13, adj: "native", noun: "teachers", en: "native teachers", vn: "giáo viên bản xứ", adjVn: "bản xứ", prefix: "" },
    { id: 14, adj: "short", noun: "English course", en: "a short English course", vn: "một khóa học tiếng Anh ngắn hạn", adjVn: "ngắn (hạn)", prefix: "a" },
    { id: 15, adj: "friendly", noun: "person", en: "a friendly person", vn: "một người thân thiện", adjVn: "thân thiện", prefix: "a" },
    { id: 16, adj: "polite", noun: "person", en: "a polite person", vn: "một người lịch sự", adjVn: "lịch sự", prefix: "a" },
    { id: 17, adj: "simple", noun: "meals", en: "simple meals", vn: "những bữa ăn đơn giản", adjVn: "đơn giản", prefix: "" },
    { id: 18, adj: "personal", noun: "space", en: "personal space", vn: "không gian cá nhân", adjVn: "cá nhân", prefix: "" },
    { id: 19, adj: "clean", noun: "environment", en: "a clean environment", vn: "một môi trường sạch sẽ", adjVn: "sạch sẽ", prefix: "a" },
    { id: 20, adj: "professional", noun: "environment", en: "a professional environment", vn: "một môi trường chuyên nghiệp", adjVn: "chuyên nghiệp", prefix: "a" },
    { id: 21, adj: "strong", noun: "smell", en: "a strong smell", vn: "một mùi nồng nặc", adjVn: "nồng nặc", prefix: "a" },
    { id: 22, adj: "unpleasant", noun: "smell", en: "an unpleasant smell", vn: "một mùi khó chịu", adjVn: "khó chịu", prefix: "an" },
    { id: 24, adj: "weak", noun: "Wi-Fi connection", en: "weak Wi-Fi connection", vn: "kết nối Wi-Fi yếu", adjVn: "yếu", prefix: "" },
    { id: 25, adj: "convenience", noun: "store", en: "a convenience store", vn: "một cửa hàng tiện lợi", adjVn: "tiện lợi", prefix: "a" },
    { id: 26, adj: "communication", noun: "skills", en: "communication skills", vn: "kỹ năng giao tiếp", adjVn: "giao tiếp", prefix: "" },
    { id: 27, adj: "social", noun: "skills", en: "social skills", vn: "kỹ năng xã hội", adjVn: "xã hội", prefix: "" },
    { id: 28, adj: "technical", noun: "issues", en: "technical issues", acceptedEn: ["technical issues", "technical problems"], vn: "các vấn đề kỹ thuật", adjVn: "kỹ thuật", prefix: "" },
    { id: 29, adj: "unstable", noun: "Internet connection", en: "unstable Internet connection", vn: "kết nối Internet không ổn định", adjVn: "không ổn định", prefix: "" },
    { id: 30, adj: "poor", noun: "audio quality", en: "poor audio quality", vn: "chất lượng âm thanh kém", adjVn: "kém", prefix: "" },
    { id: 31, adj: "traditional", noun: "classrooms", en: "traditional classrooms", vn: "các lớp học truyền thống", adjVn: "truyền thống", prefix: "" },
    { id: 32, adj: "better", noun: "environment", en: "a better environment", vn: "một môi trường tốt hơn", adjVn: "tốt hơn", prefix: "a" },
    { id: 33, adj: "essential", noun: "soft-skills", en: "essential soft-skills", acceptedEn: ["essential soft-skills", "necessary soft-skills", "important soft-skills"], vn: "các kỹ năng mềm thiết yếu", adjVn: "thiết yếu", prefix: "" },
    { id: 34, adj: "musical", noun: "instrument", en: "a musical instrument", vn: "một nhạc cụ", adjVn: "âm nhạc", prefix: "a" },
    { id: 35, adj: "mental", noun: "health", en: "mental health", vn: "sức khỏe tinh thần", adjVn: "tinh thần", prefix: "" },
    { id: 36, adj: "daily", noun: "stress", en: "daily stress", vn: "căng thẳng hàng ngày", adjVn: "hàng ngày", prefix: "" },
    { id: 37, adj: "urgent", noun: "situations", en: "urgent situations", vn: "các tình huống khẩn cấp", adjVn: "khẩn cấp", prefix: "" },
    { id: 38, adj: "considerable", noun: "disadvantages", en: "considerable disadvantages", acceptedEn: ["considerable disadvantages", "significant disadvantages"], vn: "những bất lợi đáng kể", adjVn: "đáng kể", prefix: "" }
];

const TT_EX1_DATA = TT_PHRASE_DB.slice(0, 12);
const TT_EX2_DATA = TT_PHRASE_DB.slice(12, 24);
const TT_EX3_GROUP1 = TT_PHRASE_DB.slice(0, 13);
const TT_EX3_GROUP2 = TT_PHRASE_DB.slice(13, 25);
const TT_EX3_GROUP3 = TT_PHRASE_DB.slice(25, 37);

// ==========================================
// KHỐI NỘI DUNG CHÍNH - MÔ ĐUN TÍNH TỪ
// ==========================================
const LessonTinhTu = () => {
    const [activeToken, setActiveToken] = useState(null);

    return (
        <div className="animate-pop w-full">
            {/* HERO SECTION */}
            <div className="mb-8 sm:mb-12 border-l-4 border-orange-500 pl-4 sm:pl-5">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Tính Từ (Adjectives)</h1>
                <p className="text-base sm:text-lg text-slate-500 mt-2 font-medium">Làm cho câu văn trở nên sinh động và giàu hình ảnh hơn bằng cách thêm các tính từ miêu tả.</p>
            </div>

            {/* PHẦN 1: NHẮC LẠI CẤU TRÚC */}
            <section className="mb-12 sm:mb-16">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">1</span>
                        Vị trí của Tính từ trong câu
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-2">Tính từ (in <strong className="text-orange-600">màu cam</strong>) thường đi sau động từ <strong>tobe</strong> hoặc đứng TRƯỚC danh từ để tạo thành Cụm danh từ.</p>
                </div>
                {TT_STRUCTURES.map((struct, idx) => <StructureRowAdj key={idx} struct={struct} activeToken={activeToken} setActiveToken={setActiveToken} />)}
            </section>

            {/* PHẦN 2: BÀI TẬP NHẬN DIỆN TÍNH TỪ */}
            <section className="mb-12 sm:mb-16">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">2</span>
                        Khởi động: Nhận diện Tính Từ
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-2">Bài tập 1 & 2 giúp bạn làm quen và ghi nhớ mặt chữ của các tính từ quan trọng.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Bài 1 */}
                    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                            <div>
                                <h3 className="font-bold text-slate-800">Bài 1: Điền tính từ vào chỗ trống</h3>
                            </div>
                        </div>
                        <div className="space-y-3 overflow-y-auto max-h-[600px] pr-2 hide-scrollbar">
                            {TT_EX1_DATA.map(item => <VocabularyInput key={item.id} item={item} mode="fillAdj" />)}
                        </div>
                    </div>

                    {/* Bài 2 */}
                    <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-md flex flex-col">
                        <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-3">
                            <div>
                                <h3 className="font-bold text-white">Bài 2: Thử tài dịch thuật</h3>
                            </div>
                        </div>
                        <div className="space-y-3 overflow-y-auto max-h-[600px] pr-2 hide-scrollbar">
                            {TT_EX2_DATA.map(item => <VocabularyInput key={item.id} item={item} mode="recallAdj" />)}
                        </div>
                    </div>
                </div>
            </section>

            {/* PHẦN 3: BÀI TẬP LẮP RÁP CỤM DANH TỪ */}
            <section className="mb-14 relative z-20">
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md">3</span>
                        Thử thách: Viết Cụm Danh Từ
                    </h2>
                    <p className="text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]">Mục tiêu cuối cùng: Lồng ghép Tính từ vào Danh từ để viết thành cụm hoàn chỉnh (đã bỏ nút hiện đáp án, bạn phải tự nhớ nhé).</p>
                </div>

                <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 border-b border-slate-100 pb-4">
                        <p className="text-sm sm:text-base text-slate-500">Hãy nhập nguyên cụm tiếng Anh (bao gồm cả mạo từ a, an, the nếu có).</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        
                        {/* Hàng 1 */}
                        <div className="bg-fuchsia-50/40 p-4 sm:p-6 rounded-2xl border border-fuchsia-100">
                            <h4 className="font-bold text-fuchsia-800 mb-4 text-lg flex items-center gap-2">
                                <span className="bg-fuchsia-100 p-1.5 rounded-lg">🌱</span> Nhóm Đời sống & Tự nhiên
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {TT_EX3_GROUP1.map(item => <VocabularyInput key={item.id} item={item} mode="fullPhrase" />)}
                            </div>
                        </div>

                        {/* Hàng 2 */}
                        <div className="bg-blue-50/40 p-4 sm:p-6 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center gap-2">
                                <span className="bg-blue-100 p-1.5 rounded-lg">👥</span> Nhóm Con người & Môi trường
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {TT_EX3_GROUP2.map(item => <VocabularyInput key={item.id} item={item} mode="fullPhrase" />)}
                            </div>
                        </div>

                        {/* Hàng 3 */}
                        <div className="bg-amber-50/40 p-4 sm:p-6 rounded-2xl border border-amber-100">
                            <h4 className="font-bold text-amber-800 mb-4 text-lg flex items-center gap-2">
                                <span className="bg-amber-100 p-1.5 rounded-lg">⚙️</span> Nhóm Kỹ thuật & Tình huống
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {TT_EX3_GROUP3.map(item => <VocabularyInput key={item.id} item={item} mode="fullPhrase" />)}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};