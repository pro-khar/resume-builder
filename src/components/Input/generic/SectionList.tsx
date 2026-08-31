import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { ArrowUp, Pencil } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SectionFieldInputs } from "./SectionFieldInputs";
import type { SectionSchema } from "./types";

interface SectionListProps<
  TDraft extends Record<string, string>,
  TItem extends { id: string }
> {
  schema: SectionSchema<TDraft, TItem>;
  items: TItem[];
  onUpdate: (item: TItem) => void;
  onRemove: (id: string) => void;
}

export function SectionList<
  TDraft extends Record<string, string>,
  TItem extends { id: string }
>({ schema, items, onUpdate, onRemove }: SectionListProps<TDraft, TItem>) {
  const [selected, setSelected] = useState<TItem | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!selected) return;
    setSelected({ ...selected, [e.target.name]: e.target.value } as TItem);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selected) return;
    onUpdate(selected);
    setSelected(null);
  };

  return (
    <ScrollArea className={schema.listHeightClassName}>
      {items.length ? (
        <div className="mt-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="max-w-md mt-2 mx-auto border rounded-md pl-6 pr-2 py-2 flex justify-between items-center dark:bg-[#1f2937] bg-[#f3f4f6]"
            >
              <div>{schema.summary(item)}</div>
              <div className="flex gap-1">
                <Dialog
                  open={selected?.id === item.id}
                  onOpenChange={(open) => setSelected(open ? item : null)}
                >
                  <DialogTrigger asChild>
                    <Button className="px-3" onClick={() => setSelected(item)}>
                      <Pencil className="w-5 h-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>{schema.editDialogTitle}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      <form className="space-y-2" onSubmit={handleSubmit}>
                        {selected?.id === item.id ? (
                          <SectionFieldInputs
                            fields={schema.fields}
                            groups={schema.groups}
                            groupsHeading={schema.groupsHeading}
                            draft={selected as unknown as TDraft}
                            onChange={handleChange}
                          />
                        ) : null}
                        <Button className="w-full" type="submit">
                          Save
                        </Button>
                      </form>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>

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
