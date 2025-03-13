import * as React from "react";

export const EmailTemplate = ({ FullName,Phone ,Date,Adults,Children}) => (
<div>
    
    <p><strong>Mon nom est : </strong>{FullName}</p>
    <p>Réserver une table :</p>
    <div>
      <p><strong>Nom : </strong>{FullName}</p>
      <p><strong>Numéro de téléphone : </strong>{Phone}</p> 
      <p><strong>Date : </strong>{Date}</p>
      <p><strong>Adults : </strong>{Adults}</p>
      <p><strong>Children : </strong>{Children}</p>
    </div>
  </div>
);
