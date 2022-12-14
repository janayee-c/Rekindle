import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter();
    function goToCaller() {
        router.push("/caller");
    }
  return (
    <Flex w="100%" position="fixed" top="0" backgroundColor="#fdf8f4" height="70px" flexDirection="row">
        <Text fontSize={30} color="#5B8ADC" pl="20px" pr="1140px" alignSelf="center">rekindle</Text>
        <Button onClick={goToCaller} _hover={{color: "white", backgroundColor: "#5B8ADC"}} alignSelf="center" border="2px #5B8ADC solid" backgroundColor="#fdf8f4" color="#5B8ADC">Talk to someone</Button>
    </Flex>
  )
}

export default Navbar