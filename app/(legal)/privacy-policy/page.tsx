import { privacyPolicy } from "@/lib/data/privacy-policy.data";
import { Metadata } from "next";

import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen relative">
      <div className="flex flex-col min-h-screen w-full max-w-[800px] py-12 px-4 mx-auto ">
        <div className="flex flex-col gap-12 m-auto max-w-4xl">
          <h1 className="text-[24px] font-bold uppercase">Privacy Policy</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="mt-4">
                Last revised:{" "}
                <span className="font-semibold">November 22, 2024</span>
              </p>
              <p className="mt-4">
                Welcome to LifeSlice! Your privacy is important to us. This
                Privacy Policy explains how we collect, use, and protect your
                information when you use our platform. By accessing LifeSlice,
                you agree to the practices described in this policy.
              </p>
            </div>

            {privacyPolicy.map((items, index) => (
              <div className="my-4" key={items.key}>
                <label className="text-[20px] font-semibold">
                  {index + 1}. {items.heading}
                </label>
                <p className="mt-2">
                  {items.description.split("\n").map((line, index) => (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
