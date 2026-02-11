import { useState } from "react";

function App() {
  const [fileData, setFileData] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchOSData = async (endpoint, label) => {
    try {
      setLoading(true);
      setStatus(`⏳ Processing ${label}...`);
      setFileData("");

      const res = await fetch(`http://localhost:5000/${endpoint}`);
      const data = await res.json();

      let output = data.message;

      // Convert memory to GB if memory endpoints
      if (endpoint === "totalmem" || endpoint === "freemem") {
        const gb = (parseInt(data.message) / (1024 ** 3)).toFixed(2);
        output = `${gb} GB`;
      }

      // Format JSON nicely for user info
      if (endpoint === "user") {
        output = JSON.stringify(JSON.parse(data.message), null, 2);
      }

      setFileData(output);
      setStatus(`✅ ${label} executed successfully`);
    } catch (error) {
      setStatus(`❌ Failed to execute ${label}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <nav style={styles.nav}>
          <img
            src="https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2022%2F01%2FHome-logo-design-on-transparent-background-PNG.png&w=3840&q=75"
            alt="logo"
            style={styles.logo}
          />
          <h3>Home Work</h3>
        </nav>

        <h3>Operating System Panel</h3>

        <div style={styles.btnGroup}>
          <button
            disabled={loading}
            onClick={() => fetchOSData("user", "User Info")}
            style={styles.btn}
          >
            User Info
          </button>

          <button
            disabled={loading}
            onClick={() => fetchOSData("hostname", "Host Name")}
            style={styles.btn}
          >
            Host Name
          </button>

          <button
            disabled={loading}
            onClick={() => fetchOSData("totalmem", "Total Memory")}
            style={styles.btn}
          >
            Total Memory
          </button>

          <button
            disabled={loading}
            onClick={() => fetchOSData("freemem", "Free Memory")}
            style={styles.btn}
          >
            Free Memory
          </button>

          <button
            disabled={loading}
            onClick={() => fetchOSData("arch", "System Architecture")}
            style={styles.btn}
          >
            System Architecture
          </button>
        </div>

        {/* Status */}
        {status && (
          <div style={styles.status}>
            <p>{status}</p>
          </div>
        )}

        {/* Output */}
        {fileData && (
          <div style={styles.output}>
            <h4>📄 Fetched Information:</h4>
            <pre style={styles.pre}>{fileData}</pre>
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
    width: "500px",
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)"
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
  btnGroup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px"
  },
  btn: {
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #ccc",
    background: "#f0f4ff"
  },
  status: {
    marginTop: "12px",
    fontWeight: "bold"
  },
  output: {
    marginTop: "15px",
    padding: "12px",
    background: "#eef2ff",
    borderRadius: "6px"
  },
  pre: {
    whiteSpace: "pre-wrap",
    wordWrap: "break-word"
  }
};

export default App;
