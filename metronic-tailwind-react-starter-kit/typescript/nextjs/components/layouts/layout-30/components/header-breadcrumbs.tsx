import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export function HeaderBreadcrumbs() {  
  return (
    <div className="flex flex-row items-center flex-wrap gap-1">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbSeparator className="text-xs text-muted-foreground px-1.5">/</BreadcrumbSeparator>

          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>

          <Button size="sm" variant="secondary">Draft</Button>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
