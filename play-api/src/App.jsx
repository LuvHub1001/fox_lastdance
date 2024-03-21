import "./App.css";
import ErrorBoundary from "./components/common/ErrorBoundary";
import TempItem from "./components/pokemon/TempItem";
import PublicRouter from "./routers/PublicRouter";

function App() {
  return (
    <ErrorBoundary>
      <TempItem />
    </ErrorBoundary>
  );
}

export default App;
