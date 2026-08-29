type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function ProfileHeader({ name, bio, avatarUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatarUrl}
        alt={name}
        className="h-28 w-28 rounded-full object-cover shadow-[0_10px_30px_-6px_rgba(0,0,0,0.25)] ring-4 ring-white/80 dark:ring-neutral-900/80"
      />
      <div className="space-y-1.5">
        <h1 className="text-xl font-bold tracking-tight">{name}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
      </div>
    </header>
  );
}
