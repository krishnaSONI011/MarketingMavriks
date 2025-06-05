import { BackgroundBeamsWithCollisionDemo } from "@/components/BeemComponet";
import AboutusStory from "./Aboutusstory";
import { DraggableCardDemo } from "@/components/Dragger";
import DraggerCardSection from "./DraggerCardSection";
import TeamSection from "./TeamSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:"About us"
}

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