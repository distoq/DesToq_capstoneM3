import { useContext } from "react";
import { HeaderHome } from "../../components/home-components/HeaderHome";
import Search from "../../components/home-components/HeaderHome/SearchHome";
import { CartContext } from "../../Providers/cart";
import CardSC from "../../components/home-components";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import HomeFilter from "../../components/home-components/HomeFilter";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";

const Home = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("@DEStoq:token");
  const { isExpired } = useJwt(token);

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1}}
    >
      <Flex direction="column" justify="center" align="center" w="100vw">
        <HeaderHome />
        <HomeFilter />
        <Search />
        <CardSC />
      </Flex>
    </motion.div>
  );
};
export default Home;
