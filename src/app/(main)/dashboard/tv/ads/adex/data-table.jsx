import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, X, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const DataTable = ({ data }) => {
  const [filters, setFilters] = useState({
    Advertiser: "",
    Sector: "",
    Category: "",
    Region: "",
    "Ad Spend": [0, 50000],
      GRP: [0, 1000],
    "GRP %": ""
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Get filtered options based on current selections
  const getFilteredOptions = (field) => {
    let filteredData = [...data];

    Object.entries(filters).forEach(([key, value]) => {
      if (key === field) return;
      if (key === "Ad Spend" || key === "GRP") {
        filteredData = filteredData.filter(
          (item) => item[key] >= value[0] && item[key] <= value[1]
        );
      } else if (value) {
        filteredData = filteredData.filter(
          (item) => item[key].toString().toLowerCase() === value.toLowerCase()
        );
      }
    });

    return [...new Set(filteredData.map((item) => item[field]))];
  };

  // Filter data based on all active filters
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        if (key === "Ad Spend" || key === "GRP") {
          return item[key] >= value[0] && item[key] <= value[1];
        }
        return item[key].toString().toLowerCase() === value.toLowerCase();
      });
    });
  }, [data, filters]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageEnd = pageStart + ITEMS_PER_PAGE;
  const currentData = filteredData.slice(pageStart, pageEnd);

  const handleFilterChange = (field, value) => {
    setCurrentPage(1); // Reset to first page when filter changes
    setFilters((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "Advertiser" && {
        Sector: "",
        Category: "",
      }),
      ...(field === "Sector" && {
        Category: "",
      }),
    }));
  };

  const clearFilter = (field) => {
    setCurrentPage(1); // Reset to first page when filter is cleared
    setFilters((prev) => ({
      ...prev,
      [field]:
        field === "Ad Spend" ? [0, 50000] : field === "GRP" ? [0, 1000] : "",
      ...(field === "Advertiser" && {
        Sector: "",
        Category: "",
      }),
      ...(field === "Sector" && {
        Category: "",
      }),
    }));
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const renderFilter = (field) => {
    if (field === "Ad Spend" || field === "GRP") {
      const max = field === "Ad Spend" ? 50000 : 1000;
      return (
        <div className="space-y-4 p-4">
          <div className="flex justify-between">
            <span>{formatNumber(filters[field][0])}</span>
            <span>{formatNumber(filters[field][1])}</span>
          </div>
          <Slider
            defaultValue={[0, max]}
            max={max}
            step={field === "Ad Spend" ? 1000 : 10}
            value={filters[field]}
            onValueChange={(value) => handleFilterChange(field, value)}
            className="w-full"
          />
        </div>
      );
    }

    return (
      <div className="w-full">
        <div className="p-2">
          <Input
            placeholder={`Search ${field}...`}
            value={filters[field]}
            onChange={(e) => handleFilterChange(field, e.target.value)}
            className="h-8"
          />
        </div>
        <div className="max-h-[200px] overflow-y-auto">
          {getFilteredOptions(field).map((value) => (
            <DropdownMenuItem
              key={value}
              onClick={() => handleFilterChange(field, value.toString())}
              className="cursor-pointer"
            >
              {value}
            </DropdownMenuItem>
          ))}
        </div>
      </div>
    );
  };

  const renderPagination = () => (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{pageStart + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(pageEnd, filteredData.length)}
            </span>{" "}
            of <span className="font-medium">{filteredData.length}</span>{" "}
            results
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <Button
                  key={i}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                  className="w-8"
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.keys(filters).map((field) => (
          <div key={field} className="flex-1 min-w-[200px]">
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <span className="truncate">
                      {field}:{" "}
                      {filters[field]
                        ? Array.isArray(filters[field])
                          ? `${formatNumber(
                              filters[field][0]
                            )} - ${formatNumber(filters[field][1])}`
                          : filters[field]
                        : "All"}
                    </span>
                    <ChevronDown className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  {renderFilter(field)}
                </DropdownMenuContent>
              </DropdownMenu>
              {filters[field] && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => clearFilter(field)}
                  className="flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-gray-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              {Object.keys(filters).map((header) => (
                <TableHead key={header} className="font-semibold text-gray-900">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((row, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                {Object.keys(filters).map((field) => (
                  <TableCell key={field} className="py-4">
                    {typeof row[field] === "number"
                      ? formatNumber(row[field])
                      : row[field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {renderPagination()}
    </div>
  );
};

export default DataTable;
