const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  icon,
  position,
  delay = 0,
}) => {
  return (
    <div
      className={`absolute ${position} animate-float`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center space-x-2 bg-white/95 dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
        <div className="w-6 h-6">
          <img src={icon} alt={name} className="w-full h-full" />
        </div>
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
      </div>
    </div>
  );
};
