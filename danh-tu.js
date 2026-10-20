const DT_STRUCTURES = [
    {
        tokens: [
            { id: 's1', label: 'Chủ ngữ', code: 'S', isHighlight: true, type: 'Danh từ / Đại từ', desc: 'Chủ thể gây ra hành động trong câu.' },
            { id: 'v1', label: 'Động từ', code: 'V', isHighlight: false, type: 'Động từ', desc: 'Hành động hoặc trạng thái của chủ ngữ.' },
            { id: 'o1', label: 'Tân ngữ', code: 'O', isHighlight: true, type: 'Danh từ / Đại từ', desc: 'Đối tượng chịu tác động trực tiếp của hành động.' }
        ],
        examples: [
            { id: 1, html: "<span class='text-red-600 font-bold'>Students</span> use <span class='text-red-600 font-bold'>computers</span> every day.", vn: "Học sinh sử dụng máy tính mỗi ngày.", isCorrect: true, exp: "" },
            { id: 2, html: "<span class='text-red-600 font-bold'>My mother</span> cooks <span class='text-red-600 font-bold'>dinner</span> for the family.", vn: "Mẹ tôi nấu bữa tối cho gia đình.", isCorrect: true, exp: "" },
            { id: 3, html: "<span class='text-red-600 font-bold'>Educate</span> changes our life.", vn: "Giáo dục thay đổi cuộc sống của chúng ta.", isCorrect: false, exp: "Sai vì 'Educate' là Động từ, không thể đứng đầu câu làm Chủ ngữ. Phải dùng Danh từ: Education changes our life." },
            { id: 4, html: "Money cannot buy <span class='text-red-600 font-bold'>happy</span>.", vn: "Tiền không thể mua được hạnh phúc.", isCorrect: false, exp: "Sai vì 'happy' là Tính từ, không thể đứng sau động từ 'buy' để làm Tân ngữ. Phải dùng Danh từ: Money cannot buy happiness." }
        ]
    },
    {
        tokens: [
            { id: 's2', label: 'Chủ ngữ', code: 'S', isHighlight: true, type: 'Danh từ / Đại từ', desc: 'Chủ thể được miêu tả.' },
            { id: 'be2', label: 'Động từ tobe', code: 'To be', isHighlight: false, type: 'Động từ liên kết', desc: 'Liên kết chủ ngữ với đặc điểm của nó (am/is/are...).' },
            { id: 'adj2', label: 'Tính từ', code: 'Adj', isHighlight: false, type: 'Tính từ', desc: 'Từ miêu tả tính chất, đặc điểm của chủ ngữ.' }
        ],
        examples: [
            { id: 5, html: "<span class='text-red-600 font-bold'>Health</span> is very important.", vn: "Sức khỏe thì rất quan trọng.", isCorrect: true, exp: "" },
            { id: 6, html: "<span class='text-red-600 font-bold'>The traffic</span> is terrible today.", vn: "Giao thông hôm nay thật tệ.", isCorrect: true, exp: "" },
            { id: 7, html: "<span class='text-red-600 font-bold'>Healthy</span> is very important.", vn: "Sức khỏe thì rất quan trọng.", isCorrect: false, exp: "Sai vì 'Healthy' (khỏe mạnh) là Tính từ, không thể làm Chủ ngữ. Phải dùng Danh từ: Health (sức khỏe) is very important." },
            { id: 8, html: "<span class='text-red-600 font-bold'>Learn English</span> is necessary.", vn: "Việc học tiếng Anh là cần thiết.", isCorrect: false, exp: "Sai vì 'Learn' là Động từ nguyên mẫu, không thể làm Chủ ngữ. Phải chuyển thành Danh động từ (V-ing): Learning English is necessary." }
        ]
    },
    {
        tokens: [
            { id: 's3', label: 'Chủ ngữ', code: 'S', isHighlight: true, type: 'Danh từ', desc: 'Chủ thể thực hiện hành động.' },
            { id: 'v3', label: 'Động từ', code: 'V', isHighlight: false, type: 'Động từ', desc: 'Hành động cho/tặng/gửi...' },
            { id: 'io3', label: 'Tân ngữ gián tiếp', code: 'IO', isHighlight: true, type: 'Danh từ', desc: 'Người/vật nhận được lợi ích từ hành động.' },
            { id: 'do3', label: 'Tân ngữ trực tiếp', code: 'DO', isHighlight: true, type: 'Danh từ', desc: 'Vật bị tác động trực tiếp.' }
        ],
        examples: [
            { id: 9, html: "<span class='text-red-600 font-bold'>The teacher</span> gave <span class='text-red-600 font-bold'>the students</span> <span class='text-red-600 font-bold'>homework</span>.", vn: "Giáo viên đã giao bài tập về nhà cho học sinh.", isCorrect: true, exp: "" },
            { id: 10, html: "<span class='text-red-600 font-bold'>The company</span> sent <span class='text-red-600 font-bold'>customers</span> an <span class='text-red-600 font-bold'>email</span>.", vn: "Công ty đã gửi một email cho khách hàng.", isCorrect: true, exp: "" },
            { id: 11, html: "My parents gave my brother <span class='text-red-600 font-bold'>advise</span>.", vn: "Bố mẹ tôi đã cho em trai tôi lời khuyên.", isCorrect: false, exp: "Sai vì 'advise' (khuyên bảo) là Động từ, không thể làm Tân ngữ trực tiếp. Phải dùng Danh từ: My parents gave my brother advice (lời khuyên)." },
            { id: 12, html: "The manager offered the <span class='text-red-600 font-bold'>employ</span> a new job.", vn: "Người quản lý đã đề nghị cho nhân viên một công việc mới.", isCorrect: false, exp: "Sai vì 'employ' (tuyển dụng) là Động từ, không thể làm Tân ngữ gián tiếp chỉ người nhận. Phải dùng Danh từ chỉ người: The manager offered the employee (nhân viên) a new job." }
        ]
    }
];

