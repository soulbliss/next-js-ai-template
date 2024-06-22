import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export default function SearchBar({ className = '' }: { className?: string }) {
  return (
    <div className="w-full flex-1">
      <form>
        <div className={cn('relative', className)}>
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full appearance-none rounded-lg bg-background pl-8 shadow-none"
          />
        </div>
      </form>
    </div>
  );
}
