/**
 * Session-only typewriter: first visit per tab animates; later loads show content immediately.
 * Keys: hb_tw_home, hb_tw_proj_v2 (projects)
 */
(function () {
  function sleep(ms) {
    return new Promise(function (r) {
      setTimeout(r, ms);
    });
  }

  var CHAR_MS = 10;
  var LINE_PAUSE = 140;

  async function typeTextNode(el, text) {
    for (var i = 0; i < text.length; i++) {
      el.textContent += text[i];
      await sleep(CHAR_MS);
    }
  }

  async function appendDataTyping(textNode, text) {
    for (var i = 0; i < text.length; i++) {
      textNode.appendData(text.charAt(i));
      await sleep(CHAR_MS);
    }
  }

  window.runHomeTypewriter = async function (root) {
    root.innerHTML = '';

    var p1 = document.createElement('p');
    root.appendChild(p1);
    await typeTextNode(p1, 'i am ');
    var nameSpan = document.createElement('span');
    nameSpan.className = 'name';
    p1.appendChild(nameSpan);
    await typeTextNode(nameSpan, 'HUNTER BROWN.');
    await sleep(LINE_PAUSE);

    var p2 = document.createElement('p');
    root.appendChild(p2);
    await typeTextNode(
      p2,
      'i study business economics at UC San Diego and spend most of my time thinking about startups and technology.'
    );
    await sleep(LINE_PAUSE);

    var p3 = document.createElement('p');
    root.appendChild(p3);
    await typeTextNode(
      p3,
      "i've driven growth for a YC-backed startup and founded a six figure landscaping business in high school."
    );
    await sleep(LINE_PAUSE);

    var p4 = document.createElement('p');
    root.appendChild(p4);
    await typeTextNode(p4, 'reach out at ');
    var mailA = document.createElement('a');
    mailA.href = 'mailto:hjbrown@ucsd.edu';
    p4.appendChild(mailA);
    await typeTextNode(mailA, 'hjbrown@ucsd.edu');
    var tailMail = document.createTextNode('');
    p4.appendChild(tailMail);
    await appendDataTyping(tailMail, '; always down to connect.');
    await sleep(LINE_PAUSE);

    var nav = document.createElement('nav');
    nav.className = 'nav';
    root.appendChild(nav);

    var items = [
      { href: '/projects', text: '[ projects ]', rel: null, target: null },
      {
        href: 'https://linkedin.com/in/hunter-brown00',
        text: '[ linkedin ]',
        rel: 'noopener noreferrer',
        target: '_blank',
      },
      { href: '/resume', text: '[ resume ]', rel: null, target: null },
    ];

    for (var j = 0; j < items.length; j++) {
      var na = document.createElement('a');
      na.href = items[j].href;
      if (items[j].target) na.target = items[j].target;
      if (items[j].rel) na.rel = items[j].rel;
      nav.appendChild(na);
      await typeTextNode(na, items[j].text);
      if (j < items.length - 1) await sleep(50);
    }
  };

  window.runProjectsTypewriter = async function (root) {
    root.innerHTML = '';

    var header = document.createElement('header');
    header.className = 'projects-top';

    var labelP = document.createElement('p');
    labelP.className = 'projects-label';
    header.appendChild(labelP);

    var navWrap = document.createElement('nav');
    navWrap.className = 'projects-nav';

    var githubA = document.createElement('a');
    githubA.href = 'https://github.com/hunterjabrown';
    githubA.target = '_blank';
    githubA.rel = 'noopener noreferrer';
    githubA.className = 'home-link';
    navWrap.appendChild(githubA);

    var homeA = document.createElement('a');
    homeA.href = '/';
    homeA.className = 'home-link';
    navWrap.appendChild(homeA);

    header.appendChild(navWrap);
    root.appendChild(header);

    await typeTextNode(labelP, 'projects');
    await typeTextNode(githubA, '[ github ]');
    await sleep(50);
    await typeTextNode(homeA, '[ home ]');

    var block1 = document.createElement('div');
    block1.className = 'project-block';
    var ynp = document.createElement('p');
    block1.appendChild(ynp);
    var ynName = document.createElement('span');
    ynName.className = 'name';
    ynp.appendChild(ynName);
    root.appendChild(block1);

    await typeTextNode(ynName, 'YN Capital');
    var ynMid = document.createTextNode('');
    ynp.appendChild(ynMid);
    await appendDataTyping(
      ynMid,
      ' — student-led angel syndicate for AI startups; co-built the site, CRM, and investor flow. '
    );
    var siteA = document.createElement('a');
    siteA.href = 'https://yncapital.co';
    siteA.target = '_blank';
    siteA.rel = 'noopener noreferrer';
    siteA.className = 'site';
    ynp.appendChild(siteA);
    await typeTextNode(siteA, '[ yncapital.co ]');

    var block2 = document.createElement('div');
    block2.className = 'project-block';
    var bp = document.createElement('p');
    block2.appendChild(bp);
    root.appendChild(block2);

    var duName = document.createElement('span');
    duName.className = 'name';
    bp.appendChild(duName);
    await typeTextNode(duName, 'DrawnUp');
    var duMid = document.createTextNode('');
    bp.appendChild(duMid);
    await appendDataTyping(
      duMid,
      ' — turns anything you imagine into a buildable plan; now scaling and marketing it. '
    );
    var duA = document.createElement('a');
    duA.href = 'https://drawnup.io';
    duA.target = '_blank';
    duA.rel = 'noopener noreferrer';
    duA.className = 'site';
    bp.appendChild(duA);
    await typeTextNode(duA, '[ drawnup.io ]');

    var block3 = document.createElement('div');
    block3.className = 'project-block';
    var bp3 = document.createElement('p');
    block3.appendChild(bp3);
    root.appendChild(block3);
    await typeTextNode(bp3, 'more to come soon.');
    var cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    bp3.appendChild(cursor);

    var chessSec = document.createElement('div');
    chessSec.className = 'chess-section';
    chessSec.id = 'chess-section';

    var chessBtn = document.createElement('button');
    chessBtn.type = 'button';
    chessBtn.className = 'chess-toggle';
    chessBtn.id = 'chess-toggle';
    chessBtn.setAttribute('aria-expanded', 'false');
    chessBtn.setAttribute('aria-controls', 'chess-panel');
    var btnText = document.createElement('span');
    chessBtn.appendChild(btnText);
    var knight = document.createElement('span');
    knight.className = 'chess-knight';
    knight.setAttribute('aria-hidden', 'true');
    knight.textContent = '♘';
    chessBtn.appendChild(knight);
    chessSec.appendChild(chessBtn);

    var panel = document.createElement('div');
    panel.className = 'chess-panel';
    panel.id = 'chess-panel';
    var board = document.createElement('div');
    board.id = 'chess-board';
    panel.appendChild(board);
    var statusP = document.createElement('p');
    statusP.id = 'chess-status';
    panel.appendChild(statusP);
    var ng = document.createElement('a');
    ng.href = '#';
    ng.id = 'new-game-btn';
    panel.appendChild(ng);
    chessSec.appendChild(panel);
    root.appendChild(chessSec);

    await typeTextNode(btnText, 'play me in chess ?');
    await typeTextNode(ng, '[ new game ]');
  };
})();
