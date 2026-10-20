// BỘ ĐỊNH TUYẾN - Nối tên trên Menu với tên File Component
const LESSON_REGISTRY = {
    "Đại từ": LessonDaiTu,
    "Danh từ": LessonDanhTu,
    "Cụm Danh Từ": LessonCumDanhTu,
    "Động từ": VerbModule,
    "Giới từ": LessonGioiTu,
    "Từ nối": LessonTuNoi,
    "Tính từ": LessonTinhTu,
    "Trạng từ": LessonTrangTu,
    "Câu ghép": LessonCauGhep,
    "Câu phức": LessonVietCau,
    "Mệnh đề quan hệ": LessonMenhDeQuanHe
};
const ComingSoon = ({ lesson }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 sm:py-24 animate-pop px-4 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-200">
                {/* Icon Đang xây dựng / Đang tải */}
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
                </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3">
                Bài học <span className="text-blue-600">"{lesson}"</span> đang được cập nhật!
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-lg">
                Nội dung bài học này đang trong quá trình biên soạn để mang lại trải nghiệm học tập tốt nhất cho các bạn học viên. Vui lòng quay lại sau nhé!
            </p>
        </div>
    );
};

const App = () => {
    const [activeLesson, setActiveLesson] = useState("Danh từ");

    // Lấy Component tương ứng từ Registry
    const ActiveComponent = LESSON_REGISTRY[activeLesson];

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
            {/* Sidebar bên trái (và thanh điều hướng trên mobile) */}
            <Header activePage={activeLesson} setActivePage={setActiveLesson} />

            {/* Phần nội dung chính tận dụng toàn bộ không gian bên phải */}
            <main className="flex-1 min-w-0 w-full px-3 sm:px-6 lg:px-10 xl:px-12 py-4 sm:py-8 pb-20 overflow-x-hidden">
                {/* Hiện bài học hoặc hiện ComingSoon nếu bài học chưa có */}
                {ActiveComponent ? <ActiveComponent /> : <ComingSoon lesson={activeLesson} />}
            </main>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
