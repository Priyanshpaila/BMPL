import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, containerClassName, id, name, ...props }, ref) => {
    const reactId = React.useId();
    const textareaId = id ?? name ?? `textarea-${reactId}`;

    const helpId = helperText ? `${textareaId}-help` : undefined;
    const errorId = error ? `${textareaId}-error` : undefined;
    const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <div className={cn("grid gap-2", containerClassName)}>
        {label ? (
          <label htmlFor={textareaId} className="text-sm font-medium text-slate-300">
            {label}
          </label>
        ) : null}

        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          data-slot="textarea"
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            "border-input min-h-[110px] w-full rounded-lg border bg-transparent px-4 py-3 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-slate-500 md:text-sm",
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

Textarea.displayName = "Textarea";

export { Textarea };
