const farmKnowledge = {
  tomatoes: [
    {
      name: "Early Blight",
      symptoms: [
        "yellow leaves",
        "brown spots",
        "concentric rings",
      ],
      treatment:
        "Spray Mancozeb or Chlorothalonil every 7 days and remove infected leaves.",
      prevention:
        "Rotate crops and avoid wet foliage.",
    },

    {
      name: "Late Blight",
      symptoms: [
        "dark lesions",
        "white mold",
        "black spots",
      ],
      treatment:
        "Apply Ridomil Gold or copper fungicide immediately.",
      prevention:
        "Avoid overhead irrigation and improve air circulation.",
    },

    {
      name: "Bacterial Wilt",
      symptoms: [
        "wilting",
        "sudden collapse",
      ],
      treatment:
        "Remove infected plants and improve drainage.",
      prevention:
        "Practice crop rotation and use resistant varieties.",
    },

    {
      name:
        "Fusarium Wilt",
      symptoms: [
        "yellowing",
        "one side wilt",
      ],
      treatment:
        "Remove infected plants. No effective chemical treatment.",
      prevention:
        "Plant resistant varieties and rotate crops.",
    },

    {
      name:
        "Tomato Mosaic Virus",
      symptoms: [
        "mosaic leaves",
        "curling leaves",
      ],
      treatment:
        "Remove infected plants immediately.",
      prevention:
        "Disinfect tools and control aphids.",
    },
  ],

  kale: [
    {
      name: "Black Rot",
      symptoms: [
        "yellow v shape",
        "black veins",
      ],
      treatment:
        "Remove infected plants and spray copper fungicide.",
      prevention:
        "Use certified seed and avoid overhead irrigation.",
    },

    {
      name:
        "Downy Mildew",
      symptoms: [
        "yellow patches",
        "gray mold",
      ],
      treatment:
        "Apply copper fungicide.",
      prevention:
        "Improve airflow and avoid wet leaves.",
    },

    {
      name:
        "Powdery Mildew",
      symptoms: [
        "white powder",
      ],
      treatment:
        "Apply sulphur fungicide.",
      prevention:
        "Improve spacing and airflow.",
    },

    {
      name: "Clubroot",
      symptoms: [
        "swollen roots",
        "stunted growth",
      ],
      treatment:
        "No cure. Remove infected plants.",
      prevention:
        "Increase soil pH and rotate crops.",
    },

    {
      name:
        "Aphid Infestation",
      symptoms: [
        "curled leaves",
        "sticky leaves",
        "small insects",
      ],
      treatment:
        "Spray neem or recommended insecticide.",
      prevention:
        "Control weeds and inspect plants regularly.",
    },
  ],

  poultry: [
    {
      name:
        "Newcastle Disease",
      symptoms: [
        "twisted neck",
        "green diarrhea",
        "paralysis",
      ],
      treatment:
        "No cure. Isolate affected birds and vaccinate healthy birds immediately.",
      prevention:
        "Vaccinate according to schedule and improve biosecurity.",
    },

    {
      name:
        "Coccidiosis",
      symptoms: [
        "bloody diarrhea",
        "blood in droppings",
        "weak birds",
      ],
      treatment:
        "Treat with Amprolium and keep litter dry.",
      prevention:
        "Maintain dry litter and use anticoccidials.",
    },

    {
      name:
        "Fowl Typhoid",
      symptoms: [
        "yellow diarrhea",
        "depression",
      ],
      treatment:
        "Consult a veterinarian for antibiotics.",
      prevention:
        "Maintain hygiene and vaccination programs.",
    },

    {
      name:
        "Infectious Bronchitis",
      symptoms: [
        "coughing",
        "sneezing",
        "gasping",
      ],
      treatment:
        "Provide supportive care and improve ventilation.",
      prevention:
        "Vaccinate and maintain good biosecurity.",
    },

    {
      name:
        "Fowl Pox",
      symptoms: [
        "scabs",
        "skin lesions",
      ],
      treatment:
        "No specific treatment. Prevent secondary infections.",
      prevention:
        "Vaccinate and control mosquitoes.",
    },

    {
      name:
        "Gumboro Disease",
      symptoms: [
        "watery diarrhea",
        "trembling",
      ],
      treatment:
        "Provide supportive care and electrolytes.",
      prevention:
        "Vaccinate according to schedule.",
    },

    {
      name:
        "Heat Stress",
      symptoms: [
        "panting",
        "wings spread",
      ],
      treatment:
        "Provide cool water and improve ventilation.",
      prevention:
        "Reduce stocking density and provide shade.",
    },

    {
      name:
        "Worm Infestation",
      symptoms: [
        "weight loss",
        "poor growth",
      ],
      treatment:
        "Deworm birds using recommended medication.",
      prevention:
        "Regular deworming and sanitation.",
    },
  ],
};

export default farmKnowledge;