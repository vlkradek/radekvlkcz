import { useState } from "react";
import axios from "axios";

const Admin = () => {
    const [text, setText] = useState("");
    const changeContent = async (e) => {
        e.preventDefault();
        console.log(text);
        axios
            .post("http://localhost:3000/api/content", { text })
            .then((res) => {
                alert("content changed");
                setText("");
            })
            .catch((e) => console.log(e));
    };
    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={changeContent}>Change</button>
        </form>
    );
};

export default Admin;
