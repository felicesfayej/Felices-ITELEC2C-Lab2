export function TopNav() {
  return (
    <div class="top-nav" id="myTopnav">
      <a href="/archive" class="general active" id="general">General</a>
      <a href="/archive?category=2" class="friendship" id="friendship">Friendship</a>
      <a href="/archive?category=1" class="love" id="love">Love</a>
      <a href="/archive?category=3" class="sentimental" id="sentimental">Sentimental</a>
      <a href="/archive?category=4" class="misc" id="misc">Misc.</a>
    </div>
  );
}
