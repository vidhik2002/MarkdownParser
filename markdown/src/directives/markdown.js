const rules = [
  //header rules
  [/#{6}\s?([^\n]+)/g, "<h6>$1</h6>"],
  [/#{5}\s?([^\n]+)/g, "<h5>$1</h5>"],
  [/#{4}\s?([^\n]+)/g, "<h4>$1</h4>"],
  [/#{3}\s?([^\n]+)/g, "<h3>$1</h3>"],
  [/#{2}\s?([^\n]+)/g, "<h2>$1</h2>"],
  [/#{1}\s?([^\n]+)/g, "<h1>$1</h1>"],
  //bold, italics and paragragh rules
  [/\*\*\s?([^\n]+)\*\*/g, "<b>$1</b>"],
  [/\*\s?([^\n]+)\*/g, "<i>$1</i>"],
  [/__([^_]+)__/g, "<b>$1</b>"],
  [/_([^_]+)_/g, "<i>$1</i>"],
  [/([^\n]+\n)/g, "<p>$1</p>"],
  //links
  [/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>'],
  //highlights
  [/`\s?([^`]+)\s?`/, "<code>$1</code>"],
];
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