const DT_CONCRETE_GROUPS = [
    { group: "Người", icon: "👤", words: [{ en: "student", vn: "học sinh" }, { en: "teacher", vn: "giáo viên" }, { en: "worker", vn: "công nhân" }, { en: "customer", vn: "khách hàng" }] },
    { group: "Sự vật", icon: "📦", words: [{ en: "bicycle", vn: "xe đạp" }, { en: "computer", vn: "máy tính" }, { en: "gift", vn: "món quà" }, { en: "uniform", vn: "đồng phục" }] },
    { group: "Địa điểm", icon: "📍", words: [{ en: "school", vn: "trường học" }, { en: "library", vn: "thư viện" }, { en: "hospital", vn: "bệnh viện" }, { en: "museum", vn: "bảo tàng" }] },
    { group: "Hiện tượng", icon: "⚡", words: [{ en: "rain", vn: "cơn mưa" }, { en: "pollution", vn: "sự ô nhiễm" }, { en: "accident", vn: "tai nạn" }, { en: "flood", vn: "lũ lụt" }] }
];

const DT_ABSTRACT_GROUPS = [
    { group: "Khái niệm", icon: "💡", words: [{ en: "health", vn: "sức khỏe" }, { en: "environment", vn: "môi trường" }, { en: "solution", vn: "giải pháp" }, { en: "experience", vn: "kinh nghiệm" }] },
    { group: "Cảm xúc", icon: "❤️", words: [{ en: "happiness", vn: "hạnh phúc" }, { en: "stress", vn: "căng thẳng" }, { en: "fear", vn: "nỗi sợ" }, { en: "sadness", vn: "nỗi buồn" }] },
    { group: "Hoạt động", note: "V-ing", icon: "🏃", words: [{ en: "travelling", vn: "việc du lịch" }, { en: "learning", vn: "việc học" }, { en: "shopping", vn: "việc mua sắm" }, { en: "exercising", vn: "tập thể dục" }] }
];

