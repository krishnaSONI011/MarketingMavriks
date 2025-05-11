import { CoverDemo } from "../sparkleHeading";
import { EvervaultCardDemo } from "./Side-heroImage";


export default function SecondSection(){
    return(
        <>
        <div className="flex mt-10 justify-center">
            <div className="w-2/3 flex items-center">
                <CoverDemo/>
            
            </div>
            <div>

            <EvervaultCardDemo />
            </div>
        </div>
        
        </>
    )
}