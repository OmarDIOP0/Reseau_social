const menuItems=document.querySelectorAll('menu-item');
const ChangeActiveItem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active')
    })
}
menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        ChangeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notification-popup'),
            style.display='none';
        }
        else{
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('#notifications . notification-count').style.display='none'  
        }
    })
})