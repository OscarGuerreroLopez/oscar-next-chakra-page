import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image
} from "@chakra-ui/react";
import Link from "next/link";
import { TruncateText } from "@/utils";
import Description from "@/components/custom/description";

interface LittleCard {
  title: string;
  desc: string;
  imgSrc: string;
  linkAddress?: string;
  linkDesc?: string;
}

const littleCard: React.FC<LittleCard> = ({
  title,
  desc,
  imgSrc,
  linkAddress,
  linkDesc
}) => {
  const linkText = linkDesc || `Read more about ${title}`;

  return (
    <Card
      direction="column"
      overflow="hidden"
      variant="outline"
      shadow={"lg"}
      borderRadius="2xl"
    >
      <Image
        objectFit="cover"
        maxW="100%"
        maxH={"200px"}
        src={imgSrc}
        alt={`${title} illustration`}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Description desc={TruncateText(desc, 25)} props={{ py: 2 }} />
        </CardBody>

        {linkAddress && (
          <CardFooter>
            <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
              <Link href={linkAddress} passHref legacyBehavior>
                <a title={linkText}>{linkText}</a>
              </Link>
            </Button>
          </CardFooter>
        )}
      </Stack>
    </Card>
  );
};

export default littleCard;
