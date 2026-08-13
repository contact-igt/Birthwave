// Restrained brand line-art system — used only where a genuine Birthwave
// photograph isn't appropriate (per project image policy). One flexible
// component rather than six bespoke files, in keeping with minimal-code reuse.
// Palette: #613E37 (brown) / #CA9585 (rose) as primary strokes, #5DAEDB (blue)
// and #F88379 (coral) as sparing accent dots — matching the locked token set.
import type { ReactElement } from "react";

export type LineArtVariant =
  | "pregnancy"
  | "birth"
  | "vbac"
  | "fertility"
  | "vaginismus"
  | "newborn";

function PregnancyMark() {
  return (
    <>
      <path
        d="M100 40c-38 0-58 34-58 70 0 40 26 70 58 70s58-30 58-70"
        stroke="#613E37"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M70 90c8-14 24-20 30-8 6 12-4 24-16 24"
        stroke="#CA9585"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="128" cy="70" r="5" fill="#5DAEDB" opacity="0.8" />
    </>
  );
}

function BirthMark() {
  return (
    <>
      <path
        d="M40 150c20-60 50-95 60-95s40 35 60 95"
        stroke="#613E37"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60 150c14-40 30-64 40-64s26 24 40 64"
        stroke="#CA9585"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="70" r="5" fill="#F88379" opacity="0.85" />
    </>
  );
}

function VbacMark() {
  return (
    <>
      <path
        d="M35 100c8-10 24-10 32 0s24 10 32 0 24-10 32 0 24-10 32 0"
        stroke="#613E37"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="60" cy="100" r="4" fill="#CA9585" />
      <circle cx="100" cy="100" r="4" fill="#F88379" />
      <circle cx="140" cy="100" r="4" fill="#5DAEDB" />
    </>
  );
}

function FertilityMark() {
  return (
    <>
      <circle cx="100" cy="100" r="46" stroke="#613E37" strokeWidth="2" fill="none" />
      <path
        d="M100 54v92M54 100h92"
        stroke="#CA9585"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <circle cx="100" cy="54" r="5" fill="#5DAEDB" opacity="0.85" />
      <circle cx="146" cy="100" r="5" fill="#F88379" opacity="0.85" />
    </>
  );
}

function VaginismusMark() {
  return (
    <>
      <path
        d="M55 100c0-30 20-50 45-50s45 20 45 50-20 50-45 50-45-20-45-50Z"
        stroke="#613E37"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M75 100c0-16 11-28 25-28s25 12 25 28"
        stroke="#CA9585"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <circle cx="100" cy="100" r="5" fill="#5DAEDB" opacity="0.8" />
    </>
  );
}

function NewbornMark() {
  return (
    <>
      <circle cx="80" cy="80" r="26" stroke="#613E37" strokeWidth="2" fill="none" />
      <path
        d="M104 96c14 4 26 16 30 34"
        stroke="#613E37"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="134" cy="140" r="18" stroke="#CA9585" strokeWidth="2" fill="none" />
      <circle cx="72" cy="76" r="4" fill="#F88379" opacity="0.85" />
    </>
  );
}

const MARKS: Record<LineArtVariant, () => ReactElement> = {
  pregnancy: PregnancyMark,
  birth: BirthMark,
  vbac: VbacMark,
  fertility: FertilityMark,
  vaginismus: VaginismusMark,
  newborn: NewbornMark,
};

export function LineArtIllustration({
  variant,
  className = "",
}: {
  variant: LineArtVariant;
  className?: string;
}) {
  const Mark = MARKS[variant];
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <Mark />
    </svg>
  );
}
