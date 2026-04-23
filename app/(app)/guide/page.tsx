import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Network,
  Building2,
  Users,
  Target,
  ListChecks,
  Wallet,
  FolderKanban,
  Landmark,
  FileBarChart,
  Bell,
  CheckSquare,
  History,
  Flag,
  TrendingUp,
  UserPlus,
  BookOpen,
  UserCircle,
  Settings as SettingsIcon,
  type LucideIcon,
  Rocket,
  Zap,
  MousePointerClick,
  GitBranch,
} from "lucide-react";

type GuideItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  summary: string;
  howto: string[];
};

const PAGES: GuideItem[] = [
  {
    href: "/dashboard",
    label: "01 · Dashboard",
    icon: LayoutDashboard,
    summary: "Trang đầu tiên CEO mở mỗi sáng — tổng quan công ty trong 30 giây.",
    howto: [
      "6 KPI card ở đầu: doanh thu, gross profit, net profit, KPI completion, headcount, payroll cost. Sparkline dưới mỗi số = xu hướng 6-12 tháng.",
      "Hero donut giữa: % KPI công ty tổng. Xanh ≥100%, Vàng 85-99%, Đỏ <85%.",
      "Bên trái: danh sách KPI đang ở mức đỏ/vàng cần xử lý ngay.",
      "Bên phải: xu hướng doanh thu 12 tháng.",
      "3 Insight cards cuối: gợi ý AI dạng 'Sales hụt 20% → impact' (xem Forecast để chạy thật).",
    ],
  },
  {
    href: "/org",
    label: "02 · Sơ đồ tổ chức",
    icon: Network,
    summary: "Nhìn toàn bộ cơ cấu công ty và KPI theo phòng ban.",
    howto: [
      "Cây tổ chức dạng node-edge (reactflow): zoom, pan, click để xem chi tiết.",
      "Donut bên phải: % KPI hoàn thành toàn tổ chức.",
      "Danh sách phòng ban: budget + headcount.",
      "Biểu đồ phân bổ nhân sự theo phòng ban.",
      "'Span of control' tối ưu 1:5 đến 1:8 người/head.",
    ],
  },
  {
    href: "/departments",
    label: "03 · Phòng ban",
    icon: Building2,
    summary: "Mỗi phòng ban là cost center + KPI center.",
    howto: [
      "List phòng ban: KPI completion + budget/actual.",
      "Click vào một phòng → trang detail với KPI table + employee table + task table.",
      "Phân bổ task theo loại (growth/maintenance/admin/urgent) giúp phát hiện phòng 'bận rộn mà không tạo value'.",
    ],
  },
  {
    href: "/people",
    label: "04 · Nhân sự",
    icon: Users,
    summary: "Directory + hồ sơ từng người với impact path.",
    howto: [
      "Directory list với filter phòng ban, search.",
      "Click vào 1 người → profile hero + compensation breakdown + KPI cá nhân + skill bars + 6-month performance line.",
      "'Impact path' cuối trang: KPI cá nhân → KPI phòng → KPI công ty → Revenue/Profit.",
    ],
  },
  {
    href: "/kpi",
    label: "05 · KPI Tree",
    icon: Target,
    summary: "Cascade KPI từ company → department → team → employee.",
    howto: [
      "Top 4 KPI công ty (REV/GP/NP/RET) với completion %.",
      "Cây KPI reactflow: mỗi node có màu theo status (xanh/vàng/đỏ).",
      "Lead card: theo dõi KPI funnel quan trọng nhất (ví dụ MKT.LEADS).",
      "Top KPI ảnh hưởng lớn: sắp xếp theo weight × completion.",
      "KPI thiếu dữ liệu: nhắc cập nhật actual.",
      "Click 1 KPI → /kpi/[id] detail với children breakdown + data source.",
    ],
  },
  {
    href: "/operations",
    label: "06 · Công việc",
    icon: ListChecks,
    summary: "Task board 5 cột + lịch + workload.",
    howto: [
      "Kanban: To do / Đang làm / Review / Blocked / Hoàn thành.",
      "Mỗi task hiển thị: priority, type (growth/maintenance), KPI gắn (ví dụ E10.CONTENT), assignee, due date.",
      "Mini Calendar bên phải: ngày có deadline được highlight.",
      "Workload theo người: phát hiện nhân viên > 5 task = quá tải.",
      "Low-value work detector: task không gắn KPI + admin/maintenance ratio.",
    ],
  },
  {
    href: "/compensation",
    label: "07 · Lương thưởng",
    icon: Wallet,
    summary: "Payroll + Incentive Simulator chạy rule engine.",
    howto: [
      "Top: tổng gross/net/cost/bonus pool.",
      "Cơ cấu chi phí lương: donut breakdown 5 loại (base/phụ cấp/hoa hồng/bonus/BHXH DN).",
      "Incentive Simulator: kéo slider KPI cá nhân/team/công ty → xem bonus thay đổi real-time.",
      "Rule 5-tier: <80% KPI = 0x bonus, ≥80% = 0.5x, ≥90% = 0.75x, ≥100% = 1.0x, ≥120% = 1.5x.",
      "Payroll theo phòng ban progress + bảng chi tiết từng người.",
    ],
  },
  {
    href: "/projects",
    label: "08 · Dự án",
    icon: FolderKanban,
    summary: "Initiative / project cross-functional với ROI tracking.",
    howto: [
      "List dự án: owner, budget, status (active/paused/draft/done), thời gian.",
      "Donut phân bổ theo status + progress bar từng dự án.",
      "Click vào 1 dự án → detail với business case + milestones + ROI.",
    ],
  },
  {
    href: "/finance",
    label: "09 · Tài chính",
    icon: Landmark,
    summary: "P&L · Balance Sheet · Cash Flow · Budget — có drill-down.",
    howto: [
      "6 KPI tài chính top với sparkline.",
      "Bar chart 6 tháng Revenue/Cost/Profit.",
      "Donut cơ cấu chi phí theo phòng ban.",
      "4 sub-tabs: /pnl, /balance-sheet, /cashflow, /budget — mỗi trang có chi tiết khoản mục.",
      "Budget vs Actual: variance analysis từng phòng.",
    ],
  },
  {
    href: "/reports",
    label: "11 · Report Center",
    icon: FileBarChart,
    summary: "Snapshot báo cáo + lịch gửi tự động.",
    howto: [
      "Danh sách báo cáo PDF/XLSX đã tạo với lượt tải.",
      "Lịch gửi tự động (cron): KPI tuần / payroll tháng / cash flow hàng ngày.",
      "Tạo báo cáo mới: KPI công ty / tài chính quý / hiệu suất phòng.",
    ],
  },
  {
    href: "/alerts",
    label: "12 · Alerts Center",
    icon: Bell,
    summary: "Nơi tập trung mọi cảnh báo theo mức độ.",
    howto: [
      "Critical / Danger / Warning / Info — donut phân bổ.",
      "Rule đang hoạt động: KPI < 85%, task > 2 ngày, chi phí > 5% budget, nhân sự > 10 task, cash < 10 tháng runway.",
      "Resolve từng alert, ẩn tạm, hoặc edit rule.",
    ],
  },
  {
    href: "/approvals",
    label: "13 · Approval Center",
    icon: CheckSquare,
    summary: "Duyệt KPI · thưởng · ngân sách · tuyển dụng · đổi công thức.",
    howto: [
      "Pending / Approved / Rejected / Cancelled.",
      "Theo loại: payroll adjustment, job requisition, KPI change, project budget.",
      "SLA: 72% duyệt trong 24h là tốt.",
      "Mỗi request có requester + payload JSON + 2 nút Duyệt/Từ chối.",
    ],
  },
  {
    href: "/audit",
    label: "14 · Audit Log",
    icon: History,
    summary: "Ai · sửa gì · khi nào — tracebility 12 tháng.",
    howto: [
      "Bảng log với before/after JSON.",
      "Filter theo actor, action, entity, time range.",
      "Export PDF/CSV cho thanh tra/kiểm toán.",
      "Chỉ CEO + Auditor xem được.",
    ],
  },
  {
    href: "/okr",
    label: "15 · OKR",
    icon: Flag,
    summary: "Objective + Key Results cascade theo quý/năm.",
    howto: [
      "Card từng Objective với progress bar + KR bên trong.",
      "Alignment: mỗi OKR liên kết với KPI nào trong KPI Tree.",
      "Level: company / department.",
      "Status: on_track / at_risk.",
    ],
  },
  {
    href: "/forecast",
    label: "16 · Forecast",
    icon: TrendingUp,
    summary: "What-if simulator: kéo slider KPI lá → xem impact.",
    howto: [
      "Danh sách KPI lá (cá nhân + phòng ban) với slider -30% → +30%.",
      "Bên phải: KPI công ty (REV/GP/NP/RET) cập nhật real-time khi kéo slider.",
      "Ví dụ: kéo SAL.CLOSE -20% → xem Revenue giảm bao nhiêu, Net Profit còn lại bao nhiêu.",
      "Engine dùng weighted average propagate từ con lên cha.",
    ],
  },
  {
    href: "/recruiting",
    label: "17 · Tuyển dụng",
    icon: UserPlus,
    summary: "Job requisitions + pipeline candidate + skill gap.",
    howto: [
      "Danh sách vị trí đang mở + headcount cần tuyển.",
      "Donut pipeline: Mới → Screening → Interview → Offer.",
      "Skill gap: current vs target theo từng phòng.",
      "Time-to-hire trung bình 38 ngày là tốt.",
    ],
  },
  {
    href: "/knowledge",
    label: "18 · SOP / Playbook",
    icon: BookOpen,
    summary: "Quy trình chuẩn + playbook + checklist.",
    howto: [
      "SOP gom theo phòng ban, có version + trạng thái published/draft.",
      "Playbook: cách làm chuẩn cho Sales/Marketing/CSKH.",
      "Quick checklist: onboarding, qualify lead, close B2B, xử lý khiếu nại, payroll, …",
      "Compliance: tỉ lệ acknowledge + retention policy.",
    ],
  },
  {
    href: "/profile",
    label: "19 · Tài khoản cá nhân",
    icon: UserCircle,
    summary: "Thông tin + bảo mật + thiết bị + thông báo + tích hợp.",
    howto: [
      "Donut điểm bảo mật 85/100.",
      "Security: đổi mật khẩu, bật 2FA, xem phiên đăng nhập.",
      "Notification toggles cho KPI/task/payroll/cash flow alerts.",
      "Thiết bị đăng nhập: Chrome/iPhone với IP.",
      "Ứng dụng kết nối: Google, Slack, GitHub, Zalo OA, Hubspot, Jira.",
    ],
  },
  {
    href: "/settings",
    label: "10 · Cài đặt",
    icon: SettingsIcon,
    summary: "Company · Structure · Permissions · KPI formula · Comp · Integrations.",
    howto: [
      "Thông tin công ty: tên, mã, currency, timezone.",
      "Cơ cấu: thêm/sửa phòng ban, team, position.",
      "Permissions: 7 role CEO/CFO/HR/DeptHead/TeamLead/Employee/Auditor.",
      "KPI Formula: JSONB AST editor.",
      "Compensation rules: base bonus %, threshold tiers, team/company multiplier.",
      "Integrations: Google Sheets, MISA, HubSpot, chấm công, POS.",
      "Import jobs: CSV/Excel.",
    ],
  },
];

