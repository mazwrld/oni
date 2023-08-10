import { Link } from "@remix-run/react";

export default function Deme() {
  return (
    <>
      <h1
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.8",
          padding: "2rem",
        }}
      >
        demo
      </h1>
      <Link
        style={{
          fontFamily: "system-ui, sans-serif",
          lineHeight: "1.8",
          padding: "2rem",
        }}
        to="/"
      >
        home
      </Link>
    </>
  );
}
