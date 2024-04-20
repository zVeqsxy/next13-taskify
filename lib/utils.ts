import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// this functions enables us to use tailwind classes in our components
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
