import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MiniSpark } from "@/components/charts/MiniSpark";
import { cn } from "@/lib/utils";

export type Accent = "indigo" | "emerald" | "amber" | "red" | "violet" | "cyan" | "rose";

const ACCENT_HEX: Record<Accent, string> = {
  indigo: "#6366f1",
  emerald: "#10b981",
  amber: "#f59e0b",
  red: "#ef4444",
  violet: "#8b5cf6",
  cyan: "#06b6d4",
  rose: "#f43f5e",
};

const ACCENT_BG: Record<Accent, string> = {
  indigo: "bg-indigo-50 text-indigo-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  red: "bg-red-50 text-red-600",
  violet: "bg-violet-50 text-violet-600",
  cyan: "bg-cyan-50 text-cyan-600",
  rose: "bg-rose-50 text-rose-600",
};

export function KpiCard({
  label,
  value,
  delta,
  accent = "indigo",
  hint,
  icon,
  spark,
}: {
  label: string;
  value: string;
  delta?: number;
  accent?: Accent;
  hint?: string;
  icon?: React.ReactNode;
  /** Array of numbers for mini sparkline under the KPI. */
  spark?: number[];
}) {
  const positive = typeof delta === "number" && delta >= 0;
  const color = ACCENT_HEX[accent];

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 whitespace-nowrap">
            {icon && (
              <span className={cn("h-6 w-6 rounded-md flex items-center justify-center", ACCENT_BG[accent])}>
                {icon}
              </span>
            )}
            <span className="truncate">{label}</span>
          </div>
          <div className="mt-1.5 text-2xl font-bold tracking-tight text-zinc-900 whitespace-nowrap">
            {value}
          </div>
          {hint && <div className="text-xs text-zinc-400 mt-0.5 truncate">{hint}</div>}
        </div>
        {typeof delta === "number" && (
          <span
            className={cn(
              "shrink-0 inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-medium",
              positive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700",
            )}
          >
            {positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {Math.abs(delta).toFixed(1)}%
          </span>
        )}
      </div>
      {spark && spark.length > 1 ? (
        <div className="mt-2 -mx-1">
          <MiniSpark data={spark} color={color} height={36} />
        </div>
      ) : (
        <div className="mt-3 h-1 w-full rounded-full bg-zinc-100">
          <div
            className="h-1 rounded-full"
            style={{
              width: `${Math.min(100, Math.max(10, (delta ?? 50) + 50))}%`,
              background: color,
            }}
          />
        </div>
      )}
    </Card>
  );
}
