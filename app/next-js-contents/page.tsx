"use client";

import { useState } from "react";
import Link from "next/link";
import BackToHome from "../components/BackToHome";



export default function NextJSContents() {
  const [isOpen, setIsOpen] =useState(false);
    return (
      <div className="container ">
        <h1 className="text-4xl font-bold mt-8">Next.js</h1>
        <p className="font-mono mb-4">Next.js is a framework for building server-side rendered React applications.</p>
        {/* JS only */}
        <details>
            <summary className="text-2xl font-bold space-y-2">
              React Fundations
              <Link href="/next-js-contents/react-fundations" className="hover:underline">React Fundations</Link>
            </summary>    

            <ul className="font-mono space-y-2">
                <li>
                    <Link href="/next-js-contents/react-fundations" className="hover:underline">React Fundations</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/updating-ui-with-javascript" className="hover:underline">Upating UI with JavaScript</Link>
                </li>
            </ul>
        </details>

        <div className="mt-8">
          --------------------------------------------------------------
        </div>
        {/* useState custom */}
        <nav>
          <div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-bold space-y-2 hover:underline"
              >
                {isOpen ? "▼" : "▶"} React Fundations 
              </button>

              {isOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <Link href="/next-js-contents/react-fundatins" className="hover:underline">
                    Chapter 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/react-fundatins" className="hover:underline">
                    Chapter 2
                    </Link>
                  </li>
                </ul>
              )}
          </div>
        </nav>
        <BackToHome />
    </div>
  );
}
