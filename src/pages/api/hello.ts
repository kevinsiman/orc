// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import img from "../../../public/images/23-o.jpg";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export const DB = [
  {
    id: 1,
    pedido: "11003",
    cliente: "MULTIVAC",
    dataEntrada: "20/12/2022",
    dataEntrega: "23/01/2023",
    status: "aguardando",
  },
  {
    id: 2,
    pedido: "11005",
    cliente: "ADVALTECH",
    dataEntrada: "14/12/2022",
    dataEntrega: "23/02/2023",
    status: "aguardando",
  },
  {
    id: 3,
    pedido: "11006",
    cliente: "MOLGEP",
    dataEntrada: "16/11/2022",
    dataEntrega: "06/01/2023",
    status: "aguardando",
  },
];

export const DBItens = [
  {
    id: 1,
    nome: "bucha",
    pedido: "11003",
    quad: true,
    material: "1020",
    x: 145.4,
    y: 145.4,
    z: 145.4,
    tt: "Tempera",
    ts: "Bicromatizado",
    image: img,
  },
  {
    id: 2,
    nome: "Valvula",
    pedido: "11003",
    quad: true,
    material: "1045",
    x: 145.4,
    y: 145.4,
    z: 145.4,
    tt: "",
    ts: "",
    image: img,
  },
  {
    id: 3,
    nome: "Pino",
    pedido: "11003",
    quad: false,
    material: "1020",
    x: 145.4,
    y: 145.4,
    z: 145.4,
    tt: "",
    ts: "Oxidado",
    image: img,
  },
  {
    id: 4,
    nome: "Valvula",
    pedido: "11005",
    quad: false,
    material: "1045",
    x: 145.4,
    y: 145.4,
    z: 145.4,
    tt: "",
    ts: "Cementado",
    image: img,
  },
  {
    id: 6,
    nome: "Trem",
    pedido: "11005",
    quad: true,
    material: "1045",
    x: 145.4,
    y: 145.4,
    z: 145.4,
    tt: "",
    ts: "",
    image: img,
  },
  {
    id: 7,
    nome: "Trem",
    pedido: "11006",
    quad: true,
    material: "1045",
    x: 145.4,
    y: 145.4,
    z: 145.4,
    tt: "Tempera",
    ts: "Nitretado",
    image: img,
  },
  {
    id: 8,
    nome: "Trem",
    pedido: "11006",
    quad: true,
    material: "Inox 304",
    x: 145.4,
    y: 145.4,
    z: 145.4,
    tt: "",
    ts: "Nitretado",
    image: img,
  },
];

export const CustoKilo = [
  { id: 1, material: "1020", custo: 9.0, densidade: 0.00000785 },
  { id: 2, material: "1045", custo: 16.0, densidade: 0.00000785 },
  { id: 3, material: "Inox 304", custo: 60.0, densidade: 0.00000785 },
  { id: 4, material: "Aluminio 5052", custo: 55.0, densidade: 0.000000275 },
];

export const CustoMaquina = [
  { id: 1, maquina: "Torno CNC", hora: 100.0 },
  { id: 2, maquina: "Centro", hora: 150.0 },
  { id: 3, maquina: "Convencional", hora: 70.0 },
  { id: 4, maquina: "Eletro Erosao", hora: 85.0 },
];

export const CustoTratamentoSuperficial = [
  { id: 1, tratamento: "Bicromatizado", custo: 3.0 },
  { id: 2, tratamento: "Niquel Quimico", custo: 28.0 },
  { id: 3, tratamento: "Oxidado", custo: 2.5 },
  { id: 4, tratamento: "Nitretado", custo: 10.0 },
];

export const CustoTratamentoTermico = [
  { id: 1, tratamento: "Tempera", custo: 4.5 },
];
