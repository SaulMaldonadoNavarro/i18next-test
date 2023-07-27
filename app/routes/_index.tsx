import type { V2_MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  let { t, i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <h1>{t("WelcomeMessage")}</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            {t("QuickstartTutorial")}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            {t("JokesTutorial")}
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
          {t("RemixDocs")}
          </a>
        </li>
      </ul>
    </div>
  );
}
