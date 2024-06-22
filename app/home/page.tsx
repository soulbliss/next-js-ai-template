import HeaderShell from '@/components/header-shell';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Next JS AI tool layout',
  description: 'Next JS AI tool layout for your SaaS',
};

export default async function Page() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }
  return (
    <>
      <HeaderShell>
        <h1 className="text-lg font-semibold md:text-2xl">Home</h1>
      </HeaderShell>
      <div className="flex flex-1  justify-center rounded-lg  shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <Icons.checkSuccess className="h-10 w-10" />
          <h3 className="text-4xl font-bold tracking-tight">
            Welcome to AI Tool Layout 1
          </h3>
          <p className="my-4 text-2xl text-muted-foreground">
            High quality layout to make your Next JS AI app look more amazing!
          </p>
          <Button className="mt-4">Check the Layout</Button>
        </div>
      </div>
    </>
  );
}
