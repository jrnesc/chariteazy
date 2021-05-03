import { useRef } from "react";
import CauseCard from "../components/CauseCard";  // the cards will come as props eventually

const HorizontalCardList = (props) => {
  const horizontalCardsEl = useRef(null);

  const scroll = (scrollOffset) => {
    horizontalCardsEl.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div className="flex justify-between">
        <button className="px-5 hidden md:block" onClick={() => scroll(-200)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div
          className="grid grid-flow-col gap-2.5 auto-cols-max pb-1 overflow-x-scroll no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
          ref={horizontalCardsEl}
        >
          {props.cards.map((card) => (
            <CauseCard />
          ))}
        </div>
        <button className="px-5 hidden md:block" onClick={() => scroll(200)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default HorizontalCardList;
