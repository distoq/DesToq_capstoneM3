import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FormRegister from "../../components/register-components/form.register";
import banner from "../../assets/imgs/banner.svg";
import logomarca from "../../assets/imgs/logomarca.svg";
import ImageRegister from "../../components/register-components/image.register";

const Register = () => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1}}
    >
      <Flex
      direction="row"
      w="100vw"
      minH="100vh"
      justify="center"
      backgroundColor="white"
      >
        <Flex minW="45%" minH="100%" direction="column" textAlign="center" align="center" justify="center">
          <Flex direction="column" textAlign="center" align="center">
            <Box w="100%" maxW="400px" justify="flex-start" align="center">
              <Image
                src={logomarca}
                alt="logo da empresa"
                align-self="flex-start"
                display={["flex", "flex", "flex", "none"]}
                mt="15px"
                mb="15px"
              />
            </Box>
            <Heading variant="primary">Registre-se</Heading>
            <Text color="#716C6C">é de graça!</Text>
          </Flex>

          <FormRegister />
        </Flex>

        <Flex
          w="100%"
          backgroundColor="black"
          backgroundImage={banner}
          backgroundSize={["contain","cover","cover","100%"]}
          backgroundRepeat="repeat"
          backgroundPosition="center"
          display={["none", "none", "none", "flex"]}
          justify="center"
          align="center"
        >
          <Image src={logomarca} alt="logomarca" boxSize="200px" />
        </Flex>
        {/*<ImageRegister/>*/}
      </Flex>
    </motion.div>
  );
};

export default Register;