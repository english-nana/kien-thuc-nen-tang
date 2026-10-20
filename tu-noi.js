const TU_NOI_COLORS = {
    sky: {
        panel: "bg-sky-50 border-sky-200",
        chip: "bg-sky-100 text-sky-800 border-sky-200",
        active: "bg-sky-600 text-white border-sky-600 shadow-md",
        text: "text-sky-700",
        soft: "bg-sky-500"
    },
    emerald: {
        panel: "bg-emerald-50 border-emerald-200",
        chip: "bg-emerald-100 text-emerald-800 border-emerald-200",
        active: "bg-emerald-600 text-white border-emerald-600 shadow-md",
        text: "text-emerald-700",
        soft: "bg-emerald-500"
    },
    rose: {
        panel: "bg-rose-50 border-rose-200",
        chip: "bg-rose-100 text-rose-800 border-rose-200",
        active: "bg-rose-600 text-white border-rose-600 shadow-md",
        text: "text-rose-700",
        soft: "bg-rose-500"
    },
    amber: {
        panel: "bg-amber-50 border-amber-200",
        chip: "bg-amber-100 text-amber-800 border-amber-200",
        active: "bg-amber-500 text-white border-amber-500 shadow-md",
        text: "text-amber-700",
        soft: "bg-amber-500"
    },
    violet: {
        panel: "bg-violet-50 border-violet-200",
        chip: "bg-violet-100 text-violet-800 border-violet-200",
        active: "bg-violet-600 text-white border-violet-600 shadow-md",
        text: "text-violet-700",
        soft: "bg-violet-500"
    },
    slate: {
        panel: "bg-slate-50 border-slate-200",
        chip: "bg-slate-100 text-slate-700 border-slate-200",
        active: "bg-slate-900 text-white border-slate-900 shadow-md",
        text: "text-slate-700",
        soft: "bg-slate-700"
    }
};

const TU_NOI_COORDINATING = [
    {
        id: "and",
        word: "and",
        ipa: "/ænd/",
        meaning: "và",
        color: "emerald",
        job: "Dùng để thêm thông tin",
        pattern: "A and B",
        examples: [
            {
                en: "She bought a new laptop <span class='font-bold text-emerald-700'>and</span> started learning graphic design online.",
                vn: "Cô ấy mua laptop mới và bắt đầu học thiết kế đồ họa."
            },
            {
                en: "I finished my homework <span class='font-bold text-emerald-700'>and</span> helped my younger brother with his project.",
                vn: "Tôi làm xong bài tập và giúp em trai làm dự án."
            },
            {
                en: "He works full-time <span class='font-bold text-emerald-700'>and</span> studies English in the evening.",
                vn: "Anh ấy làm việc toàn thời gian và học tiếng Anh buổi tối."
            }
        ]
    },
    {
        id: "but",
        word: "but",
        ipa: "/bʌt/",
        meaning: "nhưng",
        color: "rose",
        job: "Dùng để diễn tả sự tương phản",
        pattern: "A, but B",
        examples: [
            {
                en: "I wanted to go out, <span class='font-bold text-rose-700'>but</span> it started raining heavily.",
                vn: "Tôi muốn ra ngoài nhưng trời mưa to."
            },
            {
                en: "She studied very hard, <span class='font-bold text-rose-700'>but</span> she didn't pass the exam.",
                vn: "Cô ấy học rất chăm nhưng không đậu."
            },
            {
                en: "He is very friendly, <span class='font-bold text-rose-700'>but</span> sometimes he can be quite impatient.",
                vn: "Anh ấy thân thiện nhưng đôi khi thiếu kiên nhẫn."
            }
        ]
    },
    {
        id: "or",
        word: "or",
        ipa: "/ɔːr/",
        meaning: "hoặc",
        color: "sky",
        job: "Dùng để đưa ra lựa chọn",
        pattern: "A or B",
        examples: [
            {
                en: "You can take the bus <span class='font-bold text-sky-700'>or</span> walk to school if the weather is nice.",
                vn: "Bạn có thể đi xe buýt hoặc đi bộ nếu trời đẹp."
            },
            {
                en: "Would you like to watch a movie <span class='font-bold text-sky-700'>or</span> go out for dinner tonight?",
                vn: "Bạn muốn xem phim hay đi ăn tối?"
            },
            {
                en: "We can study now <span class='font-bold text-sky-700'>or</span> leave it until tomorrow morning.",
                vn: "Chúng ta học bây giờ hoặc để sáng mai."
            }
        ]
    },
    {
        id: "so",
        word: "so",
        ipa: "/soʊ/",
        meaning: "vì vậy",
        color: "amber",
        job: "Dùng để chỉ kết quả",
        pattern: "A, so B",
        examples: [
            {
                en: "I forgot to set my alarm, <span class='font-bold text-amber-700'>so</span> I woke up late this morning.",
                vn: "Tôi quên đặt báo thức nên dậy muộn."
            },
            {
                en: "She didn't feel well, <span class='font-bold text-amber-700'>so</span> she decided to stay at home.",
                vn: "Cô ấy không khỏe nên ở nhà."
            },
            {
                en: "The traffic was terrible, <span class='font-bold text-amber-700'>so</span> we arrived at the meeting late.",
                vn: "Giao thông tệ nên chúng tôi đến muộn."
            }
        ]
    }
];

