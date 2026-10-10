/* ── Moka AI ── */
const root = document.querySelector('.moka');
const lang = root.dataset.lang;
const S = JSON.parse(root.dataset.strings); // chaînes localisées (voir MokaChat.astro)
const MAX_Q = 5;
let remaining = MAX_Q, msgs = [];
const msgsEl  = document.getElementById('messages');
const inputEl = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const qEl     = document.getElementById('q-count');
const gauge   = document.getElementById('gauge-fill');

function updateGauge() {
  const used = MAX_Q - remaining;
  qEl.textContent = used;
  gauge.style.width = (used / MAX_Q * 100) + '%';
  if (remaining <= 0) {
    gauge.style.background = '#E05252';
    inputEl.placeholder = S.limitReached;
    inputEl.disabled = true;
    sendBtn.disabled = true;
    document.querySelectorAll('.pill').forEach(p => p.disabled = true);
  }
}

function addMsg(role, html) {
  const d = document.createElement('div');
  d.className = 'msg ' + (role === 'ai' ? 'ai' : 'user');
  d.innerHTML = `<div class="msg-av ${role}">${role === 'ai' ? '✦' : '🙂'}</div><div class="msg-bubble">${html}</div>`;
  msgsEl.appendChild(d);
  msgsEl.scrollTop = msgsEl.scrollHeight;
}

function showTyping() {
  const d = document.createElement('div');
  d.className = 'msg ai'; d.id = 'typing';
  d.innerHTML = `<div class="msg-av ai">✦</div><div class="msg-bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;
  msgsEl.appendChild(d); msgsEl.scrollTop = msgsEl.scrollHeight;
}

async function send(text) {
  if (!text.trim() || remaining <= 0) return;
  if (text.toLowerCase().includes('linkedin')) {
    addMsg('user', text);
    addMsg('ai', S.linkedinReply + ' <a href="https://www.linkedin.com/in/marie-arnaud-437a3b172/" target="_blank">linkedin.com/in/marie-arnaud-437a3b172/</a>');
    msgs.push({ role: 'user', content: text }, { role: 'assistant', content: 'LinkedIn partagé.' });
    inputEl.value = ''; remaining--; updateGauge(); return;
  }
  addMsg('user', text.replace(/</g, '&lt;'));
  msgs.push({ role: 'user', content: text });
  inputEl.value = ''; remaining--; updateGauge();
  showTyping(); sendBtn.disabled = true;
  try {
    const res = await fetch('https://long-sky-b5a2.m-arnaud85.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: msgs.slice(-6), lang })
    });
    const data = await res.json();
    document.getElementById('typing')?.remove();
    if (data.content?.[0]?.text) {
      const r = data.content[0].text;
      addMsg('ai', r.replace(/\n/g, '<br>'));
      msgs.push({ role: 'assistant', content: r });
    } else if (data.error) {
      addMsg('ai', `${S.errorPrefix} ${data.error.message}`);
    }
  } catch (e) {
    document.getElementById('typing')?.remove();
    addMsg('ai', S.connection);
  }
  sendBtn.disabled = false;
}

sendBtn.addEventListener('click', () => send(inputEl.value));
inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') send(inputEl.value); });
document.querySelectorAll('.pill').forEach(p => p.addEventListener('click', () => send(p.dataset.q)));
