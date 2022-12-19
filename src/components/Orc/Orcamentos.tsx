import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  Accordion,
} from "@chakra-ui/react";
import { DB } from "../../pages/api/hello";

// Components
import { OrcList } from "./OrcList";

export const Orcamentos = () => {
  const DBAr = DB;
  return (
    <>
      <Flex direction="column">
        <Accordion allowMultiple>
          {DBAr.map((item, index) => (
            <OrcList
              key={item.pedido}
              id={item.id}
              pedido={item.pedido}
              cliente={item.cliente}
              dataEntrega={item.dataEntrega}
            />
          ))}
        </Accordion>
      </Flex>
    </>
  );
};
