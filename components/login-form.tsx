'use client';

import { motion } from 'framer-motion';
import { AuroraBackground } from './aurora-background';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { UserAuthForm } from './user-auth-form';

export default function LoginForm() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <Card className="mx-auto max-w-sm shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-lg text-center text-balance">
              The Next JS AI layout for your next project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UserAuthForm />
          </CardContent>
        </Card>
      </motion.div>
    </AuroraBackground>
  );
}
