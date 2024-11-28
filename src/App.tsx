import { Routes, Route } from "react-router-dom";
import public_pages from "./routes/public.routes";
import { Suspense } from "react";
import ScreenLoader from "./components/loaders/ScreenLoader";

export default function App() {
  return (
    <Routes>
      {Object.entries(public_pages).map(([key, Element]) => (
        <Route
          key={key}
          path={key}
          element={
            <Suspense fallback={<ScreenLoader />}>
              <Element />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
