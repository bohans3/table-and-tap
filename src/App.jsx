import { useMemo, useState } from "react"
import { beerProfiles, selectorOptions } from "./data/pairings"

const defaultChoices = {
  foodType: selectorOptions.foodType[0]?.value ?? "",
  preparation: selectorOptions.preparation[0]?.value ?? "",
  spiceLevel: selectorOptions.spiceLevel[0]?.value ?? "",
  richness: selectorOptions.richness[0]?.value ?? "",
}

function scoreBeer(beer, answers) {
  const dimensions = Object.keys(answers)
  let score = 0

  dimensions.forEach((dimension) => {
    if (beer.matches[dimension]?.includes(answers[dimension])) {
      score += 1
    }
  })

  return score
}

function buildReason(beer, answers) {
  const matches = []

  Object.keys(answers).forEach((dimension) => {
    if (beer.matches[dimension]?.includes(answers[dimension])) {
      matches.push(dimension)
    }
  })

  if (matches.length === 0) {
    return "This style is still a versatile fallback even without direct flavor matches."
  }

  const readable = {
    foodType: "food style",
    preparation: "cooking method",
    spiceLevel: "spice level",
    richness: "richness",
  }

  return `Strong match on ${matches.map((key) => readable[key]).join(", ")}.`
}

function App() {
  const [answers, setAnswers] = useState(defaultChoices)

  const rankedBeers = useMemo(() => {
    return beerProfiles
      .map((beer) => ({
        ...beer,
        score: scoreBeer(beer, answers),
        matchSummary: buildReason(beer, answers),
      }))
      .sort((a, b) => b.score - a.score)
  }, [answers])

  const bestBeer = rankedBeers[0]
  const backupBeers = rankedBeers.slice(1, 4)

  const updateAnswer = (key, value) => {
    setAnswers((current) => ({
      ...current,
      [key]: value,
    }))
  }

  return (
    <main className="app">
      <section className="panel">
        <p className="eyebrow">Table & Tap</p>
        <h1>Find your best beer pairing</h1>
        <p className="intro">
          Pick your meal details and get one best beer style recommendation.
        </p>

        <div className="controls">
          <label htmlFor="food-select">Food type</label>
          <select
            id="food-select"
            value={answers.foodType}
            onChange={(event) => updateAnswer("foodType", event.target.value)}
          >
            {selectorOptions.foodType.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <label htmlFor="prep-select">Preparation</label>
          <select
            id="prep-select"
            value={answers.preparation}
            onChange={(event) => updateAnswer("preparation", event.target.value)}
          >
            {selectorOptions.preparation.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <label htmlFor="spice-select">Spice level</label>
          <select
            id="spice-select"
            value={answers.spiceLevel}
            onChange={(event) => updateAnswer("spiceLevel", event.target.value)}
          >
            {selectorOptions.spiceLevel.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <label htmlFor="richness-select">Richness</label>
          <select
            id="richness-select"
            value={answers.richness}
            onChange={(event) => updateAnswer("richness", event.target.value)}
          >
            {selectorOptions.richness.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {bestBeer ? (
        <section className="panel result">
          <p className="eyebrow">Best Match</p>
          <h2>{bestBeer.style}</h2>
          <p className="description">{bestBeer.why}</p>
          <p className="match-note">
            {bestBeer.matchSummary} Match score: {bestBeer.score}/4.
          </p>

          <h3>Other good options</h3>
          <ul>
            {backupBeers.map((beer) => (
              <li key={beer.style}>
                <h3>{beer.style}</h3>
                <p>{beer.why}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  )
}

export default App
