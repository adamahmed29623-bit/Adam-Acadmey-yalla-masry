import * as React from "react"
import { slot } from "@radix-ui/react-slot" // إذا لم يتوفر استخدمي 'button' عادية

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className="px-6 py-2 bg-[#D4AF37] text-black font-bold rounded-full hover:bg-yellow-600 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] disabled:opacity-50"
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
