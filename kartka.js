import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";


kaboom();

loadSprite("kartka","choinka.png")
loadSprite("ludzik","ludzik.png")

loadSound("muzyka","Anio.mp3")


add([
    sprite("kartka")
])

const ludzik = add([
    sprite("ludzik"),
    pos(60,100)
])


let wprawo = true

ludzik.onUpdate (() => { 

    if(wprawo && ludzik.pos.x < 550) ludzik.pos.x += 1

    else if(!wprawo && ludzik.pos.x > 50) ludzik.pos.x -= 1

    else wprawo ^= true
})

onMouseRelease(()=>play("muzyka"))