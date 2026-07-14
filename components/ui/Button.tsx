import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost" | "text-link";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-vtm-red text-white hover:bg-[#a81718] active:bg-[#8f1415] font-medium tracking-wide",
  outline:
    "border border-vtm-dark text-vtm-dark hover:bg-vtm-dark hover:text-white font-medium tracking-wide",
  ghost:
    "text-vtm-dark hover:bg-vtm-gray-light font-medium",
  "text-link":
    "text-vtm-dark underline-offset-4 hover:underline font-medium p-0",
};

const sizeClasses: Record<Size, string> = {
  sm: "min-h-11 px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function buildClassName(
  variant: Variant,
  size: Size,
  arrow: boolean,
  extra?: string
): string {
  const base =
    "inline-flex items-center gap-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vtm-red";
  const isTextLink = variant === "text-link";
  const sizing = isTextLink ? "" : sizeClasses[size];
  return [base, variantClasses[variant], sizing, extra].filter(Boolean).join(" ");
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = "primary",
      size = "md",
      arrow = false,
      className,
      children,
      ...rest
    } = props as ButtonAsButton & { arrow?: boolean };

    if ((props as ButtonAsLink).href !== undefined) {
      const { href, target, rel, download } = props as ButtonAsLink;
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={buildClassName(variant, size, arrow, className)}
        >
          {children}
          {arrow && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={buildClassName(variant, size, arrow, className)}
        {...rest}
      >
        {children}
        {arrow && (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    );
  }
);
