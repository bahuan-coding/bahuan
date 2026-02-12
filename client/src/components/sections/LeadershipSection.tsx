import { Users, Heart, Handshake, Trophy, Code } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LeadershipSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="leadership" ref={sectionRef} className="scroll-mt-24 space-y-12 opacity-0">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <Users className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-mono">
            LEADERSHIP_PROTOCOL
          </h2>
        </div>

        <div className="prose prose-invert prose-lg max-w-none font-sans leading-relaxed text-muted-foreground">
          {/* Opening Quote */}
          <p className="text-xl text-foreground font-medium border-l-4 border-primary pl-6 italic">
            "I don't believe in leading from a distance. The best code I ever
            shipped, the best systems I ever built, happened when I was right
            there in the trenches with my team — debugging at 2 a.m., reviewing
            PRs on weekends, and celebrating every deploy together."
          </p>

          {/* ── Chapter 01 ──────────────────────────────────────────────── */}
          <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
            <span className="text-primary font-mono">01.</span> Roots &amp;
            Values
          </h3>
          <p>
            I am a <strong>Nordestino</strong>, born and raised in{" "}
            <strong>Bahia</strong>. Where I come from, people are everything.
            Community is not a corporate buzzword — it is how we survive, how we
            celebrate, and how we build. That warmth, that genuine love for the
            people around you, is embedded in my DNA. It is the lens through
            which I see every team I lead and every company I help build.
          </p>
          <p>
            Baianos carry a natural instinct for connection. We listen before we
            speak. We bring energy and loyalty to every table we sit at. I
            carried these values from Salvador into trading floors, boardrooms,
            and engineering war rooms. They have never failed me. The people I
            work with are not resources to be managed — they are partners in a
            shared mission, and I treat them that way.
          </p>

          {/* ── Chapter 02 ──────────────────────────────────────────────── */}
          <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
            <span className="text-primary font-mono">02.</span> A Decade of
            Shared Victories
          </h3>
          <p>
            The greatest proof of any leader's philosophy is not in their words
            — it is in who stays. I am deeply proud that my core team has been
            with me for <strong>over 10 years</strong>, across{" "}
            <strong>three consecutive successful ventures</strong>. From{" "}
            <strong>Captalys</strong> to <strong>a55 Credit</strong> to{" "}
            <strong>a55 Payments</strong>, we moved together. Not because of
            contracts, but because of trust, mutual growth, and a genuine
            partnership built on respect.
          </p>
          <p>
            Each transition was a leap of faith — leaving stability for a new
            challenge. Yet the same engineers, the same product minds, the same
            operators chose to make that leap with me, every single time. Three
            ventures, three successes, one team. That is not retention strategy;
            that is family.
          </p>
          <p>
            Together, we scaled from small squads to departments of{" "}
            <strong>110+ professionals</strong>, navigated startup chaos and
            corporate discipline alike, raised <strong>$44M USD</strong>, and
            processed over <strong>R$500 million</strong> in financing. Every
            milestone belongs to the team, never to one person.
          </p>

          {/* ── Chapter 03 ──────────────────────────────────────────────── */}
          <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
            <span className="text-primary font-mono">03.</span> Leader in the
            Trenches
          </h3>
          <p>
            I am a <strong>hands-on leader</strong>. I don't delegate what I am
            not willing to do myself. If the team is writing code, I am writing
            code. If there is an incident at 3 a.m., I am on the call. I
            dedicate a significant portion of my time to executing the same
            tasks my engineers execute — not because I need to, but because I
            believe leading by example is the most honest form of leadership.
          </p>
          <p>
            When more of my time is needed, I give more. There is no task too
            small for a leader who truly cares about the outcome. I review pull
            requests, I pair-program on hard problems, I debug production issues
            side by side with my team. The trenches are where trust is built,
            and I have never left them.
          </p>
          <p>
            This philosophy extends beyond startups. In corporate environments
            and across the financial market, I brought the same energy — the
            same willingness to sit beside a junior developer and walk through a
            problem together. Leadership is presence, and presence is earned
            through effort.
          </p>

          {/* ── Chapter 04 ──────────────────────────────────────────────── */}
          <h3 className="text-2xl font-bold text-foreground mt-12 flex items-center gap-2">
            <span className="text-primary font-mono">04.</span> The Quality
            Standard
          </h3>
          <p>
            I never confront someone's work. Instead, I present my own. I hold
            myself to the highest standard I can reach, and I let that work
            speak as the benchmark. When the team sees the effort I put into a
            piece of code, a system design, or a technical document, they
            understand the bar — not because I pointed at their shortcomings,
            but because I showed them what the extra mile looks like.
          </p>
          <p>
            This is not about ego. It is about building a culture where quality
            is contagious. I ask of others only what I have proven I can deliver
            myself. The standard is never imposed from above — it is
            demonstrated through sweat and shared ownership. That is how you
            build teams that take pride in every line of code they ship.
          </p>
        </div>

        {/* Leadership Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50">
          <div className="p-4 bg-card border border-border rounded-lg text-center space-y-1">
            <Handshake className="h-5 w-5 text-primary mx-auto" />
            <div className="text-2xl font-mono font-bold text-foreground">10Y</div>
            <div className="text-xs text-muted-foreground font-mono uppercase">Same Core Team</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg text-center space-y-1">
            <Trophy className="h-5 w-5 text-primary mx-auto" />
            <div className="text-2xl font-mono font-bold text-foreground">3</div>
            <div className="text-xs text-muted-foreground font-mono uppercase">Consecutive Successes</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg text-center space-y-1">
            <Users className="h-5 w-5 text-primary mx-auto" />
            <div className="text-2xl font-mono font-bold text-foreground">110+</div>
            <div className="text-xs text-muted-foreground font-mono uppercase">Professionals Led</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg text-center space-y-1">
            <Code className="h-5 w-5 text-primary mx-auto" />
            <div className="text-2xl font-mono font-bold text-foreground">100%</div>
            <div className="text-xs text-muted-foreground font-mono uppercase">Hands-On</div>
          </div>
        </div>
      </div>
    </section>
  );
}
