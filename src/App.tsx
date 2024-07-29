// src/App.tsx
import Layout from "./components/Layout";
import { ScreenProvider } from "./contexts/ScreenContext";

function App() {
  return (
    <main className="mx-auto mt-5 max-w-md border">
      <ScreenProvider>
        <Layout />
      </ScreenProvider>
    </main>
  );
}

export default App;
