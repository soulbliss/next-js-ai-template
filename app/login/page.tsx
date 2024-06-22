import LoginForm from '@/components/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account to access your layout',
};

export default function AuthenticationPage() {
  return <LoginForm />;
}
