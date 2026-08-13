import Image from "next/image";
import type { TeamMember } from "@/lib/team";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Verified portrait when one exists; otherwise a consistent branded
// initials placeholder — never a stock photo standing in for a real person.
export function TeamAvatar({
  member,
  className = "",
}: {
  member: TeamMember;
  className?: string;
}) {
  if (member.image) {
    return (
      <div className={`relative overflow-hidden rounded-[24px] bg-sky ${className}`}>
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes="(min-width: 1280px) 320px, 60vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-[24px] bg-blush ${className}`}
      aria-hidden="true"
    >
      <span className="font-display text-3xl font-bold text-rose">
        {initials(member.name)}
      </span>
    </div>
  );
}
