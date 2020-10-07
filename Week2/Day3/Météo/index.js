const meteoScrap = () =>{
  fetch("https://api.weatherbit.io/v2.0/history/daily?city=Lyon&country=France&start_date=2020-10-06&end_date=2020-10-07&lang=fr&key=26373e9cb71944818947a49192c4b004")
  .then((response) => response.json())
  .then((data) => setInformations(data))
  .catch((error) => console.error(`error: ${error}`))
}

const setInformations = (data) => {
  console.log(data);
  document.getElementsByTagName("section")[0].innerHTML += `
  <div class="widget">
    <div>
        <div class="date">
            Mercredi 7 octobre 2020,
        </div>
        <div class="city">
            ${data.city_name}
        </div>
        <div class="temp">
          <small>min:</small> ${data.data[0].min_temp}&deg;
          <small>max:</small> ${data.data[0].max_temp}&deg;
        </div>
    </div>
    <div class="right-panel panel">
        <img src="https://s5.postimg.cc/lifnombwz/mumbai1.png" alt="" width="160">
    </div>
  </div>
  `;
}

meteoScrap()
