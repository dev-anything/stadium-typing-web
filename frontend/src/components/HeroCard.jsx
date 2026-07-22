import { Link } from "react-router-dom";

const HeroCard = ({ heroword }) => {
  let letterIndex = 0;

  return (
    <main className="px-6 pb-10 sm:pt-20">
        <div className="flip-stage flex flex-wrap items-end justify-center gap-x-3 gap-y-2">
          {heroword.map((word, wi) => (
            <div key={wi} className="flex">
              {word.split("").map((char, ci) => {
                const delay = letterIndex * 0.06;
                letterIndex += 1;
                return (
                  <span
                    key={ci}
                    className="flip-tile font-display text-2xl font-bold text-[#FFB454] sm:text-4xl"
                    style={{ animationDelay: `${delay}s` }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          ))}
        </div>

        <p className="font-body mx-auto mt-8 max-w-md text-center text-sm leading-relaxed text-[#9CB0A6]">
          Type real stadium names from every league.
          <br />Get it right, and the map flies you to the next ground.
        </p>

        
      </main>
  );
}

export default HeroCard;