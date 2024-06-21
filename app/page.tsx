import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Next JS AI dashboard Layout',
  description: 'Next JS AI dashboard Layout for your SaaS',
};

export default async function Page() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login');
  }
  return (
    <div className="space-y-6 ">
      <div>
        <h3 className="font-sans text-lg font-medium">
          Welcome {user.name}, to the App
        </h3>
        <p className="font-display text-sm text-muted-foreground">
          Let us begin with working on the app.
        </p>
        <img src={user.image || ''} alt="User Image" />
      </div>
    </div>
    // <MainPage />
  );
}
