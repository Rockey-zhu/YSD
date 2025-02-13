class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

//继承的函数可以控制几秒显示一次，默认为1000

class controlClock extends Clock {
    constructor(opetion) {
        super(opetion);
        let { timers = 1000 } = opetion;
        this.timers = timers
    }

    start(){
        this.render();
        this.timer = setInterval(()=>this.render(),this.timers)
    }
}

let A = new controlClock({template:'h:m:s',timers:2000})
A.start();