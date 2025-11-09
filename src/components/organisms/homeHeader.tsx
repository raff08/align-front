import { AlignLogo } from "../atoms/logoAlign";
export const HomeHeader = () => (
  <header className="mb-8">
    <div className="flex items-center gap-2 mb-2">
      <AlignLogo />
      <h1 className="text-xl font-semibold">Align</h1>
    </div>
    <h2 className="text-2xl font-bold">Alinhando O Futuro A Dois</h2>
    <p className="text-gray-400 text-sm">O futuro começa agora.</p>
  </header>
);