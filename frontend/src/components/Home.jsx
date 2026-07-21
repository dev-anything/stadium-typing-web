// Home.jsx — 세계 경기장 이름 타이핑 연습 웹사이트의 홈페이지 (디자인 전용)

const STATS = [
  // 상단 스탯 카드에 표시할 핵심 지표
  { label: "Stadiums", value: "100", suffix: "+" },
  { label: "Continents", value: "6" },
  { label: "Practice Modes", value: "3" },
  { label: "Free to Play", value: "100", suffix: "%" },
];

const REGIONS = [
  // 지역 카드: 이모지(대륙 상징), 이름, 포함된 경기장 수
  { emoji: "🏟️", name: "Europe",          count: 25, accent: "from-indigo-500 to-blue-500" },
  { emoji: "🏯", name: "Asia",            count: 25, accent: "from-rose-500 to-pink-500" },
  { emoji: "🦁", name: "Africa",          count: 10, accent: "from-amber-500 to-orange-500" },
  { emoji: "🗽", name: "North/Central America", count: 10, accent: "from-emerald-500 to-teal-500" },
  { emoji: "🌴", name: "South America",   count: 20, accent: "from-lime-500 to-green-500" },
  { emoji: "🏝️", name: "Oceania",         count: 10, accent: "from-sky-500 to-cyan-500" },
];

const FEATURES = [
  // 주요 기능 카드: 아이콘, 제목, 설명
  { icon: "🗺️", title: "실시간 지도",   desc: "입력한 경기장 위치를 Leaflet 지도로 즉시 확인합니다." },
  { icon: "⌨️", title: "정확도 측정",   desc: "글자 단위로 정답/오타를 판정해 WPM과 정확도를 제공합니다." },
  { icon: "🌍", title: "전 지역 연습",  desc: "6개 대륙, 100개 이상의 경기장으로 다양한 지명을 익히세요." },
];

