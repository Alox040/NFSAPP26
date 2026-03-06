import { useNavigate } from "react-router";
import { Pill } from "lucide-react";
import { Layout } from "../components/Layout";
import { medications } from "../data/mockData";
import { Card, Badge } from "../components/design-system";

export function Medications() {
  const navigate = useNavigate();

  return (
    <Layout title="Medications">
      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-400 px-1">
          {medications.length} emergency medications
        </p>

        {medications.map((medication) => (
          <Card
            key={medication.id}
            onClick={() => navigate(`/medications/${medication.id}`)}
            hoverable
            padding="medium"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Pill className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold">{medication.name}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">{medication.genericName}</p>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {medication.indication}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Badge variant="info">{medication.route}</Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}