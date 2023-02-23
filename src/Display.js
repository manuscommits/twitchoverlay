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
                <Marquee style={{}} speed={200} onCycleComplete={onCycleComplete}>
                    {messageList.map((msg, index) => {
                        return <div key={index}>{"+++ " + msg + " +++"}</div>
                    })}
                </Marquee>
            </header>
        </div>
    );
};

export default Display;