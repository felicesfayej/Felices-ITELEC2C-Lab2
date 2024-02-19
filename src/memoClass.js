const memoClass = (memo) => {
  // conditional rendering lab activity 3
  let memoClass;
  switch (memo) {
    case "friendship":
      memoClass = "friendship-memo";
      break;
    case "love":
      memoClass = "love-memo";
      break;
    case "sentimental":
      memoClass = "sentimental-memo";
      break;
    case "misc":
      memoClass = "misc-memo";
      break;
    default:
      memoClass = "memo";
  }
  return memoClass;
};

export default memoClass;
