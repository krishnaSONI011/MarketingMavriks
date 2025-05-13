import { Lato, Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ["latin"],
    weight:"800" 
})
const lato = Lato({
    subsets: ["latin"],
    weight:"400"
})
export default function MetaResult(){
    return(
        <>
        <div className="flex mt-24 mx-5">
                <div className="w-1/2  flex items-center justify-center uppercase">
                        <h2 className={`${poppins.className} font-bold text-5xl`}>Cost Cap<span className="text-[#c20000] text-center">Campaigns</span> <br/>and Social Proof</h2>
                </div>
                <div className="w-1/2">
                    <p className={`${lato.className} `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, rem est fugit dolore et voluptate unde nostrum delectus, distinctio eum ab. Reiciendis delectus dolor laborum id earum ipsa, tempora fuga?. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit esse obcaecati reprehenderit veniam et aperiam, minima tempora! Similique culpa a nulla reiciendis, rem commodi? Possimus molestiae necessitatibus consequatur a rem!</p>
                </div>

        </div>
        {/* <div className="flex mt-24 mx-5">
               <img src="/kahtu_design/banner.webp" alt="" />
        </div> */}
        </>
    )
}