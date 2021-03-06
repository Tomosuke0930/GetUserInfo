import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [userTimeInfo, setUserTimeInfo] = useState<any>("0:00:00");

  const getUserInfo = async () => {
    // Get the all repositories info
    const allRepoInfo = await (
      await fetch("https://api.github.com/users/Tomosuke0930/repos")
    ).json();

    // Get the all repositories' name
    const repoNameLists: string[] = new Array();
    for (let i = 0; i < allRepoInfo.length; i++) {
      repoNameLists.push(allRepoInfo[i].name);
    }

    // Get the all repositories' programming language
    const langLists: string[] = new Array();
    for (let i = 0; i < repoNameLists.length; i++) {
      const lang = await (
        await fetch(
          `https://api.github.com/repos/Tomosuke0930/${repoNameLists[i]}/languages`
        )
      ).json();
      langLists.push(lang);
    }
    // Get the repositry index number has solidity lang
    const resultIndex = langLists.flatMap((item: any, i) =>
      item.Solidity ? i : []
    );

    // Get the all repo's time
    const langTimesLists: any[] = new Array();
    for (let i = 0; i < allRepoInfo.length; i++) {
      if (resultIndex.includes(i)) {
        langTimesLists.push(new Date(allRepoInfo[i].created_at));
      }
    }
    // [Problem]
    // It is not true the most oldest repo has the oldest push in the target language

    // Setting the oldest day of creating repo
    let oldestDay = langTimesLists[0];
    let oldestDayIndex = 0;
    for (let i = 0; i < langTimesLists.length; i++) {
      if (oldestDay > langTimesLists[i]) {
        oldestDayIndex = i;
      }
    }

    // Setting oldest repository name to get its pull information
    const oldestRepoName = allRepoInfo[oldestDayIndex].name;
    const oldestRepoInfo = await (
      await fetch(
        `https://api.github.com/repos/Tomosuke0930/${oldestRepoName}/pulls?state=all`
      )
    ).json();

    // Getting the most oldest push on target language
    let oldestTime;
    for (let i = oldestRepoInfo.length - 1; i >= 0; i--) {
      if (oldestRepoInfo[i].head.repo.language == "Solidity") {
        oldestTime = oldestRepoInfo[i].created_at;
        break;
      }
    }

    const formatDate = (date: Date): string => {
      const y: number = date.getFullYear();
      const m: string = ("00" + (date.getMonth() + 1)).slice(-2);
      const d: string = ("00" + date.getDate()).slice(-2);
      return `${y + "-" + m + "-" + d}`;
    };

    const nowDate: Date = new Date(formatDate(new Date())); // Today
    const setDate: Date = new Date(oldestTime); // Your oldest push time
    // Caluculating your experience (unit: Day)
    const diffDay: number = Math.floor(
      (nowDate.getTime() - setDate.getTime()) / 86400000
    );

    setUserTimeInfo(diffDay);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h1>This is User Info</h1>
        <button onClick={getUserInfo}>Button</button>
        <h2>Solidity</h2>
        <h2>Your Experienced Day is {userTimeInfo}</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
