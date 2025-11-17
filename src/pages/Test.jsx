import Header from "../components/Header";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const questions = [
    "Люблю решать логические задачи",
    "Командная работа приносит мне удовольствие",
    "Мне важно творческое самовыражение"
  ];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (index < questions.length - 1) setIndex(index + 1);
    else navigate("/results");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
      <Header title="Тест интересов" />
      <main className="p-6 space-y-4">
        <div className="text-sm text-gray-600">Вопрос {index + 1} из {questions.length}</div>
        <h3 className="font-semibold">{questions[index]}</h3>
        <div className="grid grid-cols-3 gap-2">
          <button className="py-3 rounded border text-sm">Нет</button>
          <button className="py-3 rounded border text-sm">Частично</button>
          <button className="py-3 rounded bg-blue-600 text-white">Да</button>
        </div>
        <div className="flex justify-end">
          <button onClick={next} className="flex items-center gap-2 text-sm text-blue-600">
            Далее <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}