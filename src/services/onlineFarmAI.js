/*
==========================================================

Farm Manager Pro
Production Online AI Service
Developer: Francis Junior

==========================================================
*/

const API_URL =
  "https://farm-manager-pro-api.onrender.com/api/ai";

let conversation = [];

export async function askOnlineFarmAI(question) {
  if (!navigator.onLine) {
    return {
      success: false,
      answer:
        "You are currently offline."
    };
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: question,
        history: conversation,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return {
        success: false,
        answer:
          data.message ||
          "Unable to contact AI server.",
      };
    }

    conversation.push({
      role: "user",
      content: question,
    });

    conversation.push({
      role: "assistant",
      content: data.answer,
    });

    if (conversation.length > 20) {
      conversation =
        conversation.slice(-20);
    }

    return {
      success: true,
      answer: data.answer,
    };
  } catch (error) {
    console.error("AI Error:", error);

    return {
      success: false,
      answer:
        "Unable to connect to the AI server. Please check your internet connection and try again.",
    };
  }
}

export function clearConversation() {
  conversation = [];
}