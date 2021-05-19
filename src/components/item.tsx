import { Flex, Link, FlexProps } from "@chakra-ui/react";
import { Link as WLink } from "wouter";
import { RenderableProps } from "preact";

export const Item = (props: RenderableProps<{ href?: string } & FlexProps>) => (
    <Flex
        bg="transparent"
        border="1px solid #ffffff"
        color="#ffffff"
        padding="0.5em"
        minW="5em"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        className="item"
        {...props}
    >
        <Link as={WLink} href={props.href}>
            {props.children}
        </Link>
    </Flex>
);
