import "./App.css";
import PublicRouter from "./routers/PublicRouter";
import { ErrorBoundary } from "./components";

function App() {
  return (
    <ErrorBoundary fallback={<div>Global Error</div>}>
      <PublicRouter />
    </ErrorBoundary>
  );
}

export default App;
