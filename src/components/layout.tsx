import {
    ColorModeProvider,
    ChakraProvider,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import { theme } from "../lib/theme";
import { Router, Route } from "wouter";
import { Header } from "./header";
import { Item } from "./item";
import CaughtIn4K from "../assets/4k.png";
import { Product } from "./product";

export const Layout = () => (
    <ChakraProvider theme={theme}>
        <ColorModeProvider options={theme.config}>
            <Router>
                <Header />
                <Route path="/">
                    <Flex
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading
                            fontSize="2em"
                            class="content-title"
                            mb="0.5em"
                        >
                            Less is More
                        </Heading>
                        <Text mb="1.5em">
                            High quality cameras, made with love.
                        </Text>
                        <Item href="/products">Find Out More</Item>
                    </Flex>
                </Route>
                <Route path="/products">
                    <Flex
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center"
                        mb="1.5em"
                    >
                        <Product
                            description="
                    The Weawistic-64 is a high quality camera that is priced at
                    $0.69. With this epic camera, you can capture your most
                    favorable moments in 4K 69FPS. You can also purchase an
                    upgrade to 69K at a cost of $69,420.69."
                            image={CaughtIn4K}
                        />
                    </Flex>
                </Route>
            </Router>
        </ColorModeProvider>
    </ChakraProvider>
);