const TU_NOI_SUBORDINATING = [
    {
        id: "cause",
        title: "Nguyên nhân",
        hint: "because / since / as",
        color: "amber",
        connectors: [
            {
                word: "Because",
                ipa: "/bɪˈkɔːz/",
                meaning: "bởi vì",
                examples: [
                    { en: "I stayed at home <strong>because</strong> I had a lot of work to finish.", vn: "Tôi ở nhà vì có rất nhiều việc phải hoàn thành." },
                    { en: "She was nervous <strong>because</strong> it was her first presentation.", vn: "Cô ấy lo lắng vì đó là bài thuyết trình đầu tiên của cô ấy." },
                    { en: "They canceled the trip <strong>because</strong> the weather was too bad.", vn: "Họ hủy chuyến đi vì thời tiết quá xấu." }
                ]
            },
            {
                word: "Since",
                ipa: "/sɪns/",
                meaning: "vì / kể từ khi",
                examples: [
                    { en: "I have been busy <strong>since</strong> I started my new job.", vn: "Tôi bận kể từ khi bắt đầu công việc mới." },
                    { en: "<strong>Since</strong> it's already late, we should go home now.", vn: "Vì đã muộn rồi, chúng ta nên về nhà ngay." },
                    { en: "She has improved a lot <strong>since</strong> she joined the English club.", vn: "Cô ấy tiến bộ rất nhiều kể từ khi tham gia câu lạc bộ tiếng Anh." }
                ]
            },
            {
                word: "As",
                ipa: "/æz/",
                meaning: "vì / khi",
                examples: [
                    { en: "<strong>As</strong> I was tired, I went to bed early.", vn: "Vì tôi mệt, tôi đi ngủ sớm." },
                    { en: "He didn't come to class <strong>as</strong> he was feeling sick.", vn: "Anh ấy không đến lớp vì thấy không khỏe." },
                    { en: "<strong>As</strong> we didn't have enough time, we skipped that part.", vn: "Vì không có đủ thời gian, chúng tôi bỏ qua phần đó." }
                ]
            }
        ]
    },
    {
        id: "time",
        title: "Thời gian",
        hint: "when / while / before / after / as soon as",
        color: "sky",
        connectors: [
            {
                word: "When",
                ipa: "/wen/",
                meaning: "khi",
                examples: [
                    { en: "I was watching TV <strong>when</strong> she called me.", vn: "Tôi đang xem TV khi cô ấy gọi cho tôi." },
                    { en: "<strong>When</strong> I was a child, I often played in this park.", vn: "Khi còn nhỏ, tôi thường chơi trong công viên này." },
                    { en: "Call me <strong>when</strong> you arrive at the station.", vn: "Gọi cho tôi khi bạn đến nhà ga." }
                ]
            },
            {
                word: "While",
                ipa: "/waɪl/",
                meaning: "trong khi / còn",
                examples: [
                    { en: "She was listening to music <strong>while</strong> doing her homework.", vn: "Cô ấy nghe nhạc trong khi làm bài tập." },
                    { en: "<strong>While</strong> I was cooking, he was setting the table.", vn: "Trong khi tôi nấu ăn, anh ấy dọn bàn." },
                    { en: "<strong>While</strong> he prefers coffee, I like tea better.", vn: "Trong khi anh ấy thích cà phê, tôi thích trà hơn." }
                ]
            },
            {
                word: "Before",
                ipa: "/bɪˈfɔːr/",
                meaning: "trước khi / trước đó",
                examples: [
                    { en: "Finish your homework <strong>before</strong> you go out.", vn: "Làm xong bài tập trước khi ra ngoài." },
                    { en: "I had never seen her <strong>before</strong> that day.", vn: "Tôi chưa từng gặp cô ấy trước ngày hôm đó." },
                    { en: "Wash your hands <strong>before</strong> eating.", vn: "Rửa tay trước khi ăn." }
                ]
            },
            {
                word: "After",
                ipa: "/ˈæf.tər/",
                meaning: "sau khi / sau đó",
                examples: [
                    { en: "We went for a walk <strong>after</strong> dinner.", vn: "Chúng tôi đi dạo sau bữa tối." },
                    { en: "<strong>After</strong> finishing the course, she found a good job.", vn: "Sau khi hoàn thành khóa học, cô ấy tìm được một công việc tốt." },
                    { en: "He called me <strong>after</strong> he arrived home.", vn: "Anh ấy gọi cho tôi sau khi về đến nhà." }
                ]
            },
            {
                word: "As soon as",
                ipa: "/əz suːn əz/",
                meaning: "ngay khi",
                examples: [
                    { en: "I will call you <strong>as soon as</strong> I get the results.", vn: "Tôi sẽ gọi cho bạn ngay khi nhận được kết quả." },
                    { en: "<strong>As soon as</strong> she heard the news, she started crying.", vn: "Ngay khi nghe tin, cô ấy bắt đầu khóc." },
                    { en: "Please let me know <strong>as soon as</strong> possible.", vn: "Vui lòng cho tôi biết sớm nhất có thể." }
                ]
            }
        ]
    },
    {
        id: "condition",
        title: "Điều kiện",
        hint: "if",
        color: "emerald",
        connectors: [
            {
                word: "If",
                ipa: "/ɪf/",
                meaning: "nếu",
                examples: [
                    { en: "<strong>If</strong> you study hard, you will improve quickly.", vn: "Nếu bạn học chăm, bạn sẽ tiến bộ nhanh." },
                    { en: "I will go out <strong>if</strong> the weather is nice.", vn: "Tôi sẽ ra ngoài nếu thời tiết đẹp." },
                    { en: "<strong>If</strong> you need help, just ask me.", vn: "Nếu bạn cần giúp đỡ, cứ hỏi tôi." }
                ]
            }
        ]
    },
    {
        id: "purpose",
        title: "Mục đích",
        hint: "so that",
        color: "violet",
        connectors: [
            {
                word: "So that",
                ipa: "/soʊ ðæt/",
                meaning: "để mà",
                examples: [
                    { en: "She speaks slowly <strong>so that</strong> everyone can understand her.", vn: "Cô ấy nói chậm để mọi người có thể hiểu cô ấy." },
                    { en: "I wrote it down <strong>so that</strong> I wouldn't forget.", vn: "Tôi viết nó ra để không quên." },
                    { en: "He saved money <strong>so that</strong> he could travel abroad.", vn: "Anh ấy tiết kiệm tiền để có thể đi du lịch nước ngoài." }
                ]
            }
        ]
    },
    {
        id: "contrast",
        title: "Tương phản",
        hint: "although",
        color: "rose",
        connectors: [
            {
                word: "Although",
                ipa: "/ɔːlˈðoʊ/",
                meaning: "mặc dù",
                examples: [
                    { en: "<strong>Although</strong> it was raining, they continued playing football.", vn: "Mặc dù trời đang mưa, họ vẫn tiếp tục chơi bóng đá." },
                    { en: "She kept working <strong>although</strong> she felt tired.", vn: "Cô ấy tiếp tục làm việc mặc dù thấy mệt." },
                    { en: "<strong>Although</strong> he is young, he is very responsible.", vn: "Mặc dù còn trẻ, anh ấy rất có trách nhiệm." }
                ]
            }
        ]
    }
];

const TU_NOI_CORRELATIVE = [
    {
        pair: "Not only A but also B",
        ipa: "/nɒt ˈoʊnli ... bʌt ˈɔːlsoʊ/",
        meaning: "không chỉ A mà còn B",
        color: "violet",
        examples: [
            { label: "Tính từ", en: "She is <strong>not only</strong> intelligent <strong>but also</strong> hardworking.", vn: "Cô ấy không chỉ thông minh mà còn chăm chỉ." },
            { label: "Động từ", en: "He <strong>not only</strong> speaks English fluently <strong>but also</strong> writes it very well.", vn: "Anh ấy không chỉ nói tiếng Anh lưu loát mà còn viết rất tốt." },
            { label: "Danh từ", en: "They bought <strong>not only</strong> a house <strong>but also</strong> a car.", vn: "Họ mua không chỉ một căn nhà mà còn một chiếc xe." }
        ]
    },
    {
        pair: "Both A and B",
        ipa: "/boʊθ ... ænd/",
        meaning: "cả A và B",
        color: "emerald",
        examples: [
            { label: "Sở thích", en: "She likes <strong>both</strong> music <strong>and</strong> painting.", vn: "Cô ấy thích cả âm nhạc và hội họa." },
            { label: "Người", en: "<strong>Both</strong> my parents <strong>and</strong> my teacher supported me.", vn: "Cả bố mẹ tôi và giáo viên của tôi đều ủng hộ tôi." },
            { label: "Tính từ", en: "The movie was <strong>both</strong> interesting <strong>and</strong> meaningful.", vn: "Bộ phim vừa thú vị vừa ý nghĩa." }
        ]
    },
    {
        pair: "Whether A or B",
        ipa: "/ˈweðər/",
        meaning: "liệu...hay...",
        color: "sky",
        examples: [
            { label: "Có/không", en: "I don't know <strong>whether</strong> he will come <strong>or</strong> not.", vn: "Tôi không biết liệu anh ấy có đến hay không." },
            { label: "Hai lựa chọn", en: "She is thinking about <strong>whether</strong> she should study abroad <strong>or</strong> stay in her country.", vn: "Cô ấy đang nghĩ liệu nên du học hay ở lại đất nước của mình." },
            { label: "Quyết định", en: "We need to decide <strong>whether</strong> to start now <strong>or</strong> wait until tomorrow.", vn: "Chúng ta cần quyết định nên bắt đầu bây giờ hay chờ đến ngày mai." }
        ]
    }
];

