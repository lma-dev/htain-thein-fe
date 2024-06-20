import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Layout from "../../../components/layout";
import { useTranslations } from "next-intl";

const ContactPage = ({ params }) => {
  const t = useTranslations("Translation");

  return (
    <Layout lang={params.locale}>
      <BreadCrumb lang={params.locale} title="Contact" />
      <div className="my-6 mx-auto max-w-xl">
        <h1 className="text-3xl text-gray-600 font-extrabold text-center">
          Contact
        </h1>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 text-sm outline-blue-500 border"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 text-sm outline-blue-500 border"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4  text-sm outline-blue-500 border"
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full rounded-md px-4  text-sm pt-3 outline-blue-500 border"
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
            aria-label="button"
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
