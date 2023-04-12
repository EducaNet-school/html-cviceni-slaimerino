const reviews = [
    {
      id: 1,
      pojmenovanijidla: 'Mega Giga Řízek',
      chod: 'Hlavní chod',
      img: 'https://pbs.twimg.com/media/CUcDpkGUYAAuRyL.jpg',
      text: "Fakt opravdu velkej řízek.",
    },
    {
      id: 2,
      pojmenovanijidla: 'Prase',
      chod: 'Hlavní chod',
      img: 'https://www.toprecepty.cz/fotky/recepty/0007/62cdadb348ab450f470de6d68f035e8f-facebook.jpg',
      text: 'Celé vařené prase z oblohou.',
    },
    {
      id: 3,
      pojmenovanijidla: 'Parmská šůnka',
      chod: 'Předkrm',
      img: "https://www.gustini.cz/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/7/7/77268_1.jpg",
      text: 'Plátky nasekané luxusní parmské šůnky připravené na talířy jako předkrm za dobrou cenu',
    },
    {
      id: 4,
      pojmenovanijidla: 'Klokaní steak',
      chod: 'Hlavní chod',
      img: 'http://www.lisenskypivovar.cz/files/new23/586-gril_.jpg',
      text: 'Steak z klokaního masa připraveno na víně.',
    },
    {
        id: 5,
        pojmenovanijidla: 'Asi jídlo ale fakt nevim',
        chod: 'Hlavní chod?',
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Svi%C3%B0.jpg',
        text: 'Je tohle vůbec jídlo? Kde se to tady vůbec vzalo. No, pokud to chcete tak vám to připravíme.',
      },
  ];
  const img = document.getElementById('obrazjidla');
  const nazevjidla = document.getElementById('nazevjidla');
  const chod = document.getElementById('chod');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentItem = 0;
  
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    nazevjidla.textContent = item.pojmenovanijidla;
    chod.textContent = item.chod;
    info.textContent = item.text;
  });
  
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    nazevjidla.textContent = item.pojmenovanijidla;
    chod.textContent = item.chod;
    info.textContent = item.text;
  }
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });