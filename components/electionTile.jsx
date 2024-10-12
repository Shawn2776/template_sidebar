import { elections } from "@/data";
import React from "react";

const ElectionTile = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Format the date as "Oct. 23" (no weekday or year)
    const formattedDate = date
      .toLocaleString("en-US", {
        month: "short",
        day: "numeric",
      })
      .replace(/, (\w+)\s(\d{1,2}),/, ", $1. $2,"); // Add a dot after the month

    const hours = date.getUTCHours() % 12 || 12; // 12-hour format
    const minutes = date.getUTCMinutes(); // Get minutes
    const period = date.getUTCHours() >= 12 ? "pm" : "am";

    // Conditionally format the time to include minutes only if they're not 00
    const formattedTime =
      minutes === 0
        ? `${hours} ${period}`
        : `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;

    return { formattedDate, formattedTime };
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-lg table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {elections.map((election) => {
            const { id, title, startDate, endDate } = election;
            const {
              formattedDate: startDateFormatted,
              formattedTime: startTimeFormatted,
            } = formatDate(startDate);
            const {
              formattedDate: endDateFormatted,
              formattedTime: endTimeFormatted,
            } = formatDate(endDate);

            return (
              <tr key={id}>
                <td>{title}</td>
                <td>
                  {startDateFormatted} {startTimeFormatted}
                </td>
                <td>
                  {endDateFormatted} {endTimeFormatted}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            );
          })}
          {/* <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 h-12 mask mask-squircle">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ElectionTile;
