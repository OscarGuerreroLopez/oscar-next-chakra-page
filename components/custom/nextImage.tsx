import { chakra, type HTMLChakraProps } from "@chakra-ui/react";
import NextImage, { type ImageProps } from "next/image";
import type { ComponentType, CSSProperties } from "react";

const FORWARDED_PROPS = [
  "src",
  "alt",
  "width",
  "height",
  "fill",
  "sizes",
  "quality",
  "priority",
  "loading",
  "placeholder",
  "blurDataURL",
  "loader",
  "style",
  "onLoad",
  "onError",
  "onLoadingComplete"
];

const StyledImage = chakra(NextImage, {
  shouldForwardProp: (prop) => FORWARDED_PROPS.includes(prop)
}) as unknown as ComponentType<
  ImageProps & Omit<HTMLChakraProps<"img">, "fill">
>;

type Props = ImageProps & Omit<HTMLChakraProps<"img">, "fill">;
export default function Image({ style, ...rest }: Props) {
  // `fill` images are positioned absolutely and always render at 100% of the
  // container, so Next.js rejects any width/height in style.
  if (rest.fill) {
    return <StyledImage {...rest} style={style} />;
  }

  // Chakra treats `width`/`height` as style props and emits fixed CSS such as
  // `width:1024px;height:1024px`. That locks one dimension and distorts the
  // image once the container shrinks it. Override with responsive inline CSS.
  const baseStyle: CSSProperties = {
    width: "auto",
    height: "auto",
    maxWidth: "100%"
  };

  return (
    <StyledImage
      {...rest}
      style={style ? { ...baseStyle, ...style } : baseStyle}
    />
  );
}
