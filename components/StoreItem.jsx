import React from "react";

const StoreItem = ({ item }) => {
  const { nombre, medidas, material, tipoDeCuerpo, img, precio } = item;
  return (
    <div className="flex mb-10 items-center">
      <div className="py-4 px-5 w-3/5 shadow-3xl rounded-3xl h-full bg-white">
        <img src={img.src} alt={nombre} className="w-full" />
      </div>
      <div className="w-2/5 text-[#4F4F4F] text-sm">
        <p className="rounded-full bg-[#fff]/30 mb-5 font-bold ml-2 pl-2">
          Descripción
        </p>
        <div className="ml-4">
          <span className="mb-3 block">Medidas:</span>
          <p className="mb-3 font-light text-xs">{medidas} Alto, Ancho</p>

          <span className="mb-3 block">Material:</span>
          <p className="mb-3 font-light text-xs">{material}</p>

          <span className="mb-3 block">Tipo de Cuerpo:</span>
          <p className="mb-5 font-light text-xs">{tipoDeCuerpo}</p>
        </div>

        <div className="bg-[#E3BFB3] rounded-full shadow-3xl pb-1 pt-1 w-full pl-3 ml-2">
          <h4 className="font-bold leading-3 text-sm mb-1">{nombre}</h4>
          <p className="font-light leading-3">{precio}</p>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
