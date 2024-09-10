import Head from "next/head";
import Image from "next/image";

const Header: React.FC = () => {
  const headContent = {
    title: "Particle Auth Core + Gnosis Demo",
    metaDescription:
      "Particle Connect with Account Abstraction Code demo in Next JS for the Gnosis chain.",
    favicon: "/favicon.ico",
  };

  const mainHeadingContent = {
    particleLinkHref: "https://particle.network",
    particleImageSrc: "/dark.png",
    particleImageAlt: "Particle Logo",
    particleImageWidth: 240,
    particleImageHeight: 24,
    secondaryLinkHref: "https://www.gnosis.io/",
    secondaryImageSrc:
      "https://cdn.prod.website-files.com/662931fe35e0c191d1733ab9/6630c01debf602bb95076dd6_Gnosis-Green-01.svg",
    secondaryImageAlt: "Kakarot Logo",
    secondaryImageWidth: 240,
    secondaryImageHeight: 24,
  };

  const subHeading = "Particle Connect + Gnosis Chain demo.";

  return (
    <>
      <Head>
        <title>{headContent.title}</title>
        <meta name="description" content={headContent.metaDescription} />
        <link rel="icon" href={headContent.favicon} />
      </Head>
      <h1 className="text-4xl mt-4 font-bold mb-12 text-center flex items-center justify-center">
        <a
          href={mainHeadingContent.particleLinkHref}
          className="text-purple-400 hover:text-purple-300 transition duration-300 mr-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={mainHeadingContent.particleImageSrc}
            alt={mainHeadingContent.particleImageAlt}
            width={mainHeadingContent.particleImageWidth}
            height={mainHeadingContent.particleImageHeight}
          />
        </a>

        <a
          href={mainHeadingContent.secondaryLinkHref}
          className="text-purple-400 hover:text-purple-300 transition duration-300 ml-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={mainHeadingContent.secondaryImageSrc}
            alt={mainHeadingContent.secondaryImageAlt}
            width={mainHeadingContent.secondaryImageWidth}
            height={mainHeadingContent.secondaryImageHeight}
          />
        </a>
      </h1>
      <h2 className="text-2xl font-bold mb-6">{subHeading}</h2>
    </>
  );
};

export default Header;
