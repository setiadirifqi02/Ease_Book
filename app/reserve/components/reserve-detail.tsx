import Heading from "@/app/components/heading";
import {
  CalendarIcon,
  ClockIcon,
  GroupPeopleIcon,
} from "@/app/components/icon";

export default function ReserveDetail() {
  return (
    <div className="mt-5 flex w-full">
      <img src="/images/bg-image.jpg" alt="" className="w-32 h-18 rounded" />
      <div className="ml-4">
        <Heading
          alignSm="text-left"
          fontSize="text-md"
          headingTitle="Aiāna Restaurant Collective"
        />
        <div className="flex flex-col gap-2 mt-3 font-semibold text-gray-500">
          <div className="flex">
            <p className="text-blue-600">
              <CalendarIcon />
            </p>
            <p className="ml-2">Tues, 22, 2023</p>
          </div>
          <div className="flex">
            <p className="text-blue-600">
              <ClockIcon />
            </p>
            <p className="ml-2">7:30 PM</p>
          </div>
          <div className="flex">
            <p className="text-blue-600">
              <GroupPeopleIcon />
            </p>
            <p className="ml-2">3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
}
