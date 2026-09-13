export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 px-6 text-center">
      <h1 className="text-4xl font-bold text-zinc-900 mb-4">
        Magazinul Meu
      </h1>
      <p className="text-lg text-zinc-600 max-w-md mb-8">
        Produse alese cu grijă, livrate rapid, exact ce cauți.
      </p>
      <a
        href="/products"
        className="rounded-full bg-black text-white px-6 py-3 font-medium hover:bg-zinc-800 transition-colors"
      >
        Vezi produsele
      </a>
    </div>
  );
}