import { AppSelector, useSelector } from "../machine";
import useResizeObserver from "use-resize-observer";


interface HomeData { }

const displaySelector: AppSelector<HomeData> = (state) => {
    return {};
};

export default function HomePage() {
    const data = useSelector(displaySelector);
    const { ref, width = 1, height = 1 } = useResizeObserver();

    return (
        <div ref={ref}>
            <div>
                <h1>Renters Union Nashville</h1>
            </div>
        </div>
    );
}