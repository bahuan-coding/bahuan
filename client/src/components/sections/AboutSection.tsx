import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Play } from "lucide-react";

const VIDEOS = [
  { id: "mSZyN0H9jtY", url: "https://youtu.be/mSZyN0H9jtY" },
  { id: "PZknMgzIr0M", url: "https://youtu.be/PZknMgzIr0M" },
  { id: "Xg8KAZeIaxE", url: "https://youtu.be/Xg8KAZeIaxE" },
];

export default function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="max-w-3xl mx-auto py-12 space-y-6 opacity-0"
    >
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-primary text-primary font-mono text-xs">
          {t.about.badge}
        </Badge>
      </div>

      <h2 className="text-3xl font-bold tracking-tight font-mono">
        {t.about.title}
      </h2>

      <p
        className="text-lg text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t.about.p1 }}
      />

      <p
        className="text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t.about.p2 }}
      />

      {/* Video Thumbnails */}
      <div className="pt-4 space-y-3">
        <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
          {t.about.videosTitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {VIDEOS.map((video, i) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-2"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border/60 transition-colors duration-300 group-hover:border-primary/60">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={t.about.videos[i].title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
              <p className="text-xs font-mono text-muted-foreground line-clamp-2 transition-colors duration-300 group-hover:text-foreground">
                {t.about.videos[i].title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
