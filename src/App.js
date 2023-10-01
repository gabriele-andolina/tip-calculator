import { useState } from "react";
import "./style.css";

export default function App() {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <ServiceInput tip={tip} onSetTip={setTip}>
                How did you like the service?
            </ServiceInput>
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

function ServiceInput({ bill, tip, setTip, children }) {
    function handleSelectPercentage(e) {
        e.preventDefault();

        console.log(e);
    }

    return (
        <div>
            <label>{children}</label>
            <select>
                <option value={0}>Awful (0%)</option>
                <option value={5}>Ok (5%)</option>
                <option value={10}>Good (10%)</option>
                <option value={20}>Superb (20%)</option>
            </select>
        </div>
    );
}

function GrandTotal({ bill }) {
    return <h1>{`You pay €100 (€${bill} + €10 tip)`}</h1>;
}
