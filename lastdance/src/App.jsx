import { Suspense } from "react";
import "./App.css";
import PublicRouter from "./routes/PublicRouter";
import { Loading, ErrorBoundary } from "./components";

function App() {
  return (
    <ErrorBoundary fallback={<div>Global Error...</div>}>
      <Suspense fallback={<Loading />}>
        <PublicRouter />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
