import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

/** 
* Covers a complete form implementation using formik and yup for validation 
*/ 

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: ""
    },

   onSubmit: (values) => { 
     submit('https://john.com/contactme', values); 
   }, 

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      type: Yup.string()
        .notRequired(),  // Optional field
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
    }),
  });

 useEffect(() => { 
   if (response) { 
     onOpen(response.type, response.message); 
     if (response.type === 'success') { 
       formik.resetForm(); 
     } 
   } 
 }, [response]); 


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack
        w={{ base: "90%", md: "1024px" }}
        maxW="1024px"
        p={{ base: 6, md: 32 }}
        alignItems="flex-start"
        mx="auto"
      >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={{ base: 4, md: 6 }} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid=
              {formik.touched.firstName && Boolean(formik.errors.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input 
                  id="firstName" 
                  {...formik.getFieldProps("firstName")} 
                  width="100%"
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid=
              {formik.touched.email && Boolean(formik.errors.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input 
                  id="email" type="email" 
                  {...formik.getFieldProps("email")} 
                  width="100%"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && Boolean(formik.errors.type)}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type" placeholder="Select option"
                  {...formik.getFieldProps("type")}
                  width="100%"
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
                 <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid=
                {formik.touched.comment && Boolean(formik.errors.comment)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea 
                  id="comment" 
                  height={250} 
                  {...formik.getFieldProps("comment")} 
                  width="100%"
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
