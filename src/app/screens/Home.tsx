import { useNavigate } from "react-router";
import { Activity, Pill, Stethoscope, GitBranch, Search, AlertCircle } from "lucide-react";
import { Layout } from "../components/Layout";
import { HorizontalNavigationBar } from "../components/HorizontalNavigationBar";
import { Card, ListItem } from "../components/design-system";

export function Home() {
  const navigate = useNavigate();

  const quickAccessButtons = [
    {
      icon: Activity,
      label: "Diseases",
      path: "/diseases",
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: Pill,
      label: "Medications",
      path: "/medications",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Stethoscope,
      label: "Symptoms",
      path: "/symptoms",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: GitBranch,
      label: "Algorithms",
      path: "/algorithms",
      color: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <Layout title="ParaMed">
      <div className="space-y-6">
        {/* Horizontal Swipeable Navigation */}
        <div className="pt-4">
          <HorizontalNavigationBar />
        </div>

        <div className="px-4 space-y-6">
          {/* Quick Search */}
          <button
            onClick={() => navigate("/search")}
            className="w-full flex items-center gap-3 bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 text-left hover:border-gray-600 transition-colors"
          >
            <Search className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Quick search...</span>
          </button>

          {/* Quick Access Grid */}
          <div>
            <h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Quick Access</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickAccessButtons.map((button) => (
                <button
                  key={button.path}
                  onClick={() => navigate(button.path)}
                  className={`${button.color} rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-colors min-h-[140px]`}
                >
                  <button.icon className="w-12 h-12" />
                  <span className="text-lg font-semibold">{button.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Emergency Notice */}
          <Card variant="medical" padding="medium">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-400 mb-1">Emergency Reference Only</h3>
                <p className="text-sm text-gray-400">
                  This app provides quick reference information for paramedics. Always follow local protocols and medical direction.
                </p>
              </div>
            </div>
          </Card>

          {/* Recent Categories */}
          <div>
            <h2 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Most Accessed</h2>
            <div className="space-y-2">
              <ListItem
                icon={GitBranch}
                iconColor="text-purple-400"
                title="Adult Cardiac Arrest"
                subtitle="Algorithm"
                onClick={() => navigate("/algorithms/1")}
              />
              <ListItem
                icon={Activity}
                iconColor="text-red-400"
                title="Acute Myocardial Infarction"
                subtitle="Disease"
                onClick={() => navigate("/diseases/1")}
              />
              <ListItem
                icon={Pill}
                iconColor="text-blue-400"
                title="Epinephrine"
                subtitle="Medication"
                onClick={() => navigate("/medications/1")}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}