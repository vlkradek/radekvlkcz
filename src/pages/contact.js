import styles from "../styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
    // const [email, setEmail] = useState("");
    // const sendMail = async (e) => {
    //     e.preventDefault();
    //     console.log("call");
    //     console.log(email);
    //     axios
    //         .post("http://localhost:3000/api/email", { email })
    //         .then((res) => {
    //             alert("sendmail");
    //             setEmail("");
    //         })
    //         .catch((e) => console.log(e));
    // };
    return (
        <div className="contact">
            <h3>
                V případě zájmu nebo jakéhokoliv dotazu mi neváhejte napsat zde{" "}
                <br />
                do formuláře nebo na{" "}
                <abbr title="radekvlk@radekvlk.cz">
                    <a href="mailto:radekvlk@radekvlk.cz">email</a>
                </abbr>
                !
            </h3>
            <form>
                <h4>Napište mi!</h4>
                {/* <label htmlFor="email">Emailová adresa</label> */}

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* <label htmlFor="name">Jméno a Přijmení</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="message">Obsah zprávy</label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                ></textarea> */}
                <button onClick={sendMail}>Send</button>
            </form>
        </div>
    );
};

export default Contact;
