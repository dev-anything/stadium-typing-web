// Home.jsx — Global landing page for the stadium typing practice site (design only)

const STATS = [
  // Top stat cards: high-level numbers shown above the fold
  { value: "100+", label: "Stadiums" },
  { value: "6",    label: "Continents" },
  { value: "60s",  label: "Quick Test" },
  { value: "100%", label: "Free" },
];

const REGIONS = [
  // Region cards: label + stadium count, with a soft tint per region
  { name: "Europe",              count: 25, tint: "bg-indigo-50"  },
  { name: "Asia",                count: 25, tint: "bg-rose-50"    },
  { name: "Africa",              count: 10, tint: "bg-amber-50"   },
  { name: "North / Central Am.", count: 10, tint: "bg-emerald-50" },
  { name: "South America",       count: 20, tint: "bg-lime-50"    },
  { name: "Oceania",             count: 10, tint: "bg-sky-50"     },
];

const Home = () => {
  return (
    // Page container: full-height, neutral background, system font stack
    <div className="min-h-screen bg-gray-50 text-gray-900 font-[Pretendard,sans-serif]">

      {/* ========== Navigation ========== */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo lockup */}
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-lg">⚽</span>
            <span>Stadium Typing</span>
          </div>
          {/* Inline nav (no router, anchor links only) */}
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#regions"  className="hover:text-gray-900">Regions</a>
            <a href="#featured" className="hover:text-gray-900">Featured</a>
            {/* Single primary CTA in the nav */}
            <button
              type="button"
              className="px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-700"
            >
              Start
            </button>
          </nav>
        </div>
      </header>

      {/* ========== Hero ========== */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Headline kept short and direct */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Type the world's football stadiums.
        </h1>
        {/* One-line sub-copy */}
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Practice touch typing with 100 stadium names from 6 continents.
        </p>
        {/* Single primary CTA — no secondary button to keep it simple */}
        <div className="mt-8">
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-700"
          >
            Start Typing
          </button>
        </div>
      </section>

      {/* ========== Stats ========== */}
      <section className="max-w-5xl mx-auto px-6">
        {/* Four equal stat cells, divided by borders */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-gray-100 rounded-xl overflow-hidden">
          {STATS.map((s) => (
            // Each cell: large value, small label below
            <div key={s.label} className="px-6 py-5 text-center border-b md:border-b-0 md:border-r last:border-r-0 border-gray-100">
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Regions ========== */}
      <section id="regions" className="max-w-5xl mx-auto px-6 py-20">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Regions</h2>
          <p className="mt-1 text-sm text-gray-500">Pick a region to start practicing.</p>
        </div>
        {/* 3-column (tablet 2, mobile 1) grid of simple region cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REGIONS.map((r) => (
            // Region card: tinted background, name, count, plain text link
            <div
              key={r.name}
              className={`${r.tint} rounded-xl p-5 hover:opacity-90 transition`}
            >
              <div className="font-semibold">{r.name}</div>
              <div className="mt-1 text-sm text-gray-600">
                {r.count} stadiums
              </div>
              {/* Text-style link, not a heavy button */}
              <div className="mt-3 text-sm font-medium text-gray-900">
                Practice →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Featured ========== */}
      <section id="featured" className="max-w-5xl mx-auto px-6 pb-20">
        {/* Section header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <p className="mt-1 text-sm text-gray-500">A few well-known stadiums.</p>
        </div>
        {/* Simple text-only list — no images, no cards, no icons */}
        <ul className="divide-y divide-gray-100 bg-white border border-gray-100 rounded-xl">
          {[
            "Wembley Stadium — England",
            "Santiago Bernabeu — Spain",
            "Maracana Stadium — Brazil",
            "Seoul World Cup Stadium — South Korea",
            "Estadio Azteca — Mexico",
            "Azadi Stadium — Iran",
          ].map((line) => (
            // Plain list row, hover only changes background
            <li
              key={line}
              className="px-5 py-3 text-sm text-gray-700 hover:bg-gray-50"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      {/* ========== Footer ========== */}
      <footer className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6 text-xs text-gray-400 text-center">
          © 2026 Stadium Typing
        </div>
      </footer>
    </div>
  );
};

export default Home;
