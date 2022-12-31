import "./styles.css";
import { useState } from "react";

export default function App() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); 
            setSubmitted(true)
        }}>
            <div>
                <input />
                {submitted &&  <p>Submitted</p>}
            </div>
            <input type="submit" />
        </form>
    );
}
