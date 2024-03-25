import Link from 'next/link';
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from '@chakra-ui/react';
 import {FcMenu, FcHome, FcAbout, } from 'react-icons/fc';
 import {FiKey } from 'react-icons/fi';
 import {BsSearch} from "react-icons/bs"


 
 const Navbar = () => {
   return (
    <Flex  p="2" borderBottom= "1px" borderColor="gray.100">
        <Box fontSize= "3x1" color="blue.400" fontWeight="bold">
            <Link href="/" paddingleft="2">Realtor</Link>

        </Box>  
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={ <FcMenu />} variant="outlined" color="red.400"/>
                <MenuList> 
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcHome />}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent"  passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
      </Box> 
    </Flex>
   )
 }
 
 export default Navbar;