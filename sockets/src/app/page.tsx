"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.mainApp}>
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarNav}>
            <ul className={styles.navList}>
              <li className={styles.navListElement}><button className={styles.navButton}><h3 className={styles.navButtonLabel}>Primera opcion</h3></button></li>
            </ul>
          </nav>
        </aside>
        <div className={styles.consoles}>
          <Consola processName="Proceso 1" />
          <Consola processName="Proceso 2" />
        </div>
      </div>
    </main>
  )
}

export function Header() {
  return (
    <header className={styles.socketsHeader}>
      <div className={styles.appName}>
        <h1 className={styles.title}>
          Sockets
        </h1>
      </div>
      <div className={styles.appNavbar}>
        <nav className={styles.appNav}>
          <ul className={styles.headerList}>
            <li className={styles.headerListElement}>
              <button className={styles.headerElement}><h2 className={styles.subtitle}>Dashboard</h2></button>
            </li>
            <li className={styles.headerListElement}>
              <button className={styles.headerElement}><h2 className={styles.subtitle}>Configuracion</h2></button>
            </li>

          </ul>
        </nav>
      </div>
    </header>

  )
}

export function Consola({ processName }: { processName: string }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={styles.console}>
      <div className={styles.consoleBar}>
        <div className={styles.spacer}></div>
        <h1 className={styles.processName}>{processName}</h1>
        <div className={styles.buttonsConsole}>
          <div className={styles.close}></div>
          <div className={styles.minimize}></div>
          <div className={styles.maximize}></div>
        </div>
      </div>
      <div className={styles.mainConsole}>
        <div className={styles.consoleLine}>
          <p className={isFocused ? undefined : styles.cursor}>{">"}</p>
          <input onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type="text"
            spellCheck="false" className={styles.consoleInput}></input>
        </div>

      </div>
    </div>
  );
}
