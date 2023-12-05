"use client";
import RegisterForm from "@/components/RegistrationForm";

const Register = () => {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="bg-gray-100 rounded-lg p-8 flex flex-col w-50 mt-10 md:mt-0 mx-auto">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
