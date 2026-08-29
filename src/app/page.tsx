import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { links, profile } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-4 py-16">
      <DarkModeToggle />
      <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-gray-200 bg-white/60 p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarInitial={profile.avatarInitial}
        />
        <LinkList links={links} />
      </div>
    </main>
  );
}