const DanhTuSectionDefinition = () => {
    const [revealed, setRevealed] = useState({});
    const [showAll, setShowAll] = useState(false);

    const toggleWord = (key) => {
        setRevealed(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const renderRow = (item, prefix, accentColor) => (
        <div key={item.group} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-slate-100 last:border-b-0 last:pb-0 first:pt-0">
            <div className="w-36 shrink-0 flex items-center gap-2 font-bold text-slate-700 text-sm sm:text-base">
                <span className="text-lg">{item.icon}</span>
                <span>{item.group}</span>
                {item.note && <span className="text-[11px] font-semibold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">{item.note}</span>}
            </div>
            <div className="flex flex-wrap gap-2 flex-1">
                {item.words.map((w, wIdx) => {
                    const key = `${prefix}-${wIdx}`;
                    const isOpen = showAll || revealed[key];
                    return (
                        <button
                            key={wIdx}
                            onClick={() => toggleWord(key)}
                            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all border ${
                                isOpen
                                    ? accentColor
                                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                            }`}
                        >
                            <span className="font-semibold">{w.en}</span>
                            {isOpen && <span className="ml-1.5 opacity-90 font-normal">({w.vn})</span>}
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <section className="mb-12 sm:mb-16">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">2</span>
                        Định nghĩa Danh từ
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-2">
                        Chia làm <strong>2 nhóm chính</strong>. Bấm vào từng từ tiếng Anh để xem nghĩa tiếng Việt.
                    </p>
                </div>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="self-start sm:self-auto px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
                >
                    {showAll ? "Ẩn nghĩa tiếng Việt" : "Hiện tất cả nghĩa"}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Cột 1: Danh từ cụ thể */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100">
                        <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">👀</span>
                        <div>
                            <h3 className="font-bold text-slate-800 text-base sm:text-lg">1. Nhóm Cụ thể (Nhìn thấy được)</h3>
                            <p className="text-xs text-slate-500">Con người, đồ vật, nơi chốn, hiện tượng xung quanh ta</p>
                        </div>
                    </div>
                    <div>
                        {DT_CONCRETE_GROUPS.map((g, i) => renderRow(g, `c-${i}`, 'bg-blue-600 text-white border-blue-600'))}
                    </div>
                </div>

                {/* Cột 2: Danh từ trừu tượng */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100">
                            <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">💭</span>
                            <div>
                                <h3 className="font-bold text-slate-800 text-base sm:text-lg">2. Nhóm Trừu tượng (Không chạm vào được)</h3>
                                <p className="text-xs text-slate-500">Những thứ chỉ cảm nhận hoặc gọi tên — rất dễ nhầm với Tính từ / Động từ</p>
                            </div>
                        </div>
                        <div>
                            {DT_ABSTRACT_GROUPS.map((g, i) => renderRow(g, `a-${i}`, 'bg-amber-600 text-white border-amber-600'))}
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 bg-slate-50 px-3.5 py-2.5 rounded-xl">
                        💡 <strong>Mẹo nhớ:</strong> Khi nói về <em>sức khỏe (health)</em>, <em>niềm vui (happiness)</em> hay <em>việc học (learning)</em>, chúng đều là <strong>Danh từ</strong> và đứng làm Chủ ngữ / Tân ngữ trong câu.
                    </div>
                </div>
            </div>
        </section>
    );
};

const DT_NOUN_SUFFIXES = [
    { category: "Người / Nghề nghiệp", items: [
        { suffix: "-er", meaning: "Người làm việc", examples: "teacher, worker" },
        { suffix: "-or", meaning: "Người làm việc", examples: "actor, doctor" },
        { suffix: "-ist", meaning: "Chuyên gia", examples: "scientist, tourist" },
        { suffix: "-ee", meaning: "Người nhận HĐ", examples: "employee, interviewee" }
    ]},
    { category: "Trạng thái / Tính chất", items: [
        { suffix: "-ness", meaning: "Sự / Trạng thái", examples: "happiness, sadness" },
        { suffix: "-ity / -ty", meaning: "Tính chất", examples: "safety, reality" },
        { suffix: "-ship", meaning: "Mối quan hệ", examples: "friendship, scholarship" }
    ]},
    { category: "Hành động / Kết quả", items: [
        { suffix: "-tion/-sion", meaning: "Quá trình", examples: "education, decision" },
        { suffix: "-ment", meaning: "Kết quả HĐ", examples: "improvement, equipment" },
        { suffix: "-ance/-ence", meaning: "Trạng thái", examples: "importance, difference" }
    ]}
];

const SuffixFlipCard = ({ item }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className={`flip-card h-24 sm:h-28 cursor-pointer ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)} onMouseLeave={() => setIsFlipped(false)}>
            <div className="flip-card-inner relative w-full h-full">
                <div className="flip-card-front absolute w-full h-full bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-blue-600">{item.suffix}</span>
                </div>
                <div className="flip-card-back absolute w-full h-full bg-slate-800 rounded-xl shadow-sm p-2 sm:p-3 flex flex-col items-center justify-center text-center">
                    <span className="text-blue-300 font-bold text-xs sm:text-sm mb-1">{item.meaning}</span>
                    <span className="text-white text-[10px] sm:text-xs leading-tight">{item.examples}</span>
                </div>
            </div>
        </div>
    );
};

const DanhTuSectionSuffix = () => (
    <section className="mb-12 sm:mb-16">
        <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">3</span>
                Hậu tố Danh từ
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">Bấm (chạm) vào thẻ để lật xem ý nghĩa và ví dụ.</p>
        </div>
        <div className="space-y-6 sm:space-y-8">
            {DT_NOUN_SUFFIXES.map((cat, idx) => (
                <div key={idx}>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 sm:mb-4 border-b border-slate-200 pb-2">{cat.category}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        {cat.items.map((item, iIdx) => (
                            <SuffixFlipCard key={iIdx} item={item} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const DT_COUNTABLE_TRAITS = [
    { 
        id: 'number', label: 'Hình thái (Số lượng)', 
        c: 'Có hình thái số ít & số nhiều.', 
        exC: 'a car, two cars',
        u: 'Tâm bất biến (không phân biệt ít/nhiều).',
        exU: 'information'
    },
    { 
        id: 'article', label: 'Mạo từ (a/an)', 
        c: 'Số ít CÓ THỂ đi với a/an.', 
        exC: 'an apple, a book',
        u: 'KHÔNG đi với a/an.',
        exU: 'some water (không dùng: a water)'
    },
    { 
        id: 'plural', label: 'Thêm s/es', 
        c: 'Số nhiều được phép thêm s/es.', 
        exC: 'chairs, boxes',
        u: 'KHÔNG thêm s/es.',
        exU: 'money (không dùng: moneys)'
    },
    { 
        id: 'counting', label: 'Đếm bằng số (1,2...)', 
        c: 'Đếm trực tiếp được.', 
        exC: 'one cat, three cats',
        u: 'KHÔNG đếm trực tiếp được. (Phải mượn đơn vị đo)',
        exU: 'a cup of coffee, two bottles of water'
    }
];

const DanhTuSectionCountable = () => {
    const [activeNode, setActiveNode] = useState('all');

    return (
        <section className="mb-12 sm:mb-16">
            <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">4</span>
                    Đếm được & Không đếm được
                </h2>
                <p className="text-sm sm:text-base text-slate-500 mt-2">Bấm vào các nút ĐẶC ĐIỂM ở giữa để so sánh và xem ví dụ.</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                    
                    {/* Cột giữa (Menu trên Mobile, ở giữa trên Desktop) */}
                    <div className="w-full lg:w-48 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2 justify-center lg:py-4 order-1 lg:order-2">
                        <h3 className="w-full text-center font-bold text-slate-400 text-xs sm:text-sm tracking-widest mb-1 lg:mb-2 hidden lg:block">ĐẶC ĐIỂM</h3>
                        <button onClick={() => setActiveNode('all')} className={`flex-1 min-w-[80px] lg:w-full py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-semibold border transition-all ${activeNode === 'all' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}>
                            Tất cả
                        </button>
                        {DT_COUNTABLE_TRAITS.map(t => (
                            <button key={`btn-${t.id}`} onClick={() => setActiveNode(t.id)} className={`flex-1 min-w-[120px] lg:w-full py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm transition-all ${activeNode === t.id ? 'bg-slate-200 text-slate-800 font-bold shadow-inner border border-slate-300' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* Cột trái: Countable */}
                    <div className="flex-1 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 relative overflow-hidden order-2 lg:order-1">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                        <h3 className="font-bold text-base sm:text-lg text-slate-800 mb-1 text-center">COUNTABLE</h3>
                        <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 text-center">(Đếm được)</p>
                        <div className="space-y-3">
                            {DT_COUNTABLE_TRAITS.map(t => (
                                <div key={`c-${t.id}`} className={`p-3 rounded-lg transition-all ${activeNode === t.id || activeNode === 'all' ? 'bg-blue-50 border border-blue-200' : 'hidden'}`}>
                                    <span className="text-xs sm:text-sm font-semibold text-slate-800 block mb-1">{t.c}</span>
                                    <span className="text-[11px] sm:text-xs text-blue-700 bg-white px-2 py-1.5 rounded border border-blue-100 block mt-2">Ví dụ: {t.exC}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cột phải: Uncountable */}
                    <div className="flex-1 bg-slate-50 rounded-xl p-4 sm:p-6 border border-slate-100 relative overflow-hidden order-3 lg:order-3">
                        <div className="absolute top-0 left-0 w-full h-1 bg-slate-400"></div>
                        <h3 className="font-bold text-base sm:text-lg text-slate-800 mb-1 text-center">UNCOUNTABLE</h3>
                        <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 text-center">(Không đếm được)</p>
                        <div className="space-y-3">
                            {DT_COUNTABLE_TRAITS.map(t => (
                                <div key={`u-${t.id}`} className={`p-3 rounded-lg transition-all ${activeNode === t.id || activeNode === 'all' ? 'bg-white border border-slate-200' : 'hidden'}`}>
                                    <span className="text-xs sm:text-sm font-semibold text-slate-800 block mb-1">{t.u}</span>
                                    <span className="text-[11px] sm:text-xs text-slate-600 bg-slate-100 px-2 py-1.5 rounded border border-slate-200 block mt-2">Ví dụ: {t.exU}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// ================== DỮ LIỆU BÀI TẬP DANH TỪ ==================
const DT_RAW_WORDS = [
    { w: "book", type: "c" }, { w: "information", type: "u" },
    { w: "place", type: "c" }, { w: "money", type: "u" },
    { w: "friend", type: "c" }, { w: "news", type: "u" },
    { w: "student", type: "c" }, { w: "water", type: "u" },
    { w: "class", type: "c" }, { w: "air", type: "u" }
];

const DT_SENTENCES_B = [
    { id: 1, text: "Reading books can help me gain a lot of knowledges.", isCorrectStr: false, wrongWord: "knowledges", correctWord: "knowledge", vn: "Đọc sách có thể giúp tôi thu nhận nhiều kiến thức.", exp: "'knowledge' (kiến thức) là danh từ không đếm được, không được thêm 's'." },
    { id: 2, text: "You should take part in many activity at school.", isCorrectStr: false, wrongWord: "activity", correctWord: "activities", vn: "Bạn nên tham gia nhiều hoạt động ở trường.", exp: "Sau 'many' (nhiều) phải là danh từ đếm được số nhiều (activities)." },
    { id: 3, text: "We need to order additional furniture for the meeting room.", isCorrectStr: true, wrongWord: "", correctWord: "", vn: "Chúng ta cần đặt thêm nội thất cho phòng họp.", exp: "'furniture' là danh từ không đếm được, dạng nguyên mẫu ở đây là đúng." },
    { id: 4, text: "A cleaner came to my office to clean up my kitchen.", isCorrectStr: true, wrongWord: "", correctWord: "", vn: "Một nhân viên dọn dẹp đã đến văn phòng để dọn bếp của tôi.", exp: "Các danh từ 'cleaner', 'office', 'kitchen' đều được dùng chính xác." },
    { id: 5, text: "I purchased some furnitures at your store last week.", isCorrectStr: false, wrongWord: "furnitures", correctWord: "furniture", vn: "Tôi đã mua một vài đồ nội thất tại cửa hàng của bạn tuần trước.", exp: "'furniture' là danh từ không đếm được, tuyệt đối không thêm 's'." },
    { id: 6, text: "The staff took a lot of times to complete the task.", isCorrectStr: false, wrongWord: "times", correctWord: "time", vn: "Nhân viên đã mất rất nhiều thời gian để hoàn thành nhiệm vụ.", exp: "'time' mang nghĩa thời gian là danh từ không đếm được, không thêm 's'. (Times số nhiều mang nghĩa là 'số lần')." },
    { id: 7, text: "Can you give me some advice?", isCorrectStr: true, wrongWord: "", correctWord: "", vn: "Bạn có thể cho tôi vài lời khuyên không?", exp: "'advice' (lời khuyên) là danh từ không đếm được, dùng 'some advice' là chính xác." },
    { id: 8, text: "They sell a lot of products in Cai Rang floating market.", isCorrectStr: true, wrongWord: "", correctWord: "", vn: "Họ bán rất nhiều sản phẩm ở chợ nổi Cái Răng.", exp: "'products' là danh từ đếm được, đi sau 'a lot of' cần ở dạng số nhiều (thêm 's')." },
    { id: 9, text: "I think you should make friends with native speaker.", isCorrectStr: false, wrongWord: "speaker", correctWord: "speakers", vn: "Tôi nghĩ bạn nên kết bạn với người bản xứ.", exp: "Nói chung về người bản xứ (nhiều người) nên 'speaker' phải ở dạng số nhiều là 'speakers'. Hoặc dùng 'a native speaker'." },
    { id: 10, text: "You should take an English courses at River English Center.", isCorrectStr: false, wrongWord: "courses", correctWord: "course", vn: "Bạn nên tham gia một khóa học tiếng Anh tại Trung tâm Anh ngữ River.", exp: "Có mạo từ 'an' (một) ở phía trước, nên danh từ theo sau phải ở dạng số ít là 'course' (bỏ 's')." }
];

const DT_PARAGRAPH_C = `Dear Alex,\nI am very glad to hear from you. Next month, I will have a travel to your city for a conference. I have to finish a lot of works before leaving. Because this is my first time, I need some informations about the city. Can you give me some advices about the weathers there? I also want to buy some furnitures for my new apartment, so please recommend a good store. I will bring a lot of moneys so we can go shopping together. I heard your city has beautiful scenerys.\nWrite to me soon,\nNam.`;

const DT_ERRORS_C = [
    { id: 1, wrong: "travel", correct: "trip", exp: "Dịch word-by-word 'một chuyến du lịch'. 'Travel' thường là danh từ không đếm được (chỉ việc đi lại nói chung) hoặc động từ. Để đếm được (a...), phải dùng 'a trip'." },
    { id: 2, wrong: "works", correct: "work", exp: "'Work' (công việc) là danh từ không đếm được, không thêm 's'. ('Works' thêm 's' thường có nghĩa là tác phẩm nghệ thuật/nhà máy)." },
    { id: 3, wrong: "informations", correct: "information", exp: "'Information' (thông tin) là danh từ không đếm được, không bao giờ thêm 's'." },
    { id: 4, wrong: "advices", correct: "advice", exp: "'Advice' (lời khuyên) là danh từ không đếm được, không thêm 's'." },
    { id: 5, wrong: "weathers", correct: "weather", exp: "'Weather' (thời tiết) là danh từ không đếm được, không thêm 's'." },
    { id: 6, wrong: "furnitures", correct: "furniture", exp: "'Furniture' (đồ nội thất) là danh từ không đếm được, không thêm 's'." },
    { id: 7, wrong: "moneys", correct: "money", exp: "'Money' (tiền bạc) là danh từ không đếm được, không thêm 's'." },
    { id: 8, wrong: "scenerys", correct: "scenery", exp: "'Scenery' (phong cảnh) là danh từ không đếm được, không có dạng số nhiều." }
];

const createEmptyAnsC = () => Array.from({ length: 8 }, () => ({ wrong: "", correct: "" }));

const DanhTuSectionExercises = () => {
    // ================== PHẦN A ==================
    const [classified, setClassified] = useState({});
    const [part1Done, setPart1Done] = useState(false);
    const [part1Score, setPart1Score] = useState(0);
    const [part1Error, setPart1Error] = useState('');

    const isPart1Complete = Object.keys(classified).length === DT_RAW_WORDS.length;

    const handleClassify = (word, selectedType) => {
        setClassified(prev => ({ ...prev, [word]: selectedType }));
        setPart1Error('');
    };

    const checkPart1 = () => {
        if (!isPart1Complete) {
            setPart1Error(`Bạn mới phân loại ${Object.keys(classified).length}/${DT_RAW_WORDS.length} từ. Vui lòng chọn hết trước khi nộp!`);
            return;
        }
        let count = 0;
        DT_RAW_WORDS.forEach(item => { if (classified[item.w] === item.type) count++; });
        setPart1Score(count);
        setPart1Done(true);
    };

    // ================== PHẦN B ==================
    const [ansB, setAnsB] = useState({}); 
    const [showResultsB, setShowResultsB] = useState(false);
    const [partBError, setPartBError] = useState('');

    const isPartBComplete = DT_SENTENCES_B.every(q => {
        const ans = ansB[q.id];
        if (!ans || ans.isCorrectStr === undefined) return false; 
        if (ans.isCorrectStr === false) { 
            return ans.wrongW?.trim() && ans.correctW?.trim();
        }
        return true; 
    });

    const updateAnsB = (id, field, value) => {
        setAnsB(prev => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
        setShowResultsB(false);
        setPartBError('');
    };

    const submitPartB = () => {
        if (!isPartBComplete) {
            setPartBError("Vui lòng hoàn thành tất cả các câu (Chọn Đúng/Sai, nếu Sai phải điền từ sửa lỗi) trước khi nộp bài!");
            return;
        }
        setPartBError('');
        setShowResultsB(true);
    };

    const checkAnsBIsFullyCorrect = (q, userAns) => {
        if (!userAns) return false;
        if (q.isCorrectStr && userAns.isCorrectStr === true) return true;
        if (!q.isCorrectStr && userAns.isCorrectStr === false) {
            if (userAns.wrongW?.trim().toLowerCase() === q.wrongWord.toLowerCase() && 
                userAns.correctW?.trim().toLowerCase() === q.correctWord.toLowerCase()) return true;
        }
        return false;
    };

    // ================== PHẦN C ==================
    const [ansC, setAnsC] = useState(createEmptyAnsC);
    const [showResultsC, setShowResultsC] = useState(false);
    const [partCError, setPartCError] = useState('');

    const isPartCComplete = ansC.every(ans => ans.wrong.trim() !== '' && ans.correct.trim() !== '');

    const handleAnsCChange = (index, field, value) => {
        const newAnsC = [...ansC];
        newAnsC[index] = { ...newAnsC[index], [field]: value };
        setAnsC(newAnsC);
        setShowResultsC(false);
        setPartCError('');
    };

    const submitPartC = () => {
        if (!isPartCComplete) {
            setPartCError("Vui lòng điền đầy đủ cả 8 cặp lỗi (Từ sai và Sửa thành) trước khi nộp bài!");
            return;
        }
        setPartCError('');
        setShowResultsC(true);
    };

    const getHighlightedParagraph = () => {
        let html = DT_PARAGRAPH_C.replace(/\n/g, '<br/>');
        if (showResultsC) {
            DT_ERRORS_C.forEach(err => {
                const regex = new RegExp(`\\b${err.wrong}\\b`, 'g');
                html = html.replace(regex, `<span class="bg-red-200 text-red-800 line-through px-1 rounded">${err.wrong}</span> <span class="bg-green-200 text-green-800 font-bold px-1 rounded">${err.correct}</span>`);
            });
        }
        return html;
    };

    return (
        <section className="mb-12 sm:mb-16">
            <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">5</span>
                    Bài tập thực hành
                </h2>
            </div>

            {/* Exercise A */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sm:mb-8">
                <h3 className="font-bold text-slate-800 mb-2">A. Phân loại danh từ</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
                    <p className="text-sm text-slate-500">Chọn phân loại đúng cho các từ sau.</p>
                    {part1Done && <span className="bg-green-100 text-green-700 px-3 py-1 rounded font-bold text-sm w-fit">Điểm: {part1Score}/10</span>}
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
                    {DT_RAW_WORDS.map((item, idx) => {
                        const currentStatus = classified[item.w];
                        const isCorrect = part1Done && currentStatus === item.type;
                        const isWrong = part1Done && currentStatus && currentStatus !== item.type;

                        return (
                            <div key={idx} className={`p-3 rounded-lg border text-center flex flex-col gap-2 transition-all ${isCorrect ? 'bg-green-50 border-green-300' : isWrong ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-200'}`}>
                                <span className="font-semibold text-slate-700 text-sm sm:text-base">{item.w}</span>
                                <div className="flex flex-col sm:flex-row bg-slate-200 rounded-md p-1 gap-1">
                                    <button onClick={() => handleClassify(item.w, 'c')} disabled={part1Done} className={`flex-1 text-[10px] sm:text-[11px] py-1.5 sm:py-1 rounded transition-colors ${currentStatus === 'c' ? 'bg-blue-600 text-white font-bold' : 'hover:bg-slate-300 text-slate-600'}`}>Đếm được</button>
                                    <button onClick={() => handleClassify(item.w, 'u')} disabled={part1Done} className={`flex-1 text-[10px] sm:text-[11px] py-1.5 sm:py-1 rounded transition-colors ${currentStatus === 'u' ? 'bg-slate-700 text-white font-bold' : 'hover:bg-slate-300 text-slate-600'}`}>Không đếm được</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    {!part1Done && <button onClick={checkPart1} className="w-full sm:w-auto px-6 py-2.5 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-slate-700">Kiểm tra Phần A</button>}
                    {part1Done && <button onClick={() => {setPart1Done(false); setClassified({});}} className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-300">Làm lại</button>}
                    {part1Error && <span className="text-red-500 text-xs sm:text-sm font-medium">{part1Error}</span>}
                </div>
            </div>

            {/* Exercise B */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sm:mb-8">
                <h3 className="font-bold text-slate-800 mb-2">B. Thám tử Ngữ pháp</h3>
                <p className="text-sm text-slate-500 mb-6">Xác định câu sau Đúng hay Sai. Nếu Sai, hãy tìm từ viết sai và sửa lại cho đúng.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {DT_SENTENCES_B.map((q, i) => {
                        const uAns = ansB[q.id] || {};
                        const isFinalCorrect = checkAnsBIsFullyCorrect(q, uAns);

                        return (
                            <div key={q.id} className="p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                                <div className="flex gap-2 text-slate-800 font-medium mb-3 text-sm sm:text-base">
                                    <span>{i + 1}.</span>
                                    <p>{q.text}</p>
                                </div>
                                
                                <div className="flex flex-col gap-3 items-start text-sm">
                                    <div className="flex w-full sm:w-auto gap-2">
                                        <label className="flex-1 sm:flex-none flex items-center justify-center gap-1 cursor-pointer">
                                            <input type="radio" name={`q${q.id}`} checked={uAns.isCorrectStr === true} onChange={() => updateAnsB(q.id, 'isCorrectStr', true)} disabled={showResultsB}/>
                                            <span className="w-full sm:w-auto text-center px-3 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-100 peer-checked:bg-green-100 peer-checked:border-green-300 peer-checked:font-bold transition-all">Câu Đúng</span>
                                        </label>
                                        <label className="flex-1 sm:flex-none flex items-center justify-center gap-1 cursor-pointer">
                                            <input type="radio" name={`q${q.id}`} checked={uAns.isCorrectStr === false} onChange={() => updateAnsB(q.id, 'isCorrectStr', false)} disabled={showResultsB}/>
                                            <span className="w-full sm:w-auto text-center px-3 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-100 peer-checked:bg-red-100 peer-checked:border-red-300 peer-checked:font-bold transition-all">Câu Sai</span>
                                        </label>
                                    </div>

                                    {uAns.isCorrectStr === false && (
                                        <div className="flex w-full items-center gap-2 animate-pop">
                                            <input type="text" placeholder="" className="flex-1 min-w-0 border-2 border-slate-300 py-2.5 px-3 rounded-xl outline-none focus:border-blue-500" value={uAns.wrongW || ''} onChange={e => updateAnsB(q.id, 'wrongW', e.target.value)} disabled={showResultsB}/>
                                            <span className="shrink-0 text-slate-400">→</span>
                                            <input type="text" placeholder="" className="flex-1 min-w-0 border-2 border-slate-300 py-2.5 px-3 rounded-xl outline-none focus:border-blue-500" value={uAns.correctW || ''} onChange={e => updateAnsB(q.id, 'correctW', e.target.value)} disabled={showResultsB}/>
                                        </div>
                                    )}
                                </div>

                                {/* Result Area */}
                                {showResultsB && (
                                    <div className={`mt-4 p-3 rounded-lg border text-xs sm:text-sm ${isFinalCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                        <div className="font-bold flex items-center gap-2 mb-1">
                                            {isFinalCorrect ? <span className="text-green-600">✅ Chính xác!</span> : <span className="text-red-600">❌ Chưa đúng.</span>}
                                        </div>
                                        <p className="text-slate-700 italic mb-1">Dịch: {q.vn}</p>
                                        <p className="text-slate-800"><strong>Giải thích:</strong> {q.exp}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                    {!showResultsB ? (
                        <button onClick={submitPartB} className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Nộp bài Phần B</button>
                    ) : (
                        <button onClick={() => { setAnsB({}); setShowResultsB(false); }} className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors">Làm lại</button>
                    )}
                    {partBError && <span className="text-red-500 text-xs sm:text-sm font-medium text-center">{partBError}</span>}
                </div>
            </div>

            {/* Exercise C: VSTEP WRITING TASK 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="font-bold text-slate-800">C. VSTEP WRITING TASK 1</h3>
                    <span className="bg-orange-100 text-orange-700 text-[10px] sm:text-xs font-bold px-2 py-1 rounded w-fit uppercase tracking-wide">Viết thư điện tử</span>
                </div>
                <p className="text-sm text-slate-500 mb-4 sm:mb-6">Đoạn email phản hồi cho một người bạn dưới đây có chứa <strong>08 lỗi sai</strong> về danh từ đếm được, không đếm được và dịch word-by-word. Hãy tìm và sửa lại cho đúng.</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div className="bg-amber-50 border border-amber-100 p-4 sm:p-5 rounded-xl font-medium text-slate-800 text-sm sm:text-base leading-relaxed sm:leading-loose" dangerouslySetInnerHTML={{ __html: getHighlightedParagraph() }}>
                    </div>

                    <div>
                        {!showResultsC && (
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2.5 sm:gap-3 mb-4">
                                {ansC.map((ans, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2 sm:p-2.5 border border-slate-200 rounded-lg">
                                        <span className="w-5 text-center font-bold text-slate-400 shrink-0 text-sm">{idx + 1}.</span>
                                        <input 
                                            type="text" 
                                            placeholder="" 
                                            className="flex-1 min-w-0 border-2 border-slate-300 py-2 px-3 rounded-xl text-sm outline-none focus:border-blue-500" 
                                            value={ans.wrong} 
                                            onChange={e => handleAnsCChange(idx, 'wrong', e.target.value)}
                                        />
                                        <span className="text-slate-400 shrink-0">→</span>
                                        <input 
                                            type="text" 
                                            placeholder="" 
                                            className="flex-1 min-w-0 border-2 border-slate-300 py-2 px-3 rounded-xl text-sm outline-none focus:border-blue-500" 
                                            value={ans.correct} 
                                            onChange={e => handleAnsCChange(idx, 'correct', e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {showResultsC && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 animate-pop">
                                {DT_ERRORS_C.map((err, idx) => {
                                    const userFoundIt = ansC.find(a => a.wrong.toLowerCase().trim() === err.wrong.toLowerCase() && a.correct.toLowerCase().trim() === err.correct.toLowerCase());
                                    
                                    return (
                                        <div key={idx} className={`p-3 rounded-lg border ${userFoundIt ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                            <div className="flex flex-wrap items-center gap-2 font-bold mb-1 text-sm">
                                                <span>{userFoundIt ? '✅' : '❌'}</span>
                                                <span className="line-through text-red-500">{err.wrong}</span>
                                                <span className="text-slate-500">→</span>
                                                <span className="text-green-600">{err.correct}</span>
                                            </div>
                                            <p className="text-xs text-slate-700 mt-1">{err.exp}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            {!showResultsC ? (
                                <button onClick={submitPartC} className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Nộp bài Phần C</button>
                            ) : (
                                <button onClick={() => { setAnsC(createEmptyAnsC()); setShowResultsC(false); setPartCError(''); }} className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-300 transition-colors">Làm lại</button>
                            )}
                            {partCError && <span className="text-red-500 text-xs sm:text-sm font-medium text-center">{partCError}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LessonDanhTu = () => {
    const [activeToken, setActiveToken] = useState(null);

    return (
        <div className="animate-pop">
            <div className="mb-8 sm:mb-12 border-l-4 border-blue-500 pl-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Danh Từ (Nouns)</h1>
                <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium">Hiểu rõ về danh từ, cách nhận biết và phân loại trong Tiếng Anh.</p>
            </div>
            
            <section className="mb-12 sm:mb-16">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">1</span>
                        Tại sao cần biết danh từ? (Vị trí)
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-2">Nắm rõ cấu trúc để không dùng sai từ loại. Danh từ (in <strong className="text-red-600">đỏ</strong>) thường đứng ở vị trí Chủ ngữ (S) hoặc Tân ngữ (O). <strong className="text-blue-600">Bấm vào các thành phần cấu trúc (S, V, O...)</strong> để xem giải thích, và bấm vào từng ví dụ để xem giải nghĩa, lỗi sai.</p>
                </div>
                {DT_STRUCTURES.map((struct, idx) => <StructureRow key={idx} struct={struct} activeToken={activeToken} setActiveToken={setActiveToken} />)}
            </section>
            
            <DanhTuSectionDefinition />
            <DanhTuSectionSuffix />
            <DanhTuSectionCountable />
            <DanhTuSectionExercises />
        </div>
    );
};