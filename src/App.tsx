
import Layout from "./components/Layout"
import ScreenContext from "./contexts/ScreenContext"

function App() {
  return (
    <main className="mx-auto mt-5 max-w-md border">
      <ScreenContext>
        <Layout />
      </ScreenContext>
    </main>
  )
}

export default App
