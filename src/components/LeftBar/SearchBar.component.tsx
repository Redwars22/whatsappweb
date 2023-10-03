export function SearchBarComponent() {
  return (
    <div className="search-bar-container">
      <div className="search-bar-component">
        <i className="bi bi-search"></i>
        <input placeholder="Pesquisar ou começar uma nova conversa" />
      </div>
      <button>
        <i className="bi bi-filter"></i>
      </button>
    </div>
  );
}
