import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Configuration - Goal intensity using fixed calorie deficits/surpluses
const GOAL_INTENSITY_CONFIG = {
  lose_fat: {
    mild: { deficit: -250, label: 'Mild (~0.25 kg/week)', description: '~0.25 kg/week' },
    moderate: { deficit: -500, label: 'Moderate (~0.5 kg/week)', description: '~0.5 kg/week (1 lb/week)' }
  },
  build_muscle: {
    mild: { surplus: 250, label: 'Mild (~0.25 kg/week)', description: '' },
    moderate: { surplus: 500, label: 'Moderate (~0.5 kg/week)', description: '' }
  }
};

// Gender-specific macro presets
const MACRO_PRESETS = {
  female: {
    balanced: {
      protein: { target: 0.24, min: 0.15, max: 0.35 },
      carbs: { target: 0.49, min: 0.40, max: 0.58 },
      fat: { target: 0.27, min: 0.20, max: 0.35 }
    },
    fat_loss: {
      protein: { target: 0.30, min: 0.25, max: 0.35 },
      carbs: { target: 0.45, min: 0.40, max: 0.50 },
      fat: { target: 0.25, min: 0.20, max: 0.30 }
    },
    athlete: {
      protein: { target: 0.28, min: 0.20, max: 0.35 },
      carbs: { target: 0.495, min: 0.45, max: 0.58 },
      fat: { target: 0.225, min: 0.20, max: 0.23 }
    }
  },
  male: {
    balanced: {
      protein: { target: 0.24, min: 0.15, max: 0.35 },
      carbs: { target: 0.52, min: 0.45, max: 0.60 },
      fat: { target: 0.24, min: 0.23, max: 0.25 }
    },
    fat_loss: {
      protein: { target: 0.30, min: 0.25, max: 0.35 },
      carbs: { target: 0.485, min: 0.45, max: 0.55 },
      fat: { target: 0.215, min: 0.20, max: 0.23 }
    },
    athlete: {
      protein: { target: 0.28, min: 0.20, max: 0.35 },
      carbs: { target: 0.52, min: 0.45, max: 0.60 },
      fat: { target: 0.20, min: 0.18, max: 0.22 }
    }
  },
  universal: {
    high_protein: {
      protein: { target: 0.275, min: 0.25, max: 0.30 },
      carbs: { target: 0.45, min: 0.40, max: 0.50 },
      fat: { target: 0.275, min: 0.25, max: 0.30 }
    },
    low_fat: {
      protein: { target: 0.30, min: 0.20, max: 0.40 },
      carbs: { target: 0.60, min: 0.50, max: 0.70 },
      fat: { target: 0.15, min: 0.10, max: 0.20 }
    },
    low_carb: {
      protein: { target: 0.35, min: 0.25, max: 0.45 },
      carbs: { target: 0.25, min: 0.10, max: 0.35 },
      fat: { target: 0.45, min: 0.40, max: 0.55 }
    }
  }
};

const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.465,
  very_active: 1.725,
  extra_active: 1.9
};

interface MacroResults {
  protein: {
    grams: number;
    calories: number;
    percentage: number;
    minGrams: number;
    maxGrams: number;
  };
  carbs: {
    grams: number;
    calories: number;
    percentage: number;
    minGrams: number;
    maxGrams: number;
  };
  fat: {
    grams: number;
    calories: number;
    percentage: number;
    minGrams: number;
    maxGrams: number;
  };
  sugarLimit: number;
  saturatedFatLimit: number;
}

const STORAGE_KEY = "sarafit-macros-form-data";

