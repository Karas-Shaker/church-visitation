const verses = [
  ["اذكر خالقك في أيام شبابك.","جامعة ١٢: ١"],
  ["لا تخف لأني معك. لا تتلفت لأني إلهك.","إشعياء ٤١: ١٠"],
  ["لأن حيثما اجتمع اثنان أو ثلاثة باسمي فهناك أكون في وسطهم.","متى ١٨: ٢٠"],
  ["أحبوا بعضكم بعضًا كما أحببتكم أنا.","يوحنا ١٥: ١٢"],
  ["الرب نوري وخلاصي ممن أخاف؟","مزمور ٢٧: ١"]
];
let index = 0;
document.getElementById("nextVerse").addEventListener("click", () => {
  index = (index + 1) % verses.length;
  document.getElementById("verse").textContent = verses[index][0];
  document.getElementById("reference").textContent = verses[index][1];
});
