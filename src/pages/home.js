import React from "react";
import Header from "../components/Header";
import MyFavPanel from "../components/MyFavPanel";
import DisplayResults from "../components/DisplayResults";
import { NewsCrudContextProvider } from "../context/NewsCrudContext";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <>
       <Grid container direction="column">
        <NewsCrudContextProvider>
          <Grid
            className="header-container"
            item
            lg={1}
            md={4}
            style={{ maxHeight: "10vh" }}
          >
            <Header></Header>
          </Grid>
          <Grid className="content-container" item lg={11}>
            <Grid container direction="row" style={{ height: "100vh" }}>
              <Grid item lg={2.5} md={4} style={{ height: "100%" }}>
                <MyFavPanel
                  style={{ overflowY: "scroll" }}
                  // handleSetKeyword={handleSetKeyword}
                  // myFavourites={myFavourites}
                  // clearMyFav={clearMyFav}
                ></MyFavPanel>
              </Grid>
              <Grid item lg={9.5} md={8}>
                <DisplayResults
                // keyWord={keyWord}
                // updateMyFav={updateMyFav}
                ></DisplayResults>
              </Grid>
            </Grid>
          </Grid>
        </NewsCrudContextProvider>
      </Grid>
    </>
  );
};
export default Home;