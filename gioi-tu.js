const FormulaBoxGioiTu = ({ formula, note }) => (
    <div className="bg-slate-800 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-md inline-block border border-slate-700">
        <div className="font-mono text-base sm:text-lg font-bold tracking-wide text-amber-400">{formula}</div>
        {note && <div className="text-xs text-slate-300 mt-1 opacity-80">{note}</div>}
    </div>
);

// Component hiển thị Ving với đuôi ing subscript
const Ving = () => <Fragment>V<sub className="text-[0.65em] font-bold align-sub ml-[1px]">ing</sub></Fragment>;

// ==========================================
// KHỐI NỘI DUNG CHÍNH - MÔ ĐUN GIỚI TỪ
// ==========================================
const LessonGioiTu = () => {
    return (
        <div className="animate-pop w-full">
            {/* HERO SECTION */}
            <div className="mb-8 sm:mb-12 border-l-4 border-indigo-600 pl-4 sm:pl-5">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Giới Từ (Prepositions)</h1>
                <p className="text-base sm:text-lg text-slate-500 mt-2 font-medium">Những "gia vị" nhỏ bé nhưng có võ, giúp kết dính các mảnh ghép từ vựng thành một câu hoàn chỉnh mượt mà.</p>
            </div>

            <SectionConcept />
            <SectionCategories />
            <SectionPracticePhrases />
            <SectionWriting />
        </div>
    );
};

// ------------------------------------------
// PHẦN 1: KHÁI NIỆM CƠ BẢN
// ------------------------------------------
const ConceptExample = ({ prep, noun, vn }) => (
    <div className="flex flex-wrap sm:flex-nowrap items-center w-full p-3 sm:p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow gap-2 sm:gap-0">
        {/* Cố định chiều rộng ô Giới từ để thẳng hàng */}
        <div className="w-16 sm:w-20 shrink-0 font-black text-blue-600 bg-blue-50 px-2 py-1.5 sm:py-2 rounded-xl text-base sm:text-lg text-center">{prep}</div>
        
        {/* Cố định chiều rộng dấu + */}
        <div className="w-8 sm:w-10 shrink-0 text-slate-300 font-bold text-lg sm:text-xl text-center">+</div>
        
        {/* Cố định chiều rộng ô Danh từ để thẳng hàng */}
        <div className="w-24 sm:w-32 shrink-0 font-bold text-amber-600 bg-amber-50 px-2 py-1.5 sm:py-2 rounded-xl text-base sm:text-lg text-center">{noun}</div>
        
        {/* Đường gạch dọc sẽ tự động thẳng tắp vì các ô phía trước đã cố định kích thước */}
        <div className="hidden sm:block w-px h-8 bg-slate-200 mx-3 sm:mx-4 shrink-0"></div>
        
        <div className="text-slate-500 font-medium whitespace-nowrap w-full sm:w-auto mt-1 sm:mt-0 ml-1 sm:ml-0 text-sm sm:text-base">{vn}</div>
    </div>
);

const SectionConcept = () => (
    <section className="mb-14 relative z-20">
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md">1</span>
                Khái Niệm Cơ Bản
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]">Hiểu đúng bản chất của Cụm giới từ chỉ trong 1 phút.</p>
        </div>

        <div className="bg-[#f0f4f8] rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex-1 w-full max-w-sm mx-auto md:mx-0">
                <div className="bg-white px-5 py-5 sm:px-6 sm:py-6 rounded-2xl shadow-sm border border-slate-100 mb-5 text-center">
                    <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Công thức sinh tồn</div>
                    <div className="text-2xl sm:text-3xl font-black flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-blue-600">Prep</span>
                        <span className="text-slate-300">+</span>
                        <span className="text-amber-500">Noun</span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-500 mt-3">(Giới từ) + (Danh từ / <Ving />)</div>
                </div>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium text-justify">
                    Giới từ <strong className="text-red-600 font-bold">không bao giờ</strong> đứng một mình. Phía sau nó luôn phải cõng theo một <strong className="bg-yellow-200 text-yellow-900 px-1.5 py-0.5 rounded whitespace-nowrap">Danh từ</strong> hoặc <strong className="bg-yellow-200 text-yellow-900 px-1.5 py-0.5 rounded whitespace-nowrap">Cụm danh từ</strong>.
                </p>
            </div>
            
            <div className="flex-1 w-full space-y-3 sm:space-y-4">
                <ConceptExample prep="in" noun="the city" vn="trong thành phố" />
                <ConceptExample prep="at" noun="school" vn="tại trường học" />
                <ConceptExample prep="with" noun="friends" vn="cùng với bạn bè" />
            </div>
        </div>
    </section>
);

