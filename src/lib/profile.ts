export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

const defaultLinks: LinkItem[] = [
  { id: "github", label: "🐙 GitHub", url: "https://github.com/Korea-God" },
  { id: "instagram", label: "📸 인스타그램", url: "https://www.instagram.com/sangmin.oh" },
  { id: "blog", label: "📝 블로그", url: "https://play-log.tistory.com/" },
];

function parseLinks(): LinkItem[] {
  const raw = process.env.LINKS_JSON;
  if (!raw) return defaultLinks;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`LINKS_JSON 환경 변수가 올바른 JSON이 아닙니다: ${(error as Error).message}`);
  }

  if (!Array.isArray(parsed)) {
    throw new Error("LINKS_JSON 환경 변수는 배열이어야 합니다.");
  }

  return parsed as LinkItem[];
}

export const profile = {
  name: process.env.PROFILE_NAME ?? "오상민",
  bio:
    process.env.PROFILE_BIO ??
    "영업관리, 영업 데이터 분석 직무 | 요즘에는 바이브코딩 공부 중",
  avatarUrl: process.env.PROFILE_AVATAR_URL ?? "/profile.jpg",
};

export const links: LinkItem[] = parseLinks();
