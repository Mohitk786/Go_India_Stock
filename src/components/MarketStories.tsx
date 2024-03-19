import Image from "next/image";

const MarketStories = ({ headline, description }: {
  headline: string,
  description: string,
}) => {
  return (
      <div className="w-[50%] shadow-2xl py-2  shadow-slate-300 flex flex-col gap-2 ">
        <div className="w-[100%]">
          <Image src="/market.jpg" alt="cloud" width={380} height={50}/>
        </div>
        <div className="ml-6 w-[80%]">
          <h2 className="font-bold text-black">{headline}</h2>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default MarketStories;
