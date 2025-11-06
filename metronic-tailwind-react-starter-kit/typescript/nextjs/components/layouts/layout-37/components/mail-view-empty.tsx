import { ScrollArea } from "@/components/ui/scroll-area";
import { MailViewWrapper } from "./mail-view-wrapper";
import { Button } from "@/components/ui/button";
import { Mail, Plus, Sparkles } from "lucide-react";
import { Reply } from "./reply";
import { ZeroChat } from "./zero-chat";
import { useState } from "react";

export function MailViewEmpty() {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [composeMode, setComposeMode] = useState<'reply' | 'forward'>('reply');
  const [isZeroChatOpen, setIsZeroChatOpen] = useState(false);
  return (
    <>
      <MailViewWrapper>
        {/* Empty Content */}
        <div className="p-4 grid content-center h-full">
          <ScrollArea className="h-[calc(100vh-10rem)] grid content-center">
            <div className="flex flex-col items-center justify-center">
              {/* Empty State Icon */}
              <div className="relative mb-6">
                <div className="size-50 rounded-full border border-dashed flex items-center justify-center bg-accent/40">
                  <div className="relative">
                    {/* Front document */}
                    <div className="w-20 h-30 bg-background rounded border border-muted-foreground/20 transform rotate-12 relative z-10">
                      <div className="p-2">
                        <div className="w-6 h-4 bg-muted-foreground/30 rounded mb-2 mx-auto"></div>
                        <div className="space-y-1">
                          <div className="h-1 bg-muted-foreground/20 rounded w-full"></div>
                          <div className="h-1 bg-muted-foreground/20 rounded w-3/4"></div>
                          <div className="h-1 bg-muted-foreground/20 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    {/* Back document */}
                    <div className="w-20 h-27 bg-muted-foreground/5 rounded border border-muted-foreground/10 absolute -left-2 -bottom-2 transform -rotate-6"></div>
                  </div>
                </div>
              </div>

              {/* Empty State Text */}
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-foreground mb-1">It's empty here</h2>
                <p className="text-muted-foreground text-2sm">Choose an email to view details</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => { setIsZeroChatOpen(true); }}>
                  <Sparkles />
                  Ask Ai
                </Button>
                <Button variant="outline" onClick={() => { setComposeMode('forward'); setIsReplyOpen(true); }}>
                  <Mail />
                  Send Email
                </Button>
                <Button variant="outline">
                  <Plus />
                  New Email
                </Button>
              </div>
            </div>          
          </ScrollArea>
        </div>
      </MailViewWrapper>
      
      {/* Reply Form - Outside MailViewWrapper */}
      {isReplyOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <Reply onOpenChange={setIsReplyOpen} mode={composeMode} />
          </div>
        </div>
      )}
      
      {/* Zero Chat Modal */}
      <ZeroChat 
        open={isZeroChatOpen} 
        onOpenChange={setIsZeroChatOpen} 
      />
    </>
  );
}