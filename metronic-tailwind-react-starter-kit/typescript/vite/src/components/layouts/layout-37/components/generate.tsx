import { Button } from '@/components/ui/button';
import { CircleX, CircleCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface GenerateProps {
  generatedContent: string;
  onAccept: () => void;
  onReject: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isGenerating?: boolean;
}

export function Generate({ 
  generatedContent, 
  onAccept, 
  onReject, 
  open, 
  onOpenChange 
}: GenerateProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-4 [&_[data-slot='dialog-close']]:absolute [&_[data-slot='dialog-close']]:right-3">
        <DialogHeader>
          <DialogTitle>Generated Email Content</DialogTitle>
          <DialogDescription>
            Review the AI-generated email content below and choose to accept or reject it.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-muted/50 border border-border rounded-lg p-4 max-h-60 text-2sm font-normal text-secondary-foreground whitespace-pre-line">
          {generatedContent}
        </div>
        
        <DialogFooter className="flex gap-3 justify-end">
          <Button 
            variant="outline" 
            onClick={onReject}
          >
            <CircleX />
            Reject
          </Button>
          <Button 
            variant="primary" 
            onClick={onAccept}
          >
            <CircleCheck />
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}