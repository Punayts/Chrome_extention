const checkerBtn = document.getElementById('checkerBtn');
    const statsBtn = document.getElementById('statsBtn');
    const checkerPage = document.getElementById('checkerPage');
    const statsPage = document.getElementById('statsPage');

    checkerBtn.addEventListener('click', () => {
      checkerPage.classList.remove('hidden');
      statsPage.classList.add('hidden');
      checkerBtn.classList.add('active');
      checkerBtn.classList.remove('inactive');
      statsBtn.classList.remove('active');
      statsBtn.classList.add('inactive');
    });

    statsBtn.addEventListener('click', () => {
      checkerPage.classList.add('hidden');
      statsPage.classList.remove('hidden');
      statsBtn.classList.add('active');
      statsBtn.classList.remove('inactive');
      checkerBtn.classList.remove('active');
      checkerBtn.classList.add('inactive');
    });
