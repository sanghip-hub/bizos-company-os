import { cn } from "@/lib/utils";

export function StatChip({
  label,
  value,
  tone = "default",
  className,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  tone?: "default" | "success" | "warning" | "danger" | "info" | "violet";
  className?: string;
}) {
  const map = {
    default: "bg-zinc-50 text-zinc-700",
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700",
    danger: "bg-red-50 text-red-700",
    info: "bg-indigo-50 text-indigo-700",
    violet: "bg-violet-50 text-violet-700",
  };
  return (
    <div className={cn("flex items-center justify-between rounded-lg px-3 py-2", map[tone], className)}>
      <span className="text-xs">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}
