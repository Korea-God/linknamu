export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "오 상민",
  bio: "신 초보",
  avatarInitial: "오",
};

export const links: LinkItem[] = [
  { id: "blog", label: "블로그", url: "https://example.com/blog" },
  { id: "instagram", label: "인스타그램", url: "https://instagram.com" },
  { id: "github", label: "GitHub", url: "https://github.com" },
];
