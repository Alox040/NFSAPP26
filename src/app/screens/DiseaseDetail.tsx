import { useParams } from "react-router";
import { Activity, AlertTriangle, CheckCircle2, Pill } from "lucide-react";
import { Layout } from "../components/Layout";
import { diseases } from "../data/mockData";
import { Card, Badge } from "../components/design-system";

export function DiseaseDetail() {
  const { id } = useParams();
  const disease = diseases.find(d => d.id === id);

  if (!disease) {
    return (
      <Layout title="Disease Not Found" showBack>
        <div className="p-4 text-center">
          <p className="text-gray-400">Disease not found</p>
        </div>
      </Layout>
    );
  }

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
    <Layout title={disease.name} showBack>
      <div className="p-4 space-y-6">
        {/* Header Card */}
        <Card variant="elevated" padding="large">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Activity className="w-7 h-7 text-red-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">{disease.name}</h2>
              <p className="text-gray-400">{disease.description}</p>
            </div>
          </div>

          <Badge variant={getSeverityBadgeVariant(disease.severity)}>
            <AlertTriangle className="w-4 h-4 mr-1 inline-block" />
            {disease.severity} Priority
          </Badge>
        </Card>

        {/* Symptoms */}
        <Card variant="elevated" padding="large">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <h3 className="font-semibold">Symptoms</h3>
          </div>
          <ul className="space-y-2">
            {disease.symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Treatment */}
        <Card variant="elevated" padding="large">
          <div className="flex items-center gap-2 mb-4">
            <Pill className="w-5 h-5 text-blue-400" />
            <h3 className="font-semibold">Treatment Protocol</h3>
          </div>
          <ul className="space-y-3">
            {disease.treatment.map((treatment, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-400">{index + 1}</span>
                </div>
                <span className="text-gray-300 flex-1">{treatment}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Warning */}
        <Card variant="medical" padding="medium">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-400 mb-1">Important</h3>
              <p className="text-sm text-gray-400">
                Always follow local protocols and consult medical direction. This information is for reference only.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}