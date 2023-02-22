import useFirstChatter from "./useFirstChatter";
import Marquee from "react-fast-marquee";

const Display = () => {
    const first = useFirstChatter();

    console.log("Render Display", first);
    return (
        <div className="App">
            <header className="App-header">
                <Marquee style={{}} speed={200}>{"+++ " + first + " +++"}</Marquee>
            </header>
        </div>
    );
};

export default Display;