import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type Skill = {
  name: string;
  level: number;
  type: string;
};

type RadarGraphProps = {
  skills: Skill[];
};

const TYPE_COLORS: Record<string, string> = {
  "Programming Language": "#0066FF",
  "Reporting Tool": "#8B5CF6",
  "Operating System": "#22D3EE",
  "Database": "#10B981",
  "Cloud Computing": "#F59E42",
  "Networking": "#EF4444",
  "Version Control": "#EC4899",
  "Containerization": "#14B8A6",
  "Web Services": "#F472B6",
};

const RadarGraph: React.FC<RadarGraphProps> = ({ skills }) => {
  const types = Array.from(new Set(skills.map(skill => skill.type)));

  const datasets = skills.map((skill) => ({
    label: skill.name,
    data: types.map(type => skill.type === type ? skill.level : 0),
    backgroundColor: TYPE_COLORS[skill.type] + "33",
    borderColor: TYPE_COLORS[skill.type],
    borderWidth: 2,
    pointBackgroundColor: TYPE_COLORS[skill.type],
    pointBorderColor: "#fff",
    pointBorderWidth: 1,
    pointRadius: 4,
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: TYPE_COLORS[skill.type],
    pointHoverRadius: 6,
    fill: true,
  }));

  const data = {
    labels: types,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(15, 33, 55, 0.95)",
        titleColor: "#fff",
        bodyColor: "#9CA3AF",
        borderColor: "rgba(0, 102, 255, 0.3)",
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      },
    },
    scales: {
      r: {
        angleLines: { 
          display: true,
          color: "rgba(255, 255, 255, 0.08)",
        },
        proposedMin: 0,
        proposedMax: 100,
        grid: { 
          color: "rgba(0, 102, 255, 0.15)",
        },
        pointLabels: { 
          color: "#9CA3AF",
          font: { size: 11 },
          padding: 15,
        },
        ticks: { 
          color: "#6B7280",
          backdropColor: "transparent",
          stepSize: 25,
          font: { size: 10 },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative aspect-square w-full">
        <Radar data={data} options={options} className="w-full h-full" />
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {types.map(type => (
          <div key={type} className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: TYPE_COLORS[type] }}
            />
            <span className="text-xs text-gray-400">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadarGraph;
