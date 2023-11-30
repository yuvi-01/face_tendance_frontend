import React, { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
 
  const [searchInput, setSearchInput] = useState("");

  const generateReport = () => {
   
    alert(`Report generated for: ${searchInput}`);
  };

  return (
    <div>
      <nav style={{ backgroundColor: "#84b985", overflow: "hidden" }}>
        <h1 style={{ textAlign: "center", padding: "20px", color: "white" }}>
          Hello Ma'am
        </h1>
      </nav>

      <div style={{ margin: "80px", textAlign: "center", marginTop: "120px" }}>
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          style={{
            padding: "14px 16px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "20px",
          }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={generateReport}
          style={{
            padding: "14px 16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Generate Report
        </button>
      </div>

      <table
        style={{
          width: "80%",
          margin: "220px auto",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "center",
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "8px",
              }}
            >
              Header 1
            </th>
            <th
              style={{
                textAlign: "center",
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "8px",
              }}
            >
              Header 2
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Data 1
            </td>
            <td
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Data 2
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Data 3
            </td>
            <td
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Data 4
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Data 5
            </td>
            <td
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Data 6
            </td>
          </tr>
          <tr>
            <td
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Data 7
            </td>
            <td
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              Data 8
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
