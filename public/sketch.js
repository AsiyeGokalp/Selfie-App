function setup() {
 
  noCanvas()
  const video = createCapture(VIDEO)
  video.size(500,500)
  
  let lat, lon
  const button = document.getElementById("submit")
  button.addEventListener("click", async (event) => {
    const des = document.getElementById("description").value
    video.loadPixels()//taking video and loading the pixels onto a canvas
    const image64 = video.canvas.toDataURL()//converting the video canvas to base64
    const data = { lat, lon, des, image64 }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
    const response = await fetch("/api", options)
    const json = await response.json()
    console.log(json)
  })

  if ("geolocation" in navigator) {
    console.log("geolocation available")
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude
      lon = position.coords.longitude
      document.getElementById("latitude").textContent = lat
      document.getElementById("longitude").textContent = lon
    })
  } else {
    console.log("geolocation not available")
  }
  
}
