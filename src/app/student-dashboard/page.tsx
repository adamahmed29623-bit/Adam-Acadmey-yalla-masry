"use client";
import React from 'react';

export default function StudentDashboard() {
  const stats = [
    { label: "Total Points", value: "250 Pt", icon: "🏆" },
    { label: "Levels Cleared", value: "1/10", icon: "⭐" },
    { label: "Badges", value: "Street Hero", icon: "🛡️" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Welcome, Royal Student! 👑</h1>
      
      <div className="grid grid-
