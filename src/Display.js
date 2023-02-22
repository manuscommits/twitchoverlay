import useChatInfo from "./useChatInfo";

const Display = () => {
    const first = useChatInfo();

    console.log("Render Display", first);
    return (
        <div className="App">
            <header className="App-header">
                {first}
            </header>
        </div>
    );
};

export default Display;