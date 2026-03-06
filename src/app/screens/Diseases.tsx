import { useNavigate } from "react-router";
import { Activity, AlertTriangle } from "lucide-react";
import { Layout } from "../components/Layout";
import { diseases } from "../data/mockData";
import { Card, Badge } from "../components/design-system";

export function Diseases() {
  const navigate = useNavigate();

  const getSeverityBadgeVariant = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "critical" as const;
      case "High":
        return "warning" as const;
      case "Moderate":
        return "info" as const;
      default:
        return "default" as const;
    }
  };

  return (
    <Layout title="Diseases">
      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-400 px-1">
          {diseases.length} common emergency conditions
        </p>

        {diseases.map((disease) => (
          <Card
            key={disease.id}
            onClick={() => navigate(`/diseases/${disease.id}`)}
            hoverable
            padding="medium"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-1">{disease.name}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {disease.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant={getSeverityBadgeVariant(disease.severity)}>
                <AlertTriangle className="w-3.5 h-3.5 mr-1 inline-block" />
                {disease.severity}
              </Badge>
              <span className="text-sm text-gray-500">
                {disease.symptoms.length} symptoms
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}