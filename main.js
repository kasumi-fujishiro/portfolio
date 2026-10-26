// 作品の一覧（古い順。No. はこの順につく）。新しい作品は末尾に足せばカードと詳しい説明が両方できる
// id: 賞などからのリンク先（#work-<id>） / image: 画面の画像 / art: 画像がない作品の飾り（"outin" か "closet"）
const works = [
  {
    id: 'toilet',
    title: 'トイレビュ',
    category: 'Webアプリ',
    period: '2025.07',
    team: 'チーム制作（学内ハッカソン）',
    role: '地図のAPIまわりを担当',
    award: '学内ハッカソン 一年生賞',
    image: 'images/toilet.jpg',
    summary: '近くのトイレをすぐに探せる地図アプリです。現在地のまわりのトイレを地図に表示し、口コミを見たり、新しいトイレを登録したりできます。わたしは、地図の表示や現在地の取得など、地図のAPIまわりを担当しました。データサイエンス学部の学内ハッカソンで一年生賞をいただきました。',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'JavaScript', 'Leaflet / OpenStreetMap'],
    links: [
      { label: 'GitHub', url: 'https://github.com/mao-sonobe/team13' },
    ],
  },
  {
    id: 'restaurant',
    title: 'レストラン pick up',
    category: 'Webアプリ',
    period: '2025.10 – 2025.11',
    team: 'チーム制作',
    role: 'マイページを担当',
    image: 'images/restaurant.jpg',
    summary: '「相性から導くレストランマッチングアプリ」です。一緒に行くメンバーを登録して、みんなに合ったお店を探せます。わたしは、プロフィールを見たり直したりできるマイページを作りました。',
    tech: ['PHP', 'PostgreSQL', 'HTML / CSS'],
    links: [],
  },
  {
    id: 'baseball',
    title: '野球カウント分析',
    category: 'データ分析',
    period: '2025.11',
    team: 'チーム制作（授業）',
    role: 'カウントごとの打者有利・投手有利の分析',
    image: 'images/baseball.jpg',
    summary: 'NPB 2025シーズンの一軍公式戦、約25万球のデータから、ボールカウントが打者と投手のどちらに有利に働くかを分析し、発表用のWebサイトにまとめました。授業「データサイエンスプログラミングII」のグループ課題です。',
    tech: ['Python', 'HTML / CSS', 'Chart.js'],
    links: [
      { label: 'サイトを見る', url: 'https://kasumi-fujishiro.github.io/' },
    ],
  },
  {
    id: 'oshimap',
    title: '推し活マップ',
    category: 'Webアプリ',
    period: '2025.12 – 2026.01',
    team: '個人開発',
    role: '企画から画面、サーバー、データベースまでひとりで制作',
    award: '未来創造プロジェクト 成果発表会 学科賞',
    image: 'images/oshimap.jpg',
    summary: '推し活をする人のための地図アプリ「oshimap」です。推しにまつわるイベントや場所を地図で探したり、近くの飲食店を見つけたりできます。ファンの行動を見える形にして、推し活をもっと楽しく、動きやすくすることを目指しました。未来創造プロジェクトの成果発表会で学科賞をいただきました。',
    tech: ['HTML / CSS', 'JavaScript', 'Leaflet', 'PHP', 'PostgreSQL', 'Yahoo!ローカルサーチAPI', 'ホットペッパーグルメAPI'],
    links: [
      { label: 'アプリを見る', url: 'https://gms.gdl.jp/~kasumi1246/oshi-map/frontend/login.html' },
    ],
  },
  {
    id: 'mobilecloset',
    title: 'MobileCloset',
    category: 'iOSアプリ',
    period: '2026.05',
    team: 'チーム開発（ゼミ）',
    role: '担当B：サーバー・データベース',
    art: 'closet',
    summary: '持っている服を登録しておき、買い物中に気になった服と、カメラの画面上で重ねて合わせてみられるiPhoneアプリです。わたしは、服のデータを保存・やりとりするサーバー（PHPのAPI）とデータベースを担当しました。',
    tech: ['Flutter', 'Dart', 'PHP', 'PostgreSQL'],
    links: [],
  },
  {
    id: 'outin',
    title: 'Outin',
    category: 'Webアプリ',
    period: '2026.07',
    team: 'チーム開発（学内ハッカソン）',
    role: '技術辞書（技術を調べられるページ）を担当',
    award: '学内ハッカソン 最優秀賞',
    art: 'outin',
    summary: '「アウトプットがインプットになる」をテーマにした、開発を学ぶためのアプリです。作りたいものを入力すると、AIが使う技術を提案してコードを作り、クイズや穴埋めを通して中身を理解していけます。わたしは、出てきた技術を調べられる「技術辞書」のページを作りました。データサイエンス学部の学内ハッカソンで最優秀賞をいただきました。',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI API'],
    links: [
      { label: 'アプリを見る', url: 'https://kanzankankaku2026-7-lrue.vercel.app/' },
      { label: 'GitHub', url: 'https://github.com/mao-sonobe/kanzankankaku2026-7' },
    ],
  },
  {
    id: 'sc2026',
    title: 'SC2026 街タネ',
    category: 'Webアプリ',
    period: '2026.09',
    team: 'チーム開発',
    role: 'UIデザインの作り直しを担当',
    image: 'images/sc2026.jpg',
    summary: '地域の特色や地理の情報と、そこで生まれた地域活性化のアイデアをためて共有するWebアプリです。成功したアイデアだけでなく、失敗した理由や実施した結果も記録し、似た地域で挑戦する人の「道しるべ」になることを目指しています。わたしは、新しいデザイン案をもとに、画面全体の見た目を作り直しました。',
    tech: ['Vue.js', 'Vite', 'PHP', 'UIデザイン'],
    links: [
      { label: 'アプリを見る', url: 'https://gms.gdl.jp/~knt416/SC2026/#/' },
      { label: 'GitHub', url: 'https://github.com/SakauchiKanato/SC2026' },
    ],
  },
  {
    id: 'postnote',
    title: '投稿ノート',
    category: 'Webアプリ',
    period: '2026.10',
    team: '個人開発 ＋ チーム（予約サイトへの組み込み）',
    role: 'Instagram自動投稿のしくみは個人で開発。予約サイトへ組み込んだあとはSNSまわりを担当',
    image: 'images/postnote.jpg',
    summary: '洋菓子店のスタッフが、Instagramに載せる画像（営業中・新作・駐車場・営業カレンダー）を、えらぶだけで作れるWebアプリです。データはGoogleスプレッドシート1つにまとめ、Google Apps Scriptで毎月の営業カレンダーや新作のお知らせを自動で投稿します。お店の人が迷わず使えること、管理する人が手間なく続けられることを一番に考えて作りました。のちに、グループで作っているお店の予約サイトに組み込みました。',
    tech: ['JavaScript', 'Google Apps Script', 'Googleスプレッドシート', 'Instagram Graph API', 'Next.js', 'Cloudflare Workers'],
    links: [
      { label: 'アプリを見る', url: 'https://kasumi-fujishiro.github.io/porte-post-note/' },
      { label: 'GitHub', url: 'https://github.com/kasumi-fujishiro/porte-post-note' },
    ],
  },
];

