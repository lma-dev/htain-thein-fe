"use client";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Layout from "../../../components/layout";
import SettingTab from "../../../components/Tab/SettingTab";

const Setting = () => {
  return (
    <Layout lang={params.locale}>
      <div className="flex flex-col">
        <BreadCrumb lang={params.locale} title="Setting" />
        <div className="flex justify-center">
          <SettingTab />
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
