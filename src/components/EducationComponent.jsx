import React from "react";
import { useTheme } from "./ThemeToggle";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Lovely Professional University, Jalandhar, Punjab",
    duration: "2022 – 2026",
    score: "CGPA: 7.4",
  },
  {
    degree: "12th Science",
    school: "Scottish Central School, Lalganj, Sasaram",
    duration: "2019 – 2021",
    score: "Percentage: 78%",
  },
  {
    degree: "10th Science",
    school: "DAV Public School Hansraj, Admapur",
    duration: "2018 – 2019",
    score: "Percentage: 85%",
  },
];

const Education = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="education"
      className={`py-16 px-4 ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Education
          <div className="w-24 h-1 mt-4 mx-auto bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full" />
        </h2>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md transition-all duration-300 ${
                isDark
                  ? "bg-gray-900 border border-indigo-700"
                  : "bg-white border border-indigo-200"
              }`}
            >
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-sm mt-1">{item.school}</p>
              <p className="text-sm mt-1 text-indigo-400">
                {item.duration} | {item.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
