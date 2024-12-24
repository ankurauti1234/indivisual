import { getReportBySlug } from "@/lib/reports-data";

export default function AnnualFinancialReportPage() {
  const report = getReportBySlug("annual-financial-report");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{report.title}</h1>
      <div className="bg-card rounded-lg p-6 shadow-lg">
        {/* Add your specific report content here */}
        <p className="text-lg mb-4">
          This is the detailed content for the Annual Financial Report 2024.
        </p>
        <div className="grid gap-4">
          {/* Add your report sections, charts, tables, etc. */}
        </div>
      </div>
    </div>
  );
}
