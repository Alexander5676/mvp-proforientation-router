import Header from "../components/Header";

export default function Plan() {
  const tasks = [
    { id: 1, title: "Курс по UX‑исследованиям", done: false, due: "2 нед" },
    { id: 2, title: "Портфолио: 2 кейса", done: true, due: "1 мес" }
  ];

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
      <Header title="Персональный план" />
      <main className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Цель: Стать UX‑дизайнером</h3>
            <div className="text-xs text-gray-500">Ожидаемое время: 6–9 месяцев</div>
          </div>
          <div className="text-sm text-gray-600">Прогресс: 45%</div>
        </div>
        <ul className="space-y-3">
          {tasks.map((t) => (
            <li key={t.id} className="flex items-center justify-between p-3 border rounded">
              <div className="flex items-center gap-3">
                <input type="checkbox" defaultChecked={t.done} />
                <div>
                  <div className="font-medium">{t.title}</div>
                  <div className="text-xs text-gray-500">Срок: {t.due}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">Напоминание</div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded">Добавить задачу</button>
          <button className="px-4 py-2 border rounded">Поделиться</button>
        </div>
      </main>
    </div>
  );
}