const Macros = () => {
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [goalIntensity, setGoalIntensity] = useState<string>("");
  const [macroPreset, setMacroPreset] = useState<string>("");
  const [results, setResults] = useState<{
    bmr: number;
    tdee: number;
    targetCalories: number;
    macros: MacroResults;
    explanation: string;
    caloriesDescription: string;
  } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved form data from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined" || isLoaded) return;
    
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const savedData = JSON.parse(saved);
        if (savedData) {
          setGender(savedData.gender || "");
          setAge(savedData.age || "");
          setWeight(savedData.weight || "");
          setHeight(savedData.height || "");
          setActivity(savedData.activity || "");
          setGoal(savedData.goal || "");
          setGoalIntensity(savedData.goalIntensity || "");
          setMacroPreset(savedData.macroPreset || "");
        }
      }
      setIsLoaded(true);
    } catch (error) {
      console.error("Error loading saved form data:", error);
      setIsLoaded(true);
    }
  }, [isLoaded]);

  // Save form data to localStorage whenever any field changes (but only after initial load)
  useEffect(() => {
    if (typeof window === "undefined" || !isLoaded) return;
    
    const formData = {
      gender,
      age,
      weight,
      height,
      activity,
      goal,
      goalIntensity,
      macroPreset,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  }, [gender, age, weight, height, activity, goal, goalIntensity, macroPreset, isLoaded]);

  const calculateBMR = (gender: string, weight: number, height: number, age: number): number => {
    const baseBMR = 10 * weight + 6.25 * height - 5 * age;
    return gender === 'male' ? baseBMR + 5 : baseBMR - 161;
  };

  const calculateTDEE = (bmr: number, activityMultiplier: number): number => {
    return bmr * activityMultiplier;
  };

  const calculateTargetCalories = (tdee: number, goal: string, goalIntensity: string): number => {
    if (goal === 'maintain') {
      return Math.round(tdee);
    }

    if (goalIntensity && GOAL_INTENSITY_CONFIG[goal as keyof typeof GOAL_INTENSITY_CONFIG]) {
      const intensity = GOAL_INTENSITY_CONFIG[goal as keyof typeof GOAL_INTENSITY_CONFIG][goalIntensity as keyof typeof GOAL_INTENSITY_CONFIG.lose_fat];
      if (intensity) {
        if (goal === 'lose_fat' && 'deficit' in intensity) {
          return Math.round(tdee + intensity.deficit);
        } else if (goal === 'build_muscle' && 'surplus' in intensity) {
          return Math.round(tdee + intensity.surplus);
        }
      }
    }

    if (goal === 'lose_fat') {
      return Math.round(tdee - 500);
    } else if (goal === 'build_muscle') {
      return Math.round(tdee + 250);
    }

    return Math.round(tdee);
  };

  const calculateMacros = (targetCalories: number, macroPreset: string, gender: string): MacroResults => {
    const preset = MACRO_PRESETS.universal[macroPreset as keyof typeof MACRO_PRESETS.universal] ||
                   (MACRO_PRESETS[gender as keyof typeof MACRO_PRESETS] || MACRO_PRESETS.female)[macroPreset as keyof typeof MACRO_PRESETS.female] ||
                   (MACRO_PRESETS[gender as keyof typeof MACRO_PRESETS] || MACRO_PRESETS.female).balanced;

    const proteinCalories = targetCalories * preset.protein.target;
    const carbCalories = targetCalories * preset.carbs.target;
    const fatCalories = targetCalories * preset.fat.target;

    const proteinGrams = Math.round(proteinCalories / 4);
    const carbGrams = Math.round(carbCalories / 4);
    const fatGrams = Math.round(fatCalories / 9);

    const proteinMinGrams = Math.round((targetCalories * preset.protein.min) / 4);
    const proteinMaxGrams = Math.round((targetCalories * preset.protein.max) / 4);
    const carbMinGrams = Math.round((targetCalories * preset.carbs.min) / 4);
    const carbMaxGrams = Math.round((targetCalories * preset.carbs.max) / 4);
    const fatMinGrams = Math.round((targetCalories * preset.fat.min) / 9);
    const fatMaxGrams = Math.round((targetCalories * preset.fat.max) / 9);

    const sugarLimit = Math.round((targetCalories * 0.10) / 4);
    const saturatedFatLimit = Math.round((targetCalories * 0.10) / 9);

    return {
      protein: {
        grams: proteinGrams,
        calories: proteinCalories,
        percentage: Math.round(preset.protein.target * 100),
        minGrams: proteinMinGrams,
        maxGrams: proteinMaxGrams
      },
      carbs: {
        grams: carbGrams,
        calories: carbCalories,
        percentage: Math.round(preset.carbs.target * 100),
        minGrams: carbMinGrams,
        maxGrams: carbMaxGrams
      },
      fat: {
        grams: fatGrams,
        calories: fatCalories,
        percentage: Math.round(preset.fat.target * 100),
        minGrams: fatMinGrams,
        maxGrams: fatMaxGrams
      },
      sugarLimit,
      saturatedFatLimit
    };
  };

  const generateExplanation = (gender: string, age: number, weight: number, height: number, bmr: number, tdee: number, targetCalories: number, goal: string, goalIntensity: string): string => {
    const genderText = gender === 'male' ? 'karl' : 'kona';
    const deficit = tdee - targetCalories;
    const surplus = targetCalories - tdee;

    let explanation = `Byggt á upplýsingum þínum (${genderText}, ${age} ára, ${weight} kg, ${height} cm) er áætlað BMR ${Math.round(bmr).toLocaleString()} kcal/dag og viðhaldskaloríur (TDEE) ${Math.round(tdee).toLocaleString()} kcal á dag. `;

    if (goal === 'lose_fat') {
      explanation += `Fyrir vægþyngd á ${goalIntensity === 'mild' ? '~0.25 kg' : '~0.5 kg'} á viku mælum við með ${targetCalories.toLocaleString()} kcal á dag (${deficit.toLocaleString()} kcal skortur). `;
    } else if (goal === 'build_muscle') {
      explanation += `Fyrir vöðvabyggingu mælum við með ${targetCalories.toLocaleString()} kcal á dag (${surplus.toLocaleString()} kcal umfram). `;
    } else {
      explanation += `Fyrir viðhald þyngdar mælum við með að borða um ${targetCalories.toLocaleString()} kcal á dag. `;
    }

    explanation += `Makróskiptingin hér að neðan er byggð á næringarráðleggingum (ADA/WHO) og er hægt að aðlaga innan ráðlagðra sviða.`;

    return explanation;
  };

  const formatCaloriesDescription = (goal: string, tdee: number, targetCalories: number): string => {
    const difference = Math.abs(targetCalories - tdee);

    if (goal === 'lose_fat') {
      return `${difference.toLocaleString()} kcal skortur frá viðhaldi`;
    } else if (goal === 'build_muscle') {
      return `${difference.toLocaleString()} kcal umfram viðhald`;
    } else {
      return 'Jafnt viðhaldskaloríum';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!gender || !age || !weight || !height || !activity || !goal || !macroPreset) {
      alert('Please fill in all required fields.');
      return;
    }

    if ((goal === 'lose_fat' || goal === 'build_muscle') && !goalIntensity) {
      alert('Please select goal intensity.');
      return;
    }

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseInt(height);

    if (ageNum < 16 || ageNum > 100) {
      alert('Age must be between 16 and 100 years.');
      return;
    }

    if (weightNum < 30 || weightNum > 300) {
      alert('Weight must be between 30 and 300 kg.');
      return;
    }

    if (heightNum < 100 || heightNum > 250) {
      alert('Height must be between 100 and 250 cm.');
      return;
    }

    const activityMultiplier = ACTIVITY_MULTIPLIERS[activity as keyof typeof ACTIVITY_MULTIPLIERS];
    const bmr = calculateBMR(gender, weightNum, heightNum, ageNum);
    const tdee = calculateTDEE(bmr, activityMultiplier);
    const targetCalories = calculateTargetCalories(tdee, goal, goalIntensity);
    const macros = calculateMacros(targetCalories, macroPreset, gender);
    const explanation = generateExplanation(gender, ageNum, weightNum, heightNum, bmr, tdee, targetCalories, goal, goalIntensity);
    const caloriesDescription = formatCaloriesDescription(goal, tdee, targetCalories);

    setResults({
      bmr,
      tdee,
      targetCalories,
      macros,
      explanation,
      caloriesDescription
    });
  };

  const resetCalculator = () => {
    // Only clear the results, keep all form data
    setResults(null);
  };

  const getMacroPresetOptions = () => {
    if (!gender) return [];
    
    const genderPresets = MACRO_PRESETS[gender as keyof typeof MACRO_PRESETS] || MACRO_PRESETS.female;
    return [
      { value: 'balanced', label: 'Balanced' },
      { value: 'fat_loss', label: 'Fat Loss' },
      { value: 'athlete', label: 'Athlete' },
      { value: 'high_protein', label: 'High Protein' },
      { value: 'low_fat', label: 'Low Fat' },
      { value: 'low_carb', label: 'Low Carb' }
    ];
  };

  return (
    <div className="relative bg-background min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none page-glow"></div>
      <div className="relative z-10 w-full">
        <SEO
          title="Macros Reiknivél - SARAFIT"
          description="Reiknaðu út BMR, TDEE og makrór fyrir markmiðið þitt. Persónuleg næringarútreikningur byggður á vísindalegum aðferðum."
          url="https://sarafit.is/macros"
        />
        <Navigation />
        
        <main className="pt-32 pb-20 px-4 overflow-x-hidden">
          <div className="container mx-auto max-w-4xl w-full">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black mb-4 font-display">
                <span className="text-foreground">Macros</span>{" "}
                <span className="text-primary">Reiknivél</span>
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-sans">
                Reiknaðu út BMR, TDEE og makrór fyrir markmiðið þitt
              </p>
            </div>

            {!results ? (
              <Card className="bg-card/60 backdrop-blur border border-white/10 overflow-visible w-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Upplýsingar</CardTitle>
                </CardHeader>
                <CardContent className="overflow-visible w-full">
                  <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <div className="grid md:grid-cols-2 gap-6 w-full">
                      <div>
                        <Label htmlFor="gender" className="text-foreground">Kyn *</Label>
                        <Select value={gender} onValueChange={setGender} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Veldu kyn" />
                          </SelectTrigger>
                          <SelectContent className="z-[100]">
                            <SelectItem value="female">Kona</SelectItem>
                            <SelectItem value="male">Karl</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="age" className="text-foreground">Aldur *</Label>
                        <Input
                          id="age"
                          type="number"
                          min="16"
                          max="100"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          placeholder="Ár"
                        />
                      </div>

                      <div>
                        <Label htmlFor="weight" className="text-foreground">Þyngd (kg) *</Label>
                        <Input
                          id="weight"
                          type="number"
                          step="0.1"
                          min="30"
                          max="300"
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          required
                          placeholder="kg"
                        />
                      </div>

                      <div>
                        <Label htmlFor="height" className="text-foreground">Hæð (cm) *</Label>
                        <Input
                          id="height"
                          type="number"
                          min="100"
                          max="250"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          required
                          placeholder="cm"
                        />
                      </div>

                      <div>
                        <Label htmlFor="activity" className="text-foreground">Aktívleiki *</Label>
                        <Select value={activity} onValueChange={setActivity} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Veldu aktívleika" />
                          </SelectTrigger>
                          <SelectContent className="z-[100]">
                            <SelectItem value="sedentary">Hvít (lítið eða ekkert æfingar)</SelectItem>
                            <SelectItem value="light">Létt (létt æfingar 1-3 daga/viku)</SelectItem>
                            <SelectItem value="moderate">Miðlungs (miðlungs æfingar 3-5 daga/viku)</SelectItem>
                            <SelectItem value="very_active">Mjög virkur (harðar æfingar 6-7 daga/viku)</SelectItem>
                            <SelectItem value="extra_active">Mjög virkur (mjög harðar æfingar, líkamleg vinna)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="goal" className="text-foreground">Markmið *</Label>
                        <Select value={goal} onValueChange={(value) => { setGoal(value); setGoalIntensity(""); }} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Veldu markmið" />
                          </SelectTrigger>
                          <SelectContent className="z-[100]">
                            <SelectItem value="lose_fat">Tapa fitu</SelectItem>
                            <SelectItem value="build_muscle">Byggja vöðva</SelectItem>
                            <SelectItem value="maintain">Halda þyngd</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {(goal === 'lose_fat' || goal === 'build_muscle') && (
                        <div>
                          <Label htmlFor="goalIntensity" className="text-foreground">Stig *</Label>
                          <Select value={goalIntensity} onValueChange={setGoalIntensity} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Veldu stig" />
                            </SelectTrigger>
                            <SelectContent className="z-[100]">
                              {goal === 'lose_fat' ? (
                                <>
                                  <SelectItem value="mild">Mild (~0.25 kg/viku)</SelectItem>
                                  <SelectItem value="moderate">Miðlungs (~0.5 kg/viku)</SelectItem>
                                </>
                              ) : (
                                <>
                                  <SelectItem value="mild">Mild (~0.25 kg/viku)</SelectItem>
                                  <SelectItem value="moderate">Miðlungs (~0.5 kg/viku)</SelectItem>
                                </>
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div>
                        <Label htmlFor="macroPreset" className="text-foreground">Makró stilling *</Label>
                        <Select 
                          value={macroPreset} 
                          onValueChange={setMacroPreset} 
                          required
                          disabled={!gender}
                        >
                          <SelectTrigger className={!gender ? "opacity-50 cursor-not-allowed" : ""}>
                            <SelectValue placeholder={gender ? "Veldu makró stillingu" : "Veldu fyrst kyn"} />
                          </SelectTrigger>
                          <SelectContent className="z-[100]">
                            {getMacroPresetOptions().length > 0 ? (
                              getMacroPresetOptions().map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))
                            ) : (
                              <div className="px-2 py-1.5 text-sm text-foreground/60">
                                Veldu fyrst kyn
                              </div>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                      Reikna út
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6 w-full">
                {/* Markmiðskaloríur á dag - Prominent card at top */}
                <Card className="bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur border border-primary/20 w-full">
                  <CardContent className="p-6">
                    <p className="text-sm text-foreground/70 mb-2 font-sans">Markmiðskaloríur á dag</p>
                    <p className="text-5xl md:text-6xl font-black text-primary mb-2 font-display">{Math.round(results.targetCalories).toLocaleString()} kcal</p>
                    <p className="text-sm text-foreground/60 font-sans">{results.caloriesDescription}</p>
                  </CardContent>
                </Card>

                {/* Makróskipting - Three macro cards */}
                <div className="space-y-4">
                  {/* Prótein */}
                  <Card className="bg-card/60 backdrop-blur border border-white/10 w-full">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-bold text-lg text-foreground mb-2">Prótein</p>
                          <p className="text-sm text-foreground/70 font-sans mb-1">
                            {results.macros.protein.percentage}% af kaloríum
                          </p>
                          <p className="text-xs text-foreground/60 font-sans">
                            Svið: {results.macros.protein.minGrams}–{results.macros.protein.maxGrams} g • {Math.round(results.macros.protein.calories)} kcal
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-4xl font-black text-foreground font-display">{results.macros.protein.grams} g</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Kolvetni */}
                  <Card className="bg-card/60 backdrop-blur border border-white/10 w-full">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-bold text-lg text-foreground mb-2">Kolvetni</p>
                          <p className="text-sm text-foreground/70 font-sans mb-1">
                            {results.macros.carbs.percentage}% af kaloríum
                          </p>
                          <p className="text-xs text-foreground/60 font-sans">
                            Svið: {results.macros.carbs.minGrams}–{results.macros.carbs.maxGrams} g • {Math.round(results.macros.carbs.calories)} kcal • Sykur: &lt; {results.macros.sugarLimit} g
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-4xl font-black text-foreground font-display">{results.macros.carbs.grams} g</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Fita */}
                  <Card className="bg-card/60 backdrop-blur border border-white/10 w-full">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-bold text-lg text-foreground mb-2">Fita</p>
                          <p className="text-sm text-foreground/70 font-sans mb-1">
                            {results.macros.fat.percentage}% af kaloríum
                          </p>
                          <p className="text-xs text-foreground/60 font-sans">
                            Svið: {results.macros.fat.minGrams}–{results.macros.fat.maxGrams} g • {Math.round(results.macros.fat.calories)} kcal • Mett fita: &lt; {results.macros.saturatedFatLimit} g
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-4xl font-black text-foreground font-display">{results.macros.fat.grams} g</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* BMR and TDEE - Two cards side by side */}
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <Card className="bg-background/50 backdrop-blur border border-white/10">
                    <CardContent className="p-4">
                      <p className="text-sm text-foreground/70 mb-1 font-sans">BMR</p>
                      <p className="text-2xl font-bold text-foreground font-display">{Math.round(results.bmr).toLocaleString()} kcal</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/50 backdrop-blur border border-white/10">
                    <CardContent className="p-4">
                      <p className="text-sm text-foreground/70 mb-1 font-sans">TDEE</p>
                      <p className="text-2xl font-bold text-foreground font-display">{Math.round(results.tdee).toLocaleString()} kcal</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Explanation paragraph */}
                <Card className="bg-background/30 backdrop-blur border border-white/10 w-full">
                  <CardContent className="p-4">
                    <p className="text-sm text-foreground/80 leading-relaxed font-sans break-words">{results.explanation}</p>
                  </CardContent>
                </Card>

                {/* Reikna aftur button */}
                <Button onClick={resetCalculator} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                  Reikna aftur
                </Button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Macros;

