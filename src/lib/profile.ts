export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "오상민",
  bio: "영업관리, 영업 데이터 분석 직무 | 요즘에는 바이브코딩 공부 중",
  avatarUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", label: "🐙 GitHub", url: "https://github.com/Korea-God" },
  { id: "instagram", label: "📸 인스타그램", url: "https://www.instagram.com/sangmin.oh" },
  { id: "blog", label: "📝 블로그", url: "https://play-log.tistory.com/" },
];
