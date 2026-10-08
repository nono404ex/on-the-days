const messages = [
  "kuliah boleh dikejar, tapi diri sendiri jangan ditinggal.",
  "nggak semua hari harus produktif. yang penting kamu tetap jalan.",
  "kalau hari ini berat, kerjain satu hal dulu. sisanya nyusul.",
  "jangan lupa, kamu juga bagian dari hal yang harus kamu jaga."
];

const quotes = [
  "kamu nggak harus menyelesaikan semuanya hari ini.",
  "pelan bukan berarti berhenti.",
  "istirahat dulu kalau memang perlu. tugas bisa nunggu beberapa jam.",
  "jaga badanmu. otak juga butuh tempat yang sehat buat kerja.",
  "semoga hari ini ada satu hal kecil yang bikin kamu senyum."
];

const lead = document.querySelector("#message");
const quote = document.querySelector("#quote p");
const btn = document.querySelector("#encourage");

btn.addEventListener("click", () => {
  const next = messages[Math.floor(Math.random() * messages.length)];
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  lead.textContent = next;
  quote.textContent = q;
});

document.querySelectorAll(".reminder").forEach(card => {
  card.addEventListener("click", () => {
    quote.textContent = card.dataset.text;
  });
});
