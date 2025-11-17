import Header from "../components/Header";
import { Check } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function Card() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prof = { name: id || "UX‑дизайнер", salary: "120 000 ₽", skills: ["Исследования", "Prototyping", "Figma"] };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
      <Header title="Карточка профессии" />
      <main className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded">img</div>
          <div>
            <h3 className="text-lg font-semibold">{prof.name}</h3>
            <div className="text-sm text-gray-500">Средняя зарплата: {prof.salary}</div>
          </div>
        </div>
        <h4 className="font-semibold mb-2">Необходимые навыки</h4>
        <div className="flex flex-wrap gap-2 mb-3">
          {prof.skills.map((s) => (
            <span key={s} className="px-2 py-1 bg-gray-100 rounded text-sm">{s}</span>
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => navigate("/plan")} className="flex-1 bg-green-600 text-white py-2 rounded flex items-center justify-center gap-2"><Check size={16} />Добавить в план</button>
          <button className="px-4 py-2 border rounded">Подробнее</button>
        </div>
      </main>
    </div>
  );
}