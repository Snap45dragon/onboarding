import React from "react";
import { useTranslation } from "react-i18next";
import "../../css/components/LogoText.scss";

function LogoText() {
  const { t } = useTranslation();
  return (
    <div className="logo-text">
      <img src="/logo.png" alt="eden-logo" className="logo" />
      <span className="text">{t("common.eden")}</span>
    </div>
  );
}

export default LogoText;
