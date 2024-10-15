//your JS code here. If required.
document.getElementById("Change_button").addEventListener("click",()=>{
    let blockId=document.getElementById("block_id").value;
    let colorId=document.getElementById("colour_id").value;
    
    let gridItem=document.querySelectorAll(".grid-item");

    if(blockId>=1 || blockId<=9){
        gridItem.forEach(item=>{  
            item.style.backgroundColor="transparent";
        })
        let selectedBlock=document.getElementById(blockId);
        selectedBlock.style.backgroundColor=colorId;
        document.getElementById("block_id").value=""
        document.getElementById("color_id").value=""
    }
    else{
        alert('Please enter a valid Block ID (1-9).');
    }

      
})
document.getElementById("reset_button").addEventListener("click",()=>{
    let gridItem=document.querySelectorAll(".grid-item");
    gridItem.forEach(item=>{
        item.style.backgroundColor="transparent";
    })
})