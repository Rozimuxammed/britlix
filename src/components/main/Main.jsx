import AboutUs from "../about-us/AboutUs";
import Pricing from "../pricing/Pricing";
import SectionHero from "../section-hero/Section-hero";
import SectionSkills from "../section-skills/Section-skills";

export default function Main() {
    return (
        <main>
            <SectionHero />
            <SectionSkills />
            <AboutUs />
            <Pricing />
        </main>
    )
}
