import { FeaturedCards } from "./FeaturedCards";
import { featuredPost } from "./featuredPost";

export function Featured(props) {
  return (
    <div className="featured">
      <h1 class="title">Featured Entries</h1>
      <div className="card-container">
        {featuredPost.map((entry) => (
          <FeaturedCards featObj={entry} key={entry.number} />
        ))}
      </div>
    </div>
  );
}
