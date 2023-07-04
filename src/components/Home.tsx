import React from 'react';
import { Button, Input, Box, Heading, Container, Stack, Image, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import fileimg from "../images/file-backups-with-sequential-numbering.svg"

const FileUpload: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
          
      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Box p={8} boxShadow="md" rounded="md">
        <Input type="file" onChange={handleFileChange} />
        <Button mt={4} colorScheme="teal" onClick={handleUpload}>
          Upload
        </Button>
      </Box>
    </motion.div>
  );
};

const Home: React.FC = () => {
  return (
    <Box p={4}>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Conversor XML para Excel
          </Heading>
        
  <Center> <Image boxSize={"sm"} src={fileimg} ></Image></Center>
 
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <FileUpload />
           
            <Box>
             
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
