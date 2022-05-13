import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";

import { MdDashboard } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { AiFillBank, AiOutlineDropbox } from "react-icons/ai";
import {
  FaBoxes,
  FaHamburger,
  FaFileInvoiceDollar,
  FaOpencart,
} from "react-icons/fa";
import { useActivePage } from "../../../Providers/DashboardPageController";

export const ComprasPage = () => {
  const options = [
    "Dashboard",
    "Pedidos",
    "Fornecedores",
    "Insumos",
    "Compras",
    "Produtos",
    "Estoque",
    "Financeiro",
  ];

  const { activeDashboardPage, setActiveDashboarPage } = useActivePage();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "menuOptions",
    defaultValue: activeDashboardPage,
    onChange: setActiveDashboarPage,
  });

  const group = getRootProps();

  const handleIcons = (value) => {
    switch (value) {
      case "Dashboard":
        return <MdDashboard />;
      case "Pedidos":
        return <FaFileInvoiceDollar />;

      case "Fornecedores":
        return <GiFactory />;

      case "Insumos":
        return <AiOutlineDropbox />;

      case "Compras":
        return <FaOpencart />;

      case "Produtos":
        return <FaHamburger />;

      case "Estoque":
        return <FaBoxes />;

      case "Financeiro":
        return <AiFillBank />;

      default:
        break;
    }
  };

  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label" width={"100%"}>
        <input {...input} />
        <Flex
          {...checkbox}
          cursor="pointer"
          //   borderWidth="1px"
          borderRadius="md"
          fontWeight="bold"
          fontSize="26px"
          color="white"
          alignItems="center"
          //   boxShadow="md"
          _checked={{
            bg: "#F4BF39",
            color: "#434343",
            fontWeight: "bold",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
          sx={{
            svg: {
              marginRight: "10px",
            },
          }}
        >
          {props.children}
        </Flex>
      </Box>
    );
  }
  return (
    //FULL CONTAINER
    <Flex className="fullPage" width="100%" minHeight="calc(100vh - 80px)">
      <VStack
        {...group}
        alignItems="flex-start"
        backgroundColor={"#434343"}
        display={["none", "none", "none", "none", "flex"]}
      >
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {handleIcons(value)} {value}
            </RadioCard>
          );
        })}
      </VStack>
      <Flex
        className="contentContainer"
        width="100%"
        minHeight="100%"
        flexDir="column"
        alignItems={"center"}
        backgroundImage={
          "https://www.jeronimoburger.com.br/img/home/banner-sobre-desk.png"
        }
        bgRepeat="no-repeat"
        backgroundSize="100% 100%"
      >
        <Heading
          variant="primary"
          width="100%"
          margin={["0px", "0px", "0px", "0px", "20px 0px"]}
          textAlign="center"
        >
          Compras Page
        </Heading>
        <InputGroup size="md" width={"90%"} maxW={"500px"}>
          <Input
            pr="4.5rem"
            type={"text"}
            placeholder="Faça sua pesquisa..."
            backgroundColor={"white"}
            fontWeight={"bold"}
            boxShadow={"0 0 5px grey"}
            _focus={{
              boxShadow: "0 0 10px grey",
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => console.log("teste")}>
              <GoSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Flex
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            backgroundColor={"#dbdbdb"}
            boxShadow={"0 0 15px #464646"}
            width={["100%", "100%", "100%", "100%", "90%"]}
            height={["100%", "100%", "100%", "100%", "90%"]}
            marginTop={["20px", "20px", "20px", "20px", "0px"]}
            borderTopRadius={"15px"}
            borderBottomRadius={["0px", "0px", "0px", "0px", "15px"]}
            color={"white"}
          >
            CONTEUDO AQUI!!!!
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ComprasPage;
