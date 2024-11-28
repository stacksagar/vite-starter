import { Card as Ele, CardProps } from "@material-tailwind/react";

interface Props extends CardProps {
  children: React.ReactNode;
}

export default function Card({ children, ...props }: Props) {
  // @ts-ignore
  return <Ele {...props}> {children} </Ele>;
}
