import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
    return (
        <div>
            <h1>Reusable Tooltip Project</h1>
            <section>
                <p>Introductory text</p>
            </section>
            <section>
                <h2>Demo Area 1</h2>
                <div>
                    <br />
                    Something here
                    <Tooltip />
                </div>
            </section>
            <section>
                <h2>Demo Area 2</h2>
                <div>
                    <Tooltip />
                    <br />
                    Something here
                    <br />
                    <Tooltip />
                </div>
            </section>
        </div>
    );
}

export default App;
