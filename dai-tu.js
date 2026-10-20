const SectionTheoryDaiTu = () => {
    const [revealedRows, setRevealedRows] = useState(new Set());
    const toggleRow = (index) => {
        const newSet = new Set(revealedRows);
        if (newSet.has(index)) newSet.delete(index); else newSet.add(index);
        setRevealedRows(newSet);
    };
    const renderCell = (idx, vi, sub, obj) => {
        const isRev = revealedRows.has(idx);
        return (
        <>
            <td className="border border-slate-200 p-2 sm:p-4 text-center font-semibold cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-all duration-200" onClick={() => toggleRow(idx)} title="Bấm để xem/ẩn tiếng Anh">{vi}</td>
            <td className={`border border-slate-200 p-2 sm:p-4 text-center font-bold text-blue-600 text-sm sm:text-lg transition-opacity duration-300 ${isRev ? 'opacity-100' : 'opacity-0'}`}>{isRev ? sub : '???'}</td>
            <td className={`border border-slate-200 p-2 sm:p-4 text-center font-bold text-rose-600 text-sm sm:text-lg transition-opacity duration-300 ${isRev ? 'opacity-100' : 'opacity-0'}`}>{isRev ? obj : '???'}</td>
        </>
        );
    };

    return (
        <>
        <section className="mb-10 sm:mb-14">
            <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white text-sm sm:text-base shrink-0 shadow-md">1</span> Đại từ là gì?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">Đại từ dùng để <strong className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">thay thế danh từ</strong>, nhằm tránh lặp lại danh từ đó. Đại từ đóng vai trò <strong className="text-blue-600">chủ ngữ</strong> và <strong className="text-rose-600">tân ngữ</strong>.</p>
            </div>
            <div className="bg-blue-50/60 border border-blue-200 text-blue-800 p-3 sm:p-4 rounded-xl mb-5 flex items-start gap-3 shadow-sm animate-pop">
                <div className="mt-0.5 text-blue-600"><IconInfo size={20} /></div>
                <div>
                    <strong className="block mb-0.5 font-bold text-sm sm:text-base">Hướng dẫn tương tác:</strong>
                    <p className="text-sm">Bấm vào các từ ở cột <strong>"Nghĩa"</strong> để hiển thị đại từ tiếng Anh tương ứng.</p>
                </div>
            </div>
            <div className="bg-white p-1 sm:p-2 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full text-xs sm:text-base text-left border-collapse">
                <thead className="bg-slate-50 text-slate-700 uppercase tracking-wider text-[11px] sm:text-sm">
                <tr>
                    <th className="border border-slate-200 p-2 sm:p-4 text-center w-1/4 font-bold">NGÔI</th>
                    <th className="border border-slate-200 p-2 sm:p-4 text-center w-1/4 font-bold">NGHĨA</th>
                    <th className="border border-slate-200 p-2 sm:p-4 text-center w-1/4 font-bold">CHỦ NGỮ <div className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 normal-case tracking-normal">(trước V)</div></th>
                    <th className="border border-slate-200 p-2 sm:p-4 text-center w-1/4 font-bold">TÂN NGỮ <div className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 normal-case tracking-normal">(sau V)</div></th>
                </tr>
                </thead>
                <tbody className="text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                    <td rowSpan={2} className="border border-slate-200 p-2 sm:p-4 text-center align-middle bg-slate-50/50"><span className="font-bold text-slate-800 text-xs sm:text-base">Ngôi 1</span><br/><span className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 block">(Người nói)</span></td>
                    {renderCell(0, "Tôi", "I", "me")}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">{renderCell(1, "Chúng tôi, tụi tui", "We", "us")}</tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="border border-slate-200 p-2 sm:p-4 text-center align-middle bg-slate-50/50"><span className="font-bold text-slate-800 text-xs sm:text-base">Ngôi 2</span><br/><span className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 block">(Người nghe)</span></td>
                    {renderCell(2, "Bạn, các bạn, các em", "You", "you")}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                    <td rowSpan={4} className="border border-slate-200 p-2 sm:p-4 text-center align-middle bg-slate-50/50"><span className="font-bold text-slate-800 text-xs sm:text-base">Ngôi 3</span><br/><span className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5 sm:mt-1 block">(Được nhắc đến)</span></td>
                    {renderCell(3, "Anh ta, ông ấy, ổng", "He", "him")}
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">{renderCell(4, "Cô ta, bà ấy, bả", "She", "her")}</tr>
                <tr className="hover:bg-slate-50/80 transition-colors">{renderCell(5, "Nó, chuyện đó", "It", "it")}</tr>
                <tr className="hover:bg-slate-50/80 transition-colors">{renderCell(6, "Bọn họ, tụi nó, đám đó", "They", "them")}</tr>
                </tbody>
            </table>
            </div>
        </section>

        <section className="mb-10 sm:mb-14">
            <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-500 text-white text-sm sm:text-base shrink-0 shadow-md">!</span> Các Đại Từ Dễ Bị Hiểu Lầm
            </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm relative flex group hover:border-indigo-300 transition-colors overflow-hidden">
                <div className="w-1.5 bg-indigo-500 shrink-0"></div>
                <div className="p-5 sm:p-6 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-indigo-700 mb-3">1. Đại từ "They" và "Them"</h3>
                <p className="text-slate-700 mb-4 text-sm sm:text-base">Thay thế cho <strong className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">tất cả</strong> các <span className="text-indigo-600 font-semibold border-b border-indigo-300 border-dashed pb-0.5">danh từ đếm được số nhiều</span>, chứ không phải chỉ có danh từ chỉ người.</p>
                
                <div className="border border-slate-100 rounded-xl mt-3 flex flex-col divide-y divide-slate-100 bg-slate-50/30">
                    <div className="py-4 px-4 sm:px-5 space-y-2">
                    <ClickableSentence en="The students are in class. &rarr; <strong class='text-indigo-600'>They</strong> are in class." vn="Học sinh đang ở trong lớp. &rarr; Họ đang ở trong lớp." />
                    <ClickableSentence en="The teacher is talking to <strong class='text-indigo-600'>them</strong>." vn="Giáo viên đang nói chuyện với họ." />
                    </div>
                    <div className="py-4 px-4 sm:px-5 space-y-2">
                    <div className="text-slate-400 font-bold mb-2 text-[10px] sm:text-xs uppercase tracking-widest">Thay thế cho vật số nhiều:</div>
                    <ClickableSentence en="The keys are on the table. &rarr; <strong class='text-indigo-600'>They</strong> are on the table." vn="Những chiếc chìa khóa ở trên bàn. &rarr; Chúng ở trên bàn." />
                    <ClickableSentence en="I can't find <strong class='text-indigo-600'>them</strong>." vn="Tôi không thể tìm thấy chúng." />
                    </div>
                    <div className="py-4 px-4 sm:px-5 space-y-2">
                    <div className="text-slate-400 font-bold mb-2 text-[10px] sm:text-xs uppercase tracking-widest">Thay thế cho ý tưởng / trừu tượng số nhiều:</div>
                    <ClickableSentence en="These ideas are interesting. &rarr; <strong class='text-indigo-600'>They</strong> are interesting." vn="Những ý tưởng này thật thú vị. &rarr; Chúng thật thú vị." />
                    <ClickableSentence en="Let's discuss <strong class='text-indigo-600'>them</strong> later." vn="Hãy thảo luận về chúng sau." />
                    </div>
                </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm relative flex group hover:border-emerald-300 transition-colors overflow-hidden">
                <div className="w-1.5 bg-emerald-500 shrink-0"></div>
                <div className="p-5 sm:p-6 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-700 mb-3">2. Đại từ "It"</h3>
                <p className="text-slate-700 mb-4 text-sm sm:text-base">Thay thế cho <strong className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded">tất cả</strong> các <span className="text-emerald-600 font-semibold border-b border-emerald-300 border-dashed pb-0.5">danh từ đếm được số ít</span>, ngoại trừ danh từ chỉ người. Nó cũng dùng để thay thế cho Danh động từ (V-ing).</p>
                
                <div className="border border-slate-100 rounded-xl mt-3 flex flex-col divide-y divide-slate-100 bg-slate-50/30">
                    <div className="py-4 px-4 sm:px-5"><ClickableSentence en="I bought a phone, and <strong class='text-emerald-600'>it</strong> is very expensive." vn="Tôi đã mua một chiếc điện thoại, và nó rất đắt." /></div>
                    <div className="py-4 px-4 sm:px-5"><ClickableSentence en="The information is useful &rarr; <strong class='text-emerald-600'>It</strong> is useful." vn="Thông tin thì hữu ích &rarr; Nó thì hữu ích." /></div>
                    <div className="py-4 px-4 sm:px-5"><ClickableSentence en="Swimming is fun &rarr; <strong class='text-emerald-600'>It</strong> is fun." vn="Bơi lội thì vui &rarr; Nó thì vui." /></div>
                    <div className="py-4 px-4 sm:px-5"><ClickableSentence en="Learning English takes time &rarr; <strong class='text-emerald-600'>It</strong> takes time." vn="Việc học tiếng Anh cần thời gian &rarr; Nó cần thời gian." /></div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};

const DAITU_Q1 = [
    { id: 1, text: "_____ want to buy a new car.", options: ["I", "Me"], correct: "I" },
    { id: 2, text: "The teacher asked _____ to answer the question.", options: ["we", "us"], correct: "us" },
    { id: 3, text: "Mary and John are my friends. I often play with _____.", options: ["they", "them"], correct: "them" },
    { id: 4, text: "_____ is a beautiful dog.", options: ["It", "Its"], correct: "It" },
    { id: 5, text: "Please give _____ that book.", options: ["she", "her"], correct: "her" },
];

const DAITU_Q2 = [
    { id: 1, text: 'Học sinh thưa thầy: "Dạ, [tụi em] đã làm xong bài tập rồi ạ."', correct: ["we"] },
    { id: 2, text: 'Nói về nhóm bạn đang chơi ngoài sân: "Anh thấy [bọn chúng] đang đá bóng không?"', correct: ["them"] },
    { id: 3, text: 'Sếp nói với nhân viên: "[Các em] cố gắng hoàn thành deadline nhé."', correct: ["you"] },
    { id: 4, text: 'Kể về chiếc xe máy mới mua: "Tôi rất thích [nó], đi rất êm."', correct: ["it"] },
    { id: 5, text: 'Nói về những đôi giày: "Tôi có 3 đôi, và [tụi nó] đều là màu đen."', correct: ["they"] },
    { id: 6, text: 'Kể về ông sếp khó tính: "[Ổng] lúc nào cũng nhăn nhó."', correct: ["he"] },
    { id: 7, text: 'Chỉ vào bà hàng xóm: "[Bả] mới mua xe mới kìa."', correct: ["she"] },
    { id: 8, text: 'Nói về một sự kiện bất ngờ: "[Chuyện đó] làm tôi sốc quá."', correct: ["it"] }
];

const SectionPracticeDaiTu = () => {
    const [ans1, setAns1] = useState({});
    const [showRes1, setShowRes1] = useState(false);

    const [ans2, setAns2] = useState({});
    const [showRes2, setShowRes2] = useState(false);

    return (
        <section className="mb-10 sm:mb-14">
        <div className="mb-6"><h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white text-sm sm:text-base shrink-0 shadow-md">3</span> Bài tập thực hành</h2></div>

        {/* Bài tập 1 */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sm:mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-2">A. Vị trí Chủ ngữ & Tân ngữ</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {DAITU_Q1.map((q) => (
                <div key={q.id} className="p-3 sm:p-4 bg-slate-50/70 hover:bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row md:items-center gap-3 transition-colors">
                <div className="flex-1 text-sm sm:text-base font-medium text-slate-700"><span className="text-slate-400 mr-2">{q.id}.</span> {q.text.replace("_____", "______")}</div>
                <div className="flex gap-2 items-center">
                    {q.options.map(opt => {
                        const isSelected = ans1[q.id] === opt; const isCorrect = showRes1 && opt === q.correct; const isWrong = showRes1 && isSelected && opt !== q.correct;
                        let btnClass = "px-5 py-2 rounded-lg text-sm font-bold border transition-all duration-200 ";
                        if (!showRes1) btnClass += isSelected ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-white text-slate-600 border-slate-300 hover:border-blue-400 hover:text-blue-600";
                        else if (isCorrect) btnClass += "bg-emerald-100 text-emerald-700 border-emerald-400 font-extrabold";
                        else if (isWrong) btnClass += "bg-red-100 text-red-700 border-red-400";
                        else btnClass += "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed";
                        return <button key={opt} onClick={() => { if(!showRes1) setAns1({...ans1, [q.id]: opt}) }} className={btnClass}>{opt}</button>;
                    })}
                    {showRes1 && <div className="w-8 flex justify-center shrink-0">{ans1[q.id] === q.correct ? <span className="text-emerald-500 font-bold text-lg">✓</span> : <span className="text-red-500 font-bold text-lg">✗</span>}</div>}
                </div>
                </div>
            ))}
            </div>
            <div className="mt-5 flex gap-3">
            {!showRes1 ? <button onClick={() => setShowRes1(true)} disabled={Object.keys(ans1).length < DAITU_Q1.length} className="px-5 py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-900 disabled:bg-slate-300 transition-colors">Kiểm tra Phần A</button>
            : <button onClick={() => { setAns1({}); setShowRes1(false); }} className="px-5 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 border border-slate-200">Làm lại</button>}
            </div>
        </div>

        {/* Bài tập 2 */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6 sm:mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-2">B. "Dịch" đại từ đời thường</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
            {DAITU_Q2.map((ctx) => {
                const parts = ctx.text.split(/\[(.*?)\]/);
                const userAnsClean = (ans2[ctx.id] || "").toLowerCase().trim();
                const isCorrect = ctx.correct.includes(userAnsClean);
                const isErr = ans2[`err_${ctx.id}`] === true; // trạng thái lỗi cục bộ

                return (
                <div key={ctx.id} className="p-3 sm:p-4 bg-orange-50/50 hover:bg-orange-50 border border-orange-100 rounded-xl flex flex-col md:flex-row md:items-center gap-3 transition-colors">
                    <div className="flex-1 text-sm sm:text-base text-slate-700 leading-relaxed"><span className="text-orange-300 font-bold mr-2">{ctx.id}.</span>{parts[0]}<span className="font-bold text-orange-700 bg-orange-100 border border-orange-200 px-1.5 py-0.5 mx-1 rounded">{parts[1]}</span>{parts[2]}</div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <input 
                            type="text" 
                            className={`flex-1 md:flex-none md:w-32 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl border-2 text-base font-bold outline-none text-center transition-all ${
                                isCorrect || (showRes2 && isCorrect) 
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm' 
                                : isErr || (showRes2 && !isCorrect) 
                                ? 'border-red-500 bg-red-50 text-red-700 shadow-sm animate-shake' 
                                : 'border-orange-200 focus:border-orange-400 bg-white text-slate-800 focus:shadow-md'
                            }`} 
                            value={ans2[ctx.id] || ""} 
                            onChange={(e) => { 
                                if(!showRes2) setAns2({...ans2, [ctx.id]: e.target.value, [`err_${ctx.id}`]: false}) 
                            }} 
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !showRes2) {
                                    const clean = (ans2[ctx.id] || "").toLowerCase().trim();
                                    if (!ctx.correct.includes(clean) && clean !== '') {
                                        setAns2(prev => ({...prev, [`err_${ctx.id}`]: true}));
                                        setTimeout(() => setAns2(prev => ({...prev, [`err_${ctx.id}`]: false})), 500);
                                    }
                                }
                            }}
                            disabled={showRes2 || isCorrect} 
                            placeholder="" 
                        />
                        {(showRes2 || isCorrect) && <div className="shrink-0 w-24 text-sm">{isCorrect ? <span className="text-emerald-600 font-bold flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-md"><IconCheck size={16}/> Đúng</span> : <span className="text-red-600 font-bold bg-red-100 px-2 py-1 rounded-md flex items-center gap-1.5"><IconX size={16}/> {ctx.correct[0]}</span>}</div>}
                    </div>
                </div>
                );
            })}
            </div>
            <div className="mt-5 flex gap-3">
            {!showRes2 ? <button onClick={() => setShowRes2(true)} className="px-5 py-2 bg-slate-800 text-white rounded-xl text-sm font-semibold hover:bg-slate-900 transition-colors">Kiểm tra Phần B</button>
            : <button onClick={() => { setAns2({}); setShowRes2(false); }} className="px-5 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-200 border border-slate-200">Làm lại</button>}
            </div>
        </div>

        {/* Bài tập 3 - VSTEP */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4"><h3 className="text-lg font-bold text-slate-800">C. Ứng dụng VSTEP ESSAY</h3></div>
            <div className="p-5 sm:p-6 bg-white border border-slate-100 rounded-2xl font-serif text-base sm:text-[17px] leading-[2] text-slate-700 shadow-sm text-justify">
            <p className="indent-6 sm:indent-8 m-0">
                On the one hand, online shopping has many benefits. One advantage is that <InlinePronounInput expected="it" vietnamese="việc mua sắm trực tuyến" /> is very convenient. 
                People can buy things anytime and anywhere without leaving their homes, which is very helpful for those who are busy with work or study. 
                As a result, <InlinePronounInput expected="they" vietnamese="những người này" /> can save time and use <InlinePronounInput expected="it" vietnamese="thời gian" /> for other activities. 
                For example, a worker can shop in the evening instead of going to crowded stores. 
                Another advantage is that online shopping gives people more choices. Customers can look at many products from different shops and compare prices easily. 
                In addition, <InlinePronounInput expected="they" vietnamese="họ" /> can read reviews from other buyers before making a decision. 
                Therefore, <InlinePronounInput expected="they" vietnamese="họ" /> are more likely to choose suitable products at affordable prices.
            </p>
            </div>
        </div>
        </section>
    );
};

