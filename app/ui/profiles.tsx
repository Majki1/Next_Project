import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";

const profiles = [
  { name: 'John Doe', handle: '@johndoe', avatar: 'https://via.placeholder.com/50' },
  { name: 'Jane Smith', handle: '@janesmith', avatar: 'https://via.placeholder.com/50' },
  { name: 'Bob Johnson', handle: '@bobjohnson', avatar: 'https://via.placeholder.com/50' },
];

function ProfileCard({ profile }: { profile: { name: string, handle: string, avatar: string } }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  }

    return (
      <div className="flex items-center space-x-3 p-2 hover:bg-blue-50 hover:text-black hover:cursor-pointer border-b border-white">
        <img className="w-12 h-12 rounded-full" src={profile.avatar} alt={profile.name} />
        <div>
          <div className="font-bold">{profile.name}</div>
          <div className="text-sm text-gray-500">{profile.handle}</div>
        </div>
        <div className="ml-auto w-auto">
        <button onClick={handleFollow} className="transition-colors duration-900 ease-in-out bg-cyan-500 text-white rounded-full px-4 py-1 text-sm hover:bg-cyan-300 whitespace-nowrap w-auto">
          {isFollowed ? <>Followed <IconCheck style={{ display: 'inline-block' }} size={16}/></> : 'Follow'}
        </button>
        </div>
      </div>
    );
}

export default function RecommendedProfiles() {
  return (
    <div className="w-80 ml-4 rounded-lg">
      <div className="p-3 font-bold ">Recommended For You</div>
      {profiles.map((profile) => (
        <ProfileCard key={profile.handle} profile={profile} />
      ))}
    </div>
  );
}