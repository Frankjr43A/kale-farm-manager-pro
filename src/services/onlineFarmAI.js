/*
==========================================================

Farm Manager Pro
Production Online AI Service (Debug)

Developer : Francis Junior

==========================================================
*/

const API_URL =
  "https://farm-manager-pro-api.onrender.com/api/ai";

let conversation = [];

export async function askOnlineFarmAI(question) {
  if (!navigator.onLine) {
    return {
      success: false,
      answer: "❌ Device is offline."
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

    const text = await response.text();

    let data = {};

    try {
      data = JSON.parse(text);
    } catch {
      return {
        success: false,
        answer:
          "❌ Server returned invalid JSON:\n\n" + text
      };
    }

    if (!response.ok) {
      return {
        success: false,
        answer:
          `❌ HTTP ${response.status}\n\n${data.message}`
      };
    }

    if (!data.success) {
      return {
        success: false,
        answer:
          "❌ " + data.message
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
      conversation =
        conversation.slice(-20);
    }

    return {
      success: true,
      answer: data.answer
    };

  } catch (error) {

    return {
      success: false,
      answer:
        "❌ NETWORK ERROR\n\n" +
        error.message
    };

  }
}

export function clearConversation() {
  conversation = [];
}