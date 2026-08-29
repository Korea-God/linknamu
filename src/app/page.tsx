import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { links, profile } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-20">
      <DarkModeToggle />
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
        />
        <LinkList links={links} />
      </div>
    </main>
  );
}
