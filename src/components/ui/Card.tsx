import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border p-6 shadow-sm",
        hover && "hover:shadow-md transition-shadow",
        className
      )}
    >
      {children}
    </div>
  );
}
