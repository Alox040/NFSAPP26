import { ReactNode } from "react";

type TypographyVariant = "h1" | "h2" | "h3" | "body-large" | "body-regular" | "caption";

interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
}

export function Typography({ variant, children, className = "" }: TypographyProps) {
  const variantStyles = {
    "h1": "text-2xl font-semibold", // Heading Large - 24px
    "h2": "text-xl font-semibold", // Heading Medium - 20px
    "h3": "text-lg font-semibold", // Heading Small - 18px
    "body-large": "text-lg", // Body Large - 18px
    "body-regular": "text-base", // Body Regular - 16px
    "caption": "text-sm", // Caption - 14px
  };

  const Component = variant.startsWith("h") ? variant : "p";

  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}
