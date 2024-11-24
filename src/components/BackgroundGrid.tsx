import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/20 to-transparent opacity-30 dark:opacity-20 blur-3xl" />
    </div>
  );
};

export default BackgroundGrid;