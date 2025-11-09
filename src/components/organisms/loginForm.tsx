import React from "react";
import { useState } from "react";
import { Button } from "../atoms/button";
import { FormField } from "../molecules/formField";
import { useNavigate } from "react-router-dom";


export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    console.log("Login:", formData);
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div 
      className="bg-white rounded-t-3xl p-8 w-full max-w-sm mx-auto shadow-2xl 
                 md:rounded-b-3xl md:mb-5" 
    >
      <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
        Acesse sua conta
      </h2>
      <p className="text-center text-sm text-gray-600 mb-8">
        Bem-vindo(a) ao Align! Preencha os dados abaixo para acessar sua conta.
      </p>

      <div className="flex flex-col">
        <FormField 
          id="email" 
          label="Email" 
          type="email"
          placeholder="ex: user@example.com"
          value={formData.email}
          onChange={handleChange("email")}
        />
        
        <FormField
          id="password"
          label="Senha"
          type="password"
          placeholder="insira sua senha"
          value={formData.password}
          onChange={handleChange("password")}
          showPasswordToggle={true}
        />

        <Button variant="primary" onClick={handleSubmit} className="mt-2">
          Entrar
        </Button>
        <Button variant="primary" onClick={() => navigate("/signup")} className="mt-2">
          Crie sua Conta
        </Button>
      </div>
    </div>
  );
};