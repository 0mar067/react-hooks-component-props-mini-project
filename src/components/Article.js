import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculate coffee cups for minutes to read
  const coffeeCupsCount = Math.ceil(minutes / 5);
  const coffeeCups = "☕️".repeat(coffeeCupsCount);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {minutes < 30 && coffeeCups} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
