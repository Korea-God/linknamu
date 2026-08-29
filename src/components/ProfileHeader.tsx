type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export default function ProfileHeader({ name, bio, avatarInitial }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-3xl font-semibold text-gray-600 dark:bg-neutral-800 dark:text-gray-300">
        {avatarInitial}
      </div>
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
      </div>
    </header>
  );
}
