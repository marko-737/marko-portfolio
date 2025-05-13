import { Calendar, Briefcase } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
};

type JobCardProps = {
  item: ExperienceItem;
  index: number;
};

const JobCard = ({ item, index }: JobCardProps) => {
  return (
    <div className="mb-12 relative">
      <div className="absolute left-0 md:left-1/2 -mt-1.5 h-6 w-6 rounded-full bg-blue-500 transform -translate-x-1/2 flex items-center justify-center">
        <Briefcase size={14} className="text-white" />
      </div>

      <div
        className={`md:w-1/2 ${
          index % 2 === 0 ? "md:pr-12 ml-8 md:ml-auto" : "md:pl-12 ml-8"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Calendar size={16} className="mr-2" />
            {item.period}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
            {item.title}
          </h3>

          <div className="text-blue-500 dark:text-blue-400 font-medium mb-4">
            {item.company} • {item.location}
          </div>

          <ul className="space-y-3 mb-4">
            {item.description.map((item, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                • {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
