import { Button } from "@/components/ui/button";

export function MailViewMessageBody() {
  return (
    <div className="px-4 py-6">
      <div className="bg-secondary p-6 rounded-lg">
        <h3 className="font-medium mb-4">Hi Tonny,</h3>
        
        <p className="text-sm mb-4">
          Ready to learn how to build and deploy your own AI agents?
        </p>
        
        <p className="text-sm mb-6">
          Join the 5-Day AI Agents Intensive Course with Google, happening from November 10 to 14. 
          This no-cost, hands-on program is designed by Google researchers and engineers for a deep dive into AI agents.
        </p>
        
        <Button variant="mono" className="mx-auto block">
          Register Here
        </Button>
      </div>
    </div>
  );
}