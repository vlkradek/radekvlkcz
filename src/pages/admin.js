import { useState } from "react";
import axios from "axios";

const Admin = () => {
    
    return (
        <form method="POST" action='/api/test/add'>
            <input
                type="text"
                name='text'
                id="text"
            />
            <input type="submit" value="odeslat" />
        </form>
    );
}

export default Admin;
