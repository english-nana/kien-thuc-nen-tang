// Khai báo React
const { useState, useEffect, useRef, Fragment } = React;

// --- 1. HỆ THỐNG ICONS ---
const IconInfo = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>;
const IconCheck = ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>;
const IconX = ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>;
const IconRefresh = ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21h5v-5" /></svg>;
const IconGamepad = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="15" x2="15.01" y1="13" y2="13" /><line x1="18" x2="18.01" y1="11" y2="11" /><rect width="20" height="12" x="2" y="6" rx="2" /></svg>;
const Activity = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
const Zap = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
const Layers = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m2.6 10.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9" /><path d="m2.6 14.08 8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9" /></svg>;
const ArrowRight = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
const MapPin = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const Clock = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
const Settings = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2l-.05.1a2 2 0 0 1-2.81.8l-.12-.07a2 2 0 0 0-2.71.53l-.22.39a2 2 0 0 0 .53 2.71l.1.07a2 2 0 0 1 .8 2.81l-.07.12a2 2 0 0 0 .53 2.71l.22.39a2 2 0 0 0 2.71-.53l.07-.1a2 2 0 0 1 2.81-.8l.12.07a2 2 0 0 0 2.71-.53l.22-.39a2 2 0 0 0-.53-2.71l-.1-.07a2 2 0 0 1-.8-2.81l.07-.12a2 2 0 0 0-.53-2.71l-.22-.39a2 2 0 0 0-2.71.53Z" /><circle cx="12" cy="12" r="3" /></svg>;
const Users = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const Repeat = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 2 4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>;
const HelpCircle = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" x2="12.01" y1="17" y2="17" /></svg>;
const CheckCircle2 = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>;
const XCircle = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>;
const ChevronDown = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>;
const ChevronUp = ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>;
const AlertTriangle = ({ size = 20, className = "" }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
const ShieldAlert = ({ size = 20, className = "" }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>;

// --- 2. DỮ LIỆU MENU MỚI ---
const MENU_DATA = {
    tuDon: [
        { name: "Danh từ" },
        { name: "Cụm Danh Từ" },
        { name: "Đại từ" },
        { name: "Động từ" },
        { name: "Tính từ" },
        { name: "Trạng từ" },
        { name: "Giới từ" },
        { name: "Từ nối" }
    ],
    cau: [
        { name: "Câu đơn" },
        { name: "Câu ghép" },
        { name: "Câu phức" },
        { name: "Mệnh đề quan hệ" }
    ]
};

const ALL_MENU_ITEMS = [...MENU_DATA.tuDon, ...MENU_DATA.cau];

// --- 3. SIDEBAR TRÁI & HEADER MOBILE ---
const Header = ({ activePage, setActivePage }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Hàm chuyển bài học
    const handleNavigate = (e, lessonName) => {
        if (e) e.preventDefault();
        setActivePage(lessonName);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileOpen(false);
    };

    const renderNavButton = (item) => {
        const isActive = activePage === item.name;
        return (
            <button
                key={item.name}
                onClick={(e) => handleNavigate(e, item.name)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-bold transition-all duration-150 ${
                    isActive
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
                }`}
            >
                <span className="truncate">{item.name}</span>
                {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                )}
            </button>
        );
    };

    const renderSidebarContent = () => (
        <div className="flex flex-col h-full select-none">
            {/* LOGO VÀ TÊN TRANG */}
            <div className="h-16 px-4 border-b border-slate-200 flex items-center shrink-0">
                <div
                    className="flex items-center gap-2.5 cursor-pointer group min-w-0"
                    onClick={(e) => handleNavigate(e, "Danh từ")}
                >
                    <div className="w-9 h-9 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <div className="font-extrabold text-slate-800 text-[15px] leading-tight truncate group-hover:text-blue-700 transition-colors">
                            Lấy Lại Gốc Tiếng Anh
                        </div>
                        <div className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                            Lộ trình ngữ pháp nền tảng
                        </div>
                    </div>
                </div>
            </div>

            {/* DANH SÁCH BÀI HỌC */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
                {/* Nhóm 1: Từ & Cụm từ */}
                <div>
                    <div className="px-3.5 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                        Từ & Cụm từ
                    </div>
                    <div className="space-y-1">
                        {MENU_DATA.tuDon.map(renderNavButton)}
                    </div>
                </div>

                <div className="h-px bg-slate-100 mx-2"></div>

                {/* Nhóm 2: Cấu trúc câu */}
                <div>
                    <div className="px-3.5 mb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                        Cấu trúc câu
                    </div>
                    <div className="space-y-1">
                        {MENU_DATA.cau.map(renderNavButton)}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
            {/* THANH TOP BAR TRÊN MOBILE */}
            <header className="md:hidden sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
                <div className="px-3.5 h-13 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                        <button
                            onClick={() => setIsMobileOpen(true)}
                            className="p-2 -ml-1.5 text-slate-700 hover:bg-slate-100 active:bg-slate-200 rounded-xl transition-colors shrink-0"
                            aria-label="Mở danh mục bài học"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        </button>
                        <span className="font-extrabold text-slate-800 text-[15px] truncate">Lấy Lại Gốc Tiếng Anh</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200 shrink-0">
                        {activePage}
                    </span>
                </div>
                {/* Thanh cuộn ngang chuyển bài nhanh trên điện thoại */}
                <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar px-3 py-2 bg-slate-50/90 border-t border-slate-100">
                    {ALL_MENU_ITEMS.map((item) => {
                        const isActive = activePage === item.name;
                        return (
                            <button
                                key={item.name}
                                onClick={(e) => handleNavigate(e, item.name)}
                                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    isActive
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-white text-slate-600 border border-slate-200/80 active:bg-slate-100'
                                }`}
                            >
                                {item.name}
                            </button>
                        );
                    })}
                </div>
            </header>

            {/* DRAWER SIDEBAR TRÊN MOBILE */}
            {isMobileOpen && (
                <div className="md:hidden fixed inset-0 z-50 flex">
                    <div
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
                        onClick={() => setIsMobileOpen(false)}
                    ></div>
                    <aside className="relative w-64 max-w-[82vw] bg-white h-full shadow-2xl flex flex-col z-10 animate-pop">
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            className="absolute top-4 right-3 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
                        >
                            <IconX size={20} />
                        </button>
                        {renderSidebarContent()}
                    </aside>
                </div>
            )}

            {/* SIDEBAR CỐ ĐỊNH BÊN TRÁI TRÊN DESKTOP */}
            <aside className="hidden md:flex flex-col shrink-0 w-60 lg:w-64 bg-white border-r border-slate-200 sticky top-0 h-screen z-30">
                {renderSidebarContent()}
            </aside>
        </Fragment>
    );
};

