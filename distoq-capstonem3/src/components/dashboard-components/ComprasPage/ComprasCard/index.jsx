import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from "@chakra-ui/react";

import api from "../../../../dataBase/db";

export const CardCompras = ({ order, getOrdersList, setOrdersList }) => {
  const {
    id,
    providerData,
    purchasePrice,
    quantity,
    status,
    supplyData,
    totalValue,
  } = order;

  return (
    <Flex
      key={id}
      id={id}
      width={"100%"}
      height={"fit-content"}
      borderRadius={"10px"}
      margin={"10px 0"}
      padding={"10px"}
      boxShadow={"0 0 10px #424242"}
      backgroundColor={"#dfdfdf"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap"]}
      color={"#000"}
      _hover={{
        boxShadow: "0 0 15px #eeeeee",
        cursor: "pointer",
      }}
    >
      <Flex
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"22px"}
          backgroundColor={"#fff"}
          borderRadius={"20px"}
          padding={"5px 10px 0px 10px"}
          boxShadow={"0 0 5px #202020"}
        >
          OC: #{id}
        </Text>
        <Flex alignItems={"center"}>
          <Text marginRight={"20px"} fontSize={"20px"} fontWeight="bold">
            Status:
          </Text>
          <Box
            width={"45px"}
            height={"25px"}
            borderRadius={"50%"}
            marginRight={"20px"}
            backgroundColor={
              status === "Emitido"
                ? "#d9ff05"
                : status === "Faturado"
                ? "#88a7fc"
                : "#2fc962"
            }
            boxShadow={"inset 0 -5px 10px #666666"}
          />
          <Select
            disabled={status === "Finalizado"}
            placeholder="Status"
            backgroundColor={"#fff"}
            defaultValue={status}
            onChange={(e) => {
              api
                .patch(
                  `/orders/${id}`,
                  { ...order, status: e.target.value },
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlc3RvcUBwcm90b24ubWUiLCJpYXQiOjE2NTI2NjcwMzksImV4cCI6MTY1MjY3MDYzOSwic3ViIjoiMSJ9.Tp-jZGbRmYGWT1YR5l9XvkvJPvc_eWgTHsItevBH0PY`,
                    },
                  }
                )
                .then((rep) => getOrdersList());
            }}
          >
            <option value="Emitido">Emitido</option>
            <option value="Faturado">Faturado</option>
            <option value="Finalizado">Finalizado</option>
          </Select>
        </Flex>
      </Flex>

      <Flex flexDirection={"column"} justifyContent={"center"} margin={"5px"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Fornecedor
        </Text>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          {providerData.companyName}
        </Text>
        <Text fontWeight={"bold"}>CNPJ: {providerData.cnpj}</Text>
        <Text fontWeight={"bold"}>I.E.: {providerData.ie}</Text>
      </Flex>
      <Flex flexDirection={"column"} justifyContent={"center"} margin={"5px"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Insumo
        </Text>
        <Text fontWeight={"bold"}> {supplyData.name}</Text>
      </Flex>
      <Flex flexDirection={"column"} justifyContent={"center"} margin={"5px"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Qty
        </Text>

        <Input
          value={`${quantity} ${supplyData.measurementUnit}`}
          width={"100px"}
          backgroundColor={"#fff"}
          disabled
        />
      </Flex>

      <Flex flexDirection={"column"} justifyContent={"center"} margin={"5px"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Total
        </Text>
        <InputGroup fontWeight={"bold"}>
          <InputLeftAddon children="R$" />
          <Input
            value={totalValue.toFixed(2)}
            width={"100px"}
            type="number"
            backgroundColor={"#fff"}
            disabled
          />
        </InputGroup>
      </Flex>

      <Flex flexDirection={"column"} justifyContent={"center"} margin={"5px"}>
        <Button colorScheme="red" disabled={status === "Finalizado"}>
          Cancelar
        </Button>
      </Flex>
    </Flex>
  );
};
