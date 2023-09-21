import "./style.css";

export default function App() {
    return (
        <div>
            <BillInput />
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
