const screens = [...document.querySelectorAll(".screen")]

const dots = [...document.querySelectorAll(".dot")]

const music = document.getElementById("music")

const musicToggle = document.getElementById("musicToggle")

const openButton = document.getElementById("openButton")


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) {
        return
      }

      entry.target.classList.add("active")

      const index = screens.indexOf(entry.target)

      dots.forEach((dot, i) => {

        dot.classList.toggle(
          "active",
          i === index
        )

      })

    })

  },
  {
    threshold: 0.55
  }
)


screens.forEach(screen => {
  observer.observe(screen)
})


openButton.addEventListener("click", async () => {

  try {

    music.volume = 0.35

    await music.play()

    musicToggle.classList.add("playing")

  } catch (error) {

    console.log("music blocked:", error)

  }

  document
    .getElementById("message")
    .scrollIntoView({
      behavior: "smooth"
    })

})


musicToggle.addEventListener("click", async () => {

  if (music.paused) {

    try {

      music.volume = 0.35

      await music.play()

      musicToggle.classList.add("playing")

    } catch (error) {

      console.log("music blocked:", error)

    }

  } else {

    music.pause()

    musicToggle.classList.remove("playing")

  }

})


document
  .querySelectorAll("[data-next]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const target =
        document.getElementById(
          button.dataset.next
        )

      target.scrollIntoView({
        behavior: "smooth"
      })

    })

  })


dots.forEach(dot => {

  dot.addEventListener("click", () => {

    const target =
      screens[
        Number(dot.dataset.target)
      ]

    target.scrollIntoView({
      behavior: "smooth"
    })

  })

})


document
  .getElementById("needed")
  .addEventListener("click", () => {

    document.getElementById(
      "neededText"
    ).textContent =
      "maybe you did."

  })


const randomMessages = [

  "you’re doing better than you think.",

  "one bad day doesn't erase all the good ones.",

  "you don't need to be perfect to be proud of yourself.",

  "resting doesn't make you less ambitious.",

  "some things take time. let them.",

  "you’re allowed to be proud of yourself before everything is finished.",

  "good luck on your uts. you got this.",

  "trust what you've learned.",

  "one question at a time. don't overthink it.",

  "you don't need to know everything to do well.",

  "semoga ujiannya lebih baik dari yang kamu bayangin.",

  "jangan biarin satu soal bikin kamu ngerasa gagal.",

  "do your best, then let the rest be the rest."

]


const randomText =
  document.getElementById("randomText")

const randomButton =
  document.getElementById("randomButton")


randomButton.addEventListener("click", () => {

  let next =
    randomMessages[
      Math.floor(
        Math.random() *
        randomMessages.length
      )
    ]

  while (
    next === randomText.textContent
  ) {

    next =
      randomMessages[
        Math.floor(
          Math.random() *
          randomMessages.length
        )
      ]

  }

  randomText.style.opacity = "0"

  setTimeout(() => {

    randomText.textContent = next

    randomText.style.opacity = "1"

  }, 180)

})


randomText.style.transition =
  "opacity .18s ease"