const WORKFLOWS: { title: string; icon: LucideIcon; steps: string[] }[] = [
  {
    title: "Task → KPI → Tài chính (end-to-end)",
    icon: GitBranch,
    steps: [
      "CEO tạo KPI công ty ở /kpi (ví dụ REV = 5 tỷ/tháng).",
      "Dept Head tạo KPI phòng ban với parent = REV (ví dụ SAL.CLOSE).",
      "Team Lead giao task ở /operations và gắn linked_kpi_id.",
      "Nhân viên complete task → output đẩy lên KPI actual.",
      "KPI actual cập nhật → cascade lên KPI cha tự động.",
      "/compensation tính bonus dựa trên completion rate.",
      "/finance phản ánh revenue/cost vào P&L.",
      "/forecast cho phép what-if: 'Nếu KPI giảm 20%...' → xem impact.",
    ],
  },
  {
    title: "Payroll cuối tháng",
    icon: Wallet,
    steps: [
      "Đầu tháng: chốt KPI kỳ trước ở /kpi.",
      "/compensation mở: hệ thống tính sẵn bonus theo rule.",
      "Rà soát bảng Payroll chi tiết, điều chỉnh nếu cần (tạo Approval).",
      "Duyệt adjustment ở /approvals.",
      "Chạy payroll → status 'closed' → audit log ghi nhận.",
      "/finance ghi nhận payroll cost vào cost center phòng ban.",
    ],
  },
  {
    title: "Setup công ty lần đầu",
    icon: Rocket,
    steps: [
      "Đăng ký tài khoản ở /signup.",
      "/settings: điền tên công ty, currency, timezone.",
      "Tạo cơ cấu: business_unit → department → team → position.",
      "Thêm nhân sự ở /people (hoặc import CSV ở Settings → Import).",
      "Gán role cho từng user qua user_roles.",
      "Tạo KPI công ty ở /kpi + cascade xuống phòng ban/cá nhân.",
      "Tạo compensation rules ở Settings.",
      "Chạy một kỳ payroll thử ở /compensation.",
      "Mở /dashboard theo dõi hằng ngày.",
    ],
  },
];

