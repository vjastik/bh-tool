import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-dark-700 text-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}