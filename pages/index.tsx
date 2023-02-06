import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Container from "@mui/material/Container";
import LeafletMap from "@/components/UI/Map";
import { useState } from "react";
import Drawer from "@/components/UI/Drawer/Drawer";

export default function Home() {
  const [isOpen, setisOpen] = useState(true);
  const [drawerData, setDrawerData] = useState<any>();
  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent, drawerData?: any) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setisOpen((prev) => !prev);
      if (drawerData) {
        setDrawerData(drawerData);
      }
    };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container maxWidth={false} disableGutters>
          <LeafletMap onClickMarker={toggleDrawer()} />
        </Container>
        <Drawer data={drawerData} isOpen={isOpen} toggler={toggleDrawer} />
      </main>
    </>
  );
}
