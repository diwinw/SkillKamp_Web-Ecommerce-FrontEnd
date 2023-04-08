import React from "react";
import { Dialogflow } from "dialogflow-fulfillment";

class ChatBot extends React.Component {
  constructor(props) {
    super(props);
    this.dialogflow = new Dialogflow({
      projectId: "YOUR_PROJECT_ID",
      privateKey: "YOUR_PRIVATE_KEY",
      clientEmail: "YOUR_CLIENT_EMAIL",
    });
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.chatbotUI = el)}>
          {/* Render the chatbot UI */}
          <form>
            <input type="text" ref={(el) => (this.chatbotInput = el)} />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}
export default ChatBot;
