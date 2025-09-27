// ===== MEP LIST =====
const HU_MEPS = [
  {name: 'Bíró Gergely', party: 'Fidesz – PfE', id: 256858, profile: 'https://www.europarl.europa.eu/meps/en/256858', email: 'gergely.biro@europarl.europa.eu'},
  {name: 'Csák József', party: 'Fidesz – PfE', id: 256854, profile: 'https://www.europarl.europa.eu/meps/en/256854', email: 'jozsef.csak@europarl.europa.eu'},
  {name: 'Dávid Dóra', party: 'TISZA – EPP', id: 256862, profile: 'https://www.europarl.europa.eu/meps/en/256862', email: 'dora.david@europarl.europa.eu'},
  {name: 'Deutsch Tamás', party: 'Fidesz – PfE', id: 96826, profile: 'https://www.europarl.europa.eu/meps/en/96826', email: 'tamas.deutsch@europarl.europa.eu'},
  {name: 'Dobrev Klára', party: 'DK – S&D', id: 197579, profile: 'https://www.europarl.europa.eu/meps/en/197579', email: 'klara.dobrev@europarl.europa.eu'},
  {name: 'Dömötör Csaba', party: 'Fidesz – PfE', id: 260724, profile: 'https://www.europarl.europa.eu/meps/en/260724', email: 'csaba.domotor@europarl.europa.eu'},
  {name: 'Ferenc Viktória', party: 'Fidesz – PfE', id: 256857, profile: 'https://www.europarl.europa.eu/meps/en/256857', email: 'viktoria.ferenc@europarl.europa.eu'},
  {name: 'Gál Kinga', party: 'Fidesz – PfE', id: 28150, profile: 'https://www.europarl.europa.eu/meps/en/28150', email: 'kinga.gal@europarl.europa.eu'},
  {name: 'Gerzsenyi Gabriella', party: 'TISZA – EPP', id: 256866, profile: 'https://www.europarl.europa.eu/meps/en/256866', email: 'gabriella.gerzsenyi@europarl.europa.eu'},
  {name: 'Győri Enikő', party: 'Fidesz – PfE', id: 96830, profile: 'https://www.europarl.europa.eu/meps/en/96830', email: 'eniko.gyori@europarl.europa.eu'},
  {name: 'Gyürk András', party: 'Fidesz – PfE', id: 23816, profile: 'https://www.europarl.europa.eu/meps/en/23816', email: 'andras.gyurk@europarl.europa.eu'},
  {name: 'Hölvényi György', party: 'KDNP – EPP', id: 124715, profile: 'https://www.europarl.europa.eu/meps/en/124715', email: 'gyorgy.holvenyi@europarl.europa.eu'},
  {name: 'Kollár Kinga', party: 'TISZA – EPP', id: 256861, profile: 'https://www.europarl.europa.eu/meps/en/256861', email: 'kinga.kollar@europarl.europa.eu'},
  {name: 'Kulja András Tivadar', party: 'TISZA – EPP', id: 256864, profile: 'https://www.europarl.europa.eu/meps/en/256864', email: 'andras.kulja@europarl.europa.eu'},
  {name: 'Lakos Eszter', party: 'TISZA – EPP', id: 256865, profile: 'https://www.europarl.europa.eu/meps/en/256865', email: 'eszter.lakos@europarl.europa.eu'},
  {name: 'László András', party: 'Fidesz – PfE', id: 256860, profile: 'https://www.europarl.europa.eu/meps/en/256860', email: 'andras.laszlo@europarl.europa.eu'},
  {name: 'Magyar Péter', party: 'TISZA – EPP', id: 256868, profile: 'https://www.europarl.europa.eu/meps/en/256868', email: 'peter.magyar@europarl.europa.eu'},
  {name: 'Molnár Csaba', party: 'DK – S&D', id: 124722, profile: 'https://www.europarl.europa.eu/meps/en/124722', email: 'csaba.molnar@europarl.europa.eu'},
  {name: 'Schaller-Baross Ernő', party: 'Fidesz – PfE', id: 213330, profile: 'https://www.europarl.europa.eu/meps/en/213330', email: 'erno.schaller-baross@europarl.europa.eu'},
  {name: 'Szekeres Pál', party: 'Fidesz – PfE', id: 256855, profile: 'https://www.europarl.europa.eu/meps/en/256855', email: 'pal.szekeres@europarl.europa.eu'},
  {name: 'Tarr Zoltán', party: 'TISZA – EPP', id: 256863, profile: 'https://www.europarl.europa.eu/meps/en/256863', email: 'zoltan.tarr@europarl.europa.eu'},
  {name: 'Vicsek Annamária', party: 'Fidesz – PfE', id: 256859, profile: 'https://www.europarl.europa.eu/meps/en/256859', email: 'annamaria.vicsek@europarl.europa.eu'}
];

// ===== RENDER MEP CARDS =====
function renderMEPs() {
  const grid = document.getElementById('mepsGrid');
  grid.innerHTML = '';
  HU_MEPS.forEach(mep => {
    const card = document.createElement('div');
    card.className = 'mep-card';
    card.innerHTML = `
      <h3>${mep.name}</h3>
      <div class="party">${mep.party}</div>
      <div class="actions">
        <a href="${mep.profile}" class="btn" target="_blank" rel="noopener">Profil</a>
        <button class="btn" onclick="copyEmail('${mep.email}')">📧 Email másolása</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== COPY FUNCTIONS =====
const emailSubject = encodeURIComponent('Kérem, szavazzon nemmel a Chat Controlra');
const emailBody = encodeURIComponent(`Tisztelt Képviselő!

Arra kérem Önt, hogy a közelgő szavazáson mondjon nemet a Chat Control javaslatra.

Ez a rendelet súlyosan sértené a magánszférát, veszélyeztetné az újságírókat, ügyvédeket, civil szervezeteket és a mindennapi emberek biztonságát.

Gyermekvédelemre más, célzottabb és hatékonyabb megoldások léteznek, amelyek nem járnak tömeges megfigyeléssel.

Kérem, álljon ki a szabadság és az alapjogok mellett, és szavazzon nemmel a javaslatra.

Üdvözlettel,
[Neved]
[Településed]`);

function copyText(text, successMessage = 'Másolva!') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification('✅ ' + successMessage);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showNotification('✅ ' + successMessage);
  } catch (err) {
    console.error('Nem sikerült másolni:', err);
  }
  document.body.removeChild(textarea);
}

function copySubject() {
  copyText(decodeURIComponent(emailSubject));
}

function copyBody() {
  copyText(decodeURIComponent(emailBody));
}

function copyEmail(email) {
  copyText(email, 'Email cím másolva!');
}

// ===== NOTIFICATION =====
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '80px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = 'var(--accent)';
  notification.style.color = 'white';
  notification.style.padding = 'var(--spacing-md)';
  notification.style.borderRadius = 'var(--border-radius)';
  notification.style.zIndex = '1001';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderMEPs);
