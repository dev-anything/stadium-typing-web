// data/stadiums/index.js
const modules = import.meta.glob('./*.json', { eager: true })

// modules는 { './europe.json': {...}, './asia.json': {...} } 형태
export const allStadiums = Object.values(modules).flatMap(mod => mod.default)

export const stadiumsByLeague = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    path.replace('./', '').replace('.json', ''),
    mod.default,
  ])
)