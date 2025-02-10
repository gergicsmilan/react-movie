import { AGE_LIMITS } from "../../../consts";

type Props = {
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = ({ selectedFilter, setSelectedFilter }: Props) => (
  <select
    value={selectedFilter}
    onChange={(e) => setSelectedFilter(e.target.value)}
    style={{ marginLeft: "4px" }}
  >
    <option value="">No filter</option>
    {AGE_LIMITS.map((o) => (
      <option key={o.value} value={o.value}>
        {o.text}
      </option>
    ))}
  </select>
);

export default Filter;
