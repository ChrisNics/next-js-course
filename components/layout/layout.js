import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
