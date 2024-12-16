import Button from "react-bootstrap/Button";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function OrderEntry({ setOrderPhase }) {
    return (
        <div>
            <h1>Design Your Sundae!</h1>
            <Options optionType="scoops" />
            <Options optionType="toppings" />
            <h2>Grand total:</h2>
            <Button disabled={false} onClick={() => setOrderPhase("review")}>
                Order Sundae!
            </Button>
        </div>
    );
}
