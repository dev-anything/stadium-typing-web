// src/pages/Homepage.jsx

export default function Homepage() {
   return (
      <main className="min-h-screen bg-white text-gray-900">
         {/* Hero */}
         <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">

            <div className="mb-6 text-7xl">
               ⚽🌍
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
               Stadium Atlas
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-600">
               Learn football stadiums around the world by typing their names
               directly on an interactive map.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
               <button className="rounded-xl bg-black px-7 py-3 font-medium text-white transition hover:bg-gray-800">
                  Start Challenge
               </button>

               <button className="rounded-xl border border-gray-300 px-7 py-3 font-medium transition hover:bg-gray-100">
                  View Map
               </button>
            </div>

            <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">

               <div className="rounded-2xl border border-gray-200 p-8">
                  <div className="text-4xl">🌎</div>

                  <h3 className="mt-4 text-xl font-semibold">
                     Global Stadiums
                  </h3>

                  <p className="mt-2 text-gray-600">
                     Explore famous football stadiums from every continent.
                  </p>
               </div>

               <div className="rounded-2xl border border-gray-200 p-8">
                  <div className="text-4xl">⌨️</div>

                  <h3 className="mt-4 text-xl font-semibold">
                     Type & Learn
                  </h3>

                  <p className="mt-2 text-gray-600">
                     Improve your memory by typing stadium names on the map.
                  </p>
               </div>

               <div className="rounded-2xl border border-gray-200 p-8">
                  <div className="text-4xl">🏆</div>

                  <h3 className="mt-4 text-xl font-semibold">
                     Challenge Yourself
                  </h3>

                  <p className="mt-2 text-gray-600">
                     Track your progress and discover new stadiums every day.
                  </p>
               </div>

            </div>

         </section>
      </main>
   );
}