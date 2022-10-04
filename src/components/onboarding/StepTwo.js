import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../css/components/Steps.scss";
import Button from "../base-components/Button";
import TextBox from "../base-components/TextBox";
import Header from "../onboarding/Header";

function StepOne({
  workspaceName,
  workspaceUrl,
  setWorkspaceName,
  setWorkspaceUrl,
  setStep,
}) {
  const { t } = useTranslation();
  const [showError, setShowError] = useState(false);

  return (
    <div className="step-two flex-column-center">
      <Header
        className="header"
        title={t("onboarding.step2.title")}
        subtitle={t("onboarding.step2.subtitle")}
      ></Header>
      <div className="form">
        <TextBox
          value={workspaceName}
          setValue={setWorkspaceName}
          error={showError && workspaceName.length === 0}
          placeholder={t("common.workspace_name_ph")}
          label={t("common.workspace_name")}
          type={"text"}
        />
        <TextBox
          value={workspaceUrl}
          setValue={setWorkspaceUrl}
          error={showError && workspaceUrl.length === 0}
          prefill={t("common.base_url")}
          labelHint={t("common.optional")}
          placeholder={t("common.workspace_url_ph")}
          label={t("common.workspace_url")}
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
    if (workspaceName.length === 0 || workspaceUrl.length === 0) {
      setShowError(true);
    } else setStep(3);
  }
}

export default StepOne;
