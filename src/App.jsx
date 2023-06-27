import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Box, useDisclosure, Button, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent } from "@chakra-ui/react";
import {InfoOutlineIcon} from "@chakra-ui/icons";

function App() {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 8]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <main className={"p-5 bg-sky-600 text-white overflow-hidden"}>
                <Button id={"infoButton"} onClick={onOpen}><InfoOutlineIcon/> </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Languages/Frameworks Used</ModalHeader>
                        <ModalCloseButton id={"closeButton"}/>
                        <ModalBody pb={5}>
                            The UI was created using React, ChakraUI, TailwindCSS, and Vite. The animations was created using Framer Motion.
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    className={"flex align-middle justify-center items-center text-center min-h-screen"}>
                    <div>
                        <h1 className={"font-bold text-4xl"}> Hello World </h1>
                    </div>
                </motion.div>
                <div className={"min-h-screen"}>
                    <motion.div
                        style={{scale}}
                    >
                        <motion.div
                            style={{ scale: scrollYProgress }}
                            className={"flex justify-center align-middle items-center text-center"}>
                            <Box p='5' rounded={"xl"} textColor='black' maxW='md' borderWidth='1px' borderRadius='lg' background={"white"} overflow='hidden'>
                                <p>My name is Thanosan Prathifkumar.</p>
                            </Box>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                    className={"text-2xl font-semibold min-h-screen flex justify-center align-middle items-center text-center"}>
                    Check out my website <a className={"pl-2 underline text-white"} href="https://thanosan.vercel.app"> here</a>. You can email me at <a className={"pl-2 underline text-white"} href="mailto:p.thanosan23@gmail.com">p.thanosan23@gmail.com</a>.
                </motion.div>
            </main>
            {/* Progress Bar */}
            <motion.div className={"fixed top-0 left-0 right-0 h-2.5 bg-sky-800 origin-left"} style={{ scaleX: scrollYProgress }} />
        </>
    )
}

export default App
