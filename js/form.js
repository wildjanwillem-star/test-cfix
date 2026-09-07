/* ============================================
   C-FIX Appointment Form Logic
   ============================================ */

const deviceData = {
  telefoon: {
    merken: {
      'Apple': {
        modellen: ['iPhone 7','iPhone 8','iPhone X','iPhone XR','iPhone XS','iPhone 11','iPhone 12','iPhone 13','iPhone 14','iPhone 15','iPhone 16','iPhone 17','iPhone SE (2e gen)','iPhone SE (3e gen)'],
        uitvoeringen: {
          'iPhone 7': ['','Plus'],
          'iPhone 8': ['','Plus'],
          'iPhone X': [''],
          'iPhone XR': [''],
          'iPhone XS': ['','Max'],
          'iPhone 11': ['','Pro','Pro Max'],
          'iPhone 12': ['','Mini','Pro','Pro Max'],
          'iPhone 13': ['','Mini','Pro','Pro Max'],
          'iPhone 14': ['','Plus','Pro','Pro Max'],
          'iPhone 15': ['','Plus','Pro','Pro Max'],
          'iPhone 16': ['','Plus','Pro','Pro Max','e'],
          'iPhone 17': ['','Air','Pro','Pro Max'],
          'iPhone SE (2e gen)': [''],
          'iPhone SE (3e gen)': ['']
        }
      },
      'Samsung': {
        modellen: ['Galaxy S20','Galaxy S21','Galaxy S22','Galaxy S23','Galaxy S24','Galaxy S25','Galaxy A14','Galaxy A15','Galaxy A16','Galaxy A25','Galaxy A34','Galaxy A35','Galaxy A36','Galaxy A54','Galaxy A55','Galaxy A56','Galaxy Z Flip 4','Galaxy Z Flip 5','Galaxy Z Flip 6','Galaxy Z Fold 4','Galaxy Z Fold 5','Galaxy Z Fold 6','Galaxy Note 20','Galaxy M14','Galaxy M34','Galaxy M54','Galaxy XCover 6 Pro'],
        uitvoeringen: {
          'Galaxy S20': ['','Plus','Ultra','FE'],
          'Galaxy S21': ['','Plus','Ultra','FE'],
          'Galaxy S22': ['','Plus','Ultra'],
          'Galaxy S23': ['','Plus','Ultra','FE'],
          'Galaxy S24': ['','Plus','Ultra','FE'],
          'Galaxy S25': ['','Plus','Ultra','Edge'],
          'Galaxy A14': ['','5G'],
          'Galaxy A15': ['','5G'],
          'Galaxy A16': ['','5G'],
          'Galaxy A25': ['5G'],
          'Galaxy A34': ['5G'],
          'Galaxy A35': ['5G'],
          'Galaxy A36': ['5G'],
          'Galaxy A54': ['5G'],
          'Galaxy A55': ['5G'],
          'Galaxy A56': ['5G'],
          'Galaxy Note 20': ['','Ultra']
        }
      },
      'Huawei': {
        modellen: ['P30','P30 Pro','P40','P40 Pro','P50','P50 Pro','P60','P60 Pro','Mate 50','Mate 50 Pro','Nova 11','Nova 12','Mate 60','Mate 60 Pro'],
        uitvoeringen: {}
      },
      'Xiaomi': {
        modellen: ['Redmi Note 12','Redmi Note 13','Redmi Note 14','Redmi 13','Redmi 14','Poco X5','Poco X6','Poco F5','Poco F6','Xiaomi 13','Xiaomi 13T','Xiaomi 14','Xiaomi 14T','Xiaomi 15'],
        uitvoeringen: {
          'Redmi Note 12': ['','Pro','Pro+'],
          'Redmi Note 13': ['','Pro','Pro+'],
          'Redmi Note 14': ['','Pro','Pro+'],
          'Xiaomi 13': ['','Pro','Ultra','Lite'],
          'Xiaomi 13T': ['','Pro'],
          'Xiaomi 14': ['','Pro','Ultra'],
          'Xiaomi 14T': ['','Pro'],
          'Xiaomi 15': ['','Pro','Ultra']
        }
      },
      'OnePlus': {
        modellen: ['OnePlus 11','OnePlus 12','OnePlus 13','OnePlus Nord 3','OnePlus Nord 4','OnePlus Nord CE 3','OnePlus Nord CE 4'],
        uitvoeringen: {}
      },
      'Google': {
        modellen: ['Pixel 7','Pixel 7a','Pixel 8','Pixel 8a','Pixel 9','Pixel 9a'],
        uitvoeringen: {
          'Pixel 7': ['','Pro'],
          'Pixel 8': ['','Pro'],
          'Pixel 9': ['','Pro','Pro XL','Pro Fold']
        }
      },
      'Sony': {
        modellen: ['Xperia 1 V','Xperia 5 V','Xperia 10 V','Xperia 1 VI','Xperia 10 VI'],
        uitvoeringen: {}
      },
      'Nokia': {
        modellen: ['Nokia G22','Nokia G42','Nokia X30','Nokia XR21'],
        uitvoeringen: {}
      },
      'Motorola': {
        modellen: ['Moto G14','Moto G24','Moto G34','Moto G54','Moto G84','Moto Edge 40','Moto Edge 50','Moto Razr 40','Moto Razr 50'],
        uitvoeringen: {
          'Moto Edge 40': ['','Pro','Neo'],
          'Moto Edge 50': ['','Pro','Ultra','Neo'],
          'Moto Razr 40': ['','Ultra'],
          'Moto Razr 50': ['','Ultra']
        }
      },
      'OPPO': {
        modellen: ['Find X6','Find X7','Reno 10','Reno 11','Reno 12','A78','A79','A98'],
        uitvoeringen: {
          'Find X6': ['','Pro'],
          'Find X7': ['','Ultra'],
          'Reno 10': ['','Pro','Pro+'],
          'Reno 11': ['','Pro','F'],
          'Reno 12': ['','Pro','F']
        }
      },
      'Nichts / Nothing': {
        modellen: ['Nothing Phone (1)','Nothing Phone (2)','Nothing Phone (2a)'],
        uitvoeringen: {}
      },
      'Fairphone': {
        modellen: ['Fairphone 4','Fairphone 5'],
        uitvoeringen: {}
      },
      'Overig': {
        modellen: [],
        uitvoeringen: {}
      }
    }
  },
  tablet: {
    merken: {
      'Apple': {
        modellen: ['iPad (9e gen)','iPad (10e gen)','iPad Air (M1)','iPad Air (M2)','iPad Air (M3)','iPad Mini (6e gen)','iPad Mini (A17)','iPad Pro 11" (M1)','iPad Pro 11" (M2)','iPad Pro 11" (M4)','iPad Pro 12.9" (M1)','iPad Pro 12.9" (M2)','iPad Pro 13" (M4)']
      },
      'Samsung': {
        modellen: ['Galaxy Tab A8','Galaxy Tab A9','Galaxy Tab A9+','Galaxy Tab S7','Galaxy Tab S7+','Galaxy Tab S7 FE','Galaxy Tab S8','Galaxy Tab S8+','Galaxy Tab S8 Ultra','Galaxy Tab S9','Galaxy Tab S9+','Galaxy Tab S9 Ultra','Galaxy Tab S9 FE','Galaxy Tab S9 FE+','Galaxy Tab S10','Galaxy Tab S10+','Galaxy Tab S10 Ultra']
      },
      'Huawei': {
        modellen: ['MatePad 11','MatePad Pro','MatePad SE','MatePad Air']
      },
      'Lenovo': {
        modellen: ['Tab M10 Plus','Tab M11','Tab P11','Tab P11 Pro','Tab P12','Yoga Tab 13']
      },
      'Xiaomi': {
        modellen: ['Pad 6','Pad 6 Pro','Redmi Pad','Redmi Pad SE','Redmi Pad Pro']
      },
      'Microsoft': {
        modellen: ['Surface Go 3','Surface Go 4','Surface Pro 9','Surface Pro 10']
      },
      'Overig': {
        modellen: []
      }
    }
  },
  laptop: {
    merken: {
      'Apple': {
        modellen: ['MacBook Air 13" (M1)','MacBook Air 13" (M2)','MacBook Air 13" (M3)','MacBook Air 15" (M2)','MacBook Air 15" (M3)','MacBook Air 13" (M4)','MacBook Air 15" (M4)','MacBook Pro 14" (M1 Pro)','MacBook Pro 14" (M2 Pro)','MacBook Pro 14" (M3)','MacBook Pro 14" (M3 Pro)','MacBook Pro 14" (M4)','MacBook Pro 14" (M4 Pro)','MacBook Pro 14" (M4 Max)','MacBook Pro 16" (M1 Pro)','MacBook Pro 16" (M2 Pro)','MacBook Pro 16" (M3 Pro)','MacBook Pro 16" (M4 Pro)','MacBook Pro 16" (M4 Max)']
      },
      'HP': {
        modellen: ['HP Pavilion 14','HP Pavilion 15','HP Pavilion 16','HP Envy x360 13','HP Envy x360 15','HP Spectre x360 14','HP Spectre x360 16','HP EliteBook 840','HP EliteBook 860','HP ProBook 450','HP ProBook 455','HP Victus 15','HP Victus 16','HP Omen 16','HP Omen 17']
      },
      'Dell': {
        modellen: ['XPS 13','XPS 14','XPS 15','XPS 16','Inspiron 14','Inspiron 15','Inspiron 16','Latitude 5540','Latitude 7440','Latitude 9440','Vostro 3520','Vostro 5620','Alienware m16','Alienware x16']
      },
      'Lenovo': {
        modellen: ['ThinkPad X1 Carbon','ThinkPad T14','ThinkPad T16','ThinkPad L14','ThinkPad L15','IdeaPad 3 14','IdeaPad 3 15','IdeaPad 5 14','IdeaPad 5 15','IdeaPad Slim 5','Yoga 7i','Yoga 9i','Yoga Slim 7','Legion 5','Legion 5 Pro','Legion 7']
      },
      'ASUS': {
        modellen: ['ZenBook 14','ZenBook S 14','ZenBook Pro 14','VivoBook 15','VivoBook S 14','VivoBook S 15','ROG Strix G16','ROG Zephyrus G14','ROG Zephyrus G16','TUF Gaming A15','TUF Gaming F15','ProArt StudioBook 16','Chromebook Plus CX34']
      },
      'Acer': {
        modellen: ['Swift 3','Swift 5','Swift Go 14','Swift X 14','Aspire 3','Aspire 5','Aspire 7','Aspire Vero','Nitro 5','Nitro V 15','Predator Helios 16','Predator Triton 14']
      },
      'MSI': {
        modellen: ['Modern 14','Modern 15','Prestige 14','Prestige 16','Stealth 14','Stealth 16','Raider GE68','Raider GE78','Katana 15','Katana 17','Creator Z16','Cyborg 15']
      },
      'Microsoft': {
        modellen: ['Surface Laptop 5','Surface Laptop 6','Surface Laptop Go 3','Surface Laptop Studio 2']
      },
      'Overig': {
        modellen: []
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointment-form');
  if (!form) return;

  const deviceType = document.getElementById('device-type');
  const brandGroup = document.getElementById('brand-group');
  const brandSelect = document.getElementById('device-brand');
  const modelGroup = document.getElementById('model-group');
  const modelSelect = document.getElementById('device-model');
  const editionGroup = document.getElementById('edition-group');
  const editionSelect = document.getElementById('device-edition');
  const pcProblemGroup = document.getElementById('pc-problem-group');

  function hideAll() {
    brandGroup.style.display = 'none';
    modelGroup.style.display = 'none';
    editionGroup.style.display = 'none';
    pcProblemGroup.style.display = 'none';
    brandSelect.innerHTML = '<option value="">Selecteer merk...</option>';
    modelSelect.innerHTML = '<option value="">Selecteer model...</option>';
    editionSelect.innerHTML = '<option value="">Selecteer uitvoering...</option>';
  }

  deviceType.addEventListener('change', () => {
    hideAll();
    const type = deviceType.value;
    if (type === 'pc') {
      pcProblemGroup.style.display = 'block';
      return;
    }
    if (!deviceData[type]) return;
    brandGroup.style.display = 'block';
    const merken = Object.keys(deviceData[type].merken);
    merken.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m; opt.textContent = m;
      brandSelect.appendChild(opt);
    });
  });

  brandSelect.addEventListener('change', () => {
    modelGroup.style.display = 'none';
    editionGroup.style.display = 'none';
    modelSelect.innerHTML = '<option value="">Selecteer model...</option>';
    editionSelect.innerHTML = '<option value="">Selecteer uitvoering...</option>';

    const type = deviceType.value;
    const brand = brandSelect.value;
    if (!brand || !deviceData[type]) return;

    const data = deviceData[type].merken[brand];
    if (!data) return;

    if (data.modellen.length === 0) {
      // "Overig" brand - show free text
      modelGroup.style.display = 'block';
      modelSelect.innerHTML = '<option value="">Typ uw model hieronder...</option>';
      return;
    }

    modelGroup.style.display = 'block';
    data.modellen.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m; opt.textContent = m;
      modelSelect.appendChild(opt);
    });
  });

  modelSelect.addEventListener('change', () => {
    editionGroup.style.display = 'none';
    editionSelect.innerHTML = '<option value="">Selecteer uitvoering...</option>';

    const type = deviceType.value;
    if (type !== 'telefoon') return;

    const brand = brandSelect.value;
    const model = modelSelect.value;
    if (!brand || !model) return;

    const data = deviceData[type].merken[brand];
    if (!data || !data.uitvoeringen) return;

    const editions = data.uitvoeringen[model];
    if (!editions || editions.length <= 1) return;

    editionGroup.style.display = 'block';
    editions.filter(e => e).forEach(e => {
      const opt = document.createElement('option');
      opt.value = e; opt.textContent = e;
      editionSelect.appendChild(opt);
    });
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let body = 'Nieuwe afspraak aanvraag C-Fix\n\n';
    body += `Naam: ${formData.get('naam')}\n`;
    body += `E-mail: ${formData.get('email')}\n`;
    body += `Telefoon: ${formData.get('telefoon')}\n`;
    body += `Apparaat: ${formData.get('device-type')}\n`;

    if (formData.get('device-type') === 'pc') {
      body += `Probleem: ${formData.get('pc-probleem')}\n`;
    } else {
      body += `Merk: ${formData.get('device-brand')}\n`;
      body += `Model: ${formData.get('device-model')}\n`;
      if (formData.get('device-edition')) {
        body += `Uitvoering: ${formData.get('device-edition')}\n`;
      }
      body += `Probleem: ${formData.get('probleem')}\n`;
    }

    body += `\nVoorkeur datum: ${formData.get('datum') || 'Geen voorkeur'}\n`;
    body += `Opmerkingen: ${formData.get('opmerkingen') || '-'}\n`;

    // Create mailto link
    const subject = encodeURIComponent(`Afspraak aanvraag - ${formData.get('naam')}`);
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:janwillem@c-fix.nl?subject=${subject}&body=${mailBody}`;

    // Show success
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const subject = encodeURIComponent(`Vraag via website - ${fd.get('naam')}`);
      const body = encodeURIComponent(
        `Naam: ${fd.get('naam')}\nE-mail: ${fd.get('email')}\nTelefoon: ${fd.get('telefoon') || '-'}\n\nBericht:\n${fd.get('bericht')}`
      );
      window.location.href = `mailto:info@c-fix.nl?subject=${subject}&body=${body}`;
      contactForm.style.display = 'none';
      document.getElementById('contact-success').style.display = 'block';
    });
  }
});
