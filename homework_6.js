class Options{
    constructor(height, width, bg, fontSize, textAlign, text=''){
        this.height    = height;
        this.width     = width;
        this.bg        = bg;
        this.fontSize  = fontSize;
        this.textAlign = textAlign;
        this.text      = text;
    }
    createDiv(){
        let div    = document.createElement('div'),
            script = document.querySelector('script');
        document.body.insertBefore(div, script);
        div.textContent   = this.text;
        div.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;
            text-align: ${this.textAlign};
        `;
    }
}

let new_div = new Options(100, 100, 'blue', 12, 'center', 'hello world');
new_div.createDiv();