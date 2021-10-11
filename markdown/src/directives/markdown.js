const rules = [
    [/#{6}\s?([^\n]+)/g, '<h6>$1</h6>']
]
export default {
    bind(el){
        // console.log('el', el.textContent);
        let html = el.textContent;
        rules.forEach(([rule, template]) => {
            html= html.replace(rule, template)
        })
        html = html.replace( );
        el.innerHTML = html;
    }
}