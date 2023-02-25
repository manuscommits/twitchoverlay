import Marquee from "react-fast-marquee";
import useTicker from "./hooks/useTicker";

const Display = () => {
    const messageList = useTicker();

    const onCycleComplete = () => {

    }

    console.log("Render Display", messageList);
    return (
        <div className="App">
            <Marquee style={{}} speed={50} onCycleComplete={onCycleComplete}>
                {messageList.map((msg, index) => {
                    return <div key={index} style={{ width: 1500, paddingRight: 100 }}>{msg}</div>
                })}
            </Marquee>
        </div>
    );
};

export default Display;