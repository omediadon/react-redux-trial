import { lazy, Suspense } from "react";
import LoadingIcon from "./components/common/Loading";
import "./styles.css";

const RoutesX = lazy(() => import("./routes/index"));

export default function App(props) {
  return (
    <div className="main-wrap">
      <Suspense fallback={<LoadingIcon />}>
        <RoutesX props />
      </Suspense>
    </div>
  );
}