// ------------------------------------------
// PHẦN 2: PHÂN LOẠI
// ------------------------------------------
const GT_CATEGORIES = [
    {
        id: 'place', icon: <MapPin/>, title: "1. Nơi chốn (Place)", color: "blue",
        formula: "in / on / at + place", 
        illustration: (
            <div className="mt-3 mb-2 flex flex-wrap gap-2 items-center justify-around p-3 sm:p-4 bg-blue-50/50 rounded-xl border border-blue-100 shadow-inner">
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-blue-400 rounded-lg flex items-center justify-center bg-white shadow-sm relative">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-black mt-2 text-blue-800 tracking-widest">IN</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-b-4 border-blue-400 flex items-end justify-center pb-1.5 bg-white shadow-sm rounded-t-lg relative">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-black mt-2 text-blue-800 tracking-widest">ON</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-sm border border-blue-200 relative">
                        <MapPin className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6"/>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-black mt-2 text-blue-800 tracking-widest">AT</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border border-blue-200 relative gap-1.5">
                        <div className="w-3 h-3 bg-slate-300 rounded-sm"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-black mt-2 text-blue-800 tracking-widest">NEAR</span>
                </div>
            </div>
        ),
        tips: [
            { t: "in", d: "không gian bao quanh (in a room, in the workplace)" },
            { t: "on", d: "trên bề mặt (on the table)" },
            { t: "at", d: "điểm nhỏ (at school, at home)" },
            { t: "near / close to", d: "gần nơi nào đó (near the park)" }
        ],
        examples: [
            { en: "Many people work <span class='highlight-prep'>in</span> <span class='highlight-noun'>the workplace</span>.", vn: "Nhiều người làm việc tại nơi làm việc." },
            { en: "Students learn <span class='highlight-prep'>at</span> <span class='highlight-noun'>school</span>.", vn: "Học sinh học tại trường." },
            { en: "The book is <span class='highlight-prep'>on</span> <span class='highlight-noun'>the table</span>.", vn: "Quyển sách ở trên bàn." },
            { en: "The hospital is <span class='highlight-prep'>close to</span> <span class='highlight-noun'>my house</span>.", vn: "Bệnh viện ở gần nhà tôi." },
            { en: "Please wait <span class='highlight-prep'>outside</span> <span class='highlight-noun'>the office</span>.", vn: "Vui lòng đợi bên ngoài văn phòng." },
            { en: "They travel <span class='highlight-prep'>around</span> <span class='highlight-noun'>the world</span>.", vn: "Họ đi du lịch vòng quanh thế giới." }
        ]
    },
    {
        id: 'time', icon: <Clock/>, title: "2. Thời gian (Time)", color: "emerald",
        formula: "in / on / at + time", 
        tips: [
            { t: "in", d: "khoảng thời gian dài (in the past, in recent years)" },
            { t: "on", d: "ngày cụ thể (on Monday)" },
            { t: "at", d: "thời điểm cụ thể (at 8 AM)" },
            { t: "for", d: "khoảng kéo dài (for a long time)" },
            { t: "since", d: "từ mốc quá khứ (since 2010)" },
            { t: "during", d: "trong suốt (during the meeting)" },
            { t: "until", d: "cho đến khi (until tomorrow)" },
            { t: "before / after", d: "trước / sau (after dinner)" }
        ],
        examples: [
            { en: "We lived there <span class='highlight-prep'>in</span> <span class='highlight-noun'>the past</span>.", vn: "Chúng tôi đã sống ở đó trong quá quá khứ." },
            { en: "We will meet <span class='highlight-prep'>on</span> <span class='highlight-noun'>Monday</span>.", vn: "Chúng ta sẽ gặp nhau vào thứ Hai." },
            { en: "The class starts <span class='highlight-prep'>at</span> <span class='highlight-noun'>8 AM</span>.", vn: "Lớp học bắt đầu lúc 8 giờ sáng." },
            { en: "They have waited <span class='highlight-prep'>for</span> <span class='highlight-noun'>a long time</span>.", vn: "Họ đã chờ đợi trong một thời gian dài." },
            { en: "He has worked here <span class='highlight-prep'>since</span> <span class='highlight-noun'>2020</span>.", vn: "Anh ấy đã làm việc ở đây từ năm 2020." },
            { en: "Please turn off your phone <span class='highlight-prep'>during</span> <span class='highlight-noun'>the exam</span>.", vn: "Vui lòng tắt điện thoại trong suốt bài thi." },
            { en: "The store will be closed <span class='highlight-prep'>until</span> <span class='highlight-noun'>tomorrow</span>.", vn: "Cửa hàng sẽ đóng cửa cho đến ngày mai." }
        ]
    },
    {
        id: 'method', icon: <Settings/>, title: "3. Cách thức (Method)", color: "amber",
        formula: [<Fragment key="1">by + <Ving /></Fragment>, "through + N"], 
        tips: [
            { t: <Fragment>by <Ving/></Fragment>, d: "bằng cách làm gì đó" },
            { t: "through N", d: "thông qua cái gì đó" }
        ],
        examples: [
            { en: "Workers communicate <span class='highlight-prep'>through</span> <span class='highlight-noun'>emails</span>.", vn: "Nhân viên giao tiếp thông qua email." },
            { en: "We learn <span class='highlight-prep'>by</span> <span class='highlight-noun'>observing these items</span>.", vn: "Chúng ta học bằng cách quan sát những món đồ này." },
            { en: "You can find it <span class='highlight-prep'>on</span> <span class='highlight-noun'>the Internet</span>.", vn: "Bạn có thể tìm thấy nó trên mạng Internet." }
        ]
    },
    {
        id: 'relationship', icon: <Users/>, title: "4. Mối quan hệ", color: "purple",
        formula: "with + person", 
        tips: [
            { t: "with", d: "cùng với (ai đó/cái gì)" }
        ],
        examples: [
            { en: "They study <span class='highlight-prep'>with</span> <span class='highlight-noun'>friends and family</span>.", vn: "Họ học cùng với bạn bè và gia đình." },
            { en: "Students should interact <span class='highlight-prep'>with</span> <span class='highlight-noun'>their peers</span>.", vn: "Học sinh nên tương tác với bạn đồng trang lứa." },
            { en: "She is arguing <span class='highlight-prep'>with</span> <span class='highlight-noun'>her brother</span>.", vn: "Cô ấy đang cãi nhau với anh trai." }
        ]
    },
    {
        id: 'contrast', icon: <Repeat/>, title: "5. Thay thế / Tương phản", color: "rose",
        formula: <Fragment>instead of / rather than + <Ving/> / N</Fragment>, 
        tips: [
            { t: "instead of", d: <Fragment>thay vì làm việc này (<Ving/>) thì làm việc kia</Fragment> },
            { t: "rather than", d: "hơn là / thay vì" }
        ],
        examples: [
            { en: "<span class='highlight-prep'>Instead of</span> <span class='highlight-noun'>focusing on their work</span>, they play games.", vn: "Thay vì tập trung vào công việc, họ lại chơi game." },
            { en: "We drank tea <span class='highlight-prep'>instead of</span> <span class='highlight-noun'>coffee</span>.", vn: "Chúng tôi đã uống trà thay vì cà phê." },
            { en: "We should take action <span class='highlight-prep'>rather than</span> <span class='highlight-noun'>complaining</span>.", vn: "Chúng ta nên hành động hơn là phàn nàn." }
        ]
    }
];

