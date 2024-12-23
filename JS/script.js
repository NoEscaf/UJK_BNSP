const model = {
  services: [
    { name: "Commercial Printing", image: "../image/TechNova1.jpg" },
    { name: "Newspaper Printing", image: "../image/TechNova1.jpg" },
    { name: "Packaging Printing", image: "../image/TechNova1.jpg" },
  ],
  about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur magnam omnis in. Voluptatibus nostrum dolor beatae rem error. Ipsam, quod delectus. Dignissimos aliquid autem eveniet beatae nihil distinctio earum.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam alias deleniti sit amet mollitia! Sint, adipisci debitis similique esse repellendus ex error voluptatum laborum labore itaque dolores veniam placeat officiis eaque vero, deleniti vitae in at? Nostrum enim quaerat laborum?\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odio modi dolores, molestiae nam commodi quia quis suscipit enim, nostrum impedit voluptatem fugit sed quos officiis minima vitae ratione. Cumque!",
  footer: "&copy; 2024 TechNova",
};

// Fungsi untuk mendapatkan data dari model
function getServices() { return model.services; }
function getAbout() { return model.about; }
function getFooter() { return model.footer; }


// Controller: Memperbarui view berdasarkan model
const heroSection = document.getElementById('hero');
const servicesSection = document.getElementById('services');
const aboutSection = document.getElementById('about');
const footerSection = document.getElementById('footer');

function renderHero() {
  heroSection.innerHTML = `<h1>Welcome to TechNova</h1><p>Your technology partner for innovation.</p><button class="button-up">Learn More</button>`;
}

function renderServices() {
  const services = getServices();
  let html = `<div class="container mt-4"><div class="row">`;
  services.forEach(service => {
    html += `
      <div class="col-md-4">
        <div class="service-card">
          <img src="${service.image}" alt="${service.name}">
          <div class="card-body">
            <h3>${service.name}</h3>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div></div>`;
  servicesSection.innerHTML = html;
}

function renderAbout() {
  aboutSection.innerHTML = `<h2>TechNova</h2><p>${getAbout()}</p>`;
}

function renderFooter() {
  footerSection.innerHTML = `<p>${getFooter()}</p>`;
}

renderHero();
renderServices();
renderAbout();
renderFooter();

// Event listener untuk button (jika dibutuhkan)
const learnMoreButton = document.querySelector('.button-up');
const buttonUpAmount = 5;

learnMoreButton.addEventListener("mouseover", () => {
  learnMoreButton.style.transform = `translateY(-${buttonUpAmount}px)`;
});

learnMoreButton.addEventListener("mouseout", () => {
  learnMoreButton.style.transform = `translateY(0)`;
});