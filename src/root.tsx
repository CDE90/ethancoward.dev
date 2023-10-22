// @refresh reload
import "./root.css";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Ethan Coward</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <Link rel="manifest" href="/site.webmanifest" />
        <Meta name="msapplication-TileColor" content="#2d89ef" />
        <Meta name="theme-color" content="#12e4f3" />
        <Link rel="preconnect" href="https://rsms.me/" />
        <Link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script defer src="http://localhost:3000/script.js" />
        {/* <script defer src="https://litics.ecwrd.com/script.js" /> */}
        {/* <script
          defer
          data-domain="ethancoward.dev"
          src="https://plausible.io/js/script.js"
        /> */}
      </Head>
      <Body class="bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-gray-200">
        <Suspense>
          <ErrorBoundary>
            <NavBar />
            <main class="mt-24">
              <Routes>
                <FileRoutes />
              </Routes>
              <div class="h-16 w-full" />
            </main>
            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
