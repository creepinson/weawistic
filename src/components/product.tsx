import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export const Product = (props: { description: string; image?: string }) => (
    <Flex flexDir="row" justifyContent="center" alignItems="center">
        <Image maxWidth="50%" src={props.image} mr="1.5em" />
        <Text>{props.description}</Text>
    </Flex>
);
