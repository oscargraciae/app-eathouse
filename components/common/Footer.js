import { Box, Link, Stack, Text, VStack, Flex, Spacer, HStack } from '@chakra-ui/react';
import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <Flex boxShadow="md" bg="black" color="#FFF" justify="stretch" py={8}>
      <Stack direction="row" mx="auto" w="100%" maxWidth="1200px">
        <VStack align="flex-start">
          <Text fontSize="md" fontWeight="bold">MAPA DEL SITIO</Text>
          <Link fontSize="sm" href="/">Inicio</Link>
          <Link fontSize="sm" href="/">Iniciar Sesión</Link>
          <Link fontSize="sm" href="/">Crear Cuenta</Link>
          <Link fontSize="sm" href="/">Registrar Negocio</Link>
        </VStack>
        <Spacer />
        <VStack align="flex-start">
          <Text fontSize="md" fontWeight="bold">INFORMACIÓN</Text>
          <Link fontSize="sm" href="/">Centro de Ayuda</Link>
          <Link fontSize="sm" href="/">Preguntas Frecuentes</Link>
          <Link fontSize="sm" href="/">Aviso de Privacidad</Link>
          <Link fontSize="sm" href="/">Condiciones de Uso</Link>
        </VStack>
        <Spacer />

        <VStack align="flex-start">
          <Text fontSize="md" fontWeight="bold">ACERCA DE</Text>
          <Link fontSize="sm" href="/">Blog</Link>
          <Link fontSize="sm" href="/">Contacto</Link>
          <Link fontSize="sm" href="/">Uorder es un producto de Northware</Link>
        </VStack>
        <Spacer />

        <VStack align="flex-start">
          <Text fontSize="md" fontWeight="bold">SÍGUENOS</Text>
          <Stack isInline>
            <Link fontSize="xl" href="/"><FaFacebook /></Link>
            <Link fontSize="xl" href="/"><FaTwitter /></Link>
            <Link fontSize="xl" href="/"><FaInstagram /></Link>
          </Stack>
        </VStack>
      </Stack>
    </Flex>
    <Box bg="gray.600" textAlign="center" p={2}>
      <Text color="#FFF" fontSize="sm">© 2021 Todos los derechos reservados</Text>
    </Box>
  </footer>
);

export default Footer;
