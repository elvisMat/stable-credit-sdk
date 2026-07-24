export interface StableCreditButtonProps
  extends React.ComponentPropsWithRef<"button"> {
  amount: number | `${number}`;
  currency: "USDC" | "EURC";
  children?: React.ReactNode;
}
