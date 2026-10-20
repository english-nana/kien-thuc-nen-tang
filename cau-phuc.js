const CAU_PHUC_ITEMS = [
    {
        id: "cp-01",
        vn: "Mình rất vui khi nghe rằng bạn đang dự định đến thăm Hà Nội vào tháng 6 này.",
        en: "I'm glad to hear that you are planning to visit Hanoi this June.",
        hints: ["be glad to hear: vui khi nghe", "plan to visit: dự định đến thăm", "this June: tháng 6 này"]
    },
    {
        id: "cp-02",
        vn: "Mình khuyên bạn nên ở khách sạn gần trung tâm thành phố vì nó gần nhiều địa điểm du lịch ở Hà Nội.",
        en: "I recommend staying in a hotel near the city center because it's close to many tourist attractions in Hanoi.",
        hints: ["recommend staying: khuyên nên ở", "city center: trung tâm thành phố", "tourist attractions: địa điểm du lịch"]
    },
    {
        id: "cp-03",
        vn: "Mình nghĩ bạn nên mang theo một số quần áo nhẹ và thoải mái vì thời tiết tháng 6 thì nóng và ẩm.",
        en: "I think you should pack some light and comfortable clothes since the weather during June is hot and humid.",
        hints: ["pack: mang theo", "light and comfortable clothes: quần áo nhẹ và thoải mái", "hot and humid: nóng và ẩm"]
    },
    {
        id: "cp-04",
        vn: "Mình nghe nói bạn đang dự định đi du lịch nước ngoài trong năm gap year của mình.",
        en: "I heard that you are planning to travel abroad during your gap year.",
        hints: ["I heard that: mình nghe nói rằng", "travel abroad: đi du lịch nước ngoài", "gap year: năm nghỉ trước/sau đại học"]
    },
    {
        id: "cp-05",
        vn: "Nếu bạn có thể hiểu và nói tiếng Anh trôi chảy thì việc du lịch nước ngoài sẽ rất dễ dàng.",
        en: "If you can understand and speak English fluently, it's very easy for you to travel abroad.",
        hints: ["understand and speak: hiểu và nói", "fluently: trôi chảy", "travel abroad: du lịch nước ngoài"]
    },
    {
        id: "cp-06",
        vn: "Bạn cũng cần kỹ năng giải quyết vấn đề vì bạn có thể gặp nhiều khó khăn trong chuyến đi.",
        en: "You also need problem-solving skills because you might face many problems during your journey.",
        hints: ["problem-solving skills: kỹ năng giải quyết vấn đề", "might face: có thể đối mặt", "during your journey: trong chuyến đi"]
    },
    {
        id: "cp-07",
        vn: "Mình nghĩ bạn nên lập danh sách những nơi bạn muốn đến trước.",
        en: "I think you should make a list of the places you want to visit in advance.",
        hints: ["make a list: lập danh sách", "places you want to visit: những nơi bạn muốn đến", "in advance: trước"]
    },
    {
        id: "cp-08",
        vn: "Bằng cách này, bạn không chỉ nhớ bài mà còn tận hưởng chuyến đi mà không cảm thấy căng thẳng.",
        en: "By doing this, you not only remember the lessons, but also enjoy the trip without feeling stressed.",
        hints: ["by doing this: bằng cách này", "not only...but also: không chỉ...mà còn", "without feeling stressed: mà không cảm thấy căng thẳng"]
    },
    {
        id: "cp-09",
        vn: "Mình nghe nói bạn vừa hoàn thành khóa học tiếng Anh tại River English Center và rất thích nó.",
        en: "I heard that you've just finished an English course at River English Center and really enjoyed it.",
        hints: ["you've just finished: bạn vừa hoàn thành", "English course: khóa học tiếng Anh", "really enjoyed it: rất thích nó"]
    },
    {
        id: "cp-10",
        vn: "Mình viết thư để hỏi một số thông tin về khóa học trước khi đăng ký.",
        en: "I'm writing to ask for some information about the course before I register.",
        hints: ["I'm writing to ask for: mình viết để hỏi", "some information: một số thông tin", "before I register: trước khi đăng ký"]
    },
    {
        id: "cp-11",
        vn: "Mình muốn biết liệu trung tâm có gần trung tâm thành phố và dễ tìm hay không.",
        en: "I would like to know whether it is near the city center and easy to find.",
        hints: ["would like to know: muốn biết", "whether: liệu có hay không", "easy to find: dễ tìm"]
    },
    {
        id: "cp-12",
        vn: "Mình tự hỏi liệu bạn có thể cho mình biết giáo viên ở đó như thế nào không.",
        en: "I wonder if you could tell me how the teachers are.",
        hints: ["I wonder if: mình tự hỏi liệu", "could tell me: có thể cho mình biết", "how the teachers are: giáo viên như thế nào"]
    },
    {
        id: "cp-13",
        vn: "Mình mong sớm nhận được hồi âm từ bạn.",
        en: "I'm looking forward to hearing from you soon.",
        hints: ["look forward to V-ing: mong chờ làm gì", "hear from you: nhận được hồi âm từ bạn", "soon: sớm"]
    },
    {
        id: "cp-14",
        vn: "Mình rất vui khi biết rằng bạn sẵn lòng cho Hoa ở cùng gia đình mình.",
        en: "I'm glad to hear that you are willing to let Hoa stay with your family.",
        hints: ["be willing to: sẵn lòng", "let someone stay: cho ai ở", "with your family: cùng gia đình bạn"]
    },
    {
        id: "cp-15",
        vn: "Mình chắc rằng cô ấy sẽ hòa đồng tốt với mọi người trong nhà bạn.",
        en: "I'm sure she will get along well with everyone in your house.",
        hints: ["I'm sure: mình chắc rằng", "get along well with: hòa đồng tốt với", "everyone in your house: mọi người trong nhà bạn"]
    },
    {
        id: "cp-16",
        vn: "Tôi viết thư này để bày tỏ sự không hài lòng về tình trạng phòng thay đồ tại trung tâm của bạn.",
        en: "I am writing to express my dissatisfaction with the condition of the changing room at your center.",
        hints: ["express my dissatisfaction: bày tỏ sự không hài lòng", "condition: tình trạng", "changing room: phòng thay đồ"]
    },
    {
        id: "cp-17",
        vn: "Sàn nhà ướt và trơn trượt, điều này khiến các thành viên khó đi lại an toàn.",
        en: "The floor was wet and slippery, which made it difficult for members to walk safely.",
        hints: ["wet and slippery: ướt và trơn trượt", "made it difficult: khiến việc gì khó", "walk safely: đi lại an toàn"]
    },
    {
        id: "cp-18",
        vn: "Có mùi khó chịu nồng nặc trong phòng, điều đó khiến mọi người cảm thấy không thoải mái khi ở trong phòng quá lâu.",
        en: "There was a strong and unpleasant smell in the room, which made people feel uncomfortable when staying in the room for too long.",
        hints: ["strong and unpleasant smell: mùi khó chịu nồng nặc", "feel uncomfortable: cảm thấy không thoải mái", "for too long: quá lâu"]
    },
    {
        id: "cp-19",
        vn: "Khi làm việc từ xa, nhân viên có thể làm việc ở nhà hoặc bất cứ nơi nào họ muốn.",
        en: "When working remotely, employees can work at home or anywhere they want.",
        hints: ["working remotely: làm việc từ xa", "employees: nhân viên", "anywhere they want: bất cứ nơi nào họ muốn"]
    },
    {
        id: "cp-20",
        vn: "Vì người lao động chỉ tương tác với nhau qua email hoặc các cuộc họp trực tuyến nên họ không thường giao tiếp trực tiếp.",
        en: "Since workers only interact with each other through emails or online meetings, they do not communicate directly very often.",
        hints: ["interact with each other: tương tác với nhau", "online meetings: cuộc họp trực tuyến", "communicate directly: giao tiếp trực tiếp"]
    },
    {
        id: "cp-21",
        vn: "Khi học sinh không hiểu điều gì đó, họ có thể hỏi giáo viên ngay lập tức.",
        en: "When students do not understand something, they can ask their teacher immediately.",
        hints: ["do not understand something: không hiểu điều gì đó", "ask their teacher: hỏi giáo viên", "immediately: ngay lập tức"]
    },
    {
        id: "cp-22",
        vn: "Vì học sinh không được phép dùng điện thoại hoặc mang đồ ăn vặt vào lớp nên chúng có thể tập trung hoàn toàn vào bài học.",
        en: "Since students are not allowed to use smartphones or bring snacks in class, they can fully concentrate on the lessons.",
        hints: ["be allowed to: được phép", "bring snacks: mang đồ ăn vặt", "fully concentrate on: tập trung hoàn toàn vào"]
    },
    {
        id: "cp-23",
        vn: "Nếu người học không có đam mê với nhạc cụ, họ có thể dễ cảm thấy nản.",
        en: "If young learners do not have a strong passion for musical instruments, they might feel discouraged.",
        hints: ["young learners: người học nhỏ tuổi", "strong passion for: đam mê mạnh mẽ với", "musical instruments: nhạc cụ", "feel discouraged: cảm thấy nản"]
    },
    {
        id: "cp-24",
        vn: "Tôi hiểu vì sao một số người cho rằng điện thoại di động gây ra nhiều vấn đề ở nơi làm việc.",
        en: "I understand why some people argue that mobile phones create many problems at work.",
        hints: ["understand why: hiểu vì sao", "argue that: cho rằng", "create many problems: gây ra nhiều vấn đề"]
    },
    {
        id: "cp-25",
        vn: "Một vấn đề rõ ràng là các tòa nhà kính có thể trở nên rất nóng khi có ánh nắng mạnh.",
        en: "One obvious problem is that glass buildings can become very hot when there is strong sunlight.",
        hints: ["one obvious problem: một vấn đề rõ ràng", "glass buildings: tòa nhà kính", "strong sunlight: ánh nắng mạnh"]
    },
    {
        id: "cp-26",
        vn: "Khi mọi người chủ yếu giao tiếp qua điện thoại hoặc máy tính, họ cảm thấy kém tự tin hơn khi nói chuyện trực tiếp với người khác.",
        en: "When individuals communicate mainly through phones or computers, they feel less confident when talking directly with others.",
        hints: ["individuals: mọi người/cá nhân", "communicate mainly through: chủ yếu giao tiếp qua", "less confident: kém tự tin hơn", "talking directly: nói chuyện trực tiếp"]
    },
    {
        id: "cp-27",
        vn: "Bằng cách nhìn thấy những hiện vật này, khách tham quan có thể hiểu rõ hơn những gì đã xảy ra trong quá khứ.",
        en: "By seeing these objects, visitors can better understand what happened in the past.",
        hints: ["by seeing: bằng cách nhìn thấy", "objects: hiện vật", "visitors: khách tham quan", "what happened in the past: những gì đã xảy ra trong quá khứ"]
    },
    {
        id: "cp-28",
        vn: "Khi mọi người thấy bạn bè đạt được mục tiêu, họ có thể tin rằng họ cũng có thể thành công.",
        en: "When people see their friends achieve their goals, they may believe that success is possible for them too.",
        hints: ["achieve their goals: đạt được mục tiêu", "may believe that: có thể tin rằng", "success is possible: thành công là có thể"]
    },
    {
        id: "cp-29",
        vn: "Những người chịu quá nhiều căng thẳng có thể bị đau đầu, mất ngủ hoặc thậm chí mắc các bệnh nghiêm trọng.",
        en: "People who experience too much stress may suffer from headaches, sleep problems, or even serious illnesses.",
        hints: ["experience too much stress: chịu quá nhiều căng thẳng", "suffer from: bị/mắc", "headaches: đau đầu", "serious illnesses: bệnh nghiêm trọng"]
    },
    {
        id: "cp-30",
        vn: "Nếu họ nhập thông tin ngân hàng trên một trang web không an toàn, họ có thể gặp những vấn đề nghiêm trọng.",
        en: "If they enter their bank details on an unsafe website, they may face serious problems.",
        hints: ["enter bank details: nhập thông tin ngân hàng", "unsafe website: trang web không an toàn", "face serious problems: gặp vấn đề nghiêm trọng"]
    },
    {
        id: "cp-31",
        vn: "Khi trẻ em xem và chơi những trò chơi này trong thời gian dài, chúng có thể bắt chước hành vi đó ngoài đời thực.",
        en: "When children watch and play these games for a long time, they may imitate this behavior in real life.",
        hints: ["for a long time: trong thời gian dài", "imitate this behavior: bắt chước hành vi đó", "in real life: ngoài đời thực"]
    }
];

