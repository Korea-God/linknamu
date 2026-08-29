import type { LinkItem } from "@/lib/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-center font-medium text-gray-800 shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:hover:bg-white/10"
    >
      {link.label}
    </a>
  );
}
