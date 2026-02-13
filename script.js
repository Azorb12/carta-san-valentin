document.addEventListener('DOMContentLoaded', () => {
  const btnOpenElement = document.querySelector('#open');
  const btnCloseElement = document.querySelector('#close');
  const btnYes = document.querySelector('#yes');
  const btnNo = document.querySelector('#no');
  const responseMessage = document.querySelector('#responseMessage');
  const responseButtons = document.querySelector('#responseButtons');

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  const heartElement = document.querySelector('.heart');

  /* =========================
     ABRIR CARTA
  ========================== */
  btnOpenElement.addEventListener('click', () => {
    btnOpenElement.style.display = 'none';
    btnCloseElement.style.display = 'block';

    coverElement.classList.add('open-cover');

    setTimeout(() => {
      coverElement.style.zIndex = -1;
      paperElement.classList.remove('close-paper');
      paperElement.classList.add('open-paper');
      heartElement.style.display = 'block';
    }, 500);

    setTimeout(() => {
      responseButtons.style.display = 'flex';
    }, 1000);
  });

  /* =========================
     CERRAR CARTA
  ========================== */
  btnCloseElement.addEventListener('click', () => {
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');

    setTimeout(() => {
      coverElement.style.zIndex = 0;
      coverElement.classList.remove('open-cover');
      heartElement.style.display = 'none';

      btnCloseElement.style.display = 'none';
      btnOpenElement.style.display = 'block';
    }, 500);

    responseButtons.style.display = 'none';
    responseMessage.style.display = 'none';
  });

  /* =========================
     RESPUESTA "SÍ"
  ========================== */
  btnYes.addEventListener('click', () => {
    responseMessage.innerHTML = 'Sabía que dirías que <span class="highlight">sí ❤️</span>';
    responseMessage.style.display = 'block';
    responseButtons.style.display = 'none';
  });

  /* =========================
     BOTÓN "NO" HUYENDO 😈
  ========================== */

  function moveNoButtonAway(event) {
    const rect = btnNo.getBoundingClientRect();

    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distanceX = event.clientX - btnCenterX;
    const distanceY = event.clientY - btnCenterY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const escapeDistance = 120; // distancia en px para que huya

    if (distance < escapeDistance) {
      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      btnNo.style.position = 'absolute';
      btnNo.style.left = `${randomX}px`;
      btnNo.style.top = `${randomY}px`;
    }
  }

  document.addEventListener('mousemove', moveNoButtonAway);
});