// --- 4. COMPONENTS DÙNG CHUNG KHÁC ---

// Dành cho các câu click hiện tiếng Việt
const ClickableSentence = ({ en, vn }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="mb-1.5 last:mb-0 w-full">
            <div className="cursor-pointer group inline-flex flex-wrap items-center gap-x-3 gap-y-1 w-full" onClick={() => setShow(!show)}>
                <span className="hover:bg-slate-100 transition-colors rounded px-2 py-1 leading-snug text-slate-700 font-medium whitespace-normal" dangerouslySetInnerHTML={{ __html: en }}></span>
                {show && (
                    <span className="text-[13px] sm:text-sm text-slate-600 bg-white px-3 py-1 rounded-lg shadow-sm border border-slate-200 animate-pop border-l-4 border-l-blue-400 whitespace-normal">
                        🇻🇳 {vn}
                    </span>
                )}
            </div>
        </div>
    );
};

const ClickableSentenceInline = ({ en, vn }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="w-full animate-pop">
            <div className="cursor-pointer group flex flex-row items-center flex-wrap gap-2 w-full" onClick={() => setShow(!show)}>
                <span className="hover:bg-slate-100 transition-colors rounded px-2 py-1.5 leading-relaxed text-slate-700 font-medium whitespace-normal" dangerouslySetInnerHTML={{ __html: en }}></span>
                {show && <span className="text-[13px] sm:text-sm text-slate-600 bg-yellow-50 px-3 py-1.5 rounded-lg shadow-sm border border-yellow-200 animate-pop border-l-4 border-l-yellow-400 whitespace-normal">🇻🇳 {vn}</span>}
            </div>
        </div>
    );
};

