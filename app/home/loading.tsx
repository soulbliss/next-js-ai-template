import { Loader2Icon } from 'lucide-react';

export default function Loading() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <Loader2Icon className="h-16 w-16 animate-spin" />
      </div>
    </div>
  );
}
