const sentencePracticeExpandContractions = (text) => String(text)
    .replace(/[‘’]/g, "'")
    .replace(/\bI'm\b/gi, "I am")
    .replace(/\bIt's\b/gi, "It is")
    .replace(/\bdoesn't\b/gi, "does not")
    .replace(/\bdon't\b/gi, "do not")
    .replace(/\byou've\b/gi, "you have")
    .replace(/\bthat's\b/gi, "that is");

const sentencePracticeNormalize = (text) => sentencePracticeExpandContractions(text)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "");

const sentencePracticeIsMatch = (userAnswer, item) => {
    const acceptedAnswers = [item.en, ...(item.alternatives || [])];
    const normalizedUser = sentencePracticeNormalize(userAnswer);
    return acceptedAnswers.some((answer) => sentencePracticeNormalize(answer) === normalizedUser);
};

const SentencePracticeShell = ({ config, items }) => {
    const [resetTick, setResetTick] = useState(0);

    const handleResetAll = () => {
        setResetTick((tick) => tick + 1);
    };

    return (
        <div className="space-y-8 animate-pop pb-20">
            <section className={`rounded-lg border ${config.heroBorder} ${config.heroBg} p-5 sm:p-7 shadow-sm overflow-hidden relative`}>
                <div className="absolute right-5 top-5 hidden sm:block opacity-10 text-slate-900">
                    <Layers size={116} />
                </div>
                <div className="relative z-10 max-w-3xl">
                    <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-black uppercase tracking-wide ${config.badgeClass}`}>
                        {config.badge}
                    </div>
                    <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">{config.title}</h1>
                    <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">{config.subtitle}</p>
                </div>
            </section>

            <SentenceTheoryPanel config={config} />

            <section className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="text-xs font-black uppercase tracking-wide text-slate-500">Bài tập dịch</div>
                            <h2 className="mt-1 text-2xl font-extrabold text-slate-950">{config.practiceTitle}</h2>
                            <p className="mt-2 text-sm sm:text-base text-slate-600">{config.practiceSubtitle}</p>
                        </div>
                        <button
                            onClick={handleResetAll}
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                        >
                            <Repeat size={16} />
                            Làm lại tất cả
                        </button>
                    </div>
                </div>

                <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <SentencePracticeItem
                            key={item.id}
                            item={item}
                            number={index + 1}
                            config={config}
                            resetTick={resetTick}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

const SentenceFormulaPattern = ({ formula, config }) => {
    if (!formula.parts) {
        return <div className="mt-3 font-mono text-sm sm:text-base text-slate-100 leading-relaxed">{formula.pattern}</div>;
    }

    return (
        <div className="mt-3 font-mono text-sm sm:text-base text-slate-100 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-2">
            {formula.parts.map((part, index) => (
                part.highlight ? (
                    <span key={index} className={`rounded-md px-2 py-1 font-black ring-1 ${config.formulaHighlight}`}>
                        {part.text}
                    </span>
                ) : (
                    <span key={index}>{part.text}</span>
                )
            ))}
        </div>
    );
};

const SentenceTheoryPanel = ({ config }) => (
    <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4">
        <div className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg ${config.iconBg} ${config.iconText} flex items-center justify-center`}>
                    <IconInfo size={21} />
                </div>
                <div>
                    <div className="text-xs font-black uppercase tracking-wide text-slate-500">Tóm tắt lý thuyết</div>
                    <h2 className="text-xl font-extrabold text-slate-950">{config.theoryTitle}</h2>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
                {config.theoryPoints.map((point) => (
                    <div key={point.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div className="font-extrabold text-slate-900">{point.title}</div>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{point.text}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-900 p-5 sm:p-6 shadow-sm text-white">
            <div className="text-xs font-black uppercase tracking-wide text-slate-300">Khung viết nhanh</div>
            <h2 className="mt-1 text-xl font-extrabold">{config.formulaTitle}</h2>
            <div className="mt-4 space-y-3">
                {config.formulas.map((formula) => (
                    <div key={formula.label} className="rounded-lg border border-white/10 bg-white/8 p-4">
                        <div className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-black ${config.formulaBadge}`}>{formula.label}</div>
                        <SentenceFormulaPattern formula={formula} config={config} />
                        <div className="mt-2 text-sm text-slate-300">{formula.note}</div>
                        {formula.example && (
                            <div className="mt-3 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-100 leading-relaxed">
                                <span className="font-black text-slate-300">Ví dụ: </span>{formula.example}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const SentencePracticeItem = ({ item, number, config, resetTick }) => {
    const [answer, setAnswer] = useState("");
    const [status, setStatus] = useState("idle");
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        setAnswer("");
        setStatus("idle");
        setShowHint(false);
    }, [resetTick]);

    const isCorrect = status === "correct";
    const isWrong = status === "wrong";

    const handleCheck = () => {
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

    const handleReset = () => {
        setAnswer("");
        setStatus("idle");
    };

    return (
        <article className={`rounded-lg border p-4 transition-all ${isCorrect ? "border-emerald-200 bg-emerald-50" : isWrong ? "border-rose-200 bg-rose-50/50" : "border-slate-200 bg-white hover:border-slate-300"}`}>
            <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                    <div className={`shrink-0 h-7 w-7 rounded-lg flex items-center justify-center text-xs font-black ${isCorrect ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                        {isCorrect ? <CheckCircle2 size={15} /> : String(number).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold text-slate-900 leading-relaxed">{item.vn}</p>
                    </div>
                </div>

                <div className="grid gap-3">
                    <textarea
                        value={isCorrect ? item.en : answer}
                        onChange={(event) => {
                            setAnswer(event.target.value);
                            if (status === "wrong" || status === "empty") setStatus("idle");
                        }}
                        disabled={isCorrect}
                        rows="2"
                        placeholder=""
                        onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = (e.target.scrollHeight + 4) + 'px';
                        }}
                        className={`w-full rounded-xl border-2 px-4 py-3 text-base leading-relaxed outline-none transition-all resize-none overflow-hidden ${isCorrect ? "border-emerald-200 bg-white/70 text-emerald-800 font-bold" : isWrong ? "border-rose-300 bg-white text-rose-800 animate-shake" : "border-slate-200 bg-slate-50 text-slate-800 focus:border-blue-500 focus:bg-white"}`}
                    ></textarea>

                    {status === "empty" && (
                        <div className="text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                            Hãy nhập câu trả lời trước khi kiểm tra.
                        </div>
                    )}

                    {isWrong && (
                        <div className="text-sm font-semibold text-rose-700 bg-white border border-rose-200 rounded-lg px-3 py-2">
                            Chưa khớp với câu mẫu. Hãy kiểm tra lại động từ, liên từ và trật tự ý.
                        </div>
                    )}

                    {showHint && (
                        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 animate-pop">
                            <div className="flex items-center gap-2 text-sm font-black text-amber-800 mb-2">
                                <HelpCircle size={16} />
                                Gợi ý từ vựng
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {item.hints.map((hint) => (
                                    <span key={hint} className="rounded-lg border border-amber-200 bg-white px-2.5 py-1 text-sm font-semibold text-amber-900">{hint}</span>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                <div className="flex flex-wrap items-center gap-2">
                    <button
                        onClick={() => setShowHint((value) => !value)}
                        className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-bold transition-colors ${showHint ? "border-amber-300 bg-amber-100 text-amber-800" : "border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-700"}`}
                    >
                        <HelpCircle size={16} />
                        {showHint ? "Ẩn gợi ý" : "Gợi ý từ vựng"}
                    </button>
                    <button
                        onClick={handleCheck}
                        disabled={isCorrect}
                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold transition-colors ${isCorrect ? "bg-emerald-600 text-white cursor-default" : `${config.buttonClass}`}`}
                    >
                        <IconCheck size={16} />
                        {isCorrect ? "Đã đúng" : "Kiểm tra"}
                    </button>
                    {(answer || isCorrect) && (
                        <button
                            onClick={handleReset}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-colors"
                        >
                            <Repeat size={16} />
                            Làm lại
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};

const CAU_GHEP_ITEMS = [
    {
        id: "cg-01",
        vn: "Nó rất ngon và có hương vị độc đáo.",
        en: "It's very tasty and it has a unique flavor.",
        hints: ["tasty: ngon", "unique flavor: hương vị độc đáo"]
    },
    {
        id: "cg-02",
        vn: "Bạn có thể tận hưởng không khí trong lành và cảm thấy gần gũi với thiên nhiên.",
        en: "You can enjoy the fresh air and feel connected to nature.",
        hints: ["enjoy: tận hưởng", "fresh air: không khí trong lành", "feel connected to nature: cảm thấy gần gũi với thiên nhiên"]
    },
    {
        id: "cg-03",
        vn: "Cô ấy lịch sự, gọn gàng và luôn tôn trọng không gian riêng tư của người khác.",
        en: "She is polite, tidy and always respects other people's personal space.",
        hints: ["polite: lịch sự", "tidy: gọn gàng", "respect personal space: tôn trọng không gian riêng tư"]
    },
    {
        id: "cg-04",
        vn: "Cô ấy không hút thuốc hay tiệc tùng, vì vậy bạn không cần lo lắng về tiếng ồn.",
        en: "She doesn't smoke or party, so you don't need to worry about noise.",
        hints: ["smoke: hút thuốc", "party: tiệc tùng", "worry about noise: lo lắng về tiếng ồn"]
    },
    {
        id: "cg-05",
        vn: "Nhân viên thân thiện và lịch sự, và họ luôn cố gắng giúp đỡ tôi khi tôi cần gì đó.",
        en: "The staff were friendly and polite, and they always tried to help me when I needed something.",
        hints: ["staff: nhân viên", "friendly and polite: thân thiện và lịch sự", "try to help: cố gắng giúp đỡ"]
    },
    {
        id: "cg-06",
        vn: "Phòng của tôi sạch sẽ và thoải mái, và bữa sáng ngon với nhiều món ăn đa dạng.",
        en: "My room was clean and comfortable, and the breakfast was tasty with a nice variety of food.",
        hints: ["clean and comfortable: sạch sẽ và thoải mái", "breakfast: bữa sáng", "a nice variety of food: nhiều món ăn đa dạng"]
    },
    {
        id: "cg-07",
        vn: "Kết nối Wi-Fi yếu vào buổi tối, và máy điều hòa không hoạt động tốt trong đêm đầu tiên.",
        en: "The Wi-Fi connection was weak in the evening, and the air conditioner did not work properly on the first night.",
        hints: ["Wi-Fi connection: kết nối Wi-Fi", "weak: yếu", "air conditioner: máy điều hòa", "work properly: hoạt động tốt"]
    },
    {
        id: "cg-08",
        vn: "Một số thiết bị trong phòng hơi cũ, và ánh sáng khá tối, điều đó khiến việc thư giãn trở nên khó khăn.",
        en: "Some equipment in the room was a bit old, and the lighting was dim, which made it hard to relax.",
        hints: ["equipment: thiết bị", "a bit old: hơi cũ", "lighting was dim: ánh sáng khá tối", "made it hard to relax: khiến việc thư giãn khó khăn"]
    },
    {
        id: "cg-09",
        vn: "Mình có thể mang nó đến nhà bạn sau giờ học, hoặc nếu bạn thích, mình có thể đưa cho bạn khi chúng ta gặp nhau ở thư viện.",
        en: "I can bring it to your house after school, or if you prefer, I can give it to you when we meet at the library.",
        hints: ["bring it to your house: mang nó đến nhà bạn", "if you prefer: nếu bạn thích", "meet at the library: gặp ở thư viện"]
    },
    {
        id: "cg-10",
        vn: "Nhân viên có thể nhanh chóng gọi điện hoặc gửi tin nhắn cho đồng nghiệp hay khách hàng.",
        en: "Employees can quickly call or send messages to their colleagues or clients.",
        hints: ["employees: nhân viên", "send messages: gửi tin nhắn", "colleagues: đồng nghiệp", "clients: khách hàng"]
    },
    {
        id: "cg-11",
        vn: "Các vấn đề có thể được giải quyết nhanh hơn và công việc có thể trở nên hiệu quả hơn.",
        en: "Problems can be solved faster and work can become more efficient.",
        hints: ["problems can be solved: vấn đề có thể được giải quyết", "faster: nhanh hơn", "more efficient: hiệu quả hơn"]
    },
    {
        id: "cg-12",
        vn: "Học sinh có thể kết bạn, giao tiếp với bạn bè và tham gia các hoạt động nhóm.",
        en: "Students can make friends, communicate with their peers and do group activities.",
        hints: ["make friends: kết bạn", "communicate with peers: giao tiếp với bạn bè đồng trang lứa", "group activities: hoạt động nhóm"]
    },
    {
        id: "cg-13",
        vn: "Mọi người có thể gửi tin nhắn hoặc gọi video với bạn bè và gia đình bất cứ lúc nào.",
        en: "People can send messages, or make video calls with friends and family at any time.",
        hints: ["send messages: gửi tin nhắn", "make video calls: gọi video", "at any time: bất cứ lúc nào"]
    },
    {
        id: "cg-14",
        vn: "Mọi người có thể cảm thấy mệt mỏi, mất động lực và khó tận hưởng cuộc sống hằng ngày.",
        en: "People may feel tired, lose motivation, and find it difficult to enjoy their daily lives.",
        hints: ["feel tired: cảm thấy mệt", "lose motivation: mất động lực", "daily lives: cuộc sống hằng ngày"]
    },
    {
        id: "cg-15",
        vn: "Mọi người có khả năng mất tiền hoặc thông tin cá nhân.",
        en: "People may lose their money or personal information.",
        hints: ["may lose: có thể mất", "personal information: thông tin cá nhân"]
    },
    {
        id: "cg-16",
        vn: "Trẻ em có thể trở nên bớt năng động đi và kém khỏe mạnh hơn.",
        en: "Children may become less active and less healthy.",
        hints: ["become: trở nên", "less active: bớt năng động", "less healthy: kém khỏe mạnh hơn"]
    },
    {
        id: "cg-17",
        vn: "Mọi người có thể tự quyết định giờ làm việc và chọn loại công việc mà họ yêu thích.",
        en: "People can decide their own working hours and choose the type of work they enjoy.",
        hints: ["decide: quyết định", "working hours: giờ làm việc", "the type of work: loại công việc", "they enjoy: họ yêu thích"]
    },
    {
        id: "cg-18",
        vn: "Họ có thể bỏ bê bài tập về nhà hoặc cảm thấy mệt mỏi trong lớp học.",
        en: "They may ignore homework or feel tired in class.",
        hints: ["ignore homework: bỏ bê bài tập về nhà", "feel tired in class: cảm thấy mệt trong lớp"]
    }
];

const CAU_GHEP_CONFIG = {
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
    theoryPoints: [
        {
            title: "1. Hai ý đều đứng được một mình",
            text: "Mỗi vế thường có chủ ngữ và động từ riêng. Nếu bỏ liên từ đi, từng vế vẫn là một câu có nghĩa."
        },
        {
            title: "2. Chọn liên từ theo quan hệ ý",
            text: "Dùng and để thêm ý, or để đưa lựa chọn, so để chỉ kết quả. Khi hai vế dài, đặt dấu phẩy trước liên từ."
        },
        {
            title: "3. Giữ cấu trúc song song",
            text: "Khi liệt kê hành động hoặc tính từ, hãy để các phần cùng dạng: call or send messages, clean and comfortable."
        },
        {
            title: "4. Tránh nối câu bằng dấu phẩy trống",
            text: "Không viết hai câu hoàn chỉnh chỉ ngăn bằng dấu phẩy. Hãy thêm and, but, or, so hoặc tách thành hai câu."
        }
    ],
    formulaTitle: "Công thức cần nhớ",
    formulas: [
        {
            label: "Hai mệnh đề chính",
            pattern: "S + V, and / or / so + S + V",
            parts: [
                { text: "S + V, " },
                { text: "and / or / so", highlight: true },
                { text: " + S + V" }
            ],
            note: "Dùng khi cả hai vế đều có đủ ý.",
            example: "She doesn't smoke or party, so you don't need to worry about noise."
        },
        {
            label: "Liệt kê trong một vế",
            pattern: "S + V + A, B and C",
            parts: [
                { text: "S + V + " },
                { text: "A, B and C", highlight: true }
            ],
            note: "Dùng để câu gọn hơn khi cùng một chủ ngữ.",
            example: "She is polite, tidy and always respects other people's personal space."
        },
        {
            label: "Gắn thêm kết quả",
            pattern: "S + V, and S + V, which + V...",
            parts: [
                { text: "S + V, and S + V, " },
                { text: "which + V...", highlight: true }
            ],
            note: "Dùng khi muốn thêm một mệnh đề giải thích kết quả của cả ý phía trước.",
            example: "The lighting was dim, which made it hard to relax."
        }
    ],
    practiceTitle: "Dịch Câu Ghép Việt - Anh",
    practiceSubtitle: "Bấm gợi ý khi cần từ vựng, rồi tự viết lại câu tiếng Anh hoàn chỉnh trước khi kiểm tra."
};

const LessonCauGhep = () => (
    <SentencePracticeShell config={CAU_GHEP_CONFIG} items={CAU_GHEP_ITEMS} />
);
