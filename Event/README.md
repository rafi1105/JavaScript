addEventListener
1. click {
 clickBtn.addEventListener('click',()=>{
              clickResult.textContent= ('working')
            clickResult.style.cssText = "color: red; font-weight: bold; background-color: yellow;";
            })
}
2. mouseenter/ mousleave /mousemove{
    mouseenter -> for mouse enter a block then it will work
    mouseleave -> for mouse leave the block then it will work 
    mousemove ->  work with mouse movement [
          box.addEventListener('mousemove', (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
            box.style.background = `radial-gradient(circle at ${x}px ${y}px, gray 6px, blue 10px, transparent 20px )`;
            
        });
        box.addEventListener('mouseleave', () => {
            box.style.background = "rgb(255, 255, 200)";
        });
    ]
}