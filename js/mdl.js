const modelDocsContainer=document.getElementById('model_docs');
const modelLinksContainer=document.getElementById('model_links');

const fetchDocs= async (url)=>{
   try{
    const response=  await fetch(url);
    const data = await response.json();
    renderDocs(data);
    renderLinks(data)
    return data;
   }
   catch(err){
      return err
   }
}
fetchDocs('../jsonfiles/model.json');
function renderDocs(docs){
   if(!docs){
      modelDocsContainer.innerText='Error fetching docs...';
      return
   }
   let html='';
   modelDocsContainer.innerHTML='';
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
 modelDocsContainer.insertAdjacentHTML('beforeend',html);

    document.querySelectorAll("code").forEach((el) => {
 
       hljs.highlightElement(el);
    })
 
}
function renderLinks(docs) {
   let html = '';
   modelLinksContainer.innerHTML='';
   docs.map((doc) => {
      return (
         html += `
         <li>
   <a href='#${doc.id}'>${doc.id}</a>
         </li>
         
         `
      )
   });
   modelLinksContainer.insertAdjacentHTML('beforeend', html);

}