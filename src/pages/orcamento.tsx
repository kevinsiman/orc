import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input, Box } from "@chakra-ui/react";
import { useRouter as rou } from "next/router";

import { OrcamentoDetalhe } from "../components/Orc/Detalhes/OrcamentoDetalhe";
import {
  DB,
  DBItens,
  CustoKilo,
  CustoMaquina,
  CustoTratamentoSuperficial,
  CustoTratamentoTermico,
} from "./api/hello";

const orcamento = () => {
  const router = rou();
  const newP = router.query.pedido;

  const items = DBItens.filter((item) => item.pedido === newP);

  console.log(items);

  return (
    <Box>
      {items.map((item) => (
        <OrcamentoDetalhe
          key={item.id}
          id={item.id}
          pedido={item.pedido}
          quad={item.quad}
          material={item.material}
          nome={item.nome}
          x={item.x}
          y={item.y}
          z={item.z}
          tt={item.tt}
          ts={item.ts}
          image={item.image}
        />
      ))}
    </Box>
  );
};

export default orcamento;
