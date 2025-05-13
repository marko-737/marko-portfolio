type FilterButtonsProps = {
  allTags: string[];
  selectedTag: string;
  onSelect: (tag: string) => void;
};

const FilterButtons = ({
  allTags,
  selectedTag,
  onSelect,
}: FilterButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedTag === tag
              ? "bg-blue-500 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
          }`}
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
