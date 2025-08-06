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

const COLORS: Record<string, string> = {
  "Programming Language": "#8B5CF6",
  "Database": "#22D3EE",
  "Reporting Tool": "#F472B6",
  "Operating System": "#F59E42",
  "Cloud Computing": "#A3E635",
  "Networking": "#F87171",
  "Containerization": "#38BDF8",
  "Version Control": "#FBBF24",
  "Project Management": "#34D399",
  "Web Services": "#818CF8",
  "Web Development": "#E879F9",
  "Frontend Framework": "#F43F5E",
  "Backend Framework": "#10B981",
};

function groupSkillsByType(skills: Skill[]) {
  const grouped: Record<string, Skill[]> = {};
  skills.forEach((skill) => {
    if (!grouped[skill.type]) grouped[skill.type] = [];
    grouped[skill.type].push(skill);
  });
  return grouped;
}

const RadarGraph: React.FC<RadarGraphProps> = ({ skills }) => {
  const grouped = groupSkillsByType(skills);

  const labels = skills.map((skill) => skill.name);

  const datasets = Object.entries(grouped).map(([type, skillsOfType]) => ({
    label: type,
    data: labels.map((label) => {
      const found = skillsOfType.find((s) => s.name === label);
      return found ? found.level : 0;
    }),
    backgroundColor: COLORS[type] + "33", // 20% opacity
    borderColor: COLORS[type],
    pointBackgroundColor: COLORS[type],
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: COLORS[type],
    fill: true,
  }));

  const data = {
    labels,
    datasets,
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: { color: "#fff" },
        grid: { color: "#8B5CF6" },
        ticks: { color: "#fff", backdropColor: "transparent" },
      },
    },
    plugins: {
      legend: { labels: { color: "#fff" } },
    },
    responsive: true,
  };

  return (
    <div className="mb-8">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarGraph;