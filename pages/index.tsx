import { Footer, Header, Layout } from "@components/common";
import s from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <div>
      <h2 className="my-4 text-2xl font-bold">About</h2>
      <p className="mb-1">
        Hi! I'm Bilal Hamed Abdallah, a software engineer from all around the
        world.
      </p>
      <p>
        I'm passionate by web and game development. And currently working
        on&nbsp;
        <a
          className="text-gray-700 border-b border-gray-900 hover:text-black"
          href="https://www.mongodb.com/mern-stack"
        >
          MERN
        </a>
        &nbsp; stack,&nbsp;
        <a
          className="text-gray-700 border-b border-gray-900 hover:text-black"
          href="https://www.salesforce.com/fr/products/commerce-cloud/overview/"
        >
          Salesforce Commerce Cloud
        </a>
        &nbsp;and&nbsp;
        <a
          className="text-gray-700 border-b border-gray-900 hover:text-black"
          href="https://unity.com/"
        >
          unity
        </a>
        .
      </p>

      <h2 className="my-4 text-2xl font-bold">Contact</h2>
      <p>
        Want to reach out? Contact me by&nbsp;
        <a
          className="text-gray-700 border-b border-gray-900 hover:text-black"
          href="mailto:hello@bilalhamed.me"
        >
          Email
        </a>
        &nbsp; or&nbsp;
        <a
          className="text-gray-700 border-b border-gray-900 hover:text-black"
          href="https://www.linkedin.com/in/bilaldev/"
        >
          Linkedin
        </a>
        .
      </p>
    </div>
  );
}

Home.Layout = Layout;
