const modelLinksContainer=document.getElementById('model_links');


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
fetchAll(['./jsonfiles/model.json','./jsonfiles/logger.json','./jsonfiles/sqler.json']);

function renderNavLinks(obj){
   modelLinksContainer.innerHTML='';
   let mhtml='';
   obj.model.map((mod)=>{
      return (
         mhtml+=`
         <li>
   <a href='/model.html#${mod.id}'>${mod.id}</a>
         </li>
         
         `
         )
   });
   modelLinksContainer.insertAdjacentHTML('beforeend',mhtml);
}
