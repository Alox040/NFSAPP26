import { useState } from "react";
import { useNavigate } from "react-router";
import { Search as SearchIcon, Activity, Pill, Stethoscope, GitBranch } from "lucide-react";
import { Layout } from "../components/Layout";
import { diseases, medications, symptoms, algorithms } from "../data/mockData";
import { SearchBar, ListItem, Badge } from "../components/design-system";

export function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const allItems = [
    ...diseases.map(d => ({ ...d, type: "disease" as const, icon: Activity, color: "text-red-400" })),
    ...medications.map(m => ({ ...m, type: "medication" as const, icon: Pill, color: "text-blue-400" })),
    ...symptoms.map(s => ({ ...s, type: "symptom" as const, icon: Stethoscope, color: "text-green-400" })),
    ...algorithms.map(a => ({ ...a, type: "algorithm" as const, icon: GitBranch, color: "text-purple-400" }))
  ];

  const filteredItems = query.trim()
    ? allItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleItemClick = (item: typeof allItems[0]) => {
    switch (item.type) {
      case "disease":
        navigate(`/diseases/${item.id}`);
        break;
      case "medication":
        navigate(`/medications/${item.id}`);
        break;
      case "symptom":
        navigate(`/symptoms/${item.id}`);
        break;
      case "algorithm":
        navigate(`/algorithms/${item.id}`);
        break;
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "disease": return "critical" as const;
      case "medication": return "info" as const;
      case "symptom": return "success" as const;
      case "algorithm": return "warning" as const;
      default: return "default" as const;
    }
  };

  return (
    <Layout title="Search">
      <div className="p-4 space-y-4">
        {/* Search Input */}
        <SearchBar
          placeholder="Search diseases, medications, symptoms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery("")}
          showClear={query.length > 0}
          autoFocus
        />

        {/* Results */}
        {query.trim() ? (
          <div className="space-y-2">
            {filteredItems.length > 0 ? (
              <>
                <p className="text-sm text-gray-500 px-1">{filteredItems.length} results found</p>
                {filteredItems.map((item) => (
                  <ListItem
                    key={`${item.type}-${item.id}`}
                    icon={item.icon}
                    iconColor={item.color}
                    title={item.name}
                    subtitle={item.description}
                    badge={<Badge variant={getBadgeVariant(item.type)}>{item.type}</Badge>}
                    onClick={() => handleItemClick(item)}
                  />
                ))}
              </>
            ) : (
              <div className="text-center py-12">
                <SearchIcon className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-500">No results found for "{query}"</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <SearchIcon className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-500">Start typing to search</p>
            <p className="text-sm text-gray-600 mt-2">
              Search across all diseases, medications, symptoms, and algorithms
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}