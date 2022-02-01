const modelDocsContainer = document.getElementById('sqler_docs');
const sqlerLinksContainer=document.getElementById('sqler_links');

const fetchDocs = async (url) => {
   try {
      const response = await fetch(url);
      const data = await response.json();
      renderDocs(data);
      renderLinks(data)
      return data;
   }
   catch (err) {
      return err
   }
}
fetchDocs('../jsonfiles/sqler.json');

function renderDocs(docs) {
   if (!docs) {
      modelDocsContainer.innerText = 'Error fetching docs...';
      return
   }
   let html = '';
   modelDocsContainer.innerHTML = '';
docs.map((doc) => {
      return (
         html+=`
       <h2 id='${doc.id}'>
       ${doc.title}</h2>
    <pre>
    <code>${doc.code ? doc.code.split(';').join("\n\r") : ''}
    </code>
    </pre>
    `
      ) });
   
   modelDocsContainer.insertAdjacentHTML('beforeend', html);

   document.querySelectorAll("pre code").forEach((el) => {

      hljs.highlightElement(el);
   })

}

function renderLinks(docs){
   let html='';
   sqlerLinksContainer.innerHTML='';
      docs.map((doc)=>{
      return (
         html+=`
         <li>
   <a href='#${doc.id}'>${doc.id}</a>
         </li>
         
         `
         )
   });
   sqlerLinksContainer.insertAdjacentHTML('beforeend',html);

}