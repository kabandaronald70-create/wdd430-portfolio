interface SkillCardProps {
  skillName: string;
  proficiency: string;
  description: string;
}

export default function SkillCard({
  skillName,
  proficiency,
  description,
}: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-6">
      <h3 className="text-xl font-bold text-blue-600 mb-2">{skillName}</h3>
      <p className="text-sm font-semibold text-gray-500 mb-3">
        Proficiency: {proficiency}
      </p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
