import ErrorBoundary from "./components/common/ErrorBoundary";
import PublicRouter from "./routes/PublicRouter";
import "./App.css";

function App() {
  return (
    <>
      <ErrorBoundary>
        <PublicRouter />
      </ErrorBoundary>
    </>
  );
}

export default App;
