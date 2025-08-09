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
  "Programming Language": "#8B5CF6",
  "Reporting Tool": "#F472B6",
  "Operating System": "#F59E42",
  "Database": "#22D3EE",
  "Cloud Computing": "#A3E635",
  "Networking": "#F87171",
  "Version Control": "#FBBF24",
  "Containerization": "#38BDF8",
  "Web Services": "#6366F1",
};

const RadarGraph: React.FC<RadarGraphProps> = ({ skills }) => {
  const types = Array.from(new Set(skills.map(skill => skill.type)));

  const datasets = skills.map((skill) => ({
    label: skill.name,
    data: types.map(type => skill.type === type ? skill.level : 0),
    backgroundColor: TYPE_COLORS[skill.type] + "33",
    borderColor: TYPE_COLORS[skill.type],
    pointBackgroundColor: TYPE_COLORS[skill.type],
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: TYPE_COLORS[skill.type],
    fill: true,
  }));

  const data = {
    labels: types,
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

  // Render legenda customizada para as classes
  const classLegend = (
    <div className="flex flex-wrap gap-4 justify-center mb-4">
      {types.map(type => (
        <div key={type} className="flex items-center gap-2">
          <span
            style={{
              display: "inline-block",
              width: 24,
              height: 6,
              background: TYPE_COLORS[type],
              borderRadius: 4,
            }}
          />
          <span style={{ color: TYPE_COLORS[type], fontWeight: 600 }}>{type}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mb-8">
      <Radar data={data} options={options} width={300} height={300} />
    </div>
  );
};

export default RadarGraph;