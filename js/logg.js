const modelDocsContainer=document.getElementById('logger_docs');

const fetchDocs= async (url)=>{
   try{
    const response=  await fetch(url);
    const data = await response.json();
    renderDocs(data)
    return data;
   }
   catch(err){
      return err
   }
}
fetchDocs('../jsonfiles/logger.json');
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