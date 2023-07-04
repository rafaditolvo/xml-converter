import React from 'react';
import { Button, Input, Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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

      // Faça a requisição para o backend, enviando o formData
      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Manipule a resposta do backend, se necessário
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Box p={4} boxShadow="md" rounded="md">
      <Input type="file" onChange={handleFileChange} />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button mt={4} colorScheme="teal" onClick={handleUpload}>
          Upload
        </Button>
      </motion.div>
    </Box>
  );
};

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Box p={4}>
        <Heading as="h1" size="xl" mb={4}>
          Conversor XML para Excel
        </Heading>
        <FileUpload />
      </Box>
    </motion.div>
  );
};

export default Home;
