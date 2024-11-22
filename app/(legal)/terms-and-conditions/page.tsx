import { termsAndConditions } from "@/lib/data/terms-and-conditions.data";
import { Metadata } from "next";

import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions",
};

export default function TermsAndConditions() {
  return (
    <div className="w-full min-h-screen relative">
      <div className="flex flex-col min-h-screen w-full max-w-[800px] py-12 px-4 mx-auto ">
        <div className="flex flex-col gap-12 m-auto max-w-4xl">
          <h1 className="text-[24px] font-bold uppercase">
            Terms and Conditions
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="mt-4">
                Last revised:{" "}
                <span className="font-semibold">November 22, 2024</span>
              </p>
              <p className="mt-4">
                Thank you for visiting lifeslice.pro (referred to as the
                &quot;Website&quot;), which is managed by LifeSlice
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p>
                Your use of the services provided on this website is subject to
                your acceptance of the terms outlined in this agreement. Please
                note that we reserve the right to periodically update these
                terms and conditions without prior notice. By accessing and
                using this website, you affirm that you have read, understood,
                and agree to comply with these terms and conditions.
              </p>
              <p>
                Additionally, our Privacy Policy is an essential component of
                this agreement and is incorporated herein. If any of these terms
                are unacceptable to you, we kindly encourage you to refrain from
                using the website.
              </p>
            </div>

            {termsAndConditions.map((items, index) => (
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
