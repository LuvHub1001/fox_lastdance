import "./App.css";
// import ErrorBoundary from "./components/common/ErrorBoundary";
import PublicRouter from "./routers/PublicRouter";
import { ErrorBoundary } from "./components";

function App() {
  return (
    <ErrorBoundary>
      <PublicRouter />
    </ErrorBoundary>
  );
}

export default App;
