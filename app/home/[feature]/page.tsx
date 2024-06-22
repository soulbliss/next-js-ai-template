import HeaderShell from '@/components/header-shell';
import { Button } from '@/components/ui/button';
import { FeaturePageProps } from '@/types';
import { PlusIcon } from 'lucide-react';
import { Metadata } from 'next';

export async function generateMetadata(
  props: FeaturePageProps,
): Promise<Metadata> {
  const title = `${props.params.feature} | AI tool layout`;
  const description = `Next JS ${props.params.feature} layout for your SaaS`;
  return { title, description };
}

export default function Feature(props: FeaturePageProps) {
  return (
    <div>
      <HeaderShell>
        <div className="flex w-full justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">
            {props.params.feature} - (coming soon)
          </h1>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Generate
          </Button>
        </div>
      </HeaderShell>
    </div>
  );
}
