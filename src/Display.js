import Marquee from "react-fast-marquee";
import useTicker from "./hooks/useTicker";

const Display = () => {
    const { messageList, onCycleComplete } = useTicker();

    console.log("Render Display", messageList);
    return (
        <div className="App">
            <Marquee gradient={false} style={{}} speed={50} onCycleComplete={onCycleComplete}>
                {messageList.map((msg, index) => {
                    return <div key={index} style={{ width: 2000, height: 70, paddingRight: 100 }}>{msg}</div>
                })}
            </Marquee>
        </div>
    );
};

export default Display;