// 画像がない作品の飾り
const arts = {
  outin: '<img class="art-icon" src="images/outin-icon.png" alt="">',
  closet: `<svg class="art-svg" viewBox="0 0 120 100" fill="none" stroke="#1E2340" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M60 30c0-6 4-9 8-9s8 3 8 8c0 6-8 8-16 14L12 74c-4 3-2 8 3 8h90c5 0 7-5 3-8L60 43"/>
    <path d="M34 82l-6 12M86 82l6 12" stroke="#A88B5A"/>
    <path d="M38 64h44" stroke="#C9B58C" stroke-width="1.6"/>
  </svg>`,
};

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const no = (i) => 'No. ' + String(i + 1).padStart(2, '0');
const picture = (w) => w.image
  ? `<img src="${w.image}" alt="${esc(w.title)}の画面" loading="lazy">`
  : arts[w.art];

const list = document.getElementById('work-list');
list.innerHTML = works.map((w, i) => `
  <button type="button" class="card reveal" id="work-${w.id}" data-index="${i}" aria-haspopup="dialog">
    <div class="frame"><div class="img">${picture(w)}</div></div>
    <span class="no">${no(i)}</span>
    <span class="title">${esc(w.title)}</span>
    <span class="meta">${esc(w.category)} · ${esc(w.period)}</span>
    <span class="role">${esc(w.role)}</span>
  </button>`).join('');

const dialog = document.getElementById('work-dialog');
const body = dialog.querySelector('.dlg-body');

function openWork(i) {
  const w = works[i];
  const shot = w.image ? `<img class="dlg-shot" src="${w.image}" alt="${esc(w.title)}の画面">` : '';
  const links = w.links.length
    ? `<div class="dlg-links">${w.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')}</div>`
    : '';
  body.innerHTML = `
    <span class="dlg-no">${no(i)}</span>
    <h3 id="dlg-title">${esc(w.title)}</h3>
    ${shot}
    <p>${esc(w.summary)}</p>
    <dl class="dlg-facts">
      <dt>時期</dt><dd>${esc(w.period)}</dd>
      <dt>体制</dt><dd>${esc(w.team)}</dd>
      <dt>担当</dt><dd>${esc(w.role)}</dd>
      ${w.award ? `<dt>受賞</dt><dd>${esc(w.award)}</dd>` : ''}
      <dt>技術</dt><dd>${w.tech.map(esc).join(' / ')}</dd>
    </dl>
    ${links}`;
  dialog.showModal();
  body.scrollTop = 0;
}

// #work-<id> の作品までスクロールして、詳しい説明を開く
function showWorkFromHash(hash) {
  const card = hash && hash.startsWith('#work-') && document.getElementById(hash.slice(1));
  if (!card) return false;
  card.scrollIntoView({ block: 'center' });
  openWork(Number(card.dataset.index));
  return true;
}

list.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (card) openWork(Number(card.dataset.index));
});
document.querySelectorAll('.award-link').forEach((a) => {
  a.addEventListener('click', (e) => {
    if (showWorkFromHash(a.getAttribute('href'))) e.preventDefault();
  });
});
showWorkFromHash(location.hash);

// メールアドレスを押したらコピーする
const mail = document.querySelector('.mail');
const mailHint = document.getElementById('mail-hint');
let mailTimer;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // clipboard が使えないブラウザ向けの予備
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    ta.remove();
    return ok;
  }
}

mail.addEventListener('click', async () => {
  const ok = await copyText(mail.dataset.copy);
  mail.classList.toggle('copied', ok);
  mailHint.textContent = ok ? 'コピーしました' : 'コピーできませんでした。お手数ですが手で選んでコピーしてください';
  clearTimeout(mailTimer);
  mailTimer = setTimeout(() => {
    mail.classList.remove('copied');
    mailHint.textContent = '押すとアドレスをコピーできます';
  }, 2500);
});

dialog.querySelector('.dlg-close').addEventListener('click', () => dialog.close());
// 枠の外（暗いところ）を押したら閉じる
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});
