import { useMemo, useState } from "react"
import { foodOptions, foodPairings } from "./data/pairings"

const defaultFood = foodOptions[0]?.value ?? ""

function App() {
  const [selectedFood, setSelectedFood] = useState(defaultFood)

  const activePairing = useMemo(() => {
    return foodPairings[selectedFood] ?? null
  }, [selectedFood])

  return (
    <main className="app">
      <section className="panel">
        <p className="eyebrow">Table & Tap</p>
        <h1>Find the right beer for your meal</h1>
        <p className="intro">
          Choose what you are eating and get beer style suggestions with quick
          pairing notes.
        </p>

        <label htmlFor="food-select">Food type</label>
        <select
          id="food-select"
          value={selectedFood}
          onChange={(event) => setSelectedFood(event.target.value)}
        >
          {foodOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section>

      {activePairing ? (
        <section className="panel recommendations">
          <h2>{activePairing.label}</h2>
          <p className="description">{activePairing.description}</p>
          <ul>
            {activePairing.beers.map((beer) => (
              <li key={beer.style}>
                <h3>{beer.style}</h3>
                <p>{beer.reason}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  )
}

export default App
