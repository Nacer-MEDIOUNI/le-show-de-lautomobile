import React from "react";

export enum Orientation {
  VERTICAL,
  HORIZONTAL,
}

const Divider = ({
  orientation = Orientation.HORIZONTAL,
  className,
}: {
  orientation: Orientation;
  className?: string;
}) =>
  orientation === Orientation.HORIZONTAL ? (
    <div className={`h-[1px] w-full bg-gray-300 mt-7 mb-4 ${className}`} />
  ) : (
    <div
      className={`w-[1px] h-[30px] max-h-full bg-neutral-300 mx-4 ${className}`}
    />
  );

export default Divider;
