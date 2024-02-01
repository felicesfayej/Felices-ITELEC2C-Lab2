import { Card } from "./Card";
import { postData } from "./postData";

export function CompiledPosts() {
  
  return (
    <div id="compiled-post-container" class="compiled">
      <h1 class="title"> Compiled Posts by Everyone </h1>
      <div id="post-container" class="card-container">

      {postData.map((entry) => (
        <Card postObj={entry} key={entry.number}/>
      ))}

      </div>
    </div>


  );
}


