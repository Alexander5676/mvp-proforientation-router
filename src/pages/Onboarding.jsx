import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
      <Header title="Добро пожаловать" />
      <main className="p-6">
        <div className="h-40 bg-gray-100 flex items-center justify-center mb-4 rounded">Изображение</div>
        <h2 className="text-xl font-bold mb-2">Найди профессию, которая подходит тебе</h2>
        <p className="text-sm text-gray-600 mb-4">Короткий тест + персональный план развития. Займёт 5–7 минут.</p>
        <div className="flex gap-2">
          <button onClick={() => navigate("/test")} className="flex-1 bg-blue-600 text-white py-2 rounded">Начать тест</button>
          <button onClick={() => navigate("/results")} className="flex-1 border border-gray-200 py-2 rounded">Пропустить</button>
        </div>
      </main>
    </div>
  );
}