import React from "react";

import {
  Box,
  Image,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { StaticImageData } from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  nome: string;
  image: StaticImageData;
}

export const ImageModal = ({
  isOpen,
  onOpen,
  onClose,
  nome,
  image,
}: ImageModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalCloseButton />

        <Image src="/images/23-o.jpg" alt="teste" />
      </ModalContent>
    </Modal>
  );
};
