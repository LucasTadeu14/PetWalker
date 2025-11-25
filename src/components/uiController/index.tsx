import { useState } from "react";

export default function uiController() {
  const [open, setOpen] = useState(false);

  function openPanel() {
    setOpen(true);
  }

  function closePanel() {
    setOpen(false);
  }

  return (
    <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
      <button
        onClick={openPanel}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Abrir painel da direita
      </button>

      {open && (
        <div
          onClick={closePanel}
          className="fixed inset-0 bg-black/40"
        ></div>
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-white shadow-xl
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-5">
          <h2 className="text-xl font-semibold mb-4">Painel da direita</h2>

          <button
            onClick={closePanel}
            className="px-3 py-2 bg-red-500 text-white rounded"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