const TU_NOI_WRITING_LINKERS = [
    {
        id: "adding",
        title: "Thêm ý",
        en: "Adding ideas",
        use: "Dùng khi muốn bổ sung thông tin cùng hướng.",
        color: "emerald",
        words: [
            { text: "Moreover", ipa: "/mɔːrˈoʊvər/", meaning: "hơn nữa" },
            { text: "In addition", ipa: "/ɪn əˈdɪʃən/", meaning: "thêm vào đó" },
            { text: "Also", ipa: "/ˈɔːlsoʊ/", meaning: "cũng" },
            { text: "Besides", ipa: "/bɪˈsaɪdz/", meaning: "ngoài ra" },
            { text: "Furthermore", ipa: "/ˈfɜːrðərmɔːr/", meaning: "hơn nữa, trang trọng" }
        ],
        examples: [
            {
                en: "Learning English is important. <span class='font-bold text-emerald-700'>Moreover</span>, it helps you find better job opportunities.",
                vn: "Học tiếng Anh rất quan trọng. Hơn nữa, nó giúp bạn có cơ hội việc làm tốt hơn."
            },
            {
                en: "The course is affordable. <span class='font-bold text-emerald-700'>In addition</span>, it is very practical.",
                vn: "Khóa học giá hợp lý. Thêm vào đó, nó rất thực tế."
            },
            {
                en: "She is friendly. <span class='font-bold text-emerald-700'>Besides</span>, she is always willing to help others.",
                vn: "Cô ấy thân thiện. Ngoài ra, cô ấy luôn sẵn sàng giúp đỡ người khác."
            }
        ]
    },
    {
        id: "result",
        title: "Kết quả",
        en: "Showing results",
        use: "Dùng khi câu sau là kết quả của câu trước.",
        color: "amber",
        words: [
            { text: "Therefore", ipa: "/ˈðerfɔːr/", meaning: "vì vậy" },
            { text: "As a result", ipa: "/æz ə rɪˈzʌlt/", meaning: "kết quả là" },
            { text: "Consequently", ipa: "/ˈkɑːnsɪkwentli/", meaning: "do đó, trang trọng" }
        ],
        examples: [
            {
                en: "He didn't study hard. <span class='font-bold text-amber-700'>Therefore</span>, he failed the exam.",
                vn: "Anh ấy không học chăm, vì vậy anh ấy trượt."
            },
            {
                en: "The weather was very bad. <span class='font-bold text-amber-700'>As a result</span>, the flight was delayed.",
                vn: "Thời tiết xấu nên chuyến bay bị hoãn."
            },
            {
                en: "She worked very hard. <span class='font-bold text-amber-700'>Consequently</span>, she got promoted.",
                vn: "Cô ấy làm việc chăm chỉ nên được thăng chức."
            }
        ]
    },
    {
        id: "contrast",
        title: "Tương phản",
        en: "Contrasting ideas",
        use: "Dùng khi hai ý trái ngược nhau.",
        color: "rose",
        words: [
            { text: "However", ipa: "/haʊˈevər/", meaning: "tuy nhiên" },
            { text: "On the other hand", ipa: "/ɒn ði ˈʌðər hænd/", meaning: "mặt khác" },
            { text: "In contrast", ipa: "/ɪn ˈkɑːntræst/", meaning: "trái lại" }
        ],
        examples: [
            {
                en: "This job is well-paid. <span class='font-bold text-rose-700'>However</span>, it is very stressful.",
                vn: "Công việc này lương cao, tuy nhiên rất áp lực."
            },
            {
                en: "Living in the city is convenient. <span class='font-bold text-rose-700'>On the other hand</span>, it is expensive.",
                vn: "Sống ở thành phố tiện lợi, nhưng mặt khác thì đắt đỏ."
            },
            {
                en: "He is very quiet. <span class='font-bold text-rose-700'>In contrast</span>, his brother is very talkative.",
                vn: "Anh ấy ít nói, trái lại em trai rất nói nhiều."
            }
        ]
    },
    {
        id: "sequence",
        title: "Liệt kê / Trình tự",
        en: "Listing / Sequencing",
        use: "Dùng để sắp xếp ý theo thứ tự.",
        color: "sky",
        words: [
            { text: "Firstly / First of all", ipa: "", meaning: "đầu tiên" },
            { text: "To begin / start with", ipa: "", meaning: "để bắt đầu" },
            { text: "Secondly", ipa: "", meaning: "thứ hai" },
            { text: "Then", ipa: "", meaning: "sau đó" },
            { text: "Finally", ipa: "", meaning: "cuối cùng" }
        ],
        examples: [
            {
                en: "<span class='font-bold text-sky-700'>Firstly</span>, you need to prepare all the materials.",
                vn: "Đầu tiên, bạn cần chuẩn bị tài liệu."
            },
            {
                en: "<span class='font-bold text-sky-700'>Secondly</span>, follow the instructions carefully.",
                vn: "Thứ hai, hãy làm theo hướng dẫn cẩn thận."
            },
            {
                en: "<span class='font-bold text-sky-700'>Finally</span>, check your work before submitting it.",
                vn: "Cuối cùng, kiểm tra lại trước khi nộp."
            }
        ]
    },
    {
        id: "examples",
        title: "Cho ví dụ",
        en: "Giving examples",
        use: "Dùng để làm rõ ý bằng ví dụ.",
        color: "violet",
        words: [
            { text: "For example", ipa: "/fɔːr ɪɡˈzæmpəl/", meaning: "ví dụ" },
            { text: "For instance", ipa: "/fɔːr ˈɪnstəns/", meaning: "chẳng hạn" }
        ],
        examples: [
            {
                en: "There are many ways to stay healthy. <span class='font-bold text-violet-700'>For example</span>, you can exercise regularly.",
                vn: "Có nhiều cách để khỏe mạnh, ví dụ bạn có thể tập thể dục."
            },
            {
                en: "Some students study better at night. <span class='font-bold text-violet-700'>For instance</span>, my brother prefers studying late.",
                vn: "Một số học sinh học tốt hơn vào ban đêm, chẳng hạn như anh tôi."
            }
        ]
    },
    {
        id: "conclusion",
        title: "Kết luận",
        en: "Concluding",
        use: "Dùng ở cuối đoạn hoặc cuối bài để tổng kết.",
        color: "slate",
        words: [
            { text: "In conclusion", ipa: "/ɪn kənˈkluːʒən/", meaning: "kết luận lại" },
            { text: "To sum up", ipa: "/tuː sʌm ʌp/", meaning: "tóm lại" }
        ],
        examples: [
            {
                en: "<span class='font-bold text-slate-700'>In conclusion</span>, learning English is very important for your future.",
                vn: "Kết luận lại, học tiếng Anh rất quan trọng cho tương lai."
            },
            {
                en: "<span class='font-bold text-slate-700'>To sum up</span>, this solution is both effective and practical.",
                vn: "Tóm lại, giải pháp này vừa hiệu quả vừa thực tế."
            }
        ]
    }
];

