import { createBrowserRouter } from "react-router";
import { Home } from "./screens/Home";
import { Search } from "./screens/Search";
import { Diseases } from "./screens/Diseases";
import { DiseaseDetail } from "./screens/DiseaseDetail";
import { Medications } from "./screens/Medications";
import { MedicationDetail } from "./screens/MedicationDetail";
import { Symptoms } from "./screens/Symptoms";
import { SymptomDetail } from "./screens/SymptomDetail";
import { Algorithms } from "./screens/Algorithms";
import { AlgorithmDetail } from "./screens/AlgorithmDetail";
import { Settings } from "./screens/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/search",
    Component: Search,
  },
  {
    path: "/diseases",
    Component: Diseases,
  },
  {
    path: "/diseases/:id",
    Component: DiseaseDetail,
  },
  {
    path: "/medications",
    Component: Medications,
  },
  {
    path: "/medications/:id",
    Component: MedicationDetail,
  },
  {
    path: "/symptoms",
    Component: Symptoms,
  },
  {
    path: "/symptoms/:id",
    Component: SymptomDetail,
  },
  {
    path: "/algorithms",
    Component: Algorithms,
  },
  {
    path: "/algorithms/:id",
    Component: AlgorithmDetail,
  },
  {
    path: "/settings",
    Component: Settings,
  },
]);