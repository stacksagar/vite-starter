import { Button as Ele, ButtonProps } from "@material-tailwind/react";

interface Props extends ButtonProps {
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({ children, loading, ...props }: Props) {
  // @ts-ignore
  return <Ele {...props}> {children} </Ele>;
}
