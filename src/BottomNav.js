export function BottomNav() {
  return (
    <div class="desktop-nav" id="myNavbar">
      <div class="desktop-nav-left">
        <a href="https://draft143.com" class="Bold_Gravity desktop-nav-left__logo">
          <img src="https://draft143.com/images/logo/draft143_logo_withText.png" class="desktop-nav-left__img" alt="logo" />
        </a>
      </div>

      <div class="desktop-nav-middle">
        <a href="https://draft143.com/archive" class="desktop-nav-middle__link desktop-nav-middle__link--active">Archive</a>
        <a href="https://draft143.com/events" class="desktop-nav-middle__link desktop-nav-middle_link--events">#Events ✨</a>
        <a href="https://draft143.com/about" class="desktop-nav-middle__link">About</a>
        <a href="https://draft143.com/terms" class="desktop-nav-middle__link">Terms of Submission</a>
      </div>

      <div class="desktop-nav-right">
        <a href="https://draft143.com/submit">
          <button class="desktop-nav-right__button desktop-nav-right__button--submit GravityRegular" fdprocessedid="o4q9q">Submit an entry</button>
        </a>
      </div>

    </div>
  );
}
