getData()

async function getData(){
  const response = await fetch('/api')
  const data = await response.json()
  console.log(data)
  const gallery=document.querySelector("#gallery")
  for (element of data) {
    console.log(element)
    const root = document.createElement('div')
    root.classList.add("root")
    const des =document.createElement('h3')
    des.classList.add("des")
    const geo = document.createElement('span')
    geo.classList.add("geo")
    const date = document.createElement('span')
    date.classList.add("date")
    const image = document.createElement('img')
    image.classList.add("gallery-img")

    des.textContent= `${element.des}`
    geo.textContent = `${element.lat}°,${element.lon}°`
    const dateString = new Date(element.timestamp).toLocaleString()
    date.textContent = dateString
    image.src = element.image64

    root.appendChild(des)
    root.appendChild(geo)
    root.appendChild(date)
    root.appendChild(image)
    gallery.appendChild(root)
   };

}