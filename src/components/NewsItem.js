import React, { useState } from "react";
import { useNewsCrud } from "../context/NewsCrudContext";
import { red, purple } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";

const NewsItem = (props) => {
  const { updateMyFav } = useNewsCrud();
  const [hover, setHover] = useState(false);
  const { news } = props;

  // Fav button
  const favHandler = (myFavTitle) => {
    updateMyFav(myFavTitle);
  };

  return (
    <>
      <Card
        style={{ width: 320, height: 480 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: purple[400] }} aria-label="recipe">
              {news.source.name.charAt(0)}
            </Avatar>
          }
          title={news.source.name}
          subheader={news.publishedAt.split("T")[0]}
        />
        <CardActionArea>
          {hover ? (
            <>
              <CardContent style={{ textAlign: "center", height: 320 }}>
                <Typography variant="h6" color="text.secondary">
                  {news.title}
                </Typography>
                <Button
                  variant="contained"
                  size="medium"
                  color="warning"
                  sx={{
                    mt: 2,
                    width: "14ch",
                    textTransform: "capitalize",
                  }}
                  href={news.url}
                  target="_blank"
                  component="a"
                  rel="noopener noreferrer"
                >
                  Read More
                </Button>
              </CardContent>
            </>
          ) : (
            <>
              <CardMedia
                component="img"
                height="200"
                image={
                  news.urlToImage ??
                  "https://static8.depositphotos.com/1034557/983/i/450/depositphotos_9831932-stock-photo-news-word-cloud.jpg"
                }
                alt="News Thumbnail"
              />
              <CardContent
                style={{
                  height: 120,
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  {news.title.length > 110
                    ? news.title.substring(0, 110) + "..."
                    : news.title}
                </Typography>
              </CardContent>
            </>
          )}
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => favHandler(news.title)}
          >
            <FavoriteIcon style={{ color: red[700] }} />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default NewsItem;
