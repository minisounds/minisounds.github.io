(function() {
    const target = document.querySelector('.typing-text');
    if (!target) return;
    const phrase = "Hi, I'm Jason!";
    let i = 0;
    function reveal() {
        document.querySelectorAll('.reveal-on-typed').forEach(function(el) {
            el.classList.add('revealed');
        });
    }
    function tick() {
        if (i <= phrase.length) {
            target.textContent = phrase.slice(0, i);
            const justTyped = phrase[i - 1];
            i++;
            const delay = justTyped === ',' ? 450 : 90;
            setTimeout(tick, delay);
        } else {
            reveal();
        }
    }
    tick();
})();
