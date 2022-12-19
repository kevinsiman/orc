import React, { useState } from "react";
import { StaticImageData } from "next/image";
import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Badge,
  useColorModeValue,
  Select,
  Grid,
  GridItem,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

interface OrcamentoDetalheProps {
  id: number;
  pedido: string;
  nome: string;
  quad: boolean;
  material: string;
  x: number;
  y: number;
  z: number;
  tt: string;
  ts: string;
  image: StaticImageData;
}

import { CustoKilo } from "../../../pages/api/hello";
import { CustoMaquina } from "../../../pages/api/hello";
import { CustoTratamentoTermico } from "../../../pages/api/hello";
import { CustoTratamentoSuperficial } from "../../../pages/api/hello";

const ItensDetalhados = ({ material, x, y, z, tt, ts, quad }: any) => {
  const [materialAtual, setMaterialAtual] = useState<String>(material);
  const [horaTorno, setHoraTorno] = useState(0);
  const [horaCNC, setHoraCNC] = useState(0);
  const [horaFresa, setHoraFresa] = useState(0);
  const [horaErosao, setHoraErosao] = useState(0);

  function handleInput(mac: any, e: any) {
    if (mac === "Eletro Erosao") {
      setHoraErosao(e);
    } else if (mac === "Centro") {
      setHoraCNC(e);
    } else if (mac === "Convencional") {
      setHoraFresa(e);
    } else {
      setHoraTorno(e);
    }
  }

  function handleHora(mac: any) {
    if (mac === "Eletro Erosao") {
      return horaErosao;
    } else if (mac === "Centro") {
      return horaCNC;
    } else if (mac === "Convencional") {
      return horaFresa;
    } else {
      return horaTorno;
    }
  }

  const mat = CustoKilo.filter((i) => i.material === materialAtual);
  const ma = CustoTratamentoSuperficial.filter((i) =>
    i.tratamento === ts ? i.custo : null
  );

  const c = mat[0];
  console.log(ma[0]);

  const custo = quad
    ? x * y * z * c.densidade
    : ((3.1416 * x * x) / 4) * y * c.densidade;
  const valorMateriaPrima = c.custo * custo;

  return (
    <Flex gap={3} direction="column">
      <Text>
        Material: {materialAtual} | Peso: {custo.toFixed(2)}Kg | Total: R$
        {valorMateriaPrima.toFixed(2)}
      </Text>
      <Text>{tt ? <>T.T: {tt} | Total: R$</> : null}</Text>
      <Text>{ts ? <>T.S: {ts} | Total: R$</> : null}</Text>
      <Flex align="center">
        <FormControl>
          <FormLabel>Material</FormLabel>

          <Select
            onChange={(e) => setMaterialAtual(e.target.value)}
            variant="filled"
          >
            {CustoKilo.map((item) => (
              <option
                value={item.material}
                selected={item.material === materialAtual ? true : false}
                key={item.id}
              >
                {item.material}
              </option>
            ))}
          </Select>
        </FormControl>
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {CustoMaquina.map((i) => (
          <GridItem key={i.id}>
            <FormControl>
              <FormLabel fontSize={14}>
                {i.maquina}: R${i.hora * handleHora(i.maquina)}
              </FormLabel>
              <Input
                type="number"
                onChange={(e) => handleInput(i.maquina, e.target.value)}
              />
            </FormControl>
          </GridItem>
        ))}
      </Grid>
      <Button>Salvar</Button>
    </Flex>
  );
};

export const OrcamentoDetalhe = ({
  id,
  pedido,
  nome,
  quad,
  material,
  x,
  y,
  z,
  tt,
  ts,
  image,
}: OrcamentoDetalheProps) => {
  return (
    <Box>
      <Accordion allowMultiple>
        <AccordionItem rounded="md">
          <Flex
            bg={useColorModeValue("gray.100", "gray.900")}
            color={useColorModeValue("black", "white")}
            h="14"
            align="center"
            rounded="md"
          >
            <Flex ml={2} gap={4} flex="1" align="center">
              <Flex>
                <Badge
                  variant="outline"
                  ml="1"
                  fontSize="0.65em"
                  colorScheme="gray"
                >
                  {material}
                </Badge>
              </Flex>
              <Flex>
                <Text fontWeight={500} fontSize={14}>
                  {quad ? `#${x} x ${y} x ${z}` : `Ø${x} x ${y}`}
                </Text>
              </Flex>

              <Flex>
                <Badge
                  variant="solid"
                  ml="1"
                  fontSize="0.8em"
                  colorScheme="green"
                ></Badge>
              </Flex>
            </Flex>
            {/**** */}
            <AccordionButton w="auto">
              <AccordionIcon />
            </AccordionButton>
          </Flex>
          {/* --------------------------------------------------------------------- */}
          <AccordionPanel
            bg="gray.800"
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <ItensDetalhados
              material={material}
              tt={tt}
              ts={ts}
              x={x}
              y={y}
              z={z}
              quad={quad}
            />
          </AccordionPanel>
          {/* --------------------------------------------------------------------- */}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
