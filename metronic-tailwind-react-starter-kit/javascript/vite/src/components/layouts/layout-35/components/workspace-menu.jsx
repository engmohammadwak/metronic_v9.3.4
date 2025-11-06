import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Check,
  ChevronsUpDown,
  CircleAlert,
  Gem,
  Hexagon,
  Layers2,
  Plus,
  User,
  Zap,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { Alert, AlertIcon, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const workspaces = [
  {
    id: '1',
    name: 'Personal',
    type: 'personal',
    avatar: '/media/avatars/300-4.png',
    isActive: true,
  },
  {
    id: '2',
    name: 'Thunder AI',
    type: 'organization',
    icon: Zap,
    color: 'bg-blue-600 text-white',
    memberCount: 8,
  },
  {
    id: '3',
    name: 'Clarity AI',
    type: 'organization',
    icon: Gem,
    color: 'bg-fuchsia-600 text-white',
    memberCount: 6,
  },
  {
    id: '4',
    name: 'Lightning AI',
    type: 'organization',
    icon: Hexagon,
    color: 'bg-yellow-600 text-white',
    memberCount: 12,
  },
  {
    id: '5',
    name: 'Bold AI',
    type: 'organization',
    icon: Layers2,
    color: 'bg-teal-600 text-white',
    memberCount: 4,
  },
];

const FormSchema = z.object({
  workspaceName: z
    .string()
    .min(1, 'Workspace name is required')
    .max(50, 'Workspace name cannot exceed 50 characters'),
});

export function WorkspaceMenu() {
  const [selectedWorkspace, setSelectedWorkspace] = useState(
    workspaces.find((w) => w.isActive) || workspaces[0],
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { workspaceName: '' },
    mode: 'onSubmit',
  });

  const handleWorkspaceSelect = (workspace) => {
    setSelectedWorkspace(workspace);
    // Here you would typically trigger workspace switching logic
    console.log('Switching to workspace:', workspace.name);
  };

  function onSubmit(data) {
    toast.custom((t) => (
      <Alert variant="mono" icon="success" onClose={() => toast.dismiss(t)}>
        <AlertIcon>
          <CircleAlert />
        </AlertIcon>
        <AlertTitle>
          Workspace "{data.workspaceName}" created successfully
        </AlertTitle>
      </Alert>
    ));

    form.reset();
    setDialogOpen(false);

    // Here you would typically add the new workspace to your state/API
    console.log('Creating new workspace:', data.workspaceName);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 px-3 py-2 h-auto min-w-0 max-w-[200px] bg-muted"
        >
          <span className="text-sm font-medium truncate">
            {selectedWorkspace.name}
          </span>
          <ChevronsUpDown className="size-4 flex-shrink-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-56">
        {workspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onClick={() => handleWorkspaceSelect(workspace)}
            className={cn(
              'flex items-center gap-2 px-2 h-10 cursor-pointer',
              workspace.id === selectedWorkspace.id && 'bg-muted',
            )}
          >
            {workspace.type === 'personal' ? (
              <Avatar className="size-6">
                <AvatarImage src={workspace.avatar} alt={workspace.name} />
                <AvatarFallback>
                  <User className="size-3" />
                </AvatarFallback>
              </Avatar>
            ) : (
              <div
                className={cn(
                  'size-6 rounded-md flex items-center justify-center',
                  workspace.color,
                )}
              >
                {workspace.icon && <workspace.icon className="size-4" />}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">
                {workspace.name}
              </div>
            </div>
            {workspace.id === selectedWorkspace.id && (
              <Check className="ms-auto size-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* Add New Workspace */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className="flex items-center gap-2 px-2 h-10 cursor-pointer"
              onSelect={(e) => e.preventDefault()}
            >
              <div className="size-6 flex items-center justify-center">
                <Plus className="size-3 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                New workspace
              </span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader>
                  <DialogTitle>Create Workspace</DialogTitle>
                  <DialogDescription>
                    Add your workspace name. Click create when you're done.
                  </DialogDescription>
                </DialogHeader>
                <DialogBody>
                  <FormField
                    control={form.control}
                    name="workspaceName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Workspace name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Name can only contain alphanumeric characters and
                          space.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </DialogBody>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit">Create</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
