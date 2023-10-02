import { useState } from "react";
import "./style.css";

export default function App() {
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState(0);
    const [friendTip, setFriendTip] = useState(0);

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <ServiceInput tip={tip} onSetTip={setTip}>
                How did you like the service?
            </ServiceInput>
            <ServiceInput tip={friendTip} onSetTip={setFriendTip}>
                How did your friend like the service?
            </ServiceInput>
            <GrandTotal bill={bill} tip={tip} friendTip={friendTip} />
        </div>
    );
}

function BillInput({ bill, onSetBill }) {
    return (
        <div>
            <label>How much was the bill?</label>
            <input
                type="text"
                placeholder="Please enter your bill here"
                value={bill}
                onChange={(e) => onSetBill(Number(e.target.value))}
            ></input>
        </div>
    );
}

function ServiceInput({ tip, onSetTip, children }) {
    function handleSelectPercentage(e) {
        e.preventDefault();

        onSetTip(Number(e.target.value));
    }

    return (
        <div>
            <label>{children}</label>
            <select onChange={handleSelectPercentage}>
                <option value={0}>Awful (0%)</option>
                <option value={5}>Ok (5%)</option>
                <option value={10}>Good (10%)</option>
                <option value={20}>Superb (20%)</option>
            </select>
        </div>
    );
}

function GrandTotal({ bill, tip, friendTip }) {
    const tipAverage = tip + friendTip;
    console.log(tipAverage);

    return <h1>{`You pay €100 (€${bill} + €${tipAverage})`}</h1>;
}
