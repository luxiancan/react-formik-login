import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Image,
  Text,
  useColorModeValue
} from "@chakra-ui/core";
import SignUp from "./SignUp-formik";
import SignIn from "./SignIn-formik";

import chakraUILight from "../assets/images/chakra-ui-light.png";
import chakraUIDark from '../assets/images/chakra-ui-dark.png';

export default function Form() {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const chakraUI = useColorModeValue(chakraUILight, chakraUIDark)
  return (
    <Box bgColor="#fff" p={10} pt={10} w="100%" boxShadow="0 0 8px rgb(0 0 0 / 10%)" borderRadius="lg">
      {/* <Image w="250px" mx="auto" mt="2" mb="6" src={chakraUI} /> */}
      <Text fontSize="14px" mb="20px">Hooks Formik Emotion ChakraUI -- 卢显灿</Text>
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{ boxShadow: "none" }}>登录</Tab>
          <Tab _focus={{ boxShadow: "none" }}>注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignIn />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
