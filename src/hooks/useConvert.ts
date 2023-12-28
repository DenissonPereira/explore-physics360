import { useState } from "react";


export function useConvert() {
    const [valorAtual, setValorAtual] = useState(10);

    const mParaKm = () => {
        setValorAtual(prevCount => prevCount * 3.6);
    };

    const KmParaM = () => {
        setValorAtual(prevCount => prevCount / 3.6);
    };

    return {
        valorAtual,
        mParaKm,
        KmParaM
    }
};