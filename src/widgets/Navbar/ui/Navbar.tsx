/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { memo } from "react";

export const Navbar = memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();
  //const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  cursor={"pointer"}
                  variant={"link"}
                >
                  Sign In
                </Button>
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={colorMode}
                  bg={colorMode}
                  cursor={"pointer"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Sign Up
                </Button>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
});
