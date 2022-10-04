import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../css/components/Steps.scss";
import Button from "../base-components/Button";
import TextBox from "../base-components/TextBox";
import Header from "../onboarding/Header";

function StepOne({
  fullName,
  setFullName,
  displayName,
  setDisplayName,
  setStep,
}) {
  const { t } = useTranslation();
  const [showError, setShowError] = useState(false);

  return (
    <div className="step-one flex-column-center">
      <Header
        className="header"
        title={t("onboarding.step1.title")}
        subtitle={t("onboarding.step1.subtitle")}
      ></Header>
      <div className="form">
        <TextBox
          value={fullName}
          setValue={setFullName}
          error={showError && fullName.length === 0}
          placeholder={t("common.full_name_ph")}
          label={t("common.full_name")}
          type={"text"}
        />
        <TextBox
          value={displayName}
          setValue={setDisplayName}
          error={showError && displayName.length === 0}
          placeholder={t("common.display_name_ph")}
          label={t("common.display_name")}
          type={"text"}
        />
        <Button
          name={t("common.create_workspace")}
          type={"primary"}
          width={"100%"}
          onClick={handleSubmit}
        ></Button>
      </div>
    </div>
  );

  function handleSubmit() {
    if (fullName.length === 0 || displayName.length === 0) {
      setShowError(true);
    } else setStep(2);
  }
}

export default StepOne;
