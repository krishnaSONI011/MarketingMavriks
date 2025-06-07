import { Lato, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export default function MetaResult() {
  return (
    <div className="flex flex-col md:flex-row mt-24 mx-5 gap-6">
      {/* Title Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-center md:text-left uppercase">
        <h2 className={`${poppins.className} font-bold text-3xl md:text-5xl`}>
          Cost Cap <span className="text-[#c20000]">Campaigns </span>
          <br className="hidden md:block" />
           and Social Proof
        </h2>
      </div>

      {/* Paragraph Section */}
      <div className="w-full md:w-1/2">
        <p className={`${lato.className} text-sm md:text-base text-justify`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, rem
          est fugit dolore et voluptate unde nostrum delectus, distinctio eum
          ab. Reiciendis delectus dolor laborum id earum ipsa, tempora fuga?
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          esse obcaecati reprehenderit veniam et aperiam, minima tempora!
          Similique culpa a nulla reiciendis, rem commodi? Possimus molestiae
          necessitatibus consequatur a rem!
        </p>
      </div>
    </div>
  );
}
