import farmKnowledge from "../data/farmKnowledge";

export function getFarmAdvice(
  category,
  symptoms
) {
  const text =
    symptoms.toLowerCase();

  let diseases = [];

  if (category === "Tomatoes") {
    diseases =
      farmKnowledge.tomatoes;
  }

  if (category === "Kale") {
    diseases =
      farmKnowledge.kale;
  }

  if (category === "Layers") {
    diseases =
      farmKnowledge.poultry;
  }

  for (const disease of diseases) {
    const matched =
      disease.symptoms.some(
        (symptom) =>
          text.includes(
            symptom.toLowerCase()
          )
      );

    if (matched) {
      return {
        success: true,
        online:
          navigator.onLine,
        disease:
          disease.name,
        treatment:
          disease.treatment,
        prevention:
          disease.prevention,
      };
    }
  }

  return {
    success: false,
    online:
      navigator.onLine,
    disease:
      "Unknown Disease",
    treatment:
      "I could not confidently identify this problem. Please consult an agricultural officer or veterinarian.",
    prevention:
      "Monitor symptoms and provide more details.",
  };
}

export async function askFarmAI(
  question
) {
  if (!navigator.onLine) {
    return {
      success: false,
      answer:
        "You are offline. Basic disease diagnosis is still available.",
    };
  }

  return {
    success: true,
    answer:
      "Internet connection detected. Online AI integration will be added in the next phase.",
  };
}