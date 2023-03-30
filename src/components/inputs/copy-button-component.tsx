import { useState } from "react";
import { IconButton, useClipboard, useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
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
    <IconButton onClick={handleCopyClick} icon={<IconCopy />} aria-label={""} />
  );
};

export default CopyButtonComponent;
