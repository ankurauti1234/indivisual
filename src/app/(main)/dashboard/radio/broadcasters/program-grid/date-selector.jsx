
import { format, addDays, isSameDay } from "date-fns"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"



const DateSelector = ({ selectedDate, onDateChange }) => {
  const today = new Date()

  const handlePrevious = () => {
    onDateChange(addDays(selectedDate, -1))
  }

  const handleNext = () => {
    onDateChange(addDays(selectedDate, 1))
  }

  return (
    <div className="flex items-center justify-between space-x-4">
      <Button variant="outline" size="icon" onClick={handlePrevious} disabled={isSameDay(selectedDate, today)}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-lg font-medium">{format(selectedDate, "MMMM d, yyyy")}</span>
      <Button variant="outline" size="icon" onClick={handleNext} disabled={isSameDay(selectedDate, addDays(today, 2))}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default DateSelector

