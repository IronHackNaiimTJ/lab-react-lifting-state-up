import { useState } from "react";
import Data from "../../data/events.json";
import Event from "../event-item/event";

const EventList = () => {
  const [AllEvents, setAllEvents] = useState(Data);
  function handleLiked(title) {
    const Likedcard = AllEvents.map((item) => {
      if (item.title === title) {
        item.liked = !item.liked;
        item.attending = item.liked ? item.attending +1 : item.attending-1
      }
      return item;
    });
    setAllEvents(Likedcard);
  }

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {AllEvents.map((Item) => (
          <Event key={Item.title} {...Item} handleLiked={handleLiked} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
