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
        href="/examples/category1"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Category 01
      </Link>
      <Link
        href="/examples/category2"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Category 02
      </Link>
      <Link
        href="/examples/category3"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Category 03
      </Link>
      <Link
        href="/examples/category4"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Category 04
      </Link>
    </nav>
  );
}
