import Image from "next/image";
import styles from "./page.module.css";
import { useParams } from "next/navigation";

export default function Home() {
  const { slug } = useParams();

  return (
    <div className={styles.page}>
      {/* <Intro */}
    </div>
  );
}
