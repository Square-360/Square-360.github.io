import React from "react";
import FormCard from "./FormCard";

function FormSection() {
  return (
    <section className="form-section">
      <div className="contianer">
        <div className="sm:pt-[150px] sm:pb-[120px] lg:pt-[200px] lg:pb-[170px]">
          <h1 className="page-title">Всегда на связи</h1>
          <FormCard />
        </div>
      </div>
    </section>
  );
}

export default FormSection;
