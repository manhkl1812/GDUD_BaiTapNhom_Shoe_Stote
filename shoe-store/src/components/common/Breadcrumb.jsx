function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.active ? "active" : ""}`}
            aria-current={item.active ? "page" : undefined}
          >
            {item.active || !item.href ? (
              item.label
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
