import { Skeleton } from "@/components/ui/skeleton"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { ChevronRight } from "lucide-react"


const loading = () => {
  return (
    <div>
      <div>
        <nav className="sticky top-0 z-30 flex h-16 items-center gap-10 border-b bg-background/60 px-4 backdrop-blur-xl transition-all">
        <div className="flex items-center space-x-2">
            <span className="inline-block font-urban text-xl font-bold">
            Dominate Links
            </span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
        <SignedIn>
        <div>
            <button className="relative rounded-lg">
            <Skeleton className="w-[100px] h-[40px] rounded-sm bg-gray-100"/>
            </button>
        </div>
        </SignedIn>
        <SignedOut>
        <div >
            <button className="relative rounded-lg">
              < Skeleton className="w-[80px] h-[40px] rounded-sm bg-gray-100" />
            </button>
        </div>
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
            <p className="flex flex-col items-center justify-center gap-3">
              <Skeleton className="w-[55vw] h-[60px] rounded-md bg-gray-200" />
              <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
                <Skeleton className="w-[40vw] h-[60px] rounded-md bg-gray-100" />
              </span>
            </p>
          </h1>
          <p
            className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <Skeleton className="w-[30vw] h-[32px] rounded-md  bg-gray-100" />
              <Skeleton className="w-[20vw] h-[32px] rounded-md  bg-gray-100" />
            </div>
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-2 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div>
              <button className="flex gap-2">
              < Skeleton className="w-[150px] h-[40px] rounded-sm bg-gray-100" />
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background pt-[7%]" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default loading