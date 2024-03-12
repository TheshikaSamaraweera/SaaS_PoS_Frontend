import Link from "next/link";

import { cn } from "@/lib/utils";

export function SubNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6 bg-gray-100 p-5 m-3",
        className
      )}
      {...props}
    >
      <Link
        href="/anacksandconfectionery"
        className="text-sm font-bold transition-colors hover:text-primary"
      >
        Snacks & Confectionery
      </Link>
      <Link
        href="/babyproducts"
        className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        Baby Products
      </Link>
      <Link
        href="/fashion"
        className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        Fashion
      </Link>
      <Link
        href="/stationary"
        className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
      >
        Stationary
      </Link>
    </nav>
  );
}
