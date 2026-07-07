export async function askOnlineFarmAI(
  question
) {
  try {
    if (!navigator.onLine) {
      return {
        success: false,
        answer:
          "No internet connection.",
      };
    }

    // Real AI will be added later.
    // Returning success:false forces
    // the app to use offline knowledge.

    return {
      success: false,
      answer: null,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      answer: null,
    };
  }
}