// Component con: Xử lý hiệu ứng lật cho từng thẻ riêng biệt
const PossessiveCard = ({ item }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div 
            className={`flip-card w-32 sm:w-36 h-16 sm:h-20 cursor-pointer ${isFlipped ? 'flipped' : ''}`} 
            onClick={() => setIsFlipped(!isFlipped)} 
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className="flip-card-inner relative w-full h-full">
                {/* Mặt trước: Tiếng Anh (Đại từ) + Tiếng Việt */}
                <div className="flip-card-front absolute w-full h-full bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center gap-1.5 hover:border-blue-400 hover:shadow-md transition-all">
                    <span className="text-base sm:text-lg font-bold text-slate-800">{item.front}</span>
                    <span className="text-sm sm:text-base font-medium text-slate-500">{item.frontVn}</span>
                </div>
                {/* Mặt sau: Tính từ sở hữu tương ứng */}
                <div className="flip-card-back absolute w-full h-full bg-blue-600 rounded-2xl shadow-md flex flex-col items-center justify-center text-center border-2 border-blue-600">
                    <span className="text-white font-bold text-lg sm:text-xl">{item.back}</span>
                    <span className="text-blue-100 font-medium text-xs sm:text-sm mt-0.5">{item.backVn}</span>
                </div>
            </div>
        </div>
    );
};

const CDT_POSSESSIVES = [
    { front: "I", frontVn: "(Tôi)", back: "my", backVn: "của tôi" },
    { front: "You", frontVn: "(Bạn)", back: "your", backVn: "của bạn" },
    { front: "He", frontVn: "(Anh ấy)", back: "his", backVn: "của anh ấy" },
    { front: "She", frontVn: "(Cô ấy)", back: "her", backVn: "của cô ấy" },
    { front: "It", frontVn: "(Nó)", back: "its", backVn: "của nó" },
    { front: "We", frontVn: "(Chúng tôi)", back: "our", backVn: "của chúng tôi" },
    { front: "They", frontVn: "(Họ)", back: "their", backVn: "của họ" }
];

// Component chính: Vùng chứa toàn bộ các thẻ
const PossessiveMemoryCards = () => (
    <div className="bg-slate-50/50 border border-blue-100 p-5 sm:p-6 rounded-2xl mb-4 shadow-inner">
        <div className="text-center mb-5">
            <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-blue-200 text-sm font-bold text-blue-800 shadow-sm">
                🧠 Tính từ sở hữu (Bấm thẻ để lật)
            </span>
        </div>
        {/* Lưới chứa các thẻ, tự động căn giữa */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {CDT_POSSESSIVES.map((item, i) => (
                <PossessiveCard key={i} item={item} />
            ))}
        </div>
    </div>
);

const CDT_QUANTIFIER_QUESTIONS = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
];

