import { ProgressBar } from "../molecules/progressBar";
import type { Goal } from "../../models/goals";
import { formatCurrency } from "../../utils/formatCurrency";



export const GoalsList = ({ goals }: { goals: Goal[] }) => (
  <section>
    <h4 className="text-lg font-semibold mb-4">Suas Metas</h4>
    <div className="flex flex-col gap-4">
      
      {goals.map(goal => {
        const progressPercent = (goal.current / goal.total) * 100;
        return (
          <div key={goal.id} className="bg-[#3d4e4a] p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{goal.icon}</span>
              <span className="font-semibold">{goal.title}</span>
            </div>
            <ProgressBar 
              progress={progressPercent}
              current={formatCurrency(goal.current)}
              total={formatCurrency(goal.total)}
            />
          </div>
        );
      })}

    </div>
  </section>
);