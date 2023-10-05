import React from 'react'
import CartWidget from './CartWidget'
import {Flex,Box,Spacer,Image,Breadcrumb,BreadcrumbItem,BreadcrumbLink} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Box bg='black' position='fixed' top='0' left='0' zIndex='999' w='100%' color="white" fontSize='20px'>
      <Flex>
        <Box bg='black' height="120px" width="120px">
          <Image src='/logo.png' alt='Logo de la página' objectFit='cover' cursor='pointer'/>
        </Box>
        <Spacer />
        <Box display="flex" alignItems="center">
          <Breadcrumb separator='-'>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Hombres</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Mujeres</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Adolescentes</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Niños</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Spacer />
        <Box display='flex' alignItems='center' paddingRight='25px' paddingLeft='15px'>
          <CartWidget />
        </Box>
      </Flex>
    </Box>
  )
}

export default NavBar