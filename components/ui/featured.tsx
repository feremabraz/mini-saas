interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="grow flex flex-col gap-5 border border-gray-200 p-4 bg-white rounded-md max-w-[17rem] min-h-[15rem] w-full justify-center shadow-sm">
      <div className="p-4 bg-gray-50 w-fit flex items-center justify-center rounded-md border border-gray-100">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl text-gray-800 font-semibold">{title}</h2>
        <p className="text-[14px] text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};
