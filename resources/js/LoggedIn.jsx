import Login from "./Login";
import { useSanctum } from "react-sanctum";

export default function LoggedIn(props) {
    const { authenticated, user, signIn } = useSanctum();
    
    return (
        authenticated === true ? props.children : <Login/>
    );
}