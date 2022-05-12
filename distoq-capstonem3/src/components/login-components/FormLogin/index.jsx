import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
 
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../../dataBase/db";
import { toast } from "react-toastify";
import { useJwt } from "react-jwt";
import { Link, useNavigate } from "react-router-dom";

const FormLogin = () => {

const tokenUser = JSON.parse(localStorage.getItem("@DEStoq:token"))||''
const {decodedToken,isExpired}=useJwt(tokenUser)
const  history = useNavigate()

  const handleSubmitForm = (data) => {
   
    api.post("login",data)
   .then(res=> {
    localStorage.setItem("@DEStoq:token",JSON.stringify(res.data.accessToken)) 
     toast.success("Usuário logado com sucesso")
     console.log(res.data)})
     
 if(decodedToken?.sub === 1){

   return history("/dashboard")
 }else{
   return history("/home")
 }
 
}

console.log(tokenUser)
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("digite um e-mail válido")
      .required("Email obrigatório!"),
    password: yup
      .string()
      .required("Senha obrigátoria!")
      // .matches(
      //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      //   "Senha Inválida. Sua senha deve conter pelo menos: uma letra Maiuscula, um número e um caracter especial($*&@#)"
      // )
      // .min(8, "Sua senha deve possuir no minimo 6 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Flex
        w="100%"
        maxW="400px"
        direction="column"
        justify="center"
        align="center"
      >
        <Heading mt="50px" mb="20px" variant="primary" as="h1" position="relative">
          Faça seu login aqui !
        </Heading>
        <form onSubmit={ handleSubmit(handleSubmitForm)}>
          <FormControl
            display="flex"
            flexDirection="column"
            align="center"
            sx={{
              label: {
                margin: "0 10px",
              },
              input: {
                borderColor: "black",
                color: "#101010",
                width: "100%",
                maxW: "300px",
                margin: "auto",
                _placeholder: {
                  color: "black",
                  borderColor: "black",
                },
              },
            }}
          >
            <FormLabel htmlFor="email">Email </FormLabel>
            <Input
              variant="outline"
              id="email"
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <FormLabel htmlFor="email">Senha </FormLabel>
            <Input
              variant="outline"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password && (
              <FormHelperText variant={"error"}>{errors.password.message}</FormHelperText>
            )}
          </FormControl>

          <Button type="submit" variant="primary">LOGAR</Button>
        </form>
        <Text variant="primary">Não possui login ?</Text>
        <Link to="/register">
          <Button type="button" variant="primary">REGISTRAR</Button>
        </Link>
      </Flex>
    </>
  );
};

export default FormLogin;