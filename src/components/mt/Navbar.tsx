import { Navbar as Ele, NavbarProps } from "@material-tailwind/react";

interface Props extends NavbarProps {
  children: React.ReactNode;
}

export default function Navbar({ children, ...props }: Props) {
  // @ts-ignore

  return <Ele {...props}> {children} </Ele>;
}
