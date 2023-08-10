import { Link } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.8",
          padding: "2rem",
        }}
      >
        hello world
      </h1>
      <Link
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.8",
          padding: "2rem",
        }}
        to="/demo"
      >
        Go to demo page
      </Link>
    </>
  );
}
