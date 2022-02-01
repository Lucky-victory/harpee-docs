const modelLinksContainer=document.getElementById('model_links');
const sqlerLinksContainer=document.getElementById('sqler_links');
const loggerLinksContainer=document.getElementById('logger_links');


async function fetchAll(urls=[]){
   try{
      
   
   let response;
   const responseObj={};
   const arr=[]
   for(let url of urls){
      
  response=await Promise.all([fetch(url)]);
  arr.push(await response[0].json())
   }
 responseObj['model']= arr[0];
 responseObj['logger']= arr[1];
 responseObj['sqler']= arr[2];
   renderNavLinks(responseObj);
   }
   catch(err){
      console.log(err)
   }
}
fetchAll(['/jsonfiles/model.json','/jsonfiles/logger.json','/jsonfiles/sqler.json']);

function renderNavLinks(obj){
   modelLinksContainer.innerHTML='';
   sqlerLinksContainer.innerHTML='';
   loggerLinksContainer.innerHTML='';
   let mhtml='';
   let shtml='';
   let lhtml='';
   obj.model.map((mod)=>{
      return (
         mhtml+=`
         <li>
   <a href='/model#${mod.id}'>${mod.id}</a>
         </li>
         
         `
         )
   });
   modelLinksContainer.insertAdjacentHTML('beforeend',mhtml);
   obj.sqler.map((mod)=>{
      return (
         shtml+=`
         <li>
   <a href='/sqler#${mod.id}'>${mod.id}</a>
         </li>
         
         `
         )
   });
   sqlerLinksContainer.insertAdjacentHTML('beforeend',shtml);
   obj.logger.map((mod)=>{
      return (
         lhtml+=`
         <li>
   <a href='/logger#${mod.id}'>${mod.id}</a>
         </li>
         
         `
         )
   });
   loggerLinksContainer.insertAdjacentHTML('beforeend',lhtml);
}
