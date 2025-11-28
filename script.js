const text = document.getElementById('text')
const character = document.getElementById('cha')
const words = document.getElementById('word')
const btn = document.getElementById('button')


btn.addEventListener('click',()=>{
  const text_field = text.value

  const cha_count = text_field.length
  character.textContent = cha_count

  //trim use for remove the space from the start and end
  const word_count = text_field.trim().split(' ')
  words.textContent = word_count.length
})
