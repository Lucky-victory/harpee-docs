const sqlerDocsContainer=document.getElementById('sqler_docs');

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
fetchDocs('./jsonfiles/sqler.json');
function renderDocs(docs){
   if(!docs){
      sqlerDocsContainer.innerText='Error fetching docs...';
      return
   }
   let html='';
   sqlerDocsContainer.innerHTML='';
 docs.map((doc)=>{
    return (
       html+=`
       <h2 id='${doc.id}'>
       ${doc.title}
       </h2>
    <pre>
    <code>${doc.code.split(';').join('\n\r')}
    </code>
    </pre>
       `
       )
 });
 sqlerDocsContainer.insertAdjacentHTML('beforeend',html);

    document.querySelectorAll("pre code").forEach((el) => {
 
       hljs.highlightElement(el);
    })
 
}