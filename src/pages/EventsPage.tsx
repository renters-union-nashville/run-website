import { AppSelector, useSelector } from "../machine";
import useResizeObserver from "use-resize-observer";

interface EventsData { }

const displaySelector: AppSelector<EventsData> = (state) => {
    return {};
};

export default function EventsPage() {
    const data = useSelector(displaySelector);
    const { ref, width = 1, height = 1 } = useResizeObserver();

    return (
        <div ref={ref}>
            <p>Events!!</p>
        </div>
    );
}