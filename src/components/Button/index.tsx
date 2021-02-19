import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Container {...props} type="button">
      {children}
    </Container>
  );
};

export default Button;
