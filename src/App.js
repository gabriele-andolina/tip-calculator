import { useState } from "react";
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
    const [bill, setBill] = useState(0);

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <ServiceInput>How did you like the service?</ServiceInput>
            <ServiceInput>How did your friend like the service?</ServiceInput>
            <GrandTotal bill={bill} />
        </div>
    );
}

function BillInput({ bill, onSetBill }) {
    function handleInput(e) {
        e.preventDefault();
        onSetBill(e.target.value);
    }

    return (
        <div>
            <h3>How much was the bill?</h3>
            <input type="text" onChange={handleInput}></input>
        </div>
    );
}

function ServiceInput({ children }) {
    return (
        <div>
            <h3>{children}</h3>
            <select>
                {serviceOptions.map((option) => (
                    <option>{option.text}</option>
                ))}
            </select>
        </div>
    );
}

function GrandTotal({ bill }) {
    const newBill = bill;

    return <h1>{`You pay €100 (€${newBill} + €10 tip)`}</h1>;
}
