import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          AI Portrait Store
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Transforma tu foto en arte futurista con IA
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg transform transition hover:scale-105 flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          Generar Retrato - $49
        </button>
      </div>
    </div>
  );
}