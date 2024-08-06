"use client";
import BreadCrumb from "../../../components/BreadCrumb/Breadcrumb";
import Layout from "../../../components/layout";
import SettingTab from "../../../components/Tab/SettingTab";

const Setting = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <BreadCrumb title="Setting" />
        <div className="flex justify-center">
          <SettingTab />
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
