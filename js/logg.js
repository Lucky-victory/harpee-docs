const loggerDocsContainer=document.getElementById('logger_docs');
const loggerLinksContainer=document.getElementById('logger_links');

const fetchDocs= async (url)=>{
   try{
    const response=  await fetch(url);
    const data = await response.json();
    renderDocs(data);
    renderLinks(data);
    return data;
   }
   catch(err){
      return err
   }
}
fetchDocs('../jsonfiles/logger.json');
function renderDocs(docs){
   if(!docs){
      loggerDocsContainer.innerText='Error fetching docs...';
      return
   }
   let html='';
   loggerDocsContainer.innerHTML='';
 docs.map((doc)=>{
    return (
       html+=`
       <h2 id='${doc.id}'>
       ${doc.title}
       </h2>
              ${doc.desc ? '<p>'+doc.desc+'</p>':''}

    <pre>
    <code>${doc.code ? doc.code.replace(/;/g,'\n\r').replace(/__/g,'\n') : ''}
    </code>
    </pre>
       `
       )
 });
 loggerDocsContainer.insertAdjacentHTML('beforeend',html);

    document.querySelectorAll("code").forEach((el) => {
 
       hljs.highlightElement(el);
    })
 
}
function renderLinks(docs) {
   let html = '';
   loggerLinksContainer.innerHTML = '';
   docs.map((doc) => {
      return (
         html += `
         <li>
   <a href='#${doc.id}'>${doc.id}</a>
         </li>
         
         `
      )
   });
   loggerLinksContainer.insertAdjacentHTML('beforeend', html);

}