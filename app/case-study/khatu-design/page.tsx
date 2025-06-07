import { BackgroundBeamsWithCollisionDemo } from "@/components/BeemComponet";
import { CompareDemo } from "@/components/CampareComp";
import BrandValueAndAbout from "@/components/case-study/BrandValueAndAbout";
import FaceBookCampain from "@/components/case-study/FaceBookCanpain";
import MetaResult from "@/components/case-study/MetaResult";
import WebsiteDemo from "@/components/case-study/WebsiteDemo";
import WebsiteJuarnyRamp from "@/components/case-study/WebsiteJuarnyRamp";


export default function caseStudy(){
    return(

        <>
        <BackgroundBeamsWithCollisionDemo title={"Journey Revamp"} subTitle="Khatu Design"/>
        <BrandValueAndAbout />
        <WebsiteJuarnyRamp/>
        <WebsiteDemo />
        {/* <FaceBookCampain /> */}
        <MetaResult />
        <CompareDemo />
        
        </>
    )
}