import HeaderShell from '@/components/header-shell';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CopyIcon } from 'lucide-react';

export const metadata = {
  title: 'Image Generation',
  description: 'Generate images using AI',
};

export default function ImageGeneration() {
  return (
    <>
      <HeaderShell>
        <div>
          <h1 className="text-lg font-semibold md:text-2xl">
            Image Generation
          </h1>
        </div>
      </HeaderShell>
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_280px]">
        <div className="flex flex-col">
          <div className="flex-1 p-4 md:p-6">
            <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
              <Icons.imagePlaceHolder />
            </div>
          </div>
        </div>
        <div className="flex h-[calc(100vh-60px)] flex-col gap-4 border-r bg-muted/40 p-4 lg:p-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="model">Model</Label>
              <Select defaultValue="stable-diffusion">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stable-diffusion">
                    Stable Diffusion
                  </SelectItem>
                  <SelectItem value="dall-e">DALL-E</SelectItem>
                  <SelectItem value="midjourney">Midjourney</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="prompt">Prompt</Label>
              <Textarea
                id="prompt"
                placeholder="Enter a prompt to generate an image"
                rows={3}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="width">Width</Label>
              <Input id="width" type="number" defaultValue={512} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="height">Height</Label>
              <Input id="height" type="number" defaultValue={512} />
            </div>
            <Button>Generate</Button>
          </div>
          <div className="relative flex-1 overflow-auto">
            <h2 className="mb-4 text-lg font-medium ">History</h2>
            <div className="grid gap-4 ">
              {[
                { title: 'A beautiful landscape', date: '2024-06-22' },
                { title: 'A futuristic cityscape', date: '2024-06-21' },
                { title: 'A surreal portrait', date: '2024-06-20' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img
                    src="/placeholder.png"
                    width={64}
                    height={64}
                    alt="Image"
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">
                      Generated on {item.date}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <CopyIcon className="h-4 w-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
