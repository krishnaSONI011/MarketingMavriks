import { Skeleton } from "../Skeleton";


export default function LoadForSide(){
    return(
        <>
          <div className="w-fit animate-pulse flex mt-5">
              <div>
                <Skeleton className="w-[200px] h-[100px] rounded shadow" />
              </div>
        
              <div className="mt-5 space-y-2 mx-2">
                <Skeleton className="h-6 w-3/4" />
                <div className="flex gap-2 justify-start mt-4">
                <Skeleton className="h-8 w-28 rounded bg-[#c20000]" />
                <Skeleton className="h-8 w-28 rounded bg-[#06437d]" />
              </div>
              </div>
        
              
            </div>
        </>
    )
}