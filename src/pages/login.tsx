// import { Icons } from "@/components/icons"
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          {/* <Icons.logo className="mx-auto size-6" /> */}
          <Link href="/">
            <div className="flex items-center ">
              <ChevronLeftIcon />
              Back
            </div>
          </Link>{' '}
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your email to access your account
          </p>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">
              <h1 className="text-left">Email</h1>
            </Label>
            <Input type="email" placeholder="Enter your bussiness email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">
              <h1 className="text-left">Password</h1>
            </Label>
            <Input type="password" placeholder="password" />
          </div>
          <Button variant="default">Submit</Button>
        </div>
        {/* <UserAuthForm /> */}
        <input></input>
      </div>
    </div>
  );
}
