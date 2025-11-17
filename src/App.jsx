import { Routes, Route, Link } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Test from "./pages/Test";
import Results from "./pages/Results";
import Card from "./pages/Card";
import Plan from "./pages/Plan";

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <nav className="max-w-md mx-auto flex flex-wrap items-center justify-between mb-6 gap-2">
        <div className="flex flex-wrap gap-2">
          <Link to="/" className="px-3 py-1 rounded bg-white shadow">Онбординг</Link>
          <Link to="/test" className="px-3 py-1 rounded bg-white shadow">Тест</Link>
          <Link to="/results" className="px-3 py-1 rounded bg-white shadow">Результаты</Link>
          <Link to="/card/UX-дизайнер" className="px-3 py-1 rounded bg-white shadow">Карточка</Link>
          <Link to="/plan" className="px-3 py-1 rounded bg-white shadow">План</Link>
        </div>
        <div className="text-sm text-gray-500">Router‑навигация</div>
      </nav>

      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/test" element={<Test />} />
        <Route path="/results" element={<Results />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </div>
  );
}