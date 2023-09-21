import "./style.css";

export default function App() {
    return (
        <div>
            <BillInput />
            <ServiceInput />
            <GrandTotal />
        </div>
    );
}

function GrandTotal() {
    return <h1>You pay €100 (€90 + €10 tip)</h1>;
}

function BillInput() {
    return (
        <div>
            <h3>How much was the bill?</h3>
            <input type="number"></input>
        </div>
    );
}

function ServiceInput() {
    return (
        <div>
            <h3>How was the service?</h3>
            <select>
                <option>Awful (0%)</option>
                <option>Okay (5%)</option>
                <option>Good (10%)</option>
                <option>Superb (20%)</option>
            </select>
        </div>
    );
}