const CAU_PHUC_CONFIG = {
    buttonClass: "bg-rose-600 text-white hover:bg-rose-700",
    theoryPoints: [
        {
            title: "1. Có một ý chính và một ý phụ",
            text: "Mệnh đề chính đứng được một mình. Mệnh đề phụ bắt đầu bằng because, since, when, if, that, which, who... để giải thích thêm."
        },
        {
            title: "2. Mệnh đề phụ đứng đầu thì thường có dấu phẩy",
            text: "Viết: If you can speak English fluently, it is easy to travel abroad. Khi mệnh đề phụ đứng sau, dấu phẩy thường không cần."
        },
        {
            title: "3. Câu hỏi gián tiếp giữ trật tự S + V",
            text: "Sau whether, if, how, why, không đảo trợ động từ như câu hỏi trực tiếp: I wonder how the teachers are."
        },
        {
            title: "4. Dùng which/who để bổ nghĩa tự nhiên hơn",
            text: "who bổ nghĩa cho người, which bổ nghĩa cho vật/sự việc. Dùng dấu phẩy với which khi muốn nói 'điều này'."
        }
    ],
    practiceTitle: "Dịch Câu Phức Việt - Anh",
    practiceSubtitle: "Chú ý mệnh đề phụ, dấu phẩy và trật tự từ. Mỗi câu đều có gợi ý từ vựng để mở khi cần."
};

