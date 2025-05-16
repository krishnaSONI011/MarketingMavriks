import { BackgroundBeamsWithCollisionDemo } from "@/components/BeemComponet";
import AboutusStory from "./Aboutusstory";
import { DraggableCardDemo } from "@/components/Dragger";
import DraggerCardSection from "./DraggerCardSection";
import TeamSection from "./TeamSection";

export default function AboutUs(){
    return(
        <>
       <BackgroundBeamsWithCollisionDemo title="We Don’t Just Market" subTitle="We Make Brands Matter" />
        <AboutusStory />
        <DraggerCardSection />
        <TeamSection />
        </>
    )
}