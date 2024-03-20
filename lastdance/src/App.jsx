import ErrorBoundary from "./components/ErrorBoundary";
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
