import { IconButton as Ele, IconButtonProps } from "@material-tailwind/react";

interface Props extends IconButtonProps {
  loading?: boolean;
  children: React.ReactNode;
}

export default function IconButton({ children, loading, ...props }: Props) {
  // @ts-ignore
  return <Ele {...props}> {children} </Ele>;
}
