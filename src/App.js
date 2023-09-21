import "./style.css";

const serviceOptions = [
    {
        text: "Awful (0%)",
    },
    {
        text: "Okay (5%)",
    },
    {
        text: "Good (10%)",
    },
    {
        text: "Superb (20%)",
    },
];

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
                {serviceOptions.map((option) => (
                    <option>{option.text}</option>
                ))}
            </select>
        </div>
    );
}
