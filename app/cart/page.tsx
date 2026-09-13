"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items } = useCart();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
        Coșul tău
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-zinc-600">Coșul este gol.</p>
      ) : (
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl border border-zinc-200 divide-y divide-zinc-200">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-6 py-4"
              >
                <span className="text-zinc-900">{item.name}</span>
                <span className="text-zinc-600">{item.price} lei</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6 px-2">
            <span className="text-lg font-semibold text-zinc-900">
              Total
            </span>
            <span className="text-lg font-semibold text-zinc-900">
              {total} lei
            </span>
          </div>
        </div>
      )}
    </div>
  );
}