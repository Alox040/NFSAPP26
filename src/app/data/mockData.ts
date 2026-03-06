export interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  severity: "Critical" | "High" | "Moderate" | "Low";
}

export interface Medication {
  id: string;
  name: string;
  genericName: string;
  indication: string;
  dosage: string;
  route: string;
  contraindications: string[];
  sideEffects: string[];
}

export interface Symptom {
  id: string;
  name: string;
  description: string;
  commonCauses: string[];
  emergencySigns: string[];
  assessment: string[];
}

export interface Algorithm {
  id: string;
  name: string;
  category: string;
  steps: AlgorithmStep[];
}

export interface AlgorithmStep {
  order: number;
  action: string;
  details?: string;
}

export const diseases: Disease[] = [
  {
    id: "1",
    name: "Acute Myocardial Infarction (AMI)",
    description: "Heart attack caused by blocked blood flow to the heart muscle",
    symptoms: ["Chest pain", "Shortness of breath", "Nausea", "Sweating", "Radiating pain to arm/jaw"],
    treatment: ["Aspirin 324mg", "Nitroglycerin", "Oxygen therapy", "12-lead ECG", "Rapid transport"],
    severity: "Critical"
  },
  {
    id: "2",
    name: "Stroke (CVA)",
    description: "Disruption of blood flow to the brain",
    symptoms: ["Facial drooping", "Arm weakness", "Speech difficulty", "Sudden confusion", "Vision problems"],
    treatment: ["Protect airway", "Oxygen if needed", "Monitor vitals", "Note time of onset", "Rapid transport"],
    severity: "Critical"
  },
  {
    id: "3",
    name: "Anaphylaxis",
    description: "Severe allergic reaction",
    symptoms: ["Difficulty breathing", "Swelling", "Hives", "Rapid pulse", "Dizziness"],
    treatment: ["Epinephrine 0.3mg IM", "Antihistamines", "Oxygen therapy", "IV access", "Monitor airway"],
    severity: "Critical"
  },
  {
    id: "4",
    name: "Diabetic Ketoacidosis (DKA)",
    description: "Serious diabetes complication with high blood sugar and ketones",
    symptoms: ["Excessive thirst", "Frequent urination", "Nausea", "Fruity breath", "Confusion"],
    treatment: ["IV fluids", "Monitor glucose", "Oxygen", "Transport for insulin therapy"],
    severity: "High"
  },
  {
    id: "5",
    name: "Pneumothorax",
    description: "Collapsed lung",
    symptoms: ["Sudden chest pain", "Shortness of breath", "Decreased breath sounds", "Tachycardia"],
    treatment: ["High-flow oxygen", "Monitor vitals", "Position of comfort", "Needle decompression if tension"],
    severity: "High"
  }
];

export const medications: Medication[] = [
  {
    id: "1",
    name: "Epinephrine",
    genericName: "Adrenaline",
    indication: "Anaphylaxis, cardiac arrest, severe asthma",
    dosage: "0.3-0.5mg IM (anaphylaxis), 1mg IV (cardiac arrest)",
    route: "IM, IV, ET",
    contraindications: ["None in life-threatening situations"],
    sideEffects: ["Tachycardia", "Hypertension", "Anxiety", "Tremors"]
  },
  {
    id: "2",
    name: "Nitroglycerin",
    genericName: "Glyceryl Trinitrate",
    indication: "Chest pain, acute coronary syndrome",
    dosage: "0.4mg sublingual, repeat q5min x3",
    route: "Sublingual",
    contraindications: ["Hypotension (SBP <90)", "Right ventricular infarction", "Recent PDE-5 inhibitor use"],
    sideEffects: ["Headache", "Hypotension", "Dizziness", "Flushing"]
  },
  {
    id: "3",
    name: "Aspirin",
    genericName: "Acetylsalicylic Acid",
    indication: "Suspected acute coronary syndrome",
    dosage: "324mg PO (chewed)",
    route: "Oral",
    contraindications: ["Active bleeding", "Known aspirin allergy", "Recent stroke"],
    sideEffects: ["GI upset", "Bleeding", "Allergic reaction"]
  },
  {
    id: "4",
    name: "Naloxone",
    genericName: "Narcan",
    indication: "Opioid overdose",
    dosage: "0.4-2mg IN/IM/IV, repeat as needed",
    route: "Intranasal, IM, IV",
    contraindications: ["None in emergency"],
    sideEffects: ["Withdrawal symptoms", "Agitation", "Nausea", "Vomiting"]
  },
  {
    id: "5",
    name: "Albuterol",
    genericName: "Salbutamol",
    indication: "Bronchospasm, asthma, COPD",
    dosage: "2.5mg nebulized, repeat as needed",
    route: "Inhalation",
    contraindications: ["Tachyarrhythmias (relative)"],
    sideEffects: ["Tachycardia", "Tremors", "Nervousness", "Headache"]
  }
];

