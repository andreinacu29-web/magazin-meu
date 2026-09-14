"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { items } = useCart();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const [nume, setNume] = useState("");
  const [adresa, setAdresa] = useState("");
  const [comandaTrimisa, setComandaTrimisa] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setComandaTrimisa(true);
  }

  if (comandaTrimisa) {
    return (
      <div className="min-h-screen bg-zinc-50 px-6 py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-zinc-900 mb-4">
          Mulțumim, {nume}!
        </h1>
        <p className="text-zinc-600">
          Comanda ta de {total} lei a fost înregistrată.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
        Finalizează comanda
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-zinc-600">
          Coșul este gol. Adaugă produse înainte de a plasa o comandă.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white rounded-xl border border-zinc-200 p-6 flex flex-col gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Nume complet
            </label>
            <input
              type="text"
              required
              value={nume}
              onChange={(e) => setNume(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Adresă de livrare
            </label>
            <input
              type="text"
              required
              value={adresa}
              onChange={(e) => setAdresa(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 bg-white"
            />
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-zinc-200">
            <span className="font-semibold text-zinc-900">Total</span>
            <span className="font-semibold text-zinc-900">{total} lei</span>
          </div>

          <button
            type="submit"
            className="rounded-full bg-black text-white px-4 py-3 font-medium hover:bg-zinc-800 transition-colors"
          >
            Plasează comanda
          </button>
        </form>
      )}
    </div>
  );
}