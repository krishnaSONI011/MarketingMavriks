import { Lato, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export default function WebsiteJuarnyRamp() {
  return (
    <>
     
      {/* Image Section */}
      <div className="flex flex-col md:flex-row mt-16 mx-5 gap-4">
        <div className="w-full md:w-1/2 p-2">
          <img src="/4.png" alt="Journey Step 1" className="w-full h-auto object-contain" />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <img src="/kahtu_design/review.png" alt="Journey Step 2" className="w-full h-auto object-contain" />
        </div>
      </div>


       {/* Text Section */}
       <div className="flex flex-col md:flex-row my-10 mx-5 gap-6">
        <div className="w-full md:w-1/2 flex  items-center justify-center text-center md:text-left">
          <h2 className={`${poppins.className} font-bold text-3xl md:text-5xl text-center`}>
            Website <span className="text-[#c20000]">Journey</span>
            <br className="hidden md:block" />
            Revamp
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <p className={`${lato.className} text-sm md:text-base text-justify`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, rem est fugit dolore et voluptate unde nostrum delectus, distinctio eum ab. Reiciendis delectus dolor laborum id earum ipsa, tempora fuga?
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit esse obcaecati reprehenderit veniam et aperiam, minima tempora! Similique culpa a nulla reiciendis, rem commodi? Possimus molestiae necessitatibus consequatur a rem!
          </p>
        </div>
      </div>

    </>
  );
}
