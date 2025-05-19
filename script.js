const galleryItems = document.querySelectorAll('.gallery-images img, .gallery-images video');
const modal = document.getElementById('mediaModal');
const modalMedia = document.querySelector('.modal-media');
const modalDescription = document.querySelector('.modal-description');
const closeButton = document.querySelector('.close');

const outfitLinks = {
  'IMG_2177.jpeg': {
    top: 'https://www.uksoccershop.com/p-262094/2022-2023-spain-home-shirt.html',
    bottom: 'https://www.pullandbear.com/ae/midwaist-straightleg-jeans-l07684365?cS=427&gad_campaignid=18066212347&gad_source=1&gbraid=0AAAAACTddm7MvnGsu95KlB9DdnoQfrdZg&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZVYVa1SdukGeMmuUuiJTYUerLtLBeyqp5GznW0sf4xAqpKUDnyy1gAaAm6DEALw_wcB&categoryId=1030616853',
    shoes: 'https://www.adidas.ae/en/samba-og-shoes/B75806.html'
  },
  'IMG_6933.jpeg': {
    top: 'https://www.stradivarius.com/ww/strappy-satin-top-l02021559',
    bottom: 'https://www.bershka.com/ae/mini-skort-c0p177325255.html?colorId=800&utm_source=google&utm_medium=cpc&utm_campaign=BSK_PER_AO_GADS_AE_PMAX_MIX_MIX_MAN&gad_source=1&gad_campaignid=18346917819&gbraid=0AAAAADySmvvPsdmhYOQtVvRKVmWS1aW0N&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZXaMeGuE11xt33GDR9t6keIJN3gWlFEwvtHRFpCGiLNscN4kEVpU8kaAgYoEALw_wcB',
    shoes: 'https://www.adidas.ae/en/handball-spezial-shoes/IF7087.html?cm_mmc=AdieSEM_Google_Pmax-_-Performance_Max-EN-AE-AlwaysOn-_-dv:eCom-_-cn:Performance_Max-EN-AE-AlwaysOn-_-pc:Google&cm_mmc1=AE&cm_mmc2=Pmax-B-Multiple-None-None-AE-MENA-eCom-Paid_Search&gad_source=1&gad_campaignid=19639673653&gbraid=0AAAAADg-hjSNoilIbxUshNUf31DNuDFML&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZUvT7sLK9U_fREnZtzxJzlG9sQ-84J2Wn5JV8IQyntnx2dlKtV97J8aAt1BEALw_wcB'
  },
  'IMG_8805.jpeg': {
    top: 'http://api-shein.shein.com/h5/sharejump/appjump?link=lhPsrCpuMZV_8&localcountry=AE&url_from=GM73974925395',
    bottom: 'https://www.pullandbear.com/ae/wideleg-baggy-jeans-with-elasticated-waistband-l03687309?cS=802&gad_campaignid=18066212347&gad_source=1&gbraid=0AAAAACTddm7MvnGsu95KlB9DdnoQfrdZg&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZWyaIoeZymby9XHxdfa6L9zjrsNHkdw3a9g3W0n644NX5gxOeQrN9gaArtfEALw_wcB&categoryId=1030616853',
    shoes: 'https://www.birkenstock.com/ae/boston-suede-leather/boston-core-suedeleather-0-evarubber-u_27.html?utm_source=google&utm_medium=cpc&utm_campaign=acquisitbirkenstock_pmax_loc-ae_lan-en_conversion&utm_term=&gad_source=1&gad_campaignid=19699771603&gbraid=0AAAAAodUXaNsJSyKUbrJUCXhVQPUF4RX8&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZU059szN-FWtSg5pSO43aO5WmhxFKigHojse5cxZwavuCCVemW2ucsaAlAWEALw_wcB'
  },
  'vid1.mp4': {
    top: 'https://www.nflshop.com/new-england-patriots/mens-new-england-patriots-nike-red-alternate-custom-jersey/t-36049252+p-0321907841059+z-9-1802064651?_ref=p-SRP:m-GRID:i-r3c1:po-10',
    bottom: 'http://api-shein.shein.com/h5/sharejump/appjump?link=lhPvtg7yoJR_8&localcountry=AE&url_from=GM71111840188',
    shoes: 'https://www.lefties.com/ae/woman/shoes/house-slippers/platform-clogs-c1030272273p659631177.html?colorId=105&gad_campaignid=22305787666&gad_source=1&gbraid=0AAAAApXEfSaWTqw9jo1pW000fLPRUKsVU&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZU6DnW6ANfcqtGgz4Yo55QHTot_ON9CqW8ARIZ6D7BL7-SOxukZS_kaAqzlEALw_wcB'
  },
  'vid2.mp4': {
    top: 'https://shopee.ph/Mera-Evalina-V-Neck-Long-Sleeve-Top-Seamless-i.642616848.29555313997',
    bottom: 'http://api-shein.shein.com/h5/sharejump/appjump?link=lhPFYu9UT5F_8&localcountry=AE&url_from=GM71111840188',
    shoes: 'https://www.lefties.com/ae/woman/shoes/house-slippers/platform-clogs-c1030272273p659631177.html?colorId=105&gad_campaignid=22305787666&gad_source=1&gbraid=0AAAAApXEfSaWTqw9jo1pW000fLPRUKsVU&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZU6DnW6ANfcqtGgz4Yo55QHTot_ON9CqW8ARIZ6D7BL7-SOxukZS_kaAqzlEALw_wcB'
  },
  'vid3.mp4': {
    top: 'https://shopee.ph/Mera-Arya-Tank-Top-Slim-fitting-Womenswear-Soft-Tee-Cotton-Plain-Basic-Fabric-Spandex-Essential-i.642616848.24927091765',
    additionalTop: 'https://urban-planet.com/products/0702-31812381-oversized-striped-button-up-top?variant=43363116417117',
    bottom: 'https://www.bershka.com/ae/mini-skort-c0p177325255.html?colorId=800&utm_source=google&utm_medium=cpc&utm_campaign=BSK_PER_AO_GADS_AE_PMAX_MIX_MIX_MAN&gad_source=1&gad_campaignid=18346917819&gbraid=0AAAAADySmvvPsdmhYOQtVvRKVmWS1aW0N&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZXaMeGuE11xt33GDR9t6keIJN3gWlFEwvtHRFpCGiLNscN4kEVpU8kaAgYoEALw_wcB',
    shoes: 'https://www.adidas.ae/en/handball-spezial-shoes/IF7087.html?cm_mmc=AdieSEM_Google_Pmax-_-Performance_Max-EN-AE-AlwaysOn-_-dv:eCom-_-cn:Performance_Max-EN-AE-AlwaysOn-_-pc:Google&cm_mmc1=AE&cm_mmc2=Pmax-B-Multiple-None-None-AE-MENA-eCom-Paid_Search&gad_source=1&gad_campaignid=19639673653&gbraid=0AAAAADg-hjSNoilIbxUshNUf31DNuDFML&gclid=Cj0KCQjwoZbBBhDCARIsAOqMEZUvT7sLK9U_fREnZtzxJzlG9sQ-84J2Wn5JV8IQyntnx2dlKtV97J8aAt1BEALw_wcB'
  }
};

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const description = item.getAttribute('data-description') || '';
    const src = item.tagName === 'VIDEO' ? item.querySelector('source').src : item.src;

    const matchedKey = Object.keys(outfitLinks).find(key => src.includes(key));
    let linksHTML = '';
    let additionalDescription = '';

    if (matchedKey) {
      const links = outfitLinks[matchedKey];
      linksHTML = `
        <a href="${links.top}" target="_blank">Top</a><br>
        ${links.additionalTop ? `<a href="${links.additionalTop}" target="_blank">Button Up</a><br>` : ''}
        <a href="${links.bottom}" target="_blank">Bottom</a><br>
        <a href="${links.shoes}" target="_blank">Shoes</a>
      `;

      if (matchedKey === 'IMG_2177.jpeg') {
        additionalDescription = 'This outfit embraces a laid-back blok aesthetic with an oversized red adidas football kit as the statement piece, paired effortlessly with light blue ripped jeans. The loose, comfortable fit reflects a carefree vibe, ideal for urban outings or casual hangouts. Completing the look are classic white sneakers, adding a clean and sporty touch that keeps the outfit grounded and practical for city exploration. The backdrop of towering skyscrapers enhances the street-smart energy of this look.The minimalistic color palette emphasizes effortless style, while the figure-hugging silhouette adds a subtle touch of femininity. Black sneakers or slip-ons keep the look casual and comfortable for strolling or relaxed dates. The rustic, textured background of an ancient archway complements the timeless simplicity of this outfit, making it both grounded and stylish.';
      } else if (matchedKey === 'IMG_6933.jpeg') {
        additionalDescription = 'Perfect for a simple yet charming day out, this outfit combines a white fitted top with sleek black high-waisted skirt. The minimalistic color palette emphasizes effortless style, while the figure-hugging silhouette adds a subtle touch of femininity. Black sneakers or slip-ons keep the look casual and comfortable for strolling or relaxed dates. The rustic, textured background of an ancient archway complements the timeless simplicity of this outfit, making it both grounded and stylish.';
      } else if (matchedKey === 'IMG_8805.jpeg') {
        additionalDescription = 'Emanating elegance with a breezy flair, this summer outfit features a white sleeveless or strap top paired with high-waisted, flowy satin trousers in a soft metallic shade. The combination exudes a resort-chic aesthetic, ideal for seaside evenings or vacation strolls. A stylish hat elevates the look, adding a sophisticated accessory that blends fashion with sun protection. The soft glow of a beach sunset and the distant Ferris wheel set a dreamy, romantic tone for this elevated summer ensemble.';
      } else if (matchedKey === 'vid1.mp4') {
        additionalDescription = 'This outfit delivers a classic streetwear attitude with an oversized red t-shirt featuring a bold white “52” print, giving off a vintage sportswear edge. Paired with loose-fitting dark cargo pants or baggy jeans, it leans into the relaxed, urban silhouette that\'s central to streetwear fashion. The addition of casual accessories, like a plush toy, adds a playful and personal twist—common in modern street style where individuality is key. The setting in a trendy indoor space with glass walls complements the contemporary, effortlessly cool vibe of this streetwear fit.';    
      } else if (matchedKey === 'vid2.mp4') {
        additionalDescription = 'A sweet and playful outfit designed for casual evening outings, this look pairs a fitted white long-sleeve top with a greyish-green pleated mini skirt, creating a youthful and dynamic silhouette. The simplicity of the top balances the more flirty vibe of the skirt, while black loafers or flats ensure comfort without sacrificing style. Set against a vibrant nighttime waterfront cityscape, the outfit feels fresh, charming, and ideal for low-key night adventures.';
       } else if (matchedKey === 'vid3.mp4') {
          additionalDescription = 'This outfit captures the perfect balance of comfort and casual style, ideal for a travel day. The oversized light blue button-down shirt, worn open over a simple white t-shirt, gives a relaxed and effortless look while still feeling put-together. Paired with a classic black mini skirt, the outfit maintains a chic silhouette without compromising on ease. A beige tote bag with a red charm adds a practical yet cute accessory, completing the travel-ready vibe. Set in a modern airport backdrop, this outfit embodies the “comfortable but still stylish” mood of a casual airport day.';
      }
      
    }

    modalMedia.innerHTML = '';
    let clonedItem;

    if (item.tagName === 'VIDEO') {
      clonedItem = document.createElement('video');
      clonedItem.src = src;
      clonedItem.autoplay = true;
      clonedItem.loop = true;
      clonedItem.muted = true;
      clonedItem.controls = true;
    } else {
      clonedItem = document.createElement('img');
      clonedItem.src = src;
      clonedItem.alt = item.alt || '';
    }

    modalMedia.appendChild(clonedItem);

    modalDescription.innerHTML = `
      <p>${description}</p>
      <p>${additionalDescription}</p>
       <h3>Outfit Links</h3>
      <div class="outfit-links">${linksHTML}</div>
    `;

    modal.style.display = 'flex';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const gallery = document.querySelector('.gallery');

