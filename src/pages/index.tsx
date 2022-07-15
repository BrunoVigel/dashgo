import { Flex, Button, Stack } from "@chakra-ui/react"
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Input } from "../components/Form/Input"
import { useRouter } from 'next/router';
import Head from "next/head"


type signInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const router = useRouter()

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const {errors} = formState;

  const handleSignIn: SubmitHandler<signInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
    router.push('/dashboard')
  }

  return (
    <>
      <Head>
          <title>Dashgo</title>
      </Head>
      
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input name="email" type="email" error={errors.email} label="E-mail"  {...register('email')}/>
            <Input name="password" type="password" error={errors.password} label="Senha" {...register('password')}/>
      
      
          </Stack>
          <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
        </Flex>
      </Flex>
    </>
  )
}
