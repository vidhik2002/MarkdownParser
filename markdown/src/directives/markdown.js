export default {
    bind(el){
        // console.log('el', el.textContent);
        let html = el.textContent;
        html = html.replace(/#{6}\s?([^\n]+)\n/g, 'replaced' );
        el.innerHTML = html;
    }
}