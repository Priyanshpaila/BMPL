import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, containerClassName, id, name, ...props }, ref) => {
    const reactId = React.useId();
    const inputId = id ?? name ?? `input-${reactId}`;

    const helpId = helperText ? `${inputId}-help` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <div className={cn("grid gap-2", containerClassName)}>
        {label ? (
          <label htmlFor={inputId} className="text-sm font-medium text-slate-300">
            {label}
          </label>
        ) : null}

        <input
          ref={ref}
          id={inputId}
          name={name}
          type={type}
          data-slot="input"
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-10 w-full min-w-0 rounded-lg border bg-transparent px-4 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          {...props}
        />

        {helperText ? (
          <p id={helpId} className="text-xs text-slate-400">
            {helperText}
          </p>
        ) : null}

        {error ? (
          <p id={errorId} className="text-sm text-red-400">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
