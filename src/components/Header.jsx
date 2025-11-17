import React from "react";

export default function Header({ title }) {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex items-center gap-3">
        <button className="text-sm text-blue-600" onClick={() => window.history.back()}>Назад</button>
      </div>
    </header>
  )
}