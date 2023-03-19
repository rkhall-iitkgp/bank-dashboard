import Payment from "../../components/make-payment"
import Navbar from "../../components/navbar";
import OfferCardsRow from "../../components/OfferCardsRow";
import Demo from "../../components/SeeYourAnalysis";

const index = () => {
    return (
        <>
            <Navbar />
            <Demo />
            <Payment />
            <OfferCardsRow />
        </>
    )
}


export default index;