const CauPhucTranslationPractice = () => {
    const [resetTick, setResetTick] = useState(0);

    const handleResetAll = () => {
        setResetTick((tick) => tick + 1);
    };

    return (
        <section className="space-y-5 scroll-mt-24">
            <div className="rounded-lg border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-5 sm:p-7 shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-rose-700">
                    Phần tiếp theo
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-950">7. Luyện Dịch Câu Phức Việt - Anh</h2>
                <p className="mt-2 text-slate-700 leading-relaxed">
                    Sau khi học mệnh đề quan hệ, học sinh luyện thêm các câu phức có <strong>because, since, when, if, that, whether, which, who</strong> và câu hỏi gián tiếp.
                </p>

                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    {CAU_PHUC_CONFIG.theoryPoints.map((point) => (
                        <div key={point.title} className="rounded-lg border border-white/80 bg-white/85 p-4 shadow-sm">
                            <div className="font-extrabold text-slate-900">{point.title}</div>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="text-xs font-black uppercase tracking-wide text-slate-500">Bài tập dịch</div>
                            <h3 className="mt-1 text-2xl font-extrabold text-slate-950">{CAU_PHUC_CONFIG.practiceTitle}</h3>
                            <p className="mt-2 text-sm sm:text-base text-slate-600">{CAU_PHUC_CONFIG.practiceSubtitle}</p>
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
                    {CAU_PHUC_ITEMS.map((item, index) => (
                        <SentencePracticeItem
                            key={item.id}
                            item={item}
                            number={index + 1}
                            config={CAU_PHUC_CONFIG}
                            resetTick={resetTick}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const LessonVietCau = () => (
    <div className="space-y-12 animate-pop pb-20">
        <CauPhucTranslationPractice />
    </div>
);
