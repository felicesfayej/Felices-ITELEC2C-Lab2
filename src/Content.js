import { Featured } from "./Featured";
import { CompiledPosts } from "./CompiledPosts";

export function Content() {
  return (
    <div className="content">
      <div class="search">
        <form
          method="GET"
          action="/archive"
          class="search__box"
          autocomplete="off"
        >
          <label for="search" class="search__label">
            hello.
          </label>
          <input
            type="text"
            class="search__bar"
            name="search"
            placeholder="looking for something? type it here."
            value=""
            fdprocessedid="1t3c1h"
          />
        </form>
      </div>
      <Featured />

      <CompiledPosts />
      <a id="button" class="show" href=""></a>
    </div>
  );
}
