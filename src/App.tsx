import ScreenContext from "./contexts/ScreenContext"

import Layout from "./components/Layout"
import { useState } from "react"

function App() {
  const [screenState, setScreenState] = useState<number>(0)

  const screenContextValue = {
    screenState,
    setScreenState
  }

  return (
    <main className="mx-auto mt-5 max-w-md border">
      <ScreenContext.Provider value={screenContextValue}>
        <Layout />
      </ScreenContext.Provider>
    </main>
  )
}

export default App
