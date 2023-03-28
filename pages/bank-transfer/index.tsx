import { useEffect, useState } from 'react'
import { BankTransfer } from '../../components/bank-transfer-flow/BankTransfer'

const MyBankTransfer = () => {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    useEffect(() => {
        setInitialRenderComplete(true);
    }, []);

    if (!initialRenderComplete) {
        return null;
    } else {
        return <BankTransfer />;
    }
}

export default MyBankTransfer;

// export default BankTransfer
