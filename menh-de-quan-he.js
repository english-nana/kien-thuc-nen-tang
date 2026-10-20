const exercisesData = [
    {
        title: "A. People — WHO",
        icon: <Users size={24} className="text-blue-500" />,
        color: "blue",
        example: {
            vn: "Tôi có một người bạn luôn giúp tôi học tiếng Anh.",
            en: "I have a friend who always helps me with English."
        },
        items: [
            { vn: "Tôi biết một giáo viên luôn tạo động lực cho học sinh.", en: "I know a teacher who always motivates students.", hint: "motivate (v): tạo động lực" },
            { vn: "Tôi có một người bạn học rất chăm chỉ.", en: "I have a friend who studies very hard.", hint: "study hard: học chăm chỉ" },
            { vn: "Tôi thích những người biết lắng nghe người khác.", en: "I like people who listen to others.", hint: "listen to others: lắng nghe người khác" },
            { vn: "Tôi gặp một người đã thay đổi cách suy nghĩ của tôi.", en: "I met a person who changed my way of thinking.", hint: "way of thinking (n): cách suy nghĩ" },
            { vn: "Cô ấy là kiểu người luôn giúp đỡ người khác.", en: "She is the type of person who always helps others.", hint: "type of person: kiểu người" }
        ]
    },
    {
        title: "B. Things — WHICH / THAT",
        icon: <Layers size={24} className="text-emerald-500" />,
        color: "emerald",
        example: {
            vn: "Tôi xem một bộ phim làm tôi rất xúc động.",
            en: "I watched a movie that made me very emotional."
        },
        items: [
            { vn: "Tôi mua một chiếc điện thoại hoạt động rất tốt.", en: "I bought a phone which/that works very well.", hint: "work well: hoạt động tốt" },
            { vn: "Tôi thích những cuốn sách giúp tôi thư giãn.", en: "I like books which/that help me relax.", hint: "relax (v): thư giãn" },
            { vn: "Tôi sử dụng một ứng dụng giúp tôi học từ vựng.", en: "I use an app which/that helps me learn vocabulary.", hint: "vocabulary (n): từ vựng" },
            { vn: "Đây là một vấn đề ảnh hưởng đến nhiều người trẻ.", en: "This is a problem which/that affects many young people.", hint: "affect (v): ảnh hưởng đến" },
            { vn: "Tôi thích những hoạt động giúp tôi giảm căng thẳng.", en: "I like activities which/that help me reduce stress.", hint: "reduce stress: giảm căng thẳng" }
        ]
    },
    {
        title: "C. Places — WHERE",
        icon: <MapPin size={24} className="text-orange-500" />,
        color: "orange",
        example: {
            vn: "Tôi sống ở một thành phố có nhiều cây xanh.",
            en: "I live in a city where there are many green spaces."
        },
        items: [
            { vn: "Tôi thường đến một quán cà phê nơi tôi có thể học yên tĩnh.", en: "I often go to a café where I can study quietly.", hint: "quietly (adv): một cách yên tĩnh" },
            { vn: "Đây là ngôi trường nơi tôi học tiếng Anh.", en: "This is the school where I learn English.", hint: "school (n): ngôi trường" },
            { vn: "Tôi muốn sống ở một nơi mọi người thân thiện.", en: "I want to live in a place where people are friendly.", hint: "friendly (adj): thân thiện" },
            { vn: "Chúng tôi đến một nhà hàng nơi phục vụ đồ ăn rất ngon.", en: "We went to a restaurant where they serve delicious food.", hint: "serve (v): phục vụ | delicious (adj): ngon" },
            { vn: "Đó là công viên nơi tôi thường đi dạo vào buổi tối.", en: "That is the park where I often go for a walk in the evening.", hint: "go for a walk: đi dạo" }
        ]
    },
    {
        title: "D. Time — WHEN",
        icon: <Clock size={24} className="text-purple-500" />,
        color: "purple",
        example: {
            vn: "Có một khoảng thời gian tôi cảm thấy rất áp lực.",
            en: "There was a time when I felt extremely stressed."
        },
        items: [
            { vn: "Tôi nhớ ngày tôi tốt nghiệp đại học.", en: "I remember the day when I graduated from university.", hint: "graduate from: tốt nghiệp (từ)" },
            { vn: "Có một giai đoạn tôi dành nhiều thời gian để học IELTS.", en: "There was a period when I spent a lot of time studying IELTS.", hint: "a period (n): một giai đoạn | spend time + V-ing: dành thời gian làm gì" },
            { vn: "Chúng ta đang sống trong thời đại công nghệ phát triển nhanh chóng.", en: "We are living in an era when technology develops rapidly.", hint: "era (n): thời đại | develop rapidly: phát triển nhanh chóng" },
            { vn: "Tôi không thể quên khoảnh khắc tôi nhận được kết quả thi.", en: "I cannot forget the moment when I received my exam results.", hint: "moment (n): khoảnh khắc | receive (v): nhận được" },
            { vn: "Đó là lúc tôi bắt đầu học tiếng Anh nghiêm túc.", en: "That was the time when I started learning English seriously.", hint: "seriously (adv): một cách nghiêm túc" }
        ]
    },
    {
        title: "E. Reason — WHY",
        icon: <HelpCircle size={24} className="text-rose-500" />,
        color: "rose",
        example: {
            vn: "Một lý do tại sao tôi thích tiếng Anh là cơ hội nghề nghiệp tốt hơn.",
            en: "One reason why I like English is better career opportunities."
        },
        items: [
            { vn: "Lý do tại sao nhiều người tập thể dục là để giữ sức khỏe.", en: "The reason why many people exercise is to stay healthy.", hint: "exercise (v): tập thể dục | stay healthy: giữ sức khỏe" },
            { vn: "Một lý do tại sao học sinh bị căng thẳng là áp lực học tập.", en: "One reason why students are stressed is academic pressure.", hint: "be stressed: bị căng thẳng | academic pressure: áp lực học tập" },
            { vn: "Đó là lý do tại sao tôi muốn du học.", en: "That is the reason why I want to study abroad.", hint: "study abroad: du học" },
            { vn: "Lý do tại sao nhiều người thích mua sắm online là sự tiện lợi.", en: "The reason why many people like shopping online is convenience.", hint: "convenience (n): sự tiện lợi" },
            { vn: "Một lý do tại sao trẻ em thích trò chơi điện tử là vì chúng thú vị.", en: "One reason why children like video games is because they are fun.", hint: "video games: trò chơi điện tử | fun (adj): thú vị" }
        ]
    }
];