const FEATURED = [
  // 하이라이트 경기장: 메인 화면에 노출할 대표 명소
  { name: "Wembley Stadium",         country: "England",     emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { name: "Santiago Bernabeu",       country: "Spain",       emoji: "🇪🇸" },
  { name: "Maracana Stadium",        country: "Brazil",      emoji: "🇧🇷" },
  { name: "Azadi Stadium",           country: "Iran",        emoji: "🇮🇷" },
  { name: "Seoul World Cup Stadium", country: "South Korea", emoji: "🇰🇷" },
  { name: "Estadio Azteca",          country: "Mexico",      emoji: "🇲🇽" },
];

const Home = () => {
  return (
    // 전체 컨테이너: 최소 화면 높이, 흰 배경, 어두운 텍스트
    <div className="min-h-screen bg-white text-gray-900 font-[Pretendard,sans-serif]">

      {/* ========== 네비게이션 바 ========== */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        {/* max-w 컨테이너로 가로폭 제한, 좌우 패딩 */}
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* 로고 영역 */}
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="text-2xl">⚽</span>
            <span>Stadium Typing</span>
          </div>
          {/* 메뉴 링크 (디자인만, 라우팅 없음) */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#regions" className="hover:text-gray-900 transition">Regions</a>
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#featured" className="hover:text-gray-900 transition">Featured</a>
            {/* 강조 CTA 버튼 */}
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition"
            >
              Start Typing
            </button>
          </nav>
        </div>
      </header>

      {/* ========== 히어로 섹션 ========== */}
      <section className="relative overflow-hidden">
        {/* 배경 그라데이션 장식 (커스텀 유틸 사용) */}
        <div className="absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          {/* 상단 작은 배지 */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            100+ stadiums · 6 continents
          </span>
          {/* 메인 타이틀 */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            타이핑으로 떠나는<br className="md:hidden" />
            <span className="text-emerald-600"> 세계 축구장 여행</span>
          </h1>
          {/* 서브 카피 */}
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            전 세계 100개 경기장 이름을 따라 치며 타자 실력을 키워보세요.
            입력한 경기장은 실시간 지도로 확인할 수 있습니다.
          </p>
          {/* CTA 버튼 그룹 */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* 메인 CTA: 짙은 배경 + 호버 시 살짝 떠오르는 효과 */}
            <button
              type="button"
              className="px-7 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 hover:-translate-y-0.5 transition shadow-lg shadow-gray-900/10"
            >
              타이핑 시작하기 →
            </button>
            {/* 보조 CTA: 테두리만 있는 버튼 */}
            <button
              type="button"
              className="px-7 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:border-gray-900 transition"
            >
              둘러보기
            </button>
          </div>
        </div>
      </section>

      {/* ========== 스탯 카드 ========== */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
        {/* 모바일 2열 / 데스크탑 4열 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            // 각 지표를 카드로 표현
            <div
              key={s.label}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {s.value}
                <span className="text-emerald-500">{s.suffix ?? ""}</span>
              </div>
              <div className="mt-1 text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 지역별 카드 ========== */}
      <section id="regions" className="max-w-6xl mx-auto px-6 py-24">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
            Browse by Region
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">지역별 경기장</h2>
          <p className="mt-3 text-gray-500">원하는 대륙을 골라 그 지역의 명소들을 연습하세요.</p>
        </div>
        {/* 3열(태블릿 2열, 모바일 1열) 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REGIONS.map((r) => (
            // 지역 카드: 그라데이션 상단 띠 + 이모지 + 이름 + 카운트
            <div
              key={r.name}
              className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition"
            >
              {/* 상단 그라데이션 영역 */}
              <div className={`h-24 bg-gradient-to-br ${r.accent} flex items-center justify-center text-5xl`}>
                <span className="animate-float">{r.emoji}</span>
              </div>
              {/* 본문 */}
              <div className="p-5">
                <h3 className="text-lg font-bold">{r.name}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  총 <span className="font-semibold text-gray-900">{r.count}</span>개의 경기장
                </p>
                {/* 카드 하단 액션 */}
                <button
                  type="button"
                  className="mt-4 w-full py-2 rounded-lg bg-gray-50 text-gray-800 text-sm font-semibold group-hover:bg-gray-900 group-hover:text-white transition"
                >
                  이 지역 연습하기 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 주요 기능 ========== */}
      <section id="features" className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          {/* 섹션 헤더 */}
          <div className="text-center mb-12">
            <p className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
              Why Stadium Typing
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">주요 기능</h2>
          </div>
          {/* 기능 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              // 기능 카드: 둥근 사각형 + 아이콘 + 제목 + 설명
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 추천 경기장 ========== */}
      <section id="featured" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
            Featured Stadiums
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">대표 명소</h2>
          <p className="mt-3 text-gray-500">전 세계에서 가장 유명한 경기장들을 만나보세요.</p>
        </div>
        {/* 2열(태블릿 3열, 모바일 2열) 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURED.map((s) => (
            // 경기장 카드: 국기 + 이름 + 국가
            <div
              key={s.name}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:border-emerald-300 hover:shadow-md transition cursor-pointer"
            >
              <div className="text-3xl">{s.emoji}</div>
              <div className="mt-3 font-bold text-gray-900 leading-snug">{s.name}</div>
              <div className="text-xs text-gray-500 mt-1">{s.country}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== 하단 CTA 배너 ========== */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-gray-900 text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">지금 바로 시작하세요</h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            60초만 투자해도 손가락이 빨라지는 게 느껴질 거예요.
          </p>
          <button
            type="button"
            className="mt-8 px-8 py-3 rounded-xl bg-emerald-500 text-gray-900 font-bold hover:bg-emerald-400 transition"
          >
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* ========== 푸터 ========== */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>⚽</span>
            <span className="font-semibold text-gray-700">Stadium Typing</span>
          </div>
          <div>© 2026 Stadium Typing. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
