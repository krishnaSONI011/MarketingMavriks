import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className: string }) {
  return (
    <div
      className={cn("bg-gray-200 dark:bg-gray-800 rounded-md", className)}
    />
  );
}
