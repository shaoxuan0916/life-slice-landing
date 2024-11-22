import { StickyScroll } from "@/components/sections/features";
import SubscriptionPlan from "@/components/sections/subscription";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { content } from "@/lib/data/features.data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center max-w-[1440px] w-full mx-auto py-16">
      <div className="flex flex-col gap-3 lg:gap-4 items-center mb-4">
        <h1 className="text-4xl lg:text-5xl font-bold">Life Slice</h1>
        <p className="text-neutral-400 text-lg lg:text-xl italic font-medium">
          Your story, one slice at a time
        </p>
      </div>

      <StickyScroll content={content} />

      <div className="lg:mt-20">
        <SubscriptionPlan />
      </div>

      <div className="my-40 w-full flex flex-col gap-8 text-center items-center justify-center">
        <p className="text-3xl lg:text-4xl font-semibold">
          Start Your Journey Today!
        </p>
        <p className="text-lg lg:text-xl leading-8 font-medium text-neutral-400 mb-8">
          Turn moments into stories. <br /> Begin now and make your life
          unforgettable.
        </p>
        <MovingBorderButton className="border-indigo-500 hover:bg-indigo-600/30 hover:border-indigo-400 duration-500">
          <Link
            href="https://app.lifeslice.pro"
            target="_blank"
            className="text-lg font-semibold font-bricolage"
          >
            Get Started
          </Link>
        </MovingBorderButton>
      </div>
    </div>
  );
}
