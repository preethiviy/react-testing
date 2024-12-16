import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function OrderSummary({ setOrderPhase }) {
    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Scoops: </h2>
            <ul>Scoop List</ul>
            <SummaryForm setOrderPhase={setOrderPhase} />
        </div>
    );
}
