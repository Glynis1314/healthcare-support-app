import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let category = "General Support";

    if (message.toLowerCase().includes("volunteer")) {
      category = "Volunteer Request";
    } else if (
      message.toLowerCase().includes("help") ||
      message.toLowerCase().includes("pain")
    ) {
      category = "Medical Support";
    } else if (message.toLowerCase().includes("appointment")) {
      category = "Appointment Query";
    }

    setResponse(
      `Thank you ${name}. Your request has been categorized as "${category}". Our team will contact you shortly.`
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Healthcare Support Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            style={styles.textarea}
            placeholder="Describe your issue or interest"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>

        {response && <p style={styles.response}>{response}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a", // dark blue/black
  },
  card: {
    backgroundColor: "#111827",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#e5e7eb",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #374151",
    backgroundColor: "#1f2933",
    color: "#e5e7eb",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "16px",
    borderRadius: "6px",
    border: "1px solid #374151",
    backgroundColor: "#1f2933",
    color: "#e5e7eb",
    minHeight: "80px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  response: {
    marginTop: "15px",
    color: "#a7f3d0",
    fontSize: "14px",
  },
};

export default App;
