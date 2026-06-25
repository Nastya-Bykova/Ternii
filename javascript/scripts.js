/* const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
 */

document.addEventListener('DOMContentLoaded', () => {
    
   
    const aboutButton = document.getElementById('about-link');

    
    if (aboutButton) {
       
        aboutButton.addEventListener('click', (event) => {
          
            event.preventDefault(); 
            
            
            window.location.href = 'about.html';
        });
    }
    
});

