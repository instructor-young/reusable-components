import { cva } from "class-variance-authority";
import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "warning" | "danger" | "info";
  outline?: boolean;
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
}

const buttonVariants = cva(
  "transition hover:brightness-90 active:brightness-75 text-white",
  {
    variants: {
      variant: {
        primary: "bg-sky-500",
        secondary: "bg-gray-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-violet-500",
      },
      size: {
        sm: "text-xs font-medium px-1.5 py-0.5",
        md: "text-[15px] font-semibold px-2.5 py-1",
        lg: "text-lg font-semibold px-4 py-1",
      },
      rounded: {
        true: "rounded-md",
        false: "",
      },
      outline: {
        true: "!bg-white border",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        outline: true,
        className: "!text-sky-500 border-sky-500",
      },
      {
        variant: "secondary",
        outline: true,
        className: "!text-gray-500 border-gray-500",
      },
      {
        variant: "warning",
        outline: true,
        className: "!text-yellow-500 border-yellow-500",
      },
      {
        variant: "danger",
        outline: true,
        className: "!text-red-500 border-red-500",
      },
      {
        variant: "info",
        outline: true,
        className: "!text-violet-500 border-violet-500",
      },
    ],
    defaultVariants: {
      variant: "primary",
      outline: false,
      size: "md",
      rounded: false,
    },
  },
);

function Button({
  variant,
  outline,
  size,
  rounded,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={buttonVariants({ variant, outline, rounded, size })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
