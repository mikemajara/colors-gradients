import { useState } from "react";
import {
  Text,
  HStack,
  IconButton,
  useClipboard,
  useToast,
  Input,
} from "@chakra-ui/react";
import { IconCopy } from "../../icons";

interface CopyButtonProps {
  value: string;
}

const CopyButtonComponent = ({ value }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { onCopy } = useClipboard(value);
  const toast = useToast();

  const handleCopyClick = () => {
    onCopy();
    setIsCopied(true);

    toast({
      title: "Copied to clipboard!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <HStack w="full">
      <Input isDisabled value={value} />
      <IconButton
        onClick={handleCopyClick}
        icon={<IconCopy />}
        aria-label={""}
      />
    </HStack>
  );
};

export default CopyButtonComponent;
