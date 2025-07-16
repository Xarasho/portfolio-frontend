'use client'
import React, { useEffect, useRef, useState } from "react";

interface Props {
  isLast?: boolean
}

export default function Achievement({ isLast }: Props) {
  const achievementProperties = useRef<HTMLDivElement>(null);
  const [ spanHeight, setSpanHeight ] = useState(0);

  useEffect(() => {
    if (achievementProperties.current) {
      const currentHeight = achievementProperties.current.clientHeight;
      setSpanHeight(currentHeight);
    }
  }, []);

  return (
    <article className="flex gap-5 mt-5" ref={achievementProperties}>
      <div className="flex items-center justify-center h-1 w-1 bg-yellow-200 p-1 rounded-full relative ml-3">
        <span
          style={{ height: `${spanHeight + 10}px`, bottom: `-${spanHeight + 10}px` }}
          className={`${isLast && 'hidden'} border-r border-neutral-700 w-[1px] absolute -bottom-10`}
          ></span>
      </div>

      <div>
        <h2 className="text-white font-semibold">Title of education</h2>
        <span
          className="text-yellow-200">2019 - 2023</span>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          perferendis qui cupiditate ipsam aspernatur praesentium dolores rem
          suscipit, pariatur quos soluta minus nobis amet nostrum accusantium
          veritatis sequi. Distinctio, quae?
        </p>
      </div>
    </article>
  );
}
