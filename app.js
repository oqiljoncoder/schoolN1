// Year function
  function updateAcademicYear() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const switchDate = new Date(currentYear, 4, 30); // 30-may (4 = may)

    let startYear;

    if (today >= switchDate) {
      startYear = currentYear;
    } else {
      startYear = currentYear - 1;
    }

    const endYear = startYear + 1;

    document.getElementById("yearRange").textContent = `${startYear}–${endYear}`;
  }

  updateAcademicYear();

// Modalni ochish
  document.getElementById("openModalBtn").onclick = function () {
    document.getElementById("myModal").style.display = "block";
  };

  // Modalni yopish
  document.querySelector(".close").onclick = function () {
    document.getElementById("myModal").style.display = "none";
  };

  // Telegramga yuborish
  const modal = document.getElementById("myModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.querySelector(".close");
  const sendBtn = document.getElementById("sendBtn");

  openModalBtn.onclick = function () {
    modal.style.display = "block";
  }

  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  sendBtn.onclick = function () {
    const name = document.getElementById("userName").value.trim();
    const phone = document.getElementById("userPhone").value.trim();

    if (!name || !phone.match(/^\d{9}$/)) {
      alert("Iltimos, to‘g‘ri ma'lumot kiriting!");
      return;
    }

    const message = `📝 Yangi ro'yxatdan o'tish:\n👤 Ism: ${name}\n📞 Tel: +998${phone}`;
    const token = "7892444092:AAGc5NM6ip8QyNplrk17fIhOb1uPxTrkHmI";
    const chat_id = "8069642278"; // chat_id ni shu yerga yozing

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message
      })
    })
    .then(res => {
      if (res.ok) {
        alert("Yuborildi ✅");
        modal.style.display = "none";
        document.getElementById("userName").value = '';
        document.getElementById("userPhone").value = '';
      } else {
        alert("Xatolik yuz berdi!");
      }
    })
    .catch(err => {
      console.error(err);
      alert("Xabar yuborilmadi!");
    });
  }


  // Muroat kodlari

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const telegramToken = "7892444092:AAGc5NM6ip8QyNplrk17fIhOb1uPxTrkHmI"; // o'zingizning bot tokeningiz
    const chatId = "8069642278"; // o'zingizning chat ID yoki kanal ID

    const text = `
📝 *Yangi murojaat!*
👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar: ${message}
    `;

    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
      })
    })
      .then(response => {
        if (response.ok) {
          alert("Murojaatingiz yuborildi!");
          document.getElementById("contact-form").reset();
        } else {
          alert("Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
        }
      })
      .catch(error => {
        alert("Serverga ulanishda xatolik.");
        console.error("Telegram Error:", error);
      });
  });

const buttons = document.querySelectorAll('.show-more-btn');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const moreSection = button.previousElementSibling.querySelector('.more');
        moreSection.classList.remove('hidden');
        button.style.display = 'none';
      });
    });