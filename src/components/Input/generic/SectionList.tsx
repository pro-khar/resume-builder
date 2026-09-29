import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { ArrowUp, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SectionSchema } from "./types";

interface SectionListProps<
  TDraft extends object,
  TItem extends { id: string }
> {
  schema: SectionSchema<TDraft, TItem>;
  items: TItem[];
  editingId?: string;
  onEdit: (item: TItem) => void;
  onRemove: (id: string) => void;
}

export function SectionList<
  TDraft extends object,
  TItem extends { id: string }
>({ schema, items, editingId, onEdit, onRemove }: SectionListProps<TDraft, TItem>) {
  return (
    <ScrollArea className={schema.listHeightClassName}>
      {items.length ? (
        <div className="mt-5">
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "max-w-md mt-2 mx-auto border rounded-md pl-6 pr-2 py-2 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]",
                item.id === editingId && "border-purple-500"
              )}
            >
              <div>{schema.summary(item)}</div>
              <div className="flex gap-1">
                <Button className="px-3" onClick={() => onEdit(item)}>
                  <Pencil className="w-5 h-5" />
                </Button>
                <Button className="px-3" onClick={() => onRemove(item.id)}>
                  <TrashIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-2 text-gray-500 text-xs items-center justify-center p-6 mt-5">
          <p>{schema.emptyStateLabel}</p> <ArrowUp />
        </div>
      )}
    </ScrollArea>
  );
}
