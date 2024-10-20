import React from "react";

export function Card({
  title,
  children
}: {
  title: string;
  children?:React.ReactNode;
}): JSX.Element {
  return (
    <div className="border p-6 bg-white rounded-xl bg-[#ededed]">
      <h1 className="">
        {title}
      </h1>
      <div className="">{children}</div>
    </div>
  );
}