import React from "react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

const Seo = () => {
  const router = useRouter();
  return (
    <DefaultSeo
      title={"ClueLess"}
      description={"Learn. Grow."}
      canonical={`https://clueless.vercel.app/${router.asPath}`}
      openGraph={{
        url: `https://clueless.vercel.app/${router.asPath}`,
        description: "learn. Grow.",
        images: [
          {
            url: "https://6bd7-36-74-89-71.ngrok.io/opengraph.jpg",
            width: 1200,
            height: 630,
            alt: "Social",
            type: "image/jpeg",
          },
        ],
        site_name: "ClueLess",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;
