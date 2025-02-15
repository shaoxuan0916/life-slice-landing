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
        src="/assets/images/4.png"
        priority
      />
    ),
  },
  {
    title: "Craft & Share Your Story",
    description:
      "Tell your life story your way. Add photos and text to create meaningful journeys that capture every chapter of your life.",
    content: (
      <Image
        alt="content"
        width={360}
        height={480}
        src="/assets/images/3.png"
      />
    ),
  },
  {
    title: "View Your Journey in a Timeline",
    description:
      "See your moments organized in a beautiful timeline. Every moment matters, and now others can react, bookmark, and follow along.",
    content: (
      <Image
        alt="content"
        width={360}
        height={480}
        src="/assets/images/2.png"
      />
    ),
  },
  {
    title: "Track & Revisit Other's Journeys",
    description:
      "With favorites, you can keep track of journeys that inspire you, follow their progress, and revisit key milestones with ease.",
    content: (
      <Image
        alt="content"
        width={360}
        height={480}
        src="/assets/images/1.png"
      />
    ),
  },
];
