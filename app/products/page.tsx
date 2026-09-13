const produse = [
  { id: 1, name: "Produs A", price: 99 },
  { id: 2, name: "Produs B", price: 149 },
  { id: 3, name: "Produs C", price: 199 },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
        Produsele noastre
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {produse.map((produs) => (
          <div
            key={produs.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200 text-center"
          >
            <h2 className="text-xl font-semibold text-zinc-900 mb-2">
              {produs.name}
            </h2>
            <p className="text-zinc-600 mb-4">{produs.price} lei</p>
            <button className="rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 transition-colors">
              Adaugă în coș
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}