import React from "react";

const StoreItem = ({ item }) => {
  const { nombre, medidas, material, tipoDeCuerpo, img, precio } = item;
  return (
    <div className="flex gap-6 mb-10">
      <div className="py-4 px-9 w-3/5 shadow-3xl rounded-3xl h-full">
        <img src={img.src} alt={nombre} className="w-full" />
      </div>
      <div className="w-2/5 text-[#4F4F4F]">
        <p className="rounded-full bg-[#fff]/30 mb-5 font-bold">Descripción</p>

        <span className="mb-3 block">Medidas:</span>
        <p className="mb-3 font-light">{medidas} Alto, Ancho</p>

        <span className="mb-3 block">Material:</span>
        <p className="mb-3 font-light">{material}</p>

        <span className="mb-3 block">Tipo de Cuerpo:</span>
        <p className="mb-8 font-light">{tipoDeCuerpo}</p>

        <div className="bg-[#E3BFB3] rounded-full shadow-3xl pb-1 pt-1 dpr-8 pl-3 w-full relative -left-3">
          <h4 className="font-bold leading-3 text-sm">{nombre}</h4>
          <p className="font-light leading-3">{precio}</p>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
