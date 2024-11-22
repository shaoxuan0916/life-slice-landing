import React from "react";
import Image from "next/image";

export const content: {
  title: string;
  description: string;
  content: React.ReactNode;
}[] = [
  {
    title: "Explore Inspiring Journeys",
    description:
      "Browse journeys shared by others and discover inspiring stories. From travels to milestones, see life through different perspectives and find motivation for your own journey.",
    content: (
      <Image
        alt="content"
        width={360}
        height={480}
        src="/assets/images/cnt-4.png"
        priority
      />
    ),
  },
  {
    title: "Craft Your Personal Journey",
    description:
      "Document your life story your way. Add photos and text to create meaningful journeys that capture every chapter of your life.",
    content: (
      <Image
        alt="content"
        width={360}
        height={480}
        src="/assets/images/cnt-2.png"
      />
    ),
  },
  {
    title: "View Your Journey in a Timeline",
    description:
      "See your moments organized in a beautiful timeline. Reflect on your growth and revisit key milestones in a seamless, visual format.",
    content: (
      <Image
        alt="content"
        width={360}
        height={480}
        src="/assets/images/cnt-3.png"
      />
    ),
  },
  {
    title: "Document Life's Moments with Slices",
    description:
      "Break your journey into slices, each capturing a special moment. Add text, media, and memories to make each slice unforgettable.",
    content: (
      <Image
        alt="content"
        width={360}
        height={480}
        src="/assets/images/cnt-1.png"
      />
    ),
  },
];
