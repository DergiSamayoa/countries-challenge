import Countries from "./components/Countries";
import Header from "./components/Header";

function App() {
  return (
    <main className="bg-lightModeBackground dark:bg-veryDarkBlue min-h-screen font-nunitoSans text-lg transition-colors">
      <Header />
      <Countries />
    </main>
  );
}

export default App;