export const symptoms: Symptom[] = [
  {
    id: "1",
    name: "Chest Pain",
    description: "Discomfort or pain in the chest area",
    commonCauses: ["Cardiac ischemia", "Pneumothorax", "Pulmonary embolism", "Musculoskeletal", "GERD"],
    emergencySigns: ["Crushing/pressure sensation", "Radiating pain", "Diaphoresis", "Shortness of breath"],
    assessment: ["OPQRST assessment", "12-lead ECG", "Vital signs", "Oxygen saturation", "Medical history"]
  },
  {
    id: "2",
    name: "Altered Mental Status",
    description: "Change in level of consciousness or cognitive function",
    commonCauses: ["Hypoglycemia", "Stroke", "Hypoxia", "Drug/alcohol", "Infection", "Head trauma"],
    emergencySigns: ["GCS <13", "Unresponsive", "Focal deficits", "Seizure activity"],
    assessment: ["AVPU or GCS", "Blood glucose", "Pupils", "Vital signs", "Stroke assessment"]
  },
  {
    id: "3",
    name: "Difficulty Breathing",
    description: "Respiratory distress or dyspnea",
    commonCauses: ["Asthma", "COPD", "Pneumonia", "CHF", "Pulmonary embolism", "Anaphylaxis"],
    emergencySigns: ["Cyanosis", "Tripod position", "Stridor", "Absent breath sounds", "SpO2 <90%"],
    assessment: ["Respiratory rate", "Breath sounds", "SpO2", "Accessory muscle use", "Peak flow if available"]
  },
  {
    id: "4",
    name: "Severe Bleeding",
    description: "Significant blood loss",
    commonCauses: ["Trauma", "GI bleed", "Surgical complications", "Bleeding disorder"],
    emergencySigns: ["Shock signs", "Decreased LOC", "Tachycardia", "Hypotension", "Pale/cool skin"],
    assessment: ["Control bleeding", "Blood pressure", "Heart rate", "Capillary refill", "Estimate blood loss"]
  },
  {
    id: "5",
    name: "Abdominal Pain",
    description: "Pain or discomfort in the abdominal region",
    commonCauses: ["Appendicitis", "Bowel obstruction", "AAA", "Kidney stones", "Gastroenteritis"],
    emergencySigns: ["Rigid abdomen", "Rebound tenderness", "Pulsating mass", "Shock signs"],
    assessment: ["OPQRST", "Palpation", "Vital signs", "Medical history", "Last bowel movement"]
  }
];

