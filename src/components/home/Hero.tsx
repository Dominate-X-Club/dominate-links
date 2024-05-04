import Link from "next/link"
import { Button } from "../ui/button"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { ChevronRight } from 'lucide-react';


const Hero = () => {
  return (
    <div>
        <nav className="sticky top-0 z-30 flex h-16 items-center gap-10 border-b bg-background/60 px-4 backdrop-blur-xl transition-all">
        <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-urban text-xl font-bold">
            Dominate Links
            </span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
        <SignedIn>
        <Link href="/dashboard">
            <Button className="relative rounded-lg">Dashboard</Button>
        </Link>
        </SignedIn>
        <SignedOut>
        <Link href="/signin">
            <Button className="relative rounded-lg">Sign In</Button>
        </Link>
        </SignedOut>
        </div>
        </nav>

        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Hero Section */}
        <section className="relative bg-dot-black/[0.2] space-y-6 pt-8 lg:pb-28 lg:pt-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <p>
            Manage all your links with{" "}
              <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
              Dominate Links
              </span>
            </p>
          </h1>

          <p
            className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            Keep all your important links in one place. With Dominate Links, you can organize, customize, and share with ease.
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-2 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Link href={'/dashboard'}>
              <Button className="">
                Get Started
                <ChevronRight size={'20px'}/>
              </Button>
            </Link>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background pt-[7%]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero