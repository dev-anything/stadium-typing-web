import { Link } from "react-router-dom";
import Stadium from "@components/Stadium";
import LeagueBtnSelector from "@components/LeagueBtnSelector";
import Header from "@components/Header";
import Footer from "./Footer";
import ContentLayout from "./ContentLayout";
import HeroCard from "./HeroCard";
import { useState } from "react";
import StartBtn from "./StartBtn";

const heroWords = ["TYPE", "THE", "PITCH"];

const routine = [
  {
    n: "01",
    title: "Read the board",
    desc: "The name of your next stadium appears on screen.",
  },
  {
    n: "02",
    title: "Type it clean",
    desc: "Finish the name accurately. Mistakes are marked in red.",
  },
  {
    n: "03",
    title: "Fly to the next ground",
    desc: "The map glides smoothly to your next stop.",
  },
];

const stats = [
  { value: "120", label: "GROUNDS" },
  { value: "45", label: "NATIONS" },
  { value: "6", label: "CONTINENTS" },
];

const LEAGUE = [
  { key: "epl", label: "Premier League" },
  { key: "efl", label: "EFL Championship" },
  { key: "laliga", label: "La Liga" },
  { key: "bundesliga", label: "Bundesliga" },
  { key: "seriea", label: "Serie A" },
  { key: "ligue1", label: "Ligue 1" },
  { key: "eredivisie", label: "Eredivisie" },
  { key: "primeiraliga", label: "Premeira Liga" },
  { key: "saudi", label: "Saudi Pro League" },
  { key: "k1", label: "K League 1" },
  { key: "k2", label: "K League 2" },
  { key: "random", label: "Infinite mode"}
]

const Home = () => {
  const [popUp, setPopUp] = useState(false);
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-[-15%] h-105 w-105 -translate-x-1/2 rounded-full bg-[#3CCB6F] opacity-[0.12] blur-[140px]" />
      <HeroCard heroword={heroWords}/>
      <StartBtn onClick={() => setPopUp(!popUp)} />
      

      <LeagueBtnSelector isOpen={popUp} onClose={setPopUp} league={LEAGUE} />

      

      {/* 진행 순서 — 카드/테두리 없이 심플하게 */}
      {/*<section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          {routine.map((step) => (
            <div key={step.n}>
              <span className="font-ibm-plex-mono text-xs tracking-widest text-[#3CCB6F]">
                {step.n}
              </span>
              <h3 className="font-display mt-2 text-base font-semibold">
                {step.title}
              </h3>
              <p className="font-body mt-1.5 text-sm leading-relaxed text-[#8A9A91]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>*/}

      {/* 통계 — 얇은 구분선만 사용 */}
      {/*<section className="border-t border-[#3CCB6F1a]">
        <div className="mx-auto flex max-w-2xl justify-center gap-12 px-6 py-12 sm:gap-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-ibm-plex-mono text-2xl font-bold text-[#3CCB6F] sm:text-3xl">
                {s.value}
              </p>
              <p className="font-ibm-plex-mono mt-1 text-[10px] tracking-[0.2em] text-[#5C6F65]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>*/}
      
    </>
  );
};

export default Home;