import React from 'react';

function Form() {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col">
        <h2 className="font-sans text-xl text-blue-900 font-bold">
          ¡Bienvenido de vuelta!
        </h2>
        <p className="text-sm font-normal font-sans mt-4 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, cras
          justo, massa elit duis sed.
        </p>
      </div>
      <h3 className="font-sans font-semibold text-blue-900 text-sm">
        Correo electrónico
      </h3>
      <div className="flex flex-row h-auto m-1 p-1">
        <img className="mr-2 w-5 h-5" src="./mail.png" alt="" />
        <input
          className=" flex flex-row font-sans font-extralight text-sm "
          placeholder="Ingrese su correo electrónico"
        />
      </div>
      <hr />
      <h3 className="font-sans font-semibold text-blue-900 text-sm">
        Contraseña
      </h3>
      <div className="flex flex-row h-auto m-1 p-1">
        <img className="mr-2 w-5 h-5" src="./password.png" alt="" />
        <input
          className=" flex flex-row font-sans font-extralight text-sm "
          placeholder="Ingrese su contraseña"
        />
      </div>
      <hr />
      <button className="font-sans text-xs text-start font-semibold text-gray-800 mt-3 mb-3">
        Recuperar contraseña
      </button>
      <button className="bg-blue-900 rounded-md text-md font-sans font-bold text-white p-1 mt-8">
        Iniciar sesión
      </button>

      <div className="flex flex-row justify-center">
        <p className="text-xs text-gray-600 font-sanss m-10">o ingresa con</p>
      </div>
      <div className="flex flex-row justify-center m-5">
        <img className="w-20 flex" src="./google.png" />
      </div>
      <div className="flex flex-row gap-2 justify-center">
        <p className="font-sans text-sm text-gray-700">¿No tienes cuenta?</p>
        <button className="font-sans text-sm text-amber-500">Regístrate</button>
      </div>
    </form>
  );
}

export default Form;