const GT_THEME_COLORS = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-800' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-800' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', icon: 'text-amber-600', badge: 'bg-amber-100 text-amber-800' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-800' },
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', icon: 'text-rose-600', badge: 'bg-rose-100 text-rose-800' },
};

const SectionCategories = () => (
    <section className="mb-14 relative z-20">
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md">2</span>
                Bảng Tóm Tắt Phân Loại
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]">Hệ thống hóa các giới từ thông dụng nhất theo từng mục đích sử dụng.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
            {GT_CATEGORIES.map((cat, idx) => {
                const t = GT_THEME_COLORS[cat.color];
                return (
                    <div key={idx} className={`bg-white rounded-2xl border-2 ${t.border} shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md ${cat.id === 'contrast' ? 'md:col-span-2' : ''}`}>
                        <div className={`${t.bg} p-3 sm:p-4 border-b ${t.border} flex items-center gap-3`}>
                            <div className={`${t.icon} bg-white p-2 rounded-lg shadow-sm`}><div className="scale-90 sm:scale-100">{cat.icon}</div></div>
                            <h3 className={`font-bold text-base sm:text-lg ${t.text}`}>{cat.title}</h3>
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <div className={`mb-4 flex flex-wrap gap-2 ${cat.id === 'contrast' ? 'justify-center' : ''}`}>
                                {Array.isArray(cat.formula) ? cat.formula.map((f, i) => <FormulaBoxGioiTu key={i} formula={f} />) : <FormulaBoxGioiTu formula={cat.formula} />}
                            </div>
                            
                            <div className={`mb-4 flex flex-wrap gap-2 ${cat.id === 'contrast' ? 'justify-center' : ''}`}>
                                {cat.tips.map((tip, i) => (
                                    <div key={i} className={`text-xs font-semibold px-2 sm:px-2.5 py-1.5 rounded-lg border ${t.border} bg-slate-50 flex items-center gap-1.5`}>
                                        <span className={t.badge + ' px-1.5 py-0.5 rounded whitespace-nowrap'}>{tip.t}</span>
                                        <span className="text-slate-600">{tip.d}</span>
                                    </div>
                                ))}
                            </div>

                            {cat.illustration && cat.illustration}

                            <div className="mt-auto pt-4 border-t border-slate-100 bg-slate-50/50 p-3 rounded-xl space-y-2">
                                {cat.examples.map((ex, i) => (
                                    <div key={i} className="w-full">
                                        {cat.id === 'contrast' ? (
                                            <ClickableSentenceInline en={ex.en} vn={ex.vn} />
                                        ) : (
                                            <ClickableSentence en={ex.en} vn={ex.vn} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Hộp đặc biệt: So sánh Because vs Because of */}
        <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-4 sm:p-7 shadow-sm relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none"><HelpCircle className="w-16 h-16 sm:w-24 sm:h-24 text-rose-500" /></div>
            <h3 className="text-lg sm:text-xl font-extrabold text-rose-800 mb-3 sm:mb-4 flex items-center gap-2 relative z-10">
                <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                Đặc biệt chú ý: Nhóm Nguyên nhân (Cause)
            </h3>
            <p className="text-rose-900/80 mb-5 relative z-10 font-medium text-sm sm:text-base">Học sinh rất hay nhầm lẫn giữa Từ nối (Because) và Giới từ (Because of). Hãy nhớ công thức sinh tồn:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
                <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm">
                    <div className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-2">Dùng Liên Từ</div>
                    <div className="text-base sm:text-lg font-black text-slate-800 mb-3 border-b pb-2">Because + <span className="text-blue-600">S + V</span></div>
                    <p className="text-sm text-slate-600">I stayed home <strong className="text-slate-900">because</strong> <span className="text-blue-600 border-b border-dashed border-blue-300">it rained heavily</span>.</p>
                    <p className="text-xs text-slate-400 mt-1">(Theo sau là 1 mệnh đề có Chủ ngữ + Động từ)</p>
                </div>
                <div className="bg-rose-100 p-4 rounded-xl border border-rose-300 shadow-inner">
                    <div className="font-bold text-rose-500 text-xs uppercase tracking-wider mb-2">Dùng Giới Từ</div>
                    <div className="text-base sm:text-lg font-black text-rose-900 mb-3 border-b border-rose-200 pb-2">Because of + <span className="text-amber-600">Noun</span></div>
                    <p className="text-sm text-rose-900">I stayed home <strong className="text-rose-700">because of</strong> <span className="text-amber-600 border-b border-dashed border-amber-400 font-bold">the heavy rain</span>.</p>
                    <p className="text-xs text-rose-700/70 mt-1">(Theo sau CHỈ LÀ cụm danh từ)</p>
                </div>
            </div>
        </div>
    </section>
);

// ------------------------------------------
// PHẦN 3: BÀI TẬP DỊCH CỤM TỪ (THỰC HÀNH MỚI)
// ------------------------------------------
const PhraseInput = ({ item }) => {
    const [val, setVal] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'correct', 'error'
    const textareaRef = useRef(null);

    // Normalize user input
    const cleanUser = val.trim().toLowerCase().replace(/\s+/g, ' ');
    
    // Build valid answers list
    let validAnswers = [item.en.trim().toLowerCase().replace(/\s+/g, ' ')];
    if (item.acceptedAnswers) {
        const alt = item.acceptedAnswers.map(a => a.trim().toLowerCase().replace(/\s+/g, ' '));
        validAnswers = [...validAnswers, ...alt];
    }
    
    const isMatch = status === 'correct';

    // Tự động co giãn chiều cao của Textarea khi nội dung thay đổi
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = (textareaRef.current.scrollHeight + 4) + 'px';
        }
    }, [val, status]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Ngăn không cho tạo dòng mới khi nhấn Enter
            if (validAnswers.includes(cleanUser)) {
                setStatus('correct');
            } else if (cleanUser !== '') {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 500); // Tắt hiệu ứng lỗi sau 0.5s
            }
        }
    };

    const handleChange = (e) => {
        setVal(e.target.value);
        if (status !== 'idle') setStatus('idle');
    };

    let containerClass = 'bg-slate-50 border-slate-200';
    let inputClass = 'border-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 bg-white';
    
    if (isMatch) {
        containerClass = 'bg-emerald-50 border-emerald-300 shadow-sm';
        inputClass = 'border-emerald-400 bg-emerald-100/50 text-emerald-800 font-bold';
    } else if (status === 'error') {
        inputClass = 'border-red-500 bg-red-50 text-red-800 font-bold animate-shake';
    }

    return (
        <div className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 transition-colors ${containerClass}`}>
            <div className="sm:w-1/2 text-sm sm:text-base font-medium text-slate-700">{item.vn}</div>
            <div className="sm:w-1/2 relative flex items-center">
                <textarea 
                    ref={textareaRef}
                    rows={1}
                    value={val} 
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder=""
                    className={`w-full py-3 px-4 pr-10 rounded-xl border-2 outline-none text-sm sm:text-base transition-colors resize-none overflow-hidden leading-relaxed ${inputClass}`}
                    readOnly={isMatch}
                />
                {isMatch && <div className="absolute right-3 top-0 bottom-0 flex items-center justify-center text-emerald-500 font-bold animate-pop pointer-events-none"><CheckCircle2 className="w-5 h-5"/></div>}
            </div>
        </div>
    );
};

const GT_PHRASE_GROUPS = [
    {
        title: "📍 Nhóm Nơi Chốn",
        items: [
            { vn: "ở nhà", en: "at home" },
            { vn: "ở nơi làm việc", en: "at work", acceptedAnswers: ["at work", "in the workplace"] },
            { vn: "tại trường học", en: "at school" },
            { vn: "trong các tòa nhà kính", en: "in glass buildings" },
            { vn: "trong lớp học", en: "in class", acceptedAnswers: ["in class", "in the classroom"] },
            { vn: "bên ngoài văn phòng", en: "outside the office" },
            { vn: "bên trong văn phòng", en: "inside the office", acceptedAnswers: ["inside the office", "in the office"] },
            { vn: "vòng quanh thế giới", en: "around the world" }
        ]
    },
    {
        title: "⏱ Nhóm Thời Gian",
        items: [
            { vn: "trong quá khứ", en: "in the past" },
            { vn: "bất cứ lúc nào", en: "at any time" },
            { vn: "vào ban ngày", en: "during the day", acceptedAnswers: ["during the day", "during the daytime"] },
            { vn: "trong một thời gian dài", en: "for a long time" },
            { vn: "trong những năm gần đây", en: "in recent years" }
        ]
    },
    {
        title: "🎯 Nhóm Nguyên Nhân & Cách Thức",
        items: [
            { vn: "bởi vì ánh nắng mặt trời gắt", en: "because of strong sunlight" },
            { vn: "thông qua email", en: "through emails" },
            { vn: "thông qua các cuộc họp trực tuyến", en: "through online meetings" },
            { vn: "trên mạng Internet", en: "on the Internet" },
            { vn: "bằng cách nhìn những vật thể này", en: "by seeing these objects" },
            { vn: "bằng cách quan sát những món đồ này", en: "by observing these items" }
        ]
    },
    {
        title: "🤝 Nhóm Mối Quan Hệ & Tương Phản",
        items: [
            { vn: "với nhau", en: "with each other" },
            { vn: "với bạn bè và gia đình", en: "with friends and family" },
            { vn: "với giáo viên", en: "with teachers" },
            { vn: "với bạn đồng trang lứa", en: "with their peers" },
            { vn: "với những người khác", en: "with others", acceptedAnswers: ["with others", "with other people"] },
            { vn: "thay vì tập trung vào công việc của họ", en: "instead of focusing on their work", acceptedAnswers: ["instead of focusing on their work", "rather than focusing on their work"] },
            { vn: "hơn là phàn nàn", en: "rather than complaining", acceptedAnswers: ["rather than complaining", "instead of complaining"] }
        ]
    }
];

const SectionPracticePhrases = () => (
    <section className="mb-14 relative z-20">
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md">3</span>
                Thử Thách Gõ Cụm Từ
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]">Luyện tập ghi nhớ ngay 25 cụm giới từ "ăn điểm" trong bài viết tiếng Anh.</p>
        </div>

        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <p className="text-sm sm:text-base text-slate-500">Hãy nhập tiếng Anh tương ứng vào ô trống. Nếu đúng, ô sẽ tự động đổi màu xanh.</p>
            </div>

            <div className="space-y-8">
                {GT_PHRASE_GROUPS.map((group, gIdx) => (
                    <div key={gIdx}>
                        <h3 className="font-bold text-slate-800 text-lg mb-4 border-b border-slate-100 pb-2">{group.title}</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                            {group.items.map((item, iIdx) => (
                                <PhraseInput key={iIdx} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ------------------------------------------
// PHẦN 4: THỰC HÀNH VIẾT CÂU
// ------------------------------------------
const GT_WRITING_SENTENCES = [
    {
        id: 1,
        subject: "Many students can study",
        options: [
            { id: 'opt1_1', text: "at school", isCorrect: true, type: "Nơi chốn" },
            { id: 'opt1_2', text: "because of school", isCorrect: false },
            { id: 'opt1_3', text: "in home", isCorrect: false }
        ],
        correctFull: "Many students can study <strong class='text-blue-600'>at school</strong>.",
        vn: "Nhiều học sinh có thể học tại trường."
    },
    {
        id: 2,
        subject: "Workers communicate",
        options: [
            { id: 'opt2_1', text: "by emails", isCorrect: false },
            { id: 'opt2_2', text: "through online meetings", isCorrect: true, type: "Cách thức" },
            { id: 'opt2_3', text: "in the Internet", isCorrect: false }
        ],
        correctFull: "Workers communicate <strong class='text-blue-600'>through online meetings</strong>.",
        vn: "Nhân viên giao tiếp thông qua các cuộc họp trực tuyến."
    },
    {
        id: 3,
        subject: "Many people work",
        options: [
            { id: 'opt3_1', text: "at home nowadays", isCorrect: true, type: "Nơi chốn + Thời gian" },
            { id: 'opt3_2', text: "on the office", isCorrect: false },
            { id: 'opt3_3', text: "with the workplace", isCorrect: false }
        ],
        correctFull: "Many people work <strong class='text-blue-600'>at home nowadays</strong>.",
        vn: "Nhiều người làm việc tại nhà ngày nay."
    },
    {
        id: 4,
        subject: "She is waiting",
        options: [
            { id: 'opt4_1', text: "at the bus stop", isCorrect: true, type: "Nơi chốn" },
            { id: 'opt4_2', text: "in the bus stop", isCorrect: false },
            { id: 'opt4_3', text: "on the bus stop", isCorrect: false }
        ],
        correctFull: "She is waiting <strong class='text-blue-600'>at the bus stop</strong>.",
        vn: "Cô ấy đang chờ ở trạm xe buýt."
    },
    {
        id: 5,
        subject: "The store will be closed",
        options: [
            { id: 'opt5_1', text: "until tomorrow", isCorrect: true, type: "Thời gian" },
            { id: 'opt5_2', text: "since tomorrow", isCorrect: false },
            { id: 'opt5_3', text: "in tomorrow", isCorrect: false }
        ],
        correctFull: "The store will be closed <strong class='text-blue-600'>until tomorrow</strong>.",
        vn: "Cửa hàng sẽ đóng cửa cho đến ngày mai."
    },
    {
        id: 6,
        subject: "We improved our English",
        options: [
            { id: 'opt6_1', text: "by practicing every day", isCorrect: true, type: "Cách thức" },
            { id: 'opt6_2', text: "in practicing every day", isCorrect: false },
            { id: 'opt6_3', text: "on practicing every day", isCorrect: false }
        ],
        correctFull: "We improved our English <strong class='text-blue-600'>by practicing every day</strong>.",
        vn: "Chúng tôi đã cải thiện tiếng Anh của mình bằng cách luyện tập mỗi ngày."
    },
    {
        id: 7,
        subject: "They walked slowly",
        options: [
            { id: 'opt7_1', text: "near the river", isCorrect: true, type: "Nơi chốn" },
            { id: 'opt7_2', text: "in the river", isCorrect: false },
            { id: 'opt7_3', text: "on the river", isCorrect: false }
        ],
        correctFull: "They walked slowly <strong class='text-blue-600'>near the river</strong>.",
        vn: "Họ đi bộ chầm chậm gần con sông."
    },
    {
        id: 8,
        subject: "He has lived here",
        options: [
            { id: 'opt8_1', text: "since 2015", isCorrect: true, type: "Thời gian" },
            { id: 'opt8_2', text: "for 2015", isCorrect: false },
            { id: 'opt8_3', text: "in 2015", isCorrect: false }
        ],
        correctFull: "He has lived here <strong class='text-blue-600'>since 2015</strong>.",
        vn: "Anh ấy đã sống ở đây từ năm 2015."
    },
    {
        id: 9,
        subject: "I prefer reading books",
        options: [
            { id: 'opt9_1', text: "instead of watching TV", isCorrect: true, type: "Thay thế" },
            { id: 'opt9_2', text: "by watching TV", isCorrect: false },
            { id: 'opt9_3', text: "with watching TV", isCorrect: false }
        ],
        correctFull: "I prefer reading books <strong class='text-blue-600'>instead of watching TV</strong>.",
        vn: "Tôi thích đọc sách hơn thay vì xem TV."
    },
    {
        id: 10,
        subject: "She solved the problem",
        options: [
            { id: 'opt10_1', text: "with her teammates", isCorrect: true, type: "Mối quan hệ" },
            { id: 'opt10_2', text: "by her teammates", isCorrect: false },
            { id: 'opt10_3', text: "at her teammates", isCorrect: false }
        ],
        correctFull: "She solved the problem <strong class='text-blue-600'>with her teammates</strong>.",
        vn: "Cô ấy đã giải quyết vấn đề cùng với đồng đội của mình."
    },
    {
        id: 11,
        subject: "We should take action",
        options: [
            { id: 'opt11_1', text: "rather than complaining", isCorrect: true, type: "Tương phản" },
            { id: 'opt11_2', text: "by complaining", isCorrect: false },
            { id: 'opt11_3', text: "with complaining", isCorrect: false }
        ],
        correctFull: "We should take action <strong class='text-blue-600'>rather than complaining</strong>.",
        vn: "Chúng ta nên hành động hơn là phàn nàn."
    }
];

const SectionWriting = () => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleSelectOption = (qId, opt) => {
        if (showResults) return;
        setAnswers({ ...answers, [qId]: opt });
    };

    const isAllAnswered = Object.keys(answers).length === GT_WRITING_SENTENCES.length;

    const checkAnswers = () => {
        setShowResults(true);
    };

    const resetExercise = () => {
        setAnswers({});
        setShowResults(false);
        setStep(1);
    };

    return (
        <section className="mb-14 relative z-20">
            <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md">4</span>
                    Thực Hành Ghép Câu
                </h2>
                <p className="text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]">Vận dụng giới từ để mở rộng câu văn, giúp câu chi tiết và tự nhiên hơn.</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-4 sm:p-8 shadow-xl relative overflow-hidden">
                {/* Background decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

                {/* Steps Navigation */}
                <div className="flex justify-center mb-6 sm:mb-8 relative z-10 w-full overflow-x-auto hide-scrollbar">
                    <div className="bg-slate-800 p-1.5 rounded-xl border border-slate-700 flex gap-1 min-w-max">
                        <button onClick={() => !showResults && setStep(1)} className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${step === 1 ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Bước 1: Khung câu</button>
                        <button onClick={() => !showResults && setStep(2)} className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${step === 2 ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}>Bước 2: Lắp ráp</button>
                        <button disabled className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${step === 3 ? 'bg-emerald-500 text-white shadow-md' : 'text-slate-600 cursor-not-allowed'}`}>Bước 3: Hoàn chỉnh</button>
                    </div>
                </div>

                {/* STEP 1: Khung câu cơ bản */}
                {step === 1 && (
                    <div className="animate-pop relative z-10">
                        <div className="text-center mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Cung cấp Khung Câu (Sentence Frame)</h3>
                            <p className="text-sm sm:text-base text-slate-400">Một câu tiếng Anh cơ bản chỉ cần <strong className="text-emerald-400">Chủ ngữ (S)</strong> và <strong className="text-blue-400">Động từ (V)</strong> là đã có nghĩa.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <div className="bg-slate-800 border border-slate-700 p-4 sm:p-5 rounded-2xl text-center">
                                <div className="text-slate-500 text-xs sm:text-sm mb-2 sm:mb-3">Chủ đề: Học tập</div>
                                <div className="text-lg sm:text-xl font-bold text-white">Students <span className="text-blue-400">can study</span>...</div>
                            </div>
                            <div className="bg-slate-800 border border-slate-700 p-4 sm:p-5 rounded-2xl text-center">
                                <div className="text-slate-500 text-xs sm:text-sm mb-2 sm:mb-3">Chủ đề: Công việc</div>
                                <div className="text-lg sm:text-xl font-bold text-white">Workers <span className="text-blue-400">communicate</span>...</div>
                            </div>
                        </div>
                        <div className="text-center mt-6 sm:mt-8">
                            <button onClick={() => setStep(2)} className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-transform hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.3)] w-full sm:w-auto">Tiếp tục: Lắp ráp Giới từ</button>
                        </div>
                    </div>
                )}

                {/* STEP 2: Lắp ráp */}
                {step === 2 && (
                    <div className="animate-pop relative z-10">
                        <div className="text-center mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Chọn Cụm Giới Từ phù hợp</h3>
                            <p className="text-sm sm:text-base text-slate-400">Điền cụm giới từ vào chỗ trống để tạo ra câu chi tiết hơn.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {GT_WRITING_SENTENCES.map((q, idx) => (
                                <div key={q.id} className="bg-slate-800 border border-slate-700 p-4 sm:p-5 rounded-2xl">
                                    <div className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 border-b border-slate-700 pb-3 sm:pb-4 leading-relaxed">
                                        <span className="text-slate-500 mr-2">{idx + 1}.</span> 
                                        {q.subject} <span className={`inline-block min-w-[80px] sm:min-w-[120px] mx-1 sm:mx-2 text-center px-2 ${answers[q.id] ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>{answers[q.id]?.text || "________"}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                                        {q.options.map(opt => {
                                            const isSelected = answers[q.id]?.id === opt.id;
                                            return (
                                                <button 
                                                    key={opt.id}
                                                    onClick={() => handleSelectOption(q.id, opt)}
                                                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-all border-2 text-left sm:text-center w-full sm:w-auto ${isSelected ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-slate-400 hover:bg-slate-600'}`}
                                                >
                                                    {opt.text}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6 sm:mt-8">
                            <button 
                                onClick={() => {checkAnswers(); setStep(3);}} 
                                disabled={!isAllAnswered}
                                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all shadow-md"
                            >
                                Hoàn thành & Xem kết quả
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3: Kết quả */}
                {step === 3 && (
                    <div className="animate-pop relative z-10">
                        <div className="text-center mb-6 sm:mb-8">
                            <div className="inline-block bg-emerald-500 text-white p-3 rounded-full mb-3 sm:mb-4 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Câu Hoàn Chỉnh Tuyệt Vời!</h3>
                            <p className="text-sm sm:text-base text-slate-400 px-2">Chỉ bằng cách thêm <strong className="text-emerald-400">Cụm giới từ</strong>, câu văn của bạn đã trở nên dài và đủ ý hơn rất nhiều.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {GT_WRITING_SENTENCES.map((q) => {
                                const userOpt = answers[q.id];
                                const isCorrect = userOpt?.isCorrect;

                                return (
                                    <div key={q.id} className={`p-4 sm:p-5 rounded-2xl border ${isCorrect ? 'bg-emerald-900/30 border-emerald-500/50' : 'bg-rose-900/30 border-rose-500/50'}`}>
                                        <div className="flex items-center gap-2 mb-2">
                                            {isCorrect ? <span className="bg-emerald-500 text-[10px] sm:text-xs font-bold text-white px-2 py-0.5 rounded">ĐÚNG</span> : <span className="bg-rose-500 text-[10px] sm:text-xs font-bold text-white px-2 py-0.5 rounded">SAI</span>}
                                            {isCorrect && userOpt.type && <span className="border border-emerald-500/50 text-emerald-400 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded">Chỉ: {userOpt.type}</span>}
                                        </div>
                                        
                                        {/* Câu người dùng tạo */}
                                        {!isCorrect && (
                                            <div className="text-sm sm:text-base text-slate-400 line-through mb-2">{q.subject} {userOpt?.text}.</div>
                                        )}

                                        {/* Câu đúng */}
                                        <div className="text-base sm:text-lg font-medium text-white mb-2" dangerouslySetInnerHTML={{__html: q.correctFull}}></div>
                                        <div className="text-xs sm:text-sm text-emerald-300/80">🇻🇳 {q.vn}</div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center mt-6 sm:mt-8">
                            <button onClick={resetExercise} className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-colors border border-slate-600">Làm lại từ đầu</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};