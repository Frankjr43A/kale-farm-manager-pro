/*
==========================================================

Farm Manager Pro
Production Online AI Service
Developer: Francis Junior

==========================================================
*/

const API_URL = "http://localhost:5000/api/ai";

let conversation = [];

export async function askOnlineFarmAI(question) {
  if (!navigator.onLine) {
    return {
      success: false,
      answer: "Offline mode."
    };
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: question,
        history: conversation
      })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return {
        success: false,
        answer: data.message || "AI Server Error"
      };
    }

    conversation.push({
      role: "user",
      content: question
    });

    conversation.push({
      role: "assistant",
      content: data.answer
    });

    if (conversation.length > 20) {
      conversation = conversation.slice(-20);
    }

    return {
      success: true,
      answer: data.answer
    };

  } catch (error) {
    return {
      success: false,
      answer: error.message
    };
  }
}

export function clearConversation() {
  conversation = [];
}