export default function GuidePage() {
  return (
    <div>
      <PageHeader
        title="Hướng dẫn sử dụng"
        description="Business Operating System · 19 màn hình · quy trình end-to-end"
        actions={<Badge variant="info">Guide v1</Badge>}
      />

      {/* Intro */}
      <Card className="mb-4">
        <CardContent className="p-5">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-zinc-900 mb-1">Triết lý BIZOS</div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Không phải HRM, không phải BI dashboard đơn thuần. BIZOS là{" "}
                <strong>Business Operating System</strong> — nơi mọi task hằng ngày, KPI, lương thưởng và
                tài chính đều được nối vào một chuỗi logic thống nhất:
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
                <Badge variant="info">Task hằng ngày</Badge>
                <span className="text-zinc-400">→</span>
                <Badge variant="info">KPI cá nhân</Badge>
                <span className="text-zinc-400">→</span>
                <Badge variant="info">KPI phòng ban</Badge>
                <span className="text-zinc-400">→</span>
                <Badge variant="info">KPI công ty</Badge>
                <span className="text-zinc-400">→</span>
                <Badge variant="success">Doanh thu · Lợi nhuận · Dòng tiền</Badge>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed mt-3">
                Mục tiêu: <em>nếu KPI cấp cá nhân được thiết kế đúng và đạt ngưỡng, thì KPI cấp team,
                phòng, và công ty cũng phải đạt.</em> Mọi thứ truy vết được.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Start here */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[14px]">
            <MousePointerClick className="h-4 w-4 text-indigo-600" />
            Bắt đầu từ đâu?
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="rounded-lg border border-indigo-100 bg-indigo-50/50 p-3">
            <div className="text-[11px] font-semibold text-indigo-700 uppercase mb-1">
              Bước 1 · Setup
            </div>
            <Link href="/settings" className="font-medium text-zinc-900 hover:text-indigo-700">
              /settings
            </Link>
            <p className="text-xs text-zinc-600 mt-1">
              Điền thông tin công ty, tạo phòng ban, gán permissions.
            </p>
          </div>
          <div className="rounded-lg border border-violet-100 bg-violet-50/50 p-3">
            <div className="text-[11px] font-semibold text-violet-700 uppercase mb-1">
              Bước 2 · Design KPI
            </div>
            <Link href="/kpi" className="font-medium text-zinc-900 hover:text-violet-700">
              /kpi
            </Link>
            <p className="text-xs text-zinc-600 mt-1">
              Tạo KPI công ty → cascade xuống phòng ban → cá nhân. Gắn công thức JSONB.
            </p>
          </div>
          <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-3">
            <div className="text-[11px] font-semibold text-emerald-700 uppercase mb-1">
              Bước 3 · Vận hành
            </div>
            <Link href="/operations" className="font-medium text-zinc-900 hover:text-emerald-700">
              /operations
            </Link>
            <p className="text-xs text-zinc-600 mt-1">
              Giao task, gắn linked_kpi_id. Mở /dashboard theo dõi mỗi ngày.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Workflows */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-zinc-900 mb-2">Quy trình tiêu biểu</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {WORKFLOWS.map((w) => {
            const Icon = w.icon;
            return (
              <Card key={w.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[14px]">
                    <Icon className="h-4 w-4 text-indigo-600" />
                    {w.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-1.5 text-[13px] text-zinc-700">
                    {w.steps.map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-4 w-4 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-semibold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* 19 pages */}
      <h2 className="text-sm font-semibold text-zinc-900 mb-2">19 màn hình — chi tiết</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {PAGES.map((p) => {
          const Icon = p.icon;
          return (
            <Card key={p.href}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <CardTitle className="text-[14px]">{p.label}</CardTitle>
                      <p className="text-[12px] text-zinc-500 mt-0.5">{p.summary}</p>
                    </div>
                  </div>
                  <Link
                    href={p.href}
                    className="text-[11px] text-indigo-600 font-medium hover:underline shrink-0"
                  >
                    Mở →
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-[12.5px] text-zinc-700">
                  {p.howto.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-indigo-400 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Keyboard + tips */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-[14px]">Tips nhanh</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px] text-zinc-700">
          <div className="rounded-lg bg-zinc-50 p-3">
            <div className="font-semibold text-zinc-900 mb-1">Demo mode</div>
            <p>
              Chưa điền Supabase env? App tự chạy với 14 employee, 14 KPI, payroll, finance mẫu. Mọi
              trang render đầy đủ — nút CRUD sẽ no-op.
            </p>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3">
            <div className="font-semibold text-zinc-900 mb-1">RLS multi-tenant</div>
            <p>
              Mỗi bảng có <code className="text-[11px]">company_id</code>. User chỉ đọc được data của
              công ty mình nhờ helper SQL <code className="text-[11px]">current_company_id()</code>.
            </p>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3">
            <div className="font-semibold text-zinc-900 mb-1">KPI formula</div>
            <p>
              Lưu dạng JSONB AST:{" "}
              <code className="text-[11px]">{`{op:"mul",args:[{ref:"mql"},{ref:"close"}]}`}</code>. Hỗ
              trợ sum/sub/mul/avg/weighted_avg/ratio/milestone/ref/const/manual.
            </p>
          </div>
          <div className="rounded-lg bg-zinc-50 p-3">
            <div className="font-semibold text-zinc-900 mb-1">Compensation tiers</div>
            <p>
              5 bậc: &lt;80% = 0x, ≥80% = 0.5x, ≥90% = 0.75x, ≥100% = 1.0x, ≥120% = 1.5x. Tuỳ biến ở
              Settings → Bonus rules.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardContent className="p-5">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-zinc-900 mb-1">Cần tuỳ biến cho công ty?</div>
              <p className="text-sm text-zinc-600">
                Email{" "}
                <a
                  href="mailto:alexle@titanlabs.vn"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  alexle@titanlabs.vn
                </a>{" "}
                (VN/EN). Donate PayPal{" "}
                <a
                  href="https://www.paypal.com/paypalme/sai211dn"
                  className="text-rose-600 font-medium hover:underline"
                >
                  sai211dn@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
