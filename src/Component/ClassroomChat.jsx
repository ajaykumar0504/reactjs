import { useState, useRef, useEffect } from "react";

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#0f1117",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    padding: "24px",
  },
  card: {
    width: "100%",
    maxWidth: "520px",
    background: "#1a1d27",
    borderRadius: "16px",
    border: "1px solid #2a2d3a",
    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "20px 24px",
    borderBottom: "1px solid #2a2d3a",
    background: "#141720",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  avatarTrainer: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #6c63ff, #a78bfa)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    flexShrink: 0,
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    color: "#e8eaf6",
    fontSize: "15px",
    fontWeight: "600",
    letterSpacing: "-0.01em",
    margin: 0,
  },
  headerSub: {
    color: "#5c6080",
    fontSize: "12px",
    marginTop: "2px",
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#4ade80",
    boxShadow: "0 0 6px #4ade80aa",
  },
  feed: {
    height: "360px",
    overflowY: "auto",
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    scrollbarWidth: "thin",
    scrollbarColor: "#2a2d3a transparent",
  },
  messageRow: (sender) => ({
    display: "flex",
    flexDirection: sender === "You" ? "row-reverse" : "row",
    alignItems: "flex-end",
    gap: "10px",
  }),
  avatarSmall: (sender) => ({
    width: "30px",
    height: "30px",
    borderRadius: "8px",
    background:
      sender === "Trainer"
        ? "linear-gradient(135deg, #6c63ff, #a78bfa)"
        : "linear-gradient(135deg, #0ea5e9, #38bdf8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    flexShrink: 0,
  }),
  bubble: (sender) => ({
    maxWidth: "72%",
    padding: "10px 14px",
    borderRadius: sender === "You" ? "14px 4px 14px 14px" : "4px 14px 14px 14px",
    background:
      sender === "You"
        ? "linear-gradient(135deg, #6c63ff, #7c72ff)"
        : "#22253a",
    color: sender === "You" ? "#ffffff" : "#c8cce8",
    fontSize: "14px",
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
    border: sender === "You" ? "none" : "1px solid #2e3148",
    wordBreak: "break-word",
  }),
  senderLabel: (sender) => ({
    fontSize: "11px",
    color: "#5c6080",
    marginBottom: "4px",
    textAlign: sender === "You" ? "right" : "left",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
  }),
  bubbleWrap: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "72%",
  },
  inputArea: {
    padding: "16px 24px 20px",
    borderTop: "1px solid #2a2d3a",
    background: "#141720",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  input: {
    flex: 1,
    background: "#1a1d27",
    border: "1px solid #2a2d3a",
    borderRadius: "10px",
    padding: "10px 14px",
    color: "#e8eaf6",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
  },
  sendBtn: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #6c63ff, #7c72ff)",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "opacity 0.15s, transform 0.1s",
  },
  sendBtnDisabled: {
    opacity: 0.35,
    cursor: "not-allowed",
  },
};

const TRAINER_EMOJI = "🎓";
const YOU_EMOJI = "👤";

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "Trainer",
    text: "Welcome to the classroom! Feel free to ask me anything. I'm here to help you learn. ",
  },
];

export default function ClassroomChat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const feedRef = useRef(null);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "You", text: input.trim() },
    ]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const isEmpty = !input.trim();

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.avatarTrainer}>{TRAINER_EMOJI}</div>
          <div style={styles.headerText}>
            <p style={styles.headerTitle}>Classroom Chat</p>
            <p style={styles.headerSub}>Trainer is online</p>
          </div>
          <div style={styles.statusDot} />
        </div>

        <div ref={feedRef} style={styles.feed}>
          {messages.map((msg) => (
            <div key={msg.id} style={styles.messageRow(msg.sender)}>
              <div style={styles.avatarSmall(msg.sender)}>
                {msg.sender === "Trainer" ? TRAINER_EMOJI : YOU_EMOJI}
              </div>
              <div style={styles.bubbleWrap}>
                <div style={styles.senderLabel(msg.sender)}>{msg.sender}</div>
                <div style={styles.bubble(msg.sender)}>{msg.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.inputArea}>
          <input
            style={styles.input}
            type="text"
            placeholder="Type a message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={(e) => (e.target.style.borderColor = "#6c63ff")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2d3a")}
          />
          <button
            style={{
              ...styles.sendBtn,
              ...(isEmpty ? styles.sendBtnDisabled : {}),
            }}
            onClick={sendMessage}
            disabled={isEmpty}
            aria-label="Send message"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 2L11 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}