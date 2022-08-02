const span = <HTMLSpanElement>document.getElementById('specialization');

const sleep = ms => new Promise(r => setTimeout(r, ms));

var sps  = ['Full-Stack Development', 'Machine Learning', 'Data Science', 'Deep Learning', 'Software Devolpment']

const pointer = "<span>|</span>"

async function SpanLoad() {
    await sleep(1000);

    var index = 0;
    while (true) {
        var current = sps[index];

        for(var i = 0; i < current.length; i++) {
            span.innerHTML = current.slice(0, i+1) + pointer;
            await sleep(100);
        }

        await sleep(600);

        for(var i = current.length-1; i >= -1; i--) {
            span.innerHTML = current.slice(0, i+1) + pointer;
            await sleep(50);
        }

        await sleep(300);

        index += 1;
        if (index >= sps.length) {
            index = 0;
        }
    }
}