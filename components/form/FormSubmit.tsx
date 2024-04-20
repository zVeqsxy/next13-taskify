"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

import { FormSubmitProps } from "@/types";

export const FormSubmit = ({
  children,
  disabled,
  className,
  variant = "primary",
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending || disabled}
      variant={variant}
      size="sm"
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
