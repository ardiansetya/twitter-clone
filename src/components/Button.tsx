import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  gray = false,
  small = false,
  className = "",
  ...props
}: ButtonProps) => {
  return <button {...props}></button>;
};

export default Button