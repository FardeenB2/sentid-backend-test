'use client';

import React from 'react';
import ProtectedRoute from '@/app/components/ProtectedRoute';
import { useAuth } from '@/app/context/AuthContext';
import GoalTracker from '@/app/components/GoalTracker'; // Import the wrapper component


export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button 
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome, {user?.sub || 'User'}!</h2>


                {/* Debug Text */}
                <div className="mb-4 p-2 bg-yellow-100 border border-yellow-300 rounded">
                  <p>Debug: Goal Tracker should appear below this message</p>
                </div>
                
                {/* Goal Tracker with error catching */}
                <div className="mt-8">
                  {(() => {
                    try {
                      return <GoalTracker />;
                    } catch (error: any) {
                      console.error("Error rendering GoalTracker:", error);
                      return (
                        <div className="p-4 bg-red-100 text-red-700 rounded">
                          <p>Error rendering Goal Tracker component:</p>
                          <pre>{error.message}</pre>
                        </div>
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}