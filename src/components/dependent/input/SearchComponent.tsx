import {
  Center,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
} from "@chakra-ui/react";
import { RiCloseLine, RiSearchLine } from "@remixicon/react";
import { Dispatch } from "react";
import { iconSize } from "../../../constant/sizes";

interface Props extends InputGroupProps {
  name: string;
  inputValue: string | undefined;
  onChangeSetter: Dispatch<string | undefined>;
  size?: string;
  placeholder?: string;
  inputRef?: any;
}

export default function SearchComponent({
  inputRef,
  name,
  inputValue,
  onChangeSetter,
  size = "md",
  placeholder,
  ...props
}: Props) {
  return (
    <InputGroup flex={"1 1 165px"} minW={"165px"} {...props}>
      <InputLeftElement h={size === "sm" ? "32px !important" : "40px"}>
        <Icon as={RiSearchLine} opacity={0.3} fontSize={iconSize} />
      </InputLeftElement>

      <Input
        ref={inputRef ? inputRef : null}
        placeholder={placeholder || "Pencarian"}
        flex={"1 1 0"}
        pr={"40px !important"}
        pl={"40px !important"}
        onChange={(e) => {
          onChangeSetter(e.target.value);
        }}
        value={inputValue}
        size={size}
      />

      {inputValue && (
        <Center
          flexShrink={0}
          zIndex={3}
          position={"absolute"}
          h={"100%"}
          right={1}
        >
          <IconButton
            aria-label="Clear Search"
            icon={<Icon as={RiCloseLine} fontSize={20} />}
            onClick={() => {
              onChangeSetter("");
            }}
            colorScheme="error"
            variant={"ghost"}
            borderRadius={"full"}
            size={"xs"}
          />
        </Center>
      )}
    </InputGroup>
  );
}
