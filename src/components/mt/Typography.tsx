import { Button as Ele, TypographyProps } from "@material-tailwind/react";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

export default function Typography({ children, ...props }: Props) {
  // @ts-ignore
  return <Ele {...props}> {children} </Ele>;
}
