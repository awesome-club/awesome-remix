import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import antStyles from 'antd/dist/reset.css';
import appStyles from "~/styles/app.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: antStyles },
    { rel: "stylesheet", href: appStyles }
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "2023 Reading List",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