const TuNoiSectionHeading = ({ number, title, subtitle, color = "bg-slate-900" }) => (
    <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${color} text-white text-base sm:text-lg shrink-0 shadow-md`}>{number}</span>
            {title}
        </h2>
        {subtitle && <p className="text-slate-600 mt-2 text-sm sm:text-lg font-medium ml-[44px] sm:ml-[52px]">{subtitle}</p>}
    </div>
);

const TuNoiExample = ({ en, vn, accent = "blue" }) => {
    const [show, setShow] = useState(false);
    const accentClass = {
        blue: "border-l-blue-400 bg-blue-50",
        sky: "border-l-sky-400 bg-sky-50",
        emerald: "border-l-emerald-400 bg-emerald-50",
        rose: "border-l-rose-400 bg-rose-50",
        amber: "border-l-amber-400 bg-amber-50",
        violet: "border-l-violet-400 bg-violet-50",
        slate: "border-l-slate-400 bg-slate-50"
    }[accent] || "border-l-blue-400 bg-blue-50";

    return (
        <button
            onClick={() => setShow(!show)}
            className={`w-full text-left bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-slate-300 hover:shadow-sm transition-all ${show ? "shadow-sm" : ""}`}
            title="Bấm để xem nghĩa tiếng Việt"
        >
            <div className="text-slate-800 font-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: en }}></div>
            {show && (
                <div className={`mt-3 border-l-4 ${accentClass} rounded-r-lg px-3 py-2 text-sm text-slate-700 animate-pop`}>
                    {vn}
                </div>
            )}
        </button>
    );
};

const TuNoiMiniCard = ({ title, children, color = "slate" }) => {
    const theme = TU_NOI_COLORS[color] || TU_NOI_COLORS.slate;
    return (
        <div className={`rounded-2xl border ${theme.panel} p-4 sm:p-5`}>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide border mb-3 ${theme.chip}`}>{title}</div>
            <div>{children}</div>
        </div>
    );
};