const exercisesPart2 = {
    title: "PHẦN 2 — MỞ RỘNG MỆNH ĐỀ",
    icon: <Zap size={24} className="text-amber-500" />,
    color: "amber",
    example: {
        vn: "Tiếng Anh là một ngôn ngữ quốc tế và nó rất quan trọng hiện nay.",
        en: "English, which is an international language, is very important nowadays."
    },
    items: [
        { vn: "Mạng xã hội ngày càng phổ biến và nó ảnh hưởng đến cách mọi người giao tiếp.", en: "Social media, which is increasingly popular, affects how people communicate.", hint: "increasingly popular: ngày càng phổ biến | communicate (v): giao tiếp" },
        { vn: "Cha tôi làm bác sĩ và ông ấy làm việc rất chăm chỉ.", en: "My father, who is a doctor, works very hard.", hint: "work hard: làm việc chăm chỉ" },
        { vn: "Công nghệ phát triển rất nhanh và nó thay đổi cuộc sống hiện đại.", en: "Technology, which develops very fast, changes modern life.", hint: "modern life: cuộc sống hiện đại" },
        { vn: "Hà Nội là thủ đô của Việt Nam và nó thu hút nhiều khách du lịch.", en: "Hanoi, which is the capital of Vietnam, attracts many tourists.", hint: "capital (n): thủ đô | attract (v): thu hút" },
        { vn: "Máy tính rất hữu ích và chúng được sử dụng rộng rãi trong giáo dục.", en: "Computers, which are very useful, are widely used in education.", hint: "useful (adj): hữu ích | widely used: được sử dụng rộng rãi" },
        { vn: "Nhiều học sinh học online và điều này giúp họ tiết kiệm thời gian.", en: "Many students study online, which helps them save time.", hint: "save time: tiết kiệm thời gian" },
        { vn: "Trẻ em ngày nay sử dụng điện thoại rất nhiều và điều này có thể ảnh hưởng đến sức khỏe của chúng.", en: "Children today use phones a lot, which can affect their health.", hint: "affect (v): ảnh hưởng đến" },
        { vn: "Người trẻ thường thức khuya và điều này ảnh hưởng tiêu cực đến sức khỏe.", en: "Young people often stay up late, which negatively affects their health.", hint: "stay up late: thức khuya | negatively affect: ảnh hưởng tiêu cực" },
        { vn: "Nhiều người thích sống ở thành phố lớn và điều này làm tăng áp lực giao thông.", en: "Many people like living in big cities, which increases traffic pressure.", hint: "increase (v): làm tăng | traffic pressure: áp lực giao thông" },
        { vn: "Internet cung cấp rất nhiều thông tin và điều này giúp mọi người học dễ dàng hơn.", en: "The Internet provides a lot of information, which helps people learn more easily.", hint: "provide (v): cung cấp | easily (adv): một cách dễ dàng" }
    ]
};

