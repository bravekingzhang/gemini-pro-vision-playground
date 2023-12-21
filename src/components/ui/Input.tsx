"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// 假设我们有一个 InputPrimitive 组件库，这里我们直接使用原生的 input 元素
const Input = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn("py-2 px-4 border rounded-md shadow-sm ", className)}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
