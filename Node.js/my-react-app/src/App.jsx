import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [fileData, setFileData] = useState("");

  // WRITE to file (fs.write)
  const writeToFile = async () => {
    const res = await fetch("http://localhost:5000/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    alert(data.message);
    setMessage("");
  };

  // READ from file (fs.read)
  const readFromFile = async () => {
    const res = await fetch("http://localhost:5000/read");
    const data = await res.json();
    setFileData(data.message);
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        {/* Navbar */}
        <nav style={styles.nav}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s"
            alt="logo"
            style={styles.logo}
          />
          <h3>File System Model for Node</h3>
        </nav>

        {/* Input */}
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.textarea}
        />

        {/* Buttons */}
        <div style={styles.btnGroup}>
          <button onClick={writeToFile} style={styles.btn}>
            Write to File
          </button>

          <button onClick={readFromFile} style={styles.btn}>
            Read from File
          </button>
        </div>

        {/* Output */}
        {fileData && (
          <div style={styles.output}>
            <strong>File Content:</strong>
            <p>{fileData}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8"
  },
  box: {
    width: "400px",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px"
  },
  logo: {
    width: "35px",
    height: "35px"
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    marginBottom: "15px"
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between"
  },
  btn: {
    padding: "8px 12px",
    cursor: "pointer"
  },
  output: {
    marginTop: "15px",
    padding: "10px",
    background: "#eef2ff",
    borderRadius: "6px"
  }
};

export default App;
