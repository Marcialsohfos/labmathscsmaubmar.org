import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fonction utilitaire cn intégrée pour éviter l'erreur d'import @/lib/utils
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#64FFDA] text-[#020C1B] hover:bg-[#64FFDA]/90 shadow-lg",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#64FFDA]/50 bg-transparent text-[#64FFDA] hover:bg-[#64FFDA]/10",
        secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700",
        ghost: "hover:bg-slate-800 hover:text-[#64FFDA]",
        link: "text-[#64FFDA] underline-offset-4 hover:underline",
        // Vos variantes spéciales pour le Lab_Math
        hero: "bg-[#64FFDA] text-[#020C1B] font-bold shadow-[0_0_20px_-5px_#64FFDA] hover:scale-105 hover:shadow-[0_0_30px_-5px_#64FFDA] transition-all",
        heroOutline: "border-2 border-[#64FFDA]/60 bg-transparent text-white hover:bg-[#64FFDA]/10 hover:border-[#64FFDA] font-semibold transition-all",
        accent: "bg-[#D4AF37] text-[#020C1B] font-bold shadow-lg hover:scale-105 transition-all",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Si asChild est vrai (pour utiliser avec Link de Next par exemple), on utilise Slot
    // Sinon on utilise une balise button classique.
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };