function scrapInsta() {
  fetch("https://www.instagram.com/explore/tags/premarmed/?__a=1", {method: 'get'})
    .then((data) => data.json())
    .then((data) => exploreDatas(data))
    .catch((error) => console.error('error : ', error))
}

scrapInsta();

function exploreDatas(data) {
  console.log(data.graphql.hashtag.edge_hashtag_to_media.edges[0].node);
  data.graphql.hashtag.edge_hashtag_to_media.edges.forEach(object => {
    let descriptionText = object.node.accessibility_caption
    let url = object.node.display_url
    showInstagramPost(document.getElementsByClassName('cards-wrapper')[0], url, descriptionText);  
  });
}

const showInstagramPost = (selector, URL, descriptionText) => {
  selector.innerHTML += `
  <div class="card-grid-space">
    <a class="card" href="https://www.instagram.com/explore/tags/premarmed/" style="--bg-img: url(${URL})">
      <div>
        <p>${descriptionText}</p>
      </div>
    </a>
  </div>
  `;
}
