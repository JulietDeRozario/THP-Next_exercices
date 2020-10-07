
const scrapVelib = () => {
  fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&rows=100&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes", {method: 'get'})
    .then((data) => data.json())
    .then((data) => exploreDatas(data.records))
    .catch((error) => console.error('error : ', error))
}

const exploreDatas = (datas) => {
  console.log(datas);
  datas.forEach(element => {
    let name = element.fields.name;
    let capacity = element.fields.capacity;
    let ebikes = element.fields.ebike;
    let mechanicals = element.fields.mechanical;
    let numbikesavailable = element.fields.numbikesavailable;
    let numdocksavailable = element.fields.numdocksavailable;
    showVelibStation(name, capacity, ebikes, mechanicals, numbikesavailable, numdocksavailable);
  });
}

const showVelibStation = (name, capacity, ebikes, mechanicals, numbikesavailable, numdocksavailable) => {
  let section = document.getElementsByTagName('section')[0];
  section.innerHTML += ` 
  <div class="card-grid-space">
    <a class="card" href="#" style="--bg-img: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmonaulnay.com%2Fwp-content%2Fuploads%2F2017%2F10%2Fvelib-rack.jpg&f=1&nofb=1)">
      <div>
        <h1>Station: ${name}</h1>
        <p>Nombre d'emplacements disponibles: ${numdocksavailable}</p>
        <p>Nombre de vélos disponibles: ${numbikesavailable}</p>
        <p>Nombre de vélos électriques: ${ebikes}</p>
        <p>Nombre de vélos mécaniques: ${mechanicals}</p>
      </div>
    </a>
  </div>
  `;
}

scrapVelib();
setInterval(() =>{
  scrapVelib();
}, 60000);