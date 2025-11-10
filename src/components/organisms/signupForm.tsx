import React from "react";
import { useState } from "react";
import { FormField } from "../molecules/formField";
import { Button } from "../atoms/button";
import { useNavigate } from "react-router-dom";

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = () => {
    console.log("Cadastro:", formData);
    navigate("/home")
  };

  const navigate = useNavigate();

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div 
      className="bg-white rounded-t-3xl p-8 w-full max-w-sm mx-auto shadow-2xl 
                 md:rounded-b-3xl md:mb-5" 
    >
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
        Crie sua conta
      </h2>

      <div className="flex flex-col">
        
        <FormField 
          id="name" 
          label="Nome completo" 
          placeholder="Insira seu nome"
          value={formData.name}
          onChange={handleChange("name")}
        />
        
        <FormField 
          id="email" 
          label="Email" 
          type="email"
          placeholder="ex: user@example.com"
          value={formData.email}
          onChange={handleChange("email")}
        />
        
        <FormField 
          id="birth" 
          label="Data de nascimento" 
          type="date"
          value={formData.birthDate}
          onChange={handleChange("birthDate")}
        />
        
        <FormField 
          id="password" 
          label="Senha" 
          type="password"
          placeholder="Insira a senha"
          value={formData.password}
          onChange={handleChange("password")}
          showPasswordToggle={true}
        />
        
        <FormField
          id="confirmPassword"
          label="Confirme a senha"
          type="password"
          placeholder="Insira a senha"
          value={formData.confirmPassword}
          onChange={handleChange("confirmPassword")}
          showPasswordToggle={true}
        />

        <Button variant="primary" onClick={handleSubmit} className="mt-2">
          Criar
        </Button>
        <Button variant="primary" onClick={() => navigate("/")} className="mt-2">
          Voltar
        </Button>
      </div>
    </div>
  );
};