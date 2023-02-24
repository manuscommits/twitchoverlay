import Marquee from "react-fast-marquee";
import useTicker from "./hooks/useTicker";

const Display = () => {
    const messageList = useTicker();

    const onCycleComplete = () => {

    }

    console.log("Render Display", messageList);
    return (
        <div className="App">
            <header className="App-header">
                <Marquee style={{}} speed={10} onCycleComplete={onCycleComplete}>
                    {messageList.map((msg, index) => {
                        return <div key={index} style={{ padding: 100 }}>{msg}</div>
                    })}
                </Marquee>
            </header>
        </div>
    );
};

export default Display;