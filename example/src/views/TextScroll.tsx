import React from "react";

interface Props {
    width: number;
    text: string;
}

function TextScroll(props: Props) {

    const { width = 90, text = "1111111-22222222-3333333" } = props;
    const divRef = React.useRef<HTMLDivElement>(null);

    // 滚动一次
    // React.useEffect(() => {
    //   const div = divRef.current as HTMLDivElement;
    //   const intervalId = setInterval(() => {
    //     if (div.scrollLeft === div.scrollWidth - div.clientWidth) {
    //       clearInterval(intervalId);
    //     } else {
    //       div.scrollTo(div.scrollLeft + 1, 0);
    //     }
    //   }, 20);
    //   return () => clearInterval(intervalId);
    // }, []);

    //循环滚动
    React.useEffect(() => {
        const div = divRef.current as HTMLDivElement;
        const intervalId = setInterval(() => {
            div.scrollLeft += 1;
            if (div.scrollLeft >= div.scrollWidth - div.clientWidth) {
                div.scrollLeft = 0;
            }
        }, 220);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            ref={divRef}
            style={{ width: `${width}px`, overflow: "hidden", whiteSpace: "nowrap" }}
        >
            {text}
        </div>
    );
}

export default TextScroll;
