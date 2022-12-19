import React from "react";
import Link from "next/link";

import {
  Box,
  useDisclosure,
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";

interface OrcModalProps {
  pedido: string;
}

export const OrcModal = ({ pedido }: OrcModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box key={pedido}>
      <IconButton
        mr={2}
        aria-label="Abrir Menu Orcamento"
        onClick={onOpen}
        icon={<DragHandleIcon />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">ORÇAMENTOS: 11003</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List>
              <ListItem>Cliente: Multivac</ListItem>
              <ListItem>Data de Entrada: 20/12/2023</ListItem>
              <ListItem>Prazo para entrega: 20/12/2023</ListItem>
              <ListItem>Quantidade de Itens: 04</ListItem>
            </List>
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" colorScheme="red">
              Declinar
            </Button>
            <Link
              href={{ pathname: "orcamento", query: { pedido: `${pedido}` } }}
            >
              <Button variant="solid" colorScheme="green">
                Orçar
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
