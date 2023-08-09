import { Track } from "@/types/types";
import { Music } from "lucide-react";
import Image from "next/image";
import PlayTrackButton from "./PlayTrackButton";

interface Props {
    track: Track
}

export default function Poster({track} : Props) {

    // console.log(track)
    return (
        <div className="h-full p-4 transition duration-300 rounded-lg cursor-pointer group/item hover:bg-paper-400 bg-paper-500">
        <div className="relative">
          {track.album.images.length > 0 ? (
            <Image
              src={track.album.images[0].url}
              alt={track.name}
              height={160}
              width={160}
              className="object-cover w-full rounded-md aspect-square"
            />
          ) : (
            <div className="w-full h-40">
              <Music className="w-full h-full bg-paper " />
            </div>
          )}
          <PlayTrackButton
            track={track}
            variant="filled"
            className="absolute invisible w-12 h-12 text-3xl shadow-lg bottom-2 right-2 group/btn group-hover/item:visible"
          />
        </div>
        <h3 className="mt-5 font-bold truncate">{track.name}</h3>
        <h6 className="mt-1 text-xs font-semibold truncate text-gray">
          {track.artists[0].name}
        </h6>
      </div>
    );
  }