import { SignupForm } from "../organisms/signupForm";
import Logo from "../../assets/images/logo.svg"
import ImageBackground from "../../assets/images/image-bg.png"

export default function Signup() {
  return (
    <div className="min-h-screen bg-[#3A483E] flex flex-col items-center justify-center p-0">
      
      <div className="mb-8 flex items-center justify-center gap-3 pt-4.5">
        <div className="w-8 h-8 flex items-center justify-center">
          <img src={Logo} alt="Logo" className="w-auto h-auto object-contain" />
        </div>
        <h1 className="text-white text-xl font-semibold tracking-wide m-0 leading-snug">
          Align 
        </h1>
      </div>

      <div className="flex gap-4 mb-12">
        <div className="w-auto h-auto bg-[#3d4e4a] rounded-lg overflow-hidden">
          <img 
            src={ImageBackground} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <SignupForm />
      
    </div>
  );
}