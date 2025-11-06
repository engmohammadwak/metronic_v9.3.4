import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Alert, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export function CreateLabelDialog({ open, onOpenChange, onCreate }) {
  const [labelName, setLabelName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  const handleCreate = () => {
    const name = labelName.trim();
    onCreate?.({ name, color: selectedColor });

    toast.custom(
      (t) => (
        <Alert variant="mono" icon="success" onClose={() => toast.dismiss(t)}>
          <AlertIcon>
            <CircleCheck />
          </AlertIcon>
          <AlertTitle>Label "{name}" created</AlertTitle>
        </Alert>
      ),

      { duration: 2500 },
    );

    setLabelName('');
    setSelectedColor(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="rounded-lg"
        onKeyDown={(e) => {
          if (
            (e.metaKey || e.ctrlKey) &&
            e.key === 'Enter' &&
            labelName.trim()
          ) {
            e.preventDefault();
            handleCreate();
          }
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-start">Create New Label</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Label Name</label>
            <Input
              placeholder="Enter label name"
              value={labelName}
              onChange={(e) => setLabelName(e.target.value)}
              className="w-full mt-1"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Color</label>
            <div className="flex items-center gap-1 lg:gap-3 flex-wrap">
              {[
                '#dc2626',
                '#16a34a',
                '#ca8a04',
                '#2563eb',
                '#9333ea',
                '#db2777',
              ].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedColor(c)}
                  className={cn(
                    'size-10 rounded-md border',
                    'focus:outline-none focus:ring-2 focus:ring-primary shrink-0',
                    selectedColor === c ? 'ring-2 ring-primary' : '',
                  )}
                  style={{ backgroundColor: c }}
                  aria-label={`Pick ${c}`}
                />
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <div className="flex gap-2 justify-end">
            <Button variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleCreate}
              disabled={!labelName.trim()}
            >
              Create Label
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateLabelDialog;

<DialogTitle>Create New Label</DialogTitle>;
