import { Skeleton } from "../Skeleton"
export default function Load(){
    return(
        <>
          <>
          <div className="w-fit animate-pulse">
      <div>
        <Skeleton className="w-[700px] h-[400px] rounded shadow" />
      </div>

      <div className="mt-5 space-y-2">
        <Skeleton className="h-6 w-3/4" />
      </div>

      <div className="flex gap-2 justify-end mt-4">
        <Skeleton className="h-8 w-28 rounded bg-[#c20000]" />
        <Skeleton className="h-8 w-28 rounded bg-[#06437d]" />
      </div>
    </div>
        
                </>
        </>
    )
}