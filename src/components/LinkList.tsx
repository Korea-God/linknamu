"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/lib/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  function handleLinkClick(id: string) {
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data: { id: string; count: number }) => {
        setCounts((prev) => ({ ...prev, [data.id]: data.count }));
      })
      .catch(() => {});
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onLinkClick={handleLinkClick}
        />
      ))}
    </div>
  );
}
