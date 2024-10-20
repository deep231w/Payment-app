import { Card } from "@repo/ui/card";

export const BalanceCard = async (
  { amount, locked }: { amount: number; locked: number }
) => {
  return (
    <Card title="Balance">
      <div className="flex justify-between border-b border-slate-400 py-2">
        <div>Unlocked balance</div> {/* Using <p> for text only */}
        <div>{amount / 100} INR</div> {/* Div for layout and data */}
      </div>

      <div className="flex justify-between border-b border-slate-400 py-2">
        <div>Total locked balance</div> {/* Correct usage of <p> */}
        <div>{locked / 100} INR</div>
      </div>

      <div className="flex justify-between border-b border-slate-400 py-2">
        <div>Total balance</div> {/* Correct usage of <p> */}
        <div>{(amount + locked) / 100} INR</div>
      </div>
    </Card>
  );
};
