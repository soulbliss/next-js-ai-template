import HeaderShell from '@/components/header-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon, ShoppingCartIcon } from 'lucide-react';

export const metadata = {
  title: 'Billing - AI tool layout',
  description: 'Manage your subscription and payment details.',
};

export default function Billing() {
  return (
    <>
      <HeaderShell>
        <div className="flex w-full justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
          <Button>
            <ShoppingCartIcon className="mr-2 h-4 w-4" />
            Upgrade to Pro
          </Button>
        </div>
      </HeaderShell>

      <div className="my-6 flex h-screen overflow-scroll lg:px-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Your Plan</h2>
              <p className="text-muted-foreground">
                Manage your subscription and payment details.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Starter</h3>
                    <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Current
                    </div>
                  </div>
                  <p className="mt-2 text-4xl font-bold">$9</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    per month
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>1 user</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>1 GB storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Basic support</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-6 w-full">
                    Select
                  </Button>
                </div>
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-medium">Pro</h3>
                  <p className="mt-2 text-4xl font-bold">$29</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    per month
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>5 users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>10 GB storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Priority support</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-6 w-full">
                    Select
                  </Button>
                </div>
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-medium">Enterprise</h3>
                  <p className="mt-2 text-4xl font-bold">$99</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    per month
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Unlimited users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Unlimited storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span>Enterprise support</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-6 w-full">
                    Select
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <p className="text-muted-foreground">
                      If you have any questions or need assistance, please don
                      not hesitate to reach out to our support team.
                    </p>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Contact Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
