import Image from "next/image";
import { Eye, Heart, MessageSquare, Share2} from "lucide-react";


interface DiscussionFourmProps{
    card:{
        name:string,
        description:string,
        likes:number,
        watchList:number,
        comments:number,
        image:string,
        sector:number
    }
}

const DiscussionFourm = ({ card }: DiscussionFourmProps) => {
    return (
      <div className="flex flex-col mt-4 rounded-md shadow-lg shadow-slate-500 p-6">
        <div className="flex flex-col lg:flex-row gap-2">
          <div>
            <Image src="/user-round.png" alt="profile" width="50" height="50" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex gap-6">
                <span className="font-semibold text-black">{card.name}</span>
                <span className="rounded-full px-4 bg-blue-500 font-semibold text-white">
                  Sector {card.sector}
                </span>
              </div>
              <p className="text-blue-600 font-semibold">2 min ago</p>
            </div>
  
            <div className="flex flex-col w-full lg:w-[90%] gap-3">
              <div>
                <p>{card.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 font-semibold">
                  <Heart />
                  <p>{card.likes}k</p>
                </div>
                <div className="flex gap-2 font-semibold">
                  <Eye />
                  <p>{card.watchList}k Comments</p>
                </div>
                <div className="flex gap-2 font-semibold">
                  <MessageSquare />
                  <p>{card.comments}k</p>
                </div>
                <div className="flex gap-2 font-semibold">
                  <Share2 />
                  <p>share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


export default DiscussionFourm;