export const algorithms: Algorithm[] = [
  {
    id: "1",
    name: "Adult Cardiac Arrest",
    category: "Cardiac",
    steps: [
      { order: 1, action: "Verify cardiac arrest", details: "Check for pulse and breathing" },
      { order: 2, action: "Begin CPR", details: "30:2 compression-ventilation ratio, 100-120/min" },
      { order: 3, action: "Attach AED/Monitor", details: "Analyze rhythm as soon as available" },
      { order: 4, action: "Shockable rhythm?", details: "VF/pVT: Defibrillate at 200J biphasic" },
      { order: 5, action: "Resume CPR", details: "Immediately for 2 minutes" },
      { order: 6, action: "Establish IV/IO access", details: "Administer epinephrine 1mg every 3-5 min" },
      { order: 7, action: "Advanced airway", details: "If available, continuous compressions" },
      { order: 8, action: "Reassess rhythm every 2 minutes", details: "Continue cycles until ROSC" }
    ]
  },
  {
    id: "2",
    name: "Stroke Assessment",
    category: "Neurological",
    steps: [
      { order: 1, action: "Scene safety and BSI", details: "Ensure safe environment" },
      { order: 2, action: "Primary assessment", details: "ABC's and vital signs" },
      { order: 3, action: "Cincinnati Stroke Scale", details: "Facial droop, arm drift, speech" },
      { order: 4, action: "Establish time of onset", details: "Critical for treatment decisions" },
      { order: 5, action: "Blood glucose check", details: "Rule out hypoglycemia" },
      { order: 6, action: "12-lead ECG", details: "Identify cardiac causes" },
      { order: 7, action: "Rapid transport", details: "Notify receiving facility" },
      { order: 8, action: "Monitor and reassess", details: "Frequent neuro checks en route" }
    ]
  },
  {
    id: "3",
    name: "Anaphylaxis Management",
    category: "Allergic",
    steps: [
      { order: 1, action: "Recognize signs/symptoms", details: "Airway compromise, breathing difficulty, shock" },
      { order: 2, action: "Remove allergen if possible", details: "Stop exposure" },
      { order: 3, action: "Administer epinephrine 0.3mg IM", details: "Lateral thigh, may repeat in 5-15 min" },
      { order: 4, action: "Position patient", details: "Supine with legs elevated if hypotensive" },
      { order: 5, action: "High-flow oxygen", details: "Maintain SpO2 >94%" },
      { order: 6, action: "Establish IV access", details: "Fluid bolus if hypotensive" },
      { order: 7, action: "Consider adjunct meds", details: "Antihistamines, bronchodilators, steroids" },
      { order: 8, action: "Monitor closely", details: "Watch for biphasic reaction" }
    ]
  },
  {
    id: "4",
    name: "Trauma Assessment",
    category: "Trauma",
    steps: [
      { order: 1, action: "Scene safety", details: "Ensure scene is safe, BSI/PPE" },
      { order: 2, action: "Mechanism of injury", details: "Determine forces involved" },
      { order: 3, action: "Primary survey (XABCDE)", details: "Exsanguinating hemorrhage, Airway, Breathing, Circulation, Disability, Exposure" },
      { order: 4, action: "Control life-threatening bleeding", details: "Direct pressure, tourniquet if needed" },
      { order: 5, action: "Spinal motion restriction if indicated", details: "Based on mechanism and assessment" },
      { order: 6, action: "Secondary survey", details: "Head-to-toe examination" },
      { order: 7, action: "Vital signs and monitoring", details: "Baseline and frequent reassessment" },
      { order: 8, action: "Transport decision", details: "Rapid transport to appropriate facility" }
    ]
  },
  {
    id: "5",
    name: "Airway Management",
    category: "Airway",
    steps: [
      { order: 1, action: "Assess airway patency", details: "Look, listen, feel" },
      { order: 2, action: "Basic maneuvers", details: "Head-tilt/chin-lift or jaw-thrust" },
      { order: 3, action: "Suction if needed", details: "Remove secretions, blood, vomitus" },
      { order: 4, action: "Insert airway adjunct", details: "OPA (unconscious) or NPA (conscious)" },
      { order: 5, action: "Oxygen therapy", details: "Appropriate concentration based on SpO2" },
      { order: 6, action: "Bag-valve-mask if needed", details: "Assisted ventilations" },
      { order: 7, action: "Consider advanced airway", details: "If BVM inadequate or prolonged transport" },
      { order: 8, action: "Confirm placement", details: "Continuous waveform capnography preferred" }
    ]
  }
];
