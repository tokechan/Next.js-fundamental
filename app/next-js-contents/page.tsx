"use client";

import { useState } from "react";
import Link from "next/link";
import BackToHome from "../components/Navigation";



export default function NextJSContents() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAnimated, setIsOpenAnimated] = useState(false);

    return (
      <div className="container ">
        <h1 className="text-4xl font-bold mt-8">Next.js</h1>
        <p className="font-mono mb-4 mt-4">Next.js is a framework for building server-side rendered React applications.</p>
        {/* JS only */}
        <details>
            <summary className="text-2xl font-bold space-y-2">
              <Link href="/next-js-contents/react-fundations" className="hover:underline">React Fundations</Link>
            </summary>    

            <ul className="ml-6 mt-2 font-mono space-y-2">
                <li>
                    <Link href="/next-js-contents/Chapter1" className="hover:underline">Chapter 1: About React and Next.js</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter2" className="hover:underline">Chapter 2: Rendering User Interfaces(UI)</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter3" className="hover:underline">Chapter 3: Updating UI with JavaScript</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter4" className="hover:underline">Chapter 4: Getting Started with React</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter5" className="hover:underline">Chapter 5: Building UI with Components</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter6" className="hover:underline">Chapter 6: Displaying Data with Props</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter7" className="hover:underline">Chapter 7: Adding Interactivity with State</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter8" className="hover:underline">Chapter 8: From React to Next.js</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter9" className="hover:underline">Chapter 9: Installing Next.js</Link>
                </li>
                <li>
                    <Link href="/next-js-contents/Chapter10" className="hover:underline">Chapter 10: Server and Client Componets</Link>
                </li>
            </ul>
        </details>

        <div className="mt-8">
          --------------------------------------------------------------
        </div>
        {/* useState custom */}
        <nav>
          <div className="mt-8">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-bold space-y-2 hover:underline"
              >
                {isOpen ? "▼" : "▶"} React Fundations 
              </button>

              {isOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <Link href="/next-js-contents/Chapter1" className="hover:underline">
                      Chapter 1: About React and Next.js
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter2" className="hover:underline">
                      Chapter 2: Rendering User Interfaces(UI)
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter3" className="hover:underline">
                      Chapter 3: Updating UI with JavaScript
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter4" className="hover:underline">
                      Chapter 4: Getting Started with React
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter5" className="hover:underline">
                      Chapter 5: Building UI with Components
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter6" className="hover:underline">
                      Chapter 6: Displaying Data with Props
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter7" className="hover:underline">
                      Chapter 7: Adding Interactivity with State
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter8" className="hover:underline">
                      Chapter 8: From React to Next.js
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter9" className="hover:underline">
                      Chapter 9: Installing Next.js
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-js-contents/Chapter10" className="hover:underline">
                      Chapter 10: Server and Client Componets
                    </Link>
                  </li>
                </ul>
              )}
          </div>
        </nav>

        <div className="mt-8">
          --------------------------------------------------------------
        </div>
        
        {/* useState with Animation */}
        <nav className="mt-8">
          <div>
            <button 
              onClick={() => setIsOpenAnimated(!isOpenAnimated)}
              className="text-2xl font-bold hover:underline flex items-center gap-2"
            >
              <span className={`transition-transform duration-300 ${isOpenAnimated ? 'rotate-90' : ''}`}>
                ▶
              </span>
              React Fundations (アニメーション付き)
            </button>

            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpenAnimated ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link href="/next-js-contents/Chapter1" className="hover:underline">
                    Chapter 1: About React and Next.js
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter2" className="hover:underline">
                    Chapter 2: Rendering User Interfaces(UI)
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter3" className="hover:underline">
                    Chapter 3: Updating UI with JavaScript
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter4" className="hover:underline">
                    Chapter 4: Getting Started with React
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter5" className="hover:underline">
                    Chapter 5: Building UI with Components
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter6" className="hover:underline">
                    Chapter 6: Displaying Data with Props
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter7" className="hover:underline">
                    Chapter 7: Adding Interactivity with State
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter8" className="hover:underline">
                    Chapter 8: From React to Next.js
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter9" className="hover:underline">
                    Chapter 9: Installing Next.js
                  </Link>
                </li>
                <li>
                  <Link href="/next-js-contents/Chapter10" className="hover:underline">
                    Chapter 10: Server and Client Componets
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-8">
          --------------------------------------------------------------
        </div>
        <BackToHome />
    </div>
  );
}
