import React, { useState } from "react"
import firebase from "firebase"
import "./ChatInput.css"
import { useStateValue } from "../stateProvider"
import db from "../firebase"

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("")
  const [{ user }] = useStateValue()

  const sendMessage = (e) => {
    e.preventDefault()

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
        userImage: user.photoURL,
      })

      setInput("")
    }
  }

  return (
    <div className="chatInput">
      <form>
        <div className="chatInput__wrapper">
          <input
            placeholder={`Message #${channelName?.toLowerCase()}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatInput
