import { useState, useEffect, useRef } from "react";

const COMMANDS = [
  { prompt: "$ ", text: "ssh andre@b3-colocation-sp4", delay: 40 },
  { prompt: "> ", text: "initializing HFT engine...", delay: 30, pause: 800 },
  { prompt: "> ", text: "loading FIX 4.4 gateway [OK]", delay: 25 },
  { prompt: "> ", text: "connecting order router to B3...", delay: 35, pause: 600 },
  { prompt: "> ", text: "latency: 12μs | status: OPTIMAL", delay: 20 },
  { prompt: "$ ", text: "deploy --agent-swarm --rust --prod", delay: 35, pause: 500 },
  { prompt: "> ", text: "spawning 8 coding agents...", delay: 30 },
  { prompt: "> ", text: "payment orchestration: ONLINE", delay: 25 },
  { prompt: "> ", text: "time-to-market reduced by 70%", delay: 30, pause: 1200 },
];

export default function TerminalEmulator() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [cmdIdx, setCmdIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cmdIdx >= COMMANDS.length) {
      // Restart loop
      const t = setTimeout(() => {
        setLines([]);
        setCurrentLine("");
        setCmdIdx(0);
        setCharIdx(0);
      }, 3000);
      return () => clearTimeout(t);
    }

    const cmd = COMMANDS[cmdIdx];
    const fullText = cmd.prompt + cmd.text;

    if (charIdx < fullText.length) {
      const t = setTimeout(() => {
        setCurrentLine(fullText.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, cmd.delay);
      return () => clearTimeout(t);
    }

    // Line complete
    const pause = cmd.pause || 200;
    const t = setTimeout(() => {
      setLines((prev) => [...prev.slice(-6), fullText]);
      setCurrentLine("");
      setCmdIdx((c) => c + 1);
      setCharIdx(0);
    }, pause);
    return () => clearTimeout(t);
  }, [cmdIdx, charIdx]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, currentLine]);

  return (
    <div
      ref={containerRef}
      className="p-4 border border-primary/20 bg-black/60 backdrop-blur font-mono text-xs leading-relaxed h-full overflow-hidden"
    >
      {lines.map((line, i) => (
        <div key={i} className={line.startsWith("$") ? "text-primary" : "text-muted-foreground"}>
          {line}
        </div>
      ))}
      {currentLine && (
        <div className={currentLine.startsWith("$") ? "text-primary" : "text-muted-foreground"}>
          {currentLine}
          <span className="animate-pulse">_</span>
        </div>
      )}
      {!currentLine && cmdIdx < COMMANDS.length && (
        <div className="text-primary animate-pulse">_</div>
      )}
    </div>
  );
}
