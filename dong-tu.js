const FormatVerb = ({ text }) => {
            const subClass = "text-rose-500 font-extrabold text-[0.7em] align-sub ml-[1px]";
            switch(text) {
                case 'Vo': return <Fragment>V<sub className={subClass}>o</sub></Fragment>;
                case 'V2/ed': return <Fragment>V<sub className={subClass}>2/ed</sub></Fragment>;
                case 'V3/ed': return <Fragment>V<sub className={subClass}>3/ed</sub></Fragment>;
                case 'Ving': return <Fragment>V<sub className={subClass}>ing</sub></Fragment>;
                case 'Vo - Vs/es': return <Fragment>V<sub className={subClass}>o</sub> - V<sub className={subClass}>s/es</sub></Fragment>;
                default: return text;
            }
        };


    const InteractiveFormula = ({ parts, color = "blue", noPopup = false }) => {
        const [activePart, setActivePart] = useState(null);

        const explanations = {
            "S": "Chủ ngữ (Subject): Người/Vật thực hiện hành động.",
            "Vo": "Động từ nguyên mẫu (không chia).",
            "Vo - Vs/es": "Động từ nguyên mẫu (không chia) hoặc thêm s/es (đi với chủ ngữ số ít).",
            "don't - doesn't": "Trợ động từ phủ định (do not / does not).",
            "don't - doesn't have to": "Không cần thiết phải làm gì đó.",
            "V2/ed": "Động từ quá khứ (V-ed hoặc Cột 2 bảng bất quy tắc).",
            "didn't": "Trợ động từ phủ định quá khứ (did not).",
            "will": "Sẽ (dùng cho mọi chủ ngữ).",
            "won't": "Sẽ không (will not).",
            "am - is - are": "Động từ tobe ở hiện tại.",
            "am not - isn't - aren't": "Phủ định của tobe hiện tại.",
            "Ving": "Động từ thêm đuôi -ing.",
            "have - has": "Trợ động từ hoàn thành.",
            "haven't - hasn't": "Trợ động từ hoàn thành (phủ định).",
            "V3/ed": "Phân từ 2 (V-ed hoặc Cột 3 bảng bất quy tắc).",
            "was - were": "Động từ tobe ở quá khứ.",
            "wasn't - weren't": "Phủ định của tobe quá khứ.",
            "Modal Verb": "Động từ khiếm khuyết (can, should, must...).",
            "adj": "Tính từ (Adjective) - Dùng để miêu tả tính chất, trạng thái.",
            "N - Noun Phr.": "Danh từ hoặc Cụm danh từ (Noun) - Chỉ người, vật, sự việc.",
            "tobe": "Động từ tobe (am/is/are/was/were... chia theo thì).",
            "...": "Phần còn lại của câu (Tân ngữ, trạng từ...)"
        };

        const colorClasses = {
            blue: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
            emerald: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
            amber: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200",
            rose: "bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-200",
            purple: "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200"
        };

        return (
            <div className={`relative w-full flex flex-col items-center justify-center ${noPopup ? '' : 'mb-2'}`}>
                <div className={`flex items-center justify-start md:justify-center gap-1.5 sm:gap-3 flex-nowrap w-full ${noPopup ? '' : 'overflow-x-auto hide-scrollbar pb-4 pt-1 px-2 sm:px-4'}`}>
                    {parts.map((part, index) => (
                        <Fragment key={index}>
                            {part === "+" ? (
                                <span className="text-slate-300 font-black text-base sm:text-2xl shrink-0">+</span>
                            ) : (
                                noPopup ? (
                                    <div className={`px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg border-2 shadow-sm shrink-0 whitespace-nowrap flex items-center justify-center tracking-wide leading-none ${colorClasses[color].replace('hover:bg', 'no-hover')}`}>
                                        <FormatVerb text={part} />
                                    </div>
                                ) : (
                                    <div className="relative flex flex-col items-center">
                                        <button 
                                            onClick={() => setActivePart(activePart === part ? null : part)}
                                            className={`px-4 py-2.5 rounded-xl font-bold text-lg border-2 shadow-sm transition-all duration-200 shrink-0 whitespace-nowrap relative z-20 ${colorClasses[color]} ${activePart === part ? 'ring-4 ring-offset-2 ring-slate-300 scale-105 z-30' : ''}`}
                                        >
                                            <FormatVerb text={part} />
                                        </button>

                                        {/* FIX POPUP: Tách hộp vô hình định vị (absolute) ra khỏi hộp hiệu ứng (animate-pop) */}
                                        {activePart === part && explanations[activePart] && (
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[100] w-[220px] pointer-events-none">
                                                <div className="bg-slate-800 text-white p-3 sm:p-4 text-sm rounded-xl shadow-xl animate-pop flex flex-col items-center relative pointer-events-auto text-center">
                                                    {/* Mũi tên */}
                                                    <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-slate-800"></div>
                                                
                                                    <div className="font-bold text-amber-400 mb-1 text-base">{activePart}</div>
                                                    <p className="leading-relaxed text-slate-200 whitespace-normal">{explanations[activePart]}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        );
    };

        const FormulaBox = ({ parts, color = "blue", align = "center" }) => {
            const borderColors = {
                blue: "border-blue-200",
                emerald: "border-emerald-200",
                amber: "border-amber-200",
                rose: "border-rose-200",
                purple: "border-purple-200"
            };
            const alignClass = align === "left" ? "justify-start" : "justify-center";

            return (
                <div className={`w-full overflow-x-auto hide-scrollbar flex ${alignClass} py-1`}>
                <div className={`bg-white px-3 py-3 sm:px-6 sm:py-5 rounded-2xl shadow-sm border ${borderColors[color]} flex items-center justify-center min-w-max`}>
                    <InteractiveFormula parts={parts} color={color} noPopup={true} />
                </div>
                </div>
            );
        };

        const TenseTimeline = ({ type, color }) => {
            const hexColors = {
                blue: "#2563eb",
                emerald: "#059669",
                amber: "#d97706",
                rose: "#e11d48",
                purple: "#7c3aed"
            };
            const c = hexColors[color] || "#64748b";

            return (
                <div className="mb-6 bg-slate-50/50 p-4 rounded-xl border border-slate-200 shadow-inner">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 text-center">Trục thời gian</p>
                <div className="w-full overflow-x-auto hide-scrollbar flex justify-center">
                    <svg viewBox="0 0 400 120" className="w-[400px] h-[120px] max-w-full">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#cbd5e1" />
                        </marker>
                        <marker id={`arrow-${color}`} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill={c} />
                        </marker>
                    </defs>

                    <line x1="30" y1="80" x2="370" y2="80" stroke="#cbd5e1" strokeWidth="2.5" markerEnd="url(#arrowhead)" />

                    <line x1="100" y1="73" x2="100" y2="87" stroke="#94a3b8" strokeWidth="2" />
                    <text x="100" y="105" textAnchor="middle" className="text-[12px] fill-slate-500 font-medium">Quá khứ</text>

                    <line x1="200" y1="70" x2="200" y2="90" stroke="#64748b" strokeWidth="2.5" />
                    <text x="200" y="108" textAnchor="middle" className="text-[13px] fill-slate-700 font-bold">Hiện tại</text>

                    <line x1="300" y1="73" x2="300" y2="87" stroke="#94a3b8" strokeWidth="2" />
                    <text x="300" y="105" textAnchor="middle" className="text-[12px] fill-slate-500 font-medium">Tương lai</text>

                    {type === 'present' && (
                        <g fill={c} stroke={c}>
                        <circle cx="120" cy="80" r="4.5" />
                        <circle cx="160" cy="80" r="4.5" />
                        <circle cx="200" cy="80" r="5.5" />
                        <circle cx="240" cy="80" r="4.5" />
                        <circle cx="280" cy="80" r="4.5" />
                        <text x="200" y="45" textAnchor="middle" className="text-[12px] font-bold" stroke="none">Lặp đi lặp lại / Sự thật</text>
                        <path d="M 100 60 Q 200 35 300 60" fill="none" strokeWidth="1.5" strokeDasharray="4 3" />
                        </g>
                    )}

                    {type === 'past' && (
                        <g fill={c} stroke={c}>
                        <circle cx="100" cy="80" r="6" />
                        <text x="100" y="45" textAnchor="middle" className="text-[12px] font-bold" stroke="none">Đã kết thúc</text>
                        <line x1="100" y1="50" x2="100" y2="70" strokeWidth="2.5" markerEnd={`url(#arrow-${color})`} />
                        </g>
                    )}

                    {type === 'future' && (
                        <g fill={c} stroke={c}>
                        <circle cx="300" cy="80" r="6" />
                        <text x="300" y="45" textAnchor="middle" className="text-[12px] font-bold" stroke="none">Sẽ xảy ra</text>
                        <line x1="300" y1="50" x2="300" y2="70" strokeWidth="2.5" markerEnd={`url(#arrow-${color})`} />
                        </g>
                    )}

                    {type === 'present-cont' && (
                        <g fill={c} stroke={c}>
                        <circle cx="200" cy="80" r="16" opacity="0.2" stroke="none" />
                        <circle cx="200" cy="80" r="10" opacity="0.4" stroke="none" />
                        <circle cx="200" cy="80" r="5" stroke="none" />
                        <text x="200" y="45" textAnchor="middle" className="text-[12px] font-bold" stroke="none">Đang diễn ra lúc nói</text>
                        <path d="M 160 80 Q 180 50 200 80 T 240 80" fill="none" strokeWidth="2.5" />
                        </g>
                    )}

                    {type === 'present-perf' && (
                        <g fill={c} stroke={c}>
                        <circle cx="100" cy="80" r="5" stroke="none" />
                        <path d="M 100 75 Q 150 30 195 75" fill="none" strokeWidth="2.5" markerEnd={`url(#arrow-${color})`} />
                        <text x="150" y="35" textAnchor="middle" className="text-[12px] font-bold" stroke="none">Kéo dài / Hậu quả đến hiện tại</text>
                        <rect x="198" y="70" width="4" height="20" rx="1" stroke="none" />
                        </g>
                    )}

                    </svg>
                </div>
                </div>
            );
        };

        const TenseBlock = ({ title, forms, usages, color = "blue", tenseType }) => {
            const [isOpen, setIsOpen] = useState(false);
            const [activeFormType, setActiveFormType] = useState('khangding');

            const theme = {
                blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", toggleBtnOn: "bg-blue-600 text-white border-blue-600 shadow-md", toggleBtnOff: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50" },
                emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", toggleBtnOn: "bg-emerald-600 text-white border-emerald-600 shadow-md", toggleBtnOff: "bg-white text-slate-500 border-slate-200 hover:bg-slate-50" }
            }[color];

            const activeForm = forms.find(f => f.type === activeFormType) || forms[0];

            return (
                <div className={`mb-4 bg-white border ${theme.border} rounded-2xl shadow-sm transition-all duration-300 ${isOpen ? 'ring-2 ring-' + color + '-400 relative z-40' : 'hover:border-slate-300 relative z-10'}`}>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full px-5 py-4 flex items-center justify-between transition-colors ${isOpen ? theme.bg + ' rounded-t-2xl' : 'bg-white rounded-2xl'}`}
                >
                    <h4 className={`text-lg font-bold ${isOpen ? theme.text : 'text-slate-800'}`}>{title}</h4>
                    {isOpen ? <ChevronUp className={theme.text} /> : <ChevronDown className="text-slate-400" />}
                </button>

                {isOpen && (
                    <div className="p-5 border-t border-slate-100 animate-slide-down rounded-b-2xl">
                    <div className={`grid grid-cols-1 ${tenseType ? 'lg:grid-cols-2 gap-6 items-start' : ''} mb-6`}>
                    <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200 h-full flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Công thức chia động từ</p>
                        <div className="flex bg-slate-200/50 p-1 rounded-xl w-fit border border-slate-200 relative z-10">
                            <button onClick={() => setActiveFormType('khangding')} className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all border ${activeFormType === 'khangding' ? theme.toggleBtnOn : theme.toggleBtnOff}`}>👍 Có nha</button>
                            <button onClick={() => setActiveFormType('phuding')} className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all border ml-1 ${activeFormType === 'phuding' ? theme.toggleBtnOn : theme.toggleBtnOff}`}>👎 Không nha</button>
                        </div>
                        </div>
                        <div className="min-h-[60px] flex items-center justify-center w-full">
                        <FormulaBox parts={activeForm.parts} color={color} align="center" />
                        </div>
                    </div>

                    {tenseType && <div className="[&>div]:mb-0"><TenseTimeline type={tenseType} color={color} /></div>}
                    </div>

                    <div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5">Cách dùng & Ví dụ (Bấm câu tiếng Anh)</p>
                        <div className={`grid grid-cols-1 ${usages.length > 1 ? 'lg:grid-cols-2' : ''} gap-5`}>
                        {usages.map((u, i) => {
                            const examples = activeFormType === 'khangding' ? u.pos : u.neg;
                            return (
                            <div key={i} className="pl-4 border-l-4 border-slate-200">
                                <p className="font-semibold mb-3">
                                <span className="inline-block bg-yellow-200/80 text-yellow-900 px-4 py-2 rounded-lg shadow-sm border border-yellow-300/50 leading-relaxed font-bold">{u.desc}</span>
                                </p>
                                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
                                {examples.map((ex, j) => (
                                    <ClickableSentence key={j} en={ex.en} vn={ex.vn} />
                                ))}
                                </div>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                    </div>
                )}
                </div>
            );
        };

        const normalizeTranslation = (text) => String(text || "")
            .replace(/[‘’]/g, "'")
            .replace(/\bI'm\b/gi, "i am")
            .replace(/\bI'll\b/gi, "i will")
            .replace(/\bI've\b/gi, "i have")
            .replace(/\bwe've\b/gi, "we have")
            .replace(/\bthey've\b/gi, "they have")
            .replace(/\bwe're\b/gi, "we are")
            .replace(/\bshe's\b/gi, "she has")
            .replace(/\bhe's\b/gi, "he has")
            .replace(/\bdon't\b/gi, "do not")
            .replace(/\bdoesn't\b/gi, "does not")
            .replace(/\bdidn't\b/gi, "did not")
            .replace(/\bwon't\b/gi, "will not")
            .replace(/\bhaven't\b/gi, "have not")
            .replace(/\bhasn't\b/gi, "has not")
            .replace(/\baren't\b/gi, "are not")
            .replace(/\bisn't\b/gi, "is not")
            .replace(/\bp\.m\.\b/gi, "pm")
            .replace(/\ba\.m\.\b/gi, "am")
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

        const VerbTranslationExercise = ({ num, title, desc, items }) => {
            const [resetKey, setResetKey] = useState(0);

            return (
                <div className="mt-6 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                        <div>
                            <div className="flex items-center gap-3 mb-1.5">
                                <span className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white bg-slate-800 shadow-sm shrink-0">{num}</span>
                                <h4 className="text-base sm:text-lg font-bold text-slate-900">{title}</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-500 sm:ml-11">{desc}</p>
                        </div>
                        <button
                            onClick={() => setResetKey(k => k + 1)}
                            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors shrink-0"
                        >
                            <Repeat size={14} />
                            Làm lại tất cả
                        </button>
                    </div>

                    <div className="space-y-4">
                        {items.map((item, idx) => (
                            <VerbTranslationCard key={`${idx}-${resetKey}`} item={item} index={idx} />
                        ))}
                    </div>
                </div>
            );
        };

        const VerbTranslationCard = ({ item, index }) => {
            const [selectedSubj, setSelectedSubj] = useState(null);
            const [selectedVerb, setSelectedVerb] = useState(null);
            const [selectedTense, setSelectedTense] = useState(null);
            const [sentence, setSentence] = useState("");
            const [checkStatus, setCheckStatus] = useState("idle"); // idle | correct | wrong | revealed

            const isSubjCorrect = selectedSubj === item.subject;
            const isVerbCorrect = selectedVerb === item.verb;
            const isTenseCorrect = selectedTense === item.tense;
            const isAnalysisComplete = isSubjCorrect && isVerbCorrect && isTenseCorrect;

            const handleCheckSentence = () => {
                if (!sentence.trim()) return;
                const userNorm = normalizeTranslation(sentence);
                const allAccepted = [item.en, ...(item.accepted || [])];
                const matched = allAccepted.some(ans => normalizeTranslation(ans) === userNorm);
                setCheckStatus(matched ? "correct" : "wrong");
            };

            const handleReveal = () => {
                setSelectedSubj(item.subject);
                setSelectedVerb(item.verb);
                setSelectedTense(item.tense);
                setSentence(item.en);
                setCheckStatus("revealed");
            };

            const handleResetOne = () => {
                setSelectedSubj(null);
                setSelectedVerb(null);
                setSelectedTense(null);
                setSentence("");
                setCheckStatus("idle");
            };

            const renderOptionBtn = (opt, selectedVal, correctVal, onSelect) => {
                const isSelected = selectedVal === opt;
                const isRight = opt === correctVal;

                let cls = "px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border transition-all ";
                if (!isSelected) {
                    cls += "bg-white text-slate-700 border-slate-200 hover:border-slate-400";
                } else if (isRight) {
                    cls += "bg-slate-800 text-white border-slate-800 font-semibold shadow-sm";
                } else {
                    cls += "bg-rose-50 text-rose-700 border-rose-300 font-semibold";
                }

                return (
                    <button
                        key={opt}
                        type="button"
                        onClick={() => onSelect(opt)}
                        className={cls}
                    >
                        {opt}
                        {isSelected && !isRight && <span className="ml-1 text-rose-500">✕</span>}
                        {isSelected && isRight && <span className="ml-1 text-emerald-400">✓</span>}
                    </button>
                );
            };

            return (
                <div className={`rounded-xl border p-4 sm:p-5 transition-colors ${checkStatus === "correct" ? "border-emerald-300 bg-emerald-50/20" : "border-slate-200 bg-slate-50/40"}`}>
                    {/* Câu tiếng Việt */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-md bg-slate-200/80 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                {index + 1}
                            </span>
                            <div>
                                <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{item.vn}</p>
                                {item.vocab && (
                                    <p className="text-xs text-slate-500 mt-1">
                                        <span className="font-semibold text-slate-600">Từ vựng:</span> {item.vocab}
                                    </p>
                                )}
                            </div>
                        </div>
                        {(selectedSubj || selectedVerb || selectedTense || sentence) && (
                            <button
                                type="button"
                                onClick={handleResetOne}
                                className="text-xs font-semibold text-slate-400 hover:text-slate-600 shrink-0"
                            >
                                Làm lại
                            </button>
                        )}
                    </div>

                    {/* Bước 1: Xác định Chủ ngữ - Động từ - Thì */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 bg-white p-3.5 rounded-xl border border-slate-200/80">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">1. Chủ ngữ (S)</span>
                                {isSubjCorrect && <span className="text-[11px] font-semibold text-emerald-600">Đúng</span>}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {item.subjectOptions.map(opt => renderOptionBtn(opt, selectedSubj, item.subject, setSelectedSubj))}
                            </div>
                        </div>

                        <div className="md:border-l md:border-slate-100 md:pl-3">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">2. Động từ (V)</span>
                                {isVerbCorrect && <span className="text-[11px] font-semibold text-emerald-600">Đúng</span>}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {item.verbOptions.map(opt => renderOptionBtn(opt, selectedVerb, item.verb, setSelectedVerb))}
                            </div>
                        </div>

                        <div className="md:border-l md:border-slate-100 md:pl-3">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">3. Thì cần chia</span>
                                {isTenseCorrect && <span className="text-[11px] font-semibold text-emerald-600">Đúng</span>}
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {item.tenseOptions.map(opt => renderOptionBtn(opt, selectedTense, item.tense, setSelectedTense))}
                            </div>
                        </div>
                    </div>

                    {/* Gợi ý công thức khi đã xác định đúng 3 yếu tố */}
                    {isAnalysisComplete && (
                        <div className="mb-3 px-3.5 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-wrap items-center gap-x-2 gap-y-1 animate-pop">
                            <span className="font-semibold text-slate-900">Khung chia động từ:</span>
                            <span className="font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-slate-200">{item.conjugatedHint}</span>
                            <span className="text-slate-500">— {item.tenseReason}</span>
                        </div>
                    )}

                    {/* Bước 2: Dịch câu sang tiếng Anh */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                            4. Dịch sang câu tiếng Anh hoàn chỉnh
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="text"
                                value={sentence}
                                onChange={(e) => {
                                    setSentence(e.target.value);
                                    if (checkStatus === "wrong") setCheckStatus("idle");
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleCheckSentence();
                                }}
                                disabled={checkStatus === "correct"}
                                placeholder="Nhập câu tiếng Anh của bạn vào đây..."
                                className={`flex-1 rounded-xl border px-3.5 py-2.5 text-sm sm:text-base outline-none transition-all ${
                                    checkStatus === "correct"
                                        ? "border-emerald-400 bg-emerald-50/40 text-emerald-900 font-semibold"
                                        : checkStatus === "wrong"
                                        ? "border-rose-300 bg-white text-slate-800"
                                        : "border-slate-200 bg-white text-slate-800 focus:border-slate-400"
                                }`}
                            />
                            <div className="flex items-center gap-2 shrink-0">
                                <button
                                    type="button"
                                    onClick={handleCheckSentence}
                                    disabled={checkStatus === "correct" || !sentence.trim()}
                                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                >
                                    {checkStatus === "correct" ? "Chính xác ✓" : "Kiểm tra"}
                                </button>
                                {checkStatus !== "correct" && (
                                    <button
                                        type="button"
                                        onClick={handleReveal}
                                        className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                                    >
                                        Xem đáp án
                                    </button>
                                )}
                            </div>
                        </div>

                        {checkStatus === "wrong" && (
                            <div className="mt-2.5 text-xs sm:text-sm text-rose-700 bg-rose-50/80 border border-rose-200 rounded-lg px-3.5 py-2.5">
                                Câu dịch chưa chính xác. Hãy kiểm tra lại cách chia động từ <strong>{item.conjugatedHint}</strong> hoặc chính tả các từ trong câu nhé.
                            </div>
                        )}

                        {(checkStatus === "correct" || checkStatus === "revealed") && (
                            <div className="mt-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-700">
                                <div className="font-bold text-slate-900 mb-0.5">
                                    Đáp án chuẩn: <span className="text-emerald-700">{item.en}</span>
                                </div>
                                <div className="text-slate-500">{item.exp}</div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };

        const MiniQuiz = ({ title, num, desc, questions, color = "blue" }) => {
            const [ans, setAns] = useState({});
            const [showRes, setShowRes] = useState(false);

            const theme = {
                blue: { bgNum: "bg-blue-600", text: "text-blue-800", border: "border-blue-200", btnOn: "bg-blue-600 text-white border-blue-600", btnOff: "bg-white text-slate-600 border-slate-200 hover:border-blue-400" },
                emerald: { bgNum: "bg-emerald-600", text: "text-emerald-800", border: "border-emerald-200", btnOn: "bg-emerald-600 text-white border-emerald-600", btnOff: "bg-white text-slate-600 border-slate-200 hover:border-emerald-400" },
                rose: { bgNum: "bg-rose-600", text: "text-rose-800", border: "border-rose-200", btnOn: "bg-rose-600 text-white border-rose-600", btnOff: "bg-white text-slate-600 border-slate-200 hover:border-rose-400" },
                amber: { bgNum: "bg-amber-500", text: "text-amber-800", border: "border-amber-200", btnOn: "bg-amber-500 text-slate-900 border-amber-500", btnOff: "bg-white text-slate-600 border-slate-200 hover:border-amber-400" },
                purple: { bgNum: "bg-purple-600", text: "text-purple-800", border: "border-purple-200", btnOn: "bg-purple-600 text-white border-purple-600", btnOff: "bg-white text-slate-600 border-slate-200 hover:border-purple-400" }
            }[color];

            const handleCheck = () => setShowRes(true);
            const handleRetry = () => { setAns({}); setShowRes(false); };

            return (
                <div className={`mt-6 bg-white p-5 sm:p-6 rounded-2xl border ${theme.border} shadow-sm relative z-10`}>
                <div className="flex items-center gap-3 mb-2">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-sm shrink-0 ${theme.bgNum}`}>{num}</span>
                    <h4 className={`text-base sm:text-lg font-bold ${theme.text}`}>{title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mb-5 ml-0 sm:ml-11">{desc}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ml-0 sm:ml-11">
                    {questions.map((q, i) => (
                    <div key={i} className="p-4 bg-slate-50/80 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between mb-3 gap-2">
                        <p className="font-medium text-slate-800 leading-relaxed" dangerouslySetInnerHTML={{__html: `<span class="text-slate-400 mr-1 text-sm">${i+1}.</span> ` + q.text}}></p>
                        {i >= 5 && <span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-rose-200 shrink-0 uppercase tracking-wider shadow-sm">B2 VSTEP</span>}
                        </div>
                        <div className="flex flex-wrap gap-2">
                        {q.options.map((opt, j) => {
                            const isSelected = ans[i] === opt;
                            const isCorrect = opt === q.correct;
                            const isWrong = isSelected && !isCorrect;

                            let btnClass = "px-4 py-2 rounded-lg text-sm font-bold border transition-all duration-200 ";
                            if (!showRes) {
                                btnClass += isSelected ? theme.btnOn + " shadow-md scale-105" : theme.btnOff;
                            } else {
                                if (isCorrect) btnClass += "bg-emerald-100 text-emerald-700 border-emerald-500 shadow-sm";
                                else if (isWrong) btnClass += "bg-rose-100 text-rose-700 border-rose-500 opacity-80";
                                else btnClass += "bg-slate-100 text-slate-400 border-slate-200 opacity-50 cursor-not-allowed";
                            }

                            return (
                            <button key={j} disabled={showRes} onClick={() => setAns({...ans, [i]: opt})} className={btnClass}>{opt}</button>
                            );
                        })}
                        {showRes && (
                            <div className="ml-auto flex items-center">
                                {ans[i] === q.correct ? <span className="text-emerald-600 font-bold flex items-center gap-1 text-sm bg-emerald-50 px-2 py-1 rounded shadow-sm"><CheckCircle2 size={18}/> Đúng</span> : <span className="text-rose-600 font-bold flex items-center gap-1 text-sm bg-rose-50 px-2 py-1 rounded shadow-sm"><XCircle size={18}/> Sai</span>}
                            </div>
                        )}
                        </div>
                        {showRes && q.exp && (
                        <div className="mt-3 text-sm text-slate-600 bg-white p-3.5 rounded-lg border border-slate-100 border-l-4 border-l-blue-400 shadow-sm animate-slide-down">
                            <strong className="text-blue-700 mb-1 inline-block">Giải thích:</strong> <br/>{q.exp}
                        </div>
                        )}
                    </div>
                    ))}
                </div>

                <div className="mt-5 flex gap-3 pt-5 border-t border-slate-100 ml-0 sm:ml-11">
                    {!showRes ? (
                    <button onClick={handleCheck} disabled={Object.keys(ans).length < questions.length} className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm ${theme.btnOn}`}>Kiểm tra đáp án</button>
                    ) : (
                    <button onClick={handleRetry} className="px-6 py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200 transition-colors">Làm lại</button>
                    )}
                </div>
                </div>
            )
        };

        // ==========================================
        // KHỐI NỘI DUNG CHÍNH - MÔ ĐUN ĐỘNG TỪ
        // (Bạn có thể nhúng trực tiếp Component <VerbModule /> này vào trang web của bạn)
        // ==========================================

        const VerbModule = () => {
            return (
                <div className="animate-pop w-full">
                    {/* HERO SECTION */}
                    <div className="mb-8 sm:mb-12 border-l-4 border-blue-600 pl-4 sm:pl-5">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Động Từ (Verbs)</h1>
                        <p className="text-base sm:text-lg text-slate-500 mt-2 font-medium">Trái tim của mọi câu tiếng Anh. Phân biệt rõ Động từ thường, tobe và Modal Verbs.</p>
                    </div>

                    <SectionIntro />
                    <SectionRegularVerbs />
                    <SectionToBeVerbs />
                    <SectionComparison />
                    <SectionModalVerbs />
                    <SectionPassiveVoice />
                </div>
            );
        };

        // --- CÁC PHÂN ĐOẠN CỦA MÔ ĐUN ---

        function SectionIntro() {
            return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl shadow-sm">
                    <Activity className="text-blue-600 mb-3 w-8 h-8" />
                    <h3 className="font-bold text-blue-900 text-lg mb-1">1. Động từ thường</h3>
                    <p className="text-sm text-blue-700/80">Diễn tả hành động (chạy, nhảy, ăn, ngủ...).</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl shadow-sm">
                    <Layers className="text-emerald-600 mb-3 w-8 h-8" />
                    <h3 className="font-bold text-emerald-900 text-lg mb-1">2. Động từ tobe</h3>
                    <p className="text-sm text-emerald-700/80">Diễn tả trạng thái (thì, là, ở).</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl shadow-sm">
                    <Zap className="text-amber-600 mb-3 w-8 h-8" />
                    <h3 className="font-bold text-amber-900 text-lg mb-1">3. Khiếm khuyết</h3>
                    <p className="text-sm text-amber-700/80">Thể hiện khả năng, lời khuyên (can, should...).</p>
                </div>
                </div>
            );
        }

        function SectionRegularVerbs() {
            return (
                <section className="mb-14 relative z-20">
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-lg shrink-0 shadow-md">1</span>
                    Động Từ Thường
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">Cách chia động từ thường theo 5 thì quan trọng nhất.</p>
                </div>

                <TenseBlock 
                    color="blue" title="Thì Hiện tại đơn (Present Simple)" tenseType="present"
                    forms={[
                    { type: 'khangding', parts: ["S", "+", "Vo - Vs/es"] },
                    { type: 'phuding', parts: ["S", "+", "don't - doesn't", "+", "Vo"] }
                    ]}
                    usages={[
                    { desc: "Nói về một hành động lặp đi lặp lại nhiều lần (Thói quen)", pos: [ { en: "I usually <strong class='text-blue-600'>work</strong> overtime on Fridays.", vn: "Tôi thường xuyên làm thêm giờ vào các ngày thứ Sáu." }, { en: "We <strong class='text-blue-600'>take</strong> the bus to work every morning.", vn: "Chúng tôi bắt xe buýt đi làm mỗi sáng." } ], neg: [ { en: "I <strong class='text-blue-600'>don't like</strong> crowded places.", vn: "Tôi không thích những nơi đông người." }, { en: "She <strong class='text-blue-600'>doesn't have</strong> much free time.", vn: "Cô ấy không có nhiều thời gian rảnh." } ] },
                    { desc: "Nói về một sự thật hiển nhiên (thông tin cá nhân, sự việc luôn đúng)", pos: [ { en: "I <strong class='text-blue-600'>come</strong> from Ca Mau province.", vn: "Tôi đến từ tỉnh Cà Mau." }, { en: "My brother <strong class='text-blue-600'>works</strong> in a bank.", vn: "Anh trai tôi làm việc ở ngân hàng." } ], neg: [ { en: "I <strong class='text-blue-600'>don't drink</strong> coffee in the evening.", vn: "Tôi không uống cà phê vào buổi tối." }, { en: "My family <strong class='text-blue-600'>doesn't watch</strong> TV during dinner.", vn: "Gia đình tôi không xem TV trong lúc ăn tối." } ] }
                    ]}
                />

                <TenseBlock 
                    color="blue" title="Thì Quá khứ đơn (Past Simple)" tenseType="past"
                    forms={[
                    { type: 'khangding', parts: ["S", "+", "V2/ed"] },
                    { type: 'phuding', parts: ["S", "+", "didn't", "+", "Vo"] }
                    ]}
                    usages={[
                    { desc: "Kể lại một sự kiện đã xảy ra và đã kết thúc trong quá khứ", pos: [ { en: "I <strong class='text-blue-600'>graduated</strong> from university in 2020.", vn: "Tôi đã tốt nghiệp đại học vào năm 2020." }, { en: "We <strong class='text-blue-600'>signed</strong> the contract yesterday.", vn: "Chúng tôi đã ký hợp đồng vào ngày hôm qua." } ], neg: [ { en: "I <strong class='text-blue-600'>didn't attend</strong> the meeting this morning.", vn: "Sáng nay tôi đã không tham dự cuộc họp." }, { en: "She <strong class='text-blue-600'>didn't pass</strong> the driving test.", vn: "Cô ấy đã không vượt qua bài thi bằng lái xe." } ] }
                    ]}
                />

                <TenseBlock 
                    color="blue" title="Thì Tương lai đơn (Future Simple)" tenseType="future"
                    forms={[
                    { type: 'khangding', parts: ["S", "+", "will", "+", "Vo"] },
                    { type: 'phuding', parts: ["S", "+", "won't", "+", "Vo"] }
                    ]}
                    usages={[
                    { desc: "Nói về một kế hoạch, dự đoán trong tương lai (không chắc chắn)", pos: [ { en: "I think AI <strong class='text-blue-600'>will replace</strong> many jobs.", vn: "Tôi nghĩ trí tuệ nhân tạo sẽ thay thế nhiều công việc." }, { en: "The population <strong class='text-blue-600'>will increase</strong> next year.", vn: "Dân số sẽ tăng vào năm tới." } ], neg: [ { en: "They <strong class='text-blue-600'>won't finish</strong> the project on time.", vn: "Họ sẽ không hoàn thành dự án đúng hạn." }, { en: "House prices <strong class='text-blue-600'>won't drop</strong> soon.", vn: "Giá nhà sẽ không giảm sớm đâu." } ] },
                    { desc: "Nói về một quyết định ngay tại thời điểm nói", pos: [ { en: "I <strong class='text-blue-600'>will transfer</strong> the money to your account.", vn: "Tôi sẽ chuyển tiền vào tài khoản của bạn." }, { en: "It's too loud, I <strong class='text-blue-600'>will close</strong> the door.", vn: "Ồn quá, tôi sẽ đóng cửa lại." } ], neg: [ { en: "I am busy, I <strong class='text-blue-600'>won't join</strong> the party.", vn: "Tôi bận rồi, tôi sẽ không tham gia bữa tiệc." }, { en: "I <strong class='text-blue-600'>won't buy</strong> this shirt, it's too expensive.", vn: "Tôi sẽ không mua chiếc áo này, nó đắt quá." } ] }
                    ]}
                />

                <TenseBlock 
                    color="blue" title="Thì Hiện tại tiếp diễn (Present Continuous)" tenseType="present-cont"
                    forms={[
                    { type: 'khangding', parts: ["S", "+", "am - is - are", "+", "Ving"] },
                    { type: 'phuding', parts: ["S", "+", "am not - isn't - aren't", "+", "Ving"] }
                    ]}
                    usages={[
                    { desc: "Diễn đạt hành động đang xảy ra ngay tại thời điểm nói", pos: [ { en: "I <strong class='text-blue-600'>am preparing</strong> for the VSTEP exam.", vn: "Tôi đang chuẩn bị cho kỳ thi VSTEP." }, { en: "The manager <strong class='text-blue-600'>is talking</strong> to a client.", vn: "Quản lý đang nói chuyện với một khách hàng." } ], neg: [ { en: "I <strong class='text-blue-600'>am not working</strong> right now.", vn: "Bây giờ tôi đang không làm việc." }, { en: "They <strong class='text-blue-600'>aren't listening</strong> to the teacher.", vn: "Họ đang không lắng nghe giáo viên." } ] },
                    { desc: "Diễn đạt hành động đang xảy ra xung quanh thời điểm nói (dạo này)", pos: [ { en: "We <strong class='text-blue-600'>are looking</strong> for a new apartment.", vn: "Dạo này chúng tôi đang tìm một căn hộ mới." }, { en: "She <strong class='text-blue-600'>is learning</strong> Chinese these days.", vn: "Dạo này cô ấy đang học tiếng Trung." } ], neg: [ { en: "I <strong class='text-blue-600'>am not sleeping</strong> well recently.", vn: "Gần đây tôi ngủ không được ngon giấc." }, { en: "The company <strong class='text-blue-600'>isn't doing</strong> well this year.", vn: "Năm nay công ty làm ăn không được tốt lắm." } ] },
                    { desc: "Một kế hoạch chắc chắn sẽ xảy ra trong tương lai gần (đã chốt lịch)", pos: [ { en: "I <strong class='text-blue-600'>am meeting</strong> the doctor tomorrow.", vn: "Tôi có lịch hẹn gặp bác sĩ vào ngày mai." }, { en: "We <strong class='text-blue-600'>are flying</strong> to Hanoi next Monday.", vn: "Chúng tôi sẽ bay ra Hà Nội vào thứ Hai tới." } ], neg: [ { en: "I <strong class='text-blue-600'>am not working</strong> this weekend.", vn: "Cuối tuần này tôi không làm việc." }, { en: "She <strong class='text-blue-600'>isn't coming</strong> to the event tonight.", vn: "Tối nay cô ấy sẽ không đến sự kiện." } ] }
                    ]}
                />

                <TenseBlock 
                    color="blue" title="Thì Hiện tại hoàn thành (Present Perfect)" tenseType="present-perf"
                    forms={[
                    { type: 'khangding', parts: ["S", "+", "have - has", "+", "V3/ed"] },
                    { type: 'phuding', parts: ["S", "+", "haven't - hasn't", "+", "V3/ed"] }
                    ]}
                    usages={[
                    { desc: "Nói về một trải nghiệm cá nhân (tính đến hiện tại)", pos: [ { en: "I <strong class='text-blue-600'>have visited</strong> Dalat three times.", vn: "Tôi đã đi Đà Lạt 3 lần rồi." }, { en: "We <strong class='text-blue-600'>have eaten</strong> at that restaurant.", vn: "Chúng tôi đã từng ăn ở nhà hàng đó." } ], neg: [ { en: "I <strong class='text-blue-600'>haven't tried</strong> sushi before.", vn: "Tôi chưa từng ăn thử sushi trước đây." }, { en: "He <strong class='text-blue-600'>hasn't traveled</strong> abroad.", vn: "Anh ấy chưa từng đi du lịch nước ngoài." } ] },
                    { desc: "Sự việc bắt đầu từ quá khứ và vẫn còn kéo dài đến hiện tại", pos: [ { en: "I <strong class='text-blue-600'>have worked</strong> here for 5 years.", vn: "Tôi đã làm việc ở đây được 5 năm rồi." }, { en: "She <strong class='text-blue-600'>has lived</strong> in HCMC since 2015.", vn: "Cô ấy đã sống ở TP.HCM từ năm 2015." } ], neg: [ { en: "We <strong class='text-blue-600'>haven't seen</strong> each other for a long time.", vn: "Đã lâu rồi chúng tôi chưa gặp nhau." }, { en: "I <strong class='text-blue-600'>haven't received</strong> any emails since yesterday.", vn: "Từ hôm qua đến giờ tôi chưa nhận được email nào." } ] }
                    ]}
                />

                <VerbTranslationExercise
                    num="1"
                    title="Bài tập: Diễn đạt câu thực tế sang tiếng Anh"
                    desc="Với mỗi câu tiếng Việt dưới đây, hãy xác định Chủ ngữ, Động từ chính, Thì cần chia, sau đó viết câu tiếng Anh hoàn chỉnh (7 câu)."
                    items={[
                        {
                            vn: "Tôi thường kiểm tra email công việc vào mỗi buổi sáng.",
                            vocab: "usually (thường) · work emails (email công việc) · every morning (mỗi buổi sáng)",
                            subject: "I",
                            subjectOptions: ["I", "Work emails", "Every morning"],
                            verb: "check",
                            verbOptions: ["check", "send", "write"],
                            tense: "Hiện tại đơn",
                            tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
                            conjugatedHint: "I + check (nguyên mẫu)",
                            tenseReason: "Hành động lặp đi lặp lại theo thói quen",
                            en: "I usually check work emails every morning.",
                            accepted: [
                                "I usually check my work emails every morning.",
                                "I usually check work email every morning.",
                                "Every morning I usually check work emails."
                            ],
                            exp: "Thói quen lặp đi lặp lại mỗi sáng → dùng Hiện tại đơn. Chủ ngữ 'I' đi với động từ nguyên mẫu 'check'."
                        },
                        {
                            vn: "Anh trai tôi làm việc tại một ngân hàng lớn.",
                            vocab: "my brother (anh trai tôi) · at a big bank (tại một ngân hàng lớn)",
                            subject: "My brother",
                            subjectOptions: ["My brother", "I", "A big bank"],
                            verb: "work",
                            verbOptions: ["work", "do", "stay"],
                            tense: "Hiện tại đơn",
                            tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
                            conjugatedHint: "My brother + works (thêm -s)",
                            tenseReason: "Thông tin cá nhân / sự thật ở hiện tại",
                            en: "My brother works at a big bank.",
                            accepted: [
                                "My brother works in a big bank.",
                                "My brother works at a large bank.",
                                "My brother works in a large bank."
                            ],
                            exp: "Nói về thông tin thực tế ở hiện tại → dùng Hiện tại đơn. Chủ ngữ 'My brother' là số ít nên 'work' thêm -s thành 'works'."
                        },
                        {
                            vn: "Hôm qua chúng tôi đã ký hợp đồng với khách hàng mới.",
                            vocab: "the contract (hợp đồng) · with the new client (với khách hàng mới) · yesterday (hôm qua)",
                            subject: "We",
                            subjectOptions: ["We", "The contract", "The new client"],
                            verb: "sign",
                            verbOptions: ["sign", "buy", "make"],
                            tense: "Quá khứ đơn",
                            tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
                            conjugatedHint: "We + signed (V2/ed)",
                            tenseReason: "Sự việc đã xảy ra và kết thúc ngày hôm qua",
                            en: "We signed the contract with the new client yesterday.",
                            accepted: [
                                "Yesterday we signed the contract with the new client.",
                                "We signed a contract with the new client yesterday.",
                                "We signed the contract with a new client yesterday."
                            ],
                            exp: "Sự kiện đã xảy ra và kết thúc trong quá khứ ('hôm qua') → dùng Quá khứ đơn. Động từ 'sign' thêm -ed thành 'signed'."
                        },
                        {
                            vn: "Sáng nay cô ấy đã không tham dự cuộc họp.",
                            vocab: "attend (tham dự) · the meeting (cuộc họp) · this morning (sáng nay)",
                            subject: "She",
                            subjectOptions: ["She", "The meeting", "This morning"],
                            verb: "attend",
                            verbOptions: ["attend", "speak", "open"],
                            tense: "Quá khứ đơn",
                            tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
                            conjugatedHint: "She + didn't attend (didn't + Vo)",
                            tenseReason: "Sự việc đã qua trong quá khứ ở thể phủ định",
                            en: "She didn't attend the meeting this morning.",
                            accepted: [
                                "She did not attend the meeting this morning.",
                                "This morning she didn't attend the meeting.",
                                "This morning she did not attend the meeting."
                            ],
                            exp: "Việc không tham dự đã diễn ra vào sáng nay → Quá khứ đơn phủ định: mượn trợ động từ 'didn't' + động từ nguyên mẫu 'attend'."
                        },
                        {
                            vn: "Tôi sẽ gửi báo cáo cho bạn vào chiều nay.",
                            vocab: "the report (báo cáo) · to you (cho bạn) · this afternoon (chiều nay)",
                            subject: "I",
                            subjectOptions: ["I", "You", "The report"],
                            verb: "send",
                            verbOptions: ["send", "read", "keep"],
                            tense: "Tương lai đơn",
                            tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
                            conjugatedHint: "I + will send (will + Vo)",
                            tenseReason: "Quyết định hoặc lời hứa sẽ làm trong tương lai",
                            en: "I will send the report to you this afternoon.",
                            accepted: [
                                "I'll send the report to you this afternoon.",
                                "I will send you the report this afternoon.",
                                "I'll send you the report this afternoon."
                            ],
                            exp: "Đưa ra lời hứa / quyết định sẽ làm → dùng Tương lai đơn: 'will + Vo' (will send)."
                        },
                        {
                            vn: "Dạo này chúng tôi đang tìm một căn hộ mới.",
                            vocab: "look for (tìm kiếm) · a new apartment (một căn hộ mới) · these days (dạo này)",
                            subject: "We",
                            subjectOptions: ["We", "A new apartment", "These days"],
                            verb: "look for",
                            verbOptions: ["look for", "live", "build"],
                            tense: "Hiện tại tiếp diễn",
                            tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
                            conjugatedHint: "We + are looking for (am/is/are + V-ing)",
                            tenseReason: "Hành động đang diễn ra xung quanh thời điểm nói ('dạo này')",
                            en: "We are looking for a new apartment these days.",
                            accepted: [
                                "We're looking for a new apartment these days.",
                                "These days we are looking for a new apartment.",
                                "These days we're looking for a new apartment."
                            ],
                            exp: "Việc tìm nhà đang diễn ra trong giai đoạn hiện tại ('dạo này') → dùng Hiện tại tiếp diễn: 'are + V-ing' (are looking for)."
                        },
                        {
                            vn: "Tôi đã làm việc ở công ty này được 5 năm rồi.",
                            vocab: "at this company / for this company (ở công ty này) · for 5 years (được 5 năm)",
                            subject: "I",
                            subjectOptions: ["I", "This company", "5 years"],
                            verb: "work",
                            verbOptions: ["work", "start", "leave"],
                            tense: "Hiện tại hoàn thành",
                            tenseOptions: ["Hiện tại đơn", "Quá khứ đơn", "Tương lai đơn", "Hiện tại tiếp diễn", "Hiện tại hoàn thành"],
                            conjugatedHint: "I + have worked (have/has + V3/ed)",
                            tenseReason: "Sự việc bắt đầu trong quá khứ và vẫn kéo dài đến hiện tại",
                            en: "I have worked at this company for 5 years.",
                            accepted: [
                                "I have worked for this company for 5 years.",
                                "I have worked in this company for 5 years.",
                                "I've worked at this company for 5 years.",
                                "I've worked for this company for 5 years.",
                                "I have worked at this company for five years.",
                                "I have worked for this company for five years."
                            ],
                            exp: "Làm việc từ quá khứ và đến nay vẫn còn làm ('được 5 năm rồi') → dùng Hiện tại hoàn thành: 'have + V3/ed' (have worked)."
                        }
                    ]}
                />
                </section>
            );
        }

        function SectionToBeVerbs() {
            return (
                <section className="mb-14 relative z-20">
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white text-lg shrink-0 shadow-md">2</span>
                    Động Từ tobe
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">Động từ tobe mô tả bản chất, trạng thái, vị trí (nghĩa là: thì, là, ở).</p>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-bold text-emerald-900 mb-5 border-b-2 border-emerald-200 pb-2 inline-block">Khi nào sử dụng Động từ tobe?</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200 shadow-sm flex flex-col h-full">
                        <div className="mb-4">
                            <FormulaBox parts={["S", "+", "tobe", "+", "adj"]} color="emerald" align="left" />
                        </div>
                        <p className="text-sm text-slate-700 mb-5 font-medium flex-1">
                            Dùng để miêu tả <strong className="text-rose-600 font-bold">cảm xúc, tình trạng, tính cách</strong> hoặc <strong className="text-rose-600 font-bold">đặc điểm của sự vật</strong>.
                        </p>
                        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm space-y-3">
                            <ClickableSentence en="<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>Cảm xúc / Tình trạng</span><br/><span class='mt-1.5 inline-block'>I <strong class='text-emerald-600'>am</strong> very busy today.</span>" vn="Hôm nay tôi rất bận." />
                            <ClickableSentence en="<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>Tính cách con người</span><br/><span class='mt-1.5 inline-block'>My coworkers <strong class='text-emerald-600'>are</strong> very friendly.</span>" vn="Đồng nghiệp của tôi rất thân thiện." />
                            <ClickableSentence en="<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>Đặc điểm sự vật</span><br/><span class='mt-1.5 inline-block'>This shirt <strong class='text-emerald-600'>is</strong> too expensive.</span>" vn="Chiếc áo này đắt quá." />
                        </div>
                        </div>
                        
                        <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200 shadow-sm flex flex-col h-full">
                        <div className="mb-4">
                            <FormulaBox parts={["S", "+", "tobe", "+", "N - Noun Phr."]} color="emerald" align="left" />
                        </div>
                        <p className="text-sm text-slate-700 mb-5 font-medium flex-1">
                            Dùng để giới thiệu <strong className="text-rose-600 font-bold">nghề nghiệp, mối quan hệ</strong> hoặc <strong className="text-rose-600 font-bold">tên gọi của sự vật</strong>.
                        </p>
                        <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm space-y-3">
                            <ClickableSentence en="<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>Nghề nghiệp / Vai trò</span><br/><span class='mt-1.5 inline-block'>She <strong class='text-emerald-600'>is</strong> an accountant at my company.</span>" vn="Cô ấy là kế toán ở công ty tôi." />
                            <ClickableSentence en="<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>Mối quan hệ</span><br/><span class='mt-1.5 inline-block'>They <strong class='text-emerald-600'>are</strong> my close friends.</span>" vn="Họ là những người bạn thân của tôi." />
                            <ClickableSentence en="<span class='text-[10px] font-bold text-emerald-600 border border-emerald-300 px-1.5 py-0.5 rounded mr-2 uppercase bg-emerald-100 tracking-wider shadow-sm'>Giới thiệu sự vật</span><br/><span class='mt-1.5 inline-block'>This <strong class='text-emerald-600'>is</strong> my new phone number.</span>" vn="Đây là số điện thoại mới của tôi." />
                        </div>
                        </div>
                    </div>
                </div>

                <TenseBlock 
                    color="emerald" title="Hiện tại đơn" tenseType="present"
                    forms={[ { type: 'khangding', parts: ["S", "+", "am - is - are", "+", "..."] }, { type: 'phuding', parts: ["S", "+", "am not - isn't - aren't", "+", "..."] } ]}
                    usages={[ { desc: "Nói về một sự thật hiển nhiên, tình trạng hiện tại", pos: [ { en: "I <strong class='text-emerald-600'>am</strong> a freelance designer.", vn: "Tôi là một nhà thiết kế tự do." }, { en: "This policy <strong class='text-emerald-600'>is</strong> very important.", vn: "Chính sách này rất quan trọng." } ], neg: [ { en: "These products <strong class='text-emerald-600'>aren't</strong> expensive.", vn: "Những sản phẩm này không đắt." }, { en: "I <strong class='text-emerald-600'>am not</strong> satisfied with the service.", vn: "Tôi không hài lòng với dịch vụ." } ] } ]}
                />
                <TenseBlock 
                    color="emerald" title="Quá khứ đơn" tenseType="past"
                    forms={[ { type: 'khangding', parts: ["S", "+", "was - were", "+", "..."] }, { type: 'phuding', parts: ["S", "+", "wasn't - weren't", "+", "..."] } ]}
                    usages={[ { desc: "Nói về một sự thật đã từng đúng trong quá khứ", pos: [ { en: "The meeting <strong class='text-emerald-600'>was</strong> successful.", vn: "Cuộc họp đã diễn ra thành công." }, { en: "They <strong class='text-emerald-600'>were</strong> my university classmates.", vn: "Họ từng là bạn học đại học của tôi." } ], neg: [ { en: "The customer service <strong class='text-emerald-600'>wasn't</strong> good.", vn: "Dịch vụ chăm sóc khách hàng đã không được tốt." }, { en: "We <strong class='text-emerald-600'>weren't</strong> at the office yesterday.", vn: "Hôm qua chúng tôi không có ở văn phòng." } ] } ]}
                />
                <TenseBlock 
                    color="emerald" title="Tương lai đơn" tenseType="future"
                    forms={[ { type: 'khangding', parts: ["S", "+", "will be", "+", "..."] }, { type: 'phuding', parts: ["S", "+", "won't be", "+", "..."] } ]}
                    usages={[ { desc: "Nói về một dự đoán trạng thái trong tương lai", pos: [ { en: "The weather <strong class='text-emerald-600'>will be</strong> better tomorrow.", vn: "Ngày mai thời tiết sẽ tốt hơn." }, { en: "This project <strong class='text-emerald-600'>will be</strong> a great success.", vn: "Dự án này sẽ là một thành công lớn." } ], neg: [ { en: "The traffic <strong class='text-emerald-600'>won't be</strong> heavy at noon.", vn: "Giao thông sẽ không bị kẹt xe vào buổi trưa đâu." }, { en: "I <strong class='text-emerald-600'>won't be</strong> available next week.", vn: "Tuần sau tôi sẽ không rảnh." } ] } ]}
                />

                <MiniQuiz 
                    color="emerald" num="1" title="Bài tập: Chọn động từ tobe theo thời gian" desc="Lưu ý các từ khóa chỉ thời gian ở Quá khứ, Hiện tại, Tương lai (7 câu)."
                    questions={[
                    { text: "They ________ my university classmates 5 years ago.", options: ["are", "were", "was"], correct: "were", exp: "'5 years ago' -> Quá khứ đơn. 'They' đi với 'were'." },
                    { text: "Don't worry. Tomorrow ________ a better day.", options: ["is", "was", "will be"], correct: "will be", exp: "'Tomorrow' -> Tương lai đơn. Cần dùng 'will be'." },
                    { text: "I ________ very happy right now.", options: ["am", "was", "will be"], correct: "am", exp: "'right now' -> Hiện tại. 'I' đi với 'am'." },
                    { text: "The weather ________ terrible last weekend.", options: ["is", "was", "were"], correct: "was", exp: "'last weekend' -> Quá khứ đơn. 'The weather' (số ít) đi với 'was'." },
                    { text: "She ________ at the office tomorrow morning.", options: ["isn't", "wasn't", "won't be"], correct: "won't be", exp: "'tomorrow morning' -> Tương lai đơn phủ định là 'won't be'." },
                    { text: "It ________ widely known that smoking causes cancer.", options: ["is", "was", "will be"], correct: "is", exp: "Đây là một sự thật hiển nhiên (luôn đúng) trong xã hội, dùng thì Hiện tại đơn." },
                    { text: "The new regulations ________ effective starting next Monday.", options: ["are", "were", "will be"], correct: "will be", exp: "Dấu hiệu 'next Monday' (thứ Hai tới) yêu cầu thì Tương lai đơn để chỉ trạng thái bắt đầu có hiệu lực." }
                    ]}
                />
                <MiniQuiz 
                    color="emerald" num="2" title="Bài tập: Tobe đi kèm Tính từ / Danh từ" desc="Xác định đúng từ loại (adj hay noun) đi sau động từ tobe (7 câu)."
                    questions={[
                    { text: "This company policy is very ________.", options: ["importance", "important"], correct: "important", exp: "Cần một Tính từ (important - quan trọng) để miêu tả tính chất cho chủ ngữ 'policy'." },
                    { text: "She is a dedicated ________.", options: ["teach", "teacher"], correct: "teacher", exp: "Cần một Danh từ chỉ người (teacher - giáo viên) đứng sau mạo từ 'a' để chỉ nghề nghiệp." },
                    { text: "The soup smells good, but it is too ________.", options: ["salt", "salty"], correct: "salty", exp: "Sử dụng tính từ (salty - mặn) để miêu tả tính trạng thái/tính chất của món súp." },
                    { text: "Those men ________ engineers.", options: ["is", "are", "do"], correct: "are", exp: "'Those men' (những người đàn ông đó) là danh từ số nhiều, đi kèm với động từ tobe 'are'." },
                    { text: "Happiness ________ a choice.", options: ["is", "has", "does"], correct: "is", exp: "'Happiness' (hạnh phúc) là danh từ không đếm được, dùng tobe số ít 'is'." },
                    { text: "The proliferation of fake news is highly ________.", options: ["problem", "problematic"], correct: "problematic", exp: "'highly' là trạng từ bổ nghĩa cho một Tính từ phía sau (problematic - có vấn đề)." },
                    { text: "He proved to be a reliable ________ during the crisis.", options: ["partner", "partnership"], correct: "partner", exp: "Chỉ người (một người cộng sự đáng tin cậy), ta dùng danh từ chỉ người 'partner' đếm được (có mạo từ 'a')." }
                    ]}
                />
                </section>
            );
        }

        function SectionComparison() {
            return (
                <div className="mb-14 relative z-20">
                <div className="bg-rose-50 border-l-4 border-rose-500 p-5 sm:p-7 rounded-r-2xl shadow-sm relative overflow-hidden">
                    <AlertTriangle className="absolute -bottom-4 -right-4 w-32 h-32 text-rose-500 opacity-10" />
                    <h3 className="text-xl font-extrabold text-rose-800 mb-4 flex items-center gap-2">
                    <ShieldAlert className="w-6 h-6" />
                    Lưu ý Sống Còn: Oan Gia Ngõ Hẹp!
                    </h3>
                    <div className="space-y-4 text-rose-900/90 text-sm sm:text-base leading-relaxed">
                    <p>
                        <strong className="bg-rose-200 px-1 rounded text-rose-800">Một câu đơn CHỈ CÓ 01 động từ chính</strong> (hoặc là Động từ thường, hoặc là Động từ tobe). 
                        Chúng bằng mặt nhưng không bằng lòng, tuyệt đối không đứng cạnh nhau ở dạng nguyên bản!
                    </p>
                    <div className="bg-white/60 p-3 rounded-lg border border-rose-200 font-mono text-sm shadow-sm inline-block">
                        ❌ <span className="line-through opacity-70">I am go to school.</span> (Sai vì có cả tobe "am" và Động từ thường "go")<br/>
                        ✅ I <strong className="font-black text-blue-700">go</strong> to school. (Đúng: Chỉ dùng Động từ thường để chỉ hành động)
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl border border-rose-200 mt-4 shadow-sm relative z-10">
                        <p className="font-bold text-slate-800 mb-2">Chỉ có 2 trường hợp tobe và Động từ thường đứng kế nhau (Nhưng động từ thường phải biến đổi):</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        <li><strong className="text-blue-600">Thì tiếp diễn:</strong> S + tobe + <strong className="bg-blue-100 text-blue-800 px-1 rounded"><FormatVerb text="Ving" /></strong><br/><span className="text-sm text-slate-500">Ví dụ: I am <strong className="text-blue-600">going</strong> to school.</span></li>
                        <li><strong className="text-purple-600">Câu bị động:</strong> S + tobe + <strong className="bg-purple-100 text-purple-800 px-1 rounded"><FormatVerb text="V3/ed" /></strong><br/><span className="text-sm text-slate-500">Ví dụ: The car is <strong className="text-purple-600">washed</strong>.</span></li>
                        </ul>
                    </div>
                    <p className="mt-2 text-sm italic text-rose-700">* Nếu muốn dùng 2 động từ chính trong 1 câu, bạn phải tạo <strong>Câu ghép</strong> (ghép 2 câu đơn lại bằng các từ nối như and, but, so...).</p>
                    </div>
                </div>

                <MiniQuiz 
                    color="rose" num="1" title="Bài tập: Bắt lỗi sai Oan gia ngõ hẹp" desc="Tìm ra câu nói chuẩn xác của người bản xứ (không mắc lỗi cơ bản nhét bừa tobe - 7 câu)."
                    questions={[
                    { text: "Chọn câu giao tiếp ĐÚNG:", options: ["I am agree with you.", "I agree with you."], correct: "I agree with you.", exp: "'Agree' (đồng ý) là Động từ thường mang ý nghĩa hành động nhận thức. Đã có động từ thường thì tuyệt đối không được nhét thêm tobe 'am' vào trước nó." },
                    { text: "Chọn câu giao tiếp ĐÚNG:", options: ["He doesn't happy.", "He isn't happy."], correct: "He isn't happy.", exp: "'Happy' là Tính từ (vui vẻ). Đi với tính từ bắt buộc phải dùng động từ tobe, và dạng phủ định của nó là 'isn't'." },
                    { text: "Chọn câu giao tiếp ĐÚNG:", options: ["She is go to work.", "She goes to work."], correct: "She goes to work.", exp: "Chỉ hành động 'đi làm' (go), ta dùng hoàn toàn động từ thường, chia theo chủ ngữ 'She' thành 'goes'. Không dùng 'is go'." },
                    { text: "Chọn câu giao tiếp ĐÚNG:", options: ["Are you understand?", "Do you understand?"], correct: "Do you understand?", exp: "Câu hỏi với động từ thường (understand) phải mượn trợ động từ (Do/Does) đưa ra đầu câu. Không dùng 'Are' vì 'Are' là tobe." },
                    { text: "Chọn câu giao tiếp ĐÚNG:", options: ["I didn't tired.", "I wasn't tired."], correct: "I wasn't tired.", exp: "'Tired' (mệt mỏi) là tính từ miêu tả trạng thái, phải dùng tobe ở quá khứ phủ định là 'wasn't'." },
                    { text: "Chọn câu giao tiếp ĐÚNG:", options: ["The project is lack of funding.", "The project lacks funding."], correct: "The project lacks funding.", exp: "'Lack' có thể đóng vai trò làm Động từ thường mang nghĩa 'thiếu hụt'. Do đó không cần dùng 'is lack' sai cấu trúc." },
                    { text: "Chọn câu giao tiếp ĐÚNG:", options: ["It is consist of three parts.", "It consists of three parts."], correct: "It consists of three parts.", exp: "'Consist of' là Động từ thường mang nghĩa bao gồm. Dùng động từ thường chia số ít (consists), không có 'is consist'." }
                    ]}
                />
                <MiniQuiz 
                    color="rose" num="2" title="Bài tập: Điền từ cốt lõi" desc="Cân nhắc phía sau là Hành động (V), Tính từ (Adj) hay Danh từ (Noun) để quyết định dùng Động từ thường hay tobe (7 câu)."
                    questions={[
                    { text: "I ________ to the gym every morning.", options: ["am go", "go", "am going"], correct: "go", exp: "Thói quen lặp lại mỗi sáng (hiện tại đơn), ta chỉ dùng động từ thường 'go'. Tuyệt đối không dùng 'am go' (Lỗi oan gia ngõ hẹp)." },
                    { text: "She ________ extremely intelligent.", options: ["is", "has", "does"], correct: "is", exp: "'intelligent' (thông minh) là Tính từ, do đó vị trí này cần động từ tobe 'is'." },
                    { text: "They ________ very hard on this project.", options: ["are working", "are work", "work"], correct: "are working", exp: "Hành động đang diễn ra (tiếp diễn), động từ biến đổi thành Ving, nên ghép được với tobe: tobe + Ving (are working)." },
                    { text: "We ________ not fully aware of the consequences.", options: ["are", "do", "have"], correct: "are", exp: "'aware of' là cụm Tính từ mang nghĩa 'nhận thức được'. Trước tính từ phải dùng động từ tobe." },
                    { text: "The company ________ to expand its market share.", options: ["wants", "is want", "want"], correct: "wants", exp: "Động từ chỉ mong muốn (want) là động từ thường. Chia số ít theo chủ ngữ công ty thành 'wants'. (is want là sai)." },
                    { text: "This evidence ________ crucial for the investigation.", options: ["is", "does", "has"], correct: "is", exp: "'crucial' (trọng yếu/vô cùng quan trọng) là Tính từ, vị trí này cần động từ tobe (is)." },
                    { text: "Many candidates ________ to meet the minimum requirements.", options: ["fail", "are fail", "fails"], correct: "fail", exp: "Hành động 'thất bại' (fail) dùng động từ thường số nhiều do chủ ngữ 'candidates' là số nhiều. Không dùng 'are fail'." }
                    ]}
                />
                </div>
            );
        }

        function SectionModalVerbs() {
            const modals = [
                { name: "can - cannot", meaning: "Có thể", desc: "Diễn tả khả năng của chủ ngữ (ai đó có thể làm gì).", pos: <Fragment>S + can + <FormatVerb text="Vo" /></Fragment>, neg: <Fragment>S + cannot + <FormatVerb text="Vo" /></Fragment>, ex: [ { en: "I <strong class='text-amber-600'>can communicate</strong> in basic English.", vn: "Tôi có thể giao tiếp tiếng Anh cơ bản." }, { en: "You <strong class='text-amber-600'>cannot pay</strong> by cash here.", vn: "Bạn không thể thanh toán bằng tiền mặt ở đây." } ] },
                { name: "should", meaning: "Nên", desc: "Đưa ra một lời khuyên chân thành cho ai đó.", pos: <Fragment>S + should + <FormatVerb text="Vo" /></Fragment>, neg: <Fragment>S + shouldn't + <FormatVerb text="Vo" /></Fragment>, ex: [ { en: "You <strong class='text-amber-600'>should double-check</strong> the document.", vn: "Bạn nên kiểm tra lại tài liệu một lần nữa." }, { en: "We <strong class='text-amber-600'>shouldn't waste</strong> time on this.", vn: "Chúng ta không nên lãng phí thời gian vào việc này." } ] },
                { name: "must - have to", meaning: "Phải", desc: "Must: Bắt buộc từ bản thân. Have to: Luật lệ, quy định.", pos: <Fragment>S + must - have to + <FormatVerb text="Vo" /></Fragment>, neg: null, ex: [ { en: "All employees <strong class='text-amber-600'>must wear</strong> uniforms.", vn: "Tất cả nhân viên bắt buộc phải mặc đồng phục." }, { en: "I <strong class='text-amber-600'>have to submit</strong> the report today.", vn: "Tôi phải nộp báo cáo vào ngày hôm nay." } ] },
                { name: "will - won't", meaning: "Sẽ", desc: "Diễn tả một ý định, quyết định hoặc dự đoán.", pos: <Fragment>S + will + <FormatVerb text="Vo" /></Fragment>, neg: <Fragment>S + won't + <FormatVerb text="Vo" /></Fragment>, ex: [ { en: "The company <strong class='text-amber-600'>will launch</strong> a new product.", vn: "Công ty sẽ ra mắt một sản phẩm mới." }, { en: "I <strong class='text-amber-600'>won't give up</strong> easily.", vn: "Tôi sẽ không bỏ cuộc một cách dễ dàng." } ] },
                { name: "may - might", meaning: "Có khả năng", desc: "Khả năng xảy ra một việc gì đó (mức độ chắc chắn thấp).", pos: <Fragment>S + may - might + <FormatVerb text="Vo" /></Fragment>, neg: <Fragment>S + may - might not + <FormatVerb text="Vo" /></Fragment>, ex: [ { en: "It <strong class='text-amber-600'>might rain</strong> heavily this afternoon.", vn: "Chiều nay trời có khả năng sẽ mưa to." }, { en: "We <strong class='text-amber-600'>may need</strong> more time to finish.", vn: "Chúng tôi có thể cần thêm thời gian để hoàn thành." } ] },
                { name: "don't - doesn't have to", meaning: "Không cần phải", desc: "Diễn tả sự không cần thiết (bạn không làm việc này cũng không sao).", pos: <Fragment>S + don't - doesn't have to + <FormatVerb text="Vo" /></Fragment>, neg: null, ex: [ { en: "You <strong class='text-amber-600'>don't have to pay</strong> immediately.", vn: "Bạn không cần phải thanh toán ngay lập tức." }, { en: "She <strong class='text-amber-600'>doesn't have to work</strong> on weekends.", vn: "Cô ấy không cần phải làm việc vào dịp cuối tuần." } ] }
            ];

            return (
                <section className="mb-14 relative z-20">
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white text-lg shrink-0 shadow-md">3</span>
                    Động Từ Khiếm Khuyết (Modal Verbs)
                    </h2>
                    <div className="mt-6 flex justify-center w-full pb-4">
                    <FormulaBox parts={["S", "+", "Modal Verb", "+", "Vo"]} color="amber" align="center" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {modals.map((m, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border-2 border-slate-100 hover:border-amber-400 shadow-sm transition-all duration-300 hover:shadow-md group flex flex-col">
                        <div className="text-2xl font-black text-amber-600 mb-2 group-hover:scale-105 transition-transform origin-left">{m.name}</div>
                        <div className="bg-amber-100/80 text-amber-900 px-3 py-1 inline-block rounded-lg font-bold text-sm mb-3 w-fit">{m.meaning}</div>
                        <p className="text-slate-600 text-sm mb-4 flex-1 leading-relaxed">{m.desc}</p>
                        
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 mb-4 font-mono text-sm shadow-inner overflow-x-auto hide-scrollbar">
                        <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
                            <span className="text-emerald-600 shrink-0 text-lg">👍</span> 
                            <span className="font-bold text-slate-700 min-w-max">{m.pos}</span>
                        </div>
                        {m.neg && (
                            <div className="flex items-center gap-2 flex-nowrap whitespace-nowrap">
                            <span className="text-rose-600 shrink-0 text-lg">👎</span> 
                            <span className="font-bold text-slate-700 min-w-max">{m.neg}</span>
                            </div>
                        )}
                        </div>
                        
                        <div className="pt-3 border-t border-slate-100 mt-auto">
                        {m.ex.map((example, idx) => (
                            <ClickableSentence key={idx} en={example.en} vn={example.vn} />
                        ))}
                        </div>
                    </div>
                    ))}
                </div>

                <MiniQuiz 
                    color="amber" num="1" title="Bài tập: Chọn ý nghĩa Modal Verbs" desc="Dịch nghĩa ngữ cảnh để chọn từ khuyên bảo, khả năng hay bắt buộc (7 câu)."
                    questions={[
                    { text: "You look really tired. You ________ go to bed early.", options: ["can", "should", "will"], correct: "should", exp: "Đưa ra lời khuyên (bạn trông mệt mỏi, bạn NÊN đi ngủ sớm)." },
                    { text: "All passengers ________ wear seatbelts during takeoff.", options: ["must", "can", "may"], correct: "must", exp: "Đây là quy định bắt buộc trên máy bay (hành khách PHẢI thắt dây an toàn)." },
                    { text: "Take an umbrella. It ________ rain heavily this afternoon.", options: ["should", "might", "must"], correct: "might", exp: "Chỉ một dự đoán, khả năng có thể xảy ra (có khả năng mưa, không chắc chắn 100%)." },
                    { text: "I ________ communicate in basic English confidently.", options: ["can", "must", "should"], correct: "can", exp: "Thể hiện năng lực của bản thân (tôi CÓ THỂ giao tiếp)." },
                    { text: "Tomorrow is Sunday, so I ________ wake up early.", options: ["don't have to", "mustn't", "shouldn't"], correct: "don't have to", exp: "Chủ nhật thì 'không cần thiết phải' dậy sớm. Dùng 'don't have to'." },
                    { text: "Applicants ________ submit their CVs before the deadline to be considered.", options: ["must", "may", "can"], correct: "must", exp: "Trong ngữ cảnh công việc/tuyển dụng, đây là luật lệ bắt buộc (PHẢI nộp trước hạn)." },
                    { text: "The economic situation ________ improve in the next quarter, but it remains uncertain.", options: ["may", "must", "should"], correct: "may", exp: "Vế sau 'remains uncertain' (vẫn chưa chắc chắn) chứng tỏ đây chỉ là khả năng thấp (may - có khả năng)." }
                    ]}
                />
                <MiniQuiz 
                    color="amber" num="2" title="Bài tập: Cấu trúc theo sau Modal" desc="Nhớ lại quy tắc bất di bất dịch của Modal Verb (7 câu)."
                    questions={[
                    { text: "She can ________ three languages fluently.", options: ["speaks", "speak", "to speak"], correct: "speak", exp: "Sau Modal Verb luôn cộng với Động từ nguyên mẫu (Vo), không thêm s/es." },
                    { text: "We shouldn't ________ time on this minor issue.", options: ["waste", "wasting", "to waste"], correct: "waste", exp: "Sau Modal Verb (kể cả thể phủ định) luôn cộng với Động từ nguyên mẫu (Vo)." },
                    { text: "He will ________ the financial report tomorrow.", options: ["finish", "finishes", "finished"], correct: "finish", exp: "Will + Vo. Luôn giữ nguyên động từ." },
                    { text: "They must ________ the new company rules strictly.", options: ["following", "to follow", "follow"], correct: "follow", exp: "Must + Vo. Cấm dùng 'to V'." },
                    { text: "You don't have to ________ early if you don't want to.", options: ["arrive", "arrived", "arriving"], correct: "arrive", exp: "have to + Vo. (Arrive giữ nguyên)." },
                    { text: "The government should ________ stricter environmental regulations.", options: ["implement", "implements", "implemented"], correct: "implement", exp: "Should + Vo. Không chia theo chủ ngữ số ít." },
                    { text: "Companies must not ________ customer data without explicit consent.", options: ["exploits", "exploit", "exploiting"], correct: "exploit", exp: "Must not + Vo. Hành động khai thác dữ liệu phải giữ nguyên nguyên mẫu." }
                    ]}
                />
                </section>
            );
        }

        function SectionPassiveVoice() {
            const passiveForms = [
                { tense: "Hiện tại đơn", tobe: "am - is - are", ex: { en: "The room <strong class='text-purple-600'>is cleaned</strong> every day.", vn: "Căn phòng được dọn dẹp mỗi ngày." } },
                { tense: "Quá khứ đơn", tobe: "was - were", ex: { en: "The house <strong class='text-purple-600'>was built</strong> in 1990.", vn: "Ngôi nhà được xây năm 1990." } },
                { tense: "Tương lai đơn", tobe: "will be", ex: { en: "The letter <strong class='text-purple-600'>will be sent</strong> tomorrow.", vn: "Bức thư sẽ được gửi vào ngày mai." } },
                { tense: "Can (Modal)", tobe: "can be", ex: { en: "English <strong class='text-purple-600'>can be learned</strong> easily.", vn: "Tiếng Anh có thể được học một cách dễ dàng." } },
                { tense: "Should (Modal)", tobe: "should be", ex: { en: "The work <strong class='text-purple-600'>should be finished</strong> today.", vn: "Công việc nên được hoàn thành hôm nay." } },
            ];

            return (
                <section className="mb-14 relative z-20">
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white text-lg shrink-0 shadow-md">4</span>
                    Câu Bị Động (Passive Voice)
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-slate-100 p-2 rounded-lg"><Activity className="text-slate-600" /></div>
                        <h3 className="font-bold text-lg">Chủ động (Active)</h3>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">Chủ ngữ là người hay vật <strong>tự tạo ra</strong> hành động.</p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center overflow-x-auto hide-scrollbar">
                        <p className="font-mono mb-2 whitespace-nowrap">S + V + O</p>
                        <ClickableSentence en="The cat <strong class='text-blue-600'>ate</strong> the fish." vn="Con mèo đã ăn con cá." />
                    </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200 shadow-sm relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div className="bg-purple-200 p-2 rounded-lg"><ArrowRight className="text-purple-700" /></div>
                        <h3 className="font-bold text-lg text-purple-900">Bị động (Passive)</h3>
                    </div>
                    <p className="text-purple-800/80 text-sm mb-4 relative z-10">Chủ ngữ là người hay vật <strong>chịu tác động</strong> của hành động.</p>
                    <div className="bg-white p-4 rounded-xl border border-purple-200 text-center relative z-10 shadow-sm overflow-x-auto hide-scrollbar">
                        <div className="mb-2 w-full flex justify-center">
                        <FormulaBox parts={["S", "+", "tobe", "+", "V3/ed"]} color="purple" align="center" />
                        </div>
                        <ClickableSentence en="The fish <strong class='text-purple-600'>was eaten</strong> by the cat." vn="Con cá đã bị ăn bởi con mèo." />
                    </div>
                    </div>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-3xl p-5 sm:p-8 shadow-md overflow-hidden relative">
                    <div className="text-center mb-8 bg-purple-50/50 -mx-8 -mt-8 p-8 border-b border-purple-100">
                    <h4 className="text-base sm:text-lg font-bold text-slate-500 mb-4 uppercase tracking-widest">Công thức gốc xuyên suốt</h4>
                    
                    <div className="w-full overflow-x-auto hide-scrollbar pb-3">
                        <div className="inline-flex flex-nowrap justify-center items-center gap-1.5 sm:gap-3 bg-white px-3 py-3 sm:px-6 sm:py-5 rounded-2xl border-2 border-purple-200 shadow-sm min-w-max mx-auto">
                        <div className="px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg border-2 shadow-sm shrink-0 whitespace-nowrap flex items-center justify-center tracking-wide leading-none bg-purple-100 text-purple-800 border-purple-200">S</div>
                        <span className="text-slate-300 font-black text-base sm:text-2xl shrink-0">+</span>
                        <div className="px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg border-2 shadow-sm shrink-0 whitespace-nowrap flex items-center justify-center tracking-wide leading-none bg-purple-100 text-purple-800 border-purple-200">tobe <span className="text-xs sm:text-sm font-semibold opacity-70 ml-1 sm:ml-2">(Chia theo thì)</span></div>
                        <span className="text-slate-300 font-black text-base sm:text-2xl shrink-0">+</span>
                        <div className="px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg border-2 shadow-sm shrink-0 whitespace-nowrap flex items-center justify-center tracking-wide leading-none bg-purple-100 text-purple-800 border-purple-200"><FormatVerb text="V3/ed" /></div>
                        </div>
                    </div>
                    <p className="text-sm text-purple-700 mt-2 font-medium max-w-lg mx-auto leading-relaxed">
                        Trong câu Bị động, <strong><FormatVerb text="V3/ed" /> luôn đứng yên</strong>. Ta chỉ thay đổi động từ <strong>tobe</strong> sao cho khớp với thì của câu.
                    </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {passiveForms.map((f, i) => (
                        <div key={i} className="bg-slate-50 hover:bg-purple-50 p-3 sm:p-4 rounded-xl border border-slate-200 transition-colors group">
                        <div className="flex flex-col gap-2.5">
                            <div className="flex items-center justify-between gap-2">
                                <div className="font-bold text-slate-700 text-sm sm:text-base group-hover:text-purple-700 transition-colors">
                                {f.tense}
                                </div>
                                <div className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm text-center border border-purple-200 shadow-sm relative overflow-hidden font-mono tracking-wide shrink-0">
                                <span className="relative z-10">{f.tobe}</span>
                                <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:animate-[slideRight_0.5s_ease-in-out]"></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg border border-slate-100 p-2.5 sm:p-3 shadow-sm flex items-center">
                            <ClickableSentence en={f.ex.en} vn={f.ex.vn} />
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                <MiniQuiz 
                    color="purple" num="1" title="Bài tập: Nhận diện Bị động" desc="Hãy xác định xem câu mang ý nghĩa Chủ động hay Bị động (7 câu)."
                    questions={[
                    { text: "The report ________ by the manager yesterday.", options: ["reviewed", "was reviewed"], correct: "was reviewed", exp: "Báo cáo không tự 'review' (nhận xét) được, nó BỊ nhận xét bởi quản lý." },
                    { text: "The company ________ a new product next month.", options: ["will launch", "will be launched"], correct: "will launch", exp: "Công ty CHỦ ĐỘNG tung ra sản phẩm mới, không phải bị tung ra." },
                    { text: "My car ________ every week.", options: ["washes", "is washed"], correct: "is washed", exp: "Xe hơi BỊ/ĐƯỢC rửa (bởi con người), không tự rửa." },
                    { text: "They ________ the house in 1990.", options: ["built", "were built"], correct: "built", exp: "Chủ ngữ 'Họ' là người tự thực hiện hành động xây dựng (Chủ động)." },
                    { text: "English ________ all over the world.", options: ["speaks", "is spoken"], correct: "is spoken", exp: "Tiếng Anh ĐƯỢC nói trên toàn thế giới." },
                    { text: "The new policy ________ to reduce greenhouse gas emissions.", options: ["designed", "was designed"], correct: "was designed", exp: "Chính sách ĐƯỢC thiết kế để giảm khí thải (Bị động)." },
                    { text: "The results of the study ________ in a reputable journal.", options: ["will publish", "will be published"], correct: "will be published", exp: "Kết quả nghiên cứu SẼ ĐƯỢC xuất bản. Chủ thể tiếp nhận hành động." }
                    ]}
                />
                <MiniQuiz 
                    color="purple" num="2" title="Bài tập: Cấu trúc gốc Bị động" desc="Điền phần còn thiếu vào công thức Bị động (7 câu)."
                    questions={[
                    { text: "Trong câu bị động, động từ luôn ở dạng: tobe + ________", options: ["Vo", "Ving", "V3/ed"], correct: "V3/ed", exp: "Quy tắc vàng của bị động là động từ chính luôn ở Cột 3 hoặc thêm -ed." },
                    { text: "The room is ________ every day.", options: ["clean", "cleaned", "cleaning"], correct: "cleaned", exp: "Dựa vào công thức 'tobe + V3/ed', ta chọn 'cleaned'." },
                    { text: "The letter will be ________ tomorrow.", options: ["send", "sending", "sent"], correct: "sent", exp: "'Sent' là V3 (bất quy tắc) của động từ 'send'." },
                    { text: "This machine can be ________ easily.", options: ["operate", "operated", "operating"], correct: "operated", exp: "Câu bị động với Modal Verb (can be + V3/ed)." },
                    { text: "Mistakes should be ________ immediately.", options: ["correct", "correcting", "corrected"], correct: "corrected", exp: "Bị động với Should (should be + V3/ed)." },
                    { text: "The budget proposal must be ________ by the board of directors.", options: ["approve", "approved", "approving"], correct: "approved", exp: "Must be + V3/ed (đề xuất ngân sách phải ĐƯỢC phê duyệt)." },
                    { text: "The ancient artifacts were carefully ________ by the archaeologists.", options: ["preserve", "preserved", "preserving"], correct: "preserved", exp: "tobe ở quá khứ (were) + trạng từ + V3/ed (được bảo tồn cẩn thận)." }
                    ]}
                />
                </section>
            );
        }