const DAITU_GAME1_PAIRS = [
    { pairId: 1, text: "Tôi (Chủ ngữ)", match: "I" }, { pairId: 2, text: "Tôi (Tân ngữ)", match: "me" },
    { pairId: 3, text: "Bọn họ (Chủ ngữ)", match: "They" }, { pairId: 4, text: "Bọn họ (Tân ngữ)", match: "them" },
    { pairId: 5, text: "Nó (Chủ/Tân ngữ)", match: "it" }, { pairId: 6, text: "Cô ấy (Tân ngữ)", match: "her" },
    { pairId: 7, text: "Chúng tôi (Chủ ngữ)", match: "We" }, { pairId: 8, text: "Chúng tôi (Tân ngữ)", match: "us" },
];

const DAITU_FAST_QUESTIONS = [
    { noun: "The cats", correct: "They", options: ["It", "They", "Them", "We"] }, { noun: "My father", correct: "He", options: ["She", "Him", "He", "It"] },
    { noun: "Water", correct: "It", options: ["They", "She", "It", "We"] }, { noun: "Those ideas", correct: "They", options: ["It", "Them", "They", "He"] },
    { noun: "(to) My parents", correct: "them", options: ["they", "them", "us", "him"] }, { noun: "You and I", correct: "We", options: ["They", "Us", "We", "You"] },
];

