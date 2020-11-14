import { Layout } from "@components/common";

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="overflow-hidden">
        <img
          className="rounded-full mx-auto"
          width={72}
          height={72}
          src="https://bilalhamed-me.s3.eu-west-3.amazonaws.com/me.jpeg"
          alt={"selfie"}
        />
      </div>

      <h1 className="text-4xl font-bold text-center">Bilal Hamed Abdallah</h1>
      <h3 className="text-center">DEVELOPMENT</h3>

      <h2 className="font-bold text-2xl my-4">About</h2>
      <p className="mb-1">
        Hi! I'm Bilal Hamed Abdallah, a software engineer from all around the
        world.
      </p>
      <p>
        I'm passionate by web development. And currently working on{" "}
        <a href="https://www.mongodb.com/mern-stack">MERN</a> stack and{" "}
        <a href="https://www.salesforce.com/fr/products/commerce-cloud/overview/">
          Salesforce Commerce Cloud
        </a>
        .
      </p>

      <h2 className="font-bold text-2xl my-4">Contact</h2>
      <p>
        Want to reach out? Contact me by{" "}
        <a href="mailto:hello@bilalhamed.me">Email</a> or{" "}
        <a href="https://www.linkedin.com/in/aslidev/">Linkedin</a>.
      </p>
    </div>
  );
}

Home.Layout = Layout;
