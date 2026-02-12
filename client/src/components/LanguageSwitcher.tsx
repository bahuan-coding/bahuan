import { useLanguage, type Lang } from "@/contexts/LanguageContext";

const flags: { lang: Lang; label: string; flag: React.ReactNode }[] = [
  {
    lang: "pt",
    label: "Português",
    flag: (
      <svg viewBox="0 0 512 512" className="h-5 w-5 rounded-full shadow-sm">
        <rect width="512" height="512" fill="#009c3b" />
        <polygon points="256,68 488,256 256,444 24,256" fill="#ffdf00" />
        <circle cx="256" cy="256" r="96" fill="#002776" />
        <path
          d="M160,256 Q208,220 256,248 Q304,276 352,240"
          fill="none"
          stroke="#fff"
          strokeWidth="12"
        />
      </svg>
    ),
  },
  {
    lang: "en",
    label: "English",
    flag: (
      <svg viewBox="0 0 512 512" className="h-5 w-5 rounded-full shadow-sm">
        <rect width="512" height="512" fill="#002868" />
        <g fill="#bf0a30">
          <rect y="40" width="512" height="39" />
          <rect y="118" width="512" height="39" />
          <rect y="197" width="512" height="39" />
          <rect y="276" width="512" height="39" />
          <rect y="355" width="512" height="39" />
          <rect y="434" width="512" height="39" />
        </g>
        <g fill="#fff">
          <rect y="79" width="512" height="39" />
          <rect y="158" width="512" height="39" />
          <rect y="237" width="512" height="39" />
          <rect y="316" width="512" height="39" />
          <rect y="394" width="512" height="39" />
          <rect y="473" width="512" height="39" />
        </g>
        <rect width="224" height="276" fill="#002868" />
      </svg>
    ),
  },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      {flags.map((f) => (
        <button
          key={f.lang}
          onClick={() => setLang(f.lang)}
          aria-label={f.label}
          className={`relative cursor-pointer rounded-full p-0.5 transition-all duration-200 ${
            lang === f.lang
              ? "ring-2 ring-primary ring-offset-1 ring-offset-background scale-110"
              : "opacity-50 hover:opacity-80 hover:scale-105"
          }`}
        >
          {f.flag}
        </button>
      ))}
    </div>
  );
}
