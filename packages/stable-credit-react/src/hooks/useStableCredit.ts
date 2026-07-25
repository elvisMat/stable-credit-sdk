import { useCallback } from "react";

export const useStableCredit = () => {
  const handlePayment = useCallback(
    async (amount: number, currency: string) => {
      console.log(
        `Processing payment of ${amount} ${currency} with StableCredit...`
      );
    },
    []
  );
  return { handlePayment };
};


