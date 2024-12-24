import ReportCard from "@/components/card/ReportCard";
import Header from "@/components/navigation/header";
import { reports } from "@/lib/reports-data";

export default function BroadcastersPage() {
  // Filter reports for broadcasters section
  const broadcastersReports = reports.filter(
    (report) => report.page === "tv" && report.subpage === "broadcasters"
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Header
        title="Broadcasters Reports"
        description="Comprehensive analytics for IoT devices including alerts, temperature trends, and device status across different locations."
        badge="latest"
      />
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {broadcastersReports.map((report) => (
            <ReportCard key={report.id} {...report} />
          ))}
        </div>
      </div>
    </div>
  );
}
