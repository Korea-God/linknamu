import type { LinkItem } from "@/lib/profile";

type LinkCardProps = {
  link: LinkItem;
  count: number;
  onLinkClick: (id: string) => void;
};

export default function LinkCard({ link, count, onLinkClick }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onLinkClick(link.id)}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 font-medium text-gray-800 shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:hover:bg-white/10"
    >
      <span className="flex-1 text-center">{link.label}</span>
      <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">
        {count}회
      </span>
    </a>
  );
}
