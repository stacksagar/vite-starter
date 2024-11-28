import { MobileNav as Ele, MobileNavProps } from "@material-tailwind/react";

interface Props extends MobileNavProps {
  children: React.ReactNode;
}

export default function MobileNav({ children, ...props }: Props) {
  // @ts-ignore
  return <Ele {...props}> {children} </Ele>;
}
