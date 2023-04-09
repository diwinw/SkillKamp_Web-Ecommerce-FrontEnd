import React, { useState } from "react";
import "./ChatBot.css";
function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, is there anything I can help you with?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const botResponse = getBotResponse(inputValue);
    const newMessage = { message: inputValue, sender: "user" };
    const newBotMessage = { message: botResponse, sender: "bot" };

    setMessages([...messages, newMessage, newBotMessage]);
    setInputValue("");
  };

  function getBotResponse(userMessage) {
    const words = userMessage.split(" ");

    if (
      userMessage.toLowerCase().includes("hi") ||
      userMessage.toLowerCase().includes("hello")
    ) {
      return "Hello there! How can I assist you today?";
    }
    if (
      words.includes("product") ||
      words.includes("shop") ||
      words.includes("buy")
    ) {
      return "Our ecommerce store offers a wide selection of products. What are you looking for specifically?";
    }

    if (words.includes("shipping") || words.includes("delivery")) {
      return "We offer fast and reliable shipping options. What is your zip code?";
    }

    if (words.includes("payment") || words.includes("pay")) {
      return "We accept all major credit cards and PayPal. Which payment method would you prefer?";
    }

    if (words.includes("dress") || words.includes("dresses")) {
      return "We have a beautiful collection of dresses to choose from. What type of dress are you looking for - casual, formal, or something else?";
    }

    if (words.includes("casual")) {
      return "Our casual dress collection is perfect for everyday wear. What is your size and preferred color?";
    }

    if (words.includes("formal")) {
      return "Our formal dress collection includes elegant and stylish options for any occasion. What is your size and preferred color?";
    }

    if (words.includes("color") || words.includes("size")) {
      return "We have a range of sizes and colors available. Which size and color would you prefer for your dress?";
    }

    if (words.includes("price") || words.includes("cost")) {
      return "Our dresses range in price from $50 to $500, depending on the style and designer. What is your budget?";
    }
    if (words.includes("recommend")) {
      return "Based on your preferences, I recommend our newest line of shoes. They're comfortable, stylish, and perfect for everyday wear!";
    }

    return `You said: "${userMessage}". I'm sorry, I'm not sure I understand. Could you please rephrase your question or provide more details?`;
  }

  return (
    <div>
      <ul className="chat">
        {messages.map((message, index) => (
          <li key={index} className={message.sender === "bot" ? "bot" : "user"}>
            <div>{message.sender === "bot" ? "Customer Serivce" : "You"}</div>
            <div className="bubble">{message.message}</div>
          </li>
        ))}
      </ul>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
