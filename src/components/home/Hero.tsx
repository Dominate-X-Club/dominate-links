import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import {
  Award,
  Box,
  ChevronRight,
  GithubIcon,
  Link2,
  Star,
  Twitter,
  TwitterIcon,
  X,
} from "lucide-react";
import FeatureCard from "../ui/FeatureCard";
import Image from "next/image";
import banner from "../../../public/dt-banner.png";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import WavyText from "../ui/wavy-text";

const gridItems = [
  {
    title: "Dominate Links",
    description:
      "Dominate Links is a web application that allows users to create personalized pages containing multiple links. It serves as a centralized hub for users to share various links, such as social media profiles, websites, portfolios, and more. With Dominate Links, users can create a single, easy-to-remember link to share with their audience, simplifying the process of sharing multiple links across different platforms.",
    icon: <GithubIcon size={26} />,
    link: "https://github.com/rohitt-gupta/dominate-links",
    className: "bg-white shadow-md rounded-lg p-6 mb-6",
  },
  {
    title: "Copod",
    description:
      "Go from 0 to 1st Podcast with our ready to shoot, Hospitality Centric, Managed Podcast studio. Book a slot for an instant podcast shoot at copod.space",
    icon: <GithubIcon size={26} />,
    link: "https://github.com/Dominate-X-Club/Copod",
    className: "bg-white shadow-md rounded-lg p-6 mb-6",
  },
  {
    title: "Dominate Link website",
    description:
      "Dominate Links is a web application that allows users to create personalized pages containing multiple links. It serves as a centralized hub for users to share various links, such as social media profiles, websites, portfolios, and more. With Dominate Links, users can create a single, easy-to-remember link to share with their audience, simplifying the process of sharing multiple links across different platforms.",
    icon: <GithubIcon size={26} />,
    link: "https://github.com/iAbhinav/dominate-twitter-club",
    className: "bg-white shadow-md rounded-lg p-6 mb-6",
  },
];

const Hero = () => {
  return (
    <div className="relative">
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
            <Link href="/sign-in">
              <Button className="relative rounded-lg">Sign In</Button>
            </Link>
          </SignedOut>
        </div>
      </nav>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] "></div>
      {/* Hero Section */}
      <section className="relative space-y-6 pt-8 lg:pb-28 lg:pt-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
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
            Keep all your important links in one place. With Dominate Links, you
            can organize, customize, and share with ease.
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-2 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Link href={"/dashboard"}>
              <Button className="">
                Get Started
                <ChevronRight size={"20px"} />
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
      <section className="relative space-y-16 lg:pb-10 lg:pt-10 px-5 sm:px-20">
        <div className="flex items-center justify-center my-16 w-full">
          <span className="mx-4 text-gray-800 font-extrabold sm:text-6xl md:text-6xl lg:text-6xl text-4xl">
            <WavyText word="The fast, friendly and powerful link in bio tool." />
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-screen-lg">
            <div className="grid grid-cols-1 gap-8  md:grid-cols-2 justify-items-center align-items-center">
              <FeatureCard
                title="One stop customized profile for dominatexclub members"
                description="Provide a centralized navigation section where users can access all their important links, such as social media profiles, professional websites, and other relevant links."
                icon={<Link2 size={"20px"} />}
              />
              <FeatureCard
                title="Badges and Tags Based on Your DominateXClub Contributions"
                description="Members earn badges and tags for their contributions and expertise within the dominatexclub community."
                icon={<Star size={"20"} />}
              />
              <FeatureCard
                title="Total bounties won from dominatexclub"
                description="Members can see the total number of bounties they've won for their contributions to dominatexclub projects."
                icon={<Award size={"20"} />}
              />
              <FeatureCard
                title="Karma points in the club:"
                description="Karma points reflect a member's reputation and positive contributions to the dominatexclub community"
                icon={<Box size={"20"} />}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative space-y-6 lg:pb-10 lg:pt-10 px-15 sm:px-20 mt-10">
        <div className="flex items-center justify-center">
          <span className="mx-4 text-gray-800 font-extrabold sm:text-6xl md:text-6xl lg:text-6xl text-4xl sm:mx-20">
            <WavyText word="Contribute to our open source projects" />
          </span>
        </div>
        <div className="container mx-auto px-4">
          {/* <div className="max-w-5xl mx-auto"> */}
          <p className="text-xl text-center text-gray-700 m-10">
            We actively contribute to open source projects, collaborating with
            the global community to drive innovation and make a positive impact.
            Here are some of our recent contributions:
          </p>
          <BentoGrid className="max-w-80 sm:max-w-full mx-auto ">
            {gridItems.map((item, index) => (
              <BentoGridItem
                key={index}
                title={
                  <h3 className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
                    {item.title}
                  </h3>
                }
                description={
                  <>
                    <p className="text-gray-700 mb-2 text-lg">
                      {item.description}
                    </p>
                    <div className="flex gap-4">
                      <div className="w-10 flex h-10 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500/80 flex-shrink-0">
                        {item.icon}
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-purple-500 flex justify-center items-center"
                      >
                        GitHub
                      </a>
                    </div>
                  </>
                }
              />
            ))}
          </BentoGrid>
          {/* </div> */}
        </div>
      </section>
      <section className="relative space-y-6 lg:pb-10 lg:pt-10 px-5 sm:px-20 mx-8">
        <div className="flex items-center justify-center my-8 w-full flex-wrap ">
          <span className="mx-4 text-gray-800 font-extrabold sm:text-6xl md:text-6xl lg:text-6xl text-4xl">
            <WavyText word="Contact us" />
          </span>
        </div>
        <div className="relative flex flex-col items-center p-6  bg-purple-50 rounded-xl shadow-md sm:flex-row md:flex-row">
          <div className="relative w-full h-full">
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto">
                <h3 className="relative flex items-center text-2xl justify-center bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
                  Let's Chat Reach out to us.
                </h3>
                <p className="text-lg text-center text-gray-700 mb-6">
                  Have questions or feedback? We'd love to hear from you. You
                  can reach out to us through the following channels:
                </p>
                <div className="flex justify-center mb-6 gap-4">
                  <div className="flex gap-4">
                    <div className="w-10 flex h-10 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500/80 flex-shrink-0">
                      <GithubIcon size={26} />
                    </div>
                    <a
                      href="https://github.com/rohitt-gupta/dominate-links"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-purple-500 flex justify-center items-center"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 flex h-10 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500/80 flex-shrink-0">
                      <X size={26} />
                    </div>
                    <a
                      href="https://twitter.com/dominateXclub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-purple-500 flex justify-center items-center"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={banner} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
