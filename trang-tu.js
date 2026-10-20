// --- COMPONENT TRÌNH DIỄN CÂU VÍ DỤ CÓ HIỆU ỨNG ẨN/HIỆN TRẠNG TỪ ---
const StructureExampleAdv = ({ ex }) => {
    const [step, setStep] = useState(0); // 0: base, 1: +adv, 2: +adv & vn
    return (
        <div className="py-1.5">
            <div className="flex flex-col gap-2">
                <div 
                    className="flex items-center gap-3 flex-1 cursor-pointer group bg-white p-2 sm:p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:shadow-sm transition-all" 
                    onClick={() => setStep((step + 1) % 3)}
                    title="Bấm để tương tác"
                >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-colors font-bold ${step > 0 ? (ex.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-slate-200 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-600'}`}>
                        {step > 0 ? (ex.isCorrect ? "✓" : "✗") : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                        )}
                    </div>
                    <div className="text-base text-slate-800 transition-all duration-300" dangerouslySetInnerHTML={{ __html: step > 0 ? ex.html : ex.baseHtml }}></div>
                </div>
                {step === 2 && (
                    <div className="mt-1 ml-12 animate-pop">
                        <div className="text-sm text-slate-600 italic mb-2">🇻🇳 {ex.vn}</div>
                        {!ex.isCorrect && (
                            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 mt-2 shadow-inner">
                                <strong>Giải thích:</strong> {ex.exp}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

// --- COMPONENT CẤU TRÚC RIÊNG CHO BÀI TRẠNG TỪ ---
const StructureRowAdv = ({ struct, activeToken, setActiveToken }) => {
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
                                    ? 'border-amber-600 ring-2 ring-amber-100 bg-white shadow-md scale-105' 
                                    : token.isHighlight 
                                        ? 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100 shadow-sm' 
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
                                    <div className="font-bold text-amber-400 text-sm mb-1">{token.type}</div>
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
                    <div className="font-bold text-amber-400 text-xs mb-1">{selectedTokenObj.label} ({selectedTokenObj.code}) — {selectedTokenObj.type}</div>
                    <p className="text-xs leading-relaxed text-slate-200">{selectedTokenObj.desc}</p>
                </div>
            )}
        </div>
        <div>
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">Ví dụ (Bấm vào ➕ để thêm Trạng từ, bấm lần nữa để xem nghĩa):</div>
            <div className="space-y-1.5 sm:space-y-2">
                {struct.examples.map(ex => (
                    <StructureExampleAdv key={ex.id} ex={ex} />
                ))}
            </div>
        </div>
    </div>
    );
};

// --- COMPONENT CÂU VÍ DỤ CLICK ĐỂ XEM NGHĨA CHO BẢNG TRẠNG TỪ ---
const AdvClickableSentence = ({ en, vn }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="cursor-pointer group bg-slate-50 hover:bg-amber-50 p-2.5 rounded-lg border border-slate-100 hover:border-amber-200 transition-colors" onClick={() => setShow(!show)}>
            <div className="text-sm text-slate-700 font-medium leading-relaxed" dangerouslySetInnerHTML={{__html: en}}></div>
            {show && <div className="text-sm text-amber-700 mt-2 animate-pop italic border-t border-amber-100 pt-2">🇻🇳 {vn}</div>}
        </div>
    );
};

// --- COMPONENT TRẠNG TỪ LÀ GÌ (CÁC LOẠI TRẠNG TỪ) ---
const ADV_TYPES = [
    { id: 1, name: "Thời gian", en: "Time", icon: "🕒", desc: "Trả lời câu hỏi Khi nào? (When?)", examples: [
        {en: "I will call you <b>later tonight</b>.", vn: "Tôi sẽ gọi bạn vào tối nay."}, 
        {en: "She arrived <b>yesterday morning</b>.", vn: "Cô ấy đã đến vào sáng hôm qua."}, 
        {en: "We are studying English <b>right now</b>.", vn: "Chúng tôi đang học tiếng Anh ngay bây giờ."}, 
        {en: "The movie will start <b>very soon</b>.", vn: "Bộ phim sẽ bắt đầu rất sớm thôi."}
    ]},
    { id: 2, name: "Nơi chốn", en: "Place", icon: "📍", desc: "Trả lời câu hỏi Ở đâu? (Where?)", examples: [
        {en: "They are waiting <b>outside the shop</b>.", vn: "Họ đang đợi bên ngoài cửa hàng."}, 
        {en: "I looked for my keys <b>everywhere in the house</b>.", vn: "Tôi đã tìm chìa khóa khắp nơi trong nhà."}, 
        {en: "Please leave the package <b>right here</b>.", vn: "Vui lòng để gói hàng ngay tại đây."}, 
        {en: "He has lived <b>over there</b> for years.", vn: "Anh ấy đã sống ở đằng kia nhiều năm."}
    ]},
    { id: 3, name: "Cách thức", en: "Manner", icon: "🏃‍♂️", desc: "Trả lời câu hỏi Như thế nào? (How?)", examples: [
        {en: "She handled the situation <b>beautifully</b>.", vn: "Cô ấy xử lý tình huống một cách tuyệt vời."}, 
        {en: "Please drive <b>carefully</b> in the rain.", vn: "Vui lòng lái xe cẩn thận dưới trời mưa."}, 
        {en: "He reacted <b>quickly</b> to catch the ball.", vn: "Anh ấy phản ứng nhanh chóng để bắt bóng."}, 
        {en: "They speak English very <b>well</b>.", vn: "Họ nói tiếng Anh rất giỏi."}
    ]},
    { id: 4, name: "Tần suất", en: "Frequency", icon: "🔄", desc: "Trả lời câu hỏi Bao lâu một lần? (How often?)", examples: [
        {en: "I <b>always</b> check my emails first.", vn: "Tôi luôn luôn kiểm tra email đầu tiên."}, 
        {en: "She <b>never</b> drinks coffee at night.", vn: "Cô ấy không bao giờ uống cà phê vào buổi tối."}, 
        {en: "We <b>often</b> go out on weekends.", vn: "Chúng tôi thường đi chơi vào cuối tuần."}, 
        {en: "He is <b>usually</b> tired after work.", vn: "Anh ấy thường mệt mỏi sau giờ làm."}
    ]},
    { id: 5, name: "Mức độ", en: "Degree", icon: "🌡️", desc: "Trả lời câu hỏi Mức độ nào? (To what extent?)", examples: [
        {en: "This lesson is <b>very</b> important.", vn: "Bài học này rất quan trọng."}, 
        {en: "I was <b>extremely</b> nervous.", vn: "Tôi đã cực kỳ lo lắng."}, 
        {en: "I <b>completely</b> forgot about it.", vn: "Tôi hoàn toàn quên mất nó."}, 
        {en: "It's <b>quite</b> cold outside today.", vn: "Hôm nay ngoài trời khá lạnh."}
    ]},
    { id: 6, name: "Mục đích", en: "Purpose/Reason", icon: "🎯", desc: "Trả lời câu hỏi Tại sao? (Why?)", examples: [
        {en: "I study hard <b>to pass the exam</b>.", vn: "Tôi học hành chăm chỉ để vượt qua kỳ thi."}, 
        {en: "He woke up early <b>to catch the bus</b>.", vn: "Anh ấy dậy sớm để bắt xe buýt."}, 
        {en: "She saves money <b>to buy a new car</b>.", vn: "Cô ấy tiết kiệm tiền để mua xe mới."}, 
        {en: "We ran fast <b>to win the race</b>.", vn: "Chúng tôi chạy nhanh để giành chiến thắng."}
    ]},
];

const AdverbTypesGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {ADV_TYPES.map(t => (
            <div key={t.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-xl flex items-center justify-center border border-amber-100">{t.icon}</div>
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg">{t.name}</h3>
                        <p className="text-xs text-amber-800 font-semibold">{t.en}</p>
                    </div>
                </div>
                <p className="text-sm text-slate-500 mb-4">{t.desc}</p>
                <div className="space-y-2">
                    {t.examples.map((ex, idx) => (
                        <AdvClickableSentence key={idx} en={ex.en} vn={ex.vn} />
                    ))}
                </div>
            </div>
        ))}
    </div>
);

// --- BÀI TẬP 1 ---
const ADV_EX1_QUESTIONS = [
    { id: 1, text1: "She is a ", options: ["careful", "carefully"], text2: " driver.", correct: "careful" },
    { id: 2, text1: "He drives ", options: ["careful", "carefully"], text2: ".", correct: "carefully" },
    { id: 3, text1: "The test was very ", options: ["easy", "easily"], text2: ".", correct: "easy" },
    { id: 4, text1: "They solved the problem ", options: ["easy", "easily"], text2: ".", correct: "easily" },
    { id: 5, text1: "My English is ", options: ["good", "well"], text2: ".", correct: "good" },
    { id: 6, text1: "I speak English ", options: ["good", "well"], text2: ".", correct: "well" },
    { id: 7, text1: "He looks ", options: ["happy", "happily"], text2: ".", correct: "happy" },
    { id: 8, text1: "She smiled ", options: ["happy", "happily"], text2: ".", correct: "happily" },
];

const ExerciseChooseForm = () => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleSelect = (qId, option) => {
        if (showResults) return;
        setAnswers({ ...answers, [qId]: option });
    };

    return (
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Bài 1: Chọn Tính từ hoặc Trạng từ phù hợp</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {ADV_EX1_QUESTIONS.map((q) => {
                    const selected = answers[q.id];
                    const isCorrect = selected === q.correct;

                    return (
                        <div key={q.id} className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl flex flex-wrap items-center gap-2">
                            <span className="text-slate-400 font-bold w-6">{q.id}.</span>
                            <span className="text-slate-700">{q.text1}</span>
                            <div className="flex gap-2">
                                {q.options.map(opt => (
                                    <button 
                                        key={opt}
                                        onClick={() => handleSelect(q.id, opt)}
                                        className={`px-3 py-1 rounded-lg text-sm font-bold border transition-all ${
                                            selected === opt 
                                                ? (showResults ? (isCorrect ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700') : 'bg-amber-700 border-amber-700 text-white')
                                                : 'bg-white border-slate-300 text-slate-600 hover:border-amber-300'
                                        } ${showResults && q.correct === opt && selected !== opt ? 'ring-2 ring-green-400 bg-green-50' : ''}`}
                                        disabled={showResults}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                            <span className="text-slate-700">{q.text2}</span>
                            {showResults && selected && (
                                <span className={`ml-auto font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                                    {isCorrect ? '✓' : '✗'}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="mt-5 flex gap-3">
                {!showResults ? (
                    <button 
                        onClick={() => setShowResults(true)} 
                        disabled={Object.keys(answers).length < ADV_EX1_QUESTIONS.length}
                        className="px-5 py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-900 disabled:bg-slate-300 transition-colors"
                    >
                        Kiểm tra
                    </button>
                ) : (
                    <button 
                        onClick={() => { setAnswers({}); setShowResults(false); }} 
                        className="px-5 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 border border-slate-200"
                    >
                        Làm lại
                    </button>
                )}
            </div>
        </div>
    );
};

// --- BÀI TẬP 2 ---
const ADV_EX2_QUESTIONS = [
    { 
        id: 1, 
        vn: "Anh ấy là một người <span class='text-amber-500 font-bold'>chăm chỉ</span>, vì vậy anh ấy làm việc rất <span class='text-amber-500 font-bold'>chăm chỉ</span> mỗi ngày.", 
        en: ["He is a hard-working person, so he works very hard every day.", "He is a hard working person, so he works very hard every day.", "He is a hardworking person, so he works very hard every day.", "He is a hard-working person so he works very hard every day.", "He is a hard-working person, so he works hard every day.", "He is a hard working person, so he works hard every day.", "He is a hardworking person, so he works hard every day.", "He is a hard-working person so he works hard every day."] 
    },
    { 
        id: 2, 
        vn: "Cô ấy là một người <span class='text-amber-500 font-bold'>cẩn thận</span>, vậy nên cô ấy luôn lái xe <span class='text-amber-500 font-bold'>cẩn thận</span>.", 
        en: ["She is a careful person, so she always drives carefully.", "She is a careful person so she always drives carefully.", "She is a careful person, therefore she always drives carefully."] 
    },
    { 
        id: 3, 
        vn: "Cô ấy là một cô gái <span class='text-amber-500 font-bold'>nhẹ nhàng</span>, nên cô ấy luôn nói chuyện một cách <span class='text-amber-500 font-bold'>nhẹ nhàng</span>.", 
        en: ["She is a gentle girl, so she always speaks gently.", "She is a gentle girl so she always speaks gently."] 
    },
    { 
        id: 4, 
        vn: "Tôi là một người <span class='text-amber-500 font-bold'>kiên nhẫn</span>, nên tôi luôn đối xử với học sinh một cách <span class='text-amber-500 font-bold'>kiên nhẫn</span>.", 
        en: ["I am a patient person, so I always treat students patiently.", "I am a patient person so I always treat students patiently.", "I am a patient person, therefore I always treat students patiently.", "I am a patient person, so I always treat my students patiently.", "I am a patient person so I always treat my students patiently.", "I am a patient person, therefore I always treat my students patiently."] 
    },
    { 
        id: 5, 
        vn: "Em trai tôi học rất <span class='text-amber-500 font-bold'>giỏi</span> vì nó là một học sinh <span class='text-amber-500 font-bold'>giỏi</span>.", 
        en: ["My brother studies very well because he is a good student.", "My brother learns very well because he is a good student.", "My younger brother studies very well because he is a good student.", "My brother studies very well, because he is a good student.", "My brother learns very well, because he is a good student.", "My younger brother studies very well, because he is a good student."] 
    }
];

const ExerciseTranslateAdv = () => {
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState({}); // 'correct', 'error', null

    const checkSingleAnswer = (id) => {
        const q = ADV_EX2_QUESTIONS.find(q => q.id === id);
        const userAns = answers[id] || "";
        
        const clean = str => str.toLowerCase().replace(/[.,?]/g, '').replace(/\s+/g, ' ').trim();
        const cleanedUser = clean(userAns);
        const isCorrect = q.en.some(ans => clean(ans) === cleanedUser);

        if (isCorrect) {
            setResults(prev => ({ ...prev, [id]: 'correct' }));
        } else {
            setResults(prev => ({ ...prev, [id]: 'error' }));
            setTimeout(() => {
                setResults(prev => ({ ...prev, [id]: null }));
            }, 500);
        }
    };

    return (
        <div className="bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-md">
            <h3 className="text-lg font-bold text-white mb-2">Bài 2: Thử tài dịch thuật (Tính từ & Trạng từ)</h3>
            <p className="text-slate-400 text-sm mb-4">Viết câu dịch và nhấn <span className="text-amber-500 font-bold underline">Enter</span> để kiểm tra từng câu.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {ADV_EX2_QUESTIONS.map((q) => {
                    const userAns = answers[q.id] || "";
                    const state = results[q.id];

                    return (
                        <div key={q.id} className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                            <p className="text-slate-200 font-medium mb-3">
                                <span className="text-amber-500 font-bold mr-2">{q.id}.</span>
                                <span dangerouslySetInnerHTML={{__html: q.vn}}></span>
                            </p>
                            <div className="relative">
                                <textarea 
                                    id={`translate-q-${q.id}`}
                                    rows="2"
                                    value={state === 'correct' ? q.en[0] : userAns}
                                    onChange={(e) => {
                                        if(state !== 'correct') setAnswers({...answers, [q.id]: e.target.value});
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            checkSingleAnswer(q.id);
                                        }
                                    }}
                                    placeholder=""
                                    onInput={(e) => {
                                        e.target.style.height = 'auto';
                                        e.target.style.height = (e.target.scrollHeight + 4) + 'px';
                                    }}
                                    className={`w-full py-3 px-4 rounded-xl border-2 outline-none text-sm sm:text-base transition-all resize-none overflow-hidden ${
                                        state === 'correct'
                                            ? 'bg-green-900/30 border-green-500 text-green-100 shadow-[0_0_15px_rgba(34,197,94,0.2)]'
                                            : state === 'error'
                                                ? 'bg-red-900/30 border-red-500 text-red-100 animate-shake'
                                                : 'bg-slate-700 border-slate-600 text-slate-100 focus:border-amber-600'
                                    }`}
                                    readOnly={state === 'correct'}
                                ></textarea>
                                {state === 'correct' && (
                                    <div className="absolute right-3 top-3 text-green-400 font-bold animate-pop">
                                        ✓ Chính xác
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-5">
                <button 
                    onClick={() => { setAnswers({}); setResults({}); }} 
                    className="px-5 py-2 bg-slate-700 text-white rounded-xl text-sm font-bold hover:bg-slate-600 transition-colors"
                >
                    Làm lại toàn bộ
                </button>
            </div>
        </div>
    );
};

// --- BÀI TẬP 3: MINIGAMES ---
const ADV_SCRAMBLE_SENTENCES = [
    { vn: "Cô ấy hát rất hay.", words: ["She", "sings", "very", "beautifully."], correct: "She sings very beautifully." },
    { vn: "Chúng tôi đang học tiếng Anh ngay bây giờ.", words: ["We", "are", "studying", "English", "now."], correct: "We are studying English now." },
    { vn: "Anh ấy chạy nhanh để giành chiến thắng.", words: ["He", "runs", "fast", "to", "win", "the", "race."], correct: "He runs fast to win the race." }
];

const MinigameWordScramble = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selectedWords, setSelectedWords] = useState([]);
    const [availableWords, setAvailableWords] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (ADV_SCRAMBLE_SENTENCES[currentIdx]) {
            const shuffled = [...ADV_SCRAMBLE_SENTENCES[currentIdx].words].sort(() => Math.random() - 0.5);
            setAvailableWords(shuffled);
            setSelectedWords([]);
            setStatus(null);
        }
    }, [currentIdx]);

    if (currentIdx >= ADV_SCRAMBLE_SENTENCES.length) {
        return (
            <div className="bg-amber-50 p-6 rounded-2xl text-center border border-amber-200 shadow-sm mb-6">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">Chúc mừng!</h3>
                <p className="text-amber-700">Bạn đã hoàn thành trò chơi Xếp chữ.</p>
                <button onClick={() => setCurrentIdx(0)} className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700">Chơi lại</button>
            </div>
        );
    }

    const s = ADV_SCRAMBLE_SENTENCES[currentIdx];

    const handleSelect = (idx) => {
        const word = availableWords[idx];
        setSelectedWords([...selectedWords, { word, originalIdx: idx }]);
        setAvailableWords(availableWords.filter((_, i) => i !== idx));
    };

    const handleDeselect = (idx) => {
        const item = selectedWords[idx];
        const newSelected = [...selectedWords];
        newSelected.splice(idx, 1);
        setSelectedWords(newSelected);
        
        const newAvailable = [...availableWords];
        newAvailable.splice(item.originalIdx, 0, item.word);
        setAvailableWords(newAvailable);
    };

    const checkAnswer = () => {
        const answer = selectedWords.map(w => w.word).join(" ");
        if (answer === s.correct) {
            setStatus('success');
            setTimeout(() => setCurrentIdx(currentIdx + 1), 1500);
        } else {
            setStatus('error');
            setTimeout(() => setStatus(null), 1000);
        }
    };

    return (
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800">Minigame 1: Xếp chữ thành câu</h3>
                <span className="text-sm font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg">Câu {currentIdx + 1}/{ADV_SCRAMBLE_SENTENCES.length}</span>
            </div>
            <div className="mb-6 text-center">
                <p className="text-slate-600 mb-2">Sắp xếp các từ sau để tạo thành câu đúng:</p>
                <p className="font-bold text-slate-800 italic">"{s.vn}"</p>
            </div>
            <div className={`min-h-[60px] p-3 rounded-xl border-2 mb-4 flex flex-wrap gap-2 items-center justify-center transition-colors ${status === 'success' ? 'border-green-400 bg-green-50' : status === 'error' ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'}`}>
                {selectedWords.length === 0 && <span className="text-slate-400 text-sm">Bấm vào các từ bên dưới để ghép câu</span>}
                {selectedWords.map((item, idx) => (
                    <button key={idx} onClick={() => handleDeselect(idx)} className="px-3 py-1.5 bg-amber-600 text-white font-bold rounded-lg shadow-sm hover:bg-amber-700 animate-pop">
                        {item.word}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-6 min-h-[50px]">
                {availableWords.map((word, idx) => (
                    <button key={idx} onClick={() => handleSelect(idx)} className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-lg shadow-sm hover:border-amber-400 hover:bg-amber-50 transition-colors">
                        {word}
                    </button>
                ))}
            </div>
            <div className="text-center">
                <button onClick={checkAnswer} disabled={availableWords.length > 0 || status === 'success'} className="px-6 py-2 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 disabled:bg-slate-300 transition-colors">Kiểm tra</button>
            </div>
        </div>
    );
};

const ADV_SORT_CATEGORIES = [
    { id: 'time', name: 'Thời gian', color: 'bg-blue-50 border-blue-200 text-blue-800' },
    { id: 'place', name: 'Nơi chốn', color: 'bg-green-50 border-green-200 text-green-800' },
    { id: 'manner', name: 'Cách thức', color: 'bg-purple-50 border-purple-200 text-purple-800' }
];

const ADV_SORT_WORDS = [
    { id: 1, word: 'yesterday', cat: 'time' }, { id: 2, word: 'carefully', cat: 'manner' },
    { id: 3, word: 'outside', cat: 'place' }, { id: 4, word: 'now', cat: 'time' },
    { id: 5, word: 'fast', cat: 'manner' }, { id: 6, word: 'here', cat: 'place' }
];

const MinigameSortAdverbs = () => {
    const [availableWords, setAvailableWords] = useState([]);
    const [buckets, setBuckets] = useState({ time: [], place: [], manner: [] });
    const [selectedWord, setSelectedWord] = useState(null);
    const [isWin, setIsWin] = useState(false);

    useEffect(() => {
        setAvailableWords([...ADV_SORT_WORDS].sort(() => Math.random() - 0.5));
    }, []);

    const handleWordClick = (w) => setSelectedWord(selectedWord?.id === w.id ? null : w);

    const handleBucketClick = (catId) => {
        if (!selectedWord) return;
        if (selectedWord.cat === catId) {
            setBuckets({ ...buckets, [catId]: [...buckets[catId], selectedWord] });
            const newAvailable = availableWords.filter(w => w.id !== selectedWord.id);
            setAvailableWords(newAvailable);
            setSelectedWord(null);
            if (newAvailable.length === 0) setIsWin(true);
        } else {
            const btn = document.getElementById(`bucket-${catId}`);
            if (btn) {
                btn.classList.add('animate-shake', 'bg-red-100');
                setTimeout(() => btn.classList.remove('animate-shake', 'bg-red-100'), 500);
            }
            setSelectedWord(null);
        }
    };

    return (
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Minigame 2: Phân loại Trạng từ</h3>
            {isWin ? (
                <div className="bg-green-50 p-6 rounded-2xl text-center border border-green-200 shadow-sm">
                    <div className="text-4xl mb-3">🏆</div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Tuyệt vời!</h3>
                    <p className="text-green-700">Bạn đã phân loại chính xác.</p>
                    <button onClick={() => { setAvailableWords([...ADV_SORT_WORDS].sort(() => Math.random() - 0.5)); setBuckets({ time: [], place: [], manner: [] }); setIsWin(false); }} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700">Chơi lại</button>
                </div>
            ) : (
                <>
                    <p className="text-slate-600 mb-4 text-center text-sm">Bấm chọn một từ, sau đó bấm vào ô tương ứng để thả từ vào.</p>
                    <div className="flex flex-wrap gap-2 justify-center mb-8 min-h-[40px]">
                        {availableWords.map(w => (
                            <button key={w.id} onClick={() => handleWordClick(w)} className={`px-3 py-1.5 font-bold rounded-lg shadow-sm border-2 transition-all ${selectedWord?.id === w.id ? 'bg-amber-100 border-amber-500 text-amber-800 scale-110' : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300'}`}>
                                {w.word}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {ADV_SORT_CATEGORIES.map(cat => (
                            <div 
                                key={cat.id} 
                                id={`bucket-${cat.id}`} 
                                onClick={() => handleBucketClick(cat.id)} 
                                className={`border-2 rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 min-h-[140px] ${selectedWord ? 'border-dashed border-amber-400 bg-amber-50 hover:bg-amber-100 scale-[1.02]' : cat.color}`}
                            >
                                <h4 className="font-bold mb-3 opacity-90 text-lg tracking-wide">{cat.name}</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {buckets[cat.id].map(w => <span key={w.id} className="px-2.5 py-1 bg-white rounded-lg text-sm font-bold shadow-sm animate-pop border border-slate-100">{w.word}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// --- MÔ ĐUN CHÍNH ---
const ADV_STRUCTURES = [
    {
        tokens: [
            { id: 'adv_s1', label: 'Chủ ngữ', code: 'S', isHighlight: false, type: 'Danh từ / Đại từ', desc: 'Chủ thể của câu.' },
            { id: 'adv_v1', label: 'Động từ', code: 'V', isHighlight: false, type: 'Động từ', desc: 'Nội động từ (không cần tân ngữ theo sau).' },
            { id: 'adv_adv1', label: 'Trạng từ', code: 'ADV', isHighlight: true, type: 'Trạng từ', desc: 'Đứng SAU động từ, bổ nghĩa cho hành động đó.' }
        ],
        examples: [
            { id: 1, baseHtml: "The bird flies in the sky.", html: "The bird flies <span class='text-amber-800 font-bold'>quickly</span> in the sky.", vn: "Con chim bay một cách nhanh chóng trên bầu trời.", isCorrect: true, exp: "" },
            { id: 2, baseHtml: "The boy smiled at me.", html: "The boy smiled <span class='text-amber-800 font-bold'>happily</span> at me.", vn: "Cậu bé mỉm cười một cách hạnh phúc với tôi.", isCorrect: true, exp: "" },
            { id: 3, baseHtml: "She arrived for the meeting.", html: "She arrived <span class='text-amber-800 font-bold'>late</span> for the meeting.", vn: "Cô ấy đã đến muộn trong cuộc họp.", isCorrect: true, exp: "" },
            { id: 4, baseHtml: "The team works every day.", html: "The team works <span class='text-amber-800 font-bold'>hard</span> every day.", vn: "Nhóm làm việc chăm chỉ mỗi ngày.", isCorrect: true, exp: "" },
            { id: 5, baseHtml: "He runs to win the race.", html: "He runs <span class='text-amber-800 font-bold'>fastly</span> to win the race.", vn: "Anh ấy chạy nhanh để giành chiến thắng.", isCorrect: false, exp: "Sai vì 'fast' vừa là tính từ vừa là trạng từ, không có từ 'fastly'. Sửa thành: He runs fast to win the race." }
        ]
    },
    {
        tokens: [
            { id: 'adv_s2', label: 'Chủ ngữ', code: 'S', isHighlight: false, type: 'Danh từ / Đại từ', desc: 'Chủ thể của câu.' },
            { id: 'adv_v2', label: 'Động từ', code: 'V', isHighlight: false, type: 'Động từ', desc: 'Ngoại động từ (cần tân ngữ).' },
            { id: 'adv_o2', label: 'Tân ngữ', code: 'O', isHighlight: false, type: 'Danh từ / Đại từ', desc: 'Đối tượng chịu tác động.' },
            { id: 'adv_adv2', label: 'Trạng từ', code: 'ADV', isHighlight: true, type: 'Trạng từ', desc: 'Đứng SAU tân ngữ, bổ nghĩa cho động từ chính.' }
        ],
        examples: [
            { id: 6, baseHtml: "She reads the book before sleeping.", html: "She reads the book <span class='text-amber-800 font-bold'>carefully</span> before sleeping.", vn: "Cô ấy đọc sách cẩn thận trước khi ngủ.", isCorrect: true, exp: "" },
            { id: 7, baseHtml: "He answered the questions.", html: "He answered the questions <span class='text-amber-800 font-bold'>perfectly</span>.", vn: "Anh ấy đã trả lời các câu hỏi một cách hoàn hảo.", isCorrect: true, exp: "" },
            { id: 8, baseHtml: "We finished the task.", html: "We finished the task <span class='text-amber-800 font-bold'>successfully</span>.", vn: "Chúng tôi đã hoàn thành nhiệm vụ thành công.", isCorrect: true, exp: "" },
            { id: 9, baseHtml: "They played the match.", html: "They played the match very <span class='text-amber-800 font-bold'>well</span>.", vn: "Họ đã chơi trận đấu rất xuất sắc.", isCorrect: true, exp: "" },
            { id: 10, baseHtml: "I learned the new lesson.", html: "I learned <span class='text-amber-800 font-bold'>quickly</span> the new lesson.", vn: "Tôi đã học bài mới một cách nhanh chóng.", isCorrect: false, exp: "Sai vị trí. Trạng từ chỉ cách thức không được đứng giữa Động từ và Tân ngữ. Sửa thành: I learned the new lesson quickly." }
        ]
    },
    {
        tokens: [
            { id: 'adv_s3', label: 'Chủ ngữ', code: 'S', isHighlight: false, type: 'Danh từ / Đại từ', desc: 'Chủ thể của câu.' },
            { id: 'adv_v3', label: 'Động từ tobe', code: 'To be', isHighlight: false, type: 'Động từ', desc: 'Động từ nối (am/is/are/was/were).' },
            { id: 'adv_adv3', label: 'Trạng từ', code: 'ADV', isHighlight: true, type: 'Trạng từ chỉ mức độ', desc: 'Bổ nghĩa cho Tính từ đứng sau nó.' },
            { id: 'adv_adj3', label: 'Tính từ', code: 'ADJ', isHighlight: false, type: 'Tính từ', desc: 'Miêu tả tính chất của chủ ngữ.' }
        ],
        examples: [
            { id: 11, baseHtml: "The exam is difficult.", html: "The exam is <span class='text-amber-800 font-bold'>extremely</span> difficult.", vn: "Bài kiểm tra cực kỳ khó.", isCorrect: true, exp: "" },
            { id: 12, baseHtml: "The view here is beautiful.", html: "The view here is <span class='text-amber-800 font-bold'>very</span> beautiful.", vn: "Phong cảnh ở đây rất đẹp.", isCorrect: true, exp: "" },
            { id: 13, baseHtml: "I am tired today.", html: "I am <span class='text-amber-800 font-bold'>completely</span> tired today.", vn: "Hôm nay tôi hoàn toàn mệt mỏi.", isCorrect: true, exp: "" },
            { id: 14, baseHtml: "The movie was interesting.", html: "The movie was <span class='text-amber-800 font-bold'>quite</span> interesting.", vn: "Bộ phim khá là thú vị.", isCorrect: true, exp: "" },
            { id: 15, baseHtml: "The event was successful.", html: "The event was successful <span class='text-amber-800 font-bold'>highly</span>.", vn: "Sự kiện cực kỳ thành công.", isCorrect: false, exp: "Sai vị trí. Trạng từ chỉ mức độ phải đứng TRƯỚC tính từ mà nó bổ nghĩa. Sửa thành: The event was highly successful." }
        ]
    }
];

const LessonTrangTu = () => {
    const [activeToken, setActiveToken] = useState(null);

    return (
        <div className="animate-pop w-full">
            {/* HERO SECTION */}
            <div className="mb-8 sm:mb-12 border-l-4 border-amber-800 pl-4 sm:pl-5">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Trạng Từ (Adverbs)</h1>
                <p className="text-base sm:text-lg text-slate-500 mt-2 font-medium">Trạng từ giống như một loại "gia vị" của câu! Nó giúp Động từ, Tính từ hoặc một Trạng từ khác thêm phần mặn mà, sinh động và chi tiết hơn rất nhiều.</p>
            </div>

            {/* PHẦN 1: VỊ TRÍ CỦA TRẠNG TỪ (Đã hoán đổi lên đầu) */}
            <section className="mb-12 sm:mb-16">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">1</span>
                        Sức mạnh của Trạng từ (Adverbs)
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-2">Bấm vào biểu tượng ➕ ở các câu dưới đây để xem Trạng từ giúp câu văn trở nên <strong>sinh động và chi tiết hơn</strong> như thế nào nhé!</p>
                </div>
                {ADV_STRUCTURES.map((struct, idx) => <StructureRowAdv key={idx} struct={struct} activeToken={activeToken} setActiveToken={setActiveToken} />)}
            </section>

            {/* PHẦN 2: CÁC LOẠI TRẠNG TỪ (Đã hoán đổi xuống) */}
            <section className="mb-12 sm:mb-16">
                <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-white text-xs sm:text-sm shrink-0">2</span>
                        Các loại Trạng từ phổ biến
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-2">Bấm vào câu tiếng Anh để xem nghĩa tiếng Việt.</p>
                </div>
                <AdverbTypesGrid />
            </section>

            {/* PHẦN 3: BÀI TẬP */}
            <section className="mb-14 relative z-20">
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white text-base sm:text-lg shrink-0 shadow-md">3</span>
                        Bài tập Thực hành
                    </h2>
                    <p className="text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]">Cùng luyện tập để hiểu rõ hơn sự khác biệt giữa Tính từ và Trạng từ nhé!</p>
                </div>

                <ExerciseChooseForm />
                <ExerciseTranslateAdv />

                <div className="mt-12 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500 text-white text-base sm:text-lg shrink-0 shadow-md">🎮</span>
                        Khu vực Giải trí
                    </h2>
                    <p className="text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-0 sm:ml-[52px]">Thử thách bản thân với 2 minigame siêu vui nhộn sau đây nhé!</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <MinigameWordScramble />
                    <MinigameSortAdverbs />
                </div>

            </section>
        </div>
    );
};