const ClickableItem = ({ en, vn, textClass = "text-slate-700" }) => {
    const [show, setShow] = useState(false);
    return (
        <li className="mb-1.5 last:mb-0 text-slate-800">
            <span
                onClick={() => setShow(!show)}
                className={`cursor-pointer transition-colors duration-200 rounded px-1.5 py-0.5 leading-snug font-medium ${show ? 'bg-blue-600 text-white' : `hover:bg-blue-50 ${textClass}`}`}
                dangerouslySetInnerHTML={{ __html: en }}
            ></span>
            {show && <span className="ml-2 text-slate-500 text-sm italic animate-pop">({vn})</span>}
        </li>
    );
};

// Component xử lý hiệu ứng thu gọn/mở rộng cho từng ví dụ
const StructureExample = ({ ex }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className="py-1.5 border-b border-slate-100 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">

                {/* ĐÃ THAY ĐỔI Ở ĐÂY: Thêm cursor-pointer và onClick vào thẻ div bao bọc toàn bộ câu */}
                <div
                    className="flex items-start sm:items-center gap-2.5 sm:gap-3 flex-1 cursor-pointer group"
                    onClick={() => setShowDetails(!showDetails)}
                    title="Bấm để xem/ẩn chi tiết"
                >
                    {ex.isCorrect ? (
                        <div className="w-5 h-5 mt-0.5 sm:mt-0 rounded bg-green-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-green-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    ) : (
                        <div className="w-5 h-5 mt-0.5 sm:mt-0 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </div>
                    )}
                    <div className="text-sm sm:text-base text-slate-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: ex.html }}></div>
                </div>

                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="self-start sm:self-auto ml-7 sm:ml-0 px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 text-slate-500 text-[11px] sm:text-xs font-medium hover:bg-slate-50 whitespace-nowrap transition-colors"
                >
                    {showDetails ? "Đóng chi tiết" : "Bấm xem chi tiết"}
                </button>
            </div>

            {showDetails && (
                <div className="mt-2.5 ml-0 sm:ml-8 pt-2.5 border-t border-slate-100 animate-pop">
                    <div className="text-xs sm:text-sm text-slate-600 italic mb-2">🇻🇳 {ex.vn}</div>
                    {!ex.isCorrect && (
                        <div className="text-xs sm:text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 mt-2">
                            <strong>Giải thích:</strong> {ex.exp}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// --- GIAO DIỆN CẤU TRÚC (STRUCTURE ROW) ---
const StructureRow = ({ struct, activeToken, setActiveToken }) => {
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
                            className={`flex flex-col items-center justify-center min-w-[58px] sm:min-w-[76px] py-1.5 px-2 sm:px-3 rounded-xl border-2 transition-all duration-200 ${activeToken === token.id
                                    ? 'border-blue-400 ring-2 ring-blue-100 bg-white shadow-sm scale-105'
                                    : token.isHighlight
                                        ? 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100'
                                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            <span className={`font-bold text-sm sm:text-lg ${activeToken === token.id ? 'text-slate-800' : ''}`}>{token.code}</span>
                            <span className={`text-[10px] sm:text-[11px] mt-0.5 whitespace-nowrap ${activeToken === token.id ? 'text-slate-500' : ''}`}>{token.label}</span>
                        </button>

                        {/* Popup trên màn hình sm trở lên */}
                        {activeToken === token.id && (
                            <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 z-[100] pointer-events-none">
                                <div className="bg-slate-800 text-white p-4 rounded-xl shadow-xl animate-pop text-center flex flex-col items-center relative pointer-events-auto">
                                    <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent border-b-slate-800"></div>
                                    <div className="font-bold text-blue-300 text-sm mb-1">{token.type}</div>
                                    <p className="text-sm leading-snug text-slate-200">{token.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    {i < struct.tokens.length - 1 && <span className="text-slate-300 font-bold text-base sm:text-xl">+</span>}
                </Fragment>
            ))}
            </div>
            {/* Hộp giải thích trên màn hình điện thoại (không bị tràn viền) */}
            {selectedTokenObj && (
                <div className="sm:hidden mt-3 bg-slate-800 text-white p-3 rounded-xl shadow-md animate-pop text-center">
                    <div className="font-bold text-blue-300 text-xs mb-1">{selectedTokenObj.label} ({selectedTokenObj.code}) — {selectedTokenObj.type}</div>
                    <p className="text-xs leading-relaxed text-slate-200">{selectedTokenObj.desc}</p>
                </div>
            )}
        </div>
        <div>
            <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">Ví dụ phân tích:</div>
            <div className="space-y-2 sm:space-y-3">
                {struct.examples.map(ex => (
                    <StructureExample key={ex.id} ex={ex} />
                ))}
            </div>
        </div>
    </div>
    );
};

// --- Ô NHẬP LIỆU INLINE (Bấm chữ hiện ô) ---
const InlinePronounInput = ({ expected, vietnamese }) => {
    const [val, setVal] = useState("");
    const [isOk, setIsOk] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // Trạng thái kiểm tra đang gõ hay hiện chữ
    const inputRef = useRef(null);

    // Tự động focus vào ô nhập liệu khi vừa bấm vào chữ
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (val.toLowerCase().trim() === expected.toLowerCase()) {
                setIsOk(true);
                setIsError(false);
            } else if (val.trim() !== "") {
                setIsError(true);
                setTimeout(() => setIsError(false), 500); // Rung báo lỗi
            }
        }
    };

    // Nếu chưa bấm (chưa edit) và cũng chưa làm đúng -> Hiện chữ tiếng Việt
    if (!isEditing && !isOk) {
        return (
            <span
                onClick={() => setIsEditing(true)}
                className="mx-1 font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded cursor-pointer hover:bg-blue-100 transition-colors inline-block shadow-sm border border-blue-200/50"
                title="Bấm để điền từ tiếng Anh"
            >
                {vietnamese}
            </span>
        );
    }

    // Khi đã bấm vào -> Hiện ô nhập liệu
    return (
        <span className="inline-flex items-center mx-1 relative align-middle">
            <input
                ref={inputRef}
                type="text"
                value={isOk ? expected : val}
                onChange={(e) => {
                    setVal(e.target.value);
                    setIsError(false);
                    if (e.target.value.toLowerCase().trim() === expected.toLowerCase()) setIsOk(true);
                }}
                onBlur={() => {
                    // Nếu click ra ngoài mà chưa gõ chữ nào thì tự trả lại chữ tiếng Việt
                    if (val.trim() === "" && !isOk) setIsEditing(false);
                }}
                onKeyDown={handleKeyDown}
                className={`w-16 sm:w-20 border-b-2 outline-none text-center transition-all ${isOk ? 'border-emerald-500 text-emerald-600 font-bold bg-emerald-50'
                        : isError ? 'border-red-500 bg-red-50 text-red-600 font-bold animate-shake'
                            : 'border-blue-500 focus:border-blue-600 bg-blue-50 text-slate-800 font-medium'
                    }`}
                placeholder=""
                disabled={isOk}
            />
        </span>
    );
};
// --- THÊM MỚI: COMPONENT SO SÁNH ĐÚNG/SAI ---
const WrongRightPair = ({ wrong, right, note }) => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-4 transition-all hover:shadow-md">
            <div className="p-3 sm:p-4 bg-red-50/50 border-b border-red-100 flex items-start gap-3">
                <div className="mt-0.5 text-red-500 bg-white rounded-full shadow-sm"><XCircle size={20} /></div>
                <div className="text-slate-600 line-through decoration-red-400/50">{wrong}</div>
            </div>
            <div className="p-3 sm:p-4 bg-emerald-50/50 flex items-start gap-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
                <div className="mt-0.5 text-emerald-600 bg-white rounded-full shadow-sm"><CheckCircle2 size={20} /></div>
                <div>
                    <div className="text-slate-800 font-medium" dangerouslySetInnerHTML={{ __html: right }}></div>
                    {note && <div className="text-sm text-emerald-700 mt-1.5 bg-emerald-100/50 inline-block px-2 py-0.5 rounded">{note}</div>}
                </div>
            </div>
        </div>
    );
};
