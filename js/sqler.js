const modelDocsContainer=document.getElementById('sqler_docs');

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
fetchDocs('../jsonfiles/sqler.json');
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
    <pre>
    <code>${doc.code ? doc.code.replace(/;/g,'\n\r') : ''}
    </code>
    </pre>
       `
       )
 });
 modelDocsContainer.insertAdjacentHTML('beforeend',html);

    document.querySelectorAll("pre code").forEach((el) => {
 
       hljs.highlightElement(el);
    })
 
}