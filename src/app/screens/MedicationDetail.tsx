import { useParams } from "react-router";
import { Pill, Syringe, AlertTriangle, XCircle } from "lucide-react";
import { Layout } from "../components/Layout";
import { medications } from "../data/mockData";

export function MedicationDetail() {
  const { id } = useParams();
  const medication = medications.find(m => m.id === id);

  if (!medication) {
    return (
      <Layout title="Medication Not Found" showBack>
        <div className="p-4 text-center">
          <p className="text-gray-400">Medication not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={medication.name} showBack>
      <div className="p-4 space-y-6">
        {/* Header Card */}
        <div className="bg-[#1a1a1a] rounded-xl p-5 space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Pill className="w-7 h-7 text-blue-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">{medication.name}</h2>
              <p className="text-gray-400">{medication.genericName}</p>
            </div>
          </div>
        </div>

        {/* Indication */}
        <div className="bg-[#1a1a1a] rounded-xl p-5">
          <h3 className="font-semibold mb-3 text-blue-400">Indication</h3>
          <p className="text-gray-300">{medication.indication}</p>
        </div>

        {/* Dosage & Route */}
        <div className="bg-[#1a1a1a] rounded-xl p-5 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Syringe className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold">Dosage</h3>
            </div>
            <p className="text-gray-300 bg-green-950/20 border border-green-900/30 rounded-lg p-3 font-mono text-sm">
              {medication.dosage}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Route of Administration</h3>
            <div className="flex flex-wrap gap-2">
              {medication.route.split(',').map((route, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30"
                >
                  {route.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contraindications */}
        <div className="bg-[#1a1a1a] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-red-400" />
            <h3 className="font-semibold">Contraindications</h3>
          </div>
          <ul className="space-y-2">
            {medication.contraindications.map((contraindication, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>{contraindication}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Side Effects */}
        <div className="bg-[#1a1a1a] rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h3 className="font-semibold">Side Effects</h3>
          </div>
          <ul className="space-y-2">
            {medication.sideEffects.map((effect, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>{effect}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Warning */}
        <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-400 mb-1">Important</h3>
              <p className="text-sm text-gray-400">
                Always verify dosages and follow local protocols. Consult medical direction for any uncertainties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
