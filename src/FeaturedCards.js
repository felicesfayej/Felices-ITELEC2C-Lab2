export function FeaturedCards(props) {
    return (
      <div class="card" id="post-card" data-serialized="{&quot;id&quot;:799,&quot;category&quot;:4,&quot;name&quot;:&quot;kera&quot;,&quot;location&quot;:&quot;pasig&quot;,&quot;body&quot;:&quot;it's not my fault anymore. i know i did my best.&quot;,&quot;mood_id&quot;:9,&quot;session_id&quot;:&quot;wx1vvSXl9OLuPveByeUViIkVBi2KzOEY7Ib33CO7&quot;,&quot;status&quot;:2,&quot;views&quot;:0,&quot;created_at&quot;:&quot;2024-01-15T16:50:51.000000Z&quot;,&quot;updated_at&quot;:&quot;2024-01-15T16:50:51.000000Z&quot;,&quot;deleted_at&quot;:null,&quot;event_id&quot;:null,&quot;roles&quot;:null}" data-date="01/16/2024">
        <div className={'card__header ' + props.featObj.memo}>
  
        
          <p class="card__header__title">Receipt no.</p>
          <p class="card__header__number">{props.featObj.number}</p>
        </div>
  
        <div class="card__body" id="card">
          <p class="body__username">{props.featObj.username}</p>
          <p class="body__message">{props.featObj.message}</p>
        </div>
      </div>
    );
  }