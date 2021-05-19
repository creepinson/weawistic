import { Flex, Link, Heading } from "@chakra-ui/react";
import { Link as WLink } from "wouter";
import { Item } from "./item";

export const Header = () => (
    <Flex
        className="header"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bg="#e05050"
        p="1.5em"
        mb="3.5em"
    >
        <Link as={WLink} class="branding" href="/" textDecoration="none">
            <Heading fontSize="3em" mb="0.5em">
                Weawistic Technology
            </Heading>
        </Link>
        <Flex class="navigation" flexDir="row">
            <Item href="/" fontSize="1.5em" ml="1.5em">
                Home
            </Item>
            <Item href="/products" fontSize="1.5em" ml="1.5em">
                Products
            </Item>
        </Flex>
    </Flex>
);
