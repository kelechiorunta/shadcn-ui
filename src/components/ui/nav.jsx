"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { usePathname } from "next/navigation"

// Ensure that the icons being referenced in navlinks are properly defined
export function Nav({ navlinks, isCollapsed }) {
    const pathname = usePathname()
  return (
    <TooltipProvider>
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
    
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {navlinks.map((link, index) => {
          // Check if link.icon is a valid component before rendering
          const IconComponent = link.icon;

          if (!IconComponent) {
            console.error(`Icon for link ${link.title} is undefined`);
            return null;
          }

          return isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href || "#"} // Make sure the href is provided, fallback to "#"
                  className={cn(
                    buttonVariants({ variant: pathname===link.href? 'default' : link.variant }),
                    "h-50 w-50",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href || "#"}
              className={cn(
                buttonVariants({ variant: pathname===link.href? 'default' : link.variant, size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <IconComponent className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    
    </div>
    </TooltipProvider>
  );
}
