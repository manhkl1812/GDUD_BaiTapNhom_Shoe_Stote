import React from "react";

function Pagination({
  page,
  totalPages,
  onPageChange,
  showSinglePage = false,
}) {
  if (!totalPages) return null;
  if (totalPages <= 1 && !showSinglePage) return null;

  const pages = [];

  if (totalPages <= 7) {
    for (let index = 1; index <= totalPages; index += 1) {
      pages.push(index);
    }
  } else {
    pages.push(1);

    if (page > 3) {
      pages.push("left-ellipsis");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let index = start; index <= end; index += 1) {
      pages.push(index);
    }

    if (page < totalPages - 2) {
      pages.push("right-ellipsis");
    }

    pages.push(totalPages);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        marginTop: 24,
        marginBottom: 10,
        flexWrap: "wrap",
      }}
    >
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        style={{
          width: 34,
          height: 34,
          border: "1px solid #ddd",
          borderRadius: "50%",
          background: page === 1 ? "#f5f5f5" : "#fff",
          cursor: page === 1 ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          lineHeight: 1,
        }}
      >
        &lt;
      </button>

      {pages.map((item) => {
        if (typeof item !== "number") {
          return (
            <span
              key={item}
              style={{
                minWidth: 20,
                textAlign: "center",
                color: "#666",
                fontSize: 14,
              }}
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            style={{
              width: 34,
              height: 34,
              border: "1px solid #ddd",
              borderRadius: "50%",
              background: item === page ? "#111" : "#fff",
              color: item === page ? "#fff" : "#111",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              lineHeight: 1,
              padding: 0,
            }}
          >
            {item}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        style={{
          width: 34,
          height: 34,
          border: "1px solid #ddd",
          borderRadius: "50%",
          background: page === totalPages ? "#f5f5f5" : "#fff",
          cursor: page === totalPages ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          lineHeight: 1,
        }}
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