const SectionGamesDaiTu = () => {
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [moves, setMoves] = useState(0);

    useEffect(() => { initG1(); }, []);
    const initG1 = () => {
        let initialCards = [];
        DAITU_GAME1_PAIRS.forEach(p => { initialCards.push({ id: `vi-${p.pairId}`, pairId: p.pairId, text: p.text, type: 'vi' }); initialCards.push({ id: `en-${p.pairId}`, pairId: p.pairId, text: p.match, type: 'en' }); });
        setCards(initialCards.sort(() => Math.random() - 0.5));
        setFlippedIndices([]); setMatchedPairs([]); setMoves(0);
    };

    const handleCardClick = (index) => {
        if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedPairs.includes(cards[index].pairId)) return;
        const newFlipped = [...flippedIndices, index]; setFlippedIndices(newFlipped);
        if (newFlipped.length === 2) {
            setMoves(m => m + 1);
            const [f, s] = [cards[newFlipped[0]], cards[newFlipped[1]]];
            if (f.pairId === s.pairId && f.type !== s.type) { setMatchedPairs(prev => [...prev, f.pairId]); setFlippedIndices([]); } 
            else { setTimeout(() => { setFlippedIndices([]); }, 1000); }
        }
    };

    const [g2Q, setG2Q] = useState(0); const [g2Score, setG2Score] = useState(0); const [g2State, setG2State] = useState('start'); const [g2Feedback, setG2Feedback] = useState(null);

    const startG2 = () => { setG2Q(0); setG2Score(0); setG2State('playing'); setG2Feedback(null); };
    const answerG2 = (opt) => {
        if (g2Feedback) return;
        const isCorrect = opt === DAITU_FAST_QUESTIONS[g2Q].correct; setG2Feedback(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) setG2Score(s => s + 1);
        setTimeout(() => { if (g2Q < DAITU_FAST_QUESTIONS.length - 1) { setG2Q(c => c + 1); setG2Feedback(null); } else { setG2State('end'); } }, 800);
    };

    return (
        <section className="mb-10 sm:mb-14">
        <div className="mb-6"><h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white text-sm sm:text-base shrink-0 shadow-md">4</span> Mini-Games Ôn Tập</h2></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Game 1 */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">🧩 Lật Thẻ Trí Nhớ</h3>
                <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">Lượt lật: <span className="text-blue-600">{moves}</span></span>
                <button onClick={initG1} className="text-slate-500 hover:text-blue-600 hover:bg-blue-50 bg-slate-100 p-2 rounded-lg transition-colors border border-slate-200" title="Chơi lại"><IconRefresh size={16} /></button>
                </div>
            </div>
            {matchedPairs.length === DAITU_GAME1_PAIRS.length ? (
                <div className="flex-1 flex flex-col items-center justify-center animate-pop py-10">
                <div className="text-6xl mb-4">🏆</div><h4 className="text-2xl font-bold text-emerald-600 mb-2">Trí nhớ tuyệt đỉnh!</h4>
                <p className="text-slate-500 text-base">Bạn đã hoàn thành sau {moves} lượt lật thẻ.</p>
                </div>
            ) : (
                <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-3">
                {cards.map((card, index) => {
                    const isFlipped = flippedIndices.includes(index) || matchedPairs.includes(card.pairId); const isMatched = matchedPairs.includes(card.pairId);
                    return (
                    <button key={card.id} onClick={() => handleCardClick(index)} disabled={isFlipped}
                        className={`w-full aspect-[4/3] rounded-xl font-bold text-[11px] sm:text-sm transition-all duration-300 flex items-center justify-center p-1 sm:p-2 text-center border-2 ${
                        isMatched ? 'bg-emerald-50 border-emerald-200 text-emerald-600 opacity-50 cursor-default shadow-none scale-95' :
                        isFlipped ? (card.type === 'vi' ? 'bg-indigo-50 border-indigo-300 text-indigo-700 shadow-inner' : 'bg-rose-50 border-rose-300 text-rose-700 shadow-inner') : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:-translate-y-1'}`}>
                        {isFlipped ? card.text : <span className="text-2xl sm:text-3xl opacity-30 font-medium">?</span>}
                    </button>
                    );
                })}
                </div>
            )}
            </div>
            {/* Game 2 */}
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-700"><IconGamepad size={160} /></div>
            <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500"></div>
            <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-bold text-white text-lg mb-2">⚡ Phản Xạ Đại Từ</h3>
                {g2State === 'start' && <div className="flex-1 flex flex-col items-center justify-center py-8"><button onClick={startG2} className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-base font-bold px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.3)]">BẮT ĐẦU NGAY</button></div>}
                {g2State === 'playing' && (
                <div className="flex-1 flex flex-col justify-center animate-pop">
                    <div className="flex justify-between items-center mb-6 text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider"><span>Câu: {g2Q + 1}/{DAITU_FAST_QUESTIONS.length}</span><span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">Điểm: <span className="text-amber-400">{g2Score}</span></span></div>
                    <div className="text-center mb-10"><p className="text-slate-400 mb-2 text-xs sm:text-sm">Thay thế cho</p><div className={`text-4xl sm:text-5xl font-extrabold transition-all duration-300 ${g2Feedback === 'correct' ? 'text-emerald-400 scale-110' : g2Feedback === 'wrong' ? 'text-rose-400 animate-shake' : 'text-white'}`}>"{DAITU_FAST_QUESTIONS[g2Q].noun}"</div></div>
                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto w-full">
                    {DAITU_FAST_QUESTIONS[g2Q].options.map((opt, i) => {
                        let btnClass = "py-3.5 text-lg font-bold rounded-xl border-b-4 transition-all ";
                        if (g2Feedback) btnClass += opt === DAITU_FAST_QUESTIONS[g2Q].correct ? "bg-emerald-500 border-emerald-700 text-white" : "bg-slate-800 border-slate-900 text-slate-600 opacity-50";
                        else btnClass += "bg-slate-700 border-slate-800 text-slate-200 hover:bg-amber-500 hover:border-amber-700 hover:text-slate-900 active:translate-y-1 active:border-b-0";
                        return <button key={i} onClick={() => answerG2(opt)} disabled={g2Feedback !== null} className={btnClass}>{opt}</button>;
                    })}
                    </div>
                </div>
                )}
                {g2State === 'end' && <div className="flex-1 flex flex-col items-center justify-center py-6 animate-pop"><h4 className="text-3xl font-bold text-white mb-2">Hoàn thành!</h4><p className="text-lg text-slate-300 mb-8">Điểm của bạn: <strong className="text-amber-400 text-4xl ml-2">{g2Score}</strong> / {DAITU_FAST_QUESTIONS.length}</p><button onClick={startG2} className="bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white font-bold px-8 py-3 rounded-xl transition-colors">Chơi lại</button></div>}
            </div>
            </div>
        </div>
        </section>
    );
};

const LessonDaiTu = () => (
    <div className="animate-pop">
        <div className="mb-8 sm:mb-12 border-l-4 border-blue-600 pl-4 sm:pl-5">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Đại Từ (Pronouns)</h1>
            <p className="text-base sm:text-lg text-slate-500 mt-2 font-medium">Học cách thay thế danh từ để câu văn gọn gàng, tự nhiên hơn và tránh lặp từ.</p>
        </div>
        <SectionTheoryDaiTu />
        <SectionPracticeDaiTu />
        <SectionGamesDaiTu />
    </div>
);