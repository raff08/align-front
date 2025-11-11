import { ProgressBar } from '../molecules/progressBar';
import type { Goal } from '../../models/goals';
import { formatCurrency } from '../../utils/formatCurrency';

type GoalsListProps = {
	goals: Goal[];
	onGoalClick?: (goal: Goal) => void;
};

export const GoalsList = ({ goals, onGoalClick }: GoalsListProps) => (
	<section>
		<h4 className="text-lg font-semibold mb-4">Suas Metas</h4>
		<div className="flex flex-col gap-4">
			{goals.map((goal) => {
				if (goal.current > goal.total) {
					const surplus = goal.current - goal.total;
					return (
						<div
							key={goal.id}
							className="bg-[#3d4e4a] p-4 rounded-lg cursor-pointer hover:bg-[#475a51] transition-colors"
							onClick={() => onGoalClick?.(goal)}>
							<div className="flex items-center gap-3">
								<span className="text-2xl">⚠️</span>
								<span className="font-semibold">{goal.title}:</span>
								<span className="font-semibold text-sm opacity-90">
									Meta ultrapassada em {formatCurrency(surplus)}!
								</span>
							</div>
						</div>
					);
				} else if (goal.current === goal.total) {
					return (
						<div
							key={goal.id}
							className="bg-[#3d4e4a] p-4 rounded-lg cursor-pointer hover:bg-[#475a51] transition-colors"
							onClick={() => onGoalClick?.(goal)}>
							<div className="flex items-center gap-3">
								<span className="text-2xl">🏆</span>
								<span className="font-semibold">{goal.title}:</span>
								<span className="font-semibold text-sm opacity-90">Meta atingida!</span>
							</div>
						</div>
					);
				} else {
					const progressPercent = (goal.current / goal.total) * 100;
					return (
						<div
							key={goal.id}
							className="bg-[#3d4e4a] p-4 rounded-lg cursor-pointer hover:bg-[#475a51] transition-colors"
							onClick={() => onGoalClick?.(goal)}>
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
				}
			})}
		</div>
	</section>
);
