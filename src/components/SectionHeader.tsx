type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
