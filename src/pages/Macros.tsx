import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Target, 
  Scale, 
  Ruler, 
  User, 
  Utensils, 
  Flame, 
  Dna, 
  RotateCcw,
  Info
} from "lucide-react";

// Configuration - Goal intensity using fixed calorie deficits/surpluses
const GOAL_INTENSITY_CONFIG = {
  lose_fat: {
    mild: { deficit: -250, label: 'Rólegt (~0.25 kg/viku)', description: '~0.25 kg/viku' },
    moderate: { deficit: -500, label: 'Miðlungs (~0.5 kg/viku)', description: '~0.5 kg/viku (1 lb/viku)' }
  },
  build_muscle: {
    mild: { surplus: 250, label: 'Rólegt (~0.25 kg/viku)', description: '' },
    moderate: { surplus: 500, label: 'Miðlungs (~0.5 kg/viku)', description: '' }
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
      explanation += `Fyrir Fitutap á ${goalIntensity === 'mild' ? '~0.25 kg' : '~0.5 kg'} á viku mælum við með ${targetCalories.toLocaleString()} kcal á dag (${deficit.toLocaleString()} kcal skortur). `;
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
      alert('Vinsamlegast fylltu út alla reiti.');
      return;
    }

    if ((goal === 'lose_fat' || goal === 'build_muscle') && !goalIntensity) {
      alert('Vinsamlegast veldu hraða markmiðs.');
      return;
    }

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseInt(height);

    if (ageNum < 16 || ageNum > 100) {
      alert('Aldur verður að vera á milli 16 og 100 ára.');
      return;
    }

    if (weightNum < 30 || weightNum > 300) {
      alert('Þyngd verður að vera á milli 30 og 300 kg.');
      return;
    }

    if (heightNum < 100 || heightNum > 250) {
      alert('Hæð verður að vera á milli 100 og 250 cm.');
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getMacroPresetOptions = () => {
    if (!gender) return [];
    
    // const genderPresets = MACRO_PRESETS[gender as keyof typeof MACRO_PRESETS] || MACRO_PRESETS.female;
    return [
      { value: 'balanced', label: 'Jafnvægi (Balanced)' },
      { value: 'high_protein', label: 'Hátt prótein (High Protein)' },
      { value: 'low_fat', label: 'Lág fita (Low Fat)' },
      { value: 'low_carb', label: 'Lág kolvetni (Low Carb)' }
    ];
  };

  // Dynamically update macros when preset changes in the result view
  const handlePresetChange = (newPreset: string) => {
    setMacroPreset(newPreset);
    if (results) {
      const newMacros = calculateMacros(results.targetCalories, newPreset, gender);
      setResults({
        ...results,
        macros: newMacros
      });
    }
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
        
        <main className="pt-40 md:pt-32 pb-8 md:pb-20 px-4 overflow-x-hidden">
          <div className="container mx-auto max-w-4xl w-full">
            {!results ? (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-6xl font-black mb-4 font-display">
                    <span className="text-foreground">Macros</span>{" "}
                    <span className="text-primary">Reiknivél</span>
                  </h1>
                  <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-sans">
                    Reiknaðu út orkuþörf og makróskiptingu fyrir þín markmið
                  </p>
                </div>
                <Card className="bg-card/60 backdrop-blur border border-white/10 overflow-visible w-full shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <User className="w-6 h-6 text-primary" />
                    Þínar upplýsingar
                  </CardTitle>
                </CardHeader>
                <CardContent className="overflow-visible w-full">
                  <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <div className="grid md:grid-cols-2 gap-6 w-full">
                      {/* Gender */}
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-foreground flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" /> Kyn *
                        </Label>
                        <Select value={gender} onValueChange={setGender} required>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Veldu kyn" />
                          </SelectTrigger>
                          <SelectContent className="z-[100]">
                            <SelectItem value="female">Kona</SelectItem>
                            <SelectItem value="male">Karl</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Age */}
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-foreground flex items-center gap-2">
                          <Activity className="w-4 h-4 text-primary" /> Aldur *
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          min="16"
                          max="100"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required
                          placeholder="Ár"
                          className="bg-background/50 border-white/10"
                        />
                      </div>

                      {/* Weight */}
                      <div className="space-y-2">
                        <Label htmlFor="weight" className="text-foreground flex items-center gap-2">
                          <Scale className="w-4 h-4 text-primary" /> Þyngd (kg) *
                        </Label>
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
                          className="bg-background/50 border-white/10"
                        />
                      </div>

                      {/* Height */}
                      <div className="space-y-2">
                        <Label htmlFor="height" className="text-foreground flex items-center gap-2">
                          <Ruler className="w-4 h-4 text-primary" /> Hæð (cm) *
                        </Label>
                        <Input
                          id="height"
                          type="number"
                          min="100"
                          max="250"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          required
                          placeholder="cm"
                          className="bg-background/50 border-white/10"
                        />
                      </div>

                      {/* Activity */}
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="activity" className="text-foreground flex items-center gap-2">
                          <Flame className="w-4 h-4 text-primary" /> Hreyfing *
                        </Label>
                        <Select value={activity} onValueChange={setActivity} required>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Veldu hversu mikið þú hreyfir þig" />
                          </SelectTrigger>
                          <SelectContent className="z-[100]">
                            <SelectItem value="sedentary">Kyrrseta (Lítil sem engin æfing)</SelectItem>
                            <SelectItem value="light">Létt hreyfing (1-3 dagar/viku)</SelectItem>
                            <SelectItem value="moderate">Miðlungs hreyfing (3-5 dagar/viku)</SelectItem>
                            <SelectItem value="very_active">Mikil hreyfing (6-7 dagar/viku)</SelectItem>
                            <SelectItem value="extra_active">Mjög mikil hreyfing (Líkamleg vinna + æfingar)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Goal */}
                      <div className="space-y-2">
                        <Label htmlFor="goal" className="text-foreground flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" /> Markmið *
                        </Label>
                        <Select value={goal} onValueChange={(value) => { setGoal(value); setGoalIntensity(""); }} required>
                          <SelectTrigger className="bg-background/50 border-white/10">
                            <SelectValue placeholder="Veldu markmið" />
                          </SelectTrigger>
                          <SelectContent className="z-[100]">
                            <SelectItem value="lose_fat">Missa fitu</SelectItem>
                            <SelectItem value="build_muscle">Byggja vöðva</SelectItem>
                            <SelectItem value="maintain">Halda þyngd</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Intensity */}
                      {(goal === 'lose_fat' || goal === 'build_muscle') && (
                        <div className="space-y-2 animate-fade-in">
                          <Label htmlFor="goalIntensity" className="text-foreground flex items-center gap-2">
                            <Activity className="w-4 h-4 text-primary" /> Hraði *
                          </Label>
                          <Select value={goalIntensity} onValueChange={setGoalIntensity} required>
                            <SelectTrigger className="bg-background/50 border-white/10">
                              <SelectValue placeholder="Veldu hraða" />
                            </SelectTrigger>
                            <SelectContent className="z-[100]">
                              {goal === 'lose_fat' ? (
                                <>
                                  <SelectItem value="mild">Rólegt (~0.25 kg/viku)</SelectItem>
                                  <SelectItem value="moderate">Miðlungs (~0.5 kg/viku)</SelectItem>
                                </>
                              ) : (
                                <>
                                  <SelectItem value="mild">Rólegt (~0.25 kg/viku)</SelectItem>
                                  <SelectItem value="moderate">Miðlungs (~0.5 kg/viku)</SelectItem>
                                </>
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      {/* Macro Preset */}
                      <div className="space-y-2">
                        <Label htmlFor="macroPreset" className="text-foreground flex items-center gap-2">
                          <Utensils className="w-4 h-4 text-primary" /> Makró stilling *
                        </Label>
                        <Select 
                          value={macroPreset} 
                          onValueChange={setMacroPreset} 
                          required
                          disabled={!gender}
                        >
                          <SelectTrigger className={`bg-background/50 border-white/10 ${!gender ? "opacity-50 cursor-not-allowed" : ""}`}>
                            <SelectValue placeholder={gender ? "Veldu skiptingu" : "Veldu fyrst kyn"} />
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

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg shadow-lg shadow-primary/20">
                      Reikna
                    </Button>
                  </form>
                </CardContent>
              </Card>
              </>
            ) : (
              <div className="space-y-3 md:space-y-6 w-full animate-fade-in">
                {/* Markmiðskaloríur á dag - Prominent card at top */}
                <Card className="bg-card/60 backdrop-blur border border-white/10 w-full overflow-hidden relative">
                  <CardContent className="p-4 md:p-8 relative z-10 text-center">
                    <p className="text-sm md:text-lg text-foreground/80 mb-1 md:mb-2 font-sans font-medium tracking-wide">Markmiðskaloríur á dag</p>
                    <p className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-0 md:mb-2 font-display drop-shadow-md">{Math.round(results.targetCalories).toLocaleString()} <span className="text-xl md:text-3xl text-white/70">kcal</span></p>
                  </CardContent>
                </Card>

                {/* Macro Preset Toggle */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center">
                  {[
                    { value: 'balanced', label: 'Jafnvægi' },
                    { value: 'high_protein', label: 'Hátt prótein' },
                    { value: 'low_fat', label: 'Lág fita' },
                    { value: 'low_carb', label: 'Lág kolvetni' }
                  ].map((preset) => (
                    <Button
                      key={preset.value}
                      variant={macroPreset === preset.value ? "default" : "outline"}
                      className={`rounded-full text-xs md:text-sm py-1.5 md:py-2 px-3 md:px-4 h-8 md:h-auto ${macroPreset === preset.value ? 'bg-primary text-white hover:bg-primary/90' : 'bg-transparent border-white/20 text-foreground hover:bg-white/10 hover:text-white'}`}
                      onClick={() => handlePresetChange(preset.value)}
                    >
                      {preset.label}
                    </Button>
                  ))}
                </div>

                {/* Makróskipting - Three macro cards */}
                <div className="grid md:grid-cols-3 gap-2.5 md:gap-4">
                  {/* Prótein */}
                  <Card className="bg-card/60 backdrop-blur border border-white/10 w-full relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <CardContent className="p-3 md:p-6">
                      <div className="flex justify-between items-center mb-2 md:mb-4">
                        <p className="font-bold text-sm md:text-lg text-foreground flex items-center gap-1.5 md:gap-2">
                          <Dna className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" /> <span className="truncate">Prótein</span>
                        </p>
                        <span className="text-xs font-mono bg-blue-500/20 text-blue-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded flex-shrink-0">{results.macros.protein.percentage}%</span>
                      </div>
                      <p className="text-2xl md:text-4xl font-black text-foreground font-display mb-1 md:mb-2">{results.macros.protein.grams}g</p>
                      <Progress value={results.macros.protein.percentage} className="h-1.5 md:h-2 mb-2 md:mb-3 bg-blue-950" indicatorClassName="bg-blue-500" />
                      <div className="text-xs text-foreground/50 font-sans space-y-0.5 md:space-y-1">
                        <p>{Math.round(results.macros.protein.calories)} kcal</p>
                        <p className="text-[10px] md:text-xs">Svið: {results.macros.protein.minGrams}–{results.macros.protein.maxGrams} g</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Kolvetni */}
                  <Card className="bg-card/60 backdrop-blur border border-white/10 w-full relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <CardContent className="p-3 md:p-6">
                      <div className="flex justify-between items-center mb-2 md:mb-4">
                        <p className="font-bold text-sm md:text-lg text-foreground flex items-center gap-1.5 md:gap-2">
                          <Utensils className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" /> <span className="truncate">Kolvetni</span>
                        </p>
                        <span className="text-xs font-mono bg-green-500/20 text-green-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded flex-shrink-0">{results.macros.carbs.percentage}%</span>
                      </div>
                      <p className="text-2xl md:text-4xl font-black text-foreground font-display mb-1 md:mb-2">{results.macros.carbs.grams}g</p>
                      <Progress value={results.macros.carbs.percentage} className="h-1.5 md:h-2 mb-2 md:mb-3 bg-green-950" indicatorClassName="bg-green-500" />
                      <div className="text-xs text-foreground/50 font-sans space-y-0.5 md:space-y-1">
                        <p>{Math.round(results.macros.carbs.calories)} kcal</p>
                        <p className="text-[10px] md:text-xs">Sykur: &lt; {results.macros.sugarLimit} g</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Fita */}
                  <Card className="bg-card/60 backdrop-blur border border-white/10 w-full relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <CardContent className="p-3 md:p-6">
                      <div className="flex justify-between items-center mb-2 md:mb-4">
                        <p className="font-bold text-sm md:text-lg text-foreground flex items-center gap-1.5 md:gap-2">
                          <Flame className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0" /> <span className="truncate">Fita</span>
                        </p>
                        <span className="text-xs font-mono bg-yellow-500/20 text-yellow-300 px-1.5 md:px-2 py-0.5 md:py-1 rounded flex-shrink-0">{results.macros.fat.percentage}%</span>
                      </div>
                      <p className="text-2xl md:text-4xl font-black text-foreground font-display mb-1 md:mb-2">{results.macros.fat.grams}g</p>
                      <Progress value={results.macros.fat.percentage} className="h-1.5 md:h-2 mb-2 md:mb-3 bg-yellow-950" indicatorClassName="bg-yellow-500" />
                      <div className="text-xs text-foreground/50 font-sans space-y-0.5 md:space-y-1">
                        <p>{Math.round(results.macros.fat.calories)} kcal</p>
                        <p className="text-[10px] md:text-xs">Mett fita: &lt; {results.macros.saturatedFatLimit} g</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* BMR and TDEE - Two cards side by side */}
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <Card className="bg-background/50 backdrop-blur border border-white/10">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-foreground/70 mb-1 font-sans flex items-center gap-2"><Activity className="w-4 h-4" /> Grunnbrennsla (BMR)</p>
                        <p className="text-xs text-foreground/50">Orka sem líkami þarfnast í hvíld.</p>
                      </div>
                      <p className="text-3xl font-bold text-foreground font-display">{Math.round(results.bmr).toLocaleString()} kcal</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/50 backdrop-blur border border-white/10">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-foreground/70 mb-1 font-sans flex items-center gap-2"><Flame className="w-4 h-4" /> Heildarorka (TDEE)</p>
                        <p className="text-xs text-foreground/50">Viðhald með hreyfingu</p>
                      </div>
                      <p className="text-3xl font-bold text-foreground font-display">{Math.round(results.tdee).toLocaleString()} kcal</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* CTA Box */}
                <Card className="bg-primary/10 backdrop-blur border border-primary/20 w-full">
                  <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className="bg-primary/20 p-4 rounded-full">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-foreground mb-1">Vantar þig hjálp við að ná markmiðum þínum?</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed font-sans">
                        Ef þú vilt persónulega aðstoð og stuðning getur þú skráð þig í fjarþjálfun hjá mér.
                      </p>
                    </div>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 whitespace-nowrap">
                      <a href="/verdskra">Skoða fjarþjálfun</a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Explanation paragraph */}
                <Card className="bg-background/30 backdrop-blur border border-white/10 w-full">
                  <CardContent className="p-6 flex gap-4">
                    <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Um niðurstöðurnar</h4>
                      <p className="text-sm text-foreground/80 leading-relaxed font-sans">{results.explanation}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Reikna aftur button */}
                <Button onClick={resetCalculator} variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-white font-bold py-6 gap-2">
                  <RotateCcw className="w-4 h-4" /> Reikna aftur
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
