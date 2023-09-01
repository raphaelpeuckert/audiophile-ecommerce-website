import React from 'react';

export default function Category({ match }) {
  // Hier kannst du die Produktinformationen basierend auf dem match-Objekt anzeigen.
  const productId = match.params.productId;

  return (
    <div>
      <h2>Produktseite für Produkt ID {productId}</h2>
      {/* Hier kannst du die Produktinformationen anzeigen */}
    </div>
  );
};
