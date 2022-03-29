import React from "react";

function ErrorText({dirty, error}) {
  return (
    <div>
      {dirty && error && (
        <div style={{ color: "red", marginBottom: 12 }}>{error}</div>
      )}
    </div>
  );
}

export default ErrorText;
