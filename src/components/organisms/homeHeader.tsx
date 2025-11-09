import Logo from "../../assets/images/logo.svg";

export const HomeHeader = () => (
  <header className="mb-8">
    <div className="flex items-center gap-2 mb-2">
      <img src={Logo} alt="Logo" className="w-auto h-auto object-contain" />
      <h1 className="text-white text-xl font-semibold tracking-wide m-0 leading-snug">
          Align 
        </h1>
    </div>
    <h2 className="text-2xl font-bold">Alinhando O Futuro A Dois</h2>
    <p className="text-gray-400 text-sm">O futuro começa agora.</p>
  </header>
);