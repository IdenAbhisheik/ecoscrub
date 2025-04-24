
interface SortOptionsProps {
  onSortChange: (option: string) => void;
  sortOption: string;
}

const SortOptions = ({ onSortChange, sortOption }: SortOptionsProps) => {
  return (
    <div className="flex items-center justify-end mb-6">
      <label htmlFor="sort" className="text-sm text-ecoscrub-brown mr-2">Sort by:</label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="natural-input text-sm py-1"
      >
        <option value="popular">Popularity</option>
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