window.addEventListener('scroll', () => {
  const galleryTop = gallery.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (galleryTop < windowHeight) {
    gallery.classList.add('show');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});

function handleModal() {
  const closeModal = () => {
    modal.style.display = 'none';
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  closeButton.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => e.target === modal && closeModal());
  document.addEventListener('keydown', handleKeyDown);
}

function setupMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('show');
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  });
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  handleModal();
  setupMenuToggle();
 
  window.addEventListener('scroll', throttle(() => {
    const galleryTop = gallery.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (galleryTop < windowHeight) {
      gallery.classList.add('show');
    }
  }, 100));
  
});

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const pageContainer = document.querySelector('.page-container');
  const scrapbookPage = document.querySelector('.scrapbook-page');
  const header = document.querySelector('.main-header');
  
  if (scrollPosition > 0) {
    const scale = Math.max(0.7, 0.9 - scrollPosition * 0.001);
    scrapbookPage.style.transform = `scale(${scale})`;
    scrapbookPage.style.marginBottom = `${scrollPosition * 0.5}px`;
  }
  
  if (scrollPosition > 50) {
    const opacity = Math.max(0, 1 - scrollPosition * 0.005);
    header.style.opacity = opacity;
  } else {
    header.style.opacity = 1;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  const revealGallery = () => {
    const galleryPosition = gallery.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (galleryPosition < windowHeight - 100) {
      gallery.classList.add('show');
    }
  };

  window.addEventListener('scroll', revealGallery);

  revealGallery();
});

document.addEventListener('DOMContentLoaded', () => {
  const scrapbookPage = document.querySelector('.scrapbook-page');

  if (scrapbookPage) {
    scrapbookPage.addEventListener('mousemove', (e) => {
      const rect = scrapbookPage.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top; 

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 10; 
      const rotateY = ((x - centerX) / centerX) * -10; 

      scrapbookPage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.9)`;
    });

    scrapbookPage.addEventListener('mouseleave', () => {
      scrapbookPage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.9)';
    });
  }
});