// Component bài tập tương tác nhỏ cho phần Lượng từ + Danh từ
const QuantifierMiniPractice = () => {
    const [selected, setSelected] = useState({});

    const handleSelect = (qId, opt) => {
        setSelected(prev => ({ ...prev, [qId]: opt }));
    };

    const completedCount = CDT_QUANTIFIER_QUESTIONS.filter(q => selected[q.id] === q.correct).length;

    return (
        <div className="p-4 sm:p-5 bg-amber-50/70 border border-amber-200 rounded-2xl text-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-200/70">
                <div>
                    <div className="font-bold text-slate-800 text-base flex items-center gap-2">
                        <span>🎯 Thực hành nhanh: Chọn lượng từ phù hợp</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                        Nhìn vào <strong>nghĩa gợi ý</strong> và <strong>danh từ in đậm phía sau</strong> (đếm được hay không đếm được) để bấm chọn lượng từ đúng:
                    </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-bold bg-white text-amber-800 px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
                        Đúng: {completedCount}/{CDT_QUANTIFIER_QUESTIONS.length}
                    </span>
                    {Object.keys(selected).length > 0 && (
                        <button
                            onClick={() => setSelected({})}
                            className="text-xs font-semibold bg-white hover:bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 transition-colors"
                        >
                            Làm lại
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {CDT_QUANTIFIER_QUESTIONS.map((q, idx) => {
                    const userChoice = selected[q.id];
                    const isCorrect = userChoice === q.correct;
                    const isWrong = userChoice && userChoice !== q.correct;

                    return (
                        <div key={q.id} className={`p-3 sm:p-4 rounded-xl border transition-all bg-white ${isCorrect ? 'border-emerald-300 shadow-sm' : isWrong ? 'border-red-300 shadow-sm' : 'border-slate-200'}`}>
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                                <div className="text-sm sm:text-base leading-relaxed text-slate-800">
                                    <span className="font-bold text-slate-400 mr-1.5">{idx + 1}.</span>
                                    <span>{q.before} </span>
                                    {isCorrect ? (
                                        <span className="highlight-text mx-0.5">
                                            {q.correct} {q.noun}
                                        </span>
                                    ) : (
                                        <Fragment>
                                            <span className={`inline-flex items-center px-2 py-0.5 mx-1 rounded-md border text-xs sm:text-sm font-bold ${isWrong ? 'bg-red-50 text-red-600 border-red-300 line-through' : 'bg-amber-100/80 text-amber-800 border-amber-300 border-dashed'}`}>
                                                {isWrong ? userChoice : `... (${q.hintVn})`}
                                            </span>
                                            <span className="font-bold text-slate-900 underline decoration-amber-400 decoration-2 underline-offset-4">{q.noun}</span>
                                        </Fragment>
                                    )}
                                    <span> {q.after}</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0">
                                    {q.options.map(opt => {
                                        const isThisSelected = userChoice === opt;
                                        const isThisRight = isThisSelected && opt === q.correct;
                                        const isThisWrong = isThisSelected && opt !== q.correct;

                                        let btnStyle = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold border transition-all ";
                                        if (isThisRight) {
                                            btnStyle += "bg-emerald-600 text-white border-emerald-600 shadow-sm";
                                        } else if (isThisWrong) {
                                            btnStyle += "bg-red-100 text-red-700 border-red-300 animate-shake";
                                        } else if (isCorrect) {
                                            btnStyle += "bg-slate-50 text-slate-400 border-slate-200 opacity-60";
                                        } else {
                                            btnStyle += "bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700";
                                        }

                                        return (
                                            <button
                                                key={opt}
                                                onClick={() => handleSelect(q.id, opt)}
                                                className={btnStyle}
                                            >
                                                {opt}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {userChoice && (
                                <div className={`mt-2.5 pt-2.5 border-t text-xs sm:text-sm animate-pop ${isCorrect ? 'border-emerald-100' : 'border-red-100'}`}>
                                    {isCorrect ? (
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                                            <div className="text-emerald-700">
                                                <span className="font-bold">✓ Chính xác!</span> <span className={`inline-block text-[11px] font-bold px-1.5 py-0.5 rounded border mr-1 ${q.nounColor}`}>{q.nounType}</span>
                                                {q.rightExp}
                                            </div>
                                            <div className="text-slate-500 italic shrink-0">🇻🇳 {q.vn}</div>
                                        </div>
                                    ) : (
                                        <div className="text-red-600">
                                            <span className="font-bold">✗ Chưa đúng:</span> {q.wrongExp} <span className="text-slate-600 font-medium">(Hãy thử chọn lại!)</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const CDT_STRUCTURES = [
    {
        tokens: [
            { id: 'ct_s1', label: 'Chủ ngữ', code: 'S', isHighlight: true, type: 'Danh từ / Đại từ / CỤM DANH TỪ', desc: 'Chủ thể gây ra hành động trong câu. Cụm danh từ giúp chủ ngữ chi tiết và rõ ràng hơn.' },
            { id: 'ct_v1', label: 'Động từ', code: 'V', isHighlight: false, type: 'Động từ', desc: 'Hành động của chủ ngữ.' },
            { id: 'ct_o1', label: 'Tân ngữ', code: 'O', isHighlight: true, type: 'Danh từ / Đại từ / CỤM DANH TỪ', desc: 'Đối tượng chịu tác động. Cụm danh từ giúp miêu tả kỹ tân ngữ.' }
        ],
        examples: [
            { id: 1, html: "<span class='text-red-600 font-bold'>Many young people</span> use <span class='text-red-600 font-bold'>social media</span> every day.", vn: "Nhiều người trẻ sử dụng mạng xã hội mỗi ngày.", isCorrect: true, exp: "" },
            { id: 2, html: "<span class='text-red-600 font-bold'>My older brother</span> just bought <span class='text-red-600 font-bold'>a new laptop</span>.", vn: "Anh trai tôi vừa mua một chiếc máy tính xách tay mới.", isCorrect: true, exp: "" },
            { id: 3, html: "She is reading <span class='text-red-600 font-bold'>a book interesting</span>.", vn: "Cô ấy đang đọc một cuốn sách thú vị.", isCorrect: false, exp: "Sai trật tự từ trong Cụm danh từ. Tính từ 'interesting' phải đứng TRƯỚC danh từ 'book' (và đổi 'a' thành 'an'). Sửa thành: She is reading an interesting book." },
            { id: 4, html: "<span class='text-red-600 font-bold'>A good students</span> always finishes homework on time.", vn: "Một học sinh giỏi luôn hoàn thành bài tập đúng giờ.", isCorrect: false, exp: "Sai vì mạo từ 'A' (một) không thể đi kèm với danh từ số nhiều 'students'. Sửa thành: 'A good student' (số ít) hoặc bỏ 'A': 'Good students always finish...'." }
        ]
    },
    {
        tokens: [
            { id: 'ct_s2', label: 'Chủ ngữ', code: 'S', isHighlight: true, type: 'Danh từ / Đại từ / CỤM DANH TỪ', desc: 'Chủ thể được miêu tả bằng tính từ phía sau.' },
            { id: 'ct_be2', label: 'Động từ tobe', code: 'To be', isHighlight: false, type: 'Động từ liên kết', desc: 'Liên kết chủ ngữ với tính từ (am/is/are...).' },
            { id: 'ct_adj2', label: 'Tính từ', code: 'Adj', isHighlight: false, type: 'Tính từ', desc: 'Từ miêu tả tính chất của chủ ngữ.' }
        ],
        examples: [
            { id: 5, html: "<span class='text-red-600 font-bold'>The weather this week</span> is very hot.", vn: "Thời tiết tuần này rất nóng.", isCorrect: true, exp: "" },
            { id: 6, html: "<span class='text-red-600 font-bold'>The public transport in this city</span> is quite convenient.", vn: "Phương tiện giao thông công cộng ở thành phố này khá tiện lợi.", isCorrect: true, exp: "" },
            { id: 7, html: "<span class='text-red-600 font-bold'>These information</span> is very useful for my work.", vn: "Những thông tin này rất hữu ích cho công việc của tôi.", isCorrect: false, exp: "Sai vì 'information' là danh từ không đếm được, không thể đi với từ chỉ định số nhiều 'These'. Sửa thành: This information is very useful..." },
            { id: 8, html: "<span class='text-red-600 font-bold'>Many traffic</span> in the morning is stressful.", vn: "Nhiều xe cộ vào buổi sáng thật căng thẳng.", isCorrect: false, exp: "Sai vì 'traffic' (giao thông/xe cộ) là danh từ không đếm được nên không đi với 'Many'. Phải sửa thành: Heavy traffic (giao thông đông đúc) hoặc A lot of traffic..." }
        ]
    },
    {
        tokens: [
            { id: 'ct_s3', label: 'Chủ ngữ', code: 'S', isHighlight: true, type: 'Danh từ / Đại từ / CỤM DANH TỪ', desc: 'Chủ thể thực hiện hành động.' },
            { id: 'ct_v3', label: 'Động từ', code: 'V', isHighlight: false, type: 'Động từ', desc: 'Hành động cho/tặng/gửi...' },
            { id: 'ct_io3', label: 'Tân ngữ gián tiếp', code: 'IO', isHighlight: true, type: 'Danh từ / Đại từ / CỤM DANH TỪ', desc: 'Người/vật nhận được lợi ích từ hành động.' },
            { id: 'ct_do3', label: 'Tân ngữ trực tiếp', code: 'DO', isHighlight: true, type: 'Danh từ / Đại từ / CỤM DANH TỪ', desc: 'Vật bị tác động trực tiếp.' }
        ],
        examples: [
            { id: 9, html: "<span class='text-red-600 font-bold'>Our English teacher</span> gave <span class='text-red-600 font-bold'>the whole class</span> <span class='text-red-600 font-bold'>some useful tips</span>.", vn: "Giáo viên tiếng Anh của chúng tôi đã cho cả lớp một vài mẹo hữu ích.", isCorrect: true, exp: "" },
            { id: 10, html: "<span class='text-red-600 font-bold'>My close friend</span> sent <span class='text-red-600 font-bold'>my family</span> <span class='text-red-600 font-bold'>a nice gift</span>.", vn: "Người bạn thân của tôi đã gửi cho gia đình tôi một món quà đẹp.", isCorrect: true, exp: "" },
            { id: 11, html: "My friend gave me <span class='text-red-600 font-bold'>an useful advice</span>.", vn: "Bạn tôi đã cho tôi một lời khuyên hữu ích.", isCorrect: false, exp: "Sai vì 'advice' là danh từ không đếm được nên không dùng với mạo từ 'a/an'. Sửa thành: My friend gave me some useful advice." },
            { id: 12, html: "The shop sent <span class='text-red-600 font-bold'>our</span> <span class='text-red-600 font-bold'>the wrong product</span>.", vn: "Cửa hàng đã gửi nhầm sản phẩm cho chúng tôi.", isCorrect: false, exp: "Sai vì 'our' là Tính từ sở hữu, bắt buộc phải có Danh từ theo sau (ví dụ: our family) để tạo thành Cụm danh từ, không thể đứng một mình làm Tân ngữ. Sửa thành: The shop sent our family (hoặc us) the wrong product." }
        ]
    }
];

const CDT_EX_A_QUESTIONS = [
    { id: 1, vn: "những con chó của hàng xóm tôi", ans: ["my neighbor's dogs", "my neighbours dogs", "the dogs of my neighbor", "the dogs of my neighbour"] },
    { id: 2, vn: "một tách cà phê nóng", ans: ["a cup of hot coffee", "a hot cup of coffee"] },
    { id: 3, vn: "nhiều thông tin quan trọng", ans: ["a lot of important information", "much important information", "lots of important information"] },
    { id: 4, vn: "chiếc xe hơi mới của anh ấy", ans: ["his new car"] },
    { id: 5, vn: "những học sinh của lớp học này", ans: ["the students of this class", "these students of this class", "this class's students"] }
];

const CDT_PARAGRAPH_B = "Yesterday, my best friend visited me. He brought a large pizza. We watched an interesting movie. After that, we drank some hot coffee. The weather was perfect.";

const CDT_EX_B_QUESTIONS = [
    { id: 1, label: "Cụm danh từ làm Chủ ngữ trong câu đầu tiên:", start: "my", end: "friend" },
    { id: 2, label: "Cụm danh từ làm Tân ngữ sau từ 'brought':", start: "a", end: "pizza" },
    { id: 3, label: "Cụm danh từ làm Tân ngữ sau từ 'watched':", start: "an", end: "movie" },
    { id: 4, label: "Cụm danh từ làm Tân ngữ sau từ 'drank':", start: "some", end: "coffee" },
    { id: 5, label: "Cụm danh từ làm Chủ ngữ trong câu cuối:", start: "The", end: "weather" }
];

const CumDanhTuSectionExercises = () => {
    const [ansA, setAnsA] = useState({});
    const [showResA, setShowResA] = useState(false);
    const [errA, setErrA] = useState('');

    const submitA = () => {
        const isComplete = CDT_EX_A_QUESTIONS.every(q => (ansA[q.id] || '').trim() !== '');
        if(!isComplete) { setErrA("Vui lòng dịch đủ 5 câu trước khi kiểm tra!"); return; }
        setErrA(''); setShowResA(true);
    };

    const checkMatch = (userAns, correctArr) => {
        if(!userAns) return false;
        const cleanUser = userAns.toLowerCase().trim().replace(/\s+/g, ' ');
        return correctArr.some(c => c.toLowerCase() === cleanUser);
    };
    
    const checkB = (q, uStart, uEnd) => {
        const uS = (uStart||'').trim().toLowerCase();
        const uE = (uEnd||'').trim().toLowerCase();
        return uS === q.start.toLowerCase() && uE === q.end.toLowerCase();
    };

    const [ansB, setAnsB] = useState({});
    const [showResB, setShowResB] = useState(false);
    const [errB, setErrB] = useState('');

    const submitB = () => {
        const isComplete = CDT_EX_B_QUESTIONS.every(q => (ansB[q.id]?.start||'').trim() !== '' && (ansB[q.id]?.end||'').trim() !== '');
        if(!isComplete) { setErrB(`Vui lòng điền đủ từ Bắt đầu và Kết thúc cho cả ${CDT_EX_B_QUESTIONS.length} câu!`); return; }
        setErrB(''); setShowResB(true);
    };

    return (
        <section className="mb-12">
            <div className="mb-6"><h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white text-sm">3</span>Bài tập thực hành</h2></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">A. Dịch Cụm Danh Từ</h3>
                <p className="text-sm text-slate-500 mb-4">Chuyển các cụm từ tiếng Việt sau sang tiếng Anh.</p>
                <div className="space-y-4">
                    {CDT_EX_A_QUESTIONS.map((q, i) => {
                        const uAns = ansA[q.id] || '';
                        const isCorrect = showResA && checkMatch(uAns, q.ans);
                        return (
                            <div key={q.id} className="flex flex-col md:flex-row gap-2 md:items-center">
                                <div className="md:w-1/3 text-sm font-medium text-slate-700">{i+1}. {q.vn}</div>
                                <div className="md:w-2/3 flex items-center gap-2">
                                    <input type="text" className={`flex-1 border-2 py-3 px-4 rounded-xl text-sm outline-none focus:border-blue-500 ${showResA ? (isCorrect?'bg-green-50 border-green-300':'bg-red-50 border-red-300') : 'border-slate-300'}`} placeholder="" value={uAns} onChange={e => {setAnsA({...ansA, [q.id]: e.target.value}); setShowResA(false); setErrA('');}} disabled={showResA} />
                                    {showResA && (isCorrect ? <span className="text-green-600 font-bold">✓</span> : <span className="text-red-600 font-bold">✗</span>)}
                                </div>
                                {showResA && !isCorrect && <div className="text-xs font-semibold text-blue-600 w-full md:w-auto">Đ.án: {q.ans[0]}</div>}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                    {!showResA ? <button onClick={submitA} className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">Kiểm tra Phần A</button>
                    : <button onClick={() => {setAnsA({}); setShowResA(false);}} className="w-full sm:w-auto px-6 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold">Làm lại</button>}
                    {errA && <span className="text-red-500 text-sm font-medium">{errA}</span>}
                </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">B. Xác định Cụm Danh Từ</h3>
                <p className="text-sm text-slate-500 mb-4">Đọc đoạn văn và xác định từ đầu tiên & từ cuối cùng của cụm danh từ theo yêu cầu.</p>
                
                <div className="bg-slate-100 p-4 rounded-lg text-slate-800 font-medium italic mb-6 leading-relaxed border border-slate-200 text-center sm:text-left">
                    "{CDT_PARAGRAPH_B}"
                </div>

                <div className="space-y-4">
                    {CDT_EX_B_QUESTIONS.map((q, i) => {
                        const uStart = ansB[q.id]?.start || '';
                        const uEnd = ansB[q.id]?.end || '';
                        const isCorrect = showResB && checkB(q, uStart, uEnd);

                        return (
                            <div key={q.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col lg:flex-row lg:items-center gap-3">
                                <div className="lg:w-1/2 text-sm text-slate-700 font-medium">{i+1}. {q.label}</div>
                                <div className="flex items-center gap-2 lg:w-1/2">
                                    <input type="text" placeholder="" className={`w-1/2 border-2 py-3 px-4 text-sm rounded-xl outline-none ${showResB ? (isCorrect?'bg-green-50 border-green-300':'bg-red-50 border-red-300') : 'border-slate-300'}`} value={uStart} onChange={e => {setAnsB({...ansB, [q.id]:{...ansB[q.id], start: e.target.value}}); setShowResB(false); setErrB('');}} disabled={showResB} />
                                    <span className="text-slate-400">...</span>
                                    <input type="text" placeholder="" className={`w-1/2 border-2 py-3 px-4 text-sm rounded-xl outline-none ${showResB ? (isCorrect?'bg-green-50 border-green-300':'bg-red-50 border-red-300') : 'border-slate-300'}`} value={uEnd} onChange={e => {setAnsB({...ansB, [q.id]:{...ansB[q.id], end: e.target.value}}); setShowResB(false); setErrB('');}} disabled={showResB} />
                                    {showResB && (isCorrect ? <span className="text-green-600 font-bold">✓</span> : <span className="text-red-600 font-bold">✗</span>)}
                                </div>
                                {showResB && !isCorrect && <div className="text-xs font-semibold text-blue-600 w-full mt-1 lg:mt-0 lg:w-auto text-right">Đáp án: {q.start} ... {q.end}</div>}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                    {!showResB ? <button onClick={submitB} className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700">Kiểm tra Phần B</button>
                    : <button onClick={() => {setAnsB({}); setShowResB(false);}} className="w-full sm:w-auto px-6 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold">Làm lại</button>}
                    {errB && <span className="text-red-500 text-sm font-medium">{errB}</span>}
                </div>
            </div>
            </div>
        </section>
    );
};

const CDT_G1_LEVELS = [
    { target: ["The", "two", "beautiful", "black", "cats"], scrambled: ["beautiful", "cats", "The", "black", "two"] },
    { target: ["My", "neighbor's", "new", "car"], scrambled: ["new", "My", "car", "neighbor's"] },
    { target: ["A", "hot", "cup", "of", "coffee"], scrambled: ["cup", "A", "coffee", "hot", "of"] },
    { target: ["A", "lot", "of", "important", "information"], scrambled: ["important", "of", "lot", "information", "A"] },
    { target: ["The", "students", "of", "this", "class"], scrambled: ["class", "this", "The", "of", "students"] },
    { target: ["That", "tall", "new", "building"], scrambled: ["new", "That", "building", "tall"] },
    { target: ["Some", "very", "expensive", "shoes"], scrambled: ["very", "shoes", "expensive", "Some"] },
    { target: ["My", "mom's", "delicious", "cooking"], scrambled: ["cooking", "mom's", "delicious", "My"] },
    { target: ["A", "small", "cute", "dog"], scrambled: ["cute", "dog", "A", "small"] },
    { target: ["Those", "beautiful", "red", "flowers"], scrambled: ["red", "Those", "flowers", "beautiful"] }
];

const CDT_G2_DB = [
    {w:"water", ans:"much"}, {w:"students", ans:"many"}, 
    {w:"information", ans:"much"}, {w:"books", ans:"many"}, 
    {w:"time", ans:"much"}, {w:"money", ans:"much"}, 
    {w:"apples", ans:"many"}, {w:"knowledge", ans:"much"}, 
    {w:"friends", ans:"many"}, {w:"ideas", ans:"many"}
];

const CumDanhTuSectionGames = () => {
    const [g1Lv, setG1Lv] = useState(0);
    const [g1Avail, setG1Avail] = useState(CDT_G1_LEVELS[0].scrambled);
    const [g1Sel, setG1Sel] = useState([]);
    const [g1Win, setG1Win] = useState(false);
    const [g1Err, setG1Err] = useState(false); // Trạng thái lỗi rung/đỏ

    useEffect(() => {
        if(g1Sel.length === CDT_G1_LEVELS[g1Lv].target.length) {
            if(g1Sel.join(" ") === CDT_G1_LEVELS[g1Lv].target.join(" ")) {
                setG1Win(true);
                setTimeout(() => {
                    if(g1Lv + 1 < CDT_G1_LEVELS.length) {
                        setG1Lv(g1Lv+1); setG1Sel([]); setG1Avail(CDT_G1_LEVELS[g1Lv+1].scrambled); setG1Win(false);
                    }
                }, 1500);
            } else {
                // Xếp sai -> báo lỗi rung, đỏ
                setG1Err(true);
                setTimeout(() => {
                    setG1Sel([]);
                    setG1Avail(CDT_G1_LEVELS[g1Lv].scrambled);
                    setG1Err(false);
                }, 600); // Sau 0.6s tự động reset làm lại
            }
        }
    }, [g1Sel]);

    const pickWord = (w, idx) => {
        setG1Sel([...g1Sel, w]);
        const newAvail = [...g1Avail]; newAvail.splice(idx, 1);
        setG1Avail(newAvail);
    };
    const removeWord = (w, idx) => {
        setG1Avail([...g1Avail, w]);
        const newSel = [...g1Sel]; newSel.splice(idx, 1);
        setG1Sel(newSel);
    };

    const [g2Idx, setG2Idx] = useState(0);
    const [g2Score, setG2Score] = useState(0);
    const [g2Status, setG2Status] = useState('playing'); 
    const g2Word = CDT_G2_DB[g2Idx];

    const answerG2 = (choice) => {
        if(choice === g2Word.ans) setG2Score(s=>s+1);
        if(g2Idx + 1 < CDT_G2_DB.length) setG2Idx(i=>i+1);
        else setG2Status('over');
    };

    return (
        <section className="mb-12">
            <div className="mb-6"><h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white text-sm">4</span>Mini-Games Ôn Tập</h2></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-sm flex flex-col">
                    <h3 className="font-bold text-white mb-2">🧱 Xếp Cụm Danh Từ</h3>
                    <p className="text-xs text-slate-400 mb-6">Bấm vào các từ bên dưới để xếp thành cụm danh từ đúng (Level {g1Lv+1}/{CDT_G1_LEVELS.length}).</p>
                    
                    <div className="flex-1">
                        <div className={`min-h-[60px] rounded-xl p-3 flex flex-wrap gap-2 items-center mb-6 border-2 transition-all ${g1Err ? 'bg-red-50 border-red-400 animate-shake' : 'bg-slate-700 border-dashed border-slate-500'}`}>
                            {g1Sel.map((w,i) => <button key={i} onClick={()=>removeWord(w,i)} className={`${g1Err ? 'bg-red-600' : 'bg-blue-500'} text-white px-3 py-1.5 rounded font-bold animate-pop`}>{w}</button>)}
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {g1Avail.map((w,i) => <button key={i} onClick={()=>pickWord(w,i)} className="bg-white text-slate-800 px-3 py-1.5 rounded font-bold hover:bg-slate-200 transition-colors">{w}</button>)}
                        </div>
                    </div>
                    {g1Win && <div className="mt-4 text-center text-green-400 font-bold text-lg animate-pop">Chính xác!</div>}
                    {g1Lv === CDT_G1_LEVELS.length - 1 && g1Win && <div className="mt-2 text-center text-yellow-300 font-bold">Bạn đã hoàn thành trò chơi!</div>}
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col text-center">
                    <h3 className="font-bold text-slate-800 mb-2">⚖️ Cân Đo Lượng Từ</h3>
                    <p className="text-xs text-slate-500 mb-6">Chọn lượng từ phù hợp đi kèm với danh từ hiển thị.</p>
                    
                    {g2Status === 'playing' ? (
                        <div className="flex-1 flex flex-col justify-center">
                            <p className="text-sm font-bold text-slate-400 mb-2">Điểm: {g2Score}/{CDT_G2_DB.length}</p>
                            <div className="text-3xl font-black text-blue-600 mb-8 animate-pop py-4" key={g2Idx}>{g2Word.w}</div>
                            <div className="flex gap-4 px-4">
                                <button onClick={()=>answerG2('many')} className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-700">Many (Nhiều)</button>
                                <button onClick={()=>answerG2('much')} className="flex-1 bg-slate-800 text-white py-3 rounded-xl font-bold hover:bg-slate-700">Much (Nhiều)</button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col justify-center items-center animate-pop">
                            <h4 className="text-xl font-bold text-slate-800 mb-2">Hoàn thành!</h4>
                            <p className="text-4xl font-black text-blue-600 mb-6">{g2Score} / {CDT_G2_DB.length}</p>
                            <button onClick={()=>{setG2Status('playing'); setG2Idx(0); setG2Score(0);}} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Chơi lại</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const CDT_TABS = ['maotu', 'luongtu', 'chidinh', 'sohuu', 'phuctap'];
const CDT_TAB_LABELS = {
    'maotu': '1. Mạo từ',
    'luongtu': '2. Lượng từ',
    'chidinh': '3. Từ chỉ định',
    'sohuu': '4. Tính từ sở hữu',
    'phuctap': '5. Danh từ phức tạp'
};

const LessonCumDanhTu = () => {
    const [activeToken, setActiveToken] = useState(null);
    const [theoryTab, setTheoryTab] = useState('maotu');

    return (
        <div className="animate-pop">
            <div className="mb-8 sm:mb-12 border-l-4 border-teal-500 pl-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Cụm Danh Từ (Noun Phrases)</h1>
                <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium">Tìm hiểu cấu tạo và cách mở rộng nghĩa cho danh từ.</p>
            </div>
            
            <section className="mb-12 sm:mb-16">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">1</span>
                        Tại sao cần dùng Cụm Danh Từ?
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-2">Cụm danh từ có chức năng <strong className="text-slate-800">tương đương một danh từ</strong> nhưng cung cấp thông tin chi tiết hơn. Bấm vào cấu trúc để xem chức năng.</p>
                </div>
                {CDT_STRUCTURES.map((struct, idx) => <StructureRow key={idx} struct={struct} activeToken={activeToken} setActiveToken={setActiveToken} />)}
            </section>

            <section className="mb-12 sm:mb-16">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">2</span>
                        Cấu tạo Cụm Danh Từ
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-2">Một cụm danh từ đầy đủ = <strong className="text-blue-600">Từ mở rộng nghĩa</strong> + <strong className="text-red-600">Danh từ chính</strong>.</p>
                </div>
                
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Tabs Header */}
                    <div className="flex flex-nowrap overflow-x-auto bg-slate-50 border-b border-slate-200">
                        {CDT_TABS.map(tab => (
                            <button key={tab} onClick={() => setTheoryTab(tab)} className={`shrink-0 px-4 py-3 text-sm font-semibold transition-colors border-b-2 ${theoryTab === tab ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
                                {CDT_TAB_LABELS[tab]}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-4 sm:p-6 bg-white min-h-[300px]">
                        {theoryTab !== 'luongtu' && (
                            <div className="mb-4 text-center sm:text-left"><span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold animate-pulse">💡 Mẹo: Bấm vào các câu hoặc từ tiếng Anh bên dưới để xem nghĩa Tiếng Việt</span></div>
                        )}
                        
                        {theoryTab === 'maotu' && (
                            <div className="animate-pop grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-blue-700 mb-3">Mạo từ (a, an, the) + Danh từ</h3>
                                    <ul className="list-disc pl-5 text-sm sm:text-base text-slate-700 space-y-2">
                                        <li><strong className="text-slate-900">A / An:</strong> "một" (dùng khi nói chung, lần đầu nhắc tới, số ít).</li>
                                        <li><strong className="text-slate-900">The:</strong> "cái/người đó" (dùng khi đã xác định rõ, nhắc lại lần 2).</li>
                                    </ul>
                                </div>
                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-slate-800 leading-relaxed text-sm sm:text-base">
                                    <strong>Ví dụ: </strong><br/>
                                    <ClickableSentence en="Yesterday, I saw <span class='highlight-text'>a cat</span> and <span class='highlight-text'>an owl</span> in the garden." vn="Hôm qua, tôi đã thấy một con mèo và một con cú trong vườn." />
                                    <ClickableSentence en="<span class='highlight-text'>The cat</span> was sleeping under <span class='highlight-text'>a tree</span>, while <span class='highlight-text'>the owl</span> was sitting on <span class='highlight-text'>the roof</span>." vn="Con mèo đang ngủ dưới một cái cây, trong khi con cú đang đậu trên mái nhà." />
                                    <ClickableSentence en="Later, <span class='highlight-text'>the cat</span> chased <span class='highlight-text'>a mouse</span>, but <span class='highlight-text'>the mouse</span> escaped quickly." vn="Sau đó, con mèo đuổi theo một con chuột, nhưng con chuột đã trốn thoát nhanh chóng." />
                                </div>
                            </div>
                        )}
                        
                        {theoryTab === 'luongtu' && (
                            <div className="animate-pop">
                                <h3 className="text-lg font-bold text-blue-700 mb-3">Lượng từ + Danh từ</h3>
                                <div className="overflow-x-auto mb-6">
                                    <table className="w-full text-sm text-left border-collapse border border-slate-200">
                                        <thead className="bg-slate-100 text-slate-700">
                                            <tr>
                                                <th className="border p-2 w-1/4">Phân loại</th>
                                                <th className="border p-2">Nhiều</th>
                                                <th className="border p-2">Một vài / ít</th>
                                                <th className="border p-2">Tất cả / Mỗi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border p-2 font-bold text-blue-600">Đi với Đếm được</td>
                                                <td className="border p-2">many</td>
                                                <td className="border p-2">several, a few</td>
                                                <td className="border p-2">each, every</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 font-bold text-red-600">Đi với K. Đếm được</td>
                                                <td className="border p-2">much</td>
                                                <td className="border p-2">a little, <span className="text-amber-600 font-bold">less</span> <span className="text-sm text-slate-500">(ít hơn)</span></td>
                                                <td className="border p-2 bg-slate-50">-</td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 font-bold text-green-600">Đi với Cả 2 loại</td>
                                                <td className="border p-2">a lot of / lots of</td>
                                                <td className="border p-2">some</td>
                                                <td className="border p-2">all, <span className="text-amber-600 font-bold">most</span> <span className="text-sm text-slate-500">(đa số, gần như)</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <QuantifierMiniPractice />
                            </div>
                        )}

                        {theoryTab === 'chidinh' && (
                            <div className="animate-pop">
                                <h3 className="text-lg font-bold text-blue-700 mb-3">Từ chỉ định (this, that, these, those) + Danh từ</h3>
                                
                                {/* Sơ đồ trực quan 2 chiều: Số lượng x Khoảng cách */}
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-5 shadow-inner">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Ô 1: THIS (Số ít + Gần) */}
                                        <div className="bg-white rounded-xl border-2 border-blue-200 p-4 shadow-sm hover:border-blue-400 transition-all flex flex-col justify-between">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800">
                                                    1 VẬT (Số ít) • Ở GẦN
                                                </span>
                                                <span className="text-xs font-bold text-slate-400">Here (Đây)</span>
                                            </div>
                                            
                                            {/* Minh họa khoảng cách gần - 1 vật */}
                                            <div className="bg-blue-50/50 rounded-xl p-3 my-1 flex items-center justify-start gap-2 border border-blue-100 min-h-[76px]">
                                                <div className="flex flex-col items-center shrink-0">
                                                    <span className="text-2xl sm:text-3xl" title="Người nói">🧑‍🏫</span>
                                                    <span className="text-[10px] font-bold text-slate-500">Người nói</span>
                                                </div>
                                                <div className="flex flex-col items-center w-14 sm:w-16 shrink-0">
                                                    <span className="text-[10px] font-extrabold text-blue-600 mb-0.5">Gần</span>
                                                    <svg viewBox="0 0 60 16" className="w-full h-4">
                                                        <line x1="2" y1="8" x2="48" y2="8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                                                        <polygon points="46,3 58,8 46,13" fill="#2563eb" />
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-center bg-white px-3 py-1.5 rounded-xl border border-blue-200 shadow-sm">
                                                    <span className="text-2xl sm:text-3xl">🍎</span>
                                                </div>
                                            </div>

                                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-baseline justify-between">
                                                <div>
                                                    <span className="text-lg sm:text-xl font-black text-blue-600">This</span>
                                                    <span className="text-sm sm:text-base font-bold text-slate-700"> apple</span>
                                                </div>
                                                <span className="text-xs sm:text-sm text-slate-500 italic">Quả táo <strong>này</strong></span>
                                            </div>
                                        </div>

                                        {/* Ô 2: THAT (Số ít + Xa) */}
                                        <div className="bg-white rounded-xl border-2 border-amber-200 p-4 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800">
                                                    1 VẬT (Số ít) • Ở XA
                                                </span>
                                                <span className="text-xs font-bold text-slate-400">Over there (Đằng kia)</span>
                                            </div>
                                            
                                            {/* Minh họa khoảng cách xa - 1 vật */}
                                            <div className="bg-amber-50/50 rounded-xl p-3 my-1 flex items-center justify-between gap-2 border border-amber-100 min-h-[76px]">
                                                <div className="flex flex-col items-center shrink-0">
                                                    <span className="text-2xl sm:text-3xl" title="Người nói">🧑‍🏫</span>
                                                    <span className="text-[10px] font-bold text-slate-500">Người nói</span>
                                                </div>
                                                <div className="flex flex-col items-center flex-1 px-1">
                                                    <span className="text-[10px] font-extrabold text-amber-600 mb-0.5">Cách xa</span>
                                                    <svg viewBox="0 0 140 16" className="w-full h-4">
                                                        <line x1="2" y1="8" x2="126" y2="8" stroke="#d97706" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
                                                        <polygon points="124,3 138,8 124,13" fill="#d97706" />
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col items-center bg-white px-2.5 py-1 rounded-xl border border-amber-200 shadow-sm shrink-0">
                                                    <span className="text-xl sm:text-2xl opacity-90">🍎</span>
                                                </div>
                                            </div>

                                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-baseline justify-between">
                                                <div>
                                                    <span className="text-lg sm:text-xl font-black text-amber-600">That</span>
                                                    <span className="text-sm sm:text-base font-bold text-slate-700"> apple</span>
                                                </div>
                                                <span className="text-xs sm:text-sm text-slate-500 italic">Quả táo <strong>kia</strong></span>
                                            </div>
                                        </div>

                                        {/* Ô 3: THESE (Số nhiều + Gần) */}
                                        <div className="bg-white rounded-xl border-2 border-blue-200 p-4 shadow-sm hover:border-blue-400 transition-all flex flex-col justify-between">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-blue-100 text-blue-800">
                                                    NHIỀU VẬT (Số nhiều) • Ở GẦN
                                                </span>
                                                <span className="text-xs font-bold text-slate-400">Here (Đây)</span>
                                            </div>
                                            
                                            {/* Minh họa khoảng cách gần - Nhiều vật */}
                                            <div className="bg-blue-50/50 rounded-xl p-3 my-1 flex items-center justify-start gap-2 border border-blue-100 min-h-[76px]">
                                                <div className="flex flex-col items-center shrink-0">
                                                    <span className="text-2xl sm:text-3xl" title="Người nói">🧑‍🏫</span>
                                                    <span className="text-[10px] font-bold text-slate-500">Người nói</span>
                                                </div>
                                                <div className="flex flex-col items-center w-14 sm:w-16 shrink-0">
                                                    <span className="text-[10px] font-extrabold text-blue-600 mb-0.5">Gần</span>
                                                    <svg viewBox="0 0 60 16" className="w-full h-4">
                                                        <line x1="2" y1="8" x2="48" y2="8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                                                        <polygon points="46,3 58,8 46,13" fill="#2563eb" />
                                                    </svg>
                                                </div>
                                                <div className="flex items-center gap-0.5 bg-white px-2.5 py-1.5 rounded-xl border border-blue-200 shadow-sm">
                                                    <span className="text-xl sm:text-2xl">🍎</span>
                                                    <span className="text-xl sm:text-2xl">🍎</span>
                                                    <span className="text-xl sm:text-2xl">🍎</span>
                                                </div>
                                            </div>

                                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-baseline justify-between">
                                                <div>
                                                    <span className="text-lg sm:text-xl font-black text-blue-600">These</span>
                                                    <span className="text-sm sm:text-base font-bold text-slate-700"> apple<u className="text-red-500">s</u></span>
                                                </div>
                                                <span className="text-xs sm:text-sm text-slate-500 italic"><strong>Những</strong> quả táo <strong>này</strong></span>
                                            </div>
                                        </div>

                                        {/* Ô 4: THOSE (Số nhiều + Xa) */}
                                        <div className="bg-white rounded-xl border-2 border-amber-200 p-4 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800">
                                                    NHIỀU VẬT (Số nhiều) • Ở XA
                                                </span>
                                                <span className="text-xs font-bold text-slate-400">Over there (Đằng kia)</span>
                                            </div>
                                            
                                            {/* Minh họa khoảng cách xa - Nhiều vật */}
                                            <div className="bg-amber-50/50 rounded-xl p-3 my-1 flex items-center justify-between gap-2 border border-amber-100 min-h-[76px]">
                                                <div className="flex flex-col items-center shrink-0">
                                                    <span className="text-2xl sm:text-3xl" title="Người nói">🧑‍🏫</span>
                                                    <span className="text-[10px] font-bold text-slate-500">Người nói</span>
                                                </div>
                                                <div className="flex flex-col items-center flex-1 px-1">
                                                    <span className="text-[10px] font-extrabold text-amber-600 mb-0.5">Cách xa</span>
                                                    <svg viewBox="0 0 140 16" className="w-full h-4">
                                                        <line x1="2" y1="8" x2="126" y2="8" stroke="#d97706" strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
                                                        <polygon points="124,3 138,8 124,13" fill="#d97706" />
                                                    </svg>
                                                </div>
                                                <div className="flex items-center gap-0.5 bg-white px-2 py-1 rounded-xl border border-amber-200 shadow-sm shrink-0">
                                                    <span className="text-lg sm:text-xl opacity-90">🍎</span>
                                                    <span className="text-lg sm:text-xl opacity-90">🍎</span>
                                                    <span className="text-lg sm:text-xl opacity-90">🍎</span>
                                                </div>
                                            </div>

                                            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-baseline justify-between">
                                                <div>
                                                    <span className="text-lg sm:text-xl font-black text-amber-600">Those</span>
                                                    <span className="text-sm sm:text-base font-bold text-slate-700"> apple<u className="text-red-500">s</u></span>
                                                </div>
                                                <span className="text-xs sm:text-sm text-slate-500 italic"><strong>Những</strong> quả táo <strong>kia</strong></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 text-xs sm:text-sm text-slate-600 bg-white px-3.5 py-2 rounded-lg border border-slate-200 flex items-center gap-2">
                                        <span>📌</span>
                                        <span><strong>Lưu ý:</strong> Với <strong>Danh từ không đếm được</strong> (water, information, money...), ta luôn dùng như số ít: <strong className="text-blue-600">this</strong> water / <strong className="text-amber-600">that</strong> information.</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-slate-800 leading-relaxed text-sm sm:text-base">
                                    <strong>Ví dụ trong câu (Bấm vào câu để xem nghĩa): </strong>
                                    <ul className="list-disc pl-5 text-sm sm:text-base text-slate-700 space-y-2 mt-2">
                                        <ClickableItem en="<span class='highlight-text'>This book</span> is very interesting." vn="Quyển sách này (ở ngay đây) rất thú vị." />
                                        <ClickableItem en="<span class='highlight-text'>That building</span> over there is a hospital." vn="Tòa nhà đằng kia là một bệnh viện." />
                                        <ClickableItem en="I like <span class='highlight-text'>these shoes</span>, but I don't like <span class='highlight-text'>those shoes</span>." vn="Tôi thích đôi giày này, nhưng tôi không thích đôi giày đằng kia." />
                                    </ul>
                                </div>
                            </div>
                        )}
                        {theoryTab === 'sohuu' && (
                            <div className="animate-pop">
                                <h3 className="text-lg font-bold text-blue-700 mb-3">Tính từ sở hữu + Danh từ</h3>

                                {/* Gọi component bảng từ vựng */}
                                <PossessiveMemoryCards />

                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-slate-800 leading-relaxed text-sm sm:text-base mt-2">
                                    <strong>Ví dụ: </strong><br/>
                                    <ClickableSentence en="Today, <span class='highlight-text'>our class</span> had a group project." vn="Hôm nay, lớp của chúng tôi có một dự án nhóm." />
                                    <ClickableSentence en="<span class='highlight-text'>My group</span> worked on environmental protection, while <span class='highlight-text'>their group</span> talked about technology." vn="Nhóm của tôi làm về bảo vệ môi trường, trong khi nhóm của họ nói về công nghệ." />
                                    <ClickableSentence en="One boy forgot <span class='highlight-text'>his notebook</span>, so he borrowed <span class='highlight-text'>my pen</span>." vn="Một cậu bé để quên vở, nên cậu ấy mượn bút của tôi." />
                                    <ClickableSentence en="A cat even came in and played with <span class='highlight-text'>its tail</span>." vn="Một con mèo thậm chí đã bước vào và chơi đùa với cái đuôi của nó." />
                                </div>
                            </div>
                        )}
                        {theoryTab === 'phuctap' && (
                            <div className="animate-pop">
                                <h3 className="text-lg font-bold text-blue-700 mb-3">Cấu trúc Danh từ chính phức tạp</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
                                    <div className="border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50 hover:bg-white transition-colors">
                                        <h4 className="font-bold text-slate-800 mb-2">1. Danh từ + Danh từ (N1 + N2)</h4>
                                        <p className="text-slate-600 mb-3 text-xs italic">Danh từ 1 bổ nghĩa cho danh từ 2.</p>
                                        <ul className="list-disc pl-5">
                                            <ClickableItem textClass="text-blue-700" en="coffee shop" vn="quán cà phê" />
                                            <ClickableItem textClass="text-blue-700" en="school uniform" vn="đồng phục trường" />
                                        </ul>
                                    </div>
                                    <div className="border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50 hover:bg-white transition-colors">
                                        <h4 className="font-bold text-slate-800 mb-2">2. Sở hữu cách (N1's + N2)</h4>
                                        <p className="text-slate-600 mb-3 text-xs italic">Sự vật thuộc sở hữu của ai/cái gì.</p>
                                        <ul className="list-disc pl-5">
                                            <ClickableItem textClass="text-blue-700" en="my mom's cooking" vn="đồ ăn mẹ nấu" />
                                            <ClickableItem textClass="text-blue-700" en="my neighbor's dog" vn="chó của hàng xóm" />
                                        </ul>
                                    </div>
                                    <div className="border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50 hover:bg-white transition-colors">
                                        <h4 className="font-bold text-slate-800 mb-2">3. N1 + of + N2</h4>
                                        <p className="text-slate-600 mb-3 text-xs italic">Chỉ định lượng hoặc mối quan hệ.</p>
                                        <ul className="list-disc pl-5">
                                            <ClickableItem textClass="text-blue-700" en="a bottle of water" vn="1 chai nước" />
                                            <ClickableItem textClass="text-blue-700" en="the importance of education" vn="tầm quan trọng của giáo dục" />
                                        </ul>
                                    </div>
                                    <div className="border border-slate-200 p-4 rounded-xl shadow-sm bg-slate-50 hover:bg-white transition-colors">
                                        <h4 className="font-bold text-slate-800 mb-2">4. Tính từ + Danh từ (Adj + N)</h4>
                                        <p className="text-slate-600 mb-3 text-xs italic">Tính từ miêu tả đặc điểm danh từ.</p>
                                        <ul className="list-disc pl-5">
                                            <ClickableItem textClass="text-blue-700" en="busy street" vn="đường phố bận rộn" />
                                            <ClickableItem textClass="text-blue-700" en="close friend" vn="bạn thân" />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <CumDanhTuSectionExercises />
            <CumDanhTuSectionGames />
        </div>
    );
};