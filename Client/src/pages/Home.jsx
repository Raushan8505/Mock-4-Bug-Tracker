import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const auth = useSelector((state) => state.auth.auth);
  console.log(auth);

  return (
    <>
      <Box className="flex justify-center" mt={{ base: "0", md: "0rem" }} style={{backgroundColor:'#5e618d', height:'100vh'}}>
        <Box
          className="flex items-center justify-center   gap-[3rem]"
          flexDirection={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "70%" }}
          p={"2rem"}
        >
          
          <Box width={{ base: "100%", md: "40%" }}>
            <Heading
              as={"h1"}
              fontSize={{ base: "9rem", md: "3rem" }}
              color={'whitesmoke'}
            >
              The simplest way to Track bugs.
            </Heading>
            {auth ? (
              <>
                <Link to="/tracker">
                  <Button
                    mt={"2rem"}
                    fontSize={"1.3rem"}
                    // color={"#135D66"}
                    colorScheme="teal"
                    // bg={"white"}
                    p={"1.3rem 3rem"}
                    fontWeight={"bold"}
                    // border={" 1px solid black"}
                    // _hover={{ bg: "#aedadd", color: "#596e79" }}
                    style={{borderRadius:"40px"}}
                  >
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <Button
                    mt={"2rem"}
                    fontSize={"1.3rem"}
                    color={"#135D66"}
                    bg={"white"}
                    p={"1.3rem 3rem"}
                    border={" 1px solid black"}
                    _hover={{ bg: "#f8665f", color: "white" }}
                    style={{borderRadius:"40px"}}
                  >
                    SignUp
                  </Button>
                </Link>
              </>
            )}
          </Box>
          <Box>
            <Image src='https://assets-global.website-files.com/615af81f65d1ab72d2969269/6176011ed02509f4285f2595_bug-reports-750x365.jpg' alt="Notes" style={{borderRadius:"40px", width:"100%", height:"100%"}}/>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
