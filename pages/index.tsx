import { Layout } from "@components/common";
import s from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <div className="container flex flex-col min-h-screen px-4 pt-10 mx-auto">
      <main className="flex-grow">
        <div className="overflow-hidden">
          <img
            className="mx-auto rounded-full"
            width={72}
            height={72}
            src="https://bilalhamed-me.s3.eu-west-3.amazonaws.com/me.jpeg"
            alt={"selfie"}
          />
        </div>

        <h1 className="text-4xl font-bold text-center">Bilal Hamed Abdallah</h1>
        <h3 className="text-center">DEVELOPMENT</h3>

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
      </main>

      <footer>
        <div className="flex items-center">
          <a
            className="text-gray-700 border-b border-gray-900 hover:text-black"
            href="https://github.com/BilalDev/bilalhamedme.git"
          >
            page repository
          </a>
          <a href="https://github.com/BilalDev/bilalhamedme.git">
            <img className="ml-2" src="/github.svg" alt="github" />
          </a>
        </div>
      </footer>
    </div>
  );
}

Home.Layout = Layout;
