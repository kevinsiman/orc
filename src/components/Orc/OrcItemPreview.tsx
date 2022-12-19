import React from "react";
import {
  Box,
  Flex,
  Text,
  Badge,
  IconButton,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";

import { ViewIcon } from "@chakra-ui/icons";
import { ImageModal } from "./ImageModal";
import { StaticImageData } from "next/image";

interface OrcItemProps {
  id: number;
  nome: string;
  tt: string;
  ts: string;
  image: StaticImageData;
}

export const OrcItemPreview = ({ id, nome, tt, ts, image }: OrcItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex w="full">
        <Flex flex={1} alignItems="center" gap={3}>
          <Text>{nome}</Text>
          <Badge fontSize={13}>{tt}</Badge>
          <Badge fontSize={13}>{ts}</Badge>
        </Flex>
        <IconButton
          onClick={onOpen}
          aria-label="Vizualizar Desenho"
          icon={<ViewIcon />}
        />
        <ImageModal
          nome={nome}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          image={image}
        />
      </Flex>
      <Divider />
    </Box>
  );
};
