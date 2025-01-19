
import NewTVSchedule from "./new-tv";
// import OldTVSchedule from "./old-schedule";
import { TVSchedule } from "./tv-schedule";

export default function Page() {
  return (
    <>
      <TVSchedule />
      <NewTVSchedule />
      {/* <OldTVSchedule/> */}
    </>
  );
}
