import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();
  const matches = [
    { name: "UX‑дизайнер", score: 86, short: "Креатив, исследования, интерфейсы" },
    { name: "Data Analyst", score: 74, short: "Аналитика, SQL, визуализация" },
    { name: "Frontend‑разработчик", score: 68, short: "JS, UI, интерактивность" }
  ];
  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
      <Header title="Результаты" />
      <main className="p-6">
        <h2 className="text-lg font-semibold mb-2">Топ‑профессии для вас</h2>
        <p className="text-sm text-gray-600 mb-4">Показано совпадение интересов и навыков</p>
        <ul className="space-y-3">
          {matches.map((m) => (
            <li key={m.name} className="flex items-center justify-between p-3 border rounded">
              <div>
                <div className="font-medium">{m.name}</div>
                <div className="text-xs text-gray-500">{m.short}</div>
              </div>
              <div className="text-sm text-gray-700">{m.score}%</div>
              <button onClick={() => navigate(`/card/${m.name}`)} className="ml-4 text-sm text-blue-600">Открыть</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}