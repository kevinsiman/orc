import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Divider,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";

// Components
import { OrcModal } from "./OrcModal";
import { OrcItemPreview } from "./OrcItemPreview";

interface OrcItemProps {
  id: number;
  pedido: string;
  cliente: string;
  dataEntrega: string;
}

import { DBItens } from "../../pages/api/hello";

export const OrcList = ({ pedido, cliente, dataEntrega }: OrcItemProps) => {
  const OrcItens = DBItens.filter((item) => item.pedido === pedido);
  return (
    <AccordionItem key={pedido} rounded="md">
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        color={useColorModeValue("black", "white")}
        h="14"
        align="center"
        rounded="md"
      >
        <Flex ml={2} gap={4} flex="1" align="center">
          <Flex>
            <Badge variant="outline" ml="1" fontSize="0.8em" colorScheme="gray">
              {pedido}
            </Badge>
          </Flex>
          <Flex>
            <Text fontWeight={500} fontSize={16}>
              {cliente}
            </Text>
          </Flex>

          <Flex>
            <Badge variant="solid" ml="1" fontSize="0.8em" colorScheme="green">
              {dataEntrega}
            </Badge>
          </Flex>
        </Flex>
        {/**** */}
        <AccordionButton w="auto">
          <AccordionIcon />
        </AccordionButton>
        <OrcModal pedido={pedido} />
      </Flex>
      {/* --------------------------------------------------------------------- */}
      <AccordionPanel
        bg="gray.800"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        {OrcItens.map((item) => (
          <OrcItemPreview
            key={item.id}
            id={item.id}
            nome={item.nome}
            tt={item.tt}
            ts={item.ts}
            image={item.image}
          />
        ))}
      </AccordionPanel>
      {/* --------------------------------------------------------------------- */}
    </AccordionItem>
  );
};
