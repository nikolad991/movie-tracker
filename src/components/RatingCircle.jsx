import React, { useEffect, useState } from "react";
const colors = {
  masterpiece: "#57e32c",
  great: "#b7dd29",
  good: "#ffe234",
  ok: "#ffa534",
  bad: "#ff8c5a",
  trash: "#ff4545",
};

const RatingCircle = ({ rating }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    if (rating < 5) setColor(colors.trash);
    else if (rating >= 5 && rating < 6) setColor(colors.bad);
    else if (rating >= 6 && rating < 7) setColor(colors.ok);
    else if (rating >= 7 && rating < 8) setColor(colors.good);
    else if (rating >= 8 && rating < 9) setColor(colors.great);
    else if (rating >= 9) setColor(colors.masterpiece);
  }, []);

  return (
    <div
      className="flex w-full h-full items-center justify-center  rounded-full border-2 border-black"
      style={{
        background: `radial-gradient(closest-side, black 79%, transparent 80% 100%),conic-gradient(${color} ${
          rating * 10
        }%,rgb(0,0, 0) 0)`,
      }}
    >
      <span className="font-semibold text-sm" style={{ color: color }}>
        {rating?.toFixed(1)}
      </span>
    </div>
  );
};

export default RatingCircle;
