import { NavItem } from '@/types/nav';
import {
  Code,
  CreditCard,
  FileText,
  HomeIcon,
  ImageIcon,
  Network,
  Settings,
} from 'lucide-react';

export const SideBar: NavItem[] = [
  {
    title: 'Home',
    href: '/home',
    icon: HomeIcon,
  },
  {
    title: 'Image Generation',
    href: '/home/image-generation',
    icon: ImageIcon,
  },
  {
    title: 'Text Analysis',
    href: '/home/text-analysis',
    icon: FileText,
  },
  {
    title: 'Code Assistant',
    href: '/home/code-assistant',
    icon: Code,
  },
  {
    title: 'AI Models',
    href: '/home/ai-models',
    icon: Network,
  },
  {
    title: 'Billing',
    href: '/home/billing',
    icon: CreditCard,
  },
  {
    title: 'Settings',
    href: '/home/settings',
    icon: Settings,
  },
];
