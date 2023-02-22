import useFirstChatter from "./useFirstChatter";

const Display = () => {
    const first = useFirstChatter();

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