const checkUserAnswer = (user, expected) => {
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const userNorm = normalize(user);

    const sentences = expected.split(/\s+\/\s+/);
    for (let sentence of sentences) {
        let variations = [sentence];
        const slashMatch = sentence.match(/([a-zA-Z]+)\/([a-zA-Z]+)/);
        if (slashMatch) {
            variations = [
                sentence.replace(slashMatch[0], slashMatch[1]),
                sentence.replace(slashMatch[0], slashMatch[2])
            ];
        }
        
        for (let v of variations) {
            if (normalize(v) === userNorm) return true;
        }
    }
    return false;
};

const TranslationExerciseItem = ({ item }) => {
    const [val, setVal] = useState("");
    const [isOk, setIsOk] = useState(false);
    const [isError, setIsError] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleCheck = () => {
        if (!val.trim()) return;
        if (checkUserAnswer(val, item.en)) {
            setIsOk(true);
            setIsError(false);
            setShowHint(false);
            setShowAnswer(false);
        } else {
            setIsError(true);
            setTimeout(() => setIsError(false), 500); // trigger shake
        }
    };

    return (
        <div className={`p-4 rounded-xl shadow-sm transition-all border ${isOk ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200 focus-within:border-blue-400'}`}>
            <div className="flex gap-3 items-start">
                <div className={`mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${isOk ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                    {isOk ? <CheckCircle2 size={14} /> : "!"}
                </div>
                <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-2 gap-2">
                        <div className="text-slate-800 font-medium">{item.vn}</div>
                        {!isOk && item.hint && (
                            <button 
                                onClick={() => setShowHint(!showHint)}
                                className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-md transition-colors border flex items-center gap-1.5 ${
                                    showHint ? 'bg-amber-100 text-amber-700 border-amber-200' : 'text-slate-500 hover:text-amber-600 bg-white hover:bg-amber-50 border-slate-200 hover:border-amber-200'
                                }`}
                                title="Bấm để xem từ vựng gợi ý"
                            >
                                <span className="text-[14px]">💡</span> {showHint ? "Ẩn từ vựng" : "Từ vựng"}
                            </button>
                        )}
                    </div>
                    
                    {showHint && !isOk && item.hint && (
                        <div className="mb-3 text-sm text-amber-800 font-medium p-2.5 bg-amber-50 rounded-lg border border-amber-100 animate-pop flex items-start gap-2 shadow-sm">
                            <span className="shrink-0 mt-0.5 text-amber-500"><Zap size={14} /></span>
                            <span>{item.hint}</span>
                        </div>
                    )}
                    
                    <div className="relative">
                        <textarea
                            value={isOk ? item.en : val}
                            onChange={(e) => { setVal(e.target.value); setIsError(false); }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleCheck();
                                }
                            }}
                            disabled={isOk}
                            rows="2"
                            placeholder=""
                            onInput={(e) => {
                                e.target.style.height = 'auto';
                                e.target.style.height = (e.target.scrollHeight + 4) + 'px';
                            }}
                            className={`w-full px-4 py-3 rounded-xl outline-none transition-all resize-none overflow-hidden text-base ${
                                isOk ? 'text-emerald-700 font-bold bg-transparent border-transparent cursor-default px-0' : 
                                isError ? 'border-2 border-red-500 bg-red-50 text-red-700 animate-shake' : 
                                'border-2 border-slate-200 focus:border-blue-500 bg-slate-50 focus:bg-white text-slate-700 shadow-inner'
                            }`}
                        ></textarea>
                    </div>

                    {!isOk && (
                        <div className="mt-2">
                            <button 
                                onClick={() => setShowAnswer(!showAnswer)}
                                className="text-xs text-blue-500 hover:text-blue-700 underline font-medium transition-colors"
                            >
                                {showAnswer ? "Ẩn đáp án" : "Xem đáp án"}
                            </button>
                        </div>
                    )}
                    {showAnswer && !isOk && (
                        <div className="mt-2 text-sm text-blue-800 font-medium p-2.5 bg-blue-50 rounded-lg border border-blue-100 animate-pop flex items-start gap-2 shadow-sm">
                            <span className="shrink-0 mt-0.5 text-blue-500"><CheckCircle2 size={14} /></span>
                            <span>{item.en}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const ExerciseBlock = ({ data }) => {
    const bgColors = {
        blue: "bg-blue-50 border-blue-100 text-blue-800",
        emerald: "bg-emerald-50 border-emerald-100 text-emerald-800",
        orange: "bg-orange-50 border-orange-100 text-orange-800",
        purple: "bg-purple-50 border-purple-100 text-purple-800",
        rose: "bg-rose-50 border-rose-100 text-rose-800",
        amber: "bg-amber-50 border-amber-100 text-amber-800"
    };
    const headerBg = bgColors[data.color] || "bg-slate-50 border-slate-100 text-slate-800";

    return (
        <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                {data.icon}
                <h3 className="text-xl font-bold text-slate-800">{data.title}</h3>
            </div>
            
            <div className={`rounded-xl p-4 mb-6 border shadow-sm ${headerBg}`}>
                <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Ví dụ mẫu</div>
                <div className="font-medium mb-1">{data.example.vn}</div>
                <div className="font-bold border-t border-black/10 pt-2 mt-2 opacity-90 flex gap-2 items-start">
                    <ArrowRight size={18} className="shrink-0 mt-0.5" /> 
                    <span>{data.example.en}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {data.items.map((item, idx) => (
                    <TranslationExerciseItem key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};

const LessonMenhDeQuanHe = () => {
    const [activeToken, setActiveToken] = useState(null);

    // Dữ liệu cho Cấu trúc 1 (minh hoạ bằng StructureRow)
    const struct1 = {
        tokens: [
            { id: 't1', code: 'Danh từ', label: 'Noun', type: 'Danh từ gốc', desc: 'Người, vật, sự việc cần được bổ nghĩa', isHighlight: false },
            { id: 't2', code: 'who / which / that', label: 'Relative Pronoun', type: 'Đại từ quan hệ', desc: 'Đại diện cho danh từ đứng ngay trước nó', isHighlight: true },
            { id: 't3', code: 'Verb', label: 'Động từ', type: 'Hành động', desc: 'Động từ được chia theo danh từ gốc', isHighlight: false }
        ],
        examples: [
            { id: 'e1', isCorrect: true, html: "I have a <span class='font-bold text-blue-600'>friend who always supports</span> me.", vn: "Tôi có một người bạn, người mà luôn ủng hộ tôi.", exp: "" },
            { id: 'e2', isCorrect: true, html: "Governments should invest in <span class='font-bold text-blue-600'>public transport that reduces</span> traffic congestion.", vn: "Chính phủ nên đầu tư vào phương tiện công cộng cái mà giúp giảm kẹt xe.", exp: "" }
        ]
    };

    return (
        <div className="space-y-8 animate-pop pb-20">
            {/* HERO SECTION */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden border border-slate-700">
                <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4">
                    <Layers size={120} />
                </div>
                <div className="relative z-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                        Mệnh Đề Quan Hệ <br className="hidden sm:block" /><span className="text-slate-300">(Relative Clauses)</span>
                    </h1>
                    <p className="text-slate-200 text-lg max-w-2xl">
                        Bí quyết "nâng trình" câu đơn thành câu phức chuẩn học thuật.
                    </p>
                </div>
            </div>

            {/* 1. ĐỊNH NGHĨA */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><IconInfo size={18} /></div>
                    1. Mệnh đề quan hệ dùng để làm gì?
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {["Nối ý", "Tránh lặp từ", "Tạo Complex Sentences", "Tự nhiên & Học thuật hơn"].map((item, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center font-medium text-slate-700 shadow-sm flex items-center justify-center">
                            {item}
                        </div>
                    ))}
                </div>
                <WrongRightPair
                    wrong="I know a girl. She speaks English fluently."
                    right="I know a girl <span class='highlight-text'>who</span> speaks English fluently."
                    note="Gộp 2 câu đơn thành 1 câu phức mượt mà hơn."
                />
            </section>

            {/* 2. CÁC TỪ QUAN TRỌNG NHẤT */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center"><Zap size={18} /></div>
                    2. Những từ quan hệ QUAN TRỌNG NHẤT (IELTS)
                </h2>
                <div className="overflow-x-auto hide-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs sm:text-sm uppercase tracking-wider">
                                <th className="p-2.5 sm:p-3 rounded-tl-xl font-bold">Từ</th>
                                <th className="hidden sm:table-cell p-3 font-bold">Phiên âm</th>
                                <th className="p-2.5 sm:p-3 font-bold">Dùng cho</th>
                                <th className="p-2.5 sm:p-3 rounded-tr-xl font-bold">Ví dụ (Bấm để dịch)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[
                                { w: "who", p: "/huː/", u: "Người", e: "a person who inspired me", vn: "một người đã truyền cảm hứng cho tôi" },
                                { w: "which", p: "/wɪtʃ/", u: "Vật / Sự việc", e: "a book which changed my life", vn: "một cuốn sách đã thay đổi cuộc đời tôi" },
                                { w: "that", p: "/ðæt/", u: "Người / Vật", e: "something that makes me happy", vn: "điều gì đó làm tôi hạnh phúc" },
                                { w: "where", p: "/weə(r)/", u: "Nơi chốn", e: "a place where I can relax", vn: "một nơi mà tôi có thể thư giãn" },
                                { w: "when", p: "/wen/", u: "Thời gian", e: "a time when I felt stressed", vn: "một khoảng thời gian khi tôi cảm thấy áp lực" },
                                { w: "why", p: "/waɪ/", u: "Lý do", e: "the reason why I quit", vn: "lý do tại sao tôi nghỉ việc" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-2.5 sm:p-3">
                                        <div className="font-bold text-blue-600 text-base sm:text-lg">{row.w}</div>
                                        <div className="sm:hidden text-slate-400 font-mono text-[11px]">{row.p}</div>
                                    </td>
                                    <td className="hidden sm:table-cell p-3 text-slate-500 font-mono text-sm">{row.p}</td>
                                    <td className="p-2.5 sm:p-3">
                                        <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs sm:text-sm font-medium inline-block">{row.u}</span>
                                    </td>
                                    <td className="p-2 sm:p-3 text-xs sm:text-base"><ClickableSentenceInline en={row.e} vn={row.vn} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 3. CẤU TRÚC THỰC TẾ */}
            <section className="space-y-5">
                <h2 className="text-2xl font-extrabold text-slate-800 ml-2">3. Những cấu trúc THỰC TẾ NHẤT</h2>

                {/* Cấu trúc 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">1</div>
                        <h3 className="text-xl font-bold text-slate-800">Cấu trúc who / which / that</h3>
                    </div>
                    <div className="mb-4"><span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">👉 Quan trọng nhất</span></div>

                    <StructureRow struct={struct1} activeToken={activeToken} setActiveToken={setActiveToken} />

                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h4 className="text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"><IconGamepad size={16} /> Speaking</h4>
                            <ClickableSentence en="I bought a laptop <b>which works</b> really well." vn="Tôi đã mua một chiếc laptop cái mà hoạt động rất tốt." />
                            <ClickableSentence en="I watched a movie <b>that made</b> me cry." vn="Tôi đã xem một bộ phim cái mà làm tôi khóc." />
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h4 className="text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"><IconCheck size={16} /> Writing</h4>
                            <ClickableSentence en="Many students prefer online courses <b>which offer</b> flexibility." vn="Nhiều học sinh thích các khóa học online cái mà cung cấp sự linh hoạt." />
                        </div>
                    </div>
                </div>

                {/* Cấu trúc 2: Where */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">2</div>
                        <h3 className="text-xl font-bold text-slate-800">Cấu trúc WHERE</h3>
                    </div>
                    <div className="bg-slate-800 text-white p-3 rounded-xl font-mono text-center mb-4">
                        Place <span className="text-emerald-400 font-bold">+ where +</span> Subject + Verb
                    </div>
                    <div className="space-y-2 mb-4">
                        <ClickableSentence en="My hometown is a peaceful place <b>where people are</b> very friendly." vn="Quê tôi là một nơi thanh bình nơi mà mọi người rất thân thiện." />
                        <ClickableSentence en="Schools should create an environment <b>where students feel</b> motivated." vn="Trường học nên tạo ra một môi trường nơi mà học sinh cảm thấy có động lực (Writing)." />
                    </div>
                    <div className="bg-emerald-50 text-emerald-800 text-sm p-3 rounded-xl border border-emerald-100">
                        <strong>Mẹo:</strong> Dùng cực nhiều để mô tả: hometown, favorite place, café, school, workplace.
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                    {/* Cấu trúc 3: When */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <div className="flex items-center gap-2 mb-3">
                            <Clock size={24} className="text-orange-500" />
                            <h3 className="text-lg font-bold text-slate-800">3. Cấu trúc WHEN</h3>
                        </div>
                        <div className="bg-slate-100 p-2 rounded-lg font-mono text-sm text-center mb-4 text-slate-700">
                            Time <span className="text-orange-500 font-bold">+ when +</span> S + V
                        </div>
                        <ClickableSentence en="There was a time <b>when I felt</b> under a lot of pressure." vn="Đã từng có thời gian khi tôi cảm thấy rất nhiều áp lực." />
                        <ClickableSentence en="We live in an era <b>when technology is</b> developing rapidly." vn="Chúng ta sống trong kỷ nguyên khi công nghệ đang phát triển nhanh (Writing)." />
                    </div>

                    {/* Cấu trúc 4: Why */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                        <div className="flex items-center gap-2 mb-3">
                            <HelpCircle size={24} className="text-purple-500" />
                            <h3 className="text-lg font-bold text-slate-800">4. Cấu trúc WHY</h3>
                        </div>
                        <div className="bg-slate-100 p-2 rounded-lg font-mono text-sm text-center mb-4 text-slate-700">
                            The reason <span className="text-purple-500 font-bold">why +</span> S + V
                        </div>
                        <ClickableSentence en="One reason <b>why people exercise</b> is to stay healthy." vn="Một lý do tại sao mọi người tập thể dục là để khỏe mạnh." />
                        <ClickableSentence en="The reason <b>why I enjoy</b> English is that it helps me." vn="Lý do tại sao tôi thích tiếng Anh là nó giúp ích cho tôi." />
                    </div>
                </div>
            </section>

            {/* NON-DEFINING & LƯỢC BỎ */}
            <div className="grid sm:grid-cols-2 gap-5">
                <section className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                    <h2 className="text-lg font-bold text-indigo-900 mb-2">Mệnh đề KHÔNG xác định</h2>
                    <p className="text-sm text-indigo-700 mb-3">Bổ sung thông tin (Có dấu phẩy). Bỏ đi câu vẫn có nghĩa.</p>
                    <div className="bg-white p-2 rounded-lg font-mono text-sm text-center mb-4 text-slate-700 border border-indigo-200 shadow-sm">
                        Danh từ<span className="text-red-500 font-bold text-lg">,</span> who/which + verb<span className="text-red-500 font-bold text-lg">,</span>
                    </div>
                    <ClickableSentence en="My father<b>, who works as a doctor,</b> is very hardworking." vn="Bố tôi, người làm bác sĩ, rất chăm chỉ." />
                    <ClickableSentence en="Social media<b>, which is popular,</b> affects communication." vn="Mạng xã hội, cái mà đang phổ biến, ảnh hưởng đến giao tiếp." />
                </section>

                <section className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                    <h2 className="text-lg font-bold text-amber-900 mb-2">Lược bỏ đại từ (Speaking)</h2>
                    <p className="text-sm text-amber-800 mb-3">Chỉ bỏ được khi đại từ đóng vai trò <strong>TÂN NGỮ</strong>.</p>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-amber-200">
                            <div className="flex gap-2 items-start">
                                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-sm">The book <span className="text-slate-400 line-through">(that)</span> I bought yesterday</span>
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-amber-200">
                            <div className="flex gap-2 items-start">
                                <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-slate-700 text-sm">The teacher <span className="font-bold underline text-red-500">who</span> teaches me</span>
                                    <div className="text-xs text-red-600 mt-1">(Không bỏ được vì who làm Chủ ngữ)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* WHICH BỔ SUNG CHO CẢ CÂU */}
            <section className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 shadow-sm border border-cyan-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-cyan-600 text-white rounded-xl flex items-center justify-center shadow-md">
                        <IconInfo size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Mệnh đề quan hệ bổ sung cho CẢ CÂU</h3>
                </div>
                <p className="text-slate-700 mb-4 text-base sm:text-lg">
                    Dùng <code className="text-cyan-700 font-bold bg-white px-2 py-1 rounded shadow-sm border border-cyan-200">, which</code> để bổ nghĩa cho <strong>toàn bộ sự việc</strong> ở mệnh đề phía trước (không chỉ một danh từ). Thường được dịch là: <em>"điều này..."</em>. Rất tự nhiên trong giao tiếp và ăn điểm trong Writing.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-cyan-100 shadow-sm">
                        <h4 className="text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"><IconGamepad size={16} /> Giao tiếp / Speaking</h4>
                        <ClickableSentence 
                            en="He passed the exam with high scores<b>, which</b> surprised everyone." 
                            vn="Anh ấy đậu điểm cao, ĐIỀU NÀY làm mọi người bất ngờ." 
                        />
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-cyan-100 shadow-sm">
                        <h4 className="text-sm font-bold text-slate-500 uppercase mb-3 flex items-center gap-2"><IconCheck size={16} /> Writing Task 2</h4>
                        <ClickableSentence 
                            en="Traffic congestion is getting worse<b>, which</b> leads to air pollution." 
                            vn="Kẹt xe ngày càng tệ, ĐIỀU NÀY dẫn đến ô nhiễm không khí." 
                        />
                    </div>
                </div>
            </section>

            {/* 4. KỸ NĂNG NỐI CÂU & LỖI SAI */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-extrabold text-slate-800 mb-6">4. Nối câu & Lỗi thường gặp</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <WrongRightPair
                        wrong="I live in a city. The city is crowded."
                        right="I live in a city <span class='text-blue-600 font-bold'>which is</span> quite crowded."
                        note="Kỹ năng biến 2 câu ngắn thành 1 câu dài."
                    />
                    <WrongRightPair
                        wrong="a person which helped me"
                        right="a person <span class='text-blue-600 font-bold'>who</span> helped me"
                        note="Lỗi cơ bản: Không dùng which cho người."
                    />
                    <WrongRightPair
                        wrong="The book that it changed my life"
                        right="The book <span class='text-blue-600 font-bold'>that changed</span> my life"
                        note="Lỗi thừa chủ ngữ 'it' sau that."
                    />
                    <WrongRightPair
                        wrong="The café where I usually study there"
                        right="The café <span class='text-blue-600 font-bold'>where I usually study</span>"
                        note="Đã dùng 'where' thì không dùng 'there' ở cuối nữa."
                    />
                </div>
            </section>

            {/* 5. MẪU CÂU ĂN ĐIỂM & TEMPLATES */}
            <section className="bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg text-white">
                <h2 className="text-2xl font-extrabold mb-6 text-blue-300">5. Mẫu câu "Ăn điểm" & Templates</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-emerald-400 border-b border-slate-600 pb-2 flex items-center gap-2"><IconGamepad size={20} /> Speaking (Templates)</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Describe a person</div>
                                <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-slate-200">I’d like to talk about <span className="text-emerald-300 font-bold">a person who has influenced</span> me a lot.</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Describe a place</div>
                                <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-slate-200">It’s <span className="text-emerald-300 font-bold">a place where I usually go</span> to relax.</div>
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Explain reasons</div>
                                <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600 text-slate-200"><span className="text-emerald-300 font-bold">One reason why I enjoy</span> learning English is better career opportunities.</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-blue-400 border-b border-slate-600 pb-2 flex items-center gap-2"><IconCheck size={20} /> Writing Task 2</h3>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex gap-2">
                                <div className="text-blue-400 mt-1"><ArrowRight size={16} /></div>
                                <span>Governments should support <span className="text-blue-300 font-bold">industries that create</span> employment opportunities.</span>
                            </li>
                            <li className="flex gap-2">
                                <div className="text-blue-400 mt-1"><ArrowRight size={16} /></div>
                                <span>We are living in <span className="text-blue-300 font-bold">a society where technology plays</span> a crucial role.</span>
                            </li>
                            <li className="flex gap-2">
                                <div className="text-blue-400 mt-1"><ArrowRight size={16} /></div>
                                <span><span className="text-blue-300 font-bold">One reason why many students feel</span> stressed is academic pressure.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. BÀI TẬP THỰC HÀNH */}
            <section className="space-y-6 pt-6 border-t border-slate-200">
                <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-slate-800 mb-2">6. Bài Tập Thực Hành Dịch Câu</h2>
                    <p className="text-slate-600">Áp dụng ngay các cấu trúc vừa học để dịch các câu sau từ tiếng Việt sang tiếng Anh. Hãy gõ đáp án vào ô trống và nhấn <strong>Enter</strong> để kiểm tra nhé.</p>
                </div>
                
                <ExerciseBlock data={exercisesData[0]} />
                <ExerciseBlock data={exercisesData[1]} />
                <ExerciseBlock data={exercisesData[2]} />
                <ExerciseBlock data={exercisesData[3]} />
                <ExerciseBlock data={exercisesData[4]} />
                <ExerciseBlock data={exercisesPart2} />
            </section>

        </div>
    );
};