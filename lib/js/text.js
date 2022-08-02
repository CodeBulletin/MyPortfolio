var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const span = document.getElementById('specialization');
const sleep = ms => new Promise(r => setTimeout(r, ms));
var sps = ['Full-Stack Development', 'Machine Learning', 'Data Science', 'Deep Learning', 'Software Devolpment'];
const pointer = "<span>|</span>";
function SpanLoad() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(1000);
        var index = 0;
        while (true) {
            var current = sps[index];
            for (var i = 0; i < current.length; i++) {
                span.innerHTML = current.slice(0, i + 1) + pointer;
                yield sleep(100);
            }
            yield sleep(600);
            for (var i = current.length - 1; i >= -1; i--) {
                span.innerHTML = current.slice(0, i + 1) + pointer;
                yield sleep(50);
            }
            yield sleep(300);
            index += 1;
            if (index >= sps.length) {
                index = 0;
            }
        }
    });
}