const TuNoiQuickMap = () => {
    const cards = [
        {
            mark: "1.1",
            title: "Liên từ kết hợp",
            en: "Coordinating conjunctions",
            desc: "Nối các phần ngang hàng: từ, cụm từ, mệnh đề.",
            chips: ["and", "but", "or", "so"],
            color: "sky"
        },
        {
            mark: "1.2",
            title: "Liên từ phụ thuộc",
            en: "Subordinating conjunctions",
            desc: "Nối mệnh đề chính với mệnh đề phụ.",
            chips: ["because", "when", "if", "although"],
            color: "amber"
        },
        {
            mark: "1.3",
            title: "Liên từ tương quan",
            en: "Correlative conjunctions",
            desc: "Đi theo cặp và yêu cầu hai phần song song.",
            chips: ["both...and", "not only...but also", "whether...or"],
            color: "violet"
        },
        {
            mark: "2",
            title: "Từ liên kết",
            en: "Linking words",
            desc: "Nối câu, nối ý và làm đoạn văn mạch lạc hơn.",
            chips: ["Moreover", "However", "Therefore"],
            color: "slate"
        }
    ];

    return (
        <section className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card) => {
                    const theme = TU_NOI_COLORS[card.color];
                    return (
                        <div key={card.title} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                            <div className={`w-11 h-11 rounded-xl ${theme.soft} text-white flex items-center justify-center font-black text-lg mb-4`}>
                                {card.mark}
                            </div>
                            <h3 className="font-extrabold text-slate-900 text-base sm:text-[17px] xl:text-lg tracking-tight">{card.title}</h3>
                            <p className="text-sm text-slate-600 mt-3 leading-relaxed">{card.desc}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {card.chips.map((chip) => <span key={chip} className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${theme.chip}`}>{chip}</span>)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

const TuNoiCoordinatingSection = () => {
    const [active, setActive] = useState("and");
    const current = TU_NOI_COORDINATING.find((item) => item.id === active) || TU_NOI_COORDINATING[0];
    const theme = TU_NOI_COLORS[current.color];

    return (
        <section className="mb-14">
            <TuNoiSectionHeading
                number="1.1"
                title="Liên Từ Kết Hợp"
                subtitle="Dùng để nối các thành phần ngang hàng: từ, cụm từ hoặc mệnh đề."
                color="bg-sky-600"
            />

            <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {TU_NOI_COORDINATING.map((item) => {
                        const itemTheme = TU_NOI_COLORS[item.color];
                        const isActive = item.id === active;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActive(item.id)}
                                className={`rounded-2xl border px-4 py-3 text-left transition-all ${isActive ? itemTheme.active : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"}`}
                            >
                                <div className="font-black text-lg">{item.word}</div>
                                <div className={`text-xs mt-0.5 ${isActive ? "text-white/85" : "text-slate-500"}`}>{item.ipa} - {item.meaning}</div>
                            </button>
                        );
                    })}
                </div>

                <div className={`rounded-2xl border ${theme.panel} p-5 sm:p-6 animate-pop`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                        <div>
                            <div className={`text-4xl font-black ${theme.text}`}>{current.word}</div>
                            <div className="text-slate-500 font-semibold mt-1">{current.ipa} - {current.meaning}</div>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-200 px-4 py-3 sm:text-right">
                            <div className="text-xs font-black text-slate-400 uppercase tracking-wide">Công thức</div>
                            <div className="font-mono font-black text-slate-800 mt-1">{current.pattern}</div>
                        </div>
                    </div>
                    <p className="text-slate-700 font-medium mb-4">{current.job}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {current.examples.map((ex, idx) => <TuNoiExample key={idx} en={ex.en} vn={ex.vn} accent={current.color} />)}
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-5">
                <TuNoiMiniCard title="Nối 2 mệnh đề hoàn chỉnh" color="rose">
                    <p className="text-sm text-slate-700 mb-3">Khi nối 2 mệnh đề hoàn chỉnh, đặt dấu phẩy trước liên từ.</p>
                    <div className="bg-white rounded-xl border border-rose-100 px-4 py-3 font-normal text-slate-800">I was tired, <span className="text-rose-700 font-bold">but</span> I finished my homework.</div>
                </TuNoiMiniCard>
                <TuNoiMiniCard title="Danh sách từ 3 phần trở lên" color="emerald">
                    <p className="text-sm text-slate-700 mb-3">Trong danh sách dài, có thể dùng dấu phẩy trước and/or.</p>
                    <div className="bg-white rounded-xl border border-emerald-100 px-4 py-3 font-normal text-slate-800">I bought apples, bananas, <span className="text-emerald-700 font-bold">and</span> oranges.</div>
                </TuNoiMiniCard>
            </div>
        </section>
    );
};

const TuNoiSubordinatingSection = () => {
    const [active, setActive] = useState("cause");
    const current = TU_NOI_SUBORDINATING.find((item) => item.id === active) || TU_NOI_SUBORDINATING[0];
    const theme = TU_NOI_COLORS[current.color];

    return (
        <section className="mb-14">
            <TuNoiSectionHeading
                number="1.2"
                title="Liên Từ Phụ Thuộc"
                subtitle="Dùng để nối mệnh đề chính với mệnh đề phụ: nguyên nhân, thời gian, điều kiện, mục đích hoặc tương phản."
                color="bg-amber-500"
            />

            <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 mb-5 overflow-hidden relative">
                <div className="absolute right-4 top-4 w-20 h-20 rounded-full border border-white/10"></div>
                <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                    <div className="bg-white/10 rounded-2xl border border-white/10 p-4">
                        <div className="text-xs font-black uppercase tracking-widest text-amber-200 mb-2">Mệnh đề phụ đứng đầu</div>
                        <div className="text-base sm:text-lg font-normal">Although she was tired, she kept smiling.</div>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-white text-slate-900 items-center justify-center font-black">↔</div>
                    <div className="bg-white/10 rounded-2xl border border-white/10 p-4">
                        <div className="text-xs font-black uppercase tracking-widest text-amber-200 mb-2">Mệnh đề phụ đứng cuối</div>
                        <div className="text-base sm:text-lg font-normal">She kept smiling although she was tired.</div>
                    </div>
                </div>
                <p className="relative z-10 text-sm sm:text-base text-slate-200 mt-4">Nếu mệnh đề phụ đứng đầu câu, cần đặt dấu phẩy sau mệnh đề phụ.</p>
            </div>

            <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-5 pb-1">
                {TU_NOI_SUBORDINATING.map((item) => {
                    const itemTheme = TU_NOI_COLORS[item.color];
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={`shrink-0 px-4 py-3 rounded-2xl border text-left transition-all min-w-[150px] ${active === item.id ? itemTheme.active : "bg-white border-slate-200 hover:bg-slate-50"}`}
                        >
                            <div className="font-black text-sm">{item.title}</div>
                            <div className={`text-xs mt-1 ${active === item.id ? "text-white/85" : "text-slate-500"}`}>{item.hint}</div>
                        </button>
                    );
                })}
            </div>

            <div className={`rounded-3xl border ${theme.panel} p-4 sm:p-6 animate-pop`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                    <div>
                        <h3 className={`text-2xl font-black ${theme.text}`}>{current.title}</h3>
                        <p className="text-sm font-semibold text-slate-500 mt-1">{current.hint}</p>
                    </div>
                    <span className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide border ${theme.chip}`}>Mệnh đề chính + mệnh đề phụ</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {current.connectors.map((connector) => (
                        <div key={connector.word} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                                <h4 className="text-xl font-black text-slate-900">{connector.word}</h4>
                                <span className="text-sm text-slate-500 font-semibold">{connector.ipa}</span>
                                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${theme.chip}`}>{connector.meaning}</span>
                            </div>
                            <div className="space-y-2">
                                {connector.examples.map((ex, idx) => <TuNoiExample key={idx} en={ex.en} vn={ex.vn} accent={current.color} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TuNoiCorrelativeSection = () => {
    return (
        <section className="mb-14">
            <TuNoiSectionHeading
                number="1.3"
                title="Liên Từ Tương Quan"
                subtitle="Dùng để nhấn mạnh, so sánh hoặc lựa chọn giữa hai phần tương đương. Phải dùng đúng cặp và giữ cấu trúc song song."
                color="bg-violet-600"
            />

            <div className="space-y-5">
                {TU_NOI_CORRELATIVE.map((item) => {
                    const theme = TU_NOI_COLORS[item.color];
                    return (
                        <div key={item.pair} className={`rounded-3xl border ${theme.panel} p-4 sm:p-6`}>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-5">
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900">{item.pair}</h3>
                                    <p className="text-sm text-slate-500 font-semibold mt-1">{item.ipa} - {item.meaning}</p>
                                </div>
                                <div className="bg-white rounded-2xl border border-slate-200 p-3 min-w-[230px]">
                                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
                                        <span className={`rounded-xl px-3 py-2 text-sm font-black ${theme.chip}`}>A</span>
                                        <span className="text-slate-400 font-black">=</span>
                                        <span className={`rounded-xl px-3 py-2 text-sm font-black ${theme.chip}`}>B</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 text-center font-semibold">Hai vế cùng loại từ / cùng vai trò</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                                {item.examples.map((ex, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-black border ${theme.chip}`}>{ex.label}</span>
                                            <div className="flex-1 min-w-[220px]">
                                                <TuNoiExample en={ex.en} vn={ex.vn} accent={item.color} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

const TuNoiWritingLinkersSection = () => {
    const [active, setActive] = useState("adding");
    const current = TU_NOI_WRITING_LINKERS.find((item) => item.id === active) || TU_NOI_WRITING_LINKERS[0];
    const theme = TU_NOI_COLORS[current.color] || TU_NOI_COLORS.slate;

    return (
        <section className="mb-14">
            <TuNoiSectionHeading
                number="2"
                title="Từ Liên Kết"
                subtitle="Linking words / connectors giúp nối câu, nối ý và thể hiện rõ quan hệ logic trong bài viết."
                color="bg-slate-900"
            />

            <div className="grid lg:grid-cols-2 gap-4 mb-5">
                <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
                    <div className="inline-flex px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-black uppercase tracking-wide mb-3">
                        Từ liên kết là gì?
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Từ liên kết là những từ hoặc cụm từ giúp các câu và các ý trong đoạn văn đi với nhau tự nhiên hơn.
                    </p>
                    <div className="space-y-2 text-sm text-slate-700">
                        {["Nối các câu hoặc ý với nhau.", "Làm bài viết logic, mạch lạc, dễ hiểu hơn.", "Thể hiện rõ mối quan hệ giữa các ý."].map((item) => (
                            <div key={item} className="flex gap-2">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-sky-500 shrink-0"></span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
                    <div className="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black uppercase tracking-wide mb-3">
                        Khi nào dùng?
                    </div>
                    <div className="space-y-2 text-sm text-slate-700 mb-4">
                        {["Viết câu thứ 2 trở đi trong đoạn văn.", "Muốn chuyển sang ý mới nhưng vẫn liên quan ý trước.", "Cần làm rõ quan hệ giữa hai câu hoặc hai ý."].map((item) => (
                            <div key={item} className="flex gap-2">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                        <div className="text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Vị trí thường gặp</div>
                        <p className="text-sm text-slate-700 mb-3">Thường đặt ở đầu câu, sau đó có dấu phẩy.</p>
                        <TuNoiExample
                            en="The city is very crowded. <span class='font-bold text-rose-700'>However</span>, it is still a great place to live."
                            vn="Thành phố rất đông đúc. Tuy nhiên, đó vẫn là một nơi tuyệt vời để sống."
                            accent="rose"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm">
                <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-5 pb-1">
                    {TU_NOI_WRITING_LINKERS.map((item) => {
                        const itemTheme = TU_NOI_COLORS[item.color] || TU_NOI_COLORS.slate;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActive(item.id)}
                                className={`shrink-0 px-4 py-3 rounded-2xl border text-left transition-all min-w-[150px] ${active === item.id ? itemTheme.active : "bg-white border-slate-200 hover:bg-slate-50"}`}
                            >
                                <div className="font-black text-sm">{item.title}</div>
                                <div className={`text-xs mt-1 ${active === item.id ? "text-white/85" : "text-slate-500"}`}>{item.en}</div>
                            </button>
                        );
                    })}
                </div>

                <div className={`rounded-3xl border ${theme.panel} p-4 sm:p-6 animate-pop`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                        <div>
                            <h3 className={`text-2xl font-black ${theme.text}`}>{current.title}</h3>
                            <p className="text-sm font-semibold text-slate-500 mt-1">{current.en}</p>
                            <p className="text-slate-700 mt-3 leading-relaxed">{current.use}</p>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-200 px-4 py-3 lg:w-[280px]">
                            <div className="text-xs font-black text-slate-400 uppercase tracking-wide mb-2">Mẫu dùng nhanh</div>
                            <div className="text-sm text-slate-700">
                                <span className="font-medium">Connector</span>
                                <span className="text-slate-400"> + </span>
                                <span>dấu phẩy</span>
                                <span className="text-slate-400"> + </span>
                                <span>ý chính</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                        {current.words.map((word) => (
                            <div key={word.text} className="bg-white rounded-2xl border border-slate-200 p-4">
                                <div className={`font-bold ${theme.text}`}>{word.text}</div>
                                {word.ipa && <div className="text-xs text-slate-500 mt-1">{word.ipa}</div>}
                                <div className="text-sm text-slate-700 mt-2">{word.meaning}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {current.examples.map((ex, idx) => (
                            <TuNoiExample key={idx} en={ex.en} vn={ex.vn} accent={current.color} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TuNoiQuiz = () => {
    const questions = [
        {
            id: 1,
            sentence: "She studied very hard, ___ she didn't pass the exam.",
            options: ["but", "so", "or"],
            answer: "but",
            explain: "Có sự tương phản giữa học chăm và không đậu, nên dùng but."
        },
        {
            id: 2,
            sentence: "I forgot to set my alarm, ___ I woke up late this morning.",
            options: ["so", "although", "and"],
            answer: "so",
            explain: "Vế sau là kết quả của vế trước, nên dùng so."
        },
        {
            id: 3,
            sentence: "___ you study hard, you will improve quickly.",
            options: ["If", "Or", "But"],
            answer: "If",
            explain: "Câu diễn tả điều kiện: nếu học chăm thì sẽ tiến bộ."
        },
        {
            id: 4,
            sentence: "She speaks slowly ___ everyone can understand her.",
            options: ["so that", "because", "when"],
            answer: "so that",
            explain: "Vế sau là mục đích, nên dùng so that."
        },
        {
            id: 5,
            sentence: "The movie was ___ interesting ___ meaningful.",
            options: ["both / and", "whether / or", "because / so"],
            answer: "both / and",
            explain: "Cần cặp liên từ tương quan both...and để nối hai tính từ."
        },
        {
            id: 6,
            sentence: "You can call me ___ send me an email.",
            options: ["or", "but", "because"],
            answer: "or",
            explain: "Đây là hai lựa chọn: gọi điện hoặc gửi email."
        },
        {
            id: 7,
            sentence: "___ it was raining, they continued playing football.",
            options: ["Although", "So", "And"],
            answer: "Although",
            explain: "Câu có ý tương phản: mặc dù trời mưa nhưng họ vẫn chơi bóng."
        },
        {
            id: 8,
            sentence: "She wrote it down ___ she wouldn't forget.",
            options: ["so that", "whether", "but"],
            answer: "so that",
            explain: "Vế sau nêu mục đích: để cô ấy không quên."
        },
        {
            id: 9,
            sentence: "He was sick, ___ he stayed at home.",
            options: ["so", "or", "although"],
            answer: "so",
            explain: "Vế sau là kết quả của việc anh ấy bị ốm."
        },
        {
            id: 10,
            sentence: "We need to decide ___ to start now ___ wait until tomorrow.",
            options: ["whether / or", "both / and", "not only / but also"],
            answer: "whether / or",
            explain: "Cần cặp whether...or để nói về hai khả năng cần quyết định."
        }
    ];
    const [answers, setAnswers] = useState({});
    const correctCount = questions.filter((q) => answers[q.id] === q.answer).length;

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">Chọn từ nối đúng</h3>
                    <p className="text-sm text-slate-500 mt-1">Bấm vào đáp án để kiểm tra ngay.</p>
                </div>
                <div className="px-4 py-2 rounded-2xl bg-slate-900 text-white font-black text-sm self-start sm:self-auto">
                    {correctCount}/{questions.length}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {questions.map((q) => {
                    const picked = answers[q.id];
                    return (
                        <div key={q.id} className="rounded-2xl border border-slate-200 p-4">
                            <p className="font-normal text-slate-800 mb-3 leading-relaxed">{q.sentence}</p>
                            <div className="flex flex-wrap gap-2">
                                {q.options.map((option) => {
                                    const isPicked = picked === option;
                                    const isCorrect = option === q.answer;
                                    let cls = "bg-white text-slate-700 border-slate-200 hover:bg-slate-50";
                                    if (picked && isCorrect) cls = "bg-emerald-600 text-white border-emerald-600";
                                    if (isPicked && !isCorrect) cls = "bg-rose-600 text-white border-rose-600";

                                    return (
                                        <button
                                            key={option}
                                            onClick={() => setAnswers({ ...answers, [q.id]: option })}
                                            className={`px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all ${cls}`}
                                        >
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>
                            {picked && (
                                <div className={`mt-3 text-sm rounded-xl px-3 py-2 animate-pop ${picked === q.answer ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
                                    {q.explain}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TuNoiExerciseDeck = ({ title, subtitle, questions, color = "sky" }) => {
    const [answers, setAnswers] = useState({});
    const theme = TU_NOI_COLORS[color] || TU_NOI_COLORS.sky;
    const correctCount = questions.filter((q) => answers[q.id] === q.answer).length;

    return (
        <div className={`rounded-3xl border ${theme.panel} p-4 sm:p-6`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">{title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                    <div className={`px-4 py-2 rounded-2xl text-sm font-black border ${theme.chip}`}>
                        {correctCount}/{questions.length}
                    </div>
                    <button
                        onClick={() => setAnswers({})}
                        className="px-3 py-2 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors"
                    >
                        Làm lại
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {questions.map((q, idx) => {
                    const picked = answers[q.id];
                    return (
                        <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                            <div className="flex items-start gap-3">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${theme.chip}`}>
                                    {idx + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-normal text-slate-800 leading-relaxed">{q.sentence}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {q.options.map((option) => {
                                            const isPicked = picked === option;
                                            const isCorrect = option === q.answer;
                                            let cls = "bg-white text-slate-700 border-slate-200 hover:bg-slate-50";
                                            if (picked && isCorrect) cls = theme.active;
                                            if (isPicked && !isCorrect) cls = "bg-rose-600 text-white border-rose-600";

                                            return (
                                                <button
                                                    key={option}
                                                    onClick={() => setAnswers({ ...answers, [q.id]: option })}
                                                    className={`px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all ${cls}`}
                                                >
                                                    {option}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {picked && (
                                        <div className={`mt-3 text-sm rounded-xl px-3 py-2 animate-pop ${picked === q.answer ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
                                            {q.explain}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TuNoiSubordinatingExercise = () => {
    const questions = [
        {
            id: "sub-1",
            sentence: "___ I was tired, I went to bed early.",
            options: ["As", "Or", "Both"],
            answer: "As",
            explain: "As ở đây mang nghĩa vì: vì tôi mệt nên tôi đi ngủ sớm."
        },
        {
            id: "sub-2",
            sentence: "Call me ___ you arrive at the station.",
            options: ["when", "but", "both"],
            answer: "when",
            explain: "When dùng để nối mệnh đề thời gian: khi bạn đến nhà ga."
        },
        {
            id: "sub-3",
            sentence: "She was listening to music ___ doing her homework.",
            options: ["while", "so", "or"],
            answer: "while",
            explain: "While diễn tả hai hành động xảy ra cùng lúc."
        },
        {
            id: "sub-4",
            sentence: "Finish your homework ___ you go out.",
            options: ["before", "although", "and"],
            answer: "before",
            explain: "Before diễn tả việc cần xảy ra trước hành động đi ra ngoài."
        },
        {
            id: "sub-5",
            sentence: "We went for a walk ___ dinner.",
            options: ["after", "if", "but"],
            answer: "after",
            explain: "After diễn tả thời điểm sau bữa tối."
        },
        {
            id: "sub-6",
            sentence: "I will call you ___ I get the results.",
            options: ["as soon as", "whether", "and"],
            answer: "as soon as",
            explain: "As soon as nghĩa là ngay khi."
        },
        {
            id: "sub-7",
            sentence: "___ you need help, just ask me.",
            options: ["If", "So", "Both"],
            answer: "If",
            explain: "If diễn tả điều kiện: nếu bạn cần giúp đỡ."
        },
        {
            id: "sub-8",
            sentence: "She speaks slowly ___ everyone can understand her.",
            options: ["so that", "because", "when"],
            answer: "so that",
            explain: "So that diễn tả mục đích: để mọi người có thể hiểu cô ấy."
        },
        {
            id: "sub-9",
            sentence: "___ it was raining, they continued playing football.",
            options: ["Although", "Because", "And"],
            answer: "Although",
            explain: "Although diễn tả tương phản: mặc dù trời mưa."
        },
        {
            id: "sub-10",
            sentence: "They canceled the trip ___ the weather was too bad.",
            options: ["because", "or", "both"],
            answer: "because",
            explain: "Because nêu nguyên nhân của việc hủy chuyến đi."
        }
    ];

    return (
        <TuNoiExerciseDeck
            title="Bài tập liên từ phụ thuộc"
            subtitle="10 câu luyện nguyên nhân, thời gian, điều kiện, mục đích và tương phản."
            questions={questions}
            color="amber"
        />
    );
};

const TuNoiCorrelativeExercise = () => {
    const questions = [
        {
            id: "cor-1",
            sentence: "She is ___ intelligent ___ hardworking.",
            options: ["not only / but also", "whether / or", "because / so"],
            answer: "not only / but also",
            explain: "Not only...but also nhấn mạnh hai tính chất song song."
        },
        {
            id: "cor-2",
            sentence: "She likes ___ music ___ painting.",
            options: ["both / and", "although / but", "so / that"],
            answer: "both / and",
            explain: "Both...and nối hai danh từ/sở thích cùng loại."
        },
        {
            id: "cor-3",
            sentence: "I don't know ___ he will come ___ not.",
            options: ["whether / or", "both / and", "not only / but also"],
            answer: "whether / or",
            explain: "Whether...or dùng khi nói về hai khả năng."
        },
        {
            id: "cor-4",
            sentence: "The movie was ___ interesting ___ meaningful.",
            options: ["both / and", "because / and", "if / or"],
            answer: "both / and",
            explain: "Hai tính từ interesting và meaningful được nối song song."
        },
        {
            id: "cor-5",
            sentence: "He ___ speaks English fluently ___ writes it very well.",
            options: ["not only / but also", "whether / or", "both / but"],
            answer: "not only / but also",
            explain: "Cặp này nhấn mạnh hai khả năng: nói và viết."
        },
        {
            id: "cor-6",
            sentence: "We need to decide ___ to start now ___ wait until tomorrow.",
            options: ["whether / or", "both / and", "not only / but also"],
            answer: "whether / or",
            explain: "Câu cần lựa chọn giữa bắt đầu bây giờ hoặc chờ đến ngày mai."
        },
        {
            id: "cor-7",
            sentence: "They bought ___ a house ___ a car.",
            options: ["not only / but also", "both / but also", "whether / and"],
            answer: "not only / but also",
            explain: "Cặp not only...but also nhấn mạnh họ mua cả hai thứ."
        },
        {
            id: "cor-8",
            sentence: "___ my parents ___ my teacher supported me.",
            options: ["Both / and", "Whether / or", "Because / so"],
            answer: "Both / and",
            explain: "Both...and nối hai chủ thể cùng ủng hộ người nói."
        },
        {
            id: "cor-9",
            sentence: "She is thinking about ___ she should study abroad ___ stay in her country.",
            options: ["whether / or", "not only / but also", "both / and"],
            answer: "whether / or",
            explain: "Câu nói về lựa chọn giữa du học và ở lại trong nước."
        },
        {
            id: "cor-10",
            sentence: "This plan is ___ practical ___ affordable.",
            options: ["both / and", "whether / or", "not only / and"],
            answer: "both / and",
            explain: "Both...and nối hai tính từ cùng mô tả kế hoạch."
        }
    ];

    return (
        <TuNoiExerciseDeck
            title="Bài tập liên từ tương quan"
            subtitle="10 câu luyện đúng cặp và giữ hai vế song song."
            questions={questions}
            color="violet"
        />
    );
};

const TuNoiWritingLinkerExercise = () => {
    const questions = [
        {
            id: "link-1",
            before: "Online learning is flexible.",
            after: "it helps students save travelling time.",
            options: ["Moreover", "However", "For example"],
            answer: "Moreover",
            relation: "Thêm ý",
            explain: "Câu sau bổ sung thêm một lợi ích cùng chiều với câu trước."
        },
        {
            id: "link-2",
            before: "The traffic was very heavy.",
            after: "many students arrived late for class.",
            options: ["As a result", "Besides", "In contrast"],
            answer: "As a result",
            relation: "Kết quả",
            explain: "Câu sau là kết quả của tình trạng giao thông đông."
        },
        {
            id: "link-3",
            before: "Living in the city is convenient.",
            after: "it can be noisy and expensive.",
            options: ["However", "Therefore", "For instance"],
            answer: "However",
            relation: "Tương phản",
            explain: "Câu sau đưa ra mặt trái, trái hướng với ý tiện lợi ở câu trước."
        },
        {
            id: "link-4",
            before: "There are many ways to improve your English.",
            after: "you can listen to podcasts every day.",
            options: ["For example", "Consequently", "To sum up"],
            answer: "For example",
            relation: "Cho ví dụ",
            explain: "Câu sau nêu một ví dụ cụ thể cho ý ở câu trước."
        },
        {
            id: "link-5",
            before: "This app is easy to use.",
            after: "it does not require much storage space.",
            options: ["In addition", "On the other hand", "Therefore"],
            answer: "In addition",
            relation: "Thêm ý",
            explain: "Câu sau bổ sung thêm một ưu điểm nữa của ứng dụng."
        },
        {
            id: "link-6",
            before: "Some people prefer working from home.",
            after: "others enjoy working in an office.",
            options: ["On the other hand", "Moreover", "Finally"],
            answer: "On the other hand",
            relation: "Tương phản / mặt khác",
            explain: "Hai câu nói về hai nhóm người với sở thích khác nhau."
        },
        {
            id: "link-7",
            before: "You should make a clear study plan.",
            after: "you need to follow it consistently.",
            options: ["Then", "However", "For example"],
            answer: "Then",
            relation: "Trình tự",
            explain: "Câu sau là bước tiếp theo sau khi lập kế hoạch."
        },
        {
            id: "link-8",
            before: "The company invested more in staff training.",
            after: "employees became more productive.",
            options: ["Consequently", "Besides", "In contrast"],
            answer: "Consequently",
            relation: "Kết quả",
            explain: "Năng suất tăng là kết quả của việc đầu tư vào đào tạo."
        },
        {
            id: "link-9",
            before: "Regular exercise improves physical health.",
            after: "it can reduce stress and improve mood.",
            options: ["Furthermore", "However", "To begin with"],
            answer: "Furthermore",
            relation: "Thêm ý",
            explain: "Câu sau bổ sung thêm lợi ích về tinh thần."
        },
        {
            id: "link-10",
            before: "This solution is cheap, simple, and effective.",
            after: "it should be used more widely.",
            options: ["To sum up", "For instance", "On the other hand"],
            answer: "To sum up",
            relation: "Kết luận",
            explain: "Câu sau tổng kết và đưa ra nhận định cuối cùng dựa trên các ưu điểm đã nêu."
        }
    ];
    const [answers, setAnswers] = useState({});
    const correctCount = questions.filter((q) => answers[q.id] === q.answer).length;

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">Bài tập từ liên kết trong Writing</h3>
                    <p className="text-sm text-slate-600 mt-1">Đọc câu trước và câu sau, rồi chọn từ liên kết thể hiện đúng mối quan hệ giữa hai ý.</p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                    <div className="px-4 py-2 rounded-2xl bg-slate-900 text-white font-black text-sm">
                        {correctCount}/{questions.length}
                    </div>
                    <button
                        onClick={() => setAnswers({})}
                        className="px-3 py-2 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors"
                    >
                        Làm lại
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {questions.map((q, idx) => {
                    const picked = answers[q.id];
                    return (
                        <div key={q.id} className="rounded-2xl border border-slate-200 p-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center text-xs font-black shrink-0">
                                    {idx + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="mb-3">
                                        <p className="font-normal text-slate-800 leading-relaxed">
                                            {q.before} ___, {q.after}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {q.options.map((option) => {
                                            const isPicked = picked === option;
                                            const isCorrect = option === q.answer;
                                            let cls = "bg-white text-slate-700 border-slate-200 hover:bg-slate-50";
                                            if (picked && isCorrect) cls = "bg-slate-900 text-white border-slate-900 shadow-md";
                                            if (isPicked && !isCorrect) cls = "bg-rose-600 text-white border-rose-600";

                                            return (
                                                <button
                                                    key={option}
                                                    onClick={() => setAnswers({ ...answers, [q.id]: option })}
                                                    className={`px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all ${cls}`}
                                                >
                                                    {option}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {picked && (
                                        <div className={`mt-3 text-sm rounded-xl px-3 py-2 animate-pop ${picked === q.answer ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
                                            <span className="font-semibold">Quan hệ: {q.relation}.</span> {q.explain}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TuNoiBridgeGame = () => {
    const bridges = [
        {
            connector: "and",
            color: "emerald",
            left: "He works full-time",
            right: "studies English in the evening",
            result: "He works full-time and studies English in the evening.",
            note: "Thêm thông tin ngang hàng."
        },
        {
            connector: "but",
            color: "rose",
            left: "I wanted to go out",
            right: "it started raining heavily",
            result: "I wanted to go out, but it started raining heavily.",
            note: "Hai ý tương phản, có dấu phẩy vì hai vế là mệnh đề hoàn chỉnh."
        },
        {
            connector: "because",
            color: "amber",
            left: "I stayed at home",
            right: "I had a lot of work to finish",
            result: "I stayed at home because I had a lot of work to finish.",
            note: "Vế sau nêu nguyên nhân."
        },
        {
            connector: "although",
            color: "violet",
            left: "She kept working",
            right: "she felt tired",
            result: "She kept working although she felt tired.",
            note: "Tạo tương phản giữa hai ý."
        }
    ];
    const [active, setActive] = useState(bridges[0]);
    const theme = TU_NOI_COLORS[active.color];

    return (
        <div className={`rounded-3xl border ${theme.panel} p-4 sm:p-6`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">Cầu nối câu</h3>
                    <p className="text-sm text-slate-600 mt-1">Chọn một từ nối để xem cách hai ý được ghép lại.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {bridges.map((item) => {
                        const itemTheme = TU_NOI_COLORS[item.color];
                        return (
                            <button
                                key={item.connector}
                                onClick={() => setActive(item)}
                                className={`px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all ${active.connector === item.connector ? itemTheme.active : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`}
                            >
                                {item.connector}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-3 items-stretch">
                <div className="bg-white rounded-2xl border border-slate-200 p-4 font-normal text-slate-800 flex items-center">{active.left}</div>
                <div className={`rounded-2xl px-4 py-3 flex items-center justify-center text-white font-black ${theme.soft}`}>{active.connector}</div>
                <div className="bg-white rounded-2xl border border-slate-200 p-4 font-normal text-slate-800 flex items-center">{active.right}</div>
            </div>

            <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-4">
                <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Câu hoàn chỉnh</div>
                <p className="text-lg font-medium text-slate-900">{active.result}</p>
                <p className="text-sm text-slate-600 mt-2">{active.note}</p>
            </div>
        </div>
    );
};

const TuNoiPracticeSection = () => (
    <section className="mb-14">
        <TuNoiSectionHeading
            number="3"
            title="Luyện Tập Nhanh"
            subtitle="Dùng phần này để kiểm tra xem mình đã chọn đúng từ nối và dấu phẩy chưa."
            color="bg-slate-900"
        />
        <div className="space-y-5">
            <TuNoiQuiz />
            <TuNoiSubordinatingExercise />
            <TuNoiCorrelativeExercise />
            <TuNoiBridgeGame />
            <TuNoiWritingLinkerExercise />
        </div>
    </section>
);

const LessonTuNoi = () => {
    return (
        <div className="animate-pop w-full">
            <div className="mb-8 sm:mb-12 border-l-4 border-sky-600 pl-4 sm:pl-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-black uppercase tracking-wide mb-3">
                    Từ đơn
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">Từ Nối (Conjunctions)</h1>
                <p className="text-base sm:text-lg text-slate-500 mt-2 font-medium">
                    Từ nối giúp ghép ý tưởng rời rạc thành câu văn mạch lạc: thêm thông tin, tạo tương phản, nêu lý do, điều kiện, mục đích và lựa chọn.
                </p>
            </div>

            <TuNoiQuickMap />
            <TuNoiCoordinatingSection />
            <TuNoiSubordinatingSection />
            <TuNoiCorrelativeSection />
            <TuNoiWritingLinkersSection />
            <TuNoiPracticeSection />
        </div>
    );
};
