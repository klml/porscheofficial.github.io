import { Metadata } from "next";
import { Section } from "../../../components/02_molecules/section/section";
import { HeroSection } from "../../../components/03_organisms/heroSection/HeroSection";
import heroImage from "../../../../public/assets/heroImage2.png";
import { Textblock } from "../../../components/02_molecules/textblock/Textblock";
import CreatingDoc from "./CREATING_FOSS.mdx";
import { EditOnGithub } from "../../../components/02_molecules/editOnGithub/EditOnGithub";

export const metadata: Metadata = {
  title: "Creating FOSS | Porsche Open Source Platform",
  alternates: {
    canonical: "/docs/creating",
  },
};

const Docs: React.FC = () => {
  return (
    <main>
      <HeroSection
        title="Creating FOSS"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />

      <Section>
        <Textblock id="docs" className="mdx-content">
          <CreatingDoc />
        </Textblock>
      </Section>
      <EditOnGithub file="/src/app/docs/creating/CREATING_FOSS.mdx" />
    </main>
  );
};

export default Docs;
