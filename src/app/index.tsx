import React from "react";
import {Container, Stack, Box, Image, Input, StackDivider, Icon, Text} from "@chakra-ui/react";
import {AiOutlineSearch, AiOutlinePrinter} from "react-icons/ai";
import {IoLocationOutline} from "react-icons/io5";

import logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box
        alignItems="center"
        backgroundColor="primary.500"
        boxShadow="md"
        paddingY={1}
        width="100%"
      >
        <Container maxWidth="container.xl">
          <Stack spacing={4}>
            <Stack alignItems="center" direction="row" justifyContent="space-between" spacing="12">
              <Stack direction="row" display="flex" spacing={12} width="100%">
                <Image objectFit="contain" src={logo} />
                <Stack
                  alignItems="center"
                  bg="white"
                  borderRadius="sm"
                  boxShadow="md"
                  direction="row"
                  divider={<StackDivider />}
                  flex={1}
                  spacing={2}
                >
                  <Input
                    _hover={{
                      borderColor: "none",
                    }}
                    borderColor="white"
                    focusBorderColor="none"
                    placeholder="Buscar productos, marcas y más..."
                  />
                  <Icon
                    as={AiOutlineSearch}
                    color="gray.400"
                    cursor="pointer"
                    height={5}
                    maxWidth={8}
                    width={8}
                  />
                </Stack>
                <Stack
                  alignItems="center"
                  as="a"
                  direction="row"
                  href={`https://articulo.mercadolibre.com.ar/MLA-749158328-mercado-pago-kit-point-mpos-codigo-qr-_JM#DEAL_ID=MLA&S=MP&V=1&T=BME&L=MercadoPagoPoint_MercadoPagoPoint+qr&me.bu=4&me.audience=all&me.content_id=MP_Point_BT-QR_AO&me.component_id=banner_menu_web_ml&me.logic=user_journey&me.position=0&me.bu_line=9&me.flow=49`}
                >
                  <Icon as={AiOutlinePrinter} color="blackAlpha.700" height={6} width={6} />
                  <Text>Comprá tu Point y QR a $189</Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack alignContent="baseline" direction="row" spacing={1}>
              <Icon as={IoLocationOutline} height={9} width={7} />
              <Stack alignContent="baseline" direction="column">
                <Stack spacing={0}>
                  <Text color="blackAlpha.700" fontSize="sm" marginBottom={-1}>
                    Enviar a
                  </Text>
                  <Text fontSize="md">Capital Federal</Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container alignSelf="center">
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
